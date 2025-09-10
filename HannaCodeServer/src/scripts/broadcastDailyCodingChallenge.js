/* eslint-disable no-console */
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const mongoose = require("mongoose");
const logger = require("../utils/logger");
const emailService = require("../services/emailService");

// Adjust this import if your model path/name differs
const User = require("../models/User");

// Simple sleep helper
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

async function main() {
  const DRY_RUN = process.argv.includes("--dry-run");
  const CONCURRENCY = parseInt(process.env.BROADCAST_CONCURRENCY || "10", 10);
  const PAUSE_MS = parseInt(process.env.BROADCAST_PAUSE_MS || "150", 10);

  if (!process.env.MONGO_URI) {
    console.error("MONGO_URI is missing in environment.");
    process.exit(1);
  }

  console.log("Connecting to database...");
  await mongoose.connect(process.env.MONGO_URI);

  // Filter: all users with a valid email. Add more filters (e.g., verified, opted-in) if available.
  const query = { email: { $exists: true, $ne: "" } };

  const total = await User.countDocuments(query);
  console.log(`Found ${total} users to notify${DRY_RUN ? " (dry-run)" : ""}.`);

  const cursor = User.find(query).cursor();

  let inFlight = [];
  let processed = 0;
  let sent = 0;
  let failed = 0;

  const enqueue = async (user) => {
    const task = (async () => {
      try {
        if (DRY_RUN) {
          logger.info(`DRY-RUN: would send to ${user.email}`);
        } else {
          await emailService.sendDailyChallengeAnnouncement({
            name: user.name,
            email: user.email,
          });
          sent += 1;
          logger.info(`Sent to ${user.email}`);
          // brief pause to ease provider rate limits
          if (PAUSE_MS > 0) await sleep(PAUSE_MS);
        }
      } catch (err) {
        failed += 1;
        logger.error(`Failed for ${user.email}: ${err.message}`);
      } finally {
        processed += 1;
      }
    })();

    inFlight.push(task);

    if (inFlight.length >= CONCURRENCY) {
      await Promise.race(inFlight);
      // Remove settled promises
      inFlight = inFlight.filter((p) => p && typeof p.then === "function");
    }
  };

  for (let user = await cursor.next(); user != null; user = await cursor.next()) {
    await enqueue(user);
  }

  // Drain remaining
  await Promise.allSettled(inFlight);

  console.log(`Done. Processed: ${processed}, Sent: ${sent}, Failed: ${failed}`);

  await mongoose.disconnect();
  process.exit(failed > 0 ? 1 : 0);
}

main().catch(async (err) => {
  console.error("Broadcast script error:", err);
  try { await mongoose.disconnect(); } catch {}
  process.exit(1);
});