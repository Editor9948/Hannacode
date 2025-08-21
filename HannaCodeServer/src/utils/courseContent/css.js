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

    "CSS Transitions and Animations": `
- Transition properties
- Animation keyframes
- Timing functions
- Animation properties
- Performance considerations
- Browser support
- Best practices for animations`,

    "CSS Transformations": `
- Transform properties
- 2D and 3D transforms
- Transform origin
- Perspective and backface
- Transform functions
- Performance optimization
- Browser compatibility`,

    "CSS Media Queries": `
- Media query syntax
- Viewport and device features
- Breakpoint strategies
- Mobile-first approach
- Responsive design patterns
- Print styles
- Media query best practices`,

    "CSS Variables and Custom Properties": `
- CSS custom properties syntax
- Variable scope and inheritance
- Fallback values
- Dynamic updates with JavaScript
- Browser support and polyfills
- Best practices for naming
- Performance considerations`,

    "CSS Pseudo-classes and Pseudo-elements": `
- Structural pseudo-classes
- State-based pseudo-classes
- Form-related pseudo-classes
- Pseudo-element syntax
- Generated content
- Common use cases
- Browser compatibility`,

    "CSS Specificity and Cascade": `
- Specificity calculation
- Cascade order
- !important rule
- Inheritance
- Selector specificity
- Best practices
- Common pitfalls`,

    "CSS Units and Values": `
- Absolute units (px, pt, cm)
- Relative units (em, rem, %)
- Viewport units (vw, vh)
- CSS calc() function
- Custom properties
- Unit conversion
- Responsive units`,

    "CSS Box Shadow and Text Effects": `
- Box shadow properties
- Multiple shadows
- Text shadow effects
- Drop shadows
- Inner shadows
- Performance optimization
- Browser support`,

    "CSS Gradients and Patterns": `
- Linear gradients
- Radial gradients
- Conic gradients
- Gradient patterns
- Repeating gradients
- Color stops
- Browser compatibility`,

    "CSS Filters and Blend Modes": `
- Filter functions
- Blend mode properties
- Image effects
- Color adjustments
- Performance impact
- Browser support
- Fallback strategies`,

    "CSS Responsive Images": `
- srcset attribute
- sizes attribute
- picture element
- Art direction
- Image formats
- Loading strategies
- Performance optimization`,

    "CSS Custom Fonts and Icon Fonts": `
- @font-face rule
- Font formats
- Font loading strategies
- Icon font implementation
- Font optimization
- Fallback fonts
- Performance considerations`,

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
- Hamburger menu
- Responsive design
- Accessibility features`,

    "CSS Card and Component Design": `
- Card layout
- Component structure
- Hover effects
- Shadow effects
- Responsive cards
- Component variants
- Best practices`,

    "CSS Modal and Popup Design": `
- Modal structure
- Overlay effects
- Animation
- Focus management
- Keyboard navigation
- Responsive design
- Accessibility features`,

    "CSS Loading and Animation Effects": `
- Loading spinners
- Progress indicators
- Skeleton loading
- Animation keyframes
- Transition effects
- Performance optimization
- Browser support`,

    "CSS Layout Patterns": `
- Holy Grail layout
- Sticky footer
- Sidebar layouts
- Card grid
- Masonry layout
- Responsive patterns
- Modern layout techniques`,

      }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getCSSCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to CSS": `
// Example 1: What is CSS and why is it used
    <!-- Without CSS - Plain HTML -->
<h1>Welcome to My Website</h1>
<p>This is a paragraph with no styling.</p>

<!-- With CSS - Styled HTML -->
<style>
h1 {
    color: #2c3e50;
    font-family: 'Arial', sans-serif;
    text-align: center;
    margin-bottom: 20px;
}

p {
    color: #34495e;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
}
</style>

// Example 2: Ways to include CSS (Inline) 
<h1 style="color: red; font-size: 24px; text-decoration: underline;">
    This heading uses inline CSS
</h1>
<p style="background-color: yellow; padding: 10px;">
    This paragraph has inline styling
</p>

//Ways to include CSS (Internal)
    <!DOCTYPE html>
<html>
<head>
    <style>
        .header {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
        }
        
        .content {
            margin: 20px;
            font-family: Georgia, serif;
        }
    </style>
</head>
<body>
    <div class="header">Internal CSS Example</div>
    <div class="content">This content is styled with internal CSS</div>
</body>
</html>

//Ways to include CSS (External)
   /* External stylesheet */
body {
    font-family: 'Helvetica', sans-serif;
    background-color: #f8f9fa;
    margin: 0;
    padding: 0;
}

.navigation {
    background-color: #2c3e50;
    padding: 15px;
}

.nav-link {
    color: white;
    text-decoration: none;
    margin-right: 20px;
}

.nav-link:hover {
    color: #3498db;
}

   <!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navigation">
        <a href="#" class="nav-link">Home</a>
        <a href="#" class="nav-link">About</a>
        <a href="#" class="nav-link">Contact</a>
    </nav>
</body>
</html>

// Example 3: CSS Syntax and Rules
/* Basic CSS Rule Syntax */
selector {
    property: value;
    property: value;
}

/* Examples of different selector types */

/* Element Selector */
h1 {
    color: #2c3e50;
    font-size: 2em;
}

/* Class Selector */
.highlight {
    background-color: yellow;
    padding: 5px;
}

/* ID Selector */
#main-content {
    max-width: 800px;
    margin: 0 auto;
}

/* Attribute Selector */
input[type="email"] {
    border: 2px solid #3498db;
    border-radius: 4px;
}

/* Descendant Selector */
.article p {
    line-height: 1.8;
    margin-bottom: 15px;
}

/* Multiple Selectors */
h1, h2, h3 {
    font-family: 'Arial', sans-serif;
    color: #34495e;
}

/* Pseudo-class Selector */
a:hover {
    color: #e74c3c;
    text-decoration: underline;
}

// Example 4: The Cascade and Specificity Basics
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Specificity: 1 (element selector) */
        p {
            color: blue;
            font-size: 16px;
        }
        
        /* Specificity: 10 (class selector) */
        .intro {
            color: green;
            font-weight: bold;
        }
        
        /* Specificity: 100 (ID selector) */
        #special {
            color: red;
            text-decoration: underline;
        }
        
        /* Specificity: 11 (element + class) */
        p.highlight {
            color: orange;
            background-color: yellow;
        }
        
        /* Specificity: 110 (ID + class) */
        #special.intro {
            color: purple;
        }
        
        /* !important overrides specificity */
        .override {
            color: pink !important;
        }
    </style>
</head>
<body>
    <!-- Examples of cascade and specificity -->
    
    <!-- This will be blue (only element selector applies) -->
    <p>Regular paragraph text</p>
    
    <!-- This will be green (class selector wins over element) -->
    <p class="intro">Introduction paragraph</p>
    
    <!-- This will be red (ID selector wins over class) -->
    <p id="special" class="intro">Special paragraph</p>
    
    <!-- This will be orange (p.highlight is more specific than .intro) -->
    <p class="intro highlight">Highlighted intro paragraph</p>
    
    <!-- This will be purple (ID + class wins) -->
    <p id="special" class="intro highlight">Most specific paragraph</p>
    
    <!-- This will be pink (!important overrides everything) -->
    <p id="special" class="intro override">Override paragraph</p>
    
    <!-- Inline styles have highest specificity (except !important) -->
    <p class="intro" style="color: black;">Inline styled paragraph</p>
</body>
</html>


// Example 5: Best Practices for Managing Cascade:
/*  Use classes over IDs for styling */
.primary-button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
}

/* Avoid !important unless absolutely necessary */
.emergency-only {
    color: red !important; /* Use sparingly */
}

/* Organize CSS by specificity (low to high) */
/* Base styles */
button { font-family: inherit; }

/* Component styles */
.btn { padding: 8px 16px; }

/* Modifier styles */
.btn--large { padding: 12px 24px; }

/* State styles */
.btn:hover { opacity: 0.8; }`,

    "CSS Fundamentals and Selectors": `
// Example 1: Basic Selectors 
.element { /* Type selector */ }
.class-name { /* Class selector */ }
#id-name { /* ID selector */ }

// Example 2: Attribute Selectors 
[type="text"] { /* Exact match */ }
[class*="btn"] { /* Contains */ }
[href^="https"] { /* Starts with */ }
[src$=".jpg"] { /* Ends with */ }

// Example 3: Combinators 
.parent > .child { /* Direct child */ }
.ancestor .descendant { /* Descendant */ }
.element + .sibling { /* Adjacent sibling */ }
.element ~ .sibling { /* General sibling */ }

// Example 4: Pseudo-classes 
.button:hover { /* Hover state */ }
.input:focus { /* Focus state */ }
.list-item:first-child { /* First child */ }
.link:visited { /* Visited link */ }

/* Pseudo-elements */
.paragraph::first-line { /* First line */ }
.quote::before { /* Before content */ }
.highlight::after { /* After content */ }
.selection::selection { /* Text selection */ }

/* Attribute selector with partial match and pseudo-class */
input[type^="pass"]:not(:disabled):focus {
  border: 2px solid #00b894;
  background: #dff9fb;
}

/* Complex combinator: style only the first link in a nav */
nav > ul > li:first-child > a {
  color: #fdcb6e;
  font-weight: bold;
}

/* Chained pseudo-classes and pseudo-elements */
.button:active::after {
  content: " (clicked)";
  color: #d35400;
}`,

    "CSS Box Model and Layout": `
// Example 1: Box Model 
.box {
    margin: 20px;
    border: 2px solid #333;
    padding: 15px;
    width: 200px;
    height: 100px;
    box-sizing: border-box;
}

/*] Margin Collapse */
.parent {
    margin-bottom: 20px;
}
.child {
    margin-top: 30px; /* Collapses with parent */
}

/* Display Properties */
.block {
    display: block;
    width: 100%;
}
.inline {
    display: inline;
    margin: 10px; /* Only horizontal margins work */
}
.inline-block {
    display: inline-block;
    width: 200px;
    margin: 10px;
}

/* Box Sizing */
.content-box {
    box-sizing: content-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;
    /* Total width: 250px */
}
.border-box {
    box-sizing: border-box;
    width: 200px;
    padding: 20px;
    border: 5px solid;
    /* Total width: 200px */
}
 
/* Responsive card with aspect ratio and clamp for padding */
.card {
  aspect-ratio: 16 / 9;
  padding: clamp(1rem, 2vw, 2rem);
  border: 1px solid #636e72;
  box-shadow: 0 8px 32px rgba(44, 62, 80, 0.18);
  margin: 2em auto;
  max-width: 600px;
  background: #fff;
}

/* Fluid container using min(), max(), and calc() */
.container {
  width: min(90vw, 1200px);
  min-height: calc(100vh - 60px);
  margin: 0 auto;
}`,

    "CSS Colors and Typography": `/* Color Formats */
.color-hex {
    color: #ff0000;
}
.color-rgb {
    color: rgb(255, 0, 0);
}
.color-rgba {
    color: rgba(255, 0, 0, 0.5);
}
.color-hsl {
    color: hsl(0, 100%, 50%);
}

/* Typography */
.text {
    font-family: 'Arial', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.5px;
    text-align: left;
    text-decoration: none;
    text-transform: none;
}

/* Web Fonts */
@font-face {
    font-family: 'CustomFont';
    src: url('font.woff2') format('woff2'),
         url('font.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

/* Text Effects */
.text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}
.text-gradient {
    background: linear-gradient(to right, #ff0000, #00ff00);
    -webkit-background-clip: text;
    color: transparent;
}
   
/* Responsive navbar with flexbox and order */
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: #6c5ce7;
  padding: 1em;
}
.navbar-logo {
  order: 1;
  flex: 0 0 120px;
}
.navbar-links {
  order: 2;
  flex: 1 1 auto;
  display: flex;
  justify-content: flex-end;
  gap: 2em;
}
@media (max-width: 600px) {
  .navbar {
    flex-direction: column;
    align-items: stretch;
  }
  .navbar-logo, .navbar-links {
    order: unset;
    justify-content: center;
  }
}`,

    "CSS Backgrounds and Borders": `/* Background Properties */
.background {
    background-color: #f0f0f0;
    background-image: url('image.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
}

/* Multiple Backgrounds */
.layered {
    background: 
        linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
        url('image.jpg') center/cover;
}

/* Border Properties */
.border {
    border-width: 2px;
    border-style: solid;
    border-color: #333;
    border-radius: 5px;
}

/* Border Radius */
.rounded {
    border-radius: 10px 20px 30px 40px;
}
.circle {
    border-radius: 50%;
}

/* Box Shadow */
.shadow {
    box-shadow: 2px 2px 5px rgba(0,0,0,0.3);
}
.inner-shadow {
    box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);
}`,

    "CSS Display and Positioning": `/* Display Properties */
.block {
    display: block;
}
.inline {
    display: inline;
}
.inline-block {
    display: inline-block;
}
.flex {
    display: flex;
}
.grid {
    display: grid;
}
.none {
    display: none;
}

/* Position Properties */
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

/* Z-index */
.layer-1 {
    z-index: 1;
}
.layer-2 {
    z-index: 2;
}

/* Float */
.float-left {
    float: left;
}
.float-right {
    float: right;
}
.clear {
    clear: both;
}`,

    "CSS Flexbox Layout": `/* Flex Container Properties */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

/* Flex Item Properties */
.flex-item {
    flex: 1 1 calc(25% - 20px);
    margin: 10px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid #ddd;
    text-align: center;
}

/* Flex Direction and Wrapping */
.flex-direction-row { flex-direction: row; }
.flex-direction-row-reverse { flex-direction: row-reverse; }
.flex-direction-column { flex-direction: column; }
.flex-direction-column-reverse { flex-direction: column-reverse; }
.flex-wrap { flex-wrap: wrap; }
.flex-wrap-reverse { flex-wrap: wrap-reverse; }`,

    "CSS Grid Layout": `/* Grid Container Properties */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

/* Grid Item Properties */
.grid-item {
    padding: 20px;
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

     "CSS Transitions and Animations": `
     /* TRANSITION PROPERTIES DETAILED */
.transition-button {
  background-color: #3498db;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  
  /* transition-property: Specifies which properties will animate */
  transition-property: background-color, transform, box-shadow;
  
  /* transition-duration: How long each transition takes */
  transition-duration: 0.3s; /* 300 milliseconds */
  
  /* transition-timing-function: Speed curve of transition */
  transition-timing-function: ease-in-out; /* Slow start, fast middle, slow end */
  
  /* transition-delay: Wait time before transition starts */
  transition-delay: 0s; /* No delay */
  
  /* Shorthand: property duration timing-function delay */
  transition: all 0.3s ease-in-out 0s;
}

.transition-button:hover {
  background-color: #2980b9; /* New value triggers transition */
  transform: translateY(-2px); /* Smooth upward movement */
  box-shadow: 0 4px 8px rgba(0,0,0,0.2); /* Shadow grows smoothly */
}

/* TIMING FUNCTIONS EXPLAINED */
.ease-linear { 
  transition-timing-function: linear; /* Constant speed throughout */
}

.ease-in { 
  transition-timing-function: ease-in; /* Slow start, then speeds up */
}

.ease-out { 
  transition-timing-function: ease-out; /* Fast start, then slows down */
}

.ease-in-out { 
  transition-timing-function: ease-in-out; /* Slow start and end, fast middle */
}

.cubic-bezier { 
  /* Custom timing: cubic-bezier(x1, y1, x2, y2) creates custom curves */
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Bounce effect */
}

/* KEYFRAMES AND ANIMATIONS DETAILED */
/* @keyframes: Defines animation sequence with percentage checkpoints */
@keyframes slideInFromLeft {
  0% { /* Starting point (can also use 'from') */
    transform: translateX(-100%); /* Element starts off-screen left */
    opacity: 0; /* Completely transparent */
  }
  50% { /* Midpoint of animation */
    opacity: 0.5; /* Half transparent */
  }
  100% { /* End point (can also use 'to') */
    transform: translateX(0); /* Element at normal position */
    opacity: 1; /* Fully visible */
  }
}

@keyframes bounce {
  /* Multiple keyframes create complex animations */
  0%, 20%, 50%, 80%, 100% { 
    transform: translateY(0); /* At rest position */
  }
  40% { 
    transform: translateY(-30px); /* High bounce */
  }
  60% { 
    transform: translateY(-15px); /* Lower bounce */
  }
}

/* ANIMATION PROPERTIES DETAILED */
.animated-element {
  /* animation-name: References the @keyframes rule */
  animation-name: slideInFromLeft;
  
  /* animation-duration: Total time for one animation cycle */
  animation-duration: 1s;
  
  /* animation-timing-function: Speed curve (same as transitions) */
  animation-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* animation-delay: Wait time before animation starts */
  animation-delay: 0.5s;
  
  /* animation-iteration-count: How many times to repeat */
  animation-iteration-count: 1; /* Play once, use 'infinite' for endless */
  
  /* animation-direction: Play direction */
  animation-direction: normal; /* normal | reverse | alternate | alternate-reverse */
  
  /* animation-fill-mode: What styles apply when animation isn't running */
  animation-fill-mode: forwards; /* Keep final keyframe styles after animation */
  
  /* Shorthand: name duration timing-function delay iteration-count direction fill-mode */
  animation: slideInFromLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.5s 1 normal forwards;
}

.bounce-element {
  /* Infinite looping animation */
  animation: bounce 2s infinite;
}

/* ANIMATION-FILL-MODE EXPLAINED */
.fill-mode-none {
  animation-fill-mode: none; /* No styles applied before/after animation */
}

.fill-mode-forwards {
  animation-fill-mode: forwards; /* Keep final keyframe styles after animation ends */
}

.fill-mode-backwards {
  animation-fill-mode: backwards; /* Apply first keyframe styles during delay period */
}

.fill-mode-both {
  animation-fill-mode: both; /* Apply backwards + forwards behavior */
}

/* ANIMATION-DIRECTION EXPLAINED */
.direction-normal {
  animation-direction: normal; /* Play from 0% to 100% */
}

.direction-reverse {
  animation-direction: reverse; /* Play from 100% to 0% */
}

.direction-alternate {
  animation-direction: alternate; /* Normal, then reverse, then normal... */
}

.direction-alternate-reverse {
  animation-direction: alternate-reverse; /* Reverse, then normal, then reverse... */
}

/* PERFORMANCE OPTIMIZATION PROPERTIES */
.gpu-optimized {
  /* will-change: Tells browser which properties will change for optimization */
  will-change: transform, opacity; /* Browser can prepare GPU acceleration */
  
  /* translateZ(0): Forces element onto GPU layer (hack for older browsers) */
  transform: translateZ(0); 
}

/* ACCESSIBILITY - RESPECTING USER PREFERENCES */
/* prefers-reduced-motion: Detects if user has requested reduced motion */
@media (prefers-reduced-motion: reduce) {
  * {
    /* Override all animations to be nearly instant for users who prefer reduced motion */
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
} `,

    "CSS Transformations": `
    /* 2D TRANSFORM FUNCTIONS DETAILED */
.transform-2d {
  /* translate(): Move element horizontally and/or vertically */
  transform: translateX(50px); /* Move 50px right */
  transform: translateY(100px); /* Move 100px down */
  transform: translate(50px, 100px); /* Move 50px right, 100px down */
  
  /* scale(): Resize element (1 = original, 0.5 = half, 2 = double) */
  transform: scale(1.5); /* 150% of original size */
  transform: scaleX(2); /* Double width only */
  transform: scaleY(0.5); /* Half height only */
  transform: scale(1.2, 0.8); /* 120% width, 80% height */
  
  /* rotate(): Rotate around center point */
  transform: rotate(45deg); /* 45 degrees clockwise */
  transform: rotate(-30deg); /* 30 degrees counter-clockwise */
  transform: rotate(0.25turn); /* Quarter turn (90 degrees) */
  transform: rotate(3.14159rad); /* Using radians (180 degrees) */
  
  /* skew(): Distort by tilting along axes */
  transform: skew(15deg, 5deg); /* Tilt 15deg on X-axis, 5deg on Y-axis */
  transform: skewX(15deg); /* Tilt only on X-axis */
  transform: skewY(5deg); /* Tilt only on Y-axis */
  
  /* Multiple transforms: Applied from right to left */
  transform: translate(50px, 100px) rotate(45deg) scale(1.2);
  /* This: 1) scales to 120%, 2) rotates 45deg, 3) moves 50px right, 100px down */
}

/* TRANSFORM-ORIGIN EXPLAINED */
.transform-origin-examples {
  width: 100px;
  height: 100px;
  
  /* transform-origin: Point around which transforms happen */
  transform-origin: top left; /* Transform from top-left corner */
  transform-origin: center center; /* Transform from center (default) */
  transform-origin: bottom right; /* Transform from bottom-right corner */
  transform-origin: 25% 75%; /* 25% from left, 75% from top */
  transform-origin: 10px 20px; /* Absolute positioning from top-left */
  transform-origin: left; /* Same as 'left center' */
  transform-origin: top; /* Same as 'center top' */
}

/* DEMONSTRATION OF TRANSFORM-ORIGIN EFFECTS */
.rotate-top-left {
  transform-origin: top left;
  transform: rotate(45deg); /* Rotates around top-left corner */
}

.rotate-center {
  transform-origin: center; /* Default */
  transform: rotate(45deg); /* Rotates around center */
}

.scale-bottom-right {
  transform-origin: bottom right;
  transform: scale(1.5); /* Scales from bottom-right corner */
}

/* 3D TRANSFORMS DETAILED */
.container-3d {
  /* perspective: Viewing distance for 3D transforms */
  perspective: 1000px; /* 1000px viewing distance - moderate 3D effect */
  /* Lower values (200px) = more dramatic 3D effect */
  /* Higher values (2000px) = more subtle 3D effect */
  
  /* perspective-origin: Viewing angle for 3D perspective */
  perspective-origin: center center; /* Look at center */
  perspective-origin: top left; /* Look from top-left angle */
  perspective-origin: 50% 25%; /* Custom viewing angle */
}

.transform-3d {
  /* 3D translate functions */
  transform: translateZ(50px); /* Move toward viewer */
  transform: translateZ(-50px); /* Move away from viewer */
  transform: translate3d(50px, 100px, 25px); /* X, Y, Z movement */
  
  /* 3D rotation functions */
  transform: rotateX(45deg); /* Rotate around X-axis (horizontal line through center) */
  transform: rotateY(60deg); /* Rotate around Y-axis (vertical line through center) */
  transform: rotateZ(30deg); /* Rotate around Z-axis (same as regular rotate) */
  transform: rotate3d(1, 1, 0, 45deg); /* Rotate 45deg around vector (1,1,0) */
  
  /* 3D scale functions */
  transform: scaleZ(2); /* Scale along Z-axis (affects 3D children) */
  transform: scale3d(1.2, 1.5, 1); /* Scale X, Y, Z axes independently */
  
  /* 3D-specific properties */
  transform-style: preserve-3d; /* Children positioned in 3D space */
  transform-style: flat; /* Children flattened to element's plane (default) */
  
  backface-visibility: hidden; /* Hide back face when element rotates */
  backface-visibility: visible; /* Show back face (default) */
}

/* PRACTICAL 3D EXAMPLES */
/* Card Flip Effect */
.card-flip {
  width: 300px;
  height: 200px;
  position: relative;
  /* preserve-3d: Allows front and back to exist in 3D space */
  transform-style: preserve-3d;
  /* Smooth transition for the flip */
  transition: transform 0.6s;
}

.card-flip:hover {
  /* rotateY(180deg): Flip card around Y-axis */
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute; /* Stack on top of each other */
  width: 100%;
  height: 100%;
  /* backface-visibility: hidden prevents showing through when flipped */
  backface-visibility: hidden;
  border-radius: 10px;
}

.card-back {
  /* Pre-rotate back face so it's hidden initially */
  transform: rotateY(180deg);
}

/* 3D Cube Construction */
.cube {
  width: 100px;
  height: 100px;
  /* preserve-3d: Essential for 3D cube effect */
  transform-style: preserve-3d;
  /* Rotate continuously around both axes */
  animation: rotateCube 4s infinite linear;
}

@keyframes rotateCube {
  0% { 
    transform: rotateX(0deg) rotateY(0deg); 
  }
  100% { 
    transform: rotateX(360deg) rotateY(360deg); 
  }
}

.cube-face {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  opacity: 0.8;
}

/* Each face positioned to form a cube */
.cube-face:nth-child(1) { 
  transform: rotateY(0deg) translateZ(50px); /* Front face */
}
.cube-face:nth-child(2) { 
  transform: rotateY(90deg) translateZ(50px); /* Right face */
}
.cube-face:nth-child(3) { 
  transform: rotateY(180deg) translateZ(50px); /* Back face */
}
.cube-face:nth-child(4) { 
  transform: rotateY(-90deg) translateZ(50px); /* Left face */
}
.cube-face:nth-child(5) { 
  transform: rotateX(90deg) translateZ(50px); /* Top face */
}
.cube-face:nth-child(6) { 
  transform: rotateX(-90deg) translateZ(50px); /* Bottom face */
}

/* PERFORMANCE OPTIMIZATION */
.optimized-transform {
  /* will-change: Hint to browser about upcoming changes */
  will-change: transform; /* Browser can optimize for transform changes */
  
  /* translateZ(0): Force GPU acceleration (creates new layer) */
  transform: translateZ(0);
}

/* TRANSFORM MATRIX EXPLAINED (Advanced) */
.matrix-transform {
  /* matrix(a, b, c, d, e, f) combines scale, skew, and translate */
  /* a: scaleX, b: skewY, c: skewX, d: scaleY, e: translateX, f: translateY */
  transform: matrix(1.5, 0.2, -0.1, 1.2, 50, 100);
  /* Equivalent to: scale(1.5, 1.2) skew(-0.1rad, 0.2rad) translate(50px, 100px) */
}

.matrix3d-transform {
  /* matrix3d() for 3D transforms - 16 values for complete 3D transformation */
  transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 50, 100, 0, 1);
  /* This specific matrix equals translate3d(50px, 100px, 0) */
}`,

 "CSS Media Queries": `
 /* BASIC MEDIA QUERY SYNTAX EXPLAINED */

/* Media Type + Feature */
@media screen and (max-width: 768px) {
  /* screen: Targets computer screens, tablets, phones */
  /* max-width: 768px: Applies when viewport is 768px or smaller */
  .container {
    padding: 10px;
    font-size: 14px;
  }
}

@media print {
  /* print: Targets when page is being printed */
  .no-print {
    display: none; /* Hide elements when printing */
  }
}

/* LOGICAL OPERATORS EXPLAINED */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  /* 'and': Both conditions must be true */
  /* Applies when screen is between 769px and 1024px */
  .container {
    padding: 20px;
    font-size: 16px;
  }
}

@media screen and (orientation: portrait), screen and (max-width: 600px) {
  /* Comma acts as 'or': Either condition triggers this */
  /* Applies when device is portrait OR when width ≤ 600px */
  .mobile-layout {
    display: block;
  }
}

@media not screen {
  /* 'not': Inverts the media type */
  /* Applies to all media types EXCEPT screen */
  .print-only {
    display: block;
  }
}

/* BREAKPOINT STRATEGIES EXPLAINED */
/* Desktop-first approach (max-width) */
.desktop-first {
  /* Default styles for desktop */
  font-size: 18px;
  padding: 30px;
}

@media (max-width: 1024px) {
  /* Tablet styles - overrides desktop */
  .desktop-first {
    font-size: 16px;
    padding: 20px;
  }
}

@media (max-width: 768px) {
  /* Mobile styles - overrides tablet and desktop */
  .desktop-first {
    font-size: 14px;
    padding: 10px;
  }
}

/* MOBILE-FIRST APPROACH (RECOMMENDED) */
/* Base styles for mobile (smallest screens) */
.responsive-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 15px;
  padding: 10px;
}

/* min-width: Enhances base styles as screen gets larger */
@media (min-width: 768px) {
  /* Tablet and up - enhances mobile base */
  .responsive-grid {
    grid-template-columns: 1fr 1fr; /* Two columns */
    gap: 20px;
    padding: 20px;
  }
}

@media (min-width: 1024px) {
  /* Desktop and up - enhances tablet styles */
  .responsive-grid {
    grid-template-columns: repeat(3, 1fr); /* Three columns */
    gap: 30px;
    padding: 40px;
  }
}

@media (min-width: 1440px) {
  /* Large desktop - enhances desktop styles */
  .responsive-grid {
    grid-template-columns: repeat(4, 1fr); /* Four columns */
    max-width: 1200px; /* Prevent excessive width */
    margin: 0 auto; /* Center the grid */
  }
}

/* DEVICE FEATURES DETAILED */

/* ORIENTATION MEDIA FEATURE */
@media (orientation: portrait) {
  /* portrait: Height is greater than width */
  .image-gallery {
    grid-template-columns: 1fr 1fr; /* Fewer columns when tall */
  }
  
  .sidebar {
    position: static; /* Stack sidebar normally */
    width: 100%;
  }
}

@media (orientation: landscape) {
  /* landscape: Width is greater than height */
  .image-gallery {
    grid-template-columns: repeat(4, 1fr); /* More columns when wide */
  }
  
  .sidebar {
    position: fixed; /* Side panel when horizontal space available */
    width: 250px;
  }
}

/* HIGH DPI / RETINA DISPLAYS */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
  /* Targets displays with 2x pixel density or higher */
  /* Common on modern phones, tablets, and high-end monitors */
  .logo {
    background-image: url('logo@2x.png'); /* High-res image */
    background-size: 100px 50px; /* Scale down to intended size */
  }
  
  .icon {
    background-image: url('icon@2x.png');
    background-size: 24px 24px;
  }
}

/* HOVER CAPABILITY DETECTION */
@media (hover: hover) {
  /* Device CAN hover (mouse, trackpad) */
  .button:hover {
    background-color: #007bff;
    transform: translateY(-2px);
    cursor: pointer;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  }
}

@media (hover: none) {
  /* Device CANNOT hover (touch screens) */
  .button:active {
    background-color: #007bff; /* Use active state instead of hover */
  }
  
  .tooltip {
    display: none; /* Hide hover-based tooltips on touch devices */
  }
}

/* POINTER PRECISION DETECTION */
@media (pointer: coarse) {
  /* Primary input has limited precision (finger on touchscreen) */
  .button {
    min-height: 44px; /* Larger touch targets */
    min-width: 44px;
    padding: 12px 16px;
  }
  
  .nav-link {
    padding: 16px; /* More spacing between touch targets */
  }
}

@media (pointer: fine) {
  /* Primary input has high precision (mouse, stylus) */
  .button {
    min-height: 32px; /* Smaller targets acceptable */
    padding: 8px 12px;
  }
  
  .nav-link {
    padding: 8px 12px;
  }
}

/* USER PREFERENCE MEDIA QUERIES */

/* COLOR SCHEME PREFERENCE */
@media (prefers-color-scheme: dark) {
  /* User prefers dark themes */
  :root {
    --bg-color: #121212;
    --text-color: #ffffff;
    --border-color: #333333;
  }
  
  body {
    background-color: var(--bg-color);
    color: var(--text-color);
  }
}

@media (prefers-color-scheme: light) {
  /* User prefers light themes */
  :root {
    --bg-color: #ffffff;
    --text-color: #333333;
    --border-color: #dddddd;
  }
}

/* REDUCED MOTION PREFERENCE */
@media (prefers-reduced-motion: reduce) {
  /* User has reduced motion enabled (accessibility) */
  * {
    animation-duration: 0.01ms !important; /* Nearly instant animations */
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important; /* Disable smooth scrolling */
  }
}

@media (prefers-reduced-motion: no-preference) {
  /* User hasn't requested reduced motion */
  .scroll-container {
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }
}

/* CONTRAST PREFERENCE */
@media (prefers-contrast: high) {
  /* User prefers higher contrast */
  .button {
    border: 2px solid currentColor;
    font-weight: bold;
  }
  
  .text {
    text-shadow: 1px 1px 1px rgba(0,0,0,0.8);
  }
}

/* PRINT STYLES DETAILED */
@media print {
  /* Remove interactive elements for print */
  .no-print,
  nav,
  .sidebar,
  .ads,
  .comments {
    display: none !important;
  }
  
  /* Optimize colors for print */
  * {
    background: white !important;
    color: black !important;
    box-shadow: none !important;
    text-shadow: none !important;
  }
  
  /* Show link URLs after link text */
  a[href]:after {
    content: " (" attr(href) ")";
    font-size: 12px;
    color: #666;
  }
  
  /* Prevent page breaks inside elements */
  .keep-together {
    page-break-inside: avoid;
  }
  
  /* Force page breaks */
  .page-break {
    page-break-before: always;
  }
  
  /* Set page margins */
  @page {
    margin: 0.5in;
    size: letter; /* or A4, legal, etc. */
  }
}

/* COMPLEX MEDIA QUERIES */
@media screen and (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
  /* Multiple conditions: screen device, between 768-1024px wide, in landscape */
  .complex-layout {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}

@media screen and (min-width: 1200px) and (min-height: 800px) {
  /* Large screen with sufficient height */
  .full-height-layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
}

/* CONTAINER QUERIES (Modern Feature) */
.card-container {
  container-type: inline-size; /* Enable container queries */
  container-name: card; /* Optional: name the container */
}

@container card (min-width: 400px) {
  /* Applies when .card-container is at least 400px wide */
  /* Regardless of viewport size */
  .card {
    display: flex;
    flex-direction: row;
  }
  
  .card-image {
    width: 150px;
    flex-shrink: 0;
  }
}

@container (min-width: 600px) {
  /* Applies to any container that's 600px+ wide */
  .card {
    padding: 2rem;
  }
}

/* BREAKPOINT VARIABLES (CSS Custom Properties) */
:root {
  --mobile-max: 767px;
  --tablet-min: 768px;
  --tablet-max: 1023px;
  --desktop-min: 1024px;
  --large-desktop-min: 1440px;
}

/* Using breakpoint variables in media queries */
@media (max-width: 767px) { /* --mobile-max */
  .mobile-only {
    display: block;
  }
}

@media (min-width: 768px) { /* --tablet-min */
  .tablet-up {
    display: flex;
  }
}`, 

      "CSS Variables and Custom Properties": `
      /* CSS VARIABLE DECLARATION SYNTAX */
:root {
  /* :root selector targets document root (highest specificity for globals) */
  
  /* COLOR VARIABLES */
  --primary-color: #3498db;        /* Main brand color */
  --secondary-color: #2ecc71;      /* Supporting brand color */
  --accent-color: #e74c3c;         /* Highlight/warning color */
  --text-color: #333333;           /* Main text color */
  --background-color: #ffffff;     /* Page background */
  --border-color: #dddddd;         /* Default border color */
  
  /* TYPOGRAPHY VARIABLES */
  --font-family-primary: 'Roboto', sans-serif;    /* Main font */
  --font-family-secondary: 'Georgia', serif;      /* Accent font */
  --font-family-mono: 'Courier New', monospace;   /* Code font */
  
  --font-size-xs: 12px;            /* Extra small text */
  --font-size-sm: 14px;            /* Small text */
  --font-size-base: 16px;          /* Base font size */
  --font-size-lg: 18px;            /* Large text */
  --font-size-xl: 24px;            /* Extra large text */
  --font-size-xxl: 32px;           /* Heading size */
  
  --font-weight-light: 300;        /* Light weight */
  --font-weight-normal: 400;       /* Normal weight */
  --font-weight-medium: 500;       /* Medium weight */
  --font-weight-bold: 700;         /* Bold weight */
  
  --line-height-tight: 1.2;        /* Tight line spacing */
  --line-height-normal: 1.5;       /* Normal line spacing */
  --line-height-loose: 1.8;        /* Loose line spacing */
  
  /* SPACING VARIABLES */
  --spacing-xs: 4px;               /* Extra small spacing */
  --spacing-sm: 8px;               /* Small spacing */
  --spacing-md: 16px;              /* Medium spacing */
  --spacing-lg: 24px;              /* Large spacing */
  --spacing-xl: 32px;              /* Extra large spacing */
  --spacing-xxl: 48px;             /* Extra extra large spacing */
  
  /* LAYOUT VARIABLES */
  --container-max-width: 1200px;   /* Max container width */
  --sidebar-width: 250px;          /* Sidebar width */
  --header-height: 60px;           /* Header height */
  --footer-height: 80px;           /* Footer height */
  
  /* BORDER VARIABLES */
  --border-width-thin: 1px;        /* Thin border */
  --border-width-medium: 2px;      /* Medium border */
  --border-width-thick: 4px;       /* Thick border */
  --border-radius-sm: 4px;         /* Small border radius */
  --border-radius-md: 8px;         /* Medium border radius */
  --border-radius-lg: 12px;        /* Large border radius */
  --border-radius-full: 50%;       /* Full border radius (circle) */
  
  /* SHADOW VARIABLES */
  --shadow-light: 0 2px 4px rgba(0,0,0,0.1);      /* Light shadow */
  --shadow-medium: 0 4px 8px rgba(0,0,0,0.15);    /* Medium shadow */
  --shadow-heavy: 0 8px 16px rgba(0,0,0,0.2);     /* Heavy shadow */
  --shadow-inset: inset 0 2px 4px rgba(0,0,0,0.1); /* Inset shadow */
  
  /* TRANSITION VARIABLES */
  --transition-fast: 0.15s ease;    /* Fast transition */
  --transition-normal: 0.3s ease;   /* Normal transition */
  --transition-slow: 0.5s ease;     /* Slow transition */
  
  /* Z-INDEX VARIABLES */
  --z-dropdown: 1000;              /* Dropdown menus */
  --z-sticky: 1020;                /* Sticky elements */
  --z-fixed: 1030;                 /* Fixed elements */
  --z-modal-backdrop: 1040;        /* Modal backdrop */
  --z-modal: 1050;                 /* Modal content */
  --z-popover: 1060;               /* Popovers */
  --z-tooltip: 1070;               /* Tooltips */
}

/* VARIABLE USAGE WITH var() FUNCTION */
.component {
  /* var(--variable-name): Basic usage */
  background-color: var(--primary-color);
  color: var(--text-color);
  font-family: var(--font-family-primary);
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-medium);
  transition: var(--transition-normal);
  
  /* var(--variable-name, fallback): With fallback values */
  border-color: var(--border-color, #cccccc);     /* Use #ccc if --border-color undefined */
  margin: var(--component-margin, var(--spacing-lg)); /* Nested fallback */
  z-index: var(--component-z-index, var(--z-dropdown, 1000)); /* Multiple fallbacks */
}

/* VARIABLE SCOPE AND INHERITANCE EXPLAINED */
.parent-container {
  /* Local variables scoped to this element and its children */
  --local-bg: #f8f9fa;
  --local-padding: 20px;
  --local-border: 2px solid var(--primary-color);
  
  background-color: var(--local-bg);
  padding: var(--local-padding);
  border: var(--local-border);
}

.child-element {
  /* Inherits --local-bg, --local-padding, --local-border from parent */
  background-color: var(--local-bg);        /* Works - inherited from parent */
  margin: var(--spacing-md);                /* Works - inherited from :root */
  border: var(--local-border);              /* Works - inherited from parent */
}

.sibling-element {
  /* Does NOT inherit --local-* variables (different parent) */
  background-color: var(--local-bg, white); /* Uses fallback 'white' */
  padding: var(--spacing-md);               /* Works - global variable */
}

/* OVERRIDING VARIABLES IN DIFFERENT SCOPES */
.card {
  /* Define card-specific variables */
  --card-padding: var(--spacing-md);
  --card-background: white;
  --card-border: 1px solid var(--border-color);
  --card-radius: var(--border-radius-md);
  
  padding: var(--card-padding);
  background-color: var(--card-background);
  border: var(--card-border);
  border-radius: var(--card-radius);
}

.card--featured {
  /* Override card variables for featured variant */
  --card-padding: var(--spacing-lg);        /* More padding */
  --card-background: var(--accent-color);   /* Different background */
  --card-border: 2px solid var(--accent-color); /* Thicker border */
  color: white;                             /* Text color for contrast */
}

.card--small {
  /* Override for small variant */
  --card-padding: var(--spacing-sm);        /* Less padding */
  --card-radius: var(--border-radius-sm);   /* Smaller radius */
  font-size: var(--font-size-sm);           /* Smaller text */
}

/* THEMING WITH CSS VARIABLES */
/* Default light theme variables */
:root {
  --theme-bg-primary: #ffffff;
  --theme-bg-secondary: #f8f9fa;
  --theme-text-primary: #212529;
  --theme-text-secondary: #6c757d;
  --theme-border: #dee2e6;
  --theme-accent: #007bff;
}

/* Dark theme override */
[data-theme="dark"] {
  --theme-bg-primary: #121212;
  --theme-bg-secondary: #1e1e1e;
  --theme-text-primary: #ffffff;
  --theme-text-secondary: #b3b3b3;
  --theme-border: #333333;
  --theme-accent: #4dabf7;
}

/* High contrast theme */
[data-theme="high-contrast"] {
  --theme-bg-primary: #000000;
  --theme-bg-secondary: #000000;
  --theme-text-primary: #ffffff;
  --theme-text-secondary: #ffffff;
  --theme-border: #ffffff;
  --theme-accent: #ffff00;
}

/* Sepia theme */
[data-theme="sepia"] {
  --theme-bg-primary: #f4ecd8;
  --theme-bg-secondary: #e6d7c3;
  --theme-text-primary: #5c4b37;
  --theme-text-secondary: #7d6c57;
  --theme-border: #c9b99b;
  --theme-accent: #8b4513;
}

/* Components using theme variables */
.themed-component {
  background-color: var(--theme-bg-primary);
  color: var(--theme-text-primary);
  border: 1px solid var(--theme-border);
}

.themed-button {
  background-color: var(--theme-accent);
  color: var(--theme-bg-primary);
  border: 2px solid var(--theme-accent);
}

.themed-button:hover {
  background-color: var(--theme-bg-primary);
  color: var(--theme-accent);
}

/* COMPONENT SYSTEM WITH VARIABLES */
.button {
  /* Button base variables */
  --btn-bg: var(--primary-color);
  --btn-color: white;
  --btn-border: 1px solid var(--btn-bg);
  --btn-padding: var(--spacing-sm) var(--spacing-md);
  --btn-radius: var(--border-radius-sm);
  --btn-font-size: var(--font-size-base);
  --btn-font-weight: var(--font-weight-medium);
  --btn-transition: var(--transition-fast);
  --btn-shadow: var(--shadow-light);
  --btn-hover-transform: translateY(-1px);
  
  /* Apply variables */
  background-color: var(--btn-bg);
  color: var(--btn-color);
  border: var(--btn-border);
  padding: var(--btn-padding);
  border-radius: var(--btn-radius);
  font-size: var(--btn-font-size);
  font-weight: var(--btn-font-weight);
  transition: var(--btn-transition);
  box-shadow: var(--btn-shadow);
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
}

.button:hover {
  transform: var(--btn-hover-transform);
  box-shadow: var(--shadow-medium);
  filter: brightness(1.05); /* Slight brightness increase */
}

/* Button variants using variable overrides */
.button--secondary {
  --btn-bg: var(--secondary-color);
}

.button--danger {
  --btn-bg: var(--accent-color);
}

.button--outline {
  --btn-bg: transparent;
  --btn-color: var(--primary-color);
  --btn-border: 2px solid var(--primary-color);
}

.button--outline:hover {
  --btn-bg: var(--primary-color);
  --btn-color: white;
}

.button--large {
  --btn-padding: var(--spacing-md) var(--spacing-lg);
  --btn-font-size: var(--font-size-lg);
  --btn-radius: var(--border-radius-md);
}

.button--small {
  --btn-padding: var(--spacing-xs) var(--spacing-sm);
  --btn-font-size: var(--font-size-sm);
}

.button--rounded {
  --btn-radius: var(--border-radius-full);
}

/* RESPONSIVE VARIABLES */
:root {
  /* Mobile-first responsive variables */
  --container-padding: var(--spacing-md);
  --grid-gap: var(--spacing-sm);
  --font-scale: 1;
  --header-height: 50px;
}

@media (min-width: 768px) {
  :root {
    /* Tablet overrides */
    --container-padding: var(--spacing-lg);
    --grid-gap: var(--spacing-md);
    --font-scale: 1.1;
    --header-height: 60px;
  }
}

@media (min-width: 1024px) {
  :root {
    /* Desktop overrides */
    --container-padding: var(--spacing-xl);
    --grid-gap: var(--spacing-lg);
    --font-scale: 1.2;
    --header-height: 70px;
  }
}

/* Components using responsive variables */
.responsive-container {
  padding: var(--container-padding);
  max-width: var(--container-max-width);
  margin: 0 auto;
}

.responsive-grid {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.responsive-header {
  height: var(--header-height);
  font-size: calc(var(--font-size-lg) * var(--font-scale));
}

/* CALCULATIONS WITH CSS VARIABLES */
.calculated-layout {
  /* Using calc() with CSS variables */
  --sidebar-width: 250px;
  --header-height: 60px;
  --content-padding: var(--spacing-md);
  --border-width: 2px;
  
  /* Calculate dimensions */
  width: calc(100% - var(--sidebar-width) - var(--border-width) * 2);
  height: calc(100vh - var(--header-height) - var(--content-padding) * 2);
  padding: var(--content-padding);
  margin-left: var(--sidebar-width);
  margin-top: var(--header-height);
  border: var(--border-width) solid var(--border-color);
}

.flexible-grid {
  --min-column-width: 200px;
  --max-columns: 4;
  --grid-gap: var(--spacing-md);
  
  display: grid;
  gap: var(--grid-gap);
  /* Complex calculation for responsive columns */
  grid-template-columns: repeat(
    auto-fit, 
    minmax(
      max(var(--min-column-width), calc((100% - var(--grid-gap) * (var(--max-columns) - 1)) / var(--max-columns))), 
      1fr
    )
  );
}

/* VARIABLE MANIPULATION WITH CSS FUNCTIONS */
.dynamic-colors {
  --base-hue: 200;
  --base-saturation: 70%;
  --base-lightness: 50%;
  
  /* Generate color variations using hsl() */
  --primary: hsl(var(--base-hue), var(--base-saturation), var(--base-lightness));
  --primary-light: hsl(var(--base-hue), var(--base-saturation), calc(var(--base-lightness) + 20%));
  --primary-dark: hsl(var(--base-hue), var(--base-saturation), calc(var(--base-lightness) - 20%));
  --secondary: hsl(calc(var(--base-hue) + 60), var(--base-saturation), var(--base-lightness));
  --accent: hsl(calc(var(--base-hue) + 180), var(--base-saturation), var(--base-lightness));
  
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  color: var(--primary-light);
  border: 2px solid var(--primary-dark);
}

/* VARIABLE PERFORMANCE CONSIDERATIONS */
.performance-optimized {
  /* Group related variables together */
  --component-bg: var(--theme-bg-primary);
  --component-text: var(--theme-text-primary);
  --component-border: var(--theme-border);
  
  /* Use variables for frequently changed properties */
  background-color: var(--component-bg);
  color: var(--component-text);
  border-color: var(--component-border);
  
  /* Cache complex calculations in variables */
  --shadow-color: rgba(0, 0, 0, 0.15);
  --shadow-blur: 8px;
  --shadow-spread: 2px;
  box-shadow: 0 var(--shadow-spread) var(--shadow-blur) var(--shadow-color);
}

/* JAVASCRIPT INTEGRATION EXAMPLES */
/*
// Get CSS variable value
const primaryColor = getComputedStyle(document.documentElement)
  .getPropertyValue('--primary-color').trim();

// Set CSS variable value
document.documentElement.style
  .setProperty('--primary-color', '#ff6b6b');

// Toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
}

// Dynamic color generation
function setRandomTheme() {
  const hue = Math.floor(Math.random() * 360);
  document.documentElement.style.setProperty('--base-hue', hue);
}

// Responsive variable updates
function updateBreakpoint() {
  const width = window.innerWidth;
  if (width < 768) {
    document.documentElement.style.setProperty('--current-breakpoint', 'mobile');
  } else if (width < 1024) {
    document.documentElement.style.setProperty('--current-breakpoint', 'tablet');
  } else {
    document.documentElement.style.setProperty('--current-breakpoint', 'desktop');
  }
}



/* FALLBACK STRATEGIES FOR OLDER BROWSERS */
.legacy-support {
  /* Provide fallback values for browsers without CSS variable support */
  background-color: #3498db; /* Fallback */
  background-color: var(--primary-color, #3498db); /* CSS variable with fallback */
  
  padding: 16px; /* Fallback */
  padding: var(--spacing-md, 16px); /* CSS variable with fallback */
  
  /* Feature detection approach */
  color: black;
}

@supports (--css: variables) {
  .legacy-support {
    color: var(--text-color);
  }
}

/* NAMING CONVENTIONS FOR CSS VARIABLES */
:root {
  /* Semantic naming (recommended) */
  --color-primary: #3498db;
  --color-secondary: #2ecc71;
  --color-danger: #e74c3c;
  --color-success: #27ae60;
  --color-warning: #f39c12;
  
  /* Component-based naming */
  --button-bg: var(--color-primary);
  --button-text: white;
  --card-bg: white;
  --card-shadow: var(--shadow-medium);
  
  /* State-based naming */
  --link-default: var(--color-primary);
  --link-hover: var(--color-primary-dark);
  --link-visited: var(--color-secondary);
  --link-active: var(--color-danger);
  
  /* Scale-based naming */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-5: 32px;
  
  /* Avoid presentation-based naming */
  /* Don't use: --blue, --large-text, --thick-border */
  /* Use instead: --primary, --heading-size, --border-emphasis */
}`,

      "CSS Pseudo-classes and Pseudo-elements": `
     /* Target first child - selects first <p> inside .container */
.container p:first-child {
    font-weight: bold;
    margin-top: 0;
}

/* Target last child */
.container p:last-child {
    margin-bottom: 0;
}

/* Target nth child (every 2nd element) */
.grid-item:nth-child(2n) {
    background-color: #f0f0f0;
}

/* Target nth child with formula (every 3rd starting from 2nd) */
.list-item:nth-child(3n+2) {
    color: #007acc;
}

/* Target only child */
.wrapper p:only-child {
    text-align: center;
}

/* Target elements based on type */
h2:first-of-type {
    color: #333;
}

h2:last-of-type {
    border-bottom: none;
} 
  
/*State-based Pseudo-classes*/
 /* Interactive states */
.button:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
}

.button:active {
    transform: translateY(0);
}

.button:focus {
    outline: 2px solid #007acc;
    outline-offset: 2px;
}

/* Link states */
a:link { color: #007acc; }
a:visited { color: #6f42c1; }
a:hover { text-decoration: underline; }

/* Target pseudo-class */
section:target {
    background-color: yellow;
    padding: 20px;
}
    /*Form-related Pseudo-classes*/
    /* Input states */
input:focus {
    border-color: #007acc;
    box-shadow: 0 0 0 3px rgba(0, 122, 204, 0.25);
}

input:valid {
    border-color: #28a745;
}

input:invalid {
    border-color: #dc3545;
}

input:required {
    border-left: 3px solid #ffc107;
}

input:disabled {
    background-color: #e9ecef;
    opacity: 0.6;
}

input:checked + label {
    font-weight: bold;
    color: #007acc;
}

/* Placeholder styling */
input::placeholder {
    color: #6c757d;
    font-style: italic;
}

/*Pseudo-element Syntax and Generated Content*/
/* Before and after pseudo-elements */
.quote::before {
    content: """;
    font-size: 2em;
    color: #007acc;
    line-height: 0;
}

.quote::after {
    content: """;
    font-size: 2em;
    color: #007acc;
    line-height: 0;
}

/* First letter and line styling */
.article::first-letter {
    font-size: 3em;
    float: left;
    line-height: 0.8;
    margin: 0.1em 0.1em 0.2em 0;
}

.paragraph::first-line {
    font-weight: bold;
    color: #333;
}

/* Creating decorative elements */
.heading::after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    background-color: #007acc;
    margin: 10px auto;
}

/* Counter usage */
.ordered-list {
    counter-reset: item-counter;
}

.ordered-list li::before {
    counter-increment: item-counter;
    content: counter(item-counter) ". ";
    font-weight: bold;
    color: #007acc;
}
`,

       "CSS Specificity and Cascade": `
       /* Specificity: 1 (1 element) */
p {
    color: black;
}

/* Specificity: 10 (1 class) */
.text {
    color: blue;
}

/* Specificity: 11 (1 class + 1 element) */
p.text {
    color: green;
}

/* Specificity: 100 (1 ID) */
#main {
    color: red;
}

/* Specificity: 111 (1 ID + 1 class + 1 element) */
div#main.content {
    color: purple;
}

/* Specificity: 20 (2 classes) */
.header.navigation {
    background-color: #f8f9fa;
}

/* Specificity: 21 (2 classes + 1 element) */
nav.header.navigation {
    background-color: #e9ecef;
}
   /*Cascade Order and !important */ 
   /* Natural cascade order (last one wins with same specificity) */
.button {
    background-color: blue; /* This will be overridden */
}

.button {
    background-color: green; /* This applies */
}

/* Using !important (use sparingly) */
.emergency {
    color: red !important; /* This will override higher specificity */
}

#content .emergency {
    color: blue; /* This won't apply due to !important above */
}

/* Better approach - increase specificity naturally */
.page #content .emergency-text {
    color: red; /* Higher specificity, no !important needed */
}

 /* Inheritance Examples */
 /* Inherited properties */
body {
    font-family: Arial, sans-serif; /* Inherited by all descendants */
    color: #333; /* Inherited by all descendants */
    line-height: 1.6; /* Inherited by all descendants */
}

/* Non-inherited properties */
.container {
    border: 1px solid #ccc; /* Not inherited */
    padding: 20px; /* Not inherited */
    margin: 10px; /* Not inherited */
}

/* Forcing inheritance */
.special-border {
    border: inherit; /* Force inheritance of border */
}

/* Controlling inheritance */
.reset {
    color: initial; /* Reset to initial value */
    font-size: unset; /* Remove any set value */
    margin: revert; /* Revert to browser default */
}

/* Best Practices */
/* Good: Low specificity, easy to override */
.card {
    background-color: white;
    border: 1px solid #ddd;
}

.card-primary {
    background-color: blue;
    color: white;
}

/* Bad: High specificity, hard to override */
div.container #main .card.special {
    background-color: blue;
}

/* Good: Use CSS custom properties for easy theming */
:root {
    --primary-color: #007acc;
    --secondary-color: #6c757d;
}

.theme-button {
    background-color: var(--primary-color);
    color: white;
}

.theme-button--secondary {
    background-color: var(--secondary-color);
}`,

    "CSS Units and Values": `
   /* Pixels - most common Absolute Unit */
.header {
    height: 80px; /* Fixed height */
    font-size: 16px; /* Base font size */
    border-width: 1px; /* Thin border */
}

/* Points (used mainly for print) */
@media print {
    body {
        font-size: 12pt; /* 12 points for print */
    }
}

/* Centimeters and millimeters (print) */
@media print {
    .page {
        width: 21cm; /* A4 width */
        height: 29.7cm; /* A4 height */
        margin: 2cm; /* 2cm margins */
    }
}

/* Inches (print) */
@media print {
    .business-card {
        width: 3.5in;
        height: 2in;
    }
}

/* Em Units - Relative to parent font size */
.container {
    font-size: 18px;
}

.container p {
    margin-bottom: 1em; /* 18px */
    padding: 0.5em; /* 9px */
}

.container h2 {
    font-size: 1.5em; /* 27px (1.5 × 18px) */
    margin: 0.67em 0; /* About 12px top/bottom */
}

/* Rem units - relative to root font size */
html {
    font-size: 16px; /* Root font size */
}

.card {
    padding: 1rem; /* Always 16px */
    margin: 0.5rem; /* Always 8px */
    font-size: 1.125rem; /* Always 18px */
}

.small-text {
    font-size: 0.875rem; /* Always 14px */
}

/* Percentage units */
.sidebar {
    width: 25%; /* 25% of parent width */
    padding: 2%; /* 2% of container width */
}

.full-width {
    width: 100%;
    max-width: 1200px; /* Limit maximum width */
}

/* Viewport width and height */
.hero-section {
    height: 100vh; /* Full viewport height */
    width: 100vw; /* Full viewport width */
    background: linear-gradient(45deg, #007acc, #0056b3);
}

.sidebar {
    width: 20vw; /* 20% of viewport width */
    min-width: 250px; /* Minimum width */
}

/* Viewport minimum and maximum */
.responsive-text {
    font-size: 4vmin; /* 4% of smaller viewport dimension */
}

.large-text {
    font-size: 6vmax; /* 6% of larger viewport dimension */
}

/* Container query units (modern browsers) */
.card {
    container-type: inline-size;
    width: 100%;
}

.card-content {
    font-size: 2cqw; /* 2% of container width */
    padding: 1cqh; /* 1% of container height */
}
  
/* CSS calc() Function Basic calculations */
.mixed-units {
    width: calc(100% - 40px); /* Full width minus 40px */
    height: calc(100vh - 80px); /* Full height minus header */
    margin: calc(1rem + 5px); /* Combined units */
}

/* Responsive calculations */
.fluid-typography {
    font-size: calc(1rem + 2vw); /* Scales with viewport */
}

.centered-with-offset {
    left: calc(50% - 150px); /* Center minus half width */
    top: calc(50% - 100px);
}

/* Complex calculations */
.grid-item {
    width: calc((100% - 60px) / 4); /* 4 columns with 20px gaps */
    margin-right: 20px;
}

.responsive-padding {
    padding: calc(2rem + 1vw) calc(1rem + 0.5vw);
}


/* CSS Custom Properties (Variables) Define custom properties */
:root {
    --primary-color: #007acc;
    --secondary-color: #6c757d;
    --base-font-size: 16px;
    --heading-font: 'Georgia', serif;
    --border-radius: 8px;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Use custom properties */
.button {
    background-color: var(--primary-color);
    border-radius: var(--border-radius);
    box-shadow: var(--shadow);
    font-size: var(--base-font-size);
}

/* Custom properties with fallbacks */
.theme-text {
    color: var(--text-color, #333); /* Falls back to #333 */
}

/* Dynamic custom properties */
.component {
    --local-spacing: 1rem;
    padding: var(--local-spacing);
    margin: calc(var(--local-spacing) * 2);
}

/* Custom properties in calculations */
.responsive-element {
    --min-size: 200px;
    --preferred-size: 25vw;
    --max-size: 400px;
    
    width: clamp(var(--min-size), var(--preferred-size), var(--max-size));
}
`,

       "CSS Box Shadow and Text Effects": `
      /* Basic box shadow */
.box {
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
}

/* Multiple shadows */
.multiple-shadows {
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2),
              -2px -2px 5px rgba(255,255,255,0.5);
}

/* Text shadow */
.text-shadow {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

/* Inner shadow */
.inner-shadow {
  box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.4);
}

/* Combined inner and outer shadows */
.complex-input {
    box-shadow: 
        inset 0 1px 2px rgba(0, 0, 0, 0.1),    /* Inner shadow */
        0 0 0 1px rgba(0, 122, 204, 0.25);     /* Outer border glow */
}

/* Drop shadow filter */
.drop-shadow {
  filter: drop-shadow(3px 3px 3px rgba(0,0,0,0.4));
}

/* Performance tip: avoid animating shadows */
/* Use transform for hover effects instead of changing box-shadow */
.optimized-card {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.optimized-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Use will-change for elements that will be animated */
.animated-shadow {
    will-change: box-shadow;
    transition: box-shadow 0.3s ease;
}

/* Avoid excessive blur radius for better performance */
.performant-shadow {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15); /* Good */
    /* box-shadow: 0 2px 50px rgba(0, 0, 0, 0.15);  Avoid large blur */
}`,

      "CSS Gradients and Patterns": `
      /* Linear gradient background */
.linear-gradient {
  background: linear-gradient(to right, #ff7e5f, #feb47b);
}

/* Radial gradient background */
.radial-gradient {
  background: radial-gradient(circle, #6a11cb, #2575fc);
}

/* Conic gradient background */
.conic-gradient {
  background: conic-gradient(from 90deg, red, yellow, green, blue, red);
}

/* Repeating linear gradient for stripes */
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #606dbc,
    #606dbc 10px,
    #465298 10px,
    #465298 20px
  );
}

/* Gradient with color stops */
.color-stops {
  background: linear-gradient(
    to right,
    red 0%,
    orange 25%,
    yellow 50%,
    green 75%,
    blue 100%
  );
}`,
        "CSS Filters and Blend Modes": `
       /* Blur filter */
.blur {
  filter: blur(4px);
}

/* Brightness and contrast */
.bright-contrast {
  filter: brightness(1.2) contrast(1.5);
}

/* Grayscale and sepia */
.grayscale {
  filter: grayscale(100%);
}
.sepia {
  filter: sepia(60%);
}

/* Drop shadow filter */
.drop-shadow {
  filter: drop-shadow(5px 5px 5px rgba(0,0,0,0.5));
}

/* Mix blend mode */
.blend-multiply {
  mix-blend-mode: multiply;
}

/* Background blend mode */
.background-blend {
  background-image: url('image1.jpg'), url('image2.png');
  background-blend-mode: screen;
}`,

     "CSS Responsive Images": `
     <!-- Using srcset and sizes -->
<img 
  src="small.jpg" 
  srcset="small.jpg 480w, medium.jpg 800w, large.jpg 1200w" 
  sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px" 
  alt="Responsive example">

<!-- Using picture element for art direction -->
<picture>
  <source media="(min-width: 800px)" srcset="large-crop.jpg">
  <source media="(min-width: 400px)" srcset="medium-crop.jpg">
  <img src="small.jpg" alt="Art direction example">
</picture>

<!-- Lazy loading -->
<img src="image.jpg" loading="lazy" alt="Lazy loaded image">
`,

     "CSS Custom Fonts and Icon Fonts": `
        /* Custom font with @font-face */
@font-face {
  font-family: 'MyCustomFont';
  src: url('mycustomfont.woff2') format('woff2'),
       url('mycustomfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

/* Using the custom font */
.body-text {
  font-family: 'MyCustomFont', Arial, sans-serif;
}

/* Icon font example */
@font-face {
  font-family: 'IconFont';
  src: url('iconfont.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}

.icon {
  font-family: 'IconFont';
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Using icon font with content */
.icon-home::before {
  content: "\e900"; /* Unicode for home icon */
}`,

    "CSS Tables and Lists Styling": `
      /* Table with collapsed borders */
.table {
  border-collapse: collapse;
  width: 100%;
}

.table th, .table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

/* Custom list styles */
ul.custom-list {
  list-style-type: none;
  padding-left: 0;
}

ul.custom-list li::before {
  content: "•";
  color: #3498db;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

/* Nested list styling */
ul.custom-list ul {
  padding-left: 20px;
  list-style-type: circle;
}

/* Responsive table */
.responsive-table {
  overflow-x: auto;
  display: block;
  max-width: 100%;
}`,

       "CSS Forms and Input Styling": `
       /* Form layout with flexbox */
.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
}

/* Input styling */
input[type="text"],
input[type="email"],
select,
textarea {
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

/* Focus state */
input:focus,
select:focus,
textarea:focus {
  border-color: #3498db;
  outline: none;
  box-shadow: 0 0 5px rgba(52, 152, 219, 0.5);
}

/* Validation states */
input:valid {
  border-color: #2ecc71;
}

input:invalid {
  border-color: #e74c3c;
}

/* Disabled state */
input:disabled,
select:disabled,
textarea:disabled {
  background-color: #f0f0f0;
  opacity: 0.6;
  cursor: not-allowed;
}

/* Custom checkbox */
.checkbox-custom {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  user-select: none;
}

.checkbox-custom input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-custom .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #eee;
  border-radius: 4px;
}

.checkbox-custom input:checked ~ .checkmark {
  background-color: #3498db;
}

/* Accessibility: focus visible */
input:focus-visible {
  outline: 2px solid #2980b9;
  outline-offset: 2px;
}`,
    
       "CSS Navigation and Menu Design": `
       /* Horizontal navigation */
.navbar {
  display: flex;
  background-color: #333;
  padding: 0.5rem 1rem;
}

.navbar a {
  color: white;
  padding: 0.5rem 1rem;
  text-decoration: none;
  display: block;
}

.navbar a:hover {
  background-color: #555;
}

/* Dropdown menu */
.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #444;
  min-width: 160px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  padding: 0.5rem 1rem;
  color: white;
}

/* Mobile navigation */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
  }
  .dropdown-content {
    position: static;
  }
}

/* Hamburger menu (basic) */
.hamburger {
  display: none;
  cursor: pointer;
}

@media (max-width: 768px) {
  .hamburger {
    display: block;
  }
  .navbar {
    display: none;
  }
  .navbar.active {
    display: flex;
    flex-direction: column;
  }
}`,

 "CSS Card and Component Design": `
 /* Basic card */
.card {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

/* Hover effect */
.card:hover {
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  transform: translateY(-5px);
}

/* Responsive card grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Card variants */
.card--featured {
  border: 2px solid #3498db;
  background-color: #f0f8ff;
}`,

     "CSS Modal and Popup Design": `
     /* Modal overlay */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.modal-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

/* Modal content */
.modal-content {
  background: white;
  border-radius: 8px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
  transform: translateY(-20px);
  transition: transform 0.3s ease;
}

.modal-overlay.active .modal-content {
  transform: translateY(0);
}

/* Close button */
.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}`,

    "CSS Loading and Animation Effects": `
    /* Loading spinner */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #ccc;
  border-top-color: #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Progress bar */
.progress-bar {
  width: 0;
  height: 8px;
  background-color: #3498db;
  transition: width 0.4s ease;
}

/* Skeleton loading */
.skeleton {
  background: linear-gradient(90deg, #eee 25%, #ddd 37%, #eee 63%);
  background-size: 400% 100%;
  animation: shimmer 1.4s ease infinite;
}

@keyframes shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}`,

     "CSS Layout Patterns": `
/* Holy Grail layout with grid */
.holy-grail {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  height: 100vh;
}

.header { grid-area: header; }
.nav { grid-area: nav; }
.main { grid-area: main; }
.aside { grid-area: aside; }
.footer { grid-area: footer; }

/* Sticky footer */
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
}

/* Masonry layout */
.masonry {
  column-count: 3;
  column-gap: 1rem;
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: 1rem;
}`,

  };
  return examples[lessonTitle] || "/* Example code will be provided */"
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
**Ways to Include CSS (Inline, Internal, External)**
**Code Explanation**
CSS can be applied to HTML documents in three different ways, each with 
specific use cases and priority levels:
- **Inline CSS**: Applied directly to HTML elements using the \`style\` attribute
- **Internal CSS**: Defined within \`<style>\` tags in the HTML document's \`<head>\` section
- **External CSS**: Written in separate \`.css\` files and linked to HTML documents

### Example 3
**CSS Syntax and Rules**
**Code Explanation**
CSS follows a specific syntax structure consisting of selectors, properties, 
and values. Understanding this syntax is fundamental to writing effective CSS.

**CSS Rule Structure**:
- **Selector**: Targets HTML elements to style
- **Declaration Block**: Contains one or more declarations enclosed in curly braces
- **Property**: The style attribute you want to change
- **Value**: The setting for the property

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

### Example 4
**The Cascade and Specificity Basics**
**Code Explanation**
The "cascade" in CSS refers to how conflicting styles are resolved. 
When multiple CSS rules target the same element, the browser uses specificity, 
importance, and source order to determine which styles to apply.

Specificity Hierarchy (from lowest to highest):
- Universal selector (*) and inherited values: 0 points
- Element selectors: 1 point
- Class selectors, attribute selectors, pseudo-classes: 10 points
- ID selectors: 100 points
- Inline styles: 1000 points
- !important declaration: 10000 points`,


    "CSS Fundamentals and Selectors": `
### Example 1 
**Code Explanation:**
This example demonstrates the core ways to select and style HTML elements using CSS:
**Type, Class, and ID Selectors:**  
- \`h1\` targets all <h1> elements.  
- \`.button\` targets elements with class \`button\`.  
- \`#main-header\` targets the element with id \`main-header\`.  
These are the most common selectors for applying styles to specific elements.

### Example 2 
**Attribute Selectors:**  
- \`input[type="email"]\` targets input fields of type email.  
Attribute selectors allow you to style elements based on their attributes.

### Example 3
**Combinators:**  
- \`nav > ul li a\` targets anchor tags inside list items that are direct children of a \`nav\` \`ul\`.  
- \`.card .title\` targets elements with class \`title\` inside elements with class \`card\`.  
Combinators let you target elements based on their relationship in the DOM.

### Example 4
**Pseudo-classes and Pseudo-elements:**  
- \`a:hover\` styles links when hovered.  
- \`input:focus\` styles inputs when focused.  
- \`p::first-line\` styles only the first line of a paragraph.  
These selectors enable interactive and fine-grained styling.

**Why This Matters:**  
Selectors are the foundation of CSS. Mastering them allows you to target and style any element, create interactive effects, and write maintainable stylesheets.
`,
    "CSS Box Model and Layout": `
### Example 1
**Code Explanation:**
This example illustrates how the CSS box model works and how it affects layout:
**Box Model Properties:**  
- \`width\`, \`padding\`, \`border\`, and \`margin\` define the size and spacing of the element.  
- \`box-sizing: border-box\` ensures that padding and border are included in the element’s total width and height,
    making layouts more predictable.

**Block vs Inline:**  
- \`div\` is block-level (takes full width), \`span\` is inline (flows with text).

**Margin Collapse:**  
- When a parent and child both have vertical margins, they may collapse into a single margin, affecting spacing.

**Why This Matters:**  
Understanding the box model is essential for building layouts, spacing elements, and avoiding common CSS bugs.
`,
    "CSS Colors and Typography": `
**Code Explanation:**
This example covers color formats and typography settings:

1. **Color Formats:**  
- HEX, RGB, and HSL allow for precise color control and transparency.

2. **Font Properties:**  
- \`font-family\` sets the typeface, with fallbacks for compatibility.  
- \`font-size\`, \`line-height\`, and \`color\` control readability and appearance.

3. **Text Formatting:**  
- \`text-align\`, \`text-transform\`, and \`letter-spacing\` enhance the visual hierarchy and style.

**Why This Matters:**  
Color and typography are key to accessibility, branding, and user experience. Proper use ensures your site is readable and visually appealing.
`,
    "CSS Backgrounds and Borders": `
**Code Explanation:**
This example demonstrates how to style backgrounds and borders:

1. **Backgrounds:**  
- \`background\` can combine color, images, gradients, and more.  
- \`background-size: cover\` ensures images fill the container.

2. **Multiple Backgrounds:**  
- Layering gradients and images creates visually rich effects.

3. **Borders and Border Radius:**  
- \`border\` sets width, style, and color.  
- \`border-radius\` creates rounded corners or circles.

4. **Box Shadow:**  
- Adds depth and emphasis to elements.
**Why This Matters:**  
Backgrounds and borders are essential for separating content, creating emphasis, and building modern UI components.
`,
    "CSS Display and Positioning": `
**Code Explanation:**
This example shows how to control element layout and stacking:

1. **Display Values:**  
- \`block\`, \`inline\`, \`inline-block\`, \`flex\`, \`grid\`, and \`none\` control how elements are 
rendered and participate in layout.

2. **Positioning:**  
- \`relative\`, \`absolute\`, \`fixed\`, and \`sticky\` allow you to move elements in 
relation to their normal position, their parent, the viewport, or scrolling.

3. **Z-index:**  
- Controls stacking order for overlapping elements.

4. **Float and Clear:**  
- Used for older layout techniques and image wrapping.

**Why This Matters:**  
Display and positioning are the backbone of page structure and interactive layouts.
`,
    "CSS Flexbox Layout": `
**Code Explanation:**
This example demonstrates the power of Flexbox for building flexible, responsive layouts:

1. **Flex Container:**  
- \`display: flex\` enables Flexbox on the container.  
- \`flex-wrap\`, \`justify-content\`, and \`align-items\` control wrapping and alignment.

2. **Flex Items:**  
- \`flex: 1 1 150px\` allows items to grow, shrink, and set a base size.

3. **Responsive Design:**  
- Flexbox makes it easy to create layouts that adapt to different screen sizes.

**Why This Matters:**  
Flexbox is a modern, efficient way to build layouts without floats or complicated hacks.
`,
    "CSS Grid Layout": `
**Code Explanation:**
This example shows how to use CSS Grid for advanced, two-dimensional layouts:

1. **Grid Container:**  
- \`display: grid\` enables Grid on the container.  
- \`grid-template-columns\` and \`gap\` define the structure.

2. **Grid Items:**  
- Each \`.grid-item\` automatically fits into the grid, making complex layouts simple.

**Why This Matters:**  
CSS Grid is the most powerful layout system in CSS, enabling magazine-style, responsive, and complex designs with minimal code.
`,
    "CSS Transitions and Animations": `
**Code Explanation:**
This example covers smooth transitions and keyframe animations:

1. **Transitions:**  
- \`transition\` on \`.button\` animates background and scale on hover.

2. **Keyframes:**  
- \`@keyframes fadeIn\` defines a fade-in effect.  
- \`.fade-in\` applies the animation.

**Why This Matters:**  
Transitions and animations enhance user experience, provide feedback, and make interfaces feel modern and interactive.
`,
    "CSS Transformations": `
**Code Explanation:**
This example demonstrates 2D and 3D transformations:

1. **2D Transforms:**  
- \`rotate\`, \`scale\`, and \`translate\` change the shape, size, and position of elements.

2. **3D Transforms:**  
- \`perspective\` and \`rotateY\` create depth and 3D effects.

3. **Transform Origin:**  
- Changes the point around which transformations occur.

**Why This Matters:**  
Transforms enable creative effects, interactive UI elements, and modern design patterns.
`,
    "CSS Media Queries": `
**Code Explanation:**
This example shows how to make designs responsive:

1. **Media Query Syntax:**  
- \`@media (max-width: 600px)\` applies styles only on small screens.

2. **Responsive Adjustments:**  
- Adjusts width, font size, and layout for mobile devices.

**Why This Matters:**  
Media queries are essential for building mobile-friendly, accessible websites.
`,
    "CSS Variables and Custom Properties": `
**Code Explanation:**
This example demonstrates the use of CSS variables:

1. **Defining Variables:**  
- \`:root\` sets global variables.

2. **Using Variables:**  
- \`var(--primary)\` and \`var(--radius)\` make styles reusable and easy to update.

**Why This Matters:**  
CSS variables improve maintainability, enable theming, and allow for dynamic style changes.
`,
    "CSS Pseudo-classes and Pseudo-elements": `
**Code Explanation:**
This example shows how to style elements based on state or structure:

1. **Pseudo-classes:**  
- \`:hover\`, \`:focus\` style elements on interaction.

2. **Pseudo-elements:**  
- \`::before\`, \`::first-letter\` add decorative or structural styles.
**Why This Matters:**  
Pseudo-classes and pseudo-elements enable advanced styling without extra markup or JavaScript.
`,
    "CSS Specificity and Cascade": `
**Code Explanation:**
This example explains how CSS decides which styles to apply:

1. **Specificity:**  
- More specific selectors (ID > class > element) override less specific ones.
2. **!important:**  
- Forces a style to apply, but should be used sparingly.
3. **Cascade Order:**  
- Later rules override earlier ones if specificity is equal.
**Why This Matters:**  
Understanding specificity and cascade prevents bugs and makes stylesheets easier to maintain.
`,
    "CSS Units and Values": `
**Code Explanation:**
This example demonstrates different CSS units:

1. **Absolute Units:**  
- \`px\` for fixed sizes.

2. **Relative Units:**  
- \`em\`, \`rem\`, \`%\` scale with parent or root font size.

3. **Viewport Units:**  
- \`vw\`, \`vh\` scale with the browser window.

4. **calc():**  
- Combines units for flexible, responsive sizing.
**Why This Matters:**  
Choosing the right units is key for responsive, accessible, and maintainable designs.
`,
    "CSS Box Shadow and Text Effects": `
**Code Explanation:**
This example shows how to add depth and emphasis:

1. **Box Shadow:**  
- \`box-shadow\` creates elevation and separation.

2. **Text Shadow:**  
- \`text-shadow\` adds emphasis to text.

3. **Inner Shadow:**  
- \`inset\` creates a shadow inside the element.

**Why This Matters:**  
Shadows and text effects enhance visual hierarchy and modernize UI components.
`,
    "CSS Gradients and Patterns": `
**Code Explanation:**
This example demonstrates gradient backgrounds:

1. **Linear, Radial, and Repeating Gradients:**  
- Create smooth color transitions and patterns.

2. **Browser Compatibility:**  
- Gradients are widely supported and can replace images for many effects.

**Why This Matters:**  
Gradients add visual interest and can improve performance by reducing image use.
`,
    "CSS Filters and Blend Modes": `
**Code Explanation:**
This example shows how to apply image effects and blending:

1. **Filters:**  
- \`grayscale\`, \`blur\`, \`brightness\` adjust images and backgrounds.

2. **Blend Modes:**  
- \`mix-blend-mode\` combines layers for creative effects.

**Why This Matters:**  
Filters and blend modes enable modern, dynamic visuals without extra graphics.
`,
    "CSS Responsive Images": `
**Code Explanation:**
This example demonstrates responsive image techniques:

1. **srcset and sizes:**  
- Serve different images based on device size and resolution.

2. **Performance:**  
- Reduces bandwidth and improves loading on mobile.
**Why This Matters:**  
Responsive images are essential for fast, accessible, and visually sharp websites.
`,
    "CSS Custom Fonts and Icon Fonts": `
**Code Explanation:**
This example shows how to use custom and icon fonts:

1. **@font-face:**  
- Loads custom fonts for branding and design.

2. **Icon Fonts:**  
- Use font files for scalable, customizable icons.
**Why This Matters:**  
Custom fonts and icons improve branding and UI consistency.
`,
    "CSS Tables and Lists Styling": `
**Code Explanation:**
This example demonstrates table and list customization:

1. **Table Styling:**  
- \`border-collapse\`, \`th\`, \`td\` for clean, readable tables.

2. **Custom List Markers:**  
- \`::before\` adds icons or symbols to lists.
**Why This Matters:**  
Well-styled tables and lists improve data presentation and user experience.
`,
    "CSS Forms and Input Styling": `
**Code Explanation:**
This example shows how to style form elements:

1. **Input and Select Styling:**  
- Padding, border, and radius for modern look.

2. **Focus and Disabled States:**  
- Visual feedback for usability and accessibility.
**Why This Matters:**  
Good form styling improves usability, accessibility, and trust.
`,
    "CSS Navigation and Menu Design": `
**Code Explanation:**
This example demonstrates navigation bar styling:

1. **Flexbox Layout:**  
   - Horizontal alignment and spacing.

2. **Interactive States:**  
   - Color changes on hover for feedback.

**Why This Matters:**  
Navigation is key to usability; clear, interactive menus help users find content.
`,
    "CSS Card and Component Design": `
**Code Explanation:**
This example shows how to build a modern card component:

1. **Card Layout:**  
   - Padding, border-radius, and shadow for separation.

2. **Hover Effects:**  
   - Deeper shadow on hover for interactivity.

**Why This Matters:**  
Cards are a common UI pattern for grouping content and actions.
`,
    "CSS Modal and Popup Design": `
**Code Explanation:**
This example demonstrates modal dialog styling:

1. **Overlay:**  
   - Semi-transparent background covers the page.

2. **Modal Content:**  
   - Centered, styled box for focus and accessibility.

**Why This Matters:**  
Modals are used for dialogs, forms, and notifications; good design ensures usability and accessibility.
`,
    "CSS Loading and Animation Effects": `
**Code Explanation:**
This example shows a CSS-only loading spinner:

1. **Border and Animation:**  
- Borders and \`@keyframes\` create a spinning effect.

2. **No Images or JS:**  
- Pure CSS for performance and simplicity.

**Why This Matters:**  
CSS loaders provide feedback during async operations and improve perceived performance.
`,
    "CSS Layout Patterns": `
**Code Explanation:**
This example demonstrates a “Holy Grail” layout using CSS Grid:

1. **Grid Areas:**  
   - Named areas for header, nav, main, aside, and footer.

2. **Responsive Structure:**  
   - Adapts to different screen sizes with minimal code.

**Why This Matters:**  
Layout patterns solve common design problems and speed up development.
`,
    "CSS Performance Optimization": `
**Code Explanation:**
This example covers best practices for fast, efficient CSS:

1. **Selector Optimization:**  
- Prefer class selectors for speed.

2. **Animation Performance:**  
- Use \`will-change\` for smoother animations.

3. **Avoid Expensive Selectors:**  
- Minimize universal and descendant selectors.

**Why This Matters:**  
Optimized CSS leads to faster, more responsive websites.
`,
    "CSS Browser Compatibility": `
**Code Explanation:**
This example shows how to ensure styles work across browsers:

1. **Vendor Prefixes:**  
- Add prefixes for older browser support.

2. **Feature Detection:**  
- Use \`@supports\` to apply styles only if supported.

**Why This Matters:**  
Cross-browser compatibility ensures all users have a consistent experience.
`,
    "CSS Preprocessors (SASS/SCSS)": `
**Code Explanation:**
This example demonstrates SASS/SCSS features:

1. **Variables and Mixins:**  
- \`$primary\` and \`@mixin\` for reusable styles.

2. **Nesting:**  
- Write cleaner, more organized CSS.

**Why This Matters:**  
Preprocessors speed up development and improve maintainability.
`,
    "CSS Methodologies (BEM, SMACSS)": `
**Code Explanation:**
This example shows naming conventions for scalable CSS:

1. **BEM:**  
- Block, Element, Modifier for clear, modular classes.

2. **SMACSS:**  
- Organize by layout, state, and theme for large projects.

**Why This Matters:**  
Methodologies prevent conflicts and make large codebases manageable.
`,
    "CSS Frameworks Overview": `
**Code Explanation:**
This example shows how to use popular CSS frameworks:

1. **Bootstrap and Tailwind:**  
- Predefined classes for rapid development.

2. **Custom Frameworks:**  
- Build or extend frameworks for project needs.

**Why This Matters:**  
Frameworks speed up development and enforce consistency.
`,
    "CSS Project: Building a Responsive Website": `
**Code Explanation:**
This example demonstrates a real-world responsive layout:

1. **Container and Grid:**  
- Max-width, auto margin, and grid for structure.

2. **Media Queries:**  
- Adjust layout and spacing for mobile devices.

**Why This Matters:**  
Building a project reinforces all CSS concepts and prepares learners for real-world work.
`,

     "CSS Transitions and Animations": `
**Code Explanation**
CSS transitions and animations allow you to create smooth visual effects and movements. 
Transitions provide smooth changes between property values over time, while animations 
offer more complex sequences of changes using keyframes.

**Transition Properties Explained**:
- \`transition-property\`: Specifies which CSS properties should be transitioned (e.g., \`background-color\`, \`transform\`, \`all\`)
- \`transition-duration\`: Sets how long the transition takes (e.g., \`0.3s\`, \`300ms\`)
- \`transition-timing-function\`: Controls the acceleration curve (e.g., \`ease\`, \`linear\`, \`ease-in-out\`)
- \`transition-delay\`: Delays the start of the transition (e.g., \`0.5s\`, \`200ms\`)

**Animation Properties Explained**:
- \`animation-name\`: References the \`@keyframes\` rule name
- \`animation-duration\`: How long one cycle of the animation takes
- \`animation-timing-function\`: Controls speed curve throughout animation
- \`animation-delay\`: Time before animation starts
- \`animation-iteration-count\`: Number of times animation repeats (infinite for endless)
- \`animation-direction\`: Whether animation plays forward, backward, or alternates
- \`animation-fill-mode\`: What styles apply before/after animation (forwards, backwards, both)
- \`animation-play-state\`: Whether animation is running or paused`,

   "CSS Transformations": `
**Code Explanation**
CSS transforms allow you to modify the coordinate space of elements without affecting 
the document flow. They're GPU-accelerated and perfect for animations and interactive 
effects.

**Transform Functions Explained**:
- \`translate()\`: Moves element from current position
- \`scale()\`: Resizes element (1 = original size, 0.5 = half size, 2 = double size)
- \`rotate()\`: Rotates element around its center point
- \`skew()\`: Distorts element by tilting it along axes
- \`matrix()\`: Combines all transforms using mathematical matrix

**3D Transform Properties Explained**:
- \`perspective\`: Sets viewing distance for 3D transforms (smaller = more dramatic)
- \`transform-style\`: Controls whether children are positioned in 3D space
- \`backface-visibility\`: Whether back of rotated element is visible
- \`transform-origin\`: Point around which transformations occur`,

"CSS Media Queries": `
**Code Explanation**
Media queries enable responsive design by applying CSS rules conditionally based 
on device characteristics. They're essential for creating layouts that work across 
different screen sizes and device capabilities.

**Media Query Syntax Components**:
- **Media Type**: screen, print, speech, all
- **Media Features**: width, height, orientation, resolution, etc.
- **Logical Operators**: and, or, not, only
- **Breakpoints**: Specific width values where design changes

**Common Media Features Explained**:
- \`width/height\`: Viewport dimensions
- \`device-width/device-height\`: Physical device screen size
- \`orientation\`: portrait or landscape
- \`resolution\`: Screen pixel density
- \`hover\`: Whether device can hover over elements
- \`pointer\`: Primary input mechanism precision`,

   "CSS Variables and Custom Properties": `
**Code Explanation**
CSS custom properties (CSS variables) store values that cascade and can be reused 
throughout stylesheets. Unlike preprocessor variables, CSS variables are live - 
they can be updated dynamically and respond to cascading rules.

**CSS Variable Syntax Explained**:
- **Declaration**: \`--variable-name: value;\` (must start with two dashes)
- **Usage**: \`var(--variable-name, fallback-value)\`
- **Scope**: Follow normal CSS cascade and inheritance rules
- **Dynamic**: Can be changed with JavaScript and media queries

**Key Concepts**:
- **Inheritance**: Variables inherit from parent elements
- **Cascade**: Later declarations override earlier ones
- **Fallback Values**: Provide defaults when variables are undefined
- **Computed Values**: Variables store computed values, not raw declarations`,

     "CSS Pseudo-classes and Pseudo-elements":`
**Code Explanation**
Pseudo-classes and pseudo-elements allow you to style specific states or parts
of elements without adding extra HTML classes or elements.

**Pseudo-classes** target elements based on their state or position (\`:hover\`, \`:first-child\`, etc.)
**Pseudo-elements** create virtual elements to style specific parts of content (\`::before\`, \`::after\`, etc.)

**How Selectors Work**:
- Pseudo-classes use single colon syntax: \`element:pseudo-class\`
- Pseudo-elements use double colon syntax: \`element::pseudo-element\`
- They can be combined: \`p:first-child::before\`
- Properties applied to pseudo-elements behave like real elements

1. **Structural Pseudo-classes**
*How These Selectors Work*:
- \`:first-child\` - Selects the first child element of its parent
- \`:last-child\` - Selects the last child element of its parent
- \`:nth-child(n)\` - Selects the nth child (can use formulas like 2n, 3n+1)
- \`:only-child\` - Selects elements that are the only child of their parent
- \`:first-of-type\` - Selects the first element of its type among siblings

2. **State-based Pseudo-classes**
*How These Selectors Work*:
- \`:hover\` - Activates when mouse hovers over element
- \`:active\` - Activates when element is being clicked/pressed
- \`:focus\` - Activates when element receives keyboard focus
- \`:visited\` - Targets links that have been visited
- \`:target\` - Targets element whose ID matches URL fragment

*Properties Behavior*:
- \`transform\` creates a new stacking context and can trigger hardware acceleration
- \`outline\` doesn't affect layout (unlike border)
- State changes can be animated with \`transition\`

3. **Form-related Pseudo-classes**

*How These Selectors Work*:
- \`:focus\` - Element has keyboard focus (input fields, buttons)
- \`:valid/:invalid\` - Form elements that pass/fail validation
- \`:required\` - Form elements with required attribute
- \`:disabled\` - Form elements with disabled attribute
- \`:checked\` - Checkboxes/radio buttons that are selected
- \`::placeholder\` - Targets placeholder text in input fields

*Adjacent Sibling Combinator (+)*:
- \`input:checked + label\` - Selects label immediately after checked input
- Works only with elements that are direct siblings

4. **Pseudo-element Syntax and Generated Content**

*How Pseudo-elements Work*:
- \`::before\` and \`::after\` create virtual inline elements
- Must have \`content\` property to be visible (even if empty: content: "")
- Inserted as first/last child of the selected element
- Inherit from parent element but can be styled independently
- \`::first-letter\` and \`::first-line\` target specific text portions

*Content Property*:
- Can contain text strings, quotes, counters, or be empty
. \`counter()\` function displays CSS counter values
- \`attr()\` function can display HTML attributes
`,

    "CSS Specificity and Cascade": `
**Code Explanation**
CSS specificity determines which styles are applied when multiple rules target 
the same element. The cascade is the algorithm that determines the final 
styles applied to elements.

*How Specificity Works*:
- Browser calculates specificity as a 4-part number (a,b,c,d)
- a = inline styles (style attribute) - 1000 points
- b = IDs (#header) - 100 points each
- c = Classes (.nav), attributes ([type="text"]), pseudo-classes (:hover) - 10 points each
- d = Elements (div, p) and pseudo-elements (::before) - 1 point each

**Cascade Algorithm**:
1. Origin and importance (!important declarations win)
2. Specificity (higher specificity wins)
3. Source order (later declarations win with equal specificity)`,

    "CSS Units and Values": `
**Code Explanation**
CSS units determine how size and spacing are calculated. 
Understanding when to use each unit type is crucial for responsive design.

*How Units Work*:
- **Absolute** units have fixed sizes regardless of context (px, pt, cm, mm, in)
- **Relative** units scale based on parent or root element (em, rem, %)
- **Viewport** units scale based on browser window size (vw, vh, vmin, vmax)
- **Container** units scale based on containing element (cqw, cqh) - newer feature

*Unit Calculation*:
- \`em\` multiplies by parent element's font-size
- \`rem\` multiplies by root element's font-size
- \`%\` calculates percentage of parent's corresponding property
- \`vw/vh\` calculates percentage of viewport width/height

4. **CSS calc() Function**

*How calc() Works*:
- Performs mathematical calculations with mixed units
- Supports \`+\`, \`-\`, \`*\`, \`/\` operators
- Spaces required around + and - operators: \`calc(100% - 40px)\` ✓
- Can nest calculations: \`calc(calc(100% - 40px) / 2)\`
- Calculated at computed-value time, not specified-value time

5. **CSS Custom Properties (Variables)**

*How Custom Properties Work*:
- Defined with \`--\` prefix: \`--primary-color: blue\`
- Inherited by default (unlike regular CSS properties)
- Scoped to the element where defined and its descendants
- Case-sensitive: \`--Color\` and \`--color\` are different
- Can be redefined in descendant elements
- \`var()\` function retrieves values with optional fallback `,

     "CSS Box Shadow and Text Effects": `
     **Code Explanation:**
This lesson covers how to use shadows to add depth and emphasis to elements and text:
1. **Box Shadow Properties:**
- \`box-shadow\` adds shadow effects around elements.
- Syntax: \`box-shadow: offset-x offset-y blur-radius spread-radius color inset;\`
- \`offset-x\` and \`offset-y\` control shadow position.
- \`blur-radius\` controls the softness of the shadow.
- \`spread-radius\` expands or contracts the shadow size.
- \`color\` sets the shadow color.
- \`inset\` makes the shadow appear inside the element.
2. **Multiple Shadows:**
- You can apply multiple shadows separated by commas.
- Useful for layered effects.
3. **Text Shadow Effects:**
- \`text-shadow\` adds shadows to text.
- Syntax: \`text-shadow: offset-x offset-y blur-radius color;\`
- Enhances readability and style.
4. **Drop Shadows:**
- Shadows that appear outside the element, creating elevation.
5. **Inner Shadows:**
- Shadows inside the element using \`inset\`.
6. **Performance Optimization:**
- Use shadows sparingly to avoid rendering slowdowns.
- Avoid animating shadows for better performance.
7. **Browser Support:**
- Widely supported in modern browsers.
- Use vendor prefixes if targeting older browsers.
*Why This Matters:*
Shadows and text effects improve visual hierarchy, focus, and modern UI aesthetics.
`,

     "CSS Gradients and Patterns": `
**Code Explanation:**
This lesson explains how to create smooth color transitions and 
patterns using gradients:
1. **Linear Gradients:**
- Transition colors along a straight line.
- Syntax: \`linear-gradient(direction, color-stop1, color-stop2, ...)\`
2. **Radial Gradients:**
- Colors radiate from a center point outward.
- Syntax: \`radial-gradient(shape size at position, start-color, ..., end-color)\`
3. **Conic Gradients:**
- Colors rotate around a center point like a pie chart.
- Syntax: \`conic-gradient(from angle at position, color stops)\`
4. **Gradient Patterns:**
- Combine gradients to create stripes, checkerboards, etc.
5. **Repeating Gradients:**
- Repeat gradient patterns infinitely.
6. **Color Stops:**
- Define where colors start and end in the gradient.
7. **Browser Compatibility:**
- Supported in modern browsers.
- Use fallbacks or prefixes for older browsers.
*Why This Matters:*
Gradients add visual interest and can replace images for better performance and scalability.
 `,

      "CSS Filters and Blend Modes": `
**Code Explanation:**
This lesson covers how to apply visual effects and blending to elements:
1. **Filter Functions:**
- Apply effects like \`blur()\`, \`brightness()\`, \`contrast()\`, \`grayscale()\`,
\`sepia()\`, \`drop-shadow()\`.
- Syntax: \`filter: blur(5px) brightness(120%)\`
2. **Blend Mode Properties:**
- \`mix-blend-mode\` controls how an element blends with background.
- \`background-blend-mode\` blends multiple backgrounds.
3. **Image Effects:**
- Filters can modify images dynamically without editing files.
4. **Color Adjustments:**
- Adjust brightness, contrast, saturation for visual effects.
5. **Performance Impact:**
- Filters can be GPU accelerated but may impact performance if overused.
6. **Browser Support:**
- Supported in modern browsers; check for prefixes if needed.
7. **Fallback Strategies:**
- Provide fallback colors or images for unsupported browsers.
*Why This Matters:*
Filters and blend modes enable creative, dynamic visuals without extra assets.
`,

     "CSS Responsive Images": `
**Code Explanation:**
This lesson explains techniques to serve images optimized for different devices:
1. **srcset Attribute:**
- Defines multiple image sources with different resolutions or sizes.
- Browser picks the best based on device.
2. **sizes Attribute:**
- Defines the display size of the image for different viewport widths.
3. **Picture Element:**
- Allows different images or formats for different conditions.
4. **Art Direction:**
- Serve different crops or compositions for different screen sizes.
5. **Image Formats:**
- Use modern formats like WebP for better compression.
6. **Loading Strategies:**
- Lazy loading to defer offscreen images.
7. **Performance Optimization:**
- Reduces bandwidth and improves load times.
*Why This Matters:*
Responsive images improve user experience and performance on diverse devices.
 `,

    "CSS Custom Fonts and Icon Fonts": `
**Code Explanation:**
This lesson covers how to use custom and icon fonts in web design:
1. **@font-face Rule:**
- Defines custom fonts by specifying font files and properties.
2. **Font Formats:**
- Use multiple formats (woff2, woff, ttf) for browser compatibility.
3. **Font Loading Strategies:**
- Use \`font-display\` to control how fonts load and fallback.
4. **Icon Font Implementation:**
- Use fonts with icon glyphs for scalable icons.
5. **Font Optimization:**
- Subset fonts to reduce size.
6. **Fallback Fonts:**
- Provide fallback font stacks for better UX.
7. **Performance Considerations:**
- Avoid blocking rendering; preload fonts if needed.
*Why This Matters:*
Custom fonts enhance branding and UI consistency; icon fonts provide scalable icons.
`,

      "CSS Tables and Lists Styling": `
**Code Explanation:**
This lesson explains how to style tables and lists for better presentation:
1. **Table Layout Properties:**
- Control table width, layout, and alignment.
2. **Border Collapse:**
- \`border-collapse: collapse\` merges adjacent borders for cleaner look.
3. **Cell Spacing:**
- Use \`border-spacing\` to control space between cells.
4. **List Style Properties:**
- Customize bullets and numbering with \`list-style-type\`, \`list-style-position\`.
5. **Custom List Markers:**
- Use \`::before\` pseudo-elements to add icons or custom markers.
6. **Nested Lists:**
- Style nested lists differently for clarity.
7. **Responsive Tables:**
- Use overflow or display techniques to make tables usable on small screens.
*Why This Matters:*
Well-styled tables and lists improve readability and user experience.
`,

    "CSS Forms and Input Styling": `
  **Code Explanation:**
This lesson covers styling form elements for usability and accessibility:
1. **Form Layout:**
- Use flexbox or grid for arranging form controls.
2. **Input Styling:**
- Style borders, padding, font, and colors for inputs.
3. **Custom Form Elements:**
- Style checkboxes, radio buttons, selects with custom visuals.
4. **Validation States:**
- Use \`:valid\` and \`:invalid\` pseudo-classes for feedback.
5. **Focus States:**
- Highlight focused inputs for accessibility.
6. **Disabled States:**
- Style disabled inputs with reduced opacity or different colors.
7. **Accessibility Considerations:**
- Ensure focus outlines, labels, and error messages are clear.
*Why This Matters:*
Good form styling improves user experience and accessibility.
`,

      "CSS Navigation and Menu Design": `
**Code Explanation:**
This lesson explains how to build navigation menus with CSS:
1. **Horizontal Navigation:**
- Use flexbox or inline-block for horizontal menus.
2. **Vertical Navigation:**
- Stack menu items vertically with block or flex column.
3. **Dropdown Menus:**
- Use \`:hover\` or JavaScript to show/hide submenus.
4. **Mobile Navigation:**
- Use media queries to switch to mobile-friendly menus.
5. **Hamburger Menu:**
- Icon button toggles menu visibility on small screens.
6. **Responsive Design:**
- Adjust layout and visibility based on screen size.
7. **Accessibility Features:**
- Keyboard navigation, ARIA roles, focus management.
*Why This Matters:*
Navigation is critical for usability and user experience.
`,

     "CSS Card and Component Design": `
**Code Explanation:**
This lesson covers how to design card components and reusable UI elements:
1. **Card Layout:**
- Use padding, border-radius, and shadows for separation.
2. **Component Structure:**
- Organize HTML and CSS for modularity.
3. **Hover Effects:**
- Add interactivity with shadows or transforms on hover.
4. **Shadow Effects:**
- Use box-shadow for depth.
5. **Responsive Cards:**
- Use flexbox or grid for layout adaptability.
6. **Component Variants:**
- Use modifier classes for different styles.
7. **Best Practices:**
- Keep components reusable and maintainable.
*Why This Matters:*
Cards are common UI patterns for grouping content and actions.`,

 "CSS Modal and Popup Design": `
 **Code Explanation:**
This lesson explains how to style modals and popups for usability:

1. **Modal Structure:**
- Overlay covers the page.
- Modal content centered and styled.
2. **Overlay Effects:**
- Semi-transparent background to focus attention.
3. **Animation:**
- Fade or slide animations for appearance.
4. **Focus Management:**
- Trap focus inside modal for accessibility.
5. **Keyboard Navigation:**
- Close modal with ESC key.
6. **Responsive Design:**
- Modal adapts to screen size.
7. **Accessibility Features:**
- ARIA roles and labels.
**Why This Matters:**
Modals are common UI elements; good design ensures usability and accessibility.
`, 

      "CSS Loading and Animation Effects": `
**Code Explanation:**
This lesson covers CSS techniques for loading indicators and animations:

1. **Loading Spinners:**
- Use borders and keyframe rotation.
2. **Progress Indicators:**
- Animate width or transform for progress bars.
3. **Skeleton Loading:**
- Use gradients and animation to simulate loading content.
4. **Animation Keyframes:**
- Define sequences of styles over time.
5. **Transition Effects:**
- Smooth changes between states.
6. **Performance Optimization:**
- Use GPU-accelerated properties like transform and opacity.
7. **Browser Support:**
- Supported widely; use prefixes if needed.
**Why This Matters:**
Loading animations improve perceived performance and user experience.
`,

     "CSS Layout Patterns": `
**Code Explanation:**
This lesson explains common CSS layout patterns:

1. **Holy Grail Layout:**
- Three-column layout with header and footer using grid or flexbox.
2. **Sticky Footer:**
- Footer sticks to bottom if content is short.
3. **Sidebar Layouts:**
- Side navigation with content area.
4. **Card Grid:**
- Responsive grid of cards.
5. **Masonry Layout:**
- Pinterest-style layout with uneven card heights.
6. **Responsive Patterns:**
- Adapt layouts for different screen sizes.
7. **Modern Layout Techniques:**
- Use CSS Grid and Flexbox for flexible designs.
**Why This Matters:**
Layout patterns solve common design challenges efficiently.`,

      
  };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};


const getCSSExercises = (lessonTitle) => {
  const exercises = {
    "CSS Fundamentals and Selectors": `
1. Create a navigation menu using different types of selectors:
   - Use type selectors for basic elements
   - Use class selectors for styling
   - Use attribute selectors for links
   - Use pseudo-classes for hover effects

2. Build a card component with multiple selectors:
   - Use combinators to style nested elements
   - Use pseudo-elements for decorative elements
   - Use attribute selectors for different card types
   - Implement hover and focus states

3. Create a form with advanced selectors:
   - Style different input types
   - Use pseudo-classes for validation states
   - Implement focus and hover effects
   - Add custom styling for disabled elements`,

    "CSS Box Model and Layout": `
1. Create a responsive layout using box model:
   - Implement different box-sizing approaches
   - Use margin and padding effectively
   - Handle margin collapse
   - Create nested box structures

2. Build a card grid system:
   - Use box model for spacing
   - Implement responsive margins
   - Handle different content sizes
   - Create consistent spacing

3. Design a navigation bar:
   - Use box model for spacing
   - Implement hover effects
   - Handle active states
   - Create responsive layout`,

    "CSS Colors and Typography": `
1. Create a color scheme system:
   - Use different color formats
   - Implement color variables
   - Create color combinations
   - Ensure accessibility

2. Design a typography system:
   - Implement web fonts
   - Create text styles
   - Handle different text sizes
   - Ensure readability

3. Build a text-heavy page:
   - Use proper line heights
   - Implement text spacing
   - Create text hierarchy
   - Handle responsive typography`,

    "CSS Backgrounds and Borders": `
1. Create a hero section:
   - Use background images
   - Implement gradients
   - Add overlay effects
   - Handle responsive backgrounds

2. Design a card component:
   - Use border properties
   - Implement border radius
   - Add box shadows
   - Create hover effects

3. Build a navigation menu:
   - Use background colors
   - Implement hover states
   - Add active indicators
   - Create responsive design`,

    "CSS Display and Positioning": `
1. Create a layout system:
   - Use different display values
   - Implement positioning
   - Handle z-index
   - Create responsive layouts

2. Build a modal component:
   - Use fixed positioning
   - Implement overlay
   - Handle z-index
   - Add animations

3. Design a sticky header:
   - Use sticky positioning
   - Implement scroll behavior
   - Handle responsive design
   - Add transitions`
  }
  return exercises[lessonTitle] || "1. Basic exercise\n2. Advanced exercise\n3. Project work"
}

const getCSSQuiz = (lessonTitle) => {
  const quizzes = {
    "CSS Fundamentals and Selectors": [
      {
        question: "Which selector has the highest specificity?",
        options: [
          "#id .class",
          ".class[type='text']",
          "div.class",
          "div > .class"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for a pseudo-element?",
        options: [
          "::first-line",
          ":first-line",
          "::first-line()",
          ":first-line()"
        ],
        correctAnswer: 0
      },
      {
        question: "Which selector targets all elements with a class that contains 'btn'?",
        options: [
          "[class*='btn']",
          "[class^='btn']",
          "[class$='btn']",
          "[class~='btn']"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Box Model and Layout": [
      {
        question: "What is the total width of an element with width: 200px, padding: 20px, and border: 5px solid?",
        options: [
          "250px (with box-sizing: content-box)",
          "200px (with box-sizing: content-box)",
          "250px (with box-sizing: border-box)",
          "200px (with box-sizing: border-box)"
        ],
        correctAnswer: 0
      },
      {
        question: "Which property prevents margin collapse?",
        options: [
          "padding: 1px",
          "border: 1px solid",
          "overflow: hidden",
          "All of the above"
        ],
        correctAnswer: 3
      },
      {
        question: "What is the default box-sizing value?",
        options: [
          "content-box",
          "border-box",
          "padding-box",
          "margin-box"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Units and Values": [
      {
        question: "Which unit is relative to the font-size of the element?",
        options: [
          "em",
          "rem",
          "px",
          "vw"
        ],
        correctAnswer: 0
      },
      {
        question: "What does the calc() function do?",
        options: [
          "Performs calculations in CSS",
          "Calculates element dimensions",
          "Computes color values",
          "Determines animation timing"
        ],
        correctAnswer: 0
      },
      {
        question: "Which unit is relative to the viewport width?",
        options: [
          "vw",
          "vh",
          "vmin",
          "vmax"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Box Shadow and Text Effects": [
      {
        question: "What is the correct syntax for box-shadow?",
        options: [
          "box-shadow: 2px 2px 5px rgba(0,0,0,0.3);",
          "shadow: 2px 2px 5px rgba(0,0,0,0.3);",
          "box-shadow: 2px 2px 5px #000;",
          "shadow-box: 2px 2px 5px rgba(0,0,0,0.3);"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you create an inner shadow?",
        options: [
          "box-shadow: inset 2px 2px 5px rgba(0,0,0,0.3);",
          "box-shadow: inner 2px 2px 5px rgba(0,0,0,0.3);",
          "box-shadow: inside 2px 2px 5px rgba(0,0,0,0.3);",
          "box-shadow: internal 2px 2px 5px rgba(0,0,0,0.3);"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for text-shadow?",
        options: [
          "text-shadow: 2px 2px 4px rgba(0,0,0,0.3);",
          "shadow-text: 2px 2px 4px rgba(0,0,0,0.3);",
          "text-shadow: 2px 2px 4px #000;",
          "shadow: 2px 2px 4px rgba(0,0,0,0.3);"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Gradients and Patterns": [
      {
        question: "What is the correct syntax for a linear gradient?",
        options: [
          "background: linear-gradient(to right, red, blue);",
          "gradient: linear(to right, red, blue);",
          "background: gradient(linear, red, blue);",
          "linear-gradient: to right, red, blue;"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you create a radial gradient?",
        options: [
          "background: radial-gradient(circle, red, blue);",
          "gradient: radial(circle, red, blue);",
          "background: gradient(radial, red, blue);",
          "radial-gradient: circle, red, blue;"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for a conic gradient?",
        options: [
          "background: conic-gradient(red, blue, green);",
          "gradient: conic(red, blue, green);",
          "background: gradient(conic, red, blue, green);",
          "conic-gradient: red, blue, green;"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Filters and Blend Modes": [
      {
        question: "What is the correct syntax for applying a blur filter?",
        options: [
          "filter: blur(5px);",
          "blur: 5px;",
          "filter-blur: 5px;",
          "blur-filter: 5px;"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you apply a blend mode?",
        options: [
          "mix-blend-mode: multiply;",
          "blend-mode: multiply;",
          "mix-blend: multiply;",
          "blend: multiply;"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for multiple filters?",
        options: [
          "filter: blur(5px) brightness(150%);",
          "filters: blur(5px) brightness(150%);",
          "filter: blur(5px), brightness(150%);",
          "filters: blur(5px), brightness(150%);"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Responsive Images": [
      {
        question: "What is the correct syntax for srcset?",
        options: [
          'srcset="small.jpg 300w, large.jpg 900w"',
          'srcset="small.jpg, large.jpg"',
          'srcset="300w small.jpg, 900w large.jpg"',
          'srcset="small.jpg 300, large.jpg 900"'
        ],
        correctAnswer: 0
      },
      {
        question: "How do you use the picture element?",
        options: [
          '<picture><source srcset="large.jpg" media="(min-width: 800px)"><img src="small.jpg"></picture>',
          '<picture srcset="large.jpg" media="(min-width: 800px)"><img src="small.jpg"></picture>',
          '<picture><img src="small.jpg"><source srcset="large.jpg" media="(min-width: 800px)"></picture>',
          '<picture media="(min-width: 800px)"><img src="small.jpg" srcset="large.jpg"></picture>'
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of the sizes attribute?",
        options: [
          "To tell the browser what size the image will be displayed at different viewport widths",
          "To specify the actual dimensions of the image file",
          "To set the maximum size of the image",
          "To define the aspect ratio of the image"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Custom Fonts and Icon Fonts": [
      {
        question: "What is the correct syntax for @font-face?",
        options: [
          '@font-face { font-family: "CustomFont"; src: url("font.woff2") format("woff2"); }',
          '@font-face { font: "CustomFont"; source: url("font.woff2"); }',
          '@font-face { font-family: CustomFont; source: "font.woff2"; }',
          '@font-face { font: CustomFont; src: "font.woff2"; }'
        ],
        correctAnswer: 0
      },
      {
        question: "How do you implement an icon font?",
        options: [
          'Use a font-family with icon characters and content property',
          'Use an img tag with the icon URL',
          'Use a background-image with the icon URL',
          'Use a SVG element with the icon path'
        ],
        correctAnswer: 0
      },
      {
        question: "What is font-display used for?",
        options: [
          "To control how a font is displayed while loading",
          "To set the font size",
          "To change the font weight",
          "To specify the font style"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Tables and Lists Styling": [
      {
        question: "How do you collapse table borders?",
        options: [
          "border-collapse: collapse;",
          "table-border: collapse;",
          "border: collapse;",
          "collapse-borders: true;"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for custom list markers?",
        options: [
          "list-style-type: none; content: '•';",
          "list-marker: '•';",
          "list-style: '•';",
          "marker: '•';"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you style table rows on hover?",
        options: [
          "tr:hover { background-color: #f0f0f0; }",
          "table tr:hover { background: #f0f0f0; }",
          "tr:active { background-color: #f0f0f0; }",
          "table tr:active { background: #f0f0f0; }"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Forms and Input Styling": [
      {
        question: "How do you style a focused input?",
        options: [
          "input:focus { outline: none; border-color: blue; }",
          "input:active { outline: none; border-color: blue; }",
          "input:selected { outline: none; border-color: blue; }",
          "input:target { outline: none; border-color: blue; }"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for styling a disabled input?",
        options: [
          "input:disabled { opacity: 0.5; }",
          "input[disabled] { opacity: 0.5; }",
          "input.disabled { opacity: 0.5; }",
          "input:not(:enabled) { opacity: 0.5; }"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you style a required input?",
        options: [
          "input:required { border-color: red; }",
          "input[required] { border-color: red; }",
          "input.required { border-color: red; }",
          "input:not(:optional) { border-color: red; }"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Navigation and Menu Design": [
      {
        question: "How do you create a horizontal navigation?",
        options: [
          "display: flex; justify-content: space-between;",
          "display: inline-block;",
          "float: left;",
          "position: absolute;"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for a dropdown menu?",
        options: [
          ".dropdown:hover .dropdown-menu { display: block; }",
          ".dropdown:active .dropdown-menu { display: block; }",
          ".dropdown:focus .dropdown-menu { display: block; }",
          ".dropdown:target .dropdown-menu { display: block; }"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you create a mobile menu?",
        options: [
          "@media (max-width: 768px) { .nav { display: none; } }",
          "@media (min-width: 768px) { .nav { display: none; } }",
          "@media (width: 768px) { .nav { display: none; } }",
          "@media (device-width: 768px) { .nav { display: none; } }"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Card and Component Design": [
      {
        question: "What is the correct syntax for a card shadow?",
        options: [
          "box-shadow: 0 2px 5px rgba(0,0,0,0.1);",
          "shadow: 0 2px 5px rgba(0,0,0,0.1);",
          "card-shadow: 0 2px 5px rgba(0,0,0,0.1);",
          "box-shadow: 0 2px 5px #000;"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you create a card hover effect?",
        options: [
          ".card:hover { transform: translateY(-5px); }",
          ".card:active { transform: translateY(-5px); }",
          ".card:focus { transform: translateY(-5px); }",
          ".card:target { transform: translateY(-5px); }"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for a card layout?",
        options: [
          "display: flex; flex-wrap: wrap; gap: 20px;",
          "display: grid; grid-template-columns: repeat(3, 1fr);",
          "display: block; margin: 20px;",
          "display: inline-block; padding: 20px;"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Modal and Popup Design": [
      {
        question: "What is the correct syntax for a modal overlay?",
        options: [
          "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);",
          "position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);",
          "position: relative; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);",
          "position: static; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5);"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you center a modal?",
        options: [
          "position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);",
          "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);",
          "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%);",
          "position: static; top: 50%; left: 50%; transform: translate(-50%, -50%);"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for a modal animation?",
        options: [
          "@keyframes modalFade { from { opacity: 0; } to { opacity: 1; } }",
          "@animation modalFade { from { opacity: 0; } to { opacity: 1; } }",
          "@keyframe modalFade { from { opacity: 0; } to { opacity: 1; } }",
          "@animate modalFade { from { opacity: 0; } to { opacity: 1; } }"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Loading and Animation Effects": [
      {
        question: "What is the correct syntax for a loading spinner?",
        options: [
          "@keyframes spin { to { transform: rotate(360deg); } }",
          "@animation spin { to { transform: rotate(360deg); } }",
          "@keyframe spin { to { transform: rotate(360deg); } }",
          "@animate spin { to { transform: rotate(360deg); } }"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you create a progress bar?",
        options: [
          "width: 0%; transition: width 0.3s ease;",
          "width: 0%; animation: progress 0.3s ease;",
          "width: 0%; transform: scaleX(0);",
          "width: 0%; opacity: 0;"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for a skeleton loading?",
        options: [
          "background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);",
          "background: gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);",
          "background: linear-gradient(#f0f0f0, #e0e0e0);",
          "background: gradient(#f0f0f0, #e0e0e0);"
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
        question: "What is the correct syntax for a masonry layout?",
        options: [
          "display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));",
          "display: flex; flex-wrap: wrap;",
          "display: block; column-count: 3;",
          "display: inline-block; float: left;"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Performance Optimization": [
      {
        question: "What is the best practice for selector optimization?",
        options: [
          "Use specific class names instead of deep nesting",
          "Use element selectors for better performance",
          "Use ID selectors for all elements",
          "Use attribute selectors for better specificity"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you optimize animations?",
        options: [
          "Use transform and opacity for better performance",
          "Use width and height for animations",
          "Use margin and padding for animations",
          "Use background-color for animations"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the best practice for loading optimization?",
        options: [
          "Use critical CSS and lazy loading",
          "Load all CSS at once",
          "Use inline styles for better performance",
          "Use !important for faster rendering"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Browser Compatibility": [
      {
        question: "What is the correct syntax for vendor prefixes?",
        options: [
          "-webkit-transform: translateX(100px); transform: translateX(100px);",
          "transform: translateX(100px); -webkit-transform: translateX(100px);",
          "transform: -webkit-translateX(100px);",
          "-webkit-transform: translateX(100px);"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you implement feature detection?",
        options: [
          "@supports (display: grid) { /* styles */ }",
          "@feature (display: grid) { /* styles */ }",
          "@check (display: grid) { /* styles */ }",
          "@detect (display: grid) { /* styles */ }"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the best practice for fallbacks?",
        options: [
          "Provide a basic fallback before modern features",
          "Use only modern features",
          "Use only fallback features",
          "Use !important for fallbacks"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Preprocessors (SASS/SCSS)": [
      {
        question: "What is the correct syntax for SASS variables?",
        options: [
          "$primary-color: #007bff;",
          "@primary-color: #007bff;",
          "#primary-color: #007bff;",
          "&primary-color: #007bff;"
        ],
        correctAnswer: 0
      },
      {
        question: "How do you create a SASS mixin?",
        options: [
          "@mixin flex-center { display: flex; align-items: center; justify-content: center; }",
          "@function flex-center { display: flex; align-items: center; justify-content: center; }",
          "@include flex-center { display: flex; align-items: center; justify-content: center; }",
          "@extend flex-center { display: flex; align-items: center; justify-content: center; }"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the correct syntax for SASS nesting?",
        options: [
          ".parent { .child { color: red; } }",
          ".parent > .child { color: red; }",
          ".parent .child { color: red; }",
          ".parent: .child { color: red; }"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Methodologies (BEM, SMACSS)": [
      {
        question: "What is the correct BEM syntax?",
        options: [
          "block__element--modifier",
          "block-element-modifier",
          "block__element_modifier",
          "block-element__modifier"
        ],
        correctAnswer: 0
      },
      {
        question: "What are the SMACSS categories?",
        options: [
          "Base, Layout, Module, State, Theme",
          "Block, Element, Modifier, State, Theme",
          "Base, Component, Module, State, Theme",
          "Block, Layout, Module, State, Theme"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of BEM?",
        options: [
          "To create reusable components and code sharing",
          "To make CSS more performant",
          "To reduce file size",
          "To make selectors more specific"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Frameworks Overview": [
      {
        question: "What is the main feature of Bootstrap?",
        options: [
          "Grid system and components",
          "Utility classes",
          "Custom properties",
          "Animation system"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the main feature of Tailwind CSS?",
        options: [
          "Utility-first approach",
          "Component-based approach",
          "Grid system",
          "Animation system"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the main feature of Foundation?",
        options: [
          "Responsive grid system",
          "Utility classes",
          "Custom properties",
          "Animation system"
        ],
        correctAnswer: 0
      }
    ],
    "CSS Project: Building a Responsive Website": [
      {
        question: "What is the first step in building a responsive website?",
        options: [
          "Plan the layout and components",
          "Write the HTML",
          "Add the CSS",
          "Add JavaScript"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the best practice for responsive images?",
        options: [
          "Use srcset and sizes attributes",
          "Use fixed width images",
          "Use background images",
          "Use SVG only"
        ],
        correctAnswer: 0
      },
      {
        question: "What is the best practice for responsive typography?",
        options: [
          "Use relative units and fluid typography",
          "Use fixed font sizes",
          "Use only one font size",
          "Use pixel units"
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

module.exports ={
    getCSSLessonConcepts,
    getCSSCodeExample,
    getCSSCodeExplanation, 
    getCSSExercises,
    getCSSQuiz,
};