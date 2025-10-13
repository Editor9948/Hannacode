export async function fetchNotifications() {
  const res = await fetch('/api/v1/notifications', { credentials: 'include' })
  if (!res.ok) throw new Error('Failed to fetch notifications')
  return res.json()
}

export async function markRead(ids=[]) {
  const res = await fetch('/api/v1/notifications/mark-read', { method: 'POST', credentials: 'include', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ ids }) })
  if (!res.ok) throw new Error('Failed to mark read')
  return res.json()
}

export async function markAllRead() {
  const res = await fetch('/api/v1/notifications/mark-all-read', { method: 'POST', credentials: 'include' })
  if (!res.ok) throw new Error('Failed to mark all read')
  return res.json()
}
