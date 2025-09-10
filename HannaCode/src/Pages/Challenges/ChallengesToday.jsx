import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getToday } from "../../lib/challengesApi";

export default function ChallengesIndex() {
  const navigate = useNavigate();

  useEffect(() => {
    let mounted = true;
    (async () => {
      const today = await getToday();
      if (!mounted) return;
      navigate(today?.id ? `/challenges/${today.id}` : "/challenges/today", { replace: true });
    })();
    return () => { mounted = false; };
  }, [navigate]);

  return (
    <main className="container py-8">
      <div className="text-center py-24">
        <div className="loader inline-block mb-4" aria-hidden />
        <p>Loading today’s challenge…</p>
      </div>
    </main>
  );
}