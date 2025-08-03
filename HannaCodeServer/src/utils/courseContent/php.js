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
- Cookie security
- Best practices`,

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
- Connection pooling
- Best practices`,

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
- Secure connections
- Best practices`,

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
- Security considerations
- Best practices`,

    "PHP Image Processing": `
- Image manipulation
- Image upload
- Image validation
- Security considerations
- Best practices`,

    "PHP Email Handling": `
- Sending emails
- Email validation
- Email templates
- Security considerations
- Best practices`,

    "PHP Date and Time": `
- Date and time functions
- Time zones
- Date formatting
- Date calculations
- Best practices`,

    "PHP Regular Expressions": `
- Regular expression basics
- Pattern matching
- String replacement
- Validation
- Best practices`,

    "PHP JSON Handling": `
- JSON encoding
- JSON decoding
- JSON validation
- Error handling
- Best practices`,

    "PHP XML Processing": `
- XML basics
- XML parsing
- XML generation
- XML validation
- Best practices`,

    "PHP RESTful APIs": `
- RESTful API basics
- API endpoints
- HTTP methods
- Authentication
- Best practices`,

    "PHP Project Structure": `
- Project organization
- File structure
- Naming conventions
- Best practices
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
    <?php
    echo \"Hello, World!\";
    ?>`,
    
    "PHP Syntax and Variables": `
    <?php
    $greeting = \"Hello\";\
    $number = 42;
    const PI = 3.14;
    echo $greeting . \" World\";
    ?>`,

    "PHP Data Types": `
    <?php
    $string = \"Hello\";
    $int = 42;
    $float = 3.14;
    $bool = true;
    ?>`,

    "PHP Operators": `
    <?php
    $a = 5;
    $b = 3;
    echo $a + $b; // output is 8 
    echo $a - $b; // output is 2
    echo $a * $b; // output is 15
    echo $a / $b; // output is  1.6666666666667
    ?>`,

    "PHP Control Structures": `
    <?php
    $age = 20;
    if ($age >= 18) {
    echo \"Adult\";
    } else {
        echo \"Minor\";
      }
        ?>`,

    "PHP Functions": `
    <?php
    function greet($name) {
     return \"Hello, \" . $name;
     }
     echo greet(\"John\");
     ?>`,

    "PHP Arrays": `
    <?php
    $fruits = [\"Apple\", \"Banana\", \"Cherry\"];\nforeach ($fruits as $fruit) {
       echo $fruit . \"\\n\";
       }
       ?>

       Another Examples 
       <?php
// Indexed array
$fruits = ["Apple", "Banana", "Cherry"];

// Associative array
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];

// Multidimensional array
$students = [
    ["name" => "Alice", "grade" => 85],
    ["name" => "Bob", "grade" => 92],
    ["name" => "Charlie", "grade" => 78]
];

// Loop through associative array
foreach ($person as $key => $value) {
    echo "$key: $value<br>";
}
    / Array functions demonstration
$numbers = [3, 1, 4, 1, 5, 9, 2, 6];

// Sorting
sort($numbers);
echo "Sorted: " . implode(", ", $numbers) . "<br>";

// Array filtering
$evenNumbers = array_filter($numbers, function($n) { return $n % 2 == 0; });
echo "Even numbers: " . implode(", ", $evenNumbers) . "<br>";

// Array mapping
$doubled = array_map(function($n) { return $n * 2; }, $numbers);
echo "Doubled: " . implode(", ", $doubled) . "<br>";

// Array reduction
$sum = array_reduce($numbers, function($carry, $item) { return $carry + $item; });
echo "Sum: " . $sum;
?> `,

    "PHP Strings": `
    <?php
    $str = \"Hello, World!\";
    echo strlen($str); // 13
    echo strtoupper($str); // HELLO, WORLD!
    ?>
    
    Another Examples
    <?php
$text = "  Hello, World!  ";

// String trimming
echo "Original: '" . $text . "'<br>";
echo "Trimmed: '" . trim($text) . "'<br>";

// String replacement
$newText = str_replace("World", "PHP", $text);
echo "Replaced: " . $newText . "<br>";

// String splitting
$words = explode(" ", trim($text));
echo "Words: " . implode(", ", $words) . "<br>";

// String position
$position = strpos($text, "World");
echo "Position of 'World': " . $position . "<br>";

// String case functions
echo "Lowercase: " . strtolower($text) . "<br>";
echo "Uppercase: " . strtoupper($text) . "<br>";
echo "Title case: " . ucwords(strtolower($text)) . "<br>";
?>`,

    "PHP Forms and User Input": `
    <?php
    if ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {
    $name = $_POST[\"name\"];
    echo \"Hello, \" . $name;
    }
    ?>
   
   Anoother Examples
    <?php
// HTML form example
echo '<form method="POST" action="">';
echo '<input type="text" name="username" placeholder="Enter username">';
echo '<input type="password" name="password" placeholder="Enter password">';
echo '<input type="submit" value="Login">';
echo '</form>';

// Process form data
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    echo "Username: " . $username . "<br>";
    echo "Password: " . $password;
}
?>
    
    `,

    "PHP Form Validation": `
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
        
      Another Examples 
       <?php
$name = "";
$email = "";
$nameErr = "";
$emailErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate name
    if (empty($_POST["name"])) {
        $nameErr = "Name is required";
    } else {
        $name = test_input($_POST["name"]);
        if (!preg_match("/^[a-zA-Z ]*$/", $name)) {
            $nameErr = "Only letters and white space allowed";
        }
    }
    
    // Validate email
    if (empty($_POST["email"])) {
        $emailErr = "Email is required";
    } else {
        $email = test_input($_POST["email"]);
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $emailErr = "Invalid email format";
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
   
    <?php
// Complete form processing example
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $errors = [];
    $data = [];
    
    // Validate and sanitize name
    if (empty($_POST["name"])) {
        $errors["name"] = "Name is required";
    } else {
        $data["name"] = htmlspecialchars(trim($_POST["name"]));
    }
    
    // Validate email
    if (empty($_POST["email"])) {
        $errors["email"] = "Email is required";
    } elseif (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
        $errors["email"] = "Invalid email format";
    } else {
        $data["email"] = htmlspecialchars(trim($_POST["email"]));
    }
    
    // Validate age
    if (empty($_POST["age"])) {
        $errors["age"] = "Age is required";
    } elseif (!is_numeric($_POST["age"]) || $_POST["age"] < 1) {
        $errors["age"] = "Age must be a positive number";
    } else {
        $data["age"] = (int)$_POST["age"];
    }
    
    // Process if no errors
    if (empty($errors)) {
        echo "<h3>Form submitted successfully!</h3>";
        foreach ($data as $key => $value) {
            echo ucfirst($key) . ": " . $value . "<br>";
        }
    } else {
        echo "<h3>Please correct the following errors:</h3>";
        foreach ($errors as $field => $error) {
            echo ucfirst($field) . ": " . $error . "<br>";
        }
    }
}
?>

<!-- HTML Form -->
<form method="POST" action="">
    <label>Name: <input type="text" name="name" value="<?php echo isset($_POST['name']) ?
     htmlspecialchars($_POST['name']) : ''; ?>"></label><br>
    <label>Email: <input type="email" name="email" value="<?php echo isset($_POST['email']) ? 
    htmlspecialchars($_POST['email']) : ''; ?>"></label><br>
    <label>Age: <input type="number" name="age" value="<?php echo isset($_POST['age']) ?
     htmlspecialchars($_POST['age']) : ''; ?>"></label><br>
    <input type="submit" value="Submit">
</form> `,

    "PHP File Handling": `
    <?php
    $file = fopen(\"test.txt\", \"r\");
    while(!feof($file)) {
    echo fgets($file) . \"<br>\";
    }
    fclose($file);
    ?>`,

    "PHP Cookies and Sessions": `
    <?php
    setcookie(\"user\", \"John\", time() + 3600);
    session_start();
    $_SESSION[\"user\"] = \"John\";
    ?>
    Another Example
    <?php
session_start();

// Set session variables
$_SESSION["user_id"] = 123;
$_SESSION["username"] = "john_doe";
$_SESSION["login_time"] = time();

// Check if user is logged in
if (isset($_SESSION["user_id"])) {
    echo "Welcome, " . $_SESSION["username"] . "!";
    echo "<br>Login time: " . date("Y-m-d H:i:s", $_SESSION["login_time"]);
} else {
    echo "Please log in.";
}

// Destroy session (logout)
if (isset($_GET["logout"])) {
    session_destroy();
    echo "Logged out successfully.";
}
?>
Session Management 
<?php
session_start();

// Session configuration
ini_set('session.cookie_httponly', 1);
ini_set('session.use_only_cookies', 1);
ini_set('session.cookie_secure', 1);

// Login simulation
if (isset($_POST['login'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];
    
    // Simulate authentication
    if ($username === 'admin' && $password === 'password123') {
        $_SESSION['user_id'] = 1;
        $_SESSION['username'] = $username;
        $_SESSION['login_time'] = time();
        $_SESSION['role'] = 'admin';
        
        // Regenerate session ID for security
        session_regenerate_id(true);
        
        echo "Login successful!";
    } else {
        echo "Invalid credentials!";
    }
}

// Logout
if (isset($_GET['logout'])) {
    // Clear all session variables
    $_SESSION = array();
    
    // Destroy the session cookie
    if (isset($_COOKIE[session_name()])) {
        setcookie(session_name(), '', time() - 3600, '/');
    }
    
    // Destroy the session
    session_destroy();
    
    echo "Logged out successfully!";
}

// Check if user is logged in
if (isset($_SESSION['user_id'])) {
    echo "<h3>Welcome, " . htmlspecialchars($_SESSION['username']) . "!</h3>";
    echo "Login time: " . date('Y-m-d H:i:s', $_SESSION['login_time']) . "<br>";
    echo "Role: " . $_SESSION['role'] . "<br>";
    echo "Session ID: " . session_id() . "<br>";
    echo "<a href='?logout=1'>Logout</a>";
} else {
    echo "<h3>Please log in:</h3>";
    echo "<form method='POST'>";
    echo "Username: <input type='text' name='username'><br>";
    echo "Password: <input type='password' name='password'><br>";
    echo "<input type='submit' name='login' value='Login'>";
    echo "</form>";
}
?>`,

    "PHP Error Handling": `
    <?php
    function customError($errno, $errstr) {
    echo \"<b>Error:</b> [$errno] $errstr\";
    }
    set_error_handler(\"customError\");
    echo($test);
    ?>
    
     Another Example
    <?php
try {
    $servername = "localhost";
    $username = "username";
    $password = "password";
    $conn = new mysqli($servername, $username, $password);
    
    if ($conn->connect_error) {
        throw new Exception("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>

Another comprehensive error handling examples
<?php
// Custom exception class
class DatabaseException extends Exception {
    public function __construct($message, $code = 0, Exception $previous = null) {
        parent::__construct($message, $code, $previous);
    }
    
    public function __toString() {
        return __CLASS__ . ": [{$this->code}]: {$this->message}\n";
    }
}

// Custom error handler
function customErrorHandler($errno, $errstr, $errfile, $errline) {
    $errorType = [
        E_ERROR => 'ERROR',
        E_WARNING => 'WARNING',
        E_PARSE => 'PARSE',
        E_NOTICE => 'NOTICE',
        E_CORE_ERROR => 'CORE_ERROR',
        E_CORE_WARNING => 'CORE_WARNING',
        E_COMPILE_ERROR => 'COMPILE_ERROR',
        E_COMPILE_WARNING => 'COMPILE_WARNING',
        E_USER_ERROR => 'USER_ERROR',
        E_USER_WARNING => 'USER_WARNING',
        E_USER_NOTICE => 'USER_NOTICE',
        E_STRICT => 'STRICT',
        E_RECOVERABLE_ERROR => 'RECOVERABLE_ERROR',
        E_DEPRECATED => 'DEPRECATED',
        E_USER_DEPRECATED => 'USER_DEPRECATED',
    ];
    
    $type = isset($errorType[$errno]) ? $errorType[$errno] : 'UNKNOWN';
    
    $message = "[$type] $errstr in $errfile on line $errline";
    
    // Log error
    error_log($message);
    
    // Display error (only in development)
    if (defined('DEVELOPMENT_MODE') && DEVELOPMENT_MODE) {
        echo "<div style='color: red; border: 1px solid red; padding: 10px; margin: 10px;'>";
        echo $message;
        echo "</div>";
    }
    
    return true;
}

// Set error handler
set_error_handler("customErrorHandler");

// Example usage with try-catch
try {
    // Simulate database connection
    $host = 'localhost';
    $dbname = 'nonexistent_db';
    
    if (!file_exists($dbname)) {
        throw new DatabaseException("Database '$dbname' does not exist");
    }
    
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", "user", "pass");
    
} catch (DatabaseException $e) {
    echo "Database Error: " . $e->getMessage() . "<br>";
    echo "File: " . $e->getFile() . "<br>";
    echo "Line: " . $e->getLine() . "<br>";
    
} catch (PDOException $e) {
    echo "PDO Error: " . $e->getMessage() . "<br>";
    
} catch (Exception $e) {
    echo "General Error: " . $e->getMessage() . "<br>";
    
} finally {
    echo "This code always executes<br>";
}

// Trigger different types of errors
trigger_error("This is a user warning", E_USER_WARNING);
trigger_error("This is a user notice", E_USER_NOTICE);
?>`,

    "PHP Database Connection": `
    <?php
    $servername = \"localhost\";
    $username = \"username\";
    $password = \"password\";
    $conn = new mysqli($servername, $username, $password);
    if ($conn->connect_error) {
    die(\"Connection failed: \" . $conn->connect_error);
    }
    ?>
    
    Another Examples 
    <?php
try {
    $pdo = new PDO("mysql:host=localhost;dbname=test", "username", "password");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Create table if not exists
    $sql = "CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        created_at TIMESTAMP DEFAULT _TIMESTAMP
    )";
    $pdo->exec($sql);
    
    // Insert multiple records
    $stmt = $pdo->prepare("INSERT INTO users (name, email) VALUES (?, ?)");
    $users = [
        ["John Doe", "john@example.com"],
        ["Jane Smith", "jane@example.com"],
        ["Bob Johnson", "bob@example.com"]
    ];
    
    foreach ($users as $user) {
        $stmt->execute($user);
    }
    
    // Select with conditions
    $stmt = $pdo->prepare("SELECT * FROM users WHERE name LIKE ? ORDER BY created_at DESC");
    $stmt->execute(["%John%"]);
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    echo "<h3>Users found:</h3>";
    foreach ($results as $user) {
        echo "ID: " . $user['id'] . ", Name: " . $user['name'] . ", Email: " . $user['email'] . "<br>";
    }
    
    // Update record
    $stmt = $pdo->prepare("UPDATE users SET name = ? WHERE email = ?");
    $stmt->execute(["John Updated", "john@example.com"]);
    
    // Delete record
    $stmt = $pdo->prepare("DELETE FROM users WHERE email = ?");
    $stmt->execute(["bob@example.com"]);
    
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>`,

    "MySQL Basics": `
    CREATE DATABASE myDB;
    USE myDB;
    CREATE TABLE Users (id INT, name VARCHAR(30));`,

    "MySQL Tables and Data Types": `
    CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(50) UNIQUE
    );`,

    "MySQL CRUD Operations": `
    INSERT INTO Users (name, email) VALUES (\"John\", \"john@example.com\");
    SELECT * FROM Users;\nUPDATE Users SET name = \"Jane\" WHERE id = 1;
    DELETE FROM Users WHERE id = 1;`,

    "MySQL Joins": `SELECT Users.name, Orders.order_id
    FROM Users
    INNER JOIN Orders ON Users.id = Orders.user_id;`,

    "MySQL Indexes": `CREATE INDEX idx_name ON Users(name);`,

    "MySQL Transactions": `START TRANSACTION;
    INSERT INTO Users (name) VALUES (\"John\");
    INSERT INTO Orders (user_id) VALUES (LAST_INSERT_ID());
    COMMIT;`,

    "PHP and MySQL Integration": `<?php
    $conn = new mysqli($servername, $username, $password, $dbname);
    $sql = \"SELECT * FROM Users\";
    $result = $conn->query($sql);
    nwhile($row = $result->fetch_assoc()) {
     echo $row[\"name\"];
     }
     ?>`,

    "PHP Prepared Statements": `
    <?php
    $stmt = $conn->prepare(\"INSERT INTO Users (name) VALUES (?)\");
    $stmt->bind_param(\"s\", $name);
    $name = \"John\";
    $stmt->execute();
    ?>`,

    "PHP Database Security": `
    <?php
    $stmt = $conn->prepare(\"SELECT * FROM Users WHERE id = ?\");
    $stmt->bind_param(\"i\", $id);
    $id = 1;
    $stmt->execute();
    ?>`,

    "PHP Authentication": `
    <?php
    session_start();
    if ($_SERVER[\"REQUEST_METHOD\"] == \"POST\") {
    $username = $_POST[\"username\"];
    $password = $_POST[\"password\"];
    // Verify credentials
    }
    ?>`,

    "PHP Authorization": `
    <?php
    if ($_SESSION[\"role\"] == \"admin\") {
    // Allow access
    } else {
    // Deny access
   }
    ?>`,

    "PHP Password Hashing": `
    <?php
    $password = \"password123\";
    $hashed = password_hash($password, PASSWORD_DEFAULT);
    if (password_verify($password, $hashed)) {  
    echo \"Password is valid\";
    }
    ?>`,

    "PHP File Upload": `<?php
    if ($_FILES[\"file\"][\"error\"] == 0) {
    move_uploaded_file($_FILES[\"file\"][\"tmp_name\"], \"uploads/\" . $_FILES[\"file\"][\"name\"]);
    }
    ?>
    
    Another Example
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
?>`,

    "PHP Image Processing": `
    <?php
    $image = imagecreatefromjpeg(\"image.jpg\");\nimagefilter($image, IMG_FILTER_GRAYSCALE);
    imagejpeg($image, \"grayscale.jpg\");
    ?>`,

    "PHP Email Handling": `
    <?php
    $to = \"recipient@example.com\";
    $subject = \"Test Email\";
    $message = \"Hello, this is a test email.\";
    mail($to, $subject, $message);
    ?>`,

    "PHP Date and Time": `
    <?php
    echo date(\"Y-m-d H:i:s\");
    $date = new DateTime();
    echo $date->format(\"Y-m-d H:i:s\");
    ?>`,

    "PHP Regular Expressions": `
    <?php
    $pattern = \"/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/\";
    $email = \"test@example.com\";
    if (preg_match($pattern, $email)) {
    echo \"Valid email\";
    }
    ?>`,

    "PHP JSON Handling": `
    <?php
    $data = [\"name\" => \"John\", \"age\" => 30];
    $json = json_encode($data);
    $decoded = json_decode($json, true);
    ?>`,

    "PHP XML Processing": `
    <?php
    $xml = simplexml_load_string(\"<root><item>Test</item></root>\");
    echo $xml->item;
    ?>`,

    "PHP RESTful APIs": `
    <?php
    header(\"Content-Type: application/json\");
    echo json_encode([\"status\" => \"success\"]);
    ?>`,

    "PHP Project Structure": `
    <?php
    // Project structure example
    require_once \"config/database.php\";
    require_once \"models/User.php\";
    require_once \"controllers/UserController.php\";
    ?>`,

    "PHP Best Practices": `
    <?php
    // Best practices example
    function calculateTotal($items) {
    $total = 0; 
    foreach ($items as $item) {
    $total += $item->price;
       }
      return $total;
      }
      ?>`,
  };
  return examples[lessonTitle] || "<?php\n// Example code will be provided\n?>";
};

const getPHPCodeExplanation = (lessonTitle) => {
  const explanations = {
    "Introduction to PHP": `
**Code Explanation:**
This is the fundamental "Hello, World!" program in PHP that introduces basic PHP syntax:

1. **PHP Tags**: The \`<?php ... ?>\` tags tell the web server to process the code inside as PHP rather than plain HTML.

2. **Echo Statement**: The \`echo\` command outputs text to the browser. It's one of the most basic ways to display content in PHP.

3. **String Literal**: "Hello, World!" is a string literal - text enclosed in quotes that represents a sequence of characters.

**Why This Matters:**
- This demonstrates how PHP can generate dynamic content for web pages
- Shows the basic structure every PHP script follows
- Introduces the concept of server-side processing where PHP code runs on the server before sending HTML to the browser

**Learning Outcome:** Understanding how PHP integrates with HTML and produces output for web browsers.`,

    "PHP Syntax and Variables": `
**Code Explanation:**
This example demonstrates PHP's variable system and basic syntax:

1. **Variable Declaration**: Variables in PHP start with \`$\` and don't require explicit type declaration. PHP automatically determines the data type.

2. **String Variable**: \`$greeting = "Hello"\` stores a text value that can be used throughout the script.

3. **Numeric Variable**: \`$number = 42\` stores an integer value.

4. **Constant Declaration**: \`const PI = 3.14\` creates a constant that cannot be changed after definition.

5. **String Concatenation**: The \`.\` operator joins strings together. \`$greeting . " World"\` combines the variable value with additional text.

**Why This Matters:**
- Variables allow you to store and reuse data in your programs
- Constants provide values that should never change (like mathematical constants)
- String concatenation is essential for building dynamic content

**Learning Outcome:** Understanding how to store data and manipulate text in PHP.`,

    "PHP Data Types": `
**Code Explanation:**
This example showcases PHP's dynamic typing system and the main data types:

1. **String Type**: \`$string = "Hello"\` - Stores text data. Strings can contain letters, numbers, and special characters.

2. **Integer Type**: \`$int = 42\` - Stores whole numbers (positive, negative, or zero) without decimal points.

3. **Float Type**: \`$float = 3.14\` - Stores decimal numbers. Floats can represent fractional values.

4. **Boolean Type**: \`$bool = true\` - Stores logical values (true or false). Used for conditional logic.

**Why This Matters:**
- PHP automatically determines the data type based on the value assigned
- Different data types have different operations and behaviors
- Understanding data types is crucial for proper data handling and calculations

**Learning Outcome:** Recognizing PHP's data types and how they affect program behavior.`,

    "PHP Operators": `
**Code Explanation:**

This example demonstrates arithmetic operators in PHP:

1. **Addition (\`+\`)**: \`$a + $b\` adds two numbers together, resulting in 8.

2. **Subtraction (\`-\`)**: \`$a - $b\` subtracts the second number from the first, resulting in 2.

3. **Multiplication (\`*\`)**: \`$a * $b\` multiplies two numbers, resulting in 15.

4. **Division (\`/\`)**: \`$a / $b\` divides the first number by the second, resulting in approximately 1.67.

**Why This Matters:**
- Arithmetic operators are fundamental for mathematical calculations
- The results show how different operations produce different outcomes
- Understanding operator precedence helps write correct mathematical expressions

**Learning Outcome:** Mastering basic mathematical operations in PHP for calculations and data processing.`,

    "PHP Control Structures": `
**Code Explanation:**
This example demonstrates conditional logic using if-else statements:

1. **Condition Check**: \`$age >= 18\` evaluates whether the age variable is greater than or equal to 18.

2. **If Statement**: If the condition is true (age is 18 or older), the code inside the first block executes.

3. **Else Statement**: If the condition is false (age is under 18), the code inside the else block executes.

4. **Output**: The program will display either "Adult" or "Minor" based on the age value.

**Why This Matters:**
- Conditional logic allows programs to make decisions based on data
- This is essential for creating interactive and responsive applications
- Control structures form the backbone of program flow and decision-making

**Learning Outcome:** Understanding how to create programs that respond differently based on conditions.`,

    "PHP Functions": `
**Code Explanation:**
This example demonstrates function creation and usage in PHP:

1. **Function Definition**: \`function greet($name)\` creates a reusable block of code that accepts a parameter.

2. **Parameter**: \`$name\` is a parameter that receives a value when the function is called.

3. **Return Statement**: \`return\` sends a value back to wherever the function was called from.

4. **String Concatenation**: The \`.\` operator joins the string "Hello, " with the parameter value.

5. **Function Call**: \`greet("John")\` executes the function with "John" as the parameter.

**Why This Matters:**
- Functions allow code reuse and organization
- Parameters make functions flexible and reusable
- Return values allow functions to provide results to the calling code

**Learning Outcome:** Understanding how to create modular, reusable code blocks in PHP.`,

    "PHP Arrays": `
**Code Explanation:**
This example demonstrates array creation and iteration:

1. **Array Declaration**: \`$fruits = ["Apple", "Banana", "Cherry"]\` creates an indexed array with three string values.

2. **Foreach Loop**: \`foreach ($fruits as $fruit)\` iterates through each element in the array.

3. **Loop Variable**: \`$fruit\` holds the current array element during each iteration.

4. **String Concatenation**: \`$fruit . "\\n"\` adds a newline character after each fruit name.

5. **Output**: Each fruit is printed on a separate line.

**Why This Matters:**
- Arrays allow you to store multiple related values in a single variable
- Foreach loops provide a clean way to process each element in an array
- This pattern is commonly used for displaying lists of data

**Learning Outcome:** Understanding how to work with collections of data and process them efficiently.`,

    "PHP Strings": `
**Code Explanation:**
This example demonstrates string manipulation functions:

1. **String Variable**: \`$str = "Hello, World!"\` stores a text string.

2. **strlen() Function**: \`strlen($str)\` returns the number of characters in the string (13 characters).

3. **strtoupper() Function**: \`strtoupper($str)\` converts all characters to uppercase, resulting in "HELLO, WORLD!".

**Why This Matters:**
- String functions help manipulate and analyze text data
- These functions are essential for text processing and formatting
- Understanding string operations is crucial for web development

**Learning Outcome:** Mastering common string manipulation techniques for text processing.`,

    "PHP Forms and User Input": `
**Code Explanation:**
This example demonstrates how to process form submissions:

1. **Request Method Check**: \`$_SERVER["REQUEST_METHOD"] == "POST"\` verifies that the form was submitted using the POST method.

2. **Superglobal Array**: \`$_POST\` is a built-in array that contains all data submitted via POST method.

3. **Form Data Access**: \`$_POST["name"]\` retrieves the value from the form field named "name".

4. **Output**: The script displays a personalized greeting using the submitted name.

**Why This Matters:**
- Form processing is essential for interactive web applications
- POST method is more secure than GET for sensitive data
- Understanding superglobal arrays is crucial for web development

**Learning Outcome:** Understanding how to collect and process user input from web forms.`,

    "PHP Form Validation": `
**Code Explanation:**
This example demonstrates basic form validation:

1. **Variable Initialization**: \`$name = ""\` and \`$nameErr = ""\` initialize variables to store the name and any error messages.

2. **Request Method Check**: Ensures the form was submitted via POST method.

3. **Empty Check**: \`empty($_POST["name"])\` verifies if the name field was left blank.

4. **Error Handling**: If the field is empty, an error message is stored in \`$nameErr\`.

5. **Data Processing**: If the field has a value, it's processed by the \`test_input()\` function (presumably for sanitization).

**Why This Matters:**
- Form validation prevents invalid or malicious data from being processed
- Error messages help users understand what went wrong
- Data sanitization is crucial for security

**Learning Outcome:** Understanding how to validate user input and provide meaningful feedback.`,

    "PHP File Handling": `
**Code Explanation:**
This example demonstrates basic file reading operations:

1. **File Opening**: \`fopen("test.txt", "r")\` opens a file named "test.txt" in read mode ("r").

2. **While Loop**: \`while(!feof($file))\` continues looping until the end of the file is reached.

3. **feof() Function**: Checks if the end-of-file has been reached.

4. **fgets() Function**: \`fgets($file)\` reads one line from the file at a time.

5. **HTML Output**: \`"<br>"\` adds a line break for HTML display.

6. **File Closing**: \`fclose($file)\` properly closes the file to free up system resources.

**Why This Matters:**
- File handling is essential for reading and writing data
- Proper file management prevents resource leaks
- This pattern is commonly used for processing text files

**Learning Outcome:** Understanding how to read files and process their contents line by line.`,

    "PHP Cookies and Sessions": `
**Code Explanation:**
This example demonstrates both cookies and sessions:

1. **Cookie Setting**: \`setcookie("user", "John", time() + 3600)\` creates a cookie that:
- Has the name "user"
- Contains the value "John"
- Expires in 1 hour (3600 seconds from current time)

2. **Session Start**: \`session_start()\` initializes a new session or resumes an existing one.

3. **Session Variable**: \`$_SESSION["user"] = "John"\` stores data in the session that persists across page requests.

**Why This Matters:**
- Cookies store data on the client side (browser)
- Sessions store data on the server side
- Both are essential for maintaining user state across web pages

**Learning Outcome:** Understanding how to maintain user information across multiple page requests.`,

    "PHP Error Handling": `
**Code Explanation:**
This example demonstrates custom error handling:

1. **Custom Error Function**: \`customError($errno, $errstr)\` defines how errors should be displayed.

2. **Error Parameters**: 
   - \`$errno\` contains the error number
   - \`$errstr\` contains the error message

3. **Error Handler Registration**: \`set_error_handler("customError")\` tells PHP to use our custom function for error handling.

4. **Error Trigger**: \`echo($test)\` intentionally causes an error because \`$test\` is undefined.

5. **Custom Output**: Instead of PHP's default error message, our custom function displays a formatted error.

**Why This Matters:**
- Custom error handling provides better user experience
- It allows you to log errors or display them in a user-friendly way
- Proper error handling is crucial for production applications

**Learning Outcome:** Understanding how to control error display and create user-friendly error messages.`,

    "PHP Database Connection": `
**Code Explanation:**
This example demonstrates MySQL database connection using mysqli:

1. **Connection Parameters**: Defines the server name, username, and password for database access.

2. **mysqli Object**: \`new mysqli()\` creates a new database connection object.

3. **Error Checking**: \`$conn->connect_error\` checks if the connection was successful.

4. **Error Handling**: If connection fails, \`die()\` stops script execution and displays an error message.

5. **Connection Object**: \`$conn\` can now be used to execute database queries.

**Why This Matters:**
- Database connections are essential for dynamic web applications
- Proper error handling prevents applications from crashing
- The mysqli extension provides a secure way to interact with MySQL databases

**Learning Outcome:** Understanding how to establish secure database connections and handle connection errors.`,

    "MySQL Basics": `
**Code Explanation:**

This example demonstrates basic MySQL database and table creation:

1. **Database Creation**: \`CREATE DATABASE myDB;\` creates a new database named "myDB".

2. **Database Selection**: \`USE myDB;\` tells MySQL to use the "myDB" database for subsequent operations.

3. **Table Creation**: \`CREATE TABLE Users (id INT, name VARCHAR(30));\` creates a table with:
   - An "id" column of integer type
   - A "name" column that can store up to 30 characters

**Why This Matters:**
- Databases provide structured storage for application data
- Tables organize data into rows and columns
- Understanding SQL syntax is essential for database management

**Learning Outcome:** Understanding how to create databases and tables to store application data.`,

    "MySQL Tables and Data Types": `
**Code Explanation:**

This example demonstrates advanced table creation with constraints:

1. **Primary Key**: \`AUTO_INCREMENT PRIMARY KEY\` creates an automatically incrementing unique identifier.

2. **NOT NULL Constraint**: Ensures the "name" field cannot be empty.

3. **UNIQUE Constraint**: Ensures each email address can only appear once in the table.

4. **Data Types**: 
   - \`INT\` for whole numbers
   - \`VARCHAR(50)\` for variable-length text up to 50 characters

**Why This Matters:**
- Constraints ensure data integrity and consistency
- Primary keys provide unique identification for each record
- Proper data types optimize storage and performance

**Learning Outcome:** Understanding how to create robust database tables with proper constraints and data types.`,

    "MySQL CRUD Operations": `
**Code Explanation:**

This example demonstrates the four basic database operations (CRUD):

1. **CREATE (INSERT)**: \`INSERT INTO Users (name, email) VALUES ("John", "john@example.com");\` adds a new record to the table.

2. **READ (SELECT)**: \`SELECT * FROM Users;\` retrieves all records from the Users table.

3. **UPDATE**: \`UPDATE Users SET name = "Jane" WHERE id = 1;\` modifies the name of the user with ID 1.

4. **DELETE**: \`DELETE FROM Users WHERE id = 1;\` removes the user with ID 1 from the table.

**Why This Matters:**
- CRUD operations are the foundation of database management
- These operations allow you to create, retrieve, modify, and remove data
- Understanding CRUD is essential for any database-driven application

**Learning Outcome:** Mastering the four fundamental database operations for data management.`,

    "MySQL Joins": `
**Code Explanation:**

This example demonstrates how to combine data from multiple tables:

1. **SELECT Statement**: Specifies which columns to retrieve (name from Users table, order_id from Orders table).

2. **FROM Clause**: Specifies the main table (Users).

3. **INNER JOIN**: \`INNER JOIN Orders ON Users.id = Orders.user_id\` combines records where the user ID matches in both tables.

4. **Join Condition**: \`Users.id = Orders.user_id\` defines how the tables are related.

**Why This Matters:**
- Joins allow you to retrieve related data from multiple tables
- INNER JOIN only returns records that exist in both tables
- Understanding joins is crucial for complex data queries

**Learning Outcome:** Understanding how to retrieve related data from multiple database tables.`,

    "MySQL Indexes": `
**Code Explanation:**

This example demonstrates index creation for performance optimization:

1. **CREATE INDEX**: \`CREATE INDEX idx_name ON Users(name);\` creates an index on the "name" column.

2. **Index Naming**: \`idx_name\` follows a common naming convention for indexes.

3. **Performance Impact**: Indexes speed up queries that search or sort by the indexed column.

**Why This Matters:**
- Indexes significantly improve query performance on large datasets
- They're especially important for columns used in WHERE, ORDER BY, and JOIN clauses
- Proper indexing is crucial for database performance

**Learning Outcome:** Understanding how to optimize database performance through strategic indexing.`,

    "MySQL Transactions": `
**Code Explanation:**

This example demonstrates transaction management for data integrity:

1. **START TRANSACTION**: Begins a transaction that groups multiple operations together.

2. **INSERT Operations**: Adds a new user and creates an order for that user.

3. **LAST_INSERT_ID()**: Gets the ID of the most recently inserted record.

4. **COMMIT**: Permanently saves all changes made within the transaction.

**Why This Matters:**
- Transactions ensure data consistency across multiple operations
- If any operation fails, the entire transaction can be rolled back
- This prevents partial updates that could leave data in an inconsistent state

**Learning Outcome:** Understanding how to maintain data integrity through transaction management.`,

    "PHP and MySQL Integration": `
**Code Explanation:**

This example demonstrates how PHP interacts with MySQL databases:

1. **Database Connection**: Establishes a connection to the MySQL database.

2. **SQL Query**: \`SELECT * FROM Users\` retrieves all records from the Users table.

3. **Query Execution**: \`$conn->query($sql)\` sends the SQL command to the database.

4. **Result Processing**: \`while($row = $result->fetch_assoc())\` loops through each row in the result set.

5. **Data Access**: \`$row["name"]\` accesses the "name" column from the current row.

**Why This Matters:**
- This integration allows PHP to retrieve and display dynamic data from databases
- It's the foundation of dynamic web applications
- Understanding this pattern is essential for database-driven websites

**Learning Outcome:** Understanding how to retrieve and display database data in PHP applications.`,

    "PHP Prepared Statements": `
**Code Explanation:**
This example demonstrates secure database operations using prepared statements:

1. **Statement Preparation**: \`$conn->prepare()\` creates a prepared statement with a placeholder (?).

2. **Parameter Binding**: \`bind_param("s", $name)\` binds the variable \`$name\` to the placeholder, where "s" indicates a string type.

3. **Variable Assignment**: Sets the value for the parameter.

4. **Statement Execution**: \`execute()\` runs the prepared statement with the bound parameters.

**Why This Matters:**
- Prepared statements prevent SQL injection attacks
- They improve performance by reusing query plans
- This is the recommended way to handle user input in database queries

**Learning Outcome:** Understanding how to securely interact with databases using prepared statements.`,

    "PHP Database Security": `
**Code Explanation:**
This example demonstrates secure database querying:

1. **Prepared Statement**: Creates a parameterized query that prevents SQL injection.

2. **Parameter Binding**: \`bind_param("i", $id)\` binds an integer parameter, where "i" indicates integer type.

3. **Variable Assignment**: Sets the ID value to search for.

4. **Secure Execution**: The prepared statement safely executes with the provided parameter.

**Why This Matters:**
- SQL injection is a major security vulnerability
- Prepared statements automatically escape and validate input
- This is essential for protecting against malicious user input

**Learning Outcome:** Understanding how to protect database applications from security vulnerabilities.`,

    "PHP Authentication": `
**Code Explanation:**

This example demonstrates basic authentication logic:

1. **Session Management**: \`session_start()\` initializes or resumes a session.

2. **Form Processing**: Checks if the form was submitted via POST method.

3. **Input Retrieval**: Gets username and password from the form submission.

4. **Authentication Logic**: The comment indicates where credential verification would occur.

**Why This Matters:**
- Authentication is essential for secure web applications
- Sessions allow you to maintain user login state
- Proper authentication protects user accounts and sensitive data

**Learning Outcome:** Understanding how to implement basic user authentication systems.`,

    "PHP Authorization": `
**Code Explanation:**

This example demonstrates role-based access control:

1. **Session Check**: \`$_SESSION["role"]\` retrieves the user's role from the session.

2. **Role Verification**: Checks if the user has the "admin" role.

3. **Access Control**: 
- If the user is an admin, access is granted
- If not, access is denied

**Why This Matters:**
- Authorization controls what users can access based on their roles
- This prevents unauthorized access to sensitive features
- Role-based access is a common security pattern

**Learning Outcome:** Understanding how to implement access control based on user roles.`,

    "PHP Password Hashing": `
**Code Explanation:**

This example demonstrates secure password handling:

1. **Password Hashing**: \`password_hash()\` creates a secure hash of the password using the default algorithm.

2. **Hash Verification**: \`password_verify()\` checks if the original password matches the stored hash.

3. **Security**: The original password is never stored, only the hash.

**Why This Matters:**
- Storing plain text passwords is a major security risk
- Hashing converts passwords into irreversible encrypted strings
- This protects user passwords even if the database is compromised

**Learning Outcome:** Understanding how to securely store and verify user passwords.`,

    "PHP File Upload": `
**Code Explanation:**

This example demonstrates secure file upload handling:

1. **Upload Check**: \`$_FILES["file"]["error"] == 0\` verifies that the file upload was successful.

2. **File Movement**: \`move_uploaded_file()\` safely moves the uploaded file to the destination directory.

3. **Security**: This function ensures the file was actually uploaded and not spoofed.

**Why This Matters:**
- File uploads are common in web applications
- Proper handling prevents security vulnerabilities
- This allows users to upload images, documents, and other files

**Learning Outcome:** Understanding how to safely handle file uploads from users.`,

    "PHP Image Processing": `
**Code Explanation:**

This example demonstrates basic image manipulation:

1. **Image Loading**: \`imagecreatefromjpeg()\` loads an existing JPEG image into memory.

2. **Filter Application**: \`imagefilter()\` applies a grayscale filter to the image.

3. **Image Saving**: \`imagejpeg()\` saves the modified image to a new file.

**Why This Matters:**
- Image processing allows you to modify images programmatically
- This is useful for creating thumbnails, applying effects, or optimizing images
- The GD library provides powerful image manipulation capabilities

**Learning Outcome:** Understanding how to programmatically process and modify images.`,

    "PHP Email Handling": `
**Code Explanation:**

This example demonstrates basic email sending:

1. **Recipient**: \`$to\` specifies the email address of the recipient.

2. **Subject**: \`$subject\` sets the email subject line.

3. **Message**: \`$message\` contains the email body text.

4. **Email Sending**: \`mail()\` function sends the email using the server's mail configuration.

**Why This Matters:**
- Email functionality is essential for user notifications and communication
- This allows applications to send automated emails to users
- Email handling is common in contact forms, password resets, and notifications

**Learning Outcome:** Understanding how to send emails programmatically from PHP applications.`,

    "PHP Date and Time": `
**Code Explanation:**

This example demonstrates date and time handling:

1. **Current Date/Time**: \`date()\` formats the current date and time according to the specified format.

2. **DateTime Object**: \`new DateTime()\` creates an object representing the current date and time.

3. **Formatting**: \`format()\` method formats the DateTime object as a string.

**Why This Matters:**
- Date and time handling is essential for many applications
- This is useful for timestamps, scheduling, and time-based features
- Understanding date formatting is crucial for displaying time information

**Learning Outcome:** Understanding how to work with dates and times in PHP applications.`,

    "PHP Regular Expressions": `
**Code Explanation:**

This example demonstrates email validation using regular expressions:

1. **Pattern Definition**: The regex pattern validates email format with specific rules.

2. **Pattern Matching**: \`preg_match()\` checks if the email matches the pattern.

3. **Validation Result**: If the pattern matches, the email is considered valid.

**Why This Matters:**
- Regular expressions provide powerful pattern matching capabilities
- Email validation ensures data quality and security
- Regex is useful for validating various types of input data

**Learning Outcome:** Understanding how to use regular expressions for data validation.`,

    "PHP JSON Handling": `
**Code Explanation:**

This example demonstrates JSON encoding and decoding:

1. **Array Creation**: Creates an associative array with name and age data.

2. **JSON Encoding**: \`json_encode()\` converts the PHP array to a JSON string.

3. **JSON Decoding**: \`json_decode()\` converts the JSON string back to a PHP array.

**Why This Matters:**
- JSON is a common format for data exchange between applications
- This is essential for APIs and web services
- Understanding JSON handling is crucial for modern web development

**Learning Outcome:** Understanding how to work with JSON data in PHP applications.`,

    "PHP XML Processing": `
**Code Explanation:**
This example demonstrates basic XML parsing:

1. **XML Loading**: \`simplexml_load_string()\` parses an XML string into a SimpleXML object.

2. **Element Access**: \`$xml->item\` accesses the "item" element within the XML structure.

3. **Data Extraction**: The content of the "item" element is displayed.

**Why This Matters:**
- XML is a common format for structured data
- This allows you to parse and process XML documents
- Understanding XML processing is useful for working with various data sources

**Learning Outcome:** Understanding how to parse and extract data from XML documents.`,

    "PHP RESTful APIs": `
**Code Explanation:**
This example demonstrates basic API response handling:

1. **Content Type**: \`header()\` sets the response content type to JSON.

2. **Response Data**: Creates an array with status information.

3. **JSON Output**: \`json_encode()\` converts the array to JSON format for the API response.

**Why This Matters:**
- RESTful APIs are essential for modern web applications
- This allows different applications to communicate with each other
- Understanding API development is crucial for building scalable systems

**Learning Outcome:** Understanding how to create basic RESTful API endpoints in PHP.`,

    "PHP Project Structure": `
**Code Explanation:**
This example demonstrates proper file organization:

1. **File Inclusion**: 
- \`require_once\` includes files only once, preventing duplicate inclusions.

2. **Directory Structure**: Shows a typical MVC (Model-View-Controller) structure:
- \`config/\` for configuration files
- \`models/\` for data models
- \`controllers/\` for business logic

3. **Modular Design**: Each file has a specific responsibility in the application.

**Why This Matters:**
- Proper project structure makes code maintainable and scalable
- This follows the MVC pattern, a common architectural approach
- Good organization is essential for team development and code maintenance

**Learning Outcome:** Understanding how to organize PHP projects using best practices and design patterns.`,

    "PHP Best Practices": `
**Code Explanation:**

This example demonstrates coding best practices:

1. **Function Definition**: Creates a clear, single-purpose function.

2. **Variable Initialization**: \`$total = 0\` initializes the variable before use.

3. **Loop Processing**: \`foreach\` efficiently processes each item in the array.

4. **Return Value**: The function returns the calculated total.

**Why This Matters:**
- Following best practices makes code readable and maintainable
- This prevents common programming errors and bugs
- Good coding practices are essential for professional development

**Learning Outcome:** Understanding how to write clean, efficient, and maintainable PHP code.`
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