"use client"

import { useState, useEffect } from "react"
import { Button } from "../../components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { Card } from "../../components/ui/card"
import { Play, Download, Copy, Save } from "lucide-react"
import { useToast } from "../../hooks/useToast"
import { codeApi } from "../../lib/compilerApi"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula} from 'react-syntax-highlighter/dist/esm/styles/prism'

 const API_URL = process.env.REACT_APP_API_URL 

export default function CodePlayground({
  initialHtml = "<!-- Write your HTML here -->\n<h1>Hello World</h1>\n<p>Start coding!</p>",
  initialCss = "/* Write your CSS here */\nh1 {\n  color: #8b008b;\n}\n\np {\n  color: #333;\n}",
  initialJs = "// Write your JavaScript here\nconsole.log('Hello from JavaScript!');",
  initialCpp = "#include <iostream>\n\nint main() {\n    std::cout << \"Hello, World!\" << std::endl;\n    return 0;\n}",
  initialPy = "#Write your Python here\nprint('Hello World!')",
  readOnly = false,
}) {
  const [html, setHtml] = useState(initialHtml)
  const [css, setCss] = useState(initialCss)
  const [js, setJs] = useState(initialJs)
  const [cpp, setCpp] = useState(initialCpp)
  const [py, setPy] = useState(initialPy)
  const [output, setOutput] = useState("")
  const [activeTab, setActiveTab] = useState("html")
  const [isRunning, setIsRunning] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const [error, setError] = useState(null)
  const { toast } = useToast()

 
  // Test connection on mount
  useEffect(() => {
    const testConnection = async () => {
      try {
        const response = await fetch(`${API_URL}/test`);
        if (!response.ok) {
          throw new Error(`Server responded with status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Server connection test:', data);
        setIsConnected(true);
      } catch (error) {
        console.error('Connection test failed:', error);
        setIsConnected(false);
        setOutput(`Connection Error: ${error.message}\nPlease make sure the server is running at http://localhost:5000`);
      }
    };

    testConnection();
  }, []);

  // Generate the output HTML with the combined code
  useEffect(() => {
    if (activeTab === "html" || activeTab === "css") {
      const outputHtml = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>${css}</style>
          </head>
          <body>
            ${html}
            <script>${js}</script>
          </body>
        </html>
      `
      setOutput(outputHtml)
      
      // Update preview iframe using srcdoc instead of direct document access
      const iframe = document.getElementById('preview-iframe')
      if (iframe) {
        iframe.srcdoc = outputHtml
      }
    }
  }, [html, css, js, activeTab])

  const runCode = async () => {
    if (!isConnected) {
      setOutput("Not connected to server. Please make sure the server is running.");
      return;
    }

    setOutput("Running...");
    setError(null);
    setIsRunning(true);

    try {
      // For HTML and CSS tabs, just show the content directly
      if (activeTab === "html" || activeTab === "css") {
        setOutput(activeTab === "html" ? html : css);
        setIsRunning(false);
        return;
      }

      let code, language;
      
      switch (activeTab) {
        case "js":
          code = js;
          language = "javascript";
          break;
        case "cpp":
          code = cpp;
          language = "cpp";
          
          // Simple HTML entity decode for specific C++ operators
          code = code
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&')
            .replace(/&quot;/g, '"')
            .replace(/&#39;/g, "'");
          
          if (code.includes("cin")) {
            setOutput("Note: Interactive input (cin) is not supported. Please modify your code to use hardcoded values.");
            setIsRunning(false);
            return;
          }

          // Log the code being sent
          console.log('Sending C++ code:', code);
          break;
        case "py":
          code = py;
          language = "python";
          break;
        default:
          setOutput("Please select a language tab (JavaScript, C++, or Python)");
          setIsRunning(false);
          return;
      }

      console.log('Executing code for language:', language);
      const response = await codeApi.executeCode(language, code);
      console.log('Code execution response:', response);
      
      if (response.success) {
        setOutput(response.output || 'No output');
        if (response.error) {
          setError(response.error);
        }
      } else {
        setError(response.error || 'An error occurred while running the code');
        setOutput('Execution failed. See error above.');
      }
    } catch (error) {
      console.error('Error executing code:', error);
      setError(error.message || 'An unexpected error occurred');
      setOutput('Execution failed. See error above.');
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = (code, type) => {
    navigator.clipboard.writeText(code)
    toast({
      title: "Copied to clipboard",
      description: `${type} code has been copied to your clipboard`,
    })
  }

  const downloadCode = () => {
    // Create a zip-like text file with all code
    const content = `
HTML:
${html}

CSS:
${css}

JavaScript:
${js}

C++:
${cpp}

Python:
${py}
    `

    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "code-playground.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    toast({
      title: "Code downloaded",
      description: "Your code has been downloaded as a text file",
    })
  }

  const saveCode = () => {
    // Save to localStorage
    localStorage.setItem("savedPlaygroundHtml", html)
    localStorage.setItem("savedPlaygroundCss", css)
    localStorage.setItem("savedPlaygroundJs", js)
    localStorage.setItem("savedPlaygroundCpp", cpp)
    localStorage.setItem("savePlaygroundPy", py)

    toast({
      title: "Code saved",
      description: "Your code has been saved to your browser",
    })
  }

  const loadSavedCode = () => {
    const savedHtml = localStorage.getItem("savedPlaygroundHtml")
    const savedCss = localStorage.getItem("savedPlaygroundCss")
    const savedJs = localStorage.getItem("savedPlaygroundJs")
    const savedCpp = localStorage.getItem("savedPlaygroundCpp")
    const savedPy = localStorage.getItem("savedPlaygroundPy")

    if (savedHtml) setHtml(savedHtml)
    if (savedCss) setCss(savedCss)
    if (savedJs) setJs(savedJs)
    if (savedCpp) setCpp(savedCpp)
    if (savedPy) setPy(savedPy)  

    toast({
      title: "Code loaded",
      description: "Your saved code has been loaded",
    })
  }

  return (
    <div className="flex flex-col min-h-screen gap-2 sm:gap-4 p-2 sm:p-4 lg:p-6 bg-gray-50 dark:bg-slate-900">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3 bg-primary/90 dark:bg-slate-800 p-2 sm:p-3 rounded-lg shadow-sm">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="w-full sm:w-auto bg-gray-100 dark:bg-slate-700">
            <TabsTrigger value="html" className="flex-1 sm:flex-none data-[state=active]:bg-primary/90 dark:data-[state=active]:bg-primary/90">HTML</TabsTrigger>
            <TabsTrigger value="css" className="flex-1 sm:flex-none data-[state=active]:bg-primary/90 dark:data-[state=active]:bg-primary/90">CSS</TabsTrigger>
            <TabsTrigger value="js" className="flex-1 sm:flex-none data-[state=active]:bg-primary/90 dark:data-[state=active]:bg-primary/90">JS</TabsTrigger>
            <TabsTrigger value="cpp" className="flex-1 sm:flex-none data-[state=active]:bg-primary/90 dark:data-[state=active]:bg-primary/90">C++</TabsTrigger>
             <TabsTrigger value="py" className="flex-1 sm:flex-none data-[state=active]:bg-primary/90 dark:data-[state=active]:bg-primary/90">Py</TabsTrigger>
            </TabsList>
        </Tabs>
        <div className="flex gap-2 justify-end">
          <Button variant="outline" size="sm" onClick={downloadCode} className="flex-1 sm:flex-none hover:bg-gray-100 dark:hover:bg-slate-700">
            <Download className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Download</span>
          </Button>
          <Button variant="outline" size="sm" onClick={saveCode} className="flex-1 sm:flex-none hover:bg-gray-100 dark:hover:bg-slate-700">
            <Save className="h-4 w-4 sm:mr-2" />
            <span className="hidden sm:inline">Save</span>
          </Button>
          <Button variant="outline" size="sm" onClick={loadSavedCode} className="flex-1 sm:flex-none hover:bg-gray-100 dark:hover:bg-slate-700">
            <span className="hidden sm:inline">Load</span>
            <span className="sm:hidden">↺</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-2 sm:gap-4 lg:grid lg:grid-cols-2">
        <Card className="flex flex-col h-[50vh] sm:h-[60vh] lg:h-[calc(100vh-12rem)] shadow-md">
          <div className="p-2 sm:p-3 border-b bg-gray-50 dark:bg-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h3 className="font-semibold text-gray-700 dark:text-slate-200">Code Editor</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyCode(
                    activeTab === "html" ? html :
                    activeTab === "css" ? css :
                    activeTab === "js" ? js : 
                    activeTab === "cpp" ? cpp :
                    activeTab === "py" ? py : 
                    activeTab
                  )}
                  className="flex-1 sm:flex-none hover:bg-gray-100 dark:hover:bg-slate-700"
                >
                  <Copy className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Copy</span>
                </Button>
                <Button
                  className="flex-1 sm:flex-none bg-primary/90 hover:bg-primary/10"
                  variant="default"
                  size="sm"
                  onClick={runCode}
                  disabled={isRunning}
                 
                >
                  <Play className="h-4 w-4 sm:mr-2" />
                  <span className="sm:hidden">Run</span>
                  <span className="hidden sm:inline">Run Code</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 bg-gray-900">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
              <TabsContent value="html" className="h-full mt-0">
                <div className="relative h-full overflow-auto">
                  <textarea
                    value={html}
                    onChange={(e) => setHtml(e.target.value)}
                    className="absolute inset-0 w-full h-full p-3 sm:p-4 bg-transparent text-transparent caret-white font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md text-sm sm:text-base z-10"
                    placeholder="<!-- Write your HTML here -->"
                  />
                  <SyntaxHighlighter
                    language="html"
                    style={dracula}
                    className="absolute inset-0 w-full h-full !bg-transparent !m-0 !p-3 sm:!p-4 text-sm sm:text-base"
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: '1rem',
                    }}
                  >
                    {html}
                  </SyntaxHighlighter>
                </div>
              </TabsContent>
              <TabsContent value="css" className="h-full mt-0">
                <div className="relative h-full overflow-auto">
                  <textarea
                    value={css}
                    onChange={(e) => setCss(e.target.value)}
                    className="absolute inset-0 w-full h-full p-3 sm:p-4 bg-transparent text-transparent caret-white font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md text-sm sm:text-base z-10"
                    placeholder="/* Write your CSS here */"
                  />
                  <SyntaxHighlighter
                    language="css"
                    style={dracula}
                    className="absolute inset-0 w-full h-full !bg-transparent !m-0 !p-3 sm:!p-4 text-sm sm:text-base"
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: '1rem',
                    }}
                  >
                    {css}
                  </SyntaxHighlighter>
                </div>
              </TabsContent>
              <TabsContent value="js" className="h-full mt-0">
                <div className="relative h-full overflow-auto">
                  <textarea
                    value={js}
                    onChange={(e) => setJs(e.target.value)}
                    className="absolute inset-0 w-full h-full p-3 sm:p-4 bg-transparent text-transparent caret-white font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md text-sm sm:text-base z-10"
                    placeholder="// Write your JavaScript here"
                  />
                  <SyntaxHighlighter
                    language="javascript"
                    style={dracula}
                    className="absolute inset-0 w-full h-full !bg-transparent !m-0 !p-3 sm:!p-4 text-sm sm:text-base"
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: '1rem',
                    }}
                  >
                    {js}
                  </SyntaxHighlighter>
                </div>
              </TabsContent>
              <TabsContent value="cpp" className="h-full mt-0">
                <div className="relative h-full overflow-auto">
                  <textarea
                    value={cpp}
                    onChange={(e) => {
                      const newCode = e.target.value;
                      // Convert HTML entities back to characters
                      const decodedCode = newCode
                        .replace(/&lt;/g, '<')
                        .replace(/&gt;/g, '>')
                        .replace(/&amp;/g, '&')
                        .replace(/&quot;/g, '"')
                        .replace(/&#39;/g, "'");
                      setCpp(decodedCode);
                    }}
                    className="absolute inset-0 w-full h-full p-3 sm:p-4 bg-transparent text-transparent caret-white font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md text-sm sm:text-base z-10"
                    placeholder="// Write your C++ here"
                    spellCheck="false"
                    autoCapitalize="none"
                    autoComplete="off"
                    autoCorrect="off"
                  />
                  <SyntaxHighlighter
                    language="cpp"
                    style={dracula}
                    className="absolute inset-0 w-full h-full !bg-transparent !m-0 !p-3 sm:!p-4 text-sm sm:text-base"
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: '1rem',
                    }}
                    PreTag={({ children, ...props }) => (
                      <pre {...props} className="!m-0 !bg-transparent">
                        {children}
                      </pre>
                    )}
                  >
                    {cpp}
                  </SyntaxHighlighter>
                </div>
              </TabsContent>
               <TabsContent value="py" className="h-full mt-0">
                <div className="relative h-full overflow-auto">
                  <textarea
                    value={py}
                    onChange={(e) => setPy(e.target.value)}
                    className="absolute inset-0 w-full h-full p-3 sm:p-4 bg-transparent text-transparent caret-white font-mono resize-none focus:outline-none focus:ring-2 focus:ring-primary rounded-md text-sm sm:text-base z-10"
                    placeholder="//Write your Python here"
                  />
                  <SyntaxHighlighter
                    language="python"
                    style={dracula}
                    className="absolute inset-0 w-full h-full !bg-transparent !m-0 !p-3 sm:!p-4 text-sm sm:text-base"
                    customStyle={{
                      background: 'transparent',
                      margin: 0,
                      padding: '1rem',
                    }}
                  >
                    {py}
                  </SyntaxHighlighter>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>

        <Card className="flex flex-col h-[20vh] lg:h-auto lg:flex-1 shadow-md dark:bg-slate-900">
          <div className="p-3 sm:p-4 border-b bg-gray-50 dark:bg-slate-800">
            <h3 className="font-semibold text-gray-700 dark:text-slate-200">Output</h3>
          </div>
          <div className="flex-1 flex flex-col bg-gray-50 dark:bg-slate-900">
            {(activeTab === "html" || activeTab === "css") && (
              <div className="flex-1 p-0 sm:p-4 border-b">
                <iframe
                  id="preview-iframe"
                  className="w-full overflow-auto min-h-[300px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] bg-white dark:bg-slate-900 rounded-md"
                  title="Preview"
                  sandbox="allow-scripts"
                />
              </div>
            )}
            <div className="p-4 overflow-auto bg-white/50 dark:bg-slate-800/50 rounded-md m-2 backdrop-blur-sm">
              {error ? (
                <div className="text-red-500 dark:text-red-400 whitespace-pre-wrap text-sm sm:text-base font-mono">
                  {error}
                </div>
              ) : (
                <div className="whitespace-pre-wrap text-sm sm:text-base font-mono text-gray-800 dark:text-slate-200">
                  {output}
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
