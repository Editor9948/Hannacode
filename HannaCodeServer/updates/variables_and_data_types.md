# Variables and Data Types

## Overview
This lesson demonstrates JavaScript variable declarations, type checking, and type conversion using three concise examples.

### Code Examples
```javascript
// Example 1: Variable Declarations
let name = "Alice"; // string
const age = 30; // number
let isStudent = true; // boolean
let score = null; // null
let data; // undefined
const id = Symbol('id'); // symbol
const bigNum = 9007199254740991n; // bigint

// Example 2: Type Checking
console.log(typeof name); // "string"
console.log(typeof age); // "number"
console.log(typeof isStudent); // "boolean"
console.log(typeof score); // "object"
console.log(typeof data); // "undefined"
console.log(typeof id); // "symbol"
console.log(typeof bigNum); // "bigint"

// Example 3: Type Conversion
console.log(String(age)); // "30"
console.log(Number("123")); // 123
console.log(Boolean(1)); // true
```

### Explanation
### Example 1
Uses `let` for mutable, `const` for immutable values. Shows all main primitive types including `Symbol` and `BigInt`.

### Example 2
Applies `typeof` to inspect runtime types. Note that `null` returns `"object"` (legacy quirk).

### Example 3
Demonstrates explicit conversion helpers: `String()`, `Number()`, and `Boolean()`.

### Practice Exercises
1. Declare one variable of each primitive type and log its `typeof`.
2. Convert a number to string, string to number, and value to boolean.
3. Create a summary object describing each variable.

## Additional Resources
- MDN: JavaScript Data Types
- MDN: typeof Operator
- MDN: Type Conversion

## Quiz
(Your quiz content here)
