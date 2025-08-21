
const getDartLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to Dart & Setup": `
- What is Dart? History, philosophy, and ecosystem
- Installing Dart SDK
- Setting up IDE/editor (VS Code, IntelliJ)
- Dart extensions and plugins
- Creating and running your first Dart program
- Dart compilation modes: JIT vs AOT
`,
    "Variables and Data Types": `
- Variable declaration (var, final, const, late)
- Built-in data types (int, double, String, bool)
- Type inference and explicit typing`,

   "String interpolation and manipulation":`
- Numeric type conversion
`,
      "Operators in Dart":`
- Arithmetic operators (+, -, *, /, %, ~/)
- Logical operators (&&, ||, !)
- Comparison operators (==, !=, <, >, <=, >=)
- Assignment operators (=, +=, -=, *=, /=, etc.)
- Operator precedence and associativity`,

    "Conditional Statements in Dart": `
- if, else if, else statements
- Ternary operator (condition ? expr1 : expr2)
- Conditional expressions (?? and ??=)
- Switch statements and pattern matching
`,
      "Loops and Loop Control in Dart":`
- for loops (traditional, for-in, forEach)
- while loops
- do-while loops
- break and continue statements
- Loop control with labels`,

    "Functions in Dart": `
- Function declaration and syntax
- Arrow functions
- Anonymous functions
- Higher-order functions and callbacks
`,
       "Function Parameters and Scope in Dart":`
- Positional vs named parameters
- Optional parameters and default values
- Function scope (local, global)
- Closures and variable capturing`,

    "Collections (Lists and Sets)": `
- List creation, manipulation, and methods
- Set operations and uniqueness constraints
- Collection literals and constructors
- Spread operator and collection-if/for`,
    
     "Maps and Iterable Methods in Dart":`
- Map key-value operations and iteration
- Iterable methods (map, filter, reduce, etc.)
`,
    "Object-Oriented Programming in Dart": `
- Class definition and instantiation
- Constructors (default, named, factory)
- Instance variables and methods
- Static members and class-level functionality`,

      "Encapsulation and Polymorphism":`
- Encapsulation and access modifiers
- Method overriding and polymorphism
`,
    "Inheritance,  Abstract classes": `
- Single inheritance and extends keyword
- Abstract classes and abstract methods
- Super keyword and parent class access`,
  
      "Interfaces, Mixins, and Method Overriding":`
- Interfaces and implements keyword
- Mixins and multiple inheritance patterns
- Override annotations and method signatures
`,
    "Null Safety & Type System": `
- Understanding null safety fundamentals
- Nullable vs non-nullable types
- Null-aware operators (?, ??, ??=, ?.)
- Late initialization and lazy evaluation
- Type promotion and flow analysis
- Migration strategies for legacy code
`,
    "Error Handling & Exceptions": `
- Try-catch-finally blocks
- Throwing custom exceptions
- Built-in exception types
- Exception hierarchy and handling strategies
- Assert statements for debugging
- Stack traces and error debugging
`,
    "Asynchronous Programming (Future, async/await, Streams)": `
- Understanding asynchronous vs synchronous execution
- Future basics and completion handling
- Async/await syntax and error handling
- Stream creation and subscription
- Stream transformations and operations
- Isolates for concurrent programming
`,
    "Generics in Dart": `
- Generic classes and type parameters
- Generic methods and functions
- Type constraints and bounded generics
- Generic collections and type safety
- Variance and covariance concepts
- Type erasure and runtime behavior
`,
    "Dart Packages & Pub.dev": `
- Understanding pubspec.yaml configuration
- Adding and managing dependencies
- Publishing packages to pub.dev
- Package versioning and semantic versioning
- Local package development and path dependencies
- Popular Dart packages and ecosystem overview
`,
    "Mini Project: CLI Tool or Simple API Consumer": `
- Project planning and structure setup
- Command-line argument parsing
- File I/O operations and data persistence
- HTTP requests and JSON parsing
- Error handling in real applications
- Testing and documentation best practices
- Packaging and distribution strategies
`,
  };
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3";
};

const getDartCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to Dart & Setup": `
// Example 1: 
// main.dart
void main() {
  print('Hello, Dart! 👋');
}`,

  "Variables and Data Types": `
// Example 1: Variable declaration (var)
void main() {
var name = "Alice"; // Dart infers String type
print(name);

// name = 123; // This would cause a compile-time error because name is already a String

var age = 30; // Dart infers int type
print(age);
var price = 19.99; // Dart infers double type
print(price);
}

// Example 2: Variable declaration (final)
void main() {
final String firstName = "Bob";
 // firstName = "Robert"; // Error: A final variable can only be set once.

 print(firstName);
final DateTime now = DateTime.now(); // Value determined at runtime
print(now);

// Example with type inference
final lastName = "Smith"; // Inferred as String
print(lastName);
}

// Example 3:  Variable declaration (const)
void main() {
const double PI = 3.14159;
// PI = 3.0; // Error: Constant variables can't be assigned a value.
print(PI);

const String GREETING = "Hello, Dart!";
print(GREETING);
// const DateTime compileTime = DateTime.now(); // Error: Not a compile-time constant
}

// Example 4: Variable declaration (late)
late String description; // Declared but not initialized
void main() {
description = "This is a late-initialized string."; // Initialized later
print(description);

late int expensiveCalculation = _performExpensiveCalculation();
print("Accessing expensiveCalculation...");
print(expensiveCalculation); // _performExpensiveCalculation() is called here
}

int _performExpensiveCalculation() {
print("Performing expensive calculation...");
// Simulate a time-consuming operation
return 42;
}

// Example 5: Built-in data types (int)
void main() {
int age = 25;
int temperature = -10;
print("Age: $age");
print("Temperature: $temperature");
}

// Example 6: Built-in data types (double) 
  void main() {
double price = 99.99;
double gravity = 9.81;
print("Price: $price");
print("Gravity: $gravity");
}

// Example 7: Built-in data types (num)
void main() {
num quantity = 10; // Can be int
print("Quantity: $quantity");
quantity = 15.5; // Can be double
print("Quantity: $quantity");
}

// Example 8:  Built-in data types (String)
void main() {
String greeting = "Hello, Dart!";
String message = 'Welcome to the world of Flutter.';
print(greeting);
print(message);

  // Multi-line strings
String multiLineString = """
This is a multi-line string.
It can span multiple lines
without using newline characters.\n
""";

print(multiLineString);
String rawString = r"C:\Program Files\Dart"; // Raw string, ignores escape sequences
print(rawString);
}

// Example 9:  Built-in data types (bool)
void main() {
bool isActive = true;
bool hasPermission = false;
print("Is active: $isActive");
print("Has permission: $hasPermission");

if (isActive) {
print("User is active.");
   }
}

// Example 10: Type Inference
void main() {
var count = 100; // Inferred as int
var name = "Dart"; // Inferred as String
var isReady = true; // Inferred as bool
var temperature = 25.5; // Inferred as double
print("Count: $\{count.runtimeType}");
print("Name: $\{name.runtimeType}");
print("Is Ready: $\{isReady.runtimeType}");
print("Temperature: $\{temperature.runtimeType}");
}

// Example 11: Explicit Typing
 void main() {
int quantity = 50;
String productName = "Laptop";
bool isValid = false;
double discount = 0.15;
print("Quantity: $quantity");
print("Product Name: $productName");
print("Is Valid: $isValid");
print("Discount: $discount");
}

// Example 12: When to use which
void main() {
  // Explicit typing for clarity, especially for complex types or APIs
List<String> names = ["Alice", "Bob"];
Map<String, int> scores = {"Alice": 95, "Bob": 88};
  // Type inference for local variables where type is clear
var totalScore = 0;
for (var score in scores.values) {
totalScore += score;
}
print("Total Score: $totalScore");`,

 "String interpolation and manipulation":`
// Example 1: String Interpolation
void main() {
 String name = 'Alice';
 int age = 30;
 double price = 19.99;
 // Simple interpolation with identifier
 String greeting = 'Hello, $name!';
 print(greeting);
 // Interpolation with expression
 String userInfo = 'Name: $name, Age: $\{age + 1}. Next year, you will be 
$\{age + 1} years old.';
 print(userInfo);
 // Interpolation with method call
 String productInfo = 'The product costs \$$price. Total with tax: 
\$$\{(price * 1.05).toStringAsFixed(2)}.';
 print(productInfo);
}

// Example 2: String Manipulation Methods
void main() {
 String text = ' Hello Dart World ';
   // Length of the string
 print('Length: $\{text.length}'); // Output: 20
    // Trim whitespace from both ends
 String trimmedText = text.trim();
 print('Trimmed: "$trimmedText"'); // Output: 
Trimmed: "$trimmedText""); // Output: "Hello Dart World"
   // Convert to uppercase and lowercase
 print("Uppercase: $\{trimmedText.toUpperCase()}"); // Output: Uppercase: 
HELLO DART WORLD
 print("Lowercase: $\{trimmedText.toLowerCase()}"); // Output: Lowercase: 
hello dart world

  // Check if string contains a substring
 print("Contains 'Dart': $\{trimmedText.contains('Dart')}"); // Output: 
Contains 'Dart': true
 print("Contains 'Java': $\{trimmedText.contains('Java')}"); // Output: 
Contains 'Java': false

   // Replace parts of a string
 String replacedText = trimmedText.replaceAll('Dart', 'Flutter');
 print("Replaced: $replacedText"); // Output: Replaced: Hello Flutter World

    // Split a string into a list
 List<String> words = trimmedText.split(' ');
 print("Words: $words"); // Output: Words: [Hello, Dart, World]
 
   // Get a substring
 String sub = trimmedText.substring(6, 10); // from index 6 (inclusive) to 
10 (exclusive)
 print("Substring: $sub"); // Output: Substring: Dart

    // Check if string starts or ends with a specific string
 print("Starts with 'Hello': $\{trimmedText.startsWith('Hello')}"); // 
Output: Starts with 'Hello': true
 print("Ends with 'World': $\{trimmedText.endsWith('World')}"); // Output: 
Ends with 'World': true
}
 
// Example 3: Numeric type conversion
void main() {
 int myInt = 10;
 double myDouble = 20.5;

    // int to double
 double intToDouble = myInt.toDouble();
 print("int to double: $intToDouble"); // Output: int to double: 10.0
  
   // double to int (truncates decimal part)
 int doubleToInt = myDouble.toInt();
 print("double to int: $doubleToInt"); // Output: double to int: 20
 
   // String to int
 String strInt = "123";
 int parsedInt = int.parse(strInt);
 print("String to int: $parsedInt"); // Output: String to int: 123
 
   // String to double
 String strDouble = "45.67";
 double parsedDouble = double.parse(strDouble);
 print("String to double: $parsedDouble"); // Output: String to double: 
45.67
  
   // Handling parsing errors
 String invalidStr = "abc";
 try {
 int invalidParsedInt = int.parse(invalidStr);
 print("Invalid String to int: $invalidParsedInt");
 } catch (e) {
 print("Error parsing '$invalidStr' to int: $e");
 // Output: Error parsing 'abc' to int: FormatException: Invalid radix-10 
number (at character 1)
 // abc
 // ^
 }

   // Using tryParse for safe conversion (returns null on error)
 int? safeParsedInt = int.tryParse(invalidStr);
 print("Safe parse (null on error): $safeParsedInt"); // Output: Safe parse 
(null on error): null
 
   // int/double to String
 String intToStr = myInt.toString();
 String doubleToStr = myDouble.toString();
 print("int to String: $intToStr"); // Output: int to String: 10
 print("double to String: $doubleToStr"); // Output: double to String: 20.5
  
   // Formatting double to a specific number of decimal places
 double value = 123.45678;
 String formattedValue = value.toStringAsFixed(2);
 print("Formatted double: $formattedValue"); // Output: Formatted double: 
123.46
}`,

   "Operators in Dart":`
// Example 1: Arithmetic Operators
void main() {
int a = 10;
int b = 3;
print("a + b = $\{a + b}"); // 13
print("a - b = $\{a - b}"); // 7
print("a * b = $\{a * b}"); // 30
print("a / b = $\{a / b}"); // 3.333...
print("a % b = $\{a % b}"); // 1
print("a ~/ b = $\{a ~/ b}"); // 3
}

// Example 2: Logical Operators 
 void main() {
bool isSunny = true;
bool isWarm = false;
print("isSunny && isWarm: $\{isSunny && isWarm}"); // false
print("isSunny || isWarm: $\{isSunny || isWarm}"); // true
print("!isSunny: $\{!isSunny}"); // false
}

// Example 3: Comparison Operators
  void main() {
int x = 5;
int y = 10;
print("x == y: $\{x == y}"); // false
print("x != y: $\{x != y}"); // true
print("x < y: $\{x < y}"); // true
print("x > y: $\{x > y}"); // false
print("x <= 5: $\{x <= 5}"); // true
print("y >= 10: $\{y >= 10}"); // true
}
 
// Example 4: Assignment Operator
  void main() {
int num = 10;
print("Initial value: $num");

num += 5; // num = num + 5
print("After += 5: $num");

num -= 3; // num = num - 3
print("After -= 3: $num");

num *= 2; // num = num * 2
print("After *= 2: $num");

// Note: /= results in a double
double doubleNum = num.toDouble();
doubleNum /= 4; // doubleNum = doubleNum / 4
print("After /= 4: $doubleNum");
}

// Example 5: Operator precedence and associativity
void main() {
int result = 10 + 5 * 2; // 5 * 2 is evaluated first
print("10 + 5 * 2 = $result"); // 20

int anotherResult = (10 + 5) * 2; // Use parentheses to override precedence
print("(10 + 5) * 2 = $anotherResult"); // 30
}`,

   "Conditional Statements in Dart": `
// Example 1: if, else if, else statements
void main() {
int score = 85;
if (score >= 90) {
print("Grade: A");
 } else if (score >= 80) {
print("Grade: B");
 } else if (score >= 70) {
print("Grade: C");
 } else {
print("Grade: D");
 }
}

// Example 2: Ternary operator (condition ? expr1 : expr2 )
void main() {
int age = 20;
String message = age >= 18 ? "You are an adult." : "You are a minor.";
print(message);
}

// Example 3: Conditional expressions (?? and ??=)
void main() {
String? name; // Nullable string
String displayName = name ?? "Guest";
print("Display Name: $displayName"); // Guest
name = "Alice";
displayName = name ?? "Guest";
print("Display Name: $displayName"); // Alice
int? a;
a ??= 10;
print("a: $a"); // 10
a ??= 20;
print("a: $a"); // 10 (not reassigned)
}

// Example 4: Switch statements and pattern matching
void main() {
String command = "OPEN";
switch (command) {
case "OPEN":
print("Opening the file...");
break;
case "CLOSE":
print("Closing the file...");
break;
default:
print("Unknown command.");
   }

// Switch with pattern matching (Dart 3+)
var shape = ("circle", 5);
switch (shape) {
case ("circle", var radius):
print("Circle with radius $radius");
break;
case ("square", var side):
print("Square with side $side");
break;
default:
print("Unknown shape");
}
}`,

   "Loops and Loop Control in Dart":`
// Example 1: Traditional for loop
 void main() {
 for (int i = 1; i <= 5; i++) {
 print("Iteration $i");
  }
}

// Example 2: forEach loop
void main() {
List<int> numbers = [1, 2, 3, 4, 5];
numbers.forEach((number) {
print("Number: $number");
});

Set<String> uniqueItems = {"Pen", "Book", "Eraser"};
uniqueItems.forEach((item) => print("Item: $item")); // Using arrow function
}

// Example 3: while loops
void main() {
int i = 0;
while (i < 5) {
print("While count: $i");
i++;
  }
}

// Example 4: do-while loops
 void main() {
int i = 0;
do {
print("Do-While count: $i");
i++;
} while (i < 5);
// Example where condition is initially false
int j = 10;
do {
print("This will print once: $j");
j++;
} while (j < 5);
  }

// Example 5: break statement
 void main() {
for (int i = 0; i < 10; i++) {
if (i == 5) {
break; // Exit the loop when i is 5
}
print("Break example: $i");
}
print("Loop finished (break).");
  }

// Example 6: continue statement
void main() {
for (int i = 0; i < 10; i++) {
if (i % 2 == 0) {
continue; // Skip even numbers
}
print("Continue example (odd): $i");
  }
}

// Example 7: Loop control with labels
void main() {
 outerLoop: // Label for the outer loop
 for (int i = 1; i <= 3; i++) {
 innerLoop: // Label for the inner loop
  for (int j = 1; j <= 3; j++) {
    if (i == 2 && j == 2) {
     print("Breaking outer loop from inner loop.");
     break outerLoop; // Breaks the loop labeled 'outerLoop'
     }
    print("i: $i, j: $j");
    }
  }
}`,

    "Functions in Dart": `
// Example 1: Function declaration and syntax
   // Function with a return type and parameters
int add(int a, int b) {
 return a + b;
}

  // Function with no return value (void)
void printMessage(String message) {
 print(message);
}

  // Function with no parameters
String getGreeting() {
 return "Hello, Dart!";
}
void main() {
 int sum = add(5, 3);
 print("Sum: $sum");
 printMessage("This is a message.");
 String greeting = getGreeting();
 print(greeting);
}

// Example 2: Arrow functions
  // Arrow function for addition
int add(int a, int b) => a + b;

  // Arrow function with no return value
void printMessage(String message) => print(message);

void main() {
 print("Sum from arrow function: $\{add(10, 5)}");
 printMessage("Message from arrow function.");
}

// Example 3: Anonymous functions
void main() {
   // Assigning an anonymous function to a variable
var sayHello = (String name) {
print("Hello, $name from anonymous function!");
};
sayHello("Bob");

  // Using an anonymous function with forEach
List<int> numbers = [1, 2, 3];
numbers.forEach((number) {
print("Number squared: $\{number * number}");
});

  // Anonymous function with arrow syntax
numbers.forEach((number) => print("Number cubed: $\{number * number * number}"));
}

// Example 4: Higher-order functions and callbacks
void main() {
  // Example of a higher-order function
void executeOperation(int a, int b, Function operation) {
print("Result: $\{operation(a, b)}");
}
   // Passing an anonymous function as a callback
executeOperation(10, 5, (x, y) => x + y); // Addition
executeOperation(10, 5, (x, y) => x - y); // Subtraction

 n// Another example: filter a list
List<String> names = ["Alice", "Bob", "Anna", "Charlie"];
List<String> filteredNames = filterList(names, (name) => name.startsWith("A"));
print("Names starting with A: $filteredNames");
}

   // A higher-order function that filters a list based on a predicate function
List<T> filterList<T>(List<T> list, bool Function(T) predicate) {
List<T> result = [];
 for (var item in list) {
   if (predicate(item)) {
      result.add(item);
    }
  }
  return result;
}`,

    "Function Parameters and Scope in Dart":`
// Example 1: Positional Parameters
  void printInfo(String name, int age) {
 print("Name: $name, Age: $age");
}
void main() {
 printInfo("Alice", 30);
}

// Example 2: Named Parameters 
  void printDetails({String? name, int? age}) {
 print("Name: $\{name ?? 'N/A'}, Age: $\{age ?? 'N/A'}");
}
void main() {
 printDetails(name: "Bob", age: 25);
 printDetails(age: 40, name: "Charlie");
 printDetails(name: "David");
}

// Example 3: Optional Positional Parameters
   void main() {
sayGreeting("Hello");
sayGreeting("Hi", "Alice");
sayGreeting("Good morning", "Bob", "How are you?");
}
void sayGreeting(String greeting, [String? name, String? message]) {
String result = greeting;
if (name != null) {
result += ", $name";
}
 if (message != null) {
 result += ". $message";
 }
 print(result);
}
    
// Example 4: Optional Named Parameters with Default Values
   // Default values for named parameters
void setup({String theme = "light", bool notifications = true}) {
 print("Theme: $theme, Notifications: $notifications");
}

  // Default values for optional positional parameters
void connect(String host, [int port = 8080]) {
 print("Connecting to $host on port $port");
}
void main() {
 setup();
 setup(theme: "dark", notifications: false);
 connect("example.com");
 connect("api.example.com", 443);
}

// Example 5: Local Scope
void main() {
String globalMessage = "This is a global message."; // Global to main, but not truly
global
void myFunction() {
  String localVariable = "I am local to myFunction.";
  print(localVariable);
  print(globalMessage); // Can access variables from outer scope
}

myFunction();
  // print(localVariable); // Error: Undefined name 'localVariable'
}

  // Top-level variables have global scope within the file
String appName = "My Dart App";
void anotherFunction() {
print("Accessing global variable: $appName");
}

// Example 6: Global Scope (File-level Scope)
 // This is a top-level variable, accessible throughout this file
String applicationName = "AwesomeApp";
void printApplicationName() {
print("Application Name: $applicationName");
}
void main() {
printApplicationName();
print("From main: $applicationName");

// Variables declared inside main are local to main
String mainLocalVar = "Local to main";
print(mainLocalVar);
}
// print(mainLocalVar); // Error: Undefined name 'mainLocalVar'

// Example 7: Closures and variable capturing
void main() {
   //example 1 Counter closure
Function counter = createCounter();
print(counter()); // 1
print(counter()); // 2
print(counter()); // 3

  //example 2 Multiplier closure
Function multiplier = createMultiplier(5);
print(multiplier(2)); // 10
print(multiplier(3)); // 15
}

// This function returns another function (a closure)
Function createCounter() {
int count = 0; // This variable is 'captured' by the returned function
return () {
count++;
return count;
};
}

// This function returns a closure that multiplies by a given factor
Function createMultiplier(int factor) {
return (int number) => number * factor;
}`,
    
    "Collections (Lists and Sets)": `
// Example 1: List creation, manipulation, and methods
void main() {
 // List creation
List<int> numbers = [1, 2, 3, 4, 5];
print('Initial List: $numbers');

 // Accessing elements
print('First element: $\{numbers[0]}');
print('Last element: $\{numbers[numbers.length - 1]}');

 // Adding elements
numbers.add(6);
print('After adding 6: $numbers');
numbers.addAll([7, 8, 9]);
print('After adding 7, 8, 9: $numbers');

  // Removing elements
numbers.remove(3); // Removes the first occurrence of 3
print('After removing 3: $numbers');
numbers.removeAt(0); // Removes element at index 0
print('After removing element at index 0: $numbers');

  // Updating elements
numbers[0] = 10;
print('After updating first element to 10: $numbers');

  // List properties and methods
print('List length: $\{numbers.length}');
print('Is list empty? $\{numbers.isEmpty}');
print('Does list contain 5? $\{numbers.contains(5)}');

  // Iterating over a list
print('Iterating over list:');
for (int number in numbers) {
print(number);
}
  // Sublist
print('Sublist from index 1 to 3: $\{numbers.sublist(1, 4)}');
  // Sorting
List<String> fruits = ['banana', 'apple', 'cherry'];
fruits.sort();
print('Sorted fruits: $fruits');
  // Clearing a list
numbers.clear();
print('After clearing list: $numbers');
}

// Example 2: Set operations and uniqueness constraints
void main() {
  // Set creation
Set<int> uniqueNumbers = {1, 2, 3, 4, 5};
print('Initial Set: $uniqueNumbers');

  // Adding elements (duplicates are ignored)
uniqueNumbers.add(6);
uniqueNumbers.add(3); // This will be ignored
print('After adding 6 and 3: $uniqueNumbers');
uniqueNumbers.addAll({7, 8, 9, 1}); // 1 will be ignored
print('After adding 7, 8, 9, 1: $uniqueNumbers');

  // Removing elements
uniqueNumbers.remove(2);
print('After removing 2: $uniqueNumbers');

  // Set properties and methods
print('Set length: $\{uniqueNumbers.length}');
print('Is set empty? $\{uniqueNumbers.isEmpty}');
print('Does set contain 5? $\{uniqueNumbers.contains(5)}');

  // Set operations
Set<int> setA = {1, 2, 3, 4};
Set<int> setB = {3, 4, 5, 6};
print('Set A: $setA');
print('Set B: $setB');

  // Union: elements in A or B or both
print('Union (A U B): $\{setA.union(setB)}');

  // Intersection: elements common to A and B
print('Intersection (A \u2229 B): $\{setA.intersection(setB)}');

  // Difference: elements in A but not in B
print('Difference (A - B): $\{setA.difference(setB)}');
 
 // Checking subsets
Set<int> subset = {1, 2};
print('Is {1, 2} a subset of A? $\{setA.containsAll(subset)}');

  // Iterating over a set
print('Iterating over set:');
for (int number in uniqueNumbers) {
print(number);
}
  // Clearing a set
uniqueNumbers.clear();
print('After clearing set: $uniqueNumbers');
}

// Example 3: Collection literals and constructors
void main() {
  // List literals
List<int> list1 = [1, 2, 3];
List<String> list2 = ['a', 'b', 'c'];
print('List literals: $\`list1, \`$list2');

  // List constructors
List<int> fixedLengthList = List<int>.filled(3, 0); // Fixed-length list
print('Fixed-length list: $fixedLengthList');
List<int> growableList = List<int>.empty(growable: true);
growableList.add(10);
print('Growable list: $growableList');
List<int> listFromIterable = List<int>.from([1, 2, 3]);
print('List from iterable: $listFromIterable');
   // Set literals
Set<int> set1 = {1, 2, 3};
Set<String> set2 = {'x', 'y', 'z'};
print('Set literals: $\`set1, \`$set2');

   // Set constructors
Set<int> setFromList = Set<int>.from([1, 2, 2, 3]);
print('Set from list: $setFromList');
}

// Example 4: Spread operator and collection-if/for
void main() {
  // Spread operator (...)
List<int> listA = [1, 2, 3];
List<int> listB = [4, 5, 6];
List<int> combinedList = [...listA, ...listB];
print('Combined list using spread operator: $combinedList');
Set<int> setA = {10, 20, 30};
Set<int> setB = {30, 40, 50};
Set<int> combinedSet = {...setA, ...setB};
print('Combined set using spread operator: $combinedSet');

  // Null-aware spread operator (...?)
List<int>? nullableList = null;
List<int> safeCombinedList = [1, 2, ...?nullableList, 3, 4];
print('Safe combined list with null-aware spread: $safeCombinedList');
   
  // Collection-if
bool showExtra = true;
List<String> items = [
'item1',
'item2',
if (showExtra) 'extra_item',
'item3',
];
print('List with collection-if: $items');
   
  // Collection-for
List<int> numbers = [1, 2, 3];
List<int> doubledNumbers = [
for (var number in numbers) number * 2,
];
print('Doubled numbers using collection-for: $doubledNumbers');
Set<String> names = {'Alice', 'Bob'};
Set<String> greetings = {
for (var name in names) 'Hello $name',
};
print('Greetings using collection-for: $greetings');
}`,

  
     "Maps and Iterable Methods in Dart":`
// Example 1: Map Basic 
void main() {
Map<String, String> capitals = {"USA": "Washington D.C."};
print("Initial: $capitals");
capitals["Japan"] = "Tokyo";
print("After add: $capitals");
print("Capital of USA: $\`{capitals["USA"]}");
capitals.forEach((k, v) => print("$\`k: \`$v"));
}

// Example 2: Common Iterable Methods
void main() {
List<int> numbers = [1, 2, 3, 4, 5];
List<int> doubled = numbers.map((n) => n * 2).toList();
print("Doubled: $doubled"); // Output: Doubled: [2, 4, 6, 8, 10]
List<int> evens = numbers.where((n) => n % 2 == 0).toList();
print("Evens: $evens"); // Output: Evens: [2, 4]
int sum = numbers.fold(0, (acc, n) => \acc + n);
print("Sum: $sum"); // Output: Sum: 15
}`,

     "Object-Oriented Programming in Dart": `
// Example 1: Basic Class and Object
void main() {
   // Instantiation
Car myCar = Car("Toyota", "Camry", 2020);
print("My car: $\{myCar.make} $\{myCar.model}");
myCar.drive(60);
}
class Car {
String make; // Instance variable
String model;
int year;

   // Constructor
Car(this.make, this.model, this.year);

// Instance method
void drive(double speed) {
print("Driving at $speed km/h");
}
}

// Example 2: : Constructor Types
void main() {
Person p1 = Person("Alice", 30); // Default
Person baby = Person.baby("Bob"); // Named
Logger log = Logger("App"); // Factory
}

class Person {
String name; int age;
Person(this.name, this.age);
Person.baby(String name) : this(name, 0);
}

class Logger {
final String name;
static final Map<String, Logger> _cache = {};
factory Logger(String name) {
if (_cache.containsKey(name)) return _cache[name]!;
final logger = Logger._internal(name);
_cache[name] = logger; return logger;
}
Logger._internal(this.name);
}

// Example 3: Instance Members
void main() {
BankAccount acc = BankAccount("John Doe", 1000.0);
print("Balance: $\{acc.balance}"); // Accessing getter
acc.deposit(500.0);
}
class BankAccount {
String accountHolder;
double _balance; // Private instance variable
BankAccount(this.accountHolder, this._balance);
double get balance => _balance; // Getter
void deposit(double amount) { // Instance method
if (amount > 0) _balance += amount;
}
}

// Example 4: Static Members
void main() {
print("Wheels: $\{Vehicle.numberOfWheels}"); // Access static variable
Vehicle.displayInfo(); // Call static method
}
class Vehicle {
static int numberOfWheels = 4; // Static variable
static void displayInfo() { // Static method
print("All vehicles have $numberOfWheels wheels.");
}
}`,

  "Encapsulation and Polymorphism":`
// Example 1: Encapsulation
void main() {
BankAccount acc = BankAccount("Jane Doe", 500.0);
print("Holder: $\{acc.accountHolder}"); // Public getter
acc.deposit(200.0);
// acc._balance = 10000.0; // Error: private member
}

class BankAccount {
String _accountHolder; // Private
double _balance; // Private
BankAccount(this._accountHolder, this._balance);
String get accountHolder => _accountHolder; // Public getter
void deposit(double amount) {
if (amount > 0) _balance += amount;
}
}

// Example 2: : Polymorphism
void main() {
Animal dog = Dog(); // Subtype polymorphism
Animal cat = Cat();
List<Animal> animals = [dog, cat];
for (var animal in animals) {
animal.makeSound(); // Dynamic dispatch
}
}
class Animal { void makeSound() => print("Animal sound"); }
class Dog extends Animal { @override void makeSound() => print("Woof!"); }
class Cat extends Animal { @override void makeSound() => print("Meow!"); } `,

   "Inheritance,  Abstract classes": `
// Example 1: Single Inheritance
void main() {
Car myCar = Car("Toyota Camry", 4, "Sedan");
myCar.displayInfo(); // Calls overridden method
myCar.start();
}
class Vehicle {
String name; int wheels;
Vehicle(this.name, this.wheels);
void displayInfo() => print("Vehicle: $\`name, Wheels: \`$wheels");
void start() => print("$name is starting.");
}
class Car extends Vehicle {
String bodyType;
Car(String name, int wheels, this.bodyType) : super(name, wheels);
@override
void displayInfo() {
super.displayInfo();
print("Body Type: $bodyType");
}
}

// Example 2: Abstract Class
void main() {
Circle circle = Circle(5.0);
circle.draw();
print("Circle Area: $\{circle.calculateArea()}");
}
abstract class Shape {
void draw(); // Abstract method
double calculateArea(); // Abstract method
}
class Circle extends Shape {
double radius;
Circle(this.radius);
@override
void draw() => print("Drawing a circle.");
@override
double calculateArea() => 3.14 * radius * radius;
}`,

    "Interfaces, Mixins, and Method Overriding":`
// Example 1: Interface Implementation
void main() {
Car myCar = Car();
myCar.start();
}
abstract class Vehicle { // Implicitly defines an interface
void start();
void stop();
}
class Car implements Vehicle {
@override
void start() => print("Car started.");
@override
void stop() => print("Car stopped.");
}

// Example 2: Mixin Usage
void main() {
SuperHero superman = SuperHero();
superman.fly();
superman.run();
}
mixin Flyable { void fly() => print("I can fly."); }
mixin Runnable { void run() => print("I can run."); }
class SuperHero with Flyable, Runnable {}

// Example 3: Method Overriding
void main() {
Dog dog = Dog();
dog.makeSound();
}
class Animal { void makeSound() => print("Animal sound."); }
class Dog extends Animal {
@override
void makeSound() => print("Woof!");
}`,


    
    "Null Safety & Type System": `
// Example 1: Null Safety Basics
void main() {
String name = "Alice"; // Non-nullable
// name = null; // Compile-time error
String? nullableName = "Bob"; // Nullable
nullableName = null; // OK
String nonNull = nullableName!; // Assert non-null (risky if null)
} 

// Example 2: Null-Aware Operators
void main() {
String? firstName = "Alice";
String? lastName = null;
int? len = firstName?.length; // 5
String display = lastName ?? "Doe"; // "Doe"
lastName ??= "Smith"; // lastName becomes "Smith"
}

// Example 3: Late Initialization
late String description = _fetchDescription();
String _fetchDescription() {
print("Fetching description...");
return "Detailed description.";
}
void main() {
print("Before access");
print(description); // _fetchDescription() runs here
}

// Example 4: Type Promotion
void main() {
String? name = "Bob";
if (name != null) {
print(name.length); // name is promoted to String
}
Object value = 123;
if (value is int) {
print(value + 1); // value is promoted to int
}
}`,
   

   "Error Handling & Exceptions": `
// Example 1: : Try-Catch-Finally
void main() {
try {
int result = 10 ~/ 0; // Throws IntegerDivisionByZeroException
} on IntegerDivisionByZeroException {
print("Cannot divide by zero.");
} catch (e, s) {
print("Caught: $\`e\nStack: \`$s");
} finally {
print("Cleanup code.");
}
}

// Example 2: Custom Exception
class InvalidAmountException implements Exception {
final String message;
InvalidAmountException(this.message);
@override
String toString() => "InvalidAmountException: $message";
}
void processPayment(double amount) {
if (amount <= 0) throw InvalidAmountException("Amount must be positive.");
print("Processing \$$amount.");
}
void main() {
try {
processPayment(-100.0);
} on InvalidAmountException catch (e) {
print("Error: $e");
}
}

// Example 3: Built-in exception types
void main() {
print("\n--- Built-in Exception Types Example ---");
// FormatException
try {
int.parse("abc");
} on FormatException catch (e) {
print("Caught FormatException: $\{e.message}");
}
// ArgumentError
try {
List<int> numbers = [];
numbers.first; // Throws StateError if list is empty
} on StateError catch (e) {
print("Caught StateError: $\{e.message}");
}
// RangeError
try {
List<int> list = [1, 2, 3];
print(list[5]); // Throws RangeError
} on RangeError catch (e) {
print("Caught RangeError: $\`{e.message}");
}
// TypeError (often seen in dynamic code or incorrect casts)
try {
dynamic x = 10;
String s = x; // Runtime TypeError
} on TypeError catch (e) {
print("Caught TypeError: $e");
}
// Other common exceptions: IOException, TimeoutException, etc.
}

// Example 4: Assert Statement
void main() {
int age = 15;
assert(age >= 18, "Age must be 18 or older.");
print("This line runs only if assert passes or in release mode.");
}

// Example 5: Stack traces and error debugging
void main() {
print("\n--- Stack Traces and Error Debugging Example ---");
try {
functionA();
} catch (e, s) {
print("Caught exception in main: $e");
print("Stack Trace:\n$s");
}
}
void functionA() {
functionB();
}
void functionB() {
functionC();
}
void functionC() {
throw Exception("Error from functionC");
}`,
  

   "Asynchronous Programming (Future, async/await, Streams)": `
// Example 1: Understanding asynchronous vs synchronous execution
import 'dart:io';
void main() {
print("\n--- Synchronous Execution ---");
print("Start synchronous task.");
synchronousTask();
print("End synchronous task.");
print("\n--- Asynchronous Execution ---");
print("Start asynchronous task.");
asynchronousTask();
print("End asynchronous task (will print before async completes).");
}
void synchronousTask() {
print("Synchronous task: Doing heavy computation...");
// Simulate a blocking operation
sleep(Duration(seconds: 2));
print("Synchronous task: Computation finished.");
}
void asynchronousTask() async {
print("Asynchronous task: Starting long-running operation...");
// Simulate a non-blocking operation (e.g., network request, file I/O)
await Future.delayed(Duration(seconds: 2), () {
print("Asynchronous task: Operation finished.");
});
}

// Example 2: Future Handling
void main() {
fetchData().then((data) => print("Success: $data"))
.catchError((e) => print("Error: $e"))
.whenComplete(() => print("Fetch complete"));
}
Future<String> fetchData() => Future.delayed(Duration(seconds: 1), () =>
"Data");

// Example 3: Async/Await
void main() async {
try {
String data = await fetchData();
print("Received: $data");
} catch (e) {
print("Caught error: $e");
}
}
Future<String> fetchData() async {
await Future.delayed(Duration(seconds: 1));
return "Server Data";
}

// Example 4: Stream Basics
import 'dart:async';
void main() {
Stream<int> numbers = Stream.fromIterable([1, 2, 3]);
numbers.listen(
(data) => print("Received: $data"),
onDone: () => print("Stream done."),
);
}

// Example 5: Stream Transformations
void main() async {
Stream<int> numbers = Stream.fromIterable([1, 2, 3, 4]);
await numbers.map((n) => n * 2).listen(print).asFuture(); // Doubled: 2, 4,
6, 8
await numbers.where((n) => n % 2 == 0).listen(print).asFuture(); // Evens: 2,
4
}

// Example 6: Isolates (conceptual)
import 'dart:isolate';
void main() async {
ReceivePort receivePort = ReceivePort();
await Isolate.spawn(heavyComputation, receivePort.sendPort);
receivePort.listen((message) => print("Received from Isolate: $message"));
print("Main thread continues...");
}
void heavyComputation(SendPort sendPort) {
// Simulate heavy work
sendPort.send("Computation done!");
}`,
    


   "Generics in Dart": `
// Example 1: Generic Box
void main() {
GenericBox<int> intBox = GenericBox<int>(123);
print("Int Box: $\{intBox.content}");
GenericBox<String> stringBox = GenericBox<String>("Hello");
print("String Box: $\{stringBox.content}");
}
class GenericBox<T> {
T content;
GenericBox(this.content);
}

// Example 2: Generic Function
void main() {
int firstInt = getFirstElement<int>([10, 20]);
print("First int: $firstInt");
}
T getFirstElement<T>(List<T> list) {
if (list.isEmpty) throw ArgumentError("Empty list.");
return list[0];
}

// Example 3: Bounded Generic
void main() {
Calculator<int> intCalc = Calculator(10, 5);
print("Int sum: $\{intCalc.add()}");
}
class Calculator<T extends num> {
T a, b;
Calculator(this.a, this.b);
num add() => a + b;
}

// Example 4: Generic List
void main() {
List<int> numbers = [1, 2, 3];
// numbers.add("four"); // Compile-time error
}`,


    "Dart Packages & Pub.dev": `
// Example 1: Understanding pubspec.yaml configuration
   // This example is conceptual, as pubspec.yaml is a configuration file, not
Dart code.
  // pubspec.yaml structure:
/*
name: my_app
description: A new Flutter project.
version: 1.0.0+1
environment:
sdk: ">=3.0.0 <4.0.0"
dependencies:
flutter:
sdk: flutter
cupertino_icons: ^1.0.2
http: ^1.1.0
dev_dependencies:
flutter_test:
sdk: flutter
flutter_lints: ^2.0.0
flutter:
uses-material-design: true
*/

// Example 2: Adding and managing dependencies
  // This example is conceptual, as it involves command-line operations.
  // To add a dependency:
  // dart pub add http
  // flutter pub add http
  // To get dependencies (after modifying pubspec.yaml manually):
  // dart pub get
 // flutter pub get
 // To upgrade dependencies:
 // dart pub upgrade
 // flutter pub upgrade
 // To remove a dependency:
 // dart pub remove http
 // flutter pub remove http


// Example 3: Publishing packages to pub.dev
 // This example is conceptual, as it involves command-line operations and a
pub.dev account.
 // Steps to publish:
 // 1. Ensure your pubspec.yaml is well-formed and includes all necessary
metadata (name, version, description, homepage, repository, issue_tracker,
environment, dependencies, authors/publish_to).
 // 2. Run \`dart pub publish --dry-run\` to validate your package without
publishing.
 // 3. Run \`dart pub publish\` to publish your package.


// Example 4: Package versioning and semantic versioning
 // This example is conceptual, as it relates to versioning strategy.
 // Semantic Versioning (SemVer) format: MAJOR.MINOR.PATCH
 // - MAJOR: Breaking changes (e.g., 1.0.0 -> 2.0.0)
 // - MINOR: New features, but backward compatible (e.g., 1.0.0 -> 1.1.0)
 // - PATCH: Bug fixes, backward compatible (e.g., 1.0.0 -> 1.0.1)
 // pubspec.yaml dependency examples:
 // dependencies:
 // http: ^1.1.0 // ^ (caret) operator: compatible with 1.1.0, 1.2.0, but not
 2.0.0
 // path: 1.8.0 // Exact version
 // lints:
 ^2.0.0 // Any version compatible with 2.0.0
 // test: ">=1.16.0 <1.18.0" // Version range


// Example 5: Local package development and path dependencies
 // This example is conceptual, as it involves file system structure and
pubspec.yaml configuration.
 // Project structure:
/*
my_app/
pubspec.yaml
lib/
main.dart
my_local_package/
pubspec.yaml
lib/
my_local_package.dart
*/
 // my_app/pubspec.yaml (to depend on my_local_package):
/*
dependencies:
my_local_package:
path: ../my_local_package
*/

// Example 6: Popular Dart packages and ecosystem overview
  // This example is conceptual, as it involves listing and describing external
packages.
  // No code example, but will be covered in the explanation.
`,

    "Mini Project: CLI Tool or Simple API Consumer": `
// Example 1: Project planning and structure setup
   // This is a conceptual example showing the project structure.
/*
my_cli_tool/
├── pubspec.yaml
├── bin/
│ └── main.dart
├── lib/
│ ├── models/
│ │ └── user.dart
│ └── services/
│ └── user_service.dart
├── test/
│ └── user_service_test.dart
└── README.md
*/
// pubspec.yaml
/*
name: my_cli_tool
description: A simple CLI tool to fetch user data.
version: 1.0.0
environment:
sdk: ">=3.0.0 <4.0.0"
dependencies:
http: ^1.1.0
args: ^2.4.2
dev_dependencies:
test: ^1.24.0
*/
  // bin/main.dart (initial setup)
/*
import 'package:my_cli_tool/services/user_service.dart';
import 'package:args/args.dart';
void main(List<String> arguments) async {
final parser = ArgParser()
..addOption(
'id',
abbr: 'i',
help: 'User ID to fetch.',
valueHelp: 'ID',
)
..addFlag(
'all',
abbr: 'a',
help: 'Fetch all users.',
negatable: false,
);
ArgResults argResults = parser.parse(arguments);
if (argResults['all']) {
print('Fetching all users...');
// Call service to fetch all users
} else if (argResults['id'] != null) {
final userId = int.tryParse(argResults['id']);
if (userId == null) {
print('Error: Invalid user ID. Please provide a number.');
print(parser.usage);
return;
}
print('Fetching user with ID: $userId...');
// Call service to fetch single user
} else {
print('Please provide a user ID or use the --all flag.');
print(parser.usage);
}
}
*/
// lib/models/user.dart
/*
class User {
final int id;
final String name;
final String username;
final String email;
User({
required this.id,
required this.name,
required this.username,
required this.email,
});
factory User.fromJson(Map<String, dynamic> json) {
return User(
id: json['id'] as int,
name: json['name'] as String,
username: json['username'] as String,
email: json['email'] as String,
);
}
@override
String toString() {
return 'User(id: $\`id, name: \`$name, username: $\`username, email:
\`$email)';
}
}
*/
// lib/services/user_service.dart (initial setup)
/*
import 'dart:convert';
import 'package:http/http.dart' as http;
import '../models/user.dart';
class UserService {
final String baseUrl = 'https://jsonplaceholder.typicode.com';
Future<User> fetchUser(int id) async {
final response = await http.get(Uri.parse('$\`baseUrl/users/\`$id'));
if (response.statusCode == 200) {
return User.fromJson(jsonDecode(response.body));
} else if (response.statusCode == 404) {
throw Exception('User with ID $id not found.');
} else {
throw Exception('Failed to load user: $\`{response.statusCode}');
}
}
Future<List<User>> fetchAllUsers() async {
final response = await http.get(Uri.parse('$baseUrl/users'));
if (response.statusCode == 200) {
List<dynamic> userJson = jsonDecode(response.body);
return userJson.map((json) => User.fromJson(json)).toList();
} else {
throw Exception('Failed to load users: $\{response.statusCode}');
}
}
}
*/


// Example 2: Command-line argument parsing
  // (Integrated into bin/main.dart in Example 1)


// Example 3: File I/O operations and data persistence
import 'dart:io';
void main() async {
print("\n--- File I/O Operations ---");
final String fileName = 'data.txt';
final File file = File(fileName);
// Writing to a file
try {
await file.writeAsString('Hello, Dart File I/O!\n');
await file.writeAsString('Appending a new line.\n', mode: FileMode.append);
print('Data written to $fileName');
} catch (e) {
print('Error writing to file: $e');
}
// Reading from a file
try {
String content = await file.readAsString();
print('Content of $\`fileName:\n\`$content');
List<String> lines = await file.readAsLines();
print('Lines from $fileName:');
for (var line in lines) {
print('- $line');
}
} catch (e) {
print('Error reading from file: $e');
}
 // Checking if file exists and deleting
if (await file.exists()) {
await file.delete();
print('$fileName deleted.');
}
  // Data persistence (conceptual - often involves JSON or databases)
  // Example: Saving a list of users to a JSON file
 // List<User> users = [...];
 // final jsonString = jsonEncode(users.map((user) =>
user.toJson()).toList());
// await File('users.json').writeAsString(jsonString);
}


// Example 4: HTTP requests and JSON parsing
  // (Integrated into lib/services/user_service.dart and bin/main.dart in Example
1)

// Example 5: Error handling in real applications
  // (Integrated into lib/services/user_service.dart and bin/main.dart in Example
1)

// Example 6: Testing and documentation best practices
  // test/user_service_test.dart
/*
import 'package:test/test.dart';
import 'package:my_cli_tool/services/user_service.dart';
import 'package:my_cli_tool/models/user.dart';
void main() {
group('UserService', () {
late UserService userService;
setUp(() {
userService = UserService();
});
test('fetchUser returns a User if the http call completes successfully', ()
async {
  // This is a simplified test. In a real app, you'd mock the http client.
  // For demonstration, we're relying on the actual API.
final user = await userService.fetchUser(1);
expect(user, isA<User>());
expect(user.id, 1);
expect(user.name, isNotEmpty);
});
test('fetchUser throws an exception if user is not found', () async {
expect(() => userService.fetchUser(99999), throwsA(isA<Exception>()));
});
test('fetchAllUsers returns a List<User> if the http call completes
successfully', () async {
final users = await userService.fetchAllUsers();
expect(users, isA<List<User>>());
expect(users.isNotEmpty, isTrue);
expect(users[0], isA<User>());
});
test('fetchAllUsers throws an exception on http error', () async {
  // To properly test this, you would need to mock the http client
  // to simulate a non-200 status code.
 // For now, we assume the API is generally reliable for success cases.
});
});
}
*/
// README.md (conceptual example)`,
  };
  return examples[lessonTitle] ||  "// Example code will be provided"
};

const getDartCodeExplanation = (lessonTitle) => {
  const explanations = {
      "Introduction to Dart & Setup": `
### Example 1
- **What is Dart?**
Dart is an open-source, client-optimized programming language developed by Google. 
It's used for building web, server, and mobile applications, with a heavy focus on creating user interfaces. 
Its primary claim to fame is its use in the Flutter framework for cross-platform mobile development.

- **Installing Dart SDK and Configuring the Development Environment**
First, you'll need the Dart SDK. The easiest way to get it is by using a package manager like Homebrew on macOS, 
Chocolatey on Windows, or APT on Linux.

- **macOS (Homebrew)**: \`brew tap dart-lang/dart\` followed by \`brew install dart\`
- **Windows (Chocolatey)**: \`choco install dart-sdk\`
- **Linux (APT)**: \`sudo apt-get update\` followed by \`sudo apt-get install dart-sdk\`
After installation, verify it by running \`dart --version\` in your terminal. You should see the installed Dart SDK version.

- **Setting up Your IDE/Editor**
For a smooth development experience, an IDE with Dart extensions is essential.
- **VS Code**: Install the official Dart and Flutter extensions. These provide syntax highlighting, code completion, debugging, and more.
- **IntelliJ IDEA/Android Studio**: These IDEs from JetBrains have excellent built-in support for Dart and Flutter. 
Just make sure the plugins are enabled.

- **Creating and Running Your First Dart Program**
Every Dart application has an entry point: the \`main\` function.
To run the code example above, save the file as \`main.dart\` and execute \`dart run main.dart\` in your terminal.

- **Understanding Dart's Compilation Modes**
*Dart has two main compilation modes*:
- **Just-in-Time (JIT)**: This is for development. The JIT compiler allows for hot-reloading, 
where you can see changes in your app instantly without restarting it.
- **Ahead-of-Time (AOT)**: This is for production. The AOT compiler compiles your code into native machine code, 
resulting in fast startup times and better performance. This is what's used when you release a Flutter app.`,

  "Variables and Data Types": `
### Example 1 
In Dart, variables are used to store data values. Before you can use a variable, you must declare it.
Dart is a type-safe language, meaning that variables have a static type that is determined at compile
time. This helps prevent errors and makes your code more robust.

**Variable declaration (var, final, const, late)**
Dart provides several keywords for declaring variables, each with specific characteristics regarding
mutability and initialization.
\`var\`
The \`var\` keyword is used for type inference. When you declare a variable with var , Dart infers its
type based on the initial value assigned to it. Once the type is inferred, it cannot be changed.
In the example above, \`name\` is inferred as a \`String\` , \`age\` as an \`int\` , and \`price\` as a \`double\` . While
\`var\` provides flexibility during declaration, the variable's type becomes fixed after initialization.
 
### Example 2 
\`final\`
The \`final\` keyword is used to declare a variable that can only be set once. Its value cannot be
changed after it has been initialized. \`final\` variables are initialized at runtime, meaning their value
can be determined based on calculations or external factors that are not known at compile time.
\`final\` is useful for values that are constant within the lifetime of an object or function, but might
vary between different runs of the program or different instances of an object.

### Example 3 
\`const\` :
The \`const\` keyword is used to declare a compile-time constant. This means the value of a const
variable must be known at compile time and cannot change ever. const variables are implicitly
\`final\`
\`const\` is ideal for values that are truly immutable and known before the program even starts
executing, such as mathematical constants or fixed configuration values. Using const can also lead
to performance optimizations as the compiler can inline these values.

### Example 4
\`late\`
The late keyword was introduced in Dart 2 .1 2 to address two main use cases:

- **Declaring a non-nullable variable that's initialized after its declaration**: This is useful when
a variable's value cannot be known at the point of declaration but will definitely be assigned
before it's used.
- **Lazy initialization**: A \`late\` variable's initializer runs only when the variable is accessed for the
first time. This can be beneficial for performance if the initialization is expensive and the
variable might not always be used.

In the example, \`description\` is initialized after its declaration. \`expensiveCalculation\`
demonstrates lazy initialization; the \`_performExpensiveCalculation()\` function is only executed
when \`expensiveCalculation\` is first accessed.

### Example 5 
**Built-in data types (int, double, String, bool)***
Dart comes with a set of built-in data types to represent common kinds of values.
\`int\`
Represents integer numbers (whole numbers) up to 6 4 bits on platforms that support it, or 3 2 bits
otherwise. Dart integers are arbitrary-precision on the web.
  
### Example 6 
\`double\`
Represents floating-point numbers (numbers with decimal points). double is a 6 4 -bit (double-precision) floating-point number

### Example 7 
\`num\`
\`num\` is an abstract class that is the supertype of both int and double . You can use num if you want
a variable to hold either an integer or a double.

### Example 8 
\`String\`
Represents a sequence of characters (text). Dart strings are UTF-1 6 code units. You can use single or
double quotes to create string literals.

### Example 9
\`bool\`
Represents boolean values: true or false . Dart is strict about boolean types; only the boolean
values true and false are treated as such. Unlike some other languages, 0 , 1 , empty strings, or
null are not implicitly converted to boolean values.

### Example 10 
**Type inference and explicit typing**
Dart supports both type inference and explicit typing, giving developers flexibility in how they
declare variables.

- **Type Inference**
As seen with the var keyword, Dart can infer the type of a variable based on the value assigned to it
during initialization. This reduces verbosity and can make code cleaner, especially when the type is
obvious from the context.

Once a type is inferred, it is fixed for the lifetime of that variable. You cannot assign a value of a
different type to it

### Example 11
**Explicit Typing**
Explicit typing involves explicitly stating the data type of a variable during its declaration. This can
improve code readability, especially for complex types or when the initial value doesn't fully convey
the intended type.

### Example 12
**When to use which?**
***Use var (type inference) when***:
- The type is obvious from the initializer (e.g., var count = 0; ).
- It makes the code more concise without sacrificing readability.
- You are dealing with local variables where the type is less critical for understanding the
overall program flow.
***Use explicit typing when:***
- The type is not immediately obvious from the initializer.
- You want to make the code's intent clearer, especially for API boundaries (function
- parameters, return types) or public fields.
- You are declaring variables without an initial value`,

 "String interpolation and manipulation":`
### Example 1 
**String interpolation and manipulation**
Dart provides powerful and convenient ways to work with strings, including interpolation for
embedding expressions and various methods for manipulation.

- **String Interpolation**
String interpolation allows you to embed the value of an expression inside a string literal by
using $\`{expression}\` . If the expression is a simple identifier, you can omit the curly braces.
 
**Code Explanation**:
- \`'Hello, $name!'\` : The value of the \`name\` variable is directly inserted into the string.
- \`'Age: $\`{age + 1}'\` : An expression (\`age + 1\`) is evaluated, and its result is inserted. Curly
braces are required for expressions.
- \`'\$$price'\` : The \`\$\` is used to escape the dollar sign if you want to print it literally, not as
an interpolation marker.
- \`'\$$\`{(price * 1.05).toStringAsFixed(2)}\`' : A more complex expression involving multiplication
and a method call (\`toStringAsFixed(2)\`) to format the number to two decimal places.

### Example 2
**String Manipulation Methods:**
Dart's \`String\` class provides a rich set of methods for common string operations

**Code Explanation**
- \`text.length\`: Returns the number of characters in the string.
- \`text.trim()\`: Returns a new string with leading and trailing whitespace removed.
- \`trimmedText.toUpperCase()\` / \`toLowerCase()\`: Returns a new string with all characters
converted to uppercase/lowercase.
- \`trimmedText.contains('Dart')\` : Checks if the string contains the specified substring and
returns a boolean.
- \`trimmedText.replaceAll('Dart', 'Flutter')\`: Returns a new string with all occurrences of the first
argument replaced by the second argument.
- \`trimmedText.split(' ')\`: Splits the string into a list of substrings based on the given
delimiter.
- \`trimmedText.substring(6, 10)\`: Extracts a portion of the string from the start index
(inclusive) to the end index (exclusive).
- \`trimmedText.startsWith('Hello')\` / \`endsWith('World')\`: Checks if the string begins or ends with
the specified substring.
 
 Numeric type conversion
Dart allows conversion between numeric types ( int and double ) using various methods
 
**Code Explanation**
- \`myInt.toDouble()\`: Converts an \`int\` to a \`double\`.
- \`myDouble.toInt()\`: Converts a \`double\` to an \`int\` by truncating the decimal part.
- \`int.parse(str)\`: Parses a \`String\` into an \`int\`. Throws a \`FormatException\` if the string is not a
valid integer.
- \`double.parse(str)\`: Parses a \`String\` into a \`double\`. Throws a \`FormatException\` if the string is
not a valid double.
- \`int.tryParse(str)\`: A safer alternative to \`parse\` . It returns \`null\` if the string cannot be
parsed, instead of throwing an exception.
- \`myInt.toString()\` / \`myDouble.toString()\`: Converts numeric types to their \`String\`
representation.
- \`value.toStringAsFixed(2)\`: Formats a \`double\` to a string with a specified number of decimal
places, rounding as necessary
 `,

  "Operators in Dart":`
### Example 1 
Operators are special symbols that perform operations on one, two, or three operands. Dart provides
a rich set of operators that are similar to those in other C-style languages.

**Arithmetic Operators**
These operators perform basic mathematical calculations
| Operator | Description           | Example     | Result |
| :------- | :-------------------- | :---------- | :----- |
| \`+\`      | Addition              | \`4 + 5\`     | \`9\`    |
| \`-\`      | Subtraction           | \`7 - 4\`     | \`3\`    |
| \`*\`      | Multiplication        | \`3 * 4\`     |\`12\`   |
| \`/\`      | Division              | \`15 / 3\`    | \`5\`    |
| \`%\`      | Modulus (remainder)   | \`10 % 3\`    | \`1\`    |
| \`~/\`     | Integer Division      |  \`10 ~/3\`   | \`3\`


### Example 2 
**Logical Operators (Truth Table Style)**
Logical operators are used to combine or invert boolean expressions
| Operator | Description | Example             | Result  |
| :------- | :---------- | :------------------ | :------ |
| \`AND\`    | AND         | \`True and False\`    | \`False\` |
| \`OR\`     | OR          | \`True or False\`     | \`True\`  |
| \`NOT\`    | NOT         | \`not True\`          | \`False\` |

### Example 3 
**Comparison Operators**
These operators compare two operands and return a boolean value
| Operator | Description                                   | Example       | Result  |
| :------- | :-------------------------------------------- | :------------ | :------ |
| \`==\`     | Checks if two values are equal                 | \`5 == 5\`      | \`True\`  |
| \`!=\`     | Checks if two values are not equal             | \`5 != 3\`      | \`True\`  |
| \`>\`      | Checks if left value is greater than right     | \`7 > 4\`       | \`True\`  |
| \`<\`      | Checks if left value is less than right        | \`3 < 5\`       | \`True\`  |
| \`>=\`     | Checks if left value is greater or equal       | \`5 >= 5\`      | \`True\`  |
| \`<=\`     | Checks if left value is less or equal          | \`4 <= 6\`      | \`True\`  |

### Example 4 
**Assignment Operator**
Assignment operators are used to assign values to variables. The compound assignment operators
provide a shorthand way to perform an operation and assign the result.

| Operator | Description                                    | Example        | Result  |
| :------- | :--------------------------------------------- | :------------- | :------ |
| \`=\`      | Assigns value from right to left                | \`x = 5\`        | \`x = 5\` |
| \`+=\`     | Adds right operand to left operand and assigns  | \`x = 3; x += 2\`| \`x = 5\` |
| \`-=\`     | Subtracts right operand and assigns             | \`x = 5; x -= 2\`| \`x = 3\` |
| \`*=\`     | Multiplies right operand and assigns            | \`x = 4; x *= 3\`| \`x = 12\`|
| \`/=\`     | Divides left operand by right operand and assigns| \`x = 10; x /= 2\`| \`x = 5.0\`|

### Example 5
**Operator precedence and associativity**
Operator precedence determines the order in which operators are evaluated in an expression.
Associativity determines the order in which operators with the same precedence are evaluated.
For example, \`*\` and \`/\`have higher precedence than \`+\` and \`-\`. Most operators in Dart are left-associative.`,

  "Conditional Statements in Dart": `
### Example 1 
**Conditional Statements in Dart**
Conditional statements allow you to execute different blocks of code based on certain conditions.
**if, else if, else statements**
The \`if\` statement executes a block of code if a specified condition is true. The \`else if\` statement
allows you to check for multiple conditions, and the \`else\` statement provides a default block of
code to execute if none of the preceding conditions are true.

### Example 2 
Ternary operator (condition ? expr1 : expr2 )
The ternary operator is a concise way to write an \`if-else\` statement. If the condition is true, \`expr1\`
is evaluated; otherwise, \`expr2\` is evaluated.
 
### Example 3 
**Conditional expressions (?? and ??=)**
Dart provides special operators for handling null values.
- \`??\` (Null-aware operator): If the expression on the left is not null, it returns its value; otherwise,
it evaluates and returns the value of the expression on the right.
- \`??=\` (Null-aware assignment operator): Assigns a value to a variable only if that variable is
currently null.

### Example 4
**Switch statements and pattern matching**
\`switch\` statements provide a way to test a variable against a series of values. Dart has enhanced
\`switch\` statements with pattern matching, making them more powerful and expressive.`,

       "Loops and Loop Control in Dart":`
### Example 1
Loops are fundamental control flow statements that allow you to execute a block of code
repeatedly. Dart provides several types of loops to handle different iteration scenarios.

**for loops (traditional, for-in, forEach)**
**Traditional for loop:** The traditional \`for\` loop is used when you know exactly how many times you want to iterate.
It consists of an initialization, a condition, and an increment/decrement statement.
**Code Explanation**:
- \`int i = 1\`: The loop variable \`i\` is initialized to 1.
- \`i <= 5\`: The loop continues as long as \`i\` is less than or equal to 5.
- \`i++\`: After each iteration, \`i\` is incremented by 1.

### Example 2
**forEach loop**
The forEach method is available on iterable objects (like \`List\`, \`Set\`, \`Map\` ) and provides a
functional way to iterate over elements. It takes a function as an argument, which is executed for
each element.
   
### Example 3
**while loops**
The while loop executes a block of code as long as a specified condition is true. The condition is
evaluated before each iteration.

### Example 4 
**do-while loops**
The \`do-while\` loop is similar to the \`while\` loop, but it guarantees that the loop body is executed at
least once, because the condition is evaluated after the first iteration.

### Example 5
**break statement**
The \`break\` statement is used to terminate the innermost loop immediately. Execution continues
with the statement immediately following the loop.

### Example 6
**continue statement**
The \`continue\` statement is used to skip the current iteration of a loop and proceed to the next
iteration. It effectively bypasses the remaining code in the loop body for the current iteration.

### Example 7
**Loop control with labels**
Dart allows you to label loops, which can be useful when you have nested loops and want to \`break\`
or \`continue\` an outer loop from within an inner loop.
`,

    "Functions in Dart": `
### Example 1
Functions are blocks of code that perform a specific task. They help organize code, make it reusable,
and improve readability. In Dart, everything is an object, including functions.
**Function declaration and syntax**
A function is declared with a return type, a name, a parameter list, and a body.

**Code Explanation:**
- \`int add(int a, int b)\`: Declares a function named \`add\` that takes two \`int\` parameters and
returns an \`int\` .
- \`void printMessage(String message)\`: Declares a function that takes a \`String\` parameter and
returns nothing (\`void\`).
- \`String getGreeting()\`: Declares a function that takes no parameters and returns a \`String\` .

### Example 2
Dart supports a shorthand syntax for functions that contain only a single expression. These are
called arrow functions (or fat arrow syntax) and use \`=>\`.
Arrow functions are particularly useful for callbacks and when defining simple, single-line
operations.    

### Example 3
**Anonymous functions**
Anonymous functions (also called lambda functions or closures) are functions without a name. They
are often used as arguments to other functions (callbacks) or when you need a function for a short
period.

### Example 4
**Higher-order functions and callbacks**
Higher-order functions are functions that can take other functions as arguments or return functions
as results. Callbacks are functions passed as arguments to other functions, to be executed later.
Higher-order functions and callbacks are fundamental to functional programming paradigms and
are extensively used in Flutter for handling events, asynchronous operations, and UI updates.`,

   "Function Parameters and Scope in Dart":`
### Example 1 
Understanding how to define and use function parameters, as well as how variable scope works, is
crucial for writing well-structured and maintainable Dart code.
Dart functions can have two types of parameters: positional and named.

- **Positional Parameters**
Positional parameters are the most common type. They are defined in the order they appear in the
function signature, and arguments must be passed to them in the same order.

### Example 2 
- **Named Parameters**
Named parameters are enclosed in curly braces \`{}\` in the function signature. When calling the
function, you specify the parameter name along with its value. This makes function calls more
readable, especially when a function has many parameters.
By default, named parameters are optional. To make a named parameter required, you can use the
\`required\` keyword (introduced in Dart 2 .1 2 ).    

### Exampple 3
**Optional Positional Parameters**
Optional positional parameters are enclosed in square brackets [] . They must appear after any
required positional parameters.

### Example 4 
**Optional Named Parameters with Default Values**
Named parameters can have default values. If a value is not provided during the function call, the
default value is used.

### Example 5 
**Function scope (local, global)**
Scope refers to the region of a program where a variable or function can be accessed. Dart has lexical
scoping, meaning the scope of a variable is determined by its location within the source code.
- **Local Scope**
Variables declared inside a function or a block (like an if statement or a loop) have local scope.
They can only be accessed within that function or block.

### Example 6
In Dart, variables declared at the top level of a file (outside any function or class) have file-level
scope, which is often referred to as global scope within the context of that file. They can be accessed
from anywhere within that file.

### Example 7 
Closures and variable capturing
A closure is a function that has access to the parent scope, even after the parent function has closed.
In Dart, all functions are closures because they can access variables defined in their lexical scope.

In the \`createCounter\ example, the anonymous function returned by \`createCounter\` retains access
to the \`count\` variable, even after \`createCounter\` has finished executing. Each time the returned
function is called, it increments and returns its own count .
Similarly, in \`createMultiplier\` , the \`factor\` variable is captured by the returned anonymous
function, allowing it to be used in subsequent calls to the \`multiplier\` function.
Closures are a powerful feature in Dart, enabling patterns like encapsulation, state management, and
functional programming constructs. They are widely used in Flutter for managing widget states,
handling events, and more`,

     "Collections (Lists and Sets)": `
### Example 1
**Collections (Lists and Sets)**
Dart provides powerful and flexible ways to manage collections of data, primarily
through \`List\` and \`Set\` types. Understanding their creation, manipulation, and
unique properties is crucial for efficient data handling.

**List creation, manipulation, and methods**
A \`List\` in Dart is an ordered collection of objects. It's similar to an array in other
languages but with more dynamic capabilities. Lists can grow and shrink in size, and
their elements can be accessed by index.

**Code Explanation**
This example demonstrates various operations on Dart Lists:
- **List creation**: A \`List<int>\` named \`numbers\` is initialized with integer values.
Dart's type inference often allows you to omit the type annotation (\`<int>\`) if the
initial values make the type clear.
- **Accessing elements**: Elements are accessed using zero-based indexing, similar
to arrays. \`numbers[0]\` gets the first element, and \`numbers[numbers.length -1]\` gets the last.
- **Adding elements**:
-  \`add(element)\`: Appends a single element to the end of the list.
-  \`addAll(iterable)\`: Appends all elements from another iterable (like
another List or Set) to the end of the list.
- **Removing elements:**
-  \`remove(value)\` : Removes the first occurrence of the specified \`value\` from
the list. It returns \`true\` if the value was found and removed, \`false\`
otherwise.
-  \`removeAt(index)\`: Removes the element at the specified \`index\` . This
method returns the removed element.
- **Updating elements:** Elements can be updated by assigning a new value to a
specific index, e.g., \`numbers[0] = 10;\` .
- **List properties and methods:**
-  \`length\`: Returns the number of elements in the list.
-  \`isEmpty\`: Returns \`true\` if the list has no elements, \`false\` otherwise.
-  \`contains(value)\`: Returns \`true\` if the list contains the specified \`value\`,\`false\` otherwise.
- **Iterating over a list:** The \`for-in\` loop is a convenient way to iterate over each
element in a list.
- **Sublist**: \`sublist(startIndex, [endIndex])\` returns a new list containing
elements from \`startIndex\` up to (but not including) \`endIndex\` . If \`endIndex\` is
omitted, it goes to the end of the list.
- **Sorting:** The \`sort()\` method sorts the elements of the list in ascending order.
For custom sorting, you can provide a comparison function.
- **Clearing a list:** \`clear()\` removes all elements from the list, making it empty.
Set operations and uniqueness constraints

### Example 2 
**Set operations and uniqueness constraints**
A Set in Dart is an unordered collection of unique items. This means a Set cannot
contain duplicate elements. If you try to add a duplicate, it will simply be ignored.

**Code Example**
This example illustrates how Sets work and their common operations:
- **Set creation**: A \`Set<int>\` named \`uniqueNumbers\` is initialized. Notice that even
if \`3\` is added twice, it only appears once in the set due to its uniqueness constraint.
- **Adding elements:**
-  \`add(element)\`: Adds a single element to the set. If the element already
exists, the set remains unchanged.
-  \`addAll(iterable)\`: Adds all elements from an iterable to the set.
Duplicates from the iterable are ignored.
- **Removing elements:** \`remove(value)\` removes the specified \`value\` from the
set. It returns \`true\` if the value was found and removed, \`false\` otherwise.
- **Set properties and methods:** Similar to lists, sets have \`length\` , \`isEmpty\` , and
\`contains(value)\` properties/methods.
- **Set operations:** Sets support mathematical set operations:
-  \`union(otherSet)\`: Returns a new set containing all unique elements from
both sets.
-  \`intersection(otherSet)\`: Returns a new set containing only the elements
common to both sets.
-  \`difference(otherSet)\`: Returns a new set containing elements present in
the current set but not in \`otherSet\` .
- **Checking subsets:** \`containsAll(iterable)\` checks if the set contains all
elements from the given iterable.
- **Iterating over a set**: Like lists, sets can be iterated using a for-in loop.
- **Clearing a set:** \`clear()\` removes all elements from the set.

### Example 3 
**Collection literals and constructors**
Dart provides convenient syntax (literals) for creating collections and also offers
various constructors for more specific initialization needs.

**Code Explanation**
- **List literals:** The most common way to create a list is using square brackets [] .
You can specify the type explicitly (\`List<int>\`) or let Dart infer it.
- **List constructors:**
-  \`List<E>.filled(length, fill, {bool growable = false})\`: Creates a
fixed-length list where all elements are initialized with \`fill\`. By default,
these lists are not growable.
-  \`List<E>.empty({bool growable = false})\`: Creates an empty list. You
must set growable: true if you intend to add elements later.
-  \`List<E>.from(Iterable<dynamic> elements)\`: Creates a new list
containing all elements from the given iterable.
- **Set literals:** Sets are created using curly braces \`{}\`. If the elements are all of the
same type, Dart infers the type. If you have an empty set, you must specify the
type to distinguish it from a Map literal (e.g., \`Set<int> mySet = {};\`).
- **Set constructors:**
-  \`Set<E>.from(Iterable<dynamic> elements)\`: Creates a new set
containing all unique elements from the given iterable. Duplicates in the
iterable are automatically removed.

### Example 4
**Spread operator and collection-if/for**
Dart's collection features are enhanced by the spread operator and collection
\`if\` / \`for\` , which allow for more concise and expressive collection manipulation.

**Code Explanation**
- **Spread operator (\`...\`):** This operator allows you to insert all elements of a
collection into another collection. It's particularly useful for combining lists or
sets.
-  \`...listA\` : Expands \`listA\` into its individual elements, which are then
added to \`combinedList\`.
- **Null-aware spread operator (\`...?\`)**: If the collection you are spreading might
be \`null\`, using \`...?\` prevents a runtime error. If \`nullableList\` is \`null\`, no
elements are added.
- **Collection-if**: This allows you to conditionally include elements in a collection
based on a boolean expression. If the condition is \`true\`, the element (or
elements) after \`if\` are included; otherwise, they are skipped.
- **Collection-for:** This provides a concise way to generate elements for a collection
by iterating over another iterable. It's similar to a for loop but directly
constructs the collection.
-  \`for (var number in numbers) number * 2\`: For each \`number\` in
\`numbers\`, \`number * 2\` is evaluated and added to \`doubledNumbers\`.
These features make Dart's collection handling very powerful and readable, allowing
for declarative and efficient data manipulation.`,

   
     "Maps and Iterable Methods in Dart": `
### Example 1 
Dart Map s store data as key-value pairs, providing efficient data retrieval based on
unique keys. Iterable methods offer powerful functional programming tools for
transforming and querying collections.
**Maps: Key-Value Collections**
Maps are unordered collections where each unique key maps to a value. They are ideal
for representing structured data like dictionaries or JSON objects. Key operations
include: 
- Creation: \`Map<String, String> capitals = {"USA": "DC"};\` 
- Access: \`capitals["USA"]\`. 
- Modification: Add new pairs (\`capitals["Japan"] = "Tokyo";\`),
update existing values, and \`remove(key)\` . 
- Properties: \`length\`, \`isEmpty\`, \`keys\`, \`values\`, \`containsKey()\`, \`containsValue()\`. 
- Iteration: \`forEach()\` , \`for-in\` loops over \`keys\`, \`values\`, or \`entries\`

### Example 2 
**Iterable Methods: Functional Data Processing**
Dart's \`Iterable\` class provides a rich set of higher-order functions for transforming,
filtering, and aggregating data in a declarative way. These methods are applicable to
\`List\`s, \`Set\`s, and other iterables.
- **map()**: Transforms each element. \`numbers.map((n) => n * 2).toList();\`
- **where()**: Filters elements based on a condition. \`numbers.where((n) => n % 2 == 0).toList();\`
- **reduce()**: Combines elements into a single value (no initial value).
\`numbers.reduce((sum, n) => sum + n);\`
- **fold():** Combines elements into a single value with an initial value.
\ numbers.fold(0, (sum, n) => sum + n);\
- **forEach()**: Executes a function for each element (for side effects).
- **any()**: Checks if at least one element satisfies a condition.
- **every()**: Checks if all elements satisfy a condition.
- **take(n)** / **skip(n)**: Returns a new iterable with the first n elements or skipping
the first n elements.
- **firstWhere()** / **singleWhere()**: Finds the first or single element matching a
condition.
- **toSet()**: Converts an iterable to a Set (removes duplicates).
- **join()**: Concatenates elements into a string.`,

  "Object-Oriented Programming in Dart": `
### Example 1 
Dart is an object-oriented language, enabling structured and reusable code through
classes and objects. OOP concepts like classes, constructors, instance members, and
static members are fundamental for building robust applications.

**Class Definition and Instantiation**
A **class** is a blueprint for creating objects, defining their properties (instance variables)
and behaviors (methods). **Instantiation** is the process of creating an object (an
instance) from a class.
  
### Example 2 
**Constructors (Default, Named, Factory)**
Constructors are special methods for initializing objects. Dart supports: 
- **Default (Generative) Constructor:** The primary way to create an instance.
\`Person(this.name, this.age);\` 
- **Named Constructors:** Provide multiple ways tocreate an object with descriptive names. \`Person.baby(String name):this(name,0);\` 
- Factory Constructors: Can return an existing instance or an instance of a
subclass, useful for caching or complex initialization logic. factory \`Logger(String name) { ... }\`

### Example 3 
**Instance Variables and Methods**
Instance variables store the unique state of each object. Instance methods define
behaviors that operate on that object's state. Private members are denoted by a
leading underscore (\`_\`). Getters provide read-only access to private variables.

### Example 4
**Static Members and Class-Level Functionality**
Static members (variables and methods) belong to the class itself, not to individual
instances. They are shared across all objects of the class and are accessed directly
using the class name.
OOP in Dart promotes modularity, reusability, and maintainability, forming the
backbone of complex applications.`,
     
     "Encapsulation and Polymorphism":`
### Example 1 
Encapsulation and Polymorphism are two core principles of Object-Oriented
Programming (OOP) that promote code organization, security, and flexibility in Dart
applications.
**Encapsulation and Access Modifiers**
**Encapsulation** is the bundling of data (attributes) and methods (functions) that
operate on the data into a single unit (class), and restricting direct access to some of
the object's components. This is achieved through access modifiers.
In Dart: 
- **Private members**: Achieved by prefixing a member (variable or method)
name with an underscore ( _ ). These members are private to their library (file), not just
the class. 
- **Public members**: All members without an underscore prefix are public and
accessible from anywhere. 
- **Getters and Setters**: Provide controlled access to private
instance variables, allowing validation or transformation of data before it's accessed or
modified.

### Example 2
**Method Overriding and Polymorphism**
**Method Overriding** allows a subclass to provide a specific implementation for a
method that is already defined in its superclass. The \`@override\` annotation is
recommended for clarity and compile-time checks.
**Polymorphism** (meaning "many forms") allows objects of different classes to be
treated as objects of a common superclass or interface. This enables a single interface
to represent different underlying forms of types, leading to flexible and extensible
code.
*Key aspects of Polymorphism in Dart:* 
- **Subtype Polymorphism**: A subclass object can be assigned to a superclass variable. 
- **Dynamic Dispatch**: The actual method executed at runtime depends on the object's *runtime type*, not its declared type.

Encapsulation protects data integrity and simplifies object interaction, while
polymorphism promotes code reusability and flexibility by allowing a single interface
to handle diverse object types.`,

    "Inheritance,  Abstract classes": `
### Example 1 
**Inheritance** is a fundamental OOP concept allowing a class (subclass) to inherit
properties and behaviors from another class (superclass), promoting code reuse.

***Single Inheritance and extends Keyword***
Dart supports single inheritance, meaning a class can only \`extend\` one parent class.
The \`extends\` keyword establishes this relationship.
- **Subclass inherits from Superclass**: A \`Car\` class can \`extend\` a \`Vehicle\` class,
inheriting its \`name\` and \`wheels\` properties and \`start()\`/ \`stop()\` methods.
- **super keyword**: Used in the subclass constructor (\`super(name, wheels)\`) to
call the parent's constructor, ensuring inherited properties are initialized. It's also
used to call overridden methods of the parent (\`super.displayInfo()\`).
- **Method Overriding**: Subclasses can provide their own implementation for
inherited methods, often calling the parent's method first using \`super\` .


### Example 2
**Abstract** classes serve as blueprints that cannot be instantiated directly, often
containing abstract methods that must be implemented by concrete subclasses.

An \`abstract class\` cannot be instantiated directly and is designed to be extended. It
can contain: 
- Abstract methods: Declared with abstract and no body (\`voiddraw();\`). 
Concrete subclasses must implement these. 
- Concrete methods: Have animplementation and can be inherited or overridden by subclasses.

Abstract classes are useful for defining common interfaces and providing partial
implementations, enforcing a contract for their subclasses

Inheritance and abstract classes are key to building hierarchical, reusable, and
extensible code structures in Dart.`,

    "Interfaces, Mixins, and Method Overriding":`
### Example 1
Dart provides powerful mechanisms for code reuse and flexible class hierarchies
beyond simple inheritance, including interfaces, mixins, and method overriding.
**Interfaces and implements Keyword**
In Dart, every class implicitly defines an interface. When a class \`implements\` another
class (or an abstract class acting as an interface), it must provide concrete
implementations for all the methods and instance variables declared in that interface.
- **Contract Enforcement:** Interfaces define a contract that implementing classes
must adhere to, ensuring a specific set of behaviors.
- **Polymorphism:** Allows objects of different classes to be treated uniformly if they
implement the same interface.

### Example 2 
**Mixins and Multiple Inheritance Patterns**
Dart does not support multiple inheritance (a class cannot extend more than one
class). However, mixins provide a way to reuse a class's code in multiple class
hierarchies. A mixin is a regular class used with the with keyword to share its
methods and instance variables.
- **Code Reuse**: Share common behaviors across different, unrelated class
hierarchies.
- **Composition:** Allows for flexible composition of behaviors into classes.

### Example 3 
**Override Annotations and Method Signatures**
**Method Overriding** is when a subclass provides a specific implementation for a
method already defined in its superclass. The \`@override\` annotation is highly
recommended for clarity and compile-time safety.
- **@override Annotation**: Indicates that a method is intended to override a
superclass member. Helps catch typos or incorrect signatures at compile-time.
- **Method Signatures**: For a method to correctly override another, it must have the
exact same name, number, and types of parameters, and return type as the
method in the superclass.
- **No Overloading**: Dart does not support method overloading (multiple methods
with the same name but different parameter lists within the same class).
    
These features collectively enable Dart developers to build highly modular, reusable,
and flexible class designs.`, 
  
  "Null Safety & Type System": `
### Example 1 
Dart's sound null safety is a powerful feature that eliminates null reference errors, a
common source of bugs. It ensures that variables cannot be null unless explicitly
declared as nullable. This, combined with Dart's robust type system, leads to more
reliable and maintainable code.
**Null Safety Fundamentals**
- **Non-nullable by default**: Variables are non-nullable unless marked with ? .
Attempting to assign null to a non-nullable variable results in a compile-time
error.
- **Nullable types (?)**: A \`?\` after a type (e.g., \`String?\`, \`int?\`) indicates that the
variable can hold \`null\`.
- **Null assertion operator (!)**: Used to assert that a nullable expression is non-null. Use with caution, as it throws a runtime error if the value is actually \`null\`.

### Example 2 
**Null-Aware Operators**
Dart provides concise operators for safely working with nullable types: 
- \`?.\` **(Null-aware access)**: Accesses a property or method only if the object is not null . If null ,
the expression evaluates to \`null\`.
- \`??\` **(Null-aware default value)**: Provides a default value if the expression on its left is \`null\`. 
- \`??= \` **(Null-aware assignment)**: Assigns a value to a variable only if the variable is currently \`null\`.

### Example 3 
Late Initialization and Lazy Evaluation
The \`late\` keyword allows declaring a non-nullable variable that will be initialized
later, before its first use. This enables **lazy evaluation**, where the initializer is run only
when the variable is first accessed, saving resources for expensive operations.
  
### Example 4 
**Type Promotion and Flow Analysis**
Dart's static analyzer intelligently promotes a variable's type to a more specific one
within certain scopes, based on control flow analysis (e.g., after a null check or an is
check)

**Migration Strategies for Legacy Code**
Migrating existing Dart projects to null safety is facilitated by the dart migrate tool.
The process involves updating dependencies, running the tool to suggest annotations,
reviewing changes, and thorough testing.
Dart's null safety significantly enhances code reliability and developer productivity by
preventing a whole class of common errors at compile time
`,
  "Error Handling & Exceptions": `
### Example 1
Error handling in Dart uses \`try-catch-finally\` blocks to manage unexpected
situations during program execution, ensuring application stability. Exceptions signal
recoverable errors, while \`Error\` types typically indicate programming bugs.
**Try-Catch-Finally Blocks**
- **try**: Contains code that might throw an exception.
- **on ExceptionType**: Catches specific exception types for precise handling.
- **catch (e, s)**: Catches any exception (\`e\`) and its stack trace (\`s\`) for debugging.
- **finally**: Code that always executes, regardless of whether an exception
occurred, typically for cleanup.

### Example 2 
**Throwing Custom Exceptions**
You can define custom exception classes by implementing the Exception interface to
represent specific application-level error conditions, improving code clarity and error
handling granularity

### Example 3 
**Built-in exception types**
Dart provides a variety of built-in exception types for common error scenarios.
Understanding these types helps in writing more specific and effective \`catch\` clauses.

**Code Explanation 
- **FormatException**: Thrown when an input string is not in a valid format (e.g.,
\`int.parse("abc")\`).
- **StateError**: Thrown when an object is in an invalid state for the operation (e.g.,
accessing \`first\` on an empty list).
- **RangeError**: Thrown when a value is outside a specified valid range (e.g.,
accessing a list element at an invalid index).
- **TypeError**: Thrown at runtime when an operation is performed on an object
that is not of the expected type (often seen with \`dynamic\` types or incorrect
casts).
**Other common exceptions**: Dart also has \`IOException\` for I/O operations,
\`TimeoutException\` for operations that exceed a time limit, and many more

### Example 4 
**Assert Statements for Debugging**
\`assert\` statements are used to check conditions that are expected to be true during
development. If an \`assert\` condition is false, an \`AssertionError\` is thrown. They are
active only in debug mode and are ignored in production, making them useful for
catching bugs early without performance overhead.

### Example 5 
**Stack Traces and Error Debugging**
A stack trace provides a detailed list of function calls that led to an exception, crucial
for pinpointing the error's origin and understanding its propagation through the code.
You can capture the stack trace using \`catch (e, s)\`.

Effective error handling is vital for creating robust and user-friendly Dart applications.`,

  "Asynchronous Programming (Future, async/await, Streams)": `
### Example 1
Dart is single-threaded, but it handles long-running operations efficiently using
asynchronous programming concepts like Future , async / await , and Stream . This
prevents the UI from freezing and ensures a responsive application.
***Understanding Asynchronous vs. Synchronous Execution***
- **Synchronous:** Tasks execute one after another. A long-running synchronous task
blocks the main thread, making the application unresponsive.
- **Asynchronous:** Tasks can run in the background without blocking the main
thread. The main thread continues execution, and the asynchronous task notifies
it upon completion.

**Code Explanation**
- **synchronousTask()**: This function simulates a blocking operation using
\`sleep()\` . When \`synchronousTask()\` is called, the \`main()\` function pauses for 2
seconds until \`synchronousTask()\` completes. This demonstrates how
synchronous code blocks the main thread.
- **asynchronousTask()**: This function uses \`Future.delayed()\` to simulate a non￾blocking operation. When \`asynchronousTask()\` is called, it immediately returns
a \`Future\`, and the \`main()\` function continues executing (\`print("Endasynchronous task...")\`). The message "Operation finished." from
\`asynchronousTask()\` appears after a delay, but without blocking the \`main()\`
function.

### Example 2 
**Future Basics and Completion Handling**
A Future represents a potential value or error that will be available at some point in
the future. It's used for single, one-time asynchronous operations.
- **States**: Uncompleted, Completed with a value, Completed with an error.
- **then()**: Registers a callback to be executed when the Future completes
successfully.
- **catchError()**: Registers a callback to handle errors if the Future completes
with an error.
- **whenComplete()**: Registers a callback that runs regardless of success or failure.

### Exanple 3 
**async / await Syntax and Error Handling**
async and await provide a more synchronous-looking way to write asynchronous
code, making it easier to read and manage Future s.
- **async**: Marks a function as asynchronous, allowing it to use \`await\`.
- **await**: Pauses the execution of the \`async\` function until the \`Future\` it's waiting
on completes. It can only be used inside \`async\` functions.
- **Error Handling**: Use \`try-catch\` blocks with \`await\` to handle errors from
\`Future\` s.

### Example 4
**Stream Creation and Subscription**
A Stream represents a sequence of asynchronous events. It's used for multiple,
ongoing asynchronous operations (e.g., user input, network events).
- **Creation**: \`Stream.fromIterable()\`, \`Stream.periodic()\` , \`StreamController\`.
- **Subscription**: Use \`listen()\` to react to events, errors, and the stream's
completion.

### Example 5
**Stream Transformations and Operations**
Streams can be transformed and manipulated using various methods, similar to
Iterable methods: 
- \`map()\`: Transforms each event. 
- \`where()\`: Filters events based on a condition. 
- \`take()\` / \`skip()\`: Limits or skips events. 
- \`distinct()\`: Emits only events different from the previous one. 
- \`expand()\`: Transforms one event into zero ormore events. 
- \`fold()\`: Aggregates events into a single value (returns a \`Future\` ).

### Example 6 
**Isolates for Concurrent Programming**
Dart is single-threaded, but Isolates enable true concurrency by running code in
parallel on separate memory heaps. They communicate via message passing,
preventing blocking of the main event loop for CPU-intensive tasks.

*Asynchronous programming is crucial for building responsive and efficient Dart
applications, especially for I/O-bound or CPU-bound operations.*
`,


  "Generics in Dart": `
### Example 1 
Generics (or parameterized types) allow you to write flexible, reusable code that
works with different data types while maintaining type safety. They enable classes,
methods, and functions to operate on various types without losing static type
checking benefits.
**Generic Classes and Type Parameters**
Generic classes use **type parameters** (e.g.,\`T\`,\`E\`,\`K\`, \`V\`) as placeholders for actual
types, which are specified when an object is instantiated. This ensures type safety at
compile-time.

### Example 2 
**Generic Methods and Functions**
Methods and functions can also be generic, allowing them to operate on arguments of
various types while preserving type safety and promoting code reusability.

### Example 3
**Type Constraints and Bounded Generics**
Type constraints (or bounded generics) restrict the types that can be used as type
arguments. This is done using the \`extends\` keyword, ensuring that the type parameter
is a subtype of a specified class or interface.

### Example 4
**Generic Collections and Type Safety**
Dart's built-in collections (\`List\`, \`Set\`, \`Map\`) are generic, providing type safety by
ensuring that only elements of the declared type can be stored, preventing runtime
errors.

**Variance and Covariance Concepts**
Dart generics are invariant by default, meaning \`List<Dog>\` is not a subtype of
\`List<Animal>\`. This prevents potential runtime errors. However, Dart functions are
contravariant in their parameter types and covariant in their return types, allowing
for flexible function assignments.

**Type Erasure and Runtime Behavior**
Dart performs **type erasure** at runtime, meaning generic type arguments are not
available during execution. For example, \`List<int>\` and \`List<String>\` are both seen
as \`List<dynamic>\` at runtime. This means runtime type checks cannot distinguish
between generic type arguments, and care must be taken to avoid runtime errors
when dealing with \`dynamic\` types.
*Generics are crucial for writing flexible, type-safe, and reusable code in Dart, allowing
developers to build robust and scalable applications.*
`,

  "Dart Packages & Pub.dev": `
### Example 1 
Dart packages are reusable modules of Dart code that can be shared and used across
different projects. Pub.dev is Dart's official package repository, where developers can
find, publish, and manage Dart packages. Understanding how to work with packages is
essential for leveraging the rich Dart ecosystem and building applications efficiently.

**Understanding pubspec.yaml configuration**
The \`pubspec.yaml\` file is the heart of every Dart project. It's a YAML file that defines
the project's metadata, dependencies, and other configurations.

**Explanation**
- **name**: The name of your package. It should be a valid Dart package name
(lowercase, with underscores, no hyphens).
- **description**: A brief description of your package.
- **version**: The current version of your package, following Semantic Versioning
(SemVer) principles (MAJOR.MINOR.PATCH).
- **environment**: Specifies the Dart SDK versions that your package is compatible
with.
- **dependencies**: Lists the packages that your project depends on for its core
functionality. These are typically packages used in your lib folder.
-  \`flutter: sdk: flutter\` : This special entry indicates a dependency on the
Flutter SDK itself.
-  \`cupertino_icons: ^1.0.2\`: A common dependency for Flutter projects,
providing iOS-style icons. The ^ (caret) operator means "compatible with
version 1 .0 .2 and anything up to, but not including, 2 .0 .0 ".
-  \`http: ^1.1.0\`: A popular package for making HTTP requests.
- **dev_dependencies**: Lists packages that are only needed during development,
testing, or code generation, but not for the application's runtime. Examples
include testing frameworks (\`flutter_test\`) and linting rules (\`flutter_lints\`).
- **flutter (for Flutter projects)**: This section contains Flutter-specific
configurations, such as asset declarations, font definitions, and whether to use
Material Design.

### Example 2
**Adding and managing dependencies**
Dart's package manager, pub , makes it easy to add, update, and remove
dependencies from your project.

**Explanation**
- \`dart pub add <package_name>\` / \`flutter pub add <package_name>\`: This
command adds a package to your \`pubspec.yaml\` file under dependencies and
automatically runs pub get to download it. Use flutter pub add for Flutter
projects.
- \`dart pub get\`/ \`flutter pub get\`: After manually modifying \`pubspec.yaml\`
(e.g., adding a dependency by hand), you need to run this command to
download the packages and update your \`pubspec.lock\` file (which locks the
exact versions of your dependencies).
- \`dart pub upgrade\`/\`flutter pub upgrade\`: This command updates all
dependencies to the latest compatible versions specified in pubspec.yaml .
- \`dart pub remove <package_name>\`/ \`flutter pub remove <package_name>\`:
Removes a package from your \`pubspec.yaml\` and uninstalls it

### Example 3
**Publishing packages to pub.dev**
If you develop a useful Dart package, you can share it with the community by
publishing it to pub.dev.

**Explanation**
- \`pubspec.yaml\` **metadata**: Before publishing, ensure your \`pubspec.yaml\`
contains comprehensive metadata, including \`homepage\` , \`repository\` , and
\`issue_tracker\` URLs, and a clear \`description\`. This information helps others
understand and use your package.
- \`dart pub publish --dry-run\`: This command performs all the validation
checks that pub.dev would perform without actually publishing the package.
It's crucial for catching errors before a public release.
- \`dart pub publish\`: Once all checks pass and you're ready, this command
publishes your package to \`pub.dev\` . You'll need to be logged in with a Google
account.

### Example 4
**Package versioning and semantic versioning**
Dart packages adhere to Semantic Versioning (SemVer), a widely adopted convention
for version numbers. SemVer uses a three-part version number: MAJOR.MINOR.PATCH .

**Explanation**
- **MAJOR version**: Incremented for incompatible API changes. For example, if you
update from \`1.x.x\` to \`2.0.0\`, users of \`1.x.x\` might need to change their code.
- **MINOR version**: Incremented for new, backward-compatible functionality. For
example, \`1.0.0\` to \`1.1.0\` means new features were added, but existing code
should still work.
- **PATCH version**: Incremented for backward-compatible bug fixes. For example,
\`1.0.0\` to \`1.0.1\` means a bug was fixed without changing the API.
- **Dependency constraints in \`pubspec.yaml\`**:
-  \`http: ^1.1.0\`: The caret (\`^\`) operator is the most common. It means "any
version from 1 .1 .0 up to (but not including) 2 .0 .0 ". This allows for automatic
updates to new minor and patch versions without breaking changes.
-  \`path: 1.8.0\`: Specifies an exact version. This is generally discouraged
unless you have a very specific reason, as it can lead to dependency
conflicts.
-  \`test: ">=1.16.0 <1.18.0\`" : Defines a version range, allowing any version
greater than or equal to 1 .1 6 .0 and less than 1 .1 8 .0 .

### Example 5
**Local package development and path dependencies**
During development, you might want to work on a package locally and use it in
another local project without publishing it to pub.dev. This is where path
dependencies come in.
**Explanation**
- **Project structure**: You typically have a main application project (\`my_app\`) and a
separate local package project (\`my_local_package\`).
- **pubspec.yaml configuration**: In your \`my_app/pubspec.yaml\`, you can specify a
\`path\` dependency to point to your local package. This tells \`pub\` to look for the
package in the specified file system path instead of downloading it from pub.dev.
- **Benefits**: This setup is ideal for rapid iteration and testing of your package before
it's ready for public release.

### Example 6
**Popular Dart packages and ecosystem overview**
Dart has a vibrant and growing ecosystem of packages available on pub.dev. These
packages cover a wide range of functionalities, from HTTP networking to state
management, database access, and more.
**Explanation**
- **http**: For making HTTP requests to web servers.
- **path_provider**: (Flutter) For finding common locations on the file system (e.g.,
temporary directory, application documents directory).
- **shared_preferences**: (Flutter) For simple key-value storage on disk.
- **provider / bloc / riverpod**: (Flutter) Popular state management solutions.
- **sqflite**: (Flutter) For SQLite database integration.
- **flutter_svg**: (Flutter) For rendering SVG images.
**intl**: For internationalization and localization.
**json_serializable**: For automatic JSON serialization/deserialization.
**rxdart**: For reactive programming with Streams.
*This rich ecosystem significantly speeds up development by providing ready-to-use
solutions for common programming tasks.*`,


  "Mini Project: CLI Tool or Simple API Consumer": `
### Example 1
Building a mini-project is an excellent way to solidify your understanding of Dart
concepts and see how they apply in a practical context. This section outlines the steps
and best practices for creating a simple Command-Line Interface (CLI) tool or an API
consumer.

**Project planning and structure setup**
A well-organized project structure is crucial for maintainability and scalability. For a
Dart CLI tool, a typical structure involves separating executable code from library code,
and having dedicated folders for models, services, and tests.

**Explanation**
- \`my_cli_tool/\`: The root directory of your project.
- \`pubspec.yaml\`: The project configuration file. It defines metadata, dependencies
(\`http\` for API calls, \`args\` for command-line argument parsing), and dev
dependencies ( test for unit testing).
- \`bin/main.dart\`: This is the entry point for your CLI application. When you run
\`dart run\`, this file is executed. It typically handles argument parsing and
orchestrates calls to your core logic.
- \`lib/\`: This directory contains the reusable Dart code (your library). It should be
independent of the \`bin/main.dart\` and can be published as a package if
desired.
-  \`lib/models/user.dart\`: Defines the data structure (class) for a User . It
includes a factory constructor fromJson for easy deserialization from
JSON data received from an API.
-  \`lib/services/user_service.dart\`: Contains the business logic for
fetching user data. It encapsulates the HTTP requests and JSON parsing,
separating concerns from the main CLI logic.
- \`test/\`: Contains unit tests for your library code.
- \`README.md\`: Provides documentation for your project, including installation,
usage, and development instructions

### Example 2 
**Command-line argument parsing**
CLI tools often need to accept input from the command line. Dart provides the args
package to simplify parsing command-line arguments and options.

**Explanation**
- **import 'package:args/args.dart';**: Imports the necessary package.
- **ArgParser()**: Creates an instance of \`ArgParser\` to define the expected
arguments and flags.
- **addOption()**: Defines an option that takes a value (e.g., \`--id <ID>\` or \`-i<ID>\`). 
You can specify \`abbr\` (short name), \`help\` text, and \`valueHelp\`.
- **addFlag()**: Defines a boolean flag (e.g., \`--all\` or \`-a\`). \`negatable:false\`
means it cannot be turned off (e.g., \`--no-all\`).
- **parser.parse(arguments)**: Parses the command-line arguments provided to
\`main()\` and returns an \`ArgResults\` object.
- **argResults['id']**/ **argResults['all']**: Accesses the parsed values. The
example demonstrates checking for the presence of flags and options and
handling invalid input (e.g., non-numeric ID).

### Example 3
**File I/O operations and data persistence**
Many applications need to read from or write to files for configuration, logging, or data
persistence. Dart provides the \`dart:io\` library for file system operations.

**Explanation**
- **import 'dart:io';**: Imports the necessary library.
- **File(fileName)**: Creates a \`File\` object representing a file at the given path.
Note that this doesn't create the file on disk, just a reference to it.
- **file.writeAsString()**: Writes a string to the file. By default, it overwrites
existing content. \`mode: FileMode.append\` can be used to append to the file
instead.
- **file.readAsString()**: Reads the entire content of the file as a single string.
- **file.readAsLines()**: Reads the content of the file line by line, returning a
\`List<String>\`.
- \`file.exists()\`: Checks if the file exists on disk.
- \`file.delete()\`: Deletes the file from disk.
Data persistence (conceptual): For more complex data, you would typically
serialize objects to formats like JSON (\`dart:convert\` library) and save them to
files, or use a local database solution.

### Example 4
**HTTP requests and JSON parsing**
Consuming web APIs is a common task for many applications. Dart provides the http
package for making HTTP requests and dart:convert for JSON
serialization/deserialization.

**Explanation**
- **import 'package:http/http.dart' as http;**: Imports the http package.
- **import 'dart:convert';**: Imports the JSON conversion utilities.
- **http.get(Uri.parse(url))**: Makes an HTTP GET request. \`Uri.parse()\` is used
to convert the URL string into a \`Uri\` object.
- **await**: Since HTTP requests are asynchronous, await is used to wait for the
response.
- **response.statusCode**: Checks the HTTP status code to determine if the request
was successful (e.g., \`200 OK\` ).
- **jsonDecode(response.body)**: Parses the JSON string from the response body
into a Dart \`Map\` or \`List\` of \`Map\`s.
- **User.fromJson(json)**: The \`factory\` constructor in the \`User\` model is used to
convert the parsed JSON Map into a User object.
- **Error handling**: The \`UserService\` demonstrates handling different HTTP status
codes (e.g., \`404 Not Found\` ) and throwing appropriate exceptions.

### Example 5 
**Error handling in real applications**
Robust error handling is critical for production-ready applications. It involves
anticipating potential failures and providing graceful recovery or informative
messages.

**Explanation** 
- **Layered error handling**: As seen in \`user_service.dart\`, errors from HTTP
requests are caught and re-thrown as more specific exceptions (e.g.,
\`Exception('User not found')\`). This allows the calling code (in
\`bin/main.dart\`) to catch and handle these exceptions at a higher level.
- **try-catch in main**: The main function in \`bin/main.dart\` (conceptual) would
wrap the service calls in try-catch blocks to display user-friendly error
messages instead of crashing the application.
**Informative messages**: When an error occurs, provide clear and concise
messages to the user, guiding them on what went wrong and how to potentially
fix it.

### Example 6
**Testing and documentation best practices**
Writing tests ensures your code works as expected and helps prevent regressions.
Good documentation makes your project easy to understand and use.

**Explanation**
- **test/user_service_test.dart**: This file contains unit tests for the
\`UserService\`.
- **import 'package:test/test.dart';**: Imports the test package, Dart's
standard testing framework.
- **group()**: Organizes related tests.
- **setUp()**: A function that runs before each test (or group of tests) to set up
common resources.
- **test()**: Defines an individual test case.
- **expect()**: Used to assert conditions. \`expect(user, isA<User>())\` checks if
user is an instance of \`User.throwsA(isA<Exception>())\` checks if a function
throws an exception of a certain type.
- **Mocking (conceptual)**: For real-world testing of services that depend on external
resources (like HTTP), you would typically use mocking frameworks (e.g.,
\`mockito\`) to simulate responses and isolate the code under test.
- **README.md**: A comprehensive \`README.md\` file is essential. It should cover:
-  **Features**: What the tool does.
-  **Installation**: How to set up the project.
-  **Usage**: How to run the tool with examples.
-  **Development**: How to run tests, contribute, etc.
-  **License**: The licensing information.

**Packaging and distribution strategies**
Once your CLI tool is ready, you'll want to package and distribute it so others can use
it.

- **Dart AOT (Ahead-of-Time) compilation**: Dart can compile your application to a
standalone executable for a specific platform (Windows, macOS, Linux). This
creates a single file that can be run without installing the Dart SDK.
-  \`dart compile exe bin/main.dart -o my_cli_tool\` : Compiles
\`main.dart\` into an executable named \`my_cli_tool\`.
- **Distributing via pub.dev**: If your mini-project is primarily a library or framework
that others can import into their Dart projects, publishing it to pub.dev is the
standard way to distribute it.
**Packaging for specific OS**: For more advanced distribution, you might create
platform-specific installers (e.g., .deb for Debian/Ubuntu, .msi for Windows).
This often involves external tools or shell scripting.
- **Dockerization**: For complex CLI tools or server-side applications, Docker can be
used to package your application and its dependencies into a portable container,
ensuring consistent execution across different environments.
*This mini-project guide provides a foundation for building practical Dart applications,
combining various language features and best practices.*
  `,
  };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};  

const getDartExercises = (lessonTitle) => {
  const exercises = {
"Introduction to Dart & Setup":`
- Install Dart SDK and create your first "Hello World" program using the Dart CLI.
- Set up a development environment with VS Code and run Dart scripts with proper project structure.
- Create a simple program that demonstrates Dart's compilation to native code and displays system information.`,
 
"Variables and Data Types":`
- Create a program that demonstrates all Dart data types (int, double, String, bool, List, Map).
-Build a type conversion utility that safely converts between different data types with validation.
- Design a variable scope demonstration showing the difference between var, final, const, and late keywords.`,

"String interpolation and manipulation":`
- Create a dynamic template system using string interpolation for generating personalized messages.
- Build a text formatter that uses string methods to clean, capitalize, and format user input.
- Design a multi-line string processor that handles complex string operations and formatting.`,

"Operators in Dart":`
- Create a comprehensive calculator that demonstrates arithmetic, comparison, and logical operators.
- Build a conditional assignment program using null-aware operators (??, ??=, ?.).
- Design a bitwise operation utility that performs and explains binary operations on integers.`,

"Conditional Statements in Dart":`
- Create a grade classification system using if-else statements and switch expressions.
- Build a user menu system with nested conditional logic and input validation.
- Design a decision tree program that uses complex conditional statements for problem-solving.`,

"Loops and Loop Control in Dart":`
- Create a pattern generator using for, while, and do-while loops with break and continue statements.
- Build a data processor that iterates through collections using for-in loops and where clauses.
- Design a game loop system that demonstrates different loop types and control flow.`,

"Functions in Dart":`
- Create a mathematical function library with pure functions and side-effect demonstrations.
- Build a utility toolkit with both named and anonymous functions for common operations.
- Design a function composition system that combines smaller functions into larger operations.`,

"Function Parameters and Scope in Dart":`
- Create a flexible API client using optional positional and named parameters with defaults.
- Build a configuration system that demonstrates lexical scope and closure behavior.
- Design a callback-based event system using function parameters and higher-order functions.`,

"Collections (Lists and Sets)":`
- Create a playlist manager that uses List operations (add, remove, sort, filter).
- Build a unique tag system using Set operations and demonstrate set mathematics.
- Design a data deduplication tool that processes collections and maintains order.`,

"Maps and Iterable Methods in Dart":`
- Create a contact management system using Map data structures with nested information.
- Build a data transformation pipeline using map(), where(), fold(), and reduce() methods.
- Design a caching system that uses Maps for efficient data storage and retrieval.`,

"Object-Oriented Programming in Dart":`
- Create a library management system with Book, Author, and Library classes.
- Build a shapes calculator with geometric classes that demonstrate object relationships.
- Design a task management system with Task and Project classes showing OOP principles.`,

"Encapsulation and Polymorphism":`
- Create a banking system with private fields and public methods for account operations.
- Build an animal hierarchy demonstrating polymorphism with method overriding.
- Design a plugin system where different implementations share the same interface.`,

"Inheritance, Abstract classes":`
- Create a vehicle management system with abstract Vehicle class and concrete implementations.
- Build a game character system using inheritance for shared attributes and behaviors.
- Design a shape drawing application with abstract Shape class and specific shape implementations.`,

"Interfaces, Mixins, and Method Overriding":`
- Create a multimedia player using interfaces for different media types and mixin capabilities.
- Build a logging system that uses mixins to add logging capabilities to various classes.
- Design a notification system with interfaces and mixins for different delivery methods.`,

"Null Safety & Type System":`
- Create a user input validator that properly handles nullable types and null safety.
- Build a data parser that uses null-aware operators and null safety features effectively.
- Design a configuration loader that demonstrates late initialization and nullable handling.`,

"Error Handling & Exceptions":`
- Create a file processor with comprehensive try-catch blocks and custom exception types.
- Build a network client that handles various exception scenarios with proper recovery.
- Design a validation framework that uses exceptions for error reporting and handling.`,

"Asynchronous Programming (Future, async/await, Streams)":`
- Create a web data fetcher using Future and async/await for API communication.
- Build a real-time data processor using Streams for continuous data handling.
- Design a concurrent task manager that coordinates multiple asynchronous operations.`,

"Generics in Dart": `
- Create a type-safe data structure library using generic classes and methods.
- Build a repository pattern implementation that works with different data types using generics.
- Design a caching system that uses generics to store and retrieve different object types.`,

"Dart Packages & Pub.dev":`
- Create a custom package and publish it to pub.dev with proper documentation.
- Build a project that integrates multiple external packages for different functionalities.
- Design a package dependency management system and demonstrate version constraints.`,

"Mini Project: CLI Tool or Simple API Consumer":`
- Create a command-line weather application that fetches data from a public API.
- Build a task management CLI tool with file persistence and user interaction.
- Design a simple REST API consumer that performs CRUD operations and handles responses.`
  };
  return exercises[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};



module.exports = {
  getDartLessonConcepts,
  getDartCodeExample,
  getDartCodeExplanation,
  getDartExercises,
};
