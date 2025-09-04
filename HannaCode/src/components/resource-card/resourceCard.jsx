import React, { useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export default function ResourceCard({
  title,
  description,
  type,
  isPremium,           // per-item premium flag from manifest
  requiresPremium = false, // force premium (e.g., for entire Books tab)
  downloadUrl = "#",
  fileSize = "—",
  fileType,
  canAccess = false,   // pass true for premium users
  checkLink = false,   // set true to HEAD-check the link and disable if 404
}) {
  // derive file type from URL if not provided
  const derivedExt = (() => {
    try {
      const url = new URL(downloadUrl, window.location.origin).pathname;
      const last = url.split("/").pop() || "";
      const ext = last.includes(".") ? last.split(".").pop() : "";
      return (ext || "").toLowerCase();
    } catch {
      const qless = (downloadUrl || "").split("?")[0];
      const last = (qless || "").split("/").pop() || "";
      const ext = last.includes(".") ? last.split(".").pop() : "";
      return (ext || "").toLowerCase();
    }
  })();

  const ext = (fileType || derivedExt || "pdf").toLowerCase();

  // Lock if item or category is premium and user cannot access
  const locked = (Boolean(isPremium) || Boolean(requiresPremium)) && !canAccess;

  // Optional link check (HEAD) to avoid 404s on click
  const [linkOk, setLinkOk] = useState(true);
  useEffect(() => {
    if (!checkLink || !downloadUrl || downloadUrl === "#" || locked) return;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(downloadUrl, { method: "HEAD" });
        if (!cancelled) setLinkOk(res.ok);
      } catch {
        if (!cancelled) setLinkOk(false);
      }
    })();
    return () => { cancelled = true; };
  }, [checkLink, downloadUrl, locked]);

  const isDownloadable = !!downloadUrl && downloadUrl !== "#" && !locked && linkOk;

  const getFileTypeIcon = () => {
    switch (ext) {
      case "pdf":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" x2="8" y1="13" y2="13" />
            <line x1="16" x2="8" y1="17" y2="17" />
            <line x1="10" x2="8" y1="9" y2="9" />
          </svg>
        );
      case "zip":
      case "rar":
      case "7z":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-archive">
            <path d="M22 20V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2Z" />
            <circle cx="12" cy="13" r="2" />
          </svg>
        );
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        );
    }
  };

  return (
    <Card className="overflow-hidden h-full relative">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <div className="text-primary">{getFileTypeIcon()}</div>
        </div>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex justify-between items-center text-sm">
          <Badge variant="outline">{type || ext.toUpperCase()}</Badge>
          <span className="text-muted-foreground">{fileSize}</span>
        </div>
        {!locked && !linkOk && (
          <p className="mt-2 text-xs text-red-500">File not found. Please contact support.</p>
        )}
      </CardContent>

      <CardFooter>
        {locked ? (
          <div className="w-full">
            <Button variant="outline" className="w-full" disabled>
              <Lock className="mr-2 h-4 w-4" /> Premium Content
            </Button>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              <a href="/pricing" className="text-primary hover:underline">Upgrade to Premium</a> to access this resource
            </p>
          </div>
        ) : (
          <Button asChild className="w-full bg-primary hover:bg-primary/90" disabled={!isDownloadable}>
            <a
              href={downloadUrl || "#"}
              target="_blank"
              rel="noopener noreferrer"
              // remove download attribute if you prefer in-browser preview for PDFs
              download
              aria-label={`Download ${title || type || ext.toUpperCase()}`}
              title={linkOk ? `Download ${ext.toUpperCase()}` : "File not found"}
            >
              Download {ext.toUpperCase()}
            </a>
          </Button>
        )}
      </CardFooter>

      {(isPremium || requiresPremium) && !locked && (
        <span className="absolute top-2 right-2 text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded border border-primary/20">
          Premium
        </span>
      )}
    </Card>
  );
}