const getAdvancedJSLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Advanced JavaScript Patterns": `
- Design patterns overview
- Creational patterns (Factory, Singleton, Builder)
- Structural patterns (Adapter, Decorator, Proxy)
- Behavioral patterns (Observer, Strategy, Command)
- Module pattern and revealing module pattern
- Namespace pattern
- Mixin pattern
- Best practices for pattern implementation`,

    "Design Patterns in JavaScript": `
- Singleton pattern implementation
- Factory pattern and abstract factory
- Observer pattern and event handling
- Strategy pattern for algorithms
- Command pattern for operations
- Decorator pattern for extending functionality
- Proxy pattern for object control
- Pattern combinations and anti-patterns`,

    "Module Patterns and Namespaces": `
- Module pattern fundamentals
- Revealing module pattern
- CommonJS modules
- ES6 modules
- Module bundlers
- Namespace organization
- Module dependencies
- Module testing and mocking`,

    "Prototypal Inheritance Deep Dive": `
- Prototype chain mechanics
- Object.create() and inheritance
- Constructor functions
- Class syntax and inheritance
- Mixins and composition
- Multiple inheritance
- Prototype pollution prevention
- Performance considerations`,

    "ES6+ Advanced Features": `
- Symbol and Symbol properties
- Proxy and Reflect
- WeakMap and WeakSet
- Generator functions
- Async iterators
- Optional chaining
- Nullish coalescing
- Private class fields`,

    "Asynchronous JavaScript Patterns": `
- Callbacks and callback hell
- Promises and promise chaining
- Async/await syntax
- Error handling in async code
- Promise.all and Promise.race
- Async iterators and generators
- Event loop and microtasks
- Performance optimization`,

    "Error Handling and Debugging": `
- Types of errors in JavaScript
- Try-catch blocks and error handling
- Custom error classes
- Error propagation and bubbling
- Debugging tools and techniques
- Console methods for debugging
- Source maps and debugging
- Error logging and monitoring
- Performance profiling
- Memory leak detection`,


    "Functional Programming": `
- Pure functions and immutability
- Higher-order functions
- map, filter, reduce
- Function composition and currying
- Avoiding side effects
- Declarative vs imperative code
- Benefits and trade-offs
`,
    "Event Delegation and Custom Events": `
- Event bubbling and capturing
- Delegating events for performance
- Creating and dispatching custom events
- Removing event listeners
- Real-world use cases (dynamic lists, UI frameworks)
- Best practices
`,
    "Memory Management": `
- JavaScript memory model
- Garbage collection basics
- Common sources of memory leaks
- Using WeakMap and WeakSet
- Profiling memory usage
- Preventing and fixing leaks
`,
    "Security in JavaScript": `
- Common vulnerabilities (XSS, CSRF)
- Input validation and sanitization
- Secure coding practices
- Using Content Security Policy (CSP)
- Avoiding eval and insecure APIs
- Safe handling of user data
`,
    "Performance Optimization": `
- Identifying bottlenecks
- Debouncing and throttling
- Lazy loading and code splitting
- Efficient DOM manipulation
- Web Workers for heavy computation
- Profiling and measuring performance
`,
  }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getAdvancedJSCodeExample = (lessonTitle) => {
  const examples = {
    "Advanced JavaScript Patterns": `
// Singleton Pattern
class Singleton {
  static instance;
  
  constructor() {
    if (Singleton.instance) {
      return Singleton.instance;
    }
    Singleton.instance = this;
  }
}

// Factory Pattern
class UserFactory {
  createUser(type) {
    switch(type) {
      case 'admin':
        return new AdminUser();
      case 'regular':
        return new RegularUser();
      default:
        throw new Error('Invalid user type');
    }
  }
}

// Observer Pattern
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach(callback => callback(data));
    }
  }
}`,

    "Design Patterns in JavaScript": `
// Strategy Pattern
class PaymentStrategy {
  pay(amount) {
    throw new Error('pay() method must be implemented');
  }
}

class CreditCardStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(\`Paid \${amount} using credit card\`);
  }
}

class PayPalStrategy extends PaymentStrategy {
  pay(amount) {
    console.log(\`Paid \${amount} using PayPal\`);
  }
}

// Command Pattern
class Command {
  execute() {
    throw new Error('execute() method must be implemented');
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super();
    this.light = light;
  }

  execute() {
    this.light.turnOn();
  }
}`,

    "Module Patterns and Namespaces": `
// Revealing Module Pattern
const userModule = (function() {
  let users = [];

  function addUser(user) {
    users.push(user);
  }

  function getUsers() {
    return users;
  }

  return {
    addUser,
    getUsers
  };
})();

// ES6 Module
export class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return \`\${this.name} <\${this.email}>\`;
  }
}`,

    "Prototypal Inheritance Deep Dive": `
// Prototypal Inheritance
const animal = {
  makeSound() {
    console.log('Some sound');
  }
};

const dog = Object.create(animal);
dog.makeSound = function() {
  console.log('Woof!');
};

// Class Inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Some sound');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof!');
  }
}`,

    "ES6+ Advanced Features": `
// Symbol
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log(sym1 === sym2); // false

// Proxy
const handler = {
  get(target, prop) {
    return prop in target ? target[prop] : 'Property not found';
  }
};

const proxy = new Proxy({}, handler);

// Generator
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

// Async Iterator
async function* asyncNumberGenerator() {
  for (let i = 0; i < 3; i++) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield i;
  }
}`,

    "Asynchronous JavaScript Patterns": `
// Promise.all example
const fetchData = async () => {
  try {
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users'),
      fetch('/api/posts'),
      fetch('/api/comments')
    ]);
    return { users, posts, comments };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Async iterator example
async function* asyncDataGenerator() {
  const data = ['a', 'b', 'c'];
  for (const item of data) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    yield item;
  }
}

// Promise.race example
const timeout = (ms) => new Promise((_, reject) => 
  setTimeout(() => reject(new Error('Timeout')), ms)
);

const fetchWithTimeout = (url, ms) => 
  Promise.race([fetch(url), timeout(ms)]);

// Async/await with error handling
async function processData() {
  try {
    const data = await fetchData();
    const processed = await processItems(data);
    return processed;
  } catch (error) {
    console.error('Error processing data:', error);
    throw error;
  } finally {
    console.log('Processing complete');
  }
}

// Event loop example
console.log('Start');

setTimeout(() => {
  console.log('Timeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

console.log('End');

// Output: Start, End, Promise, Timeout`,

    "Error Handling and Debugging": `
// Custom error class
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.code = 'VALIDATION_ERROR';
  }
}

// Error handling with async/await
async function validateUser(user) {
  try {
    if (!user.name) {
      throw new ValidationError('Name is required');
    }
    if (!user.email) {
      throw new ValidationError('Email is required');
    }
    return await saveUser(user);
  } catch (error) {
    if (error instanceof ValidationError) {
      console.error('Validation failed:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    throw error;
  }
}

// Debugging with console methods
function debugExample() {
  const user = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      country: 'USA'
    }
  };

  console.log('Basic logging:', user);
  console.table([user]);
  console.group('User Details');
  console.log('Name:', user.name);
  console.log('Age:', user.age);
  console.groupEnd();

  console.time('Operation');
  // Some operation
  console.timeEnd('Operation');

  console.trace('Function call stack');
}

// Memory leak detection
class MemoryLeakExample {
  constructor() {
    this.data = new Map();
  }

  addData(key, value) {
    this.data.set(key, value);
  }

  removeData(key) {
    this.data.delete(key);
  }
}

// Performance profiling
function performanceExample() {
  console.profile('Operation');
  // Expensive operation
  for (let i = 0; i < 1000000; i++) {
    Math.random();
  }
  console.profileEnd('Operation');
}

// Error boundary pattern
class ErrorBoundary {
  static async wrap(fn) {
    try {
      return await fn();
    } catch (error) {
      console.error('Error caught by boundary:', error);
      // Log to monitoring service
      return null;
    }
  }
}

// Usage example
async function example() {
  await ErrorBoundary.wrap(async () => {
    const result = await validateUser({});
    console.log(result);
  });
}`,

 "Functional Programming": `
// Pure function
function add(a, b) {
  return a + b;
}

// Higher-order function
function withLogging(fn) {
  return function(...args) {
    console.log('Calling with', args);
    return fn(...args);
  };
}
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs: Calling with [2,3] => 5

// map, filter, reduce
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

// Currying
function multiply(a) {
  return function(b) {
    return a * b;
  };
}
const double = multiply(2);
double(5); // 10
`,
    "Event Delegation and Custom Events": `
// Event Delegation
const list = document.getElementById('myList');
list.addEventListener('click', function(event) {
  if (event.target.tagName === 'list') {
    alert('Clicked: ' + event.target.textContent);
  }
});

// Custom Event
const button = document.getElementById('myButton');
button.addEventListener('customAction', function(e) {
  console.log('Custom event data:', e.detail);
});
const customEvent = new CustomEvent('customAction', { detail: { foo: 'bar' } });
button.dispatchEvent(customEvent);
`,

    "Memory Management": `
// Memory leak example
let cache = {};
function addToCache(key, value) {
  cache[key] = value;
}
// If cache grows unbounded, memory leak occurs

// Using WeakMap to avoid leaks
const wm = new WeakMap();
let obj = {};
wm.set(obj, 'some value');
obj = null; // Now eligible for garbage collection

// Profiling memory usage (in browser dev tools)
console.profile('Memory Profile');
// ... run code ...
console.profileEnd('Memory Profile');
`,

    "Security in JavaScript": `
// Input sanitization
function sanitize(input) {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}
const userInput = '<img src=x onerror=alert(1) />';
document.body.innerHTML = sanitize(userInput); // Safe

// Avoiding eval
// BAD: eval('alert(1)');
// GOOD: Use JSON.parse, Function, or other safe alternatives

// Content Security Policy (CSP) example (set in HTTP headers)
// Content-Security-Policy: default-src 'self'; script-src 'self';
`,

    "Performance Optimization": `
// Debouncing
function debounce(fn, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), delay);
  };
}
window.addEventListener('resize', debounce(() => {
  console.log('Resized!');
}, 200));

// Lazy loading images
const img = document.querySelector('img[data-src]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
observer.observe(img);
`,
  }
  return examples[lessonTitle] || "// Example code will be provided"
}

const getAdvancedJSCodeExplanation =(lessonTitle) => {
    const explanations = {
     "Advanced JavaScript Patterns": `
This code demonstrates several advanced JavaScript design patterns:

- **Singleton Pattern**: Ensures only one instance of a class exists. The constructor checks if 
an instance already exists and returns it if so, otherwise it creates a new one. This is useful 
for shared resources like configuration or database connections.

- **Factory Pattern**: Provides a way to create objects without specifying the exact class. 
The \`UserFactory\` class creates different user types based on input. 
This pattern is helpful for managing object creation logic in one place.

- **Observer Pattern**: Implements a simple event system. The \`EventEmitter\` class allows registering event listeners (\`on\`)
 and emitting events (\`emit\`). 
 This is foundational for building decoupled, event-driven systems such as UI frameworks or real-time apps.
`,

    "Design Patterns in JavaScript": `
This code covers more advanced design patterns:

- **Strategy Pattern**: Defines a family of algorithms, encapsulates each one, and makes them interchangeable. 
Here, different payment strategies (credit card, PayPal) implement the same interface, 
allowing the payment method to be chosen at runtime.

- **Command Pattern**: Encapsulates a request as an object, allowing for parameterization and queuing of requests. 
The \`Command\` class is a base, and \`LightOnCommand\` executes a specific action.
 This is useful for implementing undo/redo, transactional operations, or macro recording.
`,

    "Module Patterns and Namespaces": `
This code demonstrates modularization in JavaScript:

- **Revealing Module Pattern**: Encapsulates private data and exposes only selected methods. 
The \`userModule\` keeps the \`users\` array private and exposes \`addUser\` and \`getUsers\`. 
This pattern helps organize code and prevent global namespace pollution.

- **ES6 Module**: Shows how to define and export a class using ES6 module syntax.
 This approach is now standard for structuring modern JavaScript projects, enabling better code reuse and maintainability.
`,

    "Prototypal Inheritance Deep Dive": `
This code explores inheritance in JavaScript:

- **Prototypal Inheritance**: Uses \`Object.create\` to set up inheritance.
 The \`dog\` object inherits from \`animal\` and overrides the \`makeSound\` method.
  This is the core inheritance mechanism in JavaScript.

- **Class Inheritance**: Uses ES6 \`class\` syntax to define a base class (\`Animal\`) and a subclass (\`Dog\`).
 This syntax is more familiar to developers from other OOP languages and is now widely used in modern JavaScript.
`,

    "ES6+ Advanced Features": `
This code highlights advanced ES6+ features:

- **Symbol**: Unique and immutable primitive values, often used as object property keys to avoid name collisions.

- **Proxy**: Allows custom behavior for fundamental operations (like property lookup).
 The example returns a default message if a property is missing.

- **Generator**: Functions that can pause and resume execution, useful for lazy iteration or asynchronous flows.

- **Async Iterator**: Combines async/await with iteration, enabling consumption of asynchronous data streams in a for-await-of loop.
`,

    "Asynchronous JavaScript Patterns": `
This code demonstrates modern async patterns:

- **Promise.all**: Runs multiple promises in parallel and waits for all to resolve.
 Useful for fetching related data sets concurrently.

- **Async Iterator**: Enables asynchronous iteration over data sources, such as paginated APIs or streams.

- **Promise.race**: Returns the result of the first promise to settle (resolve or reject). 
Useful for implementing timeouts or prioritizing fast responses.

- **Async/Await with Error Handling**: Shows structured error handling and cleanup using try/catch/finally blocks.

- **Event Loop Example**: Illustrates the order of execution for synchronous code, microtasks (promises),
 and macrotasks (setTimeout), which is crucial for understanding JavaScript concurrency.
`,

    "Error Handling and Debugging": `
This code covers robust error handling and debugging techniques:

- **Custom Error Class**: Extends the built-in Error to create domain-specific errors,
 improving error clarity and handling.

- **Async/Await Error Handling**: Demonstrates catching and distinguishing between different error types, 
and rethrowing or logging as needed.

- **Console Debugging Methods**: Uses \`console.log\`, \`console.table\`, \`console.group\`, \`console.time\`, 
and \`console.trace\` for effective debugging and performance measurement.

- **Memory Leak Detection**: Shows how to manage memory with data structures and highlights the importance
 of removing unused references.

- **Performance Profiling**: Uses \`console.profile\` to measure code performance, helping identify bottlenecks.

- **Error Boundary Pattern**: Wraps async functions to catch and handle errors globally, 
which is useful for building resilient applications and integrating with monitoring tools.
`,

  "Functional Programming": `
This code demonstrates functional programming principles:

- **Pure functions**: Functions like \`add\` always return the same output for the same input and
 have no side effects, making code predictable and testable.
- **Higher-order functions**: \`withLogging\` takes a function and returns a new function that adds logging,
 showing how functions can be composed and extended.
- **Array methods**: \`map\`, \`filter\`, and \`reduce\` are used for declarative data processing, replacing imperative loops.
- **Currying**: The \`multiply\` function returns a new function, enabling partial application and flexible code reuse.
Functional programming leads to cleaner, more maintainable code and is widely used in modern JavaScript (e.g., React, Redux).
`,
     "Event Delegation and Custom Events": `
This code covers advanced event handling:

- **Event Delegation**: Instead of adding listeners to each list item, a single listener on the parent handles all clicks,
 improving performance and supporting dynamic content.
- **Custom Events**: Shows how to create and dispatch custom events with data (\`detail\`), 
enabling decoupled communication between components. This is useful in large apps and frameworks.
`,
     "Memory Management": `
This code addresses memory management:

- **Memory leaks**: The cache example shows how unbounded growth can cause leaks if references are never released.
- **WeakMap**: Using \`WeakMap\` allows objects to be garbage collected if there are no other references, preventing leaks.
- **Profiling**: \`console.profile\` helps measure memory usage and find leaks using browser dev tools.
Understanding and managing memory is crucial for building performant, reliable applications.
`,
     "Security in JavaScript": `
This code demonstrates security best practices:

- **Input sanitization**: The \`sanitize\` function prevents XSS by escaping user input before inserting into the DOM.
- **Avoiding eval**: Shows why \`eval\` is dangerous and alternatives should be used.
- **Content Security Policy (CSP)**: Example of a CSP header that restricts script sources, reducing XSS risk.
Security is essential for protecting users and data in any web application.
`,
     "Performance Optimization": `
This code focuses on performance:

- **Debouncing**: The \`debounce\` function limits how often a function runs, useful for events like resize or input,
 reducing unnecessary work.
- **Lazy loading**: Uses \`IntersectionObserver\` to load images only when they enter the viewport, improving 
load times and user experience.
Performance optimization is key for responsive, scalable web apps.
`,

    };
return explanations[lessonTitle] || "// Example code will be provided"
}

const getAdvancedJSExercises = (lessonTitle) => {
  const exercises = {
    "Advanced JavaScript Patterns": `
1. Implement a Singleton pattern for a database connection
2. Create a Factory pattern for different types of UI components
3. Build an Observer pattern for a real-time chat application
4. Implement a Strategy pattern for different sorting algorithms
5. Create a Command pattern for a text editor's undo/redo functionality`,

    "Design Patterns in JavaScript": `
1. Implement a Decorator pattern for adding logging to methods
2. Create a Proxy pattern for caching expensive operations
3. Build a State pattern for a vending machine
4. Implement a Template Method pattern for different report generators
5. Create a Composite pattern for a file system structure`,

    "Module Patterns and Namespaces": `
1. Convert a monolithic application to use the Module pattern
2. Create a namespace for a library of utility functions
3. Implement ES6 modules for a component-based system
4. Build a module bundler configuration
5. Create a module testing strategy`,

    "Prototypal Inheritance Deep Dive": `
1. Implement multiple inheritance using mixins
2. Create a class hierarchy for different types of vehicles
3. Build a prototype chain for a game entity system
4. Implement private members using WeakMap
5. Create a composition-based inheritance system`,

    "ES6+ Advanced Features": `
1. Implement a custom Symbol-based iterator
2. Create a Proxy for data validation
3. Build a Generator for infinite sequences
4. Implement an Async Iterator for paginated data
5. Create a class with private fields and methods`,

    "Asynchronous JavaScript Patterns": `
1. Implement a promise-based API client
   - Create a class that handles API requests using promises
   - Implement methods for GET, POST, PUT, and DELETE
   - Add error handling and retry logic
   - Include request timeout functionality

2. Create an async iterator for paginated data
   - Implement a class that fetches paginated data
   - Use async/await for data fetching
   - Handle errors and edge cases
   - Add methods for next and previous page

3. Build a rate-limited API queue
   - Create a queue system for API requests
   - Implement rate limiting
   - Add priority levels for requests
   - Handle request cancellation

4. Implement error handling for async operations
   - Create a utility for handling async errors
   - Implement retry logic with exponential backoff
   - Add error reporting and logging
   - Create custom error types

5. Create a promise pool for concurrent operations
   - Implement a pool of promises
   - Add concurrency control
   - Handle task prioritization
   - Implement task cancellation`,

    "Error Handling and Debugging": `
1. Implement a robust error handling system
   - Create custom error classes for different scenarios
   - Implement error logging and monitoring
   - Add error recovery mechanisms
   - Create error reporting utilities

2. Build a debugging utility
   - Create a debug logger with different levels
   - Implement source map support
   - Add performance monitoring
   - Create debugging helpers for common scenarios

3. Develop a memory leak detector
   - Implement memory usage tracking
   - Create leak detection algorithms
   - Add reporting and visualization
   - Implement cleanup recommendations

4. Create a performance profiler
   - Implement function timing
   - Add memory usage tracking
   - Create performance reports
   - Implement optimization suggestions

5. Build an error monitoring service
   - Create error collection and aggregation
   - Implement error categorization
   - Add error reporting and notifications
   - Create error analytics dashboard`,

   "Functional Programming": `
1. Write a pure function to reverse a string
2. Implement a higher-order function for timing any function's execution
3. Use map, filter, and reduce to process an array of objects (e.g., sum ages of users over 18)
4. Create a curried function for exponentiation
5. Refactor imperative code to declarative using array methods
`,
    "Event Delegation and Custom Events": `
1. Implement event delegation for a dynamic to-do list
2. Create and dispatch a custom event for form submission
3. Remove event listeners to prevent memory leaks
4. Build a notification system using custom events
5. Explain the difference between event bubbling and capturing with code
`,
    "Memory Management": `
1. Identify and fix a memory leak in a sample app
2. Use WeakMap to store metadata for DOM elements
3. Profile memory usage of a function using browser dev tools
4. Simulate a memory leak and demonstrate how to fix it
5. Write a guide on best practices for memory management in JS
`,
    "Security in JavaScript": `
1. Sanitize user input before rendering in the DOM
2. Demonstrate an XSS attack and how to prevent it
3. Set up a Content Security Policy for a sample app
4. Refactor code to remove use of eval
5. List and explain common JavaScript security vulnerabilities
`,
    "Performance Optimization": `
1. Implement debouncing for a search input
2. Use IntersectionObserver to lazy load multiple images
3. Profile and optimize a slow function
4. Refactor code to minimize DOM reflows
5. Use Web Workers to offload heavy computation
`,
 
  }
  return exercises[lessonTitle] || "Exercise content will be provided"
}

const getAdvancedJSQuiz = (lessonTitle) => {
  const quizzes = {
    "Advanced JavaScript Patterns": [
      {
        question: "What is the main purpose of the Singleton pattern?",
        options: [
          "To create multiple instances of a class",
          "To ensure a class has only one instance",
          "To create a factory for objects",
          "To implement inheritance"
        ],
        answer: 1
      },
      {
        question: "Which pattern is best for implementing undo/redo functionality?",
        options: [
          "Observer Pattern",
          "Command Pattern",
          "Strategy Pattern",
          "Factory Pattern"
        ],
        answer: 1
      }
    ],
    "Design Patterns in JavaScript": [
      {
        question: "What is the purpose of the Decorator pattern?",
        options: [
          "To create new objects",
          "To add behavior to objects dynamically",
          "To implement inheritance",
          "To create a factory"
        ],
        answer: 1
      },
      {
        question: "Which pattern is used for caching?",
        options: [
          "Observer Pattern",
          "Proxy Pattern",
          "Factory Pattern",
          "Singleton Pattern"
        ],
        answer: 1
      }
    ],
    "Asynchronous JavaScript Patterns": [
      {
        question: "What is the main advantage of using async/await over callbacks?",
        options: [
          "Better performance",
          "Cleaner and more readable code",
          "Smaller bundle size",
          "Better browser support"
        ],
        answer: 1
      },
      {
        question: "Which method is used to handle multiple promises?",
        options: [
          "Promise.any",
          "Promise.all",
          "Promise.race",
          "Promise.some"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of Promise.race?",
        options: [
          "To run promises in sequence",
          "To run promises in parallel",
          "To return the first resolved/rejected promise",
          "To handle promise errors"
        ],
        answer: 2
      },
      {
        question: "Which statement about the event loop is correct?",
        options: [
          "It runs synchronously",
          "It processes microtasks before macrotasks",
          "It processes macrotasks before microtasks",
          "It doesn't handle promises"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of async iterators?",
        options: [
          "To handle synchronous loops",
          "To process arrays faster",
          "To iterate over asynchronous data sources",
          "To improve code readability"
        ],
        answer: 2
      }
    ],

    "Error Handling and Debugging": [
      {
        question: "What is the purpose of custom error classes?",
        options: [
          "To improve code performance",
          "To provide more specific error handling",
          "To reduce code size",
          "To make errors more visible"
        ],
        answer: 1
      },
      {
        question: "Which console method is best for debugging object structures?",
        options: [
          "console.log",
          "console.table",
          "console.error",
          "console.warn"
        ],
        answer: 1
      },
      {
        question: "What is the main purpose of source maps?",
        options: [
          "To improve code performance",
          "To make debugging minified code easier",
          "To reduce bundle size",
          "To improve code readability"
        ],
        answer: 1
      },
      {
        question: "Which tool is best for detecting memory leaks?",
        options: [
          "console.log",
          "Performance API",
          "Memory profiler",
          "Error tracking"
        ],
        answer: 2
      },
      {
        question: "What is the purpose of error boundaries?",
        options: [
          "To prevent all errors",
          "To catch and handle errors at a specific level",
          "To improve error messages",
          "To reduce error handling code"
        ],
        answer: 1
      }
    ],
    "Functional Programming": [
      {
        question: "What is a pure function?",
        options: [
          "A function that modifies global state",
          "A function that always returns the same output for the same input and has no side effects",
          "A function that uses async/await",
          "A function that only works with arrays"
        ],
        answer: 1
      },
      {
        question: "Which method is NOT a higher-order function?",
        options: [
          "map",
          "filter",
          "reduce",
          "parseInt"
        ],
        answer: 3
      },
      {
        question: "What does currying enable you to do?",
        options: [
          "Run code in parallel",
          "Partially apply arguments to a function",
          "Create classes",
          "Optimize memory usage"
        ],
        answer: 1
      },
      {
        question: "Which of the following is a benefit of functional programming?",
        options: [
          "Easier to reason about code",
          "More side effects",
          "Slower performance",
          "Harder to test"
        ],
        answer: 0
      }
    ],
    "Event Delegation and Custom Events": [
      {
        question: "What is event delegation?",
        options: [
          "Attaching an event listener to every child element individually",
          "Attaching a single event listener to a parent element to handle events from its children",
          "Creating custom events",
          "Removing event listeners"
        ],
        answer: 1
      },
      {
        question: "Which method is used to create a custom event?",
        options: [
          "new Event()",
          "new CustomEvent()",
          "dispatchEvent()",
          "addEventListener()"
        ],
        answer: 1
      },
      {
        question: "Why is event delegation useful?",
        options: [
          "It reduces the number of event listeners and supports dynamic content",
          "It increases memory usage",
          "It makes code harder to maintain",
          "It prevents event bubbling"
        ],
        answer: 0
      }
    ],
    "Memory Management": [
      {
        question: "What is a memory leak?",
        options: [
          "When memory is released too early",
          "When memory that is no longer needed is not released",
          "When the browser crashes",
          "When too many event listeners are added"
        ],
        answer: 1
      },
      {
        question: "How does WeakMap help prevent memory leaks?",
        options: [
          "It prevents all objects from being garbage collected",
          "It allows objects to be garbage collected if there are no other references",
          "It stores data permanently",
          "It increases memory usage"
        ],
        answer: 1
      },
      {
        question: "Which tool can you use to profile memory usage in JavaScript?",
        options: [
          "console.log",
          "console.profile",
          "console.table",
          "console.warn"
        ],
        answer: 1
      }
    ],
    "Security in JavaScript": [
      {
        question: "What is XSS (Cross-Site Scripting)?",
        options: [
          "A way to style web pages",
          "A security vulnerability where attackers inject malicious scripts into web pages",
          "A JavaScript library",
          "A type of memory leak"
        ],
        answer: 1
      },
      {
        question: "How can you prevent XSS attacks?",
        options: [
          "By using eval()",
          "By sanitizing user input before rendering it in the DOM",
          "By using more event listeners",
          "By using WeakMap"
        ],
        answer: 1
      },
      {
        question: "What does a Content Security Policy (CSP) do?",
        options: [
          "It restricts which scripts and resources can be loaded by the browser",
          "It increases page load times",
          "It disables JavaScript",
          "It prevents memory leaks"
        ],
        answer: 0
      }
    ],
    "Performance Optimization": [
      {
        question: "What is debouncing used for?",
        options: [
          "To run a function as many times as possible",
          "To limit how often a function is called in response to rapid events",
          "To increase memory usage",
          "To create custom events"
        ],
        answer: 1
      },
      {
        question: "What does lazy loading do?",
        options: [
          "Loads all resources at once",
          "Loads resources only when they are needed or visible",
          "Increases initial page load time",
          "Disables images"
        ],
        answer: 1
      },
      {
        question: "Which API is commonly used for lazy loading images?",
        options: [
          "MutationObserver",
          "IntersectionObserver",
          "ResizeObserver",
          "PerformanceObserver"
        ],
        answer: 1
      }
    ]
  }
  return quizzes[lessonTitle] || []
}

module.exports = {
    getAdvancedJSLessonConcepts,
    getAdvancedJSCodeExample,
    getAdvancedJSCodeExplanation,
    getAdvancedJSExercises,
    getAdvancedJSQuiz
    };