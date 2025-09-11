// Normalize API base
const RAW = (process.env.REACT_APP_API_URL || "").trim();
const API_BASE = RAW.replace(/\/+$/, "").replace(/\/api(\/v\d+)?$/i, ""); // http://localhost:5001
const API_V1 = API_BASE ? `${API_BASE}/api/v1` : "";
const STATIC_BASE = (process.env.PUBLIC_URL || "").replace(/\/$/, "");

const DATA_BASE = `${STATIC_BASE}/data/challenges`;
// ...existing code...

// Simple cache
const cache = new Map();
let inflight = new Map();
function once(key, fn) {
  if (cache.has(key)) return Promise.resolve(cache.get(key));
  if (inflight.has(key)) return inflight.get(key);
  const p = Promise.resolve().then(fn).then((v) => { cache.set(key, v); return v; }).finally(() => inflight.delete(key));
  inflight.set(key, p);
  return p;
}

function authHeaders() {
  const h = { "Content-Type": "application/json" };
  const token = localStorage.getItem("token");
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

function noStore() {
  return { cache: "no-store", credentials: "include" };
}

// Optional list (admin/menus)
export function listChallenges() {
  return once("listChallenges", async () => {
    if (API_V1) {
      try {
        const r = await fetch(`${API_V1}/challenges`, { ...noStore(), headers: authHeaders() });
        if (r.ok) {
          const data = await r.json();
          return Array.isArray(data) ? data : [];
        }
      } catch {}
    }
    // fallback to static index.json
    try {
      const r = await fetch(`${DATA_BASE}/index.json`, { cache: "no-store" });
      if (r.ok) {
        const data = await r.json();
        return Array.isArray(data) ? data : [];
      }
    } catch {}
    return [];
  });
}
function getLocalDateStr(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function normalizeToday(data) {
  // Accept:
  // - { date, challenges: [...] }
  // - single object (legacy)
  // - array of items
  if (Array.isArray(data)) return { date: null, challenges: data };
  if (data && Array.isArray(data.challenges)) {
    return { date: data.date || null, challenges: data.challenges };
  }
  if (data && typeof data === "object") {
    return { date: data.date || null, challenges: [data] };
  }
  return { date: null, challenges: [] };
}

export function getToday() {
  return once("today", async () => {
    // Prefer API (you’re getting 200 here)
    if (API_V1) {
      try {
        const r = await fetch(`${API_V1}/challenges/today`, { cache: "no-store", headers: authHeaders() });
        if (r.ok) {
          const raw = await r.json();
          const norm = normalizeToday(raw);
          if (norm.challenges.length) return norm;
        }
      } catch {}
    }

    // Fallback: derive from static index.json if needed
    try {
      const r = await fetch(`${DATA_BASE}/index.json`, { cache: "no-store" });
      if (r.ok) {
        const groups = await r.json();
        const todayStr = getLocalDateStr();
        const match = Array.isArray(groups) ? groups.find(g => String(g?.date) === todayStr) : null;
        if (match && Array.isArray(match.challenges)) {
          return { date: match.date, challenges: match.challenges };
        }
      }
    } catch {}

    return { date: null, challenges: [] };
  });
}
export function getChallenge(id) {
  return once(`challenge:${id}`, async () => {
    // API first
    if (API_V1) {
      try {
        const r = await fetch(`${API_V1}/challenges/${encodeURIComponent(id)}`, { ...noStore(), headers: authHeaders() });
        if (r.ok) return await r.json();
      } catch {}
    }
    // Static full item file
    try {
      const r = await fetch(`${DATA_BASE}/items/${encodeURIComponent(id)}.json`, { cache: "no-store" });
      if (r.ok) return await r.json();
    } catch {}

    // Fallback to metadata from index.json
    try {
      const list = await listChallenges();
      const item = list.find(ch => String(ch.id) === String(id));
      if (item) return item;
    } catch {}

    return null;
  });
}

// Submit uses API (JWT)
export async function submitSolution(id, { language = "javascript", code }) {
  if (!API_V1) return { passed: false, score: 0, details: "No judge API configured." };
  try {
    const r = await fetch(`${API_V1}/challenges/${encodeURIComponent(id)}/submit`, {
      method: "POST",
      headers: authHeaders(),
      credentials: "include",
      body: JSON.stringify({ language, code }),
    });
    if (r.ok) return await r.json();
    const text = await r.text().catch(() => "");
    return { passed: false, score: 0, details: text || "Submission failed." };
  } catch (e) {
    return { passed: false, score: 0, details: e?.message || "Network error." };
  }
}

export function _clearChallengesCache() {
  cache.clear(); inflight = new Map();
}
