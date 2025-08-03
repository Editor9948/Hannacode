import { Link, useParams } from "react-router-dom"
import { Button } from "../../../components/ui/button"
import { BookOpen, FileText } from "lucide-react"
import CodePlayground from "../../../components/code-playground/codePlayground"

export default function PlaygroundPage() {
  const { slug } = useParams();
  
  // In a real app, you would fetch this data based on the slug
  const courseData = {
    title: "JavaScript Essentials",
    description: "Build interactive web applications with JavaScript",
  }

  // Sample initial code based on course type
  const getInitialCode = () => {
    switch (slug) {
      case "html":
        return {
          html: `<!DOCTYPE html>
<html>
<head>
  <title>My HTML Page</title>
</head>
<body>
  <h1>Hello HTML World!</h1>
  <p>This is a paragraph.</p>
  <ul>
    <li>List item 1</li>
    <li>List item 2</li>
    <li>List item 3</li>
  </ul>
</body>
</html>`,
          css: "/* Add your CSS here */",
          js: "// No JavaScript needed for basic HTML",
        }
      case "css":
        return {
          html: `<div class="container">
  <h1>CSS Styling Example</h1>
  <p>This paragraph will be styled with CSS.</p>
  <div class="box">This is a box with custom styling</div>
  <button class="btn">Hover over me</button>
</div>`,
          css: `.container {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  color: #8b008b;
  text-align: center;
}

p {
  line-height: 1.6;
  color: #333;
}

.box {
  background-color: #d8bfd8;
  padding: 20px;
  border-radius: 5px;
  margin: 20px 0;
  text-align: center;
}

.btn {
  background-color: #8b008b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn:hover {
  background-color: #d8bfd8;
  color: #333;
}`,
          js: "// No JavaScript needed for this CSS example",
        }
      case "javascript":
      default:
        return {
          html: `<div class="container">
  <h1 id="title">JavaScript Example</h1>
  <p>Click the button to change the text:</p>
  <button id="changeText">Change Text</button>
  <p>Count: <span id="counter">0</span></p>
  <button id="increment">Increment</button>
  <button id="decrement">Decrement</button>
</div>`,
          css: `.container {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  text-align: center;
}

button {
  background-color: #8b008b;
  color: white;
  border: none;
  padding: 8px 16px;
  margin: 5px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d8bfd8;
  color: #333;
}`,
          js: `// Get elements
const titleElement = document.getElementById('title');
const changeTextButton = document.getElementById('changeText');
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

// Initialize counter
let count = 0;

// Add event listeners
changeTextButton.addEventListener('click', function() {
  titleElement.textContent = 'Text Changed with JavaScript!';
  titleElement.style.color = '#d8bfd8';
});

incrementButton.addEventListener('click', function() {
  count++;
  counterElement.textContent = count;
});

decrementButton.addEventListener('click', function() {
  count--;
  counterElement.textContent = count;
});`,
        }
    }
  }

  const initialCode = getInitialCode()

  return (
    <div className="container py-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">{courseData.title} - Code Playground</h1>
        <p className="text-xl text-muted-foreground mb-4">{courseData.description}</p>

        <div className="flex gap-4 mb-6">
          <Link to={`/courses/${slug}`}>
            <Button variant="outline">
              <BookOpen className="mr-2 h-4 w-4" /> Course Overview
            </Button>
          </Link>
          <Link to={`/courses/${slug}/resources`}>
            <Button variant="outline">
              <FileText className="mr-2 h-4 w-4" /> Resources
            </Button>
          </Link>
        </div>
      </div>

      <CodePlayground initialHtml={initialCode.html} initialCss={initialCode.css} initialJs={initialCode.js} />
    </div>
  )
}
