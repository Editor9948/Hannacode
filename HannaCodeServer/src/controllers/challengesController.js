// ...existing code...
const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const ROOT =
  process.env.CHALLENGES_DIR ||
  path.resolve(__dirname, "../../..", "HannaCode/public/data/challenges");

function safeJoin(root, filename) {
  const p = path.resolve(root, filename);
  const rootAbs = path.resolve(root);
  if (!p.startsWith(rootAbs)) throw new Error("Path traversal");
  return p;
}

async function readJson(filePath) {
  if (!filePath) return null;
  if (!fs.existsSync(filePath)) return null;
  const txt = await fsp.readFile(filePath, "utf8");
  try { return JSON.parse(txt); } catch { return null; }
}

async function readIndex() {
  const data = await readJson(safeJoin(ROOT, "index.json"));
  return Array.isArray(data) ? data : [];
}

async function readItemById(id) {
  const file = safeJoin(ROOT, path.join("items", `${id}.json`));
  return readJson(file);
}

function getLocalDateStr(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

// GET /api/v1/challenges -> flatten meta list
exports.listChallenges = async (_req, res) => {
  try {
    const groups = await readIndex();
    const items = [];
    for (const g of groups) {
      const date = g?.date;
      for (const ch of (g?.challenges || [])) {
        items.push({ ...ch, date: ch.date || date });
      }
    }
    return res.json(items);
  } catch (e) {
    return res.status(500).json({ success: false, message: "Failed to load challenges index" });
  }
};

// GET /api/v1/challenges/today -> return today's 3, enriched from items/<id>.json when available
exports.getToday = async (_req, res) => {
  try {
    const today = getLocalDateStr();
    const groups = await readIndex();
    const match = groups.find(g => String(g?.date) === today);
    if (!match || !Array.isArray(match.challenges) || match.challenges.length === 0) {
      return res.status(404).json({ success: false, message: "No challenges for today" });
    }
    const enriched = await Promise.all(
      match.challenges.map(async (meta) => {
        const full = await readItemById(String(meta.id));
        return full ? { ...meta, ...full } : meta;
      })
    );
    return res.json({ date: match.date, challenges: enriched });
  } catch (e) {
    return res.status(500).json({ success: false, message: "Failed to load today's challenges" });
  }
};

// GET /api/v1/challenges/:id -> return full item if exists, else meta
exports.getChallengeById = async (req, res) => {
  try {
    const id = String(req.params.id || "");
    const full = await readItemById(id);
    if (full) return res.json(full);

    const groups = await readIndex();
    for (const g of groups) {
      const found = (g?.challenges || []).find(ch => String(ch.id) === id);
      if (found) return res.json(found);
    }
    return res.status(404).json({ success: false, message: "Challenge not found" });
  } catch (e) {
    return res.status(500).json({ success: false, message: "Failed to load challenge" });
  }
};
