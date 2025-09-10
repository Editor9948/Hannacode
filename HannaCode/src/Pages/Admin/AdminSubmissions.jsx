import React, { useEffect, useState } from "react";
import { listSubmissions, reviewSubmission, resendSubmissionFeedback } from "../../lib/submissionsApi";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";

export default function AdminSubmissions() {
  const [filters, setFilters] = useState({
    date: new Date().toISOString().slice(0, 10),
    challengeId: "",
    userId: "",
    reviewed: "",
    page: 1,
    limit: 50,
  });
  const [data, setData] = useState({ items: [], total: 0, page: 1, limit: 50 });
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [flash, setFlash] = useState(null);

 function notify(message, type = "success", ttl = 4000) {
   setFlash({ type, message });
   if (ttl) setTimeout(() => setFlash(null), ttl);
 }
// 
  const load = async () => {
    setLoading(true); setErr("");
    try {
      const res = await listSubmissions(filters);
      setData(res || { items: [], total: 0, page: 1, limit: filters.limit });
    } catch (e) {
      setErr(e?.message || "Failed to load submissions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [filters.page, filters.limit]);
  useEffect(() => {
    const t = setTimeout(() => setFilters((f) => ({ ...f, page: 1 })), 0);
    return () => clearTimeout(t);
    // eslint-disable-next-line
  }, [filters.date, filters.challengeId, filters.userId, filters.reviewed]);

  const setField = (k, v) => setFilters((f) => ({ ...f, [k]: v }));

  return (
    <div className="container py-8">
      <div className="flex items-start justify-between gap-3 mb-4">
        <div>
          <h1 className="text-2xl font-bold">Challenge Submissions</h1>
          <p className="text-sm text-muted-foreground">Review and send feedback emails to users.</p>
        </div>
        <Button variant="outline" onClick={load} disabled={loading}>{loading ? "Loading…" : "Refresh"}</Button>
      </div>
        {flash && (
       <div
         className={`mb-4 border rounded px-3 py-2 text-sm ${
           flash.type === "success"
             ? "bg-green-50 border-green-200 text-green-800"
             : flash.type === "warning"
             ? "bg-amber-50 border-amber-200 text-amber-800"
             : "bg-red-50 border-red-200 text-red-800"
         }`}
         role="status"
       >
         {flash.message}
       </div>
     )}

      <Card className="mb-4">
        <CardHeader>
          <CardTitle className="text-base">Filters</CardTitle>
          <CardDescription>Filter by date, challenge, user, and status.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            <div>
              <label className="text-xs block mb-1">Date</label>
              <Input type="date" value={filters.date} onChange={(e)=>setField("date", e.target.value)} />
            </div>
            <div>
              <label className="text-xs block mb-1">Challenge ID</label>
              <Input placeholder="2025-09-07-js-variables" value={filters.challengeId} onChange={(e)=>setField("challengeId", e.target.value)} />
            </div>
            <div>
              <label className="text-xs block mb-1">User ID</label>
              <Input placeholder="user id" value={filters.userId} onChange={(e)=>setField("userId", e.target.value)} />
            </div>
            <div>
              <label className="text-xs block mb-1">Reviewed</label>
              <select className="border rounded px-2 py-2 w-full text-sm"
                value={filters.reviewed}
                onChange={(e)=>setField("reviewed", e.target.value)}
              >
                <option value="">Any</option>
                <option value="true">Reviewed</option>
                <option value="false">Unreviewed</option>
              </select>
            </div>
            <div className="flex items-end gap-2">
              <Button className="w-full" onClick={load} disabled={loading}>{loading ? "Loading…" : "Apply"}</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {err && <p className="text-red-500 mb-3">{err}</p>}

      {loading ? <p>Loading…</p> : (
        data.items.length === 0 ? <p>No submissions found.</p> : (
          <div className="space-y-3">
            {data.items.map((s) => (
              <SubmissionCard
                key={s._id || s.id}
                s={s}
                onReviewed={(updated) =>
                  setData((d) => ({ ...d, items: d.items.map((x) => (x._id === (updated._id || updated.id) ? updated : x)) }))
                }
                 notify={notify}
              />
            ))}
          </div>
        )
      )}
    </div>
  );
}

function SubmissionCard({ s, onReviewed, notify }) {
  const [feedback, setFeedback] = useState(s.feedback || "");
  const [passed, setPassed] = useState(!!s.passed);
  const [score, setScore] = useState(typeof s.score === "number" ? s.score : 0);
  const [busy, setBusy] = useState(false);

  const subId = s._id || s.id;
  const reviewed = !!s.reviewed;
  const createdAt = s.createdAt ? new Date(s.createdAt).toLocaleString() : "";

  async function save() {
    setBusy(true);
    try {
      const updated = await reviewSubmission(subId, { feedback, passed, score: Number(score) });
      onReviewed(updated);
      if (updated?.emailWarning) {
       notify(`Saved. Email not sent: ${updated.emailWarning}`, "warning");
     } else if (updated?.emailSent) {
       notify("Saved and feedback email sent.");
     } else {
       notify("Saved.");
     }
     } catch (e) {
      notify(e?.message || "Failed to save review", "error");
    } finally {
      setBusy(false);
    }
  }
 
  async function resend() {
    setBusy(true);
    try {
      await resendSubmissionFeedback(subId);
      notify("Feedback email sent.");
    } catch (e) {
      notify(e?.message || "Failed to send email");
    } finally {
      setBusy(false);
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base flex flex-wrap items-center gap-2">
          <span className="font-mono">{s.challengeId}</span>
          <Badge variant={s.passed ? "default" : "secondary"}>{s.passed ? "Passed" : "Not Passed"}</Badge>
          {reviewed ? <Badge variant="outline">Reviewed</Badge> : <Badge variant="secondary">Pending</Badge>}
        </CardTitle>
        <CardDescription>
          {s.userId} • {s.language} • {createdAt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-3">
          <label className="text-xs block mb-1">Submitted Code</label>
          <pre className="text-xs whitespace-pre-wrap max-h-56 overflow-auto border rounded p-2 bg-muted">{(s.code || "").slice(0, 6000)}</pre>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={passed} onChange={(e)=>setPassed(e.target.checked)} />
            Passed
          </label>
          <div>
            <label className="text-xs block mb-1">Score (0-100)</label>
            <Input type="number" min={0} max={100} value={score} onChange={(e)=>setScore(e.target.value)} />
          </div>
          <div>
            <label className="text-xs block mb-1">User Email</label>
            <Input value={s.userEmail || ""} disabled />
          </div>
        </div>
        <div className="mb-3">
          <label className="text-xs block mb-1">Feedback (emailed to user)</label>
          <textarea className="w-full h-28 border rounded p-2 text-sm"
            value={feedback}
            onChange={(e)=>setFeedback(e.target.value)}
            placeholder="Write helpful, actionable feedback…"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <Button onClick={save} disabled={busy}>{busy ? "Saving…" : "Save & Email"}</Button>
          {reviewed && <Button variant="outline" onClick={resend} disabled={busy}>Resend Email</Button>}
        </div>
        {reviewed && s.reviewedAt && (
          <p className="text-xs text-muted-foreground mt-2">
            Reviewed by {s.reviewedBy || "admin"} at {new Date(s.reviewedAt).toLocaleString()}
          </p>
        )}
      </CardContent>
    </Card>
  );
}