export function isPremiumUser() {
  try {
    const raw = localStorage.getItem("user");
    if (!raw) return false;
    const u = JSON.parse(raw);
    return (
      !!u?.isPremium ||
      (Array.isArray(u?.roles) && u.roles.includes("premium")) ||
      u?.role === "premium" ||
      (typeof u?.plan === "string" && u.plan.toLowerCase() === "premium") ||
      u?.subscription?.status === "active"
    );
  } catch {
    return false;
  }
}