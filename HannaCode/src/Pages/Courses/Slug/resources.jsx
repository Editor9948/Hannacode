import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { Lock, BookOpen } from "lucide-react";
import ResourceCard from "../../../components/resource-card/resourceCard";

const INDEX_URL = `${process.env.PUBLIC_URL || ""}/resources/index.json`;
const manifestCache = new Map(); // slug -> manifest

export default function ResourcesPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(Boolean(slug));
  const [error, setError] = useState(null);
  const [isPremiumUser, setIsPremiumUser] = useState(false);
  const [courseData, setCourseData] = useState({ title: "Resources", description: "Course materials and downloads." });
  const [resources, setResources] = useState({ cheatSheets: [], exercises: [], projectFiles: [], books: [] });
  const [courseIndex, setCourseIndex] = useState([]); // [{slug,title}]

  // Detect premium once (localStorage only for speed)
  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      if (raw) {
        const u = JSON.parse(raw);
        const premium =
          !!u?.isPremium ||
          (Array.isArray(u?.roles) && u.roles.includes("premium")) ||
          u?.role === "premium" ||
          (typeof u?.plan === "string" && u.plan.toLowerCase() === "premium") ||
          (u?.subscription?.status === "active");
        setIsPremiumUser(!!premium);
      }
    } catch {}
  }, []);

  // Load course index (optional). If user hits /resources (no slug) via external link, send to first.
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const r = await fetch(INDEX_URL, { cache: "no-store" });
        if (r.ok) {
          const idx = await r.json();
          if (mounted && Array.isArray(idx)) {
            setCourseIndex(idx);
            if (!slug && idx.length) {
              navigate(`/resources/${encodeURIComponent(idx[0].slug)}`, { replace: true });
            }
          }
        }
      } catch {
        // ignore
      }
    })();
    return () => { mounted = false; };
  }, [slug, navigate]);

  async function loadStaticManifest(courseSlug) {
    if (manifestCache.has(courseSlug)) {
      return manifestCache.get(courseSlug);
    }
    const base = process.env.PUBLIC_URL || "";
    const url = `${base}/resources/${encodeURIComponent(courseSlug)}.json`;
    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        console.warn("[Resources] Manifest not found:", url, res.status);
        return null;
      }
      const data = await res.json();
      if (!data || typeof data !== "object") return null;
      manifestCache.set(courseSlug, data);
      return data;
    } catch (e) {
      console.error("[Resources] Manifest fetch failed:", courseSlug, e);
      return null;
    }
  }

  // StrictMode de-dupe (dev)
  const fetchedSlugsRef = useRef(new Set());
  useEffect(() => {
    if (!slug) return;
    if (process.env.NODE_ENV === "development" && fetchedSlugsRef.current.has(slug)) {
      // Already fetched this slug in this session
      setLoading(false);
      const cached = manifestCache.get(slug);
      if (cached) {
        setCourseData({
          title: cached.title || `Resources for ${slug}`,
          description: cached.description || "Course resources and downloads.",
        });
        setResources({
          cheatSheets: cached.cheatSheets || [],
          exercises: cached.exercises || [],
          projectFiles: cached.projectFiles || [],
          books: cached.books || [],
        });
      }
      return;
    }
    fetchedSlugsRef.current.add(slug);

    let mounted = true;
    (async () => {
      setLoading(true);
      setError(null);
      const staticData = await loadStaticManifest(slug);
      if (mounted) {
        if (staticData) {
          setCourseData({
            title: staticData.title || `Resources for ${slug}`,
            description: staticData.description || "Course resources and downloads.",
          });
          setResources({
            cheatSheets: staticData.cheatSheets || [],
            exercises: staticData.exercises || [],
            projectFiles: staticData.projectFiles || [],
            books: staticData.books || [],
          });
        } else {
          setError("No resources found for this course.");
          setResources({ cheatSheets: [], exercises: [], projectFiles: [], books: [] });
        }
        setLoading(false);
      }
    })();

    return () => { mounted = false; };
  }, [slug]);

  // Visible sets: Books are premium-only
  const visible = useMemo(() => ({
    books: isPremiumUser ? (resources.books || []) : [],
    cheatSheets: resources.cheatSheets || [],
    exercises: resources.exercises || [],
    projectFiles: resources.projectFiles || [],
  }), [resources, isPremiumUser]);

  // Redirect screen
  if (!slug) {
    return (
      <main className="container py-8">
        <div className="text-center py-24">
          <div className="loader inline-block mb-4" aria-hidden />
          <p>Loading resources…</p>
        </div>
      </main>
    );
  }

  if (loading) {
    return (
      <main className="container py-8">
        <div className="text-center py-24">
          <div className="loader inline-block mb-4" aria-hidden />
          <p>Loading resources…</p>
        </div>
      </main>
    );
  }

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
        <p className="text-xl text-muted-foreground mb-4">{courseData.description}</p>

        {/* Optional selector */}
        {courseIndex.length > 0 && (
          <div className="mb-4 flex items-center gap-3">
            <label className="text-sm text-muted-foreground">Course:</label>
            <select
              className="border rounded-md px-2 py-1 bg-background"
              value={slug || ""}
              onChange={(e) => {
                const next = e.target.value;
                if (next) navigate(`/resources/${encodeURIComponent(next)}`);
              }}
            >
              {courseIndex.map((c) => (
                <option key={c.slug} value={c.slug}>{c.title || c.slug}</option>
              ))}
            </select>
          </div>
        )}

        {!isPremiumUser && (resources.books?.length || 0) > 0 && (
          <div className="mb-4 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 text-sm">
            Books are premium-only. <Link to="/pricing" className="text-primary underline ml-1">Upgrade to unlock</Link>.
          </div>
        )}

        <div className="flex gap-4 mb-6">
          <Link to={`/courses/${slug}`}>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" /> Course Overview
            </Button>
          </Link>
          <Link to={`/courses/${slug}/playground`}>
            <Button variant="outline">Code Playground</Button>
          </Link>
        </div>
      </div>

      <Tabs defaultValue="books" className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="books">Books</TabsTrigger>
          <TabsTrigger value="cheatSheets">Cheat Sheets</TabsTrigger>
          <TabsTrigger value="exercises">Exercises</TabsTrigger>
          <TabsTrigger value="projectFiles">Project Files</TabsTrigger>
        </TabsList>

        <TabsContent value="books" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.books?.length ? (
              visible.books.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type || "Book"}
                  isPremium={true}
                  downloadUrl={resource.downloadUrl}
                  fileSize={resource.fileSize}
                  fileType={resource.fileType || "PDF"}
                  canAccess={isPremiumUser}
                  requiresPremium
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-3">
                {isPremiumUser ? "No books available." : "Books are premium-only. Upgrade to access."}
              </p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="cheatSheets" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.cheatSheets.length ? (
              visible.cheatSheets.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  isPremium={resource.isPremium}
                  downloadUrl={resource.downloadUrl}
                  fileSize={resource.fileSize}
                  fileType={resource.fileType}
                  canAccess={isPremiumUser}
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-3">No cheat sheets available.</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="exercises" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.exercises.length ? (
              visible.exercises.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  isPremium={resource.isPremium}
                  downloadUrl={resource.downloadUrl}
                  fileSize={resource.fileSize}
                  fileType={resource.fileType}
                  canAccess={isPremiumUser}
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-3">No exercises available.</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="projectFiles" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visible.projectFiles.length ? (
              visible.projectFiles.map((resource) => (
                <ResourceCard
                  key={resource.id}
                  title={resource.title}
                  description={resource.description}
                  type={resource.type}
                  isPremium={resource.isPremium}
                  downloadUrl={resource.downloadUrl}
                  fileSize={resource.fileSize}
                  fileType={resource.fileType}
                  canAccess={isPremiumUser}
                />
              ))
            ) : (
              <p className="text-sm text-muted-foreground col-span-3">No project files available.</p>
            )}
          </div>
        </TabsContent>
      </Tabs>

      <Card className="bg-lavender/30 dark:bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Lock className="mr-2 h-5 w-5 text-primary" /> Premium Resources
          </CardTitle>
          <CardDescription>
            Upgrade to our Premium plan to access all resources, including advanced cheat sheets, exercises, and project files.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/pricing">
              <Button className="bg-primary hover:bg-primary/90">Upgrade to Premium</Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline">Explore Free Resources</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {error ? <p className="text-sm text-red-500 mt-4">{error}</p> : null}
    </div>
  );
}