import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL 

export default function MentorInbox() {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = localStorage.getItem("token");
  const [chats, setChats] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/mentorship/mentor/${user._id}/chats`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setChats(data.data || []));
  }, [user._id, token]);


  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      {chats.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul>
          {chats.map((chat) => (
            <li key={chat._id}>
              <Link to={`/mentorship/chat/${chat.mentorship._id}`}>
                Chat with {chat.username}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
