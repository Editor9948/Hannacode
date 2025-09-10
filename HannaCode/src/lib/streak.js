function key(userId = "anon") {
  return `challenge-streak:${userId}`;
}

export function getStreak(userId) {
  try {
    const raw = localStorage.getItem(key(userId));
    return raw ? JSON.parse(raw) : { count: 0, lastDate: null };
  } catch {
    return { count: 0, lastDate: null };
  }
}

export function bumpStreak(userId) {
  const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  const s = getStreak(userId);
  if (!s.lastDate) {
    s.count = 1;
  } else {
    const prev = new Date(s.lastDate);
    const dt = (new Date(today) - prev) / 86400000;
    if (dt === 1) s.count += 1;
    else if (dt === 0) s.count = s.count; // same day
    else s.count = 1; // reset
  }
  s.lastDate = today;
  localStorage.setItem(key(userId), JSON.stringify(s));
  return s;
}