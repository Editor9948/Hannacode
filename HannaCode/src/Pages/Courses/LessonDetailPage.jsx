import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BookOpen, Info, Layers } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import "react-syntax-highlighter/dist/esm/languages/prism/css";
import "react-syntax-highlighter/dist/esm/languages/prism/markup"; 
import "react-syntax-highlighter/dist/esm/languages/prism/cpp"; 


const API_URL = process.env.REACT_APP_API_URL 

const LessonDetailPage = () => {
  const { slug, lessonId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Quiz state
  const [quizStep, setQuizStep] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizDone, setQuizDone] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  // Scroll effect ref
  const mainRef = useRef(null);

  // Fetch course and lesson
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const courseRes = await axios.get(`${API_URL}/courses/slug/${slug}`);
        if (!courseRes.data.success) throw new Error("Failed to fetch course");
        setCourse(courseRes.data.data);

        // Find lesson in modules
        let foundLesson = null;
        for (const mod of courseRes.data.data.modules) {
          foundLesson = (mod.lessons || []).find(
            (l) => l._id === lessonId || l.id === lessonId
          );
          if (foundLesson) break;
        }
        setLesson(foundLesson);
        setQuizStep(0);
        setQuizScore(0);
        setQuizDone(false);
        setSelectedOption(null);
        setShowFeedback(false);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            err.message ||
            "Failed to load lesson. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [slug, lessonId]);

  // Improved scroll effect for sidebar collapse (desktop only)
  useEffect(() => {
    const handleScroll = () => {
      // Only apply collapse effect on desktop
      if (window.innerWidth < 768) return;
      
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      
      // Calculate if we're near the bottom (within 50px)
      const isNearBottom = scrollHeight - scrollTop <= clientHeight + 50;
      
      // Update state to trigger re-render
      setSidebarCollapsed(isNearBottom);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    
    // Check initial state
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Interactive quiz logic
  const handleQuizAnswer = (lesson, optionIdx) => {
    if (showFeedback) return;
    setSelectedOption(optionIdx);
    setShowFeedback(true);
    const isCorrect = optionIdx === lesson.quiz[quizStep].correctAnswer;
    if (isCorrect) setQuizScore((s) => s + 1);

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedOption(null);
      if (quizStep + 1 < lesson.quiz.length) {
        setQuizStep((s) => s + 1);
      } else {
        setQuizDone(true);
      }
    }, 1000);
  };

  const renderQuizInteractive = (lesson) => {
    if (!lesson.quiz || lesson.quiz.length === 0) return null;
    if (quizDone) {
      return (
        <div className="quiz-block my-4 p-4 rounded bg-yellow-50 dark:bg-yellow-50  text-black  border-l-4 border-yellow-400 dark:border-yellow-500">
          <h2 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-700">Quiz Complete!</h2>
          <p className="text-lg">
            Your score: <span className="font-bold">{quizScore}</span> / {lesson.quiz.length}
          </p>
        </div>
      );
    }
    const q = lesson.quiz[quizStep];
    return (
      <div className="quiz-block my-4 p-4 rounded bg-yellow-50 dark:bg-yellow-50 text-black border-l-4 border-yellow-400 dark:border-yellow-500">
        <h2 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-700">Quiz</h2>
        <div className="font-medium mb-2">{q.question}</div>
        <ul className="list-disc ml-6">
          {q.options.map((opt, i) => {
            let optionClass = "cursor-pointer p-2 rounded transition-colors";
            if (showFeedback) {
              if (i === q.correctAnswer) optionClass += " bg-green-700 dark:bg-green-700";
              else if (i === selectedOption) optionClass += " bg-red-700 dark:bg-red-700";
            } else if (selectedOption === i) {
              optionClass += "bg-primary/20 dark:bg-primary/20";
            }
            return (
              <li
                key={i}
                className={optionClass}
                onClick={() => !showFeedback && handleQuizAnswer(lesson, i)}
                style={{ pointerEvents: showFeedback ? "none" : "auto" }}
              >
                {opt}
              </li>
            );
          })}
        </ul>
        <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Question {quizStep + 1} of {lesson.quiz.length}
        </div>
      </div>
    );
  };

  const renderExercises = (lesson) =>
    lesson.exercises && lesson.exercises.length > 0 ? (
      <div className="exercise-block my-4 p-4 rounded bg-gray-100 dark:bg-gray-800 border-l-4 border-primary">
        <h2 className="font-semibold mb-2 text-primary flex items-center">
          <BookOpen className="mr-2" /> Practice Exercises
        </h2>
        <ol className="list-decimal ml-6 space-y-1">
          {lesson.exercises.map((ex, idx) => (
            <li key={idx}>{ex}</li>
          ))}
        </ol>
      </div>
    ) : null;

    
  
  // Sidebar: modules and lessons
  const Sidebar = () =>
    course ? (
      <>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed top-4 left-4 z-50 bg-primary text-black p-2 rounded-lg shadow-lg"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Backdrop */}
        {mobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside 
          className={`
            fixed top-0 left-0 h-screen bg-gray-50 dark:bg-gray-900 
            border-r dark:border-gray-800 p-4 overflow-y-auto z-40
            transition-all duration-300 ease-in-out
            
            /* Mobile styles */
            md:z-10
            ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
            
            /* Desktop styles */
            ${sidebarCollapsed ? 'md:w-12' : 'w-64 md:w-64'}
          `}
        >
          {(!sidebarCollapsed || window.innerWidth < 768) && (
            <>
              <h2 className="text-lg font-bold mb-4">Course Content</h2>
              {course.modules.map((mod, mi) => (
                <div key={mi} className="mb-4">
                  <div className="font-semibold mb-2">{mod.title}</div>
                  <ul>
                    {(mod.lessons || []).map((les) => (
                      <li key={les._id || les.id}>
                        <button
                          className={`px-2 py-1 rounded mb-1 w-full text-left transition
                            ${(les._id === lessonId || les.id === lessonId)
                              ? "bg-primary dark:bg-primary font-bold"
                              : "hover:bg-primary/10 dark:hover:bg-gray-800"
                            }`}
                          onClick={() => {
                            navigate(`/courses/${slug}/lessons/${les._id || les.id}`);
                            setMobileMenuOpen(false); // Close mobile menu after navigation
                          }}
                        >
                          {les.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </>
          )}
          {sidebarCollapsed && window.innerWidth >= 768 && (
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 bg-primary rounded mb-2"></div>
              <div className="w-6 h-1 bg-gray-300 rounded mb-1"></div>
              <div className="w-6 h-1 bg-gray-300 rounded mb-1"></div>
              <div className="w-6 h-1 bg-gray-300 rounded"></div>
            </div>
          )}
        </aside>
      </>
    ) : null;

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <h2 className="text-red-800 font-semibold mb-2">Error Loading Lesson</h2>
          <p className="text-red-600">{error}</p>
          <Link to={`/courses/${slug}`} className="text-primary mt-4 inline-block">
            ← Back to Course
          </Link>
        </div>
      </div>
    );
  }

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <h2 className="text-yellow-800 font-semibold mb-2">Lesson Not Found</h2>
          <p className="text-yellow-600">The lesson you're looking for doesn't exist or has been removed.</p>
          <Link to={`/courses/${slug}`} className="text-primary mt-4 inline-block">
            ← Back to Course
          </Link>
        </div>
      </div>
    );
  }

  // Custom Markdown renderers for headings, lists, and code blocks
  const markdownComponents = {
    h2: ({ node, ...props }) => <h2 className="text-lg font-bold mt-6 mb-2 text-primary dark:text-primary" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-base font-semibold mt-4 mb-2 text-primary dark:text-primary" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc ml-6 mb-4" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal ml-6 mb-4" {...props} />,
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
     table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => <thead className="bg-red-100 dark:bg-gray-800 " {...props} />,
    tbody: ({ node, ...props }) => <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700" {...props} />,
    tr: ({ node, ...props }) => <tr {...props} />,
    th: ({ node, ...props }) => <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black dark:text-white uppercase tracking-wider" {...props} />,
    td: ({ node, ...props }) => <td className="px-6 py-4 whitespace-nowrap text-sm text-black dark:text-white" {...props} />,
    

    
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const languageMap = {
    js: "javascript",
    javascript: "javascript",
    html: "markup",
    xml: "markup",
    c: "cpp", 
    cpp: "cpp",
    cplusplus: "cpp", 
    css: "css",
  };
  const language = match ? languageMap[match[1].toLowerCase()] || match[1].toLowerCase() : null;

      return !inline && match ? (
        <div className="relative">
          <SyntaxHighlighter
            style={dracula}
            language={language}
            PreTag="div"
            className="rounded-lg my-4"
              showLineNumbers={true}
        wrapLines={true} 
        customStyle={{
          padding: "1.5em",
          fontSize: "14px",
          lineHeight: "1.5"
        }}
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
          <button
            className="absolute bottom-4 right-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded shadow"
            onClick={() => window.open('/playground', '_blank')}
          >
            Play
          </button>
        </div>
      ) : (
        <code className="bg-slate-300 dark:bg-slate-300 px-1 rounded text-red-500">{children}</code>
      );
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main
        ref={mainRef}
        className={`
          flex-1 p-4 md:p-6 light:bg-white dark:bg-slate-800 overflow-y-auto
          transition-all duration-300 ease-in-out
          
          /* Mobile: no left margin, full width */
          ml-0
          
          /* Desktop: adjust margin based on sidebar state */
          ${sidebarCollapsed ? 'md:ml-12' : 'md:ml-64'}
        `}
      >
        <Link to={`/courses/${slug}`} className="text-primary mb-4 inline-block">
          ← Back to Course
        </Link>
        <div className="min-h-screen bg-neutral-50 dark:bg-slate-800 rounded-lg shadow-md p-4 md:p-6">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">{lesson.title}</h1>
          {/* Overview Section */}
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <Info className="mr-2 text-primary" />
              <h2 className="text-xl font-bold">Overview</h2>
            </div>
            <div className="bg-primary dark:bg-primary rounded p-4 mb-4">
              <ReactMarkdown components={markdownComponents}remarkPlugins={[remarkGfm]}>
                {lesson.overview || lesson.description}
              </ReactMarkdown>
            </div>
            {/* Topic Section */}
            {lesson.topic && (
              <>
                <div className="flex items-center mb-2">
                  <Layers className="mr-2 text-purple-500" />
                  <h2 className="text-xl font-bold">Topic</h2>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900 rounded p-4 mb-4">
                  <span className="font-semibold">{lesson.topic}</span>
                </div>
              </>
            )}
            {/* Practice Exercises */}
            {renderExercises(lesson)}
            {/* Lesson Content Section */}
            <div className="flex items-center mb-2">
              <BookOpen className="mr-2 text-primary" />
              <h2 className="text-xl font-bold">Lesson Content</h2>
            </div>
            <div className="markdown-content bg-green-100 dark:bg-slate-800 rounded p-4 mb-4">
              <ReactMarkdown components={markdownComponents}remarkPlugins={[remarkGfm]}>
                {lesson.content}
              </ReactMarkdown>
            </div>
            {/* Quiz */}
            {renderQuizInteractive(lesson)}
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            Duration: {lesson.duration || "N/A"} min | {lesson.isPublished ? "Published" : "Draft"}
          </div>
        </div>
      </main>
    </div>
  );
  
};

export default LessonDetailPage;