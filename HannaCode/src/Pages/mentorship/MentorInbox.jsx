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
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("Mentor chats data:", data);
        console.log("Chats array:", data.data);
        if (data.data && data.data.length > 0) {
          console.log("First chat structure:", data.data[0]);
        }
        setChats(data.data || []);
      })
      .catch((error) => {
        console.error("Error fetching mentor chats:", error);
      });
  }, [user._id, token]);


  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Inbox</h1>
      {chats.length === 0 ? (
        <p>No messages yet.</p>
      ) : (
        <ul className="space-y-2">
          {chats.map((chat) => (
            <li key={chat._id} className="border rounded-lg p-4 hover:bg-gray-50">
              <Link to={`/mentorship/chat/${chat.mentorship._id}`} className="block">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">
                      Chat with {chat.sender?.name || chat.sender?.username || 'Unknown User'}
                    </span>
                    {chat.content && (
                      <p className="text-sm text-gray-600 mt-1 truncate">
                        {chat.content}
                      </p>
                    )}
                  </div>
                  {chat.createdAt && (
                    <span className="text-xs text-gray-500">
                      {new Date(chat.createdAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
