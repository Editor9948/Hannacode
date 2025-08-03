import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL 

export default function AdminUsersPage() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/admin/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) setUsers(data.data);
    };
    fetchUsers();
  }, []);
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u._id}>{u.name} ({u.email}) - {u.role}</li>
        ))}
      </ul>
    </div>
  );
}