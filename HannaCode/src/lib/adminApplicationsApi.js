/* Admin Applications API (strict admin) */
const VITE = typeof import.meta !== "undefined" ? import.meta.env : undefined;

const RAW_ROOT =
  (VITE && (VITE.VITE_API_ROOT || VITE.VITE_API_BASE_URL)) ||
  process.env.REACT_APP_API_ROOT ||
  process.env.REACT_APP_API_BASE_URL ||
  process.env.REACT_APP_API_URL ||
  "";

const ROOT_CLEAN = String(RAW_ROOT).trim().replace(/\/+$/, "");
const API_ROOT = ROOT_CLEAN
  ? (/\/api(\/v\d+)?$/i.test(ROOT_CLEAN) ? ROOT_CLEAN : `${ROOT_CLEAN}/api/v1`)
  : "/api/v1";

const ADMIN_PATH = "applications";

const DEFAULT_HEADERS = { "Content-Type": "application/json", Accept: "application/json" };

function joinUrl(root, path) {
  const a = String(root || "").replace(/\/+$/, "");
  const b = String(path || "").replace(/^\/+/, "");
  return `${a}/${b}`;
}

function getAuthToken() {
  try {
    const keys = ["adminToken", "token", "accessToken", "authToken", "jwt", "id_token"];
    const blobs = ["auth", "user", "currentUser"];
    const stores = [
      typeof localStorage !== "undefined" ? localStorage : null,
      typeof sessionStorage !== "undefined" ? sessionStorage : null,
    ];
    for (const store of stores) {
      if (!store) continue;
      for (const k of keys) {
        const v = store.getItem(k);
        if (v) return v;
      }
      for (const blobKey of blobs) {
        const raw = store.getItem(blobKey);
        if (!raw) continue;
        try {
          const obj = JSON.parse(raw);
          const v =
            obj?.token ||
            obj?.accessToken ||
            obj?.authToken ||
            obj?.jwt ||
            obj?.id_token ||
            obj?.session?.token;
          if (v) return v;
        } catch {}
      }
    }
  } catch {}
  return "";
}

function requireAuthHeaders() {
  const t = getAuthToken();
  if (!t) {
    const err = new Error("Missing admin token");
    err.code = "NO_TOKEN";
    throw err;
  }
  return { ...DEFAULT_HEADERS, Authorization: `Bearer ${t}` };
}

async function parseResponse(res) {
  const ct = res.headers.get("content-type") || "";
  const isJson = ct.includes("application/json");
  const data = isJson ? await res.json().catch(() => ({})) : await res.text().catch(() => "");
  if (!res.ok) {
    const msg =
      (isJson && (data?.message || data?.error)) ||
      (typeof data === "string" && data.slice(0, 200)) ||
      `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

const qs = (o = {}) =>
  Object.entries(o)
    .filter(([, v]) => v !== undefined && v !== null && `${v}` !== "")
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join("&");

async function request(method, path, { params, body, signal, headers } = {}) {
  const query = params && Object.keys(params).length ? `?${qs(params)}` : "";
  const url = joinUrl(API_ROOT, path) + query;

  const finalHeaders = headers
    ? { ...DEFAULT_HEADERS, ...headers }
    : requireAuthHeaders();

  const opts = {
    method,
    headers: finalHeaders,
    credentials: "include",
    signal,
  };
  if (body !== undefined) {
    opts.body = typeof body === "string" ? body : JSON.stringify(body);
  }

  const res = await fetch(url, opts);
  return parseResponse(res);
}

// ---------- Admin Applications API ----------
export async function listApplications(params = {}, options = {}) {
  return request("GET", ADMIN_PATH, { params, signal: options.signal, headers: options.headers });
}

export async function getApplication(id, options = {}) {
  if (!id) throw new Error("getApplication: id is required");
  return request("GET", `${ADMIN_PATH}/${encodeURIComponent(id)}`, { signal: options.signal, headers: options.headers });
}

export async function decideApplication(id, { status, reason } = {}, options = {}) {
  if (!id) throw new Error("decideApplication: id is required");
  if (!status) throw new Error("decideApplication: status is required");
  return request("PATCH", `${ADMIN_PATH}/${encodeURIComponent(id)}/decision`, {
    body: { status, reason },
    signal: options.signal,
    headers: options.headers,
  });
}

export async function deleteApplication(id, options = {}) {
  if (!id) throw new Error("deleteApplication: id is required");
  return request("DELETE", `${ADMIN_PATH}/${encodeURIComponent(id)}`, { signal: options.signal, headers: options.headers });
}