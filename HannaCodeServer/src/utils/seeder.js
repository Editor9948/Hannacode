const mongoose = require("mongoose")
const colors = require("colors")
const dotenv = require("dotenv")
const slugify = require("slugify")
const Course = require("../models/Course")
const Lesson = require("../models/Lesson")
const Module = require("../models/Module");
const htmlContent = require('./courseContent/html');
const cssContent = require('./courseContent/css')
const javascriptContent = require('./courseContent/javascript')
const advancedjavascriptContent = require('./courseContent/advancedjavascript')
const phpContent = require('./courseContent/php')
const advancedphpContent = require('./courseContent/advancedphp')
const responsivewebdesignContent = require('./courseContent/responsivewebdesign')
const accessibilityContent = require("./courseContent/accessibility")
const cppContent = require("./courseContent/cpp")
const advancedcssContent = require('./courseContent/advancedcss')
const pythonContent = require('./courseContent/python')
const dartContent = require('./courseContent/dart')
const gitContent = require('./courseContent/git')



// Load env vars
dotenv.config()

// Connect to DB
console.log('Connecting to MongoDB...')
console.log('MONGO_URI:', process.env.MONGO_URI ? 'Set' : 'Not set')

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000, // 30 seconds
  socketTimeoutMS: 45000, // 45 seconds
}).then(() => {
  console.log('MongoDB connected successfully')
}).catch((err) => {
  console.error('MongoDB connection error:', err)
  process.exit(1)
})


// Generate random date within last year
const getRandomDate = () => {
  const now = new Date()
  const oneYearAgo = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate())
  return new Date(oneYearAgo.getTime() + Math.random() * (now.getTime() - oneYearAgo.getTime()))
}

// Create courses
const createCourses = async () => {
  const courses = [
    {
      title: "HTML Fundamentals",
      description: "Master the basics of HTML5, including semantic markup, forms, and multimedia elements. Perfect for beginners starting their web development journey.",
      shortDescription: "Learn HTML5 basics for web development.",
      weeks: 8,
      tuition: 49,
      level: "beginner",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("HTML Fundamentals", { lower: true }),
      lessonCount: 27,
      category: "frontend",
      duration: 480, // 8 weeks * 60 minutes
      language: "html",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
      coverImage: "/images/courses/htmlogo.jpg"
    },
    {
      title: "CSS Styling Mastery",
      description: "Learn advanced CSS3 techniques including flexbox, grid, animations, and responsive design. Take your web styling skills to the next level.",
      shortDescription: "Master advanced CSS techniques.",
      weeks: 10,
      tuition: 69,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("CSS Styling Mastery", { lower: true }),
      lessonCount: 27,
      category: "frontend",
      duration: 600, // 10 weeks * 60 minutes
      language: "css",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/csslogo.jpg"
    },
    {
      title: "Advanced CSS Styling",
      description: "Learn advanced CSS3 techniques including responsive website, and Methodologies . Take your web styling skills to the next level.",
      shortDescription: "Master advanced CSS techniques.",
      weeks: 6,
      tuition: 69,
      level: "advanced",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Advanced CSS Styling", { lower: true }),
      lessonCount: 7,
      category: "frontend",
      duration: 360, // 6 weeks * 60 minutes
      language: "css",
      isPremium: true,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/advan.jpg"
    },
    {
      title: "JavaScript Essentials",
      description: "Master modern JavaScript fundamentals including ES6+, DOM manipulation, and async programming. Build a strong foundation in JavaScript.",
      shortDescription: "Learn modern JavaScript fundamentals.",
      weeks: 12,
      tuition: 79,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("JavaScript Essentials", { lower: true }),
      lessonCount: 41,
      category: "frontend",
      duration: 720, // 12 weeks * 60 minutes
      language: "javascript",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/java.jpg"
    },
    {
      title: "Advanced JavaScript Concepts",
      description: "Dive deep into advanced JavaScript topics including design patterns, performance optimization, and modern frameworks.",
      shortDescription: "Explore advanced JavaScript topics.",
      weeks: 8,
      tuition: 89,
      level: "advanced",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Advanced JavaScript Concepts", { lower: true }),
      lessonCount: 28,
      category: "frontend",
      duration: 480, // 8 weeks * 60 minutes
      language: "javascript",
      isPremium: true,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/db1.jpeg"
    },
    {
      title: "Responsive Web Design",
      description: "Learn to create beautiful, responsive websites that work flawlessly across all devices and screen sizes.",
      shortDescription: "Create responsive websites for all devices.",
      weeks: 6,
      tuition: 59,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Responsive Web Design", { lower: true }),
      lessonCount: 22,
      category: "frontend",
      duration: 360, // 6 weeks * 60 minutes
      language: "html",
      isPremium: true,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/respoweb.jpg"
    },
    {
      title: "PHP & MySQL Basics",
      description: "Master PHP programming fundamentals and MySQL database integration. Learn to build dynamic web applications.",
      shortDescription: "Learn PHP and MySQL basics.",
      weeks: 10,
      tuition: 69,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("PHP & MySQL Basics", { lower: true }),
      lessonCount: 36,
      category: "backend",
      duration: 600, // 10 weeks * 60 minutes
      language: "php",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/php.jpg"
    },
    {
      title: "Advanced PHP & MySQL Development",
      description: "Take your PHP and MySQL skills to the next level with advanced topics including OOP, MVC architecture, database optimization, and security best practices.",
      shortDescription: "Master advanced PHP and MySQL development.",
      weeks: 8,
      tuition: 89,
      level: "advanced",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Advanced PHP & MySQL Development", { lower: true }),
      lessonCount: 30,
      category: "backend",
      duration: 480, // 8 weeks * 60 minutes
      language: "php",
      isPremium: true,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/php1.png"
    },
    {
      title: "Web Accessibility",
      description: "Learn to create accessible websites that work for everyone. Master WCAG guidelines and inclusive design principles.",
      shortDescription: "Create accessible websites for everyone.",
      weeks: 6,
      tuition: 49,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Web Accessibility", { lower: true }),
      lessonCount: 15,
      category: "frontend",
      duration: 360, // 6 weeks * 60 minutes
      language: "html",
      isPremium: true,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/access1.png"
    },
    {
      title: "C++ Essentials",
      description: "Master modern C++ fundamentals. Build a strong foundation in C++.",
      shortDescription: "Learn modern C++ fundamentals.",
      weeks: 12,
      tuition: 79,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("C++ Essentials", { lower: true }),
      lessonCount: 15,
      category: "backend",
      duration: 720, // 12 weeks * 60 minutes
      language: "cpp",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/cpp.jpg"
    }, 

    {
      title: "Python Basic",
      description: "Master modern python fundamentals. Build a strong foundation in python.",
      shortDescription: "Learn modern python fundamentals.",
      weeks: 12,
      tuition: 79,
      level: "beginner",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Python Basic", { lower: true }),
      lessonCount: 20,
      category: "backend",
      duration: 720, // 12 weeks * 60 minutes
      language: "python",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/python.jpg"
    }, 

    {
      title: "Dart Fundamentals",
      description: "Master modern Dart programming from scratch. Learn variables, control flow, functions,  and prepare for Flutter development.",
      shortDescription: "Learn Dart programming from scratch.",
      weeks: 8,
      tuition: 79,
      level: "intermediate",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Dart Fundamentals", { lower: true }),
      lessonCount: 20,
      category: "Mobile Development",
      duration: 480, // 8 weeks * 60 minutes
      language: "dart",
      isPremium: false,
       isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
       coverImage: "/images/courses/dart.png"
    },
    {
      title: "Git Version Control Mastery",
      description: "Master Git version control from basics to advanced concepts. Learn branching, merging, collaboration workflows, and best practices for professional development.",
      shortDescription: "Master Git version control for professional development.",
      weeks: 6,
      tuition: 59,
      level: "beginner",
      scholarshipsAvailable: true,
      user: "60d21b4667d0d8992e610c85",
      slug: slugify("Git Version Control Mastery", { lower: true }),
      lessonCount: 25,
      category: "Other",
      duration: 360, // 6 weeks * 60 minutes
      language: "other",
      isPremium: false,
      isPublished: true,
      createdAt: getRandomDate(),
      updatedAt: getRandomDate(),
      coverImage: "/images/courses/git.jpg"
    }
  ]

  return Course.insertMany(courses)
}

// Create lessons
const createLessons = async (courses) => {
  const lessons = []
  const lessonCounts = {
    "HTML Fundamentals": 27,
    "CSS Styling Mastery": 27,
    "Advanced CSS Styling":7,
    "JavaScript Essentials": 41,
    "Advanced JavaScript Concepts": 28,
    "Responsive Web Design": 22,
    "PHP & MySQL Basics": 36,
    "Advanced PHP & MySQL Development": 30,
    "Web Accessibility": 15,
     "C++ Essentials": 15,
    "Python Basic":20,
   "Dart Fundamentals":20,
   "Git Version Control Mastery": 25,


  }

  const courseContent = {
    "HTML Fundamentals": [
      "Introduction to HTML",
      "HTML Document Structure",
      "HTML Headings and Paragraphs",
      "HTML Text Formatting",
      "HTML Links and Navigation",
      "HTML Images and Media",
      "HTML Lists (Ordered and Unordered)",
      "HTML Tables",
      "HTML Forms Basics",
      "HTML Form Elements",
      "HTML Input Types",
      "HTML Form Validation",
      "HTML Div",
      "HTML Classes",
      "HTML Id",
      "HTML Semantic Elements",
      "HTML5 New Features",
      "HTML Comments and Best Practices",
      "HTML Meta Tags",
      "HTML Character Entities",
      "HTML Colors and Backgrounds",
      "HTML Layout Techniques",
      "HTML iframes",
      "HTML Audio and Video",
      "HTML Canvas Basics",
      "HTML SVG Graphics",
      "HTML Project: Building a Complete Website"
    ],
    "CSS Styling Mastery": [
      "Introduction to CSS",
      "CSS Fundamentals and Selectors",
      "CSS Units and Values",
      "CSS Box Model and Layout",
      "CSS Colors and Typography",
      "CSS Backgrounds and Borders",
      "CSS Display and Positioning",
      "CSS Flexbox Layout",
      "CSS Grid Layout",
      "CSS Pseudo-classes and Pseudo-elements",
      "CSS Tables and Lists Styling",
      "CSS Forms and Input Styling",
      "CSS Navigation and Menu Design",
       "CSS Card and Component Design",
        "CSS Specificity and Cascade",
        "CSS Transitions, Animations and Effects",
        "CSS Transformations(2D & 3D)",
         "CSS Media Queries",
        "CSS Variables and Custom Properties",
        "CSS Gradients and Patterns",
        "CSS Box Shadow and Text Effects",
        "CSS Filters and Blend Modes",
        "CSS Responsive Images",
         "CSS Custom Fonts and Icon Fonts",
        "CSS Modal and Popup Design",
        "CSS Layout Patterns",
        "CSS Performance & Best Practices",
       

    ],
      "Advanced CSS Styling":[
        "CSS Performance Optimization",
        "CSS Browser Compatibility",
        "CSS Preprocessors (SASS/SCSS)",
        "CSS Methodologies (BEM, SMACSS)",
        "CSS Frameworks Overview",
        "CSS Project: Building a Responsive Website",
        "CSS Project: Building a Modern Website",
      ],
    "JavaScript Essentials": [
      "Introduction to JavaScript",
      "JavaScript Syntax and Basics",
      "Variables and Data Types",
      "Operators and Expressions",
      "Control Flow: if, else, switch",
      "Loops: for, while, do...while",
      "Functions and Scope",
      "Arrow Functions and ES6 Syntax",
      "Objects and Object Literals",
      "Arrays and Array Methods",
      "Spread Operator",
      "Strings and String Methods",
      "Numbers and Math",
      "Date and Time Handling",
      "Error Handling and Debugging",
      "DOM Manipulation Basics",
      "DOM Events and Listeners",
      "Forms and User Input",
      "Timers and Asynchronous Operations",
      "JSON and Data Handling",
      "Local Storage and Session Storage",
      "ES6+ Features Overview",
      "Template Literals and String Interpolation",
      "Destructuring Assignment",
      "Spread and Rest Operators",
      "Modules and Imports",
      "Closures and Lexical Scope",
      "Callbacks and Higher-Order Functions",
      "Promises and Async Programming",
      "Async/Await Syntax",
      "Fetch API and AJAX",
      "Error Handling in Async Code",
      "Array Iteration Methods",
      "Functional Programming Concepts",
      "Event Delegation",
      "Custom Events",
      "Regular Expressions",
      "Prototypes and Inheritance",
      "Classes and OOP in JavaScript",
      "Project: Interactive Web App",
      "Best Practices and Code Style"
    ],
    "Advanced JavaScript Concepts": [
      "Advanced JavaScript Patterns",
      "Design Patterns in JavaScript",
      "Module Patterns and Namespaces",
      "Prototypal Inheritance Deep Dive",
      "ES6+ Advanced Features",
      "Asynchronous JavaScript Patterns",
      "Error Handling and Debugging",
      "Performance Optimization",
      "Memory Management",
      "Testing and Test-Driven Development",
      "Security Best Practices",
      "Browser APIs and Web APIs",
      "Web Workers and Service Workers",
      "Progressive Web Apps",
      "State Management Patterns",
      "Functional Programming in JavaScript",
      "Reactive Programming",
      "Microservices Architecture",
      "API Design and Implementation",
      "WebSocket and Real-time Communication",
      "GraphQL and REST APIs",
      "Authentication and Authorization",
      "Internationalization and Localization",
      "Accessibility in JavaScript",
      "Progressive Enhancement",
      "Code Splitting and Lazy Loading",
      "Build Tools and Bundlers",
      "Deployment and CI/CD"
    ],
    "Responsive Web Design": [
      "Introduction to Responsive Design",
      "Mobile-First Approach",
      "Fluid Grids and Layouts",
      "Flexible Images and Media",
      "Media Queries Fundamentals",
      "Breakpoints and Viewport",
      "Responsive Typography",
      "Responsive Navigation",
      "Responsive Tables",
      "Responsive Forms",
      "Responsive Images",
      "Responsive Videos",
      "Responsive Maps",
      "Responsive Charts",
      "Responsive Data Visualization",
      "Responsive Email Design",
      "Responsive Print Styles",
      "Performance Optimization",
      "Testing and Debugging",
      "Cross-Browser Compatibility",
      "Responsive Design Patterns",
      "Responsive Design Best Practices"
    ],
    "PHP & MySQL Basics": [
      "Introduction to PHP",
      "PHP Syntax and Variables",
      "PHP Data Types",
      "PHP Operators",
      "PHP Control Structures",
      "PHP Functions",
      "PHP Arrays",
      "PHP Strings",
      "PHP Forms and User Input",
      "PHP Form Validation",
      "PHP File Handling",
      "PHP Cookies and Sessions",
      "PHP Error Handling",
      "PHP Database Connection",
      "MySQL Basics",
      "MySQL Tables and Data Types",
      "MySQL CRUD Operations",
      "MySQL Joins",
      "MySQL Indexes",
      "MySQL Transactions",
      "PHP and MySQL Integration",
      "PHP Prepared Statements",
      "PHP Database Security",
      "PHP Authentication",
      "PHP Authorization",
      "PHP Password Hashing",
      "PHP File Upload",
      "PHP Image Processing",
      "PHP Email Handling",
      "PHP Date and Time",
      "PHP Regular Expressions",
      "PHP JSON Handling",
      "PHP XML Processing",
      "PHP RESTful APIs",
      "PHP Project Structure",
      "PHP Best Practices"
    ],
    "Advanced PHP & MySQL Development": [
      "Advanced PHP Syntax",
      "Object-Oriented PHP",
      "PHP Design Patterns",
      "PHP Inheritance",
      "PHP Interfaces",
      "PHP Testing",
      "PHP Security ",
      "PHP Performance Optimization",
      "PHP Frameworks",
      "PHP API Development",
      "PHP Microservices",
      "PHP DevOps",
      "PHP Cloud Services",
      "PHP Machine Learning",
      "PHP Blockchain", 
      "PHP Internet of Things", 
      "PHP Mobile Development",
      "PHP Game Development", 
      "PHP Virtual Reality",
      "PHP Augmented Reality",
      "PHP Natural Language Processing",
       "PHP Computer Vision",
       "PHP Robotics", 
       "PHP Quantum Computing",
      "PHP Edge Computing",
      "PHP 5G", 
      "PHP Artificial Intelligence",
      "PHP Big Data",
      "PHP Data Science",
      "Asynchronous PHP & Parallel Processing"
    ],
    "Web Accessibility": [
      "Introduction to Web Accessibility",
       "WCAG Guidelines",
      "Semantic HTML for Accessibility",
      "ARIA Roles and Attributes",
      "Keyboard Navigation",
      "Accessible Forms",
      "Testing for Accessibility",
      "Accessible Accordion (Custom Widget)",
      "ARIA Live Region for Notifications",
      "Mobile-Specific Accessibility Patterns",
      "Custom Slider Widget",
      "Accessible Modal Dialog",
      "Accessible Drag-and-Drop",
      "Accessible Treeview",
      "Advanced Mobile Gestures"
    ],
     "C++ Essentials":[
       "Introduction to C++",
       "Variables and Data Types",
       "Operators",
       "Control Flow",
       "Functions",
       "Arrays and Strings",
       "Pointers and References",
       "Foundational Object-Oriented Programming Concepts",
       "Advanced bObject-Oriented Programming Concepts",
       "STL Containers",
       "File Handling",
       "Exception Handling",
       "Templates",
       "Modern C++ Features",
       "Multithreading"
     ],
     "Python Basic":[
       "Introduction to Python and Setting Up",
       "Variables and Data Types",
       "String Operations and Methods",
       "Numbers and Mathematical Operations",
       "Input and Output",
       "Lists-Creation and Basic Operations",
       "List Methods and Advanced Operations",
       "Tuples and Their Uses",
       "Dictionaries - Key-Value Pairs",
        "Sets - Unique Collections",
        "Conditional Statements - if, elif, else",
        "Loops - for and while",
        "Functions-Definition and Parameters",
        "Function Arguments and Keyword Arguments",
         "Modules and Packages",
         "File Input and Output",
         "Exception Handling",
         "Object-Oriented Programming-Classes and Objects",
         "Inheritance and Method Overriding",
         "Encapsulation and Property Decorators",
     ], 
       "Dart Fundamentals":[
        "Introduction to Dart & Setup", 
        "Variables and Data Types",
        "String interpolation and manipulation",
        "Operators in Dart",
        "Conditional Statements in Dart",
        "Loops and Loop Control in Dart",
         "Functions in Dart",
        "Function Parameters and Scope in Dart",
        "Collections (Lists and Sets)", 
         "Maps and Iterable Methods in Dart",
        "Object-Oriented Programming in Dart",
         "Encapsulation and Polymorphism",
        "Inheritance,  Abstract classes",
         "Interfaces, Mixins, and Method Overriding",
        "Null Safety & Type System", 
        "Error Handling & Exceptions",
        "Asynchronous Programming (Future, async/await, Streams)", 
         "Generics in Dart", 
        "Dart Packages & Pub.dev", 
        "Mini Project: CLI Tool or Simple API Consumer"

       ],
       "Git Version Control Mastery": [
         "Introduction to Git and Version Control",
         "Installing and Configuring Git",
         "Understanding Git Repository Structure",
         "Basic Git Commands - Getting Started",
         "Working with Files and the Staging Area",
         "Creating and Managing Commits",
         "Understanding Git Branches",
         "Branching and Merging Strategies",
         "Working with Remote Repositories",
         "GitHub and Git Hosting Platforms",
         "Collaborative Git Workflows",
         "Advanced Git Commands",
         "Resolving Conflicts and Git Issues",
         "Git Hooks and Automation",
         "Git Best Practices and Workflow",
         "Git Security and Authentication",
         "Git Performance and Optimization",
         "Git Integration with Development Tools",
         "Advanced Git Concepts",
         "Troubleshooting and Git Recovery",
         "Git in Different Development Environments",
         "Git Workflow Optimization",
         "Git and Modern Development Practices",
         "Project: Building a Git Workflow",
         "Git Certification and Career Development"
       ]

    
  }


  const getLessonContent = (courseTitle, lessonTitle) => {
    const contentTemplates = {
      "HTML Fundamentals": {
        content: `# ${lessonTitle}

## Overview
This lesson covers the fundamental concepts of ${lessonTitle.toLowerCase()}. You'll learn the essential skills needed to create well-structured web pages.

## Learning Objectives
- Understand the core concepts of ${lessonTitle.toLowerCase()}
- Master the practical implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${htmlContent.getHTMLLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`html
${htmlContent.getHTMLCodeExample(lessonTitle)}
\`\`\`

### Explanation
${htmlContent.getHTMLCodeExplanation(lessonTitle)}

### Practice Exercises
${htmlContent.getHTMLExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: ${lessonTitle}
- W3Schools ${lessonTitle} Tutorial
- HTML5 Specification
- Code Examples Repository

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: htmlContent.getHTMLQuiz(lessonTitle)
      },


      "CSS Styling Mastery": {
        content: `# ${lessonTitle}

## Overview
This lesson covers advanced CSS concepts and techniques for creating modern, responsive web designs.

## Learning Objectives
- Master CSS fundamentals and best practices
- Implement modern layout techniques
- Create responsive and interactive designs
- Optimize CSS for performance

## Detailed Content
### Core Concepts
${cssContent.getCSSLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`css
${cssContent.getCSSCodeExample(lessonTitle)}
\`\`\`

### Explanation
${cssContent.getCSSCodeExplanation(lessonTitle)}

### Practice Exercises
${cssContent.getCSSExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: CSS
- CSS-Tricks
- CodePen Examples
- Browser Compatibility Guide

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: cssContent.getCSSQuiz(lessonTitle)
      },
      "JavaScript Essentials": {
        content: `# ${lessonTitle}

## Overview
Learn JavaScript programming with ${lessonTitle.toLowerCase()}. Master the fundamentals of modern JavaScript development.

## Learning Objectives
- Understand JavaScript concepts
- Write clean, efficient code
- Debug and troubleshoot
- Build interactive applications

## Detailed Content
### Core Concepts
${javascriptContent.getJSLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`javascript
${javascriptContent.getJSCodeExample(lessonTitle)}
\`\`\`

### Explanation
${javascriptContent.getJSCodeExplanation(lessonTitle)}

### Practice Exercises
${javascriptContent.getJSExercises(lessonTitle)}

## Additional Resources
- JavaScript documentation
- MDN Web Docs
- Code examples
- Debugging tools

## Quiz
Test your JavaScript knowledge.`,
        quiz: javascriptContent.getJSQuiz(lessonTitle)
      },
      "Advanced JavaScript Concepts": {
        content: `# ${lessonTitle}

## Overview
This lesson covers advanced JavaScript concepts and patterns. You'll learn how to write more maintainable and scalable code.

## Learning Objectives
- Understand advanced JavaScript patterns
- Master design patterns implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${advancedjavascriptContent.getAdvancedJSLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`javascript
${advancedjavascriptContent.getAdvancedJSCodeExample(lessonTitle)}
\`\`\`

### Explanation
${advancedjavascriptContent.getAdvancedJSCodeExplanation(lessonTitle)}


### Practice Exercises
${advancedjavascriptContent.getAdvancedJSExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: ${lessonTitle}
- JavaScript Design Patterns
- Advanced JavaScript Patterns
- Code Examples Repository

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: advancedjavascriptContent.getAdvancedJSQuiz(lessonTitle)
      },
      "Responsive Web Design": {
        content: `# ${lessonTitle}

## Overview
This lesson covers the essential concepts of ${lessonTitle.toLowerCase()}. You'll learn how to create responsive and adaptive web designs that work across all devices.

## Learning Objectives
- Understand the core concepts of ${lessonTitle.toLowerCase()}
- Master the practical implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${responsivewebdesignContent.getResponsiveWebDesignLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`css
${responsivewebdesignContent.getResponsiveWebDesignCodeExample(lessonTitle)}
\`\`\`

### Explanation
${responsivewebdesignContent.getResponsiveWebDesignCodeExplanation(lessonTitle)}

### Practice Exercises
${responsivewebdesignContent.getResponsiveWebDesignExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: Responsive Design
- CSS-Tricks: Responsive Design
- A List Apart: Responsive Design
- Code Examples Repository

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: responsivewebdesignContent.getResponsiveWebDesignQuiz(lessonTitle)
      },
      "PHP & MySQL Basics": {
        content: `# ${lessonTitle}

## Overview
This lesson covers the essential concepts of ${lessonTitle.toLowerCase()} in PHP & MySQL. You'll learn practical skills for server-side programming and database management.

## Learning Objectives
- Understand the core concepts of ${lessonTitle.toLowerCase()}
- Master practical implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${phpContent.getPHPLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`php
${phpContent.getPHPCodeExample(lessonTitle)}
\`\`\`

### Explanation
${phpContent.getPHPCodeExplanation(lessonTitle)}

### Practice Exercises
${phpContent.getPHPExercises(lessonTitle)}

## Additional Resources
- PHP documentation
- MySQL documentation
- Code examples
- Security guidelines

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: phpContent.getPHPQuiz(lessonTitle)
      },

      // ...existing code...
"Advanced PHP & MySQL Development": {
  content: `# ${lessonTitle}

## Overview
Master advanced PHP & MySQL development with ${lessonTitle.toLowerCase()}. Learn complex patterns, security, and performance techniques.

## Learning Objectives
- Understand advanced PHP & MySQL concepts
- Implement design patterns and best practices
- Build scalable, secure applications
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${advancedphpContent.getAdvancedPHPLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`php
${advancedphpContent.getAdvancedPHPCodeExample(lessonTitle)}
\`\`\`

### Explanation
${advancedphpContent.getAdvancedPHPCodeExplanation(lessonTitle)}

### Practice Exercises
${advancedphpContent.getAdvancedPHPExercises(lessonTitle)}

## Additional Resources
- Official PHP documentation
- MySQL documentation
- Security and performance guides
- Code Examples Repository`,

},
      "Web Accessibility": {
        content: `# ${lessonTitle}

## Overview
This lesson covers the essential concepts of ${lessonTitle.toLowerCase()}. You'll learn how to create accessible web content that works for everyone.

## Learning Objectives
- Understand accessibility principles
- Implement WCAG guidelines
- Test for accessibility
- Follow best practices

## Detailed Content
### Key Concepts
${accessibilityContent.getAccessibilityLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`html
${accessibilityContent.getAccessibilityCodeExample(lessonTitle)}
\`\`\`

### Explanations
${accessibilityContent.getAccessibilityCodeExplanation(lessonTitle)}

### Practice Exercises
${accessibilityContent.getAccessibilityExercises(lessonTitle)}

## Additional Resources
- WCAG documentation
- Accessibility tools
- Testing guidelines
- Best practices

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: accessibilityContent.getAccessibilityQuiz(lessonTitle)
      },

  "C++ Essentials": {
        content: `# ${lessonTitle}

## Overview
This lesson covers the fundamental concepts of ${lessonTitle.toLowerCase()}. You'll learn the essential skills needed to create well-structured web pages.

## Learning Objectives
- Understand the core concepts of ${lessonTitle.toLowerCase()}
- Master the practical implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${cppContent.getCppLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`cpp
${cppContent.getCppCodeExamples(lessonTitle)}
\`\`\`

### Explanation
${cppContent.getCppCodeExplanations(lessonTitle)}

### Practice Exercises
${cppContent.getCppExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: ${lessonTitle}
- W3Schools ${lessonTitle} Tutorial
- HTML5 Specification
- Code Examples Repository

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: cppContent.getCppQuiz(lessonTitle)
      },
  
      "Advanced CSS Styling": {
        content: `# ${lessonTitle}

## Overview
This lesson covers advanced CSS concepts and techniques for creating modern, responsive web designs.

## Learning Objectives
- Master Advanced CSS concepts and best practices
- Implement modern layout techniques
- Create responsive and interactive designs
- Optimize CSS for performance

## Detailed Content
### Core Concepts
${advancedcssContent.getAdvancedCSSLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`css
${advancedcssContent.getAdvancedCSSCodeExample(lessonTitle)}
\`\`\`

### Explanation
${advancedcssContent.getAdvancedCSSCodeExplanation(lessonTitle)}

### Practice Exercises
${advancedcssContent.getAdvancedCSSExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: CSS
- CSS-Tricks
- CodePen Examples
- Browser Compatibility Guide`
      },
  "Python Basic": {
        content: `# ${lessonTitle}

## Overview
This lesson covers python basic and patterns. You'll learn how to write more maintainable and scalable code.

## Learning Objectives
- Understand python basic and patterns
- Master design patterns implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${pythonContent.getPythonLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`python
${pythonContent.getPythonCodeExample(lessonTitle)}
\`\`\`

### Explanation
${pythonContent.getPythonCodeExplanation(lessonTitle)}


### Practice Exercises
${pythonContent.getPythonExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: ${lessonTitle}
- JavaScript Design Patterns
- Advanced JavaScript Patterns
- Code Examples Repository

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: pythonContent.getPythonQuiz(lessonTitle)
      },

  "Dart Fundamentals": {
        content: `# ${lessonTitle}

## Overview
This lesson covers Dart Fundamentals and patterns. You'll learn how to write more maintainable and scalable code.

## Learning Objectives
- Understand Dart Fundamentals and patterns
- Master design patterns implementation
- Apply best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${dartContent.getDartLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`dart
${dartContent.getDartCodeExample(lessonTitle)}
\`\`\`

### Explanation
${dartContent.getDartCodeExplanation(lessonTitle)}


### Practice Exercises
${dartContent.getDartExercises(lessonTitle)}

## Additional Resources
- MDN Web Docs: ${lessonTitle}
- JavaScript Design Patterns
- Advanced JavaScript Patterns
- Code Examples Repository `,

      },
      "Git Version Control Mastery": {
        content: `# ${lessonTitle}

## Overview
This lesson covers essential Git version control concepts. You'll learn how to use Git effectively for version control and collaboration.

## Learning Objectives
- Understand Git concepts and best practices
- Master Git commands and workflows
- Apply version control best practices
- Complete hands-on exercises

## Detailed Content
### Key Concepts
${gitContent.getGitLessonConcepts(lessonTitle)}

### Code Examples
\`\`\`bash
${gitContent.getGitCodeExample(lessonTitle)}
\`\`\`

### Explanation
${gitContent.getGitCodeExplanation(lessonTitle)}

### Practice Exercises
- Practice the Git commands shown in the examples
- Create a sample repository and experiment with different Git features
- Try branching and merging workflows
- Practice resolving merge conflicts

## Additional Resources
- Git Documentation
- GitHub Learning Lab
- Pro Git Book
- Git Best Practices Guide

## Quiz
Test your understanding of ${lessonTitle.toLowerCase()}.`,
        quiz: [
          {
            question: "What is the purpose of Git version control?",
            options: [
              "To compile code",
              "To track changes in files and coordinate work",
              "To run tests",
              "To deploy applications"
            ],
            correctAnswer: 1,
            explanation: "Git is a distributed version control system designed to track changes in files and coordinate work among multiple people."
          }
        ]
      }
      
    };
     return contentTemplates[courseTitle];
  }

  // Extract structured code example & explanation from generated markdown to populate schema codeExamples
  const extractStructured = (markdown, fallbackLanguage) => {
    if (!markdown) return { codeExamples: [] };
    const allowedLangs = ['javascript','css','html','python','php','dart','cpp','java','csharp','go','rust','plaintext'];
    const exampleMatch = markdown.match(/### Code Examples[\s\S]*?```(\w+)?\s*\n([\s\S]*?)```/i);
    if (!exampleMatch) return { codeExamples: [] };
    let lang = (exampleMatch[1] || '').toLowerCase().trim();
    if (!allowedLangs.includes(lang)) {
      if (lang === 'js') lang = 'javascript';
      else if (lang === 'c++') lang = 'cpp';
      else if (lang === 'py') lang = 'python';
    }
    if (!allowedLangs.includes(lang)) lang = allowedLangs.includes(fallbackLanguage) ? fallbackLanguage : 'plaintext';
    const rawCode = exampleMatch[2].trim();

    // Split multiple examples inside code block by markers (// Example n, # Example n, <!-- Example n -->) or blank lines with 'Example n:'
    const segments = [];
    const lines = rawCode.split(/\r?\n/);
    let current = { title: 'Example 1', code: [] };
    let count = 1;
    const markerRegex = /^(?:\/\/|#|<!--)\s*Example\s+(\d+)(?:\s*[-.:]|\s*)(.*?)(?:-->)?$/i;
    lines.forEach(line => {
      const m = line.match(markerRegex);
      if (m) {
        // push previous if has content
        if (current.code.length) segments.push({ ...current, code: current.code.join('\n').trim() });
        count = parseInt(m[1],10) || (segments.length+1);
        const maybeTitle = m[2].trim();
        current = { title: maybeTitle ? maybeTitle : `Example ${count}`, code: [] };
      } else {
        current.code.push(line);
      }
    });
    if (current.code.length) segments.push({ ...current, code: current.code.join('\n').trim() });
    if (!segments.length) segments.push({ title: 'Example 1', code: rawCode });

    // Grab explanation section(s)
    const explanationBlock = markdown.match(/### Explanation[s]?\n([\s\S]*?)(?:\n### Practice Exercises|\n## Additional Resources|$)/i);
    let explanationText = explanationBlock ? explanationBlock[1].trim() : '';

    // Split explanations by '### Example n' or '#### Example n' (global, non-greedy between matches)
    const perExample = {};
    if (explanationText) {
      const exRegex = /(?:^|\n)#{3,4}\s+Example\s+(\d+)\s*\n([\s\S]*?)(?=(?:\n#{3,4}\s+Example\s+\d+)|$)/g;
      let m2; let matchedAny = false;
      while ((m2 = exRegex.exec(explanationText)) !== null) {
        matchedAny = true;
        const num = m2[1];
        const body = (m2[2] || '').trim();
        perExample[num] = body;
      }
      if (!matchedAny) {
        explanationText = explanationText.trim(); // general fallback
      }
    }

    // Filter out segments with no actual code content (after trimming) to avoid empty required fields
    const nonEmptySegments = segments.filter(s => (s.code || '').trim().length > 0);
    if (!nonEmptySegments.length) {
      return { codeExamples: [] };
    }
    const codeExamples = nonEmptySegments.map((seg, idx) => ({
      title: seg.title || `Example ${idx+1}`,
      language: lang,
      code: (seg.code || '').trim(),
      explanation: perExample[idx+1] ? perExample[idx+1] : (explanationText || 'Explanation coming soon.')
    }));

    return { codeExamples };
  };

  for (const course of courses) {
  const lessonCount = lessonCounts[course.title];
  const content = courseContent[course.title];

  // Special module structure for CSS course only (use explicit plan to avoid affecting other courses)
  if (course.title === "CSS Styling Mastery") {
    if (!course.modules) course.modules = [];

    // Prefer explicit module plan from css.js; fallback to even slicing if unavailable
    const plan = (cssContent && typeof cssContent.getCSSModules === 'function')
      ? cssContent.getCSSModules()
      : null;

    if (Array.isArray(plan) && plan.length) {
      // Map: lessonTitle -> index from the main content array to preserve original ordering where needed
      const indexByTitle = new Map();
      (content || []).forEach((t, idx) => indexByTitle.set(t, idx));

      // Use a global lesson order counter per course to keep (course, order) unique across modules
      let globalOrder = 1;

      for (let m = 0; m < plan.length; m++) {
        const mod = plan[m];
        const moduleDoc = await Module.create({
          title: mod.title,
          course: course._id,
          order: m + 1,
          lessons: []
        });

        const lessonsForModule = [];
        // Use only lesson titles that exist in this course's content
        const plannedLessons = (mod.lessons || [])
          .filter(t => indexByTitle.has(t))
          .sort((a, b) => indexByTitle.get(a) - indexByTitle.get(b));

        for (let j = 0; j < plannedLessons.length; j++) {
          const lessonTitle = plannedLessons[j];
          const i = indexByTitle.get(lessonTitle); // original index for resource numbering
          const lessonContent = getLessonContent(course.title, lessonTitle);

          let exercisesArr = [];
          if (lessonContent.content && lessonContent.content.includes('### Practice Exercises')) {
            const match = lessonContent.content.match(/### Practice Exercises([\s\S]*?)(?:\n##|$)/);
            if (match) {
              exercisesArr = match[1]
                .split('\n')
                .map(line => line.replace(/^\s*[-*0-9.]+\s*/, '').trim())
                .filter(line => line.length > 0);
            }
          }

          const safeQuiz = Array.isArray(lessonContent.quiz) ? lessonContent.quiz : [];

          const lesson = await Lesson.create({
            title: lessonTitle,
            description: `Learn ${lessonTitle.toLowerCase()} with practical examples and exercises.`,
            content: lessonContent.content,
            topic: lessonTitle.split(' ')[0],
            course: course._id,
            module: moduleDoc._id,
            order: globalOrder++,
            duration: 30,
            exercises: exercisesArr,
            codeExamples: extractStructured(lessonContent.content, course.language).codeExamples,
            resources: [
              { title: `${lessonTitle} Guide`, type: "pdf", url: `https://example.com/resources/${course._id}/lesson-${(i ?? j) + 1}-guide.pdf` },
              { title: `${lessonTitle} Code Examples`, type: "code", url: `https://example.com/resources/${course._id}/lesson-${(i ?? j) + 1}-code.zip` },
              { title: `${lessonTitle} Practice Exercises`, type: "other", url: `https://example.com/resources/${course._id}/lesson-${(i ?? j) + 1}-exercises.pdf` }
            ],
            quiz: safeQuiz,
            createdAt: getRandomDate(),
            updatedAt: getRandomDate(),
          });

          lessonsForModule.push(lesson._id);
          lessons.push(lesson);
        }

        moduleDoc.lessons = lessonsForModule;
        await moduleDoc.save();
        course.modules.push(moduleDoc._id);
      }

      await course.save();
    } else {
      // Fallback to simple 3-way slicing if plan not available
  const total = lessonCount;
      const per = Math.floor(total / 3) || total;
      const ranges = [
        { title: 'Beginner', start: 0, end: per },
        { title: 'Intermediate', start: per, end: per * 2 },
        { title: 'Advanced', start: per * 2, end: total },
      ];

  // Global order counter across all modules in fallback mode
  let globalOrder = 1;

      for (let m = 0; m < ranges.length; m++) {
        const { title: modTitle, start, end } = ranges[m];
        if (start >= end) continue;

        const moduleDoc = await Module.create({
          title: modTitle,
          course: course._id,
          order: m + 1,
          lessons: []
        });
        const lessonsForModule = [];

        for (let i = start; i < end; i++) {
          const lessonTitle = content[i];
          const lessonContent = getLessonContent(course.title, lessonTitle);

          // Extract exercises similar to plan path
          let exercisesArr = [];
          if (lessonContent.content && lessonContent.content.includes('### Practice Exercises')) {
            const match = lessonContent.content.match(/### Practice Exercises([\s\S]*?)(?:\n##|$)/);
            if (match) {
              exercisesArr = match[1]
                .split('\n')
                .map(line => line.replace(/^\s*[-*0-9.]+\s*/, '').trim())
                .filter(line => line.length > 0);
            }
          }

          const safeQuiz = Array.isArray(lessonContent.quiz) ? lessonContent.quiz : [];
          const lesson = await Lesson.create({
            title: lessonTitle,
            description: `Learn ${lessonTitle.toLowerCase()} with practical examples and exercises.`,
            content: lessonContent.content,
            topic: lessonTitle.split(' ')[0],
            course: course._id,
            module: moduleDoc._id,
            order: globalOrder++,
            duration: 30,
            exercises: exercisesArr,
            codeExamples: extractStructured(lessonContent.content, course.language).codeExamples,
            resources: [
              { title: `${lessonTitle} Guide`, type: "pdf", url: `https://example.com/resources/${course._id}/lesson-${i + 1}-guide.pdf` },
              { title: `${lessonTitle} Code Examples`, type: "code", url: `https://example.com/resources/${course._id}/lesson-${i + 1}-code.zip` },
              { title: `${lessonTitle} Practice Exercises`, type: "other", url: `https://example.com/resources/${course._id}/lesson-${i + 1}-exercises.pdf` }
            ],
            quiz: safeQuiz,
            createdAt: getRandomDate(),
            updatedAt: getRandomDate(),
          });

          lessonsForModule.push(lesson._id);
          lessons.push(lesson);
        }

        moduleDoc.lessons = lessonsForModule;
        await moduleDoc.save();
        course.modules.push(moduleDoc._id);
      }

      await course.save();
    }
  } else {
    // Default: single-module structure for all other courses
    const moduleDoc = await Module.create({
      title: `${course.title} Module 1`,
      course: course._id,
      order: 1,
      lessons: []
    });

    const lessonsForModule = [];

    for (let i = 0; i < lessonCount; i++) {
      const lessonTitle = content[i];
      const lessonContent = getLessonContent(course.title, lessonTitle);

      let exercisesArr = [];
      if (lessonContent.content && lessonContent.content.includes('### Practice Exercises')) {
        const match = lessonContent.content.match(/### Practice Exercises([\s\S]*?)(?:\n##|$)/);
        if (match) {
          exercisesArr = match[1]
            .split('\n')
            .map(line => line.replace(/^\s*[-*0-9.]+\s*/, '').trim())
            .filter(line => line.length > 0);
        }
      }

      const safeQuiz = Array.isArray(lessonContent.quiz) ? lessonContent.quiz : [];

      const lesson = await Lesson.create({
        title: lessonTitle,
        description: `Learn ${lessonTitle.toLowerCase()} with practical examples and exercises.`,
        content: lessonContent.content,
        topic: lessonTitle.split(' ')[0],
        course: course._id,
        module: moduleDoc._id, // associate lesson with module
        order: i + 1,
        duration: 30,
  exercises: exercisesArr,
        codeExamples: extractStructured(lessonContent.content, course.language).codeExamples,
        resources: [
          { title: `${lessonTitle} Guide`, type: "pdf", url: `https://example.com/resources/${course._id}/lesson-${i + 1}-guide.pdf` },
          { title: `${lessonTitle} Code Examples`, type: "code", url: `https://example.com/resources/${course._id}/lesson-${i + 1}-code.zip` },
          { title: `${lessonTitle} Practice Exercises`, type: "other", url: `https://example.com/resources/${course._id}/lesson-${i + 1}-exercises.pdf` }
        ],
        quiz: safeQuiz,
        createdAt: getRandomDate(),
        updatedAt: getRandomDate(),
      });

      lessonsForModule.push(lesson._id);
      lessons.push(lesson);
    }

    moduleDoc.lessons = lessonsForModule;
    await moduleDoc.save();

    if (!course.modules) course.modules = [];
    course.modules.push(moduleDoc._id);
    await course.save();
  }
}
      
return lessons;
}


const importData = async () => {
  try {
    // Clear all collections
    await Course.deleteMany();
    await Lesson.deleteMany();
    await Module.deleteMany(); // <-- Add this line

    console.log("Data cleared...".red.inverse);

    // Create courses
    const courses = await createCourses();
    console.log(`${courses.length} courses created...`.green);

    // Create lessons (and modules)
    const lessons = await createLessons(courses);
    // Count modules after creation
    const modulesCount = await Module.countDocuments();
    console.log(`${modulesCount} modules created...`.green);
    console.log(`${lessons.length} lessons created...`.green);

    console.log("Data imported successfully!".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

// Delete all data
const deleteData = async () => {
  try {
    await Course.deleteMany();
    await Lesson.deleteMany();
    await Module.deleteMany(); // <-- Add this line

    console.log("Data destroyed...".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
}

// Determine which action to take based on command line args
if (process.argv[2] === "-i") {
  importData()
} else if (process.argv[2] === "-d") {
  deleteData()
} else {
  console.log("Please use correct command:".yellow)
  console.log("  npm run seed -- -i  (to import data)".yellow)
  console.log("  npm run seed -- -d  (to delete all data)".yellow)
  process.exit()
};