import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getChallenge, submitSolution } from "../../lib/challengesApi";
import { isPremiumUser } from "../../lib/premium";
import { bumpStreak, getStreak } from "../../lib/streak";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";

export default function ChallengeDetail() {
  const { challengeId } = useParams();
  const [loading, setLoading] = useState(true);
  const [challenge, setChallenge] = useState(null);
  const [premium, setPremium] = useState(false);
  const [language, setLanguage] = useState("javascript");
  const [availableLangs, setAvailableLangs] = useState(["javascript", "html", "css", "python", "php", "dart", "cpp"]);
  const [code, setCode] = useState("");
  const [result, setResult] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  function normalizeLangKey(v) {
   const s = String(v || "").trim().toLowerCase();
   if (s === "ts" || s === "typescript") return "javascript";
   if (s === "c++") return "cpp";
   if (s === "c#") return "csharp";
   return s;
 }
 function normalizeLangs(list) {
   const FALLBACK = ["javascript", "html", "css", "python", "php", "dart", "cpp"];
   const arr = Array.isArray(list) ? list : [];
   const out = (arr.length ? arr : FALLBACK).map(normalizeLangKey);
   // unique, keep order
   return [...new Set(out.filter(Boolean))];
 }

  useEffect(() => {
    setPremium(isPremiumUser());
  }, []);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setError("");
        setResult(null);
        const data = await getChallenge(challengeId);
        if (!mounted) return;
        setChallenge(data || null);

        // Compute allowed languages and starter code (support both string or per-language object)
       const langs = normalizeLangs(data?.allowedLanguages);
        setAvailableLangs(langs);
       const current = normalizeLangKey(language);
        const defaultLang = langs.includes(current) ? current : langs[0];
       setLanguage(defaultLang);
       setCode(starterFor(data, defaultLang));
      } catch (e) {
        if (!mounted) return;
        setError(e?.message || "Failed to load challenge.");
        setChallenge(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [challengeId]);

  function starterFor(ch, lang) {
    if (!ch) return "";

    const key = normalizeLangKey(lang);
     if (ch.starterCode && typeof ch.starterCode === "object") {
      return (
       ch.starterCode[key] ??
       (key === "javascript" ? ch.starterCode.js : undefined) ??
       (key === "cpp" ? ch.starterCode["c++"] : undefined) ??
       (key === "csharp" ? ch.starterCode["c#"] : undefined) ??
       ""
     );
    }
    if (typeof ch.starterCode === "string" && key === "javascript") {
      return ch.starterCode;
    }
    return "";
  }

  const locked = useMemo(() => Boolean(challenge?.requiresPremium) && !premium, [challenge, premium]);

  const userId = useMemo(() => {
    try {
      const raw = localStorage.getItem("user");
      const u = raw ? JSON.parse(raw) : null;
      return u?._id || u?.id || "anon";
    } catch { return "anon"; }
  }, []);

  const streak = getStreak(userId);

  const langs = useMemo(() => availableLangs, [availableLangs]);

  async function onSubmit() {
    setSubmitting(true);
    setResult(null);
    setError("");
    try {
      const res = await submitSolution(challengeId, { language, code });
      setResult(res);
      if (res?.passed) bumpStreak(userId);
    } catch (e) {
      setError(e?.message || "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }

  function onResetStarter() {
    setCode(starterFor(challenge, language));
  }

  if (loading) {
    return (
      <main className="container py-8">
        <div className="text-center py-24">
          <div className="loader inline-block mb-4" aria-hidden />
          <p>Loading…</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="container py-8">
        <Card>
          <CardHeader>
            <CardTitle>Unable to load</CardTitle>
            <CardDescription>{error}</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/challenges"><Button variant="outline">Back</Button></Link>
          </CardContent>
        </Card>
      </main>
    );
  }

  if (!challenge) {
    return (
      <main className="container py-8">
        <Card>
          <CardHeader>
            <CardTitle>Challenge not found</CardTitle>
            <CardDescription>Return to challenges.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/challenges"><Button variant="outline">Back to Challenges</Button></Link>
          </CardContent>
        </Card>
      </main>
    );
  }

  return (
    <div className="container py-8">
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <h1 className="text-2xl font-bold">{challenge.title}</h1>
          <div className="flex flex-wrap items-center gap-2 mt-1">
            <Badge variant="outline">{challenge.difficulty || "Easy"}</Badge>
            {challenge.requiresPremium ? <Badge>Premium</Badge> : null}
            {challenge.tags?.slice?.(0, 3)?.map((t) => <Badge key={t} variant="secondary">{t}</Badge>)}
          </div>
          {challenge.date ? <p className="text-sm text-muted-foreground mt-2">{challenge.date}</p> : null}
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Streak</div>
          <div className="text-2xl font-semibold">{streak.count}🔥</div>
        </div>
      </div>

      {locked && (
        <Card className="mb-4">
          <CardHeader>
            <CardTitle>Premium Challenge</CardTitle>
            <CardDescription>Upgrade to solve this challenge.</CardDescription>
          </CardHeader>
          <CardContent>
            <Link to="/pricing"><Button>Upgrade to Premium</Button></Link>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Description</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose dark:prose-invert max-w-none">
              {challenge.summary ? <p className="text-muted-foreground">{challenge.summary}</p> : null}
              <p>{challenge.description}</p>
              {Array.isArray(challenge.examples) && challenge.examples.length > 0 && (
                <>
                  <h4>Examples</h4>
                  <ul>
                    {challenge.examples.map((ex, i) => (
                      <li key={i}>
                        <code>input:</code> {ex.input} <code>→</code> <code>output:</code> {ex.output}
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {challenge.constraints ? <p><strong>Constraints:</strong> {challenge.constraints}</p> : null}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-2">
              <div>
                <CardTitle>Submit Solution</CardTitle>
                <CardDescription>Submissions are stored for 5 days.</CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <label className="text-sm">Language</label>
                <select
                  value={language}
                  onChange={(e) => {
                    const lang = normalizeLangKey(e.target.value);
                   setLanguage(lang);
                   setCode(starterFor(challenge, lang));
                 
                  }}
                  className="border rounded-md px-2 py-1 bg-background text-sm"
                  disabled={locked}
                >
                  {langs.map((l) => (
                    <option key={l} value={l}>{l}</option>
                  ))}
                </select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-64 rounded-md border bg-background p-3 font-mono text-sm"
              placeholder={
                typeof challenge.starterCode === "string"
                  ? challenge.starterCode
                  : challenge.starterCode?.[language] || "// Write your solution here"
              }
              disabled={locked}
            />
            <div className="mt-3 flex flex-wrap gap-2">
              <Button onClick={onSubmit} disabled={submitting || locked}>
                {submitting ? "Submitting…" : "Submit"}
              </Button>
              <Button variant="outline" onClick={onResetStarter} disabled={locked}>
                Reset to starter
              </Button>
              <Link to="/submissions"><Button variant="outline">My Submissions</Button></Link>
              <Link to="/challenges"><Button variant="ghost">Back</Button></Link>
            </div>

            {error && (
              <p className="text-sm text-red-500 mt-3">{error}</p>
            )}

            {result && (
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle className="text-base">
                    {result.passed ? "Submitted" : "Submission result"}
                  </CardTitle>
                  {typeof result.score !== "undefined" && (
                    <CardDescription>Score: {result.score}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  <pre className="whitespace-pre-wrap text-sm">
                    {result.details || JSON.stringify(result, null, 2)}
                  </pre>
                  {result.submissionId && (
                    <div className="mt-2">
                      <Link to= "/submissions"  className="underline text-sm">
                        View in My Submissions
                      </Link>
                    </div>
                  )}
                  {Array.isArray(result.failedTests) && result.failedTests.length > 0 && (
                    <ul className="list-disc pl-5 mt-2 text-sm">
                      {result.failedTests.map((t, i) => <li key={i}>{t.message || t}</li>)}
                    </ul>
                  )}
                </CardContent>
              </Card>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}