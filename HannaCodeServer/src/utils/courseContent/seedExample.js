const { MongoClient } = require('mongodb');

const { getJSCodeExample } = require('./javascript.js');


// List of lesson titles you want to seed
const lessonTitles = [
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
];

async function seed() {
  const uri = 'mongodb+srv://olotuoladapo:Editoroladapo9948@cluster0.jxpglfb.mongodb.net/hannacode?retryWrites=true&w=majority&appName=Cluster0'
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db('hannacode'); // Change to your DB name
    const collection = db.collection('codeexample');

    // Optional: clear the collection first
    await collection.deleteMany({ language: 'javascript' });

    for (const title of lessonTitles) {
      const code = getJSCodeExample(title);
  
      await collection.insertOne({
        language: 'javascript',
        title,
        code
      });
      console.log(`Inserted example for: ${title}`);
    }

    console.log('Seeding complete!');
  } catch (err) {
    console.error('Error seeding examples:', err);
  } finally {
    await client.close();
  }
}

seed();