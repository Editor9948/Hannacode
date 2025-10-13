const getJSLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to JavaScript": `
- What is JavaScript and its role in web development
- JavaScript engines (V8, SpiderMonkey, JavaScriptCore)
- History and evolution of JavaScript
- JavaScript in browsers and Node.js
- Development tools and environment setup
- Writing your first JavaScript program
- Understanding the JavaScript ecosystem`,

    "JavaScript Syntax and Basics": `
- JavaScript syntax rules and best practices
- Statements vs expressions
- Comments and documentation
- Code formatting and style guides
- Semicolons and automatic semicolon insertion
- Whitespace and indentation
- Using the console for development
- Debugging basics`,

    "Variables and Data Types": `
- Variable declaration (var, let, const)
- Variable naming conventions and best practices
- Primitive data types (string, number, boolean, null, undefined, symbol, bigint)
- Type coercion and conversion
- Type checking with typeof and instanceof
- Variable scope (global, function, block)
- Temporal dead zone and hoisting
- Memory management and garbage collection`,

    "Operators and Expressions": `
- Arithmetic operators and precedence
- Assignment operators and compound assignment
- Comparison operators and type coercion
- Logical operators and short-circuit evaluation
- Bitwise operators
- String operators and template literals
- Operator precedence and associativity
- Type conversion in expressions`,

    "Control Flow: if, else, switch": `
- Conditional statements (if, else if, else)
- Switch statements and fall-through
- Truthy and falsy values
- Nullish coalescing operator (??)
- Optional chaining (?.)
- Conditional (ternary) operator
- Logical operators in conditionals
- Best practices for control flow`,

    "Loops: for, while, do...while": `
- For loops and variations (for...of, for...in)
- While and do...while loops
- Loop control statements (break, continue)
- Labeled statements
- Iterating over arrays and objects
- Performance considerations
- Common loop patterns
- Avoiding infinite loops`,

    "Functions and Scope": `
- Function declarations and expressions
- Function parameters and arguments
- Return values and early returns
- Function scope and closure
- Hoisting and temporal dead zone
- Default parameters and rest parameters
- Function best practices
- Pure functions and side effects`,

    "Arrow Functions and ES6 Syntax": `
- Arrow function syntax and usage
- Differences from regular functions
- Lexical this binding
- Implicit and explicit returns
- Arrow functions in methods
- When to use arrow functions
- Arrow functions and this context
- Arrow functions in callbacks`,

    "Objects and Object Literals": `
- Creating and manipulating objects
- Object properties and methods
- Property descriptors and attributes
- Object methods (Object.keys, Object.values, etc.)
- Object destructuring and spread
- Computed property names
- Object shorthand syntax
- Object immutability and freezing`,

    "Arrays and Array Methods": `
- Array creation and manipulation
- Array methods (map, filter, reduce, etc.)
- Array iteration and searching
- Array sorting and manipulation
- Array destructuring and spread
- Typed arrays
- Array-like objects
- Performance considerations`,

  "Spread Operator":`
- Introduction to the spread operator
- Spread with Array
- Spread with Object
- Spread with strings and iterable
- Practical Use Cases
- Limitations of spread operator
- Spread vs Rest Operator`,

    "Strings and String Methods": `
- String creation and manipulation
- Template literals and interpolation
- String methods and properties
- Regular expressions with strings
- String encoding and decoding
- String performance
- Unicode and internationalization
- String best practices`,

    "Numbers and Math": `
- Number types and representation
- Math object and methods
- Number methods and properties
- Random number generation
- Date and time calculations
- Currency and financial calculations
- Number formatting
- Precision and rounding`,

    "Date and Time Handling": `
- Date object creation and manipulation
- Date methods and properties
- Time zones and UTC
- Date formatting and parsing
- Date arithmetic
- Timers and intervals
- Performance considerationsnn
- Date libraries and alternatives`,

    "Error Handling and Debugging": `
- Try-catch-finally blocks
- Error types and custom errors
- Error propagation
- Debugging tools and techniques
- Console methods
- Source maps
- Error logging
- Best practices for error handling`,

    "DOM Manipulation Basics": `
- DOM tree structure
- Selecting elements
- Modifying elements
- Creating and removing elements
- Event handling
- DOM traversal
- Performance optimization
- Cross-browser compatibility`,

    "DOM Events and Listeners": `
- Event types and phases
- Event listeners and handlers
- Event object properties
- Event delegation
- Custom events
- Event bubbling and capturing
- Event best practices
- Performance considerations`,

    "Forms and User Input": `
- Form elements and properties
- Form validation
- Input types and attributes
- Form submission handling
- File uploads
- Form security
- Accessibility considerations
- Best practices for forms`,

    "Timers and Asynchronous Operations": `
- setTimeout and setInterval
- requestAnimationFrame
- Promise-based timing
- Async operations
- Event loop
- Microtasks and macrotasks
- Performance considerations
- Best practices for timers`,

    "JSON and Data Handling": `
- JSON syntax and structure
- JSON methods (parse, stringify)
- Data serialization
- Working with APIs
- Error handling
- Data validation
- Performance optimization
- Security considerations`,

    "Local Storage and Session Storage": `
- Web Storage API
- Local Storage vs Session Storage
- Storage methods and properties
- Data persistence
- Storage limits
- Security considerations
- Cross-browser compatibility
- Best practices for storage`,

    "ES6+ Features Overview": `
- Let and const
- Template literals
- Destructuring
- Spread and rest operators
- Arrow functions
- Classes
- Modules
- New built-in methods`,

    "Template Literals and String Interpolation": `
- Basic template literals
- Multi-line strings
- Expression interpolation
- Tagged templates
- Raw strings
- Performance considerations
- Use cases
- Best practices`,

    "Destructuring Assignment": `
- Array destructuring
- Object destructuring
- Default values
- Nested destructuring
- Rest parameters
- Use cases
- Performance considerations
- Best practices`,

    "Spread and Rest Operators": `
- Array spread
- Object spread
- Rest parameters
- Use cases
- Performance considerations
- Limitations
- Best practices
- Common patterns`,

    "Modules and Imports": `
- Module syntax
- Import and export
- Default exports
- Named exports
- Dynamic imports
- Module bundling
- Tree shaking
- Best practices`,

    "Closures and Lexical Scope": `
- Closure basics
- Lexical scope
- Private variables
- Module pattern
- Performance considerations
- Memory management
- Use cases
- Best practices`,

    "Callbacks and Higher-Order Functions": `
- Callback functions
- Higher-order functions
- Function composition
- Error handling
- Callback hell
- Performance considerations
- Use cases
- Best practices`,

    "Promises and Async Programming": `
- Promise basics
- Promise methods
- Error handling
- Promise chaining
- Promise.all and Promise.race
- Performance considerations
- Use cases
- Best practices`,

    "Async/Await Syntax": `
- Async functions
- Await operator
- Error handling
- Parallel execution
- Performance considerations
- Use cases
- Best practices
- Common patterns`,

    "Fetch API and AJAX": `
- Fetch API basics
- Request and response objects
- Error handling
- CORS and security
- Performance optimization
- Use cases
- Best practices
- Alternatives to Fetch`,

    "Error Handling in Async Code": `
- Try-catch with async/await
- Promise error handling
- Error propagation
- Error types
- Error logging
- Performance considerations
- Best practices
- Common patterns`,

    "Array Iteration Methods": `
- map, filter, reduce
- forEach, some, every
- find, findIndex
- Performance considerations
- Use cases
- Best practices
- Common patterns
- Method chaining`,

    "Functional Programming Concepts": `
- Pure functions
- Immutability
- Function composition
- Higher-order functions
- Currying
- Performance considerations
- Use cases
- Best practices`,

    "Event Delegation": `
- Event bubbling
- Event capturing
- Event delegation pattern
- Performance benefits
- Use cases
- Best practices
- Common patterns
- Limitations`,

    "Custom Events": `
- Creating custom events
- Dispatching events
- Event handling
- Event data
- Use cases
- Best practices
- Common patterns
- Performance considerations`,

    "Regular Expressions": `
- Regex syntax
- Pattern matching
- Flags and options
- Methods and properties
- Performance considerations
- Use cases
- Best practices
- Common patterns`,

    "Prototypes and Inheritance": `
- Prototype chain
- Object inheritance
- Constructor functions
- Prototype methods
- Performance considerations
- Use cases
- Best practices
- Common patterns`,

    "Classes and OOP in JavaScript": `
- Class syntax
- Inheritance
- Static methods
- Private fields
- Performance considerations
- Use cases
- Best practices
- Common patterns`,

    "Project: Interactive Web App": `
- Project planning
- Architecture design
- Implementation
- Testing
- Debugging
- Performance optimization
- Deployment
- Documentation`,

    "Best Practices and Code Style": `
- Code organization
- Naming conventions
- Documentation
- Testing
- Performance
- Security
- Accessibility
- Maintenance`
  };
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getJSCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to JavaScript": `
// Example 1: Inline JavaScript example
<script>
  //Your first JavaScript program
  console.log('Hello, JavaScript!');
  
  //Using the browser's alert
  alert('Welcome to JavaScript!');
  
  //Basic arithmetic
  console.log(2 + 2); // 4
</script>`,

    "JavaScript Syntax and Basics": `
// Example 1: Comments and documentation
/*
  This is a multi-line comment
  It's good for documenting functions
 */

   //Single-line comment
let x = 5; // This is an inline comment

// Example 2: Statements and expressions
console.log('x =', x); // Statement
x + 2; // Expression

// Example 3: Code formatting
if (x > 0) {
    console.log('Positive number');
} else {
    console.log('Non-positive number');
}`,
    "Variables and Data Types": `
// Example 1: What Is Variable 
let name = "Hanna";
console.log(name);

// Example 2: Declaring Variables Using \`var\`
function exampleVar() {
console.log(x); // Output: undefined (due to hoisting)
var x = 10;
console.log(x); // Output: 10

var x = 20; // Re-declaration is allowed
console.log(x); // Output: 20

if (true) {
var y = 30;
  }
 console.log(y); // Output: 30 (var is function-scoped)
}
exampleVar();

// Example 3: Declaring Variables Using \`let\`
function exampleLet() {
// console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 10;
console.log(a); // Output: 10

a = 20; // Re-assignment is allowed
console.log(a); // Output: 20

// let a = 30; // SyntaxError: Identifier 'a' has already been declared

if (true) {
let b = 40;
console.log(b); // Output: 40
 }
// console.log(b); // ReferenceError: b is not defined (let is block-scoped)
}
exampleLet();

// Example 4: Declaring Variables Using \`const\`
function exampleConst() {
const PI = 3.14;
console.log(PI); // Output: 3.14

// PI = 3.14159; // TypeError: Assignment to constant variable.
// const PI = 3.0; // SyntaxError: Identifier 'PI' has already been declared

const user = {
name: "Alice",
age: 30
};
console.log(user); // Output: { name: 'Alice', age: 30 }

user.age = 31; // Allowed: You can modify properties of an object declared
with const
console.log(user); // Output: { name: 'Alice', age: 31 }

// user = {}; // TypeError: Assignment to constant variable. (Cannot reassign
the object itself)
}
exampleConst();

// Example 5: Data Types
let name = "Alice"; // string
const age = 30; // number
let isStudent = true; // boolean
let score = null; // null
let data; // undefined
const id = Symbol('id'); // symbol
const bigNum = 9007199254740991n; // bigint

// Example 6: Type Checking
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof score); // "object"
console.log(typeof data); // "undefined"
console.log(typeof id); // "symbol"
console.log(typeof bigNum); // "bigint"

// Example 7: Type Conversion
console.log(String(age)); // "30"
console.log(Number("123")); // 123
console.log(Boolean(1)); // true`,

    "Operators and Expressions": `
// Example 1: Arithmetic operators
let a = 10, b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000

// Example 2: Assignment operators
a += 5; // a = a + 5
console.log(a); // 15

let value = 10;
value += 5; // value is now 15
console.log(value); // Output: 15
value *= 2; // value is now 30
console.log(value); // Output: 30

// Example 3: Comparison operators
console.log(a > b); // true
console.log(a === 15); // true
console.log(a !== b); // true
console.log(1 == "1"); // Output: true (string "1" is coerced to number 1)
console.log(1 === "1"); // Output: false (different types)

// Example 4: Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true); // false

// Example 5: String operators
// Using + operator
let firstName = "Hanna";
let lastName = "Code";
let fullName = firstName + " " + lastName;
console.log(fullName); // Output: Hanna Code

   // Using += operator
let greeting = "Hello";
greeting += " World!";
console.log(greeting); // Output: Hello World!


// Example 6: String concatenation with Template Literals
let course = "JavaScript";
let platform = "HannaCode";
let message = \`I am learning \${course} on \${platform}.\`;
console.log(message);
// Output: I am learning JavaScript on HannaCode.`,


    "Control Flow: if, else, switch": `
// Example 1: if-else statements
let temp = 25;
if (temp > 30) {
    console.log("Hot");
} else if (temp > 20) {
    console.log("Warm");
} else {
    console.log("Cold");
}

// Example 2: switch statement
let color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Caution");
}

// Example 3: Ternary operator
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // "Yes"

// Example 4: Nullish coalescing
let name = null;
console.log(name ?? "Anonymous"); // "Anonymous"`,

    "Loops: for, while, do...while": `
// Example 1: for loop
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// Example 2: while loop
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}

    //Counting down from 5
let count = 5;
while (count > 0) {
console.log(count);
count--;
}

// Example 3: do...while loop
let k = 0;
do {
    console.log(k);
    k++;
} while (k < 3);

// Example 4: for...of loop
const arr = [1, 2, 3];
for (const num of arr) {
    console.log(num);
}

// Example 5: for...in loop
const obj = { a: 1, b: 2 };
for (const key in obj) {
    console.log(key, obj[key]);
}`,

    "Functions and Scope":`
// Example 1: Function declaration
function greet(name) {
    return \`Hello, \${name}!\`
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Example 2: Function expression
const add = function(a, b) {
    return a + b;
};

// Example 3: Arrow function
const multiply = (a, b) => a * b;

// Example 4: Function with default parameters
function multiply(x, y) { // x and y are parameters
return x * y;
}
const result = multiply(4, 3); // 4 and 6 are arguments
console.log(result); //Output 12

//Example 5: Function with rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example 6: Scope example
let globalVar = "I'm global";
function scopeTest() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar); // Accessible
}
console.log(globalVar); // Accessible
console.log(localVar); // Not accessible`,

    "Arrow Functions and ES6 Syntax": `
// Example 1: Basic arrow function
const add = (a, b) => a + b;
console.log(add(5, 7)); // 12

// Example 2: Arrow function with block body
const greet = name => {
    const message = "Hello, " + name + "!";
    return message;
};
console.log(greet("Alice")); // "Hello, Alice!"

// Example 3: Arrow function in array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Example 4: Arrow function with object
const person = {
    name: "Bob",
    greet: function() {
        setTimeout(() => {
            console.log("Hi, I'm " + this.name);
        }, 1000);
    }
};
person.greet(); // "Hi, I'm Bob"`,

    "Objects and Object Literals": `
// Example 1: Object literal
const person = {
firstName: "John",
lastName: "Doe",
age: 30,
isStudent: false,
hobbies: ["reading", "hiking", "coding"]
};
console.log(person);

// Example 2: Object methods
console.log(Object.keys(person)); // ['firstName', 'lastName', 'age', 'isStudent', 'hobbies']
console.log(Object.values(person)); // ['John', 'Doe', 30, false, Array(3)]

// Example 3: Object destructuring
const { firstName, age } = person;
console.log(firstName, age); // "John" 30

//Example 4: Object spread
const updatedPerson = { ...person, age: 25 };
console.log(updatedPerson); // {firstName: 'John', lastName: 'Doe', age: 29, isStudent: false, hobbies: Array(3)}

//Example 5: Computed property names
const prop = "color";
const obj = {
    [prop]: "red",
    [prop + "Code"]: "#FF0000"
};
console.log(obj); // { color: "red", colorCode: "#FF0000" }`,

    "Arrays and Array Methods": `
// Example 1:  Array creation and manipulation
let fruits = ["apple", "banana", "cherry"];
fruits.push("date");
console.log(fruits); // ["apple", "banana", "cherry", "date"]

// Example 2: Array methods
const numbers = [1, 2, 3, 4, 5];

  //map - transforms each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
   
     //push() - adds one or more elements to the end of an array
numbers.push(6, 7);
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

    //pop() - removes the last element from an array
const lastElement = numbers.pop(); console.log(numbers); // Output: [1, 2, 3, 4]
console.log(lastElement); // Output: 5
 
  //shift() - removes the first element from an array
const firstElement =
numbers.shift(); console.log(numbers); // Output: [2, 3, 4, 5]
console.log(firstElement);

  //filter - returns elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

  //reduce - combines all elements into a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// forEach - executes a function for each element
numbers.forEach((num, index) => {
    console.log(\`Number \${index}: \${num}\`);
});

  //find - returns the first element that passes a test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

  //some - checks if at least one element passes a test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

  //every - checks if all elements pass a test
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

// Example 3: Array destructuring
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // 1 2 [3, 4, 5]

// Example 4: Array spread
const newNumbers = [...numbers, 6, 7];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6, 7]

// Example 5: Method chaining
const result = numbers
    .filter(num => num > 2)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);
console.log(result); // 24 (3*2 + 4*2 + 5*2)`,

     "Spread Operator":`
// Example 1: Introduction to the spread operator
// A simple array
const numbers = [1, 2, 3, 4];

// Using the spread operator to expand the array
console.log(...numbers);

// Example 2: Spread with Array
  // 1. Copying an array
const originalArray = [10, 20, 30];
const copiedArray = [...originalArray];
console.log('Copied Array:', copiedArray);

 // 2. Merging or concatenating arrays
const firstPart = ['a', 'b'];
const secondPart = ['c', 'd'];
const combinedArray = [...firstPart, ...secondPart];
console.log('Combined Array:', combinedArray);

 // 3. Inserting elements into an array
const fruits = ['apple', 'grape'];
const moreFruits = ['banana', ...fruits, 'orange'];
console.log('More Fruits:', moreFruits);

// Example 3: Spread with Object
  // 1. Copying an object
const user = { 
name: 'John',
 age: 30
  };
const userCopy = { ...user };
console.log('User Copy:', userCopy);

// 2. Merging objects
const details = { 
city: 'New York', 
job: 'Developer',
position: 'Senior' 
};
const combinedUser = { ...user, ...details };
console.log('Combined User:', combinedUser);

// 3. Merging objects with property overrides
const overrides = {
 age: 35, 
 job: 'Manager' 
 };
const updatedUser = { ...combinedUser, ...overrides };
console.log('Updated User:', updatedUser);

// Example 4: Spread with strings and iterable
  // 1. Spreading a string into an array of characters
const greeting = 'hello';
const chars = [...greeting];
console.log('Characters Array:', chars);

  // 2. Passing string characters as arguments to a function
function printLetters(a, b, c, d, e) {
  console.log(a, b, c, d, e);
}
printLetters(...greeting);

// Example 5: Practical Use Cases
  // 1. Finding the maximum value in an array
const temperatures = [32, 18, 25, 40, 15];
const maxTemp = Math.max(...temperatures);
console.log('Maximum Temperature:', maxTemp);

 // 2. Adding a new item to an array without mutation (important for frameworks like React)
const todoList = ['Learn HTML', 'Learn CSS'];
const newTodo = 'Learn JavaScript';
const updatedTodoList = [...todoList, newTodo];
console.log('Updated To-Do List:', updatedTodoList);

  // 3. Creating a new object with updated properties
const product = {
 id: 1, name: 
 'Laptop', 
 price: 1200 
 };
const discountedProduct = { ...product, price: 1000 };
console.log('Discounted Product:', discountedProduct);

// Example 6: Limitations of spread operator
const original = {
  name: 'Team A',
  members: [
    { id: 1, name: 'Alice' }
  ]
};

const teamCopy = { ...original };
teamCopy.members[0].name = 'Bob';

console.log('Original Members:', original.members[0].name); // 'Bob'
console.log('Copied Members:', teamCopy.members[0].name); // 'Bob'

// Example 7: Spread vs Rest Operator
  // Spread Operator (Used to expand)
const numbers = [1, 2, 3];
function sum(a, b, c) {
  return a + b + c;
}
console.log('Spread Example (arguments):', sum(...numbers));

  // Rest Operator (Used to collect)
function collectArgs(first, ...rest) {
  console.log('First argument:', first);
  console.log('Rest of the arguments (as an array):', rest);
}
collectArgs(10, 20, 30, 40);`,


    "Strings and String Methods": `
// Example 1: String creation and manipulation
const str = "Hello, JavaScript!";
console.log(str.length); // 18

// Example 2: String methods
console.log(str.toUpperCase()); // "HELLO, JAVASCRIPT!"
console.log(str.toLowerCase()); // "hello, javascript!"
console.log(str.indexOf("JavaScript")); // 7
console.log(str.includes("Hello")); // true
console.log(str.startsWith("Hello")); // true
console.log(str.endsWith("!")); // true

// Example 3: String slicing and substring
console.log(str.slice(0, 5)); // "Hello"
console.log(str.substring(7, 17)); // "JavaScript"
console.log(str.replace("JavaScript", "World")); // "Hello, World!"

// Example 4: Template literals
const name = "Alice";
const age = 25;
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;
console.log(greeting); // "Hello, my name is Alice and I am 25 years old."

   //Multi-line strings
const multiLine = \`
    This is a
    multi-line string
    using template literals
\`;
console.log(multiLine);

// Example 5: String splitting and joining
const words = str.split(" ");
console.log(words); // ["Hello,", "JavaScript!"]

const sentence = words.join(" ");
console.log(sentence); // "Hello, JavaScript!"

// Example 6: String trimming
const padded = "   Hello World   ";
console.log(padded.trim()); // "Hello World"
console.log(padded.trimStart()); // "Hello World   "
console.log(padded.trimEnd()); // "   Hello World"`,

    "Numbers and Math": `
// Example 1: Number types and representation
const integer = 42;
const float = 3.14159;
const scientific = 1.23e6; // 1230000
const binary = 0b1010; // 10
const octal = 0o755; // 493
const hex = 0xFF; // 255

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Example 2: Math object methods
console.log(Math.PI); // 3.141592653589793
console.log(Math.round(3.6)); // 4
console.log(Math.floor(3.6)); // 3
console.log(Math.ceil(3.2)); // 4
console.log(Math.abs(-5)); // 5
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.random()); // Random number between 0 and 1

// Example 3: Number methods
const num = 123.456;
console.log(num.toFixed(2)); // "123.46"
console.log(num.toPrecision(4)); // "123.5"
console.log(num.toString()); // "123.456"
console.log(parseInt("123.456")); // 123
console.log(parseFloat("123.456")); // 123.456

// Example 4: Random number generation
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 10)); // Random integer between 1 and 10

// Example 5: Currency formatting
const price = 1234.56;
console.log(price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})); // "$1,234.56"`,

    "Date and Time Handling": `
// Example 1: Date object creation
const now = new Date(); 

console.log(now); 

const specificDate = new Date(2023, 11, 25); // December 25, 2023
console.log(specificDate);

const dateFromString = new Date("2023-12-25T10:30:00");
console.log(dateFromString);

// Example 2: Date methods
console.log(now.getFullYear()); 
console.log(now.getMonth()); // 0-11 (0 = January)
console.log(now.getDate()); // Day of month (1-31)
console.log(now.getDay()); // Day of week (0-6, 0 = Sunday)
console.log(now.getHours()); // Hour (0-23)
console.log(now.getMinutes()); // Minutes (0-59)
console.log(now.getSeconds()); // Seconds (0-59)
console.log(now.getMilliseconds()); // Milliseconds (0-999)

// Example 3: Date formatting
const date = new Date(2023, 11, 25, 10, 30, 0);
console.log(date.toDateString()); // "Mon Dec 25 2023"
console.log(date.toTimeString()); // "10:30:00 GMT+0000"
console.log(date.toISOString()); // "2023-12-25T10:30:00.000Z"
console.log(date.toLocaleDateString()); // Localized date string
console.log(date.toLocaleTimeString()); // Localized time string

// Example 4: Date arithmetic
const tomorrow = new Date(now);
tomorrow.setDate(now.getDate() + 1);
console.log(tomorrow);

const diffInMs = tomorrow - now;
const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
console.log(diffInDays); // 1

// Example 5: Timers
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

const interval = setInterval(() => {
    console.log("This runs every second");
}, 1000);

// Example 6: Clear interval after 5 seconds
setTimeout(() => {
    clearInterval(interval);
    console.log("Interval cleared");
}, 5000);`,

    "Error Handling and Debugging": `
// Example 1: Try-catch-finally blocks
function divideNumbers(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    } catch (error) {
        console.error("Error occurred:", error.message);
        return null;
    } finally {
        console.log("Division operation completed");
    }
}

console.log(divideNumbers(10, 2)); // 5
console.log(divideNumbers(10, 0)); // null

// Example 2: Custom error types
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required", "name");
    }
    if (!user.email) {
        throw new ValidationError("Email is required", "email");
    }
    return true;
}

try {
    validateUser({ name: "John" }); // Missing email
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(\`Validation error in \${error.field}: \${error.message}\`);
    } else {
        console.error("Unknown error:", error.message);
    }
}

// Example 3: Console debugging methods
console.log("Regular log message");
console.warn("Warning message");
console.error("Error message");
console.info("Information message");

// Example 4: Console table for objects
const users = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "London" },
    { name: "Charlie", age: 35, city: "Paris" }
];
console.table(users);

// Example 5: Console group for organized output
console.group("User Information");
console.log("Name: Alice");
console.log("Age: 25");
console.groupEnd();

// Example 6: Performance measurement
console.time("Array operation");
const largeArray = Array.from({ length: 1000000 }, (_, i) => i);
const doubled = largeArray.map(x => x * 2);
console.timeEnd("Array operation");`,

    "DOM Manipulation Basics": `
// Example 1: Selecting elements
const elementById = document.getElementById('myId');
const elementsByClass = document.getElementsByClassName('myClass');
const elementsByTag = document.getElementsByTagName('div');
const querySelector = document.querySelector('.myClass');
const querySelectorAll = document.querySelectorAll('.myClass');

// Example 2: Creating elements
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';
newDiv.className = 'new-element';
newDiv.id = 'newDiv';

 //Adding elements to DOM
document.body.appendChild(newDiv);

// Example 3: Modifying elements
const element = document.getElementById('myElement');
element.textContent = 'Updated text';
element.innerHTML = '<strong>Bold text</strong>';
element.setAttribute('data-custom', 'value');
element.style.backgroundColor = 'red';
element.classList.add('highlight');
element.classList.remove('old-class');
element.classList.toggle('active');

//Example 4: Removing elements
const parent = document.getElementById('parent');
const child = document.getElementById('child');
parent.removeChild(child);

//Alternative modern way
child.remove();

// Example 5: DOM traversal
const parent = document.getElementById('parent');
const children = parent.children;
const firstChild = parent.firstElementChild;
const lastChild = parent.lastElementChild;
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;

// Example 6: Performance optimization
// Use documentFragment for multiple DOM operations
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    const div = document.createElement('div');
    div.textContent = \`Item \${i}\`;
    fragment.appendChild(div);
}
document.body.appendChild(fragment);`,

    "DOM Events and Listeners": `
// Example 1: Basic event listener
const button = document.getElementById('myButton');
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log('Event:', event);
    console.log('Target:', event.target);
});

// Example 2: Event object properties
function handleClick(event) {
    event.preventDefault(); // Prevent default behavior
    event.stopPropagation(); // Stop event bubbling
    console.log('Event type:', event.type);
    console.log('Event target:', event.target);
    console.log('Event phase:', event.eventPhase);
}

// Example 3: Multiple event listeners
const element = document.getElementById('myElement');
element.addEventListener('click', handleClick);
element.addEventListener('mouseenter', function() {
    console.log('Mouse entered');
});
element.addEventListener('mouseleave', function() {
    console.log('Mouse left');
});

// Example 4: Event delegation
document.addEventListener('click', function(event) {
    if (event.target.matches('.delete-button')) {
        console.log('Delete button clicked');
        // Handle delete action
    }
    if (event.target.matches('.edit-button')) {
        console.log('Edit button clicked');
        // Handle edit action
    }
});

// Example 5: Custom events
const customEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event' }
});

element.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event received:', event.detail.message);
});

element.dispatchEvent(customEvent);

// Example 6: Event phases (capturing and bubbling)
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Example 7: Capturing phase (true = capture, false = bubble)
parent.addEventListener('click', function() {
    console.log('Parent clicked (capturing)');
}, true);

parent.addEventListener('click', function() {
    console.log('Parent clicked (bubbling)');
}, false);

child.addEventListener('click', function() {
    console.log('Child clicked');
});

//Example 8: Removing event listeners
function handleMouseMove(event) {
    console.log('Mouse moved:', event.clientX, event.clientY);
}

document.addEventListener('mousemove', handleMouseMove);

//Example 9: Remove after 5 seconds
setTimeout(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    console.log('Mouse move listener removed');
}, 5000);`,

    "Forms and User Input": `
// Example 1: Form element selection
const form = document.getElementById('myForm');
const input = document.getElementById('myInput');
const select = document.getElementById('mySelect');
const textarea = document.getElementById('myTextarea');
const checkbox = document.getElementById('myCheckbox');
const radio = document.querySelector('input[name="gender"]:checked');

// Example 2: Form validation
function validateForm(event) {
    event.preventDefault();
    
    const formData = new FormData(form);
    const errors = [];
    
  //Required field validation
    if (!formData.get('name').trim()) {
        errors.push('Name is required');
    }
    
   //Email validation
    const email = formData.get('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        errors.push('Valid email is required');
    }
    
    //Password validation
    const password = formData.get('password');
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters');
    }
    
    if (errors.length > 0) {
        displayErrors(errors);
        return false;
    }
    
// Example 3: Form is valid, submit
    submitForm(formData);
    return true;
}

function displayErrors(errors) {
    const errorDiv = document.getElementById('errors');
    errorDiv.innerHTML = errors.map(error => \`<p class="error">\${error}</p>\`).join('');
}

function submitForm(formData) {
    // Convert FormData to object
    const data = Object.fromEntries(formData);
    console.log('Form data:', data);
    
    // Send to server
    fetch('/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(error => console.error('Error:', error));
}

// Example 4: Input event handling
input.addEventListener('input', function(event) {
    console.log('Input value:', event.target.value);
});

input.addEventListener('focus', function() {
    console.log('Input focused');
});

input.addEventListener('blur', function() {
    console.log('Input lost focus');
});

// Example 5: File upload handling
const fileInput = document.getElementById('fileInput');
fileInput.addEventListener('change', function(event) {
    const files = event.target.files;
    console.log('Selected files:', files);
    
    for (let file of files) {
        console.log('File name:', file.name);
        console.log('File size:', file.size);
        console.log('File type:', file.type);
    }
});

//Example 6: Form submission
form.addEventListener('submit', validateForm);

//Example 7: Real-time validation
input.addEventListener('blur', function() {
    const value = this.value.trim();
    if (value.length < 3) {
        this.classList.add('error');
        this.setCustomValidity('Must be at least 3 characters');
    } else {
        this.classList.remove('error');
        this.setCustomValidity('');
    }
});`,

    "Timers and Asynchronous Operations": `
// Example 1: setTimeout - executes once after delay
setTimeout(() => {
    console.log('This runs after 2 seconds');
}, 2000);

   //setInterval - executes repeatedly
const interval = setInterval(() => {
    console.log('This runs every second');
}, 1000);

    //Clear interval after 5 seconds
setTimeout(() => {
    clearInterval(interval);
    console.log('Interval stopped');
}, 5000);

// Example 2: requestAnimationFrame - for smooth animations
function animate() {
    const element = document.getElementById('animated');
    let position = 0;
    
    function step() {
        position += 1;
        element.style.left = position + 'px';
        
        if (position < 200) {
            requestAnimationFrame(step);
        }
    }
    
    requestAnimationFrame(step);
}

// Example 3: Promise-based timing
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayedOperation() {
    console.log('Starting...');
    await delay(2000);
    console.log('After 2 seconds');
}

delayedOperation();

//Example 4: Event loop demonstration
console.log('1. Start');

setTimeout(() => {
    console.log('2. Timeout callback');
}, 0);

Promise.resolve().then(() => {
    console.log('3. Promise microtask');
});

console.log('4. End');

    //Output order: 1, 4, 3, 2

// Example 5: Async operations with error handling
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        throw error;
    }
}

// Example 6: Debouncing function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

const debouncedSearch = debounce((searchTerm) => {
    console.log('Searching for:', searchTerm);
    // Perform search operation
}, 300);

// Example 7: Throttling function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

const throttledScroll = throttle(() => {
    console.log('Scroll event throttled');
}, 100);`,

    "JSON and Data Handling": `
// Example 1: JSON parsing and stringifying
const jsonString = '{"name": "Alice", "age": 25, "city": "New York"}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData); // { name: "Alice", age: 25, city: "New York" }

const dataObject = {
    name: "Bob",
    age: 30,
    hobbies: ["reading", "swimming"],
    address: {
        street: "123 Main St",
        city: "London"
    }
};

const jsonOutput = JSON.stringify(dataObject, null, 2);
console.log(jsonOutput);
/*
{
  "name": "Bob",
  "age": 30,
  "hobbies": ["reading", "swimming"],
  "address": {
    "street": "123 Main St",
    "city": "London"
  }
}
*/

// Example 2: JSON with custom replacer function
const customJson = JSON.stringify(dataObject, (key, value) => {
    if (key === 'age') {
        return value + ' years old';
    }
    return value;
});
console.log(customJson);

// Example 3: Working with APIs
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const userData = await response.json();
        return userData;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
}

// Example 4: Data validation
function validateUserData(data) {
    const required = ['name', 'email', 'age'];
    const errors = [];
    
    for (const field of required) {
        if (!data[field]) {
            errors.push(\`Missing required field: \${field}\`);
        }
    }
    
    if (data.age && (data.age < 0 || data.age > 120)) {
        errors.push('Age must be between 0 and 120');
    }
    
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.push('Invalid email format');
    }
    
    return {
        isValid: errors.length === 0,
        errors: errors
    };
}

//Example 5: Deep cloning with JSON
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);
cloned.b.c = 3;
console.log(original.b.c); // 2 (unchanged)
console.log(cloned.b.c); // 3

// Example 6: Local storage with JSON
function saveToStorage(key, data) {
    try {
        localStorage.setItem(key, JSON.stringify(data));
        return true;
    } catch (error) {
        console.error('Error saving to storage:', error);
        return false;
    }
}

function loadFromStorage(key) {
    try {
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    } catch (error) {
        console.error('Error loading from storage:', error);
        return null;
    }
}

//Example 7: Usage
const userSettings = {
    theme: 'dark',
    language: 'en',
    notifications: true
};

saveToStorage('userSettings', userSettings);
const loadedSettings = loadFromStorage('userSettings');
console.log(loadedSettings);`,

    "Local Storage and Session Storage": `
// Example 1: Web Storage API
  //Local Storage - persists until explicitly cleared
localStorage.setItem('username', 'alice');
localStorage.setItem('theme', 'dark');
localStorage.setItem('preferences', JSON.stringify({
    language: 'en',
    notifications: true
}));

// Example 2: Session Storage - persists only for the session
sessionStorage.setItem('sessionId', 'abc123');
sessionStorage.setItem('tempData', 'some temporary data');

// Example 3: Reading data
const username = localStorage.getItem('username');
const theme = localStorage.getItem('theme');
const preferences = JSON.parse(localStorage.getItem('preferences') || '{}');

console.log(username); // "alice"
console.log(theme); // "dark"
console.log(preferences); // { language: "en", notifications: true }

  //Checking if key exists
if (localStorage.getItem('username')) {
    console.log('Username exists');
}

   //Removing items
localStorage.removeItem('username');
sessionStorage.removeItem('tempData');

   // Clearing all storage
  // localStorage.clear(); // Be careful with this!
  // sessionStorage.clear();

//Example 4: Storage event listener (for cross-tab communication)
window.addEventListener('storage', function(event) {
    console.log('Storage changed:', event);
    console.log('Key:', event.key);
    console.log('Old value:', event.oldValue);
    console.log('New value:', event.newValue);
    console.log('URL:', event.url);
});

//Example 5: Storage utility functions
class StorageManager {
    constructor(prefix = 'app_') {
        this.prefix = prefix;
    }
    
    set(key, value) {
        const fullKey = this.prefix + key;
        try {
            const serialized = typeof value === 'object' ? 
                JSON.stringify(value) : String(value);
            localStorage.setItem(fullKey, serialized);
            return true;
        } catch (error) {
            console.error('Error saving to storage:', error);
            return false;
        }
    }
    
    get(key, defaultValue = null) {
        const fullKey = this.prefix + key;
        try {
            const value = localStorage.getItem(fullKey);
            if (value === null) return defaultValue;
            
            // Try to parse as JSON, fallback to string
            try {
                return JSON.parse(value);
            } catch {
                return value;
            }
        } catch (error) {
            console.error('Error reading from storage:', error);
            return defaultValue;
        }
    }
    
    remove(key) {
        const fullKey = this.prefix + key;
        localStorage.removeItem(fullKey);
    }
    
    clear() {
        const keys = Object.keys(localStorage);
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        });
    }
    
    getAll() {
        const result = {};
        const keys = Object.keys(localStorage);
        
        keys.forEach(key => {
            if (key.startsWith(this.prefix)) {
                const shortKey = key.slice(this.prefix.length);
                result[shortKey] = this.get(shortKey);
            }
        });
        
        return result;
    }
}

  //Usage
const storage = new StorageManager('myapp_');
storage.set('user', { name: 'Alice', id: 123 });
storage.set('settings', { theme: 'dark', language: 'en' });

const user = storage.get('user');
const settings = storage.get('settings');
console.log(user, settings);

// Example 6: Storage limits and quota management
function checkStorageQuota() {
    let total = 0;
    const keys = Object.keys(localStorage);
    
    keys.forEach(key => {
        total += localStorage.getItem(key).length;
    });
    
    console.log('Storage used:', total, 'characters');
    console.log('Storage limit: ~5-10MB (varies by browser)');
    
    return total;
}

// Example 7: Secure storage (basic encryption)
function encryptData(data, key) {
    // This is a simple example - use proper encryption in production
    return btoa(JSON.stringify(data));
}

function decryptData(encryptedData, key) {
    try {
        return JSON.parse(atob(encryptedData));
    } catch {
        return null;
    }
}

   //Usage
const sensitiveData = { password: 'secret123' };
const encrypted = encryptData(sensitiveData, 'mykey');
localStorage.setItem('encryptedData', encrypted);

const decrypted = decryptData(localStorage.getItem('encryptedData'), 'mykey');
console.log(decrypted);`,

 "ES6+ Features Overview": `
// Example 1: Let and const
let variable = "I can be reassigned";
const constant = "I cannot be reassigned";

// Example 2: Template literals
const name = "Alice";
const greeting = \`Hello, \${name}! How are you today?\`;

// Example 3: Destructuring
const person = { name: "Bob", age: 30, city: "London" };
const { name: personName, age } = person;
const [first, second, ...rest] = [1, 2, 3, 4, 5];

// Example 4: Spread and rest operators
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

// Example 5: Arrow functions
const add = (a, b) => a + b;
const multiply = (a, b) => {
    const result = a * b;
    return result;
};

// Example 6: Classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return \`Hello, I'm \${this.name}\`;
    }
}

// Example 7: Modules
  //export default function() { }
  //export { function1, function2 };
   //import defaultFunction from './module';
  //import { function1, function2 } from './module';

// Example 8: New built-in methods
const array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // true
console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']
console.log(Array.of(1, 2, 3)); // [1, 2, 3]`,

    "Template Literals and String Interpolation": `
// Example 1: Basic template literals
const name = "Alice";
const age = 25;
const greeting = \`Hello, my name is \${name} and I am \${age} years old.\`;

// Example 2: Multi-line strings
const multiLine = \`
    This is a
    multi-line string
    that preserves formatting
\`;

// Example 3: Expression interpolation
const price = 19.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`;

// Example 4: Tagged templates
function highlight(strings, ...values) {
    let result = '';
    strings.forEach((string, i) => {
        result += string;
        if (values[i]) {
            result += \`<span class="highlight">\${values[i]}</span>\`;
        }
    });
    return result;
}

const highlighted = highlight\`Hello \${name}, you are \${age} years old.\`;

// Example 5: Raw strings
function raw(strings, ...values) {
    return strings.raw.reduce((result, str, i) => {
        return result + str + (values[i] || '');
    }, '');
}

const rawString = raw\`This is a raw string with \${name}.\`;

// Example 6: Performance considerations
const largeTemplate = \`This is a very long string with \${name} and \${age} and many more interpolations.\`;

// Use cases
const htmlTemplate = \`
    <div class="user-card">
        <h2>\${name}</h2>
        <p>Age: \${age}</p>
        <p>Email: \${email}</p>
    </div>
\`;

// Example 7: Best practices
const user = { name: "Bob", age: 30 };
const userInfo = \`Name: \${user.name || 'Unknown'}, Age: \${user.age || 'Unknown'}\`;`,

    "Destructuring Assignment": `
// Example 1: Array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, third] = numbers;
console.log(first, second, third); // 1 2 3

// Example 2: Skipping elements
const [a, , c, , e] = numbers;
console.log(a, c, e); // 1 3 5

  //Rest operator
const [head, ...tail] = numbers;
console.log(head, tail); // 1 [2, 3, 4, 5]

// Example 3: Default values
const [x = 0, y = 0, z = 0] = [1, 2];
console.log(x, y, z); // 1 2 0

// Example 4: Object destructuring
const person = { name: "Alice", age: 25, city: "New York" };
const { name, age, city } = person;
console.log(name, age, city); // "Alice" 25 "New York"

  //Renaming variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // "Alice" 25

   //Nested destructuring
const user = {
    name: "Bob",
    address: {
        street: "123 Main St",
        city: "London"
    }
};
const { name: userName, address: { street, city } } = user;
console.log(userName, street, city); // "Bob" "123 Main St" "London"

// Example 5: Function parameters
function processUser({ name, age, email = "unknown@example.com" }) {
    console.log(\`Processing \${name} (age: \${age}, email: \${email})\`);
}

processUser({ name: "Charlie", age: 30 });

   //Return values
function getUser() {
    return { name: "David", age: 35, city: "Paris" };
}

const { name: returnedName, age: returnedAge } = getUser();
console.log(returnedName, returnedAge); // "David" 35

  //Use cases
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};

const { apiUrl, timeout, retries } = config;

// Example 6:  Performance considerations
   // Destructuring is generally fast, but avoid in tight loops
for (let i = 0; i < 1000000; i++) {
    // Avoid: const { a, b, c } = someObject;
    // Use: const a = someObject.a; const b = someObject.b; const c = someObject.c;
}

  // Best practices
  // Use meaningful variable names
const { firstName, lastName } = user; // Good
const { f, l } = user; // Bad

  // Provide default values for optional properties
const { theme = "light", language = "en" } = settings;`,

    "Spread and Rest Operators": `
// Example 1: Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

   //Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // { a: 1, b: 2, c: 3, d: 4 }

// Example 2: Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Example 3: Rest in destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3,4, 5]

const { name, ...otherProps } = { name: "Bob", age: 30, city: "NYC" };
console.log(name, otherProps); // "Bob" { age: 30, city: "NYC" }

// Example 4: Spread in function calls
const numbers = [1, 2, 3];
const max = Math.max(...numbers);
console.log(max); // 3

   //Creating arrays with spread
const chars = [..."Hello"];
console.log(chars); // ["H", "e", "l", "l", "o"]

// Example 5: Spread with objects (shallow copy)
const originalObj = { a: 1, b: { c: 2 } };
const copyObj = { ...originalObj };
copyObj.b.c = 3;
console.log(originalObj.b.c); // 3 (shallow copy)

  //Deep copy with JSON (for simple objects)
const deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.b.c = 4;
console.log(originalObj.b.c); // 3 (unchanged)`,



    "Modules and Imports": `
// Example 1: Named exports (math.js)
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => a / b;

  //Default export (config.js)
const API_KEY = "abc123";
const BASE_URL = "https://api.example.com";

export default {
    API_KEY,
    BASE_URL,
    timeout: 5000
};

   //Named imports
import { add, subtract, multiply } from './math.js';
import { add as sum, subtract as minus } from './math.js';

console.log(add(5, 3)); // 8
console.log(sum(5, 3)); // 8

// Example 2: Default import
import config from './config.js';
console.log(config.API_KEY); // "abc123"

  //Mixed imports
import config, { add, subtract } from './math.js';

  // Import all as namespace
import * as MathUtils from './math.js';
console.log(MathUtils.add(5, 3)); // 8

// Example 3: Dynamic imports
async function loadModule() {
    try {
        const module = await import('./math.js');
        console.log(module.add(5, 3)); // 8
    } catch (error) {
        console.error('Failed to load module:', error);
    }
}

 //Conditional imports
if (condition) {
    const { add } = await import('./math.js');
    console.log(add(5, 3));
}

// Example 4: Re-exporting
export { add, subtract } from './math.js';
export { default as Config } from './config.js';

// Example 5: Module pattern (before ES6)
const Calculator = (function() {
    // Private variables
    let result = 0;
    
    // Private methods
    function validateNumber(num) {
        return typeof num === 'number' && !isNaN(num);
    }
    
//  Example 5: Public methods
    return {
        add: function(num) {
            if (validateNumber(num)) {
                result += num;
            }
            return this;
        },
        subtract: function(num) {
            if (validateNumber(num)) {
                result -= num;
            }
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

console.log(Calculator.add(5).subtract(2).getResult()); // 3`,

    "Closures and Lexical Scope": `
// Example 1: Basic closure
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// Closure with parameters
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Example 2: Private variables with closure
function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        getBalance: function() {
            return balance;
        },
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return true;
            }
            return false;
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return true;
            }
            return false;
        }
    };
}

const account = createBankAccount(100);
console.log(account.getBalance()); // 100
account.deposit(50);
console.log(account.getBalance()); // 150
account.withdraw(30);
console.log(account.getBalance()); // 120

// Example 3: Module pattern with closure
const Calculator = (function() {
    // Private variables
    let history = [];
    
    // Private methods
    function addToHistory(operation, result) {
        history.push({ operation, result, timestamp: Date.now() });
    }
    
    // Public methods
    return {
        add: function(a, b) {
            const result = a + b;
            addToHistory(\`\${a} + \${b}\`, result);
            return result;
        },
        subtract: function(a, b) {
            const result = a - b;
            addToHistory(\`\${a} - \${b}\`, result);
            return result;
        },
        getHistory: function() {
            return [...history]; // Return copy to prevent external modification
        },
        clearHistory: function() {
            history = [];
        }
    };
})();

console.log(Calculator.add(5, 3)); // 8
console.log(Calculator.subtract(10, 4)); // 6
console.log(Calculator.getHistory()); // Array of operations

// Example 4: Closure in loops (common pitfall)
function createFunctions() {
    const functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push(function() {
            return i;
        });
    }
    
    return functions;
}

const funcs = createFunctions();
console.log(funcs[0]()); // 3 (not 0!)
console.log(funcs[1]()); // 3 (not 1!)
console.log(funcs[2]()); // 3 (not 2!)

// Example 5: Fix with let
function createFunctionsFixed() {
    const functions = [];
    
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            return i;
        });
    }
    
    return functions;
}

const funcsFixed = createFunctionsFixed();
console.log(funcsFixed[0]()); // 0
console.log(funcsFixed[1]()); // 1
console.log(funcsFixed[2]()); // 2

// Example 6: Fix with IIFE
function createFunctionsIIFE() {
    const functions = [];
    
    for (var i = 0; i < 3; i++) {
        functions.push((function(index) {
            return function() {
                return index;
            };
        })(i));
    }
    
    return functions;
}

const funcsIIFE = createFunctionsIIFE();
console.log(funcsIIFE[0]()); // 0
console.log(funcsIIFE[1]()); // 1
console.log(funcsIIFE[2]()); // 2`,

    "Callbacks and Higher-Order Functions": `
// Example 1: Basic callback
function greet(name, callback) {
    const message = \`Hello, \${name}!\`;
    callback(message);
}

greet("Alice", function(message) {
    console.log(message); // "Hello, Alice!"
});

// Example 2: Higher-order function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Example 3: Array methods with callbacks
const numbers = [1, 2, 3, 4, 5];

  //forEach
numbers.forEach(function(num, index) {
    console.log(\`Number \${index}: \${num}\`);
});

  // map
const doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

 // filter
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // [2, 4]

   // reduce
const sum = numbers.reduce(function(total, num) {
    return total + num;
}, 0);
console.log(sum); // 15

// Example 4: Function composition
function compose(...functions) {
    return function(value) {
        return functions.reduceRight(function(result, func) {
            return func(result);
        }, value);
    };
}

const addOne = x => x + 1;
const multiplyByTwo = x => x * 2;
const square = x => x * x;

const composed = compose(square, multiplyByTwo, addOne);
console.log(composed(3)); // 64 ((3+1)*2)^2

// Example 5: Error handling with callbacks
function fetchData(url, successCallback, errorCallback) {
    // Simulate async operation
    setTimeout(function() {
        const random = Math.random();
        if (random > 0.5) {
            successCallback({ data: "Success!" });
        } else {
            errorCallback(new Error("Failed to fetch data"));
        }
    }, 1000);
}

fetchData(
    "https://api.example.com/data",
    function(data) {
        console.log("Success:", data);
    },
    function(error) {
        console.error("Error:", error.message);
    }
);

// Example 6: Callback hell example
fetchData("https://api.example.com/user", function(user) {
    fetchData(\`https://api.example.com/posts/\${user.id}\`, function(posts) {
        fetchData(\`https://api.example.com/comments/\${posts[0].id}\`, function(comments) {
            console.log("Comments:", comments);
        }, function(error) {
            console.error("Error fetching comments:", error);
        });
    }, function(error) {
        console.error("Error fetching posts:", error);
    });
}, function(error) {
    console.error("Error fetching user:", error);
});

// Example 6: Promise-based solution (better)
function fetchDataPromise(url) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const random = Math.random();
            if (random > 0.5) {
                resolve({ data: "Success!" });
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
}

fetchDataPromise("https://api.example.com/user")
    .then(function(user) {
        return fetchDataPromise(\`https://api.example.com/posts/\${user.id}\`);
    })
    .then(function(posts) {
        return fetchDataPromise(\`https://api.example.com/comments/\${posts[0].id}\`);
    })
    .then(function(comments) {
        console.log("Comments:", comments);
    })
    .catch(function(error) {
        console.error("Error:", error.message);
    });`,

    "Promises and Async Programming": `
// Example 1: Creating a Promise
const myPromise = new Promise(function(resolve, reject) {
    // Simulate async operation
    setTimeout(function() {
        const random = Math.random();
        if (random > 0.5) {
            resolve("Success!");
        } else {
            reject(new Error("Failed!"));
        }
    }, 1000);
});

  //Using the Promise
myPromise
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.error("Error:", error.message);
    });

  //Promise with async operation
function fetchUserData(userId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const user = {
                id: userId,
                name: "Alice",
                email: "alice@example.com"
            };
            resolve(user);
        }, 1000);
    });
}

fetchUserData(123)
    .then(function(user) {
        console.log("User:", user);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

// Example 2: Promise chaining
function fetchUserPosts(userId) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const posts = [
                { id: 1, title: "First Post" },
                { id: 2, title: "Second Post" }
            ];
            resolve(posts);
        }, 500);
    });
}

fetchUserData(123)
    .then(function(user) {
        console.log("User:", user);
        return fetchUserPosts(user.id);
    })
    .then(function(posts) {
        console.log("Posts:", posts);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

// Example 3: Promise.all - wait for all promises
const promise1 = fetchUserData(1);
const promise2 = fetchUserData(2);
const promise3 = fetchUserData(3);

Promise.all([promise1, promise2, promise3])
    .then(function(users) {
        console.log("All users:", users);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

// Example 4: Promise.race - wait for first promise to complete
Promise.race([promise1, promise2, promise3])
    .then(function(firstUser) {
        console.log("First user:", firstUser);
    })
    .catch(function(error) {
        console.error("Error:", error);
    });

// Example 5: Promise.allSettled - wait for all promises to settle
Promise.allSettled([promise1, promise2, promise3])
    .then(function(results) {
        results.forEach(function(result, index) {
            if (result.status === "fulfilled") {
                console.log(\`Promise \${index} succeeded:\`, result.value);
            } else {
                console.log(\`Promise \${index} failed:\`, result.reason);
            }
        });
    });

// Example 6: Converting callback to Promise
function readFileAsync(filename) {
    return new Promise(function(resolve, reject) {
        // Simulate file reading
        setTimeout(function() {
            const content = \`Content of \${filename}\`;
            resolve(content);
        }, 1000);
    });
}

readFileAsync("example.txt")
    .then(function(content) {
        console.log("File content:", content);
    })
    .catch(function(error) {
        console.error("Error reading file:", error);
    });

// Example 7: Error handling in promises
function riskyOperation() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            const random = Math.random();
            if (random < 0.3) {
                reject(new Error("Operation failed"));
            } else if (random < 0.6) {
                reject(new TypeError("Invalid type"));
            } else {
                resolve("Operation successful");
            }
        }, 1000);
    });
}

riskyOperation()
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        if (error instanceof TypeError) {
            console.error("Type error:", error.message);
        } else {
            console.error("General error:", error.message);
        }
    })
    .finally(function() {
        console.log("Operation completed");
    });`,

    "Async/Await Syntax": `
// Example 1: Basic async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

// Example 2: Using async function
async function displayUser(userId) {
    try {
        const user = await fetchUserData(userId);
        console.log("User:", user);
    } catch (error) {
        console.error("Failed to display user:", error);
    }
}

// Example 3: Parallel execution
async function fetchMultipleUsers(userIds) {
    const promises = userIds.map(id => fetchUserData(id));
    const users = await Promise.all(promises);
    return users;
}

// Example 4: Sequential vs parallel
async function fetchSequential(userIds) {
    const users = [];
    for (const id of userIds) {
        const user = await fetchUserData(id);
        users.push(user);
    }
    return users;
}

async function fetchParallel(userIds) {
    const promises = userIds.map(id => fetchUserData(id));
    return await Promise.all(promises);
}

// Example 5: Error handling with async/await
async function handleErrors() {
    try {
        const result = await riskyOperation();
        console.log("Success:", result);
    } catch (error) {
        if (error.name === "NetworkError") {
            console.error("Network error:", error.message);
        } else if (error.name === "ValidationError") {
            console.error("Validation error:", error.message);
        } else {
            console.error("Unknown error:", error.message);
        }
    } finally {
        console.log("Operation completed");
    }
}

// Example 6: Async arrow functions
const fetchData = async (url) => {
    const response = await fetch(url);
    return response.json();
};

// Example 7: Async in loops
async function processItems(items) {
    const results = [];
    
    // Sequential processing
    for (const item of items) {
        const result = await processItem(item);
        results.push(result);
    }
    
    // Parallel processing
    const promises = items.map(item => processItem(item));
    const parallelResults = await Promise.all(promises);
    
    return { sequential: results, parallel: parallelResults };
}

// Example 8: Async with Promise.race
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        return response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        if (error.name === "AbortError") {
            throw new Error("Request timed out");
        }
        throw error;
    }
}

// Example 9: Async function returning Promise
async function delayedOperation(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Operation completed");
        }, ms);
    });
}

// Example 10: Using async/await with existing Promise-based code
async function legacyWrapper() {
    return new Promise((resolve, reject) => {
        // Legacy callback-based code
        setTimeout(() => {
            resolve("Legacy operation completed");
        }, 1000);
    });
}

async function modernFunction() {
    const result = await legacyWrapper();
    console.log("Modern function result:", result);
}

// Example 11: Async generators
async function* asyncGenerator() {
    yield await fetchUserData(1);
    yield await fetchUserData(2);
    yield await fetchUserData(3);
}

async function consumeGenerator() {
    for await (const user of asyncGenerator()) {
        console.log("User from generator:", user);
    }
}`,

    "Fetch API and AJAX": `
// Example 1: Basic GET request
async function fetchUser(userId) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
}

// Example 2: POST request with JSON
async function createUser(userData) {
    try {
        const response = await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer your-token'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const newUser = await response.json();
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
}

// Example 3: PUT request for updating
async function updateUser(userId, userData) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const updatedUser = await response.json();
        return updatedUser;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
}

// Example 4: DELETE request
async function deleteUser(userId) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
            method: 'DELETE',
            headers: {
                'Authorization': 'Bearer your-token'
            }
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        return true;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}

// Example 5: File upload
async function uploadFile(file) {
    try {
        const formData = new FormData();
        formData.append('file', file);
        
        const response = await fetch('https://api.example.com/upload', {
            method: 'POST',
            body: formData
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error("Error uploading file:", error);
        throw error;
    }
}

// Example 6: Request with query parameters
async function searchUsers(query, page = 1, limit = 10) {
    try {
        const params = new URLSearchParams({
            q: query,
            page: page.toString(),
            limit: limit.toString()
        });
        
        const response = await fetch(\`https://api.example.com/users/search?\${params}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const results = await response.json();
        return results;
    } catch (error) {
        console.error("Error searching users:", error);
        throw error;
    }
}

// Example 7: Request with custom headers
async function authenticatedRequest(url, options = {}) {
    const token = localStorage.getItem('authToken');
    
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': \`Bearer \${token}\`
        }
    };
    
    const finalOptions = { ...defaultOptions, ...options };
    
    try {
        const response = await fetch(url, finalOptions);
        
        if (response.status === 401) {
            // Token expired, redirect to login
            window.location.href = '/login';
            return;
        }
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Error in authenticated request:", error);
        throw error;
    }
}

// Example 8: Request with timeout
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        
        clearTimeout(timeoutId);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        return await response.json();
    } catch (error) {
        clearTimeout(timeoutId);
        
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        }
        
        throw error;
    }
}

// Example 9: CORS handling
async function crossOriginRequest(url) {
    try {
        const response = await fetch(url, {
            mode: 'cors',
            credentials: 'include', // Include cookies
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("CORS error:", error);
        throw error;
    }
}

// Example 10: Response handling
async function handleResponse(response) {
    const contentType = response.headers.get('content-type');
    
    if (contentType && contentType.includes('application/json')) {
        return await response.json();
    } else if (contentType && contentType.includes('text/')) {
        return await response.text();
    } else {
        return await response.blob();
    }
}

// Example 11: Error handling with retry
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(\`HTTP error! status: \${response.status}\`);
            }
            
            return await response.json();
        } catch (error) {
            if (i === maxRetries - 1) {
                throw error;
            }
            
            // Wait before retrying (exponential backoff)
            await new Promise(resolve => setTimeout(resolve, Math.pow(2, i) * 1000));
        }
    }
}`,

    "Error Handling in Async Code": `
// Example 1: Try-catch with async/await
async function fetchUserData(userId) {
    try {
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        console.error("Error fetching user data:", error);
        throw error;
    }
}

// Example 2: Promise error handling
function riskyOperation() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.3) {
                reject(new Error("Operation failed"));
            } else if (random < 0.6) {
                reject(new TypeError("Invalid type"));
            } else {
                resolve("Operation successful");
            }
        }, 1000);
    });
}

riskyOperation()
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        if (error instanceof TypeError) {
            console.error("Type error:", error.message);
        } else {
            console.error("General error:", error.message);
        }
    })
    .finally(() => {
        console.log("Operation completed");
    });

// Example 3: Error propagation
async function processUser(userId) {
    try {
        const user = await fetchUserData(userId);
        const posts = await fetchUserPosts(user.id);
        const comments = await fetchUserComments(user.id);
        
        return { user, posts, comments };
    } catch (error) {
        console.error("Error processing user:", error);
        throw error; // Re-throw to let caller handle
    }
}

// Example 4: Custom error types
class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = "NetworkError";
        this.statusCode = statusCode;
    }
}

class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

// Example 5: Error handling with custom errors
async function validateAndFetchUser(userId) {
    try {
        if (!userId || typeof userId !== 'number') {
            throw new ValidationError("Invalid user ID", "userId");
        }
        
        const response = await fetch(\`https://api.example.com/users/\${userId}\`);
        
        if (response.status === 404) {
            throw new NetworkError("User not found", 404);
        }
        
        if (!response.ok) {
            throw new NetworkError("Server error", response.status);
        }
        
        const user = await response.json();
        return user;
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(\`Validation error in \${error.field}: \${error.message}\`);
        } else if (error instanceof NetworkError) {
            console.error(\`Network error (\${error.statusCode}): \${error.message}\`);
        } else {
            console.error("Unknown error:", error.message);
        }
        throw error;
    }
}

// Example 6: Error logging
class ErrorLogger {
    static log(error, context = {}) {
        const errorInfo = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            timestamp: new Date().toISOString(),
            context: context
        };
        
        // Send to logging service
        console.error("Error logged:", errorInfo);
        
        // In production, send to external service
        // fetch('/api/logs', {
        //     method: 'POST',
        //     body: JSON.stringify(errorInfo)
        // });
    }
}

// Example 7: Error handling with logging
async function safeOperation() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (error) {
        ErrorLogger.log(error, {
            operation: 'riskyOperation',
            userId: 123
        });
        throw error;
    }
}

// Example 8: Error recovery
async function fetchWithFallback(url, fallbackUrl) {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Primary URL failed");
        return await response.json();
    } catch (error) {
        console.warn("Primary URL failed, trying fallback");
        try {
            const fallbackResponse = await fetch(fallbackUrl);
            if (!fallbackResponse.ok) throw new Error("Fallback URL failed");
            return await fallbackResponse.json();
        } catch (fallbackError) {
            throw new Error("Both URLs failed");
        }
    }
}

// Example 9: Error boundaries (React-like pattern)
class ErrorBoundary {
    constructor() {
        this.hasError = false;
        this.error = null;
    }
    
    async execute(operation) {
        try {
            this.hasError = false;
            this.error = null;
            return await operation();
        } catch (error) {
            this.hasError = true;
            this.error = error;
            this.handleError(error);
            throw error;
        }
    }
    
    handleError(error) {
        console.error("Error boundary caught:", error);
        // Handle error (show user message, log, etc.)
    }
}

// Usage
const boundary = new ErrorBoundary();
boundary.execute(async () => {
    return await riskyOperation();
}).catch(error => {
    console.log("Error handled by boundary");
});

// Example 10: Error handling in loops
async function processItems(items) {
    const results = [];
    const errors = [];
    
    for (const item of items) {
        try {
            const result = await processItem(item);
            results.push(result);
        } catch (error) {
            errors.push({ item, error });
            console.error(\`Error processing item \${item}: \${error.message}\`);
        }
    }
    
    return { results, errors };
}

// Example 11: Error handling with Promise.allSettled
async function processItemsParallel(items) {
    const promises = items.map(async (item) => {
        try {
            const result = await processItem(item);
            return { status: 'fulfilled', value: result };
        } catch (error) {
            return { status: 'rejected', reason: error };
        }
    });
    
    const results = await Promise.all(promises);
    
    const successful = results.filter(r => r.status === 'fulfilled');
    const failed = results.filter(r => r.status === 'rejected');
    
    return { successful, failed };
}`,

    "Array Iteration Methods": `
// Example 1: forEach - executes function for each element
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num, index, array) => {
    console.log(\`Number \${index}: \${num}\`);
});

// Example 2: map - transforms each element
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

// Example 3: filter - returns elements that pass a test
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{ name: "Bob", age: 30 }, { name: "Charlie", age: 35 }]

// Example 4: reduce - combines all elements into a single value
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

const totalAge = users.reduce((total, user) => total + user.age, 0);
console.log(totalAge); // 90

// Example 5: find - returns first element that passes a test
const firstEven = numbers.find(num => num % 2 === 0);
console.log(firstEven); // 2

const bob = users.find(user => user.name === "Bob");
console.log(bob); // { name: "Bob", age: 30 }

// Example 6: findIndex - returns index of first element that passes a test
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log(firstEvenIndex); // 1

const bobIndex = users.findIndex(user => user.name === "Bob");
console.log(bobIndex); // 1

// Example 7: some - checks if at least one element passes a test
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

const hasAdult = users.some(user => user.age >= 30);
console.log(hasAdult); // true

// Example 8: every - checks if all elements pass a test
const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// Example 9: Method chaining
const result = numbers
    .filter(num => num > 2)
    .map(num => num * 2)
    .reduce((sum, num) => sum + num, 0);
console.log(result); // 24 (3*2 + 4*2 + 5*2)

// Example 10: Complex example with objects
const products = [
    { name: "Laptop", price: 999, category: "Electronics" },
    { name: "Book", price: 15, category: "Books" },
    { name: "Phone", price: 699, category: "Electronics" },
    { name: "Pen", price: 2, category: "Office" }
];

// Example 11: Get total price of electronics
const electronicsTotal = products
    .filter(product => product.category === "Electronics")
    .reduce((total, product) => total + product.price, 0);
console.log(electronicsTotal); // 1698
`,

    "Functional Programming Concepts": `
// Example 1: Pure function
function add(a, b) {
    return a + b;
}

// Example 2: Immutability
const arr = [1, 2, 3];
const newArr = [...arr, 4]; // arr is not changed
console.log(arr, newArr); // [1,2,3] [1,2,3,4]

// Example 3: Function composition
const double = x => x * 2;
const increment = x => x + 1;
const doubleThenIncrement = x => increment(double(x));
console.log(doubleThenIncrement(3)); // 7

// Example 4: Higher-order function
function applyOperation(arr, operation) {
    return arr.map(operation);
}
console.log(applyOperation([1,2,3], x => x * 3)); // [3,6,9]

// Example 5: Currying
function multiply(a) {
    return function(b) {
        return a * b;
    };
}
const triple = multiply(3);
console.log(triple(5)); // 15

// Example 6: Using map/filter/reduce for functional style
const numbers = [1,2,3,4,5];
const evenSquares = numbers
    .filter(n => n % 2 === 0)
    .map(n => n * n);
console.log(evenSquares); // [4, 16]
`,

    "Event Delegation": `
// Example 1: Event delegation example

const list = document.getElementById('myList');

if (list) {
    list.addEventListener('click', function(event) {
        if (event.target.matches('li')) {
            console.log('List item clicked:', event.target.textContent);
        }
    });

// Example 2: Dynamically add items
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item';
    list.appendChild(newItem);
} else {
    console.error('Element with ID "myList" not found.');
}

   // This click will also be handled by the same event listener
`,

    "Custom Events": `
// Example 1: Creating and dispatching a custom event
const button = document.getElementById('myButton');

  //Create custom event
const myEvent = new CustomEvent('myCustomEvent', {
    detail: { message: 'Hello from custom event!' }
});

// Example 2: Listen for custom event
button.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event received:', event.detail.message);
});

// Example 3: Dispatch custom event
button.dispatchEvent(myEvent);
`,

    "Regular Expressions": `
// Example 1: Basic regex pattern
const pattern = /hello/i; // case-insensitive
console.log(pattern.test('Hello world')); // true

// Example 2: Match all digits
const str = 'My phone is 123-456-7890';
const digits = str.match(/\d+/g);
console.log(digits); // ["123", "456", "7890"]

// Example 3: Replace all whitespace
const messy = 'Hello   world!';
const clean = messy.replace(/\s+/g, ' ');
console.log(clean); // "Hello world!"

// Example 4: Extract email from text
const text = 'Contact: user@example.com';
const email = text.match(/[\w.-]+@[\w.-]+/)[0];
console.log(email); // "user@example.com"
`,

    "Prototypes and Inheritance": `
// Example 1: Constructor function
function Animal(name) {
    this.name = name;
}
Animal.prototype.speak = function() {
    console.log(this.name + ' makes a noise.');
};

const dog = new Animal('Dog');
dog.speak(); // Dog makes a noise.

// Example 2: Inheritance
function Dog(name) {
    Animal.call(this, name);
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log(this.name + ' barks.');
};

const rex = new Dog('Rex');
rex.speak(); // Rex makes a noise.
rex.bark(); // Rex barks.
`,

    "Classes and OOP in JavaScript": `
// Example 1: ES6 class syntax
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(\`${this.name} makes a noise.\`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    speak() {
        console.log(\`${this.name} barks.\`);
    }
    static info() {
        return 'Dogs are domesticated animals.';
    }
}

const dog = new Dog('Buddy');
dog.speak(); // Buddy barks.
console.log(Dog.info());

// Example 2: Private fields (ES2022+)
class Secret {
    #secret = 'hidden';
    reveal() {
        return this.#secret;
    }
}
const s = new Secret();
console.log(s.reveal()); // 'hidden'
`,

    "Project: Interactive Web App": `
// Example 1: Project outline (pseudo-code)
    // Plan features: e.g., To-Do List
   //  Design UI: HTML/CSS/JS
   //  Implement core logic

const todos = [];

function addTodo(task) {
    if (typeof task !== 'string' || !task.trim()) {
        console.error("Task must be a non-empty string");
        return;
    }
    todos.push({ task: task.trim(), done: false });
    renderTodos();
}

function toggleTodo(index) {
    if (index < 0 || index >= todos.length) {
        console.error("Invalid todo index");
        return;
    }
    todos[index].done = !todos[index].done;
    renderTodos();
}
function renderTodos() {
    const list = document.getElementById('todoList');
    if (!list) {
        console.error("Element with ID 'todoList' not found");
        return;
    }

     list.innerHTML = '';
    todos.forEach(function(todo, i) {
        const li = document.createElement('li');
        li.textContent = todo.task + (todo.done ? ' (done)' : '');
        li.onclick = function() { toggleTodo(i); };
        list.appendChild(li);
    });
}

  // add some initial todos
addTodo("Buy milk");
addTodo("Walk dog");


   // 4. Add event listeners, persist data, etc.
   // 5. Test, debug, deploy
`,

    "Best Practices and Code Style": `
// Example 1: Code organization
function calculateArea(radius) {
    if (typeof radius !== 'number' || radius <= 0) {
        throw new Error('Invalid radius');
    }
    return Math.PI * radius * radius;
}

// Example 2: Naming conventions
const userName = 'Alice'; // camelCase for variables

// Example 3: Documentation
/**
 * Adds two numbers
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

// Example 4: Testing
console.assert(add(2, 3) === 5, 'Addition failed');

// Example 5: Performance
const arr = Array.from({ length: 10000 }, (_, i) => i);
console.time('sum');
const sum = arr.reduce((a, b) => a + b, 0);
console.timeEnd('sum');

// Example 6: Security
const userInput = '<script>alert(1)</script>';
const safeInput = userInput.replace(/</g, '&lt;').replace(/>/g, '&gt;');
console.log(safeInput); // '&lt;script&gt;alert(1)&lt;/script&gt;'

// Example 7: Accessibility
const button = document.createElement('button');
button.textContent = 'Click me';
button.setAttribute('aria-label', 'Click to perform action');
document.body.appendChild(button);

// Example 8: Maintenance
  //Keep functions small, modular, and well-documented
  //Use version control and code reviews
  //Regularly refactor and update dependencies
`,


  };
  return examples[lessonTitle] || "// Example code will be provided"
}

const getJSCodeExplanation = (lessonTitle) => {
    const explanations = {
       "Introduction to JavaScript": `
### Example 1
**What is JavaScript and its role in web development**
JavaScript is a high-level, dynamic, and interpreted programming language that
is primarily used for client-side scripting on the web. It was created
 by Brendan Eich in 1995 while he was working at Netscape Communications.
JavaScript's role in web development is to add interactivity to web pages, 
making them more engaging and dynamic for users. It allows developers to
create complex web applications, animate web pages, respond to user interactions,
and update content dynamically.
Some of the key features of JavaScript include:

- **Client-side scripting**: JavaScript code is executed on the client-side 
(i.e., in the user's web browser), rather than on the server-side.
- **Dynamic typing**: JavaScript is dynamically typed, which means that the
data type of a variable is determined at runtime, rather than at compile time.
- **First-class functions**: JavaScript functions are first-class citizens,
which means that they can be passed as arguments to other functions, returned
as values from functions, and stored in data structures.
- **Prototype-based inheritance**: JavaScript uses a prototype-based inheritance 
model, which allows objects to inherit properties and behavior from other objects.

**JavaScript Engines**
A JavaScript engine is a software component that interprets and executes JavaScript
code. There are several JavaScript engines available, including:

1. **V8**: V8 is the JavaScript engine used by Google Chrome and other Chromium-based 
browsers. It is known for its high performance and is widely used in web development.
2. **SpiderMonkey**: SpiderMonkey is the JavaScript engine used by Mozilla Firefox 
and other Gecko-based browsers. It is also used in other applications,
such as Adobe Acrobat.
3. **JavaScriptCore**: JavaScriptCore is the JavaScript engine used by Apple's Safari
browser and other WebKit-based browsers. It is also used in other applications,
such as iOS and macOS.

**JavaScript engines are responsible for**:
- **Parsing**: Breaking down JavaScript code into its constituent parts, 
such as tokens and syntax trees.
- **Execution**: Executing JavaScript code, either by interpreting it directly
or by compiling it to machine code.
- **Optimization**: Optimizing JavaScript code for performance, either by 
inlining functions, eliminating unnecessary code, or using other techniques.

**History and Evolution of JavaScript**
JavaScript has a long and complex history, spanning over two decades.
Here is a brief overview:

- **1995**: Brendan Eich creates JavaScript while working at Netscape Communications. 
The first version of JavaScript is released in September 1995.
- **1996**: Netscape releases JavaScript 1.1, which adds support for arrays, 
objects, and other features.
- **1997**: The European Computer Manufacturers Association (ECMA) creates a 
technical committee to standardize JavaScript. The first edition of the ECMAScript
standard is published in June 1997.
- **1998**: Netscape releases JavaScript 1.2, which adds support for regular 
expressions, internationalization, and other features.
- **1999**: The ECMAScript standard is updated to version 3, which adds 
support for try-catch blocks, switch statements, and other features.
- **2000**: Microsoft releases JScript, a JavaScript engine for Internet Explorer.
- **2005**: The ECMAScript standard is updated to version 4, which 
adds support for classes, interfaces, and other features.
- **2009**: The ECMAScript standard is updated to version 5, which 
adds support for strict mode, JSON, and other features.
- **2011**: The ECMAScript standard is updated to version 5.1, which 
adds support for additional features and bug fixes.
- **2015**: The ECMAScript standard is updated to version 6, which 
adds support for classes, promises, and other features.
- **2016**: The ECMAScript standard is updated to version 7, which 
adds support for async/await, decorators, and other features.
Today, JavaScript is one of the most widely used programming languages in the world,
with a large and active community of developers, frameworks, and libraries.

**Code Explanation:**
This example demonstrates the fundamental ways to run JavaScript in a web browser:
- **Script Tag**: The \`<script>\` tag tells the browser to interpret the code inside as JavaScript
 rather than HTML.
- **Console Output**: \`console.log('Hello, JavaScript!')\` prints text to the browser's developer console, 
which is essential for debugging and development.
- **Alert Dialog**: \`alert('Welcome to JavaScript!')\` displays a popup dialog box to the user,
 useful for simple user interactions.
- **Basic Arithmetic**: \`console.log(2 + 2)\` demonstrates that JavaScript can perform mathematical
 calculations and display results.

**Why This Matters:**
- This shows how JavaScript integrates with HTML to create interactive web pages
- Console logging is the primary debugging tool for JavaScript developers
- Understanding basic output methods is crucial for development and testing

**Learning Outcome:** Understanding how to embed and run JavaScript code in web browsers
and use basic output methods.`,

       "JavaScript Syntax and Basics": `
### Example 1
The fundamental rules, structure, and concepts that define how JavaScript code 
is written and executed, including variables, data types, operators, and basic statements.

- \`//\` creates single-line comments for brief explanations
- \`/* */\` creates multi-line comments for detailed documentation (JSDoc style)

### Example 2
- \`console.log('x =', x)\` is a statement that performs an action
- \`x + 2\` is an expression that produces a value but doesn't perform an action

### Example 3
Proper indentation and spacing make code readable and maintainable.
The if-else block shows proper code organization with consistent formatting.

**Why This Matters:**
- Good commenting practices make code self-documenting and easier for others to understand
- Understanding the difference between statements and expressions is fundamental to JavaScript
- Proper formatting is essential for code readability and professional development

**Learning Outcome:** Understanding JavaScript syntax rules, commenting practices, 
and code organization principles.`,

    "Variables and Data Types": `
### Example 1
- **variables** act like labeled storage boxes that hold data so it can be used, 
updated, and referenced throughout a program. They have names (identifiers) and values, 
and their contents can change during execution.

Here:
- \`let\`:Is the keyword used to declare the variable 
- \`name\`:Is the variable name or (identifier)
- \`"Hanna"\`:Is the **value** stored in that variable. 

### Example 2 
Historically, \`var\` was the only way to declare variables in JavaScript. However, with
the introduction of ES6 (ECMAScript 2015), \`let\` and \`const\` were added, offering more
control over variable scope and mutability

**\`var\`**
- **Function-scoped**: Variables declared with \`var\` are accessible throughout the
function they are declared in, regardless of block scope (like if statements or
for loops)
- **Can be re-declared and re-assigned**: You can declare the same \`var\` variable
multiple times and change its value
- **Hoisted**: \`var\` declarations are
hoisted to the top of their function or global scope, meaning you can use them before
they are declared in the code (though their value will be \`undefined\` until the actual
declaration is reached).

### Example 3 
**\`let\`**
- **Block-scoped**: Variables declared with \`let\` are limited to the block (e.g., if
statement, \`for\` loop, or any \`{}\` block) in which they are declared. This helps
prevent unintended side effects and makes code easier to reason about.
- **Can be re-assigned, but not re-declared**: You can change the value of a \`let\`
variable, but you cannot declare another variable with the same name in the
same scope.
- **Not hoisted (in the same way as \`var\` )**: While \`let\` declarations are technically
hoisted, they are in a temporal dead zone until their declaration is reached. This means you cannot access
them before they are declared.

### Example 4 
**\`const\`**
- **Block-scoped**: Like \`let\`, \`const\` variables are block-scoped.
- **Cannot be re-assigned or re-declared**: Once a \`const\` variable is declared and
assigned a value, its value cannot be changed, and it cannot be re-declared. This
makes \`const\` ideal for values that should remain constant throughout your
program.
- **Must be initialized**: You must assign a value to a \`const\` variable at the time of its
declaration

### Example 5
- **Data types** specify the kind of data a variable can hold, which determines what operations 
can be performed on it. In JavaScript, data types are divided into:

### Example 6
**Primitive types demonstrated**: 
- \`string\` - text values (\`"Hello"\`)
- \`number\` - numeric values (\`42, 3.14\`)
- \`boolean\` - logical values (\`true\` or \`false\`)
- \`null\` - intentional absence of any value
- \`undefined\` - variable declared but not assigned
- \`symbol\` - unique and immutable identifier
- \`bigint\` - large integers beyond number limits

Here we inspect the types of the previously declared variables using \`typeof\`. Notes:
- \`typeof null\` is historically "object" (a known JavaScript quirk)
- Symbols and BigInts each have their own distinct type labels

### Example 7
Shows explicit type conversion:
- \`String(value)\` converts to string
- \`Number(value)\` parses numeric strings
- \`Boolean(value)\` follows truthy / falsy rules (1 -> true)

*Why This Matters*
Understanding declarations, inspection, and conversion lets you control data reliably and avoid subtle bugs.

*Learning Outcome*
Ability to declare, inspect, and convert primitive values correctly.`,

       "Operators and Expressions": `
### Example 1
**Arithmetic Operators** are special symbols or keywords that perform operations on values (operands). 
They are used to manipulate data, perform calculations, compare values, and combine logical conditions.

**Arithmetic Operators**
| Operator | Description           | Example     | Result |
| :------- | :-------------------- | :---------- | :----- |
| \`+\`      | Addition              | \`4 + 5\`     | \`9\`    |
| \`-\`      | Subtraction           | \`7 - 4\`     | \`3\`    |
| \`*\`      | Multiplication        | \`3 * 4\`     |\`12\`   |
| \`/\`      | Division              | \`15 / 3\`    | \`5\`    |
| \`%\`      | Modulus (remainder)   | \`10 % 3\`    | \`1\`    |
| \`**\`     | Exponentiation (ES2016) | \`2**3\`    | \`8\`    |
| \`++\`     | Increment             | \`let x = 5; x++;\`    | \`x is now 6\`    |
| \`--\`      | Decrement               | \`let y = 8; y--;\`    | \`y is now 7\`    |


### Example 2 
**Assignment Operator** are used to assign values to variables.

**Assignment Operators**
| Operator | Description                                    | Example        | Result  |
| :------- | :--------------------------------------------- | :------------- | :------ |
| \`=\`      | Assigns value from right to left                | \`x = 5\`        | \`x = 5\` |
| \`+=\`     | Adds right operand to left operand and assigns  | \`x = 3; x += 2\`| \`x = 5\` |
| \`-=\`     | Subtracts right operand and assigns             | \`x = 5; x -= 2\`| \`x = 3\` |
| \`*=\`     | Multiplies right operand and assigns            | \`x = 4; x *= 3\`| \`x = 12\`|
| \`/=\`     | Divides left operand by right operand and assigns| \`x = 10; x /= 2\`| \`x = 5.0\`|
| \`%=\`     | Takes modulus and assigns                       | \`x = 7; x %= 3\`| \`x = 1\` |
| \`**=\`    | Performs exponentiation and assigns             | \`x = 2; x **= 3\`| \`x = 8\` |
| \`//=\`    | Performs floor division and assigns             | \`x = 7; x //= 2\`| \`x = 3\` |


### Example 3
Comparison Operators compare two values and return a boolean ( true or false ).

### Comparison Operators
| Operator | Description                                   | Example       | Result  |
| :------- | :-------------------------------------------- | :------------ | :------ |
| \`==\`     | Checks if two values are equal                 | \`5 == 5\`      | \`True\`  |
| \`!=\`     | Checks if two values are not equal             | \`5 != 3\`      | \`True\`  |
| \`>\`      | Checks if left value is greater than right     | \`7 > 4\`       | \`True\`  |
| \`<\`      | Checks if left value is less than right        | \`3 < 5\`       | \`True\`  |
| \`>=\`     | Checks if left value is greater or equal       | \`5 >= 5\`      | \`True\`  |
| \`<=\`     | Checks if left value is less or equal          | \`4 <= 6\`      | \`True\`  |
| \`===\`    | Checks if two values are strictly equal        | \`4 === "4"\`     | \`False\`  |
| \`!==\`    | Checks if two values are strictly not equal    | \`5 !== 5\`     | \`False\`  |

Loose (\`==\` , \`!= \`) vs. Strict ( \`===\` , \`!==\` ) Equality:
- **Loose equality ( \`==\` )** performs type coercion before comparison. This means it
tries to convert the operands to the same type before checking their values. This
can lead to unexpected results.
- **Strict equality ( \`===\` )** compares both the value and the type without any type
coercion. This is generally recommended for more predictable and safer
comparisons.

### Example 4
Logical operators are Used for combining conditions and boolean logic.

**Logical Operators (Truth Table Style)**
| Operator | Description | Example             | Result  |
| :------- | :---------- | :------------------ | :------ |
| \`AND\`    | AND         | \`True and False\`    | \`False\` |
| \`OR\`     | OR          | \`True or False\`     | \`True\`  |
| \`NOT\`    | NOT         | \`not True\`          | \`False\` |

### Example 5
In JavaScript, strings are mostly manipulated with the \`+\` (concatenation) and \`+=\` (concatenation assignment) operators.

**Code Explanation**:
- \`+\` operator: Joins two or more strings together into one new string.
Example: \`"Hanna" + "Code"\` → \`"HannaCode"\`.
- \`+=\` operator: Appends (adds) another string to an existing string variable.
Example: \`greeting += " World!"\` → \`"Hello World!"\`.

### Example 6 
String concatenation means joining multiple strings together to form a single string. 
This can be done in different ways.bConcatenation with Template Literals (\`backticks)
- Cleaner and more modern way.
- Allows embedding variables directly inside the string with \${variable}.
- Easier to read and maintain

## **Why This Matters**:
- Operators are the building blocks of expressions and calculations
- Understanding operator precedence prevents unexpected results
- String manipulation is essential for text processing

**Learning Outcome**: Mastering JavaScript operators for calculations, comparisons, and string manipulation.`,

       "Control Flow: if, else, switch": `
### Example 1 
Code Explanation:
This example demonstrates JavaScript's control flow structures:
If-Else Statements:
- \`if\` checks a condition and executes code if true
- \`else if\` provides additional conditions to check
- \`else\` executes when no conditions are met

### Example 2
Switch Statement:
- Compares a value against multiple cases
- \`break\` prevents fall-through to next case
- \`default\` handles unmatched values

### Example 3
**Ternary Operator**:
- \`condition ? value1 : value2\` provides a concise conditional expression
- Useful for simple conditional assignments

### Example 4
**Nullish Coalescin**:
- \`??\` returns the right operand when the left is null or undefined
- More precise than logical OR (\`||\`) for null/undefined checks

**Why This Matters**:
- Control flow determines program execution path
- Different structures are appropriate for different scenarios
- Understanding these patterns is essential for decision-making logic

**Learning Outcome**:Understanding how to create conditional logic and control program
flow based on different conditions.`,

       "Loops: for, while, do...while": `
### Example 1
**For Loop**:
- The for loop is made up of three parts (initialization; condition; afterthought)
- **Initialization**: is where we declare a variable and set it equalto a starting value. 
In this case, we set \`i\` equal to \`0\`.
- **Condition**: is a boolean expression that determines the numberof times a loop 
will run and when it will stop
- **final expression**: is where we increment or decrement the variable. 
In our example, we increment \`i\` by 1 in each loop iteration.
The loopwill continue to run until the condition is no longer met.
*NOTE*: Iteration means repeatedly executing  a block of code, often to process each
element in a sequence (like an array, object properties or numbers in a range).

### Example 2
**While Loop**:
- Continues while a condition is true
- Condition is checked before each iteration
- Useful when iteration count is unknown

### Example 3
**Do...While Loop**:
- Similar to while but condition is checked after execution
- Always executes at least once
- Useful when you need guaranteed execution

### Example 4
**For...Of Loop**:
- Iterates over iterable objects (arrays, strings)
- Provides direct access to values
- Modern, clean syntax for array iteration

### Example 5
**For...In Loop**:
- Iterates over object properties
- Returns property names (keys)
- Useful for object enumeration

**Why This Matters**:
- Loops are essential for processing collections of data
- Different loops are optimized for different scenarios
- Understanding loop control prevents infinite loops

**Learning Outcome**: Understanding how to repeat code execution and iterate over data structures efficiently.`,

       "Functions and Scope": `
### Example 1
**Functions** are one of the most fundamental building blocks in JavaScript. They are
reusable blocks of code that perform a specific task. By organizing your code into
functions, you can make it more modular, readable, and maintainable. Functions
allow you to avoid repeating the same code multiple times (the DRY principle: Don't
Repeat Yourself)

### **Function Declaration**:
A function declaration (also known as a function statement) defines a named function.
It is hoisted, meaning you can call the function before it is defined in the code.

### Example 2
**Function Expression**:
- Function assigned to a variable
- Not hoisted (must be defined before use)
- More flexible than declarations

### Example 3
**Arrow Function**:
- \`=>\` syntax for concise function creation
- Inherits \`this\` from surrounding scope
- Modern ES6 syntax

### Example 4
Parameters are placeholders for the values that will be passed into the function when
it is called. You define parameters in the parentheses after the function name.
**Arguments**: The actual values passed to the function when it is called are called
arguments.

**Default Parameters (ES6 )**: You can provide default values for parameters. If an
argument is not provided for that parameter, the default value will be used.

### Example 5
**Rest Parameters**:
- \`...numbers\` collects all arguments into an array
- Flexible parameter handling

### Example 6
**Scope**:
- Variables declared with \`let/const\` are block-scoped
- Variables declared with \`var\` are function-scoped
- Global variables are accessible everywhere

**Why This Matters:**
- Functions are the primary way to organize and reuse code
- Understanding scope prevents variable conflicts
- Different function types serve different purposes

**Learning Outcome:** Understanding how to create reusable code blocks and manage variable scope effectively.`,

       "Arrow Functions and ES6 Syntax": `
### Example 1 
**Basic Arrow Function**:
- \`(a, b) => a + b\` creates a concise function
- Implicit return when no curly braces are used
- No \`function\` keyword needed

### Example 2
**Arrow Function with Block Body**:
- \`name => { ... }\` uses curly braces for multiple statements
- Explicit \`return\` statement required
- More control over function body

### Example 3
**Arrow Functions in Array Methods**:
- \`map()\` transforms each array element
- Arrow functions provide clean callback syntax
- Functional programming approach

### Example 4
**Lexical This Binding**:
- Arrow functions inherit \`this\` from surrounding scope
- Solves common \`this\` context issues
- Particularly useful in callbacks and event handlers

**Why This Matters:**
- Arrow functions provide cleaner, more readable syntax
- Lexical \`this\` binding solves common JavaScript pitfalls
- Modern JavaScript heavily uses arrow functions

**Learning Outcome:** Understanding modern JavaScript syntax and how arrow functions
improve code readability and solve context issues.`,

       "Objects and Object Literals": `
### Example 1
**Objects** are fundamental to JavaScript and are used to store collections of related data
and functionality. Unlike arrays, which store ordered lists of values, objects store data
in key-value pairs. This makes objects ideal for representing real-world entities with
various properties and behaviors.

 **Object Literal**:
- **Keys (or Property Names)**: These are usually strings (or Symbols in ES6 ) that
uniquely identify a property within the object. If the key is a valid JavaScript
identifier (no spaces, special characters, or starting with a number), you don't
need to put it in quotes.
- **Values**: These can be any JavaScript data type, including other objects, arrays,
functions, numbers, strings, booleans, etc.

### Example 2 
**Object Methods**:
- \`Object.keys()\` returns array of property names
- \`Object.values()\` returns array of property values
- Useful for object inspection and manipulation

### Example 3
**Object Destructuring**:
- \`const { name, age } = person\` extracts properties into variables
- Cleaner than individual property access
- Modern ES6 syntax

### Example 4
**Object Spread**:
- \`{ ...person, age: 29 }\` creates new object with modifications
- Non-destructive object manipulation
- Immutable programming pattern

### Example 5
**Computed Property Names**:
- \`[prop]: "red"\` uses variable as property name
- Dynamic property creation
- Useful for flexible object construction

**Why This Matters:**
- Objects are the primary way to group related data
- Modern object syntax makes code more readable
- Object manipulation is essential for data handling

**Learning Outcome:** Understanding how to create, manipulate, and work with JavaScript objects using modern syntax.`,

       "Arrays and Array Methods": `
### Example 1
**Arrays** are ordered collections of data. They are incredibly versatile and are used to
store multiple values in a single variable. In JavaScript, arrays are dynamic, meaning
their size can change, and they can hold elements of different data types. Arrays are
zero-indexed, meaning the first element is at index 0 , the second at index 1 , and so on.

#### **Array Creation and Manipulation**:
The simplest and most common way to create an array is using square brackets \`[]\` .
- \`push()\` adds elements to the end of an array
- Arrays are dynamic and can grow/shrink
- Zero-based indexing

### Example 2
**Array Methods**:
- **map()**: Transforms each element and returns new array
- **push()** : Adds one or more elements to the end of an array and returns the new length
- **filter()**: Returns new array with elements that pass a test
- **reduce()**: Combines all elements into a single value
- **pop()**: Removes the last element from an array and returns that element.
- **shift()** : Removes the first element from an array and returns that element.
- These methods enable functional programming patterns

### Example 3
**Array Destructuring**:
- \`const [first, second, ...rest] = numbers\` extracts elements
- \`...rest\` collects remaining elements into new array
- Clean way to extract specific elements

### Example 4
**Array Spread**:
- \`[...numbers, 6, 7]\` creates new array with additional elements
- Non-destructive array manipulation
- Useful for combining arrays

**Why This Matters:**
- Arrays are fundamental for storing collections of data
- Functional array methods make code more readable and maintainable
- Modern array syntax provides powerful data manipulation tools

**Learning Outcome:** Understanding how to work with arrays using both traditional and modern
functional programming methods.`,

     "Spread Operator":`
### Example 1 
## Introduction to the spread operator
The spread operator is used to "spread" the elements of an iterable. Its primary function is to unpack elements. 
This is especially useful for creating copies, merging data structures, or passing multiple arguments to a function from a single array.
 
**Code Explanation**
- In this example, \`console.log(...numbers)\` doesn't print the array itself. 
- Instead, the spread operator expands the \`numbers\` array into a list of its individual elements: \`1, 2, 3, 4\`. 
- The \`console.log()\` function then receives these four arguments and prints them separated by spaces.

### Example 2 
The spread operator is very effective for array manipulation, offering a concise and readable alternative to methods like \`concat()\` or \`slice()\`.

**Code Explanation**
1. \`[...originalArray]\` creates a new array \`copiedArray\` with the elements of \`originalArray\`. This is a shallow copy, meaning a change to a 
nested object in \`copiedArray\` would also affect \`originalArray\`.
2. \`[...firstPart, ...secondPart]\` combines the elements of both arrays into a single new array combinedArray. 
This is a much cleaner way to concatenate arrays than using \`firstPart.concat(secondPart)\`.
3. The spread operator can be used anywhere in an array literal, allowing you to easily insert elements from one 
array into another.

### Example 3 
## **Spread with Objects**
Introduced in ES2018, the spread operator can also be used to copy or merge object properties.

**Code Explanation**
1. \`{...user}\` creates a new object \`userCopy\` with all the properties and values from the \`user\` object. Like with arrays, this is a shallow copy.
2. \`{...user, ...details}\` creates a new object \`combinedUser\` by taking all the properties from \`user\` and \`details\`.
3. When properties with the same name exist in both objects, the properties of the last object being spread will override the earlier ones. 
In this case, \`age\` and \`job\` from \`overrides\` replace the values from \`combinedUser\`.

### Example 4 
## **Spread with Strings and Iterables**
The spread operator can be used with any iterable object, which includes strings, maps, and sets. When used on a string, 
it breaks the string down into an array of its individual characters.

**Code Explanation**
- \`[...greeting]\` creates a new array where each element is a character from the greeting string. 
This is an easy way to convert a string to an array of its characters.
- \`printLetters(...greeting)\` spreads the 'h', 'e', 'l', 'l', 'o' characters of the \`greetin\`g string into individual arguments, 
which are then received by the \`printLetters\` function.

### Example 5 
The spread operator is used to simplify common programming tasks.

**Code Explanation**
1. \`Math.max()\` does not accept an array as an argument. By using the spread operator, 
we can pass the array's elements as individual arguments, allowing the function to work as intended.
2. This is a common pattern in front-end development. Instead of modifying the original \`todoList\` array, the spread operator creates a new 
array with all the existing items plus the new one. This is a non-destructive way to update data.
3. By spreading the \`product\` object and then listing the new property, you create a new object with the updated value without 
changing the original \`product\` object.

### Example 6
## **Limitations of the Spread Operator**
While powerful, the spread operator has some limitations you should be aware of.

- **Shallow Copy**: The spread operator only performs a shallow copy. This means if you have nested arrays or objects, the nested structures are still passed by reference. 
Changes to the nested elements in the new copy will affect the original.
- **Performance**: For very large arrays or objects, using the spread operator can be less performant than a traditional \`for\` loop or other specialized methods because 
it has to iterate through every element to create the new structure.
- **Non-Iterables**: It can only be used on iterable objects (like arrays, strings, maps, sets) or plain objects. Trying to spread a non-iterable value like a number, 
null, or undefined will result in a TypeError.

**Code Explanation**
In this example, modifying the nested \`name\` property in \`teamCopy\` also changes the \`original\` object. 
This is because the spread operator copied the reference to the \`members\` array, not the array itself.

### Example 7 
## **Spread vs Rest Operator**
The spread and rest operators use the same syntax (\`...\`), but their function depends on the context where they are used.
     
- **Spread Operator**: **Spreads** elements of an array or object. It **expands** a collection into its individual parts.
- **Rest Operator**: **Collects** multiple elements into a single array or object. It **condenses** individual elements into a collection

**Code Explanation**
- In the first example, the \`...numbers\` is in a function call, acting as a spread operator that unpacks the array elements into function arguments.
- In the second example, \`...rest\` is in the function's parameter list, acting as a rest operator that gathers all remaining arguments passed to the function (20, 30, 40) into a single array named \`rest\`.
`,


 "Strings and String Methods": `
### Example 1  
**Code Explanation:**
This example demonstrates how to work with strings in JavaScript:

**String Creation and Properties**: Shows how to create strings and use properties like
 \`.length\` to get the number of characters.

### Example 2
**String Methods**: Methods like \`.toUpperCase()\`, \`.toLowerCase()\`,
 \`.indexOf()\`, \`.includes()\`, \`.startsWith()\`, and \`.endsWith()\` are used for searching and manipulating text.

### Example 3
**Slicing and Substrings**: \`.slice()\` and \`.substring()\` 
extract parts of a string. \`.replace()\` swaps out text.

### Example 4
**Template Literals**: Backtick syntax allows embedding variables 
and expressions directly in strings, and supports multi-line strings.

### Example 5
**Splitting and Joining**: \`.split()\` turns a string into an array, 
and \`.join()\` combines array elements into a string.

### Example 6
**Trimming**: \`.trim()\`, \`.trimStart()\`, and \`.trimEnd()\` remove whitespace from strings.

**Why This Matters:**  
- String manipulation is essential for user input, data processing, and UI rendering.
- Mastery of string methods makes code more concise and readable.

**Learning Outcome:**  
Ability to create, manipulate, and format strings effectively in JavaScript.`,

"Numbers and Math": `
### Example 1
**Code Explanation:**
This example covers working with numbers and mathematical operations in JavaScript:

**Number Types**: Demonstrates integers, floats, scientific notation, binary, octal, and hexadecimal numbers.

### Example 2
**Math Object**: Provides constants and methods for calculations, such as \`Math.PI\`,
 \`Math.round()\`, \`Math.floor()\`, \`Math.ceil()\`, \`Math.abs()\`, \`Math.pow()\`, \`Math.sqrt()\`, 
and \`Math.random()\`.

### Example 3
**Number Methods**: Methods like \`.toFixed()\`, \`.toPrecision()\`, \`.toString()\`, \`parseInt()\`,
 and \`parseFloat()\` are used for formatting and converting numbers.

### Example 4
**Random Numbers**: Shows how to generate random integers within a range.

### Example 5
**Currency Formatting**: Uses \`.toLocaleString()\` to format numbers as currency.

**Why This Matters:**  
- Numerical operations are fundamental for calculations, data analysis, and financial applications.
- Proper formatting and conversion are crucial for user interfaces and data integrity.

**Learning Outcome:**  
Mastery of number handling, mathematical operations, and formatting in JavaScript.`,

"Date and Time Handling": `
### Example 1
**Code Explanation:**
This example demonstrates how to work with dates and times in JavaScript:
**Date Creation**: Shows how to create Date objects for the real time, specific dates, and from strings.

### Example 2
**Date Methods**: Methods like \`.getFullYear()\`, \`.getMonth()\`, \`.getDate()\`, \`.getDay()\`,
 \`.getHours()\`, \`.getMinutes()\`, \`.getSeconds()\`, and \`.getMilliseconds()\` extract date 
and time components.

### Example 3
**Date Formatting**: Methods like \`.toDateString()\`, \`.toTimeString()\`, \`.toISOString()\`,
 \`.toLocaleDateString()\`, and \`.toLocaleTimeString()\` format dates for display.

### Example 4
**Date Arithmetic**: Demonstrates adding days and calculating differences between dates.
### Example 5
**Timers**: Shows how to use \`setTimeout\` and \`setInterval\` for scheduling code execution.

**Why This Matters:**  
- Date and time handling is essential for scheduling, logging, and user interfaces.
- Understanding time zones, formatting, and arithmetic prevents bugs and confusion.

**Learning Outcome:**  
Ability to create, manipulate, and format dates and times, and use timers in JavaScript.`,

 "Error Handling and Debugging": `
### Example 1 
In programming, errors are inevitable. They can occur due to various reasons:
incorrect syntax, logical flaws, unexpected user input, network issues, or problems
with external resources. Effective error handling is crucial for building robust and user-friendly applications. It allows your program to gracefully recover from errors, prevent
crashes, and provide meaningful feedback to users or developers.

- **Try-Catch-Finally**: Handles errors gracefully and ensures cleanup code runs.
### Example 2
**Custom Error Types**: Shows how to create and use custom error classes for more precise error handling.

### Example 3
**Console Methods**: Uses \`console.log\`, \`console.warn\`, \`console.error\`, \`console.info\`,
 and \`console.table\` for debugging and data visualization.
### Example 4
 **Console Groups and Timers**: Organizes output and measures performance.
### Example 5
**Error Propagation**: Demonstrates how errors can be caught and handled at different levels.

**Why This Matters:**  
- Robust error handling improves user experience and application reliability.
- Debugging skills are essential for finding and fixing bugs efficiently.

**Learning Outcome:**  
Ability to handle errors, debug code, and use the console effectively in JavaScript.`,

 "DOM Manipulation Basics": `
### Example 1
The Document Object Model (DOM) is a programming interface for web documents. It
represents the page so that programs can change the document structure, style, and
content. The DOM represents the document as nodes and objects. That way,
programming languages can connect to the page. It's essentially a tree-like structure
where each HTML element, attribute, and text is a node.
When a web page is loaded, the browser creates a DOM of the page. With the DOM,
JavaScript can:
- Change all the HTML elements in the page
- Change all the HTML attributes in the page
- Change all the CSS styles in the page
- Remove existing HTML elements and attributes
- Add new HTML elements and attributes
- React to all existing HTML events in the page
- Create new HTML events
**Selecting Elements**: Methods like \`getElementById\`, \`getElementsByClassName\`, \`getElementsByTagName\`,
 \`querySelector\`, and \`querySelectorAll\` are used to find elements in the DOM.

 ### Example 2
**Creating and Modifying Elements**: Shows how to create new elements, set their properties, 
and add them to the DOM.

### Example 3
**Modifying Content and Attributes**: Demonstrates changing text, HTML, attributes, and styles.
**Class Manipulation**: Uses \`classList\` to add, remove, or toggle CSS classes.
### Example 4
**Removing Elements**: Shows how to remove elements from the DOM.

### Example 5
**DOM Traversal**: Accesses parent, child, and sibling elements.

### Example 6
**Performance Optimization**: Uses \`documentFragment\` for efficient bulk DOM updates.
**Why This Matters:**  
- DOM manipulation is the foundation of dynamic web applications.
- Efficient DOM operations improve performance and user experience.

**Learning Outcome:**  
Ability to select, create, modify, and remove DOM elements in JavaScript.`,

 "DOM Events and Listeners": `
### Example 1
Events are actions or occurrences that happen in the system you are programming,
which the system tells you about so you can respond to them. In web development,
events are crucial for creating interactive user experiences. They allow JavaScript to
react to user actions (like clicks, key presses, form submissions) and browser actions
(like page loading, image loading)

### Example 2
**Event Object**: Demonstrates how to access event properties and control event behavior.
### Example 3
**Multiple Listeners**: Shows how to attach different handlers to the same element.
### Example 4
**Event Delegation**: Uses a single listener for multiple elements, improving efficiency.
### Example 5
**Custom Events**: Demonstrates creating and dispatching custom events for component communication.
### Example 6
**Event Phases**: Explains capturing and bubbling phases for advanced event handling.

### Example 7
It's good practice to remove event listeners when they are no longer needed,
especially in single-page applications, to prevent memory leaks. You must pass the
same event type and the same function reference that was used to add the listener.

**Why This Matters:**  
- Event handling is essential for interactive web applications.
- Understanding event phases and delegation leads to more efficient and maintainable code.

**Learning Outcome:**  
Mastery of event handling, delegation, and custom events in JavaScript.`,

    "Forms and User Input": `
### Example 1
**Selecting Form Elements**: Shows how to access form fields and controls.
### Example 2
**Form Validation**: Validates required fields, email format, and password strength before submission.
### Example 3
**Error Display**: Provides user feedback for validation errors.
### Example 3### Example 3
**Form Submission**: Handles form data, converts it to an object, and sends it to a server using \`fetch\`.
### Example 4
**Input Events**: Listens for input, focus, and blur events for real-time validation and feedback.
### Example 5
**File Uploads**: Handles file input and displays file information.
### Example 7
**Accessibility**: Ensures forms are accessible and user-friendly.

**Why This Matters:**  
- Proper form handling is crucial for data collection and user experience.
- Validation and feedback prevent errors and improve usability.

**Learning Outcome:**  
Ability to build, validate, and process forms and user input securely and accessibly.`,

    "Timers and Asynchronous Operations": `
### Example 1
**Code Explanation:**
This example covers timers and asynchronous programming in JavaScript:
**setTimeout and setInterval**: Schedules code to run after a delay or repeatedly at intervals.

### Example 2
**requestAnimationFrame**: Optimizes animations for smooth rendering.
### Example 3
**Promise-based Timing**: Uses Promises and async/await for more readable asynchronous code.

### Example 4
**Event Loop**: Demonstrates the order of synchronous, microtask, and macrotask execution.

### Example 5
**Async Operations with Error Handling**: Shows how to handle errors in async code.
### Example 6
**Debouncing and Throttling**: Implements techniques to control the rate of function execution 
for performance.

**Why This Matters:**  
- Asynchronous programming is essential for responsive web apps.
- Understanding the event loop and timing functions prevents bugs and improves performance.

**Learning Outcome:**  
Mastery of timers, async/await, and performance optimization techniques in JavaScript.`,

    "JSON and Data Handling": `
### Example 1
**Code Explanation:**
This example demonstrates working with JSON and data in JavaScript:
**Parsing and Stringifying**: Converts between JSON strings and JavaScript objects
using \`JSON.parse\` and \`JSON.stringify\`.

### Example 2
**Custom Serialization**: Uses replacer functions to customize JSON output.
### Example 3
**API Requests**: Fetches data from APIs using async/await and handles errors.

### Example 4
**Data Validation**: Checks for required fields and valid formats.
### Example 5
**Deep Cloning**: Uses JSON methods for deep copying simple objects.
### Example 6
**Local Storage**: Saves and loads data in the browser's local storage.

**Why This Matters:**  
- JSON is the standard for data exchange in web applications.
- Proper data handling ensures reliability and security.

**Learning Outcome:**  
Ability to parse, validate, and persist data using JSON and local storage in JavaScript.`,

    "Local Storage and Session Storage": `
### Example 1
**Code Explanation:**
This example covers browser storage options:
**Local Storage**: Persists data across sessions until explicitly cleared. Useful for user 
preferences and offline data.

### Example 2
**Session Storage**: Stores data for the duration of the page session. Useful for temporary state.
### Example 3
**Reading and Removing Data**: Shows how to get, remove, and clear stored data.
### Example 4
**Storage Events**: Listens for changes to storage across browser tabs.
### Example 5
**Utility Class**: Implements a \`StorageManager\` for organized, prefixed storage operations.
### Example 6
**Quota Management**: Checks storage usage and limits.
### Example 7
**Basic Encryption**: Demonstrates simple (not secure for production) data encryption for 
sensitive information.

**Why This Matters:**  
- Web storage is essential for saving user data and preferences.
- Understanding storage limits and security is crucial for robust applications.

**Learning Outcome:**  
Mastery of local and session storage, including best practices for security and data management.`,

    "ES6+ Features Overview": `
### Example 1
**Code Explanation:**
This example highlights key ES6+ (modern JavaScript) features:
**let and const**: Block-scoped variable declarations for safer, more predictable code.

### Example 2
**Template Literals**: Backtick syntax for multi-line strings and embedded expressions.

### Example 3
**Destructuring**: Extracts values from arrays and objects into variables.
### Example 4
**Spread and Rest Operators**: Expands or collects elements/props for flexible function 
calls and object/array manipulation.
### Example 5
**Arrow Functions**: Concise syntax and lexical \`this\` binding for cleaner callbacks and methods.
### Example 6
**Classes**: Modern syntax for object-oriented programming.
### Example 7
**Modules**: Organize code into reusable files with import/export.
### Example 8
**New Built-in Methods**: Adds powerful utilities to arrays and objects.

**Why This Matters:**  
- Modern JavaScript features improve code readability, maintainability, and performance.
- They are widely used in frameworks and libraries.

**Learning Outcome:**  
Ability to use modern JavaScript syntax and features for cleaner, more efficient code.`,

    "Template Literals and String Interpolation": `
### Example 1
**Code Explanation:**
This example demonstrates template literals and string interpolation:
**Basic Template Literals**: Use backticks for strings, allowing embedded variables and expressions.
### Example 2
**Multi-line Strings**: Easily create strings that span multiple lines.
### Example 3
**Expression Interpolation**: Embed calculations and function calls directly in strings.
### Example 4
**Tagged Templates**: Advanced feature for custom string processing.
### Example 5
**Raw Strings**: Access the raw content of template literals.
### Example 6
**Performance and Use Cases**: Template literals are ideal for dynamic content, HTML generation, 
and readable code.

**Why This Matters:**  
- Template literals make string construction more powerful and less error-prone.
- They are essential for modern JavaScript development.

**Learning Outcome:**  
Mastery of template literals for dynamic, readable, and maintainable string handling.`,

    "Destructuring Assignment": `
### Example 1
**Code Explanation:**
This example covers destructuring assignment for arrays and objects:
**Array Destructuring**: Extracts elements into variables in a single line.
### Example 2
**Skipping and Rest Operator**: Skip elements or collect the rest into an array.
### Example 3
**Default Values**: Provide fallback values for missing data.
### Example 4
**Object Destructuring**: Extracts properties into variables, with support for renaming and nested structures.
### Example 5
**Function Parameters**: Use destructuring for cleaner, more flexible function signatures.
### Example 6
**Performance and Best Practices**: Use destructuring for clarity, but avoid in tight loops for performance.

**Why This Matters:**  
- Destructuring simplifies code and reduces boilerplate.
- It is widely used in modern JavaScript and frameworks.

**Learning Outcome:**  
Ability to extract and use data from arrays and objects efficiently.`,

    "Spread and Rest Operators": `
### Example 1
**Code Explanation:**
This example demonstrates the spread (\`...\`) and rest (\`...\`) operators:
**Array and Object Spread**: Copy or merge arrays and objects in a concise way.
### Example 2
**Rest Parameters**: Collect multiple arguments into an array for flexible function definitions.
### Example 3
**Destructuring with Rest**: Gather remaining elements or properties.
### Example 4
**Function Calls**: Spread arrays into function arguments.
### Example 5
**Shallow vs. Deep Copy**: Spread creates shallow copies; use JSON methods for deep copies.

**Why This Matters:**  
- Spread and rest operators make code more flexible and expressive.
- They are essential for working with variable-length data and immutability.

**Learning Outcome:**  
Mastery of spread and rest operators for modern, concise JavaScript code.`,

    "Modules and Imports": `
### Example 1
**Code Explanation:**
This example covers JavaScript modules and import/export syntax:
**Named and Default Exports**: Share functions, objects, or values between files.
### Example 2
**Import Syntax**: Use \`import\` to bring in code from other modules.
### Example 3
**Dynamic Imports**: Load modules on demand for performance.
### Example 5
**Module Pattern**: Organize code for encapsulation and reuse.
### Example 4
**Re-exporting**: Aggregate exports from multiple files.

**Why This Matters:**  
- Modules enable code organization, reuse, and maintainability.
- They are the standard for modern JavaScript development.

**Learning Outcome:**  
Ability to structure projects using modules and imports.`,

    "Closures and Lexical Scope": `
### Example 1
**Code Explanation:**
This example demonstrates closures and lexical scope:
**Closure Basics**: Functions retain access to variables from their creation context.
### Example 2
**Private Variables**: Use closures to encapsulate data and create private state.
### Example 3
**Module Pattern**: Encapsulate logic and expose only necessary methods.
### Example 4
**Common Pitfalls**: Shows issues with closures in loops and how to fix them with \`let\` or IIFE.

**Why This Matters:**  
- Closures are fundamental for data privacy, callbacks, and asynchronous code.
- Understanding scope prevents bugs and enables advanced patterns.

**Learning Outcome:**  
Ability to use closures for encapsulation and advanced JavaScript techniques.`,

    "Callbacks and Higher-Order Functions": `
### Example 1 
**Code Explanation:**
This example covers callbacks and higher-order functions:
**Callbacks**: Pass fusnctions as arguments for flexible, asynchronous code.
### Example 2
**Higher-Order Functions**: Functions that return or accept other functions.
### Example 3
**Array Methods**: Use callbacks with \`forEach\`, \`map\`, \`filter\`, and \`reduce\`.
### Example 4
**Function Composition**: Combine functions for powerful data processing.
### Example 5
**Error Handling**: Handle errors in callbacks and avoid callback hell.
### Example 6
**Promises**: Shows how to refactor callbacks into Promises for cleaner code.

**Why This Matters:**  
- Callbacks and higher-order functions are the backbone of functional and asynchronous programming in JavaScript.
**Learning Outcome:**  
Mastery of callbacks, higher-order functions, and functional programming patterns.`,

    "Promises and Async Programming": `
### Example 1
**Code Explanation:**
This example demonstrates Promises and async programming:
**Creating and Using Promises**: Handle asynchronous operations with \`.then()\` and \`.catch()\`.
### Example 2
**Promise Chaining**: Sequence async operations for readable code.
### Example 3
**Promise.all, .race, .allSettled**: Manage multiple async tasks in parallel.
### Example 6
**Converting Callbacks to Promises**: Modernize legacy code.
### Example 7
**Error Handling**: Catch and handle errors in async flows.

**Why This Matters:**  
- Promises are essential for modern, maintainable async code.
- They prevent callback hell and improve error handling.

**Learning Outcome:**  
Ability to write robust, readable async code using Promises.`,

    "Async/Await Syntax": `
### Example 1
The async and await keywords were introduced in ES2017 to make
working with Promises easier. For example, we can simplify the
Fetch request in the fetchExample.js file by using the async and
await keywords:

### Example 2
The \`async\` keyword is used to define an asynchronous function,
while the await keyword is used to wait for a Promise to resolve,
and can only be used inside an async function. In our example,
we started by defining an asynchronous arrow function called
\`displayUsers()\`.

### Example 5
**Error Handling**: Use try/catch for synchronous-style error handling in async code.
### Example 4
**Parallel vs. Sequential Execution**: Optimize performance by running tasks in parallel.
### Example 6
**Async Generators**: Advanced pattern for streaming async data.

**Why This Matters:**  
- Async/await makes async code easier to read, write, and debug.
- It is the standard for modern JavaScript.

**Learning Outcome:**  
Mastery of async/await for clean, efficient asynchronous programming.`,

    "Fetch API and AJAX": `
### Example 1
**Code Explanation:**
This example demonstrates the Fetch API for AJAX requests:
**GET, POST, PUT, DELETE**: Perform all major HTTP operations.
### Example 11
**Error Handling**: Check response status and handle errors.
### Example 5
**File Uploads**: Use FormData for uploading files.
### Example 6
**Query Parameters and Headers**: Customize requests for APIs.
### Example 9
**CORS and Security**: Handle cross-origin requests and authentication.
### Example 8
**Retries and Timeouts**: Make robust, user-friendly network requests.

**Why This Matters:**  
- Fetch API is the modern standard for web requests.
- Understanding AJAX is essential for dynamic, data-driven apps.

**Learning Outcome:**  
Ability to interact with APIs and handle network requests in JavaScript.`,

    "Error Handling in Async Code": `
### Example 1
**Code Explanation:**
This example covers error handling in asynchronous code:
**Try-Catch with Async/Await**: Catch errors in async functions.
### Example 2
**Promise Error Handling**: Use \`.catch()\` for rejected Promises.
### Example 4
**Custom Error Types**: Create and use custom error classes.
### Example 6
**Error Logging and Recovery**: Log errors and provide fallback strategies.
### Example 8
**Error Boundaries**: Pattern for containing errors in UI components.

**Why This Matters:**  
- Proper error handling is critical for reliability and user experience in async code.

**Learning Outcome:**  
Ability to handle, log, and recover from errors in asynchronous JavaScript.`,

    "Array Iteration Methods": `
### Example 1 
**Code Explanation:**
This example demonstrates the most common ways to iterate and process arrays in JavaScript:
**forEach**: Executes a function for each array element. Used for side effects (like logging), 
but does not return a new array.

### Example 2
**map**: Transforms each element and returns a new array. Ideal for data transformation.
### Example 3
**filter**: Returns a new array with elements that pass a test. Used for extracting subsets.
### Example 4
**reduce**: Combines all elements into a single value (e.g., sum, product, object aggregation).
### Example 5
**find/findIndex**: Finds the first element (or its index) that matches a condition.
### Example 7
**some/every**: Checks if at least one (some) or all (every) elements pass a test.
### Example 9
**Method chaining**: Combines multiple methods for powerful, readable data processing.
### Example 10
**Complex example**: Shows how to filter and sum properties of objects in an array.

**Why This Matters:**  
- These methods are the foundation of modern, functional JavaScript.
- They make code more readable, concise, and expressive.

**Learning Outcome:**  
Mastery of array iteration and transformation using modern JavaScript methods.`,

    "Functional Programming Concepts": `
### Example 1 
**Code Explanation:**
This example introduces key functional programming ideas in JavaScript:
**Pure Functions**: Functions like \`add(a, b)\` always return the same output for the same
input and have no side effects.

### Example 2
**Immutability**: Instead of changing the original array, \`[...arr, 4]\` creates a new array.
### Example 3
**Function Composition**: Combining simple functions to build more complex operations.
### Example 4
**Higher-Order Functions**: Functions that take other functions as arguments or return them.
### Example 5
**Currying**: Transforming a function so it can be called with fewer arguments at a time.
### Example 6
**Functional Array Methods**: Using \`map\`, \`filter\`, and \`reduce\` to process data in a 
declarative, readable way.

**Why This Matters:**  
- Functional programming leads to cleaner, more maintainable code.
- These patterns are widely used in modern JavaScript frameworks and libraries.

**Learning Outcome:**  
Ability to write modular, predictable, and reusable code using functional programming principles.`,

    "Event Delegation": `
### Example 1
**Code Explanation:**
This example demonstrates the event delegation pattern in the DOM:
**Single Listener for Many Elements**: Instead of adding a click listener to every \`<li>\`,
a single listener is added to the parent.
**Event Targeting**: Checks if the clicked element is a list item.
### Example 2
**Dynamic Elements**: New list items added after the listener is set up are automatically handled.

**Why This Matters:**  
- Event delegation improves performance and memory usage, especially for large or dynamic lists.

**Learning Outcome:**  
Understanding how to efficiently manage events for many elements using event delegation.`,

    "Custom Events": `
### Example 1 
**Code Explanation:**
This example shows how to create and use custom events in the browser:
**Creating a Custom Event**: Use \`CustomEvent\` with a \`detail\` property.
### Example 2
**Listening for Custom Events**: Use \`addEventListener\` for custom event types.
### Example 3
**Dispatching Events**: Use \`dispatchEvent\` to trigger the event.

**Why This Matters:**  
- Custom events enable decoupled, modular code by allowing components to communicate without direct references.

**Learning Outcome:**  
Ability to create, dispatch, and handle custom events for flexible component communication.`,

    "Regular Expressions": `
### Example 1 
**Code Explanation:**
This example demonstrates how to use regular expressions (regex) in JavaScript:

**Pattern Creation**: Create patterns for matching text.
**Testing Strings**: Use \`.test()\` to check for matches.
### Example 2
**Extracting Data**: Use \`.match()\` to find matches.
### Example 3
**Replacing Text**: Use \`.replace()\` for substitutions.
### Example 4
**Email Extraction**: Use regex to extract emails from text.

**Why This Matters:**  
- Regex is a powerful tool for searching, validating, and manipulating text.

**Learning Outcome:**  
Understanding how to use regular expressions for pattern matching and text manipulation in JavaScript.`,

    "Prototypes and Inheritance": `
### Example 1 
**Code Explanation:**
This example covers JavaScript's prototype-based inheritance:
**Constructor Functions**: Create objects with shared properties and methods.
**Prototypes**: Add methods to the prototype for shared behavior.

### Example 2
**Inheritance**: Use \`Object.create\` and \`call\` for inheritance.
**Instance Methods**: Add methods specific to child objects.

**Why This Matters:**  
- Prototypal inheritance is the foundation of JavaScript's object system.

**Learning Outcome:**  
Ability to use and extend prototypes for code reuse and inheritance in JavaScript.`,

    "Classes and OOP in JavaScript": `
### Example 1 
**Code Explanation:**
This example demonstrates modern object-oriented programming (OOP) in JavaScript using classes:
- **Class Syntax**: Use \`class\` for clear, concise object definitions.
- **Inheritance**: Use \`extends\` for subclassing.
- **Method Overriding**: Override parent methods for specialized behavior.
- **Static Methods**: Use static methods for class-level functionality.
### Example 2
**Private Fields**: Use \`#\` for encapsulation.

**Why This Matters:**  
- Classes make code more organized, modular, and maintainable.

**Learning Outcome:**  
Mastery of class-based OOP, inheritance, and encapsulation in modern JavaScript.`,

    "Project: Interactive Web App": `
### Example 1 
**Code Explanation:**
This example outlines the steps to build a simple interactive web app (like a To-Do List):
**Planning**: Decide on features and UI design.
**Data Structure**: Use arrays and objects to store tasks
**Core Logic**: Functions manage the app's state and UI.
**DOM Manipulation**: Dynamically update the UI.
**Event Handling**: Use event listeners for user actions.
**Persistence**: Save data to local storage or a backend.
**Testing & Debugging**: Ensure the app works as expected.
**Deployment**: Make the app available to users.

**Why This Matters:**  
- Building projects reinforces all core JavaScript concepts.

**Learning Outcome:**  
Ability to plan, build, and deploy interactive web apps using JavaScript.`,

    "Best Practices and Code Style": `
### Example 1 
**Code Explanation:**
This example highlights best practices for writing professional JavaScript:
 **Code Organization**: Use functions and modules for maintainability.
### Example 2
**Naming Conventions**: Use descriptive, consistent names.
### Example 3
**Documentation**: Comment code and use JSDoc.
### Example 4
**Testing**: Use assertions and tests to catch bugs.
### Example 5
**Performance**: Measure and optimize code.
### Example 6
**Security**: Sanitize user input to prevent attacks.
### Example 7
**Accessibility**: Add ARIA labels and ensure UI elements are accessible.
### Example 8
**Maintenance**: Refactor code, use version control, and keep dependencies up to date.

**Why This Matters:**  
- Following best practices leads to safer, faster, and more maintainable code.

**Learning Outcome:**  
Understanding and applying best practices for robust, secure, and maintainable 
JavaScript code.`,


    };
    return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};

const getJSExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to JavaScript": `
1. Create an HTML file with a script tag and write a program that:
   - Displays an alert with your name
   - Logs your age to the console
   - Performs a simple calculation and shows the result

2. Experiment with different console methods:
   - Use console.log() to print different data types
   - Try console.warn() and console.error()
   - Use console.table() to display an array of objects

3. Create a simple calculator that:
   - Takes two numbers as input
   - Performs basic arithmetic operations
   - Displays the results in the console`,

    "JavaScript Syntax and Basics": `
1. Write a program that demonstrates different types of comments:
   - Single-line comments
   - Multi-line comments
   - JSDoc comments for a function

2. Create a program that shows the difference between statements and expressions:
   - Use various operators
   - Include conditional statements
   - Demonstrate variable declarations

3. Practice code formatting: 
   - Write a function with proper indentation
   - Use consistent spacing
   - Include appropriate line breaks`,
   
    "Variables and Data Types": `
1. Create variables of different types:
   - Declare variables using let, const, and var
   - Use different primitive data types
   - Demonstrate type conversion

2. Write a program that:
   - Checks the type of different variables
   - Performs type coercion
   - Demonstrates scope differences

3. Create a function that:
   - Takes different data types as parameters
   - Converts between types
   - Returns a specific type`,
   
    "Operators and Expressions": `
1. Create a calculator program that:
   - Uses all arithmetic operators
   - Implements compound assignment
   - Handles different number types

2. Write a program that demonstrates:
   - Comparison operators
   - Logical operators
   - Operator precedence

3. Create a string manipulation program that:
   - Uses string operators
   - Implements template literals
   - Combines different data types`,

    "Control Flow: if, else, switch": `
1. Write a program that:
   - Uses if-else statements to check conditions
   - Implements nested conditionals
   - Uses the ternary operator

2. Create a switch statement that:
   - Handles multiple cases
   - Uses break and default
   - Demonstrates fall-through

3. Implement a grading system that:
   - Takes a score as input
   - Uses different control structures
   - Outputs the appropriate grade`,

    "Loops: for, while, do...while": `
1. Write a program that:
   - Uses different types of for loops
   - Implements while and do...while
   - Demonstrates loop control

2. Create a program that:
   - Iterates over arrays
   - Uses for...of and for...in
   - Implements nested loops

3. Implement a number guessing game that:
   - Uses loops for input validation
   - Implements a counter
   - Handles user interaction`,

    "Functions and Scope": `
1. Create different types of functions:
   - Function declarations
   - Function expressions
   - Arrow functions

2. Write a program that demonstrates:
   - Function parameters and arguments
   - Return values
   - Scope differences

3. Implement a calculator that:
   - Uses different function types
   - Handles multiple parameters
   - Returns appropriate values`,

    "Arrow Functions and ES6 Syntax": `
1. Convert regular functions to arrow functions:
   - Basic functions
   - Functions with multiple parameters
   - Functions with block bodies

2. Create a program that demonstrates:
   - Arrow function syntax
   - Lexical this binding
   - Implicit returns

3. Implement a callback system that:
   - Uses arrow functions
   - Handles asynchronous operations
   - Demonstrates this context`,

    "Objects and Object Literals": `
1. Create an object that:
   - Has different property types
   - Includes methods
   - Uses shorthand syntax

2. Write a program that demonstrates:
   - Object methods
   - Property access
   - Object manipulation

3. Implement a class system that:
   - Uses object literals
   - Includes inheritance
   - Demonstrates polymorphism`,

    "Arrays and Array Methods": `
1. Create a program that:
   - Uses different array methods
   - Implements array manipulation
   - Demonstrates array iteration

2. Write a program that:
   - Uses map, filter, and reduce
   - Implements array searching
   - Demonstrates array sorting

3. Implement a data processing system that:
   - Uses array methods
   - Handles different data types
   - Demonstrates method chaining`,

   "Strings and String Methods":`
- Write a function that counts the number of vowels in a string.
- Convert a string to uppercase using a method.
- Find the position of the word 'code' in a string.
- Write a function that checks if a string includes the word "JavaScript"`,
  
  "Numbers and Math":`
- Create a function that returns the square of a number.
- Use Math.floor to round down a floating point number.
- Generate a random number between 1 and 10.
- Calculate the square root of a given number using Math.sqrt()`,
  
  "Date and Time Handling": `
- Display the current date and time using the Date object
- Create a function that returns the current year.
- Find the day of the week for a given date.
- Format a date as "YYYY-MM-DD"`,
  
  "Error Handling and Debugging":`
- Use try-catch to handle an error when parsing JSON.
- Throw a custom error if a function receives invalid input.
- Log the value of a variable using console.log().
- Write a function that catches an error and prints a custom message.
  `,
  "DOM Manipulation Basics":`
- Select a paragraph element by ID and change its text.
- Create a new <div> element and add it to the body.
- Remove an element from the DOM.
- Change the style (color) of an element using JavaScript.
  `,
  "DOM Events and Listeners": `
- Add a click event listener to a button.
- Display an alert when a user hovers over a div.
- Prevent form submission using event.preventDefault().
- Log a message when a key is pressed in an input field.
 `,
  "Forms and User Input": `
- Get the value of a text input field on button click.
- Check if a checkbox is checked using JavaScript.
- Display a message when a form is submitted.
- Create a validation function that ensures a field is not empty.
  `,
  "Timers and Asynchronous Operations": `
- Display a message after 3 seconds using setTimeout().
- Create a timer that updates a counter every second using setInterval().
- Clear a repeating timer using clearInterval().
- Write a function that delays an alert using setTimeout()
  `,
  "JSON and Data Handling": `
- Convert a JavaScript object to JSON.
- Parse a JSON string into a JavaScript object.
- Access properties of an object parsed from JSON.
- Send a JSON object to a function and print a value.`,

"Local Storage and Session Storage":`
- Create a shopping cart that persists items using localStorage across browser sessions.
- Build a user preferences system that saves theme settings using sessionStorage for the current session.
- Design a note-taking app that automatically saves drafts to localStorage and restores them on page reload.`,

"ES6+ Features Overview":`
- Refactor ES5 code to use modern ES6+ features (let/const, arrow functions, template literals).
- Create a comparison demo showing ES5 vs ES6+ syntax for the same functionality.
- Build a feature showcase webpage demonstrating different ES6+ capabilities in action.`,

"Template Literals and String Interpolation":`
- Create a dynamic HTML generator using template literals for card components.
- Build a email template system with variable interpolation and multi-line strings.
- Design a SQL query builder using template literals for safe string construction.`,

"Destructuring Assignment":`
- Extract data from API responses using object and array destructuring.
- Create a function that returns multiple values and destructure them in the calling code.
- Build a configuration system that destructures nested objects with default values.`,

"Spread and Rest Operators":`
- Create utility functions that accept variable numbers of arguments using rest parameters.
- Build an array manipulation library using spread operator for immutable operations.
- Design a function that merges multiple objects while handling nested properties.`,

"Modules and Imports":`
- Create a modular calculator app with separate modules for different mathematical operations.
- Build a utility library with named and default exports, then import selectively in other files.
- Design a plugin system where modules can be dynamically imported based on user preferences.`,

"Closures and Lexical Scope":`
- Create a counter function that maintains private state using closures.
- Build a module pattern that exposes public methods while keeping internal data private.
- Design a function factory that creates specialized functions with enclosed configuration.`,

"Callbacks and Higher-Order Functions":`
- Create a custom array method that accepts callback functions for data transformation.
- Build an event system that uses callbacks for handling different event types.
- Design a validation framework that uses higher-order functions for composable validators.`,

"Promises and Async Programming":`
- Create a file upload system that shows progress using Promise-based operations.
- Build a data fetching utility that handles multiple concurrent requests with Promise.all().
- Design a retry mechanism for failed operations using Promise chains and error handling.`,

"Async/Await Syntax":`
- Convert Promise-based code to use async/await for better readability.
- Create an async function that handles sequential and parallel operations appropriately.
- Build an error handling system for async operations using try/catch blocks.`,

"Fetch API and AJAX":`
- Create a weather app that fetches data from a public API using the Fetch API.
- Build a CRUD application that performs all HTTP operations (GET, POST, PUT, DELETE).
- Design an auto-complete search feature that debounces API calls and handles responses.`,

"Error Handling in Async Code":`
- Create a robust API client with comprehensive error handling for different failure scenarios.
- Build a retry mechanism that handles network failures with exponential backoff.
- Design a user-friendly error display system that categorizes and presents different error types.`,

"Array Iteration Methods":`
- Create a data processing pipeline using map, filter, reduce, and other array methods.
- Build a search and sorting system that chains multiple array methods for complex queries.
- Design a data transformation utility that converts between different data formats
using array methods.`,

"Functional Programming Concepts":`
- Create pure functions for data transformations without side effects.
- Build a compose function that chains multiple smaller functions together.
- Design an immutable state management system using functional programming principles.`,

"Event Delegation":`
- Create a dynamic list where new items automatically inherit event handlers through delegation.
- Build a modal system that handles multiple modals with a single delegated event listener.
- Design a table with sortable columns using event delegation for dynamic content.`,

"Custom Events":`
- Create a pub/sub system using custom events for component communication.
- Build a form validation system that dispatches custom events for different validation states.
- Design a game system that uses custom events to communicate between different game components.`,

"Regular Expressions":`
- Create a form validation system using regex patterns for email, phone, and password validation.
- Build a text processing tool that finds and replaces patterns using regular expressions.
- Design a syntax highlighter that uses regex to identify and color different code elements.`,

"Prototypes and Inheritance":`
- Create a hierarchy of geometric shapes with shared methods using prototype inheritance.
- Build a plugin system where plugins inherit from a base prototype with common functionality.
- Design a model system that uses prototypal inheritance for shared behavior across data types.`,

"Classes and OOP in JavaScript":`
- Create a game character system using classes with inheritance and polymorphism.
- Build a data model with classes that include getters, setters, and static methods.
- Design a component library using class-based architecture with lifecycle methods.`,

"Project: Interactive Web App":`
- Create a task management application incorporating multiple JavaScript concepts 
(classes, async/await, localStorage).
- Build a real-time chat application using modern JavaScript features and event handling.
- Design a data visualization dashboard that fetches API data and renders interactive charts.`,

"Best Practices and Code Style":`
- Refactor existing code to follow modern JavaScript best practices and style guidelines.
- Create a code review checklist and apply it to identify improvements in sample code.
- Build a linting configuration and apply consistent formatting to a JavaScript project.`



  };
  return exercises[lessonTitle] || "1. Basic exercise\n2. Advanced exercise\n3. Project work"
}

const getJSQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to JavaScript": [
      {
        question: "What is JavaScript primarily used for?",
        options: [
          "Adding interactivity to web pages",
          "Styling web pages",
          "Structuring web pages",
          "Database management"
        ],
        correctAnswer: 0
      },
      {
        question: "Where does JavaScript run?",
        options: [
          "In the browser",
          "On the server only",
          "In a database",
          "In a spreadsheet"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you embed JavaScript in HTML?",
        options: [
          "<script> tag",
          "<js> tag",
          "<javascript> tag",
          "<code> tag"
        ],
        correctAnswer: 0
      }
    ],
    "JavaScript Syntax and Basics": [
      {
        question: "Which of the following is a valid JavaScript variable declaration?",
        options: [
          "let x = 5;",
          "var x == 5;",
          "int x = 5;",
          "x := 5;"
        ],
        correctAnswer: 0
      },
      {
        question: "What does // mean in JavaScript?",
        options: [
          "Single-line comment",
          "Division operator",
          "Multi-line comment",
          "String delimiter"
        ],
        correctAnswer: 0
      },
      {
        question: "Which statement prints to the console?",
        options: [
          "console.log('Hello');",
          "print('Hello');",
          "echo('Hello');",
          "write('Hello');"
        ],
        correctAnswer: 0
      }
    ],
    "Variables and Data Types": [
      {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: [
          "let",
          "var",
          "const",
          "function"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the type of null in JavaScript?",
        options: [
          "object",
          "null",
          "undefined",
          "number"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is NOT a primitive data type?",
        options: [
          "object",
          "string",
          "number",
          "boolean"
        ],
        correctAnswer: 0
      }
    ],
    "Operators and Expressions": [
      {
        question: "What does === check for?",
        options: [
          "Strict equality (value and type)",
          "Loose equality (value only)",
          "Assignment",
          "Inequality"
        ],
        correctAnswer: 0
      },
      {
        question: "Which operator is used for logical AND?",
        options: [
          "&&",
          "||",
          "!",
          "=="
        ],
        correctAnswer: 0
      },
      {
        question: "What is the result of '5' + 2 in JavaScript?",
        options: [
          "'52'",
          "7",
          "'7'",
          "Error"
        ],
        correctAnswer: 0
      }
    ],
    "Control Flow: if, else, switch": [
      {
        question: "Which statement is used for multiple conditions?",
        options: [
          "if...else if...else",
          "switch only",
          "for loop",
          "while loop"
        ],
        correctAnswer: 0
      },
      {
        question: "What does the switch statement evaluate?",
        options: [
          "An expression",
          "A variable only",
          "A function",
          "A loop"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the ternary operator used for?",
        options: [
          "Conditional expressions",
          "Loops",
          "Function calls",
          "Object creation"
        ],
        correctAnswer: 0
      }
    ],
    "Loops: for, while, do...while": [
      {
        question: "Which loop always runs at least once?",
        options: [
          "do...while",
          "for",
          "while",
          "forEach"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you exit a loop early?",
        options: [
          "break",
          "continue",
          "return",
          "exit"
        ],
        correctAnswer: 0
      },
      {
        question: "Which loop is best for iterating a known number of times?",
        options: [
          "for",
          "while",
          "do...while",
          "switch"
        ],
        correctAnswer: 0
      }
    ],
    "Functions and Scope": [
      {
        question: "What is the default return value of a function with no return statement?",
        options: [
          "undefined",
          "null",
          "0",
          "false"
        ],
        correctAnswer: 0
      },
      {
        question: "What is function hoisting?",
        options: [
          "Functions can be called before they are defined",
          "Functions are deleted after use",
          "Functions are only available in global scope",
          "Functions cannot access variables"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the difference between parameters and arguments?",
        options: [
          "Parameters are in function definition, arguments are in function call",
          "They are the same",
          "Arguments are in function definition, parameters are in function call",
          "Parameters are only for arrow functions"
        ],
        correctAnswer: 0
      }
    ],
    "Arrow Functions and ES6 Syntax": [
      {
        question: "What is a key difference between arrow functions and regular functions?",
        options: [
          "Arrow functions do not have their own 'this'",
          "Arrow functions can be used as constructors",
          "Arrow functions are always async",
          "Arrow functions require the function keyword"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you write an arrow function with one parameter?",
        options: [
          "param => expression",
          "(param) => { expression }",
          "function(param) => expression",
          "=> param { expression }"
        ],
        correctAnswer: 0
      },
      {
        question: "What does implicit return mean in arrow functions?",
        options: [
          "Return value without curly braces",
          "Return value with curly braces",
          "No return value",
          "Return value only for async functions"
        ],
        correctAnswer: 0
      }
    ],
    "Objects and Object Literals": [
      {
        question: "How do you access a property of an object?",
        options: [
          "object.property",
          "object->property",
          "object[property] only",
          "object::property"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the 'this' keyword in an object method?",
        options: [
          "Refers to the object itself",
          "Refers to the global object",
          "Refers to the parent function",
          "Refers to a variable"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you add a new property to an object?",
        options: [
          "object.newProp = value;",
          "object->newProp = value;",
          "object.add(newProp, value);",
          "object::newProp = value;"
        ],
        correctAnswer: 0
      }
    ],
    "Arrays and Array Methods": [
      {
        question: "Which method adds an item to the end of an array?",
        options: [
          "push",
          "pop",
          "shift",
          "unshift"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you loop through all items in an array?",
        options: [
          "forEach",
          "for",
          "while",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "What does indexOf return if the item is not found?",
        options: [
          "-1",
          "0",
          "null",
          "false"
        ],
        correctAnswer: 0
      }
    ],

    "Strings and String Methods": [
    {
      question: "Which method is used to find the length of a string?",
      options: ["length()", "getLength()", "length"],
      correctAnswer: 2
    },
    {
      question: "What does the 'toUpperCase()' method do?",
      options: ["Converts all characters to lowercase", "Converts all characters to uppercase", "Removes whitespace"],
      correctAnswer: 1
    },
    {
      question: "Which method is used to find a substring within a string?",
      options: ["includes()", "search()", "Both"],
      correctAnswer: 2
    }
  ],
  "Numbers and Math": [
    {
      question: "Which object is used for mathematical operations in JavaScript?",
      options: ["Number", "Math", "Calc"],
      correctAnswer: 1
    },
    {
      question: "What does Math.floor(4.7) return?",
      options: ["5", "4.7", "4"],
      correctAnswer: 2
    },
    {
      question: "Which method returns a random number between 0 and 1?",
      options: ["Math.random()", "Math.rand()", "random()"],
      correctAnswer: 0
    }
  ],
  "Date and Time Handling": [
    {
      question: "Which object is used to work with dates in JavaScript?",
      options: ["Clock", "Time", "Date"],
      correctAnswer: 2
    },
    {
      question: "How do you get the current year from a Date object?",
      options: ["getYear()", "getFullYear()", "getCurrentYear()"],
      correctAnswer: 1
    },
    {
      question: "What does new Date().getDay() return?",
      options: ["The current day of the week (0-6)", "The date of the month", "The full date string"],
      correctAnswer: 0
    }
  ],
  "Error Handling and Debugging": [
    {
      question: "Which block is used to catch errors in JavaScript?",
      options: ["catch", "try-catch", "error-catch"],
      correctAnswer: 1
    },
    {
      question: "What method logs information to the browser console?",
      options: ["console.log()", "log.console()", "log()"],
      correctAnswer: 0
    },
    {
      question: "What keyword is used to throw a custom error?",
      options: ["raise", "throw", "error"],
      correctAnswer: 1
    }
  ],
  "DOM Manipulation Basics": [
    {
      question: "Which method is used to select an element by ID?",
      options: ["getElementById()", "querySelectorAll()", "getElementByClass()"],
      correctAnswer: 0
    },
    {
      question: "How do you change the text content of an element?",
      options: ["element.text()", "element.innerText", "element.contentText"],
      correctAnswer: 1
    },
    {
      question: "Which method adds a new element to the DOM?",
      options: ["appendChild()", "createElement()", "insertNode()"],
      correctAnswer: 0
    }
  ],
  "DOM Events and Listeners": [
    {
      question: "Which method adds an event listener to an element?",
      options: ["addEvent()", "attachEvent()", "addEventListener()"],
      correctAnswer: 2
    },
    {
      question: "Which event is triggered when a button is clicked?",
      options: ["submit", "click", "hover"],
      correctAnswer: 1
    },
    {
      question: "What does preventDefault() do?",
      options: ["Stops event propagation", "Prevents default browser action", "Removes event listener"],
      correctAnswer: 1
    }
  ],
  "Forms and User Input": [
    {
      question: "Which attribute is used to bind a form element to a JavaScript variable?",
      options: ["value", "bind", "id"],
      correctAnswer: 0
    },
    {
      question: "What does the submit event do?",
      options: ["Saves the form", "Sends form data to the server", "Refreshes the page"],
      correctAnswer: 1
    },
    {
      question: "Which method retrieves the value from an input field?",
      options: ["input.value", "getValue()", "readInput()"],
      correctAnswer: 0
    }
  ],
  "Timers and Asynchronous Operations": [
    {
      question: "Which method sets a delay for code execution?",
      options: ["setTimeout()", "wait()", "delay()"],
      correctAnswer: 0
    },
    {
      question: "Which method repeats code at regular intervals?",
      options: ["setTimeout()", "setInterval()", "loop()"],
      correctAnswer: 1
    },
    {
      question: "Which keyword can pause code execution in async functions?",
      options: ["wait", "pause", "await"],
      correctAnswer: 2
    }
  ],
  "JSON and Data Handling": [
    {
      question: "Which method converts a JavaScript object to a JSON string?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.encode()"],
      correctAnswer: 0
    },
    {
      question: "Which method parses a JSON string to a JavaScript object?",
      options: ["JSON.stringify()", "JSON.parse()", "parseJSON()"],
      correctAnswer: 1
    },
    {
      question: "What data type is returned by JSON.parse()?",
      options: ["string", "JSON", "object"],
      correctAnswer: 2
    }
  ],
   "Local Storage and Session Storage": [
    {
      question: "What is the main difference between localStorage and sessionStorage?",
      options: [
        "localStorage is faster than sessionStorage",
        "localStorage persists until manually cleared, sessionStorage expires when tab closes",
        "sessionStorage has more storage capacity",
        "localStorage only works in Chrome"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method is used to store data in localStorage?",
      options: [
        "localStorage.store(key, value)",
        "localStorage.setItem(key, value)",
        "localStorage.save(key, value)",
        "localStorage.add(key, value)"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens when you try to store an object directly in localStorage?",
      options: [
        "It stores the object as-is",
        "It throws an error",
        "It converts the object to '[object Object]'",
        "It automatically serializes to JSON"
      ],
      correctAnswer: 2
    }
  ],

  "ES6+ Features Overview": [
    {
      question: "Which of these is NOT an ES6+ feature?",
      options: [
        "Arrow functions",
        "let and const keywords",
        "var keyword",
        "Template literals"
      ],
      correctAnswer: 2
    },
    {
      question: "What does ES6 stand for?",
      options: [
        "ECMAScript 6",
        "European Script 6",
        "Enhanced Script 6",
        "Extended Script 6"
      ],
      correctAnswer: 0
    },
    {
      question: "Which ES6 feature allows defining default parameter values?",
      options: [
        "Default parameters",
        "Parameter defaults",
        "Optional parameters",
        "Preset parameters"
      ],
      correctAnswer: 0
    }
  ],

  "Template Literals and String Interpolation": [
    {
      question: "Which character is used to create template literals?",
      options: [
        "Single quotes (')",
        "Double quotes (\")",
        "Backticks (`)",
        "Forward slashes (/)"
      ],
      correctAnswer: 2
    },
    {
      question: "How do you embed expressions in template literals?",
      options: [
        "${expression}",
        "#{expression}",
        "@{expression}",
        "%{expression}"
      ],
      correctAnswer: 0
    },
    {
      question: "What advantage do template literals have over string concatenation?",
      options: [
        "Faster execution",
        "Multi-line strings and expression embedding",
        "Less memory usage",
        "Better browser support"
      ],
      correctAnswer: 1
    }
  ],

  "Destructuring Assignment": [
    {
      question: "What does array destructuring allow you to do?",
      options: [
        "Destroy arrays",
        "Extract values from arrays into variables",
        "Sort array elements",
        "Remove array elements"
      ],
      correctAnswer: 1
    },
    {
      question: "Which syntax is correct for object destructuring?",
      options: [
        "let [name, age] = person",
        "let {name, age} = person",
        "let (name, age) = person",
        "let <name, age> = person"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you provide default values in destructuring?",
      options: [
        "let {name = 'John'} = obj",
        "let {name || 'John'} = obj",
        "let {name default 'John'} = obj",
        "let {name ? 'John'} = obj"
      ],
      correctAnswer: 0
    }
  ],

  "Spread and Rest Operators": [
    {
      question: "What symbol represents both spread and rest operators?",
      options: [
        "...",
        "***",
        "^^^",
        "&&&"
      ],
      correctAnswer: 0
    },
    {
      question: "When is the rest operator used?",
      options: [
        "To spread array elements",
        "To collect remaining elements into an array",
        "To copy objects",
        "To pause execution"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the spread operator do with arrays?",
      options: [
        "Sorts the array",
        "Expands array elements individually",
        "Reverses the array",
        "Filters the array"
      ],
      correctAnswer: 1
    }
  ],

  "Modules and Imports": [
    {
      question: "Which keyword is used to export a default value from a module?",
      options: [
        "export",
        "export default",
        "default export",
        "module.exports"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you import a default export?",
      options: [
        "import {default} from 'module'",
        "import default from 'module'",
        "import myModule from 'module'",
        "import * from 'module'"
      ],
      correctAnswer: 2
    },
    {
      question: "What does 'import * as utils from \"./utils\"' do?",
      options: [
        "Imports only the default export",
        "Imports all exports as a single object",
        "Imports nothing",
        "Causes a syntax error"
      ],
      correctAnswer: 1
    }
  ],

  "Closures and Lexical Scope": [
    {
      question: "What is a closure in JavaScript?",
      options: [
        "A way to close functions",
        "A function with access to outer scope variables",
        "A method to end loops",
        "A type of object"
      ],
      correctAnswer: 1
    },
    {
      question: "When are closures created?",
      options: [
        "When a function is called",
        "When a function is defined",
        "When variables are declared",
        "When loops are executed"
      ],
      correctAnswer: 1
    },
    {
      question: "What does lexical scope mean?",
      options: [
        "Variables are scoped based on where they're written",
        "Variables are scoped based on when they're called",
        "Variables have no scope",
        "Variables are globally scoped"
      ],
      correctAnswer: 0
    }
  ],

  "Callbacks and Higher-Order Functions": [
    {
      question: "What is a callback function?",
      options: [
        "A function that calls itself",
        "A function passed as an argument to another function",
        "A function that returns a value",
        "A function that handles errors"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a higher-order function?",
      options: [
        "A function with more parameters",
        "A function that takes or returns other functions",
        "A function with higher priority",
        "A function that runs faster"
      ],
      correctAnswer: 1
    },
    {
      question: "Which array method is an example of using callbacks?",
      options: [
        "length",
        "push",
        "map",
        "reverse"
      ],
      correctAnswer: 2
    }
  ],

  "Promises and Async Programming": [
    {
      question: "What are the three states of a Promise?",
      options: [
        "start, middle, end",
        "pending, fulfilled, rejected",
        "waiting, success, failure",
        "new, running, complete"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method is used to handle Promise rejection?",
      options: [
        ".then()",
        ".catch()",
        ".finally()",
        ".reject()"
      ],
      correctAnswer: 1
    },
    {
      question: "What does Promise.all() do?",
      options: [
        "Runs promises sequentially",
        "Waits for all promises to resolve or any to reject",
        "Cancels all promises",
        "Creates multiple promises"
      ],
      correctAnswer: 1
    }
  ],

  "Async/Await Syntax": [
    {
      question: "Which keyword must be used before a function to use await inside it?",
      options: [
        "sync",
        "async",
        "await",
        "promise"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the await keyword do?",
      options: [
        "Creates a new promise",
        "Pauses execution until promise resolves",
        "Rejects a promise",
        "Cancels a promise"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you handle errors with async/await?",
      options: [
        "try/catch blocks",
        ".catch() method only",
        "if/else statements",
        "Error callbacks"
      ],
      correctAnswer: 0
    }
  ],

  "Fetch API and AJAX": [
    {
      question: "What does the Fetch API return?",
      options: [
        "JSON data directly",
        "A Promise",
        "An XML response",
        "A callback function"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method converts a fetch response to JSON?",
      options: [
        "response.json()",
        "response.toJSON()",
        "JSON.parse(response)",
        "response.data()"
      ],
      correctAnswer: 0
    },
    {
      question: "What does AJAX stand for?",
      options: [
        "Asynchronous JavaScript and XML",
        "Advanced JavaScript and XML",
        "Automatic JavaScript and XML",
        "Active JavaScript and XML"
      ],
      correctAnswer: 0
    }
  ],

  "Error Handling in Async Code": [
    {
      question: "How do you catch errors in a Promise chain?",
      options: [
        "try/catch",
        ".catch()",
        "if/else",
        ".error()"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens if you don't handle a rejected Promise?",
      options: [
        "Nothing happens",
        "The program stops",
        "An unhandled promise rejection warning",
        "It automatically retries"
      ],
      correctAnswer: 2
    },
    {
      question: "Which block runs regardless of success or failure in try/catch?",
      options: [
        "catch",
        "try",
        "finally",
        "else"
      ],
      correctAnswer: 2
    }
  ],

  "Array Iteration Methods": [
    {
      question: "Which array method creates a new array with transformed elements?",
      options: [
        "forEach",
        "map",
        "filter",
        "reduce"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the filter() method return?",
      options: [
        "A single value",
        "A new array with elements that pass a test",
        "The original array modified",
        "A boolean value"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method reduces an array to a single value?",
      options: [
        "map",
        "filter",
        "reduce",
        "find"
      ],
      correctAnswer: 2
    }
  ],

  "Functional Programming Concepts": [
    {
      question: "What is a pure function?",
      options: [
        "A function that only uses numbers",
        "A function with no side effects that returns the same output for same input",
        "A function that's well-written",
        "A function that runs fast"
      ],
      correctAnswer: 1
    },
    {
      question: "What does immutability mean in functional programming?",
      options: [
        "Functions cannot be changed",
        "Data cannot be modified after creation",
        "Variables cannot be declared",
        "Objects must be mutable"
      ],
      correctAnswer: 1
    },
    {
      question: "Which principle is central to functional programming?",
      options: [
        "Object inheritance",
        "Function composition",
        "Variable mutation",
        "Global state"
      ],
      correctAnswer: 1
    }
  ],

  "Event Delegation": [
    {
      question: "What is event delegation?",
      options: [
        "Assigning events to individual elements",
        "Using a parent element to handle events for child elements",
        "Removing event listeners",
        "Creating custom events"
      ],
      correctAnswer: 1
    },
    {
      question: "Why is event delegation useful?",
      options: [
        "It's faster to write",
        "It works with dynamically added elements",
        "It uses less memory",
        "Both B and C"
      ],
      correctAnswer: 3
    },
    {
      question: "Which property helps identify the actual clicked element in event delegation?",
      options: [
        "event.currentTarget",
        "event.target",
        "event.element",
        "event.source"
      ],
      correctAnswer: 1
    }
  ],

  "Custom Events": [
    {
      question: "Which constructor is used to create custom events?",
      options: [
        "Event()",
        "CustomEvent()",
        "NewEvent()",
        "CreateEvent()"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you trigger a custom event?",
      options: [
        "element.fire(event)",
        "element.trigger(event)",
        "element.dispatchEvent(event)",
        "element.emit(event)"
      ],
      correctAnswer: 2
    },
    {
      question: "What parameter allows you to pass data with custom events?",
      options: [
        "data",
        "detail",
        "payload",
        "info"
      ],
      correctAnswer: 1
    }
  ],

  "Regular Expressions": [
    {
      question: "How do you create a regular expression in JavaScript?",
      options: [
        "/pattern/ or new RegExp('pattern')",
        "regex('pattern')",
        "pattern.regex()",
        "new Regex('pattern')"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the 'g' flag do in regular expressions?",
      options: [
        "Makes it case-insensitive",
        "Global search (find all matches)",
        "Groups the matches",
        "Generates the pattern"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method tests if a string matches a regex pattern?",
      options: [
        "match()",
        "search()",
        "test()",
        "find()"
      ],
      correctAnswer: 2
    }
  ],

  "Prototypes and Inheritance": [
    {
      question: "What is the prototype in JavaScript?",
      options: [
        "A template for creating objects",
        "An object that provides shared properties and methods",
        "A function parameter",
        "A variable type"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you access an object's prototype?",
      options: [
        "object.prototype",
        "object.__proto__",
        "object.getPrototype()",
        "prototype(object)"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens when you access a property that doesn't exist on an object?",
      options: [
        "An error is thrown",
        "undefined is returned immediately",
        "JavaScript looks up the prototype chain",
        "null is returned"
      ],
      correctAnswer: 2
    }
  ],

  "Classes and OOP in JavaScript": [
    {
      question: "Which keyword is used to define a class in ES6?",
      options: [
        "function",
        "class",
        "object",
        "constructor"
      ],
      correctAnswer: 1
    },
    {
      question: "What method is automatically called when creating a new instance of a class?",
      options: [
        "init()",
        "create()",
        "constructor()",
        "new()"
      ],
      correctAnswer: 2
    },
    {
      question: "Which keyword is used to inherit from another class?",
      options: [
        "inherits",
        "extends",
        "implements",
        "derives"
      ],
      correctAnswer: 1
    }
  ],

  "Project: Interactive Web App": [
    {
      question: "What is essential for creating an interactive web application?",
      options: [
        "Only HTML and CSS",
        "Event listeners and DOM manipulation",
        "Only server-side code",
        "Only JavaScript frameworks"
      ],
      correctAnswer: 1
    },
    {
      question: "Which approach helps organize code in larger web applications?",
      options: [
        "Writing all code in one file",
        "Using modules and separating concerns",
        "Avoiding functions",
        "Using only global variables"
      ],
      correctAnswer: 1
    },
    {
      question: "What should you consider for user experience in interactive apps?",
      options: [
        "Only functionality",
        "Performance and accessibility",
        "Only visual design",
        "Only browser compatibility"
      ],
      correctAnswer: 1
    }
  ],

  "Best Practices and Code Style": [
    {
      question: "Which variable declaration should you prefer in modern JavaScript?",
      options: [
        "var",
        "let and const",
        "global variables",
        "no declaration"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a recommended naming convention for JavaScript variables?",
      options: [
        "snake_case",
        "camelCase",
        "PascalCase",
        "kebab-case"
      ],
      correctAnswer: 1
    },
    {
      question: "Which practice improves code readability and maintainability?",
      options: [
        "Writing long functions",
        "Using meaningful names and adding comments",
        "Avoiding function parameters",
        "Using only single-letter variables"
      ],
      correctAnswer: 1
    }
  ]
    
  };
  return quizzes[lessonTitle] || [
    {
      question: `What is the main concept of ${lessonTitle.toLowerCase()}?`,
      options: ["Correct answer", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0
    },
    {
      question: `Which of the following is true about ${lessonTitle.toLowerCase()}?`,
      options: ["Correct statement", "False statement 1", "False statement 2", "False statement 3"],
      correctAnswer: 0
    },
    {
      question: `What is the best practice for ${lessonTitle.toLowerCase()}?`,
      options: ["Best practice", "Common mistake 1", "Common mistake 2", "Common mistake 3"],
      correctAnswer: 0
    }
  ]
}

module.exports = {
    getJSLessonConcepts,
    getJSCodeExample,
    getJSCodeExplanation,
    getJSExercises,
    getJSQuiz
    };