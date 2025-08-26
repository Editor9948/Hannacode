const getCSSLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to CSS": `
- What is CSS and why is it used
- Ways to include CSS (inline, internal, external)
- CSS syntax and rules
- How browsers apply CSS to HTML
- The cascade and specificity basics`,

    "CSS Fundamentals and Selectors": `
- Understanding CSS syntax and rules
- Type, class, and ID selectors
- Attribute selectors and combinators
- Pseudo-class and pseudo-element selectors
- Specificity and inheritance
- CSS reset and normalization
- Best practices for selector usage`,
    
     "CSS Units and Values": `
- Absolute units (px, pt, cm)
- Relative units (em, rem, %)
- Viewport units (vw, vh)
- CSS calc() function
- Custom properties
- Unit conversion`,

    "CSS Box Model and Layout": `
- Box model components (margin, border, padding, content)
- Box-sizing property
- Margin collapse
- Display property values
- Block vs inline elements
- Box model calculations
- Layout techniques and considerations`,

    "CSS Colors and Typography": `
- Color formats (HEX, RGB, HSL, RGBA, HSLA)
- Color theory and accessibility
- Font properties and families
- Text formatting and styling
- Line height and letter spacing
- Text alignment and decoration
- Web fonts and font loading`,

    "CSS Backgrounds and Borders": `
- Background properties
- Multiple backgrounds
- Background attachment and position
- Border styles and properties
- Border radius and shadows
- Background gradients
- Background patterns and textures`,

    "CSS Display and Positioning": `
- Display property values
- Position property types
- Z-index and stacking context
- Float and clear
- Overflow handling
- Visibility and display
- Positioning techniques`,

    "CSS Flexbox Layout": `
- Flex container properties
- Flex item properties
- Flex direction and wrapping
- Justify-content and align-items
- Flex grow, shrink, and basis
- Flexbox alignment
- Responsive flexbox layouts`,

    "CSS Grid Layout": `
- Grid container properties
- Grid item properties
- Grid template areas
- Grid lines and tracks
- Grid gap and alignment
- Responsive grid layouts
- Grid vs Flexbox usage`,

 "CSS Pseudo-classes and Pseudo-elements": `
- Structural pseudo-classes
- State-based pseudo-classes
- Form-related pseudo-classes
- Pseudo-element syntax
- Generated content
- Common use cases
- Browser compatibility`,

 "CSS Tables and Lists Styling": `
- Table layout properties
- Border collapse
- Cell spacing
- List style properties
- Custom list markers
- Nested lists
- Responsive tables`,

 "CSS Forms and Input Styling": `
- Form layout
- Input styling
- Custom form elements
- Validation states
- Focus states
- Disabled states
- Accessibility considerations`,

    "CSS Navigation and Menu Design": `
- Horizontal navigation
- Vertical navigation
- Dropdown menus
- Mobile navigation
- Hamburger menu`,
  
     "CSS Card and Component Design": `
- Card layout
- Component structure
- Hover effects
- Shadow effects`,

    "CSS Specificity and Cascade": `
- Specificity calculation
- Cascade order
- !important rule
- Inheritance
- Selector specificity`,

    "CSS Transitions and Animations  Effects": `
- Transition properties
- Animation keyframes
- Timing functions
- Animation properties`,

    "CSS Transformations(2D & 3D)": `
- Transform properties
- 2D and 3D transforms
- Transform origin
- Perspective and backface
- Transform functions`,

    "CSS Media Queries": `
- Media query syntax
- Viewport and device features
- Breakpoint strategies
- Mobile-first approach`,

    "CSS Variables and Custom Properties": `
- CSS custom properties syntax
- Variable scope and inheritance
- Fallback values
- Dynamic updates with JavaScript`,
 
    "CSS Gradients and Patterns": `
- Linear gradients
- Radial gradients
- Conic gradients
- Gradient patterns
- Repeating gradients
- Color stops`,

    "CSS Box Shadow and Text Effects": `
- Box shadow properties
- Multiple shadows
- Text shadow effects
- Drop shadows
- Inner shadows`,

    "CSS Filters and Blend Modes": `
- Filter functions
- Blend mode properties
- Image effects
- Color adjustments
- Performance impact`,

    "CSS Responsive Images": `
- srcset attribute
- sizes attribute
- picture element
- Art direction
- Image formats`,

    "CSS Custom Fonts and Icon Fonts": `
- @font-face rule
- Font formats
- Font loading strategies
- Icon font implementation`,

    "CSS Modal and Popup Design": `
- Modal structure
- Overlay effects
- Animation
- Focus management
- Keyboard navigation`,

    "CSS Layout Patterns": `
- Holy Grail layout
- Sticky footer
- Sidebar layouts
- Card grid
- Masonry layout`,
  
 "CSS Performance & Best Practices":`
- Optimization tips
- Browser support & fallbacks
- Naming conventions (BEM, OOCSS, etc.)`,

   
      }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getCSSCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to CSS": `
// Example 1: What is CSS and why is it used
    body {
      background-color: blue;
   } 

   h1 {
      color: white; 
      text-align:center;
   }
 
   p {
     font-family: Poppins;
     font-size: 20px;
   }

// Example 2: Ways to include CSS (Inline) 
<p style="color: blue; font-size: 16px;">This paragraph has inline styles.</p>

// Example 3: Ways to include CSS (Internal)
  <!DOCTYPE html>
<html>
<head>
<title>Internal CSS</title>
<style>
  body {
    background-color: lightgray;
  }
  h1 {
    color: green;
  }
</style>
</head>
<body>
  <h1>This is a heading.</h1>
</body>
</html>

// Example 4: Ways to include CSS (External)
  <!DOCTYPE html>
<html>
<head>
<title>External CSS</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>This heading is styled by an external CSS file.</h1>
</body>
</html>

// Example 5: CSS Syntax and Rules
     Selector {
  Property_1 : value;
  Property_2 : value;
  Property_3 : value;
  } 

  /* This is a comment */
h1 {
  color: blue;
  font-size: 24px;
}

// Example 6: The Cascade and Specificity Basics
    #my-heading {
  color: red; /* Specificity: 100 */
}

.title {
  color: green; /* Specificity: 10 */
}

h1 {
  color: blue; /* Specificity: 1 */
}`,


    "CSS Fundamentals and Selectors": `
// Example 1: Understanding CSS syntax and rules 
 /* This is a comment */
h1 {
  color: #333; /* This is a declaration */
  font-size: 2em;
}

// Example 2: Type, Class, and ID Selectors
   /* HTML */ 
   <p>This is a paragraph.</p>
<p class="intro">This is an intro paragraph.</p>
<div id="main-content">This is the main content.</div>

   /* CSS */
  p {
  color: black;
}

.intro {
  font-weight: bold;
}

#main-content {
  background-color: lightgray;
}

// Example 3: Attribute selectors and combinators
      /* HTML */
  <a href="#">Link 1</a>
<a href="https://example.com" target="_blank">Link 2</a>
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>

    /* CSS */
    a[target="_blank"] {
  color: red;
}

ul li {
  list-style-type: none;
}


// Example 4: Pseudo-class and pseudo-element selectors
   /* HTML */
<button>Hover me</button>
<p>This is a paragraph with a long sentence that should wrap.</p>

       /* CSS */
    /* Pseudo-class: styles a link on hover */
a:hover {
 color: red;
}
/* Pseudo-class: styles the first paragraph in any container */
p:first-child {
 font-weight: bold;
}
  button:hover {
  background-color: dodgerblue;
}
/* Pseudo-element: adds content before a paragraph */
p::before {
 content: "-> ";
}
/* Pseudo-element: styles the first letter of a paragraph */
p::first-letter {
 font-size: 2em;
 float: left;
}

// Example 5: Specificity and inheritance
   /* HTML */ 
<div id="container" class="main">
 <p>This paragraph inherits font-family from the div.</p>
</div>

       /* CSS */
/* ID selector (high specificity) */
#container {
 font-family: Arial, sans-serif;
}
/* Class selector (lower specificity) */
.main {
 font-family: "Times New Roman", serif; /* This will be overridden by the 
ID selector */
}
/* Type selector (lowest specificity) */
div {
 border: 1px solid black;
}

// Example 6: CSS reset and normalization
 /* A simple normalization example */
html {
 line-height: 1.15; /* 1 */
 -webkit-text-size-adjust: 100%; /* 2 */
}
body {
 margin: 0;
}
main {
 display: block;
}
 
// Example 7: Best practices for selector usage
/* Good: concise and reusable */
.button {
 padding: 10px 15px;
 background-color: #007bff;
 color: white;
}
/* Bad: overly specific and hard to override */
#main-content div.sidebar ul li a.active {
 font-weight: bold;
}`,

    "CSS Units and Values": `
// Example 1: Absolute units (px, pt, cm)
/* HTML */
<div class="absolute-units">
  <h2>Absolute Units</h2>
  <p class="pixels">This text is 18px (pixels)</p>
  <p class="points">This text is 14pt (points)</p>
  <p class="centimeters">This div is 5cm wide</p>
</div>

/* CSS */
.pixels {
  font-size: 18px; /* Pixels - most common for screens */
}
.points {
  font-size: 14pt; /* Points - traditionally used in print */
}
.centimeters {
  width: 5cm; /* Centimeters - physical measurement */
  background-color: #f0f0f0;
  padding: 10px;
}

// Example 2: Relative units (em, rem, %)
/* HTML */
<div class="parent-element">
  <p class="em-example">This text uses em units (relative to parent)</p>
  <p class="rem-example">This text uses rem units (relative to root)</p>
  <div class="percent-example">This div is 80% width of its parent</div>
</div>

/* CSS */
.parent-element {
  font-size: 20px;
  width: 500px;
  border: 1px solid #ccc;
  padding: 10px;
}
.em-example {
  font-size: 1.2em; /* 1.2 × parent font-size (20px) = 24px */
}
.rem-example {
  font-size: 1.5rem; /* 1.5 × root font-size (usually 16px) = 24px */
}
.percent-example {
  width: 80%; /* 80% of parent width (500px) = 400px */
  background-color: #e0e0e0;
  padding: 10px;
}

// Example 3: Viewport units (vw, vh)
/* HTML */
<div class="viewport-units">
  <div class="vw-example">50vw width (50% of viewport width)</div>
  <div class="vh-example">20vh height (20% of viewport height)</div>
  <div class="vmin-example">30vmin (30% of smaller viewport dimension)</div>
  <div class="vmax-example">40vmax (40% of larger viewport dimension)</div>
</div>

/* CSS */
.vw-example {
  width: 50vw; /* 50% of viewport width */
  background-color: #ffcccc;
  margin-bottom: 10px;
  padding: 10px;
}
.vh-example {
  height: 20vh; /* 20% of viewport height */
  background-color: #ccffcc;
  margin-bottom: 10px;
  padding: 10px;
}
.vmin-example {
  width: 30vmin; /* 30% of the smaller viewport dimension */
  height: 30vmin;
  background-color: #ccccff;
  margin-bottom: 10px;
  padding: 10px;
}
.vmax-example {
  width: 40vmax; /* 40% of the larger viewport dimension */
  background-color: #ffffcc;
  padding: 10px;
}

// Example 4: CSS calc() function
/* HTML */
<div class="container">
  <div class="calc-example">This div uses calc() for width</div>
  <div class="calc-complex">This uses a more complex calc()</div>
  <div class="calc-font">This text uses calc() for font size</div>
</div>

/* CSS */
.container {
  width: 800px;
  padding: 20px;
  border: 1px solid #ddd;
}
.calc-example {
  /* 100% of container width minus 40px padding */
  width: calc(100% - 40px);
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 10px;
}
.calc-complex {
  /* 50% of container width plus 100px */
  width: calc(50% + 100px);
  background-color: #e0e0e0;
  padding: 10px;
  margin-bottom: 10px;
}
.calc-font {
  /* Base font size (16px) plus 0.5vw (scales with viewport width) */
  font-size: calc(16px + 0.5vw);
  background-color: #d0d0d0;
  padding: 10px;
}

// Example 5: Unit conversion
/* HTML */
<div class="unit-conversion">
  <p class="px-to-rem">16px = 1rem (with default root font size)</p>
  <p class="percent-to-decimal">50% = 0.5 (as a decimal for opacity)</p>
  <p class="deg-to-rad">180deg = 3.14rad (approximation of π radians)</p>
</div>

/* CSS */
html {
  /* Default in most browsers is 16px */
  font-size: 16px;
}
.unit-conversion {
  border: 1px solid #ccc;
  padding: 1rem; /* 16px if root font-size is 16px */
  margin-bottom: 1rem;
}
.px-to-rem {
  font-size: 1rem; /* Equivalent to 16px with default settings */
}
.percent-to-decimal {
  opacity: 0.5; /* Equivalent to 50% opacity */
  background-color: black;
  color: white;
  padding: 5px;
}
.deg-to-rad {
  /* Using degrees for rotation is more common than radians */
  transform: rotate(180deg); /* Could also use 3.14159rad */
  display: inline-block;
  padding: 5px;
  background-color: #f0f0f0;
}`,

    "CSS Box Model and Layout": `
// Example 1: Box model components 
   /* HTML */
<div class="box-model-demo">Content Area</div>
    /* CSS */
.box-model-demo {
 width: 200px;
 height: 100px;
 padding: 20px; /* Space inside the border */
 border: 5px solid red; /* Border around the padding */
 margin: 30px; /* Space outside the border */
 background-color: lightblue;
}
/* Total width = width + padding-left + padding-right + border-left + borderright + margin-left + margin-right */
/* Total width = 200px + 20px + 20px + 5px + 5px + 30px + 30px = 310px */

// Example 2: Box-sizing property
  /* Default behavior: content-box */
.content-box {
 box-sizing: content-box;
 width: 200px;
 padding: 20px;
 border: 5px solid black;
 /* Total width = 200px + 40px + 10px = 250px */
}
/* Border-box: includes padding and border in width */
.border-box {
 box-sizing: border-box;
 width: 200px;
 padding: 20px;
 border: 5px solid black;
 /* Total width = 200px (content area adjusts to fit) */
}
/* Apply border-box to all elements (common practice) */
*, *::before, *::after {
 box-sizing: border-box;
}

// Example 3: Margin collapse
  /* HTML */ 
 <div class="element-1">Element 1</div>
<div class="element-2">Element 2</div>

    /* CSS */
.element-1 {
 margin-bottom: 30px;
 background-color: lightcoral;
}
.element-2 {
 margin-top: 20px;
 background-color: lightgreen;
}
/* The actual space between elements is 30px (not 50px) 
 because margins collapse and the larger margin wins */

// Example 4: Display property values
.block-element {
 display: block;
 width: 100%;
 background-color: lightblue;
}
.inline-element {
 display: inline;
 background-color: yellow;
 /* Width and height properties have no effect on inline elements */
}
.inline-block-element {
 display: inline-block;
 width: 150px;
 height: 50px;
 background-color: lightgreen;
}
.hidden-element {
 display: none; /* Element is completely removed from layout */
}

// Example 5: Block vs inline elements
   /* HTML */
<div class="block">Block Element 1</div>
<div class="block">Block Element 2</div>
<span class="inline">Inline Element 1</span>
<span class="inline">Inline Element 2</span>

    /* CSS */
  .block {
 background-color: lightcoral;
 padding: 10px;
 margin: 5px 0;
 /* Block elements stack vertically */
}
.inline {
 background-color: lightblue;
 padding: 5px;
 /* Inline elements flow horizontally */
}

// Example 6: Box model calculations
.calculated-box {
 width: 300px;
 height: 200px;
 padding: 25px;
 border: 10px solid #333;
 margin: 15px;
 box-sizing: content-box;
}
/* Calculations for content-box:
 Total width = 300px (content) + 50px (padding) + 20px (border) = 370px
 Total height = 200px (content) + 50px (padding) + 20px (border) = 270px
 Space occupied = 370px + 30px (margin) = 400px wide */

 .border-box-calculated {
 width: 300px;
 height: 200px;
 padding: 25px;
 border: 10px solid #333;
 margin: 15px;
 box-sizing: border-box;
}
/* Calculations for border-box:
 Total width = 300px (includes content, padding, and border)
 Content width = 300px - 50px (padding) - 20px (border) = 230px
 Space occupied = 300px + 30px (margin) = 330px wide */
  
// Example 7: Layout techniques and considerations
  /* Traditional float-based layout (legacy) */
.float-layout {
 float: left;
 width: 50%;
}
.clearfix::after {
 content: "";
 display: table;
 clear: both;
}
/* Modern flexbox layout (recommended for 1D layouts) */
.flex-container {
 display: flex;
 justify-content: space-between;
 align-items: center;
}
.flex-item {
 flex: 1;
 margin: 0 10px;
}
/* CSS Grid layout (recommended for 2D layouts) */
.grid-container {
 display: grid;
 grid-template-columns: 1fr 2fr 1fr;
 gap: 20px;
}`,

    "CSS Colors and Typography": `
// Example 1: Color formats
 .hex-color {
 color: #ff6b35; /* Orange in hexadecimal */
 background-color: #f7f7f7; /* Light gray */
}
.rgb-color {
 color: rgb(255, 107, 53); /* Same orange in RGB */
 background-color: rgb(247, 247, 247); /* Same light gray */
}
.hsl-color {
 color: hsl(14, 100%, 60%); /* Orange in HSL */
 background-color: hsl(0, 0%, 97%); /* Light gray in HSL */
}
.rgba-color {
 background-color: rgba(255, 107, 53, 0.8); /* Semi-transparent orange */
}
.hsla-color {
 background-color: hsla(14, 100%, 60%, 0.5); /* 50% transparent orange */
}

// Example 2: Color theory and accessibility
   /* Good contrast: dark text on light background */
.accessible-text {
 color: #333333; /* Dark gray text */
 background-color: #ffffff; /* White background */
 /* Contrast ratio: approximately 12.6:1 */
}
/* Poor contrast: avoid this */
.poor-contrast {
 color: #cccccc; /* Light gray text */
 background-color: #ffffff; /* White background */
 /* Contrast ratio: approximately 1.6:1 - fails WCAG standards */
}
/* Using CSS custom properties for consistent color schemes */
:root {
 --primary-color: #2c3e50;
 --secondary-color: #3498db;
 --text-color: #2c3e50;
 --background-color: #ecf0f1;
}
.themed-element {
 color: var(--text-color);
 background-color: var(--background-color);
 border: 2px solid var(--primary-color);
}

// Example 3: Font properties and families
  .serif-font {
 font-family: "Times New Roman", Times, serif;
 font-size: 18px;
 font-weight: 400; /* Normal weight */
 font-style: normal;
}
.sans-serif-font {
 font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
 font-size: 16px;
 font-weight: 700; /* Bold */
 font-style: italic;
}
.monospace-font {
 font-family: "Courier New", Courier, monospace;
 font-size: 14px;
 font-weight: 300; /* Light */
}
/* Font shorthand property */
.shorthand-font {
 font: italic 700 20px/1.5 "Georgia", serif;
 /* font-style font-weight font-size/line-height font-family */
}

// Example 4: Text formatting and styling
  .formatted-text {
 text-align: center; /* left, right, center, justify */
 text-decoration: underline; /* none, underline, overline, line-through */
 text-transform: capitalize; /* none, uppercase, lowercase, capitalize */
 text-indent: 2em; /* Indent first line */
 word-spacing: 0.2em; /* Space between words */
 text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Horizontal, vertical, 
blur, color */
}

// Example 5: Line height and letter spacing
  .readable-text {
 line-height: 1.6; /* 1.6 times the font size - good for readability */
 letter-spacing: 0.02em; /* Slight increase in character spacing */
}
.tight-spacing {
 line-height: 1.2; /* Tighter line spacing */
 letter-spacing: -0.01em; /* Slightly condensed */
}
.loose-spacing {
 line-height: 2.0; /* Double spacing */
 letter-spacing: 0.1em; /* Expanded character spacing */
}
/* Different units for line-height */
.line-height-examples {
 line-height: 24px; /* Fixed pixel value */
 line-height: 150%; /* Percentage of font size */
 line-height: 1.5; /* Unitless (recommended) - multiplier of font size */
}

// Example 6: Text alignment and decoration
  .text-alignments {
 text-align: left; /* Default for LTR languages */
}
.center-aligned {
 text-align: center; /* Center alignment */
}
.justified-text {
 text-align: justify; /* Justify text (even spacing) */
 text-align-last: center; /* Align last line differently */
}
.decorated-text {
 text-decoration: underline dotted red; /* Style, line-style, color */
 text-decoration-thickness: 2px; /* Control underline thickness */
 text-underline-offset: 4px; /* Distance from text baseline */
}
.multiple-decorations {
 text-decoration: underline overline; /* Multiple decorations */
}

// Example 7: Web fonts and font loading
    /* HTML */
  <!-- In HTML head: Load Google Fonts -->
<link href="https://fonts.googleapis.com/css2?
family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">

   /* CSS */
   /* Using Google Fonts */
.google-font {
 font-family: 'Roboto', sans-serif;
 font-weight: 400;
}
/* Custom font with @font-face */
@font-face {
 font-family: 'CustomFont';
 src: url('fonts/customfont.woff2') format('woff2'),
 url('fonts/customfont.woff') format('woff');
 font-weight: normal;
 font-style: normal;
 font-display: swap; /* Improve loading performance */
}
.custom-font {
 font-family: 'CustomFont', Arial, sans-serif;
}
/* Font loading optimization */
.optimized-font {
 font-family: 'Roboto', sans-serif;
 font-display: swap; /* Show fallback font while loading */
}`,

    "CSS Backgrounds and Borders": `
// Example 1: Background properties
.background {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-repeat: no-repeat;
    background-position: center; /* Position the image */
    background-size: cover; /* Scale image to cover entire element */
    background-attachment: fixed; /* Image stays fixed during scrolling */
}

// Example 2: Multiple backgrounds
.multiple-backgrounds {
 background: 
 url('overlay.png') repeat,
 url('texture.jpg') no-repeat center / cover,
 linear-gradient(45deg, #ff6b35, #f7931e);
 /* Multiple backgrounds are separated by commas */
 /* First background (overlay.png) is on top */
 /* Last background (gradient) is at the bottom */

.layered {
    background: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('image.jpg') center/cover;
}

// Example 3: Background attachment and position
  .fixed-background {
 background-image: url('parallax-bg.jpg');
 background-attachment: fixed; /* Background stays in place while scrolling 
*/
 background-position: center center;
 background-size: cover;
 height: 100vh;
}
.positioned-backgrounds {
 background-image: url('logo.png');
 background-position: top 20px right 30px; /* 20px from top, 30px from 
right */
 background-repeat: no-repeat;
}
.percentage-positioning {
 background-image: url('pattern.png');
 background-position: 25% 75%; /* 25% from left, 75% from top */
 background-size: 200px 150px;
}
.keyword-positioning {
 background-image: url('icon.svg');
 background-position: bottom right; /* Keywords for positioning */
 background-repeat: no-repeat;
}

// Example 4: Border styles and properties
 .basic-border {
 border: 2px solid #333; /* width style color */
 border-radius: 5px; /* Rounded corners */
}
.individual-borders {
 border-top: 3px solid red;
 border-right: 2px dashed blue;
 border-bottom: 1px dotted green;
 border-left: 4px double orange;
}
.border-styles {
 border-width: 3px;
 border-style: solid; /* solid, dashed, dotted, double, groove, ridge, 
inset, outset */
 border-color: #007bff;
}
.advanced-borders {
 border: 2px solid transparent;
 border-image: linear-gradient(45deg, red, blue) 1;
 /* Creates a gradient border */
}

// Example 5: Border radius and shadows
.rounded-corners {
 border-radius: 10px; /* All corners */
 border-radius: 10px 20px; /* Top-left/bottom-right, top-right/bottom-left 
*/
 border-radius: 10px 20px 30px; /* Top-left, top-right/bottom-left, bottomright */
 border-radius: 10px 20px 30px 40px; /* Top-left, top-right, bottom-right, 
bottom-left */
}
.circular-element {
 width: 100px;
 height: 100px;
 border-radius: 50%; /* Creates a perfect circle */
 background-color: #ff6b35;
}
.box-shadows {
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow */
 /* horizontal-offset vertical-offset blur-radius color */
}

// Example 6: Background gradients
.linear-gradient {
 background: linear-gradient(to right, #ff6b35, #f7931e);
 /* Direction: to right, to left, to top, to bottom, or angle in degrees */
}`,

    "CSS Display and Positioning": `
// Example 1: Display property values
.block-display {
 display: block;
 width: 100%;
 background-color: lightblue;
 /* Takes full width, starts on new line */
}
.inline-display {
 display: inline;
 background-color: yellow;
 /* Flows with text, width/height ignored */
}
.inline-block-display {
 display: inline-block;
 width: 150px;
 height: 50px;
 background-color: lightgreen;
 /* Flows inline but respects width/height */
}
.flex-display {
 display: flex;
 justify-content: space-between;
 /* Creates a flex container */
}
.grid-display {
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 gap: 10px;
 /* Creates a grid container */
}
.none {
    display: none;
}

// Example 2: Position property types
.static {
    position: static;
}
.relative {
    position: relative;
    top: 10px;
    left: 20px;
}
.absolute {
    position: absolute;
    top: 0;
    right: 0;
}
.fixed {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
.sticky {
    position: sticky;
    top: 0;
}

// Example 3: Z-index and stacking context
.stacking-context {
 position: relative;
 z-index: 1;
 /* Creates a new stacking context */
}
.behind {
 position: absolute;
 z-index: 1;
 background-color: red;
 /* Lower z-index, appears behind */
}
.in-front {
 position: absolute;
 z-index: 10;
 background-color: blue;
 /* Higher z-index, appears in front */
}
.negative-z {
 position: relative;
 z-index: -1;
 /* Negative z-index, appears behind parent */
}

// Example 4: Float and clear
.floated-image {
 float: left;
 margin: 0 20px 20px 0;
 /* Image floats to the left, text wraps around */
}
.floated-sidebar {
 float: right;
 width: 300px;
 background-color: #f0f0f0;
 /* Sidebar floats to the right */
}
.clear-both {
 clear: both;
 /* Prevents wrapping around any floated elements */
}
.clear-left {
 clear: left;
 /* Prevents wrapping around left-floated elements only */
}
 
/* Modern alternative: use flexbox or grid instead of float for layouts */
.modern-layout {
 display: flex;
 /* Much more reliable than float-based layouts */
}

// Example 5: Overflow handling
.overflow-visible {
 overflow: visible; /* Default - content overflows container */
 width: 200px;
 height: 100px;
}
.overflow-hidden {
 overflow: hidden; /* Clips overflowing content */
 width: 200px;
 height: 100px;
}
.overflow-scroll {
 overflow: scroll; /* Always shows scrollbars */
 width: 200px;
 height: 100px;
}
.overflow-auto {
 overflow: auto; /* Shows scrollbars only when needed */
 width: 200px;
 height: 100px;
}
.overflow-x-y {
 overflow-x: hidden; /* Control horizontal overflow */
 overflow-y: auto; /* Control vertical overflow separately */
 width: 200px;
 height: 100px;
}
 
// Example 6: Visibility and display
.display-none {
 display: none;
 /* Element is completely removed from layout */
 /* Takes up no space */
}
.visibility-hidden {
 visibility: hidden;
 /* Element is invisible but still takes up space */
 /* Layout is preserved */
}
.visibility-visible {
 visibility: visible; /* Default - element is visible */
}
 
// Example 7: Positioning techniques
  /* Centering techniques */
.center-absolute {
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 /* Centers element regardless of size */
}

.center-fixed {
 position: fixed;
 top: 50%;
 left: 50%;
 width: 300px;
 height: 200px;
 margin-left: -150px; /* Half of width */
 margin-top: -100px; /* Half of height */
 /* Centers fixed-size element */
  } 

@media (max-width: 768px) {
 .responsive-position {
 position: static;
 /* Change positioning on mobile */
 }
}`,

    "CSS Flexbox Layout": `
// Example 1: Flex container properties
    .flex-container {
 display: flex; /* Creates a flex container */
 /* All direct children become flex items */
}
.inline-flex-container {
 display: inline-flex; /* Inline flex container */
 /* Container behaves like inline element */
}
/* Container properties */
.flex-properties {
 display: flex;
 flex-direction: row; /* row, row-reverse, column, column-reverse */
 flex-wrap: nowrap; /* nowrap, wrap, wrap-reverse */
 justify-content: flex-start; /* Main axis alignment */
 align-items: stretch; /* Cross axis alignment */
 align-content: flex-start; /* Multi-line alignment */
 gap: 10px; /* Space between items */
}
/* Shorthand for flex-direction and flex-wrap */
.flex-flow {
 display: flex;
 flex-flow: row wrap; /* flex-direction flex-wrap */
}

// Example 2: Flex item properties
.flex-item {
 flex-grow: 1; /* How much item should grow */
 flex-shrink: 1; /* How much item should shrink */
 flex-basis: auto; /* Initial size before growing/shrinking */
 align-self: auto; /* Override container's align-items */
 order: 0; /* Change visual order without changing HTML */
}
/* Flex shorthand property */
.flex-shorthand {
 flex: 1; /* flex-grow: 1, flex-shrink: 1, flex-basis: 0% */
 flex: 0 1 auto; /* flex-grow flex-shrink flex-basis */
 flex: none; /* flex: 0 0 auto - item won't grow or shrink */
 flex: auto; /* flex: 1 1 auto - item will grow and shrink */
}
.specific-flex-items {
 flex-grow: 2; /* This item grows twice as much as others */
}
.no-shrink-item {
 flex-shrink: 0; /* This item won't shrink */
 flex-basis: 200px; /* Fixed initial width */
}

// Example 3: Flex direction and wrapping
.row-direction {
 display: flex;
 flex-direction: row; /* Default - horizontal main axis */
}
.column-direction {
 display: flex;
 flex-direction: column; /* Vertical main axis */
 height: 300px; /* Height needed for column layout */
}
.reverse-direction {
 display: flex;
 flex-direction: row-reverse; /* Horizontal but reversed */
}
.wrap-container {
 display: flex;
 flex-wrap: wrap; /* Items wrap to new lines */
 width: 300px; /* Container width to force wrapping */
}
.nowrap-container {
 display: flex;
 flex-wrap: nowrap; /* Default - items stay on one line */
}
.wrap-reverse {
 display: flex;
 flex-wrap: wrap-reverse; /* Wrap but in reverse order */
}
/* Responsive flex direction */
.responsive-flex {
 display: flex;
 flex-direction: row;
}
@media (max-width: 768px) {
 .responsive-flex {
 flex-direction: column; /* Stack vertically on mobile */
 }
}`,

    "CSS Grid Layout": `
// Example 1: Grid container properties
/* HTML */
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>

/* CSS */
.grid-container {
  display: grid; /* Establishes a grid context */
  grid-template-columns: repeat(3, 1fr); /* 3 equal columns */
  grid-template-rows: 100px 200px; /* First row 100px, second row 200px */
  gap: 20px; /* Gap between grid items (shorthand for row-gap and column-gap) */
  grid-auto-rows: 150px; /* Height for implicitly created rows */
  justify-content: space-between; /* Horizontal alignment of the grid */
  align-content: center; /* Vertical alignment of the grid */
}

// Example 2: Grid item properties
/* HTML */
<div class="grid-layout">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main-content">Main Content</main>
  <footer class="footer">Footer</footer>
</div>

/* CSS */
.grid-layout {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 10px;
}

.header {
  grid-column: 1 / -1; /* Spans from first to last column line */
  background-color: #3498db;
  padding: 20px;
}

.sidebar {
  grid-column: 1 / 2; /* From column line 1 to 2 */
  grid-row: 2 / 3; /* From row line 2 to 3 */
  background-color: #2ecc71;
  padding: 20px;
}

.main-content {
  grid-column: 2 / 3; /* From column line 2 to 3 */
  grid-row: 2 / 3; /* From row line 2 to 3 */
  background-color: #ecf0f1;
  padding: 20px;
}

.footer {
  grid-column: 1 / -1; /* Spans all columns */
  background-color: #34495e;
  color: white;
  padding: 20px;
}

// Example 3: Grid template areas
/* HTML */
<div class="grid-areas">
  <header class="area-header">Header</header>
  <nav class="area-nav">Navigation</nav>
  <main class="area-main">Main Content</main>
  <aside class="area-sidebar">Sidebar</aside>
  <footer class="area-footer">Footer</footer>
</div>

/* CSS */
.grid-areas {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav main sidebar"
    "footer footer footer";
  grid-template-columns: 150px 1fr 200px;
  grid-template-rows: 80px 1fr 80px;
  min-height: 100vh;
  gap: 10px;
}

.area-header { 
  grid-area: header; 
  background-color: #3498db;
  padding: 10px;
}
.area-nav { 
  grid-area: nav; 
  background-color: #2ecc71;
  padding: 10px;
}
.area-main { 
  grid-area: main; 
  background-color: #ecf0f1;
  padding: 10px;
}
.area-sidebar { 
  grid-area: sidebar; 
  background-color: #e74c3c;
  padding: 10px;
}
.area-footer { 
  grid-area: footer; 
  background-color: #34495e;
  color: white;
  padding: 10px;
}

// Example 4: Grid lines and tracks
/* HTML */
<div class="grid-lines">
  <div class="grid-item item1">Item 1</div>
  <div class="grid-item item2">Item 2</div>
  <div class="grid-item item3">Item 3</div>
  <div class="grid-item item4">Item 4</div>
</div>

/* CSS */
.grid-lines {
  display: grid;
  /* Creating named grid lines with [name] syntax */
  grid-template-columns: [start] 1fr [middle] 2fr [end];
  grid-template-rows: [top] 100px [center] 100px [bottom];
  gap: 10px;
  background-color: #f5f5f5;
  padding: 10px;
}

.item1 {
  /* Using named grid lines */
  grid-column: start / middle;
  grid-row: top / center;
  background-color: #3498db;
}

.item2 {
  grid-column: middle / end;
  grid-row: top / center;
  background-color: #2ecc71;
}

.item3 {
  /* Spanning multiple tracks */
  grid-column: start / end; /* Spans the entire width */
  grid-row: center / bottom;
  background-color: #e74c3c;
}

// Example 5: Grid gap and alignment
/* HTML */
<div class="grid-alignment">
  <div class="align-item">1</div>
  <div class="align-item">2</div>
  <div class="align-item">3</div>
  <div class="align-item">4</div>
  <div class="align-item">5</div>
  <div class="align-item">6</div>
</div>

/* CSS */
.grid-alignment {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  
  /* Grid gap properties */
  column-gap: 20px; /* Space between columns */
  row-gap: 30px; /* Space between rows */
  /* gap: 30px 20px; */ /* Shorthand for row-gap column-gap */
  
  /* Grid container alignment properties */
  justify-content: space-around; /* Horizontal alignment of the grid */
  align-content: center; /* Vertical alignment of the grid */
  
  /* Default alignment for all grid items */
  justify-items: center; /* Horizontal alignment within grid cells */
  align-items: center; /* Vertical alignment within grid cells */
  
  height: 400px;
  background-color: #f5f5f5;
  padding: 20px;
}

.align-item {
  width: 50px;
  height: 50px;
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}

/* Individual item alignment overrides */
.align-item:nth-child(3) {
  /* Individual alignment for this item */
  justify-self: end; /* Horizontal alignment */
  align-self: start; /* Vertical alignment */
  background-color: #e74c3c;
}

// Example 6: Grid vs Flexbox usage
/* HTML */
<div class="comparison">
  <div class="grid-example">
    <h3>Grid Layout (2D)</h3>
    <div class="grid-demo">
      <div class="demo-item">1</div>
      <div class="demo-item">2</div>
      <div class="demo-item">3</div>
      <div class="demo-item">4</div>
      <div class="demo-item">5</div>
      <div class="demo-item">6</div>
    </div>
  </div>
  
  <div class="flex-example">
    <h3>Flexbox Layout (1D)</h3>
    <div class="flex-demo">
      <div class="demo-item">1</div>
      <div class="demo-item">2</div>
      <div class="demo-item">3</div>
      <div class="demo-item">4</div>
      <div class="demo-item">5</div>
      <div class="demo-item">6</div>
    </div>
  </div>
</div>

/* CSS */
.comparison {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

/* Grid example */
.grid-demo {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 80px);
  gap: 10px;
  background-color: #f5f5f5;
  padding: 10px;
}

/* Flexbox example */
.flex-demo {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #f5f5f5;
  padding: 10px;
}

.flex-demo .demo-item {
  flex: 1 1 calc(33.333% - 10px);
  min-width: calc(33.333% - 10px);
  height: 80px;
}

.demo-item {
  background-color: #3498db;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
}

/* Masonry-style grid using CSS Grid and auto-placement */
.masonry {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-auto-rows: 10px;
  gap: 16px;
}
.masonry-item {
  background: #dfe6e9;
  border-radius: 8px;
  padding: 1em;
  box-shadow: 0 2px 8px rgba(44,62,80,0.10);
  grid-row: span var(--rows, 20);
}
/* Example: set --rows dynamically with JS for true masonry effect */`,

      "CSS Pseudo-classes and Pseudo-elements": `
// Example 1: Structural pseudo-classes
/* HTML structure for examples */
<ul class="list">
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
  <li>Fourth item</li>
  <li>Fifth item</li>
</ul>

/* First and last child */
.list li:first-child {
  font-weight: bold;
  color: #2c3e50;
}

.list li:last-child {
  font-style: italic;
  color: #e74c3c;
}

/* nth-child selectors */
.list li:nth-child(odd) {
  background-color: #f2f2f2;
}

.list li:nth-child(even) {
  background-color: #e6e6e6;
}

/* Specific position */
.list li:nth-child(3) {
  text-decoration: underline;
}

/* Formula-based selection */
.list li:nth-child(3n+1) {
  border-left: 3px solid #3498db;
}

// Example 2: State-based pseudo-classes
/* Links and interaction states */
a:link {
  color: #3498db;
  text-decoration: none;
}

a:visited {
  color: #9b59b6;
}

a:hover {
  color: #2980b9;
  text-decoration: underline;
}

a:active {
  color: #e74c3c;
}

/* Target element (when URL has #element-id) */
#section1:target {
  background-color: #fffde7;
  padding: 15px;
  border-left: 3px solid #ffc107;
}

/* Focus state for interactive elements */
input:focus {
  outline: 2px solid #3498db;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}
// Example 3: Form-related pseudo-classes
/* Form element states */
input:disabled {
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  color: #999;
}

input:enabled {
  border: 1px solid #3498db;
}

/* Checkbox and radio states */
input[type="checkbox"]:checked + label {
  font-weight: bold;
  color: #2c3e50;
}

/* Validation states */
input:valid {
  border-color: #2ecc71;
}

input:invalid {
  border-color: #e74c3c;
}

/* Optional and required fields */
input:required {
  border-left: 4px solid #e74c3c;
}

input:optional {
  border-left: 4px solid #3498db;
}

// Example 4: Pseudo-element syntax
/* Basic pseudo-elements */
p::first-line {
  font-weight: bold;
  color: #2c3e50;
}

p::first-letter {
  font-size: 2em;
  color: #3498db;
  float: left;
  margin-right: 5px;
}

/* Selection styling */
::selection {
  background-color: #3498db;
  color: white;
}

// Example 5: Generated content with pseudo-elements
/* Adding content before and after elements */
.note::before {
  content: "📝 Note: ";
  font-weight: bold;
}

.external-link::after {
  content: " ↗";
  font-size: 0.8em;
}

/* Decorative elements */
.fancy-title::before,
.fancy-title::after {
  content: "";
  display: inline-block;
  width: 30px;
  height: 1px;
  background-color: #3498db;
  margin: 0 10px;
  vertical-align: middle;
}

/* Tooltips with attr() */
[data-tooltip]::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 10px;
  background-color: #2c3e50;
  color: white;
  border-radius: 4px;
  font-size: 0.8em;
  opacity: 0;
  transition: opacity 0.3s;
}

[data-tooltip]:hover::before {
  opacity: 1;
}

// Example 6: Common use cases
/* Clearfix hack */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}

/* Custom list bullets */
ul.custom-bullets li {
list-style: none;
  position: relative;
  padding-left: 20px;
}

ul.custom-bullets li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #3498db;
}

/* Styling form placeholders */
input::placeholder {
  color: #95a5a6;
  font-style: italic;
} `,

   "CSS Tables and Lists Styling": `
// Example 1: Table layout properties
/* Basic table styling */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

/* Table layout property */
.fixed-layout {
  table-layout: fixed;
}

.auto-layout {
  table-layout: auto;
}

// Example 2: Border collapse and spacing
/* Border collapse */
.separate-borders {
  border-collapse: separate;
  border-spacing: 5px;
  border: 1px solid #ccc;
}

.separate-borders th,
.separate-borders td {
  border: 1px solid #3498db;
}

/* Cell spacing with border-spacing */
.custom-spacing {
  border-collapse: separate;
  border-spacing: 10px 5px; /* horizontal vertical */
}

// Example 3: Responsive tables
/* Responsive table with horizontal scroll */
.table-container {
  overflow-x: auto;
  max-width: 100%;
}

/* Responsive table with data attributes for small screens */
@media (max-width: 600px) {
  .responsive-table thead {
    display: none;
  }
  
  .responsive-table tr {
    display: block;
    margin-bottom: 15px;
    border: 1px solid #ddd;
  }
  
  .responsive-table td {
    display: block;
    text-align: right;
    border-bottom: 1px dotted #ccc;
    position: relative;
    padding-left: 50%;
  }
  
  .responsive-table td:before {
    content: attr(data-label);
    position: absolute;
    left: 15px;
    font-weight: bold;
  }
}

// Example 4: List style properties
/* Basic list styling */
ul.custom-list {
  list-style-type: square;
  padding-left: 20px;
}

ol.custom-ordered {
  list-style-type: lower-roman;
  padding-left: 20px;
}

/* Custom list position */
.inside-list {
  list-style-position: inside;
}

.outside-list {
  list-style-position: outside;
}

// Example 5: Custom list markers
/* Using images as markers */
.image-markers {
  list-style-image: url('bullet.png');
}

/* Using custom markers with ::marker */
.custom-markers li::marker {
  content: '👉 ';
  color: #3498db;
}

/* Using pseudo-elements for complete control */
.advanced-markers {
  list-style: none;
  padding-left: 0;
}

.advanced-markers li {
  padding-left: 25px;
  position: relative;
}

.advanced-markers li:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
  height: 10px;
  background-color: #3498db;
  border-radius: 50%;
}

// Example 6: Nested lists
/* Styling nested lists */
.nested-list ul {
  margin: 10px 0;
  padding-left: 20px;
}

.nested-list ul li {
  margin-bottom: 5px;
}

/* Different markers for different levels */
.multi-level {
  list-style-type: disc;
}

.multi-level ul {
  list-style-type: circle;
}

.multi-level ul ul {
  list-style-type: square;
}

/* Indentation for nested lists */
.indented-list ul {
  padding-left: 20px;
}

.indented-list ul ul {
  padding-left: 30px;
}

.indented-list ul ul ul {
  padding-left: 40px;
}
`,
      "CSS Forms and Input Styling": `
// Example 1: Basic form styling
/* Form layout with flexbox */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 0 auto;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Form group for label and input */
.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

/* Label styling */
label {
  font-weight: 600;
  color: #333;
  font-size: 0.9rem;
}

// Example 2: Input field styling
/* Basic input styling */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="number"],
input[type="date"],
textarea,
select {
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  color: #333;
  background-color: white;
  width: 100%;
  transition: border-color 0.3s, box-shadow 0.3s;
}

/* Focus state */
input:focus,
textarea:focus,
select:focus {
  border-color: #4a90e2;
  outline: none;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.25);
}

// Example 3: Form validation styling
/* Valid state */
input:valid {
  border-color: #28a745;
}

/* Invalid state */
input:invalid:not(:placeholder-shown) {
  border-color: #dc3545;
}

/* Error message */
.error-message {
  color: #dc3545;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

/* Success message */
.success-message {
  color: #28a745;
  font-size: 0.8rem;
  margin-top: 0.25rem;
}

// Example 4: Custom checkboxes and radio buttons
/* Hide default checkbox/radio */
.custom-control input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Custom checkbox/radio container */
.custom-control {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  user-select: none;
}

/* Custom checkbox/radio indicator */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 4px; /* Square for checkbox */
}

/* Radio button specific */
.radio .checkmark {
  border-radius: 50%; /* Circle for radio */
}

/* Hover state */
.custom-control:hover input ~ .checkmark {
  background-color: #ccc;
}

/* Checked state */
.custom-control input:checked ~ .checkmark {
  background-color: #4a90e2;
}

/* Checkmark/indicator */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.custom-control input:checked ~ .checkmark:after {
  display: block;
}

/* Checkbox checkmark style */
.checkbox .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

/* Radio button indicator style */
.radio .checkmark:after {
  top: 6px;
  left: 6px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

// Example 5: Custom select styling
/* Custom select container */
.select-container {
  position: relative;
  display: inline-block;
  width: 100%;
}

/* Custom select styling */
.select-container select {
  appearance: none;
  -webkit-appearance: none;
  padding-right: 2.5rem; /* Space for the arrow */
}

/* Custom arrow */
.select-container::after {
  content: "";
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #333;
  pointer-events: none;
}

// Example 6: Form button styling
/* Primary button */
.btn-primary {
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background-color: #3a7bc8;
}

.btn-primary:active {
  transform: translateY(1px);
}

/* Secondary button */
.btn-secondary {
  background-color: transparent;
  color: #4a90e2;
  border: 1px solid #4a90e2;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.btn-secondary:hover {
  background-color: #4a90e2;
  color: white;
}

/* Disabled button */
.btn-primary:disabled,
.btn-secondary:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
`,

  "CSS Navigation and Menu Design": `
// Example 1: Basic horizontal navigation
/* HTML structure */
<nav class="main-nav">
  <ul>
    <li><a href="#" class="active">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Portfolio</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

/* CSS */
.main-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
}

.main-nav li {
  margin: 0;
}

.main-nav a {
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
  transition: background-color 0.3s;
}

.main-nav a:hover,
.main-nav a.active {
  background-color: #1abc9c;
}

// Example 2: Dropdown menu
/* HTML structure */
<nav class="dropdown-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li class="dropdown">
      <a href="#" class="dropdown-toggle">Products</a>
      <ul class="dropdown-menu">
        <li><a href="#">Category 1</a></li>
        <li><a href="#">Category 2</a></li>
        <li><a href="#">Category 3</a></li>
      </ul>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

/* CSS */
.dropdown-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #2c3e50;
  display: flex;
}

.dropdown-nav li {
  position: relative;
}

.dropdown-nav a {
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 200px;
  background-color: #34495e;
  display: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu a {
  padding: 0.75rem 1.5rem;
}

.dropdown-menu a:hover {
  background-color: #1abc9c;
}

// Example 3: Responsive mobile menu with hamburger icon
/* HTML structure */
<nav class="mobile-nav">
  <div class="logo">Brand</div>
  <input type="checkbox" id="menu-toggle" class="menu-toggle">
  <label for="menu-toggle" class="menu-icon">
    <span></span>
  </label>
  <ul class="menu">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

/* CSS */
.mobile-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #2c3e50;
  color: white;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.menu-toggle {
  display: none;
}

.menu-icon {
  display: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-icon span,
.menu-icon span::before,
.menu-icon span::after {
  display: block;
  width: 25px;
  height: 3px;
  background-color: white;
  position: relative;
  transition: all 0.3s ease-in-out;
}

.menu-icon span::before,
.menu-icon span::after {
  content: "";
  position: absolute;
}

.menu-icon span::before {
  top: -8px;
}

.menu-icon span::after {
  top: 8px;
}

.menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a {
  display: block;
  padding: 0.5rem 1rem;
  color: white;
  text-decoration: none;
}

.menu a:hover {
  color: #1abc9c;
}

@media (max-width: 768px) {
  .menu-icon {
    display: block;
  }
  
  .menu {
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: #2c3e50;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
  }
  
  .menu-toggle:checked ~ .menu {
    max-height: 300px;
  }
  
  .menu-toggle:checked ~ .menu-icon span {
    background-color: transparent;
  }
  
  .menu-toggle:checked ~ .menu-icon span::before {
    transform: rotate(45deg);
    top: 0;
  }
  
  .menu-toggle:checked ~ .menu-icon span::after {
    transform: rotate(-45deg);
    top: 0;
  }
  
  .menu li {
    width: 100%;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  
  .menu a {
    padding: 1rem;
  }
}

// Example 4: Mega menu
/* HTML structure */
<nav class="mega-nav">
  <ul>
    <li><a href="#">Home</a></li>
    <li class="mega-dropdown">
      <a href="#">Products</a>
      <div class="mega-menu">
        <div class="mega-menu-column">
          <h3>Category 1</h3>
          <ul>
            <li><a href="#">Product 1.1</a></li>
            <li><a href="#">Product 1.2</a></li>
            <li><a href="#">Product 1.3</a></li>
          </ul>
        </div>
        <div class="mega-menu-column">
          <h3>Category 2</h3>
          <ul>
            <li><a href="#">Product 2.1</a></li>
            <li><a href="#">Product 2.2</a></li>
            <li><a href="#">Product 2.3</a></li>
          </ul>
        </div>
        <div class="mega-menu-column">
          <h3>Featured</h3>
          <div class="featured-product">
            <img src="product.jpg" alt="Featured Product">
            <p>Special offer</p>
          </div>
        </div>
      </div>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

/* CSS */
.mega-nav {
  background-color: #2c3e50;
}

.mega-nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.mega-nav li {
  position: relative;
}

.mega-nav a {
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  text-decoration: none;
}

.mega-dropdown:hover > a {
  background-color: #1abc9c;
}

.mega-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  min-width: 600px;
  background-color: white;
  display: flex;
  padding: 1.5rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 10;
}

.mega-dropdown:hover .mega-menu {
  opacity: 1;
  visibility: visible;
}

.mega-menu-column {
  flex: 1;
  padding: 0 1rem;
}

.mega-menu-column h3 {
  color: #2c3e50;
  margin-top: 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.mega-menu-column ul {
  display: block;
  margin: 0;
  padding: 0;
}

.mega-menu-column li {
  margin: 0.5rem 0;
}

.mega-menu-column a {
  color: #333;
  padding: 0.25rem 0;
}

.mega-menu-column a:hover {
  color: #1abc9c;
}

.featured-product img {
  max-width: 100%;
  border-radius: 4px;
  margin-bottom: 0.5rem;
}

// Example 5: Sidebar navigation
/* HTML structure */
<div class="sidebar">
  <div class="sidebar-header">
    <h3>Dashboard</h3>
  </div>
  <nav class="sidebar-nav">
    <ul>
      <li>
        <a href="#" class="active">
          <i class="icon-dashboard"></i>
          <span>Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i class="icon-users"></i>
          <span>Users</span>
        </a>
      </li>
      <li class="has-submenu">
        <a href="#">
          <i class="icon-settings"></i>
          <span>Settings</span>
          <i class="icon-chevron-down"></i>
        </a>
        <ul class="submenu">
          <li><a href="#">Profile</a></li>
          <li><a href="#">Security</a></li>
          <li><a href="#">Preferences</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <i class="icon-help"></i>
          <span>Help</span>
        </a>
      </li>
    </ul>
  </nav>
</div>

/* CSS */
.sidebar {
  width: 250px;
  height: 100vh;
  background-color: #2c3e50;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.sidebar-header {
  padding: 1.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.sidebar-nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar-nav a {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: all 0.3s;
}

.sidebar-nav a:hover,
.sidebar-nav a.active {
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
}

.sidebar-nav i {
  margin-right: 0.75rem;
}

.sidebar-nav .icon-chevron-down {
  margin-left: auto;
  transition: transform 0.3s;
}

.has-submenu.open .icon-chevron-down {
  transform: rotate(180deg);
}

.submenu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
  background-color: rgba(0, 0, 0, 0.1);
}

.has-submenu.open .submenu {
  max-height: 500px;
}

.submenu a {
  padding-left: 3.25rem;
}

// Example 6: Breadcrumb navigation
/* HTML structure */
<nav aria-label="Breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></lzi>
    <li class="breadcrumb-item"><a href="#">Products</a></li>
    <li class="breadcrumb-item"><a href="#">Electronics</a></li>
    <li class="breadcrumb-item active" aria-current="page">Smartphones</li>
  </ol>
</nav>

/* CSS */
.breadcrumb {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0.75rem 1rem;
  background-color: #f8f9fa;
  border-radius: 0.25rem;
}

.breadcrumb-item {
  display: flex;
  align-items: center;
}

.breadcrumb-item + .breadcrumb-item {
  padding-left: 0.5rem;
}

.breadcrumb-item + .breadcrumb-item::before {
  display: inline-block;
  padding-right: 0.5rem;
  color: #6c757d;
  content: "/";
}

.breadcrumb-item a {
  color: #007bff;
  text-decoration: none;
}

.breadcrumb-item a:hover {
  text-decoration: underline;
}

.breadcrumb-item.active {
  color: #6c757d;
}

// Example 7: Pagination
/* HTML structure */
<nav aria-label="Page navigation">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

/* CSS */
.pagination {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.page-item {
  margin: 0 0.125rem;
}

.page-link {
  display: block;
  padding: 0.5rem 0.75rem;
  color: #007bff;
  background-color: #fff;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  text-decoration: none;
  transition: all 0.3s;
}

.page-link:hover {
  color: #0056b3;
  background-color: #e9ecef;
  border-color: #dee2e6;
}

.page-item.active .page-link {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}

.page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #fff;
  border-color: #dee2e6;
}`,

   "CSS Card and Component Design": `
// Example 1: Card Layout
   /* HTML */
<div class="card">
 <img src="image.jpg" alt="Card image" class="card-image">
 <div class="card-content">
 <h3 class="card-title">Card Title</h3>
 <p class="card-description">Card description text.</p>
 <button class="card-button">Learn More</button>
 </div>
</div>

   /* CSS */
.card {
 background: white;
 border-radius: 12px;
 overflow: hidden;
 max-width: 320px;
 box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
 transition: transform 0.3s ease;
}
.card-image {
 width: 100%;
 height: 200px;
 object-fit: cover;
}
.card-content {
 padding: 20px;
}
.card-title {
 margin: 0 0 12px 0;
 font-size: 1.25rem;
 font-weight: 600;
}
.card-button {
 background: #007bff;
 color: white;
 border: none;
 padding: 10px 20px;
 border-radius: 6px;
 cursor: pointer;
 transition: background-color 0.2s ease;
}
.card-button:hover {
 background: #0056b3;
}

// Example 2: Component Structure
   /* HTML */
   <div class="card">
    <img src="https://via.placeholder.com/300x150" alt="Product">
    <div class="card-content">
      <h3>Card Title</h3>
      <p>Card with image, heading, and description inside structured divs.</p>
    </div>
  </div>

  /* CSS */
.card {
  width: 300px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #ccc;
}
.card img {
  width: 100%;
  height: auto;
}
.card-content {
  padding: 15px;
}
.card-content h3 {
  margin: 0 0 10px;
}

// Example 3: Hover Effects
 /* HTML */
   <div class="card">
    <h3>Hover Me</h3>
    <p>The card moves up and gets a shadow when hovered.</p>
  </div>

  /* CSS */
  .card {
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ddd;
  transition: transform 0.3s, box-shadow 0.3s;
}
.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 15px rgba(0,0,0,0.5);

// Example 4: Shadow Effects
   /* HTML */
<div class="card">
    <h3>Shadow Example</h3>
    <p>Box shadows make cards look elevated and separate from background.</p>
  </div>

   /* CSS */
 .card {
  width: 280px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5);
}`, 

    "CSS Specificity and Cascade": `
// Example 1: Specificity Calculation
  /* HTML */
 <p id="unique" class="text">Specificity decides which style wins!</p>

  /* CSS */
p { color: blue; }          /* Element selector → specificity (0,0,0,1) */
.text { color: green; }     /* Class selector → specificity (0,0,1,0) */
#unique { color: red; }     /* ID selector → specificity (0,1,0,0) */

// Example 2: Cascade Order
  /* HTML */
 <p>The cascade gives priority to the last rule when specificity is equal.</p>
  
 /* CSS */
 p { color: blue; }          /* Rule 1 */
p { color: green; }         /* Rule 2 - later in source */

// Example 3: !important Rule
  /* HTML */
   <p>This paragraph stays blue because of !important.</p>

  /* CSS */
p { color: blue !important; }
p { color: red; }

// Example 4: Inheritance
  /* HTML */
 <p>This text inherits body styles but <span>this part is red</span>.</p>

  /* CSS */
body {
  color: darkslategray;   /* Inherited by child elements */
  font-family: Arial;
}
span {
  color: red;  /* Overrides inherited color */
}

// Example 5: Selector Specificity
  /* HTML */
 <div id="main" class="article">
    <p>Red wins due to highest specificity combination.</p>
  </div>

  /* CSS */
p { color: blue; }                  /* Low specificity */
.article p { color: green; }        /* Higher (class + element) */
#main .article p { color: red; }    /* Highest (ID + class + element) */`,

  "CSS Transitions, Animations and Effects": `
// Example 1: Transition properties
/* HTML */ 
 <button class="button">Hover Me</button>

/* CSS */ 
.button {
  background: royalblue;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: background 0.5s ease, transform 0.3s ease;
}
.button:hover {
  background: darkblue;
  transform: scale(1.1);
}

// Example 2:  Animation Keyframes
/* HTML */ 
 <div class="box"> Keyframes</div>

/* CSS */ 
@keyframes bounce {
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-30px); }
  100% { transform: translateY(0); }
}
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  margin: 50px auto;
  animation: bounce 1s infinite;
}

// Example 3: Timing functions
/* HTML */ 
<div class="box ease">ease</div>
  <div class="box linear">liner</div>
  <div class="box ease-in">ease-in</div>
  <div class="box ease-out">ease-out</div>
  <div class="box ease-in-out">ease-in-out</div>

/* CSS */ 
.box {
  width: 80px;
  height: 80px;
  margin: 40px;
  background: teal;
  transition: transform 2s;
}
.ease   { transition-timing-function: ease; }
.linear { transition-timing-function: linear; }
.ease-in { transition-timing-function: ease-in; }
.ease-out { transition-timing-function: ease-out; }
.ease-in-out { transition-timing-function: ease-in-out; }
.box:hover { transform: translateX(200px); }

// Example 4: Animation properties
/* HTML */ 
 <div class="box">Fade In</div>

/* CSS */ 
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.box {
  width: 150px;
  height: 100px;
  background: purple;
  color: white;
  text-align: center;
  line-height: 100px;
  font-weight: bold;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
}`,

    "CSS Transformations(2D & 3D)": `
// Example 1: Transform properties
 /*HTML*/
<div class="box">Transform</div>

  /*CSS*/
 .box {
  width: 120px;
  height: 120px;
  background: steelblue;
  margin: 40px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition: transform 0.5s ease;
}
.box:hover {
  transform: rotate(45deg) scale(1.2);
}

// Example 2: 2D and 3D transforms
 /*HTML*/
<div class="container">
    <div class="box rotate2d">Rotate</div>
    <div class="box scale2d">Scale</div>
    <div class="box skew2d">Skew</div>
    <div class="box translate2d">Move</div>
    <div class="box rotate3d">3D Flip</div>
  </div>

  /*CSS*/
.container {
  display: flex;
  gap: 20px;
  margin: 40px;
}
.box {
  width: 100px;
  height: 100px;
  background: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.6s ease;
}
.rotate2d:hover { transform: rotate(45deg); }
.scale2d:hover  { transform: scale(1.3); }
.skew2d:hover   { transform: skewX(20deg); }
.translate2d:hover { transform: translate(40px, 20px); }
.rotate3d:hover { transform: rotateY(180deg); }

// Example 3: Transform origin
 /*HTML*/
 <div class="box top-left"></div>
  <div class="box center"></div>
  <div class="box bottom-right"></div>

  /*CSS*/
 .box {
  width: 120px;
  height: 120px;
  background: purple;
  margin: 50px;
  transition: transform 0.6s;
}
.top-left:hover { transform-origin: top left; transform: rotate(45deg); }
.center:hover { transform-origin: center; transform: rotate(45deg); }
.bottom-right:hover { transform-origin: bottom right; transform: rotate(45deg); }

// Example 4: Perspective and backface 
 /*HTML*/
 <div class="scene">
    <div class="card">
      <div class="front">Front</div>
      <div class="back">Back</div>
    </div>
  </div>

  /*CSS*/
.scene {
  perspective: 800px;
  width: 200px;
  height: 200px;
  margin: 80px auto;
}
.card {
  width: 100%;
  height: 100%;
  background: lightseagreen;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 1s;
  transform-style: preserve-3d;
}
.card:hover {
  transform: rotateY(180deg);
}
.card .back {
  position: absolute;
  width: 100%;
  height: 100%;
  background: darkslategray;
  transform: rotateY(180deg);
  backface-visibility: hidden;
}
.card .front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}`, 

  "CSS Media Queries": `
// Example 1: Media query syntax
   /* HTML */
<body>
  <h2>Resize the window</h2>
  <p>The background color changes if screen width ≤ 600px.</p>
</body>

   /* CSS */
body {
  background: lightblue;
}

/* Media query syntax */
@media (max-width: 600px) {
  body {
    background: lightcoral;
  }
}

// Example 2: Viewport and device features
   /* HTML */
 <body>
  <p>Resize window or rotate device to see changes.</p>
</body>

   /* CSS */
   p {
  font-size: 20px;
}

/* Change font-size on smaller screens */
@media (max-width: 800px) {
  p { font-size: 16px; }
}

/* Change on portrait orientation */
@media (orientation: portrait) {
  body { background: lightgreen; }
}

/* High resolution (retina) displays */
@media (min-resolution: 2dppx) {
  body { border: 5px solid orange; }
}

// Example 3: Breakpoint strategies
   /* HTML */
<div class="container">
    <h2>Responsive Breakpoints</h2>
    <p>Resize to see background colors change at 1200px, 768px, and 480px.</p>
  </div>

   /* CSS */
   .container {
  width: 90%;
  margin: auto;
  background: lightgray;
  padding: 20px;
  text-align: center;
}

/* Desktop first (large screens) */
@media (max-width: 1200px) {
  .container { background: lightblue; }
}
@media (max-width: 768px) {
  .container { background: lightgreen; }
}
@media (max-width: 480px) {
  .container { background: lightcoral; }
}

// Example 4: Mobile-first approach
   /* HTML */
 <div class="container">
    <h2>Mobile-first Design</h2>
    <p>Start small, then progressively enhance for larger screens.</p>
  </div>

   /* CSS */
/* Base styles for mobile (default) */
.container {
  font-size: 14px;
  padding: 10px;
  background: lightcoral;
}

/* Larger screens override */
@media (min-width: 600px) {
  .container { font-size: 16px; background: lightgreen; }
}
@media (min-width: 900px) {
  .container { font-size: 18px; background: lightblue; }
}`,

   "CSS Variables and Custom Properties": `
// Example 1: CSS custom properties syntax
  /* HTML */  
  <body>
  <h2>CSS Variables Example</h2>
  <p>The same color and font-size are used across multiple elements.</p>
</body>

    /* CSS */
    /* Declaring variables inside :root for global scope */
:root {
  --main-color: #3498db;
  --font-size: 18px;
}

body {
  background-color: var(--main-color);
  font-size: var(--font-size);
}

h2 {
  color: var(--main-color);

// Example 2: Variable scope and inheritance
  /* HTML */
 <section>
    <h2>Scoped Variable</h2>
    <p>This text inside section is dark green.</p>
  </section>
  <p>This paragraph outside section is black.</p>

  /* CSS */
  :root {
  --text-color: black; /* Global scope */
}

section {
  --text-color: darkgreen; /* Local scope inside section */
  color: var(--text-color);
}

p {
  color: var(--text-color); /* Falls back to global if not overridden */
}

// Example 3: Fallback values
  /* HTML */
    <h2>Fallback Example</h2>
  <p>This paragraph uses the defined variable.</p>

    /* CSS */
:root {
  --main-color: #e74c3c;
}

h2 {
  color: var(--undefined-color, blue); /* Fallback to blue if undefined */
}

p {
  color: var(--main-color, green); /* Will use defined value (#e74c3c) */
}
  
// Example 4: Dynamic updates with JavaScript
  /* HTML and CSS*/
<!DOCTYPE html>
<html>
<head>
<style>
:root {
  --bg-color: lightblue;
}

body {
  background-color: var(--bg-color);
  transition: background-color 0.5s;
}

button {
  margin: 20px;
  padding: 10px 20px;
}
</style>
</head>
<body>
  <h2>Dynamic Variables</h2>
  <button onclick="changeTheme()">Change Theme</button>

  <script>
    function changeTheme() {
      // Access the root element
      document.documentElement.style.setProperty('--bg-color', 'lightcoral');
    }
  </script>
</body>
</html>`,

   "CSS Gradients and Patterns": `
// Example 1: Linear gradients
   /* HTML */
  <h2>Linear Gradient</h2>
  <div></div>

   /* CSS */
div {
  width: 300px;
  height: 150px;
  background: linear-gradient(to right, #3498db, #9b59b6);
  border: 2px solid black;
}

// Example 2: Radial gradients
   /* HTML */
 <h2>Radial Gradient</h2>
  <div></div>

   /* CSS */
div {
  width: 300px;
  height: 150px;
  background: radial-gradient(circle, #f39c12, #e74c3c);
  border: 2px solid black;
}

// Example 3: Conic gradients
   /* HTML */
 <h2>Conic Gradient</h2>
  <div></div>

   /* CSS */
div {
  width: 300px;
  height: 150px;
  background: conic-gradient(from 0deg, #1abc9c, #3498db, #9b59b6, #1abc9c);
  border: 2px solid black;
}

// Example 4: Gradient Color Stops
   /* HTML */
<h2>Gradient with Color Stops</h2>
  <div></div>

   /* CSS */
div {
  width: 300px;
  height: 150px;
  background: linear-gradient(to right, red 20%, yellow 40%, green 60%, blue 100%);
}

// Example 5: Repeating Gradients
   /* HTML */
 <h2>Repeating Linear Gradient</h2>
  <div></div>

    /* CSS */
div {
  width: 300px;
  height: 150px;
  background: repeating-linear-gradient(
    45deg,
    #3498db,
    #3498db 20px,
    #2ecc71 20px,
    #2ecc71 40px
  );
}

// Example 6: CSS Patterns (Using Gradients)
    /* HTML */
<h2>Checkerboard Pattern</h2>
  <div></div>

     /* CSS */
div {
  width: 200px;
  height: 200px;
  background: 
    linear-gradient(45deg, #000 25%, transparent 25%) -25px 0,
    linear-gradient(-45deg, #000 25%, transparent 25%) -25px 0,
    linear-gradient(45deg, transparent 75%, #000 75%) -25px 0,
    linear-gradient(-45deg, transparent 75%, #000 75%) -25px 0;
  background-size: 50px 50px;
  background-color: #fff;
}`,   

  "CSS Box Shadow and Text Effects": `
// Example 1: Box shadow properties
    /* HTML */
 <div class="card">Box shadow creates depth.</div>

   /* CSS */
  .card {
  width: 200px;
  padding: 20px;
  margin: 50px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
  
// Example 2: Multiple shadows
    /* HTML */
 <button class="button">Multiple Shadows</button>

    /* CSS */
  .button {
  padding: 15px 25px;
  background: #3498db;
  color: white;
  border: none;
  font-size: 18px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.3),
              -2px -2px 5px rgba(255,255,255,0.5);
}

// Example 3: Text shadow effects
    /* HTML */
 <h1>Text Shadow Effect</h1>

    /* CSS */
h1 {
  font-size: 50px;
  text-align: center;
  color: #222;
  text-shadow: 3px 3px 5px rgba(0,0,0,0.5);
}

// Example 4: Drop shadows
/* HTML */
<html>
 <body>
  <img src="https://via.placeholder.com/250" alt="Sample">
 </body>
</html>

  /* CSS */
  img {
  width: 250px;
  filter: drop-shadow(10px 10px 10px rgba(0,0,0,0.5));
}

// Example 5: Inner shadows
  /* HTML */
<html>
  <body>
  <input type="text" class="input-box" placeholder="Inner shadow">
</body>
</html>

  /* CSS */
  .input-box {
  width: 200px;
  padding: 15px;
  border: 1px solid #ccc;
  box-shadow: inset 3px 3px 6px rgba(0,0,0,0.3);
}`, 

   "CSS Filters and Blend Modes": `
// Example 1: Filter() functions on images
<!-- HTML -->
<img class="fx fx--demo" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=800" alt="Landscape" />

/* CSS */
.fx { width: 300px; display: block; border-radius: 8px; }
.fx--demo { filter: none; }
.fx--blur { filter: blur(4px); }
.fx--gray { filter: grayscale(100%); }
.fx--bright { filter: brightness(1.2) contrast(1.1); }
.fx--vintage { filter: sepia(0.7) saturate(0.7) hue-rotate(-10deg); }
.fx--shadow { filter: drop-shadow(8px 8px 12px rgba(0,0,0,.35)); }

// Example 2: Backdrop-filter (frosted glass)
<!-- HTML -->
<div class="hero">
  <div class="glass">
    <h2>Frosted panel</h2>
    <p>Readable over busy backgrounds.</p>
  </div>
  <img class="hero__bg" src="https://images.unsplash.com/photo-1517817748498-0e2d2f3ae80c?w=1200" alt="Bg" />
  </div>

/* CSS */
.hero { position: relative; min-height: 280px; overflow: hidden; }
.hero__bg { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.glass {
  position: relative; z-index: 1;
  margin: 2rem; padding: 1rem 1.25rem; border-radius: 12px;
  background: rgba(255,255,255,.2);
  -webkit-backdrop-filter: blur(12px) saturate(1.2);
  backdrop-filter: blur(12px) saturate(1.2);
  border: 1px solid rgba(255,255,255,.35);
  color: #102a43;
}

// Example 3: mix-blend-mode
<!-- HTML -->
<div class="mix-demo">
  <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800" alt="Mountains"/>
  <h1 class="mix-text">Blend</h1>
  </div>

/* CSS */
.mix-demo { position: relative; display: inline-block; }
.mix-demo img { display: block; width: 320px; border-radius: 8px; }
.mix-text { position: absolute; inset: 0; margin: 0;
  display: grid; place-items: center;
  font: 700 64px/1 system-ui; color: #fff;
  mix-blend-mode: difference; /* try: overlay, screen, multiply */
}

// Example 4: background-blend-mode
  /* Combine a gradient overlay with an image */
.card-bg {
  width: 320px; height: 200px; border-radius: 12px;
  background-image: url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800'),
                    linear-gradient(180deg, #0d6efd, #20c997);
  background-size: cover, cover; background-position: center;
  background-blend-mode: multiply; /* try: overlay, screen, soft-light */
}`, 

   "CSS Responsive Images": `
// Example 1: Responsive widths with srcset + sizes
<!-- HTML -->
<img
  src="/images/hero-800.jpg"
  srcset="/images/hero-400.jpg 400w, /images/hero-800.jpg 800w, /images/hero-1600.jpg 1600w"
  sizes="(max-width: 600px) 90vw, (max-width: 1024px) 70vw, 800px"
  alt="City skyline"/>

// Example 2: Next-gen formats + art direction with picture
<!-- HTML -->
<picture>
  <source type="image/avif" srcset="/images/hero-800.avif 800w, /images/hero-1600.avif 1600w" sizes="(max-width: 900px) 90vw, 800px">
  <source type="image/webp" srcset="/images/hero-800.webp 800w, /images/hero-1600.webp 1600w" sizes="(max-width: 900px) 90vw, 800px">
  <source media="(max-width: 600px)" srcset="/images/hero-portrait.jpg">
  <img src="/images/hero-800.jpg" alt="Hero" loading="lazy" decoding="async">
</picture>

// Example 3: object-fit and aspect-ratio for thumbnails
/* CSS */
.thumb { width: 160px; aspect-ratio: 4 / 3; object-fit: cover; border-radius: 8px; }
   `,

   "CSS Custom Fonts and Icon Fonts": `
// Example 1: @font-face with font-display
/* CSS */
@font-face {
  font-family: 'InterVar';
  src: url('/fonts/Inter-roman.var.woff2') format('woff2');
  font-weight: 100 900; font-style: normal; font-display: swap;
}
body { font-family: 'InterVar', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif; }

// Example 2: Preload critical font
<!-- HTML (in <head>) -->
<link rel="preload" href="/fonts/Inter-roman.var.woff2" as="font" type="font/woff2" crossorigin>

// Example 3: Icon font implementation
/* CSS */
@font-face {
  font-family: 'IconFont';
  src: url('/fonts/icons.woff2') format('woff2');
  font-weight: normal; font-style: normal; font-display: block;
}
.icon { font-family: 'IconFont'; speak: never; font-style: normal; font-weight: normal; line-height: 1; }
.icon--heart:before { content: "\e001"; }
.icon--star:before { content: "\e002"; }
   
/* (note: prefer SVG icons when possible)*/`,

   "CSS Modal and Popup Design": `
// Example 1: Accessible modal structure with overlay
<!-- HTML -->
<button class="btn" id="open">Open Modal</button>
<div class="overlay" hidden></div>
<div class="modal" role="dialog" aria-modal="true" aria-labelledby="m-title" hidden>
  <h2 id="m-title">Subscribe</h2>
  <p>Get product updates in your inbox.</p>
  <button class="btn" id="close">Close</button>
</div>

/* CSS */
.overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); backdrop-filter: blur(2px); }
.modal { position: fixed; inset: 50% auto auto 50%; transform: translate(-50%, -50%);
  width: min(90vw, 480px); padding: 1.25rem; border-radius: 12px; background: #fff;
  box-shadow: 0 10px 30px rgba(0,0,0,.2); opacity: 0; scale: .96; transition: opacity .2s, scale .2s;
}
.modal.is-open, .overlay.is-open { opacity: 1; }
.modal.is-open { scale: 1; }

// Example 2: Show/hide with a utility class (toggle via JS)
/* CSS (state classes) */
[hidden] { display: none !important; }
.is-open[hidden] { display: block !important; }
   `,

   "CSS Layout Patterns": `
// Example 1: Holy Grail layout with CSS Grid
/* HTML */
<header>Header</header>
<div class="hg">
  <aside class="hg__side">Left</aside>
  <main class="hg__main">Main</main>
  <aside class="hg__side">Right</aside>
</div>
<footer>Footer</footer>

/* CSS */
body { margin: 0; font-family: system-ui; }
header, footer { padding: 1rem; background: #0d6efd; color: #fff; }
.hg { display: grid; grid-template-columns: 200px 1fr 200px; gap: 1rem; padding: 1rem; }
.hg__side { background: #f3f4f6; border-radius: 8px; }
.hg__main { background: #fff; border-radius: 8px; min-height: 240px; }
@media (max-width: 900px) { .hg { grid-template-columns: 1fr; } }

// Example 2: Sticky footer
/* CSS */
.page { min-height: 100dvh; display: grid; grid-template-rows: auto 1fr auto; }

// Example 3: Sidebar layout with sticky nav
/* HTML */
<div class="layout">
  <aside class="layout__sidebar">Sidebar</aside>
  <main class="layout__main">Content</main>
</div>
/* CSS */
.layout { display: grid; grid-template-columns: 260px 1fr; gap: 1rem; }
.layout__sidebar { position: sticky; top: 1rem; align-self: start; height: max-content; }
@media (max-width: 900px) { .layout { grid-template-columns: 1fr; } }

// Example 4: Auto-fit card grid
.cards { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; }
.card { padding: 1rem; border-radius: 10px; background: #fff; box-shadow: 0 1px 4px rgba(0,0,0,.08); }

// Example 5: CSS-only masonry using columns
.masonry { columns: 240px; column-gap: 1rem; }
.masonry > * { break-inside: avoid; margin: 0 0 1rem; }
   `,

   "CSS Performance & Best Practices": `
// Example 1: Prefer class selectors and shallow specificity
/* CSS */
.btn { padding: .5rem .75rem; background: #0d6efd; color: #fff; border-radius: .5rem; }
/* Avoid deep descendant chains: .header .nav .menu .item a.active { ... } */

// Example 2: Animate transform/opacity for better performance
/* CSS */
@keyframes slideUp { from { transform: translateY(8px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
.toast { will-change: transform, opacity; animation: slideUp 220ms ease; }

// Example 3: Progressive enhancement with @supports
.card { display: block; }
@supports (display: grid) { .card { display: grid; grid-template-columns: 1fr 2fr; gap: 1rem; } }

// Example 4: Respect reduced motion
@media (prefers-reduced-motion: reduce) { * { animation-duration: 1ms !important; transition-duration: 1ms !important; } }

// Example 5: CSS variables for theme/scales
:root { --space-2: 8px; --radius-md: 10px; --primary: #0d6efd; }
.btn--themed { padding: var(--space-2) calc(var(--space-2) * 2); background: var(--primary); border-radius: var(--radius-md); }
/* Avoid @import in CSS; bundle assets; use caching and preloading wisely. */
   `, 




  };
  return examples[lessonTitle] || "/* Example code will be provided */";
}

const getCSSCodeExplanation = (lessonTitle) => {
  const explanations = {
       "Introduction to CSS": `
### Example 1 
**What is CSS and why is it used**
CSS (Cascading Style Sheets) is a styling language used to control the layout 
and appearance of web pages written in HTML or XML. It is used to separate the 
presentation of a document from its structure, making it easier to maintain and 
update the layout and design of a website.

**Key purposes of CSS**:
- Controls visual appearance (colors, fonts, layout, spacing)
- Enables responsive design for different screen sizes
- Maintains consistency across multiple web pages
- Reduces code duplication and improves maintainability
- Provides better user experience through visual hierarchy

### Example 2
**Ways to Include CSS**:
There are three main ways to add CSS to an HTML document:
- **Inline CSS**: \`Styles\` are applied directly to a single HTML element using the style attribute. 
This method is generally not recommended for large projects because it mixes content and presentation, 
making the code harder to maintain.

### Example 3 
**Internal CSS**: Styles are placed within a \`<style>\` tag in the \`<head>\` section of an HTML document. 
This is useful for styling a single page, but the styles can't be reused on other pages.

### Example 4 
**External CSS**: Styles are written in a separate \`.css\` file and linked to the HTML document using a \`<link>\` tag in the \`<head>\` section. 
This is the most common and recommended method as it promotes code reuse, makes pages load faster (as the CSS file can be cached by the browser),
and keeps the HTML clean


### Example 5 
**CSS Syntax and Rules**:
A CSS rule consists of a selector and a declaration block.
- The **selector** targets the HTML element(s) to be styled (e.g., \`p\`, \`h1\`, \`.class-name\`, \`#id-name\`).
- The **declaration block** contains one or more declarations enclosed in curly braces \`{}\`.
- Each **declaration** is a pair of a property and a value, separated by a colon \`:\`. Multiple declarations are separated by a semicolon \`;\`.

- \`h1\` is the **selector**.
- \`color\` and \`font-size\` are **properties**.
- \`blue\` and \`24px\` are **values**.

**How Browsers Apply CSS to HTML**
When a browser loads an HTML document, it reads the CSS styles and applies 
them to the corresponding elements on the page.

Browsers follow a systematic process to apply CSS styling to HTML elements:
- **Parse HTML**: Browser reads and creates the DOM (Document Object Model)
- **Parse CSS**: Browser reads CSS and creates the CSSOM (CSS Object Model)
- **Combine**: DOM and CSSOM are combined to create the Render Tree
- **Layout**: Browser calculates element positions and sizes
- **Paint**: Browser renders the visual elements on screen
The browser applies styles in order of specificity and source order.

### Example 6
**The Cascade and Specificity Basics**
**Code Explanation**
The "cascade" in CSS refers to how conflicting styles are resolved. 
When multiple CSS rules target the same element, the browser uses specificity, 
importance, and source order to determine which styles to apply.

Specificity Hierarchy (from lowest to highest):
- ID selectors (\`#\`): Highest specificity (value of 100).
- Class selectors (\`.\`), attribute selectors (\`[]\`), and pseudo-classes (\`:\`): Medium specificity (value of 10).
- Type selectors (\`h1\`) and pseudo-elements (\`::\`): Lowest specificity (value of 1).`,


    "CSS Fundamentals and Selectors": `
### Example 1 
**CSS Fundamentals and Selectors**:
CSS selectors are the patterns used to select the elements you want to style. Understanding how they work is crucial for efficient and maintainable code.
**CSS syntax and rules**:
A CSS rule consists of a **selector** and a **declaration** block. The **declaration** block contains one or more 
declarations, each with a property and a value.

**Explanation**
- \`h1\` is the selector, targeting all \`<h1>\` elements.
- \`{}\` encloses the declaration block.
- \`color\` and \`font-size\` are properties.
- \`#333\` and \`2em\` are values.
- Each declaration ends with a semicolon \`;\`.

### Example 2 
**Type, Class, and ID Selectors**
These are the most common selectors.
- **Type selector** targets elements by their HTML tag name.
- **Class selector** targets elements with a specific \`class\` attribute, prefixed with a dot (\`.\`).
- **ID selector targets** a single element with a unique \`id\` attribute, prefixed with a hash (\`#\`).

**Explanation**
- \`p\` selects both paragraphs.
- \`.intro\` selects only the second paragraph.
- \`#main-content\` selects the \`<div>\` with the \`id\` of \`main-content\`.

### Example 3 
Attribute Selectors and Combinators
Attribute selectors target elements based on their attributes and values. Combinators specify 
the relationship between selectors.
- \`[attribute]\` selects elements with the specified attribute.
- \`[attribute="value"]\` selects elements where the attribute has a specific value.
- **Descendant combinator** (\`    \` ) selects a child element within a parent.
- **Child combinator** (\`>\`) selects an immediate child.
- **Adjacent sibling combinator** (\`+\`) selects the element immediately following another (e.g., \`h2 + p\` selects the first \`<p>\` after an \`<h2>\`).
- **General sibling combinator** (\`~\`) selects all siblings that follow another (e.g., \`h2 ~ p\` selects all \`<p>\` elements that follow an \`<h2>\`).

**Explanation**
- \`a[target="_blank"]\` selects only the second link.
- \`ul li\` selects all \`<li>\` elements that are descendants of a \`<ul>\`.

### Example 4
**Pseudo-classes and Pseudo-elements:**  
- **Pseudo-classes** select elements in a specific state, such as \`:hover\` when the mouse is
over an element or \`:first-child\` for the first element among its siblings.
- **Pseudo-elements** style a specific part of an element, such as \`::before\` to insert content
before the element or \`::first-line\` to style the first line of text.

### Example 5 
- **Specificity** is the algorithm browsers use to determine which CSS rule is the most
relevant and should be applied. IDs are more specific than classes, which are more
specific than type selectors. Inline styles have the highest specificity.
- **Inheritance** is the mechanism by which some CSS properties, like \`color\` and \`font-family\`,
are passed down from a parent element to its children.
**Specificity Hierarchy (from lowest to highest)**:
- Type and pseudo-elements
- Class, attribute, and pseudo-classes
- ID selectors
- Inline styles

### Example 6 
- **CSS Reset** aims to remove all built-in browser styling. For example, margins, paddings,
and font-sizes of all elements are set to the same value.
- **CSS Normalization** aims to make built-in browser styling consistent across browsers. It
corrects common bugs and provides a clean slate for styling

### Example 7 
- **Avoid over-qualified selectors**: \`div.main-content\` is less efficient than \`.main-content\`.
- **Prefer classes over IDs for styling**: Classes are reusable and more flexible.
- **Keep selectors short and efficient**: Avoid long chains of selectors like \`#main #nav .menu￾item a\`.
- **Be mindful of specificity**: Use the lowest specificity possible to make overriding styles easier.
`,

     "CSS Units and Values": `
### Example 1
Absolute units have fixed sizes regardless of the viewport or parent element dimensions. They're useful when you need precise control over sizing.

**Key absolute units:**
- **Pixels (px)**: The most common unit for screens, represents one device pixel (though this varies with device pixel ratio)
- **Points (pt)**: Traditionally used in print, 1pt = 1/72 of an inch
- **Centimeters (cm)**: Physical measurement, useful for print stylesheets

Absolute units are less responsive by nature, so they're best used for:
- Fixed-size elements that shouldn't scale
- Print stylesheets where physical dimensions matter
- When pixel-perfect precision is required

### Example 2
Relative units scale based on other elements, making them essential for responsive design.

**Key relative units:**
- **em**: Relative to the font-size of the parent element
- **rem**: Relative to the font-size of the root element (html)
- **%**: Relative to the parent element's size

**When to use each:**
- **em**: Good for creating scalable components where elements should be proportional to their parent's font size
- **rem**: Better for consistent scaling throughout the document, avoiding compounding issues
- **%**: Ideal for responsive layouts and widths that need to adapt to their container

### Example 3
Viewport units are relative to the browser viewport dimensions, making them powerful for responsive design.

**Key viewport units:**
- **vw**: 1% of viewport width
- **vh**: 1% of viewport height
- **vmin**: 1% of the smaller viewport dimension
- **vmax**: 1% of the larger viewport dimension

Viewport units are excellent for:
- Full-screen layouts
- Text that scales with the viewport
- Creating proportional spacing across different screen sizes
- Hero sections that need to fill the screen

### Example 4
The \`calc()\` function allows mathematical expressions with different units, enabling dynamic calculations in CSS.

**Key features:**
- Combines different unit types (e.g., \`calc(100% - 20px)\`)
- Supports basic operations: addition (+), subtraction (-), multiplication (*), and division (/)
- Spaces are required around + and - operators

**Common use cases:**
- Creating flexible layouts with fixed margins/padding
- Combining fixed and fluid measurements
- Creating responsive typography that scales with viewport but has minimum/maximum sizes

### Example 5
Understanding how units relate to each other is important for consistent design.

**Common conversions:**
- **16px = 1rem** (with default browser settings)
- **100% = 1** (for opacity, scale, etc.)
- **360deg = 2π rad** (for rotations)

**Best practices for unit selection:**
- Use relative units (rem, em, %) for most measurements to support responsive design
- Use px for borders and small, fixed details
- Use viewport units for layouts that need to scale with screen size
- Use calc() to combine different unit types when needed
- Consider accessibility implications when setting font sizes (avoid using absolute units for text)`,

    "CSS Box Model and Layout": `
### Example 1
The CSS box model is fundamental to understanding how elements are sized and spaced on
a web page. Every element is essentially a rectangular box with content, padding, border,
and margin.

***The CSS box model consists of four components***:
- **Content**: The actual content of the element (text, images, etc.)
- **Padding**: The space between the content and the border
- **Border**: The line around the padding and content
- **Margin**: The space outside the border, separating the element from other elements

### Example 2
The \`box-sizing\` property controls how the total width and height of an element is calculated:
- **content-box (default)**: Width and height apply to the content area only
- **border-box:** Width and height include content, padding, and border

### Example 3 
Margin collapse occurs when the top and bottom margins of adjacent elements combine
into a single margin. The larger margin value is used, not the sum of both margins. This only
happens with vertical margins of block-level elements.

### Example 4
The \`display\` property determines how an element is displayed:
- **block**: Takes full width, starts on new line (div, p, h1)
- **inline**: Takes only necessary width, doesn't break line (span, a, strong)
- **inline-block**: Combines inline and block behavior
- **none**: Element is not displayed

### Example 5 
Block elements create a new line and take up the full width available, while inline elements
flow with the text and only take up as much width as necessary. Understanding this
difference is crucial for proper layout control.

### Example 6 
Understanding how to calculate the total size of an element is essential for precise layouts.
The calculation depends on the \`box-sizing\` property value.

### Example 7 
Modern CSS provides several layout techniques. Understanding when to use each approach
is key to creating effective layouts. Consider factors like browser support, complexity, and
the specific layout requirements.`,

    "CSS Colors and Typography": `
### Example 1  
Colors and typography are fundamental to creating visually appealing and readable web 
content. This section covers various color formats, accessibility considerations, and
comprehensive typography control.

**Color formats (HEX, RGB, HSL, RGBA, HSLA)**
CSS supports multiple color formats:
- **HEX**: Hexadecimal notation (#RRGGBB or #RGB)
- **RGB**: Red, Green, Blue values (0-255)
- **HSL**: Hue, Saturation, Lightness
- **RGBA/HSLA**: Include alpha channel for transparency

### Example 2 
Color accessibility ensures content is readable by users with visual impairments. The Web 
Content Accessibility Guidelines (WCAG) recommend minimum contrast ratios: 4.5:1 for
normal text and 3:1 for large text.

### Example 3 
Font properties control the appearance of text. The \`font-family\` property specifies which
fonts to use, with fallbacks for better compatibility. Generic font families (serif, sans-serif,
monospace) ensure text displays even if specific fonts aren't available.

- \`font-family\`: Specifies the font, with a fallback list 
- \`font-size\`: Sets the size of the font.
- \`font-weight\`: Sets the thickness or boldness of characters.

### Example 4 
Text formatting properties control the appearance and behavior of text content. These
properties affect readability and visual hierarchy

### Example 5 
Line height and letter spacing significantly impact readability. Line height controls vertical
spacing between lines, while letter spacing adjusts horizontal spacing between characters.

### Example 6
Text alignment and decoration properties control how text is positioned and styled within
its container. These properties are essential for creating visually appealing and well-
organized content. 

### Example 7 
Web fonts allow you to use custom fonts that aren't installed on the user's system. Google
Fonts and other services provide easy access to web fonts. The \`@font-face\` rule allows you
to define custom fonts.`,


    "CSS Backgrounds and Borders": `
### Example 1 
Backgrounds and borders are essential for creating visually appealing designs. This section
covers various background properties, border styles, and advanced techniques like
gradients and shadows.
Background properties control how backgrounds are displayed, including color, images,
positioning, and repetition. These properties can be used individually or combined using
the shorthand background property

***Background Properties***
- \`background-color\`: Sets a solid background color.
- \`background-image\`: Sets a background image.
- \`background-repeat\`: Controls if and how the image repeats.
- \`background-position\`: Positions the image.
- \`background-size\`: Resizes the image.

### Example 2
**Multiple Backgrounds:** 
CSS allows multiple background images on a single element. They are layered with the first
declared background on top. This technique is useful for creating complex visual effects
without additional HTML elements. 

### Example 3 
Background attachment controls how the background behaves during scrolling, while
background position determines where the background image is placed within the element.

### Example 4 
Borders can be styled with different widths, styles, and colors. The border properties can be
set individually for each side or using shorthand properties for efficiency.

***Border Styles and Properties***
- \`border-style\`: solid, dashed, dotted, double, etc.
- \`border-width\`: Thickness of the border.
- \`border-color\`: Color of the border.

### Example 5 
Border radius creates rounded corners, while box shadows add depth and visual interest.
These properties are essential for modern web design aesthetics.

### Example 6 
CSS gradients create smooth transitions between colors without requiring image files.
Linear gradients transition along a straight line, while radial gradients radiate from a center
point`,


    "CSS Display and Positioning": `
### Example 1 
**CSS Display and Positioning**:
Understanding display and positioning is crucial for creating complex layouts and
controlling element placement. This section covers various display values, positioning
techniques, and related properties

**Display Property Values**
- \`block\`: Starts on a new line and takes up full width.
- \`inline\`: Flows with the text, only takes up needed width.
- \`inline-block\`: Flows inline but accepts width and height, and vertical margins.
- \`none\`: Hides the element completely, removing it from the document flow.
- \`flex\` and \`grid\`: Used for modern, responsive layouts.

### Example 2 
The \`position\` property controls how an element is positioned in the document flow. Each
position type has different behavior and use cases

**Position Property Types**
- \`static\` (default): Elements are positioned according to the normal document flow.
- \`relative\`: Positioned relative to its normal position.
- \`absolute\`: Positioned relative to the nearest positioned ancestor (not static).
- \`fixed\`: Positioned relative to the viewport.
- \`sticky\`: Behaves like relative until a scroll threshold is met, then acts like fixed.

### Example 3 
Z-index controls the stacking order of positioned elements. Elements with higher z-index
values appear in front of elements with lower values. Stacking contexts are created by
certain CSS properties and contain their own z-index ordering
(\`relative\`, \`absolute\`, \`fixed\`, or \`sticky\`)

### Example 4 
- The \`float\` property was historically used for creating multi-column layouts. 
- The \`clear\` property is used to "clear" the float, preventing subsequent elements from wrapping around it. 
Floats are now considered a legacy layout method.

### Example 5 
The overflow property controls what happens when content is too large for its container.
This is essential for creating scrollable areas and preventing layout breaks.

- \`visible\` (default): Content is not clipped and overflows.
- \`hidden\`: The overflow is clipped, and the rest is invisible.
- \`scroll\`: A scrollbar is added to see the full content.
- \`auto\`: A scrollbar is added only when necessary.

### Example 6 
Both \`visibility\` and \`display\` can hide elements, but they behave differently. Understanding
the difference is important for animations and layout control.

### Example 7 
Combining different positioning techniques allows for complex layouts and precise
element placement. Understanding when to use each technique is key to effective CSS
development.

**Why This Matters:**  
*Display and positioning are the backbone of page structure and interactive layouts.*
`,
    "CSS Flexbox Layout": `
### Example 1 
The flex container is the parent element with \`display: flex\` or \`display: inline-flex\`. Container
properties control how flex items are arranged and distributed within the container.

**Flex Container Properties**
These properties are applied to the parent element (the **flex container**).
- \`display: flex\`: Initializes a flex container.
- \`flex-direction\`: \`row\`, \`row-reverse\`, \`column\`, \`column-reverse\`.
- \`flex-wrap\`: \`nowrap\`, \`wrap\`, \`wrap-reverse\`.
- \`justify-content\`: Aligns items along the main axis.
- \`align-items\`: Aligns items along the cross axis.

### Example 2 
Flex items are the direct children of a flex container. Item properties control how individual
items grow, shrink, and align within the container.

**Flex Item Properties**
These properties are applied to the children (the flex items).
- \`flex-grow\`: Specifies how much an item will grow relative to others.
- \`flex-shrink\`: Specifies how much an item will shrink relative to others.
- \`flex-basis\`: The initial size of a flex item before growing or shrinking.
- \`order\`: Changes the visual order of items.

### Example 3
Flex direction determines the main axis (horizontal or vertical), while flex wrap controls
whether items wrap to new lines when there isn't enough space.

- \`flex-direction\`: column changes the main axis from horizontal to vertical.
- \`flex-wrap\`: wrap allows items to wrap to the next line when they overflow the container.

**Why This Matters:**  
Flexbox is a modern, efficient way to build layouts without floats or complicated hacks.
`,
    "CSS Grid Layout": `
### Example 1
CSS Grid Layout is a two-dimensional layout system designed for complex web interfaces. Unlike Flexbox (which is one-dimensional), Grid allows precise control over both rows and columns simultaneously.

**Key grid container properties:**
- **display: grid**: Establishes a grid formatting context
- **grid-template-columns**: Defines column tracks and their sizes
- **grid-template-rows**: Defines row tracks and their sizes
- **gap**: Sets spacing between grid cells (shorthand for row-gap and column-gap)
- **grid-auto-rows/columns**: Defines size of implicitly created tracks
- **justify-content**: Aligns the grid along the inline (row) axis
- **align-content**: Aligns the grid along the block (column) axis

The **repeat()** function and **fr** unit are particularly powerful for creating flexible grids:
- **repeat(3, 1fr)** creates 3 equal columns that share available space
- **repeat(auto-fit, minmax(200px, 1fr))** creates as many columns as will fit, each at least 200px wide

### Example 2
Grid items are the direct children of a grid container. Their placement can be precisely controlled.

**Key grid item properties:**
- **grid-column**: Specifies which column(s) an item should occupy
- **grid-row**: Specifies which row(s) an item should occupy
- **grid-area**: Shorthand for grid-row-start, grid-column-start, grid-row-end, grid-column-end
- **justify-self**: Aligns an item within its cell along the inline (row) axis
- **align-self**: Aligns an item within its cell along the block (column) axis

Grid items can span multiple rows and columns using the syntax:
- **grid-column: 1 / 3** (from column line 1 to line 3, spanning 2 columns)
- **grid-column: 1 / -1** (from first column line to last column line, spanning all columns)

### Example 3
Grid template areas provide a visual way to design layouts by naming areas of the grid.

**How it works:**
- **grid-template-areas** property defines a grid template using named areas
- Each area name must appear as a contiguous rectangle in the template
- Each string represents a row, and each word in the string represents a column
- **grid-area** property assigns an item to a named area

This approach makes complex layouts more intuitive and easier to visualize in code.

### Example 4
Grid lines are the horizontal and vertical dividing lines that create the grid structure.

**Key concepts:**
- **Grid lines** are numbered starting from 1, with negative numbers counting from the end
- **Named grid lines** can be created using [name] syntax in grid-template-columns/rows
- **Grid tracks** are the spaces between adjacent grid lines (columns and rows)
- **Grid cells** are the intersection of a row and column track

Named grid lines make it easier to create and maintain complex layouts by providing semantic references instead of numeric indices.

### Example 5
Grid provides powerful alignment capabilities at both the container and item level.

**Alignment properties:**
- **justify-content/align-content**: Align the entire grid within its container
- **justify-items/align-items**: Default alignment for all grid items
- **justify-self/align-self**: Alignment for individual grid items

**Gap properties:**
- **column-gap**: Space between columns
- **row-gap**: Space between rows
- **gap**: Shorthand for row-gap and column-gap

These properties provide precise control over spacing and alignment without needing margin or padding hacks.

### Example 6
Understanding when to use Grid vs Flexbox is crucial for efficient layout design.

**When to use Grid:**
- Two-dimensional layouts (controlling both rows and columns)
- Complex, asymmetrical layouts
- When precise placement of items is needed
- Magazine-style or dashboard layouts
- When you need to overlap elements

**When to use Flexbox:**
- One-dimensional layouts (row OR column)
- When content should dictate size
- For simple alignment tasks
- When you need to distribute space proportionally
- For components like navigation menus or card layouts

Many modern interfaces use both: Grid for the overall page layout, and Flexbox for component-level layout.
`,
    
     "CSS Pseudo-classes and Pseudo-elements": `
### Example 1 
Pseudo-classes are a special type of selector that begins with a single colon (:). They let you style elements when they're in a specific state, like being hovered over, clicked on, or positioned in a certain way within their parent.

**Structural Pseudo-Classes**
These selectors target elements based on their position within the document structure. They are perfect for styling lists, tables, and other repetitive content without needing unique classes for each item.
- **:first-child** and **last-child**: Selects the first and last element of a parent, respectively. In the example, the first list item is made bold and the last is styled in italics.
- **:nth-child(n)**: This is a powerful selector that can target elements based on a pattern.
- **:nth-child(odd)** and **even**: Styles all odd- or even-numbered elements, creating an easy "zebra-striping" effect for readability.
- **:nth-child(3)**: Selects the third element specifically.
- **:nth-child(3n+1)**: This is a formula-based selector. The n is a counter that starts at 0. So, 3n+1 will select the 1st (when n=0), 4th (when n=1), 7th (when n=2), and so on, element.

### Example 2
**State-Based Pseudo-Classes**
These selectors respond to user interaction or the current state of an element.

- **Link States**: The example shows the standard order for styling links:
- \`:link\`: Unvisited link.
- \`:visited\`: Visited link.
- \`:hover\`: When the mouse is over the link.
- \`:active\`: When the link is being clicked.
- \`:target\`: Styles an element when its ID matches the hash (#) in the URL. This is useful for highlighting sections that a user has navigated to via a link on the same page.
- \`:focus\`: Styles an interactive element, like a form input, when it's selected and ready for user input. This improves accessibility by giving users a clear visual cue.

### Example 3 
**Form-Related Pseudo-Classes**:
These are specialized selectors for styling form elements based on their state, which can be dynamically changed by the browser.
- \`:disabled\` and \`enabled\`: Styles input fields that are disabled or enabled.
- \`[type="checkbox"]:checked\`: Selects a checkbox that has been checked. The\`+ label\` part is a sibling selector that 
targets the adjacent label element, allowing you to style the text next to a checked box.
- \`:valid\` and \`invalid\`: Styles form inputs based on whether their content meets validation criteria (e.g., an email field with a proper email address).
- \`:required\` and \`optional\`: Styles inputs based on the presence of the required attribute.

### Example 4 
**Pseudo-Elements**:
Pseudo-elements are selectors that begin with a double colon (::). They are used to style a specific, non-existent part of an element, like the first line of text or a generated piece of content.
***Basic Pseudo-Elements***:
- \`::first-line\`: Selects and styles the first line of text within an element. The width of this "line" depends on the browser's current width.
- \`::first-letter\`: Styles the first letter of a block of text, perfect for creating a drop cap effect.
- \`::selection\`: Styles the portion of text that a user has highlighted with their cursor.

### Example 5 
**Generated Content with Pseudo-Elements**
This is a powerful use of pseudo-elements, allowing you to insert and style content without adding it to the HTML. The content property is required.
- \`::before\` and \`::after\`: Adds content before or after the content of an element. The example uses \`content\` to add a "📝 Note:" text or a small arrow icon.
- \`attr()\`: The content: \`attr(data-tooltip)\` syntax is a fantastic trick for creating dynamic tooltips. It pulls the content from a custom HTML attribute 
(like \`data-tooltip\`) and inserts it into the pseudo-element.

### Example 6 
**Common Use Cases**
- **Clearfix Hack**: The \`::after\` pseudo-element is a common solution for fixing layout issues with floating elements. It adds a clear-both rule after the container to 
ensure the container wraps around its floated children.
- **Custom List Bullets**: Instead of using the default list style, you can hide it and use \`::before\` to create and style your own bullet point icon.  `, 
      
    "CSS Tables and Lists Styling": `
### Example 1
Table layout properties control how tables are rendered and how their content is displayed. The \`table-layout\` property determines how the browser lays out table cells, rows, and columns.

- **table-layout: auto** (default): The column width is determined by the widest unbreakable content in the cells. This can be slower for large tables as the browser needs to read all the content first.
- **table-layout: fixed**: The column width is determined by the width of the table and the width of the columns in the first row. This is faster as the browser only needs to read the first row.
Basic table styling includes setting width, adding padding to cells, aligning text, and styling borders. The example shows a clean, professional table design with subtle borders and background colors for headers.

### Example 2
The \`border-collapse\` property determines how table borders are displayed:

- **border-collapse: collapse** (shown in Example 1): Borders are collapsed into a single border where possible. This creates a cleaner look with no spacing between cells.
- **border-collapse: separate**: Borders are drawn separately for each cell with spacing between them.
When using \`border-collapse: separate\`, you can control the spacing between cells with the \`border-spacing\` property. This property accepts one value for equal spacing or two values for horizontal and vertical spacing respectively.

### Example 3
Tables can be challenging on small screens because they often contain a lot of data in a rigid structure. There are several approaches to make tables responsive:

- **Horizontal scrolling**: Wrap the table in a container with \`overflow-x: auto\` to allow horizontal scrolling when the table is wider than the viewport.
- **Transforming the display**: For small screens, you can change the display of table elements to make them stack vertically. This approach uses media queries to detect small screens and CSS to transform the table layout.
The example shows a responsive table that displays normally on large screens but transforms into a stacked layout on small screens. It uses data attributes to display column headers next to each value.

### Example 4
CSS provides several properties to control the appearance of lists:

- **list-style-type**: Determines the type of marker (bullet or numbering)
- **list-style-position**: Controls whether the marker is inside or outside the content flow
- **list-style-image**: Allows using an image as the marker
- **list-style**: A shorthand property for all of the above

The example shows different list-style-types for unordered lists (square) and ordered lists (lower-roman), as well as different list-style-positions (inside vs. outside).

### Example 5
For more control over list markers, you can use:

- **list-style-image**: Use an image as a marker (limited styling options)
- **::marker pseudo-element**: Style the marker directly (modern browsers only)
- **::before pseudo-element**: Create completely custom markers with full styling control
The example demonstrates all three approaches, with the ::before method offering the most flexibility for creating custom markers with specific colors, shapes, and positioning.

### Example 6
Nested lists (lists within lists) are common for displaying hierarchical data. When styling nested lists, consider:

- Using different marker styles for different nesting levels
- Controlling indentation with padding
- Maintaining proper spacing between items
The example shows how to style a multi-level list with different marker types for each level and proper indentation to create a clear visual hierarchy.

Best practices for tables and lists include:
- Using semantic HTML (\`<table>\` for tabular data, \`<ul>\`/\`<ol>\` for lists)
- Ensuring accessibility (proper headers for tables, semantic structure for lists)
- Creating responsive designs that work on all screen sizes
- Using consistent styling for visual coherence
`,

   "CSS Forms and Input Styling": `
### Example 1
Forms are essential UI components that allow users to input data and interact with websites. 
Proper form styling improves usability and creates a better user experience.

The example demonstrates a clean, modern form layout using flexbox:
- **Flexbox layout**: Using \`display: flex\` and \`flex-direction: column\` creates a 
vertical form layout with consistent spacing between elements.
- **Container styling**: Adding background color, border-radius, and subtle box-shadow 
creates a distinct form container that stands out from the page.
- **Form groups**: Wrapping each label-input pair in a container helps maintain consistent spacing and alignment.
Consistent spacing and alignment make forms easier to scan and use, while visual hierarchy 
helps users understand the relationship between form elements.

### Example 2
Input fields are the primary interaction points in forms. Consistent styling across 
different input types creates a cohesive experience:

- **Base styling**: Applying consistent padding, border, border-radius, and font-size 
to all input types creates visual harmony.
- **Focus states**: Highlighting focused inputs with a border color change and subtle 
box-shadow provides clear visual feedback when users interact with the form.
- **Transitions**: Adding smooth transitions for border-color and box-shadow 
creates a polished, professional feel.
The example applies consistent styling to various input types (text, email, password, etc.)
 while ensuring they remain distinct from surrounding elements.

### Example 3
Visual feedback for form validation helps users understand and correct errors:

- **Valid state**: Green border for valid inputs provides positive reinforcement.
- **Invalid state**: Red border for invalid inputs highlights fields that need attention.
- **Error/success messages**: Small, color-coded messages provide additional context about validation status.
These visual cues help users identify and fix issues before submitting the form, improving the overall user experience.

### Example 4
Default browser checkboxes and radio buttons can be difficult to style consistently 
across browsers. Creating custom versions gives you complete control over their appearance:

- **Hide default controls**: The original inputs are hidden using absolute 
positioning and zero opacity, while maintaining their functionality.
- **Custom indicators**: Creating custom indicators with CSS allows for consistent styling across browsers.
- **States**: Different visual states (default, hover, checked) provide clear feedback about the current selection.
The technique maintains accessibility while providing a consistent, customized appearance.

### Example 5
Default select dropdowns are notoriously difficult to style. This example shows 
how to create a custom-styled select element:

- **Remove default appearance**: Using \`appearance: none\` removes the browser's default styling.
- **Custom arrow**: A CSS triangle created with borders replaces the default dropdown arrow.
- **Positioning**: Absolute positioning ensures the custom arrow appears in the correct location.
This approach maintains the native select functionality while allowing for consistent styling with other form elements.

### Example 6
Buttons provide the primary action points in forms. Clear, distinctive styling helps users identify and interact with them:

- **Primary button**: Bold, filled button for the main form action (e.g., Submit).
- **Secondary button**: Outlined button for secondary actions (e.g., Cancel).
- **States**: Different visual states (default, hover, active, disabled) provide feedback about button interactions.
The example includes both primary and secondary button styles, along with hover effects and disabled states.

Best practices for form styling include:
- Maintaining consistent spacing and alignment
- Providing clear visual feedback for all interaction states
- Ensuring sufficient contrast for readability
- Creating a logical tab order for keyboard navigation
- Designing with accessibility in mind (proper labels, focus states, etc.)
- Testing across different browsers and devices
`,

    "CSS Navigation and Menu Design": `
### Example 1
This example demonstrates a simple horizontal navigation bar using flexbox.

**HTML Structure**:
- A semantic \`<nav>\` element contains an unordered list (\`<ul>\`) of navigation items
- Each list item (\`<li>\`) contains an anchor (\`<a>\`) element
- The "active" class marks the current page

**CSS Explanation**:
- \`display: flex\` on the \`ul\` creates a horizontal layout
- \`list-style: none\` removes the default bullet points
- The navigation links are styled as block elements with padding for larger clickable areas
- Hover and active states provide visual feedback to users
- Transitions create smooth color changes for better user experience

### Example 2
This example shows a dropdown menu that appears on hover.

**HTML Structure**:
- Similar to the basic navigation, but with nested \`<ul>\` elements for dropdown menus
- The parent \`<li>\` has a "dropdown" class to identify it as having a submenu

**CSS Explanation**:
- \`position: relative\` on the parent list item creates a positioning context
- \`position: absolute\` on the dropdown menu positions it relative to its parent
- \`display: none\` hides the dropdown by default
- The \`:hover\` pseudo-class reveals the dropdown when the parent is hovered
- \`z-index: 1\` ensures the dropdown appears above other content

### Example 3
This example demonstrates a mobile-friendly navigation with a hamburger menu toggle.

**HTML Structure**:
- Contains a logo, hidden checkbox input, label with hamburger icon, and navigation menu
- The checkbox serves as a toggle mechanism without requiring JavaScript

**CSS Explanation**:
- The hamburger icon is created using spans with \`::before\` and \`::after\` pseudo-elements
- Media query detects smaller screens and changes the layout accordingly
- When the checkbox is checked, the menu expands using \`max-height\` transition
- The hamburger icon transforms into an X when active
- CSS transitions create smooth animations for better user experience

### Example 4
This example shows an advanced mega menu with multiple columns and featured content.

**HTML Structure**:
- Similar to dropdown menu but with a more complex structure
- Contains multiple columns with headings and lists
- Includes a featured section with an image

**CSS Explanation**:
- Uses \`display: flex\` to create a multi-column layout
- Opacity and visibility transitions create a smooth appearance effect
- Each column is styled independently with appropriate spacing
- Different styling for links inside the mega menu versus main navigation

### Example 5
This example demonstrates a vertical sidebar navigation with collapsible sections.

**HTML Structure**:
- A sidebar container with header and navigation
- Uses icons alongside text labels
- Includes collapsible submenus

**CSS Explanation**:
- Fixed positioning creates a stationary sidebar
- Flexbox aligns icons and text
- Submenu height transitions create smooth accordion effects
- Icon rotation provides visual feedback for expanded/collapsed state

### Example 6 
This example shows breadcrumb navigation for hierarchical page structures.

**HTML Structure**:
- Uses an ordered list with appropriate ARIA attributes for accessibility
- Each item represents a level in the site hierarchy
- The current page is marked with "active" class and appropriate ARIA attribute

**CSS Explanation**:
- Flexbox creates the horizontal layout
- Custom separators are added using the \`::before\` pseudo-element
- Different styling for active (current) page
- Hover effects only on clickable items

### Example 7
This example demonstrates pagination controls for multi-page content.

**HTML Structure**:
- Uses semantic navigation with appropriate ARIA labels
- Previous/next buttons with directional indicators
- Numbered page links with active state

**CSS Explanation**:
- Flexbox creates the horizontal layout
- Different styling for active, disabled, and hover states
- Consistent spacing and sizing for better usability
- Transitions create smooth hover effects`,

   "CSS Card and Component Design": `
### Example 1
Cards are versatile UI components that group related content and actions. They typically 
have a consistent structure with distinct sections.

**Key concepts:**
- Border radius creates rounded corners for a modern look
- Box shadow adds depth and visual separation from the background
- Overflow handling prevents content from breaking the card shape
- Transitions on hover create interactive feedback

### Example 2
Well-structured components use semantic class names and logical organization of elements.

**Key concepts:**
- A card has multiple components (image, content, title, description).
- \`overflow: hidden\` ensures rounded corners apply to image too.
- This structure makes the card flexible and extendable.

### Example 3
Interactive hover effects provide feedback and improve user experience by indicating clickable elements.
**Key concepts:**
- Subtle transform effects like \`translateY\` create a "lifting" effect
- Enhanced shadows on hover reinforce the lifting sensation
- Scale transforms make buttons appear to grow slightly
- Transition timing functions control the speed and feel of animations
 
### Example 4
Shadows add depth and dimension to flat designs, helping establish visual hierarchy.

**Key concepts:**
- Different shadow intensities (sm, md, lg) create varying levels of elevation
- Inset shadows create the appearance of pressed or recessed elements
- Colored shadows can reinforce brand colors or create special effects
- Shadow spread radius controls the softness/hardness of the shadow edge

**Best Practices:**
- Keep card designs consistent throughout your interface
- Use appropriate spacing to improve readability
- Ensure sufficient contrast for text content
- Limit the amount of information in each card
- Test card layouts across different screen sizes`,

   "CSS Specificity and Cascade": `
### Example 1
Specificity determines which CSS rules are applied when multiple rules target the same element. Understanding specificity is crucial for predictable styling.

**Key concepts:**
- Type selectors (e.g., \`p\`) have the lowest specificity (0,0,1)
- Class selectors (e.g., \`.text\`) have medium specificity (0,1,0)
- ID selectors (e.g., \`#unique\`) have high specificity (1,0,0)
- Combined selectors add their specificity values together
- Attribute selectors (e.g., \`[type="text"]\`) have the same specificity as class selectors (0,1,0)

### Example 2
The cascade determines which styles are applied when rules have equal specificity. It follows a specific order of precedence.

**Key concepts:**
- External CSS (linked via \`<link>\`) has the lowest priority
- Internal CSS (in \`<style>\` tags) has medium priority
- Inline CSS (in \`style\` attributes) has the highest priority
- Later rules override earlier rules of equal specificity
- Source order matters when specificity is equal

### Example 3
The \`!important\` rule overrides normal specificity calculations, but should be used sparingly.

**Key concepts:**
- Adding \`!important\` to a declaration makes it override other declarations
- Even higher specificity selectors won't override an \`!important\` declaration
- Multiple \`!important\` declarations follow normal specificity rules
- Overuse of \`!important\` can lead to maintenance difficulties

### Example 4
Inheritance allows child elements to receive property values from their parents, reducing code repetition.
**Key concepts:**
- Inherited properties (e.g., \`color\`, \`font-family\`, \`line-height\`) pass from parent to child
- Non-inherited properties (e.g., \`border\`, \`padding\`, \`margin\`) don't pass to children
- The \`inherit\` keyword forces inheritance of any property
- The \`initial\` keyword resets a property to its default value

### Example 5
Comparing different selector combinations helps understand how specificity is calculated in practice.

**Key concepts:**
- Specificity is calculated as (ID count, class count, element count)
- More specific selectors override less specific ones
- Adding more selectors increases specificity
- ID selectors have significantly higher specificity than classes or elements

**Best Practices:**
- Keep selectors as simple as possible
- Avoid using \`!important\` except as a last resort
- Use classes instead of IDs for most styling
- Be consistent with your selector approach
- Use specificity strategically to create maintainable code`,

   "CSS Transitions, Animations and Effects": `
### Example 1
Transitions provide smooth changes between property values, creating more polished user interfaces.
**Key concepts:**
- The \`transition\` property specifies which properties should animate and how
- Duration controls how long the transition takes (e.g., \`0.3s\`)
- Timing functions (e.g., \`ease\`, \`linear\`) control the acceleration pattern
- Multiple transitions can be defined for different properties
- Transitions can include delays before starting

### Example 2
Keyframe animations allow for more complex, multi-step animations that can run automatically.
**Key concepts:**
- \`@keyframes\` rule defines the animation sequence
- Keyframes can use percentages (0% to 100%) or \`from\`/ \`to\` keywords
- The \`animation\` property applies keyframe animations to elements
- Animations can run once or repeat (including infinitely)
- Multi-step animations create more complex movement patterns

### Example 3
- Timing functions control the speed curve of the animation.
- Even if the duration is the same, timing functions change how the motion feels.

***Types Used Above***:
- \`.ease\` → default; starts slow, speeds up, then slows again.
- \`.linear\` → moves at a constant speed from start to finish.
- \`.ease-in\` → starts slow, then accelerates quickly at the end.
- \`.ease-out\` → starts fast, slows down at the end.
- \`.ease-in-out\` → slow at start, fast in middle, slow at end.

***Behavior in Example***:
- When hovering, each box moves 200px to the right (translateX).
- Because all have different timing functions, the motion feels different even though the distance and duration are the same.
**Key takeaway**: Timing functions affect the natural feel of UI — use them to make animations realistic (like bouncing, easing into place, or sliding smoothly).

### Example 4
CSS animations have multiple properties that control their behavior, timing, and playback.

**Key concepts:**
- \`animation-name\` specifies which @keyframes rule to use
- \`animation-duration\` sets how long the animation takes to complete one cycle
- \`animation-timing-function\` controls acceleration pattern
- \`animation-delay\` sets time before animation starts
- \`animation-iteration-count\` controls how many times the animation repeats
- \`animation-direction\` can make animations alternate or reverse
- \`animation-fill-mode\` determines styles before/after animation
- \`animation-play-state\` can pause/play animations
- The shorthand \`animation\` property combines all animation properties

**Best Practices:**
- Use transitions for simple state changes (hover, focus, etc.)
- Use animations for more complex or automatic movements
- Keep animations subtle and purposeful
- Consider users who prefer reduced motion
- Test performance, especially on mobile devices
- Avoid animations that could cause motion sickness`,

    "CSS Transformations(2D & 3D)": `
### Example 1 
The transform property allows elements to be visually manipulated without affecting the document flow.

**Key concepts:**
- \`translate()\` moves elements horizontally and/or vertically
- \`scale()\` changes the size of elements
- \`rotate()\` turns elements around a point
- \`skew()\` tilts elements along the X and/or Y axis
- Multiple transforms can be combined in a single declaration

**Initial Styles**:
\`.box\` has a fixed size (\`120px × 120px\`), background (\`steelblue\`), and text centered using flexbox.

**Transform Property**:
- \`transform\` is a shorthand that applies one or more transform functions at once.
- In the hover state**:
\`rotate(45deg)\` → rotates the element 45 degrees clockwise.
\`scale(1.2)\` → enlarges the element to 120% of its size.

***Transition Effect***:
\`transition: transform 0.5s ease;\` → ensures the transformation happens smoothly instead of instantly.
**Key takeaway**: transform is a powerful CSS tool for rotations, scaling, moving, and skewing elements, 
all without affecting surrounding elements in the layout.

### Example 2
CSS supports both 2D transformations in the X/Y plane and 3D transformations that include the Z axis.

**Key concepts:**
- 2D transforms operate on the X and Y axes only
- 3D transforms add the Z axis for depth
- \`rotateX()\`, \`rotateY()\`, and \`rotateZ()\` rotate around specific axes
- \`translate3d()\` and \`scale3d()\` provide 3D movement and scaling
- 3D transforms require proper perspective to be visible

### Example 3
The transform-origin property determines the point around which transformations occur.

**Key concepts:**
- Default transform origin is the center of the element (50% 50%)
- Can be set using keywords (top, bottom, left, right, center)
- Can be set using specific length or percentage values
- Affects rotation, scaling, and skewing (but not translation)
- Different transform origins create dramatically different visual effects

### Example 4
Perspective creates the illusion of depth in 3D transformations, while backface visibility controls whether the reverse side of elements is visible.

**Key concepts:**
- \`perspective\` property on a container creates a 3D space for child elements
- Smaller perspective values create more dramatic 3D effects
- \`transform-style: preserve-3d\` maintains 3D relationships between elements
- \`backface-visibility: hidden\` hides elements when they're rotated away from the viewer
- These properties are essential for creating 3D card flips and cubes

**Best Practices:**
- Use transforms instead of absolute positioning when possible
- Combine transforms with transitions for smooth animations
- Be cautious with 3D transforms on mobile devices (performance)
- Test 3D effects across different browsers
- Consider providing alternatives for users with vestibular disorders`,

   "CSS Media Queries": `
### Example 1
Media queries allow styles to be applied conditionally based on device characteristics, enabling responsive design.

**Key concepts:**
- Basic syntax: \`@media [media-type] and ([media-feature]) { /* CSS rules */ }\`
- Media types include \`screen\`, \`print\`, \`speech\`, and \`all\` (default)
- Media features include \`width\`, \`height\`, \`orientation\`, and many others
- Logical operators (\`and\`, comma for OR) combine multiple conditions
- Media queries can target specific use cases like printing

### Example 2
Media queries can target specific device characteristics beyond just screen size.
**Key concepts:**
- Width and height queries adapt layouts to different screen dimensions
- Resolution queries (\`min-resolution\`) target high-DPI/retina displays
- Orientation queries adapt layouts based on portrait or landscape mode
- Capability queries like \`hover\` detect if the device supports hover interactions
- These features enable more tailored user experiences

### Example 3
Strategic breakpoints create consistent responsive behavior across different device sizes.
**Key concepts:**
- Common breakpoints target phone, tablet, desktop, and large desktop sizes
- Breakpoints should be based on content needs, not specific devices
- Using \`min-width\` and \`max-width\` together creates targeted ranges
- Consistent breakpoint values throughout a project improve maintainability
- Testing at various screen sizes ensures smooth transitions between breakpoints

### Example 4
The mobile-first approach starts with styles for small screens and progressively enhances for larger screens.
**Key concepts:**
- Base styles are written for mobile devices without media queries
- Progressive enhancement adds complexity as screen size increases
- Using \`min-width\` queries follows the mobile-first approach naturally
- This approach often results in more efficient and maintainable code
- Mobile-first forces prioritization of essential content and features

**Best Practices:**
- Choose breakpoints based on content, not specific devices
- Test responsive designs on actual devices when possible
- Use relative units (%, em, rem) for flexible layouts
- Combine media queries with flexible layout techniques (flexbox, grid)
- Consider performance implications, especially for mobile devices
- Don't rely solely on screen width (consider orientation, capabilities)
`,   

   "CSS Variables and Custom Properties": `
### Example 1 
CSS Variables (officially called Custom Properties) let you store reusable values in your stylesheets.
They bring consistency, flexibility, and maintainability to CSS — similar to variables in programming languages

**Declaring and Using CSS Variables**
1. Declaration with --:
- Variables start with \`--\`. Example: \`--main-color: #3498db;\`.
- They can hold any valid CSS value (colors, numbers, units, even entire shorthand values).
2. The \`:root\` Selector:
- \`:root\` is a pseudo-class that represents the top-level element (\`<html>\`).
- Declaring variables inside \`:root\` makes them **globally available**.
3. Using Variables with \`var()\`:
- \`var(--main-color)\` retrieves the variable’s value.
- In the code, both \`body\` and \`h2\` use \`--main-color\`, ensuring consistent coloring.

*Declare variables once, use them anywhere. Updating one variable updates all references.*

### Example 2
**Variable scope and inheritance**:
1. Global Scope:
Declaring variables in \`:root\` makes them usable anywhere.
Example: \`--text-color: black;\`.
2. Local Scope:
If you declare a variable inside a selector (like \`section\`), it only applies inside that selector.
Example: \`--text-color: darkgreen;\` applies to all children of \`section\`.
3. Fallback to Global:
When outside \`section\`, the variable \`--text-color\` defaults to global (\`black\`).

*Variables are inheritable, and local declarations override global ones in their scope.*

### Example 3 
**Fallback values**
1. Undefined Variables:
- If you use a variable that doesn’t exist (\`--undefined-color\`), it normally fails.
- But you can provide a fallback value: \`var(--undefined-color, blue)\`.
2. Defined Variables Ignore Fallback:
- For \`--main-color\`, since it exists, the fallback (\`green\`) is ignored.
3. Real-World Usage:
- Useful when working with themes or partial support.
- Ensures CSS still works even if some variables aren’t defined.

*Always provide a fallback when using variables in critical places.*

### Example 4
** Dynamic updates with JavaScript**
1. Default Variable:
- In \`:root\`, we declare \`--bg-color: lightblue;\`.
2. JavaScript Access:
- \`document.documentElement\` selects the root \`<html>\` element.
- \`.style.setProperty('--bg-color', 'lightcoral')\` updates the variable.
3. Dynamic Update:
- When clicking the button, background color changes smoothly from \`lightblue\` to \`lightcoral\`.
- This shows variables can bridge CSS and JavaScript.

*CSS variables are not static — they can be updated dynamically, enabling dark mode toggles, theming, live previews, etc.*`,

   "CSS Gradients and Patterns": `
### Example 1 
Gradients are images generated by the browser that smoothly transition between two or more colors. Unlike background colors (which are solid), 
gradients are more flexible and can create beautiful designs such as buttons, banners, and backgrounds.
Patterns extend this by repeating visual effects for textures, stripes, grids, etc.

**Linear gradients**
1. Syntax:
\`linear-gradient(direction, color1, color2, ...);\`
- \`direction\`: Defines the angle or direction of the gradient.
- Colors: At least two, but you can add more for multi-step gradients.
2. Direction Keywords:
- \`to right\` → left → right.
- \`to bottom\` → top → bottom.
- Angles: \`45deg\`, \`90deg\`, etc.
3. In the Example:
- \`linear-gradient(to right, #3498db, #9b59b6)\` creates a left-to-right transition from **blue** to **purple**.
- The gradient is drawn inside the \`div\`.
*Linear gradients are straight-line color blends in any direction.*

### Example 2 
**Radial gradients**:
1. Syntax:
\`radial-gradient(shape size at position, color1, color2, ...);\`
- \`shape\`: circle or ellipse (default).
- \`size\`: closest-side, farthest-corner, etc.
- \`at position\`: defines the gradient center (center, top left, 50% 50%).
2. In the Example:
- \`circle\`: Gradient expands in a perfect circle.
- Colors blend from orange (\`#f39c12\`) in the center to red (\`#e74c3c\`) at the edges.

*Radial gradients create circular or elliptical blends radiating from a center point.*

### Example 3 
**Conic gradients**:
1. Syntax:
\`conic-gradient(from angle at position, color1, color2, ...);\`
- from angle: Where the gradient starts (e.g., 0deg, 90deg).
- at position: Center point.

2. In the Example:
\`conic-gradient(from 0deg, #1abc9c, #3498db, #9b59b6, #1abc9c)\` creates a pie-like wheel of colors.
The gradient rotates around the center point.

*Conic gradients are circular sweeps, perfect for pie charts and radial effects.*

### Example 4 
**Gradient Color Stops**:
1. Color Stops:
- You can control where each color starts/ends using percentages or units.
- Example: red 20% means red covers up to 20% of the width.
2. In the Example:
- The gradient goes red → yellow → green → blue across the element.
- Each transition happens at specified positions.

*Color stops let you design multi-step gradients with precision.*

### Example 5 
1. **Repeating Gradients**:
- Instead of blending once, the pattern repeats infinitely.
- Works with \`repeating-linear-gradient\`, \`repeating-radial-gradient\`, and \`repeating-conic-gradient\`.
2. In the Example:
- \`45deg\`: The gradient is diagonal.
- \`blue → green\` stripes repeat every 40px.

*Use repeating gradients to create patterns, stripes, and textures.*

### Example 6 
**CSS Patterns (Using Gradients)**:
You can create complex patterns using gradients only — no images needed.
1. Multiple Gradients:
- CSS allows layering multiple gradients separated by commas.
- Each gradient forms part of the pattern.
2. Background Position + Size:
- \`background-size: 50px 50px\` ensures the pattern tiles like a checkerboard.
- \`-25px 0 offsets\` the gradients for correct alignment.
3. In the Example:
- Black and white squares alternate, forming a checkerboard pattern.
- All generated with gradients — no image required!

*By combining multiple gradients and adjusting size/position, you can generate stripes, grids, polka dots, checkerboards, etc*`,
   
  "CSS Box Shadow and Text Effects": `
### Example 1
**Box shadow properties**
box-shadow allows you to add shadow effects around elements.

1. Syntax:
\`box-shadow: offset-x offset-y blur-radius spread-radius color inset;\`
2. Example explained:
- \`10px 10px\` → moves shadow right (x) and down (y).
- \`15px → blur\`, softer shadow edges.
- \`rgba(0,0,0,0.3)\` → semi-transparent black.

By default, shadows are outside the box. Add \`inse\`t for inner shadows.
  
### Example 2 
You can stack multiple shadows by separating them with commas.

***In the example***:
- First shadow → dark, bottom-right.
- Second shadow → light, top-left.
This creates a 3D embossed effect often used in neumorphism design.

### Example 3 
**Text shadow effects**
Text shadows enhance readability and create visual impact. They're essential for text over
images and creative typography.
text-shadow applies shadows directly to text.

1. Syntax:
\`text-shadow: offset-x offset-y blur-radius color;\`
2. Useful for:
- Creating glowing text.
- Giving depth to headlines.
- Making text stand out on images.

### Example 4 
**Drop shadows**
- Unlike \`box-shadow\`, \`drop-shadow()\` (via \`filter\`) follows the actual shape of the element, including transparency.
- In the example, the shadow follows the edges of the image (not just a rectangle).
- This is very useful for PNGs, SVGs, icons, and irregular shapes.

### Example 5 
**Inner shadows**
- \`inset\` keyword places the shadow inside the element.
- Creates a “pressed” look, common in input boxes, buttons, and neumorphism UI.
- Works well to simulate depth and indentation.`,

 "CSS Filters and Blend Modes": `
### Example 1
This section explores how to use CSS properties to create visual effects on images and 
other elements. It covers \`filter()\`, \`backdrop-filter\`, \`mix-blend-mode\`, and \`background-blend-mode\`.

**filter() functions on images**:
The \`filter\` property is a powerful tool for applying image processing effects to an element, 
like blurring, sepia tones, or drop shadows. Think of it as applying an Instagram 
filter directly in your code. The effects are non-destructive and can be easily combined.

- \`filter: none;\`: This is the default value, meaning no filter is applied. It's used here as a base case.
- \`filter: blur(4px);\`: The \`blur()\` function applies a Gaussian blur, making the image out of focus. 
The \`4px\` value determines the radius of the blur.
- \`filter: grayscale(100%);\`: \`grayscale()\` converts the image to black and white. A value of \`100%\` means 
a full conversion, while \`50%\` would be a halfway point.
- \`filter: brightness(1.2) contrast(1.1);\`: Filters can be chained together to create more complex effects. 
This combines a \`brightness()\` increase with a \`contrast()\` boost, making the image pop.
- \`filter: sepia(0.7) saturate(0.7) hue-rotate(-10deg);\`: This is a great example of a compound filter for a vintage effect. 
It applies a sepia tone, reduces color saturation, and shifts the colors slightly with \`hue-rotate()\`.
- \`filter: drop-shadow(8px 8px 12px rgba(0,0,0,.35));\`: The \`drop-shadow()\` function is similar to the \`box-shadow\` property 
but is applied to the alpha channel of the element's content, following its shape. 
The values are \`x-offset\`, \`y-offset\`, \`blur-radius\`, and color.

### Example 2
**backdrop-filter (frosted glass)**
The backdrop-filter property applies graphical effects to the area behind an element, 
allowing the content behind it to be affected. The most common use case is creating a "frosted glass" effect.
- \`.hero\`: This is a container for the hero section. position: relative is used to 
establish a positioning context for the child elements.
- \`.hero_ _bg\`: This image is absolutely positioned to cover the entire container.
- \`.glass\`: This is the element that will have the frosted glass effect. 
It's positioned with \`z-index: 1\` to ensure it sits on top of the background image.
- \`backdrop-filter: blur(12px) saturate(1.2);\`: This is the key property. It applies a \`blur()\` and \`saturate()\` 
effect to the background area behind the \`.glass\` div. This means the image pixels directly 
underneath the glass panel will be blurred and have their saturation increased.
- \`background: rgba(255,255,255,.2);\`: A semi-transparent white background is applied to the glass panel 
itself. This combined with the backdrop-filter creates the classic frosted glass look, 
making the text more readable.

### Example 3
**mix-blend-mode**
The mix-blend-mode property specifies how an element's content should blend with the content of 
its parent and the element's background. This is a very powerful way to create artistic and dynamic effects.
- \`.mix-demo\`: This container holds both the image and the \`<h1>\` element. \`position: relative\` is 
used to allow the text to be absolutely positioned on top of the image.
- \`.mix-text\`: The text is absolutely positioned to cover the image.
- \`mix-blend-mode: difference;\`: This is the core of the effect. The difference blend mode compares 
the element's color with the background's color, subtracting the darker of the two. 
This often results in a striking, inverted-color effect. Other blend modes 
like overlay, screen, and multiply would produce different results by blending 
the colors in various ways (e.g., screen brightens, multiply darkens).

### Example 4 
- Multiple background layers are declared back-to-front (the first listed is the topmost layer):
-   \`url(...)\` the photo
-   \`linear-gradient(...)\` the color overlay
- \`background-blend-mode\`: multiply blends these layers together before compositing with the element’s background color.
- multiply darkens by multiplying color channels → produces a rich tinted image that preserves luminance detail.
- \`background-size: cover, cover\` and \`background-position\`: center apply to each layer respectively 
(first value → first layer, second → second layer).
- Design tip: blending is a great way to force brand color harmony across heterogeneous photos 
without editing assets.`,

 "CSS Responsive Images": `
### Example 1 
**Responsive widths with srcset + sizes**
- src is the fallback and also the default if \`srcset\` is ignored.
- srcset with width descriptors (\`400w\`, \`800w\`, \`1600w\`) tells the browser which image intrinsic widths are available.
- sizes describes the expected rendered width (“slot size”) of the image in CSS pixels for different viewport conditions:
-   If viewport ≤ 600px → image will render at 90vw (90% of viewport width).
-   Else if ≤ 1024px → 70vw.
-   Else → 800px.
- The browser uses \`sizes\` + device pixel ratio to pick the closest best candidate from srcset (to avoid blurry upscaling or wasting bandwidth).
- Best practice: add \`width\` and \`height\` attributes (intrinsic dimensions) to reserve space and prevent CLS (layout shifts). Example: \`width="800"\` \`height="533"\`.
- Consider \`loading="lazy"\` and \`decoding="async"\` to improve performance on non-critical images.

### Example 2 
**Next-gen formats + art direction with picture**:
- The browser evaluates \`<source>\` elements top-to-bottom:
1. If it supports \`type="image/avif"\`, it uses that (smaller file sizes, modern codec).
2. Else it tries \`image/webp\`.
3. Then a media-conditional source swaps the art direction (here: a portrait crop when ≤ 600px).
4. If none match, it falls back to the \`<img>\` element (JPEG).
- sizes works with srcset exactly as in Example 1.
- \`loading="lazy"\` defers offscreen images; \`decoding="async"\` doesn’t block rendering.
- Order matters: place most desirable formats first; supply a robust JPEG fallback.
- Best practice: include \`width\`/\`height\` on the \`<img>\` to stabilize layout.

### Example 3 
**object-fit and aspect-ratio for thumbnails**
- \`width: 160px\` fixes the inline size; \ aspect-ratio: 4 / 3\   computes height automatically to maintain 4:3.
- \`object-fit: cover\` scales and crops the image so it fills the content box without distortion. 
(Use \`object-position\` to control the crop focus, e.g., \`object-position: 50% 30%\`.)
- \`border-radius: 8px rounds corners\`; cropping respects the radius.`,

 "CSS Custom Fonts and Icon Fonts": `
### Example 1 
**@font-face with font-display**
- \`src: url(...).woff2\` uses the modern compressed format (most efficient on the web).
- \`font-weight: 100 900\` exposes a range (thin→black) from a single file (variable axis), 
enabling fine-grained weights like \`font-weight: 550\`.
- \`font-display: swap\` shows fallback text immediately, then swaps to the webfont when ready, minimizing FOIT (invisible text).
The \`body\` stack falls back to system fonts if \`InterVar\` fails or is still loading.

### Example 2 
**Preload critical font**
- \`rel="preload"\` hints the browser to fetch early (high priority) before layout needs it.
- \`as="font"\` and \`type="font/woff2"\` let the browser set proper request headers and prioritize correctly.
- \`crossorigin\` is needed if the font is served with CORS (including many CDNs). Its value should match the font request in \`@font-face\` (anonymous by default).
- Preload only critical fonts (e.g., above-the-fold text) to avoid network contention.
 
### Example 3 
**Icon font implementation**
- The icon glyphs live in the Private Use Area (e.g., \e001), mapped to pseudo-elements (\`::before\`).
- \`.icon\` ensures the proper font family and predictable metrics; speak: never hints assistive 
tech to skip pronunciation (still add \`aria-hidden="true"\` on purely decorative icons).
- \`font-display: block\` prevents showing fallback glyphs as garbled characters 
while loading (briefly hides icons); pick \`swap\` if you prefer immediate fallback.
- **Why prefer SVG**? SVG icons are accessible, crisp at all sizes, and styleable per-instance (fill, stroke) without relying on font hacks. 
Icon fonts can suffer from anti-aliasing issues and missing glyphs.`,

   "CSS Modal and Popup Design": `
### Example 1 
**Accessible modal structure with overlay**
- \`role="dialog"\` announces element semantics to assistive tech.
- \`aria-modal="true"\` signals that the dialog is a modal (background content is inert).
- \`aria-labelledby="m-title"\` ties the dialog’s accessible name to the \`<h2>\` text.
- \`hidden\` keeps the overlay and modal out of the accessibility tree and visually hidden until opened.

***You’ll typically add JS to***:
- Toggle \`hidden\`/\`.is-open\`.
- Trap focus inside the modal (Tab/Shift+Tab cycle).
- Close on Escape and overlay click.
- Restore focus to the open button on close.
- Prevent background scroll (\`body { overflow: hidden; }\` while modal is open).

**CSS visual behavior**
- \`.overlay\` fills the viewport: \`position: fixed; inset: 0\`. The semi-transparent black plus a 
subtle \`backdrop-filter: blur(2px)\` helps foreground readability.
- .modal is centered by placing its top-left corner at (\`50%, 50%\`) and 
pulling itself back with \`transform: translate(-50%, -50%)\`.
- \`width: min(90vw, 480px)\` keeps the dialog responsive but capped.
- The open animation fades and scales from \`.96\` → \`1\` for a polished entrance.
- Toggling \`.is-open\` changes \`opacity\`/\`scale;\` you still need to 
unhide the element (\`hidden=false\`) for it to participate in layout/accessibility.

### Example 2 
**Utility class show/hide override**
- The \`[hidden]\` attribute wins by default; adding \`.is-open\` to the same element 
flips its \`display\` back to \`block\` (thanks to higher specificity from combining a class selector with an attribute selector).
- This pattern lets JS toggle a single class (\`.is-open\`) without also mutating \`hidden\`, but be consistent: either
- Toggle \`hidden\` and leave CSS transitions to \`.is-open\`, or
- Use this override approach and only toggle \`.is-open\`.
- Remember that \`display: none\` removes elements from the accessibility tree and focus order. 
Prefer \`hidden\` (attribute) for semantics, then flip with this utility when opening`,

 "CSS Layout Patterns": `
### Example 1 
**Holy Grail layout (Grid)**
- \`grid-template-columns: 200px 1fr 200px\` defines fixed sidebars with a flexible center.
- \`gap: 1rem\` adds consistent gutters; no margins needed between regions.
- At ≤900px, switch to single column for mobile.
- Consider \`grid-template-areas\` if you want explicit placement names for clarity.

### Example 2 
** Sticky footer**
- \`100dvh\` uses dynamic viewport height (accounts for mobile browser UI) to avoid jumpy layouts common with \`vh\`.
- Row sizes:
- \`auto\` for header height,
- \`1fr\` to stretch main,
- \`auto\` for footer.
- Footer naturally sits at the bottom even when content is short.

### Example 3
**Sidebar layout with sticky nav**
- \`position: sticky; top: 1rem\` anchors the sidebar inside its scroll container so it sticks after you scroll past it.
- \`align-self: start; height: max-content;\` ensure the grid item’s height doesn’t stretch full column height (which would break sticky behavior).
- Mobile collapses to a single column.

### Example 4 
**Auto-fit card grid**
- \`repeat(auto-fit, minmax(220px, 1fr))\` creates as many columns as fit, but never smaller than 220px; 
remaining space distributes to make columns equal width.
- \`auto-fit\` collapses empty tracks, allowing cards to stretch nicely on wider rows.
This is the idiomatic responsive grid for cards.

### Example 5 
**Masonry layout**
- \`columns: 240px\` asks the browser to create as many columns of ~240px width as the container allows; 
items flow top-to-bottom, then left-to-right, unlike grid’s row-major flow.
- \`break-inside: avoid\` reduces the chance of an item splitting across columns.
- Tradeoffs:
- Reading order is columnar (screen readers still follow DOM order).
- No control over gaps per row; not ideal for complex alignments.
- Great for Pinterest-like galleries with minimal code.`,

 "CSS Performance & Best Practices": `
### Example 1 
- Class selectors are fast, predictable, and easy to override.
- Deep descendant chains increase specificity and make styles brittle; they also increase the work the browser does to match selectors.
- Adopt a naming methodology (BEM, SUIT) to keep selectors flat and maintainable.

### Example 2 
- Animating \`transform\` and \`opacity\` generally stays on the compositor thread (no layout/paint), resulting in smoother animations.
- \`will-change\` hints the browser to promote the element to its own layer. 
Use it sparingly and remove it after the animation to avoid memory overhead.

### Example 3 
- Baseline works everywhere; advanced layout enhances in capable browsers.
- \`@supports\` avoids shipping heavy polyfills and keeps CSS resilient.
 
### Example 4 
- Honors user accessibility preference to limit motion, preventing vestibular discomfort.
- Consider also disabling parallax, autoplaying background videos, and large blurs when this media query matches.

### Example 5 
- Design tokens (\`--space-2\`, \`--radius-md\`, \`--primary\`) centralize your spacing, radii, and colors.
- Changing one variable updates all components consistently, enabling theming and systematic scaling.
- Avoid CSS \`@import\` at runtime (it blocks rendering). Prefer build-time bundling and smart caching.
`, 

};
    return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};


const getCSSExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to CSS":`
- Create your first CSS file and link it to an HTML document.
- Style a simple webpage by changing text colors and background colors.
- Build a basic personal homepage with inline, internal, and external CSS styles.`,
   
    "CSS Fundamentals and Selectors": `
- Style elements using element, class, and ID selectors in different combinations.
- Create a styled contact form using descendant and child selectors.
- Build a navigation menu using attribute selectors and grouping selectors.`,
 
     "CSS Units and Values":`
- Design a responsive layout using em, rem, vh, vw, and percentage units.
- Create a typography scale using different unit types for headings and body text.
- Build a flexible card component using relative and absolute units appropriately.`,
    
   "CSS Box Model and Layout": `
- Create boxes with different padding, margin, and border combinations to understand spacing.
- Build a sidebar layout demonstrating content-box vs border-box sizing.
- Design a pricing table showing how box model affects element dimensions.`,

    "CSS Colors and Typography": `
- Create a color palette page using hex, RGB, HSL, and named color values.
- Design a typography showcase with different font families, weights, and sizes.
- Build a blog post layout with proper line height, letter spacing, and text alignment.`,

    "CSS Backgrounds and Borders": `
- Create cards with gradient backgrounds and different border styles.
- Design a hero section with background images and overlay effects.
- Build decorative elements using CSS border-radius and multiple borders.`,

    "CSS Display and Positioning": `
- Create layouts using block, inline, inline-block, and none display properties.
- Build a sticky header and fixed sidebar using different position values.
- Design overlapping elements using relative and absolute positioning.`,

   "CSS Flexbox Layout":`
- Create a responsive navigation bar using flexbox alignment properties.
- Build a card layout that distributes space evenly using flex-grow and flex-shrink.
- Design a centered modal dialog using flexbox centering techniques.`,
  
    "CSS Grid Layout":`
- Create a magazine-style layout with grid-template-areas and grid lines.
- Build a responsive photo gallery using auto-fit and minmax functions.
- Design a dashboard layout with nested grids and grid item placement.`,
    
     "CSS Pseudo-classes and Pseudo-elements":`
- Style form inputs with hover, focus, and validation pseudo-classes.
- Create decorative elements using ::before and ::after pseudo-elements.
- Build an interactive menu with nth-child selectors and state changes.`,
   
    "CSS Tables and Lists Styling":`
- Style a data table with alternating row colors and hover effects.
- Create custom bullet points for lists using list-style and pseudo-elements.
- Design a pricing comparison table with responsive stacking.`,

   "CSS Forms and Input Styling":`
- Create a modern signup form with custom input styling and focus states.
- Build form validation indicators using pseudo-classes and custom styling.
- Design accessible form controls with proper labels and error messages.`,

    "CSS CSS Navigation and Menu Design":`
- Create a horizontal navigation menu with dropdown submenus.
- Build a mobile-friendly hamburger menu with CSS-only toggle functionality.
- Design breadcrumb navigation with separators using pseudo-elements.`,
  
     "CSS Card and Component Design":`
- Create reusable card components with images, text, and action buttons.
- Build testimonial cards with profile images and quote styling.
- Design product cards with hover effects and price badges.  `,

     "CSS Specificity and Cascade":`
- Create conflicting styles to demonstrate specificity hierarchy and resolution.
- Build a component library showing how inheritance affects nested elements.
- Design a theme system using CSS custom properties and cascade rules.`,

    "CSS Transitions, Animations and Effects":`
- Create smooth hover transitions for buttons and navigation elements.
- Build a loading spinner using CSS keyframe animations.
- Design entrance animations for content sections using transition delays.  `,
 
      "CSS Transformations(2D & 3D)":`
- Create interactive cards that flip and rotate on hover using 2D transforms.
- Build a 3D cube gallery with perspective and transform-style properties.
- Design animated icons using scale, rotate, and translate transformations.  `,

      "CSS Media Queries":`
- Create a responsive layout that adapts to mobile, tablet, and desktop screens.
- Build a responsive typography system with fluid scaling across breakpoints.
- Design a responsive navigation that changes structure on different screen sizes.  `,

       "CSS Variables and Custom Properties":`
- Create a dark/light theme switcher using CSS custom properties.
- Build a component color system with CSS variables for consistent theming.
- Design a responsive spacing system using CSS custom properties and calc().  `,

    "CSS Gradients and Patterns":`
- Create colorful backgrounds using linear and radial gradients.
- Build repeating patterns using CSS gradients for decorative elements.
- Design gradient text effects and animated gradient backgrounds.   `,

    "CSS Box Shadow and Text Effects":`
- Create realistic depth effects using multiple box shadows.
- Build glowing buttons and cards with colored shadow effects.
- Design text effects including shadows, outlines, and 3D appearances.    `,

    "CSS Filters and Blend Modes":`
- Create image galleries with filter effects like blur, brightness, and contrast.
- Build overlay effects using different CSS blend modes.
- Design creative image treatments using filter functions and mix-blend-mode.    `,
 
     "CSS Responsive Images":`
- Implement responsive images using object-fit and object-position.
- Create art direction responsive images with different crops for different screens.
- Build an adaptive image gallery that maintains aspect ratios across devices   `,
     
        "CSS Custom Fonts and Icon Fonts":`
- Load and implement custom web fonts with proper fallbacks.
- Create an icon system using icon fonts and CSS positioning.
- Build typography hierarchy using multiple custom font families.   `,

        "CSS Modal and Popup Design":`
- Create accessible modal dialogs with backdrop blur and animations.
- Build tooltip components with CSS-only positioning and arrow indicators.
- Design notification popups with different states and auto-dismiss functionality. `,

       "CSS Layout Patterns":`
- Create common layout patterns like holy grail, pancake, and sidebar layouts.
- Build responsive layout components that work across different content lengths.
- Design flexible layout systems using modern CSS techniques.`,
     
      "CSS Performance & Best Practices":`
- Optimize CSS selectors and eliminate unused styles for better performance.
- Create maintainable CSS architecture using methodologies like BEM.
- Build a style guide demonstrating consistent naming conventions and organization.`,
  }
  return exercises[lessonTitle] || "1. Basic exercise\n2. Advanced exercise\n3. Project work"
}

const getCSSQuiz = (lessonTitle) => {
  const quizzes = {
  "Introduction to CSS": [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Colorful Style Sheets"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is the correct way to link an external CSS file?",
      options: [
        "<link rel='stylesheet' type='text/css' href='styles.css'>",
        "<style src='styles.css'>",
        "<css>styles.css</css>",
        "<link href='styles.css' type='css'>"
      ],
      correctAnswer: 0
    },
    {
      question: "What are the three main ways to add CSS to HTML?",
      options: [
        "Inline, Internal, External",
        "Direct, Indirect, Remote",
        "Local, Global, Universal",
        "Primary, Secondary, Tertiary"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Fundamentals and Selectors": [
    {
      question: "Which selector targets elements with class 'highlight'?",
      options: [
        ".highlight",
        "#highlight",
        "highlight",
        "*highlight"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the CSS selector 'div > p' target?",
      options: [
        "Paragraph elements that are direct children of div elements",
        "All paragraph elements inside div elements",
        "Div elements followed by paragraph elements",
        "Div elements that contain the text 'p'"
      ],
      correctAnswer: 0
    },
    {
      question: "Which selector has the highest specificity?",
      options: [
        "#navbar ul li a",
        ".nav-item a:hover",
        "div.container p",
        "* { color: red; }"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Units and Values": [
    {
      question: "What is the difference between 'em' and 'rem' units?",
      options: [
        "em is relative to parent font-size, rem is relative to root font-size",
        "em is absolute, rem is relative",
        "em is for width, rem is for height",
        "There is no difference"
      ],
      correctAnswer: 0
    },
    {
      question: "Which unit is best for responsive design?",
      options: [
        "% (percentage)",
        "px (pixels)",
        "pt (points)",
        "cm (centimeters)"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'vw' stand for?",
      options: [
        "Viewport Width",
        "Virtual Width",
        "Variable Width",
        "Visible Width"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Box Model and Layout": [
    {
      question: "What is the correct order of the CSS box model from inside to outside?",
      options: [
        "Content, Padding, Border, Margin",
        "Margin, Border, Padding, Content",
        "Content, Border, Padding, Margin",
        "Padding, Content, Border, Margin"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'box-sizing: border-box' do?",
      options: [
        "Makes width and height include padding and border",
        "Makes the box transparent",
        "Removes the border from the box",
        "Makes the box take up full width"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you center a block element horizontally?",
      options: [
        "margin: 0 auto;",
        "text-align: center;",
        "display: center;",
        "position: center;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Colors and Typography": [
    {
      question: "Which CSS property is used to change the font family?",
      options: [
        "font-family",
        "font-type",
        "text-family",
        "font-style"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the difference between 'font-weight: bold' and 'font-weight: 700'?",
      options: [
        "They are equivalent",
        "Bold is darker than 700",
        "700 is darker than bold",
        "Bold only works with certain fonts"
      ],
      correctAnswer: 0
    },
    {
      question: "Which color format supports transparency?",
      options: [
        "rgba() and hsla()",
        "hex and rgb()",
        "Only hex colors",
        "Only named colors"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Backgrounds and Borders": [
    {
      question: "How do you prevent a background image from repeating?",
      options: [
        "background-repeat: no-repeat;",
        "background: no-repeat;",
        "repeat: none;",
        "background-tile: false;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'background-size: cover' do?",
      options: [
        "Scales the image to cover the entire container",
        "Displays the image at its original size",
        "Repeats the image to cover the container",
        "Crops the image to fit the container"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a rounded corner border?",
      options: [
        "border-radius: 10px;",
        "border-corner: round;",
        "corner-radius: 10px;",
        "border-round: 10px;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Display and Positioning": [
    {
      question: "What is the default position value for HTML elements?",
      options: [
        "static",
        "relative",
        "absolute",
        "fixed"
      ],
      correctAnswer: 0
    },
    {
      question: "Which display value removes an element from the document flow?",
      options: [
        "none",
        "hidden",
        "invisible",
        "remove"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'position: sticky' do?",
      options: [
        "Elements stick to viewport when scrolling past them",
        "Elements cannot be moved",
        "Elements stick to their parent",
        "Elements become fixed at the top"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Flexbox Layout": [
    {
      question: "What property makes an element a flex container?",
      options: [
        "display: flex;",
        "flex: container;",
        "layout: flex;",
        "flex-container: true;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you center items both horizontally and vertically in flexbox?",
      options: [
        "justify-content: center; align-items: center;",
        "text-align: center; vertical-align: middle;",
        "margin: auto; padding: auto;",
        "center: both;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'flex: 1' mean?",
      options: [
        "The item will grow to fill available space",
        "The item will shrink to minimum size",
        "The item will be 1 pixel wide",
        "The item will be the first in order"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Grid Layout": [
    {
      question: "How do you create a 3-column grid layout?",
      options: [
        "grid-template-columns: 1fr 1fr 1fr;",
        "grid-columns: 3;",
        "columns: 3;",
        "display: grid-3;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'grid-gap' control?",
      options: [
        "Space between grid items",
        "Size of grid items",
        "Number of grid columns",
        "Grid item alignment"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you make a grid item span 2 columns?",
      options: [
        "grid-column: span 2;",
        "column-span: 2;",
        "grid-width: 2;",
        "columns: 2;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Pseudo-classes and Pseudo-elements": [
    {
      question: "What is the difference between :hover and ::before?",
      options: [
        ":hover is a pseudo-class, ::before is a pseudo-element",
        "They are the same thing",
        ":hover creates content, ::before doesn't",
        "::before is older syntax"
      ],
      correctAnswer: 0
    },
    {
      question: "Which pseudo-class targets every other element?",
      options: [
        ":nth-child(odd) or :nth-child(even)",
        ":alternate",
        ":every-other",
        ":second"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the ::after pseudo-element do?",
      options: [
        "Inserts content after an element",
        "Styles elements that come after",
        "Applies styles after page load",
        "Creates a copy of the element"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Tables and Lists Styling": [
    {
      question: "How do you remove bullet points from a list?",
      options: [
        "list-style: none;",
        "bullets: none;",
        "list-bullets: hidden;",
        "display: no-bullets;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'border-collapse: collapse' do for tables?",
      options: [
        "Merges adjacent borders into single borders",
        "Removes all borders",
        "Makes borders thicker",
        "Hides the table"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you style alternating table rows?",
      options: [
        "tr:nth-child(even) { background: #f2f2f2; }",
        "tr:alternate { background: #f2f2f2; }",
        "table:stripe { background: #f2f2f2; }",
        "tr:every-other { background: #f2f2f2; }"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Forms and Input Styling": [
    {
      question: "How do you style a focused input field?",
      options: [
        "input:focus { }",
        "input.focus { }",
        "input[focused] { }",
        "input:active { }"
      ],
      correctAnswer: 0
    },
    {
      question: "What property removes the default outline on focused elements?",
      options: [
        "outline: none;",
        "border: none;",
        "focus: none;",
        "outline-style: hidden;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you style a disabled form element?",
      options: [
        "input:disabled { }",
        "input.disabled { }",
        "input[status='disabled'] { }",
        "input:not-active { }"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Navigation and Menu Design": [
    {
      question: "How do you create a horizontal navigation menu?",
      options: [
        "display: flex; or float: left; on list items",
        "direction: horizontal;",
        "menu-type: horizontal;",
        "nav-style: horizontal;"
      ],
      correctAnswer: 0
    },
    {
      question: "What's the best way to create a dropdown menu on hover?",
      options: [
        "li:hover > ul { display: block; }",
        "ul:hover { dropdown: true; }",
        "nav:hover .menu { show: true; }",
        "menu:hover { expand: down; }"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a mobile-friendly hamburger menu?",
      options: [
        "Use media queries and toggle display property",
        "menu-style: hamburger;",
        "nav-type: mobile;",
        "display: mobile-menu;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Card and Component Design": [
    {
      question: "What's essential for creating a card component?",
      options: [
        "Background, padding, border-radius, and box-shadow",
        "Only background and border",
        "Just padding and margin",
        "Only border-radius"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a hover effect on a card?",
      options: [
        ".card:hover { transform: translateY(-5px); box-shadow: 0 4px 8px rgba(0,0,0,0.2); }",
        ".card:hover { size: larger; }",
        ".card:hover { highlight: true; }",
        ".card:hover { effect: hover; }"
      ],
      correctAnswer: 0
    },
    {
      question: "What's the best way to make cards responsive?",
      options: [
        "Use CSS Grid or Flexbox with media queries",
        "card-responsive: true;",
        "Use fixed pixel widths",
        "responsive-cards: auto;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Specificity and Cascade": [
    {
      question: "What is the order of CSS specificity from highest to lowest?",
      options: [
        "Inline styles, IDs, Classes/Attributes/Pseudo-classes, Elements",
        "Classes, IDs, Elements, Inline styles",
        "Elements, Classes, IDs, Inline styles",
        "IDs, Classes, Elements, Inline styles"
      ],
      correctAnswer: 0
    },
    {
      question: "What does !important do?",
      options: [
        "Overrides normal specificity rules",
        "Makes the rule load faster",
        "Marks the rule as essential",
        "Prevents the rule from being overridden"
      ],
      correctAnswer: 0
    },
    {
      question: "Which rule will be applied: #nav .item or .nav-item?",
      options: [
        "#nav .item (higher specificity)",
        ".nav-item (comes later)",
        "Both will apply",
        "Neither will apply"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Transitions, Animations and Effects": [
    {
      question: "What's the basic syntax for a CSS transition?",
      options: [
        "transition: property duration timing-function delay;",
        "animate: property duration;",
        "transition-effect: property time;",
        "animation: property duration;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a keyframe animation?",
      options: [
        "@keyframes name { from { } to { } }",
        "@animate name { start { } end { } }",
        "@transition name { begin { } finish { } }",
        "@effect name { 0% { } 100% { } }"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'animation-fill-mode: forwards' do?",
      options: [
        "Keeps the final animation state after completion",
        "Plays the animation forwards only",
        "Fills the animation with the starting values",
        "Makes the animation run indefinitely"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Transformations (2D & 3D)": [
    {
      question: "How do you rotate an element 45 degrees?",
      options: [
        "transform: rotate(45deg);",
        "rotation: 45deg;",
        "rotate: 45;",
        "transform-rotate: 45deg;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'transform: scale(2)' do?",
      options: [
        "Makes the element twice as large",
        "Moves the element 2 pixels",
        "Creates 2 copies of the element",
        "Rotates the element 2 degrees"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you enable 3D transformations?",
      options: [
        "transform-style: preserve-3d;",
        "transform: 3d;",
        "perspective: 3d;",
        "dimension: 3d;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Media Queries": [
    {
      question: "What's the correct syntax for a media query targeting screens smaller than 768px?",
      options: [
        "@media (max-width: 768px) { }",
        "@media screen < 768px { }",
        "@media width: max-768px { }",
        "@responsive (max-width: 768px) { }"
      ],
      correctAnswer: 0
    },
    {
      question: "Which approach is recommended for responsive design?",
      options: [
        "Mobile-first (min-width media queries)",
        "Desktop-first (max-width media queries)",
        "Tablet-first approach",
        "Fixed-width approach"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you target high-resolution displays?",
      options: [
        "@media (-webkit-min-device-pixel-ratio: 2) { }",
        "@media (resolution: high) { }",
        "@media (quality: retina) { }",
        "@media (dpi: high) { }"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Variables and Custom Properties": [
    {
      question: "How do you declare a CSS custom property?",
      options: [
        "--variable-name: value;",
        "$variable-name: value;",
        "var(variable-name): value;",
        "custom-property: variable-name value;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you use a CSS variable?",
      options: [
        "color: var(--primary-color);",
        "color: use(--primary-color);",
        "color: custom(--primary-color);",
        "color: get(--primary-color);"
      ],
      correctAnswer: 0
    },
    {
      question: "Where should global CSS variables be defined?",
      options: [
        ":root { }",
        "body { }",
        "html { }",
        "* { }"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Gradients and Patterns": [
    {
      question: "What's the syntax for a linear gradient from top to bottom?",
      options: [
        "background: linear-gradient(to bottom, #start, #end);",
        "background: gradient(top-bottom, #start, #end);",
        "background: linear(#start, #end, vertical);",
        "gradient: linear top-bottom #start #end;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a radial gradient?",
      options: [
        "background: radial-gradient(circle, #start, #end);",
        "background: circle-gradient(#start, #end);",
        "background: gradient-radial(#start, #end);",
        "background: round-gradient(#start, #end);"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you repeat a gradient pattern?",
      options: [
        "background: repeating-linear-gradient(45deg, #color1 0px, #color2 20px);",
        "background: linear-gradient(repeat, #color1, #color2);",
        "background: gradient-repeat(#color1, #color2);",
        "background: linear-gradient(#color1, #color2) repeat;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Box Shadow and Text Effects": [
    {
      question: "What's the correct syntax for box-shadow?",
      options: [
        "box-shadow: x-offset y-offset blur-radius color;",
        "shadow: x y blur color;",
        "box-effect: shadow x y blur color;",
        "shadow-box: x-offset y-offset blur color;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create an inset (inner) shadow?",
      options: [
        "box-shadow: inset 0 0 10px rgba(0,0,0,0.5);",
        "box-shadow: inner 0 0 10px rgba(0,0,0,0.5);",
        "shadow-type: inset; box-shadow: 0 0 10px rgba(0,0,0,0.5);",
        "box-shadow: 0 0 10px rgba(0,0,0,0.5) inside;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does text-shadow do?",
      options: [
        "Adds a shadow effect to text",
        "Makes text appear hollow",
        "Changes text opacity",
        "Creates text outline"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Filters and Blend Modes": [
    {
      question: "How do you apply a blur effect to an element?",
      options: [
        "filter: blur(5px);",
        "blur: 5px;",
        "effect: blur(5px);",
        "blur-filter: 5px;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does 'mix-blend-mode: multiply' do?",
      options: [
        "Blends the element with background using multiply mode",
        "Multiplies the element size",
        "Creates multiple copies of the element",
        "Increases element opacity"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you make an image grayscale?",
      options: [
        "filter: grayscale(100%);",
        "color: grayscale;",
        "image-style: grayscale;",
        "grayscale: true;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Responsive Images": [
    {
      question: "What makes an image responsive?",
      options: [
        "max-width: 100%; height: auto;",
        "width: responsive;",
        "image-size: auto;",
        "responsive: true;"
      ],
      correctAnswer: 0
    },
    {
      question: "What does the 'object-fit' property control?",
      options: [
        "How content fits within its container",
        "Object position on the page",
        "Object visibility",
        "Object border properties"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you serve different images for different screen sizes?",
      options: [
        "Use <picture> element with <source> tags",
        "Use multiple <img> tags with media queries",
        "Use image-responsive property",
        "Use auto-image sizing"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Custom Fonts and Icon Fonts": [
    {
      question: "How do you import a web font from Google Fonts?",
      options: [
        "@import url('https://fonts.googleapis.com/css?family=FontName');",
        "font-import: 'https://fonts.googleapis.com/css?family=FontName';",
        "@font url('https://fonts.googleapis.com/css?family=FontName');",
        "import-font: 'https://fonts.googleapis.com/css?family=FontName';"
      ],
      correctAnswer: 0
    },
    {
      question: "What's the syntax for defining a custom font face?",
      options: [
        "@font-face { font-family: 'CustomFont'; src: url('font.woff2'); }",
        "@custom-font { name: 'CustomFont'; source: 'font.woff2'; }",
        "@font { family: 'CustomFont'; file: 'font.woff2'; }",
        "font-define: 'CustomFont' from 'font.woff2';"
      ],
      correctAnswer: 0
    },
    {
      question: "What's a benefit of using icon fonts over images?",
      options: [
        "Scalable, lightweight, and can be styled with CSS",
        "They load faster than CSS",
        "They work better on mobile devices",
        "They don't require internet connection"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Modal and Popup Design": [
    {
      question: "How do you create a modal overlay?",
      options: [
        "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);",
        "display: modal; overlay: true;",
        "modal-overlay: fullscreen;",
        "position: overlay; size: full;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you center a modal in the viewport?",
      options: [
        "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);",
        "modal-position: center;",
        "position: center; display: modal;",
        "margin: auto; position: middle;"
      ],
      correctAnswer: 0
    },
    {
      question: "What's important for modal accessibility?",
      options: [
        "Focus management and keyboard navigation",
        "Only visual styling",
        "Bright colors and animations",
        "Large font sizes"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Layout Patterns": [
    {
      question: "What is the correct syntax for a Holy Grail layout?",
      options: [
        "display: grid; grid-template-columns: 200px 1fr 200px;",
        "display: flex; flex-direction: row;",
        "display: block; float: left;",
        "display: inline-block; position: relative;"
      ],
      correctAnswer: 0
    },
    {
      question: "How do you create a sticky footer?",
      options: [
        "min-height: 100vh; display: flex; flex-direction: column;",
        "height: 100vh; position: relative;",
        "height: 100%; display: block;",
        "min-height: 100%; position: absolute;"
      ],
      correctAnswer: 0
    },
    {
      question: "What's the best approach for a responsive card grid?",
      options: [
        "display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));",
        "display: flex; flex-wrap: wrap; width: 33.33%;",
        "float: left; width: calc(100% / 3);",
        "display: inline-block; width: auto;"
      ],
      correctAnswer: 0
    }
  ],

  "CSS Performance & Best Practices": [
    {
      question: "Which is better for performance?",
      options: [
        "Classes over inline styles",
        "Inline styles over classes",
        "IDs over classes",
        "Universal selectors everywhere"
      ],
      correctAnswer: 0
    },
    {
      question: "What's a CSS best practice for maintainability?",
      options: [
        "Use consistent naming conventions and organize code logically",
        "Put all styles in one large file",
        "Use only inline styles",
        "Avoid using classes"
      ],
      correctAnswer: 0
    },
    {
      question: "How can you optimize CSS loading?",
      options: [
        "Minimize CSS files, use critical CSS, and load non-critical CSS async",
        "Load all CSS files at once",
        "Use only external stylesheets",
        "Avoid using CSS altogether"
      ],
      correctAnswer: 0
    }
  ] 
   
  }
  return quizzes[lessonTitle] || [
    {
      question: `What is the main concept of ${lessonTitle.toLowerCase()}?`,
      options: ["Correct answer", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0
    },
    {
      question: `Which of the following is true about ${lessonTitle.toLowerCase()}?`,
      options: ["Correct statement", "False statement 1", "False statement 2", "False statement 3"],
      correctAnswer: 0
    },
    {
      question: `What is the best practice for ${lessonTitle.toLowerCase()}?`,
      options: ["Best practice", "Common mistake 1", "Common mistake 2", "Common mistake 3"],
      correctAnswer: 0
    }
  ]
}

// Module plan for CSS course
function getCSSModules() {
  return [
    {
      title: "Beginner",
      lessons: [
        "Introduction to CSS",
        "CSS Fundamentals and Selectors",
        "CSS Units and Values",
        "CSS Box Model and Layout",
        "CSS Colors and Typography",
        "CSS Backgrounds and Borders",
      
      ]
    },
    {
      title: "Intermediate",
      lessons: [
        "CSS Display and Positioning",
        "CSS Flexbox Layout",
        "CSS Grid Layout",
         "CSS Pseudo-classes and Pseudo-elements",
         "CSS Tables and Lists Styling",
          "CSS Forms and Input Styling",
         "CSS Navigation and Menu Design",
         "CSS Card and Component Design",
       
      ]
    },
    {
      title: "Advanced",
      lessons: [
        "CSS Specificity and Cascade",
        "CSS Transitions, Animations and Effects",
        "CSS Transformations(2D & 3D)",
         "CSS Media Queries",
        "CSS Variables and Custom Properties",
        "CSS Gradients and Patterns",
        "CSS Box Shadow and Text Effects",
        "CSS Filters and Blend Modes",
        "CSS Responsive Images",
          "CSS Custom Fonts and Icon Fonts",
         "CSS Modal and Popup Design",
          "CSS Layout Patterns",
          "CSS Performance & Best Practices",
      
      ]
    }
  ];
}

// Optional: quick level lookup
function getCSSLessonLevel(lessonTitle) {
  const plan = getCSSModules();
  if (plan[0].lessons.includes(lessonTitle)) return "beginner";
  if (plan[1].lessons.includes(lessonTitle)) return "intermediate";
  if (plan[2].lessons.includes(lessonTitle)) return "advanced";
  return "intermediate"; // default
}

// Add to exports
module.exports.getCSSModules = getCSSModules;
module.exports.getCSSLessonLevel = getCSSLessonLevel;
// Export content helpers used by seeder
module.exports.getCSSLessonConcepts = getCSSLessonConcepts;
module.exports.getCSSCodeExample = getCSSCodeExample;
module.exports.getCSSCodeExplanation = getCSSCodeExplanation;
module.exports.getCSSExercises = getCSSExercises;
module.exports.getCSSQuiz = getCSSQuiz;