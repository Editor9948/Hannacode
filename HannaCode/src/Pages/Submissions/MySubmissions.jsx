import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getMySubmissions } from "../../lib/submissionsApi";
import { listChallenges } from "../../lib/challengesApi";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

function formatDate(s) {
  if (!s) return "";
  const d = new Date(s);
  return isNaN(d.getTime()) ? s : d.toLocaleString();
}

export default function MySubmissions() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [challengeMap, setChallengeMap] = useState({}); // id -> { title }

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        setErr("");
        const [{ items: subs = [], total = 0 } = {}, challenges] = await Promise.all([
          getMySubmissions({ page, limit }),
          listChallenges().catch(() => []),
        ]);

        const list = Array.isArray(subs) ? subs : [];
        const chItems = Array.isArray(challenges) ? challenges : (challenges?.items || []);
        const cmap = {};
        for (const ch of chItems) cmap[String(ch.id)] = ch;

        if (!alive) return;
        setItems(list);
        setTotal(total || list.length);
        setChallengeMap(cmap);
      } catch (e) {
        if (!alive) return;
        setErr(e?.message || "Failed to load submissions");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [page, limit]);

  const pages = useMemo(() => Math.max(1, Math.ceil((total || 0) / limit)), [total, limit]);

  return (
    <div className="container py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">My Submissions</h1>
        <Link to="/challenges">
          <Button variant="outline">Back to Challenges</Button>
        </Link>
      </div>

      {err && <p className="mb-3 text-red-600 dark:text-red-500">{err}</p>}

      <Card >
        <CardHeader>
          <CardTitle>
            {loading ? "Loading…" : `${total} submission${total === 1 ? "" : "s"}`}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-14 rounded-md border border-slate-200 bg-slate-100 dark:border-transparent dark:bg-slate-800/70 animate-pulse" />
              ))}
            </div>
          ) : items.length === 0 ? (
            <p className="text-sm text-slate-600 dark:text-slate-400">
              No submissions yet. Open a challenge to submit your solution.
            </p>
          ) : (
            <div className="space-y-3">
              {items.map((s) => {
                const ch = challengeMap[String(s.challengeId)];
                const passed = !!s.passed;
                const reviewed = !!s.reviewed;
                const sc = typeof s.score === "number" ? s.score : undefined;
                return (
                  <div
                    key={s._id || s.id}
                    className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/70 p-4"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">
                          {ch?.title || `Challenge ${s.challengeId}`}
                        </div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          {formatDate(s.createdAt)} • {s.language || "code"}
                        </div>
                        <div className="mt-1 flex flex-wrap gap-2">
                          <Badge variant="outline" className={
                            passed ? "text-emerald-700 border-emerald-300 dark:text-emerald-400 dark:border-emerald-500/40" 
                            : "text-rose-700 border-rose-300 dark:text-rose-400 dark:border-rose-500/40"}>
                            {passed ? "Passed" : "Not Passed"}
                          </Badge>
                          <Badge variant="outline" className={
                            reviewed ? "text-blue-700 border-blue-300 dark:text-blue-300 dark:border-blue-500/40" 
                            : "text-slate-700 border-slate-300 dark:text-slate-300 dark:border-slate-500/40"}>
                            {reviewed ? "Reviewed" : "Pending Review"}
                          </Badge>
                          {typeof sc === "number" && (
                            <Badge variant="outline" className="text-slate-700 border-slate-300 dark:text-slate-200 dark:border-slate-600">
                              Score: {sc}</Badge>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Link to={`/challenges/${s.challengeId}`}>
                          <Button size="sm" variant="secondary">Open Challenge</Button>
                        </Link>
                      </div>
                    </div>

                    {/* Code/feedback details */}
                    <details className="mt-3">
                      <summary className="cursor-pointer text-sm text-slate-700 dark:text-slate-300 select-none">View details</summary>
                      <div className="mt-2 grid gap-2">
                        {s.feedback ? (
                          <div className="text-sm">
                            <div className="font-semibold mb-1 text-slate-900 dark:text-white">Feedback</div>
                            <div className="w-full rounded-md border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900 p-3 text-[12px] sm:text-sm leading-5 whitespace-pre-wrap break-words">
                              {s.feedback}
                            </div>
                          </div>
                        ) : null}
                        {s.code ? (
                          <div className="text-sm">
                            <div className="font-semibold mb-1 text-slate-900 dark:text-white">Submitted Code</div>
                            <pre className="w-full rounded-md border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-900 p-3 overflow-x-auto overflow-y-auto max-h-56 md:max-h-96 text-[11px] sm:text-xs leading-5 -mx-3 sm:mx-0">
                              <code className="block min-w-full">{s.code}</code>
                            </pre>
                          </div>
                        ) : null}
                      </div>
                    </details>
                  </div>
                );
              })}
            </div>
          )}

          {/* Pagination */}
          {pages > 1 && (
            <div className="mt-4 flex items-center justify-between">
              <Button
                variant="outline"
                disabled={page <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </Button>
              <div className="text-sm text-slate-700 dark:text-slate-300">
                Page {page} of {pages}
              </div>
              <Button
                variant="outline"
                disabled={page >= pages}
                onClick={() => setPage((p) => Math.min(pages, p + 1))}
              >
                Next
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}