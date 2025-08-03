const getHTMLLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to HTML": `
- What is HTML and its role in web development
- Basic HTML syntax and structure
- HTML elements and tags
- Creating your first HTML page
- Understanding HTML5 standards
- Browser compatibility basics`,

    "HTML Document Structure": `
- DOCTYPE declaration and its importance
- HTML, head, and body elements
- Meta tags and character encoding
- Viewport settings for responsive design
- Language attributes and accessibility
- Document outline and semantic structure`,

    "HTML Headings and Paragraphs": `
- Heading hierarchy (h1 to h6) and SEO importance
- Paragraph formatting and spacing
- Line breaks and horizontal rules
- Text alignment and spacing
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
    "Introduction to HTML": `<html>
  <head> 
    <title>My First HTML Page</title>  
  </head>
  <body> 
    <h1>Hello, World!</h1>  
    <p>This is my first HTML page.</p>
    <h2>This is a Sub-Heading</h2>  
   <p>Here you can see another sub-heading.</p>
  </body>
</html>`,

    "HTML Document Structure": `
    <!DOCTYPE html>
<html lang="en">
  <head>
  <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Structure Example</title>
  </head>
  <body>
    <h1>HTML Document Structure</h1>
    <p>This is a paragraph.</p>
  </body>
</html>`,

    "HTML Headings and Paragraphs": `
  <h1>This is a Heading 1</h1>
  <h2>This is a Heading 2</h2>
  <h3>This is a Heading 3</h3>
  <p>This is a paragraph.</p>`,

    "HTML Text Formatting": `
    <b>This text is bold</b>
    <strong>This text is important</strong>
   <i>This text is italic</i>
   <em>This text is emphasized</em>
   <u>This text is underlined</u>
   <mark>This text is highlighted</mark>
   <small>This text is small</small>
   <P>My favourite food is <del>rice</del> beans.</P>
   <ins>This text is inserted</ins>
   <p>Here is <sub>subscript</sub> text. </p>
   <p> Here is <sup>superscript</sup> text.</p>
   <p>This is the first paragraph.</p>
    <hr />
   <p>This is the second paragraph, separated by a horizontal line.</p>

   <p>Hello, world!<br />This is a new line.</p>
  `,
   
"HTML Links and Navigation":
 `<h2>Absolute URLs</h2>
 <a href="https://example.com">Visit Example</a>
 <p><a href="https://hannacode.com">visit HannaCode</a></p>
 <a href="http://www.imdb.com" target="_blank">

 <h2>Relative URLs</h2>
 <a href="index.html">Home</a>
 <p><a href="contact.html">Contact</a></P>

<nav>
  <a href="#home">Home</a>
  <a href="#about">About</a>
</nav>`,

    "HTML Images and Media": 
    `<img src="image.jpg" alt="An image" width="300" height="200">

<figure>
  <img src="image.jpg" alt="A figure image">
  <figcaption>Figure caption</figcaption>
</figure>`,

    "HTML Lists (Ordered and Unordered)": 
    `<ul> 
  <li>Item 1</li> 
  <li>Item 2</li>
</ul>

<ol> <!-- Ordered list -->
  <li>First item</li>
  <li>Second item</li>
</ol>`,

    "HTML Tables": 
    `<table border="1">
  <tr>
    <th>Header 1</th>
    <th>Header 2</th>
    <th>Header 3</th>
  </tr>
  <tr>
    <td>Data 1</td>
    <td>Data 2</td>
    <td>Data 3</td>
  </tr>
</table>
`,

    "HTML Forms Basics": 
 `<form action="http://www.hannacode.com/subscribe.php" 
method="get">
<p>This is where the form controls will appear.</p>
</form>

<form action="http://www.hannacode.com/login.php">
<p>Username:
 <input type="text" name="username" size="15" 
 maxlength="30" />
</p>
<p>Password:
 <input type="password" name="password" size="15" 
 maxlength="30" />
</p>
<p>What did you think of this gig?</p>
 <textarea name="comments" cols="20" rows="4">Enter 
 your comments...</textarea>
</form>

  <label for="name">Name:</label>
  <button type="submit">Submit</button>
`,


    "HTML Form Elements":
  `<form action="http://www.example.com/login.php">
<p>Username:
 <input type="text" name="username" size="15" 
 maxlength="30" />
</p>
</form>

A form with radio buttons:
<form action="http://www.example.com/profile.php">
<p>Please select your favorite genre:
 <br />
 <input type="radio" name="genre" value="rock" 
 checked="checked" /> Rock
 <input type="radio" name="genre" value="pop" /> 
 Pop
 <input type="radio" name="genre" value="jazz" /> 
 Jazz
</p>
</form>

Checkbox
<form action="http://www.example.com/profile.php">
<p>Please select your favorite music service(s):
 <br />
 <input type="checkbox" name="service" 
 value="itunes" checked="checked" /> iTunes
 <input type="checkbox" name="service" 
 value="lastfm" /> Last.fm
 <input type="checkbox" name="service" 
 value="spotify" /> Spotify
</p>
</form>
`,

    "HTML Input Types":
 `Input Type Email
 <form>
  <label for="email">Enter your email:</label>
  <input type="email" id="email" name="email">
</form>

Input Type Number 
<form>
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="number" id="quantity" name="quantity" min="1" max="5">
</form>

Input Type Date
<form>
  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday">
</form>
<`,

    "HTML Form Validation": 
  `<form action="http://www.hannacode.com/login/"
 method="post"> 
<label for="username">Username:</label>
<input type="text" name="username"
 required="required" /></title><br /> 
<label for="password">Password:</label>
<input type="password" name="password"
 required="required" /> 
<input type="submit" value="Submit" />
</form>`,

"HTML Div":`
div id="header">
<img src="images/logo.gif" alt="Anish Kapoor" />
<ul>
 <li><a href="index.html">Home</a></li>
 <li><a href="biography.html">Biography</a></li>
 <li><a href="works.html">Works</a></li>
 <li><a href="contact.html">Contact</a></li>
</ul>
</div><!-- end of header -->

Multiple <div> elements
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

`,


"HTML Classes":`
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>
`,

"HTML Id":`
The HTML \`id\` attribute is used to specify a unique id for an HTML element.
You cannot have more than one element with the same id in an HTML document.

<!DOCTYPE html>
<html>
<head>
<style>
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}
</style>
</head>
<body>

<h1 id="myHeader">My Header</h1>

</body>
</html>

Difference Between Class and ID
A class name can be used by multiple HTML elements, while an id name must only be 
used by one HTML element within the page:

<style>
/* Style the element with the id "myHeader" */
#myHeader {
  background-color: lightblue;
  color: black;
  padding: 40px;
  text-align: center;
}

/* Style all elements with the class name "city" */
.city {
  background-color: tomato;
  color: white;
  padding: 10px;
}
</style>

<!-- An element with a unique id -->
<h1 id="myHeader">My Cities</h1>

<!-- Multiple elements with same class -->
<h2 class="city">London</h2>
<p>London is the capital of England.</p>

<h2 class="city">Paris</h2>
<p>Paris is the capital of France.</p>

<h2 class="city">Tokyo</h2>
<p>Tokyo is the capital of Japan.</p>

`,

    "HTML Semantic Elements": `
Example of Header and footer elements
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

Example of Navigation and Main elements
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
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

Example of Section and Article elements
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

Example of aside and figure elements
<!DOCTYPE html>
<html>
  <head>
    <title>My Website</title>
  </head>
  <body>
    <main>
      <p>This is the main content of the website.</p>
    </main>
    <aside>
      <p>This is a sidebar on the website.</p>
    </aside>
    <figure>
      <img src="image.jpg" alt="Image of something">
      <figcaption>Image caption</figcaption> 
    </figure> 
  </body>
</html>
  
Example for Accessibility improvements (Non-semantic elements)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Non-Semantic Page</title>
  <style>
    #top, #menu, #content, #bottom {
      padding: 20px;
      margin: 10px auto;
      width: 90%;
      border: 1px solid #ccc;
      border-radius: 10px;
      font-family: Arial, sans-serif;
    }
    #top {
      background-color: #f2f2f2;
    }
    #menu {
      background-color: #e0ffe0;
    }
    #content {
      background-color: #fffbe0;
    }
    #bottom {
      background-color: #eee;
      text-align: center;
    }
    ul {
      list-style: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin-right: 15px;
    }
  </style>
</head>
<body>

  <div id="top">
    <h1>My Blog</h1>
  </div>

  <div id="menu">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </div>

  <div id="content">
    <h2>Welcome</h2>
    <p>This is my HannaCodeblog about tech and coding.</p>
  </div>

  <div id="bottom">
    <p>&copy; 2025 My Blog</p>
  </div>

</body>
</html>

Example for Accessibility improvements (Semantic elements)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Semantic Page</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f9f9f9;
    }
    header, nav, main, footer {
      padding: 20px;
      margin: 10px auto;
      width: 90%;
      border-radius: 10px;
      border: 1px solid #ccc;
    }
    header {
      background-color: #d0f0ff;
    }
    nav {
      background-color: #d2ffd2;
    }
    nav ul {
      list-style: none;
      padding: 0;
    }
    nav li {
      display: inline-block;
      margin-right: 15px;
    }
    main {
      background-color: #fffbe0;
    }
    footer {
      background-color: #eaeaea;
      text-align: center;
    }
    a {
      text-decoration: none;
      color: #0077cc;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <header>
    <h1>My Blog</h1>
  </header>

  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>

  <main>
    <h2>Welcome</h2>
    <p>This is my HannaCode blog about tech and coding.</p>
  </main>

  <footer>
    <p>&copy; 2025 My Blog</p>
  </footer>

</body>
</html>


`,

    "HTML5 New Features": `
    //HTML5 New Features Semantic 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic HTML5</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <article>
            <header>
                <h1>Article Title</h1>
                <time datetime="2024-01-15">January 15, 2024</time>
            </header>
            <section>
                <h2>Section Heading</h2>
                <p>Article content goes here...</p>
            </section>
        </article>
        
        <aside>
            <h3>Related Links</h3>
            <p>Sidebar content</p>
        </aside>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>

//Example for:Local Storage
<!DOCTYPE html>
<html>
<head>
    <title>Local Storage Demo</title>
</head>
<body>
    <input type="text" id="nameInput" placeholder="Enter your name">
    <button onclick="saveName()">Save Name</button>
    <button onclick="loadName()">Load Name</button>
    <p id="output"></p>

</body>
</html> `,

    "HTML Comments and Best Practices": `
    //Example
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Best Practices Example</title>
    <!-- Meta tags for SEO and responsive design -->
    <meta name="description" content="Example of HTML best practices">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <!-- Main navigation section -->
    <nav class="main-navigation">
        <ul class="nav-list">
            <li class="nav-item"><a href="#home" class="nav-link">Home</a></li>
            <li class="nav-item"><a href="#about" class="nav-link">About</a></li>
        </ul>
    </nav>
    
    <!-- 
        Main content area
        Contains the primary page content
    -->
    <main class="main-content">
        <section class="hero-section">
            <h1 class="page-title">Welcome to Our Site</h1>
            <p class="hero-description">
                This demonstrates proper HTML structure and naming conventions.
            </p>
        </section>
        
        <!-- Article content with proper semantic structure -->
        <article class="content-article">
            <header class="article-header">
                <h2 class="article-title">Article Title</h2>
                <time class="article-date" datetime="2024-01-15">January 15, 2024</time>
            </header>
            
            <div class="article-content">
                <p>Article content with proper indentation and organization.</p>
            </div>
        </article>
    </main>
    
    <!-- Footer section -->
    <footer class="site-footer">
        <p class="copyright">&copy; 2024 Company Name. All rights reserved.</p>
    </footer>
</body>
</html>`,

    "HTML Meta Tags":`
    //Example
    <!DOCTYPE html>
<html lang="en">
<head>
    <!-- Character encoding - always first -->
    <meta charset="UTF-8">
    
    <!-- Viewport for responsive design -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- SEO Meta Tags -->
    <meta name="description" content="Comprehensive guide to HTML meta tags with examples and explanations">
    <meta name="keywords" content="HTML, meta tags, SEO, web development">
    <meta name="author" content="Web Developer">
    
    <!-- Social Media Meta Tags (Open Graph) -->
    <meta property="og:title" content="HTML Meta Tags Guide">
    <meta property="og:description" content="Learn about HTML meta tags">
    <meta property="og:image" content="https://example.com/image.jpg">
    <meta property="og:url" content="https://example.com/page">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="HTML Meta Tags Guide">
    <meta name="twitter:description" content="Learn about HTML meta tags">
    <meta name="twitter:image" content="https://example.com/image.jpg">
    
    <!-- Robots Meta Tag -->
    <meta name="robots" content="index, follow">
    
    <!-- Refresh and Redirect (use sparingly) -->
    <!-- <meta http-equiv="refresh" content="30"> -->
    <!-- <meta http-equiv="refresh" content="5; url=https://example.com"> -->
    
    <title>HTML Meta Tags Guide</title>
</head>
<body>
    <h1>Meta Tags Example Page</h1>
    <p>This page demonstrates various HTML meta tags.</p>
</body>
</html>`,

    "HTML Character Entities":`
    //Example 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Character Entities Example</title>
</head>
<body>
    <h1>HTML Character Entities</h1>
    
    <!-- Special Characters -->
    <h2>Special Characters</h2>
    <p>Less than: &lt;</p>
    <p>Greater than: &gt;</p>
    <p>Ampersand: &amp;</p>
    <p>Quote: &quot;</p>
    <p>Apostrophe: &apos;</p>
    <p>Non-breaking space: Hello&nbsp;World</p>
    
    <!-- Common Symbols -->
    <h2>Common Symbols</h2>
    <p>Copyright: &copy;</p>
    <p>Registered: &reg;</p>
    <p>Trademark: &trade;</p>
    <p>Degree: 25&deg;C</p>
    <p>Plus/minus: &plusmn;</p>
    <p>Multiplication: 5 &times; 3</p>
    <p>Division: 10 &divide; 2</p>
    
    <!-- Currency Symbols -->
    <h2>Currency</h2>
    <p>Dollar: &#36;</p>
    <p>Euro: &euro;</p>
    <p>Pound: &pound;</p>
    <p>Yen: &yen;</p>
    
    <!-- International Characters -->
    <h2>International Characters</h2>
    <p>Acute: caf&eacute;</p>
    <p>Grave: &agrave;</p>
    <p>Circumflex: &acirc;</p>
    <p>Tilde: ni&ntilde;o</p>
    <p>Umlaut: M&uuml;ller</p>
    
    <!-- Unicode Examples -->
    <h2>Unicode Characters</h2>
    <p>Heart: &#9829; (&#x2665;)</p>
    <p>Star: &#9733; (&#x2605;)</p>
    <p>Arrow: &#8594; (&#x2192;)</p>
    <p>Emoji: &#128512; (&#x1F600;)</p>
</body>
</html>`,

    "HTML Colors and Backgrounds":`
    //Example 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Colors and Backgrounds</title>
    <style>
        .color-name { background-color: red; color: white; padding: 10px; }
        .color-hex { background-color: #3498db; color: white; padding: 10px; }
        .color-rgb { background-color: rgb(46, 204, 113); color: white; padding: 10px; }
        .color-rgba { background-color: rgba(231, 76, 60, 0.7); color: white; padding: 10px; }
        .color-hsl { background-color: hsl(291, 64%, 42%); color: white; padding: 10px; }
        
        .bg-image { 
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><rect width="50" height="50" fill="%23ff6b6b"/><rect x="50" y="50" width="50" height="50" fill="%234ecdc4"/></svg>');
            background-repeat: repeat;
            padding: 20px;
            color: white;
            text-shadow: 1px 1px 2px black;
        }
        
        .gradient-linear {
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
            padding: 20px;
            color: white;
        }
        
        .gradient-radial {
            background: radial-gradient(circle, #ff6b6b, #4ecdc4);
            padding: 20px;
            color: white;
        }
        
        .accessibility-good { background-color: #000; color: #fff; padding: 10px; }
        .accessibility-poor { background-color: #ffff00; color: #ffffff; padding: 10px; }
    </style>
</head>
<body>
    <h1>HTML Colors and Backgrounds</h1>
    
    <!-- Color Value Formats -->
    <h2>Color Value Formats</h2>
    <div class="color-name">Named Color: red</div>
    <div class="color-hex">Hex Color: #3498db</div>
    <div class="color-rgb">RGB Color: rgb(46, 204, 113)</div>
    <div class="color-rgba">RGBA Color: rgba(231, 76, 60, 0.7)</div>
    <div class="color-hsl">HSL Color: hsl(291, 64%, 42%)</div>
    
    <!-- Background Images -->
    <h2>Background Images</h2>
    <div class="bg-image">
        Background with SVG pattern image
    </div>
    
    <!-- Gradient Backgrounds -->
    <h2>Gradient Backgrounds</h2>
    <div class="gradient-linear">Linear Gradient Background</div>
    <div class="gradient-radial">Radial Gradient Background</div>
    
    <!-- Color Accessibility -->
    <h2>Color Accessibility</h2>
    <div class="accessibility-good">Good contrast: Black background, white text</div>
    <div class="accessibility-poor">Poor contrast: Yellow background, white text</div>
</body>
</html>`,


      "HTML Layout Techniques": `
    //Example
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Layout Techniques</title>
    <style>
        /* Div-based Layout */
        .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
        .header { background: #3498db; color: white; padding: 20px; text-align: center; }
        .nav { background: #2c3e50; color: white; padding: 10px; }
        .content { display: flex; gap: 20px; margin: 20px 0; }
        .main { flex: 2; background: #ecf0f1; padding: 20px; }
        .sidebar { flex: 1; background: #bdc3c7; padding: 20px; }
        .footer { background: #34495e; color: white; padding: 20px; text-align: center; }
        
        /* CSS Grid Layout */
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 3fr 1fr;
            grid-template-rows: auto auto 1fr auto;
            grid-template-areas: 
                "header header header"
                "nav nav nav"
                "sidebar main aside"
                "footer footer footer";
            gap: 10px;
            min-height: 100vh;
        }
        
        .grid-header { grid-area: header; background: #e74c3c; color: white; padding: 20px; }
        .grid-nav { grid-area: nav; background: #9b59b6; color: white; padding: 10px; }
        .grid-sidebar { grid-area: sidebar; background: #f39c12; padding: 20px; }
        .grid-main { grid-area: main; background: #2ecc71; color: white; padding: 20px; }
        .grid-aside { grid-area: aside; background: #1abc9c; padding: 20px; }
        .grid-footer { grid-area: footer; background: #34495e; color: white; padding: 20px; }
        
        /* Flexbox Layout */
        .flex-container { display: flex; flex-direction: column; min-height: 100vh; }
        .flex-header { background: #8e44ad; color: white; padding: 20px; }
        .flex-content { display: flex; flex: 1; }
        .flex-main { flex: 3; background: #3498db; color: white; padding: 20px; }
        .flex-sidebar { flex: 1; background: #e67e22; color: white; padding: 20px; }
        .flex-footer { background: #2c3e50; color: white; padding: 20px; }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .content { flex-direction: column; }
            .grid-container {
                grid-template-columns: 1fr;
                grid-template-areas: 
                    "header"
                    "nav"
                    "main"
                    "sidebar"
                    "aside"
                    "footer";
            }
            .flex-content { flex-direction: column; }
        }
    </style>
</head>
<body>
    <h1>HTML Layout Techniques</h1>
    
    <!-- Div-based Layout -->
    <section>
        <h2>Div-based Layout with Flexbox</h2>
        <div class="container">
            <div class="header">Header</div>
            <div class="nav">Navigation</div>
            <div class="content">
                <div class="main">Main Content Area</div>
                <div class="sidebar">Sidebar</div>
            </div>
            <div class="footer">Footer</div>
        </div>
    </section>
    
    <!-- CSS Grid Layout -->
    <section style="margin-top: 40px;">
        <h2>CSS Grid Layout</h2>
        <div class="grid-container">
            <div class="grid-header">Grid Header</div>
            <div class="grid-nav">Grid Navigation</div>
            <div class="grid-sidebar">Sidebar</div>
            <div class="grid-main">Main Content</div>
            <div class="grid-aside">Aside</div>
            <div class="grid-footer">Grid Footer</div>
        </div>
    </section>
    
    <!-- Flexbox Layout -->
    <section style="margin-top: 40px;">
        <h2>Pure Flexbox Layout</h2>
        <div class="flex-container" style="height: 400px;">
            <div class="flex-header">Flex Header</div>
            <div class="flex-content">
                <div class="flex-main">Flex Main Content</div>
                <div class="flex-sidebar">Flex Sidebar</div>
            </div>
            <div class="flex-footer">Flex Footer</div>
        </div>
    </section>
</body>
</html>`,

    "HTML iframes":`
    //Example 
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>iframe Examples</title>
    <style>
        .iframe-container {
            position: relative;
            width: 100%;
            padding-bottom: 56.25%; /* 16:9 aspect ratio */
            height: 0;
            overflow: hidden;
            margin: 20px 0;
        }
        
        .responsive-iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 2px solid #3498db;
            border-radius: 8px;
        }
        
        .iframe-basic {
            width: 100%;
            height: 300px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <h1>HTML iframe Examples</h1>
    
    <!-- Basic iframe -->
    <h2>Basic iframe</h2>
    <iframe 
        src="data:text/html,<h1>Hello from iframe!</h1><p>This is content inside an iframe.</p>"
        class="iframe-basic"
        title="Basic iframe example">
        Your browser does not support iframes.
    </iframe>
    
    <!-- iframe with attributes -->
    <h2>iframe with Security Attributes</h2>
    <iframe 
        src="data:text/html,<h2>Secure iframe</h2><p>This iframe has security restrictions.</p>"
        width="100%"
        height="200"
        sandbox="allow-same-origin"
        loading="lazy"
        title="Secure iframe example"
        style="border: 2px solid #e74c3c; border-radius: 8px;">
        Fallback content for browsers that don't support iframes.
    </iframe>
    
    <!-- Responsive iframe -->
    <h2>Responsive iframe</h2>
    <div class="iframe-container">
        <iframe 
            class="responsive-iframe"
            src="data:text/html,<body style='font-family: Arial; padding: 20px; background: linear-gradient(45deg, %2334495e, %233498db); color: white;'><h1>Responsive iframe</h1><p>This iframe maintains aspect ratio and is fully responsive.</p><p>Resize your browser to see how it adapts!</p></body>"
            title="Responsive iframe example"
            allowfullscreen>
        </iframe>
    </div>
    
    <!-- iframe Best Practices -->
    <h2>iframe Security and Best Practices</h2>
    <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Security Attributes Used:</h3>
        <ul>
            <li><strong>sandbox:</strong> Restricts iframe capabilities</li>
            <li><strong>loading="lazy":</strong> Defers loading until needed</li>
            <li><strong>title:</strong> Provides accessibility information</li>
        </ul>
        
        <h3>Common Sandbox Values:</h3>
        <ul>
            <li><strong>allow-same-origin:</strong> Allows same-origin access</li>
            <li><strong>allow-scripts:</strong> Allows JavaScript execution</li>
            <li><strong>allow-forms:</strong> Allows form submission</li>
            <li><strong>allow-popups:</strong> Allows popups</li>
        </ul>
    </div>
    
    <!-- iframe Alternatives -->
    <h2>iframe Alternatives</h2>
    <div style="background: #e8f5e8; padding: 20px; border-radius: 8px;">
        <h3>Modern Alternatives to iframes:</h3>
        <ul>
            <li><strong>Web Components:</strong> Custom elements for reusable content</li>
            <li><strong>AJAX/Fetch:</strong> Load content dynamically</li>
            <li><strong>Shadow DOM:</strong> Encapsulated content without iframe overhead</li>
            <li><strong>Object/Embed:</strong> For specific media types</li>
        </ul>
    </div>
</body>
</html>`,

    "HTML Audio and Video":
     `<audio controls>
  <source src="audio.mp3" type="audio/mpeg">
</audio>
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
</video>`,

    "HTML Canvas Basics":
    `<canvas id="myCanvas" width="200" height="100"></canvas>
<script>
  var c = document.getElementById('myCanvas');
  var ctx = c.getContext('2d');
  ctx.fillStyle = 'red';
  ctx.fillRect(10, 10, 150, 75);
</script>`,

    "HTML SVG Graphics":`
   //SVG Basics
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Basics</title>
    <style>
        .svg-container {
            border: 2px solid #333;
            margin: 20px;
            display: inline-block;
        }
    </style>
</head>
<body>
    <h2>Basic SVG Structure</h2>
    
    <!-- Basic SVG with viewBox -->
    <div class="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" 
             width="200" 
             height="100" 
             viewBox="0 0 200 100"
             style="background-color: #f0f0f0;">
            
            <!-- Simple rectangle -->
            <rect x="10" y="10" width="80" height="30" 
                  fill="#3498db" stroke="#2980b9" stroke-width="2"/>
            
            <!-- Text element -->
            <text x="50" y="70" font-family="Arial" font-size="14" 
                  text-anchor="middle" fill="#2c3e50">
                SVG Graphics
            </text>
        </svg>
    </div>
</body>
</html>


// Basic Shapes Example
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


//Paths and Curves Example
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
            
            <!-- Simple path with straight lines -->
            <path d="M 50 50 L 150 50 L 150 100 L 100 150 Z" 
                  fill="#3498db" stroke="#2980b9" stroke-width="3"/>
            <text x="100" y="170" text-anchor="middle" font-size="12">Simple Path</text>
            
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
            
            <!-- Complex shape combining multiple commands -->
            <path d="M 300 200 
                     L 350 250 
                     Q 400 200 450 250 
                     C 500 300, 550 200, 600 250 
                     L 650 200 
                     Q 625 180 600 200 
                     C 550 150, 500 250, 450 200 
                     Q 400 150 350 200 
                     Z" 
                  fill="#e67e22" fill-opacity="0.7" 
                  stroke="#d35400" stroke-width="3"/>
            <text x="475" y="330" text-anchor="middle" font-size="12">Complex Shape</text>
            
            <!-- Heart shape using paths -->
            <path d="M 150 400 
                     C 150 380, 120 380, 120 400 
                     C 120 380, 90 380, 90 400 
                     C 90 420, 150 460, 150 460 
                     C 150 460, 210 420, 210 400 
                     C 210 380, 180 380, 180 400 
                     C 180 380, 150 380, 150 400 Z" 
                  fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
            <text x="150" y="480" text-anchor="middle" font-size="12">Heart Shape</text>
        </svg>
    </div>
</body>
</html>


// Text and Images Example
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
            
            <!-- Text along a path -->
            <defs>
                <path id="textPath" d="M 50 350 Q 200 300 350 350 T 650 350"/>
            </defs>
            <path d="M 50 350 Q 200 300 350 350 T 650 350" 
                  fill="none" stroke="#bdc3c7" stroke-width="2"/>
            <text font-family="Arial" font-size="16" fill="#8e44ad">
                <textPath href="#textPath">
                    This text follows the curved path above!
                </textPath>
            </text>
            
            <!-- Text in a circle -->
            <circle cx="150" cy="450" r="60" fill="none" stroke="#2ecc71" stroke-width="2"/>
            <text x="150" y="455" 
                  text-anchor="middle" 
                  dominant-baseline="middle" 
                  font-size="14" 
                  fill="#27ae60">
                Centered
                <tspan x="150" dy="15">Text</tspan>
            </text>
            
            <!-- Gradient text -->
            <defs>
                <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#e74c3c;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#f39c12;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#9b59b6;stop-opacity:1" />
                </linearGradient>
            </defs>
            <text x="350" y="480" 
                  font-family="Arial Black" 
                  font-size="32" 
                  fill="url(#textGradient)">
                GRADIENT
            </text>
            
            <!-- Text with shadow effect -->
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="3" dy="3" stdDeviation="2" flood-color="#34495e"/>
                </filter>
            </defs>
            <text x="550" y="480" 
                  font-family="Arial" 
                  font-size="28" 
                  font-weight="bold" 
                  fill="#3498db" 
                  filter="url(#shadow)">
                SHADOW
            </text>
            
            <!-- Embedded image (placeholder rectangle for demo) -->
            <rect x="50" y="520" width="100" height="60" 
                  fill="#ecf0f1" stroke="#bdc3c7" stroke-width="2"/>
            <text x="100" y="555" text-anchor="middle" font-size="12" fill="#7f8c8d">
                Image Placeholder
            </text>
            <text x="100" y="590" text-anchor="middle" font-size="10" fill="#95a5a6">
                Use &lt;image&gt; tag for actual images
            </text>
            
        </svg>
    </div>
</body>
</html>



//SVG Animation
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Animation</title>
    <style>
        .animation-demo {
            margin: 20px;
            border: 1px solid #ddd;
            padding: 10px;
        }
        
        /* CSS-based animations */
        .css-rotate {
            animation: rotate 3s linear infinite;
            transform-origin: center;
        }
        
        .css-pulse {
            animation: pulse 2s ease-in-out infinite alternate;
        }
        
        .css-bounce {
            animation: bounce 1s ease-in-out infinite alternate;
        }
        
        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
            from { opacity: 0.3; transform: scale(1); }
            to { opacity: 1; transform: scale(1.2); }
        }
        
        @keyframes bounce {
            from { transform: translateY(0); }
            to { transform: translateY(-20px); }
        }
    </style>
</head>
<body>
    <h2>SVG Animation Examples</h2>
    
    <div class="animation-demo">
        <svg width="800" height="600" viewBox="0 0 800 600">
            
            <!-- SMIL Animations -->
            
            <!-- Color animation -->
            <circle cx="100" cy="100" r="30" fill="#3498db">
                <animate attributeName="fill" 
                         values="#3498db;#e74c3c;#f39c12;#2ecc71;#3498db" 
                         dur="3s" 
                         repeatCount="indefinite"/>
            </circle>
            <text x="100" y="150" text-anchor="middle" font-size="12">Color Animation</text>
            
            <!-- Size animation -->
            <circle cx="250" cy="100" r="20" fill="#9b59b6">
                <animate attributeName="r" 
                         values="20;40;20" 
                         dur="2s" 
                         repeatCount="indefinite"/>
            </circle>
            <text x="250" y="150" text-anchor="middle" font-size="12">Size Animation</text>
            
            <!-- Position animation -->
            <circle cx="400" cy="100" r="25" fill="#e67e22">
                <animate attributeName="cx" 
                         values="400;500;400" 
                         dur="2s" 
                         repeatCount="indefinite"/>
                <animate attributeName="cy" 
                         values="100;80;100" 
                         dur="1s" 
                         repeatCount="indefinite"/>
            </circle>
            <text x="450" y="150" text-anchor="middle" font-size="12">Position Animation</text>
            
            <!-- Rotation animation -->
            <g>
                <animateTransform attributeName="transform" 
                                  type="rotate" 
                                  values="0 600 100;360 600 100;0 600 100" 
                                  dur="4s" 
                                  repeatCount="indefinite"/>
                <rect x="580" y="80" width="40" height="40" fill="#34495e"/>
            </g>
            <text x="600" y="150" text-anchor="middle" font-size="12">Rotation</text>
            
            <!-- Path animation -->
            <path id="motionPath" d="M 50 250 Q 200 200 350 250 T 650 250" 
                  fill="none" stroke="#bdc3c7" stroke-width="2"/>
            <circle r="15" fill="#e74c3c">
                <animateMotion dur="5s" repeatCount="indefinite">
                    <mpath href="#motionPath"/>
                </animateMotion>
            </circle>
            <text x="350" y="290" text-anchor="middle" font-size="12">Motion Along Path</text>
            
            <!-- Complex animation: Growing flower -->
            <g>
                <!-- Stem -->
                <line x1="150" y1="500" x2="150" y2="380" stroke="#27ae60" stroke-width="6">
                    <animate attributeName="y2" 
                             values="500;380" 
                             dur="2s" 
                             fill="freeze"/>
                </line>
                
                <!-- Petals -->
                <g>
                    <animateTransform attributeName="transform" 
                                      type="scale" 
                                      values="0;1" 
                                      dur="1s" 
                                      begin="2s" 
                                      fill="freeze"/>
                    
                    <!-- Petal 1 -->
                    <ellipse cx="150" cy="360" rx="8" ry="20" fill="#e74c3c">
                        <animateTransform attributeName="transform" 
                                          type="rotate" 
                                          values="0 150 380;45 150 380" 
                                          dur="0.5s" 
                                          begin="3s" 
                                          fill="freeze"/>
                    </ellipse>
                    
                    <!-- Petal 2 -->
                    <ellipse cx="150" cy="360" rx="8" ry="20" fill="#e74c3c" transform="rotate(60 150 380)">
                        <animateTransform attributeName="transform" 
                                          type="rotate" 
                                          values="60 150 380;105 150 380" 
                                          dur="0.5s" 
                                          begin="3.2s" 
                                          fill="freeze"/>
                    </ellipse>
                    
                    <!-- More petals -->
                    <ellipse cx="150" cy="360" rx="8" ry="20" fill="#e74c3c" transform="rotate(120 150 380)"/>
                    <ellipse cx="150" cy="360" rx="8" ry="20" fill="#e74c3c" transform="rotate(180 150 380)"/>
                    <ellipse cx="150" cy="360" rx="8" ry="20" fill="#e74c3c" transform="rotate(240 150 380)"/>
                    <ellipse cx="150" cy="360" rx="8" ry="20" fill="#e74c3c" transform="rotate(300 150 380)"/>
                    
                    <!-- Center -->
                    <circle cx="150" cy="380" r="8" fill="#f1c40f"/>
                </g>
            </g>
            <text x="150" y="530" text-anchor="middle" font-size="12">Growing Flower</text>
            
            <!-- CSS-based animations -->
            <g transform="translate(400, 350)">
                <circle cx="0" cy="0" r="25" fill="#3498db" class="css-rotate"/>
                <text x="0" y="50" text-anchor="middle" font-size="12">CSS Rotation</text>
            </g>
            
            <g transform="translate(550, 350)">
                <circle cx="0" cy="0" r="25" fill="#9b59b6" class="css-pulse"/>
                <text x="0" y="50" text-anchor="middle" font-size="12">CSS Pulse</text>
            </g>
            
            <g transform="translate(700, 350)">
                <circle cx="0" cy="0" r="25" fill="#f39c12" class="css-bounce"/>
                <text x="0" y="70" text-anchor="middle" font-size="12">CSS Bounce</text>
            </g>
            
        </svg>
    </div>
</body>
</html>


//SVG Optimization
      <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SVG Optimization</title>
    <style>
        .optimization-demo {
            margin: 20px;
            border: 1px solid #ddd;
            padding: 10px;
        }
        
        /* Optimized CSS classes */
        .icon-fill { fill: #3498db; }
        .icon-stroke { stroke: #2980b9; stroke-width: 2; }
        .icon-hover:hover .icon-fill { fill: #e74c3c; }
        .icon-hover:hover .icon-stroke { stroke: #c0392b; }
        
        .btn-style {
            cursor: pointer;
            transition: all 0.3s ease;
        }
        .btn-style:hover {
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <h2>SVG Optimization Examples</h2>
    
    <div class="optimization-demo">
        
        <!-- Before Optimization (Verbose) -->
        <h3>Before Optimization:</h3>
        <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="50" cy="50" r="20" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
            <circle cx="100" cy="50" r="20" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
            <circle cx="150" cy="50" r="20" fill="#3498db" stroke="#2980b9" stroke-width="2"/>
            <rect x="30" y="80" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
            <rect x="80" y="80" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
            <rect x="130" y="80" width="40" height="40" fill="#e74c3c" stroke="#c0392b" stroke-width="2"/>
        </svg>
        
        <!-- After Optimization (Using defs and groups) -->
        <h3>After Optimization:</h3>
        <svg width="200" height="200" viewBox="0 0 200 200">
            <defs>
                <!-- Reusable styles -->
                <style>
                    .circle-style { fill: #3498db; stroke: #2980b9; stroke-width: 2; }
                    .rect-style { fill: #e74c3c; stroke: #c0392b; stroke-width: 2; }
                </style>
            </defs>
            
            <!-- Grouped circles -->
            <g class="circle-style">
                <circle cx="50" cy="50" r="20"/>
                <circle cx="100" cy="50" r="20"/>
                <circle cx="150" cy="50" r="20"/>
            </g>
            
            <!-- Grouped rectangles -->
            <g class="rect-style">
                <rect x="30" y="80" width="40" height="40"/>
                <rect x="80" y="80" width="40" height="40"/>
                <rect x="130" y="80" width="40" height="40"/>
            </g>
        </svg>
        
        <!-- Optimized Icon Library -->
        <h3>Optimized Icon Library:</h3>
        <svg width="400" height="200" viewBox="0 0 400 200">
            <defs>
                <!-- Reusable gradients -->
                <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#3498db"/>
                    <stop offset="100%" stop-color="#2980b9"/>
                </linearGradient>
                
                <!-- Reusable icon symbols -->
                <symbol id="homeIcon" viewBox="0 0 24 24">
                    <path d="M12 2l10 9h-3v8h-5v-6h-4v6h-5v-8h-3z"/>
                </symbol>
                
                <symbol id="userIcon" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4"/>
                    <path d="M6 21v-2c0-3.3 2.7-6 6-6s6 2.7 6 6v2"/>
                </symbol>
                
                <symbol id="settingsIcon" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6m0 10v6m11-7h-6m-10 0h-6m15.364-6.364l-4.243 4.243m-8.485 0l-4.243-4.243m12.728 0l-4.243-4.243m-8.485 0l-4.243-4.243"/>
                </symbol>
            </defs>
            
            <!-- Optimized icons using symbols -->
            <g class="icon-hover btn-style">
                <use href="#homeIcon" x="50" y="50" width="48" height="48" class="icon-fill icon-stroke"/>
                <text x="74" y="115" text-anchor="middle" font-size="12">Home</text>
            </g>
            
            <g class="icon-hover btn-style">
                <use href="#userIcon" x="150" y="50" width="48" height="48" class="icon-fill icon-stroke"/>
                <text x="174" y="115" text-anchor="middle" font-size="12">User</text>
            </g>
            
            <g class="icon-hover btn-style">
                <use href="#settingsIcon" x="250" y="50" width="48" height="48" class="icon-fill icon-stroke"/>
                <text x="274" y="115" text-anchor="middle" font-size="12">Settings</text>
            </g>
        </svg>
        
        <!-- Performance Optimized Chart -->
        <h3>Performance Optimized Chart:</h3>
        <svg width="500" height="200" viewBox="0 0 500 200">
            <defs>
                <pattern id="gridPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ecf0f1" stroke-width="1"/>
                </pattern>
            </defs>
            
            <!-- Grid background -->
            <rect width="400" height="150" x="50" y="25" fill="url(#gridPattern)"/>
            
            <!-- Optimized data visualization -->
            <g class="chart-data">
                <polyline points="50,150 90,120 130,80 170,100 210,60 250,90 290,40 330,70 370,30 410,50 450,25" 
                          fill="none" stroke="url(#blueGrad)" stroke-width="3" stroke-linecap="round"/>
                
                <!-- Data points -->
                <g fill="url(#blueGrad)">
                    <circle cx="50" cy="150" r="3"/>
                    <circle cx="90" cy="120" r="3"/>
                    <circle cx="130" cy="80" r="3"/>
                    <circle cx="170" cy="100" r="3"/>
                    <circle cx="210" cy="60" r="3"/>
                    <circle cx="250" cy="90" r="3"/>
                    <circle cx="290" cy="40" r="3"/>
                    <circle cx="330" cy="70" r="3"/>
                    <circle cx="370" cy="30" r="3"/>
                    <circle cx="410" cy="50" r="3"/>
                    <circle cx="450" cy="25" r="3"/>
                </g>
            </g>
            
            <!-- Axes -->
            <g stroke="#7f8c8d" stroke-width="2">
                <line x1="50" y1="25" x2="50" y2="175"/>
                <line x1="45" y1="175" x2="455" y2="175"/>
            </g>
        </svg>
        
        <!-- Optimization Tips -->
        <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-left: 4px solid #3498db;">
            <h4>SVG Optimization Best Practices:</h4>
            <ul>
                <li><strong>Use symbols and defs:</strong> Define reusable elements once</li>
                <li><strong>Group similar elements:</strong> Apply styles to groups instead of individual elements</li>
                <li><strong>Minimize path data:</strong> Remove unnecessary decimal places and commands</li>
                <li><strong>Use CSS classes:</strong> Instead of inline styles for better maintainability</li>
                <li><strong>Remove unused elements:</strong> Clean up generated SVG code</li>
                <li><strong>Optimize viewBox:</strong> Use appropriate coordinate systems</li>
                <li><strong>Consider gzip compression:</strong> SVG compresses very well</li>
                <li><strong>Use appropriate precision:</strong> Limit decimal places to what's visually necessary</li>
            </ul>
        </div>
        
    </div>
</body>
</html>`,

    "HTML Project: Building a Complete Website":`
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
This example shows a basic HTML document structure:
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
    `,

    "HTML Document Structure": `
- This code demonstrates the required elements for a valid HTML5 document, including the DOCTYPE, language attribute, meta tags for character encoding and viewport, and a simple heading and paragraph in the body.
    `,

    "HTML Headings and Paragraphs": `
    HTML Headings: 
- HTML headings are defined with the \`<h1>\` to \`<h6>\` tags,
      where \`<h1>\` is the highest level and <h6> is the lowest.
- The \`<h1>\` is used for the main heading of the page
- The \`<h2>\` to <h6> tags are used for subheadings.
- The \`<p>\` tag is used to define paragraphs.
    `,

    "HTML Text Formatting": `
This code demonstrates various text formatting options in HTML:
- The \`<b>\` tag makes text bold.
- The \`<i>\` tag makes text italic.
- The \`<u>\` tag underlines text.
- The \`<em>\` The <em> element indicates emphasis that subtly changes 
the meaning of a sentence.browsers will show the contents of an \`<em>\` element in italic.
- The \`<strong>\` tag indicates strong importance, typically displayed in bold.
- The \`<mark>\` tag highlights text.   
- The \`<small>\` tag makes text smaller.
- The \`<del>\` tag indicates deleted text, often shown with a strikethrough.
- The \`<ins>\` tag indicates inserted text, often shown with an underline.
- The \`<sub>\` element is used to contain characters that should be subscript.
 It is commonly used with foot notes or chemical formulas 
- The \`<sup>\` element is used to contain characters that 
should be superscript such as the suffixes of dates 
- The \`<hr />\` horizontal rule is used to create a break between 
paragraphs orthemes — such as a change of topic in a book or a new scene in a play.
- The \`<br />\` tag creates a line break within text.
Note: The \`<hr />\` and \`<br />\` they are known as empty elements, 
which meansno closing tag is required. 
    `,

    "HTML Links and Navigation":`
- Links are created using the \`<a>\`element which has an attribute 
called \`href\`. The value of the \`href\` attribute is the page that 
you want people to go to when they click on the link.Users can click on anything that 
appears between the opening \`<a>\` tag and the closing \`</a>\`
tag and will be taken to the page specified in the \`href\` attribute.When you link to 
a different website, the value of the \`href\` attribute will be the full web 
address for the site, which is known as an (absolute URL).
URL stands for Uniform Resource Locator
- When you are linking to other pages within the same site, you do not need
 to specify the domain name in the URL. You can use a shorthand known as a 
relative URL.If all the pages of the site are in the same folder, then the value 
of the href attribute is just the name of the file.

Difference between Absolute URLs and Relative URLs
- An Absolute URL contains the full web address, including the protocol and domain
While A Relative URL provides a partial path, usually relative to the current page.
- Absolute URL often used for linking to external websites.
While Relative URL commonly used for internal navigation within the same site
(like moving from one page to another).

The \`target\` attribute specifies where to open the linked document.
- The value of this attribute are \`_blank\`.
    `,
    
     "HTML Images and Media":`
The \`<img>\` tag is used to embed images in HTML.This is an empty element
(which means there is no closing tag). It must carry the following two attributes:
- The \`src\` attribute specifies the path to the image file.
- The \`alt\` attribute provides alternative text for the image, which is important for accessibility.
- The \`width\` and \`height\` attributes specify the dimensions of the image in pixels.
- The \`<figure>\` element is used to group an image with its caption.You can have more than one 
image inside the \`<figure>\` element as long as they all share the same caption.
- The \`<figcaption>\` element is used to provide a caption for the image.

Note: Images must save in the directory where the HTML file is located or provide a correct path to the image file.
And images can be in various formats, such as JPEG, PNG, or GIF.
     `,

      "HTML Lists (Ordered and Unordered)": `
This code demonstrates how to create unordered and ordered lists in HTML:
- The \`<ol>\` tag creates an ordered list, where items are numbered.
- The \`<ul>\` tag creates an unordered list, where items are bulleted.
- The \`<li>\` tag defines each list item.
- The \`<li>\` elements are nested within the \`<ul>\` or \`<ol>\` tags to create
the list structure.
      `,

    "HTML Tables": `
- The \`<table>\` element is used to create a table. The content of the table is organized into rows and columns.
- The \`<tr>\` element defines a table row. (The tr stands for table row.)
- Each cell of a table is represented using a \`<td>\` element. (The td stands for table data.)
- The \`<th>\` element is used just like the \`<td>\` element but its purpose is to
 represent the heading for either a column or a row. (The th stands for table heading.)
    `,

"HTML Forms Basics":`
- The \`<form>\` element is used to create an HTML form for user input. This element is a container for all different 
types of input elements. such as text fields, checkboxes, radio buttons, submit buttons, etc.
- The \`action\` Its valueis the URL for the page on the server that will receive the information 
in the form when it is submitted.
- The \`method\` attribute specifies how the form data should be sent to the server.
Forms can be sent using one of two methods: get or post.
-The \`<input>\` element is used to create several different form controls. The value of the type
attribute determines what kind of input they will be creating.
- The \`type="text"\`When the type attribute has a value of text, it creates a single-line text input.
- The \`name\`When users enter information into a form, the server needs to know which form control each 
piece of data was entered into
- \`type="password"\` When the type attribute has a value of password, it creates a single-line text input 
that hides the characters entered
- The \`size\` attribute specifies the width of the input field in characters.
-The \`<textarea>\` element is used to create a mutli-line text input.
Any text that appears between the opening \`<textarea>\` and closing \`</textarea>\` tags will 
appear in the text box when the page loads.
-The \`<button>\` element was introduced to allow users more control over how their buttons 
appear, and to allow other elements to appear inside the button.
`,

 "HTML Form Elements":`
- The \`<input>\` element is used to create several different form controls. The value of the type
attribute determines what kind of input they will be creating. 
- The \`type="text"\` When the type attribute has a value of text, it creates a single-line text input.
- The \`type="radio"\` Radio buttons allow users to pick just one of a number of options.
- \`type="checkbox"\` Checkboxes allow users to select (and unselect) one or more options
 in answer to a question
-The \`<input type="email">\` is used for input fields that should contain an e-mail address.
Depending on browser support, the e-mail address can be automatically validated when submitted.
Some smartphones recognize the email type, and add ".com" to the keyboard to match email input.
-The \`<input type="number">\` defines a numeric input field.
You can also set restrictions on what numbers are accepted.
-The \`<input type="date">\` is used for input fields that should contain a date.
Depending on browser support, a date picker can show up in the input field.
 `,

  "HTML Form Validation":`
You have probably seen forms on the web that give users messages if the form control has 
not been filled in correctly; this is known as \`form validation\`
Validation helps ensure the user enters information in a form that the server will be able 
to understand when the form is submitted. Validating the contents of the form before it is 
sent to the server the helps: 
- Reduce the amount of work the server has to do
- Enables users to see if there are problems with the form 
faster than if validation were performed on the server.  
  `,

  "HTML Div":`
The \`<div>\` element allows you to group a set of elements together in one block-level box.
The \`<div>\` element has no required attributes, but style, class and id are common.
\`<div>\` elements are often used to group together sections of a page.
Using an \`id\` or \`class\` attribute on the \`<div>\` element, however, 
means that you can create CSS style rules to indicate how much space the \`<div>\` element 
should occupy on the screen and change the appearance of all the elements contained within it.
 `,


  "HTML Classes":`
HTML class Attribute
The HTML \`class\` attribute is used to specify a class for an HTML element.
Multiple HTML elements can share the same \`class\`.
The \`class\` attribute is often used to point to a class name in a style sheet. 
It can also be used by a JavaScript to access and manipulate elements with the specific class name.
The class attribute on any element can share the same value. So, in this example, the 
value of city could be used on headings and links, too
  `,
"HTML Id":`
The id Attribute
The \`id\` attribute specifies a unique id for an HTML element. The value of the \`id\` attribute
must be unique within the HTML document.

The \`id\` attribute is used to point to a specific style declaration in a style sheet. 
It is also used by JavaScript to access and manipulate the element with the specific id.

The syntax for id is: write a hash character (#), followed by an id name. Then, 
define the CSS properties within curly braces { }.

In the following example we have an \`<h1>\` element that points to the id name "myHeader". 
This \`<h1>\` element will be styled according to the \`#myHeader\` style definition in the head section

Note: The id name is case sensitive!

Note: The id name must contain at least one character, cannot start with a number, and
 must not contain whitespaces (spaces, tabs, etc.).
`,

"HTML Semantic Elements": `
HTML Semantic Elements
Semantic elements are HTML tags that clearly describe the meaning of the content inside 
them—both to the browser and to developers.

In simpler terms: Semantic HTML uses tags that tell us (and the browser) what kind of content
we’re looking at.

For example:
- \`<header>\` means "Specifies a header for a document or section"
- \`<article>\` means "this is a standalone piece of content"
- \`<footer>\` means "this is the bottom document or section"
- \`<nav>\` means "this is navigation"
- \`<main>\` means "this is the main content of the page"
- \`<section>\` means "this is a section of the page"
- \`<aside>\` means "this is a side content of the page" 
- \`<figure>\` means "Specifies self-contained content, like illustrations, diagrams, photos, code listings, etc."
- \`<figcaption>\` means "Specifies a caption for a \`<figure>\` element"
- \`<details>\` means "Specifies additional details that the user can open and close"
- \`<summary>\` means "Specifies a summary for a \`<details>\` element"
- \`<time>\` means "Specifies a time"

The main difference between semantic elements and non-semantic elements is that semantic elements tell 
the browser and other users what kind of content they contain.

Compare that to non-semantic elements like \`<div>\` and \`<span>\`, which tell you nothing about what they contain.
They are just generic containers.

- The main difference between semantic elements and non-semantic elements is that semantic elements tell 
the browser and other users what kind of content they contain.

Accessbility improvements tell you how:
- The non-semantic layout works visually, but lacks structure for assistive tech.
- The semantic layout is both visually organized and machine-readable, helping accessibility, SEO, and code clarity.

Adding styles improves readability and user experience on any device
`,

    "HTML5 New Features": `
**Explanation**: HTML5 semantic elements provide meaning to content structure. 
\`<header>\` defines page/section headers, 
\`<nav>\` for navigation, \`<main>\` for primary content, 
\`<article>\` for standalone content, \`<section>\` for content sections, 
\`<aside>\` for sidebar content, and \`<footer>\` for page/section footers.

2. **Local Storage**
**Explanation**: Local Storage allows storing data in the browser that persists between sessions. 
\`localStorage.setItem()\` saves data, \`localStorage.getItem()\` retrieves data. 
Data remains until explicitly cleared.
    `,

        "HTML Comments and Best Practices": `
**Explanation**:
- **Comments**: Use \`<!-- -->\` for single-line and multi-line comments
- **Naming conventions**: Use descriptive, hyphenated class names (kebab-case)
- **Indentation**: Consistent 4-space or 2-space indentation
- **Organization**: Group related elements, use semantic HTML5 elements
- **Documentation**: Comment complex sections and purposes`,

     "HTML Meta Tags":`
**Explanation**:
- **charset**: Defines character encoding (UTF-8 recommended)
- **viewport**: Essential for responsive design
- **description/keywords**: Help search engines understand content
- **Open Graph**: Controls how content appears when shared on social media
- **robots**: Tells search engines how to index the page
- **refresh**: Can refresh page or redirect (use with caution) `,
  
      
    "HTML Character Entities":`
**Explanation**:
- **Named entities**: \`&amp;\`, \`&lt;\`, \`&gt;\` for special HTML characters
- **Numeric entities**: \`&#number;\` (decimal) or \`&#xhex;\` (hexadecimal)
- **Common symbols**: Copyright, trademark, currency symbols
- **International**: Accented characters for different languages
- **Unicode**: Access to full Unicode character set`,

 "HTML Colors and Backgrounds":`
**Explanation**:
- **Color formats**: Named colors, hex (#RRGGBB), RGB, RGBA (with alpha), HSL
- **Background images**: Use \`background-image\` property with URL
- **Gradients**: Linear and radial gradients for modern effects
- **Accessibility**: Ensure sufficient contrast between text and background
- **Best practices**: Test color combinations for readability`,
 
     "HTML Layout Techniques": `
**Explanation**:
- **Div-based**: Traditional layout using div containers with CSS positioning
- **CSS Grid**: Two-dimensional layout system, perfect for complex layouts
- **Flexbox**: One-dimensional layout, great for component-level layouts
- **Responsive**: Use media queries to adapt layouts for different screen sizes
- **Best practices**: Use semantic HTML elements, mobile-first approach`,

    "HTML iframes":`
**Explanation**:
- **Basic iframe**: Uses \`src\` attribute to load external content
- **Security**: \`sandbox\` attribute restricts iframe capabilities for security
- **Responsive**: Container with aspect ratio maintains proportions
- **Accessibility**: Always include \`title\` attribute for screen readers
- **Loading**: \`loading="lazy"\` improves performance by deferring load
- **Alternatives**: Modern web development often favors other approaches`,

"HTML SVG Graphics":`
1. **SVG Basics**
*Explanation*:
SVG (Scalable Vector Graphics) is an XML-based vector image format that describes 
graphics mathematically rather than using pixels. This makes SVG images infinitely 
scalable without quality loss, perfect for responsive web design and high-resolution 
displays.

*Key Properties*:
- \`xmlns\`: Defines the SVG namespace
- \`viewBox\`: Defines the coordinate system and aspect ratio
- \`width\` & \`height\`: Set the display dimensions
- \`preserveAspectRatio\`: Controls how SVG scales within its container

2. **Basic Shapes**
*Explanation*:
SVG provides several basic shape elements that form the foundation of vector 
graphics. Each shape has specific attributes that control its appearance and 
position.

*Shape Elements & Properties*:
- \`<rect>\`: Creates rectangles with \`x\`, \`y\`, \`width\`, \`height\`, \`rx\`, \`ry\` for rounded corners
- \`<circle>\`: Creates circles with \`cx\`, \`cy\` (center coordinates), \`r\` (radius)
- \`<ellipse>\`: Creates ellipses with \`cx\`, \`cy\`, \`rx\`, \`ry\` (radii)
- \`<line>\`: Creates lines with \`x1\`, \`y1\`, \`x2\`, \`y2\` (start and end points)
- \`<polygon>\`: Creates closed shapes with \`points\` attribute
- \`<polyline>\`: Creates open shapes with \`points\` attribute

3. **Paths and Curves**
*Explanation*:
The \`<path>\` element is the most powerful SVG shape, allowing you to create complex 
curves and shapes using path commands. The \`d\` attribute contains a series of commands 
that define the path.

*Path Commands*:
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

4. **Text and Images**
*Explanation*:
SVG supports text rendering with advanced typography features and can embed 
raster images. Text in SVG is selectable and searchable, making it accessible 
and SEO-friendly.

*Text Properties*:
- \`x\`, \`y\`: Text position coordinates
- \`font-family\`, \`font-size\`, \`font-weight\`: Typography properties
- \`text-anchor\`: Text alignment (start, middle, end)
- \`dominant-baseline\`: Vertical alignment
- \`transform\`: Text transformations
- \`textPath\`: Text along a path

5. **SVG Animation**
*Explanation*:
SVG supports both declarative animations using SMIL (Synchronized Multimedia Integration Language) 
elements and CSS-based animations. These animations can transform properties 
over time, creating dynamic graphics.

*Animation Elements*:
- \`<animate>\`: Animates attribute values over time
- \`<animateTransform>\`: Animates transformation attributes
- \`<animateMotion>\`: Animates movement along a path
- CSS animations and transitions can also be applied to SVG elements

6. **SVG Optimization**
*Explanation*:
SVG optimization involves reducing file size and improving performance through 
various techniques including code cleanup, path simplification, and proper 
structuring. This is crucial for web performance and user experience.

*Optimization Techniques*:
- Remove unnecessary elements and attributes
- Simplify paths and reduce decimal precision
- Use \`<defs>\` for reusable elements
- Implement proper grouping with \`<g>\`
- Minimize inline styles
- Use CSS classes instead of inline styles
- Optimize gradients and filters`,


 "HTML Project: Building a Complete Website": `
1. **Project Planning**

*Explanation*:
Project planning is the foundation of successful web development. It involves 
defining goals, target audience, content strategy, technical requirements, 
and project timeline. Proper planning prevents scope creep and ensures the 
final product meets user needs.

*Planning Components*:
- **Site Architecture:** Information hierarchy and navigation structure
- **User Experience (UX):** User journeys and interaction design
- **Technical Specifications:** Browser support, performance requirements
- **Content Strategy:** Content types, creation workflow, and management
- **Timeline and Milestones:** Project phases and deliverable dates

2. **Structure and Organization**
*Explanation*:
Proper HTML structure and file organization create maintainable, scalable 
websites. This involves semantic markup, logical file hierarchy, naming 
conventions, and modular code organization. Good structure improves SEO, 
accessibility, and developer experience.

*Organizational Principles*:
- **Semantic HTML**: Use appropriate HTML5 elements for content meaning
- **File Structure**: Logical directory organization for assets and pages
- **Naming Conventions**: Consistent, descriptive naming for files and classes
- **Modular CSS**: Component-based stylesheets for maintainability
- **Progressive Enhancement**: Build from basic functionality upward


`

  };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};


const getHTMLExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to HTML": `
1. Create a basic HTML page with:
   - Proper DOCTYPE declaration
   - HTML, head, and body elements
   - A title and heading
   - Multiple paragraphs

2. Experiment with different HTML elements:
   - Add headings of different levels
   - Create paragraphs with different text
   - Add line breaks and horizontal rules

3. Practice HTML structure:
   - Create a simple about page
   - Include your name and a brief description
   - Add multiple sections with headings`,

    "HTML Document Structure": `
1. Create a properly structured HTML document:
   - Add all necessary meta tags
   - Include viewport settings
   - Set the language attribute
   - Add a descriptive title

2. Organize content with semantic elements:
   - Create a header with navigation
   - Add a main content area
   - Include a footer
   - Use appropriate sectioning elements

3. Implement accessibility features:
   - Add ARIA labels where needed
   - Ensure proper heading hierarchy
   - Include alt text for images
   - Test with screen readers`,

    "HTML Headings and Paragraphs": `
1. Create a document with proper heading hierarchy:
   - Use h1 for main title
   - Add h2 for section headings
   - Include h3 for subsections
   - Maintain proper nesting

2. Format paragraphs and text:
   - Create paragraphs with different content
   - Add emphasis to important text
   - Include line breaks where needed
   - Use horizontal rules for separation

3. Build a simple article:
   - Write a short blog post
   - Use appropriate headings
   - Format paragraphs properly
   - Add emphasis to key points`,

    "HTML Text Formatting": `
1. Practice text formatting:
   - Create bold and italic text
   - Add superscript and subscript
   - Use highlighting and strikethrough
   - Implement different text styles

2. Create a formatted document:
   - Write a technical specification
   - Use appropriate formatting
   - Include citations
   - Add emphasis to important terms

3. Build a formatted list:
   - Create a product description
   - Format prices and features
   - Add emphasis to key benefits
   - Include special characters`,

    "HTML Links and Navigation": `
1. Create a navigation menu:
   - Build a horizontal menu
   - Add links to different pages
   - Include active state styling
   - Make it responsive

2. Implement different types of links:
   - Add external links
   - Create email links
   - Include phone number links
   - Add download links

3. Build a link-rich page:
   - Create a resource page
   - Add links to external resources
   - Include internal navigation
   - Implement anchor links`,

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
