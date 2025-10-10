// PHP & MySQL Basics helper functions
const getPHPLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to PHP": `
- What is PHP and its role in web development
- Basic PHP syntax and structure
- Writing your first PHP script
- PHP tags and output statements`,

    "PHP Syntax and Variables": `
- PHP syntax rules and conventions
- Variable declaration and naming
- Data type basics
- Variable scope
- Constants and magic constants`,

    "PHP Data Types": `
- Scalar types (string, integer, float, boolean)
- Compound types (array, object)
- Special types (NULL, resource)
- Type juggling and type casting
- Type checking functions`,

    "PHP Operators": `
- Arithmetic operators
- Assignment operators
- Comparison operators
- Logical operators
- Increment/Decrement operators`,

   "PHP Control Structures": `
- if, else, elseif statements
- switch statements
- while, do-while loops
- for, foreach loops
- break and continue statements`,

    "PHP Functions": `
- Function declaration and calling
- Parameters and return values
- Variable scope in functions
- Anonymous functions
- Built-in functions`,

    "PHP Arrays": `
- Indexed arrays
- Associative arrays 
- Multidimensional arrays
- Array functions
- Array iteration`,

    "PHP Strings": `
- String creation and manipulation
- String functions
- String concatenation
- String formatting
- Regular expressions`,

    "PHP Forms and User Input": `
- HTML forms
- Form submission methods
- Handling form data
- Input validation
- Security considerations`,

    "PHP Form Validation": `
- Client-side vs server-side validation
- Required fields
- Data type validation
- Custom validation rules
- Error handling`,

    "PHP File Handling": `
- Opening and closing files
- Reading from files
- Writing to files
- File permissions
- File uploads`,

    "PHP Cookies and Sessions": `
- Setting and retrieving cookies
- Session management
- Session security
- Cookie security`,

    "PHP Error Handling": `
- Error types
- Error reporting
- Custom error handling
- Exception handling
- Logging errors`,

    "PHP Database Connection": `
- Connecting to MySQL
- Connection parameters
- Error handling
- Connection pooling`,

    "MySQL Basics": `
- MySQL introduction
- Database creation
- Table creation
- Data types
- Primary keys`,

    "MySQL Tables and Data Types": `
- Creating tables
- Data types in MySQL
- Constraints
- Indexes
- Table relationships`,

    "MySQL CRUD Operations": `
- INSERT statements
- SELECT statements
- UPDATE statements
- DELETE statements
- Best practices`,

    "MySQL Joins": `
- INNER JOIN
- LEFT JOIN
- RIGHT JOIN
- FULL JOIN
- Self JOIN`,

    "MySQL Indexes": `
- Index types
- Creating indexes
- Index optimization
- Index limitations
- Best practices`,

    "MySQL Transactions": `
- Transaction basics
- ACID properties
- Transaction management
- Rollback and commit
- Isolation levels`,

    "PHP and MySQL Integration": `
- Connecting PHP to MySQL
- Executing queries
- Handling results
- Prepared statements
- Error handling`,

    "PHP Prepared Statements": `
- Benefits of prepared statements
- Creating prepared statements
- Binding parameters
- Executing prepared statements
- Security considerations`,

    "PHP Database Security": `
- SQL injection prevention
- Input validation
- Escaping output
- Secure connections`,

    "PHP Authentication": `
- User authentication
- Password hashing
- Session management
- Remember me functionality
- Security considerations`,

    "PHP Authorization": `
- Role-based access control
- Permission management
- Access control lists
- Security best practices
- Implementation`,

    "PHP Password Hashing": `
- Hashing algorithms
- Password hashing functions
- Salt and pepper
- Password verification
- Security considerations`,

    "PHP File Upload": `
- File upload basics
- Handling file uploads
- File validation
- Security considerations`,

    "PHP Image Processing": `
- Image manipulation
- Image upload
- Image validation
- Security considerations`,

    "PHP Email Handling": `
- Sending emails
- Email validation
- Email templates
- Security considerations`,

    "PHP Date and Time": `
- Date and time functions
- Time zones
- Date formatting
- Date calculations`,

    "PHP Regular Expressions": `
- Regular expression basics
- Pattern matching
- String replacement
- Validation`,

    "PHP JSON Handling": `
- JSON encoding
- JSON decoding
- JSON validation
- Error handling`,

    "PHP XML Processing": `
- XML basics
- XML parsing
- XML generation
- XML validation`,

    "PHP RESTful APIs": `
- RESTful API basics
- API endpoints
- HTTP methods
- Authentication`,

    "PHP Project Structure": `
- Project organization
- File structure
- Naming conventions
- Documentation`,

    "PHP Best Practices": `
- Coding standards
- Security best practices
- Performance optimization
- Error handling
- Documentation`
  };
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3";
};

const getPHPCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to PHP": `
// Example 1: What is PHP and its Role in Web Development
    
// Example 2: Basic PHP Syntax and Structure
   <!DOCTYPE html>
<html>
<head>
 <title>My First PHP Page</title>
</head>
<body>
 <h1>Welcome to my website!</h1>
 <?php
 // This is a single-line comment in PHP
 /*
 * This is a multi-line comment
 * in PHP
 */
 echo "<p>Hello from PHP!</p>";
 ?>
 <p>This is regular HTML content.</p>
</body>
</html>

// Example 3: Writing Your First PHP Script
 <?php
    echo "This is my first PHP script!";
    echo "<br>"; // An HTML line break
    echo "It's running on a web server.";
?>
 
// Example 4: PHP Tags and Output Statements
  <?php
$username = "Dave";
?>
<!DOCTYPE html>
<html>
<body>

<p>
    Welcome, <?= $username ?>!
</p>

<?php
    echo "Using echo, I can output multiple strings:", " ", "like this.";
    print "<br>";
    print "Using print, I can only output one string.";
?>

</body>
</html>`,
    
    "PHP Syntax and Variables": ` 
// Example 1: PHP Syntax Rules and Conventions
  <!DOCTYPE html>
<html>
<body>

<h1>My First PHP Page</h1>

<?php
// A variable to store a string
$message = "Hello, World!"; 

// Echoing the variable to the HTML output
echo $message;
?>

<p>This is standard HTML.</p>

</body>
</html>

// Example 2: Variable Declaration and Naming
    <?php
  // Valid variable names
$name = "John Doe";
$_age = 30;
$user_id = 12345;
$firstName = "Jane";

  // Invalid variable names (would cause an error)
  // $123 = "Test";
  // $my-variable = "Invalid";

echo "Name: " . $name . "<br>";
echo "Age: " . $_age;
?>

// Example 3: Data Type Basics
    <?php
$stringVar = "Hello!"; // String
$intVar = 100;         // Integer
$floatVar = 10.5;      // Float
$boolVar = true;       // Boolean

echo gettype($stringVar) . "<br>";
echo gettype($intVar) . "<br>";
echo gettype($floatVar) . "<br>";
echo gettype($boolVar) . "<br>";

$arrayVar = array("apple", "banana");
var_dump($arrayVar);
?>

// Example 4: Variable Scope
<?php
$globalVar = "I am a global variable."; // Global scope

function testScope() {
    $localVar = "I am a local variable."; // Local scope
    echo $localVar . "<br>";

    // Trying to access globalVar without 'global' keyword will fail
    // echo $globalVar; 
    
    global $globalVar;
    echo $globalVar . "<br>";
}

testScope();

function staticCounter() {
    static $count = 0; // Static variable
    $count++;
    echo $count . "<br>";
}

staticCounter(); // Outputs 1
staticCounter(); // Outputs 2
?> 

// Example 5: Constants and Magic Constants
   <?php
  // Declaring a constant
define("PI", 3.14159);
define("GREETING", "Welcome to my website!");

echo PI . "<br>";
echo GREETING . "<br>";

  // Trying to reassign a constant will cause an error
  // PI = 3.0; // This is not allowed

echo "This line is " . _ _LINE_ _ . " of the script.<br>";
echo "The full path of this file is " . _ _FILE_ _ . "<br>";
echo "The current function name is " . _ _FUNCTION_ _ . ".";
?>`,

    "PHP Data Types": `
// Example 1: Scalar Types
    <?php
$name = "Alice";      // String
$age = 25;            // Integer
$price = 19.99;       // Float
$is_active = true;    // Boolean

echo "Name: " . $name . "<br>";
echo "Age: " . $age . "<br>";
echo "Price: " . $price . "<br>";
echo "Is active: " . ($is_active ? 'Yes' : 'No') . "<br>";

echo gettype($name) . "<br>";
echo gettype($age) . "<br>";
echo gettype($price) . "<br>";
echo gettype($is_active) . "<br>";
?>
    
// Example 2: Compound Types
   <?php
  // An associative array
$person = array(
    "name" => "Bob",
    "age" => 30,
    "city" => "New York"
);

echo "Name: " . $person["name"] . "<br>";
echo "Age: " . $person["age"] . "<br>";
echo "City: " . $person["city"] . "<br>";

  // An object
class Car {
    public $brand;
    public $model;

    public function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }
}

$myCar = new Car("Toyota", "Camry");
echo "Car: " . $myCar->brand . " " . $myCar->model . "<br>";

var_dump($person);
var_dump($myCar);
?>
    
// Example 3: Special Types 
  <?php
$x = "Hello";
unset($x); // Unsets the variable, making it NULL
var_dump($x);

$file = fopen("test.txt", "w");
echo "The file handle is a: " . gettype($file) . "<br>";
fclose($file);

$y = null;
var_dump($y);
?>


// Example 4: Type Juggling and Type Casting
    <?php
  // Type Juggling
$sum = 10 + "20";
echo "10 + '20' = " . $sum . ", Type: " . gettype($sum) . "<br>"; // Output: 30, integer

  // Type Casting
$str_num = "50.5";
$int_num = (int)$str_num;
$float_num = (float)$str_num;

echo "Original string: " . $str_num . ", Type: " . gettype($str_num) . "<br>";
echo "Casted to integer: " . $int_num . ", Type: " . gettype($int_num) . "<br>";
echo "Casted to float: " . $float_num . ", Type: " . gettype($float_num) . "<br>";
?>

// Example 5: Type Checking Functions
   <?php
$val = "PHP";

if (is_string($val)) {
    echo "$val is a string.<br>";
} else {
    echo "$val is not a string.<br>";
}

$num = 100;
if (is_int($num)) {
    echo "$num is an integer.<br>";
}

$array_data = [1, 2, 3];
if (is_array($array_data)) {
    echo "The variable is an array.<br>";
}
?>`,

    "PHP Operators": `
// Example 1: Arithmetic Operators  
    <?php
$a = 15;
$b = 4;

echo "Addition: " . ($a + $b) . "\n";      // 19
echo "Subtraction: " . ($a - $b) . "\n";   // 11
echo "Multiplication: " . ($a * $b) . "\n";// 60
echo "Division: " . ($a / $b) . "\n";      // 3.75
echo "Modulus: " . ($a % $b) . "\n";       // 3 (remainder)
echo "Exponentiation: " . ($a ** $b) . "\n"; // 15^4 = 50625
?>

// Example 2: Assignment Operators
    <?php
$x = 10;
echo "Initial x = $x\n";

$x += 5;  // $x = $x + 5
echo "After += : $x\n";

$x -= 3;  // $x = $x - 3
echo "After -= : $x\n";

$x *= 2;  // $x = $x * 2
echo "After *= : $x\n";

$x /= 4;  // $x = $x / 4
echo "After /= : $x\n";

$x %= 3;  // $x = $x % 3
echo "After %= : $x\n";
?>
 
// Example 3: Comparison Operators
    <?php
$a = 10;
$b = "10";

var_dump($a == $b);   // true (values equal, type not checked)
var_dump($a === $b);  // false (type checked: int vs string)
var_dump($a != $b);   // false (they are equal)
var_dump($a !== $b);  // true (different type)
var_dump($a > 5);     // true
var_dump($a < 5);     // false
var_dump($a >= 10);   // true
var_dump($a <= 9);    // false
?>

// Example 4: Logical Operators
<?php
$x = true;
$y = false;

var_dump($x && $y); // false (AND)
var_dump($x || $y); // true  (OR)
var_dump(!$x);      // false (NOT)
var_dump($x xor $y); // true (XOR: true if only one is true)
?>

// Example 5: Increment/Decrement Operators
   <?php
$num = 5;

echo "Initial: $num\n";

echo "Post-increment: " . $num++ . "\n"; // prints 5, then num = 6
echo "After post-increment: $num\n";

echo "Pre-increment: " . ++$num . "\n"; // increments first, then prints 7

echo "Post-decrement: " . $num-- . "\n"; // prints 7, then num = 6
echo "After post-decrement: $num\n";

echo "Pre-decrement: " . --$num . "\n"; // decrements first, then prints 5
?>`,

    "PHP Control Structures": `
// Example 1: if, else, elseif statements
<?php
$score = 78;          // try values like 101, -5, "80", 49
$isMakeUp = false;    // did the student take a make-up test?

if (!is_numeric($score)) {
    echo "Invalid input: score must be a number.\n";
} elseif ($score < 0 || $score > 100) {
    echo "Score out of range. Please enter 0–100.\n";
} elseif ($score >= 70) {
    // Distinction path with a small rule tweak
    if ($isMakeUp && $score == 70) {
        echo "Grade: B (capped due to make-up policy)\n";
    } else {
        echo "Grade: A\n";
    }
} elseif ($score >= 60) {
    echo "Grade: B\n";
} elseif ($score >= 50) {
    echo "Grade: C\n";
} elseif ($score >= 45) {
    echo "Grade: D\n";
} else {
    echo "Grade: F — remediation required.\n";
}

// Example 2: switch statements
  <?php
$day = 3; // try 1..7, "3", 0, or "sun"

switch ($day) {
    case 1:
        echo "Monday\n";
        break;
    case 2:
        echo "Tuesday\n";
        break;
    case 3:
        echo "Wednesday\n";
        break;
    case 4:
        echo "Thursday\n";
        break;
    case 5:
        echo "Friday\n";
        break;
    case 6:
    case 7:
        // fall-through groups weekends together
        echo "Weekend\n";
        break;
    default:
        echo "Unknown day\n";
}

// Example 3: while and do…while loops
    <?php
// WHILE: pre-check loop (may run zero times)
$i = 1;
$sum = 0;
while ($i <= 5) {
    $sum += $i;  // accumulate
    $i++;        // update to avoid infinite loop
}
echo "Sum of 1..5 (while): $sum\n";

// DO-WHILE: post-check loop (runs at least once)
$attempts = 0;
$maxAttempts = 3;
$connected = false;

do {
    $attempts++;
    // Simulate a flaky connection that succeeds on the 2nd attempt
    $connected = ($attempts === 2);
    echo "Attempt $attempts: " . ($connected ? "Connected\n" : "Failed\n");
} while (!$connected && $attempts < $maxAttempts);

echo $connected ? "Proceed with download.\n" : "Could not connect after $attempts attempts.\n";

// Example 4: for and foreach loops
  <?php
  // FOR: classic counter loop (index-based)
$total = 0;
for ($i = 1; $i <= 10; $i++) {
    if ($i % 2 === 0) {
        $total += $i; // sum even numbers
    }
}
echo "Sum of even numbers 1..10 (for): $total\n";

 // FOREACH: iterate arrays (values and keys)
$prices = [ "apple" => 300, "banana" => 150, "cherry" => 450 ]; // prices in Naira (₦)
foreach ($prices as $item => $naira) {
    echo ucfirst($item) . " costs ₦$naira\n";
}

 // FOREACH by reference: mutate array values
$discounts = [1000, 2000, 3000]; // ₦
foreach ($discounts as &$d) {
    $d = (int)($d * 0.9); // apply 10% discount
}
unset($d); // IMPORTANT: break the reference
echo "Discounted: " . implode(", ", $discounts) . "\n";
 
// Example 5: break and continue statements
   <?php
$nums = [12, -3, 7, 0, 25, -8, 4];
$positives = [];

foreach ($nums as $n) {
    if ($n < 0) {
        continue;        // skip negatives
    }
    if ($n === 0) {
        break;           // stop processing entirely at first zero
    }
    $positives[] = $n;   // collect positives until zero
}

echo "Collected positives (until zero): " . implode(", ", $positives) . "\n";`,

    "PHP Functions": `
// Example 1: Function declaration and calling
  <?php
 function sayHello() {
 echo "Hello, World!<br>";
 }
   // Calling the function
 sayHello();
 function greet($name) {
 echo "Hello, " . $name . "!<br>";
 }
   // Calling the function with an argument
 greet("Alice");
 greet("Bob");
?>   

// Example 2: Parameters and return values
  <?php
  // Function with parameters
function addNumbers($a, $b) {
    return $a + $b; // return result instead of echo
}

$sum1 = addNumbers(10, 5);
$sum2 = addNumbers(7, 3);

echo "10 + 5 = $sum1\n";
echo "7 + 3 = $sum2\n";

  // Function with default parameter
function greetUser($name = "Guest") {
    echo "Hello, $name!\n";
}

greetUser("Alice");  // Hello, Alice!
greetUser();         // Hello, Guest!
?>

// Example 3: Variable scope in functions
<?php
 $globalMessage = "This is a global message.";
 function displayMessage() {
  // echo $globalMessage; // This would cause an error (undefined 
variable)
 global $globalMessage; // Accessing the global variable
 echo $globalMessage . "<br>";
 $localMessage = "This is a local message.";
 echo $localMessage . "<br>";
 }
 displayMessage();
  // echo $localMessage; // This would cause an error (undefined variable)
 echo $globalMessage . "<br>";
  // Using $GLOBALS superglobal
 function displayGlobalUsingGlobals() {
 echo $GLOBALS["globalMessage"] . " (using $GLOBALS)<br>";
 }
 displayGlobalUsingGlobals();
?>

// Example 4: Anonymous functions
  <?php
 $greet = function($name) {
 echo "Hello, " . $name . " from an anonymous function!<br>";
 };
 $greet("Charlie");
   // Anonymous function as a callback
 $numbers = [1, 2, 3, 4, 5];
 $squaredNumbers = array_map(function($number) {
 return $number * $number;
 }, $numbers);
 echo "Squared numbers: " . implode(", ", $squaredNumbers) . "<br>";
   // Anonymous function using 'use' to inherit variables from parent scope
 $factor = 10;
 $multiplyByFactor = function($num) use ($factor) {
 return $num * $factor;
 };
 echo "5 multiplied by factor: " . $multiplyByFactor(5) . "<br>";
?>

// Example 5: Built-in functions
 <?php
 // String functions
 $text = "Hello, PHP World!";
 echo "Length of text: " . strlen($text) . "<br>";
 echo "Replaced text: " . str_replace("PHP", "Awesome", $text) . "<br>";
 echo "Uppercase: " . strtoupper($text) . "<br>";
 // Array functions
 $numbers = [10, 20, 30];
 echo "Number of elements: " . count($numbers) . "<br>";
 array_push($numbers, 40);
 echo "Array after push: " . implode(", ", $numbers) . "<br>";
 echo "Does 20 exist in array? " . (in_array(20, $numbers) ? "Yes" : 
"No") . "<br>";
 // Mathematical functions
 echo "Random number (1-100): " . rand(1, 100) . "<br>";
 echo "Square root of 64: " . sqrt(64) . "<br>";
 // Date and Time functions
 echo "Current date: " . date("Y-m-d H:i:s") . "<br>";
?>
`,

    "PHP Arrays": `
// Example 1: Indexed arrays
    <?php
  // Method 1: Assigning values directly (index starts from 0)
 $fruits[0] = "Apple";
 $fruits[1] = "Banana";
 $fruits[2] = "Cherry";
 echo "Fruit at index 0: " . $fruits[0] . "<br>";

  // Method 2: Using array() constructor
 $cars = array("Volvo", "BMW", "Toyota");
 echo "Car at index 1: " . $cars[1] . "<br>";

  // Method 3: Using short array syntax (PHP 5.4+)
 $animals = ["Dog", "Cat", "Bird"];
 echo "Animal at index 2: " . $animals[2] . "<br>";

  // Adding elements to an indexed array (automatically assigns next 
available index)
 $animals[] = "Fish";
 echo "New animal: " . $animals[3] . "<br>";

 // Looping through an indexed array
 echo "<p>All fruits:</p>";
 for ($i = 0; $i < count($fruits); $i++) {
 echo $fruits[$i] . "<br>";
 }
?>

// Example 2: Associative arrays
    <?php
   // Method 1: Using array() constructor with key-value pairs
 $student = array(
 "name" => "Alice",
 "age" => 20,
 "major" => "Computer Science"
 );
 echo "Student Name: " . $student["name"] . "<br>";
 echo "Student Age: " . $student["age"] . "<br>";
   // Method 2: Using short array syntax (PHP 5.4+)
 $person = [
 "firstName" => "Bob",
 "lastName" => "Smith",
 "email" => "bob.smith@example.com"
 ];
 echo "Person Email: " . $person["email"] . "<br>";
    // Adding/modifying elements
 $person["phone"] = "123-456-7890";
 echo "Person Phone: " . $person["phone"] . "<br>";
   // Looping through an associative array
 echo "<p>Student Details:</p>";
 foreach ($student as $key => $value) {
 echo $key . ": " . $value . "<br>";
 }
?>


// Example 3: Multidimensional arrays
 <?php
  // A 2-dimensional array (array of arrays)
 $studentsGrades = [
 "John" => [
 "Math" => 90,
 "Science" => 85,
 "English" => 92
 ],
 "Jane" => [
 "Math" => 95,
 "Science" => 88,
 "English" => 90
 ],
 "Mike" => [
 "Math" => 78,
 "Science" => 80,
 "English" => 82
 ]
 ];
 echo "John's Math grade: " . $studentsGrades["John"]["Math"] . "<br>";
 echo "Jane's English grade: " . $studentsGrades["Jane"]["English"] . "
<br>";
  // Looping through a 2D array
 echo "<p>All Students' Grades:</p>";
 foreach ($studentsGrades as $studentName => $subjects) {
 echo "<h3>" . $studentName . "</h3>";
 foreach ($subjects as $subjectName => $grade) {
 echo $subjectName . ": " . $grade . "<br>";
 }
 }
 // A 3-dimensional array (e.g., storing city temperatures for different 
days)
 $cityTemperatures = [
 "New York" => [
 "Monday" => ["morning" => 15, "afternoon" => 20],
 "Tuesday" => ["morning" => 12, "afternoon" => 18]
 ],
 "London" => [
 "Monday" => ["morning" => 10, "afternoon" => 14],
 "Tuesday" => ["morning" => 8, "afternoon" => 12]
 ]
 ];
 echo "New York Monday Afternoon Temperature: " . $cityTemperatures["New 
York"]["Monday"]["afternoon"] . "°C<br>";
?>

// Example 4: Array functions
 <?php
 $numbers = [4, 2, 8, 1, 5];
 echo "Original numbers: " . implode(", ", $numbers) . "<br>";
 sort($numbers);
 echo "Sorted numbers (asc): " . implode(", ", $numbers) . "<br>";
 $ages = ["Peter" => 35, "Ben" => 37, "Joe" => 43];
 asort($ages); // Sort by value
 echo "Sorted ages (by value): ";
 foreach ($ages as $name => $age) {
 echo $name . ": " . $age . " ";
 }
 echo "<br>";
 array_push($numbers, 9, 7);
 echo "Numbers after push: " . implode(", ", $numbers) . "<br>";
 $lastElement = array_pop($numbers);
 echo "Popped element: " . $lastElement . ", Array now: " . implode(", ", 
$numbers) . "<br>";
 $moreNumbers = [10, 1, 20];
 $mergedArray = array_merge($numbers, $moreNumbers);
 echo "Merged array: " . implode(", ", $mergedArray) . "<br>";
 echo "Is 8 in merged array? " . (in_array(8, $mergedArray) ? "Yes" : 
"No") . "<br>";
 $uniqueArray = array_unique([1, 2, 2, 3, 1, 4]);
 echo "Unique array: " . implode(", ", $uniqueArray) . "<br>";
?>

// Example 5: Array iteration (Iterating Indexed Arrays)
<?php
 $fruits = ["Apple", "Banana", "Orange"];
 echo "<p>Iterating Indexed Array with foreach:</p>";
 foreach ($fruits as $fruit) {
 echo $fruit . "<br>";
 }
 echo "<p>Iterating Indexed Array with for loop (using index):</p>";
 for ($i = 0; $i < count($fruits); $i++) {
 echo $fruits[$i] . "<br>";
 }
?>

// Example 6: Iterating Associative Arrays
<?php
 $student = [
 "name" => "David",
 "age" => 21,
 "course" => "Physics"
 ];
 echo "<p>Iterating Associative Array with foreach:</p>";
 foreach ($student as $key => $value) {
 echo ucfirst($key) . ": " . $value . "<br>"; // ucfirst() 
capitalizes the first letter
 }
?> `,

    "PHP Strings": `
// Example 1: String creation 
    <?php
 $name = "Alice";
 $singleQuoteString = 'Hello, $name!'; // Output: Hello, $name!
 $doubleQuoteString = "Hello, $name!"; // Output: Hello, Alice!
 echo $singleQuoteString . "<br>";
 echo $doubleQuoteString . "<br>";
 $multilineString = "This is a
 multi-line string.";
 echo nl2br($multilineString) . "<br>"; // nl2br converts newlines to 
<br> for browser display
?>
   
// Example 2: manipulation
  <?php
 $text = " Hello PHP World! ";
 echo "Original: '" . $text . "'<br>";
 echo "Length: " . strlen($text) . "<br>";
 echo "Trimmed: '" . trim($text) . "'<br>"; // Removes whitespace from 
beginning and end
 echo "Uppercase: " . strtoupper($text) . "<br>";
 echo "Lowercase: " . strtolower($text) . "<br>";
 $substring = substr($text, 5, 3); // Start at index 5, get 3 characters
 echo "Substring (PHP): '" . $substring . "'<br>";
 $replacedText = str_replace("PHP", "Awesome", $text);
 echo "Replaced: '" . $replacedText . "'<br>";
 $position = strpos($text, "PHP");
 echo "Position of 'PHP': " . ($position !== false ? $position : "Not 
found") . "<br>";
?>

// Example 3: Strings Function 
  <?php
 $sentence = "PHP is a powerful scripting language.";
 echo "Original: " . $sentence . "<br>";
 echo "Word count: " . str_word_count($sentence) . "<br>";
 echo "Reversed: " . strrev($sentence) . "<br>";
 $email = " test@example.com ";
 echo "Trimmed email: '" . trim($email) . "'<br>";
 $csvData = "apple,banana,cherry";
 $fruitsArray = explode(",", $csvData);
 echo "Exploded array: " . implode(" | ", $fruitsArray) . "<br>";
 $formattedName = "john doe";
 echo "Formatted Name: " . ucwords($formattedName) . "<br>";
?>

// Example 4: String concatenation
  <?php
 $firstName = "Alice";
 $lastName = "Smith";
 $fullName = $firstName . " " . $lastName; // Concatenating strings with 
a space
 echo "Full Name: " . $fullName . "<br>";
 $greeting = "Hello";
 $greeting .= " World!"; // Using the concatenation assignment operator 
(.=)
 echo $greeting . "<br>";
 $age = 30;
 $info = "Name: " . $fullName . ", Age: " . $age . "."; // Concatenating 
strings and numbers
 echo $info . "<br>";
?>

// Example 5: String formatting
 <?php
 $name = "Bob";
 $amount = 123.456;
 $quantity = 5;
 $formattedString = sprintf("Hello, %s! Your total is $%.2f for %d 
items.", $name, $amount, $quantity);
 echo $formattedString . "<br>";
 printf("The temperature is %.1f degrees Celsius.<br>", 25.78);
 $product = "Laptop";
 $price = 999.99;
 $stock = 10;
 printf("Product: %-10s | Price: $%8.2f | Stock: %d<br>", $product, 
$price, $stock);
 // %-10s: left-align string in a field of 10 characters
 // %8.2f: float with 2 decimal places, right-aligned in a field of 8 
characters
?>

// Example 6: Regular expressions
 <?php
 $text = "The quick brown fox jumps over the lazy dog.";
 // Check if string contains "fox"
 if (preg_match("/fox/", $text)) {
 echo "'fox' found in the text.<br>";
 }
 // Replace all occurrences of "the" (case-insensitive)
 $newText = preg_replace("/the/i", "a", $text);
 echo "Replaced text: " . $newText . "<br>";
 // Extract all numbers from a string
 $data = "Item1: 123, Item2: 45, Item3: 6789";
 preg_match_all("/\d+/", $data, $matches);
 echo "Numbers found: " . implode(", ", $matches[0]) . "<br>";
 // Validate email format (simple example)
 $email = "test@example.com";
 if (preg_match("/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/", 
$email)) {
 echo "Valid email format.<br>";
 } else {
 echo "Invalid email format.<br>";
 }
?>`,

    "PHP Forms and User Input": `
// Example 1: Basic HTML Form ( index.html or index.php )
<!DOCTYPE html>
<html>
<head>
 <title>User Registration</title>
</head>
<body>
 <h2>Register Here</h2>
 <form action="process.php" method="post">
 <label for="name">Name:</label><br>
 <input type="text" id="name" name="username" required><br><br>
 <label for="email">Email:</label><br>
 <input type="email" id="email" name="email" required><br><br>
 <input type="submit" value="Submit">
 </form>
</body>
</html>
   
// Example 2: Form submission methods (process.php (to handle POST data))
  <?php
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
 $username = $_POST["username"];
 $email = $_POST["email"];
 echo "<h2>Registration Successful!</h2>";
 echo "<p>Welcome, " . htmlspecialchars($username) . "!</p>";
 echo "<p>Your email: " . htmlspecialchars($email) . "</p>";
 } else {
 echo "<p>Form not submitted via POST method.</p>";
 }
?>

// Example 3: Handling form data
 Handling form data
PHP provides superglobal arrays to access form data: $_GET , $_POST , and $_REQUEST .
• $_GET : An associative array of variables passed to the current script via the URL
parameters.
• $_POST : An associative array of variables passed to the current script via the HTTP
POST method.
• $_REQUEST : An associative array that by default contains the contents of $_GET ,
$_POST , and $_COOKIE .
It's crucial to always check if form fields are set and not empty before using them, typically
using isset() and empty() .

// Example 4: Input validation
 <?php
 $nameErr = $emailErr = $websiteErr = "";
 $name = $email = $website = "";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Validate Name
 if (empty($_POST["name"])) {
 $nameErr = "Name is required";
 } else {
 $name = test_input($_POST["name"]);
   // Check if name contains only letters and whitespace
 if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
 $nameErr = "Only letters and white space allowed";
 }
 }
 // Validate Email
 if (empty($_POST["email"])) {
 $emailErr = "Email is required";
 } else {
 $email = test_input($_POST["email"]);
   // Check if email address is well-formed
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
 $emailErr = "Invalid email format";
 }
 }
 // Validate Website (optional field)
 if (!empty($_POST["website"])) {
 $website = test_input($_POST["website"]);
 // Check if URL address syntax is valid
 if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?
=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $website)) {
 $websiteErr = "Invalid URL";
 }
 }
 }
 function test_input($data) {
 $data = trim($data);
 $data = stripslashes($data);
 $data = htmlspecialchars($data);
 return $data;
 }
?>


<!DOCTYPE html>
<html>
<head>
 <title>Form Validation</title>
 <style>
 .error {color: #FF0000;}
 </style>
</head>
<body>
 <h2>PHP Form Validation Example</h2>
 <p><span class="error">* required field</span></p>
 <form method="post" action="<?php echo 
htmlspecialchars($_SERVER["PHP_SELF"]);?>">
 Name: <input type="text" name="name" value="<?php echo $name;?>">
 <span class="error">* <?php echo $nameErr;?></span>
 <br><br>
 E-mail: <input type="text" name="email" value="<?php echo $email;?>">
 <span class="error">* <?php echo $emailErr;?></span>
 <br><br>
 Website: <input type="text" name="website" value="<?php echo 
$website;?>">
 <span class="error"><?php echo $websiteErr;?></span>
 <br><br>
 <input type="submit" name="submit" value="Submit">
 </form>
 <?php
 if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($nameErr) && 
empty($emailErr) && empty($websiteErr)) {
 echo "<h2>Your Input:</h2>";
 echo "Name: " . $name . "<br>";
 echo "Email: " . $email . "<br>";
 echo "Website: " . $website . "<br>";
 }
 ?>
</body>
</html>

// Example 5: : Basic XSS Prevention with htmlspecialchars()
   <?php
 $userInput = "<script>alert('XSS Attack!');</script><h1>Malicious 
Title</h1>";
 // Without htmlspecialchars() - vulnerable to XSS
 echo "<h2>Unsafe Output:</h2>";
 echo $userInput;
 // With htmlspecialchars() - safe output
 echo "<h2>Safe Output:</h2>";
 echo htmlspecialchars($userInput);
?>`,

    "PHP Form Validation": `
// Example 1: Client-side vs server-side validation
    <?php
    $name = \"\";
    $nameErr = \"\";
    if ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {
    if (empty($_POST[\"name\"])) {
    $nameErr = \"Name is required\";
       } else {
      $name = test_input($_POST[\"name\"]);
        }
      }
        ?>
     
// Example 2: Required fields
<?php
 $name = $email = "";
 $nameErr = $emailErr = "";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
 if (empty($_POST["name"])) {
 $nameErr = "Name is required";
 } else {
 $name = htmlspecialchars(trim($_POST["name"]));
 }
 if (empty($_POST["email"])) {
 $emailErr = "Email is required";
 } else {
 $email = htmlspecialchars(trim($_POST["email"]));
 }
 if (empty($nameErr) && empty($emailErr)) {
 echo "<p>All required fields are filled!</p>";
 echo "Name: " . $name . "<br>";
 echo "Email: " . $email . "<br>";
 } else {
 echo "<p>Please correct the errors below.</p>";
 }
 }
?>

<!DOCTYPE html>
<html>
<head>
 <title>Required Fields Validation</title>
 <style>.error {color: red;}</style>
</head>
<body>
 <form method="post" action="<?php echo 
htmlspecialchars($_SERVER["PHP_SELF"]);?>">
 Name: <input type="text" name="name" value="<?php echo $name;?>">
 <span class="error">* <?php echo $nameErr;?></span><br><br>
 Email: <input type="text" name="email" value="<?php echo $email;?>">
 <span class="error">* <?php echo $emailErr;?></span><br><br>
 <input type="submit" value="Submit">
 </form>
</body>
</html>

// Example 3: Data type validation
<?php
 $age = $email = $url = "";
 $ageErr = $emailErr = $urlErr = "";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
   // Validate Age (must be an integer)
 if (empty($_POST["age"])) {
 $ageErr = "Age is required";
 } else {
 $age = htmlspecialchars(trim($_POST["age"]));
 if (!filter_var($age, FILTER_VALIDATE_INT)) {
 $ageErr = "Invalid age format (must be an integer)";
 } else if ($age < 0 || $age > 120) {
 $ageErr = "Age must be between 0 and 120";
 }
 }
   // Validate Email
 if (empty($_POST["email"])) {
 $emailErr = "Email is required";
 } else {
 $email = htmlspecialchars(trim($_POST["email"]));
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
 $emailErr = "Invalid email format";
 }
 }
  // Validate URL
 if (!empty($_POST["url"])) {
 $url = htmlspecialchars(trim($_POST["url"]));
 if (!filter_var($url, FILTER_VALIDATE_URL)) {
 $urlErr = "Invalid URL format";
 }
 }
 if (empty($ageErr) && empty($emailErr) && empty($urlErr)) {
 echo "<p>All data types are valid!</p>";
 echo "Age: " . $age . "<br>";
 echo "Email: " . $email . "<br>";
 echo "URL: " . $url . "<br>";
 } else {
 echo "<p>Please correct the data type errors.</p>";
 }
 }
?>

<!DOCTYPE html>
<html>
<head>
 <title>Data Type Validation</title>
 <style>.error {color: red;}</style>
</head>
<body>
 <form method="post" action="<?php echo 
htmlspecialchars($_SERVER["PHP_SELF"]);?>">
 Age: <input type="text" name="age" value="<?php echo $age;?>">
 <span class="error">* <?php echo $ageErr;?></span><br><br>
 Email: <input type="text" name="email" value="<?php echo $email;?>">
 <span class="error">* <?php echo $emailErr;?></span><br><br>
 Website: <input type="text" name="url" value="<?php echo $url;?>">
 <span class="error"><?php echo $urlErr;?></span><br><br>
 <input type="submit" value="Submit">
 </form>
</body>
</html>


// Example 4: Custom validation rules
 <?php
 $password = $studentId = "";
 $passwordErr = $studentIdErr = "";
 if ($_SERVER["REQUEST_METHOD"] == "POST") {
 // Custom Password Validation: At least 8 characters, one uppercase, 
one lowercase, one number, one special character
 if (empty($_POST["password"])) {
 $passwordErr = "Password is required";
 } else {
 $password = htmlspecialchars(trim($_POST["password"]));
 $pattern = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).
{8,}$/";
 if (!preg_match($pattern, $password)) {
 $passwordErr = "Password must be at least 8 characters long 
and contain at least one uppercase letter, one lowercase letter, one number, 
and one special character.";
 }
 }
  // Custom Student ID Validation: Format like 'S1234567' (S followed 
by 7 digits)
 if (empty($_POST["student_id"])) {
 $studentIdErr = "Student ID is required";
 } else {
 $studentId = htmlspecialchars(trim($_POST["student_id"]));
 if (!preg_match("/^S\d{7}$/", $studentId)) {
 $studentIdErr = "Invalid Student ID format (e.g., S1234567)";
 }
 }
 if (empty($passwordErr) && empty($studentIdErr)) {
 echo "<p>Custom validation passed!</p>";
 echo "Password (hashed for display): " . 
password_hash($password, PASSWORD_DEFAULT) . "<br>";
 echo "Student ID: " . $studentId . "<br>";
 } else {
 echo "<p>Please correct the custom validation errors.</p>";
 }
 }
?>

<!DOCTYPE html>
<html>
<head>
 <title>Custom Validation Rules</title>
 <style>.error {color: red;}</style>
</head>
<body>
 <form method="post" action="<?php echo 
htmlspecialchars($_SERVER["PHP_SELF"]);?>">
 Password: <input type="password" name="password" value="<?php echo 
$password;?>">
 <span class="error">* <?php echo $passwordErr;?></span><br><br>
 Student ID: <input type="text" name="student_id" value="<?php echo 
$studentId;?>">
 <span class="error">* <?php echo $studentIdErr;?></span><br><br>
 <input type="submit" value="Submit">
 </form>
</body>
</html>`,


    "PHP File Handling": `
// Example 1: Opening and closing files   
<?php
 $filename = "my_log.txt";
   // Open file for writing (creates if not exists, truncates if exists)
 $fileHandle = fopen($filename, "w");
 if ($fileHandle) {
 echo "File '" . $filename . "' opened successfully for writing.<br>";
   // Perform write operations here
 fwrite($fileHandle, "Log entry: " . date("Y-m-d H:i:s") . " - 
Application started.\n");
 fclose($fileHandle);
 echo "File closed.<br>";
 } else {
 echo "Error: Could not open file '" . $filename . "' for writing.
<br>";
 }
   // Open file for reading
 $fileHandleRead = fopen($filename, "r");
 if ($fileHandleRead) {
 echo "File '" . $filename . "' opened successfully for reading.<br>";
   // Perform read operations here
 $content = fread($fileHandleRead, filesize($filename));
 echo "Content: " . htmlspecialchars($content) . "<br>";
 fclose($fileHandleRead);
 echo "File closed.<br>";
 } else {
 echo "Error: Could not open file '" . $filename . "' for reading.
<br>";
 }
?>
   
// Example 2: Reading from files
<?php
 $filename = "data.txt";
    // Create a dummy file for reading
 file_put_contents($filename, "Line 1\nLine 2\nLine 3\n");
 echo "<p>Reading entire file with file_get_contents():</p>";
 $content = file_get_contents($filename);
 echo nl2br(htmlspecialchars($content)) . "<br>";
 echo "<p>Reading file line by line with fgets():</p>";
 $fileHandle = fopen($filename, "r");
 if ($fileHandle) {
 while (!feof($fileHandle)) { // Loop until end of file
 echo htmlspecialchars(fgets($fileHandle)) . "<br>";
 }
 fclose($fileHandle);
 }
 echo "<p>Reading file into an array with file():</p>";
 $lines = file($filename);
 foreach ($lines as $lineNumber => $lineContent) {
 echo "Line " . ($lineNumber + 1) . ": " . 
htmlspecialchars($lineContent) . "<br>";
 }
?>
  
// Example 3: Writing to files
  <?php
 $logFile = "app_log.txt";
 // Write (overwrite) content to file
 file_put_contents($logFile, "First log entry.\n");
 echo "'" . $logFile . "' created/overwritten with 'First log entry.'.
<br>";
   // Append content to file
 file_put_contents($logFile, "Second log entry (appended).\n", 
FILE_APPEND);
 echo "'Second log entry' appended to '" . $logFile . "'.<br>";
   // Using fopen and fwrite for more control
 $fileHandle = fopen("notes.txt", "w");
 if ($fileHandle) {
 fwrite($fileHandle, "My important note.\n");
 fwrite($fileHandle, "Another line of notes.\n");
 fclose($fileHandle);
 echo "'notes.txt' created and written to.<br>";
 } else {
 echo "Error: Could not open 'notes.txt' for writing.<br>";
 }
?>
   
// Example 4: File permissions
   <?php
 $fileToProtect = "secret_data.txt";
 file_put_contents($fileToProtect, "This is sensitive information.");
 echo "Original permissions of '" . $fileToProtect . "': " . 
substr(sprintf('%o', fileperms($fileToProtect)), -4) . "<br>";
  // Set permissions to 0600 (owner read/write, no one else access)
 if (chmod($fileToProtect, 0600)) {
 echo "Permissions changed to 0600 for '" . $fileToProtect . "'.<br>";
 } else {
 echo "Failed to change permissions for '" . $fileToProtect . "'.
<br>";
 }
 echo "New permissions: " . substr(sprintf('%o', 
fileperms($fileToProtect)), -4) . "<br>";
  // Attempt to read by others (will fail if web server user is not owner)
  // This part depends on your server's user configuration
  // $content = file_get_contents($fileToProtect);
  // echo "Content (if readable): " . htmlspecialchars($content) . "<br>";
?>

// Example 5: File uploads
  // HTML Form for File Upload ( upload_form.html or upload_form.php ):
<!DOCTYPE html>
<html>
<head>
 <title>File Upload</title>
</head>
<body>
 <h2>Upload an Image</h2>
 <form action="upload.php" method="post" enctype="multipart/form-data">
 Select image to upload:
 <input type="file" name="fileToUpload" id="fileToUpload"><br><br>
 <input type="submit" value="Upload Image" name="submit">
 </form>
</body>
</html>

  // PHP Script for Handling Upload ( upload.php ):

<?php
 $target_dir = "uploads/"; // Directory where uploaded files will be 
stored
 $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
 $uploadOk = 1;
 $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
  // Check if image file is a actual image or fake image
 if(isset($_POST["submit"])) {
 $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
 if($check !== false) {
 echo "File is an image - " . $check["mime"] . ".<br>";
 $uploadOk = 1;
 } else {
 echo "File is not an image.<br>";
 $uploadOk = 0;
 }
 }
   // Check if file already exists
 if (file_exists($target_file)) {
 echo "Sorry, file already exists.<br>";
 $uploadOk = 0;
 }
   // Check file size (e.g., max 500KB)
 if ($_FILES["fileToUpload"]["size"] > 500000) {
 echo "Sorry, your file is too large.<br>";
 $uploadOk = 0;
 }
   // Allow certain file formats
 if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType 
!= "jpeg"
 && $imageFileType != "gif" ) {
 echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.<br>";
 $uploadOk = 0;
 }
   // Check if $uploadOk is set to 0 by an error
 if ($uploadOk == 0) {
 echo "Sorry, your file was not uploaded.<br>";
   // if everything is ok, try to upload file
 } else {
 if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], 
$target_file)) {
 echo "The file ". htmlspecialchars( basename( 
$_FILES["fileToUpload"]["name"])) . " has been uploaded.<br>";
 } else {
 echo "Sorry, there was an error uploading your file.<br>";
 }
 }
?> `,


    "PHP Cookies and Sessions": `
// Example 1: Setting and retrieving cookies
  <?php
// Setting a cookie named "user" with value "John Doe"
// It will expire in 1 hour (3600 seconds)
setcookie("user", "John Doe", time() + 3600, "/");

// Check if the cookie is set
if(isset($_COOKIE["user"])) {
    echo "Cookie 'user' is set!<br>";
    echo "Value is: " . $_COOKIE["user"];
} else {
    echo "Cookie 'user' is not set.";
}
?>

// Example 2: Session management
<?php
// Start the session
session_start();

// Set session variables
$_SESSION["favcolor"] = "green";
$_SESSION["favanimal"] = "dog";  
echo "Session variables are set.";

// To retrieve session data on another page
// Make sure to call session_start() on that page as well
// echo "Favorite color is " . $_SESSION["favcolor"] . ".";

// To destroy a session
// session_unset();   // Unset all session variables
// session_destroy(); // Destroy the session
?> 
    
// Example 3: Session security
 <?php
session_start();

// After successful login, regenerate the session ID
if (isset($_POST['login_success'])) {
    session_regenerate_id(true); // true deletes the old session file
    $_SESSION['loggedin'] = true;
    echo "Session ID regenerated successfully.";
}
?>

// Example 4: Cookie security
<?php
// Set a secure and HttpOnly cookie
$cookie_name = "secure_user";
$cookie_value = "Jane Doe";
$expiration = time() + 3600; // 1 hour

// The secure flag requires HTTPS
// The HttpOnly flag prevents JavaScript from accessing the cookie
setcookie($cookie_name, $cookie_value, [
    'expires' => $expiration,
    'path' => '/',
    'secure' => true,    // Requires HTTPS
    'httponly' => true   // Prevents JavaScript access
]);
?>`,

    "PHP Error Handling": `
// Example 1: Error types
   // No code example 

// Example 2: Error reporting
<?php
// Turn off all error reporting
error_reporting(0);

// Report all errors except notices
error_reporting(E_ALL & ~E_NOTICE);

// Display errors in the browser (for development)
ini_set('display_errors', 1);

// Hide errors from the browser (for production)
ini_set('display_errors', 0);
?>

// Example 3: Custom error handling
<?php
// Custom error handler function
function customErrorHandler($errno, $errstr, $errfile, $errline) {
    echo "<b>Custom Error:</b> [$errno] $errstr<br>";
    echo "Error on line $errline in $errfile<br>";
}

// Set the custom error handler
set_error_handler("customErrorHandler");

// Trigger a warning to test the handler
$test = 10 / 0;
?>
    
// Example 4: Exception handling
<?php
function divide($numerator, $denominator) {
    if ($denominator == 0) {
        throw new Exception("Division by zero is not allowed.");
    }
    return $numerator / $denominator;
}

try {
    echo divide(10, 2) . "<br>";
    echo divide(10, 0);
} catch (Exception $e) {
    echo "Caught exception: " . $e->getMessage();
} finally {
    echo "<br>This block always executes.";
}
?>

// Example 5: Logging errors
<?php
// Set a custom error log file
ini_set('log_errors', 1);
ini_set('error_log', 'php-error.log');

// Log a custom message to the file
error_log("This is a test error message.");
?>`,

    "PHP Database Connection": `
// Example 1:  Connecting to MySQL
<?php
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "myDB";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // Set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

// Close the connection
$conn = null;
?>

// Example 2: Connection parameters
   // No code example 

// Example 3: Error handling
 <?php
// Same as above, just highlighting the error handling
$servername = "localhost";
$username = "invalid_user"; // Intentional invalid username
$password = "invalid_password";
$dbname = "myDB";

try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
} catch(PDOException $e) {
    // This block will execute if the connection fails
    echo "Connection failed: " . $e->getMessage();
}
?>

// Example 4: Connection pooling
<?php
// Using a persistent connection with PDO
$servername = "localhost";
$username = "root";
$password = "password";
$dbname = "myDB";

try {
    // Add PDO::ATTR_PERSISTENT => true to the options array
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password, [
        PDO::ATTR_PERSISTENT => true
    ]);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Persistent connection successful";
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
?>`,

    "MySQL Basics": `
// Example 1:  Database creation
   -- Create a new database called 'schoolDB'
CREATE DATABASE schoolDB;

-- View all databases
SHOW DATABASES;

-- Select database for use
USE schoolDB;

// Example 2: Table creation
    -- Create a 'students' table
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT,
    email VARCHAR(150)
);

// Example 3: Data types
CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits DECIMAL(3,1),
    start_date DATE
);

// Example 4: Primary keys
    -- Primary key ensures unique records
CREATE TABLE teachers (
    teacher_id INT AUTO_INCREMENT,
    teacher_name VARCHAR(100),
    PRIMARY KEY (teacher_id)
);`,

    "MySQL Tables and Data Types": `
// Example 1: - Creating tables
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

// Example 2: Data types in MySQL
   CREATE TABLE employees (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    hire_date DATE,
    salary DECIMAL(8,2),
    is_active BOOLEAN
);

// Example 3: Constraints
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(150) NOT NULL,
    age INT CHECK (age >= 18),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

// Example 4: Indexes
-- Add an index on the email column
CREATE INDEX idx_email ON users(email);

// Example 5: Table relationships
CREATE TABLE departments (
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(100) NOT NULL
);

CREATE TABLE employees (
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    dept_id INT,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`,

    "MySQL CRUD Operations": `
// Example 1: INSERT statements
  -- Insert a new user into the 'users' table
INSERT INTO users (username, email, age) 
VALUES ('john_doe', 'john@example.com', 25);

-- Insert multiple rows at once
INSERT INTO users (username, email, age)
VALUES 
('mary_jane', 'mary@example.com', 30),
('peter_parker', 'peter@example.com', 22);

// Example 2: SELECT statements
-- Select all columns
SELECT * FROM users;

-- Select specific columns
SELECT username, email FROM users;

-- Apply conditions with WHERE
SELECT * FROM users WHERE age > 20;

-- Sort results
SELECT * FROM users ORDER BY age DESC;

-- Limit number of results
SELECT * FROM users ORDER BY age LIMIT 3;

// Example 3: UPDATE statements
-- Update a user’s email
UPDATE users
SET email = 'new_john@example.com'
WHERE username = 'john_doe';

-- Increase age of all users by 1
UPDATE users
SET age = age + 1;

// Example 4: DELETE statements
-- Delete one user
DELETE FROM users WHERE username = 'mary_jane';

-- Delete all users
DELETE FROM users;    `,

    "MySQL Joins": `
// Example 1: INNER JOIN
-- Table: users
+----+----------+-------------------+
| id | username | email             |
+----+----------+-------------------+
| 1  | John     | john@example.com  |
| 2  | Mary     | mary@example.com  |
| 3  | Peter    | peter@example.com |
+----+----------+-------------------+
 //users.id is related to orders.user_id.
-- Table: orders
+----+---------+----------+
| id | user_id | product  |
+----+---------+----------+
| 1  | 1       | Laptop   |
| 2  | 1       | Phone    |
| 3  | 2       | Tablet   |
| 4  | 4       | Camera   |
+----+---------+----------+

  //INNER JOIN
  SELECT users.username, orders.product
FROM users
INNER JOIN orders ON users.id = orders.user_id;

//Result
+----------+---------+
| username | product |
+----------+---------+
| John     | Laptop  |
| John     | Phone   |
| Mary     | Tablet  |
+----------+---------+

// Example 2: LEFT JOIN
SELECT users.username, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id;

  //Result 
+----------+---------+
| username | product |
+----------+---------+
| John     | Laptop  |
| John     | Phone   |
| Mary     | Tablet  |
| Peter    | NULL    |
+----------+---------+

// Example 3:  RIGHT JOIN
SELECT users.username, orders.product
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;

  //Result 
+----------+---------+
| username | product |
+----------+---------+
| John     | Laptop  |
| John     | Phone   |
| Mary     | Tablet  |
| NULL     | Camera  |
+----------+---------+

// Example 4: FULL JOIN
SELECT users.username, orders.product
FROM users
LEFT JOIN orders ON users.id = orders.user_id

UNION

SELECT users.username, orders.product
FROM users
RIGHT JOIN orders ON users.id = orders.user_id;
  
   //Result 
+----------+---------+
| username | product |
+----------+---------+
| John     | Laptop  |
| John     | Phone   |
| Mary     | Tablet  |
| Peter    | NULL    |
| NULL     | Camera  |
+----------+---------+

// Example 5: Self JOIN
-- Table: employees
+----+----------+-----------+
| id | name     | managerId |
+----+----------+-----------+
| 1  | Alice    | NULL      |
| 2  | Bob      | 1         |
| 3  | Charlie  | 1         |
| 4  | Diana    | 2         |
+----+----------+-----------+

-- Query
SELECT e.name AS Employee, m.name AS Manager
FROM employees e
LEFT JOIN employees m ON e.managerId = m.id;

   //Result 
+----------+---------+
| Employee | Manager |
+----------+---------+
| Alice    | NULL    |
| Bob      | Alice   |
| Charlie  | Alice   |
| Diana    | Bob     |
+----------+---------+`,

    "MySQL Indexes": `
// Example 1:  Index types
    CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,    -- PRIMARY KEY index
    email VARCHAR(100) UNIQUE,            -- UNIQUE index
    username VARCHAR(50),                 
    bio TEXT,
    FULLTEXT(bio)                         -- FULLTEXT index
);

// Example 2: Creating indexes
-- Create a normal index
CREATE INDEX idx_username ON users(username);

-- Create a composite index (multiple columns)
CREATE INDEX idx_user_email ON users(username, email);

// Example 3: Index optimization
SELECT * FROM users WHERE username = 'Mary';  `,

    "MySQL Transactions": `
// Example 1: Transaction basics
START TRANSACTION;

UPDATE accounts SET balance = balance - 500 WHERE id = 1;
UPDATE accounts SET balance = balance + 500 WHERE id = 2;

COMMIT;

// Example 2: Transaction management
START TRANSACTION;  -- begins a transaction
COMMIT;             -- saves all changes
ROLLBACK;           -- undo changes

// Example 3: Rollback and commit
START TRANSACTION;

UPDATE accounts SET balance = balance - 1000 WHERE id = 1;
UPDATE accounts SET balance = balance + 1000 WHERE id = 999; -- error: user doesn’t exist

ROLLBACK;

// Example 4: Isolation levels
SET TRANSACTION ISOLATION LEVEL REPEATABLE READ;
START TRANSACTION;`,

    "PHP and MySQL Integration": `
// Example 1: Connecting PHP to MySQL   
    <?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "my_database";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>

// Example 2: Executing queries
<?php
$sql = "INSERT INTO users (name, email) VALUES ('John Doe', 'john@example.com')";
if (mysqli_query($conn, $sql)) {
    echo "Record inserted successfully";
} else {
    echo "Error: " . mysqli_error($conn);
}
?>

// Example 3: Handling results
<?php
$sql = "SELECT id, name, email FROM users";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . "<br>";
    }
} else {
    echo "No records found";
}
?>

// Example 4: Prepared statements
$stmt = $conn->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
$stmt->bind_param("ss", $name, $email);

$name = "Alice";
$email = "alice@example.com";
$stmt->execute();

// Example 5: Error handling
<?php
if (!$result) {
    echo "Error executing query: " . mysqli_error($conn);
}
?>`,

    "PHP Prepared Statements": `
// Example 1: Prepared Statements
   // No code example 

// Example 2: Creating prepared statements
<?php
// Assuming $pdo is a valid PDO connection object
$sql = "INSERT INTO users (name, email) VALUES (?, ?)";
$stmt = $pdo->prepare($sql);
?>

// Example 3: Binding parameters
<?php
$name = "Alice";
$email = "alice@example.com";

// Bind parameters to the placeholders
$stmt->bindValue(1, $name, PDO::PARAM_STR);
$stmt->bindValue(2, $email, PDO::PARAM_STR);
?>

// Example 4: Executing prepared statements
<?php
$stmt->execute();

echo "New record created successfully.";
?>`,

    "PHP Database Security": `
// Example 1: SQL injection prevention  
   <?php
// BAD: Vulnerable to SQL injection
$id = $_GET['id'];
$sql = "SELECT * FROM products WHERE id = $id";

// GOOD: Secure with prepared statements
$id = $_GET['id'];
$sql = "SELECT * FROM products WHERE id = ?";
$stmt = $pdo->prepare($sql);
$stmt->execute([$id]);
?>

// Example 2: Input validation
<?php
// Validate and sanitize an email address
$email = $_POST['email'];
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
}
?>

// Example 3: Escaping output
<?php
// Assume $username contains potentially malicious data
$username = "<script>alert('xss');</script>";
?>

<p>Welcome, <?php echo $username; ?></p>

<p>Welcome, <?php echo htmlspecialchars($username); ?></p> `,


  "PHP Authentication": `
// Example 1: User authentication
 <?php
// In a login script
$user_input_password = $_POST['password'];
$stored_hash = "..."; // Get this from the database for the given username

if (password_verify($user_input_password, $stored_hash)) {
    // Authentication successful
    session_start();
    $_SESSION['user_id'] = $user_id;
    echo "Login successful!";
} else {
    // Authentication failed
    echo "Invalid password.";
}
?>

// Example 2: Password hashing
<?php
// Hashing a password for storage
$plain_password = "mysecretpassword";
$hashed_password = password_hash($plain_password, PASSWORD_DEFAULT);

echo $hashed_password; // e.g., $2y$10$...
?>
  
// Example 3: Session management
<?php
// On login
session_start();
$_SESSION['user_id'] = $user_id;

// On a different page
session_start();
if (isset($_SESSION['user_id'])) {
    echo "Welcome back, user " . $_SESSION['user_id'];
} else {
    echo "You are not logged in.";
}
?>

// Example 4: Remember me functionality
<?php
// On login: store a persistent token in the database
$token = bin2hex(random_bytes(16));
$hashed_token = hash('sha256', $token);
// Store $hashed_token in the database with user ID and expiration
setcookie('remember_me', $token, time() + (86400 * 30), "/", "", true, true);
?>`,

    "PHP Authorization": `
// Example 1: Role-based access control
<?php
// Assuming the user's role is stored in a session
session_start();
$user_role = $_SESSION['user_role'] ?? 'guest';

if ($user_role === 'admin') {
    // Show admin-specific content
    echo "Welcome, Administrator! You have full access.";
} elseif ($user_role === 'editor') {
    // Show editor-specific content
    echo "You can edit content.";
} else {
    // Deny access
    echo "You do not have permission to view this page.";
}
?>

// Example 2: Access control lists
 <?php
// A simple ACL array
$acl = [
    'admin' => ['create', 'read', 'update', 'delete'],
    'editor' => ['create', 'read', 'update']
];

function hasPermission($role, $permission) {
    global $acl;
    return in_array($permission, $acl[$role] ?? []);
}

// Check if the current user can delete a post
$user_role = 'editor';
if (hasPermission($user_role, 'delete')) {
    echo "You can delete this post.";
} else {
    echo "Access denied.";
}
?>`,

    "PHP Password Hashing": `
// Example 1: Basic password hashing
    <?php
    $password = \"password123\";
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    if (password_verify($password, $hashed)) {  
    echo \"Password is valid\";
    }
    ?>

// Example 2: Password hashing with custom options
    <?php
    $password = \"userpassword\";
    $options = [
        'cost' => 12,
        'salt' => random_bytes(22)
    ];
    $hashed = password_hash($password, PASSWORD_BCRYPT, $options);
    ?>

// Example 3: Password verification in login
    <?php
    $inputPassword = $_POST['password'];
    $storedHash = \"\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi\";
    
    if (password_verify($inputPassword, $storedHash)) {
        echo \"Login successful\";
    } else {
        echo \"Invalid password\";
    }
    ?>

// Example 4: Password strength validation
    <?php
    function validatePassword($password) {
        if (strlen($password) < 8) {
            return false;
        }
        if (!preg_match('/[A-Z]/', $password)) {
            return false;
        }
        if (!preg_match('/[a-z]/', $password)) {
            return false;
        }
        if (!preg_match('/[0-9]/', $password)) {
            return false;
        }
        return true;
    }
    ?>

// Example 5: Secure password reset
    <?php
    $resetToken = bin2hex(random_bytes(32));
    $hashedToken = password_hash($resetToken, PASSWORD_DEFAULT);
    $expiryTime = time() + (60 * 60); // 1 hour
    ?>

// Example 6: Password hashing with argon2
    <?php
    $password = \"securepassword\";
    $hashed = password_hash($password, PASSWORD_ARGON2ID);
    echo $hashed;
    ?>

// Example 7: Password needs rehashing check
    <?php
    $password = $_POST['password'];
    $hash = $user['password_hash'];
    
    if (password_verify($password, $hash)) {
        if (password_needs_rehash($hash, PASSWORD_DEFAULT)) {
            $newHash = password_hash($password, PASSWORD_DEFAULT);
            // Update database with new hash
        }
        echo \"Login successful\";
    }
    ?>

// Example 8: Password salt generation
    <?php
    function generateSalt() {
        return bin2hex(random_bytes(16));
    }
    
    $salt = generateSalt();
    $password = \"mypassword\";
    $hashedPassword = hash('sha256', $password . $salt);
    ?>

// Example 9: Password policy enforcement
    <?php
    class PasswordPolicy {
        private $minLength = 8;
        private $requireUppercase = true;
        private $requireLowercase = true;
        private $requireNumbers = true;
        private $requireSymbols = true;
        
        public function validate($password) {
            $errors = [];
            if (strlen($password) < $this->minLength) {
                $errors[] = \"Password must be at least {$this->minLength} characters\";
            }
            // Additional validation logic...
            return empty($errors) ? true : $errors;
        }
    }
    ?>`,

    "PHP File Upload": `
// Example 1: Basic file upload
    <?php
    if ($_FILES[\"file\"][\"error\"] == 0) {
    move_uploaded_file($_FILES[\"file\"][\"tmp_name\"], \"uploads/\" . $_FILES[\"file\"][\"name\"]);
    }
    ?>

// Example 2: Secure file upload with validation
    <?php
    if ($_FILES["file"]["error"] == 0) {
        $allowed = ["jpg", "jpeg", "png", "gif"];
        $filename = $_FILES["file"]["name"];
        $filetype = pathinfo($filename, PATHINFO_EXTENSION);
        
        if (in_array(strtolower($filetype), $allowed)) {
            $upload_path = "uploads/" . time() . "_" . $filename;
            if (move_uploaded_file($_FILES["file"]["tmp_name"], $upload_path)) {
                echo "File uploaded successfully to: " . $upload_path;
            } else {
                echo "Error uploading file.";
            }
        } else {
            echo "Only JPG, JPEG, PNG & GIF files are allowed.";
        }
    }
    ?>

// Example 3: File upload with size validation
    <?php
    $maxFileSize = 5 * 1024 * 1024; // 5MB
    if ($_FILES["file"]["size"] > $maxFileSize) {
        echo "File too large. Maximum size is 5MB.";
    } else {
        // Process upload
        move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/" . $_FILES["file"]["name"]);
    }
    ?>

// Example 4: Multiple file upload
    <?php
    $uploadDir = "uploads/";
    $allowedTypes = ["jpg", "png", "gif"];
    
    foreach ($_FILES["files"]["error"] as $key => $error) {
        if ($error == UPLOAD_ERR_OK) {
            $tmpName = $_FILES["files"]["tmp_name"][$key];
            $name = $_FILES["files"]["name"][$key];
            $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
            
            if (in_array($ext, $allowedTypes)) {
                $newName = uniqid() . "." . $ext;
                move_uploaded_file($tmpName, $uploadDir . $newName);
            }
        }
    }
    ?>

// Example 5: File upload with MIME type validation
    <?php
    function validateFile($file) {
        $finfo = finfo_open(FILEINFO_MIME_TYPE);
        $mimeType = finfo_file($finfo, $file);
        finfo_close($finfo);
        
        $allowedMimes = ["image/jpeg", "image/png", "image/gif"];
        return in_array($mimeType, $allowedMimes);
    }
    
    if (validateFile($_FILES["file"]["tmp_name"])) {
        move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/" . $_FILES["file"]["name"]);
    }
    ?>

// Example 6: Secure file upload class
    <?php
    class FileUpload {
        private $allowedTypes;
        private $maxSize;
        private $uploadDir;
        
        public function __construct($types, $maxSize, $uploadDir) {
            $this->allowedTypes = $types;
            $this->maxSize = $maxSize;
            $this->uploadDir = $uploadDir;
        }
        
        public function upload($file) {
            if ($file["error"] !== UPLOAD_ERR_OK) {
                return false;
            }
            
            if ($file["size"] > $this->maxSize) {
                return false;
            }
            
            $ext = strtolower(pathinfo($file["name"], PATHINFO_EXTENSION));
            if (!in_array($ext, $this->allowedTypes)) {
                return false;
            }
            
            $filename = uniqid() . "." . $ext;
            return move_uploaded_file($file["tmp_name"], $this->uploadDir . $filename);
        }
    }
    ?>

// Example 7: File upload with database storage
    <?php
    function saveFileToDatabase($filename, $originalName, $size, $type) {
        $pdo = new PDO("mysql:host=localhost;dbname=uploads", $username, $password);
        $stmt = $pdo->prepare("INSERT INTO files (filename, original_name, size, type, uploaded_at) VALUES (?, ?, ?, ?, NOW())");
        return $stmt->execute([$filename, $originalName, $size, $type]);
    }
    
    if ($_FILES["file"]["error"] == 0) {
        $filename = uniqid() . "_" . $_FILES["file"]["name"];
        move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/" . $filename);
        saveFileToDatabase($filename, $_FILES["file"]["name"], $_FILES["file"]["size"], $_FILES["file"]["type"]);
    }
    ?>

// Example 8: File upload progress tracking
    <?php
    session_start();
    
    if (isset($_POST["upload"])) {
        $uploadDir = "uploads/";
        $file = $_FILES["file"];
        
        if ($file["error"] == 0) {
            $filename = basename($file["name"]);
            $target = $uploadDir . $filename;
            
            // Simulate progress
            for ($i = 0; $i <= 100; $i += 10) {
                $_SESSION["upload_progress"] = $i;
                usleep(100000); // 0.1 second delay
            }
            
            move_uploaded_file($file["tmp_name"], $target);
            echo "Upload complete!";
        }
    }
    ?>

// Example 9: File upload with virus scanning
    <?php
    function scanFile($filePath) {
        // This is a simplified example - use actual antivirus integration
        $suspiciousPatterns = ["eval(", "base64_decode(", "shell_exec("];
        $content = file_get_contents($filePath);
        
        foreach ($suspiciousPatterns as $pattern) {
            if (strpos($content, $pattern) !== false) {
                return false; // Suspicious file
            }
        }
        return true; // Safe file
    }
    
    if ($_FILES["file"]["error"] == 0 && scanFile($_FILES["file"]["tmp_name"])) {
        move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/" . $_FILES["file"]["name"]);
    } else {
        echo "File rejected for security reasons.";
    }
    ?>`,

    "PHP Image Processing": `
// Example 1: Basic image filter application
    <?php
    $image = imagecreatefromjpeg(\"image.jpg\");
    imagefilter($image, IMG_FILTER_GRAYSCALE);
    imagejpeg($image, \"grayscale.jpg\");
    ?>

// Example 2: Image resizing
    <?php
    function resizeImage($source, $destination, $width, $height) {
        $imageInfo = getimagesize($source);
        $sourceImage = imagecreatefromjpeg($source);
        $resizedImage = imagecreatetruecolor($width, $height);
        
        imagecopyresampled($resizedImage, $sourceImage, 0, 0, 0, 0, $width, $height, $imageInfo[0], $imageInfo[1]);
        imagejpeg($resizedImage, $destination);
        
        imagedestroy($sourceImage);
        imagedestroy($resizedImage);
    }
    
    resizeImage(\"original.jpg\", \"thumbnail.jpg\", 150, 150);
    ?>

// Example 3: Image watermarking
    <?php
    function addWatermark($source, $watermark, $destination) {
        $image = imagecreatefromjpeg($source);
        $watermarkImage = imagecreatefrompng($watermark);
        
        $watermarkWidth = imagesx($watermarkImage);
        $watermarkHeight = imagesy($watermarkImage);
        
        imagecopy($image, $watermarkImage, 10, 10, 0, 0, $watermarkWidth, $watermarkHeight);
        imagejpeg($image, $destination);
        
        imagedestroy($image);
        imagedestroy($watermarkImage);
    }
    ?>

// Example 4: Image cropping
    <?php
    function cropImage($source, $destination, $x, $y, $width, $height) {
        $sourceImage = imagecreatefromjpeg($source);
        $croppedImage = imagecreatetruecolor($width, $height);
        
        imagecopy($croppedImage, $sourceImage, 0, 0, $x, $y, $width, $height);
        imagejpeg($croppedImage, $destination);
        
        imagedestroy($sourceImage);
        imagedestroy($croppedImage);
    }
    
    cropImage(\"photo.jpg\", \"cropped.jpg\", 100, 100, 200, 200);
    ?>

// Example 5: Image format conversion
    <?php
    function convertImageFormat($source, $destination, $format) {
        $image = imagecreatefromjpeg($source);
        
        switch ($format) {
            case 'png':
                imagepng($image, $destination);
                break;
            case 'gif':
                imagegif($image, $destination);
                break;
            case 'webp':
                imagewebp($image, $destination);
                break;
        }
        
        imagedestroy($image);
    }
    
    convertImageFormat(\"photo.jpg\", \"photo.png\", 'png');
    ?>

// Example 6: Image rotation
    <?php
    function rotateImage($source, $destination, $angle) {
        $image = imagecreatefromjpeg($source);
        $rotated = imagerotate($image, $angle, 0);
        
        imagejpeg($rotated, $destination);
        
        imagedestroy($image);
        imagedestroy($rotated);
    }
    
    rotateImage(\"photo.jpg\", \"rotated.jpg\", 90);
    ?>

// Example 7: Image thumbnail generation
    <?php
    function generateThumbnail($source, $destination, $maxWidth = 150, $maxHeight = 150) {
        $imageInfo = getimagesize($source);
        $sourceImage = imagecreatefromjpeg($source);
        
        $ratio = min($maxWidth / $imageInfo[0], $maxHeight / $imageInfo[1]);
        $newWidth = $imageInfo[0] * $ratio;
        $newHeight = $imageInfo[1] * $ratio;
        
        $thumbnail = imagecreatetruecolor($newWidth, $newHeight);
        imagecopyresampled($thumbnail, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $imageInfo[0], $imageInfo[1]);
        
        imagejpeg($thumbnail, $destination);
        
        imagedestroy($sourceImage);
        imagedestroy($thumbnail);
    }
    ?>

// Example 8: Image validation and processing
    <?php
    function validateAndProcessImage($file) {
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        $maxSize = 5 * 1024 * 1024; // 5MB
        
        if (!in_array($file['type'], $allowedTypes)) {
            return false;
        }
        
        if ($file['size'] > $maxSize) {
            return false;
        }
        
        $imageInfo = getimagesize($file['tmp_name']);
        if ($imageInfo === false) {
            return false;
        }
        
        return true;
    }
    
    if (validateAndProcessImage($_FILES['image'])) {
        $image = imagecreatefromjpeg($_FILES['image']['tmp_name']);
        // Process the image
        imagejpeg($image, 'processed_' . $_FILES['image']['name']);
        imagedestroy($image);
    }
    ?>

// Example 9: Advanced image effects
    <?php
    function applyImageEffects($source, $destination) {
        $image = imagecreatefromjpeg($source);
        
        // Apply multiple filters
        imagefilter($image, IMG_FILTER_CONTRAST, -20);
        imagefilter($image, IMG_FILTER_BRIGHTNESS, 20);
        imagefilter($image, IMG_FILTER_GAUSSIAN_BLUR);
        
        // Add border
        $borderColor = imagecolorallocate($image, 255, 255, 255);
        imagerectangle($image, 0, 0, imagesx($image) - 1, imagesy($image) - 1, $borderColor);
        
        imagejpeg($image, $destination);
        imagedestroy($image);
    }
    
    applyImageEffects(\"photo.jpg\", \"styled_photo.jpg\");
    ?>`,

    "PHP Email Handling": `
// Example 1: Basic email sending
    <?php
    $to = \"recipient@example.com\";
    $subject = \"Test Email\";
    $message = \"Hello, this is a test email.\";
    mail($to, $subject, $message);
    ?>

// Example 2: HTML email with headers
    <?php
    $to = \"user@example.com\";
    $subject = \"Welcome to our service\";
    $message = \"<h1>Welcome!</h1><p>Thank you for joining us.</p>\";
    $headers = \"MIME-Version: 1.0\" . \"\\r\\n\";
    $headers .= \"Content-type:text/html;charset=UTF-8\" . \"\\r\\n\";
    $headers .= \"From: noreply@example.com\" . \"\\r\\n\";
    
    mail($to, $subject, $message, $headers);
    ?>

// Example 3: Email with attachments
    <?php
    function sendEmailWithAttachment($to, $subject, $message, $attachmentPath) {
        $boundary = md5(uniqid(time()));
        $headers = \"MIME-Version: 1.0\\r\\n\";
        $headers .= \"From: sender@example.com\\r\\n\";
        $headers .= \"Content-Type: multipart/mixed; boundary=\\\"$boundary\\\"\\r\\n\";
        
        $body = \"--$boundary\\r\\n\";
        $body .= \"Content-Type: text/plain; charset=UTF-8\\r\\n\";
        $body .= \"\\r\\n$message\\r\\n\";
        
        if (file_exists($attachmentPath)) {
            $fileContent = file_get_contents($attachmentPath);
            $fileContent = base64_encode($fileContent);
            $fileName = basename($attachmentPath);
            
            $body .= \"--$boundary\\r\\n\";
            $body .= \"Content-Type: application/octet-stream; name=\\\"$fileName\\\"\\r\\n\";
            $body .= \"Content-Transfer-Encoding: base64\\r\\n\";
            $body .= \"Content-Disposition: attachment; filename=\\\"$fileName\\\"\\r\\n\";
            $body .= \"\\r\\n$fileContent\\r\\n\";
        }
        
        $body .= \"--$boundary--\\r\\n\";
        
        return mail($to, $subject, $body, $headers);
    }
    ?>

// Example 4: Email validation
    <?php
    function validateEmail($email) {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            return false;
        }
        
        $domain = substr(strrchr($email, \"@\"), 1);
        return checkdnsrr($domain, \"MX\");
    }
    
    if (validateEmail(\"user@example.com\")) {
        echo \"Valid email address\";
    }
    ?>

// Example 5: Bulk email sending
    <?php
    function sendBulkEmails($recipients, $subject, $message) {
        $successCount = 0;
        $headers = \"From: newsletter@example.com\\r\\n\";
        $headers .= \"Content-Type: text/html; charset=UTF-8\\r\\n\";
        
        foreach ($recipients as $email) {
            if (mail($email, $subject, $message, $headers)) {
                $successCount++;
            }
            sleep(1); // Prevent overwhelming the mail server
        }
        
        return $successCount;
    }
    
    $recipients = [\"user1@example.com\", \"user2@example.com\", \"user3@example.com\"];
    $sent = sendBulkEmails($recipients, \"Newsletter\", \"<h1>Monthly Newsletter</h1>\");
    ?>

// Example 6: Email template system
    <?php
    class EmailTemplate {
        private $template;
        
        public function __construct($templatePath) {
            $this->template = file_get_contents($templatePath);
        }
        
        public function render($data) {
            $content = $this->template;
            foreach ($data as $key => $value) {
                $content = str_replace(\"{\\$key}\", $value, $content);
            }
            return $content;
        }
    }
    
    $template = new EmailTemplate(\"templates/welcome.html\");
    $emailContent = $template->render([
        'name' => 'John Doe',
        'company' => 'Example Corp'
    ]);
    ?>

// Example 7: Email queue system
    <?php
    class EmailQueue {
        private $pdo;
        
        public function __construct($pdo) {
            $this->pdo = $pdo;
        }
        
        public function addEmail($to, $subject, $message, $priority = 1) {
            $stmt = $this->pdo->prepare(\"INSERT INTO email_queue (recipient, subject, message, priority, created_at) VALUES (?, ?, ?, ?, NOW())\");
            return $stmt->execute([$to, $subject, $message, $priority]);
        }
        
        public function processQueue($limit = 10) {
            $stmt = $this->pdo->prepare(\"SELECT * FROM email_queue WHERE status = 'pending' ORDER BY priority DESC, created_at ASC LIMIT ?\");
            $stmt->execute([$limit]);
            $emails = $stmt->fetchAll();
            
            foreach ($emails as $email) {
                if (mail($email['recipient'], $email['subject'], $email['message'])) {
                    $this->markAsSent($email['id']);
                } else {
                    $this->markAsFailed($email['id']);
                }
            }
        }
        
        private function markAsSent($id) {
            $stmt = $this->pdo->prepare(\"UPDATE email_queue SET status = 'sent', sent_at = NOW() WHERE id = ?\");
            $stmt->execute([$id]);
        }
        
        private function markAsFailed($id) {
            $stmt = $this->pdo->prepare(\"UPDATE email_queue SET status = 'failed', attempts = attempts + 1 WHERE id = ?\");
            $stmt->execute([$id]);
        }
    }
    ?>

// Example 8: SMTP email configuration
    <?php
    use PHPMailer\\PHPMailer\\PHPMailer;
    use PHPMailer\\PHPMailer\\SMTP;
    
    function sendSMTPEmail($to, $subject, $body) {
        $mail = new PHPMailer(true);
        
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'your-email@gmail.com';
            $mail->Password = 'your-app-password';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;
            
            $mail->setFrom('your-email@gmail.com', 'Your Name');
            $mail->addAddress($to);
            
            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = $body;
            
            return $mail->send();
        } catch (Exception $e) {
            return false;
        }
    }
    ?>

// Example 9: Email analytics tracking
    <?php
    function sendTrackedEmail($to, $subject, $message, $campaignId) {
        $trackingPixel = \"<img src='https://example.com/track.php?campaign=$campaignId&email=\" . urlencode($to) . \"' width='1' height='1'>\";
        $trackedMessage = $message . $trackingPixel;
        
        $headers = \"Content-Type: text/html; charset=UTF-8\\r\\n\";
        $headers .= \"From: marketing@example.com\\r\\n\";
        
        if (mail($to, $subject, $trackedMessage, $headers)) {
            // Log email sent
            logEmailSent($to, $campaignId);
            return true;
        }
        return false;
    }
    
    function logEmailSent($email, $campaignId) {
        $pdo = new PDO(\"mysql:host=localhost;dbname=email_tracking\", $username, $password);
        $stmt = $pdo->prepare(\"INSERT INTO email_logs (email, campaign_id, sent_at) VALUES (?, ?, NOW())\");
        $stmt->execute([$email, $campaignId]);
    }
    ?>`,

    "PHP Date and Time": `
// Example 1: Basic date and time functions
    <?php
    echo date(\"Y-m-d H:i:s\");
    $date = new DateTime();
    echo $date->format(\"Y-m-d H:i:s\");
    ?>

// Example 2: Date formatting and manipulation
    <?php
    $date = new DateTime('2023-12-25');
    echo $date->format('l, F j, Y'); // Monday, December 25, 2023
    
    $date->modify('+1 week');
    echo $date->format('Y-m-d'); // 2024-01-01
    
    $date->setTime(14, 30, 0);
    echo $date->format('H:i:s'); // 14:30:00
    ?>

// Example 3: Time zone handling
    <?php
    $date = new DateTime('now', new DateTimeZone('America/New_York'));
    echo $date->format('Y-m-d H:i:s T'); // Current time in New York
    
    $date->setTimezone(new DateTimeZone('Europe/London'));
    echo $date->format('Y-m-d H:i:s T'); // Same moment in London
    
    // List available time zones
    $timezones = DateTimeZone::listIdentifiers();
    foreach ($timezones as $timezone) {
        echo $timezone . \"\\n\";
    }
    ?>

// Example 4: Date calculations and comparisons
    <?php
    $birthday = new DateTime('1990-05-15');
    $today = new DateTime();
    $age = $today->diff($birthday);
    
    echo \"Age: \" . $age->y . \" years, \" . $age->m . \" months, \" . $age->d . \" days\";
    
    // Calculate days until next birthday
    $nextBirthday = new DateTime($today->format('Y') . '-05-15');
    if ($nextBirthday < $today) {
        $nextBirthday->modify('+1 year');
    }
    $daysUntilBirthday = $today->diff($nextBirthday)->days;
    echo \"Days until next birthday: $daysUntilBirthday\";
    ?>

// Example 5: Timestamp conversion
    <?php
    // Convert timestamp to date
    $timestamp = 1703123456;
    $date = new DateTime();
    $date->setTimestamp($timestamp);
    echo $date->format('Y-m-d H:i:s');
    
    // Convert date to timestamp
    $dateString = '2023-12-21 15:30:45';
    $date = new DateTime($dateString);
    echo $date->getTimestamp();
    
    // Current timestamp
    echo time();
    echo microtime(true); // Microsecond precision
    ?>

// Example 6: Date validation and parsing
    <?php
    function validateDate($date, $format = 'Y-m-d') {
        $d = DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }
    
    if (validateDate('2023-12-25')) {
        echo \"Valid date\";
    }
    
    // Parse various date formats
    $dates = [
        '2023-12-25',
        '25/12/2023',
        'December 25, 2023',
        '25 Dec 2023'
    ];
    
    foreach ($dates as $dateString) {
        try {
            $date = new DateTime($dateString);
            echo $date->format('Y-m-d H:i:s');
        } catch (Exception $e) {
            echo \"Invalid date: $dateString\";
        }
    }
    ?>

// Example 7: Working with intervals and periods
    <?php
    $start = new DateTime('2023-01-01');
    $end = new DateTime('2023-12-31');
    $interval = new DateInterval('P1M'); // 1 month interval
    
    $period = new DatePeriod($start, $interval, $end);
    foreach ($period as $date) {
        echo $date->format('Y-m-d') . \"\\n\";
    }
    
    // Custom intervals
    $interval = new DateInterval('P1Y2M3D'); // 1 year, 2 months, 3 days
    $date = new DateTime();
    $date->add($interval);
    echo $date->format('Y-m-d');
    ?>

// Example 8: Business days calculation
    <?php
    function getBusinessDays($start, $end) {
        $start = new DateTime($start);
        $end = new DateTime($end);
        $businessDays = 0;
        
        while ($start <= $end) {
            $dayOfWeek = $start->format('N'); // 1 (Monday) to 7 (Sunday)
            if ($dayOfWeek < 6) { // Monday to Friday
                $businessDays++;
            }
            $start->modify('+1 day');
        }
        
        return $businessDays;
    }
    
    $businessDays = getBusinessDays('2023-12-01', '2023-12-31');
    echo \"Business days in December 2023: $businessDays\";
    ?>

// Example 9: Date localization and internationalization
    <?php
    // Set locale for date formatting
    setlocale(LC_TIME, 'en_US.UTF-8');
    echo strftime('%B %d, %Y', time()); // December 21, 2023
    
    // Carbon library example (if available)
    use Carbon\\Carbon;
    
    $date = Carbon::now();
    echo $date->format('Y-m-d H:i:s');
    echo $date->diffForHumans(); // 2 hours ago
    
    $date->locale('fr');
    echo $date->isoFormat('dddd, MMMM Do YYYY'); // vendredi, décembre 21ème 2023
    
    // Relative time
    echo $date->subDays(5)->diffForHumans(); // 5 days ago
    echo $date->addWeeks(2)->diffForHumans(); // in 2 weeks
    ?>`,

    "PHP Regular Expressions": `
// Example 1: Basic email validation
    <?php
    $pattern = \"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\";
    $email = \"test@example.com\";
    if (preg_match($pattern, $email)) {
    echo \"Valid email\";
    }
    ?>

// Example 2: String pattern matching and replacement
    <?php
    $text = \"The quick brown fox jumps over the lazy dog.\";
    
    // Find all words starting with 'b'
    preg_match_all('/\\bb\\w+/', $text, $matches);
    print_r($matches[0]); // Array ( [0] => brown )
    
    // Replace all vowels with asterisks
    $result = preg_replace('/[aeiou]/i', '*', $text);
    echo $result; // Th* q**ck br*wn f*x j*mps *v*r th* l*zy d*g.
    ?>

// Example 3: Phone number validation
    <?php
    function validatePhoneNumber($phone) {
        $patterns = [
            '/^\\+?1?\\s?\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/', // US format
            '/^\\+?[1-9]\\d{1,14}$/', // International format
            '/^\\(?([0-9]{3})\\)?[-.\\s]?([0-9]{3})[-.\\s]?([0-9]{4})$/' // Basic format
        ];
        
        foreach ($patterns as $pattern) {
            if (preg_match($pattern, $phone)) {
                return true;
            }
        }
        return false;
    }
    
    $phoneNumbers = ['(555) 123-4567', '+1-555-123-4567', '555.123.4567'];
    foreach ($phoneNumbers as $phone) {
        echo validatePhoneNumber($phone) ? \"Valid\" : \"Invalid\";
    }
    ?>

// Example 4: URL parsing and validation
    <?php
    function parseUrl($url) {
        $pattern = '/^https?:\\/\\/([a-zA-Z0-9.-]+)(?::(\\d+))?(?:\\/(.*))?$/';
        if (preg_match($pattern, $url, $matches)) {
            return [
                'protocol' => 'http' . (strpos($url, 'https') === 0 ? 's' : ''),
                'domain' => $matches[1],
                'port' => isset($matches[2]) ? $matches[2] : null,
                'path' => isset($matches[3]) ? $matches[3] : ''
            ];
        }
        return false;
    }
    
    $urlInfo = parseUrl('https://www.example.com:8080/path/to/page');
    print_r($urlInfo);
    ?>

// Example 5: Password strength validation
    <?php
    function validatePasswordStrength($password) {
        $checks = [
            'length' => '/^.{8,}$/',
            'uppercase' => '/[A-Z]/',
            'lowercase' => '/[a-z]/',
            'number' => '/[0-9]/',
            'special' => '/[!@#$%^&*(),.?\":{}|<>]/'
        ];
        
        $results = [];
        foreach ($checks as $check => $pattern) {
            $results[$check] = preg_match($pattern, $password);
        }
        
        return $results;
    }
    
    $password = 'MySecure123!';
    $strength = validatePasswordStrength($password);
    print_r($strength);
    ?>

// Example 6: HTML tag extraction and cleaning
    <?php
    function extractHtmlTags($html) {
        preg_match_all('/<([a-zA-Z][a-zA-Z0-9]*)[^>]*>/', $html, $matches);
        return array_unique($matches[1]);
    }
    
    function stripHtmlTags($html, $allowedTags = '') {
        if (empty($allowedTags)) {
            return strip_tags($html);
        }
        return strip_tags($html, $allowedTags);
    }
    
    $html = '<div class=\"container\"><h1>Title</h1><p>Content with <strong>bold</strong> text.</p></div>';
    $tags = extractHtmlTags($html);
    $cleaned = stripHtmlTags($html, '<p><strong>');
    ?>

// Example 7: Data extraction from text
    <?php
    function extractData($text) {
        $data = [];
        
        // Extract email addresses
        preg_match_all('/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}/', $text, $emails);
        $data['emails'] = $emails[0];
        
        // Extract URLs
        preg_match_all('/https?:\\/\\/[^\\s]+/', $text, $urls);
        $data['urls'] = $urls[0];
        
        // Extract phone numbers
        preg_match_all('/\\b\\d{3}[-.]?\\d{3}[-.]?\\d{4}\\b/', $text, $phones);
        $data['phones'] = $phones[0];
        
        // Extract hashtags
        preg_match_all('/#\\w+/', $text, $hashtags);
        $data['hashtags'] = $hashtags[0];
        
        return $data;
    }
    
    $text = \"Contact us at support@example.com or visit https://example.com. Call 555-123-4567. #support #help\";
    $extracted = extractData($text);
    print_r($extracted);
    ?>

// Example 8: Advanced pattern matching with groups
    <?php
    function parseLogEntry($logLine) {
        $pattern = '/^(\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}) \\[(\\w+)\\] (.*?): (.*)$/';
        
        if (preg_match($pattern, $logLine, $matches)) {
            return [
                'timestamp' => $matches[1],
                'level' => $matches[2],
                'component' => $matches[3],
                'message' => $matches[4]
            ];
        }
        return false;
    }
    
    $logLine = '2023-12-21 14:30:45 [ERROR] Database: Connection failed';
    $parsed = parseLogEntry($logLine);
    print_r($parsed);
    ?>

// Example 9: Regular expression optimization and performance
    <?php
    class RegexOptimizer {
        private static $compiledPatterns = [];
        
        public static function match($pattern, $subject, $flags = 0) {
            $key = md5($pattern . $flags);
            
            if (!isset(self::$compiledPatterns[$key])) {
                self::$compiledPatterns[$key] = $pattern;
            }
            
            return preg_match(self::$compiledPatterns[$key], $subject, $matches, $flags);
        }
        
        public static function replace($pattern, $replacement, $subject, $limit = -1) {
            $key = md5($pattern . serialize($replacement) . $limit);
            
            if (!isset(self::$compiledPatterns[$key])) {
                self::$compiledPatterns[$key] = $pattern;
            }
            
            return preg_replace(self::$compiledPatterns[$key], $replacement, $subject, $limit);
        }
        
        public static function split($pattern, $subject, $limit = -1) {
            return preg_split($pattern, $subject, $limit, PREG_SPLIT_DELIM_CAPTURE);
        }
    }
    
    // Usage example
    $result = RegexOptimizer::match('/^\\d+$/', '12345');
    $cleaned = RegexOptimizer::replace('/\\s+/', ' ', 'Multiple    spaces   here');
    ?>`,

    "PHP JSON Handling": `
// Example 1: Basic JSON encoding and decoding
    <?php
    $data = [\"name\" => \"John\", \"age\" => 30];
    $json = json_encode($data);
    $decoded = json_decode($json, true);
    ?>

// Example 2: JSON with options and error handling
    <?php
    $data = [
        'name' => 'John Doe',
        'email' => 'john@example.com',
        'hobbies' => ['reading', 'gaming', 'coding'],
        'profile' => [
            'age' => 30,
            'city' => 'New York'
        ]
    ];
    
    $json = json_encode($data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);
    
    if (json_last_error() === JSON_ERROR_NONE) {
        echo $json;
    } else {
        echo 'JSON Error: ' . json_last_error_msg();
    }
    ?>

    // Example 3: JSON validation and sanitization
    <?php
    function validateJson($jsonString) {
        json_decode($jsonString);
        return json_last_error() === JSON_ERROR_NONE;
    }
    
    function sanitizeJsonData($data) {
        if (is_array($data)) {
            return array_map('sanitizeJsonData', $data);
        } elseif (is_string($data)) {
            return htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
        }
        return $data;
    }
    
    $userInput = '{"name": "<script>alert(\"xss\")</script>", "age": 25}';
    if (validateJson($userInput)) {
        $data = json_decode($userInput, true);
        $sanitized = sanitizeJsonData($data);
        echo json_encode($sanitized);
    }
    ?>

// Example 4: JSON API response handling
    <?php
    function sendJsonResponse($data, $statusCode = 200, $message = 'success') {
        http_response_code($statusCode);
        header('Content-Type: application/json');
        
        $response = [
            'status' => $statusCode >= 200 && $statusCode < 300 ? 'success' : 'error',
            'message' => $message,
            'data' => $data,
            'timestamp' => date('Y-m-d H:i:s')
        ];
        
        echo json_encode($response, JSON_PRETTY_PRINT);
        exit;
    }
    
    // Usage
    $userData = ['id' => 1, 'name' => 'John', 'email' => 'john@example.com'];
    sendJsonResponse($userData);
    ?>

// Example 5: JSON file operations
    <?php
    class JsonFileManager {
        private $filePath;
        
        public function __construct($filePath) {
            $this->filePath = $filePath;
        }
        
        public function read() {
            if (!file_exists($this->filePath)) {
                return null;
            }
            
            $content = file_get_contents($this->filePath);
            return json_decode($content, true);
        }
        
        public function write($data) {
            $json = json_encode($data, JSON_PRETTY_PRINT);
            return file_put_contents($this->filePath, $json) !== false;
        }
        
        public function append($newData) {
            $existingData = $this->read() ?? [];
            if (is_array($existingData)) {
                $existingData[] = $newData;
            } else {
                $existingData = [$newData];
            }
            return $this->write($existingData);
        }
    }
    
    $jsonManager = new JsonFileManager('data.json');
    $jsonManager->write(['users' => [['name' => 'John'], ['name' => 'Jane']]]);
    ?>

// Example 6: JSON Web Token (JWT) handling
    <?php
    function createJWT($payload, $secret) {
        $header = json_encode(['typ' => 'JWT', 'alg' => 'HS256']);
        $payload = json_encode($payload);
        
        $base64Header = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($header));
        $base64Payload = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($payload));
        
        $signature = hash_hmac('sha256', $base64Header . '.' . $base64Payload, $secret, true);
        $base64Signature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($signature));
        
        return $base64Header . '.' . $base64Payload . '.' . $base64Signature;
    }
    
    function validateJWT($token, $secret) {
        $parts = explode('.', $token);
        if (count($parts) !== 3) {
            return false;
        }
        
        list($header, $payload, $signature) = $parts;
        
        $expectedSignature = hash_hmac('sha256', $header . '.' . $payload, $secret, true);
        $expectedSignature = str_replace(['+', '/', '='], ['-', '_', ''], base64_encode($expectedSignature));
        
        return hash_equals($signature, $expectedSignature);
    }
    ?>

// Example 7: JSON schema validation
    <?php
    function validateJsonSchema($data, $schema) {
        // Simple schema validation (for production, use a library like justinrainbow/json-schema)
        foreach ($schema['required'] as $field) {
            if (!isset($data[$field])) {
                return false;
            }
        }
        
        foreach ($schema['properties'] as $field => $rules) {
            if (isset($data[$field])) {
                if (isset($rules['type']) && gettype($data[$field]) !== $rules['type']) {
                    return false;
                }
                if (isset($rules['minLength']) && strlen($data[$field]) < $rules['minLength']) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    $schema = [
        'required' => ['name', 'email'],
        'properties' => [
            'name' => ['type' => 'string', 'minLength' => 2],
            'email' => ['type' => 'string'],
            'age' => ['type' => 'integer']
        ]
    ];
    
    $data = ['name' => 'John', 'email' => 'john@example.com', 'age' => 30];
    $isValid = validateJsonSchema($data, $schema);
    ?>

// Example 8: JSON streaming for large datasets
    <?php
    function streamJsonArray($generator, $filename = 'output.json') {
        $file = fopen($filename, 'w');
        fwrite($file, '[');
        
        $first = true;
        foreach ($generator as $item) {
            if (!$first) {
                fwrite($file, ',');
            }
            fwrite($file, json_encode($item));
            $first = false;
        }
        
        fwrite($file, ']');
        fclose($file);
    }
    
    function generateLargeDataset() {
        for ($i = 0; $i < 10000; $i++) {
            yield [
                'id' => $i,
                'name' => 'User ' . $i,
                'email' => 'user' . $i . '@example.com'
            ];
        }
    }
    
    streamJsonArray(generateLargeDataset());
    ?>

// Example 9: JSON transformation and mapping
    <?php
    class JsonTransformer {
        public static function transform($data, $mapping) {
            $result = [];
            
            foreach ($mapping as $newKey => $config) {
                if (is_string($config)) {
                    $result[$newKey] = self::getNestedValue($data, $config);
                } elseif (is_array($config)) {
                    $result[$newKey] = self::transform($data, $config);
                }
            }
            
            return $result;
        }
        
        private static function getNestedValue($data, $path) {
            $keys = explode('.', $path);
            $value = $data;
            
            foreach ($keys as $key) {
                if (isset($value[$key])) {
                    $value = $value[$key];
                } else {
                    return null;
                }
            }
            
            return $value;
        }
    }
    
    $userData = [
        'personal_info' => [
            'first_name' => 'John',
            'last_name' => 'Doe',
            'contact' => ['email' => 'john@example.com']
        ]
    ];
    
    $mapping = [
        'fullName' => 'personal_info.first_name',
        'email' => 'personal_info.contact.email'
    ];
    
    $transformed = JsonTransformer::transform($userData, $mapping);
    echo json_encode($transformed);
    ?>`,

    "PHP XML Processing": `
// Example 1: Basic XML parsing with SimpleXML
    <?php
    $xml = simplexml_load_string(\"<root><item>Test</item></root>\");
    echo $xml->item;
    ?>

// Example 2: XML file parsing and manipulation
    <?php
    $xml = simplexml_load_file('data.xml');
    foreach ($xml->user as $user) {
        echo \"Name: \" . $user->name . \", Email: \" . $user->email . \"\\n\";
    }
    
    // Modify XML
    $xml->user[0]->name = 'Updated Name';
    $xml->asXML('updated_data.xml');
    ?>

// Example 3: XML generation with DOMDocument
    <?php
    $dom = new DOMDocument('1.0', 'UTF-8');
    $dom->formatOutput = true;
    
    $root = $dom->createElement('users');
    $dom->appendChild($root);
    
    $users = [
        ['name' => 'John', 'email' => 'john@example.com'],
        ['name' => 'Jane', 'email' => 'jane@example.com']
    ];
    
    foreach ($users as $userData) {
        $user = $dom->createElement('user');
        $name = $dom->createElement('name', $userData['name']);
        $email = $dom->createElement('email', $userData['email']);
        
        $user->appendChild($name);
        $user->appendChild($email);
        $root->appendChild($user);
    }
    
    echo $dom->saveXML();
    ?>

// Example 4: XML validation with XSD schema
    <?php
    function validateXmlWithXsd($xmlFile, $xsdFile) {
        $dom = new DOMDocument();
        $dom->load($xmlFile);
        
        if ($dom->schemaValidate($xsdFile)) {
            return true;
        } else {
            return false;
        }
    }
    
    // Create XSD schema
    $xsd = '<?xml version=\"1.0\"?>
    <xs:schema xmlns:xs=\"http://www.w3.org/2001/XMLSchema\">
        <xs:element name=\"user\">
            <xs:complexType>
                <xs:sequence>
                    <xs:element name=\"name\" type=\"xs:string\"/>
                    <xs:element name=\"email\" type=\"xs:string\"/>
                </xs:sequence>
            </xs:complexType>
        </xs:element>
    </xs:schema>';
    
    file_put_contents('schema.xsd', $xsd);
    
    $isValid = validateXmlWithXsd('data.xml', 'schema.xsd');
    ?>

// Example 5: XML parsing with XPath
    <?php
    $xml = simplexml_load_file('products.xml');
    
    // Find all products with price > 100
    $expensiveProducts = $xml->xpath('//product[price > 100]');
    
    foreach ($expensiveProducts as $product) {
        echo \"Product: \" . $product->name . \", Price: \" . $product->price . \"\\n\";
    }
    
    // Find products by category
    $electronics = $xml->xpath('//product[@category=\"electronics\"]');
    
    // Find product names containing 'phone'
    $phones = $xml->xpath('//product[contains(name, \"phone\")]');
    ?>

// Example 6: XML to array conversion
    <?php
    function xmlToArray($xml) {
        $array = json_decode(json_encode($xml), true);
        return $array;
    }
    
    function arrayToXml($array, $rootElement = 'root') {
        $xml = new SimpleXMLElement(\"<?xml version='1.0'?><$rootElement></$rootElement>\");
        arrayToXmlRecursive($array, $xml);
        return $xml->asXML();
    }
    
    function arrayToXmlRecursive($array, &$xml) {
        foreach ($array as $key => $value) {
            if (is_array($value)) {
                if (is_numeric($key)) {
                    $key = 'item';
                }
                $subnode = $xml->addChild($key);
                arrayToXmlRecursive($value, $subnode);
            } else {
                $xml->addChild($key, htmlspecialchars($value));
            }
        }
    }
    
    $data = ['users' => [['name' => 'John'], ['name' => 'Jane']]];
    $xmlString = arrayToXml($data, 'users');
    echo $xmlString;
    ?>

// Example 7: XML RSS feed processing
    <?php
    class RssProcessor {
        public function parseRssFeed($url) {
            $xml = simplexml_load_file($url);
            if (!$xml) {
                return false;
            }
            
            $items = [];
            foreach ($xml->channel->item as $item) {
                $items[] = [
                    'title' => (string)$item->title,
                    'description' => (string)$item->description,
                    'link' => (string)$item->link,
                    'pubDate' => (string)$item->pubDate
                ];
            }
            
            return $items;
        }
        
        public function generateRssFeed($items, $channelInfo) {
            $xml = new SimpleXMLElement('<?xml version=\"1.0\"?><rss version=\"2.0\"></rss>');
            $channel = $xml->addChild('channel');
            
            foreach ($channelInfo as $key => $value) {
                $channel->addChild($key, htmlspecialchars($value));
            }
            
            foreach ($items as $item) {
                $rssItem = $channel->addChild('item');
                foreach ($item as $key => $value) {
                    $rssItem->addChild($key, htmlspecialchars($value));
                }
            }
            
            return $xml->asXML();
        }
    }
    
    $rssProcessor = new RssProcessor();
    $feed = $rssProcessor->parseRssFeed('https://example.com/rss.xml');
    ?>

// Example 8: XML transformation with XSLT
    <?php
    function transformXmlWithXslt($xmlFile, $xsltFile) {
        $xml = new DOMDocument();
        $xml->load($xmlFile);
        
        $xsl = new DOMDocument();
        $xsl->load($xsltFile);
        
        $processor = new XSLTProcessor();
        $processor->importStylesheet($xsl);
        
        return $processor->transformToXML($xml);
    }
    
    // Create XSLT stylesheet
    $xslt = '<?xml version=\"1.0\"?>
    <xsl:stylesheet version=\"1.0\" xmlns:xsl=\"http://www.w3.org/1999/XSL/Transform\">
        <xsl:template match=\"/\">
            <html>
                <body>
                    <h1>Users</h1>
                    <xsl:for-each select=\"users/user\">
                        <p><strong><xsl:value-of select=\"name\"/></strong> - <xsl:value-of select=\"email\"/></p>
                    </xsl:for-each>
                </body>
            </html>
        </xsl:template>
    </xsl:stylesheet>';
    
    file_put_contents('transform.xslt', $xslt);
    $html = transformXmlWithXslt('users.xml', 'transform.xslt');
    ?>

// Example 9: XML security and sanitization
    <?php
    class SecureXmlParser {
        public function sanitizeXmlInput($xmlString) {
            // Remove potentially dangerous elements
            $dangerousElements = ['script', 'iframe', 'object', 'embed'];
            
            foreach ($dangerousElements as $element) {
                $xmlString = preg_replace(\"/<$element[^>]*>.*?<\\/$element>/is\", '', $xmlString);
            }
            
            // Remove dangerous attributes
            $xmlString = preg_replace('/on\\w+\\s*=\\s*[\"\\'][^\"\\']*[\"\\']/', '', $xmlString);
            
            return $xmlString;
        }
        
        public function validateXmlStructure($xmlString) {
            $dom = new DOMDocument();
            libxml_use_internal_errors(true);
            
            if (!$dom->loadXML($xmlString)) {
                return false;
            }
            
            // Check for external entity references
            if (strpos($xmlString, 'SYSTEM') !== false || strpos($xmlString, 'PUBLIC') !== false) {
                return false;
            }
            
            return true;
        }
        
        public function parseXmlSecurely($xmlString) {
            $sanitized = $this->sanitizeXmlInput($xmlString);
            
            if (!$this->validateXmlStructure($sanitized)) {
                throw new Exception('Invalid or potentially dangerous XML');
            }
            
            return simplexml_load_string($sanitized);
        }
    }
    
    $parser = new SecureXmlParser();
    $xml = $parser->parseXmlSecurely($xmlString);
    ?>`,

    "PHP RESTful APIs": `
// Example 1: Basic RESTful API endpoint
    <?php
    header(\"Content-Type: application/json\");
    echo json_encode([\"status\" => \"success\"]);
    ?>

// Example 2: Complete RESTful API with CRUD operations
    <?php
    class UserAPI {
        private $pdo;
        
        public function __construct($pdo) {
            $this->pdo = $pdo;
        }
        
        public function handleRequest() {
            $method = $_SERVER['REQUEST_METHOD'];
            $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
            
            switch ($method) {
                case 'GET':
                    return $this->getUsers($path);
                case 'POST':
                    return $this->createUser();
                case 'PUT':
                    return $this->updateUser($path);
                case 'DELETE':
                    return $this->deleteUser($path);
                default:
                    return $this->sendResponse(['error' => 'Method not allowed'], 405);
            }
        }
        
        private function getUsers($path) {
            if (preg_match('/\\/users\\/(\\d+)/', $path, $matches)) {
                $id = $matches[1];
                return $this->getUserById($id);
            }
            return $this->getAllUsers();
        }
        
        private function getAllUsers() {
            $stmt = $this->pdo->query('SELECT * FROM users');
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $this->sendResponse(['users' => $users]);
        }
        
        private function getUserById($id) {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE id = ?');
            $stmt->execute([$id]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$user) {
                return $this->sendResponse(['error' => 'User not found'], 404);
            }
            
            return $this->sendResponse(['user' => $user]);
        }
        
        private function createUser() {
            $data = json_decode(file_get_contents('php://input'), true);
            
            $stmt = $this->pdo->prepare('INSERT INTO users (name, email) VALUES (?, ?)');
            if ($stmt->execute([$data['name'], $data['email']])) {
                $userId = $this->pdo->lastInsertId();
                return $this->sendResponse(['id' => $userId, 'message' => 'User created'], 201);
            }
            
            return $this->sendResponse(['error' => 'Failed to create user'], 500);
        }
        
        private function updateUser($path) {
            if (preg_match('/\\/users\\/(\\d+)/', $path, $matches)) {
                $id = $matches[1];
                $data = json_decode(file_get_contents('php://input'), true);
                
                $stmt = $this->pdo->prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
                if ($stmt->execute([$data['name'], $data['email'], $id])) {
                    return $this->sendResponse(['message' => 'User updated']);
                }
            }
            
            return $this->sendResponse(['error' => 'Failed to update user'], 500);
        }
        
        private function deleteUser($path) {
            if (preg_match('/\\/users\\/(\\d+)/', $path, $matches)) {
                $id = $matches[1];
                
                $stmt = $this->pdo->prepare('DELETE FROM users WHERE id = ?');
                if ($stmt->execute([$id])) {
                    return $this->sendResponse(['message' => 'User deleted']);
                }
            }
            
            return $this->sendResponse(['error' => 'Failed to delete user'], 500);
        }
        
        private function sendResponse($data, $statusCode = 200) {
            http_response_code($statusCode);
            header('Content-Type: application/json');
            echo json_encode($data);
            exit;
        }
    }
    ?>

// Example 3: API authentication and authorization
    <?php
    class APIAuth {
        private $secretKey;
        
        public function __construct($secretKey) {
            $this->secretKey = $secretKey;
        }
        
        public function generateToken($userId, $expiration = 3600) {
            $payload = [
                'user_id' => $userId,
                'exp' => time() + $expiration,
                'iat' => time()
            ];
            
            $header = base64_encode(json_encode(['typ' => 'JWT', 'alg' => 'HS256']));
            $payloadEncoded = base64_encode(json_encode($payload));
            $signature = hash_hmac('sha256', $header . '.' . $payloadEncoded, $this->secretKey, true);
            $signatureEncoded = base64_encode($signature);
            
            return $header . '.' . $payloadEncoded . '.' . $signatureEncoded;
        }
        
        public function validateToken($token) {
            $parts = explode('.', $token);
            if (count($parts) !== 3) {
                return false;
            }
            
            list($header, $payload, $signature) = $parts;
            $expectedSignature = hash_hmac('sha256', $header . '.' . $payload, $this->secretKey, true);
            $expectedSignature = base64_encode($expectedSignature);
            
            if (!hash_equals($signature, $expectedSignature)) {
                return false;
            }
            
            $payloadData = json_decode(base64_decode($payload), true);
            
            if ($payloadData['exp'] < time()) {
                return false;
            }
            
            return $payloadData['user_id'];
        }
        
        public function requireAuth() {
            $headers = getallheaders();
            $authHeader = $headers['Authorization'] ?? '';
            
            if (!preg_match('/Bearer\\s+(.*)$/i', $authHeader, $matches)) {
                http_response_code(401);
                echo json_encode(['error' => 'Authorization header required']);
                exit;
            }
            
            $userId = $this->validateToken($matches[1]);
            if (!$userId) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid token']);
                exit;
            }
            
            return $userId;
        }
    }
    ?>

// Example 4: API rate limiting
    <?php
    class RateLimiter {
        private $redis;
        private $maxRequests;
        private $timeWindow;
        
        public function __construct($redis, $maxRequests = 100, $timeWindow = 3600) {
            $this->redis = $redis;
            $this->maxRequests = $maxRequests;
            $this->timeWindow = $timeWindow;
        }
        
        public function checkRateLimit($identifier) {
            $key = 'rate_limit:' . $identifier;
            $current = $this->redis->incr($key);
            
            if ($current === 1) {
                $this->redis->expire($key, $this->timeWindow);
            }
            
            if ($current > $this->maxRequests) {
                return false;
            }
            
            return [
                'allowed' => true,
                'remaining' => max(0, $this->maxRequests - $current),
                'reset' => $this->redis->ttl($key)
            ];
        }
        
        public function enforceRateLimit($identifier) {
            $result = $this->checkRateLimit($identifier);
            
            if (!$result['allowed']) {
                http_response_code(429);
                header('X-RateLimit-Limit: ' . $this->maxRequests);
                header('X-RateLimit-Remaining: 0');
                header('X-RateLimit-Reset: ' . $result['reset']);
                echo json_encode(['error' => 'Rate limit exceeded']);
                exit;
            }
            
            header('X-RateLimit-Limit: ' . $this->maxRequests);
            header('X-RateLimit-Remaining: ' . $result['remaining']);
            header('X-RateLimit-Reset: ' . $result['reset']);
        }
    }
    ?>

// Example 5: API input validation and sanitization
    <?php
    class APIValidator {
        public function validateUserData($data) {
            $errors = [];
            
            if (empty($data['name'])) {
                $errors['name'] = 'Name is required';
            } elseif (strlen($data['name']) < 2) {
                $errors['name'] = 'Name must be at least 2 characters';
            }
            
            if (empty($data['email'])) {
                $errors['email'] = 'Email is required';
            } elseif (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                $errors['email'] = 'Invalid email format';
            }
            
            if (isset($data['age']) && (!is_numeric($data['age']) || $data['age'] < 0 || $data['age'] > 150)) {
                $errors['age'] = 'Age must be a valid number between 0 and 150';
            }
            
            return $errors;
        }
        
        public function sanitizeInput($data) {
            if (is_array($data)) {
                return array_map([$this, 'sanitizeInput'], $data);
            }
            
            return htmlspecialchars(trim($data), ENT_QUOTES, 'UTF-8');
        }
        
        public function validateAndSanitize($data) {
            $sanitized = $this->sanitizeInput($data);
            $errors = $this->validateUserData($sanitized);
            
            return [
                'data' => $sanitized,
                'errors' => $errors,
                'valid' => empty($errors)
            ];
        }
    }
    ?>

// Example 6: API versioning
    <?php
    class APIVersionManager {
        private $supportedVersions = ['v1', 'v2'];
        private $defaultVersion = 'v1';
        
        public function getVersionFromHeader() {
            $headers = getallheaders();
            $acceptHeader = $headers['Accept'] ?? '';
            
            if (preg_match('/version=(\\w+)/', $acceptHeader, $matches)) {
                return $matches[1];
            }
            
            return null;
        }
        
        public function getVersionFromURL() {
            $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
            
            if (preg_match('/\\/api\\/(v\\d+)\\//', $path, $matches)) {
                return $matches[1];
            }
            
            return null;
        }
        
        public function getCurrentVersion() {
            $version = $this->getVersionFromURL() ?? $this->getVersionFromHeader() ?? $this->defaultVersion;
            
            if (!in_array($version, $this->supportedVersions)) {
                http_response_code(400);
                echo json_encode([
                    'error' => 'Unsupported API version',
                    'supported_versions' => $this->supportedVersions
                ]);
                exit;
            }
            
            return $version;
        }
        
        public function routeToVersion($version) {
            switch ($version) {
                case 'v1':
                    return new APIv1();
                case 'v2':
                    return new APIv2();
                default:
                    throw new Exception('Unsupported version');
            }
        }
    }
    ?>

// Example 7: API error handling and logging
    <?php
    class APIErrorHandler {
        private $logger;
        
        public function __construct($logger) {
            $this->logger = $logger;
        }
        
        public function handleError($exception) {
            $errorId = uniqid('err_');
            
            $this->logger->error('API Error', [
                'error_id' => $errorId,
                'message' => $exception->getMessage(),
                'file' => $exception->getFile(),
                'line' => $exception->getLine(),
                'trace' => $exception->getTraceAsString(),
                'request_uri' => $_SERVER['REQUEST_URI'],
                'request_method' => $_SERVER['REQUEST_METHOD']
            ]);
            
            http_response_code(500);
            echo json_encode([
                'error' => 'Internal server error',
                'error_id' => $errorId
            ]);
        }
        
        public function handleValidationError($errors) {
            http_response_code(422);
            echo json_encode([
                'error' => 'Validation failed',
                'errors' => $errors
            ]);
        }
        
        public function handleNotFound($resource) {
            http_response_code(404);
            echo json_encode([
                'error' => 'Resource not found',
                'resource' => $resource
            ]);
        }
    }
    
    set_exception_handler([new APIErrorHandler($logger), 'handleError']);
    ?>

// Example 8: API documentation generation
    <?php
    class APIDocumentation {
        private $routes = [];
        
        public function addRoute($method, $path, $description, $parameters = [], $responses = []) {
            $this->routes[] = [
                'method' => $method,
                'path' => $path,
                'description' => $description,
                'parameters' => $parameters,
                'responses' => $responses
            ];
        }
        
        public function generateOpenAPISpec() {
            $spec = [
                'openapi' => '3.0.0',
                'info' => [
                    'title' => 'User API',
                    'version' => '1.0.0',
                    'description' => 'A simple user management API'
                ],
                'paths' => []
            ];
            
            foreach ($this->routes as $route) {
                $spec['paths'][$route['path']][strtolower($route['method'])] = [
                    'summary' => $route['description'],
                    'parameters' => $route['parameters'],
                    'responses' => $route['responses']
                ];
            }
            
            return json_encode($spec, JSON_PRETTY_PRINT);
        }
        
        public function serveDocumentation() {
            header('Content-Type: application/json');
            echo $this->generateOpenAPISpec();
        }
    }
    
    $doc = new APIDocumentation();
    $doc->addRoute('GET', '/users', 'Get all users', [], [
        '200' => ['description' => 'List of users']
    ]);
    $doc->addRoute('POST', '/users', 'Create a new user', [
        ['name' => 'name', 'in' => 'body', 'required' => true, 'schema' => ['type' => 'string']],
        ['name' => 'email', 'in' => 'body', 'required' => true, 'schema' => ['type' => 'string']]
    ], [
        '201' => ['description' => 'User created successfully'],
        '422' => ['description' => 'Validation error']
    ]);
    ?>

// Example 9: API testing and mocking
    <?php
    class APITester {
        private $baseUrl;
        private $headers;
        
        public function __construct($baseUrl) {
            $this->baseUrl = $baseUrl;
            $this->headers = ['Content-Type: application/json'];
        }
        
        public function setAuthToken($token) {
            $this->headers[] = 'Authorization: Bearer ' . $token;
        }
        
        public function makeRequest($method, $endpoint, $data = null) {
            $url = $this->baseUrl . $endpoint;
            $ch = curl_init();
            
            curl_setopt_array($ch, [
                CURLOPT_URL => $url,
                CURLOPT_RETURNTRANSFER => true,
                CURLOPT_CUSTOMREQUEST => $method,
                CURLOPT_HTTPHEADER => $this->headers
            ]);
            
            if ($data && in_array($method, ['POST', 'PUT', 'PATCH'])) {
                curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
            }
            
            $response = curl_exec($ch);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            curl_close($ch);
            
            return [
                'status_code' => $httpCode,
                'body' => json_decode($response, true),
                'raw_body' => $response
            ];
        }
        
        public function testEndpoint($method, $endpoint, $expectedStatus = 200, $data = null) {
            $response = $this->makeRequest($method, $endpoint, $data);
            
            if ($response['status_code'] !== $expectedStatus) {
                throw new Exception(\"Expected status $expectedStatus, got {$response['status_code']}\");
            }
            
            return $response;
        }
    }
    
    $tester = new APITester('http://localhost/api/');
    $tester->testEndpoint('GET', '/users');
    $tester->testEndpoint('POST', '/users', 201, ['name' => 'Test User', 'email' => 'test@example.com']);
    ?>`,

    "PHP Project Structure": `
// Example 1: Basic MVC project structure
    <?php
    // Project structure example
    require_once \"config/database.php\";
    require_once \"models/User.php\";
    require_once \"controllers/UserController.php\";
    ?>

// Example 2: Modern PHP project with Composer autoloading
    <?php
    // composer.json
    {
        \"name\": \"mycompany/myproject\",
        \"description\": \"Modern PHP Application\",
        \"type\": \"project\",
        \"autoload\": {
            \"psr-4\": {
                \"App\\\\\": \"src/\",
                \"App\\\\Controllers\\\\\": \"src/Controllers/\",
                \"App\\\\Models\\\\\": \"src/Models/\",
                \"App\\\\Services\\\\\": \"src/Services/\"
            }
        },
        \"require\": {
            \"php\": \">=8.0\",
            \"monolog/monolog\": \"^3.0\",
            \"doctrine/orm\": \"^2.14\"
        }
    }
    
    // index.php
    require_once 'vendor/autoload.php';
    use App\\Controllers\\UserController;
    ?>

// Example 3: Environment-based configuration
    <?php
    // config/app.php
    return [
        'app' => [
            'name' => $_ENV['APP_NAME'] ?? 'My App',
            'env' => $_ENV['APP_ENV'] ?? 'production',
            'debug' => filter_var($_ENV['APP_DEBUG'] ?? false, FILTER_VALIDATE_BOOLEAN),
            'url' => $_ENV['APP_URL'] ?? 'http://localhost'
        ],
        'database' => [
            'host' => $_ENV['DB_HOST'] ?? 'localhost',
            'port' => $_ENV['DB_PORT'] ?? 3306,
            'database' => $_ENV['DB_DATABASE'] ?? 'myapp',
            'username' => $_ENV['DB_USERNAME'] ?? 'root',
            'password' => $_ENV['DB_PASSWORD'] ?? ''
        ]
    ];
    
    // .env file
    APP_NAME=\"My Application\"
    APP_ENV=local
    APP_DEBUG=true
    APP_URL=http://localhost
    
    DB_HOST=localhost
    DB_PORT=3306
    DB_DATABASE=myapp
    DB_USERNAME=root
    DB_PASSWORD=
    ?>

// Example 4: Service container and dependency injection
    <?php
    class Container {
        private $services = [];
        private $instances = [];
        
        public function bind($abstract, $concrete) {
            $this->services[$abstract] = $concrete;
        }
        
        public function singleton($abstract, $concrete) {
            $this->bind($abstract, $concrete);
        }
        
        public function make($abstract) {
            if (isset($this->instances[$abstract])) {
                return $this->instances[$abstract];
            }
            
            $concrete = $this->services[$abstract] ?? $abstract;
            
            if (is_callable($concrete)) {
                $instance = $concrete($this);
            } else {
                $instance = new $concrete();
            }
            
            if (isset($this->services[$abstract])) {
                $this->instances[$abstract] = $instance;
            }
            
            return $instance;
        }
    }
    
    $container = new Container();
    $container->bind('Database', function($container) {
        return new PDO('mysql:host=localhost;dbname=myapp', 'user', 'pass');
    });
    $container->singleton('Logger', function($container) {
        return new Monolog\\Logger('app');
    });
    ?>

// Example 5: Middleware system for request handling
    <?php
    interface Middleware {
        public function handle($request, $next);
    }
    
    class AuthMiddleware implements Middleware {
        public function handle($request, $next) {
            if (!$this->isAuthenticated($request)) {
                return new Response('Unauthorized', 401);
            }
            return $next($request);
        }
        
        private function isAuthenticated($request) {
            // Check authentication logic
            return true;
        }
    }
    
    class LoggingMiddleware implements Middleware {
        private $logger;
        
        public function __construct($logger) {
            $this->logger = $logger;
        }
        
        public function handle($request, $next) {
            $this->logger->info('Request: ' . $request->getUri());
            $response = $next($request);
            $this->logger->info('Response: ' . $response->getStatusCode());
            return $response;
        }
    }
    
    class MiddlewareStack {
        private $middlewares = [];
        
        public function push(Middleware $middleware) {
            $this->middlewares[] = $middleware;
            return $this;
        }
        
        public function handle($request) {
            $next = function($request) {
                return new Response('OK', 200);
            };
            
            foreach (array_reverse($this->middlewares) as $middleware) {
                $next = function($request) use ($middleware, $next) {
                    return $middleware->handle($request, $next);
                };
            }
            
            return $next($request);
        }
    }
    ?>

// Example 6: Repository pattern for data access
    <?php
    interface UserRepositoryInterface {
        public function find($id);
        public function findByEmail($email);
        public function save(User $user);
        public function delete($id);
        public function findAll($limit = 10, $offset = 0);
    }
    
    class DatabaseUserRepository implements UserRepositoryInterface {
        private $pdo;
        
        public function __construct(PDO $pdo) {
            $this->pdo = $pdo;
        }
        
        public function find($id) {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE id = ?');
            $stmt->execute([$id]);
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            return $data ? User::fromArray($data) : null;
        }
        
        public function findByEmail($email) {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->execute([$email]);
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            return $data ? User::fromArray($data) : null;
        }
        
        public function save(User $user) {
            if ($user->getId()) {
                return $this->update($user);
            } else {
                return $this->insert($user);
            }
        }
        
        private function insert(User $user) {
            $stmt = $this->pdo->prepare('INSERT INTO users (name, email, created_at) VALUES (?, ?, ?)');
            $stmt->execute([$user->getName(), $user->getEmail(), $user->getCreatedAt()]);
            return $this->pdo->lastInsertId();
        }
        
        private function update(User $user) {
            $stmt = $this->pdo->prepare('UPDATE users SET name = ?, email = ? WHERE id = ?');
            return $stmt->execute([$user->getName(), $user->getEmail(), $user->getId()]);
        }
        
        public function delete($id) {
            $stmt = $this->pdo->prepare('DELETE FROM users WHERE id = ?');
            return $stmt->execute([$id]);
        }
        
        public function findAll($limit = 10, $offset = 0) {
            $stmt = $this->pdo->prepare('SELECT * FROM users LIMIT ? OFFSET ?');
            $stmt->execute([$limit, $offset]);
            return array_map(function($data) {
                return User::fromArray($data);
            }, $stmt->fetchAll(PDO::FETCH_ASSOC));
        }
    }
    ?>

// Example 7: Event system for loose coupling
    <?php
    interface Event {
        public function getName();
    }
    
    interface EventListener {
        public function handle(Event $event);
    }
    
    class EventDispatcher {
        private $listeners = [];
        
        public function addListener($eventName, EventListener $listener) {
            $this->listeners[$eventName][] = $listener;
        }
        
        public function dispatch(Event $event) {
            $eventName = $event->getName();
            
            if (!isset($this->listeners[$eventName])) {
                return;
            }
            
            foreach ($this->listeners[$eventName] as $listener) {
                $listener->handle($event);
            }
        }
    }
    
    class UserRegisteredEvent implements Event {
        private $user;
        
        public function __construct(User $user) {
            $this->user = $user;
        }
        
        public function getName() {
            return 'user.registered';
        }
        
        public function getUser() {
            return $this->user;
        }
    }
    
    class SendWelcomeEmailListener implements EventListener {
        public function handle(Event $event) {
            if ($event instanceof UserRegisteredEvent) {
                // Send welcome email
                echo \"Sending welcome email to: \" . $event->getUser()->getEmail();
            }
        }
    }
    
    $dispatcher = new EventDispatcher();
    $dispatcher->addListener('user.registered', new SendWelcomeEmailListener());
    ?>

// Example 8: API routing system
    <?php
    class Router {
        private $routes = [];
        private $middlewares = [];
        
        public function get($path, $handler) {
            $this->addRoute('GET', $path, $handler);
        }
        
        public function post($path, $handler) {
            $this->addRoute('POST', $path, $handler);
        }
        
        public function put($path, $handler) {
            $this->addRoute('PUT', $path, $handler);
        }
        
        public function delete($path, $handler) {
            $this->addRoute('DELETE', $path, $handler);
        }
        
        private function addRoute($method, $path, $handler) {
            $this->routes[$method][$path] = $handler;
        }
        
        public function middleware($middleware) {
            $this->middlewares[] = $middleware;
        }
        
        public function dispatch($method, $path) {
            $handler = $this->routes[$method][$path] ?? null;
            
            if (!$handler) {
                return new Response('Not Found', 404);
            }
            
            // Apply middlewares
            foreach ($this->middlewares as $middleware) {
                $middleware->handle($this->request, function($request) use ($handler) {
                    return call_user_func($handler, $request);
                });
            }
            
            return call_user_func($handler, $this->request);
        }
    }
    
    $router = new Router();
    $router->middleware(new LoggingMiddleware($logger));
    $router->middleware(new AuthMiddleware());
    
    $router->get('/users', function($request) {
        return new Response(['users' => $userRepository->findAll()], 200);
    });
    
    $router->post('/users', function($request) {
        $data = $request->getBody();
        $user = User::fromArray($data);
        $userRepository->save($user);
        return new Response(['message' => 'User created'], 201);
    });
    ?>

// Example 9: Caching system integration
    <?php
    interface CacheInterface {
        public function get($key);
        public function set($key, $value, $ttl = 3600);
        public function delete($key);
        public function flush();
    }
    
    class RedisCache implements CacheInterface {
        private $redis;
        
        public function __construct($redis) {
            $this->redis = $redis;
        }
        
        public function get($key) {
            $value = $this->redis->get($key);
            return $value ? unserialize($value) : null;
        }
        
        public function set($key, $value, $ttl = 3600) {
            return $this->redis->setex($key, $ttl, serialize($value));
        }
        
        public function delete($key) {
            return $this->redis->del($key);
        }
        
        public function flush() {
            return $this->redis->flushdb();
        }
    }
    
    class CachedUserRepository implements UserRepositoryInterface {
        private $repository;
        private $cache;
        
        public function __construct(UserRepositoryInterface $repository, CacheInterface $cache) {
            $this->repository = $repository;
            $this->cache = $cache;
        }
        
        public function find($id) {
            $cacheKey = \"user:{$id}\";
            $user = $this->cache->get($cacheKey);
            
            if (!$user) {
                $user = $this->repository->find($id);
                if ($user) {
                    $this->cache->set($cacheKey, $user, 3600);
                }
            }
            
            return $user;
        }
        
        public function save(User $user) {
            $result = $this->repository->save($user);
            $this->cache->delete(\"user:{$user->getId()}\");
            return $result;
        }
        
        // Implement other methods...
    }
    ?>`,

    "PHP Best Practices": `
// Example 1: Clean code principles
    <?php
    // Best practices example
    function calculateTotal($items) {
        $total = 0; 
        foreach ($items as $item) {
            $total += $item->price;
        }
        return $total;
    }
    ?>

// Example 2: Type declarations and return types
    <?php
    declare(strict_types=1);
    
    class User {
        private int $id;
        private string $name;
        private string $email;
        private DateTime $createdAt;
        
        public function __construct(int $id, string $name, string $email) {
            $this->id = $id;
            $this->name = $name;
            $this->email = $email;
            $this->createdAt = new DateTime();
        }
        
        public function getId(): int {
            return $this->id;
        }
        
        public function getName(): string {
            return $this->name;
        }
        
        public function getEmail(): string {
            return $this->email;
        }
        
        public function getCreatedAt(): DateTime {
            return $this->createdAt;
        }
        
        public function setName(string $name): void {
            if (empty(trim($name))) {
                throw new InvalidArgumentException('Name cannot be empty');
            }
            $this->name = $name;
        }
        
        public function setEmail(string $email): void {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                throw new InvalidArgumentException('Invalid email format');
            }
            $this->email = $email;
        }
    }
    ?>

// Example 3: Error handling and logging
    <?php
    use Psr\\Log\\LoggerInterface;
    
    class UserService {
        private LoggerInterface $logger;
        private UserRepository $userRepository;
        
        public function __construct(LoggerInterface $logger, UserRepository $userRepository) {
            $this->logger = $logger;
            $this->userRepository = $userRepository;
        }
        
        public function createUser(array $userData): User {
            try {
                $this->validateUserData($userData);
                
                $user = new User(
                    $userData['id'],
                    $userData['name'],
                    $userData['email']
                );
                
                $savedUser = $this->userRepository->save($user);
                
                $this->logger->info('User created successfully', [
                    'user_id' => $savedUser->getId(),
                    'email' => $savedUser->getEmail()
                ]);
                
                return $savedUser;
                
            } catch (InvalidArgumentException $e) {
                $this->logger->warning('Invalid user data provided', [
                    'error' => $e->getMessage(),
                    'user_data' => $userData
                ]);
                throw $e;
                
            } catch (Exception $e) {
                $this->logger->error('Failed to create user', [
                    'error' => $e->getMessage(),
                    'trace' => $e->getTraceAsString()
                ]);
                throw new UserCreationException('Failed to create user', 0, $e);
            }
        }
        
        private function validateUserData(array $data): void {
            if (empty($data['name'])) {
                throw new InvalidArgumentException('Name is required');
            }
            
            if (empty($data['email'])) {
                throw new InvalidArgumentException('Email is required');
            }
            
            if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
                throw new InvalidArgumentException('Invalid email format');
            }
        }
    }
    ?>

// Example 4: Database best practices with prepared statements
    <?php
    class UserRepository {
        private PDO $pdo;
        
        public function __construct(PDO $pdo) {
            $this->pdo = $pdo;
            $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        
        public function findById(int $id): ?User {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE id = ?');
            $stmt->execute([$id]);
            
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            return $data ? $this->mapToUser($data) : null;
        }
        
        public function findByEmail(string $email): ?User {
            $stmt = $this->pdo->prepare('SELECT * FROM users WHERE email = ?');
            $stmt->execute([$email]);
            
            $data = $stmt->fetch(PDO::FETCH_ASSOC);
            return $data ? $this->mapToUser($data) : null;
        }
        
        public function save(User $user): User {
            if ($user->getId() === 0) {
                return $this->insert($user);
            } else {
                return $this->update($user);
            }
        }
        
        private function insert(User $user): User {
            $stmt = $this->pdo->prepare(
                'INSERT INTO users (name, email, created_at) VALUES (?, ?, ?)'
            );
            
            $stmt->execute([
                $user->getName(),
                $user->getEmail(),
                $user->getCreatedAt()->format('Y-m-d H:i:s')
            ]);
            
            $user->setId((int)$this->pdo->lastInsertId());
            return $user;
        }
        
        private function update(User $user): User {
            $stmt = $this->pdo->prepare(
                'UPDATE users SET name = ?, email = ? WHERE id = ?'
            );
            
            $stmt->execute([
                $user->getName(),
                $user->getEmail(),
                $user->getId()
            ]);
            
            return $user;
        }
        
        private function mapToUser(array $data): User {
            $user = new User(
                (int)$data['id'],
                $data['name'],
                $data['email']
            );
            
            if (isset($data['created_at'])) {
                $user->setCreatedAt(new DateTime($data['created_at']));
            }
            
            return $user;
        }
    }
    ?>

// Example 5: Security best practices
    <?php
    class SecurityHelper {
        public static function sanitizeInput(string $input): string {
            return htmlspecialchars(trim($input), ENT_QUOTES, 'UTF-8');
        }
        
        public static function validateCsrfToken(string $token): bool {
            if (!isset($_SESSION['csrf_token'])) {
                return false;
            }
            
            return hash_equals($_SESSION['csrf_token'], $token);
        }
        
        public static function generateCsrfToken(): string {
            $token = bin2hex(random_bytes(32));
            $_SESSION['csrf_token'] = $token;
            return $token;
        }
        
        public static function hashPassword(string $password): string {
            return password_hash($password, PASSWORD_ARGON2ID, [
                'memory_cost' => 65536,
                'time_cost' => 4,
                'threads' => 3
            ]);
        }
        
        public static function verifyPassword(string $password, string $hash): bool {
            return password_verify($password, $hash);
        }
        
        public static function generateSecureToken(int $length = 32): string {
            return bin2hex(random_bytes($length));
        }
        
        public static function validateFileUpload(array $file, array $allowedTypes = []): bool {
            if ($file['error'] !== UPLOAD_ERR_OK) {
                return false;
            }
            
            if (!empty($allowedTypes)) {
                $finfo = finfo_open(FILEINFO_MIME_TYPE);
                $mimeType = finfo_file($finfo, $file['tmp_name']);
                finfo_close($finfo);
                
                if (!in_array($mimeType, $allowedTypes)) {
                    return false;
                }
            }
            
            return true;
        }
    }
    ?>

// Example 6: Performance optimization techniques
    <?php
    class PerformanceOptimizer {
        private static array $cache = [];
        
        public static function cacheResult(string $key, callable $callback) {
            if (isset(self::$cache[$key])) {
                return self::$cache[$key];
            }
            
            $result = $callback();
            self::$cache[$key] = $result;
            return $result;
        }
        
        public static function clearCache(string $key = null): void {
            if ($key === null) {
                self::$cache = [];
            } else {
                unset(self::$cache[$key]);
            }
        }
        
        public static function optimizeDatabaseQueries(PDO $pdo): void {
            // Enable query caching
            $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
            $pdo->setAttribute(PDO::MYSQL_ATTR_USE_BUFFERED_QUERY, false);
        }
        
        public static function lazyLoad(array $items, int $batchSize = 100): Generator {
            foreach (array_chunk($items, $batchSize) as $batch) {
                yield $batch;
            }
        }
        
        public static function optimizeMemoryUsage(): void {
            // Clear unnecessary variables
            unset($unusedVariables);
            
            // Force garbage collection
            gc_collect_cycles();
            
            // Increase memory limit if needed
            if (memory_get_usage() > (memory_get_peak_usage() * 0.8)) {
                ini_set('memory_limit', '512M');
            }
        }
    }
    ?>

// Example 7: Testing best practices
    <?php
    use PHPUnit\\Framework\\TestCase;
    
    class UserServiceTest extends TestCase {
        private UserService $userService;
        private LoggerInterface $mockLogger;
        private UserRepository $mockRepository;
        
        protected function setUp(): void {
            $this->mockLogger = $this->createMock(LoggerInterface::class);
            $this->mockRepository = $this->createMock(UserRepository::class);
            $this->userService = new UserService($this->mockLogger, $this->mockRepository);
        }
        
        public function testCreateUserWithValidData(): void {
            $userData = [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'john@example.com'
            ];
            
            $expectedUser = new User(1, 'John Doe', 'john@example.com');
            
            $this->mockRepository
                ->expects($this->once())
                ->method('save')
                ->willReturn($expectedUser);
            
            $this->mockLogger
                ->expects($this->once())
                ->method('info');
            
            $result = $this->userService->createUser($userData);
            
            $this->assertInstanceOf(User::class, $result);
            $this->assertEquals('John Doe', $result->getName());
            $this->assertEquals('john@example.com', $result->getEmail());
        }
        
        public function testCreateUserWithInvalidEmail(): void {
            $userData = [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'invalid-email'
            ];
            
            $this->expectException(InvalidArgumentException::class);
            $this->expectExceptionMessage('Invalid email format');
            
            $this->userService->createUser($userData);
        }
        
        public function testCreateUserWithEmptyName(): void {
            $userData = [
                'id' => 1,
                'name' => '',
                'email' => 'john@example.com'
            ];
            
            $this->expectException(InvalidArgumentException::class);
            $this->expectExceptionMessage('Name is required');
            
            $this->userService->createUser($userData);
        }
    }
    ?>

// Example 8: Code documentation and standards
    <?php
    /**
     * User management service
     * 
     * This service handles user creation, validation, and related operations.
     * It follows the single responsibility principle and uses dependency injection.
     * 
     * @package App\\Services
     * @author Your Name
     * @version 1.0.0
     * @since 2023-01-01
     */
    class UserService {
        /**
         * @var LoggerInterface Logger for recording service activities
         */
        private LoggerInterface $logger;
        
        /**
         * @var UserRepository Repository for user data operations
         */
        private UserRepository $userRepository;
        
        /**
         * Constructor
         * 
         * @param LoggerInterface $logger Logger instance for logging
         * @param UserRepository $userRepository Repository for user operations
         */
        public function __construct(LoggerInterface $logger, UserRepository $userRepository) {
            $this->logger = $logger;
            $this->userRepository = $userRepository;
        }
        
        /**
         * Create a new user with validation
         * 
         * @param array $userData User data including name and email
         * @return User Created user instance
         * @throws InvalidArgumentException When user data is invalid
         * @throws UserCreationException When user creation fails
         * 
         * @example
         * \```php
         * $userData = [
         *     'id' => 1,
         *     'name' => 'John Doe',
         *     'email' => 'john@example.com'
         * ];
         * $user = $userService->createUser($userData);
         * ``\`
         */
        public function createUser(array $userData): User {
            // Implementation here...
        }
        
        /**
         * Validate user data
         * 
         * @param array $data User data to validate
         * @throws InvalidArgumentException When validation fails
         * @internal This method is used internally by createUser
         */
        private function validateUserData(array $data): void {
            // Implementation here...
        }
    }
    ?>

// Example 9: Configuration and environment management
    <?php
    class Config {
        private static ?array $config = null;
        
        public static function load(string $configPath = 'config/app.php'): void {
            if (!file_exists($configPath)) {
                throw new RuntimeException(\"Configuration file not found: $configPath\");
            }
            
            self::$config = require $configPath;
        }
        
        public static function get(string $key, mixed $default = null): mixed {
            if (self::$config === null) {
                self::load();
            }
            
            $keys = explode('.', $key);
            $value = self::$config;
            
            foreach ($keys as $k) {
                if (!isset($value[$k])) {
                    return $default;
                }
                $value = $value[$k];
            }
            
            return $value;
        }
        
        public static function getEnvironment(): string {
            return self::get('app.env', 'production');
        }
        
        public static function isProduction(): bool {
            return self::getEnvironment() === 'production';
        }
        
        public static function isDevelopment(): bool {
            return self::getEnvironment() === 'development';
        }
        
        public static function getDatabaseConfig(): array {
            return [
                'host' => self::get('database.host'),
                'port' => self::get('database.port'),
                'database' => self::get('database.database'),
                'username' => self::get('database.username'),
                'password' => self::get('database.password'),
                'charset' => self::get('database.charset', 'utf8mb4'),
                'options' => [
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
                    PDO::ATTR_EMULATE_PREPARES => false
                ]
            ];
        }
    }
    
    // Load environment variables
    if (file_exists('.env')) {
        $lines = file('.env', FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos($line, '=') !== false && strpos($line, '#') !== 0) {
                list($key, $value) = explode('=', $line, 2);
                $_ENV[trim($key)] = trim($value, '\"\\'');
            }
        }
    }
    ?>`,
  };
  return examples[lessonTitle] || "<?php\n// Example code will be provided\n?>";
};

const getPHPCodeExplanation = (lessonTitle) => {
  const explanations = {
    "Introduction to PHP": `
### Example 1 
## **What is PHP and its Role in Web Development**
PHP, which stands for Hypertext Preprocessor, is a server-side scripting language designed specifically for web development. 
Its primary role is to process data on a web server and generate dynamic content, such as HTML, which is then sent to a web browser. 
Unlike static HTML pages that display the same content to every user, PHP allows you to create websites that can interact with databases, 
handle forms, manage sessions, and deliver personalized content. Think of it as the engine behind a website, making it dynamic and interactive.

### Example 2
#### **Basic PHP Syntax and Structure**
PHP code is embedded within HTML documents using special PHP tags. The most common
and recommended tag is \`<?php ... ?>\` . Any code within these tags is interpreted as PHP code
by the server. PHP statements are typically terminated with a semicolon (\`;\`).

**Code Explanation**
- The \`<?php and ?>\` tags define the boundaries of the PHP code block. Everything
outside these tags is treated as plain HTML.
- \`//\` is used for single-line comments.
- \`/* ... */\` is used for multi-line comments.
- The \`echo\` statement is a PHP construct used to output strings to the browser. In this
case, it outputs an HTML paragraph.

### Example 3
#### **Writing Your First PHP Script**
Writing your first PHP script is straightforward. You just need a text editor and a local web server environment 
(like XAMPP, WAMP, or MAMP) to run the code.

- **Create a file**: Open a text editor and save the file with a \`.php\` extension (e.g., \`index.php\`).
- **Add PHP tags**: Start by adding the opening \`<?php\` and closing \`?>\` tags.
- **Write your code**: Use the \`echo\` or \`print\` statement to output text.
- Save the file and place it in your web server's root directory (e.g., \`htdocs\` for XAMPP).

Run it in your browser: Navigate to \`http://localhost/your_file_name.php\`.

**Code Explanation**:
The script simply uses \`echo\` to print two lines of text to the browser. The \`<br>\` is an HTML tag that creates a line break, 
demonstrating how PHP can output HTML markup.

### Example 4 
## PHP Tags and Output Statements
PHP offers a few different ways to enclose code and display output.

- **Standard Tags**: \`<?php ... ?>\` are the recommended and most common tags.
- **Short Tags**: \`<? ... ?>\` are an older, less-common syntax that can be disabled on some servers.
- **Echo Short Tag**: \`<?= ... ?>\` is a shorthand for \`<?php echo ... ?>\`, commonly used for quickly outputting a variable's value.

\`echo\` vs. \`print\`:
Both \`echo\` and \`print\` are used to output strings. The key difference is that \`echo\` is a language construct that can output multiple 
strings at once and is slightly faster, while \`print\` is a function that can only output one string and returns a value of \`1\`.

**Code Explanation**
The \`<?= $username ?>\` short tag is a clean and efficient way to display the \`$username\` variable directly in the HTML. The example also highlights 
the difference between \`echo\` and \`print\`, showing that \`echo\` can accept multiple comma-separated arguments.
    `,

    "PHP Syntax and Variables": `
### Example 1 
## PHP Syntax Rules and Conventions
PHP code is executed on the server, and the result (usually HTML) is sent to the browser. It's an easy language to embed within HTML.
- **Opening and Closing Tags**: PHP code blocks start with \`<?php\` and end with \`?>\`.
- **Case-Sensitivity**: PHP is case-sensitive for variable names but case-insensitive for keywords like \`if\`, \`else\`, and \`while\`.
- **Statements**: Each statement must end with a semicolon (\`;\`).

**Code Explanation**
The code block \`<?php ... ?>\` contains all the PHP logic. The \`echo\` statement is a language construct used to output text to the browser. 
Notice the semicolon at the end of each PHP line. The variable \`$message\` is case-sensitive, so \`$MESSAGE\` would be a different variable.

### Example 2
### Variable Declaration and Naming
In PHP, a variable is declared by simply writing a dollar sign ($) followed by the variable name.

- **Start with \`$\`**: All variable names must begin with a dollar sign.
- **Naming Rules**: Variable names must start with a letter or an underscore, followed by any number of letters, numbers, or underscores. 
They cannot contain spaces or other special characters.
- **Dynamic Typing**: You do not need to declare the data type of a variable. PHP determines the type automatically based on the value assigned.

**Code Explanation**
The example shows several correctly named variables. The **dot** (\`.\`) is the string concatenation operator in PHP, used to join strings and variables. 
The invalid names are commented out because they would cause a parsing error.

### Example 3
### Data Type Basics
PHP supports a range of fundamental data types.

- **String**: A sequence of characters.
- **Integer**: A whole number.
- **Float**: A number with a decimal point.
- **Boolean**: \`true\` or \`false\`.
- **Array**: A collection of values.
- **Object**: An instance of a class.
- **NULL**: A variable with no value.

**Code Explanation**
The \`gettype()\` function is used to check a variable's data type. The \`var_dump()\` function is a powerful tool for debugging, 
as it displays detailed information about a variable, including its type and value.

### Example 4
### Variable Scope
Variable scope determines where a variable can be accessed or used within a program. 
PHP has three main scopes:
- **Local**: Declared inside a function and only accessible within that function.
- **Global**: Declared outside any function. To access a \`global\` variable from within a function, you must use the global keyword.
- **Static**: Declared inside a function but retains its value between function calls.

**Code Explanation**
The \`$globalVar\` can only be accessed inside \`testScope()\` by using the \`global\` keyword. The \`$localVar\` exists only within the \`testScope()\` function. 
The \`staticCounter()\` function demonstrates a static variable, which retains its value between calls, unlike a normal local variable that would be re-initialized each time.
    
### Example 5
### Constants and Magic Constants
A constant is an identifier (name) for a simple value. As the name suggests, that value
cannot change during the execution of the script. Constants are defined using the \`define()\`
function or the \`const\` keyword.

#### **Rules for PHP constants**:
- Constants are case-sensitive by default (though \`define()\` allows for case-insensitivity).
- Conventionally, constant names are always in uppercase.
- Constants do not need a \`$\` sign before them.
- Constants can be accessed from anywhere in the script, regardless of scope.

**Code Explanation**
Constants like \`PI\` and \`GREETING\` are declared once with \`define()\` and cannot be changed later. \`_ _LINE_ _\` and \`_ _FILE_ _\` 
are examples of magic constants that provide dynamic information about the script's execution context. 
These are useful for debugging and logging.`,


    "PHP Data Types": `
### Example 1
## Scalar Types
Scalar types are the most basic data types in PHP, holding a single value.
- **String**: A sequence of characters. Strings can be enclosed in single quotes (\`'...'\`) or double quotes (\`"..."\`). 
Double quotes allow for variable parsing and escape sequences.
- **Integer**: A non-fractional number. The range of an integer depends on the platform, 
but it's typically 32-bit (for 32-bit systems) or 64-bit (for 64-bit systems).
- **Float**: A number with a decimal point or in exponential form. Also known as a "floating-point number" or "double".
- **Boolean**: Represents a truth value. It can be either \`true\` or \`false\`. These values are case-insensitive.

**Code Explanation**
The example demonstrates the four scalar types. We use the \`gettype()\` function to confirm the data type of each variable. 
The conditional \`($is_active ? 'Yes' : 'No')\` is a ternary operator that checks the boolean value to output a readable string.

### Example 2
### Compound Types
Compound types can hold multiple values.
- **Array**: A data structure that stores a collection of values. Arrays can be indexed numerically, associatively (with string keys), or both.
- **Object**: An instance of a user-defined class. It encapsulates both data (properties) and functions (methods).

**Code Explanation**
- The \`$person\` variable is an associative array where keys are strings. Values are accessed using the bracket notation (\`$person["name"]\`). 
- The \`Car\` class is a blueprint for objects. The \`$myCar\` variable is an **object** of the \`Car\` class. Its properties are accessed 
using the arrow operator (\`->\`). \`var_dump()\` is used again to display the structure and content of both the array and the object.

### Example 3
### Special Types
PHP has two special data types.
- **NULL**: A variable of type \`NULL\` has no value. A variable is considered \`NULL\` if it has been assigned the constant \`NULL\`, 
has not been assigned a value yet, or has been \`unset()\`.
- **Resource**: A resource is a special variable that holds a reference to an external resource, such as a file handle, a database connection, or a stream. 
Resources are typically created by a special function and are automatically freed by PHP's garbage collector when no longer needed.

**Code Explanation**
When \`$x\ is \`unset()\`, \`var_dump($x)\` shows that it is \`NULL\`. The \`fopen()\` function returns a resource type, which is confirmed by \`gettype($file)\`. 
This resource allows you to interact with the file system. \`fclose()\` is used to close the file handle.

### Example 4
### Type Juggling and Type Casting
- **Type Juggling**: PHP's flexibility allows it to automatically convert data types as needed. This is known as **type juggling**. 
For example, when adding a string to an integer, PHP will automatically try to convert the string to a number.
- **Type Casting**: This is a manual conversion of a variable from one data type to another. You can do this by placing the desired type 
in parentheses before the variable (\`(int)\`, \`(float)\`, \`(string)\`, \`(array)\`, \`(bool)\`, \`(object)\`).

**Code Explanation**
- In the first example, PHP automatically converts the string \`"20"\` to an integer \`20\` to perform the addition. This is type juggling. 
- In the second example, we explicitly use \`(int)\` and \`(float)\` to cast the string to different data types, demonstrating the manual process of type casting.

### Example 5 
### Type Checking Functions
PHP provides several functions to check a variable's data type.

- \`is_string()\`: Checks if a variable is a string.
- \`is_int()\`: Checks if a variable is an integer.
- \`is_float()\`: Checks if a variable is a float.
- \`is_bool()\`: Checks if a variable is a boolean.
- \`is_array()\`: Checks if a variable is an array.
- \`is_object()\`: Checks if a variable is an object.
- \`is_null()\`: Checks if a variable is NULL.

**Code Explanation**
The is_... functions are a safe way to check a variable's type before performing operations on it. 
This helps prevent type-related errors and makes your code more robust. The functions return true or false, 
allowing them to be used directly within conditional statements like if.

`,
    "PHP Operators": `
### Example 1
Operators in PHP are used to perform operations on variables and values.
They are grouped into arithmetic, assignment, comparison, logical, and increment/decrement operators.

**Arithmetic Operators** are special symbols or keywords that perform operations on values (operands). 
They are used to manipulate data, perform calculations, compare values, and combine logical conditions.

| Operator | Description           | Example     | Result |
| :------- | :-------------------- | :---------- | :----- |
| \`+\`      | Addition              | \`2 + 5\`     | \`7\`    |
| \`-\`      | Subtraction           | \`7 - 2\`     | \`5\`    |
| \`*\`      | Multiplication        | \`3 * 3\`     |\`9\`   |
| \`/\`      | Division              | \`15 / 5\`    | \`3\`    |
| \`%\`      | Modulus (remainder)   | \`10 % 3\`    | \`1\`    |
| \`**\`     | Exponentiation (ES2016) | \`2**3\`    | \`8\`    |


  
### Example 2 
**Assignment Operator** are used to assign values to variables.

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
**Comparison Operators** compare two values and return a boolean ( true or false ).

| Operator | Description               | Example       | Result  |
| :------- | :------------------------ | :------------ | :------ |
| \`==\`     |  Equal                  | \`5 == 5\`      | \`True\`  |
| \`!=\`     |  not equal              | \`5 != 3\`      | \`True\`  |
| \`>\`      | Greater than            | \`7 > 4\`       | \`True\`  |
| \`<\`      | less than               | \`3 < 5\`       | \`True\`  |
| \`>=\`     | greater or equal        | \`5 >= 5\`      | \`True\`  |
| \`<=\`     | less or equal           | \`4 <= 6\`      | \`True\`  |
| \`===\`    |  strictly equal         | \`4 === "4"\`   | \`False\`  |
| \`!==\`    | Cstrictly not equal     | \`5 !== 5\`     | \`False\`  |

### Example 4
**Logical operators** are Used for combining conditions and boolean logic.

### **Logical Operators (Truth Table Style)**
| Operator | Description | Example             | Result  |
| :------- | :---------- | :------------------ | :------ |
| \`AND\`    | AND         | \`True and False\`    | \`False\` |
| \`OR\`     | OR          | \`True or False\`     | \`True\`  |
| \`NOT\`    | NOT         | \`not True\`          | \`False\` |


### Example 5 
**Increment/Decrement Operators**: Increase or decrease a variable's value by one. The \`++\` operator increments, and \`--\` decrements. 
They can be placed before (pre-increment/decrement) or after (post-increment/decrement) the variable.

### Increment/Decrement Operators
| Operator | Description       | Example     | Result |
| :------- | :-----------------| :---------- | :----- |
| \`++\`   | Increment         | \`$x = 5; $x++;\`    | \`$x is now 6\`    |
| \`--\`   | Decrement         | \`$e = 8; $e--;\`    | \`$e is now 7\`    |

**Why This Matters:**
- Arithmetic operators are fundamental for mathematical calculations
- The results show how different operations produce different outcomes
- Understanding operator precedence helps write correct mathematical expressions`,

    "PHP Control Structures": `
### Example 1 
**Code Explanation:**
- \`$score\` is the value we’re grading; \`$isMakeUp\` adds a second business rule.
- \`if (!is_numeric($score))\` validates the type before comparing; this avoids accidental loose comparisons like \`"eighty" >= 70\`.
- \`elseif ($score < 0 || $score > 100)\` enforces a valid range early, keeping later branches simpler.
- \`elseif ($score >= 70)\` handles the highest band first (top-down ordering prevents overlapping ranges from misfiring).
- The nested if under the 70+ branch demonstrates that you can refine logic after a broad match. Here we cap exactly 70 if it was a make-up.
- Subsequent \`elseif\` blocks handle descending ranges. Each range uses \`>=\` with descending thresholds so there are no gaps.
- The final else is a catch-all for anything below 45.
- Braces \`{}\` are used even for one-liners—this prevents bugs when adding lines later.
- Because PHP is loosely typed, validating with \`is_numeric()\` is safer than relying on automatic casting.

### Example 2 
**Code Explanation**
- \`switch ($day)\` compares \`$day\` against each \`case\`.
- **Fall-through**: \`case 6\`: flows directly into \`case 7\`: until a \`break;\` appears, so both produce “Weekend”. This is a common pattern to group multiple matches.
- \`break;\` stops the switch; without it, execution “falls through” into the next case, often causing unintended output.
- \`default:\` runs when no case matches—always include it to handle unexpected values.
- **Important PHP nuance**: \`switch\` comparisons are loose (like \`==\`). A string \`"3"\` will match case \`3\`. If you require strict checks, either normalize types 
(e.g., cast to \`int\`) before the switch or use PHP 8’s match (strict), not covered here.

### Example 3 
### **while, do-while loops**
Loops are used to execute a block of code repeatedly as long as a specified condition is true.
- \`while\` loop: Executes a block of code as long as the specified condition is true. The
condition is evaluated before each iteration.
- \`do...while\` loop: Executes a block of code once, and then repeats the loop as long as the
specified condition is true. The condition is evaluated *after* each iteration, guaranteeing
that the block of code is executed at least once.
 
**Code Explanation** 
### While block
- nInitialize \`$i\` and \`$sum\`. Initialization should happen outside the loop.
- \`while ($i <= 5)\` checks the condition before each iteration; if \`$i\` starts greater than 5, it never runs.
- \`$sum += $i;\` is the loop’s work (accumulation).
- \`$i++;\` is the update step; omitting it creates an infinite loop.
- After the loop, \`$sum\` is printed.

### Do-while block
- \`$attempts\` counts tries; \`$connected\` simulates a connection status.
- The body runs once before the condition is checked—useful for “try at least once” flows (e.g., menu display, first fetch).
- We simulate success on the second attempt: \`($attempts === 2)\`.
- The condition \`(!$connected && $attempts < $maxAttempts)\` ensures we stop on success or when attempts are exhausted.
- The final message reports the outcome.

### Example 4 
### for, foreach loops
- **for loop**: Used when you know how many times you want to execute a block of code. It
consists of three parts: initialization, condition, and increment/decrement.
- **foreach loop**: Specifically designed to iterate over arrays and objects. It provides an
easy way to loop through each item in a collection.

**Code Explanation**
### For loop
- for \`($i = 1; $i <= 10; $i++) \`packs init; condition; update in one line—ideal for known iteration counts.
- Inside, we filter with if \`($i % 2 === 0)\` to act only on even numbers.
- Using \`===\` prevents loose comparisons; although \`%\` yields integers, strictness is a good habit.

### Foreach (key/value)
- \`foreach ($prices as $item => $naira)\` gives both key and value each iteration.
- This avoids manual indexing and is safer for associative arrays.
- \`ucfirst()\` just prettifies the item name for output.

### Foreach by reference
- \`foreach ($discounts as &$d)\` uses \`&\` to get a reference to the element so assigning to \`$d\` changes the original array.
- We apply \`10%\` off and cast to \`int\` to avoid floating decimals in currency.
- \`unset($d)\` is critical—it breaks the lingering reference. Without it, \`$d\` might still be bound to the last element and 
later assignments to \`$d\` could unexpectedly modify the array.

### Example 5 
### break and continue statements
- **break statement**: Used to terminate the execution of the current loop (or switch
statement) immediately. Control passes to the statement immediately following the
terminated loop.
- **continue statement**: Used to skip the rest of the current iteration of the loop and
proceed to the next iteration. Control passes to the condition (for while and do-while )
or the increment/decrement part (for for loop).

**Code Explanation**
- We iterate through \`$nums\`.
- continue; skips the rest of the current iteration when a negative is found—no push to \`$positives\`.
- When we hit \`0\`, \`break;\` exits the loop completely—nothing after runs, and remaining elements aren’t processed.
- Only positive numbers before the first zero are collected.
`,
    "PHP Functions": `
### Example 1 
Functions are blocks of code that perform a specific task and can be reused throughout
your program. PHP has a vast library of built-in functions, and you can also define your own
custom functions.

### Function declaration and calling
To declare a function in PHP, you use the function keyword, followed by the function name,
parentheses (which may contain parameters), and curly braces {} that enclose the
function's code

**Code Explanation**
- \`function sayHello() { ... }\` defines a function named greet.
- Functions must start with \`function\`, followed by a name (letters, numbers, underscore, no starting digit).
- The function body \`{ ... }\` holds the code that runs when called.
- \`greet();\` executes the function. It can be called multiple times without rewriting the logic.
- Functions should be declared before they’re called (though PHP allows calling earlier if in the same file).

### Example 2 
### Parameters and return values
Functions can accept input values called parameters (or arguments) and can return a value
using the return statement.
- **Parameters**: Variables listed inside the parentheses in the function definition. They act
as placeholders for the values that will be passed into the function when it is called.
- **Return Values**: A function can return a single value (of any type) using the return
statement. Once a return statement is executed, the function terminates, and the
returned value is sent back to the caller.

**Code Explanation**
- \`function addNumbers($a, $b)\` → \`$a\` and \`$b\` are parameters (inputs).
- \`return $a + $b;\` → sends result back to the caller instead of printing directly.
- \`$sum1 = addNumbers(10, 5);\` stores the return value in a variable.
- Functions can have default parameter values \`($name = "Guest")\` if no argument is provided.
- Parameters are passed by value by default—changing inside doesn’t affect outside unless passed by reference \`(&$param)\`.

### Example 3
### Variable scope in functions
As discussed in Section 2.4, variables in PHP have different scopes. Inside a function,
variables declared are local to that function. To access global variables within a function,
you need to use the \`global\` keyword or the \`$GLOBALS\` superglobal array

### Example 4 
### Anonymous function as a callback
Anonymous functions (also known as closures) are functions that have no specified name.
They can be assigned to variables and passed as arguments to other functions. They are
particularly useful as callback functions.

**Code Explanation**
- \`$greet = function($name) { ... };\` assigns a function to a variable.
-  \`$greet("Charlie")\` calls it just like a normal function.
- Functions can be passed as arguments to other functions.

### Example 5 
## Built-in functions
PHP comes with a vast library of built-in functions that perform a wide range of tasks, from
string manipulation and mathematical calculations to file handling and database
interaction. Using these functions saves development time and ensures robust code.

### Examples of common built-in functions:
***String Functions:**
- \`strlen()\` : Returns the length of a string.
- \`str_replace()\` : Replaces all occurrences of a substring with another substring.
- \`strtoupper()\` : Converts a string to uppercase.
- \`strtolower()\` : Converts a string to lowercase.

***Array Functions:**
- \`count()\` : Returns the number of elements in an array.
- \`array_push()\` : Adds one or more elements to the end of an array.
- \`array_pop()\` : Removes the last element from an array.
- \`in_array()\` : Checks if a value exists in an array.

***Mathematical Functions:***
- \`rand()\` : Generates a random integer.
- \`sqrt()\` : Returns the square root of a number.
- \`round()\` : Rounds a floating-point number.

***Date and Time Functions:***
- \`date()\` : Formats a local date/time.
- \`time()\` : Returns the current Unix timestamp

`,

    "PHP Arrays": `
### Example 1 
Arrays are powerful data structures that allow you to store multiple values in a single
variable. PHP arrays are highly flexible and can serve as indexed arrays, associative arrays,
or even multidimensional arrays.

### Indexed arrays
Indexed arrays are arrays where each element has a numeric index, starting from 0 by
default. You can create them by simply assigning values or by using the \`array()\` constructor
or square brackets \`[]\` .

**Code Explanation**
- \`["Apple", "Banana", "Cherry"]\` creates an array with numeric indexes 0,1,2.
- \`$fruits[0]\` retrieves the value at index 0.
- \`$fruits[]\` automatically appends a new item.
- \`count($fruits)\` returns the length of the array.
- For loops are common for iterating indexed arrays.

### Example 2 
### Associative arrays
Associative arrays use named keys that you assign to them, instead of numeric indices. This
allows you to use meaningful names to reference array elements.

### Example 3
### Multidimensional arrays
A multidimensional array is an array containing one or more arrays. This allows you to store
data in a table-like structure (rows and columns) or even more complex hierarchies.

### Example 4 
### Array functions
PHP provides a rich set of built-in functions for manipulating arrays. These functions allow
you to perform various operations like sorting, searching, merging, filtering, and more.

### Common PHP Array Functions
| Function        | Description                                                     |
|-----------------|-----------------------------------------------------------------|
| \`count()\`     | Returns the number of elements in an array.                     |
| \`sort()\`      | Sorts an indexed array in ascending order.                      |
| \`rsort()\`     | Sorts an indexed array in descending order.                     |
| \`asort()\`     | Sorts an associative array by value in ascending order.         |
| \`ksort()\`     | Sorts an associative array by key in ascending order.           |
| \`array_push()\`| Adds one or more elements to the end of an array.               |
| \`array_pop()\`   | Removes the last element from an array.                         |
| \`array_merge()\` | Merges one or more arrays.                                      |
| \`in_array()\`    | Checks if a value exists in an array.                           |
| \`array_keys()\`  | Returns all the keys or a subset of the keys of an array.       |
| \`array_values()\`| Returns all the values of an array.                             |
| \`array_unique()\`| Removes duplicate values from an array.                         |


### Example 5
### Array iteration
Iterating through arrays is a common task in PHP. The foreach loop is the most common
and convenient way to iterate over array elements.

### Example 6 
Iterating through arrays is a common task in PHP.
`,



    "PHP Strings": `
### Example 1 
## PHP Strings
Strings are fundamental data types in PHP, used to represent sequences of characters. PHP
provides extensive functionality for creating, manipulating, and formatting strings.

### String creation and manipulation
Strings can be created using single quotes (\`'\`) or double quotes (\`"\`). The choice between
them often depends on whether you need variable parsing or escape sequences.
- **Single Quoted Strings**: Literal interpretation. Variables and most escape sequences are
not parsed.
- **Double Quoted Strings**: Variables are parsed, and most escape sequences (like \n for
newline, \t for tab) are interpreted.

### Example 2 
### String Manipulation
PHP offers numerous functions for manipulating strings, such as getting length, finding
substrings, replacing parts, and changing case.

### Example 3 
### String functions
PHP has a comprehensive set of built-in string functions. Here are some commonly used
one

| Function          | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| \`strlen()\`      | Returns the length of a string.                                             |
| \`str_word_count()\`  | Counts the number of words in a string.                                 |
| \`strrev()\`      | Reverses a string.                                                          |
| \`strpos()\`      | Finds the position of the first occurrence of a substring in a string.      |
| \`str_replace()\` | Replaces all occurrences of a substring with another substring.             |
| \`substr()\`      | Returns a part of a string.                                                 |
| \`trim()\`       | Removes whitespace or other characters from both sides of a string.         |
| \`ltrim()\`      | Removes whitespace or other characters from the left side of a string.      |
| \`rtrim()\`      | Removes whitespace or other characters from the right side of a string.     |
| \`strtoupper()\` | Converts a string to uppercase.                                             |
| \`strtolower()\` | Converts a string to lowercase.                                             |
| \`ucfirst()\`    | Converts the first character of a string to uppercase.                      |
| \`lcfirst()\`    | Converts the first character of a string to lowercase.                      |
| \`ucwords()\`    | Converts the first character of each word in a string to uppercase.         |
| \`implode()\`    | Joins array elements with a string.                                         |
| \`explode()\`    | Splits a string by a string.                                                |


### Example 4 
### String concatenation
String concatenation is the process of joining two or more strings together to form a single
string. In PHP, the dot ( \`.\`) operator is used for string concatenation.


### Example 5 
### String formatting
String formatting involves presenting strings in a specific layout or style. PHP provides
functions like sprintf() and printf() for formatted output, similar to C-style formatting.
- \`sprintf()\` : Returns a formatted string.
- \`printf()\` : Prints a formatted string.

**Format Specifiers (common ones)**:
- \`%s\` : String
- \`%d\` : Signed decimal integer
- \`%f\` : Floating-point number
- \`%%\` : A literal percent sign

### Example 6 
### Regular expressions
Regular expressions (regex) are powerful patterns used for searching, matching, and
manipulating strings based on complex rules. PHP uses PCRE (Perl Compatible Regular
Expressions) functions, which are prefixed with \`preg_\`.
 
**Common \`preg_\` functions**:
- \`preg_match()\` : Performs a regular expression match.
- \`preg_match_all()\` : Performs a global regular expression match.
- \`preg_replace()\` : Performs a regular expression search and replace.
- \`preg_split()\` : Splits a string by a regular expression.

***Basic Regex Syntax Elements***:
- \`/pattern/modifiers\` : Delimiters (usually \`/\` ), pattern, and optional modifiers.
- \`.\` : Any character (except newline).
- \`*\` : Zero or more occurrences of the preceding character/group.
- \`+\` : One or more occurrences.
- \`?\` : Zero or one occurrence.
- \`[abc]\` : Any character from the set a, b, or c.
- \`[^abc]\` : Any character NOT from the set.
- \`[0-9]\` : Any digit.
- \`[a-z]\` : Any lowercase letter.
- \`\d\` : Any digit (equivalent to [0-9] ).
- \`\w\` : Any word character (alphanumeric + underscore).
- \`\s\` : Any whitespace character.
- \`^\` : Start of the string.
- \`$\` : End of the string`,


    "PHP Forms and User Input": `
### Example 1 
## **PHP Forms and User Input**
Handling HTML forms and processing user input is a core aspect of web development. PHP
provides robust ways to collect, validate, and utilize data submitted through forms.
**HTML forms**
HTML forms are used to collect user input. They consist of various input elements (text
fields, checkboxes, radio buttons, submit buttons, etc.) enclosed within \`<form>\` tags. The
\`action\` attribute specifies where the form data should be sent, and the \`method\` attribute
( \`GET\` or \`POST\` ) defines how the data is sent.

### Example 2 
### **Form submission methods**
HTML forms can submit data using two primary HTTP methods: \`GET\` and \`POST\` .

**GET Method**:
- Appends form data to the URL as query strings (e.g., \`process.php?\`
\`username=John&email=john@example.com\` ).
- Data is visible in the URL, making it unsuitable for sensitive information.
- Limited by URL length (typically around 2048 characters).
- Suitable for non-sensitive data, search queries, or when users might want to
bookmark the URL.

**POST Method**:
- Sends form data in the HTTP request body.
- Data is not visible in the URL, making it more secure for sensitive information (like
passwords).
- No practical limits on data size.
- Suitable for submitting large amounts of data, sensitive data, or when the
submission results in changes on the server (e.g., creating a new record).

### Example 3
### **Handling form data**
PHP provides superglobal arrays to access form data: \`$_GET\` , \`$_POST\` , and \`$_REQUEST\` .
- \`$_GET\` : An associative array of variables passed to the current script via the URL
parameters.
- \`$_POST\` : An associative array of variables passed to the current script via the HTTP
POST method.
- \`$_REQUEST\` : An associative array that by default contains the contents of \`$_GET\` ,
\`$_POST\` , and \`$_COOKIE\` .
It's crucial to always check if form fields are set and not empty before using them, typically
using \`isset()\` and \`empty()\`.

### Example 4 
### **Input validation**
Input validation is the process of ensuring that user-supplied data meets specific criteria
before it is processed or stored. This is critical for security, data integrity, and preventing
errors. Never trust user input!

***Key aspects of input validation:***
- **Required Fields**: Check if mandatory fields are filled.
- **Data Type Validation**: Ensure data is of the expected type (e.g., number, email, URL).
- **Format Validation**: Check if data adheres to a specific format (e.g., email address
pattern, phone number format).
- **Range/Length Validation**: Ensure numeric values are within a certain range, or strings
are within a certain length.
- **Sanitization**: Remove or escape potentially harmful characters (e.g., HTML tags, SQL
injection attempts).
PHP provides functions like \`filter_var()\` for validation and sanitization, and \`preg_match()\` for
custom pattern matching.

### Example 5
## **Security considerations**
Form handling is a common entry point for malicious attacks. It's paramount to implement
robust security measures to protect your application and user data. Never trust user input,
and always validate and sanitize it.

***Common Security Threats and Mitigations:***
- **SQL Injection**: Occurs when an attacker inserts malicious SQL code into input fields,
which is then executed by the database. **Mitigation:** Use prepared statements with
parameterized queries (see Section 22.2) instead of concatenating user input directly
into SQL queries.
- **Cross-Site Scripting (XSS)**: Involves injecting malicious client-side scripts (e.g.,
JavaScript) into web pages viewed by other users. Mitigation: Always sanitize output
using htmlspecialchars() or strip_tags() when displaying user-supplied data to prevent it
from being interpreted as HTML or JavaScript.
- **Cross-Site Request Forgery (CSRF)**: Tricks a user's browser into making an unwanted
request to a web application where they are authenticated. **Mitigation:** Implement
CSRF tokens (unique, unpredictable tokens) in your forms. The server generates a
token, embeds it in the form, and verifies it upon submission.
- **File Upload Vulnerabilities:** Malicious files (e.g., PHP scripts) can be uploaded and
executed on the server. **Mitigation:**
- Validate file type (MIME type, not just extension).
- Limit file size.
- Store uploaded files outside the web root or with restricted permissions.
- Rename uploaded files to prevent execution.
- Scan uploaded files for malware.
- **Session Hijacking/Fixation**: Attackers steal or fixate a user's session ID to impersonate
them. **Mitigation:**
- Use \`session_regenerate_id()\` after login to prevent session fixation.
- Set \`HttpOnly\` flag on session cookies to prevent JavaScript access.
- Use \`Secure\` flag for HTTPS-only cookies.
- Implement session timeouts.`,


    "PHP Form Validation": `
### Example 1: 
## **Client-side vs server-side validation**
Form validation can occur on the client-side (in the user's browser) or on the server-side (on
the web server).
- **Client-side Validation:**
- **Where**: Performed in the user's web browser using HTML5 attributes (e.g., \`required\` ,
\`type="email"\` , \`pattern\` ) or JavaScript.
- **Pros**: Provides immediate feedback to the user, improves user experience, and
reduces server load by catching simple errors early.
- **Cons**: Can be bypassed by disabling JavaScript or manipulating browser requests.
**Cannot be relied upon for security**.
- **Server-side Validation**:
- **Where**: Performed on the web server using PHP (or other server-side languages).
- **Pros**: Essential for security and data integrity. Cannot be bypassed by malicious
users. Ensures data is valid before processing or storing.
- **Cons**: Requires a round trip to the server, which can be slower and impact user
experience if errors are frequent.
**Best Practice:** Always use both client-side and server-side validation. Client-side validation
enhances user experience, while server-side validation provides the necessary security and
data integrity

### Example 2 
## **Required fields**
Ensuring that mandatory fields are filled out is a basic but crucial part of form validation. In
PHP, you typically check if a field is empty using the \`empty()\` function or by checking its
length after trimming whitespace

### Example 3 
## **Data type validation**
Data type validation ensures that the submitted data conforms to the expected type (e.g.,
integer, float, email, URL). PHP's \`filter_var()\` function is highly recommended for this
purpose as it provides various filters for common data types.

### Example 4 
## **Custom validation rules**
While \`filter_var()\` covers many common validation scenarios, you often need to implement
custom validation rules for specific business logic or complex data formats. Regular
expressions (\`preg_match()\`) are invaluable for this.

### **Error handling**
Effective error handling in form validation involves providing clear, user-friendly feedback
when validation fails. This typically means displaying error messages next to the
problematic input fields and retaining valid user input so they don't have to re-enter
everything.

***Key principles***:
- **Collect Errors**: Store all validation errors in an array or separate variables.
- **Display Errors**: Iterate through the errors and display them prominently, usually near
the input field they relate to.
- **Retain Input**: Populate form fields with the data the user previously entered (if valid) so
they only need to correct errors.
***Example (integrated into previous examples):***
The examples in 1, 3, and 4 already demonstrate basic error handling by:
- Initializing error variables (e.g., \`$nameErr\` , \`$emailErr\` ) to empty strings.
- Assigning error messages to these variables if validation fails.
- Displaying the error messages next to the input fields using \`<span>\` tags with a distinct
class (e.g., \`error\` ).
- Populating the \`value\` attribute of input fields with \`<?php echo $name;?>\` (or similar) to
retain user input.
This approach ensures a good user experience by guiding them to correct their input
efficiently.`,


    "PHP File Handling": `
### Example 1
## **PHP File Handling**
PHP provides robust capabilities for interacting with the file system, allowing you to create,
read, write, and manage files on the server. This is essential for tasks like logging, content
management, and data storage.

### **Opening and closing files**
Before you can perform any operations on a file, you must first open it using the \`fopen()\`
function. After you're done with the file, it's crucial to close it using \`fclose()\` to free up
system resources.
- \`fopen(filename, mode)\`: Opens a file or URL.
- \`filename\`: The path to the file.
- \`mode\`: Specifies the type of access you require to the stream.
- \`"r"\`: Read only. Pointer at the beginning. (Default)
- \`"w"\`: Write only. Creates new file or truncates existing. Pointer at the beginning.
- \`"a"\`: Append only. Creates new file or appends to existing. Pointer at the end.
- \`"x"\`: Create and write only. Returns FALSE if file already exists. Pointer at the
beginning.
- \`"r+"\`: Read/Write. Pointer at the beginning.
- \`"w+"\`: Read/Write. Creates new file or truncates existing. Pointer at the
beginning.
- \`"a+"\`: Read/Write. Creates new file or appends to existing. Pointer at the end.
- \`fclose(file_handle)\`: Closes an open file pointer.

### Example 2
## **Reading from files**
PHP offers several functions to read content from files, depending on whether you want to
read the entire file, line by line, or character by character.
- \`fread(file_handle, length)\`: Reads up to length bytes from the file pointer.
- \`fgets(file_handle)\`: Reads a single line from the file pointer.
- \`file_get_contents(filename)\`: Reads entire file into a string. This is often the simplest way
to read a whole file.
- \`file(filename)\`: Reads entire file into an array, with each element representing a line.

### Example 3 
### **Writing to files**
To write data to a file, you typically use \`fwrite()\` after opening the file in a write (\`"w"\`),
append (\`"a"\`), or read/write (\`"w+"\`,\`"a+"\`) mode. For simple writes, \`file_put_contents()\` is a
convenient shortcut.
- **fwrite(file_handle, string)**: Writes string to the file pointer.
- **file_put_contents(filename, data, flags)**: Writes data to filename . If filename does not
exist, it is created. If it exists, it is overwritten unless \`FILE_APPEND\` flag is used.

### Example 4
### **File permissions**
File permissions determine who can read, write, or execute files and directories on the
server. Correct permissions are crucial for security and proper application functioning.
Permissions are typically represented by a three-digit octal number (e.g., 755, 644).
- **chmod(filename, mode)**: Changes file mode (permissions).
- ***mode**: An octal number representing permissions.
- First digit: Owner permissions
- Second digit: Group permissions
- Third digit: Others (public) permissions

**Common Permissions:**
- \`7 (rwx)\` : Read, Write, Execute
- \`6 (rw-)\` : Read, Write
- \`5 (r-x)\` : Read, Execute
- \`4 (r--)\` : Read only

**Example Combinations:**
- \`0755\`: Owner can read, write, execute; Group and Others can read and execute
(common for directories).
- \`0644\`: Owner can read, write; Group and Others can read (common for files).
- \`0600\`: Owner can read, write; No access for Group and Others (very restrictive).

### Example 5
## **File uploads**
PHP makes it relatively easy to handle file uploads from HTML forms. However, it's crucial
to implement robust security checks to prevent malicious file uploads.

**Code Explanation**
- \`enctype="multipart/form-data"\` in the HTML form is essential for file uploads.
- \`$_FILES\` superglobal array holds information about the uploaded file (name, type, size,
temporary name, error code).
- \`move_uploaded_file()\` moves the uploaded file from its temporary location to your
specified destination. This is the only safe way to handle uploaded files.
- **Security**: The example includes basic checks for file type, size, and existence. In a realworld application, you would need more rigorous validation (e.g., checking MIME types,
scanning for malware, storing files outside the web root, renaming files to prevent
execution).`,


    "PHP Cookies and Sessions": `
### Example 1
## **PHP Cookies and Sessions**
Cookies and Sessions are mechanisms used to store data about a user across multiple requests. 
Cookies store data on the user's browser, while Sessions store data on the server.

### **Setting and Retrieving Cookies**
You set a cookie using the \`setcookie()\` function. To retrieve its value, you access the \`$_COOKIE\` superglobal array.

**Code Explanation**
- The \`setcookie()\` function takes the cookie name, value, expiration time, and path as arguments. The \`time() + 3600\` sets the expiration for one hour from the current time. 
- The \`$_COOKIE["user"]\` retrieves the value of the cookie named "user" that was previously set.

### Example 2
## **Session Management**
To use sessions, you must start the session with \`session_start()\` at the beginning of your script. Session data is stored in the \`$_SESSION\` superglobal array.

#### **Code Explanation**
\`session_start()\` initializes a new session or resumes an existing one. Variables stored in the \`$_SESSION\` superglobal will be available across different pages for the same user, 
as long as the session is active. \`session_unset()\` and \`session_destroy()\` are used to clear and terminate the session, respectively.

### Example 3 
## **Session Security**
Session hijacking and fixation are common attacks. To mitigate these risks, regenerate the session ID periodically and after a user logs in.

**Code Explanation**
- \`session_regenerate_id(true)\` creates a new unique session ID for the user and invalidates the old one, making it difficult for an attacker to hijack a session. 
- The \`true\` parameter ensures the old session file is deleted from the server.

### Example 4 
## **Cookie Security**
To make cookies more secure, use the \`HttpOnly\` and \`Secure\` flags.

**Code Explanation**
- The \`secure\` flag ensures that the cookie is only sent over HTTPS connections, protecting it from being intercepted. 
- The \`httponly\` flag prevents client-side scripts (like JavaScript) from accessing the cookie, which helps mitigate cross-site scripting (XSS) attacks.`,


    "PHP Error Handling": `
### Example 1 
## **PHP Error Handling**
Effective error handling is crucial for creating robust applications. PHP provides several ways to manage errors, from simple reporting to advanced exception handling.

### **Error Types**
PHP has different levels of errors, including:
- \`E_ERROR\`: Fatal runtime errors that halt script execution.
- \`E_WARNING\`: Non-fatal runtime errors; the script continues.
- \`E_NOTICE\`: Minor runtime errors; the script continues.
- \`E_PARSE\`: Compile-time parse errors, stopping the script.

### Example 2 
You can control which errors are displayed using the \`error_reporting()\` and \`display_errors\` functions.

**Code Explanation**
- \`error_reporting()\` is used to specify which types of errors should be reported. 
- \`ini_set('display_errors', 1)\` is a configuration setting that determines whether errors should be shown in the browser output.
- It is highly recommended to set \`display_errors\` to \`0\` in a live production environment to prevent sensitive information from being exposed to users.

### Example 3 
You can define a custom function to handle all PHP errors using \`set_error_handler()\`.

**Code Explanation**
The \`customErrorHandler\` function is called whenever a PHP error occurs. It receives the error number, string, file, and line number as arguments. 
This allows you to log errors, display a user-friendly message, or perform other actions instead of using PHP's default error behavior.

### Example 4 
Exceptions are a modern approach to handling errors. A \`try...catch\` block is used to catch and handle exceptions gracefully.

**Code Explanation**
The \`try\` block contains the code that might throw an exception. 
If an exception is thrown, the script execution is transferred to the \`catch\` block, where you can handle the error. 
The \`finally\` block is optional and executes regardless of whether an exception was caught.

### Example 5
You can log errors to a file instead of displaying them to the user. This is a crucial practice for debugging in a production environment.

**Code Explanation**
- \`ini_set('log_errors', 1)\` enables error logging, and \`ini_set('error_log', 'php-error.log')\` specifies the file where errors will be logged. 
- The \`error_log() \`function writes a custom message to this file.`,

    "PHP Database Connection": `
### Example 1 
## **PHP Database Connection**
Connecting to a database is a fundamental task for most web applications. PHP supports several ways to connect to MySQL, 
with \`PDO\` (PHP Data Objects) and \`MySQLi\` being the most common.

### **Connecting to MySQL**
PDO provides a flexible and secure way to connect to various database types, not just MySQL.

**Code Explanation**
- The \`PDO\` class is instantiated with a DSN (Data Source Name) string, username, and password. 
- The \`try...catch\` block handles any connection errors. 
- \`$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION)\` configures PDO to throw exceptions on errors, which allows for robust error handling. 
- The connection is closed by setting the variable to \`null\`.

### Example 2
## **Connection Parameters**
The connection parameters are:
- \`$servername\`: The hostname of the database server (e.g., localhost).
- \`$username\`: The username for the database.
- \`$password\`: The password for the database.
- \`$dbname\`: The name of the database you want to connect to.

### Example 3 
As shown in the connection example, using a \`try...catch\` block with PDO is the standard and recommended way to handle connection errors.

The \`PDOException\` is a specific class for PDO-related errors. By catching this exception, you can display a 
user-friendly error message or log the error without exposing sensitive database credentials.

### Example 4 
PHP doesn't have a native connection pooling feature like some other languages. However, you can achieve a similar effect using persistent connections

#### **Code Explanation**
The \`PDO::ATTR_PERSISTENT\` option creates a persistent connection that is reused by subsequent scripts in the same web server process. 
This can reduce the overhead of establishing new connections for every request, improving performance. However, it's important to be mindful of its side effects,
as the connection state might not be reset between requests.`,

    "MySQL Basics": `
### Example 1 
MySQL is a relational database management system (RDBMS) used to store, manage, and retrieve structured data. 
It organizes data into databases, and inside each database are tables that hold rows (records) and columns (fields)

- \`CREATE DATABASE\` → makes a new database container.
- \`SHOW DATABASES\` → lists all existing databases.
- \`USE\` → selects the active database so all queries run inside it.

### Example 2 
**Table Creation**:
- \`id\` → unique identifier, auto-increments automatically.
- \`name\` → string column (up to 100 chars).
- \`age\` → integer.
- \`email\` → varchar, optional (no NOT NULL).
- PRIMARY KEY → ensures \`id\` is unique.

### Example 3 
- Common data types in MySQL:
- Numeric → INT, BIGINT, DECIMAL, FLOAT
- String → CHAR(n), VARCHAR(n), TEXT
- Date/Time → DATE, DATETIME, TIMESTAMP
- Boolean → TINYINT(1) (0 = false, 1 = true)

### Example 4 
- A primary key uniquely identifies each record.
- \`AUTO_INCREMENT\` makes ID increase automatically when new data is inserted.

**Why This Matters:**
- Databases provide structured storage for application data
- Tables organize data into rows and columns
- Understanding SQL syntax is essential for database management

**Learning Outcome:** Understanding how to create databases and tables to store application data.`,

    "MySQL Tables and Data Types": `
### Example 1 
o create a table, you use the \`CREATE TABLE\` statement, specifying the table name and its columns. 
Each column has a name and a data type.

**Code Explanation**
- This code creates a table named \`users\`. It includes four columns: \`id\`, \`username\`, \`email\`, and \`created_at\`. 
- The \`id\` is an \`INT\` that's the primary key and auto-increments for unique identification. 
- The \`username\` and \`email\` are \`VARCHAR\` (variable-length string) with a specified maximum length, and 
both are \`NOT NULL\` and \`UNIQUE\`, ensuring they can't be empty and are distinct. 
- The \`created_at\` column is a \`TIMESTAMP\` that defaults to the current time when a new row is inserted.

### Example 2 
Data types define what kind of data can be stored in a column.

1. **Numeric Types**
- \`INT\` → whole numbers (-2B to 2B).
- \`BIGINT\` → larger whole numbers.
- \`DECIMAL(p,s)\` → exact decimal (e.g., DECIMAL(6,2) → 9999.99).
- \`FLOAT\` / \`DOUBLE\` → approximate decimal numbers.
2. **String Types**
- \`CHAR(n)\` → fixed-length string (good for things like country codes "USA").
- \`VARCHAR(n)\` → variable length string (most common for text).
- \`TEXT\` → large text data (articles, descriptions).
3. **Date/Time Types**
- \`DATE\` → stores date (YYYY-MM-DD).
- \`DATETIME\` → stores date + time.
- \`TIMESTAMP\` → stores date + time, auto-updated on changes.

### Example 3 
Constraints are rules that enforce data integrity. Common constraints are:
- \`PRIMARY KEY\`: Uniquely identifies each row in a table.
- \`FOREIGN KEY\`: Enforces a link between two tables.
- \`NOT NULL\`: Ensures a column can't have a \`NULL\` value.
- \`UNIQUE\`: Ensures all values in a column are different.
- \`DEFAULT\`: Sets a default value for a column.
- \`CHECK\`: Enforces a condition for all values in a column.

### Example 4 
Indexes are special lookup tables that the database search engine can use to speed up data retrieval. 
Think of an index like the index in the back of a book. It helps you find information quickly without 
reading every page. The \`PRIMARY KEY\` constraint automatically creates a clustered index.

### Example 5 
Tables often relate to each other. The three main types of relationships are:
- **One-to-One**: A single row in the first table is linked to a single row in the second table.
- **One-to-Many**: A single row in the first table is linked to multiple rows in the second table. This is the most common type.
- **Many-to-Many**: Multiple rows in the first table are linked to multiple rows in the second table. 
This requires a third junction table to manage the relationships.

**Explanation**
- \`departments\` → parent table.
- \`employees\` → child table.
- \`FOREIGN KEY\` (\`dept_id\`) ensures an employee must belong to an existing department.
`,

    "MySQL CRUD Operations": `
### Example 1 
CRUD stands for:
C → Create (INSERT)
R → Read (SELECT)
U → Update (UPDATE)
D → Delete (DELETE)
These four operations are the foundation of working with databases.

**Explanation**
- \`INSERT INTO table (columns) VALUES (...)\` specifies which values go into which columns.
- If a column has \`AUTO_INCREMENT\` or \`DEFAULT\`, you can omit it.
- Multiple rows can be added in a single query (better performance).

*NOTE*: If you try to insert a duplicate value in a \`UNIQUE\` column → MySQL will throw an error.

### Example 2 
The \`SELECT\` statement retrieves data from a table
- \`SELECT *\` → selects all columns.
- \`WHERE\` → filters records based on conditions.
- \`ORDER BY\` → sorts results ascending (ASC) or descending (DESC).
- \`LIMIT\` → restricts number of returned rows.
***Example query meaning**:
\`SELECT username, email FROM users WHERE age > 20 ORDER BY age DESC LIMIT 3;\`
- Fetch username + email of the top 3 oldest users over age 20.

### Example 3 
The \`UPDATE\` statement modifies existing data in a table.
- \`SET column\` = value updates column values.
- \`WHERE\` ensures you only update specific rows.
- Without \`WHERE\` → all rows will be updated (dangerous!).

### Example 4 
The DELETE statement removes rows from a table.
- \`DELETE FROM table WHERE condition;\` deletes specific rows.
Omitting \`WHERE\` → deletes everything in the table.
*Always double-check before running \`DELETE\` without a \`WHERE\` clause.*`,

    "MySQL Joins": `
### Example 1 
When working with multiple tables, JOINs allow you to combine data based on relationships between them.

**INNER JOIN**: Returns only rows where both tables have matching values.
- \`INNER JOIN\` matches users with orders where \`users.id = orders.user_id.\`
- Peter is excluded (he has no orders).
- Order with \`user_id = 4\` is excluded (no such user).

### Example 2
- Returns all rows from the left table (\`users\`) and matched rows from the right table (\`orders\`).
- If no match exists, \`NULL\` is returned.

**Explanation:**
- All users are included.
- Peter has no orders → \`product\` is \`NULL\`.
- Orders with user_id = 4 are ignored (no matching user)
 
### Example 3 
- Returns all rows from the right table (\`orders\`) and matched rows from the left table (\`users\`).
- If no match exists, \`NULL\` is returned.

**Explanation**
- All orders are included.
- The order with \`user_id = 4\` has no matching user → \`username\` is \`NULL\`.

### Example 4 
MySQL doesn’t support FULL JOIN directly, but you can simulate it with UNION of LEFT + RIGHT JOIN.

**Explanation:**
- Combines results of LEFT JOIN and RIGHT JOIN.
- Includes users without orders (Peter) and orders without users (Camera).
    
### Example 5 
A table joined with itself. Often used for hierarchical data (like employees and managers).

**Explanation**:
- The table \`employees\` is aliased as \`e\` (employee) and \`m\` (manager).
- Each employee’s \`managerId\` is matched against another employee’s \`id\`.
- Alice has no manager (\`NULL\`).`,

    "MySQL Indexes": `
### Example 1 
Indexes are special lookup tables that MySQL uses to speed up data retrieval. They work like an index in a book — instead 
of scanning every page, you jump directly to the right section.

**Index Types**
MySQL supports different index types:
- **PRIMARY KEY Index** → Uniquely identifies each row (only one per table).
- **UNIQUE Index** → Prevents duplicate values but allows \`NULL\`.
- **INDEX (Normal)** → Speeds up queries but allows duplicates.
- **FULLTEXT Index** → For searching text in \`CHAR\`, \`VARCHAR\`, \`TEXT\` columns.
- **SPATIAL Index** → For GIS (geographical) data types.

**Explanation**
- \`id\` is a PRIMARY KEY (unique, indexed automatically).
- \`email\` cannot have duplicates because of UNIQUE index.
- \`bio\` can be searched using FULLTEXT for fast text-based queries (like a search engine).

### Example 2 
Indexes can be created when a table is created or added to an existing table
**Explanation**:
- \`idx_username\` will make searches like \`WHERE username = 'John'\` much faster.
- \`idx_user_email\` optimizes queries that filter by both username and email.
   
### Example 3
Indexes improve read speed but come with trade-offs:
- **Good Use Case**: Queries with \`WHERE\`, \`JOIN\`, \`ORDER BY\`, or \`GROUP BY\`.
- **Bad Use Case**: Tables with heavy inserts/updates (indexes slow down writes).

- Without an index → MySQL scans all rows.
- With an index on \`username\` → MySQL jumps directly to the matching row.

**Index Limitations**:
- Too many indexes = slower inserts/updates.
- Indexes take up extra storage space.
- Indexes don’t work well on small tables (full table scan may be faster).
- FULLTEXT only works on CHAR, VARCHAR, TEXT (not BLOB)`,

    "MySQL Transactions": `
### Example 1 
Transactions allow grouping multiple SQL operations into a single unit of work.
They ensure data remains consistent even in case of errors.

**Transaction Basics**
A transaction is a sequence of SQL statements that execute together.
It either fully completes (COMMIT) or fully rolls back (ROLLBACK).

**Explanation:**
- User 1 sends $500 to User 2.
- Both statements are part of one transaction.
- If one fails, the whole transaction is rolled back.

**ACID Properties**
*Transactions follow ACID:*
- **Atomicity** → All or nothing (either full success or full rollback).
- **Consistency** → Data remains valid before and after transaction.
- **Isolation** → Multiple transactions don’t interfere with each other.
- **Durability** → Once committed, changes persist (even after crash).

### Example 2 
- START TRANSACTION: Begins a new transaction.
- COMMIT: Saves all changes made during the transaction.
- ROLLBACK: Undoes all changes made since the transaction started.
   
### Example 3
- Since the second update fails, MySQL rolls back the first one.
- Balance of User 1 remains unchanged (no money lost).

### Example 4 
MySQL supports different levels of isolation between transactions:
- READ UNCOMMITTED → Transactions can see uncommitted changes (dirty reads).
- READ COMMITTED → Transactions only see committed data.
- REPEATABLE READ (default in MySQL) → Ensures consistent reads within one transaction.
- SERIALIZABLE → Highest level; transactions run one after another (slow but safest).`,
    
"PHP and MySQL Integration": `
### Example 1 
MySQL is the most common database used with PHP. Integration allows PHP scripts to connect, execute queries, and handle results.

**Connecting PHP to MySQL**
PHP uses MySQLi or PDO to connect. PDO is more flexible, but let’s use MySQLi (procedural)above
- \`mysqli_connect()\` opens a connection.
- If credentials or DB name are wrong → \`mysqli_connect_error()\` will show error.

### Example 2 
- Queries (\`INSERT\`, \`UPDATE\`, \`DELETE\`, \`SELECT\`) can be executed with \`mysqli_query()\`.
- Always handle errors using \`mysqli_error()\`.

### Example 3 
- \`mysqli_num_rows()\` checks if rows exist.
- \`mysqli_fetch_assoc()\` fetches each row as an associative array.

### Example 4 
- \`?\` placeholders prevent SQL injection.
- \`bind_param("ss", ...)\` binds two strings (s, s).

### Example 5 
Always check for errors in your database operations.
`, 
    "PHP Prepared Statements": `
### Example 1 
## **PHP Prepared Statements**
Prepared statements are a fundamental feature for database interaction in PHP, offering a way to execute the same or similar SQL statements multiple times with high efficiency and security.

### **Benefits of Prepared Statements**
Prepared statements provide two main benefits:
- **Security**: They are the most effective way to prevent SQL injection attacks. By separating the SQL query from the user-provided data, 
they ensure that user input is never interpreted as part of the SQL command.
- **Performance**: The database parses and compiles the SQL statement once, even if it's executed multiple times with different data. 
This reduces overhead and speeds up the query execution, especially in loops or for repetitive tasks.

### Example 2
## **Creating Prepared Statements**
You create a prepared statement using a database connection object's \`prepare()\` method. The SQL query contains placeholders (typically ?) 
for values that will be provided later.

**Code Explanation**
- The \`prepare()\` method on the \`$pdo\` object returns a statement object (\`$stmt\`). 
- The question marks (\`?\`) in the SQL string are positional placeholders for the data that will be inserted.

### Example 3 
## **Binding Parameters**
You bind data to the placeholders using the \`bindValue()\` or \`bindParam()\` methods. 
This is the crucial step where you separate the SQL logic from the data.

#### **Code Explanation**
\`bindValue()\` takes three arguments: the parameter number (1-indexed), the value, and an optional data type constant (\`PDO::PARAM_STR\` for string, \`PDO::PARAM_INT\` for integer, etc.). 
This explicit type declaration adds an extra layer of security.

### Example 4 
After binding the parameters, you execute the statement using the \`execute()\` method.

**Code Explanation**
The \`execute()\` method sends the prepared statement and the bound data to the database server.

### **Security Considerations**
The primary security benefit of prepared statements is preventing SQL injection. By using them, you never have to worry about sanitizing 
or escaping user input manually for database queries, as the database engine handles the separation of logic and data for you.`,

    "PHP Database Security": `
### Example 1 
Database security involves a set of practices to protect your database from unauthorized access, modification, and destruction.

### **SQL injection prevention**
SQL injection is an attack where an attacker inserts malicious SQL code into input fields to manipulate or gain unauthorized access to a database. 
Prepared statements are the single best defense against this.

**Code Explanation**
- In the "BAD" example, if an attacker enters \`1 OR 1=1\` for the \`id\`, the query becomes \`SELECT * FROM products WHERE id = 1 OR 1=1\`, which bypasses the intended filter. 
- The "GOOD" example uses a placeholder, so \`1 OR 1=1\` is treated as a simple string value, not part of the SQL command.

### Example 2
Input validation ensures that user-provided data is in the expected format before it is processed. This is a crucial security layer, 
but it should not replace prepared statements for database queries.

**Code Explanation**
- The \`filter_var()\` function with \`FILTER_VALIDATE_EMAIL\` checks if the email string is in a valid format. 
- This prevents malformed data from reaching your application logic.

### Example 3
You should always escape output before displaying it to the browser to prevent Cross-Site Scripting (XSS) attacks.

**Code Example**
- \`htmlspecialchars()\` converts special characters like \`<\`,\`>\`, and " into their HTML entities (\`&lt;\`, \`&gt;\`, \`&quot;\`). 
- This prevents the browser from interpreting the user input as executable code.

### **Secure Connections**
Always use a secure connection like SSL/TLS (HTTPS) to encrypt data transmitted between your PHP application and the database server. 
This prevents attackers from snooping on sensitive data like credentials.`,
    

     "PHP Authentication": `
### Example 1 
**Authentication** is the process of verifying a user's identity, typically through a username and password.

### **User Authentication**
A basic authentication process involves comparing the user-provided password with a stored, hashed password.

**Code Explanation**
- The \`password_verify()\` function safely compares the user's input password with the 
hashed password stored in the database.

### Example 2
Never store plain-text passwords in your database. Instead, use a strong, 
one-way hashing algorithm like \`Bcrypt\` or \`Argon2\` to hash passwords.

**Code Explanation**
- \`password_hash()\` is the recommended function for hashing passwords in PHP. 
- \`PASSWORD_DEFAULT\` ensures that PHP will use the strongest hashing algorithm available.

### Example 3 
Once a user is authenticated, a session is used to maintain their logged-in state across multiple page requests.

**Code Explanation**
- The \`$_SESSION\` superglobal array stores user-specific data on the server, which is tied to a unique 
session ID stored in a cookie on the user's browser.

### Example 4 
The "remember me" feature keeps a user logged in for an extended period using a 
persistent cookie and a secure token system.

**Code Explanation**
A secure "remember me" system should use a randomly generated token that is hashed before being stored in the database. 
The plain token is sent to the user's browser as a secure, HTTP-only cookie.

### **Security Considerations**
- **HTTPS**: Always use HTTPS to prevent credentials and session cookies from being intercepted.
- **Rate Limiting**: Implement rate limiting on login attempts to prevent brute-force attacks.
- **Session ID Regeneration**: Regenerate the session ID after a user logs in to prevent session fixation.`,

   "PHP Authorization": `
Authorization is the process of determining what an authenticated user is allowed to do.

### **Role-Based Access Control (RBAC)**
RBAC is a common authorization model where permissions are grouped into roles, and users are assigned to those roles.

**Code Explanation**
The code checks the user's role from the session and then grants or denies access to certain parts of 
the application based on predefined rules.

### **Permission Management**
This involves defining specific actions (\`read_post\`, \`edit_post\`, \`delete_post\`) and assigning them to roles.

### Example 2 
ACLs define specific permissions for each user or group on a per-resource basis. This is a more fine-grained approach than RBAC.

**Code Explanation**
- The \`acl\` array maps roles to an array of permissions. 
- The \`hasPermission()\` function checks if the given role has the requested permission. 
- This is a simple implementation of an ACL.

### **Security Best Practices**
- **Principle of Least Privilege**: A user should only have the minimum permissions necessary to perform their task.
- **Deny by Default**: Assume a user has no access unless explicitly granted.
- **Check on Every Request**: Authorization checks must be performed on every request to a protected resource.

#### **Implementation**
Authorization logic should be implemented in a centralized location, such as a controller or a dedicated service 
class, to ensure consistency and avoid scattered checks throughout the application.







`,
    "PHP Password Hashing": `
### Example 1
\`password_hash()\` creates a secure hash using the default algorithm (currently bcrypt). \`password_verify()\` checks if the provided password matches the stored hash without revealing the original password.

### Example 2
Custom options allow you to control the hashing process. The cost parameter controls computational complexity, while salt adds randomness to prevent rainbow table attacks.

### Example 3
Password verification in login systems compares user input with stored hashes. The hash is retrieved from the database and compared securely without storing plain text passwords.

### Example 4
Password strength validation ensures users create secure passwords. This function checks for minimum length, uppercase, lowercase, and numeric characters to enforce password policies.

### Example 5
Secure password reset generates cryptographically secure tokens with expiration times. The token is hashed before storage to prevent database exposure even if the database is compromised.

### Example 6
Argon2ID is a modern password hashing algorithm that's resistant to GPU and ASIC attacks. It provides better security than bcrypt for new applications.

### Example 7
\`password_needs_rehash()\` checks if a password hash needs updating due to algorithm changes or cost increases. This ensures passwords remain secure as security standards evolve.

### Example 8
Manual salt generation with SHA256 provides an alternative to PHP's built-in functions. The salt must be cryptographically random and unique for each password.

### Example 9
Password policy enforcement ensures consistent security standards across applications. This class-based approach allows for flexible configuration and centralized validation logic.`,

    "PHP File Upload": `
### Example 1
Basic file upload checks for upload errors and moves the file to the uploads directory. The error check ensures the file was uploaded successfully before processing.

### Example 2
Secure file upload validates file types using allowed extensions. It generates unique filenames with timestamps to prevent overwrites and conflicts between uploaded files.

### Example 3
File size validation prevents users from uploading files that are too large. This protects server storage and bandwidth while maintaining reasonable file size limits.

### Example 4
Multiple file upload handles arrays of files in a single request. The foreach loop processes each file individually, applying the same validation rules to each upload.

### Example 5
MIME type validation uses the fileinfo extension to check actual file content rather than relying on file extensions. This provides more reliable file type detection.

### Example 6
Object-oriented file upload encapsulates upload logic in a reusable class. This approach provides better code organization and makes upload functionality easier to test and maintain.

### Example 7
Database integration stores file metadata for tracking and management. This allows applications to maintain file inventories, track usage, and implement file management features.

### Example 8
Progress tracking provides user feedback during long uploads. Session-based progress tracking enables real-time updates on upload status for better user experience.

### Example 9
Security scanning adds an extra layer of protection by checking file content for suspicious patterns. This helps prevent malicious file uploads that could compromise server security.`,

    "PHP Image Processing": `
### Example 1
Basic image filter application demonstrates how to load an image, apply a grayscale filter, and save the modified image. This is a fundamental operation for image manipulation.

### Example 2
Image resizing scales an image to new dimensions while maintaining aspect ratio or specifying exact width and height. This is crucial for generating thumbnails or optimizing images for web display.

### Example 3
Image watermarking adds a transparent overlay to an image, typically for copyright protection or branding. This function demonstrates how to blend a watermark image onto a base image.

### Example 4
Image cropping extracts a specific rectangular region from an image. This is useful for focusing on a particular part of an image or fitting it into predefined layouts.

### Example 5
Image format conversion allows changing an image from one format (e.g., JPEG) to another (e.g., PNG, GIF, WebP). This is important for compatibility and optimization.

### Example 6
Image rotation changes the orientation of an image by a specified angle. This is useful for correcting image orientation or creating visual effects.

### Example 7
Image thumbnail generation creates smaller versions of images, often used in galleries or listings. This process involves resizing and can include cropping to fit specific dimensions.

### Example 8
Image validation and processing combines checks for file type, size, and integrity before performing any manipulation. This ensures only valid and safe images are processed.

### Example 9
Advanced image effects apply multiple filters and drawing operations to an image. This example shows how to adjust contrast, brightness, blur, and add a border for enhanced visual appeal.`,

    "PHP Email Handling": `
### Example 1
Basic email sending uses PHP's built-in \`mail()\` function. This is suitable for simple emails but lacks advanced features like SMTP authentication or attachments.

### Example 2
HTML email with headers allows sending rich-text emails. Setting \`Content-type:text/html\` in headers ensures the email client renders the HTML content correctly.

### Example 3
Email with attachments requires constructing a multipart/mixed MIME message. This involves encoding the attachment in base64 and adding appropriate headers for file type and disposition.

### Example 4
Email validation checks both the format of the email address using \`filter_var()\` and the existence of the domain's MX records using \`checkdnsrr()\`. This provides a more robust validation.

### Example 5
Bulk email sending iterates through a list of recipients. Adding a \`sleep()\` delay between emails helps prevent overwhelming the mail server and reduces the chance of being flagged as spam.

### Example 6
An email template system separates email content from logic. This class-based approach allows for dynamic content insertion and reusable email layouts.

### Example 7
An email queue system stores emails in a database and sends them asynchronously. This improves application responsiveness and provides retry mechanisms for failed deliveries.

### Example 8
SMTP email configuration uses a library like PHPMailer for reliable email delivery through an external SMTP server. This is preferred for production environments over the native \`mail()\` function.

### Example 9
Email analytics tracking embeds a tracking pixel in HTML emails to monitor opens. This allows marketers to gather data on email engagement and campaign effectiveness.`,

    "PHP Date and Time": `
### Example 1
Basic date and time functions demonstrate how to get the current date and time using \`date()\` and \`DateTime\` objects. \`DateTime\` objects offer more powerful and object-oriented date manipulation.

### Example 2
Date formatting and manipulation shows how to display dates in various formats and modify them (e.g., adding a week, setting a specific time). The \`modify()\` method is versatile for relative changes.

### Example 3
Time zone handling is crucial for applications serving users in different geographical locations. \`DateTimeZone\` objects allow you to specify and convert between time zones, ensuring accurate time representation.

### Example 4
Date calculations and comparisons use \`diff()\` to find the difference between two dates and \`modify()\` for relative date changes. This is essential for features like age calculation or countdowns.

### Example 5
Timestamp conversion demonstrates how to convert between Unix timestamps and \`DateTime\` objects. Timestamps are useful for storing dates in databases and performing quick comparisons.

### Example 6
Date validation and parsing ensures that user-provided date strings are valid and can be converted into \`DateTime\` objects. \`DateTime::createFromFormat()\` is robust for specific formats.

### Example 7
Working with intervals and periods allows iterating over a range of dates with a specified interval. \`DatePeriod\` is useful for generating monthly reports or recurring events.

### Example 8
Business days calculation determines the number of weekdays within a given date range. This is often required in business logic for scheduling or deadline calculations.

### Example 9
Date localization and internationalization adapts date and time display to different cultural conventions. \`setlocale()\` and libraries like Carbon (if installed) provide advanced localization features.`,

    "PHP Regular Expressions": `
### Example 1
Basic email validation uses a regular expression to check if a string conforms to a standard email format. \`preg_match()\` returns true if a match is found.

### Example 2
String pattern matching and replacement demonstrates \`preg_match_all()\` to find all occurrences of a pattern and \`preg_replace()\` to substitute matched patterns with new content.

### Example 3
Phone number validation uses multiple regular expressions to accommodate various international and local phone number formats. This ensures flexibility while maintaining data integrity.

### Example 4
URL parsing and validation extracts components of a URL (protocol, domain, port, path) using capturing groups in a regular expression. This is useful for analyzing or rewriting URLs.

### Example 5
Password strength validation employs multiple regular expressions to check for different criteria like minimum length, presence of uppercase, lowercase, numbers, and special characters.

### Example 6
HTML tag extraction and cleaning uses regular expressions to find all HTML tags or strip them from a string. \`strip_tags()\` is a simpler alternative for basic cleaning.

### Example 7
Data extraction from text uses various regular expressions to pull out specific types of information like email addresses, URLs, phone numbers, and hashtags from a larger text block.

### Example 8
Advanced pattern matching with groups allows extracting specific parts of a matched string into an associative array. This is powerful for parsing structured log entries or complex data.

### Example 9
Regular expression optimization and performance involves caching compiled patterns to avoid recompilation overhead. This can improve performance in applications that frequently use the same regex patterns.`,

    "PHP JSON Handling": `
### Example 1
Basic JSON encoding and decoding converts PHP arrays/objects to JSON strings and vice-versa. \`json_encode()\` and \`json_decode()\` are fundamental for working with JSON data.

### Example 2
JSON with options and error handling demonstrates how to pretty-print JSON for readability and handle potential encoding/decoding errors using \`json_last_error()\` and \`json_last_error_msg()\`.

### Example 3
JSON validation and sanitization ensures that incoming JSON data is well-formed and safe to process. \`htmlspecialchars()\` is used to prevent XSS attacks when displaying JSON data.

### Example 4
JSON API response handling sets appropriate HTTP headers and status codes for API responses. This function standardizes JSON output for consistent API communication.

### Example 5
JSON file operations encapsulate reading from and writing to JSON files. This class provides methods for managing JSON data persistence on the file system.

### Example 6
JSON Web Token (JWT) handling demonstrates how to create and validate JWTs for secure authentication and authorization. JWTs are commonly used in stateless APIs.

### Example 7
JSON schema validation checks if a JSON data structure conforms to a predefined schema. This ensures data consistency and helps prevent invalid data from being processed.

### Example 8
JSON streaming for large datasets uses PHP generators to process and output JSON data in chunks, preventing memory exhaustion when dealing with very large data structures.

### Example 9
JSON transformation and mapping allows restructuring JSON data based on a defined mapping. This is useful for adapting data from one format to another.`,

    "PHP XML Processing": `
### Example 1
Basic XML parsing with SimpleXML provides an easy way to read and navigate XML documents. \`simplexml_load_string()\` converts an XML string into an object, allowing property-based access.

### Example 2
XML file parsing and manipulation demonstrates how to load XML from a file, iterate through elements, and modify the XML structure. \`asXML()\` saves changes back to a file.

### Example 3
XML generation with DOMDocument offers a more robust and programmatic way to create XML documents. It allows precise control over element and attribute creation, and \`formatOutput\` ensures readability.

### Example 4
XML validation with XSD schema ensures that an XML document conforms to a predefined structure and data types. \`schemaValidate()\` checks against an XSD file for structural correctness.

### Example 5
XML parsing with XPath allows for powerful querying of XML documents to find specific elements or attributes based on complex criteria. This is highly efficient for extracting targeted data.

### Example 6
XML to array conversion and vice-versa facilitates interoperability between XML and PHP's native array structures. This is useful when processing XML data in array-based logic.

### Example 7
XML RSS feed processing demonstrates how to parse existing RSS feeds and generate new ones. This is essential for news aggregators, blogs, and content syndication.

### Example 8
XML transformation with XSLT applies an XSLT stylesheet to an XML document to transform it into another format (e.g., HTML). This is powerful for separating content from presentation.

### Example 9
XML security and sanitization protects against XML-related vulnerabilities like XXE (XML External Entity) attacks and XSS (Cross-Site Scripting) by removing dangerous elements and validating structure.`,

    "PHP RESTful APIs": `
### Example 1
Basic RESTful API endpoint sets appropriate headers and returns JSON responses. This is the foundation for building APIs that can communicate with web and mobile applications.

### Example 2
Complete RESTful API with CRUD operations implements all HTTP methods (GET, POST, PUT, DELETE) following REST principles. This provides a full-featured API for managing resources like users, products, or any data entity.

### Example 3
API authentication and authorization uses JWT tokens to secure API endpoints. This ensures that only authenticated users can access protected resources and perform authorized actions.

### Example 4
API rate limiting prevents abuse by limiting the number of requests per client within a time window. This protects server resources and ensures fair usage among API consumers.

### Example 5
API input validation and sanitization ensures that incoming data meets expected criteria and is safe to process. This prevents security vulnerabilities and maintains data integrity.

### Example 6
API versioning allows maintaining multiple versions of an API simultaneously. This enables backward compatibility while introducing new features and improvements.

### Example 7
API error handling and logging provides consistent error responses and comprehensive logging for debugging and monitoring. This improves API reliability and maintainability.

### Example 8
API documentation generation creates interactive documentation that helps developers understand and use the API effectively. This is essential for API adoption and developer experience.

### Example 9
API testing and mocking enables automated testing of API endpoints and creation of mock services for development and testing environments. This ensures API reliability and facilitates development workflows.`,

    "PHP Project Structure": `
### Example 1
Basic MVC project structure demonstrates the fundamental separation of concerns with Models, Views, and Controllers. This organization makes code more maintainable and follows established design patterns.

### Example 2
Modern PHP project with Composer autoloading uses PSR-4 autoloading standards for automatic class loading. This eliminates manual file includes and provides a clean, modern development experience.

### Example 3
Environment-based configuration separates configuration from code using environment variables. This allows different settings for development, staging, and production environments without code changes.

### Example 4
Service container and dependency injection manages object creation and dependencies automatically. This promotes loose coupling, testability, and follows the inversion of control principle.

### Example 5
Middleware system for request handling allows processing requests through a chain of middleware components. This enables cross-cutting concerns like authentication, logging, and validation to be handled consistently.

### Example 6
Repository pattern for data access abstracts database operations behind interfaces. This separates data access logic from business logic and makes the code more testable and maintainable.

### Example 7
Event system for loose coupling allows components to communicate without direct dependencies. This promotes modularity and makes the system more flexible and extensible.

### Example 8
API routing system provides clean URL patterns and HTTP method handling. This creates RESTful endpoints that are intuitive and follow web standards.

### Example 9
Caching system integration improves performance by storing frequently accessed data in memory or external cache stores. This reduces database load and improves response times for better user experience.`,

    "PHP Best Practices": `
### Example 1
Clean code principles emphasize readability, simplicity, and maintainability. This example shows how to write functions that are easy to understand and modify, following the single responsibility principle.

### Example 2
Type declarations and return types provide better code documentation and catch errors at development time. PHP's type system helps prevent runtime errors and makes code more predictable and maintainable.

### Example 3
Error handling and logging ensures applications gracefully handle unexpected situations. Proper error handling with logging provides visibility into issues and helps maintain application reliability and performance.

### Example 4
Database best practices with prepared statements prevent SQL injection attacks and improve performance. Using prepared statements is essential for secure database interactions and follows security best practices.

### Example 5
Security best practices protect applications from common vulnerabilities. This includes input sanitization, CSRF protection, secure password hashing, and secure file handling to prevent security breaches.

### Example 6
Performance optimization techniques improve application speed and resource usage. Caching, lazy loading, and memory management help applications scale and provide better user experiences.

### Example 7
Testing best practices ensure code quality and prevent regressions. Unit testing with proper mocking and test coverage helps maintain reliable applications and enables confident refactoring.

### Example 8
Code documentation and standards make code maintainable and help team collaboration. Clear documentation, coding standards, and examples help developers understand and work with the codebase effectively.

### Example 9
Configuration and environment management separates configuration from code and handles different deployment environments. This approach makes applications more flexible and easier to deploy across different environments.`
  };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};

const getPHPExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to PHP": `
- Write a PHP script that prints \"Hello, PHP!\"
- Create a script that outputs your name and age.`,

    "PHP Syntax and Variables": `
- Declare variables for your name, age, and country.
- Print a sentence using all three variables.`,

    "PHP Data Types": `
- Create variables of each PHP data type.
- Write a function that checks the type of a variable.`,

    "PHP Operators": ` 
- Perform arithmetic operations on two variables.
- Use comparison operators to compare two values.`,

    "PHP Control Structures": `
- Write a script that checks if a number is even or odd.
- Use a loop to print numbers from 1 to 10.`,

    "PHP Functions": `
- Create a function that calculates the factorial of a number.
- Write a function that checks if a string is a palindrome.`,

    "PHP Arrays": `
- Create an array of fruits and print each fruit.
- Use array functions to sort and filter an array.`,

    "PHP Strings": `
- Concatenate two strings and print the result.
- Use string functions to convert a string to uppercase and lowercase.`,

    "PHP Forms and User Input": `
- Create a form that collects user name and email.
- Handle form submission and display the input.`,

    "PHP Form Validation": `
- Validate a form input for required fields.
- Implement custom validation rules for an email field.`,

    "PHP File Handling": `
- Read data from a file and display it.
- Write data to a file and verify the content.`,

    "PHP Cookies and Sessions": `
- Set a cookie with user information.
- Create a session and store user data.`,

    "PHP Error Handling": `
- Implement custom error handling for a script.
- Use try-catch blocks to handle exceptions.`,

    "PHP Database Connection": `
- Connect to a MySQL database and execute a query.
- Handle connection errors gracefully.`,

    "MySQL Basics": `
- Create a database and a table.
- Insert data into the table and retrieve it.`,

    "MySQL Tables and Data Types": `
- Create a table with various data types.
- Add constraints and indexes to the table.`,

    "MySQL CRUD Operations": `
- Perform CRUD operations on a table.
- Use transactions to ensure data integrity.`,

    "MySQL Joins": `
- Create two tables and perform a join operation.
- Use different types of joins to retrieve data.`,

    "MySQL Indexes": `
- Create indexes on a table and measure performance.
- Optimize queries using indexes.`,

    "MySQL Transactions": `
- Implement a transaction to insert data into multiple tables.
- Rollback a transaction if an error occurs.`,

    "PHP and MySQL Integration": `
- Connect PHP to MySQL and execute a query.
- Display the results in a formatted table.`,

    "PHP Prepared Statements": `
- Use prepared statements to insert data into a table.
- Retrieve data using prepared statements.`,

    "PHP Database Security": ` 
- Implement measures to prevent SQL injection.
-  Secure database connections and queries.`,

    "PHP Authentication": `
- Create a login system using PHP.
- Implement password hashing and verification.`,

    "PHP Authorization": `
- Implement role-based access control.
- Restrict access to certain pages based on user roles.`,

    "PHP Password Hashing": `
- Hash a password and store it in a database.
- Verify a password against a hashed value.`,

    "PHP File Upload": `
- Create a form to upload a file.
- Validate and process the uploaded file.`,

    "PHP Image Processing": `
- Upload an image and apply a filter.
- Resize an image and save it.`,

    "PHP Email Handling": `
- Send an email using PHP.
- Create an email template and send it to multiple recipients.`,

    "PHP Date and Time": `
- Display the current date and time.
- Calculate the difference between two dates.`,

    "PHP Regular Expressions": `
- Validate an email address using regular expressions.
- Extract data from a string using regex.`,

    "PHP JSON Handling": `
- Convert an array to JSON and back.
- Parse a JSON string and display the data.`,

    "PHP XML Processing": `
- Create an XML document and parse it.
- Extract data from an XML file.`,

    "PHP RESTful APIs": `
- Create a simple RESTful API.
- Handle GET and POST requests.`,

    "PHP Project Structure": `
- Organize a PHP project with proper file structure.
- Implement MVC architecture in the project.`,

    "PHP Best Practices": `
- Follow coding standards and best practices.
- Optimize a PHP script for performance.`
  };
  return exercises[lessonTitle] || "1. Basic exercise\n2. Advanced exercise\n3. Project work";
};

const getPHPQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to PHP": [
      {
        question: "What does PHP stand for?",
        options: [
          "PHP: Hypertext Preprocessor",
          "Personal Home Page",
          "Private Home Page",
          "Preprocessor Home Page"
        ],
        correctAnswer: 0
      },
      {
        question: "Which tag is used to start PHP code?",
        options: [
          "<?php>",
          "<php>",
          "<?>",
          "<script>"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Syntax and Variables": [
      {
        question: "How do you declare a variable in PHP?",
        options: [
          "$var = 5;",
          "var $var = 5;",
          "int var = 5;",
          "let var = 5;"
        ],
        correctAnswer: 0
      },
      {
        question: "Which of the following is a constant in PHP?",
        options: [
          "const PI = 3.14;",
          "$PI = 3.14;",
          "define('PI', 3.14);",
          "PI := 3.14;"
        ],
        correctAnswer: 2
      }
    ],
    "PHP Data Types": [
      {
        question: "Which is NOT a scalar data type in PHP?",
        options: [
          "string",
          "array",
          "integer",
          "boolean"
        ],
        correctAnswer: 1
      },
      {
        question: "How do you check if a variable is an array?",
        options: [
          "is_array($var)",
          "array($var)",
          "check_array($var)",
          "typeof($var) == 'array'"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Operators": [
      {
        question: "Which operator is used for concatenation in PHP?",
        options: [
          "+",
          ".",
          "&",
          "|"
        ],
        correctAnswer: 1
      },
      {
        question: "What is the result of 5 % 2?",
        options: [
          "2.5",
          "2",
          "1",
          "0"
        ],
        correctAnswer: 2
      }
    ],
    "PHP Control Structures": [
      {
        question: "Which statement is used to exit a loop?",
        options: [
          "exit",
          "break",
          "continue",
          "return"
        ],
        correctAnswer: 1
      },
      {
        question: "How do you start a foreach loop in PHP?",
        options: [
          "foreach ($array as $value)",
          "for ($i = 0; $i < count($array); $i++)",
          "while ($array)",
          "do { } while ($array)"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Functions": [
      {
        question: "How do you define a function in PHP?",
        options: [
          "function myFunction()",
          "def myFunction()",
          "void myFunction()",
          "public myFunction()"
        ],
        correctAnswer: 0
      },
      {
        question: "Which keyword is used to return a value from a function?",
        options: [
          "return",
          "echo",
          "print",
          "output"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Arrays": [
      {
        question: "How do you create an array in PHP?",
        options: [
          "$array = [];",
          "$array = array();",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      },
      {
        question: "Which function is used to count the number of elements in an array?",
        options: [
          "count()",
          "length()",
          "size()",
          "elements()"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Strings": [
      {
        question: "Which function is used to find the length of a string?",
        options: [
          "strlen()",
          "length()",
          "count()",
          "size()"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you concatenate two strings in PHP?",
        options: [
          "$str1 + $str2",
          "$str1 . $str2",
          "$str1 & $str2",
          "$str1 | $str2"
        ],
        correctAnswer: 1
      }
    ],
    "PHP Forms and User Input": [
      {
        question: "Which superglobal variable is used to collect form data?",
        options: [
          "$_GET",
          "$_POST",
          "$_REQUEST",
          "$_FORM"
        ],
        correctAnswer: 1
      },
      {
        question: "How do you access a form field named 'username'?",
        options: [
          "$_POST['username']",
          "$_GET['username']",
          "$_REQUEST['username']",
          "All of the above"
        ],
        correctAnswer: 3
      }
    ],
    "PHP Form Validation": [
      {
        question: "Which function is used to sanitize user input?",
        options: [
          "sanitize()",
          "clean()",
          "filter_var()",
          "validate()"
        ],
        correctAnswer: 2
      },
      {
        question: "How do you check if a form field is empty?",
        options: [
          "empty($_POST['field'])",
          "isset($_POST['field'])",
          "is_null($_POST['field'])",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP File Handling": [
      {
        question: "Which function is used to open a file in PHP?",
        options: [
          "open()",
          "fopen()",
          "file()",
          "readfile()"
        ],
        correctAnswer: 1
      },
      {
        question: "How do you read a file line by line?",
        options: [
          "fgets()",
          "readline()",
          "getline()",
          "read()"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Cookies and Sessions": [
      {
        question: "Which function is used to set a cookie in PHP?",
        options: [
          "setcookie()",
          "cookie()",
          "createCookie()",
          "set()"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you start a session in PHP?",
        options: [
          "start_session()",
          "session_start()",
          "begin_session()",
          "init_session()"
        ],
        correctAnswer: 1
      }
    ],
    "PHP Error Handling": [
      {
        question: "Which function is used to set a custom error handler?",
        options: [
          "set_error_handler()",
          "error_handler()",
          "custom_error()",
          "handle_error()"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you catch an exception in PHP?",
        options: [
          "try { } catch (Exception $e) { }",
          "catch (Exception $e) { }",
          "handle (Exception $e) { }",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Database Connection": [
      {
        question: "Which class is used to connect to a MySQL database in PHP?",
        options: [
          "PDO",
          "mysqli",
          "mysql",
          "sql"
        ],
        correctAnswer: 1
      },
      {
        question: "How do you check if a database connection is successful?",
        options: [
          "if ($conn->connect_error)",
          "if ($conn->connect())",
          "if ($conn->isConnected())",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "MySQL Basics": [
      {
        question: "Which command is used to create a database in MySQL?",
        options: [
          "CREATE DATABASE",
          "NEW DATABASE",
          "MAKE DATABASE",
          "BUILD DATABASE"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you select a database in MySQL?",
        options: [
          "USE database_name;",
          "SELECT database_name;",
          "CHOOSE database_name;",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "MySQL Tables and Data Types": [
      {
        question: "Which command is used to create a table in MySQL?",
        options: [
          "CREATE TABLE",
          "NEW TABLE",
          "MAKE TABLE",
          "BUILD TABLE"
        ],
        correctAnswer: 0
      },
      {
        question: "Which data type is used for storing text in MySQL?",
        options: [
          "TEXT",
          "STRING",
          "CHAR",
          "VARCHAR"
        ],
        correctAnswer: 3
      }
    ],
    "MySQL CRUD Operations": [
      {
        question: "Which command is used to insert data into a table?",
        options: [
          "INSERT INTO",
          "ADD TO",
          "PUT INTO",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you update data in a table?",
        options: [
          "UPDATE table SET column = value",
          "MODIFY table SET column = value",
          "CHANGE table SET column = value",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "MySQL Joins": [
      {
        question: "Which join returns all records from the left table and matching records from the right table?",
        options: [
          "INNER JOIN",
          "LEFT JOIN",
          "RIGHT JOIN",
          "FULL JOIN"
        ],
        correctAnswer: 1
      },
      {
        question: "How do you perform a join in MySQL?",
        options: [
          "SELECT * FROM table1 JOIN table2 ON table1.id = table2.id",
          "SELECT * FROM table1, table2 WHERE table1.id = table2.id",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      }
    ],
    "MySQL Indexes": [
      {
        question: "Which command is used to create an index in MySQL?",
        options: [
          "CREATE INDEX",
          "NEW INDEX",
          "MAKE INDEX",
          "BUILD INDEX"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of an index in MySQL?",
        options: [
          "To speed up data retrieval",
          "To store data",
          "To delete data",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "MySQL Transactions": [
      {
        question: "Which command is used to start a transaction in MySQL?",
        options: [
          "START TRANSACTION",
          "BEGIN TRANSACTION",
          "BEGIN",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "How do you commit a transaction in MySQL?",
        options: [
          "COMMIT",
          "END TRANSACTION",
          "FINISH",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP and MySQL Integration": [
      {
        question: "Which function is used to execute a query in PHP?",
        options: [
          "query()",
          "execute()",
          "run()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you fetch a row from a result set in PHP?",
        options: [
          "fetch_assoc()",
          "get_row()",
          "row()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Prepared Statements": [
      {
        question: "Which method is used to prepare a statement in PHP?",
        options: [
          "prepare()",
          "ready()",
          "set()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you bind a parameter to a prepared statement?",
        options: [
          "bind_param()",
          "param()",
          "set_param()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Database Security": [
      {
        question: "Which method is used to prevent SQL injection in PHP?",
        options: [
          "Prepared statements",
          "Input validation",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      },
      {
        question: "How do you escape output in PHP?",
        options: [
          "htmlspecialchars()",
          "escape()",
          "clean()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Authentication": [
      {
        question: "Which function is used to hash a password in PHP?",
        options: [
          "password_hash()",
          "hash()",
          "encrypt()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you verify a password in PHP?",
        options: [
          "password_verify()",
          "verify()",
          "check()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Authorization": [
      {
        question: "Which method is used to implement role-based access control?",
        options: [
          "Session variables",
          "Cookies",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      },
      {
        question: "How do you check if a user is logged in?",
        options: [
          "if (isset($_SESSION['user']))",
          "if ($_COOKIE['user'])",
          "if ($_REQUEST['user'])",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Password Hashing": [
      {
        question: "Which algorithm is recommended for password hashing in PHP?",
        options: [
          "MD5",
          "SHA1",
          "bcrypt",
          "None of the above"
        ],
        correctAnswer: 2
      },
      {
        question: "How do you hash a password in PHP?",
        options: [
          "password_hash($password, PASSWORD_DEFAULT)",
          "hash($password)",
          "encrypt($password)",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP File Upload": [
      {
        question: "Which superglobal variable is used to handle file uploads?",
        options: [
          "$_FILES",
          "$_POST",
          "$_GET",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you move an uploaded file in PHP?",
        options: [
          "move_uploaded_file()",
          "upload()",
          "move()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Image Processing": [
      {
        question: "Which library is used for image processing in PHP?",
        options: [
          "GD",
          "ImageMagick",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      },
      {
        question: "How do you create an image in PHP?",
        options: [
          "imagecreate()",
          "create_image()",
          "new_image()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Email Handling": [
      {
        question: "Which function is used to send an email in PHP?",
        options: [
          "mail()",
          "send()",
          "email()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you set the subject of an email in PHP?",
        options: [
          "$subject = \"Subject\";",
          "subject(\"Subject\");",
          "set_subject(\"Subject\");",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Date and Time": [
      {
        question: "Which function is used to get the ent date and time in PHP?",
        options: [
          "date()",
          "time()",
          "now()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you format a date in PHP?",
        options: [
          "date(\"Y-m-d\")",
          "format_date(\"Y-m-d\")",
          "get_date(\"Y-m-d\")",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Regular Expressions": [
      {
        question: "Which function is used to perform a regular expression match in PHP?",
        options: [
          "preg_match()",
          "match()",
          "regex()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you replace a pattern in a string using regex?",
        options: [
          "preg_replace()",
          "replace()",
          "substitute()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP JSON Handling": [
      {
        question: "Which function is used to encode an array to JSON in PHP?",
        options: [
          "json_encode()",
          "encode()",
          "to_json()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you decode a JSON string in PHP?",
        options: [
          "json_decode()",
          "decode()",
          "from_json()",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP XML Processing": [
      {
        question: "Which function is used to load an XML file in PHP?",
        options: [
          "simplexml_load_file()",
          "load_xml()",
          "xml_load()",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you access an XML element in PHP?",
        options: [
          "$xml->element",
          "$xml['element']",
          "$xml.get('element')",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP RESTful APIs": [
      {
        question: "Which HTTP method is used to retrieve data in a RESTful API?",
        options: [
          "GET",
          "POST",
          "PUT",
          "DELETE"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you set the content type to JSON in PHP?",
        options: [
          "header(\"Content-Type: application/json\");",
          "content_type(\"application/json\");",
          "set_type(\"application/json\");",
          "None of the above"
        ],
        correctAnswer: 0
      }
    ],
    "PHP Project Structure": [
      {
        question: "Which directory is commonly used for storing configuration files in a PHP project?",
        options: [
          "config",
          "conf",
          "settings",
          "None of the above"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you include a file in PHP?",
        options: [
          "include 'file.php';",
          "require 'file.php';",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      }
    ],
    "PHP Best Practices": [
      {
        question: "Which of the following is a best practice in PHP?",
        options: [
          "Using prepared statements",
          "Sanitizing user input",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      },
      {
        question: "How do you handle errors in PHP?",
        options: [
          "Using try-catch blocks",
          "Setting error handlers",
          "Both A and B",
          "None of the above"
        ],
        correctAnswer: 2
      }
    ]
  };
  return quizzes[lessonTitle] || [
    {
      question: `What is the main concept of ${lessonTitle.toLowerCase()}?`,
      options: ["Correct answer", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0
    }
  ];
};

module.exports = {
    getPHPLessonConcepts,
    getPHPCodeExample,
    getPHPCodeExplanation,
    getPHPExercises,
    getPHPQuiz
    };