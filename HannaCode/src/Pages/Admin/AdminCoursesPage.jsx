import { useEffect, useState } from "react";

const API_URL = process.env.REACT_APP_API_URL 

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchCourses = async () => {
      const res = await fetch(`${API_URL}/admin/courses`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) setCourses(data.data);
    };
    fetchCourses();
  }, []);
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Manage Courses</h1>
      <ul>
        {courses.map((c) => (
          <li key={c._id}>{c.title}</li>
        ))}
      </ul>
      
    </div>
  );
}