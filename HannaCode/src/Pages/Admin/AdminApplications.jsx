
import React, { useEffect, useState, useRef } from "react";
import {
  listApplications,
  getApplication,
  decideApplication,
  deleteApplication,
} from "../../lib/adminApplicationsApi";

function getSavedToken() {
  try {
    return (
      (typeof localStorage !== "undefined" && localStorage.getItem("token")) ||
      (typeof sessionStorage !== "undefined" && sessionStorage.getItem("token")) ||
      ""
    );
  } catch {
    return "";
  }
}

const normalizeApp = (a) => ({
  ...a,
  id: a?.id || a?._id, // make sure table/detail keys work for Mongo docs
});

// ...existing code...
export default function ApplicationsAdmin() {
  const [token, setToken] = useState(getSavedToken); // auto from auth storage
  const [status, setStatus] = useState("pending");
  const [q, setQ] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);

  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [pages, setPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const [detailOpen, setDetailOpen] = useState(false);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detail, setDetail] = useState(null);
  const [intent, setIntent] = useState(null); // 'reject' | 'accept' | null
  // UI confirm + notifications
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmCfg, setConfirmCfg] = useState({ title: "Confirm", message: "", onConfirm: null, confirmText: "Confirm" });
  const [notice, setNotice] = useState(null); // { type: 'success'|'error'|'info', text }
  useEffect(() => {
    if (!notice) return;
    const t = setTimeout(() => setNotice(null), 3000);
    return () => clearTimeout(t);
  }, [notice]);

  // Keep token in sync with login/logout in other tabs/pages and on window focus
  useEffect(() => {
    const syncToken = () => setToken(getSavedToken());
    window.addEventListener("storage", syncToken);
    window.addEventListener("focus", syncToken);
    return () => {
      window.removeEventListener("storage", syncToken);
      window.removeEventListener("focus", syncToken);
    };
  }, []);

  const load = async (pageArg = page) => {
    if (!token) {
      setItems([]);
      setTotal(0);
      setPages(1);
      return;
    }

    setLoading(true);
    setErr("");
    try {
      const params = {
        page: pageArg,
        limit,
        sort: "createdAt",
        order: "desc",
        ...(status !== "all" ? { status } : {}),
        ...(q.trim() ? { search: q.trim() } : {}),
      };
  const resp = await listApplications(params, { headers: { Authorization: `Bearer ${token}` } });
      const data = (resp?.data || []).map(normalizeApp);
      const meta = resp?.meta || {};
      setItems(data);
      setTotal(Number(meta.total || data.length || 0));
      setPages(Number(meta.pages || Math.max(1, Math.ceil((meta.total || data.length || 0) / limit)) || 1));
      setPage(Number(meta.page || pageArg || 1));
    } catch (e) {
      // Provide clearer auth errors
      const status = e?.status;
      let msg = e?.message || "Failed to load applications";
      if (e?.code === "NO_TOKEN") {
        msg = "Please sign in to view applications.";
      } else if (status === 401) {
        msg = "Not authorized. Please sign in again (session may have expired).";
      } else if (status === 403) {
        msg = "Forbidden. Admin access is required to view applications.";
      }
      setErr(msg);
    } finally {
      setLoading(false);
    }
  };

  // Load when token appears or filters change
  useEffect(() => {
    if (!token) return;
    load(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, q, limit, token]);

  useEffect(() => {
    if (!token) return;
    load(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const resetAndSearch = async (e) => {
    e.preventDefault();
    setPage(1);
    await load(1);
  };

  const openDetail = async (id) => {
    setDetailOpen(true);
    setDetailLoading(true);
    setDetail(null);
    try {
      const resp = await getApplication(id, { headers: { Authorization: `Bearer ${token}` } });
      const data = resp?.data ? normalizeApp(resp.data) : null;
      setDetail(data);
    } catch (e) {
      setDetail({ error: e?.message || "Failed to load application" });
    } finally {
      setDetailLoading(false);
    }
  };

  const accept = async (id, reason = "") => {
    try {
  await decideApplication(id, { status: "accepted", reason }, { headers: { Authorization: `Bearer ${token}` } });
      await load(page);
    } catch (e) {
      setErr(e?.message || "Failed to accept application");
    }
  };

  const reject = async (id, reasonInput) => {
    const reason = reasonInput !== undefined ? reasonInput : (window.prompt("Reason for rejection (optional):", "") || "");
    try {
  await decideApplication(id, { status: "rejected", reason }, { headers: { Authorization: `Bearer ${token}` } });
      await load(page);
    } catch (e) {
      setErr(e?.message || "Failed to reject application");
    }
  };

  const removeOne = (id) => {
    setConfirmCfg({
      title: "Delete Application",
      message: "This action cannot be undone. Are you sure you want to permanently delete this application?",
      confirmText: "Delete",
      onConfirm: async () => {
        try {
          await deleteApplication(id, { headers: { Authorization: `Bearer ${token}` } });
          setNotice({ type: "success", text: "Application deleted" });
          await load(page);
        } catch (e) {
          setNotice({ type: "error", text: e?.message || "Failed to delete application" });
        }
      },
    });
    setConfirmOpen(true);
  };

  return (
    <main className="container mx-auto px-4 py-6">
      <h1 className="text-xl font-semibold mb-4">Applications</h1>

      {notice ? (
        <div
          className={`mb-3 px-3 py-2 rounded text-sm ${
            notice.type === "success"
              ? "bg-green-50 text-green-700 border border-green-200"
              : notice.type === "error"
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-gray-50 text-gray-700 border"
          }`}
        >
          {notice.text}
        </div>
      ) : null}

      {!token && (
        <div className="mb-4 p-3 border rounded text-sm">
          Sign in as admin to view applications.
        </div>
      )}

      <form onSubmit={resetAndSearch} className="flex flex-wrap items-end gap-3 mb-4">
        {/* Removed manual token field; token is auto-read from storage */}
        <div>
          <label className="block text-xs mb-1">Status</label>
          <select
            className="border rounded px-3 py-2"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="pending">pending</option>
            <option value="accepted">accepted</option>
            <option value="rejected">rejected</option>
            <option value="all">all</option>
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Search</label>
          <input
            className="border rounded px-3 py-2"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="name, email, role..."
          />
        </div>
        <div>
          <label className="block text-xs mb-1">Per page</label>
          <select
            className="border rounded px-3 py-2"
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value, 10))}
          >
            {[10, 20, 50].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="bg-black text-white rounded px-4 py-2" disabled={!token || loading}>
          {loading ? "Loading..." : "Refresh"}
        </button>
        {err ? <span className="text-sm text-red-600">{err}</span> : null}
      </form>

      <div className="overflow-x-auto border rounded">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-50">
            <tr className="text-left">
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Role</th>
              <th className="py-2 px-3">Email</th>
              <th className="py-2 px-3">Phone</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Created</th>
              <th className="py-2 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-t align-top">
                <td className="py-2 px-3">{it.name}</td>
                <td className="py-2 px-3">{it.role}</td>
                <td className="py-2 px-3">{it.email}</td>
                <td className="py-2 px-3">{it.phone || "-"}</td>
                <td className="py-2 px-3 capitalize">{it.status}</td>
                <td className="py-2 px-3">{fmtDateTime(it.createdAt)}</td>
                <td className="py-2 px-3">
                  <div className="flex gap-2">
                    <button className="border rounded px-2 py-1" onClick={() => openDetail(it.id)}>
                      View
                    </button>
                    <button
                      className="bg-green-600 text-white rounded px-2 py-1 disabled:opacity-50"
                      disabled={it.status !== "pending"}
                      onClick={() => accept(it.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-600 text-white rounded px-2 py-1 disabled:opacity-50"
                      disabled={it.status !== "pending"}
                      onClick={() => {
                        setIntent("reject");
                        openDetail(it.id);
                      }}
                    >
                      Reject
                    </button>
                    <button
                      className="border border-red-600 text-red-600 rounded px-2 py-1"
                      onClick={() => removeOne(it.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {items.length === 0 && (
              <tr>
                <td className="py-6 px-3 text-gray-500" colSpan={7}>
                  {loading ? "Loading..." : token ? "No applications" : "Sign in to view applications"}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="text-sm">Total: {total}</div>
        <div className="flex items-center gap-2">
          <button
            className="border rounded px-3 py-1"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page <= 1 || loading}
          >
            Prev
          </button>
          <span className="text-sm">
            Page {page} / {pages}
          </span>
          <button
            className="border rounded px-3 py-1"
            onClick={() => setPage((p) => Math.min(pages, p + 1))}
            disabled={page >= pages || loading}
          >
            Next
          </button>
        </div>
      </div>

      <DetailModal
        open={detailOpen}
        loading={detailLoading}
        data={detail}
        intent={intent}
        onClose={() => { setDetailOpen(false); setIntent(null); }}
        onAccept={(r) => detail?.id && accept(detail.id, r)}
        onReject={(r) => detail?.id && reject(detail.id, r)}
      />

      <ConfirmModal
        open={confirmOpen}
        title={confirmCfg.title}
        message={confirmCfg.message}
        confirmText={confirmCfg.confirmText}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={async () => {
          setConfirmOpen(false);
          try {
            await confirmCfg.onConfirm?.();
          } catch {}
        }}
      />
    </main>
  );
}
function DetailModal({ open, loading, data, onClose, onAccept, onReject, intent }) {
  // Hooks must always run regardless of `open` to satisfy rules of hooks
  const [reason, setReason] = useState("");
  const reasonRef = useRef(null);
  useEffect(() => {
    setReason(data?.decision?.reason || "");
  }, [data]);
  useEffect(() => {
    if (intent === "reject" && reasonRef.current) {
      reasonRef.current.focus();
    }
  }, [intent]);
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-[min(720px,96vw)] max-h-[90vh] overflow-auto rounded shadow">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <h2 className="font-semibold">Application Details</h2>
          <button className="text-gray-600 hover:text-black" onClick={onClose}>
            ✕
          </button>
        </div>
        <div className="p-4 text-sm">
          {loading ? (
            "Loading…"
          ) : data?.error ? (
            <div className="text-red-600">{data.error}</div>
          ) : data ? (
            <div className="space-y-2">
              <Row k="ID" v={data.id} />
              <Row k="Name" v={data.name} />
              <Row k="Role" v={data.role} />
              <Row k="Email" v={data.email} />
              <Row k="Phone" v={data.phone} />
              <Row k="Status" v={data.status} />
              {data.decision?.reason ? <Row k="Reason" v={data.decision.reason} /> : null}
              <Row k="Created" v={fmtDateTime(data.createdAt)} />
              <Row k="Updated" v={fmtDateTime(data.updatedAt)} />
              {data.portfolioUrl ? (
                <Row
                  k="Portfolio"
                  v={
                    <a className="text-blue-600 underline" href={data.portfolioUrl} target="_blank" rel="noreferrer">
                      {data.portfolioUrl}
                    </a>
                  }
                />
              ) : null}
              {data.resumeUrl ? (
                <Row
                  k="Resume"
                  v={
                    <a className="text-blue-600 underline" href={data.resumeUrl} target="_blank" rel="noreferrer">
                      {data.resumeUrl}
                    </a>
                  }
                />
              ) : null}
              {data.status === "pending" ? (
                <div className="space-y-1">
                  <div className="font-semibold">Decision reason (optional)</div>
                  <textarea
                    ref={reasonRef}
                    className="w-full min-h-[80px] border rounded px-3 py-2"
                    placeholder="Add a short note for accept/reject (optional)"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                  />
                </div>
              ) : null}
              <div>
                <div className="font-semibold">Message</div>
                <div className="whitespace-pre-wrap">{data.message || "-"}</div>
              </div>
            </div>
          ) : null}
        </div>
        <div className="flex items-center justify-end gap-2 border-t px-4 py-2">
          <button className="border rounded px-3 py-1" onClick={onClose}>
            Close
          </button>
          <button
            className="bg-green-600 text-white rounded px-3 py-1 disabled:opacity-50"
            disabled={!data || data.status !== "pending"}
            onClick={() => onAccept(reason)}
          >
            Accept
          </button>
          <button
            className="bg-red-600 text-white rounded px-3 py-1 disabled:opacity-50"
            disabled={!data || data.status !== "pending"}
            onClick={() => onReject(reason)}
          >
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}

function ConfirmModal({ open, title = "Confirm", message = "", onCancel, onConfirm, confirmText = "Confirm" }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <div className="bg-white w-[min(520px,96vw)] rounded shadow">
        <div className="px-4 py-2 border-b font-semibold">{title}</div>
        <div className="px-4 py-3 text-sm">{message}</div>
        <div className="px-4 py-2 border-t flex items-center justify-end gap-2">
          <button className="border rounded px-3 py-1" onClick={onCancel}>Cancel</button>
          <button className="bg-red-600 text-white rounded px-3 py-1" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}

function Row({ k, v }) {
  return (
    <div className="grid grid-cols-[160px_1fr] gap-3">
      <div className="text-gray-600">{k}</div>
      <div>{v || "-"}</div>
    </div>
  );
}

function fmtDateTime(d) {
  try {
    const date = d instanceof Date ? d : new Date(d);
    return Number.isNaN(date.getTime()) ? "" : date.toLocaleString();
  } catch {
    return "";
  }
}