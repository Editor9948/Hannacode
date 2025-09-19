const VITE = typeof import.meta !== "undefined" ? import.meta.env : undefined;

// Prefer full API root (may include /api or /api/v1). Fallbacks supported.
const RAW_ROOT =
  (VITE && (VITE.VITE_API_ROOT || VITE.VITE_API_BASE_URL)) ||
  process.env.REACT_APP_API_ROOT ||
  process.env.REACT_APP_API_BASE_URL ||
  process.env.REACT_APP_API_URL ||
  "";

// Normalize root and ensure it includes /api prefix when provided without it.
// If empty, use same-origin "/api".
const ROOT_CLEAN = String(RAW_ROOT).trim().replace(/\/+$/, "");
const API_ROOT = ROOT_CLEAN
  ? (/\/api(\/v\d+)?$/i.test(ROOT_CLEAN) ? ROOT_CLEAN : `${ROOT_CLEAN}/api`)
  : "/api";

const DEFAULT_HEADERS = { "Content-Type": "application/json" };

const processResponse = async (res) => {
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg = data?.message || data?.error || `Request failed (${res.status})`;
    const err = new Error(msg);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
};

// Public: submit team application
export async function submitApplication(form) {
  const name =
    (form.name && String(form.name).trim()) ||
    [form.firstName, form.otherName, form.surname].filter(Boolean).join(" ").trim();

  const payload = {
    name,
    email: String(form.email || "").trim(),
    phone: String(form.phone || "").trim(),
    role: String(form.role || "").trim(),
    message: String(form.message || "").trim(),
    portfolioUrl: form.portfolioUrl?.trim(),
    resumeUrl: form.resumeUrl?.trim(),
    extra: {
      surname: form.surname || "",
      firstName: form.firstName || "",
      otherName: form.otherName || "",
      dob: form.dob || "",
      qualification: form.qualification || "",
      address: form.address || "",
      country: form.country || "",
      otherProfessionalFields: form.otherProfessionalFields || "",
      acceptTerms: !!form.acceptTerms,
      ...(form.extra && typeof form.extra === "object" ? form.extra : {}),
    },
  };

  const url = `${API_ROOT}/applications`;
  const res = await fetch(url, {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(payload),
    credentials: "include", 
  });
  return processResponse(res);
}

// Upload a resume file and return the URL
export async function uploadResumeFile(file) {
  const url = `${API_ROOT}/applications/upload`;
  const fd = new FormData();
  fd.append('file', file);
  const res = await fetch(url, {
    method: 'POST',
    body: fd,
    credentials: 'include',
  });
  return processResponse(res);
}