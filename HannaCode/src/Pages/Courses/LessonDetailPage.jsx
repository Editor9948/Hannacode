import React, { useEffect, useState, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { BookOpen, Info, Layers, Copy as CopyIcon } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import axios from "axios";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import "react-syntax-highlighter/dist/esm/languages/prism/javascript";
import "react-syntax-highlighter/dist/esm/languages/prism/css";
import "react-syntax-highlighter/dist/esm/languages/prism/markup"; 
import "react-syntax-highlighter/dist/esm/languages/prism/cpp"; 
import "react-syntax-highlighter/dist/esm/languages/prism/python";
import "react-syntax-highlighter/dist/esm/languages/prism/php";
import "react-syntax-highlighter/dist/esm/languages/prism/java";
import "react-syntax-highlighter/dist/esm/languages/prism/csharp";
import "react-syntax-highlighter/dist/esm/languages/prism/go";
import "react-syntax-highlighter/dist/esm/languages/prism/rust";
import "react-syntax-highlighter/dist/esm/languages/prism/dart";


const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api/v1'; 

const LessonDetailPage = () => {
  const { slug, lessonId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [completingLesson, setCompletingLesson] = useState(false);

  // Get user info for access control
  const user = JSON.parse(localStorage.getItem("user"));
  const isAdminOrMentor = user && (user.role === "admin" || user.role === "mentor");
  const isPremiumUser = user && user.role === "premium";

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

  // Handle lesson completion
  const markLessonComplete = async () => {
    if (!course?._id || !lesson?._id) return;
    
    setCompletingLesson(true);
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_URL}/progress/${course._id}/lessons/${lesson._id}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          completed: true,
          timeSpent: 0, // You can track actual time spent
          quizScore: quizDone ? quizScore : null,
          challengeCompleted: false
        })
      });

      if (response.ok) {
        setIsCompleted(true);
        // You could also show a success message or redirect to next lesson
        console.log('Lesson marked as complete!');
      } else {
        console.error('Failed to mark lesson as complete');
      }
    } catch (error) {
      console.error('Error marking lesson as complete:', error);
    } finally {
      setCompletingLesson(false);
    }
  };

  // Check if lesson is already completed
  useEffect(() => {
    const checkLessonCompletion = async () => {
      if (!course?._id || !lesson?._id) return;
      
      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_URL}/progress/${course._id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });

        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data.lessons) {
            const completedLesson = data.data.lessons.find(l => l._id === lesson._id);
            setIsCompleted(!!completedLesson?.isCompleted);
          }
        }
      } catch (error) {
        console.error('Error checking lesson completion:', error);
      }
    };

    checkLessonCompletion();
  }, [course?._id, lesson?._id]);

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

  // Check premium access for premium courses
  if (course?.isPremium && !isAdminOrMentor && !isPremiumUser && !lesson?.isFree) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h2 className="text-blue-800 font-semibold mb-2">🔒 Premium Content</h2>
          <p className="text-blue-600 mb-4">This lesson is part of a premium course. Subscribe to get access to all premium content.</p>
          <div className="space-y-3">
            <p className="text-sm text-blue-700">With premium access, you get:</p>
            <ul className="list-disc ml-6 text-sm text-blue-700 space-y-1">
              <li>Access to all premium courses and lessons</li>
              <li>1-on-1 mentorship sessions</li>
              <li>Code reviews by experts</li>
              <li>Certification upon completion</li>
            </ul>
          </div>
          <div className="mt-6 flex gap-3">
            <Link 
              to="/pricing" 
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Get Premium Access
            </Link>
            <Link 
              to={`/courses/${slug}`} 
              className="text-blue-600 px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
            >
              ← Back to Course
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Multi-section parser: handles multiple repeating Code Examples + Explanation pairs
  const parseLessonSections = (raw) => {
    if (!raw) return null;
    const pairRegex = /###\s+Code Examples?[\r\n]+([\s\S]*?)###\s+Explanation[s]?[\r\n]+([\s\S]*?)(?=(?:\n###\s+Code Examples?|\n###\s+Practice|\n##\s+Additional|$))/gi;
  let match; const sections = []; let firstStart = null; let lastEnd = 0;
    while ((match = pairRegex.exec(raw)) !== null) {
      const [full, codePart, explanationPart] = match;
      if (firstStart === null) firstStart = match.index;
      lastEnd = match.index + full.length;
      // Extract first code fence (or treat entire codePart)
      let fenceMatch = codePart.match(/```(\w+)?\r?\n([\s\S]*?)```/);
      let codeLang = fenceMatch ? (fenceMatch[1] || 'text').trim() : 'text';
      let codeBody = fenceMatch ? fenceMatch[2] : codePart.trim();
      if (!fenceMatch && codeBody.trim().startsWith('```')) {
        codeBody = codeBody.trim().replace(/^```(\w+)?\r?\n/, '').replace(/\r?\n```$/, '');
      }
      sections.push({ codeLang, codeBody, explanationMd: explanationPart.trim() });
  // advance regex automatically; no need to store lastIndex
    }
    if (!sections.length) return null;
    const beforeAll = raw.slice(0, firstStart);
    const afterAll = raw.slice(lastEnd);
    return { beforeAll, sections, afterAll };
  };
  const multi = parseLessonSections(lesson.content);

  // Map short language names to what prism expects
  // Map possible shorthand or enum language values to Prism identifiers
  const languageMapFull = {
    js: 'javascript', javascript: 'javascript',
    html: 'markup', xml: 'markup',
    c: 'cpp', cpp: 'cpp', cplusplus: 'cpp',
    css: 'css',
    php: 'php',
    py: 'python', python: 'python',
    dart: 'dart',
    java: 'java',
    csharp: 'csharp', cs: 'csharp',
    go: 'go', golang: 'go',
    rust: 'rust',
    plaintext: 'text', text: 'text'
  };

  // Split a combined codeBody into multiple example objects based on comment markers
  const splitExamples = (codeBody) => {
    if (!codeBody) return [];
    const lines = codeBody.split('\n');
    const examples = [];
    let current = null;
    lines.forEach(line => {
      const exMatch = /^\s*(?:\/\/|#)\s*Example\s+(\d+)(?::|-)?\s*(.*)$/i.exec(line);
      if (exMatch) {
        if (current) examples.push(current);
        const num = exMatch[1];
        const titleRest = exMatch[2].trim();
        current = { number: parseInt(num,10), title: `Example ${num}${titleRest?': '+titleRest:''}`, code: [] };
      } else if (current) {
        current.code.push(line);
      } else {
        // If no explicit Example marker yet, start implicit Example 1
        if (line.trim().length) {
          current = { number: 1, title: 'Example 1', code: [line] };
        }
      }
    });
    if (current) examples.push(current);
    // Fallback single block if regex didn't find markers
    if (examples.length === 1 && examples[0].title === 'Example 1' && !/^\s*(?:\/\/|#)\s*Example/i.test(codeBody)) {
      examples[0].title = 'Code Example';
    }
    return examples.map(e => ({ ...e, code: e.code.join('\n').trim() }));
  };

  const splitExplanations = (explanationMd) => {
    if (!explanationMd) return { general: '' };
    const map = {};
    const regex = /(?:^|\n)\s*(?:###|####)?\s*Example\s+(\d+).*?\n([\s\S]*?)(?=(?:\n(?:###|####)?\s*Example\s+\d+)|$)/gi;
    let m; let foundSpecific = false;
    while ((m = regex.exec(explanationMd))) {
      foundSpecific = true;
      map[parseInt(m[1],10)] = m[2].trim();
    }
    if (!foundSpecific) map.general = explanationMd.trim();
    return map;
  };

  const buildSectionExamples = (section) => {
    const examples = splitExamples(section.codeBody);
    const explanationsMap = splitExplanations(section.explanationMd);
    return { examples, explanationsMap };
  };
  const sectionData = multi ? multi.sections.map(buildSectionExamples) : [];

  // Simple sanitizer that strips script tags (sandbox also blocks scripts)
  const sanitizeHtml = (html) => html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/on\w+\s*=\s*"[^"]*"/gi, '')
    .replace(/on\w+\s*=\s*'[^']*'/gi, '')
    .replace(/on\w+\s*=\s*[^\s>]+/gi, '');

  // Build iframe srcDoc for html/css examples
  const buildPreviewDoc = (lang, code) => {
    const baseStyles = `
      *{box-sizing:border-box} body{margin:0;padding:16px;font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif;background:#f9fafb;color:#111827}
      .grid{display:grid;gap:12px}
      .row{display:flex;gap:12px;flex-wrap:wrap}
      .box{width:100px;height:100px;background:#10b981;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:8px}
      img.preview{max-width:140px;border-radius:8px}
      .card{padding:12px;border:1px solid #e5e7eb;border-radius:8px;background:#fff}
      .title{font-weight:600;margin:0 0 8px}
      .note{font-size:12px;color:#6b7280;margin-top:8px}
    `;

    // Detect and split combined blocks like /*HTML*/ ... /*CSS*/ ...
    const htmlMarker = /\/\*\s*HTML\s*\*\//i;
    const cssMarker = /\/\*\s*CSS\s*\*\//i;
    if (htmlMarker.test(code) && cssMarker.test(code)) {
      let htmlPart = '';
      let cssPart = '';
      // Find positions to decide ordering
      const htmlIdx = code.search(htmlMarker);
      const cssIdx = code.search(cssMarker);
      if (htmlIdx < cssIdx) {
        const between = code.slice(htmlIdx).split(cssMarker);
        htmlPart = between[0].replace(htmlMarker, '').trim();
        cssPart = between.slice(1).join(cssMarker.source).trim();
      } else {
        const between = code.slice(cssIdx).split(htmlMarker);
        cssPart = between[0].replace(cssMarker, '').trim();
        htmlPart = between.slice(1).join(htmlMarker.source).trim();
      }
      const safeHtml = sanitizeHtml(htmlPart);
      return `<!doctype html><html><head><meta charset="utf-8"/><style>${baseStyles}\n${cssPart}</style></head><body>${safeHtml}</body></html>`;
    }

  if (lang === 'markup' || /<\w+[^>]*>/.test(code)) {
      const safe = sanitizeHtml(code.trim());
      const hasHtmlShell = /<html[\s\S]*<\/html>/i.test(safe);
      if (hasHtmlShell) return safe; // already a full doc
      return `<!doctype html><html><head><meta charset="utf-8"/><style>${baseStyles}</style></head><body>${safe}</body></html>`;
    }
    if (lang === 'css') {
      const css = code.trim();
      // Minimal demo markup to visualize common CSS selectors
      const demo = `
        <div class="grid">
          <div class="row">
            <div class="box">.box</div>
            <div class="box" id="special">#special</div>
            <div class="box circle" style="border-radius:9999px">.circle</div>
          </div>
          <div class="card">
            <h3 class="title">Sample Content</h3>
            <p>Try typography, spacing, transforms, filters, and more.</p>
            <img class="preview" src="/favicon.png" alt="preview"/>
            <p class="note">This is a generic preview surface for CSS-only examples.</p>
          </div>
        </div>`;
      return `<!doctype html><html><head><meta charset="utf-8"/><style>${baseStyles}\n${css}</style></head><body>${demo}</body></html>`;
    }
    return null;
  };

  const CodeExampleBlock = ({ language, example }) => {
    const lang = languageMapFull[language.toLowerCase()] || language.toLowerCase();
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
      try {
        await navigator.clipboard.writeText(example.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } catch (_) {
        // no-op
      }
    };
  const canPreview = lang === 'markup' || lang === 'css' || /<\w+[^>]*>/.test(example.code || '') || /\/\*\s*(HTML|CSS)\s*\*\//i.test(example.code || '');
    const [showPreview, setShowPreview] = useState(false);
    const srcDoc = canPreview ? buildPreviewDoc(lang, example.code) : null;
    return (
      <div className="my-6 rounded-lg overflow-hidden bg-neutral-900 border border-green-700 shadow-sm">
        <div className="flex items-center justify-between px-4 py-2 bg-green-800 text-green-100 text-sm font-medium">
          <span className="font-semibold">{example.title}</span>
          <div className="flex gap-2">
            {canPreview && (
              <button onClick={() => setShowPreview((v) => !v)} className="px-2 py-1 rounded bg-emerald-600 hover:bg-emerald-500 text-xs">
                {showPreview ? 'Hide Preview' : 'Preview'}
              </button>
            )}
            <button
              onClick={handleCopy}
              className="px-2 py-1 rounded bg-green-900 hover:bg-green-700 text-xs flex items-center justify-center"
              aria-label={copied ? "Copied" : "Copy code"}
              title={copied ? "Copied" : "Copy code"}
            >
              <CopyIcon className="w-4 h-4" />
            </button>
            {copied && (
              <span
                className="ml-1 px-1.5 py-0.5 rounded bg-emerald-700 text-white text-[10px]"
                aria-live="polite"
              >
                Copied
              </span>
            )}
            <button onClick={() => window.open('/playground','_blank')} className="px-2 py-1 rounded bg-green-600 hover:bg-green-500 text-xs">Play</button>
          </div>
        </div>
        {showPreview && srcDoc && (
          <div className="bg-white">
            <iframe
              title={`preview-${example.number}`}
              sandbox="allow-same-origin"
              style={{ width: '100%', height: 320, border: 'none' }}
              srcDoc={srcDoc}
            />
          </div>
        )}
        <SyntaxHighlighter style={okaidia} language={lang} PreTag="div" showLineNumbers className="!m-0" customStyle={{ padding: '1.25rem', fontSize: 14 }}>
          {example.code}
        </SyntaxHighlighter>
      </div>
    );
  };
  const ExplanationBlock = ({ markdown }) => (
    <div className="-mt-2 mb-8 p-4 rounded-md bg-green-50 dark:bg-emerald-900/40 border-l-4 border-green-500 text-sm leading-relaxed explanation-block">
      <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );

  // Custom Markdown renderers for headings, lists, and code blocks
  const markdownComponents = {
  h2: ({ node, children, ...props }) => <h2 className="text-lg font-bold mt-6 mb-2 text-primary dark:text-primary" {...props}>{children}</h2>,
  h3: ({ node, children, ...props }) => <h3 className="text-base font-semibold mt-4 mb-2 text-primary dark:text-primary" {...props}>{children}</h3>,
    ul: ({ node, ...props }) => <ul className="list-disc ml-6 mb-4" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal ml-6 mb-4" {...props} />,
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
    table: ({ node, ...props }) => (
      <div className="overflow-x-auto my-3 rounded-md border border-gray-200 dark:border-gray-700">
        <table className="w-full text-sm divide-y divide-gray-200 dark:divide-gray-700" {...props} />
      </div>
    ),
    thead: ({ node, ...props }) => <thead className="bg-gray-100 dark:bg-gray-800" {...props} />,
    tbody: ({ node, ...props }) => <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-100 dark:divide-gray-800" {...props} />,
    tr: ({ node, ...props }) => <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors" {...props} />,
    th: ({ node, ...props }) => <th scope="col" className="px-3 py-2 text-left text-[11px] font-semibold text-gray-700 dark:text-gray-200 uppercase tracking-wide" {...props} />,
    td: ({ node, ...props }) => <td className="px-3 py-1.5 whitespace-nowrap text-xs text-gray-800 dark:text-gray-100 align-top" {...props} />,
    

    
  code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || "");
      const languageMap = {
        js: 'javascript', javascript: 'javascript',
        html: 'markup', xml: 'markup',
        c: 'cpp', cpp: 'cpp', cplusplus: 'cpp',
        css: 'css',
        php: 'php',
        py: 'python', python: 'python',
        dart: 'dart',
        java: 'java',
        csharp: 'csharp', cs: 'csharp',
        go: 'go', golang: 'go',
        rust: 'rust',
        plaintext: 'text', text: 'text'
      };

  const language = match ? languageMap[match[1].toLowerCase()] || match[1].toLowerCase() : null;

      return !inline && match ? (
        <div className="relative">
          <SyntaxHighlighter
            style={okaidia}
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
              {lesson.codeExamples && lesson.codeExamples.length ? (
                <>
                  {lesson.codeExamples.map((ex, i) => (
                    <div key={i} className="mb-8">
                      <CodeExampleBlock language={ex.language || 'javascript'} example={{ number: i+1, title: ex.title, code: ex.code }} />
                      <ExplanationBlock markdown={ex.explanation} />
                    </div>
                  ))}
                </>
              ) : multi ? (
                <>
                  <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
                    {multi.beforeAll}
                  </ReactMarkdown>
                  {multi.sections.map((section, idx) => {
                    const { examples, explanationsMap } = sectionData[idx];
                    return (
                      <div key={idx} className="mb-6">
                        {examples.map(ex => (
                          <div key={ex.number}>
                            <CodeExampleBlock language={section.codeLang} example={ex} />
                            <ExplanationBlock markdown={explanationsMap[ex.number] || explanationsMap.general || ''} />
                          </div>
                        ))}
                      </div>
                    );
                  })}
                  <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
                    {multi.afterAll}
                  </ReactMarkdown>
                </>
              ) : (
                <ReactMarkdown components={markdownComponents} remarkPlugins={[remarkGfm]}>
                  {lesson.content}
                </ReactMarkdown>
              )}
            </div>
            {/* Quiz */}
            {renderQuizInteractive(lesson)}
            
            {/* Lesson Completion */}
            <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1">Lesson Progress</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {isCompleted ? "✅ You have completed this lesson" : "Mark this lesson as complete when you're done"}
                  </p>
                </div>
                <button
                  onClick={markLessonComplete}
                  disabled={completingLesson || isCompleted}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    isCompleted 
                      ? "bg-green-500 text-white cursor-default" 
                      : "bg-primary hover:bg-primary/90 text-white disabled:opacity-50"
                  }`}
                >
                  {completingLesson 
                    ? "Saving..." 
                    : isCompleted 
                      ? "✓ Completed" 
                      : "Mark Complete"
                  }
                </button>
              </div>
            </div>
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