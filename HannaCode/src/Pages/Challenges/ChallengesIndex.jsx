import React, { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams, } from "react-router-dom";
import { getToday } from "../../lib/challengesApi";
import { getMySubmissions } from "../../lib/submissionsApi";
import { isPremiumUser } from "../../lib/premium";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";

const DEFAULT_ICON = "/icons/challenges/default.png";


const CATEGORY_DEFS = [
  { key: "html", name: "HTML Challenges", icon: "/icons/challenges/html.jpeg" },
  { key: "css", name: "CSS Challenges", icon: "/icons/challenges/css.jpeg" },
  { key: "javascript", name: "JavaScript Challenges", icon: "/icons/challenges/javascript.jpeg" },
  { key: "python", name: "Python Challenges", icon: "/icons/challenges/python.jpeg" },
  { key: "php", name: "PHP Challenges", icon: "/icons/challenges/php.jpeg" },
  { key: "cpp", name: "C++ Challenges", icon: "/icons/challenges/cpp.jpeg" },
  { key: "dart", name: "Dart Challenges", icon: "/icons/challenges/dart.jpeg",  comingSoon: true },
  { key: "java", name: "Java Challenges", icon: "/icons/challenges/java.jpeg",  comingSoon: true },
  { key: "csharp", name: "C# Challenges", icon: "/icons/challenges/csharp.jpeg",  comingSoon: true },
  { key: "sql", name: "SQL Challenges", icon: "/icons/challenges/sql.jpeg",  comingSoon: true },
  { key: "react", name: "React Challenges", icon: "/icons/challenges/react.jpeg",  comingSoon: true },
];

// Heuristic category detection from challenge data
function detectCategory(ch) {
  const tags = (ch?.tags || []).map((t) => String(t).toLowerCase());
  const title = String(ch?.title || "").toLowerCase();
  const id = String(ch?.id || "").toLowerCase();
  const hay = `${tags.join(" ")} ${title} ${id}`;

  const checks = [
    ["javascript", ["javascript", "js"]],
    ["typescript", ["typescript", "ts"]],
    ["html", ["html"]],
    ["css", ["css"]],
    ["sql", ["sql"]],
    ["python", ["python", "py"]],
    ["java", ["java"]],
    ["php", ["php"]],
    ["react", ["react"]],
    ["bootstrap", ["bootstrap"]],
    ["csharp", ["c#", "csharp", "dotnet"]],
    ["cpp", ["c++", "cpp"]],
    ["c", [" c ", " c-", " c_"]],
  ];
  for (const [key, needles] of checks) {
    if (needles.some((n) => hay.includes(n))) {
      if (key === "typescript") return "javascript";
      return key;
    }
  }
  return null;
}

// Build grid stats based ONLY on today's available challenge
function buildCategoryStats(availableChallenges = [], mySubs = []) {
  const completedIds = new Set();
  for (const s of mySubs || []) if (s?.challengeId && s?.passed) completedIds.add(String(s.challengeId));

  const totals = new Map(CATEGORY_DEFS.map((d) => [d.key, { total: 0, completed: 0 }]));
  for (const ch of availableChallenges || []) {
    const key = detectCategory(ch);
    if (!key || !totals.has(key)) continue;
    const slot = totals.get(key);
    slot.total += 1; // only today's challenge
    if (completedIds.has(String(ch.id))) slot.completed += 1;
  }

  return CATEGORY_DEFS.map((def) => {
    const t = totals.get(def.key) || { total: 0, completed: 0 };
    return {
      key: def.key,
      name: def.name,
      icon: def.icon,
      total: t.total,        // 1 for today's category, 0 for others
      completed: t.completed,
      comingSoon: !!def.comingSoon,
    };
  });
}

function Progress({ value = 0 }) {
  const v = Math.max(0, Math.min(100, Math.round(value)));
  return (
    <div className="h-2 rounded bg-slate-200 dark:bg-slate-700/70 overflow-hidden">
      <div className="h-full bg-emerald-600 dark:bg-emerald-500" style={{ width: `${v}%` }} />
    </div>
  );
}

function formatDate(s) {
  if (!s) return "";
  const d = new Date(s);
  return isNaN(d.getTime()) ? s : d.toLocaleDateString();
}

export default function ChallengesIndex() {
  const [loadingToday, setLoadingToday] = useState(true);
  const [premium, setPremium] = useState(false);
  const [todayChallenge, setTodayChallenge] = useState(null);
 const [items, setItems] = useState([]);
  // Only today's challenge is available
  const [availableChallenges, setAvailableChallenges] = useState([]);

  // Progress state
  const [cards, setCards] = useState([]);
  const [mySubs, setMySubs] = useState([]);
  const [completedSet, setCompletedSet] = useState(new Set());

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedKey = (searchParams.get("category") || "").toLowerCase();
  const q = (searchParams.get("q") || "").trim();
  const sort = (searchParams.get("sort") || "date-desc").toLowerCase();

  
  useEffect(() => {
  setPremium(isPremiumUser());
  let mounted = true;
  (async () => {
    setLoadingToday(true);
    try {
      const today = await getToday(); // now returns { date, challenges: [] }
      if (!mounted) return;
      const arr = Array.isArray(today?.challenges) ? today.challenges : [];
      setTodayChallenge(arr[0] || null);          // optional, keep first for display
      setAvailableChallenges(arr);                // all today’s challenges
    } finally {
      if (mounted) setLoadingToday(false);
    }
  })();
  return () => { mounted = false; };
}, []);

  // Load my submissions once (for completed badges)
  useEffect(() => {
    let alive = true;
    (async () => {
      const mine = await getMySubmissions({ limit: 2000 }).catch(() => ({ items: [] }));
      if (!alive) return;
      const items = Array.isArray(mine?.items) ? mine.items : [];
      setMySubs(items);
      const cset = new Set();
      for (const s of items) if (s?.passed && s?.challengeId) cset.add(String(s.challengeId));
      setCompletedSet(cset);
    })();
    return () => {
      alive = false;
    };
  }, []);

  // Rebuild cards whenever today's challenge or my submissions change
  useEffect(() => {
    setCards(buildCategoryStats(availableChallenges, mySubs));
  }, [availableChallenges, mySubs]);

  const locked = Boolean(todayChallenge?.requiresPremium) && !premium;
  const availableKeys = useMemo(
  () => new Set((availableChallenges || []).map((ch) => detectCategory(ch)).filter(Boolean)),
  [availableChallenges]
);

  // Category results (only show today's challenge within its category)
  const categoryDef = useMemo(
    () => CATEGORY_DEFS.find((d) => d.key === selectedKey) || null,
    [selectedKey]
  );

  const categoryItems = useMemo(() => {
    if (!categoryDef) return [];
    // Only filter among today's available challenge(s)
    let list = availableChallenges.filter((ch) => detectCategory(ch) === selectedKey);

    if (q) {
      const ql = q.toLowerCase();
      list = list.filter((ch) => {
        const tags = (ch?.tags || []).map((t) => String(t).toLowerCase()).join(" ");
        const hay = `${String(ch?.title || "").toLowerCase()} ${String(ch?.id || "").toLowerCase()} ${tags}`;
        return hay.includes(ql);
      });
    }

    const cmp = {
      "date-desc": (a, b) => new Date(b.date || 0) - new Date(a.date || 0),
      "date-asc": (a, b) => new Date(a.date || 0) - new Date(b.date || 0),
      "title-asc": (a, b) => String(a.title || "").localeCompare(String(b.title || "")),
      "title-desc": (a, b) => String(b.title || "").localeCompare(String(a.title || "")),
      "difficulty": (a, b) => String(a.difficulty || "").localeCompare(String(b.difficulty || "")),
    }[sort] || ((a, b) => 0);

    return [...list].sort(cmp);
  }, [availableChallenges, categoryDef, selectedKey, q, sort]);

  function setParam(name, value) {
    const next = new URLSearchParams(searchParams);
    if (value === undefined || value === null || value === "") next.delete(name);
    else next.set(name, value);
    setSearchParams(next, { replace: true });
  }
useEffect(() => {
  fetch('/data/challenges/index.json', { cache: 'no-cache' })
    .then(r => r.json()).then(setItems).catch(console.error);
}, []);
  return (
    <div className="container py-8">

      {/* Category Results (only shows content for today's category) */}
      {categoryDef && (
        <div className="mt-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <img
                src={categoryDef.icon}
                alt={`${categoryDef.key} icon`}
                className="h-8 w-8 rounded bg-slate-100 dark:bg-slate-900 p-1"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = DEFAULT_ICON;
                }}
              />
              <div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{categoryDef.name}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">
                  {categoryItems.length} result{categoryItems.length === 1 ? "" : "s"}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <input
                type="search"
                placeholder="Search in this category..."
                value={q}
                onChange={(e) => setParam("q", e.target.value)}
                className="border rounded px-2 py-1 text-sm bg-white text-slate-900 border-slate-300 dark:bg-slate-900 dark:text-white dark:border-slate-700"
              />
              <select
                value={sort}
                onChange={(e) => setParam("sort", e.target.value)}
                className="border rounded px-2 py-1 text-sm bg-white text-slate-900 border-slate-300 dark:bg-slate-900 dark:text-white dark:border-slate-700"
              >
                <option value="date-desc">Newest</option>
                <option value="date-asc">Oldest</option>
                <option value="title-asc">Title A–Z</option>
                <option value="title-desc">Title Z–A</option>
                <option value="difficulty">Difficulty</option>
              </select>
              <Button variant="outline" onClick={() => setSearchParams({})}>Clear</Button>
            </div>
          </div>

            {categoryDef.comingSoon ? (
             <p className="text-sm text-slate-600 dark:text-muted-foreground">Coming Soon.</p>
          ) : !availableKeys.has(selectedKey) ? (
             <p className="text-sm text-slate-600 dark:text-muted-foreground">Not available till tomorrow.</p>
         ) : categoryItems.length === 0 ? (
            <p className="text-sm text-slate-600 dark:text-muted-foreground">No challenge available.</p>
          ) : (
            <div className="grid gap-3">
              {categoryItems.map((ch) => {
                const completed = completedSet.has(String(ch.id));
                const lockedItem = Boolean(ch?.requiresPremium) && !premium;
                return (
                  <div
                    key={ch.id}
                    className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/70 p-4"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">{ch.title}</div>
                        <div className="text-xs text-slate-600 dark:text-slate-300">
                          {formatDate(ch.date)} • {ch.difficulty || "Easy"}
                          {ch.tags?.length ? ` • ${ch.tags.join(", ")}` : ""}
                        </div>
                        {completed && (
                          <div className="mt-1">
                            <Badge variant="outline" className="text-emerald-700 border-emerald-300 dark:text-emerald-400 dark:border-emerald-500/40">
                              Completed
                            </Badge>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        {ch.requiresPremium ? <Badge>Premium</Badge> : null}
                        {lockedItem ? (
                          <Link to="/pricing">
                            <Button size="sm">Upgrade</Button>
                          </Link>
                        ) : (
                          <Link to={`/challenges/${encodeURIComponent(ch.id)}`}>
                            <Button size="sm" variant="secondary">Open</Button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
      
      {/* Browse Grid (only today's category shows 1 available) */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Browse Challenges</h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.length === 0
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800/70 p-5 animate-pulse h-32" />
            ))
          : cards.map((c) => {
              const progress = c.total ? Math.min(100, Math.round((c.completed / c.total) * 100)) : 0;
              const isAvailableCategory = c.total > 0;
              const isComingSoon = !!c.comingSoon;
              const lockedCategory = isComingSoon || !isAvailableCategory;

              const card = (
                <div className="relative rounded-xl border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800/70 p-5 hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-900">
                      <img
                        src={c.icon}
                        alt={`${c.key} icon`}
                        className="h-8 w-8 object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = DEFAULT_ICON;
                        }}
                      />
                    </div>
                    <div>
                      <div className=" font-semibotext-slate-900 dark:text-whiteld">{c.name}</div>
                      <div className="text-xs text-slate-600 dark:text-slate-300">
                        {c.total} available today
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <Progress value={progress} />
                  </div>
                 {lockedCategory && (
                    <span className={`absolute -top-2 left-3 rounded-full text-xs px-2 py-1 shadow ${
                     isComingSoon ? "bg-slate-100 text-slate-700 dark:bg-slate-200 dark:text-slate-800" : "bg-amber-100 text-amber-800"
                       }`}>
                        {isComingSoon ? "Coming Soon" : "Not available till tomorrow"}
                 </span>
                   )}
                </div>
              );

              return lockedCategory ? (
                <div key={c.key} className="opacity-90 cursor-not-allowed">{card}</div>
              ) : (
                <Link
                  key={c.key}
                  to={`/challenges?category=${encodeURIComponent(c.key)}`}
                  className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  {card}
                </Link>
              );
            })}
      </div>

    </div>
  );
}