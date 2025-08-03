
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
    "Object-Oriented Programming": `
- Classes and objects
- Constructors and destructors
- Encapsulation (access specifiers)
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
      // Hello World Program
      #include <iostream>
      using namespace std;
      int main() {
        cout << "Hello, World!" << endl;
        return 0;
      }

      // This is a single-line comment

       /*
         This is a multi-line comment
         that spans multiple lines
         */

        //Input/Output Operations 
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

// Function to print a message
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

// Function to add two numbers
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

// Function to calculate the area of a rectangle
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

// Function to print a message with default parameters
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

    "Object-Oriented Programming": `
    // Example 1: Classes and Objects
#include <iostream>
using namespace std;

class Car {
  private:
    string brand;
    string model;
    int year;

  public:
    Car(string b, string m, int y) {
      brand = b;
      model = m;
      year = y;
    }

    void displayInfo() {
      cout << "Brand: " << brand << endl;
      cout << "Model: " << model << endl;
      cout << "Year: " << year << endl;
    }
};

int main() {
  Car myCar("Toyota", "Corolla", 2015);
  myCar.displayInfo();
  return 0;
}

// Example 2: Inheritance
#include <iostream>
using namespace std;

class Animal {
  protected:
    string name;

  public:
    Animal(string n) {
      name = n;
    }

    void eat() {
      cout << name << " is eating." << endl;
    }
};

class Dog : public Animal {
  public:
    Dog(string n) : Animal(n) {}

    void bark() {
      cout << name << " is barking." << endl;
    }
};

int main() {
  Dog myDog("Fido");
  myDog.eat();
  myDog.bark();
  return 0;
}

// Example 3: Polymorphism
#include <iostream>
using namespace std;

class Shape {
  public:
    virtual void draw() = 0;
};

class Circle : public Shape {
  private:
    int radius;

  public:
    Circle(int r) {
      radius = r;
    }

    void draw() {
      cout << "Drawing a circle with radius " << radius << endl;
    }
};

class Rectangle : public Shape {
  private:
    int width;
    int height;

  public:
    Rectangle(int w, int h) {
      width = w;
      height = h;
    }

    void draw() {
      cout << "Drawing a rectangle with width " << width << " and height " << height << endl;
    }
};

int main() {
  Shape* shapes[2];
  shapes[0] = new Circle(5);
  shapes[1] = new Rectangle(3, 4);

  for (int i = 0; i < 2; i++) {
    shapes[i]->draw();
  }

  return 0;
}

// Example 4: Encapsulation
#include <iostream>
using namespace std;

class BankAccount {
  private:
    double balance;

  public:
    BankAccount(double b) {
      balance = b;
    }

    void deposit(double amount) {
      balance += amount;
    }

    void withdraw(double amount) {
      if (balance >= amount) {
        balance -= amount;
      } else {
        cout << "Insufficient funds." << endl;
      }
    }

    double getBalance() {
      return balance;
    }
};

int main() {
  BankAccount myAccount(1000);
  myAccount.deposit(500);
  myAccount.withdraw(200);
  cout << "Balance: " << myAccount.getBalance() << endl;
  return 0;
}

// Example 5: Abstraction
#include <iostream>
using namespace std;

class CoffeeMachine {
  private:
    int waterLevel;
    int coffeeBeans;

  public:
    CoffeeMachine(int w, int c) {
      waterLevel = w;
      coffeeBeans = c;
    }

    void makeCoffee() {
      if (waterLevel >= 100 && coffeeBeans >= 10) {
        cout << "Making coffee..." << endl;
        waterLevel -= 100;
        coffeeBeans -= 10;
      } else {
        cout << "Not enough water or coffee beans." << endl;
      }
    }

    void refillWater(int amount) {
      waterLevel += amount;
    }

    void refillCoffeeBeans(int amount) {
      coffeeBeans += amount;
    }
};

int main() {
  CoffeeMachine myMachine(500, 50);
  myMachine.makeCoffee();
  myMachine.refillWater(200);
  myMachine.refillCoffeeBeans(20);
  myMachine.makeCoffee();
  return 0;
}

// Example 6: Advanced Example - Using Templates and Operator Overloading
#include <iostream>
using namespace std;

template <typename T>
class Vector {
  private:
    T* data;
    int size;

  public:
    Vector(int s) {
      size = s;
      data = new T[s];
    }

    ~Vector() {
      delete[] data;
    }

    T& operator[](int index) {
      return data[index];
    }

    friend ostream& operator<<(ostream& os, const Vector<T>& v) {
      for (int i = 0; i < v.size; i++) {
        os << v.data[i] << " ";
      }
      return os;
    }
};

int main() {
  Vector<int> myVector(5);
  myVector[0] = 10;
  myVector[1] = 20;
  myVector[2] = 30;
  myVector[3] = 40;
  myVector[4] = 50;

  cout << myVector << endl;

  return 0;
}

// Example 7: Advanced Example - Using Inheritance and Polymorphism
#include <iostream>
using namespace std;

class Animal {
  public:
    virtual void sound() = 0;
};

class Dog : public Animal {
  public:
    void sound() {
      cout << "Woof!" << endl;
    }
};

class Cat : public Animal {
  public:
    void sound() {
      cout << "Meow!" << endl;
    }
};

int main() {
  Animal* animals[2];
  animals[0] = new Dog();
  animals[1] = new Cat();

  for (int i = 0; i < 2; i++) {
    animals[i]->sound();
  }

  return 0;
}

// Example 8: Advanced Example - Using Composition
#include <iostream>
using namespace std;

class Engine {
  public:
    void start() {
      cout << "Engine started." << endl;
    }

    void stop() {
      cout << "Engine stopped." << endl;
    }
};

class Car {
  private:
    Engine engine;

  public:
    void startCar() {
      engine.start();
    }

    void stopCar() {
      engine.stop();
    }
};

int main() {
  Car myCar;
  myCar.startCar();
  myCar.stopCar();

  return 0;
}

// Example 9: Advanced Example - Using Exception Handling
#include <iostream>
using namespace std;

class DivideByZeroError : public exception {
  public:
    const char* what() const throw() {
      return "Error: Division by zero is not allowed.";
    }
};

int divide(int a, int b) {
  if (b == 0) {
    throw DivideByZeroError();
  }
  return a / b;
}

int main() {
  try {
    int result = divide(10, 0);
    cout << "Result: " << result << endl;
  } catch (DivideByZeroError& e) {
    cout << e.what() << endl;
  }

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
    // Example 1: Reading from a File
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  ifstream file("example.txt");
  string line;

  if (file.is_open()) {
    while (getline(file, line)) {
      cout << line << endl;
    }
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 2: Writing to a File
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  ofstream file("example.txt");
  string line = "Hello, World!";

  if (file.is_open()) {
    file << line << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 3: Appending to a File
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  ofstream file("example.txt", ios_base::app);
  string line = "Hello, World!";

  if (file.is_open()) {
    file << line << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 4: Reading and Writing to a Binary File
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  int data = 10;

  // Write to binary file
  ofstream file("example.bin", ios_base::binary);
  if (file.is_open()) {
    file.write((char*)&data, sizeof(data));
    file.close();
  } else {
    cout << "Unable to open file";
  }

  // Read from binary file
  ifstream file2("example.bin", ios_base::binary);
  if (file2.is_open()) {
    file2.read((char*)&data, sizeof(data));
    cout << data << endl;
    file2.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 5: Using fstream for Reading and Writing
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;

    file << "Hello, World!" << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 6: Using seekg and seekp for Random Access
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;

    file.seekp(0, ios_base::beg);
    file << "Hello, World!" << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 7: Using tellg and tellp for Getting the Current Position
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;

    cout << "Current position: " << file.tellg() << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 8: Using flush for Flushing the Buffer
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;

    file << "Hello, World!" << endl;
    file.flush();
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 9: Using sync_with_stdio for Synchronizing with C Streams
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;

    file << "Hello, World!" << endl;
    file.sync_with_stdio(false);
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 10: Using rdbuf for Getting the File Buffer
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;

    file.rdbuf()->pubsetbuf(0, 0);
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 11: Using get for Getting a Character
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    char c;
    file.get(c);
    cout << c << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 12: Using getline for Getting a Line
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    string line;
    getline(file, line);
    cout << line << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 13: Using read for Reading a Block of Data
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    char buffer[10];
    file.read(buffer, 10);
    cout << buffer << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 14: Using write for Writing a Block of Data
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    char buffer[] = "Hello, World!";
    file.write(buffer, 13);
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 15: Using put for Putting a Character
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.put('A');
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 16: Using seekg for Seeking to a Position
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.seekg(10, ios_base::beg);
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 17: Using seekp for Seeking to a Position
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.seekp(10, ios_base::beg);
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 18: Using tellg for Getting the Current Position
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    cout << file.tellg() << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 19: Using tellp for Getting the Current Position
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    cout << file.tellp() << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 20: Using good for Checking the State
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    if (file.good()) {
      cout << "File is good" << endl;
    } else {
      cout << "File is not good" << endl;
    }
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 21: Using fail for Checking the State
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    if (file.fail()) {
      cout << "File has failed" << endl;
    } else {
      cout << "File has not failed" << endl;
    }
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 22: Using bad for Checking the State
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    if (file.bad()) {
      cout << "File is bad" << endl;
    } else {
      cout << "File is not bad" << endl;
    }
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 23: Using eof for Checking the End of File
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    if (file.eof()) {
      cout << "End of file reached" << endl;
    } else {
      cout << "End of file not reached" << endl;
    }
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 24: Using clear for Clearing the State
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.clear();
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 25: Using ignore for Ignoring Characters
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.ignore(10, ' ');
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 26: Using peek for Peeking at the Next Character
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    char c = file.peek();
    cout << c << endl;
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 27: Using unget for Ungetting a Character
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.unget();
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}

// Example 28: Using sync_with_stdio for Synchronizing with C Streams
#include <iostream>
#include <fstream>
using namespace std;

int main() {
  fstream file("example.txt", ios_base::in | ios_base::out);

  if (file.is_open()) {
    file.sync_with_stdio(false);
    file.close();
  } else {
    cout << "Unable to open file";
  }

  return 0;
}`,

};
  return examples[lessonTitle] || "// Example code will be provided"
};


const  getCppCodeExplanations = (lessonTitle) => {
    const explanations = { 
    "Introduction to C++": `
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

**Comments and Documentation**

Comments are used to add notes and explanations to the code, making it easier for
humans to understand. There are two types of comments in C++:
- **Single-Line Comments**: These start with the \`//\` symbol and continue until
the end of the line.
- **Multi-Line Comments**: These start with the \`/*\` symbol and end with the \`*/\` symbol.

**Variables and Data Types**

Variables are used to store and manipulate data in a program. In C++, 
variables have a data type that determines the type of value they can hold. 
Here are some common data types in C++:
- \`Int\`: A whole number, such as 1, 2, or 3.
- \`Double\`: A decimal number, such as 3.14 or -0.5.
- \`Char\`: A single character, such as 'a' or 'Z'.
- \`Bool\`: A boolean value, such as true or false.
- \`String\`: A sequence of characters, such as "hello" or "goodbye".

 **Input/Output Operations**

Input/output operations are used to interact with the user or other programs. 
In C++, the \`std::cin\` and \`std::cout\` objects are used for input and output 
operations, respectively.
**Note**: that the \`std::cin\` and \`std::cout\` objects are part of the
C++ Standard Library, and must be included using the \`#include\` \`<iostream>\` directive.
`,

    "Variables and Data Types": `
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

**Type Modifiers**

Type modifiers are used to modify the behavior of primitive data types.
They can be used to specify the size of the data type, its sign, or its precision. 
The following code example 2 above demonstrates the use of type modifiers

**Explanation**:
In the example, we declare and initialize variables with variables with type modifiers:
- \`unsigned\`:Can’t store negative numbers, increases the positive range
- \`long\`:Used for large integers.
- \`short\`: Saves memory when smaller range is enough.
- \`double\`:Used to declare floating-point numbers with double precision.
We then print the values of these variables using \`cout\`.

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

**Type Conversion**

Type conversion involves converting a value from one data type to another. 
In C++, type conversion can be implicit or explicit.
- \`static_cast<Type>()\`: A safe way to convert one type to another.
- Prevents accidental loss of data (e.g., converting float to int truncates decimals).
- Type conversion is essential when performing operations between different data types.
`,

    "Operators":`
    **Arithmetic Operators**
Arithmetic operators are used to perform mathematical operations on variables. 
The follow code example 1 above demonstrates the use of constants
In the example, we use the arithmetic operators \`+\`, \`-\`, \`*\`, \`/\`, and \`%\` to perform
mathematical operations on the variables \`a\` and \`b\`.

**Relational Operators**
Relational operators are used to compare variables.
The follow code example 2 above demonstrates the use of relational operators
In the example, we use the relational operators \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, and \`>=\`
to compare the variables \`a\` and \`b\`.
- \`==\`: Equal to
- \`!=\`: Not equal to
- \`<\`: Less than
- \`>\`: Greater than
- \`<=\`: Less than or equal to
- \`>=\`: Greater than or equal to. 

**Logical Operators**
Logical operators are used to combine or invert boolean expressions.
The follow code example 3 above demonstrates the use of logical operators
In the example, we use the logical operators \`&&\`, \`||\`, and \`!\`
to combine or invert boolean expressions.
- \`&&\`: Logical AND
- \`||\`: Logical OR
- \`!\`: Logical NOT

**Bitwise Operators**
Bitwise operators are used to perform operations on individual bits of variables.
The follow code example 4 above demonstrates the use of bitwise operators
In the example, we use the bitwise operators \`&\`, \`|\`, \`^\`, \`~\`, \`<<\`, and \`>>\`
to perform operations on the bits of the variables \`a\` and \`b\`.
- \`&\`: Bitwise AND
- \`|\`: Bitwise OR
- \`^\`: Bitwise XOR
- \`~\`: Bitwise NOT
- \`<<\`: Shift left
- \`>>\`: Shift right 

**Assignment Operators**
Assignment operators are used to assign values to variables.
The follow code example 5 above demonstrates the use of assignment operators
In the example, we use the assignment operator \`=\`, \`+=\`, \`-=\`, \`*=\`,\`%=\`, and \`/=\`, 
to assign values to the variable \`a\`.

- \`=\`: Assigns the value \`5\` to the variable \`a\`.
- \`+=\`: Adds 5 to the current value of \`a\`, then stores the result in \`a\`.
- \`-=\`: Subtracts 3 from the current value of \`a\`, then stores the result in\`a\`.
- \`*=\`: Multiplies the current value of \`a\` by 2, then stores the result in \`a\`.
- \`/=\`: Divides the current value of a by 2, then stores the result in \`a\`.
- \`%=\`: Takes the remainder when a is divided by 3, and stores it in \`a\`.

**Ternary Operator**
The ternary operator is a shorthand way of writing a simple if-else statement. 
The follow code example 6 above demonstrates the use of the ternary operator
In the example, we use the ternary operator \`?\`, and \`:\` 
- \`?\` is part of the ternary conditional operator \`condition ? value_if_true : value_if_false\`.
`,

   "Control Flow":`
Control flow statements are used to control the flow of a program's execution.

1. **if-else Statements**:
- Executes code based on condition
- \`if (condition)\` checks if true, then runs a block
- \`else\` runs if the condition is false
- Useful for making decisions in code

2. **switch-case Statements**:
- Used for selecting one of many code blocks
- More readable than multiple \`if-else\` when checking a single variable
- Each \`case\` matches a value; \`break\` exits the switch
- \`default\` handles unmatched cases

3. **For Loop**:
- \`for (initialization; condition; increment)\` structure
- Executes a block of code a specific number of times
- Most common loop for known iteration counts

4. **While Loop**:
- Continues while a condition is true
- Condition is checked before each iteration
- Useful when the number of iterations is unknown

5. **Do...While Loop**:
- Similar to while, but checks the condition after the loop body
- Always executes the loop body at least once
- Useful when you need guaranteed one-time execution

6. **break, continue, goto**:
- \`break\`: exits the current loop immediately
- \`continue\`: skips current iteration and proceeds to next
- \`goto\`: jumps to a labeled part of the code (not recommended; reduces readability)

7. **Nested Control Structures**:
- Combining loops and conditionals inside one another
- Useful for solving complex problems like grids, games, or multiple condition checks
- Must be careful to avoid confusion and too many levels of nesting
      `,

      "Functions":`
1. **Function Declaration and Definition**:
- Declaration tells the compiler about the function's name, return type, and parameters
- Definition provides the actual implementation (code block)
- Allows modularity and reusability of code

2. **Parameters and Arguments**:
- Parameters are variables in function definitions
- Arguments are actual values passed during function calls
- Helps pass data into functions for dynamic behavior

3. **Return Types and Values**:
- Specifies the type of value the function will return
- Use \`void\` if the function returns nothing
- Return values are sent back to the caller using \`return\` keyword

4. **Function Overloading**:
- Defining multiple functions with the same name but different parameters
- Allows functions to handle different data types or argument counts
- Improves readability and flexibility

5. **Default Arguments**:
- Allows assigning default values to parameters
- Used when a parameter value may or may not be passed
- Must appear at the end of the parameter list

6. **Pass by Value vs Pass by Reference**:
- Pass by Value: Function gets a copy of the argument (original unchanged)
- Pass by Reference: Function accesses the actual variable (original can be changed)
- Use reference when you want to modify original or avoid copying large data

7. **Inline Functions**:
- Defined with \`inline\` keyword
- Suggests compiler to insert the function code directly at the call site
- Can improve speed for small, frequently called functions

8. \`Recursion\`:
- Function calls itself directly or indirectly
- Useful for problems that can be broken into smaller sub-problems (e.g., factorial, Fibonacci)
- Must have a base condition to stop recursion `,

      "Arrays and Strings": `
1. **Array Declaration and Initialization**:
Arrays are used to store multiple values of the same data type in a single variable. 
- Declares a fixed-size sequence of elements of the same type
- Can be initialized during declaration: \`int scores[] = {90, 80, 70, 60};\`
- Indexing starts from 0

2. **Multi-dimensional Arrays**:
Multi-dimensional arrays are used to store data in a table-like structure.
- Arrays with more than one dimension (e.g., matrix)
- Syntax: \`int matrix[2][3];\`
- Accessed using multiple indices: \`matrix[0][1]\`

3. **C-style Strings**:
C-style strings are used to store character arrays.
- Arrays of characters ending with a null character (\`0\`)
- Stored in \`char[]\` arrays
- Handled manually using functions like \`strcpy, strlen\`

4. **std::string Class**:
The std::string class is used to store and manipulate strings in C++.
- C++ Standard Library string type
- More flexible, safer than C-style strings
-Provides functions like \`.length()\`, \`.substr()\`, \`.find()\`

4. **Array Manipulation**:
Arrays can be manipulated using various techniques such as indexing, slicing, and concatenation. 
- Access elements via index, loop through with loops
- Can update, insert, or delete manually (not dynamic)
- Careful with bounds to avoid undefined behavior

5. **Common Array Algorithms**:
Arrays can be searched, sorted, and manipulated using various algorithms.
- **Searching**: Linear Search, Binary Search
- **Sorting**: Bubble Sort, Selection Sort, or use \`std::sort()\`
- Efficient algorithms improve performance for large arrays

6. **Array Limitations and Alternatives**:
Arrays have several limitations, including fixed size, lack of 
dynamic memory allocation, and limited functionality
- **Fixed size**; size must be known at compile time
- Manual memory and bound management

7. **Alternatives**: 
There are several alternatives to arrays in C++, including:
- **Vectors**: dynamic arrays that can grow or shrink in size
- **Lists**: dynamic collections of elements that can be inserted or removed
- **Maps**: associative containers that store key-value pairs
- **Sets**: unordered collections of unique elements`, 

    "Pointers and References": `

1. **Pointer Declaration and Initialization**:
- Pointers are variables that store the memory address of another variable.
In the example, we declare a variable \`x\` and a pointer \`px\`. We then initialize
the pointer \`px\` to point to the variable \`x\`. Finally, we print the value of the 
pointer \`px\` and the value of the variable pointed to by the pointer.
- Must be initialized before use

2. **Pointer Arithmetic**:
Pointers can be used to perform arithmetic operations, such as 
incrementing or decrementing the pointer. 
- Supports operations like increment (next memory location)
- Mainly used in array traversal
- Risky if used incorrectly (can lead to memory corruption)

3. **Pointers and Arrays**:
- Array name is a pointer to its first element
- Pointers can iterate over arrays
- Use with care to avoid accessing out-of-bound memory

4. **References vs Pointers**:
References and pointers are both used to access variables indirectly, 
but they have some key differences.
- **References**: alias to an existing variable, must be initialized
- **Pointers**: hold address, can be reassigned, may be null
In the example, we declare a variable \`x\`, a reference \`r\`, and a pointer \`p\`. 
We then initialize the reference \`r\` to refer to the variable \`x\` and the pointer \`p\` 
to point to the variable \`x\`. We print the value of the reference, the value of the 
pointer, and the value of the variable pointed to by the pointer.
**Note**: References are safer and easier to use

5. **Dynamic Memory Allocation (new/delete)**:
Dynamic memory allocation is used to allocate memory at runtime. 
- Allocates memory during runtime using \`new\`
- Must be released using \`delete\`
**Note**: Useful when size is unknown at compile time

6. **Smart Pointers (unique_ptr, shared_ptr)**:
Smart pointers are used to automatically manage dynamic memory allocation 
and deallocation.
- Prevent memory leaks and dangling pointers
- \`unique_ptr\` single owner, \`shared_ptr\`: multiple owners
In the example above, we declare a \`unique_ptr\` and a \`shared_ptr\` and allocate 
memory using \`new\`. We then assign values to the allocated memory and print 
their values. The \`unique_ptr\` will automatically deallocate the memory when 
it goes out of scope, while the \`shared_ptr\` will automatically deallocate 
the memory when the last shared pointer to it goes out of scope.

7. **Pointer Pitfalls and Best Practices**:
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

     "Object-Oriented Programming": `
1. **Classes and Objects**:
- Classes are user-defined data types that encapsulate data and functions
that operate on that data.
- A class is a blueprint for creating objects (instances)
- Defines attributes (variables) and behaviors (functions)
- Objects are instances of classes

2. **Constructors and Destructors**:
- **Constructor**: special function that initializes objects automatically
Same name as class, can be overloaded
- **Destructor**: cleans up when object goes out of scope OR
Destructors are special member functions that are called when an object is destroyed.
- Begins with a tilde (~), no parameters or return type
In the example 2 above , we declare a class \`Car\` with a constructor and destructor. 
The constructor is called when the object \`myCar\` is created, and the destructor is
called when the object \`myCar\` is destroyed.

3. **Encapsulation (Access Specifiers)**:
Encapsulation is the concept of hiding the implementation details of 
an object from the outside world using using \`private\`, \`protected\`, and \`public\`
- Access specifiers are used to control access to the members of a class.
- Promotes security and control over class members
- Only expose what’s necessary
In the example 3 above, we declare a class \`Car\` with private data members and public
and private member functions. The public member function \`display\` can be accessed 
from outside the class, while the private member function \`accelerate\` cannot be 
accessed from outside the class.


4. **Inheritance**:
Inheritance is the concept of creating a new class based on an existing class.
- **Single**: one base class
- **Multiple**: multiple base classes
- **Multileve**: inheritance across more than one level
- Promotes code reuse
In the example 4 above, we declare a class \`Car\` with private data members 
and public member functions. We then declare a class \`SportsCar\` that inherits
from the \`Car\` class using the public keyword. The \`SportsCar\` class has its own 
private data member and public member function, which can access the members 
of the \`Car\` class using the scope resolution operator \`::\`.

5. **Polymorphism (Virtual Functions)**:
- Polymorphism is a fundamental OOP concept where objects of different types 
can be treated as objects of a common base type and respond differently to 
the same function call.

**Key Characteristics**:
- **Multiple Forms**: Enables a single interface (function name) to have multiple implementations
- **Runtime Binding**: The specific implementation called is determined at runtime based on the actual object type (dynamic polymorphism)
- **Base-Class Interface**: Accessed through pointers/references to a base class
In the example 5 above, we declare a class Shape with a virtual function \`draw()\`. 
We then declare classes \`Circle\` and \`Rectangle\` that inherit from the \`Shape\` class and 
override the \`draw()\` function. We create objects of the \`Circle\` and \`Rectangle\` classes
and a pointer to the Shape class. We then assign the address of the Circle object 
to the pointer and call the \`draw()\` function using the pointer. We repeat the process
with the Rectangle object.

6. **Abstract Classes and Interfaces**:
- Abstract class has at least one pure virtual function
- Cannot be instantiated directly
- Enforces a contract for derived classes to implement
In the examples 6 above, we declare an abstract class AbstractClass 
with a pure virtual function \`pureVirtualFunction()\`. 
We then declare an \`interface\` Interface with a pure virtual function 
\`pureVirtualFunction()\`. We also declare a concrete class \`ConcreteClass\` that 
inherits from the \`AbstractClass\` and implements the pure virtual function

7 **Static Members**:
- Belong to the class, not objects
- Shared across all instances
- Accessed using \`ClassName::member\`
- Friend Functions and Classes:
- Can access private and protected members of a class
- Declared using the \`friend\` keyword
- Useful for operator overloading and external helper functions

8. **Friend functions and classes**
Friend functions and classes are functions and classes that 
have access to the private and protected members of a class.
In the example 8 above, we declare a class \`MyClass\` with a private member
variable \`myPrivateVariable\` and a friend function \`myFriendFunction()\`. 
We then define the friend function outside the class and call it in the \`main()\`
function. The friend function has access to the private member variable of the class.

I hope this explanation helps you understand the concepts of 
object-oriented programming in C++
`,
 
        "STL Containers": `
1. **Vector**
- Dynamic array implementation that automatically resizes
- Provides constant-time random access to elements using index
- Efficient insertion and deletion at the end only
- Memory is allocated contiguously for optimal cache performance
- Best choice when you need array-like behavior with dynamic sizing

2. **List** 
- Doubly-linked list implementation allowing bidirectional traversal
- Efficient insertion and deletion at any position in constant time
- No random access - elements must be accessed sequentially through iterators
- Memory is not contiguous, each element can be anywhere in memory
- Ideal when frequent insertion/deletion in middle is required

3. **Deque (Double-ended Queue)**
- Combines benefits of vector and list
- Efficient insertion and deletion at both front and back
- Provides random access like vector but with more complex memory structure
- Better than vector when you need frequent front insertions
- Internally uses multiple memory blocks for flexibility

4. **Stack**
- LIFO (Last In, First Out) container adapter
- Built on top of underlying container (deque by default)
- Only allows access to the top element
- Essential for recursive algorithms, expression parsing, and undo operations
- No iterators provided - access is restricted to maintain LIFO behavior

5. **Queue**
- FIFO (First In, First Out) container adapter  
- Elements enter at back and leave from front
- Perfect for scheduling tasks, breadth-first search, and buffering
- Maintains order of insertion unlike stack
- Built on deque by default for efficient front and back operations

6. **Set**
- Stores unique elements in automatically sorted order
- Implemented as balanced binary search tree (usually Red-Black tree)
- Duplicate insertions are silently ignored
- Logarithmic time complexity for search, insertion, and deletion
- Excellent for membership testing and maintaining sorted unique collections

7. **Map**
- Key-value pair container with unique, sorted keys
- Fast lookup by key with logarithmic complexity
- Keys are automatically sorted, enabling range queries
- Values can be accessed and modified using bracket notation
- Essential for implementing dictionaries and lookup tables

8. **Multimap**
- Similar to map but allows duplicate keys
- Multiple values can be associated with the same key
- Maintains sorted order of keys
- Useful when one-to-many relationships need to be stored
- Requires special handling for accessing multiple values per key

9. **Multiset**
- Like set but permits duplicate values
- All elements are stored in sorted order including duplicates
- Count operations can determine frequency of elements
- Useful for frequency counting and maintaining sorted collections with repetitions
- Supports all set operations but with duplicate awareness

10. **Priority Queue**
- Max-heap implementation by default (largest element at top)
- Elements are automatically ordered by priority, not insertion order
- Built on vector and uses heap algorithms internally
- Only top element is accessible - no iterators provided
- Perfect for implementing scheduling algorithms and finding extremes efficiently

11. **Bitset**
- Fixed-size sequence of bits with efficient space usage
- Each bit can be individually set, cleared, or tested
- Provides bitwise operations and easy conversion to strings
- Memory efficient - uses only one bit per boolean value
- Ideal for flags, boolean arrays, and bit manipulation algorithms

12. **Array**
- Fixed-size container that wraps traditional C arrays
- Provides STL container interface with bounds checking options
- Size is determined at compile time and cannot be changed
- More efficient than vector for fixed-size data
- Offers modern C++ features while maintaining array performance

13. **Tuple**
- Heterogeneous container that can hold different types together
- Elements accessed by index using \`get()\` function
- Size and types are fixed at compile time
- Perfect for returning multiple values from functions
- Can be unpacked using structured bindings in modern C++

14. **Unordered Set**
- Hash table implementation providing average \`O(1)\` operations
- No guaranteed order of elements unlike regular set
- Faster than set for simple membership testing
- Performance depends on quality of hash function
- Best choice when ordering is not important but speed is critical`,

    "File Handling": `
1. **File Streams Overview**
- File streams are specialized iostream objects for file operations
- Three main types: ifstream (input), ofstream (output), and fstream (bidirectional)
- Automatically handle file opening/closing through constructors/destructors
- Provide type-safe, formatted I/O operations
- Support both text and binary file operations

2. **Opening and Closing Files**
- Files can be opened in constructor or with explicit \`open()\` call
- Always check if file opened successfully using \`is_open()\`
- Multiple opening modes can be combined using bitwise OR
- Explicit closing ensures data is flushed and resources are freed
- File streams automatically close in destructor if still open

3. **Reading Text Files**
- Use \`getline()\` for reading complete lines including spaces
- Stream extraction operator (\`>>\`) reads formatted data, skips whitespace
- Always check for end-of-file conditions to avoid infinite loops
- Text mode handles platform-specific newline conversions automatically
- Multiple reading methods available for different data formats

4. **Writing Text Files**
- Stream insertion operator (\`<<\`) provides formatted output
- Data is automatically converted to text representation
- Use endl or flush to ensure data is written to disk immediately
- Append mode allows adding to existing files without overwriting
- Text files are human-readable and platform-portable

5. **Binary File Operations**
- \`read()\` and \`write()\` methods handle raw byte data
- No text formatting or newline conversion performed
- More efficient for structured data and non-text information
- Requires careful handling of data types and byte ordering
- Platform-dependent issues may arise with different architectures

6. **File Position Management**
- \`tellg()\` and \`tellp()\` return current read and write positions
- \`seekg()\` and \`seekp()\` allow random access to file positions
- Separate position pointers for input and output operations
- Three reference points: beginning, current position, and end
- Essential for implementing random access file operations

7. **Error Handling**
- Multiple error states: \`good()\`, \`bad()\`, \`fail()\`, and \`eof()\`
- Always check file opening success before performing operations
- Stream state flags provide detailed information about errors
- Exception handling can be enabled for automatic error detection
- Clear error states when recovering from error conditions

8. **Advanced File Operations**
- \`flush()\` forces immediate writing of buffered data to disk
- Buffer management affects performance and data persistence
- Synchronization with C streams can be controlled
- Character-level operations provide fine-grained control
- Position manipulation enables sophisticated file processing`, 

   "Exception Handling": `
1. **try, catch, throw Mechanism**
- try block contains code that might throw exceptions
- catch blocks handle specific exception types
- throw statement raises exceptions and transfers control
- Stack unwinding automatically cleans up local objects
- Exception handling separates error handling from normal program flow

2. **Standard Exception Hierarchy**
- \`std::exception\` is the base class for all standard exceptions
- Derived classes provide specific error categories
- \`what()\` method returns descriptive error messages
- Standard exceptions cover common error conditions
- Consistent interface enables polymorphic exception handling

3. **Custom Exception Classes**
- Inherit from \`std::exception\` or its derived classes
- Override \`what()\` method to provide meaningful error messages
- Include relevant context information in exception objects
- Design lightweight exception classes for performance
- Enable domain-specific error handling strategies

4. **Exception Safety Guarantees**
- Basic guarantee: no resource leaks, objects remain valid
- Strong guarantee: operation succeeds completely or has no effect
- No-throw guarantee: operation never throws exceptions
- RAII (Resource Acquisition Is Initialization) ensures exception safety
- Design functions with appropriate safety levels for robustness

5. **noexcept Specification**
- Indicates functions that guarantee not to throw exceptions
- Enables compiler optimizations and better performance
- Required for move constructors and destructors
- Part of function signature in modern C++
- Helps with template instantiation and overload resolution

6. **Best Practices**
- Use exceptions for exceptional conditions, not normal control flow
- Throw by value, catch by const reference to avoid slicing
- Design exception-safe code from the beginning
- Prefer RAII over manual resource management
- Document exception specifications for library interfaces`,

        "Templates": `  
1. **Function Templates**
- Generic functions that work with multiple types
- Template parameters are deduced from function arguments
- Compiler generates separate instances for each type used
- Enable code reuse without sacrificing type safety
- Template argument deduction reduces the need for explicit specification

2. **Class Templates**
- Generic classes parameterized by types or values
- Template arguments must be explicitly specified when instantiating
- Member functions are instantiated only when called
- Enable creation of type-safe generic containers and algorithms
- Template parameters can have default arguments

3. **Template Specialization**
- Full specialization provides complete alternative implementation
- Partial specialization allows specialization for type categories
- Enables optimization for specific types or type patterns
- Specializations are selected automatically by compiler
- Essential for handling special cases in generic code

4. **Variadic Templates**
- Accept variable number of template arguments
- Parameter packs represent zero or more arguments
- Recursive processing is common pattern for parameter pack expansion
- Enable implementation of flexible generic functions
- Foundation for modern C++ features like std::tuple and std::function

5. **Template Metaprogramming**
- Computation performed at compile time using templates
- Type traits provide information about types at compile time
- SFINAE (Substitution Failure Is Not An Error) enables conditional compilation
- Template metaprogramming can generate optimized code
- Advanced technique requiring careful design and testing

6. **STL Template Design**
- Separation of algorithms from data structures through iterators
- Generic programming principles maximize code reuse
- Template specialization handles special cases efficiently
- Consistent interfaces across different container types
- Policy-based design allows customization of behavior`,


        "Modern C++ Features": `  
1. **auto Type Deduction**
- Compiler automatically deduces variable types from initializers
- Reduces verbosity especially with complex template types
- Improves maintainability when types change
- Must be initialized when declared
- Works with functions, lambdas, and range-based for loops

2. **Range-based for Loops**
- Simplified syntax for iterating over containers
- Automatically calls \`begin()\` and \`end()\` on containers
- Supports const auto& for read-only access
- Works with arrays, containers, and initializer lists
- Eliminates iterator management and reduces errors

3. **nullptr**
- Type-safe null pointer literal replacing NULL
- Has distinct type \`std::nullptr_t\`
- Cannot be converted to integer types
- Resolves function overload ambiguities
- Standard practice in modern C++ code

4. **Lambda Expressions**
- Anonymous function objects defined inline
- Capture variables from enclosing scope by value or reference
- Perfect for STL algorithms and callback functions
- Can be mutable to modify captured values
- Enable functional programming patterns in C++

5. **Move Semantics**
- Rvalue references (\`&&\`) enable efficient resource transfer
- Move constructors and assignment operators transfer ownership
- Eliminates unnecessary copying of expensive objects
- Automatic move semantics for temporary objects
- Fundamental for efficient modern C++ code

6. **Smart Pointers**
- Automatic memory management through RAII
- \`unique_ptr\` provides exclusive ownership with zero overhead
- \`shared_ptr\` enables shared ownership with reference counting
- \`weak_ptr\` breaks circular references in shared_ptr chains
- Eliminate manual memory management and prevent leaks

7. **constexpr**
- Enables compile-time evaluation of expressions and functions
- Values computed at compile time improve runtime performance
- Functions can be called at both compile time and runtime
- Essential for template metaprogramming and constant expressions
- Enables more powerful generic programming techniques

8. **Structured Bindings**
- Unpacks multiple values from functions or objects into named variables
- Works with tuples, pairs, arrays, and custom types
- Improves readability for functions returning multiple values
- Eliminates need for \`std::tie\` or manual member access
- Makes working with structured data more convenient,`,

        "Multithreading": `
1. **Thread Creation and Management**
- \`std::thread\` represents individual threads of execution
- Threads execute concurrently with main program
- Must be joined or detached before thread object destruction
- Thread functions can accept arguments passed during construction
- Provides unique thread identification for debugging

2. **Mutex and Synchronization**
- \`std::mutex\` provides mutual exclusion for shared resources
- lock_guard provides RAII-based automatic lock management
- Prevents data races and ensures thread-safe access
- Different mutex types available for specific use cases
- Essential for protecting shared data in multithreaded programs

3. **Condition Variables**
- Enable threads to wait for specific conditions
- Coordinate between producer and consumer threads
- Must be used with unique_lock for flexibility
- \`notify_one()\` and \`notify_all()\` wake waiting threads
- Prevent busy waiting and improve efficienc

4. **Atomic Operations**
- Lock-free operations on primitive types
- Guaranteed to be indivisible across threads
- Memory ordering options control synchronization behavior
- Compare-and-swap operations enable lock-free algorithms
- Higher performance than mutex-based synchronization for simple operations

5. **Future and Promise**
- Type-safe communication channel between threads
- future represents value that will be available later
- promise provides the value to corresponding future
- Exception propagation across thread boundaries
- One-time communication mechanism

6. **Async Tasks**
- High-level interface for asynchronous execution
- std::async automatically manages thread creation
- Returns future for accessing results
- Launch policies control execution timing
- Simplifies concurrent programming

7. **Thread Pools**
- Reuse worker threads for multiple tasks
- Reduces thread creation and destruction overhead
- Task queue distributes work among available threads
- Controlled concurrency level prevents resource exhaustion
- Essential pattern for server applications

8. **Deadlock Prevention**
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
   
    return quizzes[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};




module.exports = {
    getCppLessonConcepts,
    getCppCodeExamples,
    getCppCodeExplanations,
    getCppExercises,
    getCppQuiz
    };