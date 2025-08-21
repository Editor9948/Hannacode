const getCppLessonConcepts= (lessonTitle) => {
  const concepts = {
 
   "Introduction to C++": `
- What is C++ and its features
- C++ vs C vs other languages
- Compilation process
- Basic program structure
- Comments and documentation
- Variables and data types
- Input/output operations
    `,
    "Variables and Data Types": `
- Primitive data types (int, float, double, char, bool)
- Type modifiers (signed, unsigned, long, short)
- Variable declaration and initialization
- Constants (const, #define)
- Type conversion (implicit and explicit)
- Scope and lifetime of variables
    `,

    "Operators": `
- Arithmetic operators (+, -, \*, /, %)
- Relational operators (==, !=, <, >, <=, >=)
- Logical operators (&&, ||, !)
- Bitwise operators (&, |, ^, ~)
- Assignment operators (=, +=, -=, \*=, /=, %=)
- Ternary operator (?:)
- Operator precedence
    `,
    "Control Flow": `
- if-else statements
- switch-case statements
- while and do-while loops
- for loop (traditional and range-based)
- break, continue, and goto
- Nested control structures
    `,
    "Functions": `
- Function declaration and definition
- Parameters and arguments
- Return types and values
- Function overloading
- Default arguments
- Pass by value vs pass by reference
- Inline functions
- Recursion
    `,
    "Arrays and Strings": `
- Array declaration and initialization
- Multi-dimensional arrays
- C-style strings
- std::string class
- Array manipulation
- Common array algorithms (searching, sorting)
- Array limitations and alternatives
    `,
    "Pointers and References": `
- Pointer declaration and initialization
- Pointer arithmetic
- Pointers and arrays
- References vs pointers
- Dynamic memory allocation (new, delete)
- Smart pointers (unique_ptr, shared_ptr)
- Pointer pitfalls and best practices
    `,
    "Foundational Object-Oriented Programming Concepts": `
- Classes and objects
- Constructors and destructors
- Encapsulation (access specifiers)`,

   "Advanced bObject-Oriented Programming Concepts": `
- Inheritance (single, multiple, multilevel)
- Polymorphism (virtual functions)
- Abstract classes and interfaces
- Static members
- Friend functions and classes
    `,
    "STL Containers": `
- Sequence containers (vector, list, deque)
- Associative containers (map, set)
- Unordered containers (unordered_map)
- Container adapters (stack, queue, priority_queue)
- Iterators and their types
- Common algorithms (sort, find, transform)
- Lambda expressions with STL
    `,
    "File Handling": `
- File streams (ifstream, ofstream, fstream)
- Opening and closing files
- Reading/writing text files
- Reading/writing binary files
- File position pointers
- Error handling in file operations
- Serialization basics
    `,
    "Exception Handling": `
- try, catch, throw
- Standard exceptions
- Custom exception classes
- Exception safety
- noexcept specification
- Best practices for error handling
    `,
    "Templates": `
- Function templates
- Class templates
- Template specialization
- Variadic templates
- Template metaprogramming basics
- STL template usage
    `,
    "Modern C++ Features": `
- auto type deduction
- Range-based for loops
- nullptr
- Lambda expressions
- Move semantics (rvalue references)     
- Smart pointers
- constexpr
- Structured bindings
    `,
    "Multithreading": ` 
- Thread creation and management
- Mutex and lock_guard
- Condition variables
- Atomic operations
- Future and promise
- Async tasks
- Thread pools
- Deadlock prevention
    `,
    };
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getCppCodeExamples = (lessonTitle) => {
  const examples = { 

      "Introduction to C++": `
// Example 1: Hello World Program
      #include <iostream>
      using namespace std;
      int main() {
        cout << "Hello, World!" << endl;
        return 0;
      }

// Example 2: Comments
   // This is a single-line comment

       /*
         This is a multi-line comment
         that spans multiple lines
         */

// Example 3: Input/Output Operations 
        int x;
         std::cout << "Enter a number: "; // output a prompt
         std::cin >> x; // input a number
         std::cout << "You entered: " << x << std::endl; // output the input value
`,
   
     "Variables and Data Types": `
// Example 1: Primitive Data Types
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int age = 25; // integer variable
  float height = 5.9; // floating-point variable
  char gender = 'M'; // character variable
  bool isAdmin = true; // boolean variable

  // Print the values of the variables
  cout << "Age: " << age << endl;
  cout << "Height: " << height << endl;
  cout << "Gender: " << gender << endl;
  cout << "Is Admin: " << isAdmin << endl;

  return 0;
}

// Example 2: Type Modifiers
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables with type modifiers
  unsigned int positiveAge = 25; // unsigned integer variable
  long long largeNumber = 1234567890; // long long integer variable
  short shortNumber = 10; // short integer variable

  // Print the values of the variables
  cout << "Positive Age: " << positiveAge << endl;
  cout << "Large Number: " << largeNumber << endl;
  cout << "Short Number: " << shortNumber << endl;

  return 0;
}

// Example 3: Constants
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize constants
  const int MAX_AGE = 100; // constant integer variable
  const float PI = 3.14; // constant floating-point variable

  // Print the values of the constants
  cout << "Max Age: " << MAX_AGE << endl;
  cout << "PI: " << PI << endl;

  return 0;
}

// Example 4: Type Conversion
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int age = 25; // integer variable
  float height = 5.9; // floating-point variable

  // Perform type conversion
  float ageFloat = static_cast<float>(age); // convert integer to float
  int heightInt = static_cast<int>(height); // convert float to integer

  // Print the values of the variables
  cout << "Age (float): " << ageFloat << endl;
  cout << "Height (int): " << heightInt << endl;

  return 0;
}`,

"Operators": `
// Example 1: Arithmetic Operators
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int num1 = 10;
  int num2 = 5;

  // Perform arithmetic operations
  int sum = num1 + num2;
  int difference = num1 - num2;
  int product = num1 * num2;
  int quotient = num1 / num2;
  int remainder = num1 % num2;

  // Print the results
  cout << "Sum: " << sum << endl;
  cout << "Difference: " << difference << endl;
  cout << "Product: " << product << endl;
  cout << "Quotient: " << quotient << endl;
  cout << "Remainder: " << remainder << endl;

  return 0;
}

// Example 2: Assignment Operators
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int num = 10;

  // Perform assignment operations
  num += 5; // equivalent to num = num + 5
  num -= 3; // equivalent to num = num - 3
  num *= 2; // equivalent to num = num * 2
  num /= 2; // equivalent to num = num / 2
  num %= 3; // equivalent to num = num % 3

  // Print the results
  cout << "Value after +=: " << num << endl;
  cout << "Value after -=: " << num << endl;
  cout << "Value after *=: " << num << endl;
  cout << "Value after /=: " << num << endl;
  cout << "Value after %=: " << num << endl;

  return 0;
}

// Example 3: Comparison Operators
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int num1 = 10;
  int num2 = 5;

  // Perform comparison operations
  bool isEqual = (num1 == num2);
  bool isNotEqual = (num1 != num2);
  bool isGreater = (num1 > num2);
  bool isLess = (num1 < num2);
  bool isGreaterOrEqual = (num1 >= num2);
  bool isLessOrEqual = (num1 <= num2);

  // Print the results
  cout << "Is Equal: " << isEqual << endl;
  cout << "Is Not Equal: " << isNotEqual << endl;
  cout << "Is Greater: " << isGreater << endl;
  cout << "Is Less: " << isLess << endl;
  cout << "Is Greater or Equal: " << isGreaterOrEqual << endl;
  cout << "Is Less or Equal: " << isLessOrEqual << endl;

  return 0;
}

// Example 4: Logical Operators
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  bool cond1 = true;
  bool cond2 = false;

  // Perform logical operations
  bool andResult = (cond1 && cond2);
  bool orResult = (cond1 || cond2);
  bool notResult = (!cond1);

  // Print the results
  cout << "And Result: " << andResult << endl;
  cout << "Or Result: " << orResult << endl;
  cout << "Not Result: " << notResult << endl;

  return 0;
}

// Example 5: Bitwise Operators
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int num1 = 10; // binary: 1010
  int num2 = 5; // binary: 0101

  // Perform bitwise operations
  int andResult = (num1 & num2); // binary: 0000
  int orResult = (num1 | num2); // binary: 1111
  int xorResult = (num1 ^ num2); // binary: 1111
  int notResult = (~num1); // binary: 0101

  // Print the results
  cout << "And Result: " << andResult << endl;
  cout << "Or Result: " << orResult << endl;
  cout << "Xor Result: " << xorResult << endl;
  cout << "Not Result: " << notResult << endl;

  return 0;
}`, 

    "Control Flow": `
// Example 1: If-Else Statement
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int age = 25;

  // Check if age is greater than 18
  if (age > 18) {
    cout << "You are an adult." << endl;
  } else {
    cout << "You are not an adult." << endl;
  }

  return 0;
}

// Example 2: If-Else If-Else Statement
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int score = 85;

  // Check if score is greater than 90
  if (score > 90) {
    cout << "You scored an A." << endl;
  } else if (score > 80) {
    cout << "You scored a B." << endl;
  } else if (score > 70) {
    cout << "You scored a C." << endl;
  } else {
    cout << "You scored a D or F." << endl;
  }

  return 0;
}

// Example 3: Switch Statement
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  char grade = 'A';

  // Use switch statement to print grade
  switch (grade) {
    case 'A':
      cout << "You scored an A." << endl;
      break;
    case 'B':
      cout << "You scored a B." << endl;
      break;
    case 'C':
      cout << "You scored a C." << endl;
      break;
    case 'D':
      cout << "You scored a D." << endl;
      break;
    case 'F':
      cout << "You scored an F." << endl;
      break;
    default:
      cout << "Invalid grade." << endl;
      break;
  }

  return 0;
}

// Example 4: For Loop
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int i;

  // Use for loop to print numbers from 1 to 10
  for (i = 1; i <= 10; i++) {
    cout << i << endl;
  }

  return 0;
}

// Example 5: While Loop
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int i = 1;

  // Use while loop to print numbers from 1 to 10
  while (i <= 10) {
    cout << i << endl;
    i++;
  }

  return 0;
}

// Example 6: Do-While Loop
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int i = 1;

  // Use do-while loop to print numbers from 1 to 10
  do {
    cout << i << endl;
    i++;
  } while (i <= 10);

  return 0;
}

// Example 7: Break and Continue Statements
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize variables
  int i;

  // Use for loop to print numbers from 1 to 10
  for (i = 1; i <= 10; i++) {
    if (i == 5) {
      break; // exit loop when i is 5
    }
    cout << i << endl;
  }

  // Use for loop to print numbers from 1 to 10
  for (i = 1; i <= 10; i++) {
    if (i == 5) {
      continue; // skip current iteration when i is 5
    }
    cout << i << endl;
  }

  return 0;
}`,

    "Functions": `
// Example 1: Simple Function
#include <iostream>
using namespace std;

  //Function to print a message
void printMessage() {
  cout << "Hello, World!" << endl;
}

int main() {
  printMessage();
  return 0;
}

// Example 2: Function with Parameters
#include <iostream>
using namespace std;

 //Function to add two numbers
int addNumbers(int num1, int num2) {
  return num1 + num2;
}

int main() {
  int result = addNumbers(5, 10);
  cout << "Result: " << result << endl;
  return 0;
}

// Example 3: Function with Return Type
#include <iostream>
using namespace std;

 //Function to calculate the area of a rectangle
double calculateArea(double length, double width) {
  return length * width;
}

int main() {
  double area = calculateArea(5.5, 3.3);
  cout << "Area: " << area << endl;
  return 0;
}

// Example 4: Function with Default Parameters
#include <iostream>
using namespace std;

  //Function to print a message with default parameters
void printMessage(string message = "Hello, World!", int times = 1) {
  for (int i = 0; i < times; i++) {
    cout << message << endl;
  }
}

int main() {
  printMessage();
  printMessage("Goodbye, World!", 3);
  return 0;
}

// Example 5: Function Overloading
#include <iostream>
using namespace std;

   // Function to add two integers
int add(int num1, int num2) {
  return num1 + num2;
}

   // Function to add two doubles
double add(double num1, double num2) {
  return num1 + num2;
}

int main() {
  int result1 = add(5, 10);
  double result2 = add(5.5, 3.3);
  cout << "Result 1: " << result1 << endl;
  cout << "Result 2: " << result2 << endl;
  return 0;
}

// Example 6: Function Templates
#include <iostream>
using namespace std;

// Function template to swap two values
template <typename T>
void swapValues(T& num1, T& num2) {
  T temp = num1;
  num1 = num2;
  num2 = temp;
}

int main() {
  int num1 = 5;
  int num2 = 10;
  swapValues(num1, num2);
  cout << "Num1: " << num1 << endl;
  cout << "Num2: " << num2 << endl;
  return 0;
}`, 

    "Arrays and Strings": `
// Example 1: Declaring and Initializing Arrays
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize an array of integers
  int scores[] = {90, 80, 70, 60};

  // Print the elements of the array
  for (int i = 0; i < 4; i++) {
    cout << "Score " << i + 1 << ": " << scores[i] << endl;
  }

  return 0;
}

// Example 2: Accessing and Modifying Array Elements
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize an array of integers
  int scores[] = {90, 80, 70, 60};

  // Access and print the first element of the array
  cout << "First Score: " << scores[0] << endl;

  // Modify the second element of the array
  scores[1] = 85;

  // Print the modified array
  for (int i = 0; i < 4; i++) {
    cout << "Score " << i + 1 << ": " << scores[i] << endl;
  }

  return 0;
}

// Example 3: Multidimensional Arrays
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize a 2D array of integers
  int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};

  // Print the elements of the 2D array
  for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 3; j++) {
      cout << "Element [" << i << "][" << j << "]: " << matrix[i][j] << endl;
    }
  }

  return 0;
}

// Example 4: Strings
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize a string
  string name = "John Doe";

  // Print the string
  cout << "Name: " << name << endl;

  // Access and print the first character of the string
  cout << "First Character: " << name[0] << endl;

  // Modify the string
  name = "Jane Doe";

  // Print the modified string
  cout << "Modified Name: " << name << endl;

  return 0;
}

// Example 5: String Operations
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize two strings
  string str1 = "Hello";
  string str2 = "World";

  // Concatenate the strings
  string str3 = str1 + " " + str2;

  // Print the concatenated string
  cout << "Concatenated String: " << str3 << endl;

  // Compare the strings
  if (str1 == str2) {
    cout << "Strings are equal." << endl;
  } else {
    cout << "Strings are not equal." << endl;
  }

  return 0;
}`,

    "Pointers and References": `
// Example 1: Declaring and Initializing Pointers
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize a pointer to an integer
  int* ptr;
  int num = 10;
  ptr = &num;

  // Print the value of the pointer
  cout << "Value of Pointer: " << ptr << endl;

  // Print the value of the variable pointed to by the pointer
  cout << "Value of Variable: " << *ptr << endl;

  return 0;
}

// Example 2: Pointer Arithmetic
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize an array of integers
  int scores[] = {90, 80, 70, 60};

  // Declare and initialize a pointer to the array
  int* ptr = scores;

  // Print the values of the array using pointer arithmetic
  for (int i = 0; i < 4; i++) {
    cout << "Score " << i + 1 << ": " << *(ptr + i) << endl;
  }

  return 0;
}

// Example 3: Pointers to Pointers
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize a pointer to an integer
  int num = 10;
  int* ptr = &num;

  // Declare and initialize a pointer to the pointer
  int** ptrPtr = &ptr;

  // Print the value of the pointer to the pointer
  cout << "Value of Pointer to Pointer: " << ptrPtr << endl;

  // Print the value of the pointer pointed to by the pointer to the pointer
  cout << "Value of Pointer: " << *ptrPtr << endl;

  // Print the value of the variable pointed to by the pointer
  cout << "Value of Variable: " << **ptrPtr << endl;

  return 0;
}

// Example 4: References
#include <iostream>
using namespace std;

int main() {
  // Declare and initialize a variable
  int num = 10;

  // Declare and initialize a reference to the variable
  int& ref = num;

  // Print the value of the reference
  cout << "Value of Reference: " << ref << endl;

  // Modify the value of the variable through the reference
  ref = 20;

  // Print the modified value of the variable
  cout << "Modified Value of Variable: " << num << endl;

  return 0;
}

// Example 5: Passing Variables by Reference
#include <iostream>
using namespace std;

void swap(int& num1, int& num2) {
  int temp = num1;
  num1 = num2;
  num2 = temp;
}

int main() {
  // Declare and initialize two variables
  int num1 = 10;
  int num2 = 20;

  // Print the values of the variables before swapping
  cout << "Before Swapping: " << endl;
  cout << "Num1: " << num1 << endl;
  cout << "Num2: " << num2 << endl;

  // Swap the values of the variables using the swap function
  swap(num1, num2);

  // Print the values of the variables after swapping
  cout << "After Swapping: " << endl;
  cout << "Num1: " << num1 << endl;
  cout << "Num2: " << num2 << endl;

  return 0;
}`,

     "Foundational Object-Oriented Programming Concepts": `
// Example 1: Classes and Objects
 #include <iostream>
#include <string>

// Define a Class named 'Car'
class Car {
public:
    // Member variables (attributes)
    std::string brand;
    std::string model;
    int year;

    // Member function (behavior)
    void displayDetails() {
        std::cout << "Brand: " << brand << ", Model: " << model << ", Year: " << year << std::endl;
    }
};

int main() {
    // Create an Object (instance) of the 'Car' class
    Car myCar;
    myCar.brand = "Toyota";
    myCar.model = "Camry";
    myCar.year = 2022;

    // Call the member function
    myCar.displayDetails();

    return 0;
}


// Example 2: Constructors and Destructors
  #include <iostream>

class Student {
public:
    std::string name;

    // Constructor: Initializes the object when it's created
    Student(std::string n) {
        name = n;
        std::cout << "Student " << name << " created." << std::endl;
    }

    // Destructor: Cleans up resources when the object is destroyed
    ~Student() {
        std::cout << "Student " << name << " destroyed." << std::endl;
    }
};

int main() {
    Student s1("Alice"); // Constructor is called
    {
        Student s2("Bob"); // Another object, constructor called
    } // s2 is destroyed here, destructor is called
    return 0;
} // s1 is destroyed here, destructor is called

// Example 3: Encapsulation (Access Specifiers)
  #include <iostream>

class BankAccount {
private:
    double balance; // private member variable

public:
    // Public constructor
    BankAccount(double initialBalance) {
        if (initialBalance >= 0) {
            balance = initialBalance;
        } else {
            balance = 0;
        }
    }

    // Public member function to deposit
    void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    // Public member function to get the balance
    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount account(100.0);
    // account.balance = -50; // This would cause a compile-time error!
    account.deposit(200.0);
    std::cout << "Current balance: " << account.getBalance() << std::endl;
    return 0;
} `,

"Advanced bObject-Oriented Programming Concepts": `
// Example 1: Inheritance (Single, Multiple, Multilevel)
  #include <iostream>

  // Base Class
class Vehicle {
public:
    void honk() {
        std::cout << "Honk!" << std::endl;
    }
};

  // Single Inheritance: Car inherits from Vehicle
class Car : public Vehicle {
public:
    void drive() {
        std::cout << "Driving a car." << std::endl;
    }
};

  // Multilevel Inheritance: ElectricCar inherits from Car
class ElectricCar : public Car {
public:
    void charge() {
        std::cout << "Charging the electric car." << std::endl;
    }
};

 // Multiple Inheritance: AmphibiousCar inherits from both Car and Boat
class Boat {
public:
    void floatOnWater() {
        std::cout << "Floating on water." << std::endl;
    }
};
class AmphibiousCar : public Car, public Boat {
};

int main() {
    ElectricCar tesla;
    tesla.honk(); // Inherited from Vehicle
    tesla.drive(); // Inherited from Car
    tesla.charge(); // Its own function

    AmphibiousCar aquaCar;
    aquaCar.drive();
    aquaCar.floatOnWater();

    return 0;
}


// Example 2: Polymorphism (Virtual Functions)
   #include <iostream>

class Animal {
public:
    // Virtual function
    virtual void makeSound() {
        std::cout << "The animal makes a sound." << std::endl;
    }
};

class Dog : public Animal {
public:
    void makeSound() override {
        std::cout << "Woof! Woof!" << std::endl;
    }
};

class Cat : public Animal {
public:
    void makeSound() override {
        std::cout << "Meow! Meow!" << std::endl;
    }
};

int main() {
    Animal* myAnimal;

    Dog myDog;
    myAnimal = &myDog;
    myAnimal->makeSound(); // Calls Dog's makeSound()

    Cat myCat;
    myAnimal = &myCat;
    myAnimal->makeSound(); // Calls Cat's makeSound()

    return 0;
}

// Example 3: Abstract Classes and Interfaces
   #include <iostream>

  // Abstract Class
class Shape {
public:
    // Pure virtual function
    virtual double getArea() = 0;
    virtual ~Shape() {}
};

  // Concrete class inheriting from Shape
class Circle : public Shape {
private:
    double radius;
public:
    Circle(double r) : radius(r) {}
    double getArea() override {
        return 3.14 * radius * radius;
    }
};

int main() {
    // Shape s; // This would cause a compile-time error!
    Circle c(5.0);
    std::cout << "Area of circle: " << c.getArea() << std::endl;
    return 0;
}

// Exmple 4: Static
#include <iostream>

class Employee {
public:
    // Static member variable
    static int count;
    std::string name;

    Employee(std::string n) {
        name = n;
        count++; // Increment count each time an object is created
    }
};

 // Initialize static member variable outside the class definition
int Employee::count = 0;

int main() {
    Employee e1("Dave");
    Employee e2("Eve");
    std::cout << "Total number of employees: " << Employee::count << std::endl;
    return 0;
}


// Example 5: Friend functions and classes
   #include <iostream>

class Student {
private:
    std::string name;
    int id;
public:
    Student(std::string n, int i) : name(n), id(i) {}

    // Friend function declaration
    friend void displayDetails(const Student& s);
};

// Friend function definition
void displayDetails(const Student& s) {
    std::cout << "Name: " << s.name << ", ID: " << s.id << std::endl;
}

int main() {
    Student s1("Frank", 101);
    displayDetails(s1);
    return 0;
}`, 

      "STL Containers": `
// Example 1: Using Vectors
#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> myVector;

  // Add elements to the vector
  myVector.push_back(10);
  myVector.push_back(20);
  myVector.push_back(30);

  // Print the elements of the vector
  for (int i = 0; i < myVector.size(); i++) {
    cout << myVector[i] << " ";
  }

  return 0;
}

// Example 2: Using Lists
#include <iostream>
#include <list>
using namespace std;

int main() {
  list<int> myList;

  // Add elements to the list
  myList.push_back(10);
  myList.push_back(20);
  myList.push_back(30);

  // Print the elements of the list
  for (list<int>::iterator it = myList.begin(); it != myList.end(); it++) {
    cout << *it << " ";
  }

  return 0;
}

// Example 3: Using Stacks
#include <iostream>
#include <stack>
using namespace std;

int main() {
  stack<int> myStack;

  // Push elements onto the stack
  myStack.push(10);
  myStack.push(20);
  myStack.push(30);

  // Pop elements off the stack
  while (!myStack.empty()) {
    cout << myStack.top() << " ";
    myStack.pop();
  }

  return 0;
}

// Example 4: Using Queues
#include <iostream>
#include <queue>
using namespace std;

int main() {
  queue<int> myQueue;

  // Push elements onto the queue
  myQueue.push(10);
  myQueue.push(20);
  myQueue.push(30);

  // Pop elements off the queue
  while (!myQueue.empty()) {
    cout << myQueue.front() << " ";
    myQueue.pop();
  }

  return 0;
}

// Example 5: Using Sets
#include <iostream>
#include <set>
using namespace std;

int main() {
  set<int> mySet;

  // Insert elements into the set
  mySet.insert(10);
  mySet.insert(20);
  mySet.insert(30);

  // Print the elements of the set
  for (set<int>::iterator it = mySet.begin(); it != mySet.end(); it++) {
    cout << *it << " ";
  }

  return 0;
}

// Example 6: Using Maps
#include <iostream>
#include <map>
using namespace std;

int main() {
  map<string, int> myMap;

  // Insert elements into the map
  myMap["apple"] = 10;
  myMap["banana"] = 20;
  myMap["orange"] = 30;

  // Print the elements of the map
  for (map<string, int>::iterator it = myMap.begin(); it != myMap.end(); it++) {
    cout << it->first << ": " << it->second << endl;
  }

  return 0;
}

// Example 7: Using Multimaps
#include <iostream>
#include <map>
using namespace std;

int main() {
  multimap<string, int> myMultimap;

  // Insert elements into the multimap
  myMultimap.insert(make_pair("apple", 10));
  myMultimap.insert(make_pair("apple", 20));
  myMultimap.insert(make_pair("banana", 30));

  // Print the elements of the multimap
  for (multimap<string, int>::iterator it = myMultimap.begin(); it != myMultimap.end(); it++) {
    cout << it->first << ": " << it->second << endl;
  }

  return 0;
}

// Example 8: Using Multisets
#include <iostream>
#include <set>
using namespace std;

int main() {
  multiset<int> myMultiset;

  // Insert elements into the multiset
  myMultiset.insert(10);
  myMultiset.insert(20);
  myMultiset.insert(20);
  myMultiset.insert(30);

  // Print the elements of the multiset
  for (multiset<int>::iterator it = myMultiset.begin(); it != myMultiset.end(); it++) {
    cout << *it << " ";
  }

  return 0;
}

// Example 9: Using Priority Queues
#include <iostream>
#include <queue>
using namespace std;

int main() {
  priority_queue<int> myPriorityQueue;

  // Push elements onto the priority queue
  myPriorityQueue.push(10);
  myPriorityQueue.push(20);
  myPriorityQueue.push(30);

  // Pop elements off the priority queue
  while (!myPriorityQueue.empty()) {
    cout << myPriorityQueue.top() << " ";
    myPriorityQueue.pop();
  }
    return 0;
}
    
// Example 10: Using Deques
#include <iostream>
#include <deque>
using namespace std;

int main() {
  deque<int> myDeque;

  // Push elements onto the deque
  myDeque.push_back(10);
  myDeque.push_back(20);
  myDeque.push_back(30);

  // Pop elements off the deque
  while (!myDeque.empty()) {
    cout << myDeque.front() << " ";
    myDeque.pop_front();
  }

  return 0;
}

// Example 11: Using Bitsets
#include <iostream>
#include <bitset>
using namespace std;

int main() {
  bitset<8> myBitset;

  // Set bits in the bitset
  myBitset.set(0);
  myBitset.set(3);
  myBitset.set(6);

  // Print the bitset
  cout << myBitset << endl;

  return 0;
}

// Example 12: Using Arrays
#include <iostream>
#include <array>
using namespace std;

int main() {
  array<int, 5> myArray;

  // Initialize the array
  myArray = {10, 20, 30, 40, 50};

  // Print the array
  for (int i = 0; i < myArray.size(); i++) {
    cout << myArray[i] << " ";
  }

  return 0;
}

// Example 13: Using Tuples
#include <iostream>
#include <tuple>
using namespace std;

int main() {
  tuple<int, string, double> myTuple;

  // Initialize the tuple
  myTuple = make_tuple(10, "Hello", 3.14);

  // Print the tuple
  cout << get<0>(myTuple) << " " << get<1>(myTuple) << " " << get<2>(myTuple) << endl;

  return 0;
}

// Example 14: Using Unordered Containers
#include <iostream>
#include <unordered_set>
using namespace std;

int main() {
  unordered_set<int> myUnorderedSet;

  // Insert elements into the unordered set
  myUnorderedSet.insert(10);
  myUnorderedSet.insert(20);
  myUnorderedSet.insert(30);

  // Print the elements of the unordered set
  for (unordered_set<int>::iterator it = myUnorderedSet.begin(); it != myUnorderedSet.end(); it++) {
    cout << *it << " ";
  }
    return 0;
}`,

    "File Handling": `
// Example 1: File Streams (ifstream, ofstream, fstream)
#include <iostream>
#include <fstream> // Required for file streams
using namespace std;

int main() {
    ofstream outFile("example.txt"); // Create and open a file for writing
    outFile << "Hello, File Handling in C++!"; // Write to the file
    outFile.close(); // Always close after writing

    ifstream inFile("example.txt"); // Open the same file for reading
    string content;
    getline(inFile, content); // Read a line from file
    cout << "File content: " << content << endl;
    inFile.close();

    return 0;
}

// Example 2: Opening and Closing Files
  #include <iostream>
#include <fstream>
using namespace std;

int main() {
    fstream file;
    file.open("data.txt", ios::out); // Open for writing
    file << "This is a test file." << endl;
    file.close();

    file.open("data.txt", ios::in); // Open for reading
    string line;
    getline(file, line);
    cout << "Read from file: " << line << endl;
    file.close();

    return 0;
}


// Example 3: Writing and Reading a text File
  #include <iostream>
#include <fstream>
#include <string>

int main() {
    // 1. Writing to a text file using ofstream
    std::ofstream outFile("example.txt");

    if (!outFile.is_open()) {
        std::cerr << "Error: Could not open file for writing." << std::endl;
        return 1;
    }

    outFile << "Hello, File Handling!" << std::endl;
    outFile << "This is a new line." << std::endl;
    outFile.close();
    std::cout << "Data written to example.txt" << std::endl;

    // 2. Reading from a text file using ifstream
    std::ifstream inFile("example.txt");

    if (!inFile.is_open()) {
        std::cerr << "Error: Could not open file for reading." << std::endl;
        return 1;
    }

    std::string line;
    std::cout << "\nReading from example.txt:" << std::endl;
    while (std::getline(inFile, line)) {
        std::cout << line << std::endl;
    }

    inFile.close();
    return 0;
}

// Example 4: Reading/Writing Binary Files
  #include <iostream>
#include <fstream>

struct Point {
    int x;
    int y;
};

int main() {
    // Writing binary data
    Point p1 = {10, 20};
    std::ofstream binOut("point.dat", std::ios::binary);
    binOut.write(reinterpret_cast<char*>(&p1), sizeof(Point));
    binOut.close();

    // Reading binary data
    Point p2;
    std::ifstream binIn("point.dat", std::ios::binary);
    binIn.read(reinterpret_cast<char*>(&p2), sizeof(Point));
    binIn.close();

    std::cout << "Read from binary file: x = " << p2.x << ", y = " << p2.y << std::endl;

    return 0;
}

// Example 5: File Position Pointers
  #include <iostream>
#include <fstream>
#include <string>

int main() {
    std::fstream file("seek_example.txt", std::ios::out | std::ios::in | std::ios::trunc);
    file << "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    file.seekg(10); // Move get pointer to the 10th character (index 10)
    
    char c;
    file.get(c); // Read the character at the new position
    std::cout << "Character at position 10: " << c << std::endl;

    file.seekp(10); // Move put pointer to the 10th character
    file << 'X'; // Overwrite the character at that position
    file.seekg(0); // Go back to the beginning to read the whole file

    std::string content;
    std::getline(file, content);
    std::cout << "Content after modification: " << content << std::endl;

    file.close();
    return 0;
}

// Example 6: Error Handling in File Operations
   #include <iostream>
#include <fstream>
#include <string>

int main() {
    std::ifstream inFile("non_existent_file.txt");

    if (inFile.fail()) {
        std::cerr << "Error: File 'non_existent_file.txt' not found or could not be opened." << std::endl;
        return 1;
    }

    std::string data;
    while (std::getline(inFile, data)) {
        // ... process data
    }

    if (inFile.eof()) {
        std::cout << "End of file reached." << std::endl;
    } else if (inFile.fail()) {
        std::cerr << "An error occurred during reading." << std::endl;
    }

    inFile.close();
    return 0;
}

// Example 7: Serialization Basics
#include <iostream>
#include <fstream>
#include <string>

class Student {
public:
    std::string name;
    int id;

    // Default constructor for deserialization
    Student() : name(""), id(0) {}
    Student(std::string n, int i) : name(n), id(i) {}

    // Method to serialize the object to a file
    void serialize(std::ofstream& ofs) const {
        // Write the size of the name string, then the string itself
        size_t nameSize = name.length();
        ofs.write(reinterpret_cast<const char*>(&nameSize), sizeof(nameSize));
        ofs.write(name.c_str(), nameSize);
        // Write the integer id
        ofs.write(reinterpret_cast<const char*>(&id), sizeof(id));
    }

    // Method to deserialize the object from a file
    void deserialize(std::ifstream& ifs) {
        size_t nameSize;
        ifs.read(reinterpret_cast<char*>(&nameSize), sizeof(nameSize));
        
        name.resize(nameSize);
        ifs.read(const_cast<char*>(name.data()), nameSize);

        ifs.read(reinterpret_cast<char*>(&id), sizeof(id));
    }
};

int main() {
    Student s1("Alice", 123);

    // Serialize object to file
    std::ofstream outFile("student.bin", std::ios::binary);
    s1.serialize(outFile);
    outFile.close();

    // Deserialize object from file
    Student s2;
    std::ifstream inFile("student.bin", std::ios::binary);
    s2.deserialize(inFile);
    inFile.close();

    std::cout << "Deserialized student: " << s2.name << ", ID: " << s2.id << std::endl;

    return 0;
}`,

    "Exception Handling": `
// Example 1: Basic Exception Handling
#include <iostream>
#include <stdexcept>
using namespace std;

int divide(int a, int b) {
    if (b == 0) {
        throw runtime_error("Division by zero!");
    }
    return a / b;
}

int main() {
    try {
        int result = divide(10, 0);
        cout << "Result: " << result << endl;
    } catch (const runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }
    return 0;
}

// Example 2: Custom Exception Classes
#include <iostream>
#include <string>
using namespace std;

class InvalidAgeException : public exception {
private:
    string message;
public:
    InvalidAgeException(const string& msg) : message(msg) {}
    
    const char* what() const noexcept override {
        return message.c_str();
    }
};

class Person {
private:
    string name;
    int age;
public:
    Person(const string& n, int a) : name(n) {
        if (a < 0 || a > 150) {
            throw InvalidAgeException("Age must be between 0 and 150");
        }
        age = a;
    }
    
    void display() const {
        cout << "Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    try {
        Person p1("John", 25);
        p1.display();
        
        Person p2("Jane", -5); // This will throw an exception
    } catch (const InvalidAgeException& e) {
        cout << "Invalid Age Error: " << e.what() << endl;
    }
    return 0;
}

// Example 3: Exception Safety with RAII
#include <iostream>
#include <memory>
using namespace std;

class ResourceManager {
private:
    int* data;
public:
    ResourceManager(int size) : data(new int[size]) {
        cout << "Resource allocated" << endl;
    }
    
    ~ResourceManager() {
        delete[] data;
        cout << "Resource deallocated" << endl;
    }
    
    void process() {
        throw runtime_error("Processing failed!");
    }
};

int main() {
    try {
        ResourceManager rm(100);
        rm.process();
    } catch (const exception& e) {
        cout << "Exception: " << e.what() << endl;
    }
    return 0;
}

// Example 4: noexcept Specification
#include <iostream>
using namespace std;

void safeFunction() noexcept {
    cout << "This function will not throw exceptions" << endl;
}

void riskyFunction() {
    throw runtime_error("Something went wrong!");
}

int main() {
    safeFunction();
    
    try {
        riskyFunction();
    } catch (const exception& e) {
        cout << "Caught: " << e.what() << endl;
    }
    return 0;
}`,

    "Templates": `
// Example 1: Function Templates
#include <iostream>
using namespace std;

template<typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

template<typename T>
void swap(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    // Using with different types
    cout << "Max of 5 and 10: " << maximum(5, 10) << endl;
    cout << "Max of 3.14 and 2.71: " << maximum(3.14, 2.71) << endl;
    
    int x = 5, y = 10;
    swap(x, y);
    cout << "After swap: x=" << x << ", y=" << y << endl;
    
    return 0;
}

// Example 2: Class Templates
#include <iostream>
using namespace std;

template<typename T>
class Stack {
private:
    T* data;
    int top;
    int capacity;
    
public:
    Stack(int size) : capacity(size), top(-1) {
        data = new T[size];
    }
    
    ~Stack() {
        delete[] data;
    }
    
    void push(T value) {
        if (top < capacity - 1) {
            data[++top] = value;
        }
    }
    
    T pop() {
        if (top >= 0) {
            return data[top--];
        }
        throw runtime_error("Stack is empty!");
    }
    
    bool isEmpty() const {
        return top == -1;
    }
};

int main() {
    Stack<int> intStack(5);
    intStack.push(1);
    intStack.push(2);
    intStack.push(3);
    
    while (!intStack.isEmpty()) {
        cout << intStack.pop() << " ";
    }
    cout << endl;
    
    return 0;
}

// Example 3: Template Specialization
#include <iostream>
using namespace std;

template<typename T>
class Calculator {
public:
    T add(T a, T b) {
        return a + b;
    }
};

// Specialization for strings
template<>
class Calculator<string> {
public:
    string add(string a, string b) {
        return a + " " + b;
    }
};

int main() {
    Calculator<int> intCalc;
    Calculator<string> stringCalc;
    
    cout << "Int addition: " << intCalc.add(5, 3) << endl;
    cout << "String addition: " << stringCalc.add("Hello", "World") << endl;
    
    return 0;
}

// Example 4: Variadic Templates
#include <iostream>
using namespace std;

template<typename T>
T sum(T t) {
    return t;
}

template<typename T, typename... Args>
T sum(T first, Args... args) {
    return first + sum(args...);
}

int main() {
    cout << "Sum of 1, 2, 3, 4: " << sum(1, 2, 3, 4) << endl;
    cout << "Sum of 1.5, 2.5, 3.5: " << sum(1.5, 2.5, 3.5) << endl;
    
    return 0;
}`,

    "Modern C++ Features": `
// Example 1: auto Type Deduction
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // auto for simple types
    auto i = 42;           // int
    auto d = 3.14;         // double
    auto s = "Hello";      // const char*
    auto str = string("World"); // string
    
    cout << "i: " << i << " (type: " << typeid(i).name() << ")" << endl;
    cout << "d: " << d << " (type: " << typeid(d).name() << ")" << endl;
    cout << "s: " << s << " (type: " << typeid(s).name() << ")" << endl;
    
    // auto with iterators
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (auto it = numbers.begin(); it != numbers.end(); ++it) {
        cout << *it << " ";
    }
    cout << endl;
    
    return 0;
}

// Example 2: Range-based for loops
#include <iostream>
#include <vector>
#include <map>
using namespace std;

int main() {
    // Range-based for with vector
    vector<int> numbers = {1, 2, 3, 4, 5};
    for (const auto& num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Range-based for with map
    map<string, int> scores = {{"Alice", 95}, {"Bob", 87}, {"Charlie", 92}};
    for (const auto& [name, score] : scores) {
        cout << name << ": " << score << endl;
    }
    
    return 0;
}

// Example 3: Lambda Expressions
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    
    // Lambda to find even numbers
    auto isEven = [](int n) { return n % 2 == 0; };
    
    // Lambda to square numbers
    auto square = [](int n) { return n * n; };
    
    // Using lambda with algorithm
    vector<int> evenNumbers;
    copy_if(numbers.begin(), numbers.end(), back_inserter(evenNumbers), isEven);
    
    cout << "Even numbers: ";
    for (int num : evenNumbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Lambda with capture
    int multiplier = 3;
    auto multiply = [multiplier](int n) { return n * multiplier; };
    
    cout << "Numbers multiplied by " << multiplier << ": ";
    for (int num : numbers) {
        cout << multiply(num) << " ";
    }
    cout << endl;
    
    return 0;
}

// Example 4: Smart Pointers
#include <iostream>
#include <memory>
using namespace std;

class Resource {
public:
    Resource() { cout << "Resource created" << endl; }
    ~Resource() { cout << "Resource destroyed" << endl; }
    void use() { cout << "Resource being used" << endl; }
};

int main() {
    // unique_ptr - exclusive ownership
    auto unique = make_unique<Resource>();
    unique->use();
    
    // shared_ptr - shared ownership
    auto shared1 = make_shared<Resource>();
    auto shared2 = shared1; // Reference count increases
    shared1->use();
    shared2->use();
    
    // weak_ptr - non-owning reference
    auto weak = weak_ptr<Resource>(shared1);
    if (auto locked = weak.lock()) {
        locked->use();
    }
    
    return 0;
}

// Example 5: Move Semantics
#include <iostream>
#include <vector>
using namespace std;

class StringWrapper {
private:
    string* data;
    
public:
    StringWrapper(const string& str) : data(new string(str)) {
        cout << "Constructor called" << endl;
    }
    
    // Copy constructor
    StringWrapper(const StringWrapper& other) : data(new string(*other.data)) {
        cout << "Copy constructor called" << endl;
    }
    
    // Move constructor
    StringWrapper(StringWrapper&& other) noexcept : data(other.data) {
        other.data = nullptr;
        cout << "Move constructor called" << endl;
    }
    
    ~StringWrapper() {
        delete data;
    }
    
    const string& getData() const { return *data; }
};

StringWrapper createString() {
    return StringWrapper("Hello from function");
}

int main() {
    StringWrapper obj1("Hello");
    StringWrapper obj2 = move(obj1); // Move constructor called
    
    auto obj3 = createString(); // Move constructor called
    
    return 0;
}

// Example 6: constexpr and Structured Bindings
#include <iostream>
#include <tuple>
#include <array>
using namespace std;

// constexpr function
constexpr int factorial(int n) {
    return (n <= 1) ? 1 : n * factorial(n - 1);
}

// constexpr class
class Point {
public:
    constexpr Point(int x, int y) : x_(x), y_(y) {}
    constexpr int x() const { return x_; }
    constexpr int y() const { return y_; }
private:
    int x_, y_;
};

int main() {
    // constexpr usage
    constexpr int result = factorial(5);
    cout << "Factorial of 5: " << result << endl;
    
    constexpr Point p(10, 20);
    cout << "Point: (" << p.x() << ", " << p.y() << ")" << endl;
    
    // Structured bindings
    auto tuple = make_tuple(1, 2.5, "Hello");
    auto [first, second, third] = tuple;
    cout << "Tuple elements: " << first << ", " << second << ", " << third << endl;
    
    array<int, 3> arr = {10, 20, 30};
    auto [a, b, c] = arr;
    cout << "Array elements: " << a << ", " << b << ", " << c << endl;
    
    return 0;
}`,

    "Multithreading": `
// Example 1: Basic Thread Creation
#include <iostream>
#include <thread>
#include <chrono>
using namespace std;

void workerFunction(int id) {
    cout << "Worker " << id << " started" << endl;
    this_thread::sleep_for(chrono::milliseconds(1000));
    cout << "Worker " << id << " finished" << endl;
}

int main() {
    cout << "Main thread started" << endl;
    
    // Create threads
    thread t1(workerFunction, 1);
    thread t2(workerFunction, 2);
    
    // Wait for threads to complete
    t1.join();
    t2.join();
    
    cout << "Main thread finished" << endl;
    return 0;
}

// Example 2: Mutex and Lock Guard
#include <iostream>
#include <thread>
#include <mutex>
#include <vector>
using namespace std;

class BankAccount {
private:
    int balance;
    mutex mtx;
    
public:
    BankAccount(int initial) : balance(initial) {}
    
    void deposit(int amount) {
        lock_guard<mutex> lock(mtx);
        balance += amount;
        cout << "Deposited " << amount << ", new balance: " << balance << endl;
    }
    
    void withdraw(int amount) {
        lock_guard<mutex> lock(mtx);
        if (balance >= amount) {
            balance -= amount;
            cout << "Withdrawn " << amount << ", new balance: " << balance << endl;
        } else {
            cout << "Insufficient funds!" << endl;
        }
    }
    
    int getBalance() {
        lock_guard<mutex> lock(mtx);
        return balance;
    }
};

int main() {
    BankAccount account(1000);
    
    thread t1([&account]() {
        for (int i = 0; i < 5; ++i) {
            account.deposit(100);
            this_thread::sleep_for(chrono::milliseconds(100));
        }
    });
    
    thread t2([&account]() {
        for (int i = 0; i < 5; ++i) {
            account.withdraw(50);
            this_thread::sleep_for(chrono::milliseconds(100));
        }
    });
    
    t1.join();
    t2.join();
    
    cout << "Final balance: " << account.getBalance() << endl;
    return 0;
}

// Example 3: Condition Variables
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
using namespace std;

class ProducerConsumer {
private:
    queue<int> buffer;
    mutex mtx;
    condition_variable cv;
    bool done = false;
    
public:
    void producer() {
        for (int i = 0; i < 10; ++i) {
            unique_lock<mutex> lock(mtx);
            buffer.push(i);
            cout << "Produced: " << i << endl;
            lock.unlock();
            cv.notify_one();
            this_thread::sleep_for(chrono::milliseconds(100));
        }
        
        unique_lock<mutex> lock(mtx);
        done = true;
        cv.notify_all();
    }
    
    void consumer() {
        while (true) {
            unique_lock<mutex> lock(mtx);
            cv.wait(lock, [this] { return !buffer.empty() || done; });
            
            if (buffer.empty() && done) break;
            
            int value = buffer.front();
            buffer.pop();
            cout << "Consumed: " << value << endl;
        }
    }
};

int main() {
    ProducerConsumer pc;
    
    thread producer_thread(&ProducerConsumer::producer, &pc);
    thread consumer_thread(&ProducerConsumer::consumer, &pc);
    
    producer_thread.join();
    consumer_thread.join();
    
    cout << "Producer-Consumer completed" << endl;
    return 0;
}

// Example 4: Future and Promise
#include <iostream>
#include <future>
#include <chrono>
using namespace std;

int calculateFactorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; ++i) {
        result *= i;
        this_thread::sleep_for(chrono::milliseconds(100));
    }
    return result;
}

int main() {
    // Using async with future
    auto future1 = async(launch::async, calculateFactorial, 5);
    auto future2 = async(launch::async, calculateFactorial, 6);
    
    cout << "Calculating factorials..." << endl;
    
    int result1 = future1.get();
    int result2 = future2.get();
    
    cout << "Factorial of 5: " << result1 << endl;
    cout << "Factorial of 6: " << result2 << endl;
    
    return 0;
}

// Example 5: Atomic Operations
#include <iostream>
#include <thread>
#include <atomic>
#include <vector>
using namespace std;

atomic<int> counter(0);

void incrementCounter() {
    for (int i = 0; i < 1000; ++i) {
        ++counter;
    }
}

int main() {
    vector<thread> threads;
    
    // Create multiple threads
    for (int i = 0; i < 5; ++i) {
        threads.emplace_back(incrementCounter);
    }
    
    // Wait for all threads
    for (auto& t : threads) {
        t.join();
    }
    
    cout << "Final counter value: " << counter << endl;
    return 0;
}

// Example 6: Thread Pool Implementation
#include <iostream>
#include <thread>
#include <mutex>
#include <condition_variable>
#include <queue>
#include <functional>
#include <vector>
using namespace std;

class ThreadPool {
private:
    vector<thread> workers;
    queue<function<void()>> tasks;
    mutex queue_mutex;
    condition_variable condition;
    bool stop;
    
public:
    ThreadPool(size_t threads) : stop(false) {
        for (size_t i = 0; i < threads; ++i) {
            workers.emplace_back([this] {
                while (true) {
                    function<void()> task;
                    {
                        unique_lock<mutex> lock(queue_mutex);
                        condition.wait(lock, [this] { return stop || !tasks.empty(); });
                        if (stop && tasks.empty()) return;
                        task = move(tasks.front());
                        tasks.pop();
                    }
                    task();
                }
            });
        }
    }
    
    template<class F>
    void enqueue(F&& f) {
        {
            unique_lock<mutex> lock(queue_mutex);
            tasks.emplace(forward<F>(f));
        }
        condition.notify_one();
    }
    
    ~ThreadPool() {
        {
            unique_lock<mutex> lock(queue_mutex);
            stop = true;
        }
        condition.notify_all();
        for (thread& worker : workers) {
            worker.join();
        }
    }
};

int main() {
    ThreadPool pool(4);
    
    for (int i = 0; i < 8; ++i) {
        pool.enqueue([i] {
            cout << "Task " << i << " executed by thread " 
                 << this_thread::get_id() << endl;
            this_thread::sleep_for(chrono::milliseconds(100));
        });
    }
    
    return 0;
}`,

};
  return examples[lessonTitle] || "// Example code will be provided"
}


const getCppCodeExplanations = (lessonTitle) => {
    const explanations = { 
    "Introduction to C++": `
### Example 1
**What is C++?**
C++ is a high-performance, compiled, general-purpose programming language
that was developed by Bjarne Stroustrup at Bell Labs in the 1980s. 
It is an extension of the C programming language and adds object-oriented 
programming (OOP) features, generic programming, and many other improvements.

**Basic Program Structure**

A C++ program typically consists of the following basic structure:
1. **Preprocessor Directives**: These are lines of code that start with the # symbol 
and are used to include header files, define macros, and perform other tasks before 
the program is compiled.
2. **Header Files**: These are files that contain function declarations, macro 
definitions, and other definitions that can be used by multiple source files.
3. **Main Function**: This is the entry point of the program, where execution begins. 
It is typically defined as \`int main()\` or \`int main(int argc, char* argv[])\`.
4. **Function Definitions**: These are blocks of code that define the behavior of a 
function, including the function name, return type, parameters, and body.
5. **Variable Declarations**: These are statements that declare the existence and 
properties of variables, including their name, data type, and initial value.

### Example 2
**Comments and Documentation**

Comments are used to add notes and explanations to the code, making it easier for
humans to understand. There are two types of comments in C++:
- **Single-Line Comments**: These start with the \`//\` symbol and continue until
the end of the line.
- **Multi-Line Comments**: These start with the \`/*\` symbol and end with the \`*/\` symbol.

### Example 3
 **Input/Output Operations**
Input/output operations are used to interact with the user or other programs. 
In C++, the \`std::cin\` and \`std::cout\` objects are used for input and output 
operations, respectively.
**Note**: that the \`std::cin\` and \`std::cout\` objects are part of the
C++ Standard Library, and must be included using the \`#include\` \`<iostream>\` directive.
`,

    "Variables and Data Types": `
### Example 1
    **Variables and Data Types**
In C++, a variable is a name given to a memory location that stores a value. 
Variables have a data type that determines the type of value they can hold.

**Integer Variables**
Integer variables are used to store whole numbers. Here is an example:

**Explanation**:
- The \`int\` keyword is used to declare the variable \`age\` as an integer.
- The value 25 is assigned to the variable \`age\`using the assignment operator \`=\`.

    **Primitive Data Types**
In C++, primitive data types are the basic building blocks of data. 
They are the fundamental types that can be used to declare variables.
The following code example above demonstrates the use of primitive data types
    **Explanation**:
In the example, we declare and initialize variables of different primitive data types:
\`int\`, \`float\`, \`char\`, and \`bool\`. We then print the values 
of these variables using \`cout\`. 

### Example 2
**Type Modifiers**
Type modifiers are used to modify the behavior of primitive data types.
They can be used to specify the size of the data type, its sign, or its precision. 
The following code example 2 above demonstrates the use of type modifiers

**Explanation**:
In the example, we declare and initialize variables with variables with type modifiers:
- \`unsigned\`:Can't store negative numbers, increases the positive range
- \`long\`:Used for large integers.
- \`short\`: Saves memory when smaller range is enough.
- \`double\`:Used to declare floating-point numbers with double precision.
We then print the values of these variables using \`cout\`.

### Example 3
**Variable Declaration and Initialization**
Variable declaration and initialization are two separate steps in C++. 
Declaration involves specifying the type and name of the variable, 
while initialization involves assigning a value to the variable. 
The following code example 3 above demonstrates the use of variable declaration and initialization.
In this example, we declare variables without initializing them, 
and then initialize them separately.

**Constants**
Constants are values that cannot be changed once they are declared. In C++,
constants can be declared using the \`const\` keyword or the \`#define\` directive.
The follow code example 4 above demonstrates the use of constants

### Example 4
**Type Conversion**
Type conversion involves converting a value from one data type to another. 
In C++, type conversion can be implicit or explicit.
- \`static_cast<Type>()\`: A safe way to convert one type to another.
- Prevents accidental loss of data (e.g., converting float to int truncates decimals).
- Type conversion is essential when performing operations between different data types.
`,

    "Operators":`
### Example 1
    **Arithmetic Operators**
Arithmetic operators are used to perform mathematical operations on variables. 
The follow code example 1 above demonstrates the use of constants
In the example, we use the arithmetic operators \`+\`, \`-\`, \`*\`, \`/\`, and \`%\` to perform
mathematical operations on the variables \`a\` and \`b\`.

**Arithmetic Operators**
| Operator | Description           | Example     | Result |
| :------- | :-------------------- | :---------- | :----- |
| \`+\`      | Addition            | \`4 + 5\`   | \`9\`  |
| \`-\`      | Subtraction         | \`7 - 4\`   | \`3\`  |
| \`*\`      | Multiplication      | \`3 * 4\`   |\`12\`  |
| \`/\`      | Division            | \`15 / 3\`  | \`5\`  |
| \`%\`      | Modulus (remainder) | \`10 % 3\`  | \`1\`  |


### Example 2
**Assignment Operator**are used to assign values to variables.
we use the assignment operator to assign values to the variable \`num\`.

**Assignment Operators**
| Operator | Description                                    | Example        | Result  |
| :------- | :--------------------------------------------- | :------------- | :------ |
| \`=\`      | Assigns value from right to left                | \`x = 5\`        | \`x = 5\` |
| \`+=\`     | Adds right operand to left operand and assigns  | \`x = 3; x += 2\`| \`x = 5\` |
| \`-=\`     | Subtracts right operand and assigns             | \`x = 5; x -= 2\`| \`x = 3\` |
| \`*=\`     | Multiplies right operand and assigns            | \`x = 4; x *= 3\`| \`x = 12\`|
| \`/=\`     | Divides left operand by right operand and assigns| \`x = 10; x /= 2\`| \`x = 5.0\`|
| \`%=\`     | Takes modulus and assigns                       | \`x = 7; x %= 3\`| \`x = 1\` |

### Example 3 
**Comparison Operators**
Comparison operators are used to compare variables.
The follow code example above demonstrates the use of relational operators
In the example, we use the relational operators \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, and \`>=\`
to compare the variables \`a\` and \`b\`.

**Comparison Operators**
| Operator | Description                                   | Example       | Result  |
| :------- | :-------------------------------------------- | :------------ | :------ |
| \`==\`     | Checks if two values are equal                 | \`5 == 5\`      | \`True\`  |
| \`!=\`     | Checks if two values are not equal             | \`5 != 3\`      | \`True\`  |
| \`>\`      | Checks if left value is greater than right     | \`7 > 4\`       | \`True\`  |
| \`<\`      | Checks if left value is less than right        | \`3 < 5\`       | \`True\`  |
| \`>=\`     | Checks if left value is greater or equal       | \`5 >= 5\`      | \`True\`  |
| \`<=\`     | Checks if left value is less or equal          | \`4 <= 6\`      | \`True\`  |

### Example 4
**Logical Operators**
Logical operators are used to combine or invert boolean expressions.
The follow code example 3 above demonstrates the use of logical operators
In the example, we use the logical operators \`&&\`, \`||\`, and \`!\`
to combine or invert boolean expressions.

 **Logical Operators (Truth Table Style)**
| Operator | Description | Example             | Result  |
| :------- | :---------- | :------------------ | :------ |
| \`AND\`    | AND         | \`True and False\`    | \`False\` |
| \`OR\`     | OR          | \`True or False\`     | \`True\`  |
| \`NOT\`    | NOT         | \`not True\`          | \`False\` |

### Example 5
**Bitwise Operators**
Bitwise operators are used to perform operations on individual bits of variables.
The follow code example 4 above demonstrates the use of bitwise operators
In the example, we use the bitwise operators
to perform operations on the bits of the variables \`a\` and \`b\`.

 Operator | Description                          | Example     | Result |
| :------- | :----------------------------------- | :---------- | :----- |
| \`&\`      | AND :Sets each bit to 1 if both are 1 | \`6 & 3\`     | \`2\`    |
| \`|\`      | OR :Sets each bit to 1 if one is 1   | \`6 | 3\`     | \`7\`    |
| \`^\`      | XOR : Sets each bit to 1 if only one is 1 | \`6 ^ 3\` | \`5\`    |
| \`~\`      | NOT : Inverts all the bits            | \`~6\`        | \`-7\`   |
| \`<<\`     | Left Shift : Shifts bits to the left  | \`3 << 2\`    | \`12\`   |
| \`>>\`     | Right Shift : Shifts bits to the right| \`8 >> 2\`    | \`2\`    |


**Ternary Operator**
The ternary operator is a shorthand way of writing a simple if-else statement. 
The follow code example 6 above demonstrates the use of the ternary operator
In the example, we use the ternary operator \`?\`, and \`:\` 
- \`?\` is part of the ternary conditional operator \`condition ? value_if_true : value_if_false\`.
`,

   "Control Flow":`
### Example 1
Control flow statements are used to control the flow of a program's execution.
**if-else Statements**:
- Executes code based on condition
- \`if (condition)\` checks if true, then runs a block
- \`else\` runs if the condition is false
- Useful for making decisions in code

### Example 2
**If-Else If-Else Statement**
- The \`if-else if-else\` statement is used when you want to check multiple conditions in sequence.
- The program tests each condition from top to bottom:
If the first condition (\`if\`) is \`true\`, the block executes and the rest is skipped.
If the first is \`false\`, it moves to the \`else if\` condition.
If none of the conditions are \`true\`, the \`else\` block executes (as a “default case”).
- This prevents checking all conditions unnecessarily, saving time and keeping code clean.

### Example 3
**switch-case Statements**:
- Used for selecting one of many code blocks
- More readable than multiple \`if-else\` when checking a single variable
- Each \`case\` matches a value; \`break\` exits the switch
- \`default\` handles unmatched cases

### Example 4
**For Loop**:
- \`for (initialization; condition; increment)\` structure
- Executes a block of code a specific number of times
- Most common loop for known iteration counts

### Example 5
**While Loop**:
- Continues while a condition is true
- Condition is checked before each iteration
- Useful when the number of iterations is unknown

### Example 6
**Do...While Loop**:
- Similar to while, but checks the condition after the loop body
- Always executes the loop body at least once
- Useful when you need guaranteed one-time execution

### Example 7
**break, continue, goto**:
- \`break\`: exits the current loop immediately
- \`continue\`: skips current iteration and proceeds to next
- \`goto\`: jumps to a labeled part of the code (not recommended; reduces readability)

**Nested Control Structures**:
- Combining loops and conditionals inside one another
- Useful for solving complex problems like grids, games, or multiple condition checks
- Must be careful to avoid confusion and too many levels of nesting
      `,

      "Functions":`
  ### Example 1
**Function Declaration and Definition**:
- Declaration tells the compiler about the function's name, return type, and parameters
- Definition provides the actual implementation (code block)
- Allows modularity and reusability of code

### Example 2
**Parameters and Arguments**:
- Parameters are variables in function definitions
- Arguments are actual values passed during function calls
- Helps pass data into functions for dynamic behavior

### Example 3
**Return Types and Values**:
- Specifies the type of value the function will return
- Use \`void\` if the function returns nothing
- Return values are sent back to the caller using \`return\` keyword

### Example 5
**Function Overloading**:
- Defining multiple functions with the same name but different parameters
- Allows functions to handle different data types or argument counts
- Improves readability and flexibility

### Example 4
**Default Arguments**:
- Allows assigning default values to parameters
- Used when a parameter value may or may not be passed
- Must appear at the end of the parameter list

### Example 6
**Pass by Value vs Pass by Reference**:
- Pass by Value: Function gets a copy of the argument (original unchanged)
- Pass by Reference: Function accesses the actual variable (original can be changed)
- Use reference when you want to modify original or avoid copying large data

**Inline Functions**:
- Defined with \`inline\` keyword
- Suggests compiler to insert the function code directly at the call site
- Can improve speed for small, frequently called functions

 \`Recursion\`:
- Function calls itself directly or indirectly
- Useful for problems that can be broken into smaller sub-problems (e.g., factorial, Fibonacci)
- Must have a base condition to stop recursion `,

      "Arrays and Strings": `
### Example 1
**Array Declaration and Initialization**:
Arrays are used to store multiple values of the same data type in a single variable. 
- Declares a fixed-size sequence of elements of the same type
- Can be initialized during declaration: \`int scores[] = {90, 80, 70, 60};\`
- Indexing starts from 0

### Example 2
**Array Manipulation**:
Arrays can be manipulated using various techniques such as indexing, slicing, and concatenation. 
- Access elements via index, loop through with loops
- Can update, insert, or delete manually (not dynamic)
- Careful with bounds to avoid undefined behavior


### Example 3
**Multi-dimensional Arrays**:
Multi-dimensional arrays are used to store data in a table-like structure.
- Arrays with more than one dimension (e.g., matrix)
- Syntax: \`int matrix[2][3];\`
- Accessed using multiple indices: \`matrix[0][1]\`

### Example 4
**C-style Strings**:
C-style strings are used to store character arrays.
- Arrays of characters ending with a null character (\`0\`)
- Stored in \`char[]\` arrays
- Handled manually using functions like \`strcpy, strlen\`

### Example 5
**std::string Class**:
The std::string class is used to store and manipulate strings in C++.
- C++ Standard Library string type
- More flexible, safer than C-style strings
-Provides functions like \`.length()\`, \`.substr()\`, \`.find()\`

**Common Array Algorithms**:
Arrays can be searched, sorted, and manipulated using various algorithms.
- **Searching**: Linear Search, Binary Search
- **Sorting**: Bubble Sort, Selection Sort, or use \`std::sort()\`
- Efficient algorithms improve performance for large arrays

**Array Limitations and Alternatives**:
Arrays have several limitations, including fixed size, lack of 
dynamic memory allocation, and limited functionality
- **Fixed size**; size must be known at compile time
- Manual memory and bound management

**Alternatives**: 
There are several alternatives to arrays in C++, including:
- **Vectors**: dynamic arrays that can grow or shrink in size
- **Lists**: dynamic collections of elements that can be inserted or removed
- **Maps**: associative containers that store key-value pairs
- **Sets**: unordered collections of unique elements`, 

    "Pointers and References": `
### Example 1
**Pointer Declaration and Initialization**:
- Pointers are variables that store the memory address of another variable.
In the example, we declare a variable \`x\` and a pointer \`px\`. We then initialize
the pointer \`px\` to point to the variable \`x\`. Finally, we print the value of the 
pointer \`px\` and the value of the variable pointed to by the pointer.
- Must be initialized before use

### Example 2
**Pointer Arithmetic**:
Pointers can be used to perform arithmetic operations, such as 
incrementing or decrementing the pointer. 
- Supports operations like increment (next memory location)
- Mainly used in array traversal
- Risky if used incorrectly (can lead to memory corruption)

### Example 3
**Pointers and Arrays**:
- Array name is a pointer to its first element
- Pointers can iterate over arrays
- Use with care to avoid accessing out-of-bound memory

### Example 4
**References vs Pointers**:
References and pointers are both used to access variables indirectly, 
but they have some key differences.
- **References**: alias to an existing variable, must be initialized
- **Pointers**: hold address, can be reassigned, may be null
In the example, we declare a variable \`x\`, a reference \`r\`, and a pointer \`p\`. 
We then initialize the reference \`r\` to refer to the variable \`x\` and the pointer \`p\` 
to point to the variable \`x\`. We print the value of the reference, the value of the 
pointer, and the value of the variable pointed to by the pointer.
**Note**: References are safer and easier to use

### Example 5
**Dynamic Memory Allocation (new/delete)**:
Dynamic memory allocation is used to allocate memory at runtime. 
- Allocates memory during runtime using \`new\`
- Must be released using \`delete\`
**Note**: Useful when size is unknown at compile time

**Smart Pointers (unique_ptr, shared_ptr)**:
Smart pointers are used to automatically manage dynamic memory allocation 
and deallocation.
- Prevent memory leaks and dangling pointers
- \`unique_ptr\` single owner, \`shared_ptr\`: multiple owners
In the example above, we declare a \`unique_ptr\` and a \`shared_ptr\` and allocate 
memory using \`new\`. We then assign values to the allocated memory and print 
their values. The \`unique_ptr\` will automatically deallocate the memory when 
it goes out of scope, while the \`shared_ptr\` will automatically deallocate 
the memory when the last shared pointer to it goes out of scope.

**Pointer Pitfalls and Best Practices**:
Pointers can be tricky to use and can lead to common pitfalls such as:
- **Dangling pointers**: pointers that point to memory that has already been deallocated.
- **Wild pointers**: pointers that point to arbitrary locations in memory.
- **Null pointer dereferences**: attempting to access memory through a null pointer.

To avoid these pitfalls, it's best to follow best practices such as:
- Always initialize pointers to null or a valid memory location.
- Always check for null pointer dereferences before accessing memory.
- Always deallocate memory when it's no longer needed.
- Use smart pointers to automatically manage dynamic memory allocation and deallocation.
By following these best practices, you can write safer and more efficient code that 
avoids common pointer pitfalls.`,

     "Foundational Object-Oriented Programming Concepts": `
### Example 1
OOP (Object-Oriented Programming) in C++ is a programming paradigm that organizes code into objects rather than just functions and data.
- An object represents a real-world entity (like a student, car, bank account).
- A class is the blueprint for creating objects.
The main idea is to make programs more modular, reusable, and easier to maintain by modeling them around real-world concepts.

**Classes and Objects**:
A class is a blueprint or a template for creating objects. In the example above, 
\`Car\` is a class that defines a set of attributes (brand, model, year) and behaviors (\`displayDetails()\`). 
An object is an instance of a class. \`myCar\` is an object of the \`Car\` class. We can access its member variables 
and functions using the dot operator (\`.\`) to set its state and invoke its behaviors.

### Example 2
**Constructors and Destructors**:
A constructor is a special member function that's automatically called when an object is created. 
It's used to initialize an object's state. It has the same name as the class and no return type. 
A destructor is also a special member function, prefixed with a tilde (~), that is automatically called 
when an object is about to be destroyed. It's used for cleanup, such as releasing dynamically allocated memory.

### Example 3
**Encapsulation (Access Specifiers)**:
Encapsulation is the process of bundling data (member variables) and the methods that operate on that data (member functions) 
into a single unit, the class. It allows for data hiding. Access specifiers (\`public\`, \`private\`, \`protected\`) control the visibility of class members. 
\`private\` members, like \`balance\`, are only accessible within the class itself, protecting the data from direct, unauthorized modification. 
\`public\` members, like \`deposit()\` and \`getBalance()\`, provide the controlled interface for interacting with the object.`,

  "Advanced bObject-Oriented Programming Concepts": `
### Example 1 
This part delves into the more powerful and flexible features of OOP that enable code reuse and dynamic behavior. 
These topics are crucial for building complex, scalable, and maintainable applications.

**Inheritance (Single, Multiple, Multilevel)**:
Inheritance allows a new class (derived class) to reuse and extend the functionality of an existing class (base class). This promotes code reuse and a hierarchical structure.
- **Single inheritance**: is when a class inherits from one base class. 
- **Multilevel inheritance**: is a chain, where a class inherits from a class that already inherited from another.
- **Multiple inheritance**: is when a class inherits from more than one base class.

### Example 2
**Polymorphism (Virtual Functions)**:
Polymorphism means "many forms." In C++, it allows objects of different classes to be treated as objects of a common base class. 
Virtual functions enable this runtime polymorphism. By declaring \`makeSound()\` as \`virtual\` in the base class \`Animal\`, 
the program determines which version of the function to call based on the actual type of the object pointed to by \`myAnimal\` at runtime, 
rather than its declared type. The \`override\` keyword is a good practice to ensure the function is indeed overriding a virtual function from the base class.

### Example 3
**Abstract Classes and Interfaces**:
An abstract class is a class that cannot be instantiated on its own because it contains at least one pure virtual function. 
A pure virtual function is declared by assigning \`= 0\` to its declaration (\`virtual double getArea() = 0;\`). 
It forces derived classes to provide their own implementation for that function, ensuring a common interface. An interface is a class that contains only pure virtual functions and no data members. 
It serves as a contract for derived classes.

### Example 4
**Static**:
Static members (variables and functions) belong to the class itself, not to any specific object. A static member variable is shared by all objects of the class; there is only one copy of it, regardless of how many objects are created. 
A static member function can only access other static members of the class. They are useful for tracking global state related to the class, such as the number of objects created.

### Example 5
**Friend functions and classes**
A friend function or friend class is a non-member function or a class that is granted special access to the \`private\` and \`protected\` members of another class. 
This breaks encapsulation but can be necessary in certain design patterns, such as operator overloading. In the example, \`displayDetails()\` is a standalone function that is not a member of the \`Student\` class, 
but because it is declared as a friend, it can directly access the \`private\` members \`name\` and \`id\` of the \`Student\` object.

*I hope this explanation helps you understand the concepts of 
object-oriented programming in C++*
`,
 
        "STL Containers": `
### Example 1
**Vector**
- Dynamic array implementation that automatically resizes
- Provides constant-time random access to elements using index
- Efficient insertion and deletion at the end only
- Memory is allocated contiguously for optimal cache performance
- Best choice when you need array-like behavior with dynamic sizing

### Example 2
**List** 
- Doubly-linked list implementation allowing bidirectional traversal
- Efficient insertion and deletion at any position in constant time
- No random access - elements must be accessed sequentially through iterators
- Memory is not contiguous, each element can be anywhere in memory
- Ideal when frequent insertion/deletion in middle is required

### Example 3
**Stack**
- LIFO (Last In, First Out) container adapter
- Built on top of underlying container (deque by default)
- Only allows access to the top element
- Essential for recursive algorithms, expression parsing, and undo operations
- No iterators provided - access is restricted to maintain LIFO behavior

### Example 4
**Queue**
- FIFO (First In, First Out) container adapter  
- Elements enter at back and leave from front
- Perfect for scheduling tasks, breadth-first search, and buffering
- Maintains order of insertion unlike stack
- Built on deque by default for efficient front and back operations

### Example 5
**Set**
- Stores unique elements in automatically sorted order
- Implemented as balanced binary search tree (usually Red-Black tree)
- Duplicate insertions are silently ignored
- Logarithmic time complexity for search, insertion, and deletion
- Excellent for membership testing and maintaining sorted unique collections

### Example 6
**Map**
- Key-value pair container with unique, sorted keys
- Fast lookup by key with logarithmic complexity
- Keys are automatically sorted, enabling range queries
- Values can be accessed and modified using bracket notation
- Essential for implementing dictionaries and lookup tables

### Example 7
**Multimap**
- Similar to map but allows duplicate keys
- Multiple values can be associated with the same key
- Maintains sorted order of keys
- Useful when one-to-many relationships need to be stored
- Requires special handling for accessing multiple values per key

### Example 8
**Multiset**
- Like set but permits duplicate values
- All elements are stored in sorted order including duplicates
- Count operations can determine frequency of elements
- Useful for frequency counting and maintaining sorted collections with repetitions
- Supports all set operations but with duplicate awareness

### Example 9
**Priority Queue**
- Max-heap implementation by default (largest element at top)
- Elements are automatically ordered by priority, not insertion order
- Built on vector and uses heap algorithms internally
- Only top element is accessible - no iterators provided
- Perfect for implementing scheduling algorithms and finding extremes efficiently

### Example 10
**Deque (Double-ended Queue)**
- Combines benefits of vector and list
- Efficient insertion and deletion at both front and back
- Provides random access like vector but with more complex memory structure
- Better than vector when you need frequent front insertions
- Internally uses multiple memory blocks for flexibility

### Example 11
**Bitset**
- Fixed-size sequence of bits with efficient space usage
- Each bit can be individually set, cleared, or tested
- Provides bitwise operations and easy conversion to strings
- Memory efficient - uses only one bit per boolean value
- Ideal for flags, boolean arrays, and bit manipulation algorithms

### Example 12
**Array**
- Fixed-size container that wraps traditional C arrays
- Provides STL container interface with bounds checking options
- Size is determined at compile time and cannot be changed
- More efficient than vector for fixed-size data
- Offers modern C++ features while maintaining array performance

### Example 13
**Tuple**
- Heterogeneous container that can hold different types together
- Elements accessed by index using \`get()\` function
- Size and types are fixed at compile time
- Perfect for returning multiple values from functions
- Can be unpacked using structured bindings in modern C++

### Example 14
**Unordered Set**
- Hash table implementation providing average \`O(1)\` operations
- No guaranteed order of elements unlike regular set
- Faster than set for simple membership testing
- Performance depends on quality of hash function
- Best choice when ordering is not important but speed is critical`,

    "File Handling": `
### Example 1
**File Streams (ifstream, ofstream, fstream)**
File handling in C++ is managed through the \`<fstream>\` library, which provides classes to link your program to files on the disk. 
The primary classes are \`ofstream\` for writing, \`ifstream\` for reading, and \`fstream\` for both.

File Streams (\`ifstream\`, \`ofstream\`, \`fstream\`): These classes manage the connection between your program and the file.
- \`ofstream\`: Output file stream, used for writing data to a file.
- \`ifstream\`: Input file stream, used for reading data from a file.
- \`fstream\`: File stream, used for both reading and writing.

**Code Explanation**
- \`ofstream outFile("example.txt");\` → Opens (or creates) a file for writing.
- \`outFile << ...\` → Writes data into the file.
- \`ifstream inFile("example.txt");\` → Opens the file for reading.
- \`getline()\` → Reads a line from the file into \`content\`.
- Always use \`.close()\` to release resources.

### Example 2 
**Opening and Closing Files**: 
A file stream object is opened by calling its \`open()\` method or by passing the filename directly to the constructor. 
It's crucial to check if the file opened successfully. The \`is_open()\` method returns \`true\` if the file is successfully opened. 
Files are automatically closed when the file stream object goes out of scope, but you can also explicitly close them using the \`close()\` method.

**Code Explanation**
- \`ios::out\` → Open file for writing.
- \`ios::in\` → Open file for reading.
- Other modes include \`ios::app\` (append), \`ios::binary\` (binary mode), \`ios::ate\` (open at end).


### Example 3
**Writing and Reading a text File**
The example first creates an \`ofstream\` object named \`outFile\` to write to \`example.txt\`. 
The \`<<\` operator works similarly to \`std::cout\`, writing data to the file. We then create an \`ifstream\` 
object named \`inFile\` to read from the same file. The \`std::getline\` function is used to read a full 
line of text, including spaces, into the \`line\` string until the end of the file is reached. Both streams are closed using \`.close()\` after their operations are complete.

### Example 4 
Binary file operations deal with raw data, byte by byte. This is crucial for storing things like images, executable files, or structured data without text formatting.

**Code Explanation**
When working with binary files, we must open the stream in binary mode using \`std::ios::binary\`. To write, we use the \`.write()\` method, which takes a pointer to the data 
and the number of bytes to write. The \`reinterpret_cast<char*>\` is necessary to convert the \`Point\` object's address to a generic byte pointer. Similarly, to read, we use the \`.read()\` 
method with the address of a \`Point\` object.

### Example 5 
**File Position Pointers**
File streams have internal pointers that keep track of the current position for reading (\`g\` for get) and writing (\`p\` for put).
- \`seekg()\`: Moves the get (reading) pointer to a specific position.
- \`seekp()\`: Moves the put (writing) pointer to a specific position.
- \`tellg()\`: Returns the current position of the get pointer.
- \`tellp()\`: Returns the current position of the put pointer.

**Code Explanation**
The \`fstream\` is opened in both output and input mode (\`std::ios::out | std::ios::in\`) and truncates any existing content (\`std::ios::trunc\`). 
We write the alphabet. Then, we use \`seekg(10)\` to move the read pointer to the 10th index to read the character 'K'. 
Then, \`seekp(10)\` moves the write pointer to the same spot to overwrite it with 'X'. Reading the file again from the beginning (\`seekg(0)\`) shows the change.

### Example 6
**Error Handling in File Operations**
Proper error handling is crucial for robust programs. The C++ streams provide several ways to check for errors.

- \`is_open()\`: Checks if the file stream was successfully opened.
- \`good()\`: Returns true if the stream is in a good state (no errors).
- \`eof()\`: Returns true if the end of the file has been reached.
- \`fail()\`: Returns true if an I/O operation failed.
- \`bad()\`: Returns true if a serious I/O error occurred.
- \`exceptions()\`: Allows you to configure the stream to throw exceptions on errors.

**Code Explanation**
The example demonstrates checking for common errors. We attempt to open a file that doesn't exist, 
which causes \`inFile.fail()\` to return \`true\`. The program then prints an error message and exits. 
Inside the \`while\` loop for reading, the loop condition itself handles checking the stream's state. 
After the loop, we can check for \`eof()\` to confirm that we reached the end of the file naturally, or \`fail()\` to see if a different error occurred.

### Example 7
**Serialization Basics**
Serialization is the process of converting an object's state into a format that can be stored (e.g., in a file) or transmitted. Deserialization is the reverse process.

**Code Explanation**
This example shows a manual approach to serialization. The \`serialize\` method of the \`Student\` class writes its data members to a binary file. For the string, we first write 
its length and then the actual string data to ensure we know how many characters to read back. The \`deserialize\` method performs the reverse process, reading the size of the string first, 
then resizing the string to the correct size before reading the data. This technique is more reliable than simply writing the object directly, especially for objects containing dynamic data like strings.
`,

   "Exception Handling": `
### Example 1
**try, catch, throw Mechanism**
- try block contains code that might throw exceptions
- catch blocks handle specific exception types
- throw statement raises exceptions and transfers control
- Stack unwinding automatically cleans up local objects
- Exception handling separates error handling from normal program flow

### Example 2
**Custom Exception Classes**
- Inherit from \`std::exception\` or its derived classes
- Override \`what()\` method to provide meaningful error messages
- Include relevant context information in exception objects
- Design lightweight exception classes for performance
- Enable domain-specific error handling strategies

### Example 3
**Exception Safety Guarantees**
- Basic guarantee: no resource leaks, objects remain valid
- Strong guarantee: operation succeeds completely or has no effect
- No-throw guarantee: operation never throws exceptions
- RAII (Resource Acquisition Is Initialization) ensures exception safety
- Design functions with appropriate safety levels for robustness

### Example 4
**noexcept Specification**
- Indicates functions that guarantee not to throw exceptions
- Enables compiler optimizations and better performance
- Required for move constructors and destructors
- Part of function signature in modern C++
- Helps with template instantiation and overload resolution

**Best Practices**
- Use exceptions for exceptional conditions, not normal control flow
- Throw by value, catch by const reference to avoid slicing
- Design exception-safe code from the beginning
- Prefer RAII over manual resource management
- Document exception specifications for library interfaces`,

        "Templates": `  
### Example 1
**Function Templates**
- Generic functions that work with multiple types
- Template parameters are deduced from function arguments
- Compiler generates separate instances for each type used
- Enable code reuse without sacrificing type safety
- Template argument deduction reduces the need for explicit specification

### Example 2
**Class Templates**
- Generic classes parameterized by types or values
- Template arguments must be explicitly specified when instantiating
- Member functions are instantiated only when called
- Enable creation of type-safe generic containers and algorithms
- Template parameters can have default arguments

### Example 3
**Template Specialization**
- Full specialization provides complete alternative implementation
- Partial specialization allows specialization for type categories
- Enables optimization for specific types or type patterns
- Specializations are selected automatically by compiler
- Essential for handling special cases in generic code

### Example 4
**Variadic Templates**
- Accept variable number of template arguments
- Parameter packs represent zero or more arguments
- Recursive processing is common pattern for parameter pack expansion
- Enable implementation of flexible generic functions
- Foundation for modern C++ features like std::tuple and std::function

**Template Metaprogramming**
- Computation performed at compile time using templates
- Type traits provide information about types at compile time
- SFINAE (Substitution Failure Is Not An Error) enables conditional compilation
- Template metaprogramming can generate optimized code
- Advanced technique requiring careful design and testing

**STL Template Design**
- Separation of algorithms from data structures through iterators
- Generic programming principles maximize code reuse
- Template specialization handles special cases efficiently
- Consistent interfaces across different container types
- Policy-based design allows customization of behavior`,


        "Modern C++ Features": `  
### Example 1
**auto Type Deduction**
- Compiler automatically deduces variable types from initializers
- Reduces verbosity especially with complex template types
- Improves maintainability when types change
- Must be initialized when declared
- Works with functions, lambdas, and range-based for loops

### Example 2
**Range-based for Loops**
- Simplified syntax for iterating over containers
- Automatically calls \`begin()\` and \`end()\` on containers
- Supports const auto& for read-only access
- Works with arrays, containers, and initializer lists
- Eliminates iterator management and reduces errors

### Example 3
**Lambda Expressions**
- Anonymous function objects defined inline
- Capture variables from enclosing scope by value or reference
- Perfect for STL algorithms and callback functions
- Can be mutable to modify captured values
- Enable functional programming patterns in C++

### Example 4
**Smart Pointers**
- Automatic memory management through RAII
- \`unique_ptr\` provides exclusive ownership with zero overhead
- \`shared_ptr\` enables shared ownership with reference counting
- \`weak_ptr\` breaks circular references in shared_ptr chains
- Eliminate manual memory management and prevent leaks


### Example 5
**Move Semantics**
- Rvalue references (\`&&\`) enable efficient resource transfer
- Move constructors and assignment operators transfer ownership
- Eliminates unnecessary copying of expensive objects
- Automatic move semantics for temporary objects
- Fundamental for efficient modern C++ code

### Example 6
**constexpr**
- Enables compile-time evaluation of expressions and functions
- Values computed at compile time improve runtime performance
- Functions can be called at both compile time and runtime
- Essential for template metaprogramming and constant expressions
- Enables more powerful generic programming techniques

**Structured Bindings**
- Unpacks multiple values from functions or objects into named variables
- Works with tuples, pairs, arrays, and custom types
- Improves readability for functions returning multiple values
- Eliminates need for \`std::tie\` or manual member access
- Makes working with structured data more convenient,`,

        "Multithreading": `
### Example 1
**Thread Creation and Management**
- \`std::thread\` represents individual threads of execution
- Threads execute concurrently with main program
- Must be joined or detached before thread object destruction
- Thread functions can accept arguments passed during construction
- Provides unique thread identification for debugging

### Example 2
**Mutex and Synchronization**
- \`std::mutex\` provides mutual exclusion for shared resources
- lock_guard provides RAII-based automatic lock management
- Prevents data races and ensures thread-safe access
- Different mutex types available for specific use cases
- Essential for protecting shared data in multithreaded programs

### Example 3
**Condition Variables**
- Enable threads to wait for specific conditions
- Coordinate between producer and consumer threads
- Must be used with unique_lock for flexibility
- \`notify_one()\` and \`notify_all()\` wake waiting threads
- Prevent busy waiting and improve efficienc

### Example 4
**Future and Promise**
- Type-safe communication channel between threads
- future represents value that will be available later
- promise provides the value to corresponding future
- Exception propagation across thread boundaries
- One-time communication mechanism

### Example 5
**Atomic Operations**
- Lock-free operations on primitive types
- Guaranteed to be indivisible across threads
- Memory ordering options control synchronization behavior
- Compare-and-swap operations enable lock-free algorithms
- Higher performance than mutex-based synchronization for simple operations

### Example 6
**Thread Pools**
- Reuse worker threads for multiple tasks
- Reduces thread creation and destruction overhead
- Task queue distributes work among available threads
- Controlled concurrency level prevents resource exhaustion
- Essential pattern for server applications

**Deadlock Prevention**
- Lock ordering prevents circular wait conditions
- Timeout-based locking allows deadlock recovery
- \`std::lock()\` acquires multiple locks atomically
- Lock-free programming eliminates deadlock possibility
- Critical for robust multithreaded applications`,

    };
    return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};

const  getCppExercises = (lessonTitle) => {
    const exercises = { 
    "Introduction to C++": `
- Write a simple C++ program that prints 'Hello, C++'.
- Explain the difference between C and C++.
- What is the purpose of '#include <iostream>'?
- Describe the structure of a basic C++ program.
  `,

  "Variables and Data Types": `
- Declare variables of type int, float, char, and bool in C++.
- Write a program that takes an integer input and prints it.
- What is the difference between signed and unsigned variables?
- Explain type casting with an example.
  `,

  "Operators": `
- Write a program that adds, subtracts, multiplies, and divides two numbers.",
- Explain the difference between '==' and '='.",
- Use logical operators to check if a number is between 10 and 20.",
- Write a program that demonstrates the use of the modulus operator."
  `,

  "Control Flow": `
- Write a program that checks if a number is even or odd.
- Use a switch statement to print the day of the week based on a number input (1–7).
- Write a for loop to print numbers from 1 to 10.
- What’s the difference between while and do-while loops? Show with examples.
  `,

  "Functions":`
- Write a function that takes two integers and returns their sum.
- Explain the difference between call by value and call by reference.
- Write a function that returns the factorial of a number.
- Create an overloaded function for adding integers and floats.
`,

  "Arrays and Strings": `
- Declare and initialize an array of 5 integers.
- Write a program to find the largest element in an array.
- Declare a string and print its length using built-in functions.
- Write a program to reverse a string.
  `,

  "Pointers and References": `
- Declare a pointer to an integer and assign it the address of a variable.
- Write a program that swaps two numbers using pointers.
- What is the difference between pointer and reference?
- Demonstrate how to use a reference to modify a variable.
  `,

  "Object-Oriented Programming": `
- Define a class 'Car' with attributes and methods.
- Demonstrate constructor overloading in a class.
- Write a program that implements inheritance.
- What is polymorphism? Give an example with virtual functions.
  `,

  "STL Containers": `
- Create a vector and add 5 elements to it.
- Write a program to sort elements in a vector.
- Demonstrate the use of map to store key-value pairs.
- Write a program that uses set to store unique integers.
  `,

  "File Handling":`
- Write a program to create and write to a file.
- Read content from a text file and display it.
- Append new content to an existing file.
- Explain the difference between ifstream, ofstream, and fstream.
  `,

  "Exception Handling": `
- Write a program that handles division by zero using try-catch.
- Throw a custom exception if user enters a negative number.
- Explain the use of multiple catch blocks.
- What happens if no catch block matches the thrown exception?
  `,

  "Templates": `
- Write a function template for finding the maximum of two values.
- Create a class template for a generic stack.
- What is the advantage of using templates in C++?
- Demonstrate the use of 'template<typename T>' in a program.
  `,

  "Modern C++ Features": `
- Use 'auto' to declare variables and infer types.
- Write a lambda function that adds two numbers.
- Demonstrate 'nullptr' and explain how it differs from 'NULL'.
- Explain and demonstrate the use of smart pointers (unique_ptr, shared_ptr).
  `,

  "Multithreading": `
- Create a thread using std::thread to print numbers from 1 to 5.
- Use join() to synchronize threads.
- What are race conditions and how can they be avoided?
- Demonstrate use of a mutex to protect shared data. `

         };
    return exercises[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};

const  getCppQuiz = (lessonTitle) => {
    const quizzes = { 
  
  "Introduction to C++": [
    {
      question: "Who developed C++?",
      options: [
        "Dennis Ritchie",
        "Bjarne Stroustrup",
        "James Gosling"
      ],
      correctAnswer: 1
    },
    {
      question: "Which language is C++ based on?",
      options: [
        "Java",
        "C",
        "Python"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of these is a C++ file extension?",
      options: [
        ".cpp",
        ".java",
        ".py"
      ],
      correctAnswer: 0
    }
  ],

  "Variables and Data Types": [
    {
      question: "Which is a valid variable declaration in C++?",
      options: [
        "int 2value;",
        "int value2;",
        "int-value;"
      ],
      correctAnswer: 1
    },
    {
      question: "Which data type is used to store decimal values?",
      options: [
        "int",
        "char",
        "float"
      ],
      correctAnswer: 2
    },
    {
      question: "Which keyword is used to declare a constant variable?",
      options: [
        "static",
        "const",
        "fixed"
      ],
      correctAnswer: 1
    }
  ],

  "Operators": [
    {
      question: "Which operator is used to access members of a structure?",
      options: [
        ".",
        "&",
        "*"
      ],
      correctAnswer: 0
    },
    {
      question: "Which operator is used for logical AND?",
      options: [
        "&&",
        "||",
        "&"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is the modulus operator?",
      options: [
        "%",
        "*",
        "/"
      ],
      correctAnswer: 0
    }
  ],

  "Control Flow": [
    {
      question: "Which keyword is used for decision making?",
      options: [
        "if",
        "loop",
        "define"
      ],
      correctAnswer: 0
    },
    {
      question: "Which loop checks the condition after executing the loop body?",
      options: [
        "for",
        "while",
        "do-while"
      ],
      correctAnswer: 2
    },
    {
      question: "Which statement is used to exit a loop early?",
      options: [
        "continue",
        "return",
        "break"
      ],
      correctAnswer: 2
    }
  ],

  "Functions": [
    {
      question: "What is the default return type of a function in C++?",
      options: [
        "void",
        "int",
        "float"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a function that calls itself called?",
      options: [
        "Virtual function",
        "Constructor",
        "Recursive function"
      ],
      correctAnswer: 2
    },
    {
      question: "Which keyword is used to define a function?",
      options: [
        "define",
        "function",
        "None of the above"
      ],
      correctAnswer: 2
    }
  ],

  "Arrays and Strings": [
    {
      question: "What is the index of the first element in an array?",
      options: [
        "0",
        "1",
        "-1"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the correct way to declare a string in C++?",
      options: [
        "string name;",
        "String name;",
        "str name;"
      ],
      correctAnswer: 0
    },
    {
      question: "How are arrays stored in memory?",
      options: [
        "Randomly",
        "Contiguously",
        "Separately"
      ],
      correctAnswer: 1
    }
  ],

  "Pointers and References": [
    {
      question: "Which symbol is used to declare a pointer?",
      options: [
        "*",
        "&",
        "@"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the '&' operator do?",
      options: [
        "Creates a pointer",
        "Returns the address of a variable",
        "Multiplies two values"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a null pointer?",
      options: [
        "A pointer with unknown value",
        "A pointer with zero value",
        "A pointer that points to garbage"
      ],
      correctAnswer: 1
    }
  ],

  "Object-Oriented Programming": [
    {
      question: "Which OOP principle allows using the same function name with different arguments?",
      options: [
        "Inheritance",
        "Polymorphism",
        "Encapsulation"
      ],
      correctAnswer: 1
    },
    {
      question: "Which keyword is used to create a class?",
      options: [
        "object",
        "define",
        "class"
      ],
      correctAnswer: 2
    },
    {
      question: "Which feature hides the internal details of an object?",
      options: [
        "Abstraction",
        "Encapsulation",
        "Polymorphism"
      ],
      correctAnswer: 1
    }
  ],

  "STL Containers": [
    {
      question: "Which of the following is a sequence container in STL?",
      options: [
        "map",
        "vector",
        "set"
      ],
      correctAnswer: 1
    },
    {
      question: "Which container stores elements in key-value pairs?",
      options: [
        "vector",
        "map",
        "list"
      ],
      correctAnswer: 1
    },
    {
      question: "Which STL container does not allow duplicate elements?",
      options: [
        "multiset",
        "set",
        "vector"
      ],
      correctAnswer: 1
    }
  ],

  "File Handling": [
    {
      question: "Which header is required for file handling?",
      options: [
        "<iostream>",
        "<fstream>",
        "<file>"
      ],
      correctAnswer: 1
    },
    {
      question: "Which class is used to write into files?",
      options: [
        "ifstream",
        "ofstream",
        "fstream"
      ],
      correctAnswer: 1
    },
    {
      question: "Which function is used to close a file?",
      options: [
        "end()",
        "finish()",
        "close()"
      ],
      correctAnswer: 2
    }
  ],

  "Exception Handling": [
    {
      question: "Which keyword is used to catch exceptions?",
      options: [
        "handle",
        "try",
        "catch"
      ],
      correctAnswer: 2
    },
    {
      question: "Which block is used to throw an exception?",
      options: [
        "try",
        "catch",
        "throw"
      ],
      correctAnswer: 2
    },
    {
      question: "Which class is the base of all exception types?",
      options: [
        "error",
        "exception",
        "std"
      ],
      correctAnswer: 1
    }
  ],

  "Templates": [
    {
      question: "What is the main use of templates?",
      options: [
        "For styling code",
        "For file handling",
        "For generic programming"
      ],
      correctAnswer: 2
    },
    {
      question: "Which keyword defines a template?",
      options: [
        "define",
        "template",
        "generic"
      ],
      correctAnswer: 1
    },
    {
      question: "Templates allow functions and classes to operate on:",
      options: [
        "Only integers",
        "Any data type",
        "Only strings"
      ],
      correctAnswer: 1
    }
  ],

  "Modern C++ Features": [
    {
      question: "Which feature was introduced in C++11?",
      options: [
        "Lambda expressions",
        "Class inheritance",
        "Virtual functions"
      ],
      correctAnswer: 0
    },
    {
      question: "Which keyword was added in C++11 to prevent copying?",
      options: [
        "static",
        "delete",
        "default"
      ],
      correctAnswer: 1
    },
    {
      question: "Which C++ version introduced smart pointers?",
      options: [
        "C++98",
        "C++11",
        "C++03"
      ],
      correctAnswer: 1
    }
  ],

  "Multithreading": [
    {
      question: "Which header is used for multithreading in C++11?",
      options: [
        "<thread>",
        "<pthread.h>",
        "<multithread>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which class is used to create a thread in C++?",
      options: [
        "std::thread",
        "threading",
        "pthread"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the join() function do in threads?",
      options: [
        "Runs a thread",
        "Stops a thread",
        "Waits for a thread to finish"
      ],
      correctAnswer: 2
    }
  ]

     };
   
  // Ensure we always return an array of quiz question objects; never a string fallback
  return Array.isArray(quizzes[lessonTitle]) ? quizzes[lessonTitle] : [];
};




module.exports = {
    getCppLessonConcepts,
    getCppCodeExamples,
    getCppCodeExplanations,
    getCppExercises,
    getCppQuiz
    };