const getHTMLLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to HTML": `
- What is HTML and its role in web development
- Basic HTML document structure
- Creating your first HTML page
- HTML elements and tags`,

    "HTML Document Structure": `
- DOCTYPE declaration and its importance
- HTML, head, and body elements
- Meta tags and character encoding
- Viewport settings for responsive design
- Language attributes and accessibility`,

    "HTML Headings and Paragraphs": `
- Heading hierarchy (h1 to h6) and SEO importance
- Paragraph formatting and spacing
- Line breaks and horizontal rules
- Semantic meaning of headings
- Best practices for content structure`,

    "HTML Text Formatting": `
- Bold, italic, and underline text
- Superscript and subscript
- Text emphasis and importance
- Marking text for highlighting
- Small text and deleted text
- Quotations and citations`,

    "HTML Links and Navigation": `
- Creating hyperlinks with <a> tag
- Internal and external links
- Link attributes (href, target, rel)
- Email and telephone links
- Download links
- Navigation menus and structure`,

    "HTML Images and Media": `
- Adding images with <img> tag
- Image attributes (src, alt, width, height)
- Responsive images
- Image formats and optimization
- Figure and figcaption elements
- Image maps and accessibility`,

    "HTML Lists (Ordered and Unordered)": `
- Unordered lists (<ul>) and list items
- Ordered lists (<ol>) and numbering
- Nested lists and hierarchy
- Description lists (<dl>)
- List styling and customization
- Semantic use of lists`,

    "HTML Tables": `
- Table structure and elements
- Table headers and data cells
- Table rows and columns
- Table styling and borders
- Table accessibility
- Responsive tables`,

    "HTML Forms Basics": `
- Form structure and elements
- Form submission methods
- Form validation basics
- Form security considerations
- Form accessibility
- Form styling and layout`,

    "HTML Form Elements": `
- Text inputs and textareas
- Checkboxes and radio buttons
- Select dropdowns
- File uploads
- Hidden fields
- Form buttons and submission`,

    "HTML Input Types": `
- Text and password inputs
- Email and URL inputs
- Number and range inputs
- Date and time inputs
- Color and file inputs
- Search and tel inputs`,

    "HTML Form Validation": `
- Required fields
- Input patterns and constraints
- Custom validation messages
- HTML5 validation attributes
- Form submission handling
- Error handling and user feedback`,

"HTML <div>": `
- Introduction to <div> (purpose and usage in structuring content)
- Nesting and grouping elements with <div>
- Styling <div> with CSS (backgrounds, layouts, borders)`,


 "HTML Classes": `
- Defining and applying class attributes to elements
- Using multiple classes on the same element
- Styling elements with classes in CSS`,

 "HTML Id": `
- Defining unique identifiers with id
- Styling elements with id selectors in CSS
- Linking within a page using id (anchor navigation)`,

    "HTML Semantic Elements": `
- Header and footer elements
- Navigation and main content
- Article and section elements
- Aside and figure elements
- Semantic structure benefits
- Accessibility improvements`,

    
    "HTML5 New Features": `
- New semantic elements
- Audio and video elements
- Canvas and SVG graphics
- Local storage
- Geolocation API
- Web workers`,

    "HTML Comments and Best Practices": `
- Adding comments to HTML
- Code organization
- Naming conventions
- Indentation and formatting
- Documentation practices
- Code maintenance`,

    "HTML Meta Tags": `
- Character encoding
- Viewport settings
- Description and keywords
- Social media meta tags
- Robots meta tags
- Refresh and redirect meta tags`,

    "HTML Character Entities": `
- Special characters
- HTML entities
- Unicode characters
- Character encoding
- Common symbols
- International characters`,

    "HTML Colors and Backgrounds": `
- Color values and formats
- Background colors
- Background images
- Gradient backgrounds
- Color accessibility
- Color contrast`,

    "HTML Layout Techniques": `
- Div-based layouts
- CSS Grid basics
- Flexbox basics
- Responsive layouts
- Layout best practices
- Common layout patterns`,

    "HTML iframes": `
- iframe basics
- iframe attributes
- Security considerations
- Responsive iframes
- iframe alternatives
- iframe best practices`,

    "HTML Audio and Video": `
- Audio element
- Video element
- Media formats
- Media controls
- Media accessibility
- Media optimization`,

    "HTML Canvas Basics": `
- Canvas element
- Drawing basics
- Shapes and paths
- Text and images
- Animation basics
- Canvas optimization`,

    "HTML SVG Graphics": `
- SVG basics
- Basic shapes
- Paths and curves
- Text and images
- SVG animation
- SVG optimization`,

    "HTML Project: Building a Complete Website": `
- Project planning
- Structure and organization
- Content creation
- Responsive design
- Accessibility implementation
- Testing and deployment`
  }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}
const getHTMLCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to HTML": `
<!-- Example 1: basic HTML document structure -->
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <h1>Welcome to My website</h1>
    <p>This is the content of my first web page.</p>
</body>
</html>

<!-- Example 2: HTML Elements and Tags -->
    <!--Syntax--> 
<opening tag> Content </Closing tag>

    <!--Example-->
<h1> This is a heading here </h1> `,

    "HTML Document Structure": `
<!-- Example 1: DOCTYPE declaration -->
   <!DOCTYPE html>
<html>
<head>
<title>My Document</title>
</head>
<body>
<!-- Page content -->
</body>
</html>

<!-- Example 2: HTML, head, and body elements -->
    <!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Structure Example</title>
  </head>
  <body>
    <h1>HTML Document Structure</h1>
    <p>This is a paragraph.</p>
  </body>
</html>

<!-- Example 3: Meta tags and character encoding -->
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="description" content="Learn about HTML document structure and meta tags.">
    <meta name="keywords" content="HTML, meta tags, charset, web development">
    <meta name="author" content="Manus AI">
    <title>Meta Tags in HTML</title>
</head>
<body>
    <h1>Understanding Meta Tags</h1>
    <p>This page explains the importance of meta tags and character encoding in HTML.</p>
</body>
</html>

<!-- Example 4: Viewport settings -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Example 5: Language attributes  -->
 <html lang="en">
    <!-- ... entire document in English ... -->
</html>`,

    "HTML Headings and Paragraphs": `
<!-- Example 1: Heading -->
<h1>This is a main heading</h1>
<h2>This is a subheading</h2>
<h3>This is a sub-subheading</h3>
<h4>This is a smaller heading</h4>
<h5>This is an even smaller heading</h5>
<h6>This is the smallest heading</h6>

<!-- Example 2: Paragraph -->
  <p>This is a paragraph.</p>
  <p> This is another paragraph here </p>
  
<!-- Example 3: HTML Line breaks -->
   <p>Hello, world!<br />This is a new line.</p>

<!-- Example 4: HTML horizontal rules --> 
<p>This is the first paragraph.</p>
    <hr />
   <p>This is the second paragraph, separated by a horizontal line.</p>
  `,

    "HTML Text Formatting": `
<!-- Example 1: basic HTML <b> Element -->
    <b>This text is bold</b>

<!-- Example 2: basic HTML <strong> Element -->
    <strong>This text is important</strong>
   
<!-- Example 3: basic HTML <i> Element -->
    <i>This text is italic</i>

<!-- Example 4: basic HTML <em> Element -->
   <em>This text is emphasized</em>

<!-- Example 5: basic HTML <u> Element -->
     <u>This text is underlined</u>

<!-- Example 6: basic HTML <mark> Element -->
   <mark>This text is highlighted</mark>

<!-- Example 7: basic HTML <small> Element -->
   <small>This text is small</small>
  
<!-- Example 8: basic HTML <del> Element -->
   <P>My favourite food is <del>rice</del> beans.</P>

<!-- Example 9: basic HTML <ins> Element -->
   <P>My favourite food is rice <ins>beans</ins>.</P>

<!-- Example 10: basic HTML <sub> Element -->
   <p>Here is <sub>subscript</sub> text. </p>

<!-- Example 11: basic HTML <sup> Element -->
   <p> Here is <sup>superscript</sup> text.</p>`,

   
"HTML Links and Navigation": `
<!-- Example 1: Creating hyperlinks with <a> tag -->
<p>Visit <a href="https://www.google.com">Google</a> for search.</p>

<!-- Example 2: Target attribute -->
<p>Open Google in a new tab: <a href="https://www.google.com"
target="_blank">Google</a>.</p>

<!-- Example 3: Absolute URLs vs Relative URLs -->
<h2>Absolute URLs</h2>
 <a href="https://example.com">Visit Example</a>
 <p><a href="https://hannacode.com">visit HannaCode</a></p>
 <a href="http://www.imdb.com" target="_blank">

 <h2>Relative URLs</h2>
 <a href="index.html">Home</a>
 <p><a href="contact.html">Contact</a></P>

<!-- Example 4: Email and telephone links -->
  <p><strong>Email:</strong> <a href="mailto:john@example.com?subject=Website Contact">john@example.com</a></p>
  <p><strong>Phone:</strong> <a href="tel:+1-555-987-6543">+1 (555) 987-6543</a></p>

<!-- Example 5: Download links -->
<a href="/path/to/my-file.pdf" download="my-file.pdf">Download a PDF</a>

<!-- Example 6: Navigation menus and structure -->
<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>`,

    "HTML Images and Media": `
<!-- Example 1: Adding images with <img> tag -->
 <p>A simple image with alt text.</p>
 <img src="image.jpg" alt="An image" width="300" height="200">

<!-- Example 2: Responsive images tag -->
<p>A responsive image that changes based on screen size.</p>
    <img 
        srcset="https://via.placeholder.com/480w,
                https://via.placeholder.com/800w"
        sizes="(max-width: 600px) 480px,
               800px"
        src="https://via.placeholder.com/800x400" 
        alt="A responsive placeholder image">


<!-- Example 3:  Figure and figcaption elements -->
<figure>
  <img src="image.jpg" alt="A figure image">
  <figcaption>Figure caption</figcaption>
</figure>`,

    "HTML Lists (Ordered and Unordered)": `
<!-- Example 1: Unordered list -->
    <h1>My Shopping List</h1>

  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Milk</li>
    <li>Bread</li>
  </ul>

<!-- Example 2: Ordered list -->
 <h1>Top 3 Favorite Movies</h1>

  <ol>
    <li>The Shawshank Redemption</li>
    <li>The Godfather</li>
    <li>The Dark Knight</li>
  </ol>

<!-- Example 3: Nested lists and hierarchy -->
  <!DOCTYPE html>
<html>
<head>
  <title>Nested List Example</title>
</head>
<body>

  <h1>Web Development Course Outline</h1>

  <ul>
    <li>
      HTML
      <ol>
        <li>Introduction to HTML</li>
        <li>HTML Forms</li>
        <li>HTML Tables</li>
      </ol>
    </li>
    <li>
      CSS
      <ol>
        <li>CSS Selectors</li>
        <li>Box Model</li>
        <li>Flexbox and Grid</li>
      </ol>
    </li>
  </ul>

</body>
</html>

<!-- Example 4: Description lists (<dl>) -->
   <h1>Glossary</h1>

  <dl>
    <dt>HTML</dt>
    <dd>HyperText Markup Language, the standard markup language for documents designed to be displayed in a web browser.</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets, a style sheet language used for describing the presentation of a document written in a markup language.</dd>
  </dl>

<!-- Example 5: List styling and customization -->
 <!DOCTYPE html>
<html>
<head>
  <title>List Styling Example</title>
  <style>
    .custom-list {
      list-style-type: square; /* Changes bullet to a square */
      color: #333;
    }

    .custom-ordered-list {
      list-style-type: lower-roman; /* Changes numbering to lowercase Roman numerals */
      color: #666;
    }
  </style>
</head>
<body>

  <ul class="custom-list">
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
  </ul>

  <ol class="custom-ordered-list">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
  </ol>

</body>
</html>

<!-- Example 6: Semantic use of lists -->
 <!DOCTYPE html>
<html>
<head>
  <title>Semantic List Example</title>
</head>
<body>

  <h2>Ingredients for a Cake (Unordered)</h2>
  <ul>
    <li>Flour</li>
    <li>Sugar</li>
    <li>Eggs</li>
  </ul>

  <h2>Steps to Bake a Cake (Ordered)</h2>
  <ol>
    <li>Preheat oven to 350°F.</li>
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients and mix well.</li>
    <li>Pour into a baking pan.</li>
  </ol>

</body>
</html>`,


    "HTML Tables": `
<!-- Example 1: Table structure and elements -->
<table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Alice</td>
        <td>30</td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>25</td>
      </tr>
    </tbody>
  </table>

<!-- Example 2: Table headers and data cells -->
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Laptop</td>
        <td>$1200</td>
      </tr>
      <tr>
        <td>Mouse</td>
        <td>$25</td>
      </tr>
    </tbody>
  </table>

<!-- Example 3: Table rows and columns -->
<table>
    <thead>
      <tr>
        <th>Item</th>
        <th colspan="2">Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Laptop</td>
        <td>Brand: ABC</td>
        <td>Model: XYZ</td>
      </tr>
      <tr>
        <td rowspan="2">Accessories</td>
        <td>Keyboard</td>
        <td>$50</td>
      </tr>
      <tr>
        <td>Mouse</td>
        <td>$25</td>
      </tr>
    </tbody>
  </table>

<!-- Example 4: Table styling and borders -->
  <!DOCTYPE html>
<html>
<head>
  <title>Table Styling</title>
  <style>
    table {
      width: 100%;
      border-collapse: collapse; /* Merges cell borders */
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f2f2f2;
    }
  </style>
</head>
<body>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>City</th>
         <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>New York</td>
        <td>30 years</td>
      </tr>
      <tr>
        <td>Joel Peter</td>
        <td>Lagos</td>
        <td>25 years</td>
      </tr>
    </tbody>
  </table>

</body>
</html>`,

    "HTML Forms Basics": `
<!-- Example 1: Form structure and elements -->
  <form action="/submit-data" method="post">
    <label for="username">Username:</label>
    <input type="text" id="username" name="username">

    <input type="submit" value="Submit">
  </form>

<!-- Example 2: Form submission methods -->
   <form action="/search" method="get">
    <label for="query">Search:</label>
    <input type="text" id="query" name="q">
    <input type="submit" value="Search">
  </form>

  <form action="/login" method="post">
    <label for="email">Email:</label>
    <input type="email" id="email" name="email">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
    <input type="submit" value="Login">
  </form>

<!-- Example 3: Form validation basics -->
   <form action="/register" method="post">
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <input type="submit" value="Register">
  </form> 

<!-- Example 4: Form security considerations -->
 <form action="/secure-payment" method="post">
  <label for="cc">Credit Card:</label>
  <input type="text" id="cc" name="cc" pattern="[0-9]{16}" required>
</form>

<!-- Example 5: Form accessibility -->
   <form>
    <label for="email_access">Email Address</label>
    <input type="email" id="email_access" name="email">

    </form>

<!-- Example 6: Form styling and layout -->
  <!DOCTYPE html>
<html>
<head>
  <title>Form Styling</title>
  <style>
    form {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 300px;
    }
    input[type="text"] {
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    input[type="submit"] {
      padding: 10px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <form>
    <label for="name_style">Name:</label>
    <input type="text" id="name_style">
    <input type="submit" value="Submit">
  </form>

</body>
</html> `,


    "HTML Form Elements": `
<!-- Example 1: Text inputs and textareas -->
  <form>
    <label for="name_input">Name:</label>
    <input type="text" id="name_input" name="user_name">

    <label for="message">Message:</label>
    <textarea id="message" name="user_message" rows="4" cols="50"></textarea>
  </form>

<!-- Example 2: Checkboxes and radio buttons -->
  <form>
    <p>Select your favorite fruits:</p>
    <input type="checkbox" id="apple" name="fruit" value="apple">
    <label for="apple">Apple</label><br>
    <input type="checkbox" id="banana" name="fruit" value="banana">
    <label for="banana">Banana</label><br>

    <p>Select your preferred gender:</p>
    <input type="radio" id="male" name="gender" value="male">
    <label for="male">Male</label><br>
    <input type="radio" id="female" name="gender" value="female">
    <label for="female">Female</label>
  </form>

<!-- Example 3: Select dropdowns -->
<form>
    <label for="country">Choose a country:</label>
    <select id="country" name="country">
      <option value="usa">United States</option>
      <option value="ca">Canada</option>
      <option value="uk">United Kingdom</option>
    </select>
  </form>

<!-- Example 4: File uploads -->
   <form action="/upload" method="post" enctype="multipart/form-data">
    <label for="file">Upload a file:</label>
    <input type="file" id="file" name="file_to_upload">
    <input type="submit" value="Upload File">
  </form>

<!-- Example 5: Hidden fields -->
   <form action="/process-order" method="post">
    <input type="text" name="product_name" value="Laptop">
    <input type="hidden" name="product_id" value="12345">
    <input type="submit" value="Buy Now">
  </form>

<!-- Example 6: Form buttons and submission -->
<form action="/submit-form">
    <label for="name_btn">Name:</label>
    <input type="text" id="name_btn" name="name">
    <br>
    <input type="submit" value="Submit with input">
    <button type="submit">
      <img src="submit-icon.png" alt="Submit"> Submit with button
    </button>
    <button type="reset">Reset Form</button>
  </form>`,

    "HTML Input Types":` 
<!-- Example 1: Text and password inputs -->
      <form>
    <label for="username_input">Username:</label>
    <input type="text" id="username_input" name="username">
    <br>
    <label for="password_input">Password:</label>
    <input type="password" id="password_input" name="password">
  </form>

<!-- Example 2: Email and URL inputs -->
<form>
    <label for="email_input">Email:</label>
    <input type="email" id="email_input" name="email">
    <br>
    <label for="url_input">Website:</label>
    <input type="url" id="url_input" name="website">
  </form>

<!-- Example 3: Number and range inputs -->
  <form>
    <label for="age">Age:</label>
    <input type="number" id="age" name="age" min="18" max="99">
    <br>
    <label for="volume">Volume:</label>
    <input type="range" id="volume" name="volume" min="0" max="100" step="1">
  </form>

<!-- Example 4: Date and time inputs -->
  <form>
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" name="dob">
    <br>
    <label for="meeting_time">Meeting Time:</label>
    <input type="time" id="meeting_time" name="meeting_time">
  </form>

<!-- Example 5: Color and file inputs -->
 <form>
    <label for="favcolor">Favorite Color:</label>
    <input type="color" id="favcolor" name="favcolor">
    <br>
    <label for="upload">Upload Image:</label>
    <input type="file" id="upload" name="image">
  </form>

<!-- Example 6: Search and tel inputs -->
  <form>
    <label for="search_input">Search:</label>
    <input type="search" id="search_input" name="q">
    <br>
    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" name="phone">
  </form>`,

    "HTML Form Validation": `
<!-- Example 1: Required fields -->
  <form action="/submit-form">
    <label for="name_req">Name:</label>
    <input type="text" id="name_req" name="name" required>
    <br>
    <input type="submit" value="Submit">
  </form>
  
<!-- Example 2: Input patterns and constraints -->
  <form action="/submit-form">
    <label for="zip_code">ZIP Code (5 digits):</label>
    <input type="text" id="zip_code" name="zip" pattern="[0-9]{5}" title="Five digit zip code">
    <br>
    <input type="submit" value="Submit">
  </form>

<!-- Example 3: Custom validation messages --> 
   <!DOCTYPE html>
<html>
<head>
  <title>Custom Validation</title>
</head>
<body>

  <form id="myForm">
    <label for="password_custom">Password:</label>
    <input type="password" id="password_custom" name="password">
    <br>
    <input type="submit" value="Submit">
  </form>

  <script>
    const passwordInput = document.getElementById('password_custom');
    passwordInput.addEventListener('invalid', (event) => {
      if (passwordInput.validity.valueMissing) {
        passwordInput.setCustomValidity("Please enter your password.");
      } else {
        passwordInput.setCustomValidity("");
      }
    });
  </script>

</body>
</html>

<!-- Example 4: HTML5 validation attributes -->
   <form>
    <label for="age_val">Age:</label>
    <input type="number" id="age_val" name="age" min="18" max="65">
    <br>
    <label for="username_val">Username:</label>
    <input type="text" id="username_val" name="username" minlength="4" maxlength="10">
    <br>
    <input type="submit" value="Submit">
  </form>

<!-- Example 5: Error handling and user feedback -->
   <!DOCTYPE html>
<html>
<head>
  <title>Error Handling</title>
  <style>
    .error {
      color: red;
      font-size: 0.9em;
    }
  </style>
</head>
<body>

  <form id="loginForm">
    <label for="username_err">Username:</label>
    <input type="text" id="username_err" name="username" required>
    <span class="error" id="username_error"></span>
    <br>
    <label for="password_err">Password:</label>
    <input type="password" id="password_err" name="password" required>
    <span class="error" id="password_error"></span>
    <br>
    <input type="submit" value="Login">
  </form>

  <script>
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username_err');
    const passwordInput = document.getElementById('password_err');
    
    form.addEventListener('submit', function(event) {
      if (!usernameInput.validity.valid) {
        document.getElementById('username_error').textContent = 'Username is required.';
        event.preventDefault();
      } else {
        document.getElementById('username_error').textContent = '';
      }
      
      if (!passwordInput.validity.valid) {
        document.getElementById('password_error').textContent = 'Password is required.';
        event.preventDefault();
      } else {
        document.getElementById('password_error').textContent = '';
      }
    });
  </script>

</body>
</html>`,

"HTML Div":`
<!-- Example 1: Introduction to <div> -->
<div>
  <h2>Beijing</h2>
  <p>Beijing is the capital of China.</p>
  <p>It is known for its modern architecture and rich history.</p>
  </div>

<div>
<h2>New York</h2>
<p>New York is a major city in the United States.</p>
<p>It is known for its skyline and cultural diversity.</p>
</div>

<div>
<h2>London</h2>
  <p>London is the capital city of England.</p>
  <p>London has over 9 million inhabitants.</p>
</div>

<!-- Example 2: Nesting and grouping elements with <div> -->
   <!DOCTYPE html>
<html>
<head>
  <title>Nesting Divs</title>
</head>
<body>

  <div class="container">
    <div class="header">
      <h1>Website Header</h1>
    </div>
    <div class="main-content">
      <h2>Main Section</h2>
      <div class="sidebar">
        <h3>Sidebar</h3>
        <p>Related links here.</p>
      </div>
      <div class="article">
        <h3>Article Title</h3>
        <p>This is the main article content.</p>
      </div>
    </div>
  </div>

</body>
</html>

<!-- Example 3: Styling <div> with CSS -->
  <!DOCTYPE html>
<html>
<head>
  <title>Styling Divs</title>
  <style>
    .box {
      background-color: #f0f0f0;
      border: 1px solid #ccc;
      padding: 20px;
      margin: 10px;
    }
    .flex-container {
      display: flex; /* Creates a flexbox layout */
      justify-content: space-between;
    }
    .flex-item {
      width: 48%; /* Each item takes up almost half the width */
      background-color: lightblue;
      padding: 15px;
    }
  </style>
</head>
<body>

  <div class="box">
    <p>This div has a background, border, and padding.</p>
  </div>

  <div class="flex-container">
    <div class="flex-item">
      <p>Item 1</p>
    </div>
    <div class="flex-item">
      <p>Item 2</p>
    </div>
  </div>

</body>
</html>`,


"HTML Classes":`
<!-- Example 1: class attributes to elements -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

<!-- Example 2: Using multiple classes on the same element -->
<!DOCTYPE html>
<html>
<head>
  <title>Multiple Classes</title>
  <style>
    .button {
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
    .primary {
      background-color: blue;
      color: white;
    }
    .large {
      font-size: 1.2em;
    }
  </style>
</head>
<body>

  <button class="button primary">Primary Button</button>
  <button class="button large">Large Button</button>
  <button class="button primary large">Large Primary Button</button>

</body>
</html>

<!-- Example 3: Styling elements with classes in CSS -->
  <!DOCTYPE html>
<html>
<head>
  <title>Styling with Classes</title>
  <style>
    .card {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px;
      box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
    }
    .card-title {
      color: #333;
    }
  </style>
</head>
<body>

  <div class="card">
    <h2 class="card-title">Product 1</h2>
    <p>A description of product one.</p>
  </div>

  <div class="card">
    <h2 class="card-title">Product 2</h2>
    <p>A description of product two.</p>
  </div>

</body>
</html>`,

"HTML Id":`
<!-- Example 1: Defining unique identifiers with id -->
  <!DOCTYPE html>
<html>
<head>
  <title>HTML Id</title>
</head>
<body>

  <h1 id="main-heading">My Unique Heading</h1>
  <p>This is a regular paragraph.</p>
  <p id="introduction">This is the introductory paragraph.</p>

</body>
</html>

<!-- Example 2: Styling elements with id selectors in CSS -->
    <!DOCTYPE html>
<html>
<head>
  <title>Styling with Id</title>
  <style>
    #unique-button {
      background-color: red;
      color: white;
      border: 2px solid darkred;
      padding: 10px 20px;
    }
  </style>
</head>
<body>

  <button id="unique-button">Click Me</button>
  <p>This button has a unique style.</p>

</body>
</html>

<!-- Example 3: Linking within a page using id -->
  <nav>
    <a href="#section1">Go to Section 1</a> |
    <a href="#section2">Go to Section 2</a>
  </nav>

  <h2 id="section1">Section One</h2>
  <p>... Content for section one ...</p>
  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  
  <h2 id="section2">Section Two</h2>
  <p>... Content for section two ...</p>`,


    "HTML Semantic Elements": `
<!-- Example 1: Header and footer elements --> 
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <header>
      <h1>Welcome to My Website</h1>
    </header>
    <main>
      <p>This is the main content of the website.</p>
    </main>
    <footer>
      <p>&copy; 2023 My Website. All rights reserved.</p>
    </footer>
  </body>
</html>

<!-- Example 2: Navigation and Main elements --> 

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>

    <main>
      <h1>Welcome to My Website</h1>
      <p>This is the main content of the website.</p>
    </main>

<!-- Example 3: Section and Article elements --> 
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <section>
      <h2>Section Title</h2>
      <p>This is a section of the website.</p>
    </section>

    <article>
      <h3>Article Title</h3>
      <p>This is an article on the website.</p>
    </article>
  </body>
</html>

<!-- Example 4: aside and figure elements --> 
<!DOCTYPE html>
<html>
<head>
  <title>Aside and Figure</title>
</head>
<body>

  <main>
    <p>Main content with some text.</p>
    <aside>
      <h3>Tip of the Day</h3>
      <p>Remember to stay hydrated!</p>
    </aside>
  </main>

  <figure>
    <img src="photo.jpg" alt="A beautiful landscape">
    <figcaption>A stunning view of the mountains.</figcaption>
  </figure>
</body>
</html>
 
<!-- Example 5: Semantic structure benefits --> 
  <header>
  <h1>My Blog</h1>
</header>
<main>
  <article>
    <h2>Title</h2>
    <p>Content</p>
  </article>
</main>
<footer>
  <p>Copyright</p>
</footer>

  <!-- Non-semantic elements -->
    <div id="header">
  <h1>My Blog</h1>
</div>
<div id="main">
  <div class="article">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</div>
<div id="footer">
  <p>Copyright</p>
</div>

<!-- Example 6: Accessibility improvements --> 
   <!DOCTYPE html>
<html>
<head>
  <title>Accessibility</title>
</head>
<body>

  <header>
    <h1>Welcome to Our Site</h1>
  </header>

  <main>
    <p>This is the primary content.</p>
  </main>

  <p>This text is not in a landmark.</p>

</body>
</html>`,

    "HTML5 New Features": `
<!-- Example 1: New semantic elements --> 
    <!DOCTYPE html>
<html>
<head>
  <title>New Semantic Elements</title>
</head>
<body>

  <header>
    <h1>My Blog</h1>
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <h2>First Article</h2>
      <p>This is the content of the article.</p>
    </article>
    <aside>
      <h3>Related Links</h3>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 All rights reserved.</p>
  </footer>

</body>
</html>

<!-- Example 2: Audio and video elements --> 
     <!DOCTYPE html>
<html>
<head>
  <title>Audio and Video</title>
</head>
<body>

  <h2>My Video</h2>
  <video width="320" height="240" controls poster="poster-image.jpg">
    <source src="my-video.mp4" type="video/mp4">
    <source src="my-video.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>

  <h2>My Audio</h2>
  <audio controls>
    <source src="my-audio.mp3" type="audio/mpeg">
    Your browser does not support the audio tag.
  </audio>

</body>
</html>
   
<!-- Example 3: Canvas and SVG graphics --> 
 <h2>Canvas Example (Drawn with JavaScript)</h2>
  <canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>

  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "lightblue";
    ctx.fillRect(10, 10, 150, 80);
  </script>

  <h2>SVG Example (Vector Graphic)</h2>
   <svg width="200" height="100">
     <rect x="10" y="10" width="150" height="80" fill="lightgreen" stroke="black" stroke-width="2" />
  </svg>


<!-- Example 4: Local storage --> 
 <!DOCTYPE html>
<html>
<head>
  <title>Local Storage</title>
</head>
<body>

  <button onclick="saveData()">Save Data</button>
  <button onclick="loadData()">Load Data</button>
  <p id="output"></p>

  <script>
    function saveData() {
      localStorage.setItem("username", "JaneDoe");
      document.getElementById("output").textContent = "Data saved!";
    }

    function loadData() {
      const username = localStorage.getItem("username");
      if (username) {
        document.getElementById("output").textContent = "Loaded username: " + username;
      } else {
        document.getElementById("output").textContent = "No data found.";
      }
    }
  </script>

</body>
</html>
   
<!-- Example 5: Geolocation API --> 
  <!DOCTYPE html>
<html>
<head>
  <title>Geolocation API</title>
</head>
<body>

  <button onclick="getLocation()">Get My Location</button>
  <p id="location"></p>

  <script>
    const output = document.getElementById("location");

    function getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
      } else {
        output.textContent = "Geolocation is not supported by this browser.";
      }
    }

    function showPosition(position) {
      output.textContent = "Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude;
    }

    function showError(error) {
      switch(error.code) {
        case error.PERMISSION_DENIED:
          output.textContent = "User denied the request for Geolocation.";
          break;
        case error.POSITION_UNAVAILABLE:
          output.textContent = "Location information is unavailable.";
          break;
        case error.TIMEOUT:
          output.textContent = "The request to get user location timed out.";
          break;
        default:
          output.textContent = "An unknown error occurred.";
          break;
      }
    }
  </script>
</body>
</html>

<!-- Example 6: Web workers --> 
<!DOCTYPE html>
<html>
<head>
  <title>Web Workers</title>
</head>
<body>

  <p>Counting to 10 billion without freezing the UI:</p>
  <button onclick="startWorker()">Start Calculation</button>
  <p id="result"></p>

  <script>
    let worker;

    function startWorker() {
      if (window.Worker) {
        worker = new Worker("worker.js"); // load worker script
        worker.onmessage = function(event) {
          document.getElementById("result").textContent = event.data;
        };
      } else {
        alert("Web Workers are not supported in your browser.");
      }
    }
  </script>

</body>
</html> `,


    "HTML Comments and Best Practices": `
<!-- Example 1: Adding comments to HTML --> 
<!DOCTYPE html>
<html>
<head>
  <title>HTML Comments Example</title>
</head>
<body>
  <!-- This is a single-line comment -->
  <h1>Welcome to HannaCode</h1>

  <!-- 
    This is a multi-line comment.
    You can use it to describe the purpose of sections of your code.
  -->
  <p>Learning coding step by step!</p>
</body>
</html>
    
<!-- Example 2: Code organization --> 
  <!DOCTYPE html>
<html>
<head>
  <title>Code Organization</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <div class="site-wrapper">
    <header class="main-header">
      </header>

    <main class="page-content">
      <section class="intro-section">
        </section>
      <section class="feature-section">
        </section>
    </main>

    <footer class="main-footer">
      </footer>
  </div>

  <script src="main.js"></script>
</body>
</html>

<!-- Example 3: Naming conventions --> 
  <!-- Bad Naming -->
<div id="123"></div>
<div class="x"></div>

<!-- Good Naming -->
<div id="main-header"></div>
<div class="blog-post"></div>

<!-- Example 4: Indentation and formatting --> 
   <!-- Poor Formatting -->
<div><h1>Hello</h1><p>Welcome</p></div>

<!-- Good Formatting -->
<div>
  <h1>Hello</h1>
  <p>Welcome</p>
</div>`,

    "HTML Meta Tags":`
<!-- Example 1: Character encoding -->
   <!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Character Encoding</title>
</head>
<body>

  <h1>Hello, world!</h1>
  <p>This ensures special characters like é, ç, and © are displayed correctly.</p>

</body>
</html>    

<!-- Example 2: Viewport settings -->
   <!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Viewport Settings</title>
</head>
<body>

  <h1>This page is responsive.</h1>
  <p>It will scale correctly on mobile devices.</p>

</body>
</html>

<!-- Example 3: Description and keywords -->
  <!DOCTYPE html>
<html>
<head>
  <meta name="description" content="An educational resource for learning HTML. Learn about new features, best practices, and meta tags.">
  <meta name="keywords" content="HTML, HTML5, web development, coding, learn">
  <title>HTML Meta Tags Guide</title>
</head>
<body>
  </body>
</html>

<!-- Example 4: Social media meta tags -->
<!DOCTYPE html>
<html>
<head>
  <title>My Article</title>
  <meta property="og:title" content="My Awesome Article Title">
  <meta property="og:description" content="A brief summary of my article.">
  <meta property="og:image" content="https://example.com/image.jpg">
  <meta property="og:url" content="https://example.com/my-article">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="My Awesome Article Title">
  <meta name="twitter:description" content="A brief summary of my article.">
  <meta name="twitter:image" content="https://example.com/image.jpg">
</head>
<body>
  </body>
</html>

<!-- Example 5: Robots meta tags -->
  <!DOCTYPE html>
<html>
<head>
  <title>Private Page</title>
  <meta name="robots" content="noindex, nofollow">
</head>
<body>
  <h1>This page is for internal use only.</h1>
  <a href="#">Link to another page</a>
</body>
</html>

<!-- Example 6: Refresh and redirect meta tags -->
   <!DOCTYPE html>
<html>
<head>
  <title>Redirecting...</title>
  <meta http-equiv="refresh" content="5; url=https://www.example.com">
</head>
<body>
  <p>You will be redirected in 5 seconds...</p>
</body>
</html>
`,

    "HTML Character Entities":`
<!-- Example 1: Special characters -->
   <!DOCTYPE html>
<html>
<head>
  <title>Special Characters</title>
</head>
<body>

  <p>The less-than symbol is &lt; and the greater-than symbol is &gt;.</p>
  <p>To use an ampersand, you need to write &amp;.</p>
  <p>A non-breaking space is a useful tool. &nbsp;&nbsp;&nbsp; This text is spaced out.</p>

</body>
</html>

<!-- Example 2: HTML entities -->
<!DOCTYPE html>
<html>
<head>
  <title>HTML Entities</title>
</head>
<body>

  <p>The copyright symbol is &copy;.</p>
  <p>The registered trademark is &reg;.</p>
  <p>The euro currency symbol is &euro;.</p>

</body>
</html>

<!-- Example 3: Unicode characters -->
<!DOCTYPE html>
<html>
<head>
  <title>Unicode Characters</title>
</head>
<body>

  <p>The copyright symbol can also be written with Unicode: &#169;.</p>
  <p>The 'snowman' character is &#9731;.</p>
  <p>A heart is &#x2764;.</p>

</body>
</html>`,

    "HTML Colors and Backgrounds":`
<!-- Example 1: Color values and formats -->
<!DOCTYPE html>
<html>
<head>
  <title>Color Formats</title>
  <style>
    .hex-color { background-color: #FF5733; }
    .rgb-color { background-color: rgb(255, 87, 51); }
    .rgba-color { background-color: rgba(255, 87, 51, 0.7); }
    .hsl-color { background-color: hsl(10, 100%, 60%); }
    .named-color { background-color: tomato; }
  </style>
</head>
<body>

  <div class="hex-color">Hexadecimal</div>
  <div class="rgb-color">RGB</div>
  <div class="rgba-color">RGBA</div>
  <div class="hsl-color">HSL</div>
  <div class="named-color">Named Color</div>

</body>
</html>

<!-- Example 2: Background colors -->
  <!DOCTYPE html>
<html>
<head>
  <title>Background Colors</title>
  <style>
    body {
      background-color: #f0f0f0; /* Light gray background for the entire page */
    }
    .box {
      background-color: steelblue;
      color: white;
      padding: 20px;
    }
  </style>
</head>
<body>

  <div class="box">
    <h2>Box with a background color</h2>
    <p>This box has a solid background color.</p>
  </div>

</body>
</html>
   
<!-- Example 3: Background images -->
  <!DOCTYPE html>
<html>
<head>
  <title>Background Images</title>
  <style>
    .hero {
      background-image: url('https://via.placeholder.com/800x400');
      background-size: cover;
      background-position: center;
      height: 400px;
      color: white;
      text-align: center;
      padding-top: 150px;
    }
  </style>
</head>
<body>

  <div class="hero">
    <h1>Welcome!</h1>
    <p>This text is on top of a background image.</p>
  </div>

</body>
</html>

<!-- Example 4: Gradient backgrounds -->
<!DOCTYPE html>
<html>
<head>
  <title>Gradient Backgrounds</title>
  <style>
    .linear-gradient {
      background-image: linear-gradient(to right, #007bff, #6610f2);
      padding: 20px;
      color: white;
    }
    .radial-gradient {
      background-image: radial-gradient(circle, #f2f2f2, #ccc);
      padding: 20px;
    }
  </style>
</head>
<body>

  <div class="linear-gradient">
    <p>This is a linear gradient from blue to purple.</p>
  </div>
  <br>
  <div class="radial-gradient">
    <p>This is a radial gradient.</p>
  </div>

</body>
</html>

<!-- Example 5: Color accessibility -->
  <!DOCTYPE html>
<html>
<head>
  <title>Color Accessibility</title>
  <style>
    .accessible-text {
      background-color: #333;
      color: #fff; /* High contrast */
      padding: 10px;
    }
    .inaccessible-text {
      background-color: #eee;
      color: #999; /* Low contrast, hard to read */
      padding: 10px;
    }
  </style>
</head>
<body>

  <div class="accessible-text">
    <p>This text is easy to read due to high contrast.</p>
  </div>

  <div class="inaccessible-text">
    <p>This text is difficult to read due to low contrast.</p>
  </div>

</body>
</html>

<!-- Example 6: Color contrast -->
  <!DOCTYPE html>
<html>
<head>
  <title>Color Contrast</title>
  <style>
    .good-contrast {
      background-color: #0000FF; /* Blue */
      color: white; /* Contrast ratio > 4.5 */
      padding: 10px;
    }
    .poor-contrast {
      background-color: #0000FF; /* Blue */
      color: #87CEEB; /* Sky blue, low contrast */
      padding: 10px;
    }
  </style>
</head>
<body>

  <div class="good-contrast">
    <p>Text with good contrast.</p>
  </div>
  <div class="poor-contrast">
    <p>Text with poor contrast.</p>
  </div>

</body>
</html>`,


      "HTML Layout Techniques": `
<!-- Example 1: Div-based layouts -->
   <!DOCTYPE html>
<html>
<head>
  <title>Div-based Layout</title>
  <style>
    .container {
      width: 960px;
      margin: 0 auto;
    }
    .header, .footer {
      background-color: #f0f0f0;
      padding: 20px;
      text-align: center;
    }
    .sidebar {
      float: left;
      width: 300px;
      background-color: #eee;
      padding: 10px;
    }
    .main-content {
      float: right;
      width: 630px;
      background-color: #ddd;
      padding: 10px;
    }
    .clearfix::after {
      content: "";
      display: table;
      clear: both;
    }
  </style>
</head>
<body>

  <div class="container clearfix">
    <div class="header">Header</div>
    <div class="sidebar">Sidebar</div>
    <div class="main-content">Main Content</div>
    <div class="footer">Footer</div>
  </div>

</body>
</html>   

<!-- Example 2: CSS Grid basics -->
  <!DOCTYPE html>
<html>
<head>
  <title>CSS Grid</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 1fr 2fr 1fr; /* 3 columns */
      grid-template-rows: auto;
      gap: 10px;
      padding: 10px;
      background-color: #f9f9f9;
    }
    .grid-item {
      background-color: lightcoral;
      padding: 20px;
    }
  </style>
</head>
<body>

  <div class="grid-container">
    <div class="grid-item">Sidebar</div>
    <div class="grid-item">Main Content</div>
    <div class="grid-item">Sidebar 2</div>
  </div>

</body>
</html>

<!-- Example 3: Flexbox basics -->
   <!DOCTYPE html>
<html>
<head>
  <title>Flexbox</title>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between; /* Pushes items to the edges */
      align-items: center; /* Vertically aligns items */
      border: 2px solid #333;
      padding: 10px;
    }
    .flex-item {
      padding: 10px;
      background-color: lightgreen;
    }
  </style>
</head>
<body>

  <div class="flex-container">
    <div class="flex-item">Home</div>
    <div class="flex-item">About</div>
    <div class="flex-item">Services</div>
  </div>

</body>
</html>

<!-- Example 4: Responsive layouts -->
<!DOCTYPE html>
<html>
<head>
  <title>Responsive Layout</title>
  <style>
    .grid-container {
      display: grid;
      grid-template-columns: 1fr; /* Single column by default */
    }
    .grid-item {
      padding: 20px;
      border: 1px solid #ccc;
    }
    /* For screens wider than 600px */
    @media (min-width: 600px) {
      .grid-container {
        grid-template-columns: 1fr 1fr; /* Two columns */
      }
    }
    /* For screens wider than 900px */
    @media (min-width: 900px) {
      .grid-container {
        grid-template-columns: 1fr 1fr 1fr; /* Three columns */
      }
    }
  </style>
</head>
<body>

  <div class="grid-container">
    <div class="grid-item">Item 1</div>
    <div class="grid-item">Item 2</div>
    <div class="grid-item">Item 3</div>
  </div>

</body>
</html>
`,

    "HTML iframes":`
<!-- Example 1: iframe basics -->
     <!DOCTYPE html>
<html>
<head>
  <title>iframe Basics</title>
</head>
<body>

  <h1>My Website</h1>
  
  <p>Here is an embedded video from an external site:</p>
  <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" width="560" height="315" frameborder="0" allowfullscreen></iframe>

</body>
</html>

<!-- Example 2: iframe attributes -->
   <!DOCTYPE html>
<html>
<head>
  <title>iframe Attributes</title>
</head>
<body>

  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3" 
    width="600" 
    height="450" 
    title="Google Maps Embedded" 
    loading="lazy"
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>

</body>
</html>
   
<!-- Example 3: Security considerations -->
  <iframe 
    src="https://example.com/untrusted-content.html" 
    sandbox="allow-scripts allow-same-origin"> 
  </iframe>

<!-- Example 4: Responsive iframes -->
<!DOCTYPE html>
<html>
<head>
  <title>Responsive iframes</title>
  <style>
    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
      height: 0;
    }
    .video-container iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  </style>
</head>
<body>

  <div class="video-container">
    <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe>
  </div>

</body>
</html>

<!-- Example 5: iframe best practices -->
   <iframe 
  src="https://www.example.com/report" 
  width="800" 
  height="600" 
  title="Monthly Sales Report" 
  loading="lazy" 
  sandbox="allow-same-origin allow-popups"
>
  Your browser does not support iframes.
</iframe>`,

    "HTML Audio and Video":`
<!-- Example 1: Audio element -->
<audio controls>
    <source src="audio/background-music.mp3" type="audio/mpeg">
    <source src="audio/background-music.ogg" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>
  
<!-- Example 2: Video element -->
 <video width="640" height="360" controls poster="images/video-poster.jpg">
    <source src="video/intro-video.mp4" type="video/mp4">
    <source src="video/intro-video.webm" type="video/webm">
    Your browser does not support the video element.
  </video>

<!-- Example 3: Media formats -->
    <video controls>
    <source src="video.mp4" type="video/mp4">
    <source src="video.webm" type="video/webm">
    <source src="video.ogv" type="video/ogg">
  </video>

<!-- Example 4: Media controls -->
  <!DOCTYPE html>
<html>
<head>
  <title>Media Controls</title>
</head>
<body>

  <video id="my-video" width="320" height="240" muted>
    <source src="video.mp4" type="video/mp4">
  </video>
  <button onclick="document.getElementById('my-video').play()">Play</button>
  <button onclick="document.getElementById('my-video').pause()">Pause</button>
</body>
</html>

<!-- Example 5: Media accessibility -->
<!DOCTYPE html>
<html>
<head>
  <title>Media Accessibility</title>
</head>
<body>

  <video controls>
    <source src="video.mp4" type="video/mp4">
    <track kind="captions" src="captions.vtt" srclang="en" label="English Captions">
    <track kind="descriptions" src="descriptions.vtt" srclang="en" label="English Descriptions">
  </video>

</body>
</html>

<!-- Example 6: Media optimization -->
  <!DOCTYPE html>
<html>
<head>
  <title>Media Optimization</title>
</head>
<body>

  <video width="640" height="360" controls preload="metadata">
    <source src="compressed-video.mp4" type="video/mp4">
  </video>

</body>
</html>`,

    "HTML Canvas Basics":`
<!-- Example 1: Canvas element -->
    <!DOCTYPE html>
<html>
<head>
  <title>Canvas Element</title>
  <style>
    canvas {
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <canvas id="myCanvas" width="200" height="100"></canvas>
</body>
</html>   

<!-- Example 2: Drawing basics -->
  <!DOCTYPE html>
<html>
<head>
  <title>Canvas Drawing</title>
</head>
<body>

  <canvas id="myCanvas" width="200" height="100"></canvas>

  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    // Draw a rectangle
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 150, 80);
  </script>
 </body>
</html>

<!-- Example 3: Shapes and paths -->
  <!DOCTYPE html>
<html>
<head>
  <title>Shapes and Paths</title>
  <style>
    canvas { border: 1px solid black; }
  </style>
</head>
<body>

  <canvas id="myCanvas" width="200" height="200"></canvas>

  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    // Draw a triangle using a path
    ctx.beginPath();
    ctx.moveTo(100, 20);
    ctx.lineTo(20, 180);
    ctx.lineTo(180, 180);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
  </script>

</body>
</html>

<!-- Example 4: Text and images -->
   <!DOCTYPE html>
<html>
<head>
  <title>Text and Images</title>
  <style>
    canvas { border: 1px solid black; }
  </style>
</head>
<body>

  <canvas id="myCanvas" width="300" height="200"></canvas>

  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    
    // Draw text
    ctx.font = "30px Arial";
    ctx.fillStyle = "green";
    ctx.fillText("Hello World!", 10, 50);

    // Draw an image
    const img = new Image();
    img.onload = function() {
      ctx.drawImage(img, 10, 70, 100, 100);
    };
    img.src = "https://via.placeholder.com/100";
  </script>

</body>
</html>

<!-- Example 5: Animation basics -->
   <!DOCTYPE html>
<html>
<head>
  <title>Canvas Animation</title>
  <style>
    canvas { border: 1px solid black; }
  </style>
</head>
<body>

  <canvas id="myCanvas" width="300" height="200"></canvas>

  <script>
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    let x = 0;

    function draw() {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw the shape in a new position
      ctx.fillStyle = "orange";
      ctx.fillRect(x, 50, 50, 50);
      
      // Update position
      x += 1;
      if (x > canvas.width) {
        x = 0;
      }
      // Loop the animation
      requestAnimationFrame(draw);
    }
    draw();
  </script>
</body>
</html>`,

    "HTML SVG Graphics":`
<!-- Example 1: SVG basics -->
    <!DOCTYPE html>
<html>
<head>
  <title>SVG Basics</title>
</head>
<body>

  <svg width="100" height="100">
    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" />
  </svg>

</body>
</html>

<!-- Example 2: Basic Shapes -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Basic Shapes</title>
    <style>
        .shape-demo {
            margin: 20px;
            border: 1px solid #ddd;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h2>SVG Basic Shapes</h2>
    
    <div class="shape-demo">
        <svg width="600" height="400" viewBox="0 0 600 400">
            
            <!-- Rectangle with rounded corners -->
            <rect x="50" y="50" width="100" height="60" 
                  rx="10" ry="10" 
                  fill="#e74c3c" stroke="#c0392b" stroke-width="3"/>
            
            <!-- Circle -->
            <circle cx="250" cy="80" r="40" 
                    fill="#f39c12" stroke="#e67e22" stroke-width="3"/>
            
            <!-- Ellipse -->
            <ellipse cx="400" cy="80" rx="60" ry="30" 
                     fill="#9b59b6" stroke="#8e44ad" stroke-width="3"/>
            
            <!-- Line -->
            <line x1="50" y1="150" x2="200" y2="200" 
                  stroke="#34495e" stroke-width="4" stroke-linecap="round"/>
            
            <!-- Polygon (Triangle) -->
            <polygon points="250,150 200,230 300,230" 
                     fill="#2ecc71" stroke="#27ae60" stroke-width="3"/>
            
            <!-- Polyline (Open shape) -->
            <polyline points="350,150 400,180 450,150 500,200 550,160" 
                      fill="none" stroke="#e67e22" stroke-width="4" 
                      stroke-linecap="round" stroke-linejoin="round"/>
            
            <!-- Star using polygon -->
            <polygon points="100,300 110,270 140,270 118,252 128,222 100,240 72,222 82,252 60,270 90,270" 
                     fill="#f1c40f" stroke="#f39c12" stroke-width="2"/>
            
            <!-- Labels -->
            <text x="100" y="130" text-anchor="middle" font-size="12">Rectangle</text>
            <text x="250" y="135" text-anchor="middle" font-size="12">Circle</text>
            <text x="400" y="125" text-anchor="middle" font-size="12">Ellipse</text>
            <text x="125" y="215" text-anchor="middle" font-size="12">Line</text>
            <text x="250" y="250" text-anchor="middle" font-size="12">Polygon</text>
            <text x="450" y="220" text-anchor="middle" font-size="12">Polyline</text>
            <text x="100" y="330" text-anchor="middle" font-size="12">Star</text>
        </svg>
    </div>
</body>
</html>


<!-- Example 3: Paths and Curves -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Paths and Curves</title>
    <style>
        .path-demo {
            margin: 20px;
            border: 1px solid #ddd;
            padding: 10px;
        }
        .control-point {
            fill: #e74c3c;
            stroke: #c0392b;
            stroke-width: 1;
        }
        .control-line {
            stroke: #bdc3c7;
            stroke-width: 1;
            stroke-dasharray: 3,3;
        }
    </style>
</head>
<body>
    <h2>SVG Paths and Curves</h2>
    
    <div class="path-demo">
        <svg width="800" height="500" viewBox="0 0 800 500">
            
            <!-- Cubic Bézier curve -->
            <path d="M 200 100 C 200 50, 300 50, 300 100" 
                  fill="none" stroke="#e74c3c" stroke-width="4"/>
            <!-- Control points visualization -->
            <circle cx="200" cy="50" r="3" class="control-point"/>
            <circle cx="300" cy="50" r="3" class="control-point"/>
            <line x1="200" y1="100" x2="200" y2="50" class="control-line"/>
            <line x1="300" y1="100" x2="300" y2="50" class="control-line"/>
            <text x="250" y="130" text-anchor="middle" font-size="12">Cubic Bézier</text>
            
            <!-- Smooth cubic curves -->
            <path d="M 400 100 C 400 50, 450 50, 450 100 S 500 150, 500 100" 
                  fill="none" stroke="#9b59b6" stroke-width="4"/>
            <text x="450" y="170" text-anchor="middle" font-size="12">Smooth Cubic</text>
            
            <!-- Quadratic Bézier curve -->
            <path d="M 550 100 Q 600 50 650 100" 
                  fill="none" stroke="#f39c12" stroke-width="4"/>
            <!-- Control point -->
            <circle cx="600" cy="50" r="3" class="control-point"/>
            <line x1="550" y1="100" x2="600" y2="50" class="control-line"/>
            <line x1="650" y1="100" x2="600" y2="50" class="control-line"/>
            <text x="600" y="130" text-anchor="middle" font-size="12">Quadratic Bézier</text>
            
            <!-- Arc -->
            <path d="M 100 250 A 50 30 0 0 1 200 280" 
                  fill="none" stroke="#2ecc71" stroke-width="4"/>
            <text x="150" y="310" text-anchor="middle" font-size="12">Arc</text>
          
        </svg>
    </div>
</body>
</html>


<!-- Example 4: Text and Images -->
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Text and Images</title>
    <style>
        .text-demo {
            margin: 20px;
            border: 1px solid #ddd;
            padding: 10px;
        }
    </style>
</head>
<body>
    <h2>SVG Text and Images</h2>
    
    <div class="text-demo">
        <svg width="800" height="600" viewBox="0 0 800 600">
            
            <!-- Basic text -->
            <text x="50" y="50" font-family="Arial" font-size="24" fill="#2c3e50">
                Basic SVG Text
            </text>
            
            <!-- Styled text -->
            <text x="50" y="100" 
                  font-family="Georgia, serif" 
                  font-size="20" 
                  font-weight="bold" 
                  fill="#e74c3c" 
                  stroke="#c0392b" 
                  stroke-width="1">
                Styled Text with Stroke
            </text>
            
            <!-- Text alignment examples -->
            <line x1="400" y1="40" x2="400" y2="140" stroke="#bdc3c7" stroke-width="1"/>
            <text x="400" y="60" text-anchor="start" font-size="16" fill="#3498db">
                Start aligned text
            </text>
            <text x="400" y="85" text-anchor="middle" font-size="16" fill="#9b59b6">
                Middle aligned text
            </text>
            <text x="400" y="110" text-anchor="end" font-size="16" fill="#f39c12">
                End aligned text
            </text>
            
            <!-- Rotated text -->
            <text x="100" y="200" 
                  font-size="18" 
                  fill="#27ae60" 
                  transform="rotate(-45 100 200)">
                Rotated Text
            </text>
            
            <!-- Multi-line text using tspan -->
            <text x="50" y="250" font-family="Arial" font-size="16" fill="#34495e">
                <tspan x="50" dy="0">Line 1: Multi-line text</tspan>
                <tspan x="50" dy="20">Line 2: Using tspan elements</tspan>
                <tspan x="50" dy="20" font-weight="bold" fill="#e74c3c">Line 3: With different styling</tspan>
            </text> 
        </svg>
    </div>
</body>
</html>


<!-- Example 5: SVG Animation -->
   <!DOCTYPE html>
<html>
<head>
  <title>SVG Animation</title>
  <style>
    .animated-rect {
      animation: moveRect 2s infinite alternate;
    }
    @keyframes moveRect {
      from { transform: translateX(0); }
      to { transform: translateX(100px); }
    }
  </style>
</head>
<body>

  <svg width="200" height="100">
    <rect class="animated-rect" x="10" y="10" width="50" height="50" fill="orange" />
  </svg>

</body>
</html>`,

    "HTML Project: Building a Complete Website":`
<!-- Example 1: file structure -->
my-website/
├── index.html
├── about.html
├── contact.html
├── styles/
│   └── main.css
├── scripts/
│   └── main.js
└── images/
    └── logo.png

<!-- Example 2: Project planning -->
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Planning Template</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .planning-section {
            background: white;
            margin: 20px 0;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .section-header {
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        
        .planning-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin: 20px 0;
        }
        
        .planning-card {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #3498db;
        }
        
        .timeline {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            margin: 20px 0;
        }
        
        .timeline-item {
            background: #3498db;
            color: white;
            padding: 15px 20px;
            border-radius: 20px;
            margin: 10px;
            flex: 1;
            min-width: 200px;
            text-align: center;
        }
        
        .wireframe {
            border: 2px dashed #bdc3c7;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
            background: #ecf0f1;
        }
        
        @media (max-width: 768px) {
            .planning-grid {
                grid-template-columns: 1fr;
            }
            .timeline {
                flex-direction: column;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="planning-section">
            <h1>Web Development Project Plan</h1>
            <p><strong>Project:</strong> Portfolio Website for Creative Professional</p>
            <p><strong>Timeline:</strong> 4 weeks | <strong>Budget:</strong> $2,000 | <strong>Team Size:</strong> 3 members</p>
        </header>

        <!-- Project Goals -->
        <section class="planning-section">
            <div class="section-header">
                <h2>1. Project Goals & Objectives</h2>
            </div>
            <div class="planning-grid">
                <div class="planning-card">
                    <h3>Primary Goals</h3>
                    <ul>
                        <li>Showcase creative portfolio</li>
                        <li>Generate leads for new clients</li>
                        <li>Establish professional online presence</li>
                        <li>Improve search engine visibility</li>
                    </ul>
                </div>
                <div class="planning-card">
                    <h3>Success Metrics</h3>
                    <ul>
                        <li>50+ portfolio views per month</li>
                        <li>10+ contact form submissions</li>
                        <li>Page load time under 3 seconds</li>
                        <li>95+ Google Lighthouse score</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Target Audience -->
        <section class="planning-section">
            <div class="section-header">
                <h2>2. Target Audience Analysis</h2>
            </div>
            <div class="planning-grid">
                <div class="planning-card">
                    <h3>Primary Audience</h3>
                    <p><strong>Small Business Owners</strong></p>
                    <ul>
                        <li>Age: 30-50 years</li>
                        <li>Budget: $1,000-$10,000</li>
                        <li>Needs: Brand identity, marketing materials</li>
                        <li>Behavior: Research-focused, value-conscious</li>
                    </ul>
                </div>
                <div class="planning-card">
                    <h3>Secondary Audience</h3>
                    <p><strong>Marketing Agencies</strong></p>
                    <ul>
                        <li>Looking for freelance partners</li>
                        <li>Project-based collaboration</li>
                        <li>Higher budget range</li>
                        <li>Quick decision making</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Site Architecture -->
        <section class="planning-section">
            <div class="section-header">
                <h2>3. Site Architecture & Navigation</h2>
            </div>
            <div class="wireframe">
                <h3>Site Map Structure</h3>
                <div style="margin: 20px 0; font-family: monospace;">
                    <div>📄 Home</div>
                    <div>├── 🎨 Portfolio</div>
                    <div>│   ├── Web Design</div>
                    <div>│   ├── Branding</div>
                    <div>│   └── Print Design</div>
                    <div>├── 👤 About</div>
                    <div>├── 🛠️ Services</div>
                    <div>├── 📝 Blog</div>
                    <div>└── 📞 Contact</div>
                </div>
            </div>
        </section>

        <!-- Technical Requirements -->
        <section class="planning-section">
            <div class="section-header">
                <h2>4. Technical Specifications</h2>
            </div>
            <div class="planning-grid">
                <div class="planning-card">
                    <h3>Browser Support</h3>
                    <ul>
                        <li>Chrome 90+ (Primary)</li>
                        <li>Firefox 88+ (Primary)</li>
                        <li>Safari 14+ (Secondary)</li>
                        <li>Edge 90+ (Secondary)</li>
                        <li>Mobile browsers (Essential)</li>
                    </ul>
                </div>
                <div class="planning-card">
                    <h3>Performance Targets</h3>
                    <ul>
                        <li>First Contentful Paint: &lt; 1.5s</li>
                        <li>Largest Contentful Paint: &lt; 2.5s</li>
                        <li>Cumulative Layout Shift: &lt; 0.1</li>
                        <li>Time to Interactive: &lt; 3.8s</li>
                    </ul>
                </div>
                <div class="planning-card">
                    <h3>Technology Stack</h3>
                    <ul>
                        <li>HTML5 (Semantic markup)</li>
                        <li>CSS3 (Grid, Flexbox, Custom Properties)</li>
                        <li>Vanilla JavaScript (ES6+)</li>
                        <li>Progressive Web App features</li>
                        <li>Static site generation</li>
                    </ul>
                </div>
            </div>
        </section>

        <!-- Project Timeline -->
        <section class="planning-section">
            <div class="section-header">
                <h2>5. Project Timeline</h2>
            </div>
            <div class="timeline">
                <div class="timeline-item">
                    <h4>Week 1</h4>
                    <p>Planning & Design</p>
                    <small>Wireframes, mockups, content strategy</small>
                </div>
                <div class="timeline-item">
                    <h4>Week 2</h4>
                    <p>Development</p>
                    <small>HTML structure, CSS styling, basic functionality</small>
                </div>
                <div class="timeline-item">
                    <h4>Week 3</h4>
                    <p>Content & Features</p>
                    <small>Content integration, advanced features, optimization</small>
                </div>
                <div class="timeline-item">
                    <h4>Week 4</h4>
                    <p>Testing & Launch</p>
                    <small>QA testing, deployment, post-launch monitoring</small>
                </div>
            </div>
        </section>

        <!-- Risk Assessment -->
        <section class="planning-section">
            <div class="section-header">
                <h2>6. Risk Assessment & Mitigation</h2>
            </div>
            <div class="planning-grid">
                <div class="planning-card">
                    <h3>High Risk</h3>
                    <p><strong>Content Delivery Delays</strong></p>
                    <p><em>Mitigation:</em> Set clear content deadlines, provide templates, have placeholder content ready</p>
                </div>
                <div class="planning-card">
                    <h3>Medium Risk</h3>
                    <p><strong>Browser Compatibility Issues</strong></p>
                    <p><em>Mitigation:</em> Progressive enhancement approach, thorough cross-browser testing</p>
                </div>
                <div class="planning-card">
                    <h3>Low Risk</h3>
                    <p><strong>Performance Requirements</strong></p>
                    <p><em>Mitigation:</em> Regular performance audits, image optimization, code splitting</p>
                </div>
            </div>
        </section>
    </div>
</body>
</html>`
  };
  return examples[lessonTitle] || "<!-- Example code will be provided -->";
};

const getHTMLCodeExplanation = (lessonTitle) => {
  const explanations = {
    "Introduction to HTML": `
### Example 1 
## **What is HTML**
HTML, which stands for HyperText Markup Language, is the standard markup language
for documents designed to be displayed in a web browser. It can be assisted by
technologies such as Cascading Style Sheets (CSS) and scripting languages such as
JavaScript.
#### **Role of HTML in web development**
HTML provides the structure of a web page. Think of it as the skeleton of a house.
Without HTML, there would be no web pages as we know them. It defines the meaning
and structure of web content.

#### ***The example shows a basic HTML document structure:***
- \`<!DOCTYPE html>\` declares the document as HTML5.
- The \`<html>\` element wraps the entire page.
- The \`<head>\` contains meta information and the page title.
- The \`<title>\` sets the page title displayed in the browser tab.
- The \`<body>\` contains visible content, like headings, paragraphs, and links
- The\`<h1>\` element defines the main heading
- The\`<p>\` element defines paragraphs 
- The HTML code (in magenta) is made up of characters that live inside angled 
brackets — these are called HTML elements. Elements are usually 
made up of two tags: an opening tag and a closing tag. (The closing tag 
has an extra forward slash in it.) Each HTML element tells the browser 
something about the information that sits between its opening and 
closing tags.

## **Creating your first HTML page**
Creating your first HTML page is a straightforward process. You only need a text editor (like Notepad on Windows, TextEdit on Mac, or more advanced editors 
like VS Code, Sublime Text, or Atom) and a web browser.
#### ***Follow these steps:***
- **Open a text editor**: Launch your preferred text editor.
- **Write the HTML code**: Type or paste the basic HTML structure provided earlier into the editor:
- **Save the file**: Save the file with a \`.html\` or \`.html\` extension (e.g., \`index.html\`). Make sure to select
- **Open in browser**: Locate the saved \`index.html\` file on your computer and double-click it. It should open in your default web browser, 
displaying "Hello, World!" as a heading and "This is my very first HTML page." as a paragraph.

*Congratulations! You've just created and viewed your first HTML page.*

### Example 2 
## **HTML Elements and Tags**
**Elements** are the building blocks, defined by tags. Tags instruct browsers on content
rendering. Attributes
The three main parts of the HTML elements are: 
- **Opening Tag**: it marks the start of the element 
- **Content**:The Contents that are visible on the browser 
- **Closing Tag**: It marks the end of the element. Usually, it start with a backward slash "/".

#### **HTML Tag**: 
A **tag** is just the *syntax* we use in HTML to define or mark up content.
- Tags tell the browser how to interpret and render content.
- Tag are enclosed in **angle brackets** \`< >\`
- Tags usually come in pairs:
-  Opening tag → \`<h1>\`
-  Closing tag → \`</h1>\`
Some are self-closing (void) tags (don’t need closing): \`<br>\`, \`<img>\`, \`<hr>\` \`input\`,

**Code Explanation**
- \`<h1>\` → opening tags 
- \`</h1>\` → closing tags 
- \`This is a heading here\` → content 
- Together → \`<h1>This is a heading here</h1>\` is a **Heading element**`,

    "HTML Document Structure": `
### Example 1 
- The \`<!DOCTYPE html>\` declaration is the very first line of code in an HTML document. It is not an HTML 
tag itself, but rather an instruction to the web browser about which version of HTML the page is written in. 
For HTML5, the declaration is simply \`<!DOCTYPE html>\`

### Example 2 
- \`<html>\`: This is the root element of an HTML page.
- \`<head>\`: This element contains meta-information about the HTML document,
such as its title, links to stylesheets, and scripts.
- \`<title>\`:This element specifies a title for the HTML page (which shown in the browser's title bar or in the page's tab)
- \`<body>\`: This element contains the visible page content.

### Example 3 
## **Meta tags and character encoding**
\`<meta>\` tags provide metadata about the HTML document. Metadata is data about data, and in the context of HTML, it describes characteristics of the document itself. 
While not displayed on the page, meta tags are vital for browsers, search engines, and other web services to understand and process the page correctly.

#### **Character Encoding (charset)**:
The \`charset\` attribute in a meta tag specifies the character encoding for the HTML document. 
The most commonly used and recommended character encoding is \`UTF-8\` (\`<meta charset="UTF-8">\`).

### Example 4 
**Viewport settings for responsive design**
The viewport is the user's visible area of a web page. It varies with the device, and responsive web design aims to make web pages 
look good on all devices (desktops, tablets, and phones). 
The <\`meta name="viewport"\`> tag is crucial for controlling the layout and scaling of a web page on different devices.

**Explanation of attributes**:
- \`width=device-width\`: Sets the width of the viewport to the width of the device's screen in CSS pixels. 
This is essential for ensuring that the page's width matches the device's width, preventing horizontal scrolling on smaller screens.
- \`initial-scale=1.0\`: Sets the initial zoom level when the page is first loaded by the browser. 
A value of \`1.0\` means no zoom, displaying the page at its actual size, which is generally desired for responsive design.

### Example 5 
The lang attribute (e.g., \`<html lang="en">\` ) specifies the content's language. It's
vital for screen readers to pronounce text correctly, for search engines to deliver
language-specific results, and for translation tools. \`en\` means English `,

    "HTML Headings and Paragraphs": `
### Example 1
**Headings** are used to define titles and subtitles. \`<h1>\` is the most important heading,
and \`<h6>\` is the least important.
- The \`<h1>\` is used for the main heading of the page
- The \`<h2>\` to <h6> tags are used for subheadings.

### Example 2
The **paragraph** tag is used for blocks of text.
- The \`<p>\` tag is used to define paragraphs.

### Example 3 
- The \`<br />\` tag creates a line break within text.
- Use \`<br>\` if you want a line break (a new line) without starting a new paragraph
*Note: The \`<br />\` is an empty tag, which means no closing tag is required.*

### Example 4 
- The \`<hr>\` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule.
- The \`<hr>\` element is used to separate content (or define a change) in an HTML page
*Note: The \`<hr />\` is an empty tag, which means no closing tag is required.*
    `,

    "HTML Text Formatting": `
### Example 1 
This code demonstrates various text formatting options in HTML:
The HTML \`<b>\` element used for bold text, without conveying extra importance..

### Example 2 
The \`<strong>\` element indicates strong importance. The content inside id typically displayed in bold.

### Example 3
The \`<i>\` element used for italic text, often for technical terms, foreign words, or thoughts.

### Example 4 
The \`<em>\` element indicates emphasis that subtly changes 
the meaning of a sentence. Browsers will show the contents of an \`<em>\` element in italic.

### Example 5
The \`<u>\` element used for underlines text.

### Example 6
The \`<mark>\` element use for highlights text with a yellow background. 

### Example 7
The \`<small>\` element used for makes text smaller.

### Example 8
The \`<del>\` tag indicates deleted text, often shown with a strikethrough.

### Example 9
The \`<ins>\` tag indicates inserted text, often shown with an underline.

### Example 10
The \`<sub>\` element is used to contain characters that should be subscript.
 It is commonly used with foot notes or chemical formulas 

### Example 11
The \`<sup>\` element is used to contain characters that 
should be superscript such as the suffixes of dates `,

    "HTML Links and Navigation":`
### Example 1 
Links are created using the \`<a>\`element which has an attribute 
called \`href\`. The value of the \`href\` attribute is the page that 
you want people to go to when they click on the link.Users can click on anything that 
appears between the opening \`<a>\` tag and the closing \`</a>\`
tag and will be taken to the page specified in the \`href\` attribute.

### Example 2 
The \`target\` attribute specifies where to open the linked document.
- \`_self\`: Opens the linked document in the same window/tab (default).
- \`_blank\`: Opens the linked document in a new window/tab.
- \`_parent\`: Opens the linked document in the parent frame.
- \`_top\`: Opens the linked document in the full body of the window

### Example 3 
- When you link to a different website, the value of the \`href\` attribute will be the full web 
address for the site, which is known as an **(absolute URL)**.
URL stands for Uniform Resource Locator

- When you are linking to other pages within the same site, you do not need
to specify the domain name in the URL. You can use a shorthand known as a 
**(relative URL)**. If all the pages of the site are in the same folder, then the value 
of the href attribute is just the name of the file.

#### ***Difference between Absolute URLs and Relative URLs***
- An Absolute URL contains the full web address, including the protocol and domain
While A Relative URL provides a partial path, usually relative to the current page.
- Absolute URL often used for linking to external websites.
While Relative URL commonly used for internal navigation within the same site
(like moving from one page to another).

### Example 4 
**Email and Telephone Links**: The \`mailto:\` and \`tel:\` schemes are used in the \`href\` attribute to 
initiate an email or phone call, respectively.

### Example 5 
**Download Links**: The \`download\` attribute prompts the browser to download the linked file instead of navigating to it. 
You can optionally provide a new file name as the attribute's value.

### Example 6 
Proper navigation structure improves usability and accessibility.
**Navigation Menus**: A navigation menu is typically structured using an HTML list (\`<ul>\` or \`<ol>\`) or a \`<nav>\` semantic tag. 
The \`<nav>\` element explicitly indicates that the contained links are for primary navigation`,
    
     "HTML Images and Media":`
### Example 1 
The \`<img>\` tag is used to embed images in HTML.This is an empty element
(which means there is no closing tag). It must carry the following two attributes:
- The \`src\` attribute specifies the path to the image file.
- The \`alt\` attribute provides alternative text for the image, which is important for accessibility.
- The \`width\` and \`height\` attributes specify the dimensions of the image in pixels.

### Example 2 
**Responsive Images**: The \`srcset\` and \`sizes\` attributes enable the browser to choose the most appropriate image from a set of options 
based on the user's viewport size. \`srcset\` provides a list of image URLs and their widths, while \`sizes\` defines how the image should be 
displayed at different viewport sizes. This helps with performance and user experience.

### Example 3 
- The \`<figure>\` element is used to group an image with its caption.You can have more than one 
image inside the \`<figure>\` element as long as they all share the same caption.
- The \`<figcaption>\` element is used to provide a caption for the image.

**Image Formats**: Common image formats include **JPEG** (best for photos), **PNG** (supports transparency), and **SVG** (vector-based, scalable graphics). 
Choosing the right format is key to optimization.

*Note: Images must save in the directory where the HTML file is located or provide a correct path to the image file.*`,

      "HTML Lists (Ordered and Unordered)": `
### Example 1 
**Unordered lists (<ul>) and list items**
- The \`<ul>\` element represents an unordered list of items, typically rendered with bullets. Each list item is defined by the \`<li>\` element.
- The \`<ul>\` tag creates the list container. Each \`<li>\` tag within the \`<ul>\` represents a distinct item in the list. 
Browsers typically display \`<ul>\` items with a bullet point by default.

### Example 2 
**Ordered lists (<ol>) and numbering**
- The \`<ol>\` element creates an ordered list of items, numbered by default. The \`<li>\` element is used for each list item, just like with unordered lists.
- The \`<ol>\` tag signifies an ordered list. The browser automatically assigns a number to each \`<li>\` element, starting from 1. 
You can change the numbering style using the type attribute (e.g., \`type="a"\` for lowercase letters).

### Example 3 
## **Nested lists and hierarchy**
- You can create hierarchical structures by placing one list inside a list item of another list. This allows for outlining complex information.
- The inner \`<ol>\` is placed inside the \`<li>\` of the outer \`<ul>\`. This creates a sub-list for each major topic,
demonstrating a clear parent-child relationship between the list items.

### Example 4 
A description list is used for terms and their descriptions. The \`<dl>\` element contains a series of term-description groups. 
Each group consists of a \`<dt>\` (description term) and one or more \`<dd>\` (description description) elements.

### Example 5 
You can change the appearance of lists using CSS. The \`list-style-type\` property can change the bullet or numbering style. 
You can also use \`list-style-image\` to use a custom image for bullets.

**Explanation**
The CSS \`list-style-type\` property is used to modify the default marker. 
- For \`<ul>\`, common values are \`circle\`, \`square\`, and \`none\`. 
- For \`<ol>\`, values include \`decimal\`, \`lower-alpha\`, \`upper-alpha\`, \`lower-roman\`, and \`upper-roman\`.

### Example 6
**Semantic use of lists**
Using the correct list type enhances semantic meaning and accessibility. An unordered list (\`<ul>\`) is for a group of related items where order doesn't matter. 
An ordered list (\`<ol>\`) is for items with a specific sequence or ranking. A description list (\`<dl>\`) is for term-description pairs.`,

    "HTML Tables": `
### Example 1 
**Table structure and elements**
Tables are defined using the \`<table>\` element. The core structure includes: 
- The \`<thead>\` for the header 
- The \`<tbody>\` for the body and an optional 
- The \`<tfoot>\` for the footer.
- The \`<tr>\` element defines a table row. (The tr stands for table row.)
- Each cell of a table is represented using a \`<td>\` element. (The td stands for table data.)
- The \`<th>\` element is used just like the \`<td>\` element but its purpose is to
 represent the heading for either a column or a row. (The th stands for table heading.)
    
### Example 2  
The \`<th>\` element is for table headers, which describe the data in a column or row. The \`<td>\` element is for table data, containing the actual information.
 
### Example 3 
Rows are created with the \`<tr>\` tag. You can span cells across multiple rows or columns using the \`rowspan\` and \`colspan\` attributes, respectively.
- \`colspan="2"\` in the header makes the "Details" cell span two columns.
- \`rowspan="2"\` in the \`<td>\` for "Accessories" makes it span two rows.

### Example 4 
**Table styling and borders**
CSS is used to style tables. The \`border-collapse\` property can be used to merge cell borders, and \`padding\` can add spacing within cells.
 
**Explanation**
- \`border-collapse: collapse;\` removes the double border effect between cells.
- The \`border\` property on \`<th>\` and \`<td>\` adds a line around each cell.
- \`padding\` adds space between the cell content and its border.
- The \`background-color\` on \`<th>\` changes the header's background.`,

"HTML Forms Basics":`
### Example 1 
Forms are the backbone of user interaction on the web. A form is defined by the \`<form>\` element, 
which acts as a container for all form controls.
- The \`action\` Its valueis the URL for the page on the server that will receive the information 
in the form when it is submitted.
- The \`method\` attribute specifies how the form data should be sent to the server.
Forms can be sent using one of two methods:(\`get\` or \`post\`).
-The \`<input>\` element is used to create several different form controls. The value of the type
attribute determines what kind of input they will be creating.
- The \`type="text"\`When the type attribute has a value of text, it creates a single-line text input.

### Example 2 
**Form submission methods**
The \`<form>\` \`method\` attribute determines how the data is sent to the server.
- \`method="get"\` appends form data to the URL as query parameters. This is suitable for non-sensitive data, like search queries.
- \`method="post"\` sends form data in the body of the HTTP request. This is the standard for sensitive data, like passwords, or for larger amounts of data.

**Explanation**
- The first form uses \`get\` because a search query can be visible in the URL. 
- The second form uses \`post\` to securely send a password

### Example 3 
**Form validation basics**
HTML5 provides built-in validation attributes to ensure data is correct before submission. The \`required\` attribute is a simple way to make a field mandatory.

**Explanation**
- The \`required\` attribute on the \`input\` field tells the browser that this field must not be empty. 
If a user tries to submit the form without filling in the name, the browser will display an error message.
- The \`name\`When users enter information into a form, the server needs to know which form control each 
piece of data was entered into

### Example 4 
**Form security considerations**
Basic security measures include using the \`post\` method for sensitive data and server-side validation. 
Client-side validation is for user experience, not security. Always validate data on the server, as client-side checks can be bypassed.

The \`pattern\` attribute provides a basic client-side check for a 16-digit credit card number. However, a malicious user could disable 
JavaScript or edit the HTML to bypass this. Server-side validation is essential to prevent invalid or malicious data from being processed

### Example 5
**Form accessibility**
The \`for\` attribute on the \`<label>\` links it to the \`id\` of the \`<input>\`. A screen reader will announce the label "Email Address" when the input field is focused, providing context for the user.

### Example 6 
**Form styling and layout**
CSS is used for form styling. You can style inputs, labels, and buttons to match your website's design.
- CSS \`display: flex;\` and \`flex-direction: column;\` are used to stack form elements vertically. 
- \`padding\`, \`border\`, and \`border-radius\` are used to style the input fields and buttons, 
giving them a modern appearance.
- The \`<button>\` element was introduced to allow users more control over how their buttons 
appear, and to allow other elements to appear inside the button.
`,

 "HTML Form Elements":`
### Example 1 
**Text inputs and textareas**
- The \`<input>\` element is used to create several different form controls. The value of the type
attribute determines what kind of input they will be creating. 
- The \`<input type="text">\` When the type attribute has a value of \`text\`, it creates a single-line text input field.
- The \`<textarea>\` element is used to create a mutli-line text input.
Any text that appears between the opening \`<textarea>\` and closing \`</textarea>\` tags will 
appear in the text box when the page loads.

### Example 2 
**Checkboxes and radio buttons**
- The \`<input type="checkbox">\` Checkboxes allow users to select (and unselect) one or more options
 in answer to a question
- The \`<input type="radio">\` Radio buttons allow users to pick or selecting exactly one option from a list.

### Example 3 
**Select dropdowns**
The \`<select>\` element creates a dropdown list. Each option is defined by an \`<option>\` element.

**Explanation**
The \`<select>\` tag defines the dropdown. Each \`<option>\` tag represents a choice. The value attribute of the \`<option>\` is what is sent to the server. 
The text inside the \`<option>\` is what the user sees.

### Example 4
**File uploads**
- The \`<input type="file">\` element allows a user to select one or more files from their device to be uploaded to a server.
- The \`enctype="multipart/form-data"\` attribute on the \<form>\` is required for file uploads. It tells the browser how to encode the form data.
- The \`type="file"\` input creates the "Choose File" button.

### Example 5 
**Hidden fields**
- \`<input type="hidden">\` creates an input field that is not visible to the user. It's used to store data that needs to be sent with the 
form submission but doesn't need user interaction.
- The \`product_id\` is sent with the form data without the user ever seeing or being able to modify it. This is useful for storing things like 
session tokens, item IDs, or other backend data.

### Example 6
**Form buttons and submission**
- \`<input type="submit">\`: A button that submits the form.
- \`<button type="submit">\`: A more flexible button for form submission, allowing rich content like images or HTML.
- \`<button type="reset">\`: Resets all form fields to their initial values.

**Explanation**
- Both \`<input type="submit">\` and \`<button type="submit">\` perform the same function. 
- The \`<button>\` tag is often preferred because it's more versatile and can contain other HTML elements. 
- The \`reset\` button clears the form. `,

 "HTML Input Types":` 
### Example 1 
**Text and password inputs**
- \`type="text"\`: A standard single-line text field.
- \`type="password"\`: A text field where characters are masked for security.

**Explanation**
- \`type="text"\` is for general-purpose text entry. 
- \`type="password"\` visually hides the characters, which is essential for sensitive information like passwords.

### Example 2 
**Email and URL inputs**
- \`type="email"\`: Ensures the input is in a valid email format (\`@\` symbol).
- \`type="url"\`: Ensures the input is in a valid URL format (\`http://\` or \`https://\`).

These input types provide **client-side validation** for their respective formats. 
The browser will check the format before the form is submitted, providing a better user experience.

### Example 3 
**Number and range inputs**
- \`type="number"\`: For numerical input. Can have \`min\`, \`max\`, and \`step\` attributes.
- \`type="range"\`: A slider for selecting a number within a range.
- The \`min\` and \`max\` attributes constrain the acceptable values for both types. 
- \`type="number"\` also prevents non-numeric input. 
- \`type="range"\` is visually represented as a slider.
 
### Example 4 
**Date and time inputs**
- \`type="date"\`: A date picker for entering a date (year, month, day).
- \`type="time"\`: A time picker for entering a time (hour, minute).

These types provide a user-friendly calendar or clock interface for selecting dates and times, eliminating the 
need for manual date format validation.

### Example 5 
**Color and file inputs**
- \`type="color"\`: A color picker for selecting a color.
- \`type="file"\`: For uploading files.

### Example 6 
**Search and tel inputs**
- \`type="search"\`: A single-line text field for search queries. On some browsers, it may have a clear button.
- \`type="tel"\`: A single-line text field for phone numbers. This can be used to trigger a numeric keyboard on mobile devices.`,
  

"HTML Form Validation":`
### Example 1 
**Required fields**:
- The \`required\` attribute is a boolean attribute that makes a form field mandatory. The browser will prevent form submission if a required field is empty.
- If the user attempts to submit the form without entering a value in the "Name" field, the browser's built-in validation will trigger, 
showing a message like "Please fill out this field."

### Example 2 
**Input patterns and constraints**:
- The pattern attribute allows you to specify a regular expression that the input value must match. This provides a powerful way to enforce specific formats.
- The \`pattern="[0-9]{5}"\` requires the input to be exactly five digits. The \`title\` attribute provides a tooltip to inform the user of the expected format.

### Example 3 
**Custom validation messages**: 
You can override the browser's default validation messages using JavaScript. The \`setCustomValidity()\` method is used on an input element.

#### **Explanation**
The JavaScript listens for the \`invalid\` event. If the \`valueMissing\` property is true (meaning the field is empty), it sets a custom message. 
This gives you more control over the user feedback.

### Example 4 
## HTML5 validation attributes
Besides \`required\` and \`pattern\`, other attributes like \`min\`, \`max\`, \`minlength\`, \`maxlength\`, and \`type\` (e.g., \`email\`, \`number\`) are part of HTML5 validation. 
They provide a quick, declarative way to enforce constraints.

**Explanation**
- \`min="18"\` and \`max="65"\` ensure the age is within the specified range.
- \`minlength="4"\` and \`maxlength="10"\` ensure the username has a length between 4 and 10 characters.

### Example 5 
## Error handling and user feedback
Effective error handling provides clear, non-intrusive feedback to the user. This can be done by displaying error messages near the problematic field.
This code uses JavaScript to check the validity of each field on form submission. It then injects a text message into a \`<span>\` element 
if an error is found, giving the user immediate visual feedback.`,

  "HTML Div":`
### Example 1 
- The \`<div>\` element allows you to group a set of elements together in one block-level box.
- The \`<div>\` element has no required attributes, but style, class and id are common.
- \`<div>\` elements are often used to group together sections of a page.
 
### Example 2 
### Nesting and grouping elements with <div>
You can place \`<div>\` elements inside other <div> elements to create a hierarchical structure. 
This nesting is a fundamental technique for building complex, multi-column layouts and organizing content into logical blocks.

**Explanation**
- The \`.container\` \`<div>\` holds the entire page layout. Inside it, a \`.header\` \`<div>\` and a \`.main-content\` \`<div>\` group the main sections. 
- The \`.main-content\` \`<div>\` further nests \`.sidebar\` and \`.article\` divs, demonstrating a layered structure.

### Example 3 
**Styling <div> with CSS**: 
CSS is where the power of the \`<div>\` element becomes apparent. You can apply a wide range of styles to \`<div>\` elements to control their appearance, position, and layout.

**Explanation**: 
- The \`.box\` class styles a \`<div>\` with a background color, a border, and spacing (\`padding\` and \`margin\`). 
- The \`.flex-container\` \`<div>\` uses CSS Flexbox (\`display: flex\`) to create a horizontal layout for its child elements, which are styled with \`.flex-item\`.
`,


  "HTML Classes":`
### Example 1 
## class attributes to elements
The HTML \`class\` attribute is used to specify a class for an HTML element.
Multiple HTML elements can share the same \`class\`.
The \`class\` attribute is often used to point to a class name in a style sheet. 
It can also be used by a JavaScript to access and manipulate elements with the specific class name.
The class attribute on any element can share the same value. So, in this example, the 
value of city could be used on headings and links, too
  
### Example 2 
## Using multiple classes on the same element
An HTML element can have multiple classes. You simply list the class names in the class attribute, 
separated by spaces. This allows for modular styling where an element can inherit styles from several different class rules.

**Explanation**
- The first button has the \`button\` and \`primary\` classes. The third button has \`button\`, \`primary\`, and \`large\`, inheriting styles from 
all three CSS rules. This is a powerful technique for creating reusable and flexible components.

### Example 3 
**Styling elements with classes in CSS**: 
In CSS, a class is selected by a period (\`.\`) followed by the class name. This is the most common way to apply styles to a group of elements.

#### **Explanation**
The \`.card\` class styles the container \`<div>\`, giving it a border, padding, and a subtle shadow. The \`.card-title\` class styles the \`<h2>\` within the card. 
Both elements are easily and consistently styled across multiple instances.`,

"HTML Id":`
**Defining unique identifiers with id**
- An \`id\` is a unique identifier that can be applied to a single HTML element on a page. 
- The value of the \`id\` attribute must be unique within the entire document. It is used to select a 
specific element for styling, scripting, or linking.
- The syntax for id is: write a hash character (\`#\`), followed by an id name. Then, 
define the CSS properties within curly braces { }.

***Note:*** 
- The id name is case sensitive!
- The id name must contain at least one character, cannot start with a number, and
 must not contain whitespaces (spaces, tabs, etc.).

**Explanation**:
- Each \`id\` (\`main-heading\` and \`introduction\`) is unique to its element. You cannot have two elements with the same \`id\` on the same page. 
This uniqueness is what makes it useful for targeting a single element.

### Example 2 
## Styling elements with id selectors in CSS
In CSS, an id is selected by a hash symbol (\`#\`) followed by the id name. Because ids are unique, this selector 
is the most specific way to target an element in CSS.

**Explanation**
- The \`#unique-button\` selector specifically targets and styles only the button with that particular \`id\`. 
This is typically used for elements that appear only once on a page, like a main content area or a hero section.

### Example 3 
**Linking within a page using id**
The \`id\` attribute is essential for creating in-page navigation (also known as anchor links). 
You can create a link (\`<a>\`) that, when clicked, jumps the user to the element with the corresponding \`id\` on the same page.

**Explanation**
- The \`href="#section1"\` attribute on the first link targets the element with the \`id\` of \`section1\`. When clicked, the browser will automatically 
scroll the page to that heading. This is a common and highly effective way to create a table of contents or navigate long pages.`,

"HTML Semantic Elements": `
### Example 1 
Semantic elements are HTML tags that clearly describe the meaning of the content inside 
them—both to the browser and to developers.

- \`<header>\` :  Represents introductory content or a set of navigational links for a document or section.
- \`<footer>\`: epresents the footer of a document or section, typically containing information about the author, 
copyright data, or links to related documents.

### Example 2 
**Navigation and main content**
- \`<nav>\`: Represents a section of a page that provides navigation links.
- \`<main>\`: Represents the dominant content of the \`<body>\` of a document. A document should only have one \`<main>\` element.

### Example 3 
**Article and section elements**
- \`<section>\`: Represents a generic standalone section of a document, often with a heading.
- \`<article>\`: Represents a self-contained, independent piece of content, like a blog post, news article, or forum entry.

### Example 4
 **aside and figure elements**
- \`<aside>\`: Represents a section of a page that consists of content that is tangentially related to the content around it, like a sidebar.
- \`<figure>\`: Represents self-contained content, potentially with an optional caption (\`<figcaption>\`).

### Example 5 
**Semantic structure benefits**:
Using semantic HTML elements helps improve accessibility for screen readers, provides better **SEO** (search engine optimization) 
for search engine crawlers, and makes the code more readable and maintainable for developers.

The first example uses semantic tags, which immediately convey the purpose of each section. The second example relies on \`<div>\` with \`id\`s, 
which is less descriptive to a machine and can make the code harder to understand at a glance

The main difference between semantic elements and non-semantic elements is that semantic elements tell 
the browser and other users what kind of content they contain.
Compare that to non-semantic elements like \`<div>\` and \`<span>\`, which tell you nothing about what they contain.
They are just generic containers.

### Example 6 
## Accessibility improvements:
Semantic elements are crucial for accessibility. Screen readers and other assistive devices use these 
tags to understand the page structure and help users navigate the content. For example, a screen reader 
can use the \`<nav>\` tag to announce "navigation region" and the \`<h1>\` to announce the page's main heading.

#### **Explanation**:
The \`<h1>\`, \`<header>\`, and \`<main>\` tags are all considered landmark roles. A screen reader user can navigate 
between these landmarks, skipping over repetitive or non-essential content, significantly improving their browsing experience.
`,


    "HTML5 New Features": `
### Example 1 
## HTML5 New Features
HTML5 introduced significant new features to make web development more powerful and efficient. These new features include 
semantic elements for better document structure, native support for multimedia, client-side storage, and APIs for more interactive applications.
   
## New Semantic Elements
HTML5 introduced new semantic elements to give more meaning to the structure of a webpage. These elements, like \`<header>\`, \`<footer>\`, 
\`<nav>\`, \`<article>\`, and \`<section>\`, help both developers and search engines understand the purpose of each part of the document. 
This is a move away from the generic \`<div>\` tag that was used for everything in older HTML versions.

**Explanation**
- The \`<header>\` and \`<footer>\` clearly define the page's top and bottom sections. 
- The \`<nav>\` element specifies a set of navigation links. 
- The \`<main>\` tag encapsulates the primary content,
- The \`<article>\` is used for a self-contained piece of content, and \`<aside>\` is for content tangentially related to the main content, like a sidebar.

### Example  2 
**Audio and Video Elements**: 
HTML5 introduced \`<audio>\` and \`<video>\` tags, allowing developers to embed media directly into a webpage without relying on third-party plugins like Flash.

**Explanation**:
- The \`controls\` attribute provides the user with playback controls like play, pause, and volume. 
- The \`<source>\` element allows you to specify multiple media formats, letting the browser choose the first one it supports.
- The text between the tags serves as a fallback for browsers that don't support the element.

### Example 3 
**Canvas and SVG Graphics**
HTML5 provides two ways to draw graphics: Canvas and SVG.
- \`<canvas>\`: A bitmap drawing surface. You use JavaScript to draw graphics on it pixel by pixel, making it ideal for 
games, animations, and dynamic charts.
- \`<svg>\`: A vector-based graphic format. It uses XML to define shapes, paths, and text. 
SVG is ideal for logos, icons, and scalable graphics that retain quality at any size.

**Explanation**
- The Canvas example creates a drawing area, and the JavaScript code draws a light blue rectangle on it. 
- The SVG example directly defines the rectangle using XML attributes within the \`<svg>\` tag.

### Example 4 
**Local Storage**
The Web Storage API, part of HTML5, provides a way for web pages to store key-value pairs locally within the 
user's browser, with no expiration date. Unlike cookies, data stored in local storage is not sent with every HTTP request.

**Explanation**
- The \`localStorage.setItem()\` method saves a key-value pair to the browser's local storage. \`localStorage.getItem()\` retrieves the value. 
- The data persists even after the browser is closed.

### Example 5 
## Geolocation API
The Geolocation API allows a user to provide their location to a web application. It is privacy-friendly, 
as it requires the user's explicit permission to access their location.

**Explanation:
- The \`navigator.geolocation.getCurrentPosition()\` method attempts to get the user's location. 
- It takes two callback functions: one for a successful retrieval (\`showPosition\`) and one for an error (\`showError\`), which handles cases where the user denies permission or the location cannot be found.

### Example 6 
**Web Workers**:
Web Workers are a way to run JavaScript in a background thread, separate from the main execution thread of the browser. 
This prevents long-running scripts from freezing the user interface, a significant performance improvement.`,

        "HTML Comments and Best Practices": `
### Example 1 
- **Comments**: Use \`<!-- -->\` for single-line and multi-line comments
- Helps in explaining code, debugging, or temporarily disabling code.

### Example 2 
**Code organization**
Organizing your HTML is key to maintainability. This involves using semantic tags to structure content 
(e.g., \`<header>\`, \`<main>\`, \`<footer>\`), grouping related elements in \`<div>\`s with descriptive 
class names, and placing external resources (like CSS and JavaScript) in their appropriate locations (\`<head>\` and before \`</body>\`).

### Explanation:
The code is wrapped in a \`.site-wrapper\` \`div\`. Semantic tags like \`<header>\`, \`<main>\`, and \`<footer>\` are used, 
and sections are logically grouped with class names like intro-section and feature-section. The stylesheet is linked in the \`<head>\`, 
and the script is placed just before the closing \`<body>\` tag to ensure the page loads faster.

### Example 3 
## Naming conventions
Consistent naming conventions make code easier to read and understand. For class and ID names, it's best to use lowercase letters and hyphens to 
separate words (e.g., \`main-nav\` or \`product-card\`). Avoid camelCase (mainNav) or underscores (main_nav).
Follow kebab-case (lowercase with dashes).

### Example 4 
## Indentation and formatting
Proper indentation and formatting create a clear visual hierarchy of the code, making it easy to see which elements are nested inside others. 
A common practice is to indent by two or four spaces for each nested level.`,


     "HTML Meta Tags":`
### Example 1 
## Character encoding:
The \`<meta charset="UTF-8">\` tag is one of the most important meta tags. It specifies the character encoding for the HTML document. 
**UTF-8** is the recommended encoding as it supports almost all characters and symbols in the world, preventing display issues.
Placing this tag at the very beginning of the \`<head>\` section ensures the browser correctly renders all text characters on the page, regardless of language.

### Example 2 
**Viewport settings**
- The viewport meta tag is crucial for responsive web design. It instructs the browser on how to control the page's dimensions and scaling on different devices, especially mobile phones.
- \`width=device-width\`: Sets the width of the page to match the screen's width in device-independent pixels.
- \`initial-scale=1.0\`: Sets the initial zoom level when the page is first loaded. This combination ensures the page is displayed properly on all devices.

### Example 3 
**Description and keywords**:
These meta tags provide information to search engines.

- The meta description is a short summary of the page's content. It often appears in search engine results pages (SERPs) and can influence a user's decision to click.
- The meta keywords tag was historically used for SEO but is now largely ignored by major search engines.

### Example 4 
## Social media meta tags:
These tags, part of the Open Graph protocol (for Facebook, LinkedIn, etc.) and Twitter Cards, control how a page's content is displayed when shared on social media. 
They allow you to specify the title, description, image, and URL for the shared post.

The \`og:title\` sets the title of the shared link, \`og:description\` provides the description, and \`og:image\` specifies the thumbnail image. 
Twitter uses a similar set of tags prefixed with twitter:.

### Example 5 
## Robots meta tags:
The \`robots\` meta tag provides instructions to search engine crawlers. It can tell them not to index a page, not to follow links on a page, or both.
The \`content="noindex"\` value prevents the page from appearing in search results, and \`content="nofollow\`" prevents crawlers from following any links on the page. 
This is useful for private pages or content you don't want public. 

### Example 6 
## **Refresh and redirect meta tags**
The \`http-equiv="refresh"\` meta tag can be used to automatically reload a page after a specified amount of time or to redirect the user to a different URL. 
However, this method is generally discouraged for accessibility and SEO reasons in favor of server-side redirects or JavaScript.
`,
      
    "HTML Character Entities":`
### Example 1 
## Special characters
Special characters in HTML are characters that have a special meaning or are not found on a standard keyboard. These include symbols like \`<\` and \`>\`, which are used to define HTML tags, as well as typographic symbols like \`&\` and \`"\`. 
To display these characters correctly, you must use character entities or Unicode.

### Example 2 
## HTML entities
An HTML entity is a sequence of characters that represents a single special character. It starts with an ampersand (\`&\`) and ends with a semicolon (\`;\`). 
Entities are used to display characters that would otherwise be interpreted as code or are not easily typed.

\`&copy;\` is the entity for the copyright symbol (©), \`&reg;\` for the registered trademark (®), and \`&euro;\` for the euro (€). Using these entities ensures the symbols 
render correctly on all browsers and operating systems.

### Example 3 
Unicode is a universal character encoding standard that assigns a unique number to every character, including letters from different languages, symbols, and emojis. 
You can represent a Unicode character in HTML using a numeric character reference, which starts with \`&#\` followed by the decimal code, or \`&#x\` for the hexadecimal code
    
## HTML Character Entities Cheat Sheet
### Special Characters
| Entity Code    | Decimal Code    | Hex Code       | Display    | Description           |
| :------------- | :-------------- | :------------- | :--------- | :-----------------------|
| \`&lt;\`      | \`&#60;\`      | \`&#x3C;\`    | <       | Less-than             |
| \`&gt;\`      | \`&#62;\`      | \`&#x3E;\`    | >       | Greater-than          |
| \`&amp;\`     | \`&#38;\`      | \`&#x26;\`    | &       | Ampersand             |
| \`&quot;\`    | \`&#34;\`      | \`&#x22;\`    | "       | Double quote          |
| \`&apos;\`    | \`&#39;\`      | \`&#x27;\`    | '       | Apostrophe / single quote |

### Currency Symbols
| Entity Code | Decimal Code | Hex Code    | Display | Description           |
| :------------- | :-------------- | :------------- | :--------- | :-----------------------|
| \`&euro;\`    | \`&#8364;\`    | \`&#x20AC;\`  | €       | Euro                  |
| \`&pound;\`   | \`&#163;\`     | \`&#x00A3;\`  | £       | Pound Sterling        |
| \`&yen;\`     | \`&#165;\`     | \`&#x00A5;\`  | ¥       | Yen / Yuan            |
| \`&cent;\`    | \`&#162;\`     | \`&#x00A2;\`  | ¢       | Cent                  |
| —             | \`&#36;\`      | \`&#x24;\`    | $       | Dollar sign           |

### Common Symbols
| Entity Code | Decimal Code | Hex Code    | Display | Description           |
| :------------- | :-------------- | :------------- | :--------- | :-----------------------|
| \`&copy;\`    | \`&#169;\`     | \`&#x00A9;\`  | ©       | Copyright             |
| \`&reg;\`     | \`&#174;\`     | \`&#x00AE;\`  | ®       | Registered trademark  |
| \`&trade;\`   | \`&#8482;\`    | \`&#x2122;\`  | ™       | Trademark             |
| \`&sect;\`    | \`&#167;\`     | \`&#x00A7;\`  | §       | Section sign          |
| \`&para;\`    | \`&#182;\`     | \`&#x00B6;\`  | ¶       | Paragraph sign        |
| \`&bull;\`    | \`&#8226;\`    | \`&#x2022;\`  | •       | Bullet                |

#### **Mathematical Symbols**
| Entity Code | Decimal Code | Hex Code    | Display | Description           |
| :------------- | :-------------- | :------------- | :--------- | :-----------------------|
| \`&plusmn;\`  | \`&#177;\`     | \`&#x00B1;\`  | ±       | Plus–minus            |
| \`&times;\`   | \`&#215;\`     | \`&#x00D7;\`  | ×       | Multiplication        |
| \`&divide;\`  | \`&#247;\`     | \`&#x00F7;\`  | ÷       | Division              |
| \`&deg;\`     | \`&#176;\`     | \`&#x00B0;\`  | °       | Degree                |
| \`&infin;\`   | \`&#8734;\`    | \`&#x221E;\`  | ∞       | Infinity              |
| \`&sum;\`     | \`&#8721;\`    | \`&#x2211;\`  | ∑       | Summation             |

### International Characters
| Entity Code | Decimal Code | Hex Code    | Display | Description                     |
| :------------- | :-------------- | :------------- | :--------- | :-----------------------|
| \`&eacute;\`  | \`&#233;\`     | \`&#x00E9;\`  | é       | Latin small letter e (acute)    |
| \`&uuml;\`    | \`&#252;\`     | \`&#x00FC;\`  | ü       | Latin small letter u (umlaut)   |
| \`&aacute;\`  | \`&#225;\`     | \`&#x00E1;\`  | á       | Latin small letter a (acute)    |
| \`&ntilde;\`  | \`&#241;\`     | \`&#x00F1;\`  | ñ       | Latin small letter n (tilde)    |
| \`&szlig;\`   | \`&#223;\`     | \`&#x00DF;\`  | ß       | German sharp s (Eszett)         |

### Emojis / Special Unicode
| Entity Code | Decimal Code | Hex Code    | Display | Description       |
| :------------- | :-------------- | :------------- | :--------- | :------------------- |
| —           | \`&#128512;\`  | \`&#x1F600;\` | 😀      | Grinning face     |
| —           | \`&#128514;\`  | \`&#x1F602;\` | 😂      | Face with tears   |
| —           | \`&#128151;\`  | \`&#x1F497;\` | 💗      | Heart with ribbon |
| —           | \`&#10084;\`   | \`&#x2764;\`  | ❤      | Red heart         |
| —           | \`&#128640;\`  | \`&#x1F680;\` | 🚀      | Rocket            |`,


"HTML Colors and Backgrounds":`
### Example 1 
## **Color values and formats**
Colors in HTML and CSS can be defined in several ways. The most common formats are:
- **Hexadecimal**: A six-digit code preceded by a \`#\` (e.g., \`#FF0000\` for red).
- **RGB**: A function \`rgb(red, green, blue)\` with values from 0-255 (e.g., \`rgb(255, 0, 0)\` for red).
- **RGBA**: Same as RGB but with an alpha (opacity) channel (e.g., \`rgba(255, 0, 0, 0.5)\` for semi-transparent red).
- **HSL/HSLA**: Based on Hue, Saturation, and Lightness (e.g., \`hsl(0, 100%, 50%)\` for red).
- **Named Colors**: Pre-defined color names like red, blue, or green.

### Example 2 
## **Background colors**:
You can add a background color to any HTML element using the \`background-color\` CSS property.
The \`body\` selector applies a light gray background to the entire page. The \.box\` class applies a steel 
blue background to the \`<div>\`, along with white text for readability.

### Example 3 
## **Background images**:
The \`background-image\` CSS property allows you to set an image as the background of an element. 
You can also control its position, size, and repeat behavior.

The \`background-image\` property sets the image. \`background-size: cover;\` ensures the image scales to cover the entire container. 
\`background-position: center;\` centers the image, and \`height\` gives the \`div\` a specific dimension.

### Example 4 
## **Gradient backgrounds**
You can create smooth color transitions using CSS gradients. These are a type of \`background-image\`. 
There are two main types: \`linear-gradient\` (in a straight line) and \`radial-gradient\` (from a central point).

- The first \`div\` uses \`linear-gradient\` to create a horizontal transition. 
- The second uses \`radial-gradient\` to create a circular transition from light gray to dark gray.

### Example 5 
## **Color accessibility**:
Color choices are critical for accessibility. Avoid using color as the only way to convey information. 
Use **sufficient contrast** between text and background colors to ensure readability for people with visual impairments.

- The \`.accessible-text\` example uses dark gray text on a light background, providing good contrast. 
- The \`.inaccessible-text\` example uses light gray text on a very light background, making it hard for many users to read.

### Example 6 
## **Color contrast**:
Color contrast is the difference in brightness between two colors. The Web Content Accessibility Guidelines (WCAG) recommend
a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text. Tools can check this ratio for you.`,
    
   "HTML Layout Techniques": `
### Example 1 
## **Div-based layouts**
Before modern CSS layout techniques like Flexbox and Grid, layouts were primarily created using \`<div>\` elements, floats, and positioning. 
While still functional, this approach can be complex and less flexible than modern methods.

- The \`.sidebar\` and \`.main-content\` \`divs\` are floated left and right, respectively, to create a two-column layout. 
- The \`.clearfix\` class is a standard trick to prevent the container from collapsing around the floated elements.

### Example 2 
## **CSS Grid basics**:
CSS Grid is a two-dimensional layout system that allows you to create complex, responsive layouts with rows and columns. 
It's ideal for building entire page layouts and components.

\`display: grid;\` turns the div into a grid container. \`grid-template-columns: 1fr 2fr 1fr;\` creates three columns: the first and third are \`1fr\` 
(one fraction of the space), and the second is \`2fr\` (two fractions), making it twice as wide.

### Example 3 
## **Flexbox basics**:
Flexbox (or Flexible Box Module) is a one-dimensional layout system for aligning items in a row or a column. 
It's perfect for distributing space among items in a single line, such as a navigation bar or a row of cards.

- \`display: flex;\` makes the div a flex container. 
- \`justify-content: space-between;\` evenly distributes the space between the items. 
- \`align-items: center;\` centers the items vertically.

### Example 4 
## **Responsive layouts**
Responsive layouts use CSS media queries to adapt to different screen sizes, providing a good user experience on desktops, tablets, and phones. 
Modern layout systems like Grid and Flexbox are inherently responsive.

The \`.grid-container\` starts as a single column. The \`@media\` rules change the \`grid-template-columns\` property at different screen widths, 
making the layout respond to the size of the browser window.
`,

    "HTML iframes":`
### Example 1 
## **iframe basics**:
An HTML \`<iframe>\` (inline frame) is used to embed another HTML document within the current document. 
It creates a nested browsing context, effectively a mini web page inside a web page. 
This is commonly used for embedding content from other sites, like videos from YouTube or maps from Google Maps.
  
- The \`<iframe>\` tag's \`src\` attribute points to the URL of the content you want to embed. 
- The \`width\` and \`height\` attributes define the dimensions of the frame. 
- The \`frameborder="0"\` removes the border around the iframe, giving it a more integrated look.
  
### Example 2 
**iframe attributes**: 
\`<iframe>\` elements have several attributes that control their behavior and appearance.

- \`src\`: The URL of the document to embed.
- \`width\` and \`height\`: The dimensions of the iframe.
- \`title\`: Provides a descriptive title for accessibility purposes.
- \`allow\`: A security attribute that specifies what features the embedded content can access (e.g., \`allowfullscreen\`, \`allow-same-origin\`).
- \`loading\`: Specifies when the browser should load the iframe's content (\`lazy\` for off-screen iframes).

### Example 3
- The \`sandbox\` attribute restricts what the iframe can do. By default, it imposes a wide range of restrictions, like preventing scripts from running or pop-ups from being opened. 
- You can selectively enable features by listing them in the attribute's value. 
- The \`allow-scripts\` allows JavaScript to run, while \`allow-same-origin\` allows the content to be treated as being from the same origin as the parent document.
  
### Example 4 
**Responsive iframes**: 
Making iframes responsive ensures they scale correctly on different screen sizes. A common technique is to use CSS to maintain a specific aspect ratio, especially for videos.

### Example 5 
## **iframe best practices**
To use iframes effectively and securely, follow these best practices:
- **Use them sparingly**: Only use iframes when you must embed content from a different domain.
- **Always include the \`title\` attribute**: This is crucial for accessibility.
- **Use the \`sandbox\` attribute for untrusted content**: This is a vital security measure.
- ** Make them responsive**: Ensure the embedded content scales with the viewport.
- **Use** \`loading="lazy"\`: Defer loading of off-screen iframes to improve page performance.`,


    "HTML Audio and Video":`
### Example 1 
- The \`<audio>\` element is used to embed audio content into a webpage. It's a simple and powerful 
way to add music, sound effects, or podcasts without relying on plugins.
- The \`controls\` attribute provides a standard interface for playing the audio. 
- The \`<source>\` tags provide different file formats. The browser will try the first one and fall 
back to the next if it's not supported. The text inside the <audio> tag is a fallback for unsupported browsers.

### Example 2 
- The \`<video>\` element is used to embed video content. Like the audio element, it's a native, plugin-free way to play videos
- The \`width\` and \`height\` attributes set the dimensions. 
- \`controls\` enables the playback interface. 
- The \`poster\` attribute specifies an image to display before the video starts playing.

### Example 3 
Browsers don't all support the same media formats. To ensure cross-browser compatibility, it's best to provide multiple 
formats using the \`<source>\` tag. Common formats include:

- Audio: MP3 (audio/mpeg), Ogg (audio/ogg), WAV (audio/wav).
- Video: MP4 (video/mp4), WebM (video/webm), Ogg (video/ogg).

### Example 4 
The controls attribute provides the default user interface for media. However, 
you can also create a custom interface using JavaScript. Other useful attributes include:

- **autoplay**: Starts playback automatically (often disabled by browsers due to a poor user experience).
- **loop**: Restarts the media when it finishes.
- **muted**: Mutes the audio.
- **preload**: Advises the browser on what to preload (none, metadata, auto).

### Example 5 
To make media accessible, include captions, transcripts, and descriptive text. 
The \`<track>\` element is used to add subtitles, captions, or descriptions to a video.

**Explanation**
The \`<track>\` element specifies a WebVTT file (\`.vtt\`) that contains captions and descriptions. 
The \`kind="captions"\` is for dialogue, and \`kind="descriptions"\` is for a spoken description of the visual content for visually impaired users.

### Example 6 
Optimizing media is crucial for performance.
- **Compress media files**: Use tools to reduce file size without losing too much quality.
- **Use preload attribute**: Use \`preload="metadata"\` for a faster page load if you don't need the entire file loaded immediately.
- **Provide multiple sources**: Include both an MP4 and a WebM/Ogg format for broad compatibility.
- **Use \`<picture>\` for videos**: Use the \`<picture>\` tag with videos to deliver different video sources based on screen size or resolution.`,

 "HTML Canvas Basics":`
### Example 1 
The \`<canvas>\` element is a blank drawing surface (a bitmap) that you manipulate with JavaScript. It's used for drawing graphics, animations, games, and charts. 
Unlike SVG, the graphics drawn on a canvas are not part of the DOM

### Example 2 
- To draw on a canvas, you need to get its rendering context. The most common context is \`2d\`, which provides methods for drawing shapes, paths, and text.
- \`canvas.getContext("2d")\` retrieves the \`2D\` rendering context. 
- \`ctx.fillStyle\` sets the fill color, and \`ctx.fillRect()\` draws a filled rectangle at 
the specified coordinates and dimensions.

### Example 3 
You can draw various shapes and custom paths on a canvas.
- **Rectangles**: \`fillRect()\`, \`strokeRect()\`, \`clearRect()\`.
- **Paths**: A series of connected lines. Use \`beginPath()\`, \`moveTo()\`, \`lineTo()\`, and \`closePath()\` to define a path.

### Example 4 
You can draw text and images onto a canvas.
- **Text**: \`fillText()\` and \`strokeText()\` for drawing text.
- **Images**: \`drawImage()\` for placing an image onto the canvas.

- The \`font\` and \`fillStyle\` properties are set before drawing text. 
- For images, we create a new Image object. The \`drawImage()\` method is called once 
the image has finished loading (\`img.onload\`). 

### Example 5
Canvas animation involves a loop that repeatedly clears the canvas and redraws the elements in a new position. 
\`requestAnimationFrame()\` is the standard method for creating an animation loop.

**Explanation**:
The \`draw()\` function is the animation loop. \`clearRect()\` removes the previous frame. The \`x\` variable is 
updated to move the rectangle, and \`requestAnimationFrame(draw)\` schedules the next frame.

***For optimal performance, especially with complex animations, you can:***
- **Minimize state changes**: Group drawing operations of the same type (e.g., all fills, then all strokes).
- **Use multiple canvases**: Use separate canvases for static and dynamic content.
- **Avoid floating-point numbers**: Use \`Math.floor()\` to convert coordinates to integers for faster rendering.
- **Pre-render complex objects**: Draw complex shapes once to an off-screen canvas and then draw that canvas to the main one.`, 

"HTML SVG Graphics":`
### Example 1 
SVG (Scalable Vector Graphics) is an XML-based vector image format that describes 
graphics mathematically rather than using pixels. This makes SVG images infinitely 
scalable without quality loss, perfect for responsive web design and high-resolution 
displays.

*Key Properties*:
- \`xmlns\`: Defines the SVG namespace
- \`viewBox\`: Defines the coordinate system and aspect ratio
- \`width\` & \`height\`: Set the display dimensions
- \`preserveAspectRatio\`: Controls how SVG scales within its container

### Example 2 
*Explanation*:
SVG provides several basic shape elements that form the foundation of vector 
graphics. Each shape has specific attributes that control its appearance and 
position.

***Shape Elements & Properties***
- \`<rect>\`: Creates rectangles with \`x\`, \`y\`, \`width\`, \`height\`, \`rx\`, \`ry\` for rounded corners
- \`<circle>\`: Creates circles with \`cx\`, \`cy\` (center coordinates), \`r\` (radius)
- \`<ellipse>\`: Creates ellipses with \`cx\`, \`cy\`, \`rx\`, \`ry\` (radii)
- \`<line>\`: Creates lines with \`x1\`, \`y1\`, \`x2\`, \`y2\` (start and end points)
- \`<polygon>\`: Creates closed shapes with \`points\` attribute
- \`<polyline>\`: Creates open shapes with \`points\` attribute

### Example 3 
## **Explanation**:
The \`<path>\` element is the most powerful SVG shape, allowing you to create complex 
curves and shapes using path commands. The \`d\` attribute contains a series of commands 
that define the path.

#### ***Path Commands***
- \`M\` (moveto): Move to a point without drawing
- \`L\` (lineto): Draw a straight line to a point
- \`H\` (horizontal lineto): Draw horizontal line
- \`V\` (vertical lineto): Draw vertical line
- \`C\` (curveto): Draw cubic Bézier curve
- \`S\` (smooth curveto): Draw smooth cubic Bézier curve
- \`Q\` (quadratic Bézier curveto): Draw quadratic Bézier curve
- \`T\` (smooth quadratic Bézier curveto): Draw smooth quadratic curve
- \`A\` (elliptical Arc): Draw elliptical arc
- \`Z\` (closepath): Close the path


### Example 4 
## ***Explanation***:
SVG supports text rendering with advanced typography features and can embed 
raster images. Text in SVG is selectable and searchable, making it accessible 
and SEO-friendly.

#### ***Text Properties***:
- \`x\`, \`y\`: Text position coordinates
- \`font-family\`, \`font-size\`, \`font-weight\`: Typography properties
- \`text-anchor\`: Text alignment (start, middle, end)
- \`dominant-baseline\`: Vertical alignment
- \`transform\`: Text transformations
- \`textPath\`: Text along a path

### Example 5 
## **Explanation**:
SVG supports both declarative animations using SMIL (Synchronized Multimedia Integration Language) 
elements and CSS-based animations. These animations can transform properties 
over time, creating dynamic graphics.

#### ***Animation Elements***:
- \`<animate>\`: Animates attribute values over time
- \`<animateTransform>\`: Animates transformation attributes
- \`<animateMotion>\`: Animates movement along a path
- CSS animations and transitions can also be applied to SVG elements

### Example 6 
## **Explanation**:
SVG optimization involves reducing file size and improving performance through 
various techniques including code cleanup, path simplification, and proper 
structuring. This is crucial for web performance and user experience.

#### ***Optimization Techniques***:
- Remove unnecessary elements and attributes
- Simplify paths and reduce decimal precision
- Use \`<defs>\` for reusable elements
- Implement proper grouping with \`<g>\`
- Minimize inline styles
- Use CSS classes instead of inline styles
- Optimize gradients and filters`,


 "HTML Project: Building a Complete Website": `
### Example 1 
## **Structure and Organization**:
Proper HTML structure and file organization create maintainable, scalable 
websites. This involves semantic markup, logical file hierarchy, naming 
conventions, and modular code organization. Good structure improves SEO, 
accessibility, and developer experience.

### Example 2
## ***Explanation***:
Project planning is the foundation of successful web development. It involves 
defining goals, target audience, content strategy, technical requirements, 
and project timeline. Proper planning prevents scope creep and ensures the 
final product meets user needs.

***Planning Components***:
- **Site Architecture:** Information hierarchy and navigation structure
- **User Experience (UX):** User journeys and interaction design
- **Technical Specifications:** Browser support, performance requirements
- **Content Strategy:** Content types, creation workflow, and management
- **Timeline and Milestones:** Project phases and deliverable dates

***Organizational Principles***:
- **Semantic HTML**: Use appropriate HTML5 elements for content meaning
- **File Structure**: Logical directory organization for assets and pages
- **Naming Conventions**: Consistent, descriptive naming for files and classes
- **Modular CSS**: Component-based stylesheets for maintainability
- **Progressive Enhancement**: Build from basic functionality upward`

  };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};


const getHTMLExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to HTML": `
- Create a simple "Hello World" webpage with basic HTML structure.
- Build a personal introduction page using only HTML tags.
- Write HTML code to display your favorite quote with proper indentation.`,

    "HTML Document Structure": `
- Create a complete HTML5 document with DOCTYPE, head, and body sections.
- Build a webpage with proper meta tags including charset and viewport.
- Structure a multi-section webpage using semantic HTML5 elements like header, main, and footer.`,

    "HTML Headings and Paragraphs": `
- Create a blog post layout using all six heading levels (h1-h6) hierarchically.
- Build a FAQ page with questions as headings and answers as paragraphs.
- Design a product description page with multiple paragraphs and appropriate headings.`,

    "HTML Text Formatting": `
- Create a resume using bold, italic, underline, and other text formatting tags.
- Build a recipe page with emphasized ingredients and strong cooking instructions.
- Design a poetry page using line breaks, preformatted text, and various text styles.`,

    "HTML Links and Navigation": `
- Create a multi-page website with a navigation menu linking between pages.
- Build a resource page with external links that open in new tabs.
- Design a table of contents with internal links that jump to different sections of the same page.`,

   "HTML Images and Media":`
- Insert responsive images with different sizes using the srcset attribute.
- Create an image gallery with thumbnails that link to full-size versions.
- Add alternative text and captions to images for accessibility.`,

"HTML Lists (Ordered and Unordered)":`
- Build a nested menu structure using unordered lists within list items.
- Create a step-by-step recipe using ordered lists with custom numbering.
- Design a FAQ section using definition lists with questions and answers.`,

"HTML Tables":`
- Create a pricing comparison table with headers, footers, and merged cells.
- Build a calendar layout using table structure with proper accessibility attributes.
- Design a data table with sortable columns and alternating row colors.`,

"HTML Forms Basics":`
- Create a contact form with proper form structure and submit functionality.
- Build a survey form with multiple fieldsets and legends for organization.
- Design a login form with proper labels and form validation attributes.`,

"HTML Form Elements":`
- Create a registration form using various input types, select dropdowns, and textareas.
- Build a product order form with checkboxes, radio buttons, and quantity selectors.
- Design an event booking form with date pickers, time slots, and participant details.`,

"HTML Input Types":`
- Create a comprehensive form showcasing all HTML5 input types 
(email, tel, url, date, etc.).
- Build a user profile form with appropriate input types for different data fields.
- Design a search interface using search, range, and color input types.`,

"HTML Form Validation":`
- Create a form with built-in HTML5 validation attributes (required, pattern, min/max).
- Build a password strength checker using pattern validation and custom messages.
- Design a multi-step form with progressive validation at each step.`,

"HTML Div":`
- Create a card-based layout using div elements with proper semantic structure.
- Build a grid system using div containers for responsive design.
- Design a modal dialog box using div elements and CSS positioning.`,

"HTML Classes":`
- Create a button system with different classes for styling variations 
(primary, secondary, danger).
- Build a typography scale using classes for different heading and text sizes.
- Design a status indicator system using classes for different states 
(success, warning, error).`,

"HTML Id":`
- Create a single-page application with smooth scrolling navigation using IDs.
- Build a form with JavaScript functionality targeting specific elements by ID.
- Design a tabbed interface where tabs target content sections by ID.`,

"HTML Semantic Elements":`
- Convert a div-based layout to use proper semantic elements 
(header, nav, main, aside, footer).
- Create a blog post layout using article, section, and time elements appropriately.
- Build a news website homepage using semantic HTML5 elements for better accessibility.`,

"HTML5 New Features":`
- Create a multimedia webpage showcasing new HTML5 elements 
(video, audio, canvas).
- Build a form using new HTML5 input types and validation features.
- Design a responsive layout using new semantic elements and CSS3 features.`,

"HTML Comments and Best Practices":`
- Document a complex HTML structure with meaningful comments for team collaboration.
- Create a style guide template with commented sections for different UI components.
- Build a webpage following HTML5 best practices with proper indentation and organization.`,

"HTML Meta Tags":`
- Create a webpage with comprehensive meta tags for SEO optimization.
- Build a social media-ready page with Open Graph and Twitter Card meta tags.
- Design a mobile-optimized page with proper viewport and device meta tags.`,

"HTML Character Entities":`
- Create a typography showcase displaying various special characters and symbols.
- Build a multilingual webpage using appropriate character entities for different languages.
- Design a mathematical or scientific document with proper entity usage for formulas.`,

"HTML Colors and Backgrounds":`
- Create a color palette showcase using different color formats 
(hex, RGB, HSL).
- Build a gradient background system with CSS and HTML structure.
- Design a dark/light theme toggle interface with color scheme variations.`,

"HTML Layout Techniques":`
- Create a holy grail layout using CSS Grid with HTML structure.
- Build a responsive card layout using Flexbox and proper HTML semantics.
- Design a magazine-style layout with CSS Grid and semantic HTML elements.`,

"HTML iframes":`
- Embed external content (maps, videos, social media) using secure iframe practices.
- Create a dashboard with multiple iframe widgets from different sources.
- Build a preview system showing external websites within your page safely.`,

"HTML Audio and Video":`
- Create a multimedia playlist with custom controls and multiple format support.
- Build a video gallery with thumbnails, descriptions, and accessibility features.
- Design a podcast player interface with audio controls and episode navigation.`,

"HTML Canvas Basics":`
- Draw basic shapes and patterns using Canvas API and JavaScript.
- Create an interactive drawing application with mouse events and canvas.
- Build a simple data visualization chart using canvas rendering.`,

"HTML SVG Graphics":`
- Create scalable icons and logos using inline SVG code.
- Build an interactive infographic with SVG elements and CSS animations.
- Design a responsive illustration that adapts to different screen sizes using SVG.`,

"HTML Project: Building a Complete Website":`
- Create a personal portfolio website incorporating all learned HTML concepts.
- Build a small business website with multiple pages, forms, and media content.
- Design a blog or news website with proper semantic structure and modern HTML5 features.`,

      
  }
  return exercises[lessonTitle] || "1. Basic exercise\n2. Advanced exercise\n3. Project work"
}

const getHTMLQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to HTML": [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Tech Modern Language",
          "Hyper Transfer Markup Language",
          "Hyper Text Modern Language"
        ],
        correctAnswer: 0
      },
      {
        question: "Which tag is used to create a paragraph in HTML?",
        options: [
          "<p>",
          "<paragraph>",
          "<text>",
          "<para>"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct way to create a heading in HTML?",
        options: [
          "<h1>Heading</h1>",
          "<heading>Heading</heading>",
          "<head>Heading</head>",
          "<title>Heading</title>"
        ],
        correctAnswer: 0
      }
    ],
    "HTML Document Structure": [
      {
        question: "What is the purpose of the DOCTYPE declaration?",
        options: [
          "To specify the HTML version and document type",
          "To define the character encoding",
          "To set the viewport settings",
          "To declare the language"
        ],
        correctAnswer: 0
      },
      {
        question: "Which meta tag is used for responsive design?",
        options: [
          "<meta name='viewport' content='width=device-width, initial-scale=1.0'>",
          "<meta charset='UTF-8'>",
          "<meta name='description' content='...'>",
          "<meta name='keywords' content='...'>"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the lang attribute in the HTML tag?",
        options: [
          "To specify the language of the document",
          "To set the character encoding",
          "To define the viewport",
          "To declare the document type"
        ],
        correctAnswer: 0
      }
    ],
    "HTML Headings and Paragraphs": [
      {
        question: "Which heading tag represents the most important heading?",
        options: [
          "<h1>",
          "<h2>",
          "<h3>",
          "<h4>"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the <hr> tag?",
        options: [
          "To create a horizontal rule/line",
          "To create a heading",
          "To create a paragraph",
          "To create a link"
        ],
        correctAnswer: 0
      },
      {
        question: "Which tag is used to create a line break?",
        options: [
          "<br>",
          "<break>",
          "<lb>",
          "<newline>"
        ],
        correctAnswer: 0
      }
    ],
    
  "HTML Text Formatting": [
    {
      question: "Which HTML tag is used to make text bold?",
      options: [
        "<strong>",
        "<bold>",
        "<b>",
        "Both <strong> and <b>"
      ],
      correctAnswer: 3
    },
    {
      question: "What does the <em> tag represent in HTML?",
      options: [
        "Emergency text",
        "Emphasized text",
        "Email text",
        "Embedded text"
      ],
      correctAnswer: 1
    },
    {
      question: "Which tag is used to display text in a smaller font size?",
      options: [
        "<small>",
        "<tiny>",
        "<mini>",
        "<sub>"
      ],
      correctAnswer: 0
    }
  ],

  "HTML Links and Navigation": [
    {
      question: "Which attribute is used to specify the URL in an anchor tag?",
      options: [
        "src",
        "href",
        "link",
        "url"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you create a link that opens in a new window/tab?",
      options: [
        "target='_new'",
        "target='_blank'", 
        "window='new'",
        "open='tab'"
      ],
      correctAnswer: 1
    },
    {
      question: "Which value is used to link to a section within the same page?",
      options: [
        "href='#sectionname'",
        "href='@sectionname'",
        "href='&sectionname'",
        "href='*sectionname'"
      ],
      correctAnswer: 0
    }
  ],

  "HTML Images and Media": [
    {
      question: "Which attribute is required for the <img> tag?",
      options: [
        "src",
        "alt",
        "width",
        "height"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the purpose of the 'alt' attribute in an image tag?",
      options: [
        "Alternative URL for the image",
        "Alternative text description",
        "Alternative size for the image",
        "Alternative format for the image"
      ],
      correctAnswer: 1
    },
    {
      question: "Which HTML5 tag is used for embedding video content?",
      options: [
        "<movie>",
        "<media>",
        "<video>",
        "<film>"
      ],
      correctAnswer: 2
    }
  ],

  "HTML Lists (Ordered and Unordered)": [
    {
      question: "Which tag creates an unordered list?",
      options: [
        "<ol>",
        "<ul>",
        "<list>",
        "<unordered>"
      ],
      correctAnswer: 1
    },
    {
      question: "What tag is used for individual list items?",
      options: [
        "<item>",
        "<li>",
        "<list-item>",
        "<i>"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attribute changes the numbering type in an ordered list?",
      options: [
        "number",
        "style",
        "type",
        "format"
      ],
      correctAnswer: 2
    }
  ],

  "HTML Tables": [
    {
      question: "Which tag defines a table row?",
      options: [
        "<tr>",
        "<td>",
        "<th>",
        "<row>"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the difference between <td> and <th> tags?",
      options: [
        "<td> is for data, <th> is for headers",
        "<td> is for headers, <th> is for data",
        "No difference, they're interchangeable",
        "<td> is deprecated, use <th> instead"
      ],
      correctAnswer: 0
    },
    {
      question: "Which attribute makes a cell span multiple columns?",
      options: [
        "rowspan",
        "colspan",
        "span",
        "merge"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Forms Basics": [
    {
      question: "Which tag is used to create an HTML form?",
      options: [
        "<form>",
        "<input>",
        "<fieldset>",
        "<submit>"
      ],
      correctAnswer: 0
    },
    {
      question: "Which attribute specifies where to send form data?",
      options: [
        "method",
        "action",
        "target",
        "submit"
      ],
      correctAnswer: 1
    },
    {
      question: "What are the two main HTTP methods used in forms?",
      options: [
        "GET and POST",
        "SEND and RECEIVE",
        "PUT and DELETE",
        "SUBMIT and RESET"
      ],
      correctAnswer: 0
    }
  ],

  "HTML Form Elements": [
    {
      question: "Which tag creates a dropdown selection list?",
      options: [
        "<dropdown>",
        "<select>",
        "<option>",
        "<list>"
      ],
      correctAnswer: 1
    },
    {
      question: "Which tag creates a multi-line text input?",
      options: [
        "<input type='multiline'>",
        "<multitext>",
        "<textarea>",
        "<textbox>"
      ],
      correctAnswer: 2
    },
    {
      question: "Which tag groups related form elements together?",
      options: [
        "<group>",
        "<fieldset>",
        "<section>",
        "<formgroup>"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Input Types": [
    {
      question: "Which input type creates a password field?",
      options: [
        "type='hidden'",
        "type='password'",
        "type='secret'",
        "type='protected'"
      ],
      correctAnswer: 1
    },
    {
      question: "Which HTML5 input type is used for email addresses?",
      options: [
        "type='email'",
        "type='mail'",
        "type='address'",
        "type='contact'"
      ],
      correctAnswer: 0
    },
    {
      question: "Which input type creates a checkbox?",
      options: [
        "type='check'",
        "type='box'",
        "type='checkbox'",
        "type='tick'"
      ],
      correctAnswer: 2
    }
  ],

  "HTML Form Validation": [
    {
      question: "Which attribute makes a form field required?",
      options: [
        "mandatory",
        "required",
        "essential",
        "needed"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attribute sets the minimum length for text input?",
      options: [
        "min",
        "minlength",
        "minimum",
        "length"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attribute defines a regular expression pattern for validation?",
      options: [
        "regex",
        "pattern",
        "match",
        "validate"
      ],
      correctAnswer: 1
    }
  ],
    "HTML Div": [
    {
      question: "What is the primary purpose of the <div> element?",
      options: [
        "To create divisions in content",
        "To group elements for styling and layout",
        "To divide text into paragraphs",
        "To create horizontal dividers"
      ],
      correctAnswer: 1
    },
    {
      question: "What type of element is <div>?",
      options: [
        "Inline element",
        "Block-level element",
        "Inline-block element",
        "Self-closing element"
      ],
      correctAnswer: 1
    },
    {
      question: "Which statement about <div> elements is correct?",
      options: [
        "They have semantic meaning by default",
        "They cannot contain other block elements",
        "They are generic containers with no semantic meaning",
        "They automatically add margins and padding"
      ],
      correctAnswer: 2
    }
  ],

  "HTML Classes": [
    {
      question: "Which attribute is used to assign a CSS class to an HTML element?",
      options: [
        "class",
        "className",
        "style",
        "css"
      ],
      correctAnswer: 0
    },
    {
      question: "Can an HTML element have multiple classes?",
      options: [
        "No, only one class per element",
        "Yes, separated by commas",
        "Yes, separated by spaces",
        "Yes, but only with div elements"
      ],
      correctAnswer: 2
    },
    {
      question: "How do you select elements with a specific class in CSS?",
      options: [
        "#classname",
        ".classname",
        "@classname",
        "*classname"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Id": [
    {
      question: "Which attribute creates a unique identifier for an HTML element?",
      options: [
        "name",
        "id",
        "identifier",
        "unique"
      ],
      correctAnswer: 1
    },
    {
      question: "How many elements can share the same id on a single page?",
      options: [
        "Unlimited",
        "Up to 5",
        "Only one",
        "Only elements of the same type"
      ],
      correctAnswer: 2
    },
    {
      question: "How do you select an element by id in CSS?",
      options: [
        ".idname",
        "#idname",
        "@idname",
        "idname"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Semantic Elements": [
    {
      question: "Which HTML5 element represents the main content of a document?",
      options: [
        "<content>",
        "<main>",
        "<primary>",
        "<body>"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the purpose of the <article> element?",
      options: [
        "To create news articles only",
        "To represent standalone content",
        "To add article styling",
        "To create blog posts only"
      ],
      correctAnswer: 1
    },
    {
      question: "Which element represents a section of navigation links?",
      options: [
        "<navigation>",
        "<links>",
        "<nav>",
        "<menu>"
      ],
      correctAnswer: 2
    }
  ],

  "HTML5 New Features": [
    {
      question: "Which new input type was introduced in HTML5 for date selection?",
      options: [
        "type='calendar'",
        "type='date'",
        "type='datetime'",
        "type='time'"
      ],
      correctAnswer: 1
    },
    {
      question: "Which HTML5 element is used for drawing graphics?",
      options: [
        "<draw>",
        "<graphics>",
        "<canvas>",
        "<svg>"
      ],
      correctAnswer: 2
    },
    {
      question: "What does the 'placeholder' attribute do in HTML5?",
      options: [
        "Sets the default value",
        "Shows hint text in input fields",
        "Reserves space for content",
        "Creates empty elements"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Comments and Best Practices": [
    {
      question: "How do you write a comment in HTML?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "# This is a comment"
      ],
      correctAnswer: 2
    },
    {
      question: "Which practice is recommended for HTML code organization?",
      options: [
        "Use proper indentation",
        "Write all code in one line",
        "Use only uppercase tags",
        "Avoid closing tags"
      ],
      correctAnswer: 0
    },
    {
      question: "What should you always include in HTML documents?",
      options: [
        "DOCTYPE declaration",
        "Multiple head sections",
        "Inline styles only",
        "JavaScript in every page"
      ],
      correctAnswer: 0
    }
  ],

  "HTML Meta Tags": [
    {
      question: "Where should meta tags be placed in an HTML document?",
      options: [
        "In the <body> section",
        "In the <head> section",
        "At the end of the document",
        "Anywhere in the document"
      ],
      correctAnswer: 1
    },
    {
      question: "Which meta tag sets the character encoding?",
      options: [
        "<meta charset='UTF-8'>",
        "<meta encoding='UTF-8'>",
        "<meta type='UTF-8'>",
        "<meta lang='UTF-8'>"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the viewport meta tag control?",
      options: [
        "Browser window size",
        "Page loading speed",
        "Mobile device display",
        "Color scheme"
      ],
      correctAnswer: 2
    }
  ],

  "HTML Character Entities": [
    {
      question: "How do you display the less-than symbol (<) in HTML?",
      options: [
        "&less;",
        "&lt;",
        "&<;",
        "&lessthan;"
      ],
      correctAnswer: 1
    },
    {
      question: "What is the character entity for a non-breaking space?",
      options: [
        "&space;",
        "&nbsp;",
        "&nbs;",
        "&nobreak;"
      ],
      correctAnswer: 1
    },
    {
      question: "How do you display the copyright symbol (©)?",
      options: [
        "&copy;",
        "&copyright;",
        "&(c);",
        "&cr;"
      ],
      correctAnswer: 0
    }
  ],

  "HTML Colors and Backgrounds": [
    {
      question: "Which attribute sets the background color of an element?",
      options: [
        "bgcolor",
        "background",
        "color",
        "background-color"
      ],
      correctAnswer: 0
    },
    {
      question: "Which is a valid way to specify color in HTML?",
      options: [
        "color='red'",
        "color='#FF0000'",
        "color='rgb(255,0,0)'",
        "All of the above"
      ],
      correctAnswer: 3
    },
    {
      question: "What does the hex color code #000000 represent?",
      options: [
        "White",
        "Black",
        "Red",
        "Blue"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Layout Techniques": [
    {
      question: "Which HTML element is commonly used for page layout structure?",
      options: [
        "<layout>",
        "<div>",
        "<section>",
        "Both <div> and <section>"
      ],
      correctAnswer: 3
    },
    {
      question: "What is the purpose of a CSS grid system in HTML layout?",
      options: [
        "To create tables",
        "To organize content in rows and columns",
        "To add borders",
        "To change fonts"
      ],
      correctAnswer: 1
    },
    {
      question: "Which approach is recommended for modern responsive layouts?",
      options: [
        "Table-based layouts",
        "Float-based layouts",
        "Flexbox and CSS Grid",
        "Inline styles only"
      ],
      correctAnswer: 2
    }
  ],

  "HTML iframes": [
    {
      question: "What does the <iframe> element do?",
      options: [
        "Creates image frames",
        "Embeds another document within the current page",
        "Creates internal frames for text",
        "Adds decorative borders"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attribute specifies the URL of the page to embed in an iframe?",
      options: [
        "source",
        "src",
        "url",
        "link"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attribute controls whether an iframe can be resized?",
      options: [
        "resize",
        "resizable",
        "frameborder",
        "scrolling"
      ],
      correctAnswer: 1
    }
  ],
   "HTML Audio and Video": [
    {
      question: "Which HTML5 element is used to embed audio files?",
      options: [
        "<sound>",
        "<audio>",
        "<music>",
        "<media>"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attribute makes audio/video controls visible to users?",
      options: [
        "controls",
        "visible",
        "show",
        "display"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the 'autoplay' attribute do in video elements?",
      options: [
        "Automatically downloads the video",
        "Starts playing the video when page loads",
        "Plays the video in fullscreen",
        "Loops the video continuously"
      ],
      correctAnswer: 1
    }
  ],

  "HTML Canvas Basics": [
    {
      question: "What is the HTML Canvas element primarily used for?",
      options: [
        "Creating static images",
        "Drawing graphics with JavaScript",
        "Displaying videos",
        "Creating tables"
      ],
      correctAnswer: 1
    },
    {
      question: "Which method gets the 2D rendering context of a canvas?",
      options: [
        "getContext('2d')",
        "get2DContext()",
        "canvas2D()",
        "renderContext()"
      ],
      correctAnswer: 0
    },
    {
      question: "What attributes define the size of a canvas element?",
      options: [
        "size and dimension",
        "width and height",
        "x and y",
        "rows and columns"
      ],
      correctAnswer: 1
    }
  ],

  "HTML SVG Graphics": [
    {
      question: "What does SVG stand for?",
      options: [
        "Simple Vector Graphics",
        "Scalable Vector Graphics",
        "Standard Vector Graphics",
        "Static Vector Graphics"
      ],
      correctAnswer: 1
    },
    {
      question: "Which SVG element is used to draw a circle?",
      options: [
        "<circle>",
        "<round>",
        "<oval>",
        "<sphere>"
      ],
      correctAnswer: 0
    },
    {
      question: "What is a key advantage of SVG over raster images?",
      options: [
        "Smaller file sizes always",
        "Better for photographs",
        "Scalable without quality loss",
        "Faster loading times"
      ],
      correctAnswer: 2
    }
  ],

  "HTML Project: Building a Complete Website": [
    {
      question: "Which elements should be included in a complete HTML website structure?",
      options: [
        "Only header and body",
        "DOCTYPE, html, head, and body",
        "Just div elements",
        "Only semantic elements"
      ],
      correctAnswer: 1
    },
    {
      question: "What is recommended for organizing multiple pages in a website project?",
      options: [
        "Put all content in one HTML file",
        "Use separate HTML files with consistent navigation",
        "Use only JavaScript for content",
        "Avoid using CSS files"
      ],
      correctAnswer: 1
    },
    {
      question: "Which practice improves website accessibility and SEO?",
      options: [
        "Using only div elements",
        "Adding alt text to images and using semantic HTML",
        "Avoiding meta tags",
        "Using inline styles exclusively"
      ],
      correctAnswer: 1
    }
  ]

  };
  return quizzes[lessonTitle] 
};

module.exports = {
  getHTMLLessonConcepts,
  getHTMLCodeExample,
  getHTMLCodeExplanation,
  getHTMLExercises,
  getHTMLQuiz,
};
