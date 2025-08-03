const getPythonLessonConcepts = (lessonTitle) => {
  const concepts = {
   "Introduction to Python and Setting Up":`
- What is Python and why it's popular
- Installing Python and setting up development environment
- Understanding the Python interpreter
- Writing your first Python program`,

   "Variables and Data Types":`
- Understanding variables as containers for data
- Python's main data types: integers, floats, strings, booleans
- Dynamic typing in Python
- Variable naming conventions`,

   "String Operations and Methods":`
- Creating and manipulating strings
- String concatenation and formatting
- Common string methods
- Escape characters and raw strings`,

   "Numbers and Mathematical Operations":`
- Arithmetic operators: +, -, *, /, //, %, **
- Order of operations (PEMDAS)
- Built-in mathematical functions
- Working with integers and floating-point numbers`,

  "Input and Output":`
- Getting user input with input() function
- Converting input strings to numbers
- Formatting output with print() function
- Understanding input validation basics`,

   "Lists-Creation and Basic Operations":`
- Understanding lists as ordered collections
- Creating lists and accessing elements
- List indexing (positive and negative)
- Basic list operations: append, insert, remove`,

  "List Methods and Advanced Operations":`
- Essential list methods: sort, reverse, count, index
- List comprehensions for creating lists
- Copying lists vs. referencing
- Nested lists basics`,

  "Tuples and Their Uses":`
- Understanding tuples as immutable sequences
- When to use tuples vs. lists
- Tuple packing and unpacking
- Named tuples for structured data`,
  
  "Dictionaries - Key-Value Pairs":`
- Understanding dictionaries as key-value mappings
- Creating and accessing dictionary data
- Dictionary methods: keys(), values(), items()
- Adding, updating, and removing dictionary entries`,

   "Sets - Unique Collections":`
- Understanding sets as unordered collections of unique items
- Set operations: union, intersection, difference
- When to use sets for data deduplication
- Frozen sets for immutable collections`,

   "Conditional Statements - if, elif, else":`
- Boolean logic and comparison operators
- if, elif, else statement structure
- Nested conditionals
- Combining conditions with and, or, not`,

   "Loops - for and while":`
- Understanding iteration and repetition
- for loops with ranges and collections
- while loops for condition-based repetition
- Loop control: break and continue`,

  "Functions-Definition and Parameters":`
- Defining functions with def keyword
- Parameters and arguments
- Return values and return statement
- Local vs global scope basics`,

   "Function Arguments and Keyword Arguments":`
- Positional arguments vs keyword arguments
- *args and **kwargs for flexible parameters
- Function annotations for documentation
- Lambda functions for simple operations`,

  "Modules and Packages":`
- Importing modules and specific functions
- Standard library modules
- Creating your own modules
- Understanding Python packages`,

   "File Input and Output":`
- Opening and closing files
- Reading file contents: read(), readline(), readlines()
- Writing to files: write(), writelines()
- File modes and context managers (with statement)`,

    "Exception Handling":`
- Understanding exceptions and error types
- try, except, else, finally blocks
- Handling specific exception types
- Raising custom exceptions`,

   "Object-Oriented Programming-Classes and Objects":`
- Understanding classes as blueprints for objects
- Creating classes with init method
- Instance variables and methods
- Class variables vs instance variables`,

  "Inheritance and Method Overriding":`
- Understanding inheritance relationships
- Creating child classes that inherit from parent classes
- Method overriding and super() function
- Multiple inheritance basics`,

  "Encapsulation and Property Decorators":`
- Public, protected, and private attributes
- Property decorators for controlled access
- Getter and setter methods
- Data validation in classes`,

    }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getPythonCodeExample = (lessonTitle) => {
  const examples = {
      "Introduction to Python and Setting Up":`
   # Your first Python program
   # To start the interpreter, open your terminal and type:
print("Hello, World!")
print("Welcome to Python programming!")

# Basic arithmetic
result = 10 + 5
print("10 + 5 =", result)`,

   "Variables and Data Types":`
#======================================== 
1. # Print the values of the variables
#========================================
# Create a variable named 'greeting' and assign it a string value
greeting = "Hello, Python!"

# Create a variable named 'age' and assign it an integer value
age = 30

# Create a variable named 'pi_value' and assign it a float value
pi_value = 3.14159

#==============================
2. #Different data types
#===============================
name = "Alice"           # String
age = 25                 # Integer
height = 5.6             # Float
is_student = True        # Boolean

# Checking data types
print(type(name))        # <class 'str'>
print(type(age))         # <class 'int'>
print(type(height))      # <class 'float'>
print(type(is_student))  # <class 'bool'>

#======================================
3. #Dynamic Typing in Python
#======================================
my_variable = 10  # my_variable is an integer
print(f"The value is: {my_variable}, and its type is: {type(my_variable)}")

my_variable = "Hello" # Now, my_variable is a string
print(f"The value is: {my_variable}, and its type is: {type(my_variable)}")

my_variable = 3.14 # Now, my_variable is a float
print(f"The value is: {my_variable}, and its type is: {type(my_variable)}")`,

     "String Operations and Methods":`
#=======================================   
1. #Creating and Manipulating Strings
#=======================================
# Creating strings with different quotes
single_quotes_string = 'Hello, Python!'
double_quotes_string = "Hello, Python!"

# Creating a multi-line string with triple quotes
multi_line_string = """This is a string
that spans multiple lines.
It's great for documentation."""

# Accessing individual characters in a string (indexing)
# Strings are zero-indexed, meaning the first character is at index 0
my_string = "Python"
first_char = my_string[0]  # P
last_char = my_string[5]   # n

# Slicing: extracting a part of a string
# [start:end] where 'end' is exclusive
slice_example = my_string[1:4] # yth

print(f"First character: {first_char}")
print(f"Last character: {last_char}")
print(f"Slice: {slice_example}")

#========================================
2. #String Concatenation and Formatting
#========================================
name = "Alice"
age = 30
fruit = "apple"

# Concatenation with the + operator
sentence_concat = "My name is " + name + " and I am " + str(age) + " years old."

# String formatting with f-strings (formatted string literals)
sentence_fstring = f"My name is {name} and I am {age} years old."

# String formatting with the .format() method (older but still common)
sentence_format = "I want to buy a {} and a {}.".format("pear", fruit)

# You can also use named placeholders with .format()
named_format = "User: {name}, Age: {age}".format(name="Bob", age=25)

print(f"Concatenated: {sentence_concat}")
print(f"F-string: {sentence_fstring}")
print(f"Format method: {sentence_format}")
print(f"Named format: {named_format}")

#====================================
3. #Common String Methods
#====================================
text = "python programming is great"

# .upper() and .lower(): Change case
upper_case = text.upper()
lower_case = upper_case.lower()

# .capitalize(): Capitalize the first letter
capitalized = text.capitalize()

# .title(): Capitalize the first letter of each word
title_case = text.title()

# .strip(): Remove leading/trailing whitespace
padded_text = "   some spaces   "
stripped_text = padded_text.strip()

# .replace(old, new): Replace all occurrences of a substring
replaced_text = text.replace("great", "awesome")

# .split(separator): Split a string into a list of substrings
words = text.split(" ")

# .find(substring): Find the index of the first occurrence of a substring
index = text.find("programming")

print(f"Uppercase: {upper_case}")
print(f"Lowercase: {lower_case}")
print(f"Capitalized: {capitalized}")
print(f"Title case: {title_case}")
print(f"Stripped: '{stripped_text}'")
print(f"Replaced: {replaced_text}")
print(f"Words (list): {words}")
print(f"Index of 'programming': {index}")

#========================================
4. #Escape Characters and Raw Strings
#========================================
# Escape characters
newline_string = "Hello\nWorld"
tab_string = "Name:\tJohn"
quote_string = "He said, \"Hello!\""

# Raw string (prefix the string with 'r')
file_path = r"C:\Users\Documents\file.txt"

print(f"Newline example:\n{newline_string}")
print(f"Tab example:\n{tab_string}")
print(f"Quote example:\n{quote_string}")
print(f"Raw string file path: {file_path}")`,

   "Numbers and Mathematical Operations":`
#===========================
1. #Arithmetic Operators
#===========================
# Variables for demonstration
a = 15
b = 4

# Addition
addition = a + b  # 19

# Subtraction
subtraction = a - b  # 11

# Multiplication
multiplication = a * b  # 60

# Division (always returns a float)
division = a / b  # 3.75

# Floor Division (discards the fractional part)
floor_division = a // b  # 3

# Modulus (remainder)
modulus = a % b  # 3

# Exponentiation
exponentiation = a ** b  # 15 ** 4 = 50625

print(f"Addition: {addition}")
print(f"Subtraction: {subtraction}")
print(f"Multiplication: {multiplication}")
print(f"Division: {division}")
print(f"Floor Division: {floor_division}")
print(f"Modulus: {modulus}")
print(f"Exponentiation: {exponentiation}")

#================================
2. #Order of Operations (PEMDAS)
#================================
# Without parentheses
result1 = 5 + 3 * 2  # Multiplication is done first: 5 + 6 = 11

# With parentheses
result2 = (5 + 3) * 2  # Parentheses are done first: 8 * 2 = 16

# A more complex example
complex_calculation = (10 - 2) ** 2 / 4 + 3 * 5
# Step 1: Parentheses -> (10 - 2) = 8
# Step 2: Exponent -> 8 ** 2 = 64
# Step 3: Division -> 64 / 4 = 16.0
# Step 4: Multiplication -> 3 * 5 = 15
# Step 5: Addition -> 16.0 + 15 = 31.0

print(f"Result without parentheses: {result1}")
print(f"Result with parentheses: {result2}")
print(f"Complex calculation result: {complex_calculation}")

#====================================
3. #Built-in Mathematical Functions
#====================================
number1 = -15
number2 = 3.75

# Absolute value
absolute_value = abs(number1)  # 15

# Rounding
rounded_number = round(number2)  # 4

# Finding max and min
largest = max(10, 20, 5)  # 20
smallest = min(10, 20, 5)  # 5

print(f"Absolute value of {number1}: {absolute_value}")
print(f"Rounded value of {number2}: {rounded_number}")
print(f"Largest number: {largest}")
print(f"Smallest number: {smallest}")

#=================================================
4. #Working with Integers and Floating-Point Numbers
#================================================
integer_value = 10
float_value = 5.5

# Mixing types
mixed_addition = integer_value + float_value  # 10 + 5.5 = 15.5 (float)

# Explicit type conversion
converted_int = int(float_value)    # 5 (truncates the decimal part)
converted_float = float(integer_value) # 10.0

print(f"Mixed addition result: {mixed_addition}")
print(f"Type of mixed addition result: {type(mixed_addition)}")

print(f"Converted float to integer: {converted_int}")
print(f"Converted integer to float: {converted_float}")
`,

     "Input and Output":`
#============================================
1. #Getting User Input with input() Function
#============================================
# Prompt the user for their name and store it in a variable
name = input("Please enter your name: ")

# Prompt the user for their age
age_as_string = input("Please enter your age: ")

# Print a greeting using the input
print(f"Hello, {name}!")
print(f"You entered your age as: {age_as_string}")

#=======================================
2. #Converting Input Strings to Numbers
#=======================================
# Get a number from the user
num1_str = input("Enter the first number: ")
num2_str = input("Enter the second number: ")

# Convert the string inputs to integers
num1 = int(num1_str)
num2 = int(num2_str)

# Perform a calculation
total = num1 + num2

print(f"The sum of {num1} and {num2} is: {total}")

#============================================
3. #Formatting Output with print() Function
#============================================
name = "Charlie"
age = 25
job = "developer"

# Using f-strings
print(f"Name: {name}, Age: {age}, Job: {job}")

# Printing with custom separator
print("Apple", "Banana", "Cherry", sep=" | ")

# Printing on the same line with a custom end character
print("This is the first part.", end=" ")
print("This is the second part on the same line.")

#========================================
4. #Understanding Input Validation Basics
#========================================
try:
    # Attempt to get and convert user input
    height_str = input("Please enter your height in cm: ")
    height = float(height_str)
    print(f"Your height is {height} cm.")
except ValueError:
    # This block runs if a ValueError occurs
    print("Invalid input. Please enter a numerical value.")`,

        
       "Lists-Creation and Basic Operations":`
#========================================
1. #Creating Lists and Accessing Elements
#========================================   
# A list of strings
fruits = ["apple", "banana", "cherry", "orange"]

# A list of numbers
prime_numbers = [2, 3, 5, 7, 11]

# A list with mixed data types
mixed_list = ["John", 30, True, 1.85]

# Accessing elements by index
first_fruit = fruits[0]  # "apple"
third_prime = prime_numbers[2] # 5

print(f"The first fruit is: {first_fruit}")
print(f"The third prime number is: {third_prime}")

# Modifying an element
fruits[1] = "grape"
print(f"Modified fruits list: {fruits}")

#========================================
2. #List Indexing (Positive and Negative)
#======================================== 
letters = ["a", "b", "c", "d", "e"]

# Positive indexing
first_letter = letters[0]  # "a"
last_letter_positive = letters[4] # "e"

# Negative indexing
last_letter_negative = letters[-1]  # "e"
second_to_last = letters[-2]      # "d"

# Slicing: [start:end:step]
# Get a sub-list from index 1 up to (but not including) 4
sub_list = letters[1:4] # ['b', 'c', 'd']

print(f"First letter (positive index): {first_letter}")
print(f"Last letter (negative index): {last_letter_negative}")
print(f"Second to last letter (negative index): {second_to_last}")
print(f"Sliced list from index 1 to 3: {sub_list}")

#================================================
3. #Basic List Operations: append, insert, remove
#================================================
tasks = ["wash dishes", "mow lawn", "walk dog"]

# .append(): Adding an item to the end
tasks.append("buy groceries")
print(f"After appending: {tasks}")
# Output: ['wash dishes', 'mow lawn', 'walk dog', 'buy groceries']

# .insert(): Inserting an item at a specific position
tasks.insert(1, "clean room")
print(f"After inserting: {tasks}")
# Output: ['wash dishes', 'clean room', 'mow lawn', 'walk dog', 'buy groceries']

# .remove(): Removing an item by its value
tasks.remove("mow lawn")
print(f"After removing 'mow lawn': {tasks}")
# Output: ['wash dishes', 'clean room', 'walk dog', 'buy groceries']

# Using .pop() to remove an item by index and get its value
popped_item = tasks.pop(0) # Removes the first item and returns it
print(f"Popped item: {popped_item}")
print(f"List after popping: {tasks}")
# Output: Popped item: wash dishes
#   List after popping: ['clean room', 'walk dog', 'buy groceries']`,

"List Methods and Advanced Operations":`
#=======================================================
1. #Essential list methods: sort, reverse, count, index
#=======================================================
numbers = [3, 1, 4, 1, 5, 9, 2]

# Sorting the list
numbers.sort()
print(f"Sorted list: {numbers}")
# Output: [1, 1, 2, 3, 4, 5, 9]

# Reversing the sorted list
numbers.reverse()
print(f"Reversed list: {numbers}")
# Output: [9, 5, 4, 3, 2, 1, 1]

# Counting occurrences of an item
count_of_one = numbers.count(1)
print(f"Count of '1': {count_of_one}")
# Output: 2

# Finding the index of an item
index_of_four = numbers.index(4)
print(f"Index of '4': {index_of_four}")
# Output: 2

#============================================
2. #List Comprehensions for Creating Lists
#============================================
# Traditional for loop
squares_for_loop = []
for i in range(1, 6):
    squares_for_loop.append(i ** 2)
print(f"Squares (for loop): {squares_for_loop}")

# Same logic using a list comprehension
squares_comprehension = [i ** 2 for i in range(1, 6)]
print(f"Squares (comprehension): {squares_comprehension}")

# List comprehension with a condition (getting even numbers)
even_numbers = [num for num in range(10) if num % 2 == 0]
print(f"Even numbers: {even_numbers}")

# Converting a list of strings to a list of their lengths
words = ["hello", "world", "python", "code"]
word_lengths = [len(word) for word in words]
print(f"Word lengths: {word_lengths}")


#==================================
3. #Copying Lists vs. Referencing
#==================================
original = [1, 2, 3]

# Referencing (creating a new reference)
reference_list = original
reference_list.append(4) # Appending to \`reference_list\`

print(f"Original list after referencing: {original}")
# Output: [1, 2, 3, 4] - original list was changed

# Copying (creating a new independent list)
copied_list = original[:]
copied_list.append(5) # Appending to \`copied_list\`

print(f"Original list after copying: {original}")
# Output: [1, 2, 3, 4] - original list remains unchanged
print(f"Copied list: {copied_list}")
# Output: [1, 2, 3, 4, 5]


#=============================
4. #Nested Lists Basics
#=============================
# A nested list representing a 3x3 grid
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Accessing elements in a nested list
# Access the second row (index 1)
second_row = matrix[1]
print(f"Second row: {second_row}")
# Output: [4, 5, 6]

# Accessing a specific element (row 1, column 2)
element = matrix[1][2]
print(f"Element at row 1, column 2: {element}")
# Output: 6

# Iterating through a nested list
print("Iterating through the matrix:")
for row in matrix:
    for element in row:
        print(element, end=' ')
    print() # Print a newline after each row`,

      "Tuples and Their Uses":`
#==============================================
1. #Understanding Tuples as Immutable Sequences
#==============================================
# Creating a tuple
my_tuple = ("apple", "banana", "cherry")
print(f"My tuple: {my_tuple}")

# Tuples can contain different data types
mixed_tuple = ("John", 30, True)

# Accessing elements by index works just like lists
first_item = my_tuple[0]  # "apple"
print(f"First item: {first_item}")

# Attempting to modify a tuple will result in a TypeError
try:
    my_tuple[1] = "grape"
except TypeError as e:
    print(f"Error: {e}")

#==================================
2. #When to Use Tuples vs. Lists
#==================================
# A list of colors - we might want to add or remove colors
colors = ["red", "green", "blue"]
colors.append("yellow")
print(f"Mutable list: {colors}")

# A tuple representing a coordinate - its values are fixed
coordinate = (10, 20)
print(f"Immutable tuple: {coordinate}")
# We wouldn't want the coordinate to be accidentally changed

#========================================
3. #Tuple Packing and Unpacking
#========================================
# Tuple packing
person = ("Alice", 25, "New York")

# Tuple unpacking
name, age, city = person
print(f"Name: {name}")
print(f"Age: {age}")
print(f"City: {city}")

# Swapping variable values in a single line (a common use case)
a = 10
b = 20
a, b = b, a  # The right side creates a tuple (20, 10), which is then unpacked
print(f"a: {a}, b: {b}") # a is now 20, b is now 10

# A function returning a tuple
def get_user_info():
    return "Bob", 35, "London"

user_name, user_age, user_city = get_user_info()
print(f"User info from function: {user_name}, {user_age}, {user_city}")

#=====================================
4. #Named Tuples for Structured Data
#=====================================
from collections import namedtuple

# Define a named tuple type
# The first argument is the name of the tuple type
# The second argument is a string with space-separated field names
Person = namedtuple("Person", "name age city")

# Create an instance of the named tuple
p1 = Person(name="Alice", age=25, city="New York")
p2 = Person("Bob", 30, "London")

# Access elements using dot notation (by name)
print(f"Person 1 name: {p1.name}")
print(f"Person 2 city: {p2.city}")

# Named tuples are still immutable and can be accessed by index
print(f"Person 1 age (by index): {p1[1]}")`,

   "Dictionaries - Key-Value Pairs":`
#==================================================
1. #Understanding Dictionaries as Key-Value Mappings
#==================================================
# A dictionary representing a person's information
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# A dictionary with different data types
student_scores = {
    "math": 95,
    "science": 88,
    "history": 76.5,
    "passed": True
}

print(f"Person dictionary: {person}")
print(f"Student scores dictionary: {student_scores}")

#=========================================
2. #Creating and Accessing Dictionary Data
#=========================================
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Accessing a value by its key
person_name = person["name"]
print(f"Person's name: {person_name}")
# Output: Alice

# Accessing a value with the .get() method
# This prevents a KeyError if the key doesn't exist
country = person.get("country", "Not specified")
print(f"Country: {country}")
# Output: Not specified

# This will raise a KeyError
try:
    print(person["address"])
except KeyError as e:
    print(f"Error: {e} - The key 'address' does not exist.")

#=================================
3. #Dictionary Methods:
#=================================
product = {
    "name": "Laptop",
    "brand": "Dell",
    "price": 1200
}

# Get a view of all keys
keys = product.keys()
print(f"Keys: {keys}")
# Output: dict_keys(['name', 'brand', 'price'])

# Get a view of all values
values = product.values()
print(f"Values: {values}")
# Output: dict_values(['Laptop', 'Dell', 1200])

# Get a view of all key-value pairs
items = product.items()
print(f"Items: {items}")
# Output: dict_items([('name', 'Laptop'), ('brand', 'Dell'), ('price', 1200)])

# You can iterate through these views
print("\nIterating through items:")
for key, value in product.items():
    print(f"{key}: {value}")

#=====================================================
4. #Adding, Updating, and Removing Dictionary Entries
#=====================================================
car = {
    "brand": "Ford",
    "model": "Mustang",
    "year": 1964
}

# Adding a new key-value pair
car["color"] = "red"
print(f"After adding 'color': {car}")

# Updating an existing value
car["year"] = 2022
print(f"After updating 'year': {car}")

# Removing an entry with del
del car["model"]
print(f"After deleting 'model': {car}")

# Removing an entry with .pop()
removed_year = car.pop("year")
print(f"Removed year: {removed_year}")
print(f"Final dictionary: {car}")`,

    "Sets - Unique Collections":`
#===============================================================
1. #Understanding Sets as Unordered Collections of Unique Items
#===============================================================
# Creating a set with curly braces
my_set = {1, 2, 3, 4, 4, 5}
print(f"Set with duplicates removed: {my_set}")
# Output: {1, 2, 3, 4, 5} - The duplicate '4' is automatically removed

# Creating a set from a list
numbers = [10, 20, 20, 30, 40, 40, 40]
unique_numbers = set(numbers)
print(f"Unique numbers from list: {unique_numbers}")
# Output: {10, 20, 30, 40}

# An empty set must be created with set()
empty_set = set()
print(f"Type of an empty set: {type(empty_set)}")

#===================================================
2. #Set Operations: Union, Intersection, Difference
#===================================================
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

# Union: all unique elements from both sets
union_set = set1.union(set2)
# or union_set = set1 | set2
print(f"Union: {union_set}")
# Output: {1, 2, 3, 4, 5, 6, 7, 8}

# Intersection: elements common to both sets
intersection_set = set1.intersection(set2)
# or intersection_set = set1 & set2
print(f"Intersection: {intersection_set}")
# Output: {4, 5}

# Difference: elements in set1 but not in set2
difference_set = set1.difference(set2)
# or difference_set = set1 - set2
print(f"Difference (set1 - set2): {difference_set}")
# Output: {1, 2, 3}

#===========================================
3. #When to Use Sets for Data Deduplication
#===========================================
all_fruits = ["apple", "banana", "cherry", "apple", "banana", "grape"]

# The process of deduplication
unique_fruits_set = set(all_fruits)
unique_fruits_list = list(unique_fruits_set)

print(f"Original list with duplicates: {all_fruits}")
print(f"List after deduplication: {unique_fruits_list}")
# The order is not guaranteed, but all duplicates are removed

#=========================================
4. #Frozen Sets for Immutable Collections
#=========================================
# Creating a frozenset
my_frozenset = frozenset([1, 2, 3])
print(f"Frozen set: {my_frozenset}")

# Attempting to add an element will raise an AttributeError
try:
    my_frozenset.add(4)
except AttributeError as e:
    print(f"Error: {e} - Frozen sets are immutable.")

# Using a frozenset as a key in a dictionary
my_dict = {
    frozenset([1, 2]): "A key that is a frozenset",
    frozenset([3, 4]): "Another frozenset key"
}
print(f"\nDictionary with frozenset keys: {my_dict}")
print(f"Accessing value: {my_dict[frozenset([1, 2])]}")
`,

    "Conditional Statements - if, elif, else":`
#===========================================
1. #Boolean Logic and Comparison Operators
#===========================================
x = 10
y = 5

# Comparison examples
print(f"Is x equal to y? {x == y}")       # False
print(f"Is x not equal to y? {x != y}")   # True
print(f"Is x greater than y? {x > y}")    # True
print(f"Is x less than or equal to y? {x <= y}")  # False

# Boolean variables
is_logged_in = True
is_admin = False

print(f"Is the user logged in? {is_logged_in}") # True

#========================================
2. #if, elif, else Statement Structure
#========================================
score = 85

# A simple if-elif-else structure
if score >= 90:
    print("Grade: A")
elif score >= 80:
    print("Grade: B")
elif score >= 70:
    print("Grade: C")
else:
    print("Grade: F")

#=========================
3. #Nested Conditionals
#=========================
is_member = True
has_coupon = False

if is_member:
    print("Welcome, valued member!")
    # Nested if statement
    if has_coupon:
        print("You can also use your coupon for a discount.")
    else:
        print("Don't forget to check for coupons next time!")
else:
    print("You are not a member. Please consider joining.")

#============================================
4. #Combining Conditions with and, or, not
#============================================
age = 20
is_student = True

# Using 'and'
if age >= 18 and is_student:
    print("You qualify for the student discount.")
else:
    print("You do not qualify.")

# Using 'or'
is_sunny = False
is_warm = True
if is_sunny or is_warm:
    print("It's a good day for a walk.")
else:
    print("Maybe stay inside.")

# Using 'not'
is_full = False
if not is_full:
    print("The parking lot has space.")
else:
    print("The parking lot is full.")`,

      "Loops - for and while":`
#=========================================
1. #for Loops with Ranges and Collections
#=========================================
# Looping through a list
fruits = ["apple", "banana", "cherry"]
print("Using a for loop with a list:")
for fruit in fruits:
    print(f"I have a {fruit}.")

# Looping with the range() function
# range(stop): loops from 0 up to (but not including) stop
print("\nUsing a for loop with range(5):")
for i in range(5):
    print(f"The number is: {i}")

# Looping with range(start, stop)
print("\nUsing a for loop with range(1, 4):")
for j in range(1, 4):
    print(f"Number from 1 to 3: {j}")

# Looping with range(start, stop, step)
print("\nUsing a for loop with range(0, 10, 2):")
for k in range(0, 10, 2):
    print(f"Even number: {k}")

#=============================================
2. #while Loops for Condition-Based Repetition
#=============================================
# A while loop that counts from 1 to 3
count = 1
print("Using a while loop:")
while count <= 3:
    print(f"Count is: {count}")
    count = count + 1  # Important: a loop must have a way to change its condition
                       # to avoid an infinite loop

# A while loop for user input until a specific condition is met
secret_word = "python"
user_guess = ""
print("\nGuess the secret word!")
while user_guess != secret_word:
    user_guess = input("Enter your guess: ").lower() # .lower() makes input case-insensitive
    if user_guess != secret_word:
        print("Incorrect guess, try again!")

print("Congratulations! You guessed the word.")


#===================================
3. #Loop Control: break and continue
#===================================
# Using break to exit a loop early
print("Using 'break':")
for i in range(10):
    if i == 5:
        print("Found the number 5, breaking the loop.")
        break  # Exit the loop entirely
    print(f"Current number: {i}")

# Using continue to skip an iteration
print("\nUsing 'continue':")
for j in range(5):
    if j == 2:
        print("Skipping number 2.")
        continue  # Skip this iteration and go to the next
    print(f"Current number: {j}")`,

     "Functions-Definition and Parameters":`
#==========================================
1. #Defining Functions with the def Keyword
#==========================================
# A function with a parameter for a name
def greet_by_name(name):
    print(f"Hello, {name}!")

# A function with multiple parameters
def add_numbers(num1, num2):
    sum_result = num1 + num2
    print(f"The sum is: {sum_result}")

# Calling the functions with arguments
greet_by_name("Alice")
greet_by_name("Bob")

add_numbers(10, 20)
add_numbers(5.5, 3.2)

#==============================
2. #Parameters and Arguments
#=============================
# A function with a parameter for a name
def greet_by_name(name):
    print(f"Hello, {name}!")

# A function with multiple parameters
def add_numbers(num1, num2):
    sum_result = num1 + num2
    print(f"The sum is: {sum_result}")

# Calling the functions with arguments
greet_by_name("Alice")
greet_by_name("Bob")

add_numbers(10, 20)
add_numbers(5.5, 3.2)

#=====================================
3. #Return Values and return Statement
#=====================================
# A function that returns a value
def multiply(a, b):
    result = a * b
    return result # The function's result is sent back here

# A function that returns multiple values (as a tuple)
def get_full_name(first, last):
    full = f"{first} {last}"
    return full, len(full) # Returns a tuple

# Calling the function and storing the return value
product = multiply(5, 6)
print(f"The product is: {product}") # Output: 30

# Unpacking the multiple return values
full_name, name_length = get_full_name("John", "Doe")
print(f"Full name: {full_name}, Length: {name_length}")

#=================================
4. #Local vs. Global Scope Basics
#=================================
# Global variable
global_variable = "I'm global"

def my_function():
    # Local variable
    local_variable = "I'm local"
    print(f"Inside the function, I can access: {global_variable}")
    print(f"Inside the function, I can access: {local_variable}")

my_function()

# Attempting to access local variable from global scope will fail
try:
    print(local_variable)
except NameError as e:
    print(f"\nError: {e}")

# Accessing global variable from global scope works
print(f"Outside the function, I can access: {global_variable}")`,

    "Function Arguments and Keyword Arguments":`
#==============================================
1. #Positional Arguments vs. Keyword Arguments
#==============================================
def describe_pet(animal_type, pet_name):
    print(f"I have a {animal_type}.")
    print(f"Its name is {pet_name}.")

# Positional Arguments: The order matters
print("Using positional arguments:")
describe_pet("dog", "Buddy")
# Output: I have a dog. Its name is Buddy.

# Keyword Arguments: The order does not matter
print("\nUsing keyword arguments:")
describe_pet(pet_name="Max", animal_type="cat")
# Output: I have a cat. Its name is Max.

#=============================================
2. #*args and **kwargs for Flexible Parameters
#=============================================
# *args example: A function that sums any number of numbers
def sum_all(*numbers):
    total = 0
    for num in numbers:
        total += num
    return total

print(f"Sum of 1, 2, 3: {sum_all(1, 2, 3)}") # Output: 6
print(f"Sum of 10, 20: {sum_all(10, 20)}")     # Output: 30

# **kwargs example: A function that processes a user's profile
def create_profile(name, **details):
    print(f"Creating profile for {name}.")
    for key, value in details.items():
        print(f"- {key}: {value}")

create_profile("John Doe", age=30, city="London", profession="Engineer")

#=========================================
3. #Function Annotations for Documentation
#=========================================
# A function with type annotations for better clarity
def calculate_area(width: float, height: float) -> float:
    """
    Calculates the area of a rectangle.
    
    Args:
        width: The width of the rectangle.
        height: The height of the rectangle.
    
    Returns:
        The calculated area.
    """
    return width * height

# The annotations don't stop you from passing an integer
area = calculate_area(10, 5)
print(f"Area: {area}")

#=========================================
4. #Lambda Functions for Simple Operations
#=========================================
# A regular function to add two numbers
def add(x, y):
    return x + y

# A lambda function to do the same thing
add_lambda = lambda x, y: x + y

print(f"Regular function result: {add(2, 3)}")
print(f"Lambda function result: {add_lambda(2, 3)}")

# Lambda functions are often used with higher-order functions like sorted()
coordinates = [(1, 5), (3, 2), (0, 9), (7, 4)]
# Sort the list of tuples based on the second item (the y-coordinate)
sorted_coordinates = sorted(coordinates, key=lambda item: item[1])

print(f"Sorted by y-coordinate: {sorted_coordinates}")`,

    "Modules and Packages":`
#===========================================
1. #Importing Modules and Specific Functions
#===========================================
# Option 1: Importing the entire 'math' module
import math

# Accessing a function from the module
radius = 5
area = math.pi * radius**2
print(f"Area of a circle with radius {radius}: {area}")

# Option 2: Importing a specific function
from math import sqrt, pi

# Using the imported functions directly
number = 16
square_root = sqrt(number)
print(f"The square root of {number} is: {square_root}")
print(f"The value of pi is: {pi}")

#===============================
2. #Standard Library Modules
#===============================
# Using the 'random' module
import random

# Generate a random integer between 1 and 10 (inclusive)
random_number = random.randint(1, 10)
print(f"Random number between 1 and 10: {random_number}")

# Using the 'datetime' module
import datetime

# Get the current date and time
now = datetime.datetime.now()
print(f"Current date and time: {now}")
print(f"Current year: {now.year}")

#===============================
3. #Creating Your Own Modules
#===============================
# my_utils.py
def square(number):
    """Returns the square of a number."""
    return number * number

def cube(number):
    """Returns the cube of a number."""
    return number ** 3

GREETING = "Hello from my_utils module!"

#=================================================
3b. #Creating Your Own Modules in a separate file
#================================================
# main_script.py
import my_utils

# Use functions and variables from the imported module
num = 4
squared_num = my_utils.square(num)
cubed_num = my_utils.cube(num)

print(my_utils.GREETING)
print(f"The square of {num} is: {squared_num}")
print(f"The cube of {num} is: {cubed_num}")

#==================================
4. #Understanding Python Packages
#==================================
my_project/
├── main.py
└── utils/
    ├── __init__.py
    ├── math_ops.py
    └── string_ops.py

#math_ops.py could contain:
# utils/math_ops.py
def add(a, b):
    return a + b

#string_ops.py could contain:
# utils/string_ops.py
def capitalize_string(s):
    return s.upper()

#You can now import from this package in main.py:
# main.py
from utils import math_ops
from utils.string_ops import capitalize_string

# Use the functions from the package
sum_result = math_ops.add(10, 5)
capitalized_text = capitalize_string("hello world")

print(f"Sum from math_ops: {sum_result}")
print(f"Capitalized string from string_ops: {capitalized_text}")`,

    "File Input and Output":`
#================================
1. #Opening and Closing Files
#================================
# Create a simple file named 'example.txt' for demonstration
with open('example.txt', 'w') as f:
    f.write("This is a file.\nIt has two lines.")

# Opening a file for reading
file_object = open('example.txt', 'r') # 'r' mode for reading

# ... operations to read the file ...

# Closing the file is essential to free up system resources
file_object.close()

#============================
2. #Reading File Contents
#============================
# Assuming 'example.txt' contains:
# This is a file.
# It has two lines.

# Read the entire file at once
with open('example.txt', 'r') as f:
    content = f.read()
    print("--- Reading the entire file with .read() ---")
    print(content)

# Read the file line by line
with open('example.txt', 'r') as f:
    print("\n--- Reading line by line with .readline() ---")
    line1 = f.readline()
    line2 = f.readline()
    print(line1, end='') # Use end='' to avoid double newlines
    print(line2, end='')

# Read all lines into a list
with open('example.txt', 'r') as f:
    all_lines = f.readlines()
    print("\n--- Reading all lines into a list with .readlines() ---")
    print(all_lines)

#=====================
3. #Writing to Files
#=====================
# Write a single string to a file (overwriting existing content)
with open('output.txt', 'w') as f:
    f.write("Hello, World!\n")
    f.write("This is a new line.")

# Append to an existing file
with open('output.txt', 'a') as f: # 'a' mode for appending
    f.write("\nThis line was appended.")

# Write multiple lines from a list
lines_to_write = ["First line.\n", "Second line.\n", "Third line.\n"]
with open('list_output.txt', 'w') as f:
    f.writelines(lines_to_write)

#=====================================
4. #File Modes and Context Managers
#=====================================
# The recommended way to open and read a file
# The file is automatically closed when the block is exited
with open('example.txt', 'r') as file_handle:
    for line in file_handle:
        print(line, end='')

# The same with a different mode
with open('new_file.txt', 'w') as f:
    f.write("Content written safely.")

# The 'with' statement guarantees f.close() is called, even if
# an exception happens inside the block.`,

   "Exception Handling":`
#===========================================
1. #Understanding Exceptions and Error Types
#===========================================
# A simple example that will cause an error
try:
    # This line will cause a TypeError
    result = "10" + 5
except TypeError as e:
    print(f"Caught an error: {e}")

#======================================
2. #try, except, else, finally Blocks
#======================================
def safe_division(numerator, denominator):
    try:
        # Code that might raise a ZeroDivisionError
        result = numerator / denominator
    except ZeroDivisionError:
        # This runs only if a ZeroDivisionError occurs
        print("Error: Cannot divide by zero.")
        return None
    else:
        # This runs if no exception occurred in the try block
        print("Division successful.")
        return result
    finally:
        # This code always runs
        print("Exiting safe_division function.")

# Example 1: Successful division
print(f"Result 1: {safe_division(10, 2)}")
print("-" * 20)

# Example 2: Division by zero
print(f"Result 2: {safe_division(10, 0)}")

#======================================
3. #Handling Specific Exception Types
#=====================================
def process_number():
    try:
        user_input = input("Enter a number: ")
        # This might raise a ValueError
        number = int(user_input)
        # This might raise a ZeroDivisionError
        result = 10 / number
        print(f"Result: {result}")
    except ValueError:
        # Handles non-numerical input
        print("Invalid input. Please enter a valid number.")
    except ZeroDivisionError:
        # Handles division by zero
        print("Cannot divide by zero. Please enter a non-zero number.")
    except Exception as e:
        # A general catch-all for any other unexpected exceptions
        print(f"An unexpected error occurred: {e}")

process_number()
      
#=============================
4. #Raising Custom Exceptions
#=============================
def set_age(age):
    if not isinstance(age, int):
        # Raise a built-in TypeError
        raise TypeError("Age must be an integer.")
    if age < 0 or age > 150:
        # Raise a built-in ValueError
        raise ValueError("Age must be between 0 and 150.")
    print(f"Age set to: {age}")

# Using the function and handling the exceptions
try:
    set_age("old")
except (TypeError, ValueError) as e:
    print(f"Caught an error: {e}")

try:
    set_age(200)
except (TypeError, ValueError) as e:
    print(f"Caught an error: {e}")

try:
    set_age(30)
except (TypeError, ValueError) as e:
    print(f"Caught an error: {e}")`,


      "Object-Oriented Programming-Classes and Objects":`
#==================================================
1. #Understanding Classes as Blueprints for Objects
#==================================================
# A simple class named 'Dog'
class Dog:
    pass # 'pass' is a placeholder for an empty code block

# Creating two objects (instances) from the Dog class
dog1 = Dog()
dog2 = Dog()

print(f"dog1 is of type: {type(dog1)}")
print(f"dog2 is of type: {type(dog2)}")
print(f"Are dog1 and dog2 the same object? {dog1 is dog2}")

#===========================================
2. #Creating Classes with _ _init_ _ Method
#==========================================
class Car:
    # The __init__ method is the constructor
    def __init__(self, make, model, year):
        # Initializing instance variables (attributes)
        self.make = make
        self.model = model
        self.year = year
        self.odometer = 0 # An attribute with a default value

    # A method to display car information
    def get_description(self):
        description = f"The car is a {self.year} {self.make} {self.model}."
        return description

# Creating a new object (instance) of the Car class
my_car = Car("Ford", "Mustang", 2022)

# Accessing the object's attributes
print(f"My car's make: {my_car.make}")
print(f"My car's model: {my_car.model}")

# Calling a method on the object
print(my_car.get_description())

#==================================
3. #Instance Variables and Methods
#==================================
class Dog:
    def __init__(self, name, breed):
        self.name = name  # Instance variable
        self.breed = breed # Instance variable

    def bark(self):
        # A method that uses instance variables
        print(f"{self.name} is barking!")

# Create two distinct objects with their own data
dog1 = Dog("Buddy", "Golden Retriever")
dog2 = Dog("Lucy", "Labrador")

# Each object has its own unique instance variables
print(f"Dog 1's name: {dog1.name}")
print(f"Dog 2's name: {dog2.name}")

# Each object can call its own method
dog1.bark()
dog2.bark()
      
#===========================================
4. #Class Variables vs. Instance Variables
#==========================================
class Employee:
    # Class variable (shared by all instances)
    company = "TechCorp Inc."
    raise_amount = 1.04
    
    def __init__(self, first, last, salary):
        self.first = first # Instance variable
        self.last = last   # Instance variable
        self.salary = salary # Instance variable

    def apply_raise(self):
        self.salary = self.salary * self.raise_amount

emp1 = Employee("John", "Doe", 50000)
emp2 = Employee("Jane", "Smith", 60000)

print(f"Employee 1's company: {emp1.company}")
print(f"Employee 2's company: {emp2.company}")
# We can change the class variable, and it affects all instances
Employee.company = "NewTech Inc."
print(f"\nAfter changing class variable:")
print(f"Employee 1's company: {emp1.company}")
print(f"Employee 2's company: {emp2.company}")`,

      "Inheritance and Method Overriding":`
#==========================================================
2. #Creating Child Classes that Inherit from Parent Classes
#=========================================================
# Parent Class (Superclass)
class Animal:
    def __init__(self, name, species):
        self.name = name
        self.species = species
    
    def speak(self):
        print(f"The {self.species} named {self.name} makes a sound.")
    
    def eat(self):
        print(f"{self.name} is eating.")

# Child Class (Subclass) that inherits from Animal
class Dog(Animal):
    # The Dog class automatically inherits name, species, speak(), and eat()
    def __init__(self, name, breed):
        # We still need to call the parent's constructor
        super().__init__(name, "Dog")
        self.breed = breed
    
    def fetch(self):
        print(f"{self.name} is fetching the ball.")

# Create an object of the child class
my_dog = Dog("Buddy", "Golden Retriever")

# The child class object can use methods from the parent class
my_dog.eat()
my_dog.speak()

# It can also use its own new methods
my_dog.fetch()

#===========================================
3. #Method Overriding and super() Function
#==========================================
# Child Class with method overriding
class Cat(Animal):
    def __init__(self, name, color):
        super().__init__(name, "Cat")
        self.color = color

    # Overriding the 'speak' method
    def speak(self):
        print(f"{self.name} the {self.color} cat says 'Meow!'")

    # A method that calls the parent's method using super()
    def extended_eat(self):
        print(f"The {self.species} is preparing to eat...")
        super().eat()  # Call the eat() method from the parent class

# Create a Cat object
my_cat = Cat("Whiskers", "black")

# Calling the overridden method
my_cat.speak()

# Calling the method that uses super()
my_cat.extended_eat()

#================================
4. #Multiple Inheritance Basics
#================================
# A Mixin class (a class with a specific, optional behavior)
class Swimmer:
    def swim(self):
        print("I can swim.")

# Another Mixin class
class Flyer:
    def fly(self):
        print("I can fly.")

# A child class inheriting from both Swimmer and Flyer
class Duck(Swimmer, Flyer):
    def __init__(self, name):
        self.name = name

    def quack(self):
        print(f"{self.name} says 'Quack!'")

my_duck = Duck("Donald")
my_duck.quack()
my_duck.swim()  # Inherited from Swimmer
my_duck.fly()   # Inherited from Flyer`,


      "Encapsulation and Property Decorators":`
#============================================
1. #Public, Protected, and Private Attributes
#============================================
class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner  # Public attribute
        self._account_number = "123456789" # Protected attribute (convention)
        self.__balance = balance # Private attribute (name mangling)

    def deposit(self, amount):
        self.__balance += amount
        print(f"Deposited +$" str(amount) + ". New balance: $" + str(self.__balance))

# Creating an instance of the class
account = BankAccount("Alice", 1000)

# Accessing public attribute works
print(f"Owner: {account.owner}")

# Accessing protected attribute works, but it's not recommended
print(f"Account number: {account._account_number}")

# Attempting to access private attribute directly raises an error
try:
    print(account.__balance)
except AttributeError as e:
    print(f"Error accessing __balance: {e}")

# The private attribute can be accessed indirectly through its mangled name
# (though you should not rely on this)
print(f"Balance (via name mangling): {account._BankAccount__balance}")

#==============================
2. #Getter and Setter Methods
#==============================
class Product:
    def __init__(self, name, price):
        self.name = name
        self.set_price(price) # Use the setter for initial value

    # Getter method for price
    def get_price(self):
        return self._price

    # Setter method for price with validation
    def set_price(self, new_price):
        if not isinstance(new_price, (int, float)) or new_price <= 0:
            print("Error: Price must be a positive number.")
            self._price = 0
        else:
            self._price = new_price

item = Product("Book", 25)
print(f"Price: $" + str(item.get_price()))

# Use the setter to change the price
item.set_price(30)
print(f"New price: $" + str(item.get_price()))

# The setter method prevents invalid data from being set
item.set_price(-10)
print(f"Price after invalid attempt: $" + str(item.get_price()))

#=============================================
3. #Property Decorators for Controlled Access
#=============================================
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price # This now calls the setter method!

    @property # The getter method
    def price(self):
        return self._price

    @price.setter # The setter method
    def price(self, value):
        if not isinstance(value, (int, float)) or value <= 0:
            raise ValueError("Price must be a positive number.")
        self._price = value

item = Product("Book", 25)

# Accessing the "price" attribute calls the getter method
print(f"Item price: $" + str(item.price))

# Changing the "price" attribute calls the setter method
item.price = 35
print(f"New item price: $" + str(item.price))

# This will now raise a ValueError, as handled by the setter
try:
    item.price = -20
except ValueError as e:
    print(f"Error changing price: {e}")`,

         };
      return examples[lessonTitle] || "/* Example code will be provided */"
    }
    
    const getPythonCodeExplanation = (lessonTitle) => {
      const explanations = {
    
         "Introduction to Python and Setting Up":`
**What is Python and Why It's Popular**
Python is a versatile and high-level programming language known for its readability and simple syntax. 
This makes it an ideal language for beginners and a powerful tool for experienced developers.

**Python's popularity stems from a few key factors**:

- **Readability**: Python's syntax is designed to be clear and easy to understand. It uses indentation to 
define code blocks, which forces a clean and consistent style.
- **Versatility**: Python is used in a wide range of fields, including web development, data science, 
machine learning, artificial intelligence, and automation.
- **Large Community and Rich Ecosystem**: Python has a massive, active community and a vast collection of libraries 
and frameworks (like Django, Flask, Pandas, and TensorFlow) that simplify complex tasks.
- **Cross-platform Compatibility**: Python code can run on different operating systems like Windows, macOS, and 
Linux without needing to be rewritten.

***Installing Python and Setting Up a Development Environment***
Before you can start writing code, you need to install Python and set up a place to write and run your programs.
- **Download Python**: Go to the official Python website at https://www.python.org/downloads/ and download the 
latest stable version for your operating system.
- **Install Python**: Run the installer. On Windows, make sure to check the box that says "Add Python to PATH" 
during the installation process. This will allow you to run Python commands from your command line.
- **Choose a Code Editor**: While you can write code in a simple text editor, using a dedicated code editor 
or Integrated Development Environment (IDE) is highly recommended. Popular choices include:

- *VS Code*: A powerful and lightweight editor from Microsoft with excellent Python support.
- *PyCharm*: A dedicated IDE for Python development, offering more advanced features.
- *Jupyter Notebook*: An interactive environment often used in data science.

**Understanding the Python Interpreter**
The Python interpreter is the program that reads and executes your Python code. When you run a Python script, 
the interpreter translates your human-readable code into instructions the computer can understand.

You can interact with the interpreter directly from your terminal or command prompt by typing python 
(or python3 on some systems). This opens an interactive session where you can execute commands one 
line at a time.

**Code Explanation**:
- \`print()\` is a built-in Python function. Its purpose is to display a message on the screen.
- The text \`"Hello, World!"\` is a string, which is a sequence of characters. You must enclose strings 
in either single \`(')\` or double \`(")\` quotes.
- The hash symbol \`(#)\` creates comments that explain code but don't execute. 
- Variables like \`result\` store values that can be used later. 
- Notice Python's clean syntax - no semicolons or complex punctuation needed.

***How to Run the Program***:
- Open your terminal or command prompt.
- Navigate to the directory where you saved your \`hello.py\` file and press Enter.
- Type the following command code example above and press Enter:
You should see the output:

\`Hello, World!\` and \`15\`
*Congratulations! You've just written and executed your first Python program.*`,

    "Variables and Data Types":`
1. **Understanding Variables as Containers for Data**
In programming, a variable is a named storage location that holds a value. 
Think of it as a container with a label. You can put different types of data into 
this container, and you can change the data inside it at any time.

In Python, you declare a variable by simply giving it a name and assigning a value to it 
using the assignment operator 
**Code Explanation**:
- The \`code greeting = "Hello, Python!"\` creates a variable named \`greeting\` and stores the 
string \`"Hello, Python!"\` inside it.
- The variable \`age\` stores the integer \`30\`.
- The variable \`pi_value\` stores the floating-point number \`3.14159.\` 

2. **Python's Main Data Types**
Python has several built-in data types. The most common ones are:
- Integers (\`int\`): Whole numbers, positive or negative, without a decimal point.e.g. \`number = 100\`
- Floats (\`float\`): Numbers with a decimal point.e.g \`price = 99.99\`
- Strings (\`str\`): Sequences of characters. They are enclosed in single quotes (\`'\`), 
double quotes (\`"\`), or triple quotes (\`"""\`). e.g \`name = "John Doe"\`
- Booleans (\`bool\`): Represents one of two values: \`True\` or \`False\`. 
They are used for logical operations. e.g \`is_active = True\`

You can use the \`type()\` function to find out the data type of any variable.

**Code Explanation**
\`print(type(name))\` will return    \`<class 'str'>\`
\`print(type(age))\`  will return    \`<class 'int'>\`
\`print(type(height))\` will return   \`<class 'float'>\`
\`print(type(is_student))\`  will return  \`<class 'bool'>\`

3. **Dynamic Typing in Python**
Python is a dynamically typed language. This means you do not need to explicitly declare the data 
type of a variable when you create it. The Python interpreter automatically infers the type of the 
variable based on the value you assign to it.

A variable's type can also be changed during the program's execution by assigning a new value 
of a different type.
**Code Explanation**
- Initially, \`my_variable\` holds the integer \`10\`.
- Then, we reassign it the string \`"Hello"\`. The old integer value is discarded, and 
the variable now holds a string.
- Finally, we assign it the float \`3.14\`. This ability to change a variable's type 
on the fly is what "dynamic typing" means.

4. **Variable Naming Conventions**
Following a consistent naming convention makes your code easier to read and understand. 
Python has a few simple rules and best practices:

***Rules***:
- Variable names must start with a letter (\`a-z\`, \`A-Z\`) or an underscore (\`_\`).
- They cannot start with a number.
- They can only contain alpha-numeric characters and underscores (\`a-z\`, \`A-Z\`, \`0-9\`, \`_\`).
- Variable names are case-sensitive (myVar is different from myvar and user_name is different from User_name ).`,
  
     "String Operations and Methods":`
1. **Creating and Manipulating Strings**
A string is a sequence of characters. You can create strings by enclosing the characters in single quotes (\`'...'\`),
double quotes (\`"..."\`), or triple quotes (\`"""..."""\` or \`'''...'''\`). Triple quotes are useful for multi-line strings.

**Code Explanation**:
- \`my_string[0]\` retrieves the character at index 0, which is 'P'.
- \`my_string[5]\` retrieves the character at index 5, which is 'n'.
- \`my_string[1:4]\` creates a new string by "slicing" the original from index 1 up to (but not including) index 4, resulting in \`"yth"\`.

2. **String Concatenation and Formatting**
**String concatenation** is the process of joining two or more strings together. 
The most common way to do this is with the \`+\` operator.
**String formatting** is a more powerful way to create strings by inserting values into a placeholder.
Python has several methods for this, with f-strings being the most modern and recommended.

**Code Explanation**:
- The \`+\` operator joins the strings. Note that you must convert numbers to strings using \`str(age)\` 
before concatenating, otherwise, you'll get a TypeError.
- F-strings \`(f"...")\` are easy to use. You simply place a variable or expression inside curly braces \`{}\` 
within the string. Python automatically converts the value to a string.
- The \`.format()\` method uses \`{}\` as placeholders and replaces them with the arguments passed to the method.

3. **Common String Methods**
Python strings are objects that come with a rich set of built-in methods for performing common operations.

**Code Example**
- \`text.upper()\` returns a new string in all uppercase letters. 
String methods do not modify the original string; they return a new one.
- \`text.split(" ")\` splits the string wherever a space character occurs and 
returns a list of the resulting substrings.

4. **Escape Characters and Raw Strings**
**Escape characters** allow you to include special characters in your strings that would otherwise be difficult 
or impossible to type, such as newlines, tabs, or quotes. They are created with a backslash \`(\)\`.
**Raw strings** treat backslashes as literal characters, which is especially useful when dealing with file paths.

**Code Explanation**:
- \`\n\` represents a newline character, which moves the cursor to the next line.
- \`\t\` represents a tab character.
- \`\"\` allows you to include a double quote within a double-quoted string without ending the string.
- \`r"..."\` creates a raw string. The backslashes are not interpreted as escape characters. 
This is crucial for paths in Windows, where backslashes are used as separators.`,

"Numbers and Mathematical Operations":`
1. **Arithmetic Operators**
Python provides standard arithmetic operators to perform calculations.

- **Addition (\`+\`)**: Adds two numbers.
- **Subtraction (\`-\`)**: Subtracts the second number from the first.
- **Multiplication (\`*\`)**: Multiplies two numbers.
- **Division (\`/\`)**: Divides the first number by the second. The result is always a float.
- **Floor Division (\`//\`)**: Divides and rounds down to the nearest whole number (integer).
- **Modulus (\`%\`)**: Returns the remainder of a division.
- **Exponentiation (\`**\`)**: Raises the first number to the power of the second.

**Code Explanation**:
- \`a / b\` results in \`3.75\`, \`a float\`.
- \`a // b\` results in \`3.\` It performs the division and then discards the decimal part.
- \`a % b\` gives the remainder of \`15\`
- ***div4***, which is 3. This is often used to check if a number is even or odd (e.g., \`number % 2 == 0\`).

2. **Order of Operations (PEMDAS)**
Python follows the standard mathematical order of operations, often remembered by the acronym PEMDAS or BODMAS:

- Parentheses \`()\` (or Brackets)
- Exponents \`**\` (or Orders)
- Multiplication \`*\` and Division \`/\`, \`//\`, \`%\` (from left to right)
- Addition \`+\` and Subtraction \`-\` (from left to right)
*Using parentheses is the best way to ensure your code calculates expressions in the intended order*.

3. **Built-in Mathematical Functions**
Python's built-in functions can be used for common mathematical tasks. For more advanced functions, 
you can import the math module.

- \`abs()\`: Returns the absolute value of a number.
- \`round()\`: Rounds a number to the nearest integer.
- \`max()\`: Returns the largest of the arguments.
- \`min()\`: Returns the smallest of the arguments.

4. **Working with Integers and Floating-Point Numbers**
Integers and floats are distinct data types. Be mindful of this, especially when performing mixed-type operations.

- **Type Conversion**: You can convert between integers and floats using \`int()\` and \`float()\`.
- **Automatic Type Promotion**: If an operation involves both an \`int\` and a \`float\`, Python automatically converts 
the \`int\` to a \`float\` before performing the calculation to avoid losing precision. The result will always be a \`float\`.

**Code Explanation**
- \`integer_value + float_value\` results in \`15.5\` because Python promotes the integer \`10\` to a float \`10.0\` before adding.
- \`int(float_value)\` converts the float to an integer by truncating (cutting off) the decimal part, not by rounding.
- \`float(integer_value)\` simply adds a \`.0\` to the integer to make it a float.`,

      "Input and Output":`
1. **Getting User Input with input() Function**
The \`input()\` function is a built-in Python function that allows you to get data from the user. 
When \`input()\` is called, the program pauses and waits for the user to type something and press Enter.
The function takes an optional argument, which is a string that will be displayed to the user as a prompt. 
The value returned by \`input()\` is always a string, regardless of what the user types.

**Code Explanation**:
- \`input("Please enter your name: ")\` displays the message "Please enter your name: " and waits for user input.
- Whatever the user types (e.g., "Alice") is captured as a string and stored in the \`name\` variable.
- Similarly, \`input("Please enter your age: ")\` stores the age as a string (e.g., \`"30"\`), not a number.
     
2. **Converting Input Strings to Numbers**
Since \`input()\` always returns a string, you must convert it to a number type (\`int\` or \`float\`) if you need to 
perform mathematical calculations. You can use the \`int()\` or \`float()\` functions for this.

**Code Explanation**:
- \`num1_str\` and \`num2_str\` store the input as strings (e.g., \`"10"\` and \`"5"\`).
- \`int(num1_str)\` and \`int(num2_str)\` convert these strings into the integer values \`10\` and \`5\`.
- The addition \`num1 + num2\` is now a proper mathematical operation, resulting in \`15\`.

If you forget to convert, you will get an incorrect result for addition (string concatenation) 
or a \`TypeError\` for other operations. For example, \`"10" + "5"\` results in \`"105"\`.

3. **Formatting Output with print() Function**
The print() function is used to display output. You can print multiple values by separating them with 
commas, and you can control how they are displayed.

- **F-strings**: The most common and readable way to format output. They allow you to embed expressions 
directly inside a string literal.
- **\`sep\` and \`end\` parameters**: The \`print()\` function has optional parameters \`sep\` (separator) and \`end\`.
- \`sep\`: Specifies the separator to use between the arguments. The default is a space.
- \`end\`: Specifies what to print at the end of the line. The default is a newline character \`(\n)\`.

**Code Explanation**:
- \`print(f"...")\` is an easy way to present information clearly.
- \`print("Apple", "Banana", "Cherry", sep=" | ")\` will output: \`Apple | Banana | Cherry\`.
- The \`end=" "\` in the first \`print()\` call replaces the default newline with a space, 
so the next \`print()\` statement's output appears on the same line.

4. **Understanding Input Validation Basics**
User input is often unpredictable. If a user enters text where a number is expected, your program will crash 
with a \`ValueError\`. This is why basic input validation is important.
A common way to handle this is with a \`try-except\` block, which attempts to run code 
and "catches" any potential errors.

**Code Explanation**:
- The code inside the \`try\` block is executed first.
- If the user enters a valid number (e.g., \`"175"\`), float(height_str) works, and the program continues.
- If the user enters non-numerical text (e.g., \`"tall"\`), \`float()\` will raise a \`ValueError\`.
- The program then immediately jumps to the \`except ValueError\`: block, which prints an 
informative error message instead of crashing. This makes your program more robust and user-friendly.`,

  "Lists-Creation and Basic Operations":`
 1. **Understanding Lists as Ordered Collections** 
A list is a fundamental data structure in Python that allows you to store a collection of items. 
Key characteristics of lists include:

- **Ordered**: The items in a list have a defined order, and this order will not change unless you modify the list.
- **Mutable**: You can change, add, or remove items from a list after it has been created.
- **Heterogeneous**: A list can contain items of different data types (e.g., integers, strings, floats) within the same list.
Lists are defined by enclosing comma-separated values in square brackets \`[]\`

2. **Creating Lists and Accessing Elements**
To create a list, you simply assign a sequence of values to a variable. You can then access individual elements using their index. 
List indexes are always integers, and they start at \`0\`.

**Code Explanation**:
- \`fruits[0]\` accesses the item at index \`0\`, which is the first item.
- \`fruits[1] = "grape"\` changes the item at index \`1\` from \`"banana"\` to \`"grape"\`. 
Since lists are mutable, this operation is allowed.

3. **List Indexing (Positive and Negative)**
Python supports both positive and negative indexing.
- **Positive Indexing**: Starts from the beginning of the list, with \`0\` for the first item, \`1\` for the second, and so on.
- **Negative Indexing**: Starts from the end of the list, with \`-1\` for the last item, \`-2\` for the second to last, and so on. 
This is a convenient way to access elements from the end without knowing the list's length.

**Code Explanation**:

- \`letters[-1]\` directly accesses the last element of the list, which is \`"e"\`.
- \`letters[-2]\` accesses the second-to-last element, \`"d"\`.
- \`letters[1:4]\` creates a new list containing elements from index \`1\` up to (but not including) \`4\`.

4. **Basic List Operations: append, insert, remove**
Lists have a variety of built-in methods for performing common operations.
- \`append(item)\`: Adds a single item to the end of the list.
- \`insert(index, item)\`: Inserts an item at a specific index. The existing elements are shifted to the right.
- \`remove(item)\`: Removes the first occurrence of a specified item from the list. If the item is not found, it raises a \`ValueError\`.`,

      "List Methods and Advanced Operations":`
1. **Essential List Methods: sort, reverse, count, index**
In addition to basic operations like \`append()\` and \`remove()\`, Python lists come with several useful methods that 
allow you to manipulate and query their contents.

- \`list.sort()\`: Sorts the list in ascending order.
- \`list.reverse()\`: Reverses the order of the elements in the list.
- \`list.count(item)\`: Returns the number of times a specified item appears in the list.
- \`list.index(item)\`: Returns the index of the first occurrence of a specified item.

**Code Explanation**:
- \`numbers.sort()\` modifies the list in place. It doesn't return a new list. This is an important distinction to remember.
- \`numbers.count(1)\` counts how many times the value 1 appears.
- \`numbers.index(4)\` returns the index of the first 4 it finds. If the item is not in the list, it raises a ValueError.

2. **List Comprehensions for Creating Lists**
List comprehensions offer a concise and elegant way to create lists. They provide a shorter syntax for 
creating a new list based on the values of an existing iterable (like another list, a tuple, or a range). 
They are often more readable and efficient than a traditional \`for\` loop.
The general syntax is \`[expression for item in iterable if condition]\`.

**Code Explanation**:
- \`[i ** 2 for i in range(1, 6)]\` reads like this: "Create a list where each element is \`i ** 2\` for every \`i\` in the range from 1 to 5."
- \`[num for num in range(10) if num % 2 == 0]\` adds a condition. It reads: "Create a list where each element is \`num\` for every \`num\` in 
the range from 0 to 9, but only if \`num\` is divisible by 2 (i.e., is even)."

3. **Copying Lists vs. Referencing**
When you assign a list to a new variable, you are not creating a new list. 
You are creating a new reference to the same list in memory. Any changes made through one 
variable will affect the other. This is a common source of bugs for beginners.

To create a true copy of a list, you must use a method that explicitly copies the elements.
1. **Referencing**: Simple assignment new_list = old_list.
2.**Copying**:
- Slicing: \`new_list = old_list[:]\`
- \`list()\` constructor: \`new_list = list(old_list)\`
- \`list.copy()\` method: \`new_list = old_list.copy()\`
   
**Code Explanation**:
- When we append \`4\` to \`reference_list\`, the \`original\` list also changes because both variables 
point to the exact same list object in memory.
- When we append \`5\` to \`copied_list\`, the \`original\` list is unaffected because \`original[:]\` 
created a new, independent copy.

4. **Nested Lists Basics**
A **nested list** is a list that contains other lists as its elements. 
This is often used to represent matrices, grids, or multi-dimensional data.

**Code Explanation:
- \`matrix[1]\` returns the list \`[4, 5, 6]\`.
- \`matrix[1][2]\` first accesses the list at index \`1\` \`([4, 5, 6])\` and then 
accesses the element at index 2 within that inner list \`(6)\`.
- The nested for loops provide a common way to process every item in a nested list. 
The outer loop iterates through each \`row\`, and the inner loop iterates through each \`element\` in that \`row\`.`,

    "Tuples and Their Uses":`
1. **Understanding Tuples as Immutable Sequences**
A tuple is an ordered collection of items, much like a list. However, the key difference is that tuples 
are immutable. This means that once a tuple is created, you cannot change, add, or remove its elements.

Tuples are defined using parentheses \`()\` instead of the square brackets \`[]\` used for lists.

**Code Explanation**:
- \`my_tuple = ("apple", "banana", "cherry")\` creates a tuple.
- Accessing elements with \`my_tuple[0]\` works the same way as with lists.
- The \`try-except\` block demonstrates that attempting to assign a new value to an element of a 
tuple will raise a \`TypeError\` because tuples are immutable.

2. **When to Use Tuples vs. Lists**
 introduction: "The choice between a list and a tuple depends on your needs.",
      ### Comparison Table

| Feature | Tuples | Lists |
| :--- | :--- | :--- |
| **Mutability** | Immutable (cannot be changed) | Mutable (can be changed) |
| **Syntax** | \`()\` parentheses | \`[]\` square brackets |
| **Performance** | Generally faster for iteration and access | Slightly slower due to mutability overhead |
| **Use Case** | Fixed collections (e.g., coordinates, database records, function return values) | Dynamic collections (e.g., lists of users, items in a shopping cart) |

3. **Tuple Packing and Unpacking**
- **Tuple packing** is the process of putting multiple values into a single tuple. 
This happens automatically when you create a tuple.
- **Tuple unpacking** is the process of extracting the values from a tuple and assigning them 
to separate variables. This is a very common and convenient feature in Python. 

**Code Explanation**:
In \`name, age, city = person\`, Python knows to match the variables on the left 
with the values in the \`person\` tuple on the right.

Unpacking is also used to easily swap variables without needing a 
temporary variable. \`a, b = b, a\` is a concise way to swap their values.

4. **Named Tuples for Structured Data**
While regular tuples are great for simple, fixed collections, they can become hard to read 
when you're accessing elements by index (e.g., \`user[0]\`). Named tuples provide a solution by 
allowing you to access elements by name instead of index, making your code more self-documenting and readable.
Named tuples are part of the collections module.

**Code Explanation**:
- \`Person = namedtuple(...)\` creates a new class-like object called Person.
- \`p1 = Person(...)\` creates an instance of this \`Person\` object.
- You can now access the elements using \`p1.name\` and \`p2.city\`, which is much clearer than \`p1[0]\` and \`p2[2]\`. 
This makes your code less prone to errors if the order of the fields changes.`,

         "Dictionaries - Key-Value Pairs":`
1. **Understanding Dictionaries as Key-Value Mappings**
A dictionary is a powerful data structure in Python that stores data in key-value pairs. 
Unlike lists and tuples that are ordered by a numerical index, dictionaries are unordered 
and are indexed by unique, immutable keys.

Think of a dictionary as a real-world dictionary. You look up a word (the key) 
to find its definition (the value). Each key must be unique, but the values can 
be of any data type and can be duplicates.

Dictionaries are defined by enclosing comma-separated key-value pairs in curly braces \`{}\`. 
Each pair is written as \`key: value\`.

**Code Explanation**:
- In the \`person\` dictionary, \`"name"\`, \`"age"\`, and \`"city"\` are the keys. \`"Alice"\`, \`30\`, 
and \`"New York"\` are their corresponding values.
- Note that keys are typically strings, but they can be any immutable type 
(e.g., numbers, tuples). Values can be anything.

2.**Creating and Accessing Dictionary Data
You can access the value associated with a key using square bracket notation \`[key]\`. 
If you try to access a key that does not exist, it will raise a \`KeyError\`.
A safer way to access a value is with the \`.get()\` method, which returns None (or a specified default value) 
if the key is not found.

**Code Explanation**:
- \`person["name"]\` returns the value \`"Alice"\`.
- \`person.get("country", "Not specified")\` looks for the key \`"country"\`. Since it doesn't exist, 
it returns the default value \`"Not specified"\` instead of raising an error.

3. **Dictionary Methods: keys(), values(), items()**
These methods are used to get views of a dictionary's keys, values, or key-value pairs.
- \`dict.keys()\`: Returns a view object containing all the keys.
- \`dict.values()\`: Returns a view object containing all the values.
- \`dict.items()\`: Returns a view object containing all the key-value pairs as tuples.
         
**Code Explanation**:
- \`product.keys()\`, \`product.values()\`, and \`product.items()\` return "view objects,"
which are dynamic representations of the dictionary's contents. If the dictionary changes, 
the view objects reflect those changes.
- The \`for key, value in product.items()\`: loop is a very common pattern for iterating through 
a dictionary and accessing both the key and value in each iteration.

4. **Adding, Updating, and Removing Dictionary Entries**
Dictionaries are mutable, so you can easily modify them after creation.
- ***Adding/Updating***: To add a new key-value pair, or update the value of an existing 
key, you use the square bracket notation \`dict[key] = new_value\`.

- ***Removing***:
- The \`del\` statement removes a key-value pair by its key.
- The \`.pop(key)\` method removes a key and returns its value. This is useful if you 
need to use the value you just removed.`,

      "Sets - Unique Collections":`
1. **Understanding Sets as Unordered Collections of Unique Items**
A set is an unordered collection of unique, immutable elements. The key features of sets are:
- **Uniqueness**: A set cannot contain duplicate elements. Any duplicates added to a set will be automatically discarded.
- **Unordered**: Items in a set do not have a defined order or index. Therefore, you cannot access elements by index like 
you would with a list or a tuple.
**Mutable**: Sets themselves are mutable (you can add or remove elements), but the elements they contain must be immutable 
(e.g., numbers, strings, tuples). You cannot put a list or a dictionary into a set.

Sets are created using curly braces \`{}\` or the \`set()\` constructor. Note that an empty set must be created with \`set()\`, 
as \`{}\` creates an empty dictionary.

**Code Explanation**:
- \`my_set = {1, 2, 3, 4, 4, 5}\` shows that the set automatically handles the duplicate \`4\`.

- \`set(numbers)\` is a powerful and quick way to get all the unique elements from any iterable.
      
2. **Set Operations: Union, Intersection, Difference**
Sets are based on mathematical set theory and have methods for performing operations like finding shared elements 
or elements that are in one set but not another.
- **Union** (\`|\` or \`.union()\`): Returns a new set containing all elements from both sets.
- **Intersection** (\`&\` or \`.intersection()\`): Returns a new set with only the elements common to both sets.
- **Difference** (\`-\` or \`.difference()\`): Returns a new set with elements that are in the first set but not in the second.
    
**Code Explanation**:
- \`set1 | set2\` or \`set1.union(set2)\` combines all the unique elements from both sets.
- \`set1 & set2\` or \`set1.intersection(set2)\` finds the elements \`4\` and \`5\` that are present in both sets.
- \`set1 - set2\` or \`set1.difference(set2)\` finds the elements that are exclusively in \`set1\`.

3. **When to Use Sets for Data Deduplication**
One of the most practical and common uses of sets is to quickly and efficiently remove duplicate items 
from a collection. Since sets are designed to hold only unique items, converting a list to a set and back 
to a list is a simple and effective way to deduplicate data.

**Code Explanation:
- \`set(all_fruits)\` creates a set \`{ 'apple', 'banana', 'cherry', 'grape' }\` by automatically discarding the duplicates.
- \`list(...)\` converts this set back into a list. This is a very common and Pythonic way to handle deduplication.

4. **Frozen Sets for Immutable Collections**
A **frozenset** is an immutable version of a set. Once a frozenset is created, you cannot add or remove elements.
The primary use of frozensets is to be used as elements in another set or as keys in a dictionary, 
which is not possible with regular (mutable) sets.

**Code Explanation**:
- \`frozenset([1, 2, 3])\` creates an immutable set.
- The \`add()\` method, which exists for regular sets, does not exist for frozensets, so attempting to call it raises an \`AttributeError\`.
- The last example shows that you can use a frozenset as a dictionary key because it is immutable, which is a requirement for dictionary keys.
You cannot use a regular set for this purpose.`,

      "Conditional Statements - if, elif, else":`
1. **Boolean Logic and Comparison Operators**
Conditional statements rely on boolean logic—expressions that evaluate to either \`True\` or \`False\`. 
You create these expressions using comparison operators.

- \`==\` (Equal to)
- \`!=\` (Not equal to)
- \`>\` (Greater than)
- \`<\` (Less than)
- \`>=\` (Greater than or equal to)
- \`<= \`(Less than or equal to)
The result of a comparison is always a boolean value (\`True\` or \`False\`).

**Code Explanation**:
- \`x == y\` evaluates to \`False\` because \`10\` is not equal to \`5\`.
- \`x != y\` evaluates to \`True\`.
- These boolean results are what conditional statements use to make decisions.

2. **if, elif, else Statement Structure**
Conditional statements allow your program to execute different blocks of code based on whether a condition is \`True\` or \`False\`.
- The \`if\` statement is the foundation. Its code block runs only if the condition is \`True\`.
- The \`elif\` (else if) statement is optional and allows you to check for a new condition if 
the previous \`if\` or \`elif\` conditions were False. You can have multiple \`elif\` blocks.
- The \`else\` statement is also optional and provides a default code block to run if all preceding 
\`if\` and \`elif\` conditions are \`False\`.

**Code Explanation**:
- The program first checks \`if score >= 90\`. Since \`85\` is not greater than or equal to \`90\`, this is \`False\`.
- It then moves to the next block and checks \`elif score >= 80\`. Since \`85\` is greater than or equal to \`80\`, this is \`True\`.
- The code inside this \`elif\` block \`(print("Grade: B"))\` is executed.
- The program then skips all subsequent \`elif\` and \`else\` blocks and continues with the rest of the script.

3. **Nested Conditionals**
You can place \`if\`, \`elif\`, and \`else\` statements inside other conditional blocks. This is called nested conditionals 
and is useful for checking for multiple layers of conditions.

**Code Explanation**:
- The outer \`if is_member\`: block checks if the user is a member.
- If that's \`True\`, the program enters the block and then encounters a nested \`if\` statement \`(if has_coupon:)\`.
- This inner \`if\` statement then checks for a second condition. The output depends on the values of both
\`is_member\` and \`has_coupon\`.

4. **Combining Conditions with and, or, not**
You can combine multiple conditions into a single expression using logical operators.
- \`and\`: The condition is \`True\` only if all combined conditions are \`True\`.
- \`or\`: The condition is \`True\` if at least one of the combined conditions is \`True\`.
- \`not\`: Reverses the boolean value of a condition. \`not True\` is \`False\`, and \`not False\` is \`True\`.

**Code Explanation**
- \`age >= 18 and is_student\`: Both conditions must be \`True\` for the \`if\` block to run. Here, \`20 >= 18\` is \`True\` and \`is_student\` is \`True\`, 
so the combined expression is \`True\`.
- \`is_sunny\` or \`is_warm\`: Only one of the conditions needs to be \`True. 
Here, \`is_warm\` is \`True\`, so the combined expression is \`True\`.
- \`if not is_full:\`: This checks if the value of \`is_full\` is \`False\`. 
Since it is \`False\`, \`not is_full\` evaluates to \`True\`, and the \`if\` block is executed.`,

    "Loops - for and while":`
1. **Understanding Iteration and Repetition**
Loops are fundamental programming constructs that allow you to repeatedly execute a block of code. 
This is known as **iteration**. Loops save you from writing the same code over and over again, 
making your programs more efficient and easier to maintain.

Python provides two main types of loops: \`for\` loops and \`while\` loops

2. **for Loops with Ranges and Collections**
A \`for\` **loop** is used to iterate over a sequence (like a list, tuple, string, or dictionary) 
or any other iterable object. It's best used when you know exactly how many times you want 
to loop or when you want to process every item in a collection.
The syntax is \`for item in sequence:\`.

**Code Explanation**:
- In the first loop, the variable \`fruit\` takes on the value of each item in the \`fruits\` list one by one.
- \`range(5)\` generates a sequence of numbers from \`0\` to \`4\`. The loop runs five times.
- \`range(1, 4)\` generates numbers from \`1\` up to \`3\`.
- \`range(0, 10, 2)\` generates numbers from \`0\` up to \`9\` but in steps of \`2\`

3. **while Loops for Condition-Based Repetition**
A \`while\` **loop** continues to execute as long as a specified condition is \`True\`. It's best 
used when you don't know in advance how many times the loop needs to run.
The syntax is \`while condition\`:

**Code Explanation**:
- The \`while count <= 3:\` loop will run as long as \`coun\`t is less than or equal to \`3\`. Inside the loop, \`count\` is incremented. 
Eventually, \`count\` becomes \`4\`, the condition becomes \`False\`, and the loop terminates.
- The guess game is a classic use case for a \`while\` loop. The loop continues indefinitely 
\`(while user_guess != secret_word:)\` until the user provides the correct input

4. **Loop Control: break and continue**
Sometimes you need more control over how a loop executes. Python provides two keywords for this:
- \`break\`: Immediately exits the current loop, regardless of the loop's condition.
- \`continue\`: Skips the rest of the current iteration and jumps to the next iteration of the loop.

**Code Explanation**:
- In the \`break\` example, the loop starts from \`0\` and goes up to \`4\`. When \`i\` becomes \`5\`, the \`if\` condition is met, 
\`break\` is executed, and the loop stops completely. The numbers \`6\` through \`9\` are never printed.
- In the \`continue\` example, when \`j\` is \`2\`, the \`if\` condition is met and \`continue\` is executed. 
The \`print()\` statement that follows is skipped for that single iteration, and the loop immediately moves on to \`j=3\`.`,

         "Functions-Definition and Parameters":`
1. **Defining Functions with the def Keyword**
A function is a reusable block of code that performs a specific task. Functions help organize your code, 
make it more readable, and prevent code duplication.
In Python, you define a function using the \`def\` keyword, followed by the function's name and parentheses \`()\`. 
The code to be executed by the function is indented below the definition.

**Code Explanation**:

- \`def greet_user()\`: defines a function named \`greet_user\`. 
The parentheses are required even if the function takes no inputs.
- The indented lines below the \`def\` statement are the function's body.
- \`greet_user()\` is how you call or invoke the function. 
The code inside the function's body is executed each time it's called.

2. **Parameters and Arguments**
Functions can be made more flexible by accepting inputs called **parameters**. 
When you call the function, you provide values for these parameters, which are called **arguments**.
- **Parameters**: The variables listed inside the parentheses in the function's definition.
- **Arguments**: The actual values you pass to the function when you call it.

**Code Explanation**:
- \`def greet_by_name(name)\`: defines a function with a single parameter \`name\`.
- When we call \`greet_by_name("Alice")\`, the string \`"Alice"\` is the argument, which is passed to the \`name\` parameter. 
Inside the function, the \`name\` variable now holds \`"Alice"\`.

3. **Return Values and return Statement**
Functions can send a result back to the caller using the \`return\` statement. 
This allows you to use the function's result in other parts of your program.

A function that doesn't explicitly \`return\` a value will implicitly return \`None\`.

**Code Explanation:
- \`return result\` sends the value \`30\` back to where the function was called. 
This value is then assigned to the \`product\` variable.
- Python allows a function to return multiple values. It does this by packaging them into a tuple, 
which can then be easily unpacked by the caller.

**Local vs. Global Scope Basics**
The scope of a variable refers to the part of the program where it can be accessed.

- **Local Scope**: A variable defined inside a function is said to be in the local scope. 
It only exists while the function is running and cannot be accessed from outside the function.
- **Global Scope**: A variable defined outside of any function is in the global scope. 
It can be accessed from anywhere in the program, including inside functions.

**Code Explanation**:
- \`global_variable\` is defined outside the function, so it's accessible everywhere.
- \`local_variable\` is defined inside \`my_function\`. When the function finishes, \`local_variable\` is destroyed.
- Attempting to \`print(local_variable)\` from the global scope results in a \`NameError\` because the variable no longer exists. 
This encapsulation is a key feature of functions, preventing accidental changes to variables in other parts of your code.`,

      "Function Arguments and Keyword Arguments":`
1. **Positional Arguments vs. Keyword Arguments**
When you call a function, the arguments you provide can be passed in two ways: by position or by keyword.
- **Positional Arguments**: The arguments are assigned to the parameters based on their order or position. 
The first argument is assigned to the first parameter, the second to the second, and so on.
- **Keyword Arguments**: The arguments are assigned by explicitly naming the parameter they should be associated with. 
This allows you to pass arguments in any order and makes the function call more readable.

**Code Explanation**:
- In the first call,\`"dog"\` is the first argument, so it's assigned to \`animal_type\`. 
\`"Buddy"\` is the second, so it's assigned to \`pet_name\`.
- In the second call, we explicitly say \`pet_name="Max"\` and \`animal_type="cat"\`. 
Python knows to match these by name, so the order doesn't matter. This makes the code clearer, especially for functions with many parameters.

2. **\`*args\` and \`**kwargs\` for Flexible Parameters**
Sometimes you need to write a function that can accept a variable number of arguments. 
Python provides two special syntaxes for this:
- \`*args\`: Collects an indefinite number of positional arguments into a tuple.
\`**kwargs\`: Collects an indefinite number of keyword arguments into a dictionary.

**Code Explanation**:
- \`*numbers\` in \`sum_all\` gathers all positional arguments (\`1, 2, 3\`)
into a tuple numbers with the value (\`1, 2, 3\`).
- \`**details\` in \`create_profile\` gathers all keyword arguments (\`age=30, city="London"\`, etc.) 
into a dictionary \`details\` with the value \`{'age': 30, 'city': 'London', 'profession': 'Engineer'}\`.

3. **Function Annotations for Documentation**
Function annotations provide a way to add metadata to the parameters and return value of a function. 
They are not enforced by Python but are highly useful for documentation and tools like type checkers.

You use a colon \`:\` after the parameter name to add an annotation and an arrow \`->\` before 
the colon to annotate the return value.

**Code Explanation**:
- \`width: float\` suggests that the \`width\` parameter is expected to be a \`float\`.
- \`->\` float suggests that the function is expected to return a \`float\`.
- These annotations do not prevent the code from running with an integer. 
They are a form of documentation that improves readability and can be used by external tools for static analysis.

4. **Lambda Functions for Simple Operations**
A **lambda function** (or anonymous function) is a small, single-expression function that you 
don't need to formally define with \`def\`. They are often used for short, one-time operations.
The syntax is \`lambda arguments: expression\`.

**Code Explanation**:
- \`lambda x, y: x + y\` creates a function object that takes two arguments (\`x\`, \`y\`) and returns their sum. 
We assign this function object to the variable \`add_lambda\`.

The \`sorted()\` function's \`key\` parameter expects a function that takes one argument and returns a value to sort by. \`lambda item: item[1]\`
is a perfect fit; it takes a tuple \`item\` and returns its second element (\`item[1]\`), allowing the \`sorted\` function to sort based on that value.`,

     "Modules and Packages":`
1. **Importing Modules and Specific Functions**
A **module** is a file containing Python code, such as function definitions, class definitions, and variables. 
By organizing your code into modules, you can reuse it across different programs.

You can use the \`import\` statement to make the code from a module available in your current script.
- \`import module_name\`: Imports the entire module. You must use \`module_name.function()\` to access its contents.
- \`from module_name import function_name\`: Imports only a specific function or variable. You can then use \`function_name()\` directly.

**Code Explanation**:
- \`import math\` makes all the contents of the \`math\` module available under the \`math\` namespace.
- \`from math import sqrt, pi\` imports only the \`sqrt\` function and the \`pi\` constant, 
allowing you to use them without the \`math\`. prefix.
- It's generally a good practice to import specific functions to avoid naming conflicts and to 
make your code's dependencies explicit.

2. **Standard Library Modules**
The **Python Standard Library** is a collection of modules that comes with every Python installation. 
These modules provide solutions for a wide range of common tasks, from file handling to networking.

*Some essential standard library modules include*:
- \`math\`: For mathematical functions and constants.
- \`random\`: For generating random numbers.
- \`os\`: For interacting with the operating system (e.g., file paths).
- \`datetime\`: For working with dates and times.

**Code Explanation**:
- \`random.randint(1, 10)\` generates a random number.
- \`datetime.datetime.now()\` returns an object that represents the current date and time.
- These examples show how easily you can leverage the standard library to add powerful 
functionality to your programs without needing to write the code yourself.

3. **Creating Your Own Modules**
Creating your own module is as simple as saving your Python code in a .py file. 
Any function, variable, or class you define in that file can then be 
imported and used in other Python scripts.

**Code Explanation**:
- By creating \`my_utils.py\`, you've created a custom module.
- In \`main_script.py\`, \`import my_utils\` makes all its contents available.
- This demonstrates how you can organize your own projects into reusable, logical components.

4. **Understanding Python Packages**
A **package** is a way of organizing related modules into a directory hierarchy. 
A package is simply a directory that contains a special file named \`_ _init_ _.py\`. 
This file can be empty, but its presence signals to Python that the directory should 
be treated as a package.

Packages allow for better project structure and namespace management.

**Code Explanation**
- \`utils\` is a package because it's a directory with an \`_ _init_ _.py\` file.
- \`from utils import math_ops\` imports the \`math_ops.py\` module from the \`utils\` package.
- \`from utils.string_ops import capitalize_string\` is a more specific import, bringing 
the \`capitalize_string\` function directly into the current namespace. This hierarchical 
structure is crucial for managing larger projects.`,

    "File Input and Output":`
1. **Opening and Closing Files**
Working with files involves a three-step process:
- Open the file using the built-in \`open()\` function.
- Read from or write to the file using its methods.
- Close the file using the \`.close()\` method.
The \`open()\` function returns a file object, which acts as a handle to the file. 
It takes the file path and a mode as arguments.

**Code Explanation**:
- \`open('example.txt', 'r')\` opens the file named \`example.txt\` in read mode.
- The \`f.close()\` command is crucial. If you forget to close a file, it can lead 
to data corruption or resource leaks, especially in more complex programs.

2. **Reading File Contents**
Once a file is open, you can read its content in several ways:
- \`.read()\`: Reads the entire content of the file into a single string.
- \`.readline()\`: Reads a single line from the file, including the newline character (\n).
- \`.readlines()\`: Reads all lines from the file and returns them as a list of strings

**Code Explanation**:
- \`.read()\` is efficient for small files.
- \`.readline()\` is useful when you need to process a file one line at a time.
- \`.readlines()\` is great for when you need to store and manipulate all the lines as a list.

3. **Writing to Files**
To write to a file, you must open it in a writing mode.
- \`.write(string)\`: Writes a string to the file. It does not add a newline, so you must include \n yourself.
- \`.writelines(list_of_strings)\`: Writes a list of strings to the file. Again, it does not add newlines.

**Code Explanation**:
- \`open('output.txt', 'w')\` opens the file in write mode. If the file exists, its content is erased. 
If it doesn't exist, a new file is created.
- \`open('output.txt', 'a')\` opens the file in append mode. It adds new content to the end of the file without deleting the old content.
- \`f.writelines(lines_to_write)\` writes each string from the list to the file, but you must include the \n characters yourself.

4. **File Modes and Context Managers (\`with\` statement)**
The file mode specifies how the file will be used:
- \`'r'\`: Read (default).
- \`'w'\`: Write (overwrites existing file).
- \`'a'\`: Append (adds to the end).
- \`'x'\`: Exclusive creation (fails if the file already exists).
- \`'t'\`: Text mode (default).
- \`'b'\`: Binary mode (for images, audio, etc.).

A **context manager**, enabled by the \`with\` statement, is the preferred way to handle files. 
It automatically handles the closing of the file, even if errors occur, making your code safer and cleaner.
   
**Code Explanation**:
- \`with open(...) as file_handl\`: creates a context. The \`open()\` function is called, 
and the resulting file object is assigned to the \`file_handle\` variable.
- When the code block inside the \`with\` statement is finished (either normally or due to an error), 
Python automatically calls \`file_handle.close()\`. This eliminates the possibility of forgetting to close the file.
- The for line in \`file_handle:\` loop is a highly efficient way to read a file line by line without loading the entire 
file into memory at once `,

      "Exception Handling":`
1. **Understanding Exceptions and Error Types**
In programming, an exception is an event that occurs during the execution of a program 
that disrupts the normal flow of instructions. When an error occurs, 
Python creates an exception object. If this object is not handled, 
the program will terminate and display an error message (a "traceback").

Common built-in exception types include:
- \`TypeError\: An operation is applied to an object of an inappropriate type.
- \`NameError\`: A variable is not found in the local or global scope.
- \`ValueError\`: A function receives an argument of the correct type but an inappropriate value.
- \`ZeroDivisionError\`: Division or modulo by zero.
- \`FileNotFoundError\`: A file or directory is requested but does not exist.

**Code Explanation**:
- Trying to add a string and an integer \`result = "10" + 5\` is an invalid operation 
in Python, which raises a \`TypeError\`.
- The \`try\` block attempts to execute this code. When the \`TypeError\` is raised, 
Python jumps to the \`except\` block, which prints a friendly message instead of crashing the program.

2. **try, except, else, finally Blocks**
The \`try...except\` block is the primary way to handle exceptions. 
You can also include \`else\` and \`finally\` blocks for more control.
- \`try\`: The code block that might raise an exception.
- \`except\`: The code block that runs if an exception is raised inside the \`try\` block.
- \`else\`: The code block that runs if the \`try\` block completes successfully without any exceptions.
- \`finally\`: The code block that always runs, regardless of whether an exception occurred or not. 
It's often used for cleanup actions, like closing a file.

**Code Explanation**:
- In the first call \`(safe_division(10, 2))\`, the \`try\` block succeeds. The except block is skipped, 
the \`else\` block is executed, and finally, the \`finally\` block runs.
- In the second call \`(safe_division(10, 0))\`, the \`try\` block fails with a \`ZeroDivisionError\`. 
Python immediately jumps to the except \`ZeroDivisionError\` block, the \`else\` block is skipped, 
and the \`finally\` block runs.

3. **Handling Specific Exception Types**
It's a good practice to handle specific exceptions rather than catching all of them. 
This allows you to provide more targeted error messages and prevents you from accidentally catching unexpected errors. 
You can use multiple \`except\` blocks to handle different types of exceptions.

**Code Explanation**:
- The code now has two specific \`except\` blocks. If the user enters \`"hello"\`, 
the \`ValueError\` block runs. If the user enters \`"0"\`, the \`ZeroDivisionError\` block runs.
- The general \`except Exception as e:\` block acts as a catch-all for any other errors you didn't 
specifically anticipate, which is a good practice for robust code.

4. **Raising Custom Exceptions**
Sometimes you need to signal that an error has occurred in a way that is specific to your 
program's logic. You can use the \`raise\` keyword to manually raise a built-in or custom exception.
*This is useful for enforcing rules or conditions within your code*.

**Code Explanation**:
- \`raise TypeError("Age must be an integer.")\` stops the function's execution and creates a \`TypeError\`
with a custom message.
- The calling code \`(try...except)\` can then catch this raised exception just like a 
built-in one and handle it gracefully.
- This allows you to build functions that are more reliable and provide clear, 
specific feedback when they are used incorrectly.`,

    "Object-Oriented Programming-Classes and Objects":`
1. **Understanding Classes as Blueprints for Objects**
**Object-Oriented Programming (OOP)** is a programming paradigm based on the concept of 
"objects," which can contain data (attributes) and code (methods).
- A class is a blueprint or a template for creating objects. It defines the structure 
and behavior that an object of that type will have. Think of a class like a cookie cutter.
- An object (or an instance) is a concrete realization of that blueprint. 
It's a specific item created from the class. Following the cookie cutter analogy, 
the cookies themselves are the objects.

Using classes and objects allows you to model real-world concepts in your code, 
leading to more organized and reusable programs.

**Code Explanation**:
- \`class Dog:\` defines a new class.
- \`dog1 = Dog()\` and \`dog2 = Dog()\` create two distinct objects from the \`Dog\` class.
- \`type(dog1)\` confirms that dog1 is an object of the \`Dog\` class.
- \`dog1 is dog2\` returns \`False\` because even though they are of the same type, 
they are two separate objects in memory.

2. **Creating Classes with _ _init_ _ Method**
The \`_ _init_ _\` method is a special method in a class that is automatically called 
when a new object is created. It's often called the **constructor**. Its purpose is to 
initialize the object's attributes (data).

The first parameter of any instance method, including \`_ _init_ _\`, is always \`self\`. 
\`self\` is a reference to the instance of the class (the object) itself. 
It's how you access and set the object's attributes.

**Code Explanation**:
- \`def _ _init_ _(self, make, model, year)\`: defines the constructor. 
It takes \`self\` plus three other parameters.
- \`self.make = make\` creates an **instance variable** named \`make\` on the object \`self\` and 
assigns the value of the \`make\` parameter to it. This happens for all the other parameters as well.
- \`my_car.make\` and \`my_car.model\` access the data stored within the \`my_car\` object.
- \`my_car.get_description()\` calls the \`get_description\` method associated with the \`my_car object\`.

3. **Instance Variables and Methods**
- **Instance Variables**: These are variables that belong to an individual object. 
Each object created from a class can have its own unique set of values for these 
variables. In the \`Car\` example, \`my_car.make\` and \`my_car.model\` are instance variables.
- **Methods**: These are functions that are defined inside a class and operate on the object's data. 
They are called using the dot notation on an object (e.g., \`my_car.get_description()\`)

**Code Explanation**:
- \`dog1\` has \`name="Buddy"\` and \`breed="Golden Retriever"\`.
- \`dog2\` has \`name="Lucy"\` and \`breed="Labrador"\`.
- The \`bark()\` method uses \`self.name\` to refer to the specific name of the 
object that called the method.

4. **Class Variables vs. Instance Variables**
- **Class Variables**: These are variables that are shared by all objects of a class. 
They are defined directly inside the class but outside of any method. They are used for 
data that is common to all instances.
- **Instance Variables**: As discussed above, these are unique to each object and are 
typically defined in the \`_ _init_ _\` method using \`self\`.

**Code Explanation**:
- \`company = "TechCorp Inc."\` is a class variable. Both \`emp1\` and \`emp2\` have access to it.
- \`self.first\` and \`self.last\` are instance variables, so \`emp1\` and \`emp2\` have their own 
unique values for these.
- When we change \`Employee.company\`, the change is reflected in all objects 
because they all share the same class variable.`,
  
      "Inheritance and Method Overriding":`
1. **Understanding Inheritance Relationships**  
**Inheritance** is a core concept of Object-Oriented Programming (OOP) that allows a new class 
to adopt the attributes and methods of an existing class.
- The class being inherited from is called the **parent class** (or base class, or superclass).
- The new class that inherits from the parent is called the **child class** (or derived class, or subclass).

The child class can reuse the functionality of the parent class, and it can also 
add new functionality or modify existing methods. This promotes code reuse and helps 
model "is-a" relationships (e.g., a \`Dog\` "is-a" \`Mammal\`).

2. **Creating Child Classes that Inherit from Parent Classes**
To create a child class, you simply include the name of the parent class inside 
parentheses when you define the new class.    

**Code Explanation**:
- \`class Dog(Animal)\`: defines \`Dog\` as a child class of \`Animal\`.
- The \`Dog\` class automatically inherits all the attributes and methods of the \`Animal\` class.
- The \`my_dog\` object can call \`my_dog.eat()\`, even though \`eat()\` \
is defined in the Animal class.

3. **Method Overriding and ***super()*** Function**
**Method overriding** is the process of a child class providing a specific implementation 
of a method that is already defined in its parent class. This allows the child class to 
have its own behavior while maintaining the same method name.

The \`super()\` function is a special function that allows a child class to call a method 
from its parent class. This is commonly used in the \`_ _init_ _\` method to call 
the parent's constructor and in overridden methods to extend the parent's behavior.

**Code Explanation**:
- In the \`Cat\` class, we have a new \`speak()\` method. When \`my_cat.speak()\` is called, 
Python will use the \`speak()\` method from the \`Cat\` class, not the \`Animal\` class.
- \`super().__init__(name, "Cat")\` calls the \`_ _init_ _\` method of the Animal class, 
which handles the initialization of \`self.name\` and \`self.species\`.
- \`super().eat()\` calls the \`eat()\` method from the parent class, \`Animal\`. 
This allows the child class to add its own behavior before or after the parent's behavior.

4. **Multiple Inheritance Basics**
Python supports multiple inheritance, where a class can inherit from more than one parent 
class. This allows a child class to combine the features of multiple base classes.

**Code Explanation**:
- \`class Duck(Swimmer, Flyer):\` defines \`Duck\` as a child of both \`Swimmer\` and \`Flyer\`.
- The \`Duck\` object \`my_duck\` now has access to the \`swim()\` and \`fly()\` methods from both parent classes.
- While powerful, multiple inheritance can lead to complex class hierarchies and ambiguity 
(e.g., if both parent classes have a method with the same name). It should be used carefully. 
In many cases, it's better to use an alternative like composition.`,
   
    "Encapsulation and Property Decorators":`
1. **Public, Protected, and Private Attributes**
**Encapsulation** is an OOP principle that involves bundling data and the methods that
operate on that data within a single unit (the class). It also restricts direct access 
to some of an object's components, which is a key aspect of information hiding.

In Python, there is no strict concept of "private" attributes. Instead, there are 
conventions and mechanisms to signal and enforce access restrictions.
- **Public**: By default, all attributes and methods are public. They can be accessed 
and modified from anywhere.
- **Convention**: \`self.name\`
- **Protected**: A convention to signal that an attribute or method is intended for 
internal use, usually by the class and its subclasses.
- **Convention**: Prefix the name with a single underscore, e.g., \`_protected_attribute\`.
- **Private**: A mechanism to prevent direct access to an attribute or method from outside the class. 
Python performs name mangling on these attributes.
- **Convention**: Prefix the name with a double underscore, e.g., \`_ _private_attribute.\`

**Code Explanation**:
- \`self.owner\` is public and can be accessed directly.
- \`self._account_number\` is protected by convention. Python won't stop you from accessing it, 
but it's a signal to other developers to treat it as an internal detail.
- \`self.__balance\` is a private attribute. Python renames it internally to \`_BankAccount_ _balance\`. 
This makes it much harder to accidentally access or modify from outside the class.

2. **Getter and Setter Methods**
A best practice for encapsulation is to control access to your data through **getter** 
and **setter** methods.
- **Getter**: A method that returns the value of an attribute.
- **Setter**: A method that sets or updates the value of an attribute.
This approach allows you to add logic, such as validation or logging, whenever an 
attribute is accessed or modified.

**Code Explanation**:
- We've made _price a protected attribute by convention.
- get_price() provides a controlled way to retrieve the price.
- set_price() provides a controlled way to set the price. It also includes data validation to ensure the new price is a positive number.

3. **Property Decorators for Controlled Access**
While getter and setter methods work, they can make the code verbose. The \`@property\` decorator 
provides a more "Pythonic" and cleaner way to achieve controlled access. It allows you to use methods 
as if they were simple attributes, hiding the getter and setter logic.

**Code Explanation**:
- \`@property\` decorates the method that acts as the getter. When you write \`item.price\` 
to retrieve the value, this method is automatically called.
- \`@price.setter\` decorates the method that acts as the setter. When you write \`item.price = 35\` 
to set a new value, this method is automatically called, and \`value\` will be \`35\`.
- This approach makes the code look cleaner (e.g., \`item.price = 35\` vs. \`item.set_price(35))\` 
while still providing all the benefits of encapsulation and validation.

4. **Data Validation in Classes**
As seen in the examples above, a crucial aspect of encapsulation is data validation. 
This ensures that the object's internal state remains consistent and valid. By centralizing 
the validation logic in setter methods or property decorators, you make your class more 
robust and prevent misuse. Any attempt to set an invalid value is caught and handled 
appropriately, either by raising an exception or by setting a default value.`,







         };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};

const getPythonExercises = (lessonTitle) => {
  const exercises = {
   "Introduction to Python and Setting Up":`
- Install Python and create your first "Hello World" program with proper virtual environment setup.
- Set up a development environment with a code editor and run Python scripts from command line.
- Create a simple program that displays system information and Python version details.`,

"Variables and Data Types":`
- Create variables of different data types and demonstrate type checking using type() function.
- Build a program that converts between different data types (string to int, float to string, etc.).
- Design a variable swapping program using multiple techniques (temporary variable, tuple unpacking, arithmetic)`,

"String Operations and Methods":`
- Create a text analyzer that counts words, characters, and sentences in user input.
- Build a string formatter that capitalizes names, removes extra spaces, and validates email format.
- Design a password generator using string methods to create secure passwords with specific criteria.`,

"Numbers and Mathematical Operations":`
- Create a calculator program that performs basic arithmetic operations with error handling.
- Build a compound interest calculator that demonstrates mathematical operations and formatting.
- Design a number guessing game that uses random numbers and comparison operations.`,

"Input and Output":`
- Create an interactive user profile creator that collects and displays formatted information.
- Build a quiz program that takes user input and provides feedback with proper formatting.
- Design a receipt generator that calculates totals and displays formatted output.`,

"Lists-Creation and Basic Operations":`
- Create a shopping list manager that adds, removes, and displays items.
- Build a grade tracker that stores student scores and calculates averages.
- Design a playlist organizer that manages song collections with basic list operations.`,

"List Methods and Advanced Operations":`
- Create a task prioritizer that sorts and filters todo items using list methods.
- Build a data cleaner that removes duplicates, sorts, and processes large datasets.
- Design a inventory system that uses advanced list operations for stock management.`,

"Tuples and Their Uses":`
- Create a coordinate system that uses tuples to represent and manipulate 2D points.
- Build a database-like system using tuples for immutable record storage.
- Design a color palette manager that stores RGB values as tuples with named colors.`,

"Dictionaries - Key-Value Pairs":`
- Create a contact book that stores and retrieves personal information using dictionaries.
- Build a word frequency counter that analyzes text and stores results in dictionaries.
- Design a configuration manager that handles application settings with nested dictionaries.`,

"Sets - Unique Collections":`
- Create a duplicate remover that processes lists and returns unique elements using sets.
- Build a tag system that manages unique labels and performs set operations (union, intersection).
- Design a permission system that uses sets to handle user roles and access control.`,

"Conditional Statements - if, elif, else":`
- Create a grade classifier that assigns letter grades based on numerical scores.
- Build a weather advisor that suggests activities based on temperature and conditions.
- Design a user authentication system with multiple validation checks and appropriate responses.`,

"Loops - for and while":`
- Create a multiplication table generator using nested for loops with formatted output.
- Build a menu-driven program using while loops for continuous user interaction.
- Design a pattern printer that creates various geometric patterns using loop combinations.`,

"Functions-Definition and Parameters":`
- Create a library of mathematical functions (factorial, fibonacci, prime checker) with proper parameters.
- Build a text processing toolkit with functions for cleaning, formatting, and analyzing text.
- Design a utility module with helper functions for common programming tasks.`,

"Function Arguments and Keyword Arguments":`
- Create a flexible report generator that accepts various arguments and keyword arguments.
- Build a configuration function that handles default values and variable arguments.
- Design a database query builder using *args and **kwargs for flexible parameter handling.`,

"Modules and Packages":`
- Create a custom math utilities module and import it into other programs.
- Build a package structure for a small application with multiple related modules.
- Design a plugin system that dynamically imports modules based on user selection.`,

"File Input and Output":`
- Create a log file analyzer that reads, processes, and generates reports from text files.
- Build a data backup system that saves and restores program state to/from files.
- Design a configuration file manager that reads settings from JSON/INI files.`,

"Exception Handling":`
- Create a robust file processor with comprehensive error handling for various file operations.
- Build a network request handler that gracefully manages connection errors and timeouts.
- Design a user input validator that handles and recovers from various input errors.`,

"Object-Oriented Programming-Classes and Objects":`
- Create a library management system with Book and Library classes.
- Build a banking system with Account classes that handle deposits, withdrawals, and transfers.
- Design a game character system with Player classes that have attributes and methods.`,

"Inheritance and Method Overriding":`
- Create a vehicle hierarchy (Car, Motorcycle, Truck) with inherited and overridden methods.
- Build an employee management system with different employee types inheriting from base Employee class.
- Design a shape calculator with geometric shapes inheriting from a base Shape class.`,

"Encapsulation and Property Decorators":`
- Create a Temperature class with private attributes and property decorators for unit conversion.
- Build a BankAccount class with protected balance and property-based validation.
- Design a User class with private credentials and property-based access control.`,

      }
  return exercises[lessonTitle] || "1. Advanced exercise\n3. Project work"
}

const getPythonQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to Python and Setting Up": [
    {
      question: "What type of programming language is Python?",
      options: [
        "Compiled language",
        "Interpreted language",
        "Assembly language",
        "Machine language"
      ],
      correctAnswer: 1
    },
    {
      question: "Which command is used to check the Python version installed?",
      options: [
        "python --version",
        "python -v",
        "python version",
        "Both A and B"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the standard file extension for Python files?",
      options: [
        ".python",
        ".py",
        ".pt",
        ".pyt"
      ],
      correctAnswer: 1
    }
  ],

  "Variables and Data Types": [
    {
      question: "Which of these is NOT a valid variable name in Python?",
      options: [
        "my_var",
        "_private",
        "2variable",
        "variable2"
      ],
      correctAnswer: 2
    },
    {
      question: "What function returns the data type of a variable?",
      options: [
        "typeof()",
        "type()",
        "datatype()",
        "gettype()"
      ],
      correctAnswer: 1
    },
    {
      question: "Which data type is mutable in Python?",
      options: [
        "int",
        "str",
        "tuple",
        "list"
      ],
      correctAnswer: 3
    }
  ],

  "String Operations and Methods": [
    {
      question: "Which method converts a string to uppercase?",
      options: [
        "uppercase()",
        "upper()",
        "toUpper()",
        "capitalize()"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the split() method return?",
      options: [
        "A string",
        "A list of strings",
        "A tuple",
        "A dictionary"
      ],
      correctAnswer: 1
    },
    {
      question: "Which operator is used for string concatenation?",
      options: [
        "&",
        "+",
        ".",
        "*"
      ],
      correctAnswer: 1
    }
  ],

  "Numbers and Mathematical Operations": [
    {
      question: "What is the result of 10 // 3 in Python?",
      options: [
        "3.33",
        "3",
        "4",
        "1"
      ],
      correctAnswer: 1
    },
    {
      question: "Which operator is used for exponentiation?",
      options: [
        "^",
        "**",
        "exp",
        "pow"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the % operator do?",
      options: [
        "Percentage calculation",
        "Modulus (remainder)",
        "Division",
        "Multiplication"
      ],
      correctAnswer: 1
    }
  ],

  "Input and Output": [
    {
      question: "Which function is used to get user input in Python?",
      options: [
        "get()",
        "input()",
        "read()",
        "scan()"
      ],
      correctAnswer: 1
    },
    {
      question: "What data type does input() return?",
      options: [
        "int",
        "float",
        "str",
        "depends on input"
      ],
      correctAnswer: 2
    },
    {
      question: "Which function is used to display output?",
      options: [
        "output()",
        "display()",
        "print()",
        "show()"
      ],
      correctAnswer: 2
    }
  ],

  "Lists-Creation and Basic Operations": [
    {
      question: "How do you create an empty list in Python?",
      options: [
        "list = empty",
        "list = []",
        "list = new list()",
        "list = null"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the index of the first element in a Python list?",
      options: [
        "1",
        "0",
        "-1",
        "depends on the list"
      ],
      correctAnswer: 1
    },
    {
      question: "Which operator checks if an element exists in a list?",
      options: [
        "exists",
        "in",
        "has",
        "contains"
      ],
      correctAnswer: 1
    }
  ],

  "List Methods and Advanced Operations": [
    {
      question: "Which method adds an element to the end of a list?",
      options: [
        "add()",
        "append()",
        "insert()",
        "push()"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the remove() method do?",
      options: [
        "Removes all elements",
        "Removes the first occurrence of a value",
        "Removes the last element",
        "Removes by index"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method sorts a list in place?",
      options: [
        "order()",
        "sort()",
        "arrange()",
        "sorted()"
      ],
      correctAnswer: 1
    }
  ],

  "Tuples and Their Uses": [
    {
      question: "How do you create a tuple in Python?",
      options: [
        "tuple = [1, 2, 3]",
        "tuple = (1, 2, 3)",
        "tuple = {1, 2, 3}",
        "tuple = 1, 2, 3"
      ],
      correctAnswer: 1
    },
    {
      question: "What is a key characteristic of tuples?",
      options: [
        "They are mutable",
        "They are immutable",
        "They can only store numbers",
        "They have no methods"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method returns the number of occurrences of a value in a tuple?",
      options: [
        "find()",
        "count()",
        "search()",
        "occurrence()"
      ],
      correctAnswer: 1
    }
  ],

  "Dictionaries - Key-Value Pairs": [
    {
      question: "How do you create an empty dictionary?",
      options: [
        "dict = []",
        "dict = {}",
        "dict = ()",
        "dict = empty"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method returns all keys in a dictionary?",
      options: [
        "getkeys()",
        "keys()",
        "allkeys()",
        "keylist()"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens when you try to access a non-existent key?",
      options: [
        "Returns None",
        "Returns empty string",
        "Raises KeyError",
        "Creates the key"
      ],
      correctAnswer: 2
    }
  ],

  "Sets - Unique Collections": [
    {
      question: "How do you create a set in Python?",
      options: [
        "set = [1, 2, 3]",
        "set = (1, 2, 3)",
        "set = {1, 2, 3}",
        "set = new set()"
      ],
      correctAnswer: 2
    },
    {
      question: "What is the main characteristic of sets?",
      options: [
        "They allow duplicates",
        "They store unique elements only",
        "They are ordered",
        "They are immutable"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method adds an element to a set?",
      options: [
        "append()",
        "add()",
        "insert()",
        "push()"
      ],
      correctAnswer: 1
    }
  ],

  "Conditional Statements - if, elif, else": [
    {
      question: "Which keyword is used for multiple conditions in Python?",
      options: [
        "elseif",
        "elif",
        "else if",
        "switch"
      ],
      correctAnswer: 1
    },
    {
      question: "What operator is used for 'not equal to'?",
      options: [
        "<>",
        "!=",
        "not ==",
        "Both B and C"
      ],
      correctAnswer: 3
    },
    {
      question: "How do you check multiple conditions that all must be true?",
      options: [
        "and operator",
        "or operator",
        "not operator",
        "&& operator"
      ],
      correctAnswer: 0
    }
  ],

  "Loops - for and while": [
    {
      question: "Which function is commonly used with for loops to generate numbers?",
      options: [
        "numbers()",
        "range()",
        "sequence()",
        "count()"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the break statement do in a loop?",
      options: [
        "Pauses the loop",
        "Exits the loop completely",
        "Skips current iteration",
        "Restarts the loop"
      ],
      correctAnswer: 1
    },
    {
      question: "What does the continue statement do?",
      options: [
        "Exits the loop",
        "Restarts the loop",
        "Skips the rest of current iteration",
        "Pauses execution"
      ],
      correctAnswer: 2
    }
  ],

  "Functions-Definition and Parameters": [
    {
      question: "Which keyword is used to define a function in Python?",
      options: [
        "function",
        "def",
        "define",
        "func"
      ],
      correctAnswer: 1
    },
    {
      question: "What keyword is used to return a value from a function?",
      options: [
        "give",
        "return",
        "send",
        "output"
      ],
      correctAnswer: 1
    },
    {
      question: "What happens if a function doesn't have a return statement?",
      options: [
        "Error occurs",
        "Returns None",
        "Returns 0",
        "Returns empty string"
      ],
      correctAnswer: 1
    }
  ],

  "Function Arguments and Keyword Arguments": [
    {
      question: "What are *args used for in function definitions?",
      options: [
        "Keyword arguments",
        "Variable number of positional arguments",
        "Default arguments",
        "Required arguments"
      ],
      correctAnswer: 1
    },
    {
      question: "What are **kwargs used for?",
      options: [
        "Positional arguments",
        "Variable number of keyword arguments",
        "Required arguments",
        "Default arguments"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you set a default value for a function parameter?",
      options: [
        "def func(param default value):",
        "def func(param = value):",
        "def func(param := value):",
        "def func(param -> value):"
      ],
      correctAnswer: 1
    }
  ],

  "Modules and Packages": [
    {
      question: "Which keyword is used to import a module?",
      options: [
        "include",
        "import",
        "require",
        "use"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you import a specific function from a module?",
      options: [
        "import module.function",
        "from module import function",
        "include function from module",
        "get function from module"
      ],
      correctAnswer: 1
    },
    {
      question: "What does 'import module as alias' do?",
      options: [
        "Renames the module file",
        "Creates a shorter name for the module",
        "Copies the module",
        "Hides the original module name"
      ],
      correctAnswer: 1
    }
  ],

  "File Input and Output": [
    {
      question: "Which function is used to open a file in Python?",
      options: [
        "file()",
        "open()",
        "read()",
        "load()"
      ],
      correctAnswer: 1
    },
    {
      question: "What mode opens a file for writing (overwrites existing content)?",
      options: [
        "'r'",
        "'w'",
        "'a'",
        "'x'"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method reads all lines from a file into a list?",
      options: [
        "read()",
        "readline()",
        "readlines()",
        "readall()"
      ],
      correctAnswer: 2
    }
  ],

  "Exception Handling": [
    {
      question: "Which keyword is used to catch exceptions in Python?",
      options: [
        "catch",
        "except",
        "handle",
        "error"
      ],
      correctAnswer: 1
    },
    {
      question: "Which block always executes whether an exception occurs or not?",
      options: [
        "else",
        "except",
        "finally",
        "always"
      ],
      correctAnswer: 2
    },
    {
      question: "How do you raise a custom exception?",
      options: [
        "throw Exception()",
        "raise Exception()",
        "error Exception()",
        "exception Exception()"
      ],
      correctAnswer: 1
    }
  ],

  "Object-Oriented Programming-Classes and Objects": [
    {
      question: "Which keyword is used to define a class?",
      options: [
        "object",
        "class",
        "define",
        "create"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the special method called when an object is created?",
      options: [
        "__init__()",
        "__create__()",
        "__new__()",
        "__start__()"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'self' refer to in a class method?",
      options: [
        "The class itself",
        "The current instance of the class",
        "The parent class",
        "A global variable"
      ],
      correctAnswer: 1
    }
  ],

  "Inheritance and Method Overriding": [
    {
      question: "How do you create a class that inherits from another class?",
      options: [
        "class Child extends Parent:",
        "class Child(Parent):",
        "class Child inherits Parent:",
        "class Child <- Parent:"
      ],
      correctAnswer: 1
    },
    {
      question: "Which function is used to call a method from the parent class?",
      options: [
        "parent()",
        "super()",
        "base()",
        "inherit()"
      ],
      correctAnswer: 1
    },
    {
      question: "What is method overriding?",
      options: [
        "Creating new methods",
        "Redefining inherited methods in child class",
        "Deleting methods",
        "Hiding methods"
      ],
      correctAnswer: 1
    }
  ],

  "Encapsulation and Property Decorators": [
    {
      question: "How do you indicate a private attribute in Python?",
      options: [
        "private attribute",
        "_attribute (single underscore)",
        "__attribute (double underscore)",
        "Both B and C"
      ],
      correctAnswer: 3
    },
    {
      question: "Which decorator is used to create a property?",
      options: [
        "@property",
        "@getter",
        "@attribute",
        "@access"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the @property decorator allow you to do?",
      options: [
        "Create private methods",
        "Access methods like attributes",
        "Create static methods",
        "Override methods"
      ],
      correctAnswer: 1
    }
  ],

 
 };
  return quizzes[lessonTitle] 
  }
 

module.exports ={
    getPythonLessonConcepts,
    getPythonCodeExample,
    getPythonCodeExplanation, 
    getPythonExercises,
    getPythonQuiz,
};