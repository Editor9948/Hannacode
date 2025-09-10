const RAW = (process.env.REACT_APP_API_URL || "").trim();
const API_BASE = RAW.replace(/\/+$/, "").replace(/\/api(\/v\d+)?$/i, "");
const API_V1 = API_BASE ? `${API_BASE}/api/v1` : "";

function authHeaders() {
  const h = { "Content-Type": "application/json" };
  const t = localStorage.getItem("token");
  if (t) h.Authorization = `Bearer ${t}`;
  return h;
}

function withCreds(init = {}) {
  return { credentials: "include", ...init };
}

async function fetchJson(url, init) {
  const r = await fetch(url, withCreds(init));
  const text = await r.text().catch(() => "");
  if (!r.ok) {
    const msg = text || `${r.status} ${r.statusText}`;
    throw new Error(msg);
  }
  return text ? JSON.parse(text) : null;
}

export async function getMySubmissions({ page = 1, limit = 1000 } = {}) {
  if (!API_V1) return { items: [], page, limit, total: 0 };
  const qs = new URLSearchParams({ page: String(page), limit: String(limit) }).toString();
  return fetchJson(`${API_V1}/submissions/mine?${qs}`, {
    headers: authHeaders(),
  });
}

export async function listSubmissions(params = {}) {
  const qs = new URLSearchParams(
    Object.entries(params).reduce((acc, [k, v]) => {
      if (v !== undefined && v !== null && v !== "") acc[k] = String(v);
      return acc;
    }, {})
  ).toString();

  if (!API_V1) throw new Error("API not configured");
  return fetchJson(`${API_V1}/submissions${qs ? `?${qs}` : ""}`, {
    headers: authHeaders(),
  });
}

export async function reviewSubmission(id, body) {
  if (!API_V1) throw new Error("API not configured");
  if (!id) throw new Error("Missing submission id");

  const url = `${API_V1}/submissions/${encodeURIComponent(id)}/review`;
  const init = {
    method: "PATCH",
    headers: authHeaders(),
    body: JSON.stringify(body || {}),
  };

  try {
    return await fetchJson(url, init);
  } catch (e) {
    // Network/CORS or method not allowed → try POST alias fallback
    try {
      return await fetchJson(url, {
        method: "POST",
        headers: authHeaders(),
        body: JSON.stringify(body || {}),
      });
    } catch {
      throw e; // surface original error for clarity in DevTools
    }
  }
}

export async function resendSubmissionFeedback(id) {
  if (!API_V1) throw new Error("API not configured");
  if (!id) throw new Error("Missing submission id");
  return fetchJson(`${API_V1}/submissions/${encodeURIComponent(id)}/resend-feedback`, {
    method: "POST",
    headers: authHeaders(),
  });
}