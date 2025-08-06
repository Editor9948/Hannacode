const getAccessibilityLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to Web Accessibility": `
- What is web accessibility?
- Importance of accessible web design
- Legal and ethical considerations
    `,
    "WCAG Guidelines": `
- Overview of WCAG principles (Perceivable, Operable, Understandable, Robust)
- Levels of conformance (A, AA, AAA)
- Applying guidelines in practice
    `,
    "Semantic HTML for Accessibility": `
- Using semantic elements (header, nav, main, footer, etc.)
- Landmarks and document structure
- Benefits for screen readers `,

    "ARIA Roles and Attributes": `
- What is ARIA?
- Common ARIA roles (banner, navigation, main, etc.)
- Using ARIA attributes for dynamic content`,

    "Keyboard Navigation": `
- Tab order and focus management
- Skip links
- Making interactive elements keyboard accessible`,

    "Accessible Forms": `
- Labeling form fields
- Error messages and validation
- Fieldset and legend usage`,

    "Testing for Accessibility": `
- Manual testing techniques
- Automated accessibility tools
- User testing with assistive technologies
    `,

    "Accessible Accordion (Custom Widget)": `
- What is a disclosure/accordion widget?
- Using native elements for custom widgets
- Managing state with aria-expanded and aria-controls
- Keyboard and screen reader accessibility
- Best practices for custom interactive components
`,
    "ARIA Live Region for Notifications": `
- What are ARIA live regions?
- Using aria-live for dynamic content
- Polite vs. assertive announcements
- Use cases: notifications, chat, form errors
- Best practices for live region updates
`,
    "Mobile-Specific Accessibility Patterns": `
- Touch target size and spacing
- Accessible labels for icon buttons
- Using inputmode and autocomplete for mobile forms
- Testing with mobile screen readers (VoiceOver, TalkBack)
- Best practices for mobile accessibility
`,
    "Custom Slider Widget": `
- What is a slider widget?
- Using role="slider" and ARIA attributes
- Keyboard support for custom sliders
- Communicating value, min, and max to assistive tech
- Best practices for custom controls
`,
    "Accessible Modal Dialog": `
- What is a modal dialog?
- Using role="dialog" and aria-modal
- Focus management and trapping
- Keyboard and screen reader accessibility
- Best practices for overlays and dialogs
`,
    "Accessible Drag-and-Drop": `
- Making drag-and-drop accessible
- Using aria-grabbed and keyboard support
- Announcing state changes to assistive tech
- Best practices for interactive lists
`,
    "Accessible Treeview": `
- What is a treeview widget?
- Using role="tree", role="treeitem", and role="group"
- Indicating expanded/collapsed state
- Keyboard navigation in treeviews
- Best practices for hierarchical data
`,
    "Advanced Mobile Gestures": `
- Making swipe and gesture controls accessible
- Providing ARIA feedback for gestures
- Ensuring alternative navigation for non-touch users
- Testing with mobile assistive technologies
- Best practices for gesture-based interfaces
`,
  };
  return concepts[lessonTitle] || "- Accessibility principle 1\n- Accessibility principle 2\n- Accessibility principle 3";
};

const getAccessibilityCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to Web Accessibility": `
<!-- Accessible heading structure -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<p>This is accessible content.</p>
`,

    "WCAG Guidelines": `
    // Code Example - Perceivable
<!-- ❌ Bad: Missing alt text -->
<img src="chart.png">

<!-- ✅ Good: Descriptive alt text -->
<img src="sales-chart.png" alt="Sales increased 25% from Q1 to Q2 2024">

<!-- ❌ Bad: Low contrast text -->
<p style="color: #999; background: #fff;">Important information</p>

<!-- ✅ Good: High contrast text (4.5:1 ratio minimum) -->
<p style="color: #333; background: #fff;">Important information</p>

<!-- ✅ Good: Captions for video content -->
<video controls>
  <source src="presentation.mp4" type="video/mp4">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>

//Code Example - Operable
<!-- ✅ Good: Keyboard accessible custom button -->
<button 
  class="custom-btn" 
  onclick="toggleMenu()" 
  onkeydown="handleKeyPress(event)"
  aria-expanded="false"
  aria-controls="navigation-menu">
  Menu
</button>

<!-- ✅ Good: Skip navigation link -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- ✅ Good: Focus management -->
<style>
.custom-btn:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
</style>

<script>
function handleKeyPress(event) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggleMenu();
  }
}

// ✅ Good: Manage focus after dynamic content changes
function showModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  modal.querySelector('.close-btn').focus(); // Move focus to modal
}
</script>

//Code Example - Understandable
<!-- ✅ Good: Clear language and structure -->
<form>
  <fieldset>
    <legend>Personal Information</legend>
    
    <!-- ✅ Good: Clear labels and instructions -->
    <label for="email">
      Email Address (required)
      <span class="hint">We'll use this to send you updates</span>
    </label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      aria-describedby="email-error"
      aria-invalid="false">
    <div id="email-error" class="error" role="alert" aria-live="polite"></div>
    
    <!-- ✅ Good: Password requirements clearly stated -->
    <label for="password">
      Password (required)
      <span class="hint">Must be at least 8 characters with one number</span>
    </label>
    <input 
      type="password" 
      id="password" 
      name="password" 
      required 
      aria-describedby="password-requirements">
    <div id="password-requirements" class="requirements">
      <ul>
        <li>At least 8 characters</li>
        <li>Contains at least one number</li>
      </ul>
    </div>
  </fieldset>
</form>

<!-- ✅ Good: Error handling with clear messages -->
<script>
function validateEmail(input) {
  const errorDiv = document.getElementById('email-error');
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(input.value)) {
    input.setAttribute('aria-invalid', 'true');
    errorDiv.textContent = 'Please enter a valid email address (example: user@domain.com)';
    errorDiv.style.display = 'block';
  } else {
    input.setAttribute('aria-invalid', 'false');
    errorDiv.textContent = '';
    errorDiv.style.display = 'none';
  }
}
</script>

//Code Example - Robust
<!-- ✅ Good: Semantic HTML structure -->
<main>
  <header>
    <h1>Article Title</h1>
    <nav aria-label="Article sections">
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#methods">Methods</a></li>
        <li><a href="#results">Results</a></li>
      </ul>
    </nav>
  </header>
  
  <article>
    <section id="introduction">
      <h2>Introduction</h2>
      <p>Content here...</p>
    </section>
    
    <!-- ✅ Good: Proper ARIA attributes for complex widgets -->
    <section id="data-table">
      <h2>Results Summary</h2>
      <table role="table" aria-label="Sales data by quarter">
        <thead>
          <tr>
            <th scope="col">Quarter</th>
            <th scope="col">Sales ($)</th>
            <th scope="col">Growth (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Q1 2024</th>
            <td>$125,000</td>
            <td>+15%</td>
          </tr>
        </tbody>
      </table>
    </section>
  </article>
</main>

<!-- ✅ Good: Valid HTML with proper DOCTYPE and lang -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Descriptive Page Title</title>
</head>

//Levels of Conformance
//Level A (Minimum)
//Recommended level for most websites, addressing major barriers to accessibility.
<!-- Level A: Basic image alt text -->
<img src="logo.png" alt="Company Name">

<!-- Level A: Basic form labels -->
<label for="name">Name:</label>
<input type="text" id="name" name="name">

<!-- Level A: Keyboard accessible links -->
<a href="contact.html">Contact Us</a>

//Level AA (Standards)
<!-- Level AA: Enhanced contrast (4.5:1 minimum) -->
<style>
.button {
  background-color: #0066cc; /* Meets AA contrast ratio */
  color: #ffffff;
  border: 2px solid #004499;
}

.button:focus {
  outline: 2px solid #ffbf00; /* Visible focus indicator */
  outline-offset: 2px;
}
</style>

<!-- Level AA: Descriptive link text -->
<a href="annual-report-2024.pdf">
  Download 2024 Annual Report (PDF, 2.3MB)
</a>

<!-- Level AA: Proper heading hierarchy -->
<h1>Main Page Title</h1>
  <h2>Section Title</h2>
    <h3>Subsection Title</h3>


    //Level AAA (Enhanced)
//Highest level providing enhanced accessibility for specialized content.
<!-- Level AAA: Higher contrast ratio (7:1) -->
<style>
.high-contrast-text {
  color: #000000;
  background-color: #ffffff; /* 21:1 contrast ratio */
}
</style>

<!-- Level AAA: Context-sensitive help -->
<label for="tax-id">
  Tax ID Number
  <button type="button" 
          aria-describedby="tax-id-help" 
          onclick="toggleHelp('tax-id-help')">
    Help
  </button>
</label>
<input type="text" id="tax-id" name="tax-id">
<div id="tax-id-help" class="help-text" hidden>
  <p>Your Tax ID is the 9-digit number assigned by the IRS, 
     formatted as XX-XXXXXXX.</p>
</div>
`,

    "Semantic HTML for Accessibility": `
<!-- Semantic elements for structure -->
<header>
  <nav>
    <a href="#main">Skip to main content</a>
  </nav>
</header>
<main id="main">
  <article>
    <h2>Article Title</h2>
    <p>Content goes here.</p>
  </article>
</main>
<footer>Footer content</footer>
`,

    "ARIA Roles and Attributes": `
    //Basic ARIA concept
<!-- Without ARIA: Generic div with no semantic meaning -->
<div onclick="toggleMenu()">Menu</div>

<!-- With ARIA: Semantically meaningful button -->
<div role="button" 
     tabindex="0"
     aria-label="Toggle navigation menu"
     aria-expanded="false"
     onclick="toggleMenu()"
     onkeydown="handleKeyPress(event)">
  Menu
</div>

<!-- Better approach: Use semantic HTML when possible -->
<button aria-label="Toggle navigation menu" 
        aria-expanded="false"
        onclick="toggleMenu()">
  Menu
</button>


//Code Example - Landmark Roles
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Website with ARIA Landmarks</title>
</head>
<body>
  <!-- Banner role: Site header with logo and main navigation -->
  <header role="banner">
    <img src="logo.png" alt="Company Name">
    <nav role="navigation" aria-label="Main navigation">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <!-- Main role: Primary content area -->
  <main role="main">
    <h1>Welcome to Our Website</h1>
    
    <!-- Article role: Standalone content -->
    <article role="article">
      <h2>Latest News</h2>
      <p>Important announcement content...</p>
    </article>
    
    <!-- Region role: Significant content area -->
    <section role="region" aria-labelledby="features-heading">
      <h2 id="features-heading">Key Features</h2>
      <ul>
        <li>Feature one</li>
        <li>Feature two</li>
      </ul>
    </section>
  </main>

  <!-- Complementary role: Supporting content -->
  <aside role="complementary">
    <h3>Related Links</h3>
    <nav role="navigation" aria-label="Related links">
      <ul>
        <li><a href="/resources">Resources</a></li>
        <li><a href="/help">Help Center</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Contentinfo role: Site footer -->
  <footer role="contentinfo">
    <p>&copy; 2024 Company Name. All rights reserved.</p>
    
    <!-- Search role: Search functionality -->
    <div role="search">
      <label for="site-search">Search our site:</label>
      <input type="search" id="site-search" name="search">
      <button type="submit">Search</button>
    </div>
  </footer>
</body>
</html>
`,

    "Keyboard Navigation": `
<!-- Focusable and keyboard-accessible button -->
<button tabindex="0" aria-pressed="false">Toggle</button>
<a href="#content" tabindex="0">Skip to Content</a>
<!-- Custom component with keyboard support -->
<div role="button" tabindex="0" aria-pressed="false" 
     onkeydown="if(event.key==='Enter'){this.click()}">
  Custom Button
</div>
`,

    "Accessible Forms": `
<!-- Accessible form with labels and fieldset -->
<form>
  <fieldset>
    <legend>Contact Information</legend>
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required aria-required="true" />
    <label for="message">Message:</label>
    <textarea id="message" name="message"></textarea>
  </fieldset>
  <button type="submit">Submit</button>
</form>
<!-- Error message with aria-live -->
<div id="error" aria-live="assertive" style="color: red;"></div>
`,

    "Testing for Accessibility": `
// Code Example - Manual Testing Checklist Implementation
   <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accessibility Manual Testing Example</title>
    <style>
        /* Focus indicators for manual testing */
        .custom-button:focus {
            outline: 3px solid #4A90E2;
            outline-offset: 2px;
        }
        
        /* High contrast colors */
        .accessible-text {
            color: #212121;
            background-color: #ffffff;
            /* Contrast ratio: 16.9:1 (AAA compliant) */
        }
        
        /* Skip link for keyboard users */
        .skip-link {
            position: absolute;
            top: -40px;
            left: 6px;
            z-index: 999;
            padding: 8px;
            background: #000;
            color: #fff;
            text-decoration: none;
        }
        
        .skip-link:focus {
            top: 6px;
        }
    </style>
</head>
<body>
    <!-- Skip navigation link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Proper heading structure -->
    <header>
        <h1>Manual Testing Demo</h1>
        <nav aria-label="Main navigation">
            <ul>
                <li><a href="#home" tabindex="0">Home</a></li>
                <li><a href="#about" tabindex="0">About</a></li>
                <li><a href="#contact" tabindex="0">Contact</a></li>
            </ul>
        </nav>
    </header>
    
    <main id="main-content">
        <section aria-labelledby="form-heading">
            <h2 id="form-heading">Contact Form</h2>
            
            <!-- Accessible form with proper labels -->
            <form>
                <div>
                    <label for="name">Full Name (required)</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        aria-describedby="name-help"
                        aria-invalid="false"
                    >
                    <div id="name-help">Enter your first and last name</div>
                </div>
                
                <div>
                    <label for="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email"
                        aria-describedby="email-error"
                    >
                    <div id="email-error" role="alert" aria-live="polite"></div>
                </div>
                
                <fieldset>
                    <legend>Preferred Contact Method</legend>
                    <input type="radio" id="contact-email" name="contact" value="email">
                    <label for="contact-email">Email</label>
                    
                    <input type="radio" id="contact-phone" name="contact" value="phone">
                    <label for="contact-phone">Phone</label>
                </fieldset>
                
                <button type="submit" class="custom-button">
                    Submit Form
                </button>
            </form>
        </section>
        
        <!-- Image with proper alt text -->
        <section>
            <h2>Visual Content</h2>
            <img 
                src="chart.png" 
                alt="Sales increased 25% from Q1 to Q2, showing growth from $10k to $12.5k"
                width="400" 
                height="300"
            >
            
            <!-- Decorative image -->
            <img src="decoration.png" alt="" role="presentation">
        </section>
    </main>
</body>
</html>


//Code Example - Automated Testing Integration

`,


  "Accessible Accordion (Custom Widget)": `
<!-- Accessible Accordion using button and ARIA -->
<div class="accordion">
  <button aria-expanded="false" aria-controls="section1" id="accordion1">
    Show Details
  </button>
  <div id="section1" role="region" aria-labelledby="accordion1" hidden>
    <p>This is the hidden content revealed by the accordion.</p>
  </div>
</div>
<script>
  const btn = document.getElementById('accordion1');
  const section = document.getElementById('section1');
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    section.hidden = expanded;
  });
</script>
`,
    "ARIA Live Region for Notifications": `
<!-- ARIA live region for dynamic notifications -->
<div aria-live="polite" id="live-region">No new notifications.</div>
<button onclick="announce()">Simulate Notification</button>
<script>
  function announce() {
    document.getElementById('live-region').textContent = 'You have a new message!';
  }
</script>
`,
    "Mobile-Specific Accessibility Patterns": `
<!-- Large touch targets and accessible labels for mobile -->
<button style="min-width: 48px; min-height: 48px;" aria-label="Close dialog">
  <svg aria-hidden="true" width="24" height="24"><!-- icon --></svg>
</button>
<label for="phone">Phone Number</label>
<input type="tel" id="phone" name="phone" autocomplete="tel" inputmode="tel" />
`,
    "Custom Slider Widget": `
<!-- Accessible custom slider -->
<div role="slider" tabindex="0" aria-valuenow="50" aria-valuemin="0" 
aria-valuemax="100" aria-label="Volume" id="slider" style="width:200px;
 background:#eee;">
  <div id="thumb" style="width:20px; height:20px; background:#333;
   position:relative; left:90px;"></div>
</div>
<script>
  const slider = document.getElementById('slider');
  let value = 50;
  slider.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight' && value < 100) value += 10;
    if (e.key === 'ArrowLeft' && value > 0) value -= 10;
    slider.setAttribute('aria-valuenow', value);
    document.getElementById('thumb').style.left = (value * 1.8) + 'px';
  });
</script>
`,
    "Accessible Modal Dialog": `
<!-- Accessible modal dialog -->
<div id="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" 
tabindex="-1" hidden>
  <h2 id="modal-title">Dialog Title</h2>
  <p>Dialog content goes here.</p>
  <button id="close-modal">Close</button>
</div>
<button id="open-modal">Open Modal</button>
<script>
  const modal = document.getElementById('modal');
  document.getElementById('open-modal').onclick = () => {
    modal.hidden = false;
    modal.focus();
  };
  document.getElementById('close-modal').onclick = () => {
    modal.hidden = true;
  };
  // Trap focus inside modal (simplified)
  modal.addEventListener('keydown', e => {
    if (e.key === 'Tab') e.preventDefault();
  });
</script>
`,

    "Accessible Drag-and-Drop": `
<!-- Accessible drag-and-drop list -->
<ul id="draggable-list">
  <li draggable="true" tabindex="0" aria-grabbed="false">Item 1</li>
  <li draggable="true" tabindex="0" aria-grabbed="false">Item 2</li>
</ul>
<script>
  const items = document.querySelectorAll('#draggable-list li');
  items.forEach(item => {
    item.addEventListener('dragstart', () => item.setAttribute('aria-grabbed', 'true'));
    item.addEventListener('dragend', () => item.setAttribute('aria-grabbed', 'false'));
  });
</script>
`,

    "Accessible Treeview": `
<!-- Accessible treeview structure -->
<ul role="tree" aria-label="File Explorer">
  <li role="treeitem" aria-expanded="true">Folder 1
    <ul role="group">
      <li role="treeitem">File 1-1</li>
      <li role="treeitem">File 1-2</li>
    </ul>
  </li>
  <li role="treeitem">Folder 2</li>
</ul>


//Using ARIA Tree Roles
<!-- Complete ARIA tree structure -->
<div class="tree-container">
  <h2>Company Directory</h2>
  
  <!-- Tree root with proper labeling -->
  <ul role="tree" 
      aria-label="Company organizational structure"
      class="tree-root">
    
    <!-- Top-level expandable treeitem -->
    <li role="treeitem" 
        aria-expanded="true" 
        aria-level="1"
        aria-setsize="3"
        aria-posinset="1"
        tabindex="0"
        id="executives">
      <span class="tree-item-content">
        <button class="expand-toggle" aria-hidden="true">▼</button>
        <span class="tree-label">Executives</span>
      </span>
      
      <!-- Group containing child items -->
      <ul role="group" aria-labelledby="executives">
        <li role="treeitem" 
            aria-level="2"
            aria-setsize="2"
            aria-posinset="1"
            tabindex="-1">
          <span class="tree-item-content">
            <span class="tree-label">CEO - John Smith</span>
          </span>
        </li>
        
        <li role="treeitem" 
            aria-level="2"
            aria-setsize="2"
            aria-posinset="2"
            tabindex="-1">
          <span class="tree-item-content">
            <span class="tree-label">CTO - Jane Doe</span>
          </span>
        </li>
      </ul>
    </li>
    
    <!-- Expandable treeitem with nested groups -->
    <li role="treeitem" 
        aria-expanded="false" 
        aria-level="1"
        aria-setsize="3"
        aria-posinset="2"
        tabindex="-1"
        id="engineering">
      <span class="tree-item-content">
        <button class="expand-toggle" aria-hidden="true">▶</button>
        <span class="tree-label">Engineering</span>
      </span>
      
      <ul role="group" aria-labelledby="engineering" hidden>
        <li role="treeitem" 
            aria-expanded="false"
            aria-level="2"
            aria-setsize="2"
            aria-posinset="1"
            tabindex="-1"
            id="frontend-team">
          <span class="tree-item-content">
            <button class="expand-toggle" aria-hidden="true">▶</button>
            <span class="tree-label">Frontend Team</span>
          </span>
          
          <ul role="group" aria-labelledby="frontend-team" hidden>
            <li role="treeitem" 
                aria-level="3"
                aria-setsize="3"
                aria-posinset="1"
                tabindex="-1">
              <span class="tree-item-content">
                <span class="tree-label">Senior Developer - Alice Johnson</span>
              </span>
            </li>
            
            <li role="treeitem" 
                aria-level="3"
                aria-setsize="3"
                aria-posinset="2"
                tabindex="-1">
              <span class="tree-item-content">
                <span class="tree-label">Developer - Bob Wilson</span>
              </span>
            </li>
            
            <li role="treeitem" 
                aria-level="3"
                aria-setsize="3"
                aria-posinset="3"
                tabindex="-1">
              <span class="tree-item-content">
                <span class="tree-label">Junior Developer - Carol Brown</span>
              </span>
            </li>
          </ul>
        </li>
        
        <li role="treeitem" 
            aria-expanded="false"
            aria-level="2"
            aria-setsize="2"
            aria-posinset="2"
            tabindex="-1"
            id="backend-team">
          <span class="tree-item-content">
            <button class="expand-toggle" aria-hidden="true">▶</button>
            <span class="tree-label">Backend Team</span>
          </span>
          
          <ul role="group" aria-labelledby="backend-team" hidden>
            <li role="treeitem" 
                aria-level="3"
                aria-setsize="2"
                aria-posinset="1"
                tabindex="-1">
              <span class="tree-item-content">
                <span class="tree-label">Senior Developer - David Lee</span>
              </span>
            </li>
            
            <li role="treeitem" 
                aria-level="3"
                aria-setsize="2"
                aria-posinset="2"
                tabindex="-1">
              <span class="tree-item-content">
                <span class="tree-label">Developer - Emma Davis</span>
              </span>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    
    <!-- Simple leaf treeitem -->
    <li role="treeitem" 
        aria-level="1"
        aria-setsize="3"
        aria-posinset="3"
        tabindex="-1">
      <span class="tree-item-content">
        <span class="tree-label">HR Department - Frank Miller</span>
      </span>
    </li>
  </ul>
</div>

<style>
/* Tree styling */
.tree-container {
  max-width: 600px;
  margin: 20px;
  font-family: Arial, sans-serif;
}

.tree-root {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  background: #fff;
}

[role="treeitem"] {
  list-style: none;
  margin: 0;
  padding: 0;
}

.tree-item-content {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  position: relative;
}

/* Indentation based on level */
[aria-level="1"] .tree-item-content { padding-left: 12px; }
[aria-level="2"] .tree-item-content { padding-left: 32px; }
[aria-level="3"] .tree-item-content { padding-left: 52px; }
[aria-level="4"] .tree-item-content { padding-left: 72px; }

/* Expand/collapse button */
.expand-toggle {
  background: none;
  border: none;
  font-size: 12px;
  margin-right: 8px;
  width: 16px;
  cursor: pointer;
  color: #666;
}

/* Focus styling */
[role="treeitem"]:focus {
  outline: none;
}

[role="treeitem"]:focus > .tree-item-content {
  background-color: #0078d4;
  color: white;
  outline: 2px solid #106ebe;
}

/* Hover effects */
.tree-item-content:hover {
  background-color: #f5f5f5;
}

[role="treeitem"]:focus > .tree-item-content:hover {
  background-color: #106ebe;
}

/* Group styling */
[role="group"] {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* Selection state */
[role="treeitem"][aria-selected="true"] > .tree-item-content {
  background-color: #e3f2fd;
  border-left: 3px solid #2196f3;
}

[role="treeitem"][aria-selected="true"]:focus > .tree-item-content {
  background-color: #0078d4;
  color: white;
}

/* Loading state */
.tree-loading {
  padding: 8px 12px;
  color: #666;
  font-style: italic;
}

/* Icons for different item types */
.tree-label::before {
  content: "📁";
  margin-right: 6px;
}

[role="treeitem"]:not([aria-expanded]) .tree-label::before {
  content: "📄";
}

[aria-expanded="false"] .tree-label::before {
  content: "📁";
}

[aria-expanded="true"] .tree-label::before {
  content: "📂";
}
</style>
`,

    "Advanced Mobile Gestures": `
<!-- Accessible swipe gesture for mobile (with ARIA feedback) -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Swipe Gesture Example</title>
  <style>
    #swipe-area {
      width: 200px;
      height: 100px;
      background: #eee;
      display: flex;
      align-items: center;
      justify-content: center;
      user-select: none;
    }
  </style>
</head>
<body>
  <!-- Accessible swipe gesture for mobile (with ARIA feedback) -->
  <div id="swipe-area" tabindex="0" aria-label="Swipe left or right to change image">
    <span id="gesture-status">Image 1 of 3</span>
  </div>
<script>
    document.addEventListener('DOMContentLoaded', function () {
      let current = 1;
      const status = document.getElementById('gesture-status');
      const swipeArea = document.getElementById('swipe-area');
      let startX = 0;

      swipeArea.addEventListener('touchstart', function (e) {
        startX = e.changedTouches[0].clientX;
      });

      swipeArea.addEventListener('touchend', function (e) {
        const endX = e.changedTouches[0].clientX;
        const diff = endX - startX;

        if (Math.abs(diff) > 30) {
          current = current === 3 ? 1 : current + 1;
          status.textContent = \`Image \${current} of 3\`;
        }
      });
    });
  </script>
  
</body>
</html>

`,
  };
  return examples[lessonTitle] || "<!-- Accessibility code example will be provided -->";
};

const getAccessibilityCodeExplanation =(lessonTitle) => {
    const explanations = {
        "Introduction to Web Accessibility": `
**What is Web Accessibility?**

Web accessibility refers to the practice of designing and developing websites, 
web applications, and other digital products that are usable by people with 
disabilities, including visual, auditory, motor, or cognitive disabilities. 
The goal of web accessibility is to ensure that everyone, regardless of their 
abilities, can access and use the web.

Web accessibility involves designing and developing digital products that are:
- **Perceivable**: Users can perceive the information and interface elements, 
such as text, images, and controls.
- **Operable**: Users can operate the interface elements, such as buttons,
links, and form controls.
- **Understandable**: Users can understand the information and interface elements,
such as navigation, content, and feedback.
- **Robust**: The digital product can be used with a variety of assistive technologies, 
such as screen readers, keyboard-only navigation, and other tools.

**Importance of Accessible Web Design**
Accessible web design is important for several reasons:
- **Equal access**: Accessible web design ensures that everyone, regardless of 
their abilities, can access and use the web.
- **Improved user experience**: Accessible web design can improve the user experience 
for all users, not just those with disabilities.
- **Increased reach**: Accessible web design can increase the reach of a website
or digital product, as it can be used by a wider range of users.
- **Compliance with laws and regulations**: Accessible web design can help organizations
comply with laws and regulations, such as the Americans with Disabilities 
Act (ADA) and the European Union's Accessibility Act.

**Legal and Ethical Considerations**
There are several legal and ethical considerations related to web accessibility:
- **Americans with Disabilities Act (ADA)**: The ADA requires that public accommodations,
including websites, be accessible to people with disabilities.
- **European Union's Accessibility Act**: The Accessibility Act requires that public 
sector bodies, including websites, be accessible to people with disabilities.
- **Section 508 of the Rehabilitation Act**: Section 508 requires that federal agencies,
including websites, be accessible to people with disabilities.
- **Web Content Accessibility Guidelines (WCAG)**: The WCAG provides guidelines for making
web content accessible to people with disabilities.
- **Ethical considerations**: Accessible web design is also an ethical consideration, 
as it ensures that everyone, regardless of their abilities, can access and use the web.

**Best Practices for Accessible Web Design**
Here are some best practices for accessible web design:
- **Use semantic HTML**: Use semantic HTML elements, such as headings, paragraphs,
and lists, to provide structure and meaning to web content.
- **Provide alternative text for images**: Provide alternative text for images, 
so that users who are blind or have low vision can understand the content of the image.
- **Use high contrast colors**: Use high contrast colors, so that users who are blind 
or have low vision can read the content more easily.
- **Make interactive elements accessible**: Make interactive elements, such as buttons 
and form controls, accessible to users who are blind or have low vision.
- **Test for accessibility**: Test for accessibility, using tools such as screen
readers and keyboard-only navigation, to ensure that the website or digital product
is accessible to all users.

**Code Explanation**: 
This example shows a clear heading structure using \`<h1>\` and \`<h2>\` tags. 
Proper heading hierarchy helps all users, especially those using screen readers, 
to understand the organization of content and navigate the page efficiently.`,

        "WCAG Guidelines": `
**Overview**

The Web Content Accessibility Guidelines (WCAG) provide a comprehensive framework for making
web content accessible to people with disabilities. These guidelines are organized around four 
fundamental principles and three levels of conformance.

**WCAG Four Principles (POUR)**

1. **Perceivable**
Information and user interface components must be presentable to users in ways they can perceive.
*Code Explanation*:
Content must be available to users through multiple senses. This includes providing text alternatives 
for images, captions for videos, and ensuring sufficient color contrast.

2. **Operable**
User interface components and navigation must be operable by all users.
*Code Explanation*:
All functionality must be available through keyboard navigation, users need enough time to read 
content, and content shouldn't cause seizures or physical reactions.

3. **Understandable**
Information and the operation of user interface must be understandable.
*Code Explanation*:
Text must be readable and understandable, web pages should appear and 
operate predictably, and users should be helped to avoid and correct mistakes.

4. **Robust**
Content must be robust enough to be interpreted reliably by a wide variety of user agents, 
including assistive technologies.
*Code Explanation*:
Code should be clean, valid, and compatible with current and future assistive technologies. 
This includes proper HTML semantics and ARIA attributes.
`,

        "Semantic HTML for Accessibility": `
This code uses semantic HTML elements (\`header\`, \`nav\`, \`main\`, \`article\`, \`footer\`)
 to define the structure of the page. Semantic elements help screen readers and 
 assistive technologies understand the layout and navigate efficiently. 
 The “Skip to main content” link allows keyboard users to bypass repetitive navigation,
  a best practice for accessibility.`,

        "ARIA Roles and Attributes": `
1. **What is ARIA?**

*Code Explanation*:
ARIA (Accessible Rich Internet Applications) is a set of HTML attributes that provide 
semantic information about elements to assistive technologies like screen readers. 
ARIA helps bridge the gap between complex web applications and accessibility by adding 
meaning to generic HTML elements and describing dynamic content changes.
      
**ARIA's Three Main Categories**:

- Roles: Define what an element is or does
- Properties: Describe element properties (labels, descriptions)
- States: Describe current conditions (expanded, checked, disabled

2. **Landmark Roles**
*Code Explanation*:
Landmark roles help screen reader users navigate page sections quickly. 
They create a structural outline of your page content.
`,

        "Keyboard Navigation": `
- tabindex="0" makes elements focusable via keyboard.
- aria-pressed communicates toggle state to assistive tech.
- The custom button uses onkeydown to allow activation with the Enter key, ensuring keyboard accessibility for custom controls.`,

        "Accessible Forms": `
- Labels are explicitly associated with form fields using for and id.
- fieldset and legend group related fields, improving navigation for screen readers.
- aria-required="true" and aria-live="assertive" ensure users are informed of required
 fields and errors in real time.`,

        "Testing for Accessibility": `
**Overview**
Accessibility testing ensures that web applications are usable by people with 
disabilities. This comprehensive approach combines manual testing, automated 
tools, and user testing to create inclusive digital experiences.

1. **Manual Testing Techniques**
*Code Explanation*
Manual testing involves systematically checking accessibility features without 
automated tools. This includes keyboard navigation, screen reader compatibility, 
color contrast, and semantic structure validation.

*Key Manual Testing Areas*:
- **Keyboard Navigation**: All interactive elements must be accessible via keyboard
- **Focus Management**: Visible focus indicators and logical tab order
- **Semantic HTML**: Proper use of headings, landmarks, and ARIA attributes
- **Color and Contrast**: Ensuring sufficient contrast ratios
- **Alternative Text**: Meaningful descriptions for images and media

2. **Automated Accessibility Tools**
*Code Explanation*
Automated tools scan code and rendered pages to identify accessibility violations. 
Popular tools include axe-core, Lighthouse, WAVE, and Pa11y. These tools integrate 
into development workflows for continuous accessibility monitoring.

3.  **User Testing with Assistive Technologies**
*Code Explanation*
User testing involves real people using assistive technologies like screen readers, 
voice control software, and switch devices. This provides authentic feedback 
about the actual user experience beyond what automated tools can detect.

**Key Benefits**:
- **Early Detection**: Catch issues during development
- **Comprehensive Coverage**: Multiple testing methods ensure thorough evaluation
- **Real User Feedback**: Authentic insights from assistive technology users
- **Continuous Monitoring**: Ongoing accessibility validation in CI/CD pipelines

**Best Practices**:
- Test early and often in the development cycle
- Include users with disabilities in the testing process
- Combine multiple testing methods for comprehensive coverage
- Document and track accessibility issues systematically
- Train development teams on accessibility testing techniques`,


        "Accessible Accordion (Custom Widget)": `
This example demonstrates how to build a custom accordion (disclosure) widget 
that is accessible to both keyboard and screen reader users. 
The button uses aria-expanded to indicate its state and aria-controls to 
link to the content region. The content region uses role="region" and aria-labelledby 
for context. Toggling the hidden attribute and updating ARIA attributes ensures
both visual and assistive technology users get the correct experience. 
Always use native elements (like <button>) for interactivity and update 
ARIA attributes dynamically for accessibility.`,

        "ARIA Live Region for Notifications": `
This code shows how to use an ARIA live region to announce dynamic updates to 
screen readers. The aria-live="polite" attribute ensures that screen readers 
announce changes to the region without interrupting the user. 
The example simulates a notification update, which is a common pattern 
for chat messages, notifications, or form errors. Use aria-live="assertive" 
for urgent updates. Live regions are essential for making dynamic content accessible.`,

        "Mobile-Specific Accessibility Patterns": `
This example demonstrates best practices for mobile accessibility: 
large touch targets (minimum 48x48px), accessible labels for icon-only buttons 
using aria-label, and the use of inputmode and autocomplete for mobile-friendly forms.
These patterns ensure that controls are easily tappable and that the correct
keyboard and autofill options are presented to users. Always test with mobile screen
readers (VoiceOver, TalkBack) to ensure accessibility.`,

        "Custom Slider Widget": `
This code shows how to create a custom slider that is accessible to keyboard and screen
reader users. The slider uses \`role="slider"\` and ARIA attributes 
(\`aria-valuenow\`, \`aria-valuemin\`, \`aria-valuemax\`, \`aria-label\`) 
to communicate its value and range. Keyboard support allows users to adjust the
value with arrow keys. Always provide both keyboard and ARIA support for custom 
controls to ensure all users can interact with them.`,

        "Accessible Modal Dialog": `
This example demonstrates an accessible modal dialog using \`role="dialog"\`,
\`aria-modal="true"\`, and aria-labelledby for accessibility.
Focus is moved to the modal when opened and is trapped inside to prevent users 
from tabbing out. Managing focus and ARIA attributes is essential for dialogs
and overlays to ensure keyboard and screen reader accessibility.`,

        "Accessible Drag-and-Drop": `
This code shows how to make a drag-and-drop list accessible.
Each item uses aria-grabbed to indicate its state, and the list items
are focusable with \`tabindex="0"\`. Always provide keyboard and ARIA support
for drag-and-drop interactions, and announce state changes to assistive technologies 
for a fully accessible experience.`,

        "Accessible Treeview": `
This example demonstrates an accessible treeview structure using \`role="tree"\`,
\`role="treeitem"\`, and \`role="group"\` to communicate hierarchy and relationships.
Use ARIA attributes to indicate expanded/collapsed state and support keyboard 
navigation. Treeviews are useful for representing hierarchical data, 
such as file explorers, and must be accessible to all users.`,

        "Advanced Mobile Gestures": `
This code shows how to make swipe and gesture controls accessible by providing
ARIA feedback for screen readers. The swipe area uses aria-label to describe 
its purpose, and updates are announced visually and programmatically. 
Always provide alternative feedback for gestures and test with mobile assistive 
technologies to ensure accessibility for all users, including those who cannot 
use touch gestures.`,
    };
return explanations[lessonTitle] || "// Example code will be provided"
}


// Helper: Returns practice exercises for accessibility lessons
const getAccessibilityExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to Web Accessibility": `
1. Identify accessibility barriers on a popular website.
2. Write a summary of why accessibility matters.
3. List three types of disabilities that affect web use.
`,
    "WCAG Guidelines": `
1. Summarize the four WCAG principles.
2. Find a website and evaluate which WCAG level it meets.
3. List three success criteria from WCAG and explain them.
`,
    "Semantic HTML for Accessibility": `
1. Refactor a sample HTML page to use semantic elements.
2. Add landmarks (header, nav, main, footer) to a web page.
3. Explain how semantic HTML helps screen readers.
`,
    "ARIA Roles and Attributes": `
1. Add ARIA roles to a navigation menu.
2. Use aria-label and aria-current on a sample link.
3. Explain when to use ARIA and when to use native HTML.
`,
    "Keyboard Navigation": `
1. Make a custom button accessible by keyboard.
2. Add skip links to a sample page.
3. Test tab order on a form and fix any issues.
`,
    "Accessible Forms": `
1. Add labels to all form fields in a sample form.
2. Implement accessible error messages.
3. Group related fields using fieldset and legend.
`,
    "Testing for Accessibility": `
1. Use a browser extension (like axe) to test a page.
2. Test a page with a screen reader or keyboard only.
3. Write a checklist for manual accessibility testing.`,

    "Accessible Accordion (Custom Widget)":`
- Create an accordion component with proper ARIA attributes (aria-expanded, aria-controls, aria-labelledby).
- Build a FAQ section using accordion pattern with keyboard navigation (Enter, Space, Arrow keys).
- Design a multi-level accordion with nested panels that maintains focus management 
and screen reader compatibility.`,

"ARIA Live Region for Notifications":`
- Create a notification system using aria-live regions for status updates and alerts.
- Build a form validation system that announces errors dynamically using live regions.
- Design a real-time chat interface with proper live region announcements for new messages.`,

"Mobile-Specific Accessibility Patterns":`
- Create touch-friendly interface elements with minimum 44px touch targets and proper spacing.
- Build a mobile navigation pattern that works with screen readers and voice control.
- Design a mobile form with accessibility features like proper label association and error handling.`,

"Custom Slider Widget":`
- Create a range slider with full keyboard support (Arrow keys, Home, End, Page Up/Down).
- Build a dual-handle slider for price ranges with proper ARIA attributes and value announcements.
- Design a vertical slider with orientation support and screen reader compatibility.`,

"Accessible Modal Dialog":`
- Create a modal dialog that traps focus and returns focus to the triggering element on close.
- Build a confirmation dialog with proper ARIA labeling and keyboard event handling (Escape to close).
- Design a multi-step modal wizard with proper focus management between steps.`,

"Accessible Drag-and-Drop":`
- Create a drag-and-drop interface with keyboard alternatives and screen reader announcements.
- Build a sortable list that works with both mouse and keyboard interactions.
- Design a kanban board with accessible drag-and-drop functionality and live region updates.`,

"Accessible Treeview":`
- Create a file explorer treeview with proper ARIA tree roles and keyboard navigation.
- Build a hierarchical menu system with expand/collapse functionality and focus management.
- Design a organizational chart treeview with proper parent-child relationships and navigation.`,

"Advanced Mobile Gestures":`
- Create swipe gesture handlers with accessibility alternatives for users who cannot perform gestures.
- Build a pinch-to-zoom interface with keyboard and button alternatives for accessibility.
- Design a mobile app interface with gesture shortcuts that have accessible equivalents 
and clear instructions.`

  };
  return exercises[lessonTitle] || "1. Identify accessibility issues on a web page.\n2. Refactor code for accessibility.\n3. Test with a screen reader.";
};

// Helper: Returns quiz questions for accessibility lessons
const getAccessibilityQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to Web Accessibility": [
      {
        question: "What is web accessibility?",
        options: [
          "Designing websites for all users, including those with disabilities",
          "Making websites load faster",
          "Improving SEO only",
          "Using only HTML5"
        ],
        correctAnswer: 0
      },
      {
        question: "Which group benefits most from accessible websites?",
        options: [
          "People with disabilities",
          "Search engines",
          "Developers",
          "Only mobile users"
        ],
        correctAnswer: 0
      }
    ],
    "WCAG Guidelines": [
      {
        question: "What does WCAG stand for?",
        options: [
          "Web Content Accessibility Guidelines",
          "Web Coding and Graphics",
          "Website Compliance and Accessibility Group",
          "Web Content and Graphics"
        ],
        correctAnswer: 0
      },
      {
        question: "Which is NOT a WCAG principle?",
        options: [
          "Perceivable",
          "Operable",
          "Understandable",
          "Profitable"
        ],
        correctAnswer: 3
      }
    ],
    "Semantic HTML for Accessibility": [
      {
        question: "Which element is used for main content?",
        options: [
          "<main>",
          "<div>",
          "<span>",
          "<section>"
        ],
        correctAnswer: 0
      },
      {
        question: "Why use semantic HTML?",
        options: [
          "It helps screen readers and improves accessibility",
          "It makes code longer",
          "It is required for CSS",
          "It is only for SEO"
        ],
        correctAnswer: 0
      }
    ],
    "ARIA Roles and Attributes": [
      {
        question: "What does ARIA stand for?",
        options: [
          "Accessible Rich Internet Applications",
          "Advanced Responsive Internet Applications",
          "Accessible Responsive Internet Attributes",
          "Application Rich Internet Accessibility"
        ],
        correctAnswer: 0
      },
      {
        question: "When should you use ARIA?",
        options: [
          "When native HTML cannot provide accessibility",
          "Always, even with semantic HTML",
          "Only for styling",
          "Never"
        ],
        correctAnswer: 0
      }
    ],
    "Keyboard Navigation": [
      {
        question: "What is a skip link?",
        options: [
          "A link that lets users skip to main content",
          "A broken link",
          "A link to another website",
          "A link that skips validation"
        ],
        correctAnswer: 0
      },
      {
        question: "Which attribute makes an element focusable?",
        options: [
          "tabindex",
          "aria-label",
          "role",
          "alt"
        ],
        correctAnswer: 0
      }
    ],
    "Accessible Forms": [
      {
        question: "Why should every input have a label?",
        options: [
          "For screen readers to announce the field",
          "For better styling",
          "For faster loading",
          "For SEO"
        ],
        correctAnswer: 0
      },
      {
        question: "What element groups related form fields?",
        options: [
          "<fieldset>",
          "<section>",
          "<div>",
          "<main>"
        ],
        correctAnswer: 0
      }
    ],
    "Testing for Accessibility": [
      {
        question: "Which tool can help test accessibility?",
        options: [
          "axe browser extension",
          "Photoshop",
          "Google Analytics",
          "npm"
        ],
        correctAnswer: 0
      },
      {
        question: "What is a manual accessibility test?",
        options: [
          "Testing with keyboard or screen reader",
          "Running a code linter",
          "Checking spelling",
          "Validating CSS"
        ],
        correctAnswer: 0
      }
    ],

     "Accessible Accordion (Custom Widget)": [
    {
      question: "Which ARIA attribute indicates whether an accordion panel is expanded?",
      options: [
        "aria-open",
        "aria-expanded",
        "aria-visible",
        "aria-state"
      ],
      correctAnswer: 1
    },
    {
      question: "What keyboard interaction should be supported in an accessible accordion?",
      options: [
        "Only mouse clicks",
        "Enter and Space keys to toggle panels",
        "Only Tab navigation",
        "Only arrow keys"
      ],
      correctAnswer: 1
    },
    {
      question: "Which element role is appropriate for accordion headers?",
      options: [
        "button",
        "heading",
        "tab",
        "menuitem"
      ],
      correctAnswer: 0
    }
  ],

  "ARIA Live Region for Notifications": [
    {
      question: "Which ARIA attribute creates a live region for announcements?",
      options: [
        "aria-notify",
        "aria-live",
        "aria-announce",
        "aria-alert"
      ],
      correctAnswer: 1
    },
    {
      question: "What does aria-live='polite' mean?",
      options: [
        "Announces immediately, interrupting other speech",
        "Announces when screen reader finishes current task",
        "Never announces changes",
        "Only announces on user request"
      ],
      correctAnswer: 1
    },
    {
      question: "Which aria-live value should be used for urgent notifications?",
      options: [
        "polite",
        "assertive",
        "urgent",
        "immediate"
      ],
      correctAnswer: 1
    }
  ],

  "Mobile-Specific Accessibility Patterns": [
    {
      question: "What is the minimum touch target size recommended for mobile accessibility?",
      options: [
        "24x24 pixels",
        "44x44 pixels",
        "32x32 pixels",
        "48x48 pixels"
      ],
      correctAnswer: 1
    },
    {
      question: "Which gesture should always have an alternative for mobile accessibility?",
      options: [
        "Single tap",
        "Complex multi-finger gestures",
        "Scroll",
        "Long press"
      ],
      correctAnswer: 1
    },
    {
      question: "How should mobile apps handle screen reader focus management?",
      options: [
        "Never move focus automatically",
        "Move focus logically after user actions",
        "Always keep focus on first element",
        "Let the system handle all focus"
      ],
      correctAnswer: 1
    }
  ],

  "Custom Slider Widget": [
    {
      question: "Which ARIA role should be used for a custom slider widget?",
      options: [
        "range",
        "slider",
        "input",
        "progressbar"
      ],
      correctAnswer: 1
    },
    {
      question: "Which attributes are essential for an accessible slider?",
      options: [
        "aria-valuemin, aria-valuemax, aria-valuenow",
        "min, max, value only",
        "aria-label only",
        "role and tabindex only"
      ],
      correctAnswer: 0
    },
    {
      question: "What keyboard navigation should a slider support?",
      options: [
        "Only Tab and Enter",
        "Arrow keys to increase/decrease values",
        "Only Space bar",
        "Only mouse interaction"
      ],
      correctAnswer: 1
    }
  ],

  "Accessible Modal Dialog": [
    {
      question: "What should happen to focus when a modal dialog opens?",
      options: [
        "Focus stays on the trigger element",
        "Focus moves to the first focusable element in the modal",
        "Focus moves to the close button",
        "Focus is removed completely"
      ],
      correctAnswer: 1
    },
    {
      question: "Which ARIA attribute should be used to label a modal dialog?",
      options: [
        "aria-label or aria-labelledby",
        "aria-describedby only",
        "title attribute only",
        "aria-modal only"
      ],
      correctAnswer: 0
    },
    {
      question: "How should focus be managed when a modal closes?",
      options: [
        "Focus goes to the top of the page",
        "Focus returns to the element that opened the modal",
        "Focus moves to the next element",
        "Focus is lost"
      ],
      correctAnswer: 1
    }
  ],

  "Accessible Drag-and-Drop": [
    {
      question: "What alternative should be provided for drag-and-drop functionality?",
      options: [
        "Mouse-only interface",
        "Keyboard-accessible move/copy operations",
        "Touch-only gestures",
        "Voice commands only"
      ],
      correctAnswer: 1
    },
    {
      question: "Which ARIA property indicates an element can be dragged?",
      options: [
        "aria-draggable",
        "aria-grabbed",
        "aria-movable",
        "draggable attribute (not ARIA)"
      ],
      correctAnswer: 3
    },
    {
      question: "How should drop zones be identified for screen reader users?",
      options: [
        "Visual indicators only",
        "aria-dropeffect and clear instructions",
        "Color coding only",
        "No special identification needed"
      ],
      correctAnswer: 1
    }
  ],

  "Accessible Treeview": [
    {
      question: "Which ARIA role defines a treeview container?",
      options: [
        "tree",
        "treeview",
        "list",
        "menu"
      ],
      correctAnswer: 0
    },
    {
      question: "What keyboard navigation pattern should treeviews follow?",
      options: [
        "Tab through all items",
        "Arrow keys for navigation, Enter/Space to activate",
        "Only mouse interaction",
        "Page Up/Down only"
      ],
      correctAnswer: 1
    },
    {
      question: "Which ARIA attribute indicates if a tree node is expanded?",
      options: [
        "aria-open",
        "aria-expanded",
        "aria-visible",
        "aria-selected"
      ],
      correctAnswer: 1
    }
  ],

  "Advanced Mobile Gestures": [
    {
      question: "What accessibility consideration is important for pinch-to-zoom gestures?",
      options: [
        "They should be disabled always",
        "Alternative methods should be provided for users who can't perform the gesture",
        "They should only work with two fingers",
        "They should be faster than normal"
      ],
      correctAnswer: 1
    },
    {
      question: "How should swipe gestures be made accessible?",
      options: [
        "Make them faster",
        "Provide button alternatives and clear instructions",
        "Use only horizontal swipes",
        "Require confirmation for all swipes"
      ],
      correctAnswer: 1
    },
    {
      question: "What should be avoided when implementing custom gesture controls?",
      options: [
        "Providing visual feedback",
        "Conflicts with system accessibility gestures",
        "Clear instructions",
        "Alternative input methods"
      ],
      correctAnswer: 1
    }
  ]
  };
  return quizzes[lessonTitle] || [
    {
      question: "What is the main goal of web accessibility?",
      options: [
        "To make websites usable for everyone",
        "To improve SEO only",
        "To use more JavaScript",
        "To make websites load faster"
      ],
      correctAnswer: 0
    }
  ];
};

module.exports = {
    getAccessibilityLessonConcepts,
    getAccessibilityCodeExample,
    getAccessibilityCodeExplanation,
    getAccessibilityExercises,
    getAccessibilityQuiz
    }; 