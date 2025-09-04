import React, { useEffect, useState } from "react";

const API_BASE = (process.env.REACT_APP_API_URL || "").replace(/\/$/, "");
const RAW_AI = (process.env.REACT_APP_HANNAAI_URL || "http://localhost:3001").trim();
const HANNAAI_URL = /^https?:\/\//i.test(RAW_AI) ? RAW_AI : `http://${RAW_AI.replace(/^\/+/, "")}`;

export default function HannaAIBubble() {
  const [loading, setLoading] = useState(true);
  const [isPremium, setIsPremium] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const raw = localStorage.getItem("user");
        if (raw) {
          const u = JSON.parse(raw);
          const premium =
            !!u?.isPremium ||
            (Array.isArray(u?.roles) && u.roles.includes("premium")) ||
            u?.role === "premium";
          if (mounted) {
            setIsPremium(!!premium);
            setLoading(false);
            return;
          }
        }
        const token = localStorage.getItem("token");
        if (!token || !API_BASE) return;
        for (const path of ["/api/v1/users/me", "/api/v1/auth/me"]) {
          try {
            const r = await fetch(`${API_BASE}${path}`, { headers: { Authorization: `Bearer ${token}` } });
            if (r.ok) {
              const data = await r.json();
              const usr = data?.data || data?.user || data;
              const premium =
                !!usr?.isPremium ||
                (Array.isArray(usr?.roles) && usr.roles.includes("premium")) ||
                usr?.role === "premium";
              if (mounted) setIsPremium(!!premium);
              break;
            }
          } catch {}
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const onLockedClick = () => {
    if (!loading && !isPremium) setShowUpgrade(true);
  };

  const Bubble = ({ children }) => (
    <div
      className={`rounded-full border bg-white dark:bg-background p-0 ${loading ? "opacity-70 cursor-wait" : ""}`}
      style={{ position: "fixed", bottom: 24, right: 24, width: 56, height: 56, zIndex: 9999, boxShadow: "0 8px 24px rgba(0,0,0,0.18)" }}
    >
      {children}
      {!isPremium && !loading && (
        <span style={{ position: "absolute", top: -8, right: -8, fontSize: 10, background: "var(--primary, #6c5ce7)", color: "#fff", padding: "2px 6px", borderRadius: 6 }}>
          Pro
        </span>
      )}
    </div>
  );

  if (loading) {
    return (
      <Bubble>
        <img src="/hannaai-logo.png" alt="HannaAI" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }} />
      </Bubble>
    );
  }

  return (
    <>
      {isPremium ? (
        // Use a real anchor so the browser navigates to the external URL reliably
        <Bubble>
          <a
            href={HANNAAI_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-hannaai={HANNAAI_URL}
            aria-label="Open HannaAI"
            title="HannaAI"
            style={{ display: "block", width: "100%", height: "100%" }}
          >
            <img src="/hannaai-logo.png" alt="HannaAI" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }} />
          </a>
        </Bubble>
      ) : (
        <Bubble>
          <button
            onClick={onLockedClick}
            aria-label="HannaAI (Premium only)"
            title="HannaAI (Premium only)"
            style={{ display: "block", width: "100%", height: "100%", background: "transparent", border: "none", padding: 0, cursor: "pointer" }}
          >
            <img src="/hannaai-logo.png" alt="HannaAI" style={{ width: "100%", height: "100%", objectFit: "contain", padding: 8 }} />
          </button>
        </Bubble>
      )}

     {showUpgrade && (
        <div
          role="dialog"
          aria-modal="true"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 10000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0,0,0,0.4)",
          }}
          onClick={() => setShowUpgrade(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="border rounded-xl"
            style={{
              // shadcn theme tokens with safe fallbacks
              background: "hsl(var(--card, 0 0% 100%))",
              color: "hsl(var(--card-foreground, 222.2 47.4% 11.2%))",
              padding: 20,
              width: "min(92vw, 420px)",
              borderColor: "hsl(var(--border, 214.3 31.8% 91.4%))",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <img src="/hannaai-logo.png" alt="HannaAI" width={24} height={24} />
              <h3 style={{ fontWeight: 600, color: "inherit" }}>HannaAI is Premium</h3>
            </div>
            <p style={{ fontSize: 14, opacity: 0.8, marginBottom: 12, color: "inherit" }}>
              Upgrade to Premium to use HannaAI for unlimited programming help.
            </p>
            <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
              <button
                onClick={() => setShowUpgrade(false)}
                className="border rounded-md px-3 py-2 text-sm"
                style={{
                  background: "transparent",
                  color: "hsl(var(--foreground, 222.2 47.4% 11.2%))",
                  borderColor: "hsl(var(--border, 214.3 31.8% 91.4%))",
                }}
              >
                Maybe later
              </button>
              <a
                href="/pricing"
                className="rounded-md px-3 py-2 text-sm"
                style={{
                  background: "hsl(var(--primary, 221.2 83.2% 53.3%))",
                  color: "hsl(var(--primary-foreground, 210 40% 98%))",
                }}
              >
                Upgrade
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}