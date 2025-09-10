const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

// Prefer env var; fallback to sibling HannaCode/public/challenges
const ROOT =
  process.env.CHALLENGES_DIR ||
  path.resolve(__dirname, "../../..", "HannaCode/public/challenges");

function safeJoin(root, filename) {
  const p = path.resolve(root, filename);
  const rootAbs = path.resolve(root);
  if (!p.startsWith(rootAbs)) throw new Error("Path traversal");
  return p;
}

async function readJson(filePath) {
  if (!fs.existsSync(filePath)) return null;
  const txt = await fsp.readFile(filePath, "utf8");
  try { return JSON.parse(txt); } catch { return null; }
}

exports.listChallenges = async (_req, res) => {
  try {
    const data = await readJson(safeJoin(ROOT, "index.json"));
    return res.json(Array.isArray(data) ? data : []);
  } catch {
    return res.status(500).json({ message: "Failed to read index.json" });
  }
};

exports.getToday = async (_req, res) => {
  try {
    const t = await readJson(safeJoin(ROOT, "today.json"));
    if (t && typeof t.id === "string" && t.id) return res.json({ id: t.id });

    // Fallback by matching today’s date in index.json
    const idx = await readJson(safeJoin(ROOT, "index.json"));
    const todayStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    if (Array.isArray(idx)) {
      const match = idx.find((c) => c.date === todayStr);
      if (match?.id) return res.json({ id: match.id });
    }
    return res.status(404).json({ message: "today.json missing or invalid" });
  } catch {
    return res.status(404).json({ message: "Not found" });
  }
};


exports.getChallengeById = async (req, res) => {
  try {
    const id = String(req.params.id || "");
    if (!/^[0-9]{4}-[0-9]{2}-[0-9]{2}-[a-z0-9-]+$/i.test(id)) {
      return res.status(400).json({ message: "Invalid id" });
    }
    const data = await readJson(safeJoin(ROOT, `${id}.json`));
    if (!data) return res.status(404).json({ message: "Challenge not found" });
    return res.json(data);
  } catch {
    return res.status(404).json({ message: "Challenge not found" });
  }
};