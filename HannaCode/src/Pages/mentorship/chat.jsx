import React, { useState, useRef, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Input } from "../../components/ui/input";
import { ArrowLeft, Send, Calendar, Paperclip, Code, Smile, Mic, ChevronDown } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../../components/ui/popover";
import { EmojiPicker } from "../../components/ui/emoji-picker";
import { CodeBlock } from "../../components/ui/code-block";
import { AlertCircle } from "lucide-react";

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1';

export default function ChatPage() {
  const {mentorshipId} = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [mentor, setMentor] = useState(null);
  const [isRecording, setIsRecording] = useState(false);
  const [showCodeEditor, setShowCodeEditor] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUserScrolledUp, setIsUserScrolledUp] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const navigate = useNavigate();

  // Get token and user from localStorage
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Debug logging
  console.log("=== CHAT COMPONENT DEBUG ===");
  console.log("API_URL:", API_URL);
  console.log("Token exists:", !!token);
  console.log("User:", user);
  console.log("MentorshipId:", mentorshipId);
  console.log("MentorshipId type:", typeof mentorshipId);
  console.log("MentorshipId length:", mentorshipId?.length);
  console.log("=== DEBUG END ===");  // Debug logging
  console.log("=== FRONTEND DEBUG ===");
  console.log("API_URL:", API_URL);
  console.log("Token exists:", !!token);
  console.log("User object:", user);
  console.log("User ID:", user?.id);
  console.log("User _id:", user?._id);
  console.log("User role:", user?.role);
  console.log("=== FRONTEND DEBUG END ===");

  // Check authentication on mount
  useEffect(() => {
    if (!token || !user) {
      navigate("/login");
      return;
    }
  }, [token, user, navigate]);

  // Fetch mentor info and chat history from backend
  useEffect(() => {
    if (!token || !user) return;
    setIsLoading(true);
    setError(null);

    // Test basic connectivity first
    console.log("Testing basic connectivity...");
    console.log("API_URL being used:", API_URL);

    // Fetch mentor info
    console.log("API_URL:", API_URL);
    console.log("mentorshipId:", mentorshipId);
    
    // Check if API_URL is valid
    if (!API_URL) {
      console.error("API_URL is not defined");
      setError("Configuration error: API URL is not defined");
      setIsLoading(false);
      return;
    }
    
    // Validate mentorshipId
    if (!mentorshipId || mentorshipId === 'undefined' || typeof mentorshipId !== 'string') {
      console.error("Invalid mentorshipId:", mentorshipId);
      setError("Invalid mentorship session ID. Please check the URL.");
      setIsLoading(false);
      return;
    }
    
    console.log("Making session request to:", `${API_URL}/mentorship/sessions/${mentorshipId}`);
    console.log("Request headers:", {
      "Authorization": `Bearer ${token ? token.substring(0, 20) + "..." : "no token"}`,
      "Content-Type": "application/json"
    });
    
    console.log("About to make fetch request...");
    console.log("API_URL value:", API_URL);
    console.log("Full URL:", `${API_URL}/mentorship/sessions/${mentorshipId}?t=${Date.now()}`);
    console.log("mentorshipId value:", mentorshipId);
    console.log("Token exists:", !!token);
    
    // Test basic connectivity first
    console.log("Testing basic connectivity...");
    console.log("API_URL being used:", API_URL);
    
    // Try a simple fetch without any complex options
    fetch(`${API_URL}/mentorship/sessions`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
    .then(res => {
      console.log("Simple test response status:", res.status);
      return res.json();
    })
    .then(data => {
      console.log("Simple test response data:", data);
    })
    .catch(err => {
      console.error("Simple test failed:", err);
      console.error("Error type:", err.constructor.name);
      console.error("Error message:", err.message);
    });
    
    // Main session fetch with simplified approach
    console.log("=== STARTING MAIN SESSION FETCH ===");
    fetch(`${API_URL}/mentorship/sessions/${mentorshipId}`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
       .then(res => {
         console.log("=== SESSION FETCH SUCCESS ===");
         console.log("Session data response status:", res.status);
         console.log("Session data response ok:", res.ok);
         console.log("Session data response headers:", res.headers);
         
         if (!res.ok) {
           if (res.status === 401) {
             localStorage.removeItem("token");
             localStorage.removeItem("user");
             navigate("/login");
             return;
           }
           if (res.status === 404) {
             throw new Error("Mentorship session not found. Please check the session ID or create a new session.");
           }
           throw new Error(`HTTP error! status: ${res.status}`);
         }
         return res.json();
       })
       .then(data => {
         if (data && data.data) {
           console.log("Mentorship session data:", data.data);
           console.log("Session type:", data.data.type);
           console.log("mentorId field:", data.data.mentorId);
           console.log("mentorId._id:", data.data.mentorId?._id);
           console.log("mentorId type:", typeof data.data.mentorId);
           console.log("mentor field:", data.data.mentor);
           console.log("Full session data structure:", JSON.stringify(data.data, null, 2));
           
           // Extract mentorId from the session data
           // The backend returns populated mentorId and userId fields
           let mentorId = null;
           
           if (data.data.mentorId) {
             // mentorId is populated by the backend, so it's an object with _id, name, email
             mentorId = data.data.mentorId._id || data.data.mentorId;
           }
           
           console.log("Extracted mentorId:", mentorId);
           console.log("MentorId type:", typeof mentorId);

           // Validate mentorId before making the request
           if (!mentorId || mentorId === 'undefined' || mentorId === 'null' || mentorId === undefined) {
             console.error("Invalid mentorId:", mentorId);
             console.error("Session data structure:", data.data);
             setError("Invalid mentor ID in session data. Please try refreshing the page or contact support.");
             return;
           }

           console.log("Making request to:", `${API_URL}/mentorship/mentors/${mentorId}`);
           
           return fetch(`${API_URL}/mentorship/mentors/${mentorId}`, {
           method: 'GET',
           headers: {
           "Authorization": `Bearer ${token}`,
           "Content-Type": "application/json"
          }
         })
             .then(res => {
               if (!res.ok) {
                 if (res.status === 401) {
                   localStorage.removeItem("token");
                   localStorage.removeItem("user");
                   navigate("/login");
                   return;
                 }
                 throw new Error(`HTTP error! status: ${res.status}`);
               }
               return res.json();
             })
             .then(mentorData => {
              if (mentorData && mentorData.data) {
               setMentor(mentorData.data);
                } else {
                  console.error("Invalid mentor data structure:", mentorData);
                  setError("Failed to load mentor information");
                }
             });
         }
       })
               .catch(error => {
          console.error("=== DETAILED SESSION FETCH ERROR ===");
          console.error("Error fetching session:", error);
          console.error("Error name:", error.name);
          console.error("Error message:", error.message);
          console.error("Error stack:", error.stack);
          console.error("Error cause:", error.cause);
          console.error("Full error object:", JSON.stringify(error, Object.getOwnPropertyNames(error)));
          console.error("=== END DETAILED ERROR ===");
          
          let errorMessage = "Network error";
          if (error.name === 'TypeError') {
            if (error.message.includes('fetch') || error.message.includes('Failed to fetch')) {
              errorMessage = "Failed to connect to server. Please check if the backend is running and accessible.";
            } else if (error.message.includes('Cannot read properties of undefined')) {
              errorMessage = "Data structure error: " + error.message;
            } else {
              errorMessage = "JavaScript error: " + error.message;
            }
          } else if (error.message.includes('CORS')) {
            errorMessage = "CORS error. Please check server configuration.";
          } else if (error.message.includes('HTTP error')) {
            errorMessage = error.message;
          } else {
            errorMessage = error.message;
          }
          
          setError(`${errorMessage}`);
        })
      .finally(() => {
        setIsLoading(false);
      });

    // Fetch chat history
    console.log("=== STARTING CHAT HISTORY FETCH ===");
    fetch(`${API_URL}/mentorship/chat/${mentorshipId}/history`, {
      method: 'GET',
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log("Chat history response status:", res.status);
        if (!res.ok) {
          if (res.status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            navigate("/login");
            return;
          }
          if (res.status === 429) {
            throw new Error("Too many requests. Please wait a moment and try again.");
          }
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        console.log("Chat history response:", data);
        console.log("Messages array:", data.data);
        console.log("Messages length:", data.data ? data.data.length : 0);
        setMessages(Array.isArray(data.data) ? data.data : []);
      })
      .catch(error => {
        console.error("Error fetching chat history:", error);
        setError(error.message || "Failed to load chat history");
      });

    // Set up polling for new messages
    const pollInterval = setInterval(() => {
      fetch(`${API_URL}/mentorship/chat/${mentorshipId}/history`, {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        cache: 'no-cache'
      })
        .then(res => {
          console.log("Polling response status:", res.status);
          if (!res.ok) {
            if (res.status === 401) {
              clearInterval(pollInterval);
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/login");
              return;
            }
            if (res.status === 429) {
              console.log("Rate limited, will retry later");
              return;
            }
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          return res.json();
        })
        .then(data => {
          console.log("Polling response:", data);
          console.log("Current messages count:", messages.length);
          console.log("New messages count:", data.data ? data.data.length : 0);
          
          if (data && Array.isArray(data.data)) {
            // Only update messages if there are actually new messages
            const newMessagesCount = data.data.length;
            const currentMessagesCount = messages.length;
            
            if (newMessagesCount > currentMessagesCount) {
              setMessages(data.data);
            } else if (newMessagesCount === currentMessagesCount) {
              // Same count - only update if content is different (to handle message updates)
              const lastCurrentMessage = messages[messages.length - 1];
              const lastNewMessage = data.data[data.data.length - 1];
              
              if (!lastCurrentMessage || !lastNewMessage || 
                  lastCurrentMessage._id !== lastNewMessage._id ||
                  lastCurrentMessage.content !== lastNewMessage.content) {
                setMessages(data.data);
              }
            }
          }
        })
        .catch(error => {
          console.error("Error polling chat history:", error);
        });
    }, 5000); // Poll every 5 seconds

    // Cleanup on unmount
    return () => {
      clearInterval(pollInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mentorshipId, token, navigate]); // messages intentionally excluded to prevent infinite polling

  // Scroll to bottom of messages only when appropriate
  useEffect(() => {
    const scrollToBottom = () => {
      if (messagesEndRef.current && !isUserScrolledUp) {
        messagesEndRef.current.scrollIntoView({ behavior: "instant" });
      }
    };

    // Small delay to ensure DOM has updated
    const timeoutId = setTimeout(scrollToBottom, 100);
    return () => clearTimeout(timeoutId);
  }, [messages, isUserScrolledUp]);

  // Handle scroll detection to prevent auto-scroll when user scrolls up
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 50; // 50px threshold
      setIsUserScrolledUp(!isAtBottom);
    }
  };

  // Scroll to bottom when user sends a message (always scroll for own messages)
  const scrollToBottomForced = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      setIsUserScrolledUp(false);
    }
  };

  // Send message to backend
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const messageData = {
      content: newMessage,
      type: "text"
    };

    // Optimistically add message to UI
    const tempMessage = {
      _id: Date.now().toString(), // Temporary ID
      content: newMessage,
      type: "text",
      sender: user,
      createdAt: new Date(),
      isTemp: true // Flag to identify temporary messages
    };

    setMessages((prev) => [...prev, tempMessage]);
    setNewMessage("");
    
    // Force scroll to bottom when user sends a message
    scrollToBottomForced();

    try {
      console.log("Sending message to URL:", `${API_URL}/mentorship/chat/${mentorshipId}/messages`);
      console.log("Request headers:", {
        "Authorization": `Bearer ${token ? token.substring(0, 20) + "..." : "NO_TOKEN"}`,
        "Content-Type": "application/json"
      });
      console.log("Request body:", messageData);

      // Create a fetch with timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch(`${API_URL}/mentorship/chat/${mentorshipId}/messages`, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(messageData),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      console.log("Response status:", response.status);
      console.log("Response ok:", response.ok);
      console.log("Response headers:", Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response text:", errorText);
        throw new Error(`HTTP ${response.status}: ${errorText}`);
      }

      const result = await response.json();
      console.log("Success response:", result);
      
      // Replace temporary message with real one from server
      if (result.success && result.data) {
        setMessages((prev) => 
          prev.map(msg => 
            msg.isTemp && msg.content === newMessage 
              ? { ...result.data, sender: user }
              : msg
          )
        );
      }
    } catch (err) {
      console.error("Error sending message:", err);
      console.error("Error type:", err.name);
      console.error("Error message:", err.message);
      console.error("Error stack:", err.stack);
      
      let errorMessage = "Failed to send message";
      if (err.name === 'AbortError') {
        errorMessage = "Request timed out. Please try again.";
      } else if (err.name === 'TypeError' && err.message.includes('fetch')) {
        errorMessage = "Network error. Please check your connection and try again.";
      } else if (err.message.includes('HTTP')) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      
      // Remove temporary message on error
      setMessages((prev) => prev.filter(msg => !msg.isTemp || msg.content !== newMessage));
    }
  };

  const handleCodeShare = (code) => {
    const messageData = {
      content: code,
      type: "code",
      language: "javascript" // You can make this dynamic
    };

    // Optimistically add message to UI
    const tempMessage = {
      _id: Date.now().toString(),
      content: code,
      type: "code",
      sender: user,
      createdAt: new Date(),
      metadata: { language: "javascript" },
      isTemp: true
    };

    setMessages((prev) => [...prev, tempMessage]);
    setShowCodeEditor(false);

    // Send to backend
    fetch(`${API_URL}/mentorship/chat/${mentorshipId}/messages`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(messageData),
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Failed to send code");
    }).then(result => {
      if (result.success && result.data) {
        setMessages((prev) => 
          prev.map(msg => 
            msg.isTemp && msg.content === code 
              ? { ...result.data, sender: user }
              : msg
          )
        );
      }
    }).catch(err => {
      console.error("Error sending code:", err);
      setError("Failed to send code");
      // Remove temporary message on error
      setMessages((prev) => prev.filter(msg => !msg.isTemp || msg.content !== code));
    });
  };

  const startVoiceRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      const audioChunks = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunks.push(event.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Optimistically add message to UI
        const tempMessage = {
          _id: Date.now().toString(),
          content: audioUrl,
          type: "voice",
          sender: user,
          createdAt: new Date(),
          isTemp: true
        };

        setMessages((prev) => [...prev, tempMessage]);
        
        // Send to backend
        const formData = new FormData();
        formData.append('audio', audioBlob);

        try {
          const response = await fetch(`${API_URL}/mentorship/chat/${mentorshipId}/voice-message`, {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${token}`,
            },
            body: formData,
          });

          if (!response.ok) {
            throw new Error("Failed to send voice message");
          }

          const result = await response.json();
          
          // Replace temporary message with real one from server
          if (result.success && result.data) {
            setMessages((prev) => 
              prev.map(msg => 
                msg.isTemp && msg.type === "voice" 
                  ? { ...result.data, sender: user }
                  : msg
              )
            );
          }
        } catch (err) {
          console.error("Error sending voice message:", err);
          setError("Failed to send voice message");
          // Remove temporary message on error
          setMessages((prev) => prev.filter(msg => !msg.isTemp || msg.type !== "voice"));
        }
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error starting recording:", err);
    }
  };

  const stopVoiceRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const formatTime = (date) => {
  if (!date) return "";
  const d = typeof date === "string" ? new Date(date) : date;
  if (isNaN(d.getTime())) return "";
  return d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
};

  if (isLoading) {
    return (
      <div className="container py-8">
        <div className="flex items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>Loading chat session...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-8">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
          <div className="text-center max-w-md">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Error</h2>
            <p className="text-muted-foreground mb-4">{error}</p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" onClick={() => navigate("/mentorship")}>
                Back to Mentorship
              </Button>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!mentor && !isLoading && !error) {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <p className="text-red-500">Mentor not found.</p>
        </div>
      </div>
    </div>
  );
}

  return (
    <div className="container py-8">
      <Link to="/mentorship" className="flex items-center text-primary hover:underline mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Mentors
      </Link>
      <p className="text-xs text-gray-500 italic mt-2">
        Message will auto-delete after 7 days for privacy and performance.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 overflow-auto">
        <div className="lg:col-span-3">
          <Card className="h-[calc(100vh-200px)] flex flex-col">
            <CardHeader className="border-b px-4 py-3">
              <div className="flex items-center justify-between ">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                    <AvatarFallback>
                      {mentor.name
                        ? mentor.name.split(" ")
                            .map((n) => n[0])
                            .join("")
                        : "?"}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base">{mentor.name || "Unknown Mentor"}</CardTitle>
                    <div className="flex items-center">
                      <div
                      className={`h-2 w-2 rounded-full mr-1 ${
                         mentor.status === "online" ? "bg-primary" : "bg-gray-400"
                           }`}
                         ></div>
                           <span className="text-xs text-muted-foreground">
                        {mentor.status === "online" ? "Online" : "Offline"}
                       </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/mentorship/book/${mentor._id}`}>
                    <Calendar className="mr-2 h-4 w-4" /> Book Session
                  </Link>
                </Button>
              </div>
            </CardHeader>
            <CardContent 
              className="flex-1 overflow-y-auto p-4 relative" 
              ref={messagesContainerRef}
              onScroll={handleScroll}
            >
              <div className="space-y-4">
                {messages.map((message) => {
                  // Determine if message is from current user
                  const isCurrentUser = message.sender && (
                    (typeof message.sender === 'object' && message.sender._id === user._id) ||
                    (typeof message.sender === 'string' && message.sender === user._id)
                  );
                  
                  return (
                    <div
                      key={message._id || message.id}
                      className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          isCurrentUser ? "bg-primary text-primary-foreground" : "bg-muted"
                        }`}
                      >
                        {message.type === "code" ? (
                          <CodeBlock code={message.content || message.text} language={message.metadata?.language || "javascript"} />
                        ) : message.type === "voice" ? (
                          <audio controls src={message.content || message.audioUrl} className="w-full" />
                        ) : (
                          <p>{message.content || message.text}</p>
                        )}
                        <div className="flex items-center justify-between mt-1">
                          <p className={`text-xs ${
                            isCurrentUser
                              ? "text-primary-foreground/70"
                              : "text-muted-foreground"
                          }`}>
                            {formatTime(message.createdAt || message.timestamp)}
                          </p>
                          {message.reactions && message.reactions.length > 0 && (
                            <div className="flex gap-1">
                              {message.reactions.map((reaction, index) => (
                                <span key={index}>{reaction.emoji}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Scroll to bottom button */}
              {isUserScrolledUp && (
                <div className="absolute bottom-20 right-6">
                  <Button
                    onClick={scrollToBottomForced}
                    size="sm"
                    className="rounded-full shadow-lg"
                    variant="secondary"
                  >
                    <ChevronDown className="h-4 w-4 mr-1" />
                    New messages
                  </Button>
                </div>
              )}
            </CardContent>
            <div className="border-t p-4">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <div className="flex gap-2">
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 shrink-0 rounded-full"
                    onClick={() => setShowCodeEditor(!showCodeEditor)}
                  >
                    <Code className="h-5 w-5" />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 shrink-0 rounded-full"
                    onClick={isRecording ? stopVoiceRecording : startVoiceRecording}
                  >
                    <Mic className={`h-5 w-5 ${isRecording ? 'text-red-500' : ''}`} />
                  </Button>
                  <Button 
                    type="button" 
                    variant="ghost" 
                    size="icon" 
                    className="h-10 w-10 shrink-0 rounded-full"
                  >
                    <Paperclip className="h-5 w-5" />
                  </Button>
                </div>
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Popover>
                  <PopoverTrigger asChild>
                    <Button type="button" variant="ghost" size="icon" className="h-10 w-10 shrink-0 rounded-full">
                      <Smile className="h-5 w-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 z-[9999]">
                    <EmojiPicker onEmojiSelect={(emoji) => setNewMessage(prev => prev + emoji)} />
                  </PopoverContent>
                </Popover>
                <Button type="submit" size="icon" className="h-10 w-10 shrink-0 rounded-full bg-primary">
                  <Send className="h-5 w-5" />
                </Button>
              </form>
              {showCodeEditor && (
                <div className="mt-4">
                  <CodeBlock
                    editable
                    onSave={handleCodeShare}
                    initialCode="// Write your code here"
                  />
                </div>
              )}
            </div>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>About Your Mentor</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={mentor.avatar || "/placeholder.svg"} alt={mentor.name} />
                  <AvatarFallback>
                    {mentor.name
                      ? mentor.name.split(" ")
                          .map((n) => n[0])
                          .join("")
                      : "?"}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold text-lg">{mentor.name || "Unknown Mentor"}</h3>
                  <p className="text-muted-foreground">{mentor.role || "Mentor"}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {mentor.specialties && Array.isArray(mentor.specialties) 
                  ? mentor.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))
                  : <Badge variant="secondary">General Mentoring</Badge>}
              </div>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <strong>Response Time:</strong> Usually within 24 hours
                </p>
                <p>
                  <strong>Chat Guidelines:</strong>
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Keep messages concise and specific</li>
                  <li>Share code snippets when relevant</li>
                  <li>For complex issues, consider booking a session</li>
                </ul>
              </div>

              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to={`/mentorship/book/${mentor._id}`}>
                  <Calendar className="mr-2 h-4 w-4" /> Book a Session
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}