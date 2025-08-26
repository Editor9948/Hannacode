// Simple Server-Sent Events (SSE) management per course
const clientsByCourse = new Map(); // courseId => Set<res>

function addClient(courseId, res) {
  if (!clientsByCourse.has(courseId)) {
    clientsByCourse.set(courseId, new Set());
  }
  clientsByCourse.get(courseId).add(res);
}

function removeClient(courseId, res) {
  const set = clientsByCourse.get(courseId);
  if (!set) return;
  set.delete(res);
  if (set.size === 0) clientsByCourse.delete(courseId);
}

function broadcast(courseId, eventName, data) {
  const set = clientsByCourse.get(String(courseId));
  if (!set || set.size === 0) return;
  const payload = typeof data === 'string' ? data : JSON.stringify(data);
  for (const res of set) {
    try {
      res.write(`event: ${eventName}\n`);
      res.write(`data: ${payload}\n\n`);
    } catch (e) {
      // Best-effort: drop broken connection
      try { removeClient(courseId, res); } catch (_) {}
    }
  }
}

module.exports = {
  addClient,
  removeClient,
  broadcast,
};
