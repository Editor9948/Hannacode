const getResponsiveWebDesignLessonConcepts = (lessonTitle) => {
  const concepts = {
    "Introduction to Responsive Design": `
- What is responsive web design
- Why responsive design matters
- Mobile-first approach
- Progressive enhancement
- Graceful degradation
- Viewport and device considerations
- Common responsive design patterns
- Tools and resources for responsive design`,

    "Mobile-First Approach": `
- Understanding mobile-first philosophy
- Benefits of mobile-first design
- Starting with mobile layouts
- Scaling up to larger screens
- Content prioritization
- Touch-friendly interfaces
- Performance considerations
- Testing on mobile devices`,

    "Fluid Grids and Layouts": `
- Understanding fluid grids
- Creating flexible layouts
- Using relative units
- Grid system fundamentals
- Responsive grid frameworks
- Breakpoint planning
- Container queries
- Layout patterns for different screen sizes`,

    "Flexible Images and Media": `
- Responsive image techniques
- Picture element and srcset
- Art direction with picture
- Responsive video embedding
- Image optimization
- Lazy loading
- WebP and modern image formats
- Media queries for images`,

    "Media Queries Fundamentals": `
- Media query syntax
- Viewport width queries
- Device orientation
- Screen resolution
- Print media queries
- Combining media queries
- Common breakpoints
- Media query best practices`,

    "Breakpoints and Viewport": `
- Understanding viewport
- Viewport meta tag
- Common breakpoint values
- Device-specific breakpoints
- Content-based breakpoints
- Viewport units
- Min-width vs max-width
- Breakpoint organization`,

    "Responsive Typography": `
- Fluid typography
- Viewport-based units
- Font scaling
- Line height and spacing
- Readability considerations
- Font loading strategies
- Variable fonts
- Typography hierarchy`,

    "Responsive Navigation": `
- Mobile navigation patterns
- Hamburger menu implementation
- Off-canvas navigation
- Dropdown menus
- Mega menus
- Navigation accessibility
- Touch-friendly navigation
- Navigation state management`,

    "Responsive Tables": `
- Table layout strategies
- Horizontal scrolling
- Stacked tables
- Priority columns
- Table transformations
- Table accessibility
- Data visualization
- Table performance`,

    "Responsive Forms": `
- Form layout strategies
- Input field sizing
- Touch-friendly inputs
- Form validation
- Error handling
- Form accessibility
- Form performance
- Form security`,

    "Responsive Images": `
- Image sizing strategies
- srcset and sizes
- Picture element
- Art direction
- Image optimization
- Lazy loading
- Image formats
- Image performance`,

    "Responsive Videos": `
- Video embedding
- Aspect ratio maintenance
- Video sizing
- Video optimization
- Video formats
- Video accessibility
- Video performance
- Video controls`,

    "Responsive Maps": `
- Map container sizing
- Map responsiveness
- Map controls
- Map markers
- Map performance
- Map accessibility
- Map loading
- Map customization`,

    "Responsive Charts": `
- Chart container sizing
- Chart responsiveness
- Data visualization
- Chart interactivity
- Chart accessibility
- Chart performance
- Chart loading
- Chart customization`,

    "Responsive Data Visualization": `
- Data visualization techniques
- Responsive charts
- Interactive elements
- Data accessibility
- Performance optimization
- Loading strategies
- User interaction
- Data presentation`,

    "Responsive Email Design": `
- Email layout strategies
- Email compatibility
- Email testing
- Email accessibility
- Email performance
- Email templates
- Email best practices
- Email testing tools`,

    "Responsive Print Styles": `
- Print media queries
- Print layout
- Print optimization
- Print accessibility
- Print performance
- Print testing
- Print best practices
- Print debugging`,

    "Performance Optimization": `
- Image optimization
- Code optimization
- Asset loading
- Caching strategies
- Minification
- Compression
- Performance testing
- Performance monitoring`,

    "Testing and Debugging": `
- Browser testing
- Device testing
- Cross-browser testing
- Responsive testing tools
- Debugging techniques
- Testing strategies
- Testing automation
- Testing best practices`,

    "Cross-Browser Compatibility": `
- Browser differences
- Feature detection
- Polyfills
- Fallbacks
- Browser testing
- Compatibility testing
- Browser support
- Browser debugging`,

    "Responsive Design Patterns": `
- Common patterns
- Pattern selection
- Pattern implementation
- Pattern testing
- Pattern accessibility
- Pattern performance
- Pattern maintenance
- Pattern documentation`,

    "Responsive Design Best Practices": `
- Mobile-first approach
- Performance optimization
- Accessibility
- User experience
- Code organization
- Testing strategies
- Maintenance
- Documentation`
  }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}

const getResponsiveWebDesignCodeExample = (lessonTitle) => {
  const examples = {
    "Introduction to Responsive Design": `
/* Basic responsive design setup for a scalable, maintainable layout */
html {
  /* Use border-box for predictable sizing */
  box-sizing: border-box;
}

*, *:before, *:after {
  /* Inherit box-sizing for all elements */
  box-sizing: inherit;
}

body {
  /* Remove default margin/padding and set a readable font */
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.container {
  /* Fluid container with max width for large screens */
  width: 100%;
  max-width: 1200px;
  margin: 0 auto; /* Center horizontally */
  padding: 0 15px; /* Responsive side padding */
}`,

    "Mobile-First Approach": `
/* Mobile-first CSS: Start with mobile styles, then scale up */
.container {
  width: 100%;
  padding: 15px; /* Comfortable touch area for mobile */
}

/* Tablet and up: Increase padding for larger screens */
@media (min-width: 768px) {
  .container {
    padding: 30px;
  }
}

/* Desktop and up: Even more padding for wide screens */
@media (min-width: 1024px) {
  .container {
    padding: 40px;
  }
}
  

//Best Practice Example
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile-First Navigation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
        }

        /* Mobile-first styles */
        .header {
            background: #2c3e50;
            padding: 1rem;
            position: relative;
        }

        .nav-brand {
            color: white;
            font-size: 1.5rem;
            font-weight: bold;
            text-decoration: none;
        }

        .nav-toggle {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 4px;
        }

        .nav-toggle:hover {
            background: rgba(255, 255, 255, 0.1);
        }

        .nav-menu {
            display: none;
            flex-direction: column;
            background: #34495e;
            margin-top: 1rem;
            border-radius: 8px;
            overflow: hidden;
        }

        .nav-menu.active {
            display: flex;
        }

        .nav-item {
            list-style: none;
        }

        .nav-link {
            display: block;
            color: white;
            text-decoration: none;
            padding: 1rem 1.5rem;
            transition: background 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .nav-link:hover,
        .nav-link:focus {
            background: rgba(255, 255, 255, 0.1);
        }

        .nav-item:last-child .nav-link {
            border-bottom: none;
        }

        .main-content {
            padding: 2rem 1rem;
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero {
            text-align: center;
            margin-bottom: 2rem;
        }

        .hero h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }

        .hero p {
            font-size: 1.1rem;
            color: #666;
            margin-bottom: 2rem;
        }

        .cta-button {
            display: inline-block;
            background: #3498db;
            color: white;
            padding: 1rem 2rem;
            text-decoration: none;
            border-radius: 8px;
            font-weight: bold;
            transition: background 0.3s ease;
            min-height: 44px;
            min-width: 44px;
        }

        .cta-button:hover {
            background: #2980b9;
        }

        /* Tablet styles */
        @media (min-width: 768px) {
            .header {
                padding: 1.5rem 2rem;
            }

            .main-content {
                padding: 3rem 2rem;
            }

            .hero h1 {
                font-size: 2.5rem;
            }

            .hero p {
                font-size: 1.2rem;
            }
        }

        /* Desktop styles */
        @media (min-width: 1024px) {
            .header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .nav-toggle {
                display: none;
            }

            .nav-menu {
                display: flex;
                flex-direction: row;
                background: none;
                margin: 0;
                border-radius: 0;
            }

            .nav-link {
                border-bottom: none;
                margin-left: 2rem;
                padding: 0.5rem 1rem;
                border-radius: 4px;
            }

            .hero h1 {
                font-size: 3rem;
            }

            .hero p {
                font-size: 1.3rem;
                max-width: 600px;
                margin-left: auto;
                margin-right: auto;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <a href="#" class="nav-brand">YourBrand</a>
        <button class="nav-toggle" id="nav-toggle">☰</button>
        <nav>
            <ul class="nav-menu" id="nav-menu">
                <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
                <li class="nav-item"><a href="#" class="nav-link">About</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Services</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Portfolio</a></li>
                <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
            </ul>
        </nav>
    </header>

    <main class="main-content">
        <section class="hero">
            <h1>Welcome to Our Mobile-First Site</h1>
            <p>Experience seamless navigation and optimal performance across all devices, starting with mobile.</p>
            <a href="#" class="cta-button">Get Started</a>
        </section>
    </main>

    <script>
        const navToggle = document.getElementById('nav-toggle');
        const navMenu = document.getElementById('nav-menu');

        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link (mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside (mobile)
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
            }
        });
    </script>
</body>
</html>



//Code Example 2: Mobile-First Product Card Layout
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mobile-First Product Cards</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f8f9fa;
            line-height: 1.6;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 1rem;
        }

        .header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .header h1 {
            color: #2c3e50;
            font-size: 2rem;
            margin-bottom: 0.5rem;
        }

        .header p {
            color: #666;
            font-size: 1.1rem;
        }

        /* Mobile-first product grid */
        .product-grid {
            display: grid;
            grid-template-columns: 1fr;
            gap: 1.5rem;
        }

        .product-card {
            background: white;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }

        .product-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .product-image {
            width: 100%;
            height: 250px;
            object-fit: cover;
            background: linear-gradient(45deg, #e3f2fd, #bbdefb);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: #1976d2;
        }

        .product-info {
            padding: 1.5rem;
        }

        .product-title {
            font-size: 1.3rem;
            font-weight: bold;
            color: #2c3e50;
            margin-bottom: 0.5rem;
        }

        .product-description {
            color: #666;
            font-size: 0.95rem;
            margin-bottom: 1rem;
            line-height: 1.5;
        }

        .product-price {
            font-size: 1.5rem;
            font-weight: bold;
            color: #e74c3c;
            margin-bottom: 1rem;
        }

        .product-rating {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .stars {
            color: #f39c12;
            margin-right: 0.5rem;
        }

        .rating-text {
            color: #666;
            font-size: 0.9rem;
        }

        .product-actions {
            display: flex;
            gap: 1rem;
        }

        .btn {
            flex: 1;
            padding: 0.875rem 1rem;
            border: none;
            border-radius: 8px;
            font-weight: bold;
            text-decoration: none;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn-primary {
            background: #3498db;
            color: white;
        }

        .btn-primary:hover {
            background: #2980b9;
        }

        .btn-secondary {
            background: transparent;
            color: #3498db;
            border: 2px solid #3498db;
        }

        .btn-secondary:hover {
            background: #3498db;
            color: white;
        }

        .wishlist-btn {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 44px;
            height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.2rem;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
        }

        .wishlist-btn:hover {
            background: white;
            transform: scale(1.1);
        }

        .wishlist-btn.active {
            color: #e74c3c;
        }

        .product-card {
            position: relative;
        }

        /* Loading placeholder for images */
        .image-placeholder {
            width: 100%;
            height: 250px;
            background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
            background-size: 200% 100%;
            animation: loading 1.5s infinite;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #999;
            font-size: 3rem;
        }

        @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        /* Tablet styles - 2 columns */
        @media (min-width: 768px) {
            .container {
                padding: 2rem;
            }

            .header h1 {
                font-size: 2.5rem;
            }

            .product-grid {
                grid-template-columns: repeat(2, 1fr);
                gap: 2rem;
            }

            .product-info {
                padding: 2rem;
            }

            .product-actions {
                flex-direction: row;
            }
        }

        /* Desktop styles - 3 columns */
        @media (min-width: 1024px) {
            .container {
                padding: 3rem 2rem;
            }

            .header h1 {
                font-size: 3rem;
            }

            .product-grid {
                grid-template-columns: repeat(3, 1fr);
                gap: 2.5rem;
            }

            .product-card:hover .wishlist-btn {
                transform: scale(1.1);
            }
        }

        /* Extra large screens - 4 columns */
        @media (min-width: 1400px) {
            .product-grid {
                grid-template-columns: repeat(4, 1fr);
            }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
            .product-card:hover {
                transform: none;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .btn:hover {
                transform: none;
            }

            .wishlist-btn:hover {
                transform: none;
                background: rgba(255, 255, 255, 0.9);
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header class="header">
            <h1>Featured Products</h1>
            <p>Discover our carefully curated selection of premium items</p>
        </header>

        <div class="product-grid">
            <article class="product-card">
                <button class="wishlist-btn" aria-label="Add to wishlist">♡</button>
                <div class="image-placeholder">📱</div>
                <div class="product-info">
                    <h3 class="product-title">Premium Smartphone</h3>
                    <p class="product-description">Latest technology with cutting-edge features and exceptional performance for modern users.</p>
                    <div class="product-price">$899</div>
                    <div class="product-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-text">4.8 (256 reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                        <a href="#" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </article>

            <article class="product-card">
                <button class="wishlist-btn" aria-label="Add to wishlist">♡</button>
                <div class="image-placeholder">💻</div>
                <div class="product-info">
                    <h3 class="product-title">Gaming Laptop</h3>
                    <p class="product-description">High-performance laptop designed for gaming enthusiasts and creative professionals.</p>
                    <div class="product-price">$1,299</div>
                    <div class="product-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.6 (128 reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                        <a href="#" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </article>

            <article class="product-card">
                <button class="wishlist-btn" aria-label="Add to wishlist">♡</button>
                <div class="image-placeholder">🎧</div>
                <div class="product-info">
                    <h3 class="product-title">Wireless Headphones</h3>
                    <p class="product-description">Premium audio experience with noise cancellation and extended battery life.</p>
                    <div class="product-price">$249</div>
                    <div class="product-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-text">4.9 (412 reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                        <a href="#" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </article>

            <article class="product-card">
                <button class="wishlist-btn" aria-label="Add to wishlist">♡</button>
                <div class="image-placeholder">⌚</div>
                <div class="product-info">
                    <h3 class="product-title">Smart Watch</h3>
                    <p class="product-description">Advanced fitness tracking and smart features in a sleek, comfortable design.</p>
                    <div class="product-price">$399</div>
                    <div class="product-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.5 (198 reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                        <a href="#" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </article>

            <article class="product-card">
                <button class="wishlist-btn" aria-label="Add to wishlist">♡</button>
                <div class="image-placeholder">📷</div>
                <div class="product-info">
                    <h3 class="product-title">Digital Camera</h3>
                    <p class="product-description">Professional-grade camera with advanced features for photography enthusiasts.</p>
                    <div class="product-price">$699</div>
                    <div class="product-rating">
                        <span class="stars">★★★★★</span>
                        <span class="rating-text">4.7 (324 reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                        <a href="#" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </article>

            <article class="product-card">
                <button class="wishlist-btn" aria-label="Add to wishlist">♡</button>
                <div class="image-placeholder">🖥️</div>
                <div class="product-info">
                    <h3 class="product-title">4K Monitor</h3>
                    <p class="product-description">Ultra-high resolution display perfect for work, gaming, and creative projects.</p>
                    <div class="product-price">$549</div>
                    <div class="product-rating">
                        <span class="stars">★★★★☆</span>
                        <span class="rating-text">4.4 (167 reviews)</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-primary">Add to Cart</button>
                        <a href="#" class="btn btn-secondary">View Details</a>
                    </div>
                </div>
            </article>
        </div>
    </div>

    <script>
        // Wishlist functionality
        document.querySelectorAll('.wishlist-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                this.classList.toggle('active');
                this.textContent = this.classList.contains('active') ? '♥' : '♡';
                
                // Provide haptic feedback on supported devices
                if ('vibrate' in navigator) {
                    navigator.vibrate(50);
                }
            });
        });

        // Add to cart functionality with feedback
        document.querySelectorAll('.btn-primary').forEach(btn => {
            btn.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = 'Added!';
                this.style.background = '#27ae60';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 2000);
                
                // Provide haptic feedback on supported devices
                if ('vibrate' in navigator) {
                    navigator.vibrate([50, 50, 50]);
                }
            });
        });

        // Card tap functionality for mobile
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // Only trigger if not clicking on buttons
                if (!e.target.closest('.btn') && !e.target.closest('.wishlist-btn')) {
                    const viewDetailsBtn = this.querySelector('.btn-secondary');
                    if (viewDetailsBtn) {
                        viewDetailsBtn.click();
                    }
                }
            });
        });

           // Simulate image loading 
        const gradientColors = [
            'linear-gradient(45deg, #e3f2fd, #bbdefb)', // Blue
            'linear-gradient(45deg, #f3e5f5, #e1bee7)', // Purple
            'linear-gradient(45deg, #e8f5e8, #c8e6c9)', // Green
            'linear-gradient(45deg, #fff3e0, #ffcc02)', // Orange
            'linear-gradient(45deg, #fce4ec, #f8bbd9)', // Pink
            'linear-gradient(45deg, #e0f2f1, #b2dfdb)'  // Teal
        ];

        setTimeout(() => {
            document.querySelectorAll('.image-placeholder').forEach((placeholder, index) => {
                setTimeout(() => {
                    placeholder.style.animation = 'none';
                    placeholder.style.background = gradientColors[index % gradientColors.length];
                }, index * 200);
            });
        }, 1000);
    </script>
</body>
</html>`,

    "Fluid Grids and Layouts": `
/* Fluid grid system for flexible layouts */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr); /* 12-column grid */
  gap: 20px; /* Consistent spacing */
}

.col {
  grid-column: span 12; /* Full width on mobile */
}

@media (min-width: 768px) {
  .col-md-6 {
    grid-column: span 6; /* Half width on tablet */
  }
}

@media (min-width: 1024px) {
  .col-lg-4 {
    grid-column: span 4; /* One-third width on desktop */
  }
}`,

    "Flexible Images and Media": `
/* Responsive images: Prevent overflow and distortion */
img {
  max-width: 100%;
  height: auto;
}

/* Picture element for art direction and performance */
<picture>
  <source
    srcset="image-large.jpg"
    media="(min-width: 1024px)"
  >
  <source
    srcset="image-medium.jpg"
    media="(min-width: 768px)"
  >
  <img
    src="image-small.jpg"
    alt="Responsive image"
    loading="lazy" /* Lazy loading for performance */
  >
</picture>`,

    "Media Queries Fundamentals": `
/* Media queries: Adapt layout to device size */
.element {
  width: 100%; /* Default: full width */
}

/* Tablet: 2-column layout */
@media (min-width: 768px) {
  .element {
    width: 50%;
  }
}

/* Desktop: 3-column layout */
@media (min-width: 1024px) {
  .element {
    width: 33.33%;
  }
}

/* Print: Hide element when printing */
@media print {
  .element {
    display: none;
  }
}`,

    "Breakpoints and Viewport": `
/* Viewport meta tag */
<meta name="viewport" content="width=device-width, initial-scale=1.0">

/* CSS with viewport units */
.element {
  width: 100vw;
  height: 100vh;
  font-size: calc(16px + 1vw);
  padding: 5vmin;
}`,

    "Responsive Typography": `
/* Fluid typography */
html {
  font-size: 16px;
}

h1 {
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 1.2;
}

p {
  font-size: clamp(1rem, 2vw, 1.25rem);
  line-height: 1.6;
}`,

    "Responsive Navigation": `
/* Mobile navigation */
.nav-toggle {
  display: block;
}

.nav-menu {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
}

.nav-menu.active {
  display: block;
}

@media (min-width: 768px) {
  .nav-toggle {
    display: none;
  }
  
  .nav-menu {
    display: flex;
    position: static;
    height: auto;
  }
}`,

    "Responsive Tables": `
    //Table Layout Strategies
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stacked Responsive Table</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        table {
            width: 100%;
            border-collapse: collapse;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }

        /* Stacked table for smaller screens */
        @media screen and (max-width: 600px) {
            table, thead, tbody, th, td, tr {
                display: block; /* Make all table elements block-level */
            }

            thead {
                display: none; /* Hide the original table headers */
            }

            tr {
                margin-bottom: 15px;
                border: 1px solid #ddd;
                box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            }

            td {
                border: none; /* Remove individual cell borders */
                border-bottom: 1px solid #eee; /* Add a bottom border for separation */
                position: relative;
                padding-left: 50%; /* Make space for the pseudo-element label */
                text-align: right; /* Align data to the right */
            }

            td:last-child {
                border-bottom: 0; /* No border for the last cell in a row */
            }

            td::before {
                /* Use data-label attribute to get the header text */
                content: attr(data-label);
                position: absolute;
                left: 6px;
                width: 45%; /* Space for the label */
                padding-right: 10px;
                white-space: nowrap;
                text-align: left;
                font-weight: bold;
                color: #555;
            }
        }
    </style>
</head>
<body>
    <h1>Stacked Responsive Table Example</h1>
    <p>Resize your browser window to below 600px width to see the table stack.</p>
    <table>
        <thead>
            <tr>
                <th>Student Name</th>
                <th>Course</th>
                <th>Grade</th>
                <th>Status</th>
                <th>Enrollment Date</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td data-label="Student Name">Emily Smith</td>
                <td data-label="Course">Mathematics I</td>
                <td data-label="Grade">A</td>
                <td data-label="Status">Completed</td>
                <td data-label="Enrollment Date">2024-09-01</td>
            </tr>
            <tr>
                <td data-label="Student Name">David Lee</td>
                <td data-label="Course">Physics II</td>
                <td data-label="Grade">B+</td>
                <td data-label="Status">In Progress</td>
                <td data-label="Enrollment Date">2025-01-15</td>
            </tr>
            <tr>
                <td data-label="Student Name">Sarah Chen</td>
                <td data-label="Course">Chemistry Basics</td>
                <td data-label="Grade">A-</td>
                <td data-label="Status">Completed</td>
                <td data-label="Enrollment Date">2024-03-10</td>
            </tr>
        </tbody>
    </table>
</body>
</html>


//Example-2 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table Transformation (Cards)</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
            background-color: #f8f8f8;
        }
        .table-wrapper {
            max-width: 1000px;
            margin: 0 auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #e0e0e0;
            font-weight: bold;
        }

        /* Card transformation for smaller screens */
        @media screen and (max-width: 768px) {
            table {
                border: none; /* Remove table border */
            }
            thead {
                display: none; /* Hide table headers */
            }
            tr {
                display: block; /* Make each row a block */
                margin-bottom: 20px;
                border: 1px solid #ccc;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                background-color: #fff;
                overflow: hidden; /* For border-radius to apply properly */
            }
            td {
                display: flex; /* Use flexbox for label-value pairs */
                justify-content: space-between; /* Space out label and value */
                padding: 12px 15px;
                border: none;
                border-bottom: 1px solid #eee; /* Separator between fields */
                align-items: center;
            }
            td:last-child {
                border-bottom: none; /* No border for the last item in a card */
            }
            td::before {
                content: attr(data-label); /* Use data-label for the field name */
                font-weight: bold;
                color: #333;
                flex-basis: 40%; /* Give label some consistent width */
                text-align: left;
                padding-right: 10px;
                box-sizing: border-box;
            }
            td:nth-child(1) { /* First cell, often the main identifier */
                background-color: #f2f2f2;
                font-size: 1.1em;
                font-weight: bold;
                border-radius: 8px 8px 0 0; /* Rounded top corners for the card header */
                padding: 15px;
            }
             td:nth-child(1)::before {
                display: none; /* Hide the label for the main identifier */
            }
        }
    </style>
</head>
<body>
    <h1>Table Transformation (Card View) Example</h1>
    <p>Resize your browser window to below 768px width to see the table transform into cards.</p>
    <div class="table-wrapper">
        <table>
            <thead>
                <tr>
                    <th>Order ID</th>
                    <th>Customer Name</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Order Total</th>
                    <th>Order Status</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Order ID">ORD7890</td>
                    <td data-label="Customer Name">Sarah Jones</td>
                    <td data-label="Product">Smartwatch Pro</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Order Total">$299.00</td>
                    <td data-label="Order Status">Delivered</td>
                </tr>
                <tr>
                    <td data-label="Order ID">ORD7891</td>
                    <td data-label="Customer Name">Michael Brown</td>
                    <td data-label="Product">Noise-Cancelling Headphones</td>
                    <td data-label="Quantity">2</td>
                    <td data-label="Order Total">$450.00</td>
                    <td data-label="Order Status">Shipped</td>
                </tr>
                <tr>
                    <td data-label="Order ID">ORD7892</td>
                    <td data-label="Customer Name">Olivia White</td>
                    <td data-label="Product">Portable Bluetooth Speaker</td>
                    <td data-label="Quantity">1</td>
                    <td data-label="Order Total">$85.00</td>
                    <td data-label="Order Status">Pending</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>
  
`,

    "Responsive Forms": `
/* Responsive form */
.form-group {
  margin-bottom: 1rem;
}

input, select, textarea {
  width: 100%;
  padding: 0.5rem;
  font-size: 16px; /* Prevents zoom on iOS */
}

@media (min-width: 768px) {
  .form-row {
    display: flex;
    gap: 1rem;
  }
  
  .form-group {
    flex: 1;
  }
}`,

    "Responsive Images": `
/* Responsive images with srcset */
<img
  src="image-small.jpg"
  srcset="
    image-small.jpg 300w,
    image-medium.jpg 600w,
    image-large.jpg 900w
  "
  sizes="
    (max-width: 768px) 100vw,
    (max-width: 1024px) 50vw,
    33vw
  "
  alt="Responsive image"
  loading="lazy"
>`,

    "Responsive Videos": `
/* Responsive video container */
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`,

    "Responsive Maps": `
/* Responsive map container */
.map-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

.map-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}`,

    "Responsive Charts": `
/* Responsive chart container */
.chart-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
}

.chart-container canvas {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}`,

    "Responsive Data Visualization": `
/* Responsive data visualization */
.viz-container {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}

@media (max-width: 768px) {
  .viz-container {
    transform: scale(0.8);
    transform-origin: top left;
  }
}`,

    "Responsive Email Design": `
/* Responsive email styles */
.email-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

@media screen and (max-width: 480px) {
  .email-container {
    padding: 10px;
  }
  
  .email-column {
    display: block;
    width: 100% !important;
  }
}`,

    "Responsive Print Styles": `
/* Print styles */
@media print {
  body {
    font-size: 12pt;
    line-height: 1.5;
  }
  
  .no-print {
    display: none;
  }
  
  a[href]:after {
    content: " (" attr(href) ")";
  }
}`,

    "Performance Optimization": `
/* Performance optimizations */
.lazy-image {
  opacity: 0;
  transition: opacity 0.3s;
}

.lazy-image.loaded {
  opacity: 1;
}

/* Critical CSS */
.critical {
  content-visibility: auto;
}`,

    "Testing and Debugging": `
/* Debug styles */
.debug * {
  outline: 1px solid rgba(255, 0, 0, 0.2);
}

.debug-grid {
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.1) 1px,
    transparent 1px
  );
  background-size: 20px 100%;
}`,

    "Cross-Browser Compatibility": `
/* Cross-browser compatibility */
.element {
  /* Standard */
  display: flex;
  
  /* Fallback */
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  
  /* Vendor prefixes */
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}`,

    "Responsive Design Patterns": `
/* Common responsive patterns */
.card {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .card {
    flex-direction: row;
  }
}

/* Off-canvas menu */
.off-canvas {
  transform: translateX(-100%);
  transition: transform 0.3s;
}

.off-canvas.active {
  transform: translateX(0);
}`,

    "Responsive Design Best Practices": `
/* Best practices */
:root {
  /* Design tokens */
  --spacing-unit: 8px;
  --container-width: 1200px;
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
}

/* Utility classes */
.container {
  width: 100%;
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 calc(var(--spacing-unit) * 2);
}

/* Responsive utilities */
.hide-sm {
  display: none;
}

@media (min-width: var(--breakpoint-sm)) {
  .hide-sm {
    display: block;
  }
}`
  }
  return examples[lessonTitle] || "// Example code will be added here"
}

const getResponsiveWebDesignCodeExplanation =(lessonTitle) => {
    const explanations = {
      "Introduction to Responsive Design": `
This code sets up a basic responsive layout. The use of box-sizing: border-box ensures that padding 
and borders are included in the element's total width and height, making layouts more predictable. 
The .container class provides a fluid, centered container with responsive side padding, which is a 
common pattern in modern web design frameworks.
`,
      "Mobile-First Approach": `
This example demonstrates a mobile-first CSS strategy. Styles are written for mobile by default,
then enhanced for larger screens using min-width media queries. This approach ensures the best 
experience for mobile users and progressively enhances the layout for tablets and desktops.

**Mobile-First Product Card Layout**
This example shows a responsive product card layout that adapts from single-column on mobile 
to multi-column on larger screens, with touch-friendly interactions.

**Benefits of Mobile-First Design**
- **Performance Optimization**: Mobile-first forces developers to prioritize essential content and functionality, 
naturally leading to faster load times and better performance across all devices.
- **Content Prioritization**: Limited screen space requires careful consideration of what content is truly important, 
resulting in cleaner, more focused designs.
- **Better User Experience**: By designing for touch interfaces and smaller screens first, you ensure usability across all device types.
- **SEO Advantages**: Google's mobile-first indexing means mobile-optimized sites rank better in search results.
- **Future-Proofing**: With mobile usage continuing to grow, mobile-first ensures your site remains relevant and accessible.

**Starting with Mobile Layouts**
Mobile layouts should focus on simplicity, clarity, and efficient use of space. Key principles include:

- Single-column layouts that stack content vertically
- Generous white space for touch navigation
- Clear visual hierarchy with appropriate font sizes
- Minimal navigation that's easy to access
- Fast-loading, optimized images

**Scaling Up to Larger Screens**
The mobile-first approach uses CSS media queries to progressively enhance the 
design for larger screens. This involves:

- Adding breakpoints at strategic screen sizes
- Expanding layouts from single-column to multi-column
- Introducing additional navigation elements
- Enhancing visual elements and interactions
- Utilizing extra screen real estate effectively

**Content Prioritization**

Mobile-first design requires ruthless content prioritization. 
Essential elements include:
- Primary call-to-action buttons
- Core navigation
- Key information and messaging
- Critical functionality
- Contact information

Secondary content can be progressively disclosed or enhanced for larger screens.

**Touch-Friendly Interfaces**
Mobile interfaces must accommodate touch interaction patterns:

Minimum touch target size of \`44px\` (iOS) or \`48dp\` (Android)
- Adequate spacing between interactive elements
- Clear visual feedback for touch events
- Swipe gestures for navigation where appropriate
- Avoiding hover-dependent interactions

**Performance Considerations**
Mobile devices often have slower processors and network connections, making performance critical:

- Optimize images with responsive techniques
- Minimize HTTP requests
- Use efficient CSS and JavaScript
- Implement lazy loading for below-the-fold content
- Consider offline functionality with service workers

**Testing on Mobile Devices**

Comprehensive mobile testing ensures your mobile-first design works effectively:
- Test on real devices across different screen sizes
- Use browser developer tools for initial testing
- Test touch interactions and gestures
- Verify performance on slower network connections
- Check accessibility with screen readers
- Test across different mobile browsers`,

      "Fluid Grids and Layouts": `
A fluid grid system allows content to adapt to different screen sizes. The grid uses 12 columns,
 a common convention, and media queries adjust the column span for different breakpoints.
  This pattern is widely used in frameworks like Bootstrap and CSS Grid.
`,
      "Flexible Images and Media": `
Images are made responsive with max-width: 100% and height: auto, preventing overflow. 
The <picture> element provides art direction, serving different images based on screen size for
 better performance and visual quality. Lazy loading improves page speed by deferring
  offscreen images.
`,
      "Media Queries Fundamentals": `
Media queries let you apply styles based on device characteristics. This example shows how to 
change an element's width at different breakpoints and hide it when printing. 
This is a foundational technique for responsive design.
`,
      "Breakpoints and Viewport": `
The viewport meta tag ensures the page scales correctly on all devices. 
CSS viewport units (vw, vh, vmin, vmax) allow for fluid layouts that adapt to the size
 of the user's screen, a best practice for modern responsive design.
`,
      "Responsive Typography": `
Fluid typography uses CSS functions like clamp() to scale text size based on the viewport, 
ensuring readability on all devices. This approach is used by many modern 
sites for accessible, flexible text.
`,
      "Responsive Navigation": `
This code implements a mobile-first navigation menu. The hamburger menu appears on small screens, 
while a horizontal menu is shown on larger screens. This pattern is common in real-world 
apps like Airbnb and Twitter.
`,
      "Responsive Tables": `
Responsive tables are crucial for delivering an optimal user experience across various devices, 
from large desktop monitors to small mobile screens. They ensure that tabular data remains 
readable and usable regardless of the viewport size. The strategies below address common challenges 
in displaying complex data tables on responsive layouts.

1. **Table Layout Strategies**
***Code Explanation***:
Table layout strategies involve using CSS techniques to adapt table presentation to different screen sizes. 
The most common approaches include fluid layouts (using percentages or \`vw\` units) and grid-based layouts (CSS Grid). 
While traditional \`<table>\` elements are inherently rigid, combining them with CSS allows for flexible adaptations. 
Modern responsive table design often leans on CSS Flexbox or Grid for reordering and layout adjustments, especially 
when data needs to reflow or stack.

2. **Horizontal Scrolling**
***Code Explanation***:
Horizontal scrolling is a straightforward and common technique for responsive tables. It involves wrapping 
the \`<table>\` element within a container that has \`overflow-x: auto\`; \`(or scroll)\`. This ensures that if the table content
exceeds the viewport width, a horizontal scrollbar appears, allowing users to scroll to view the hidden columns. 
While simple, it requires users to scroll, which can be less ideal for large tables or frequent horizontal scrolling. 
It's often used as a fallback or for tables where a full overview is less critical on small screens.

3. **Stacked Tables**
***Code Explanation***:
Stacked tables transform a traditional horizontal table layout into a vertical, stacked representation on smaller screens. 
Each row typically becomes a block, and within that block, each cell's header and data are displayed vertically. 
This is achieved by using CSS media queries to change the display property of \`<thead>\`, \`<tbody>\`, \`<th>\`, \`<td>\`, and \`<tr>\` elements. 
A common pattern is to make \`<th>\` and \`<td>\` elements \`display: block;\` or \`display: inline-block;\` and then use pseudo-elements \`(::before)\` 
to inject the column header as a label for each data cell. This approach ensures all data is visible without scrolling, but can make large tables very long.

4. **Priority Columns**
***Explanation***:
Priority columns (or "column toggling") involve strategically hiding less important columns on smaller screens to conserve space, while keeping essential 
columns visible. Users might then have an option (e.g., a "Show/Hide Columns" button) to reveal the hidden data. This technique requires JavaScript to dynamically 
add/remove CSS classes or styles based on screen size or user interaction. When implementing, consider the critical data that must always be visible and which data 
can be safely hidden without losing context. This is often used in conjunction with horizontal scrolling as a graceful degradation strategy.

Note: *(Similar to horizontal scrolling, priority columns typically involve JavaScript and CSS. 
To maintain brevity with two core examples, this specific code example is not provided, 
but its principles are vital for advanced table responsiveness and are implicitly 
supported by the flexible nature of CSS media queries.)*

5. **Table Transformations**
***Code Explanation***:
Table transformations involve converting the table structure into a completely different 
layout on smaller screens, often leveraging CSS Grid or Flexbox. This goes beyond simple 
stacking and can reorganize data into card-like structures or multi-column layouts where 
each row becomes a distinct "card," with each cell's data clearly labeled. This technique 
provides greater flexibility in presenting complex data in an easily digestible format on 
limited screen real estate, offering a more visually appealing and user-friendly experience 
than just stacking or scrolling. It typically involves completely re-imagining the HTML structure 
or using advanced CSS to achieve the transformation.`,

      "Responsive Forms": `
Forms are made responsive by using 100% width inputs and flexible layouts. 
Media queries adjust the form layout for larger screens, improving usability and accessibility.
`,
      "Responsive Images": `
The srcset and sizes attributes allow browsers to choose the best image for the device, 
improving performance and visual quality. This is a modern best practice for responsive images.
`,
      "Responsive Videos": `
A responsive video container uses padding to maintain aspect ratio and absolute positioning 
to fill the container. This technique is widely used for embedding YouTube or 
Vimeo videos responsively.
`,
      "Responsive Maps": `
Maps are made responsive using the same aspect-ratio technique as videos. 
This ensures embedded maps (like Google Maps) scale correctly on all devices.
`,
      "Responsive Charts": `
Charts are placed in a container that maintains aspect ratio, ensuring they scale with the viewport.
 This is important for dashboards and data visualizations on mobile.
`,
      "Responsive Data Visualization": `
Data visualizations are scaled and transformed for smaller screens, ensuring usability and clarity. 
This is a best practice for analytics dashboards and interactive reports.
`,
      "Responsive Email Design": `
Responsive email containers use max-width and media queries to ensure emails look good on all devices.
 This is essential for marketing and transactional emails.
`,
      "Responsive Print Styles": `
Print media queries optimize the layout for printing, hiding unnecessary elements and 
adjusting font sizes. This is a best practice for printable invoices, reports, and articles.
`,
      "Performance Optimization": `
Performance is improved by lazy loading images, using content-visibility for critical CSS, 
and minimizing resource usage. These techniques are recommended by Google Lighthouse and 
other performance tools.
`,
      "Testing and Debugging": `
Debug styles help visualize layout issues and grid alignment. This is useful during 
development and is a common practice in professional front-end workflows.
`,
      "Cross-Browser Compatibility": `
Vendor prefixes and fallbacks ensure that modern CSS features work across all browsers.
 This is essential for supporting users on older or less common browsers.
`,
      "Responsive Design Patterns": `
Common patterns like cards and off-canvas menus are implemented with responsive techniques.
 These patterns are used in many real-world applications for flexible, user-friendly layouts.
`,
      "Responsive Design Best Practices": `
Design tokens, utility classes, and responsive utilities help maintain consistency
 and scalability in large projects. These are best practices in design 
 systems like Material UI and Bootstrap.
`,
    }
    return explanations[lessonTitle] || "// Example code will be provided"
}



const getResponsiveWebDesignExercises = (lessonTitle) => {
  const exercises = {
    "Introduction to Responsive Design": `
1. Create a basic responsive layout
   - Set up a mobile-first approach
   - Add viewport meta tag
   - Create a fluid container
   - Test on different devices

2. Implement responsive images
   - Use max-width: 100%
   - Add proper alt text
   - Test image scaling
   - Optimize for performance

3. Build a responsive navigation
   - Create mobile menu
   - Add hamburger icon
   - Implement toggle functionality
   - Style for different screen sizes`,

    "Mobile-First Approach": `
1. Convert a desktop-first design to mobile-first
   - Start with mobile styles
   - Use min-width media queries
   - Scale up for larger screens
   - Test on various devices

2. Create a responsive grid system
   - Build a 12-column grid
   - Add breakpoints
   - Create utility classes
   - Test grid behavior

3. Implement a mobile-first navigation
   - Design for mobile first
   - Add touch targets
   - Scale up for desktop
   - Test usability`,

    "Fluid Grids and Layouts": `
1. Build a fluid grid system
   - Create grid container
   - Add grid items
   - Implement fluid widths
   - Test responsiveness

2. Create a responsive card layout
   - Design card component
   - Add flexible images
   - Implement grid layout
   - Test on different screens

3. Implement a responsive sidebar
   - Create sidebar layout
   - Add toggle functionality
   - Style for different screens
   - Test usability`,

    "Flexible Images and Media": `
1. Implement responsive images
   - Use srcset and sizes
   - Add picture element
   - Optimize images
   - Test on different devices

2. Create a responsive video player
   - Add video container
   - Implement aspect ratio
   - Add controls
   - Test responsiveness

3. Build a responsive gallery
   - Create grid layout
   - Add lazy loading
   - Implement lightbox
   - Test performance`,

    "Media Queries Fundamentals": `
1. Create a responsive layout with media queries
   - Add breakpoints
   - Style for different screens
   - Test responsiveness
   - Document breakpoints

2. Implement a responsive typography system
   - Add fluid typography
   - Use media queries
   - Test readability
   - Optimize for different screens

3. Build a responsive component library
   - Create base components
   - Add responsive styles
   - Test components
   - Document usage`,

    "Breakpoints and Viewport": `
1. Set up a responsive viewport
   - Add viewport meta tag
   - Test on different devices
   - Handle orientation changes
   - Document viewport settings

2. Create a breakpoint system
   - Define breakpoints
   - Add media queries
   - Test breakpoints
   - Document system

3. Implement viewport units
   - Use vw, vh, vmin, vmax
   - Create fluid layouts
   - Test responsiveness
   - Document usage`,

    "Responsive Typography": `
1. Create a fluid typography system
   - Use clamp()
   - Add responsive sizes
   - Test readability
   - Document system

2. Implement a responsive heading hierarchy
   - Scale headings
   - Maintain hierarchy
   - Test on different screens
   - Document usage

3. Build a responsive text component
   - Add fluid sizing
   - Handle line length
   - Test readability
   - Document component`,

    "Responsive Navigation": `
1. Create a mobile navigation
   - Add hamburger menu
   - Implement toggle
   - Style for mobile
   - Test usability

2. Build a responsive mega menu
   - Create dropdown
   - Add touch support
   - Style for different screens
   - Test navigation

3. Implement an off-canvas menu
   - Create slide-out menu
   - Add animations
   - Handle touch events
   - Test usability`,

    "Responsive Tables": `
1. Create a responsive table
   - Add horizontal scroll
   - Style for mobile
   - Test usability
   - Document usage

2. Implement a stacked table
   - Transform table layout
   - Add labels
   - Style for mobile
   - Test readability

3. Build a table with priority columns
   - Hide less important columns
   - Add show/hide toggle
   - Style for different screens
   - Test usability`,

    "Responsive Forms": `
1. Create a responsive form
   - Style inputs
   - Add validation
   - Test on mobile
   - Document usage

2. Implement a multi-step form
   - Create steps
   - Add navigation
   - Style for different screens
   - Test usability

3. Build a responsive form with grid
   - Create grid layout
   - Add responsive fields
   - Style for different screens
   - Test form submission`,

    "Responsive Images": `
1. Implement responsive images
   - Use srcset
   - Add sizes
   - Optimize images
   - Test loading

2. Create an image gallery
   - Add grid layout
   - Implement lazy loading
   - Add lightbox
   - Test performance

3. Build an image carousel
   - Create slider
   - Add touch support
   - Style for different screens
   - Test usability`,

    "Responsive Videos": `
1. Create a responsive video player
   - Add container
   - Implement aspect ratio
   - Add controls
   - Test playback

2. Build a video gallery
   - Create grid layout
   - Add thumbnails
   - Implement player
   - Test responsiveness

3. Implement a video background
   - Add fullscreen video
   - Handle mobile
   - Add fallback
   - Test performance`,

    "Responsive Maps": `
1. Create a responsive map
   - Add container
   - Implement aspect ratio
   - Add controls
   - Test usability

2. Build a map with markers
   - Add markers
   - Style popups
   - Handle touch
   - Test interaction

3. Implement a map with directions
   - Add routing
   - Style interface
   - Handle mobile
   - Test functionality`,

    "Responsive Charts": `
1. Create a responsive chart
   - Add container
   - Implement aspect ratio
   - Add data
   - Test rendering

2. Build a chart dashboard
   - Create layout
   - Add multiple charts
   - Style for different screens
   - Test responsiveness

3. Implement interactive charts
   - Add interactions
   - Handle touch
   - Style for mobile
   - Test usability`,

    "Responsive Data Visualization": `
1. Create a responsive visualization
   - Add container
   - Implement scaling
   - Add interactions
   - Test rendering

2. Build a data dashboard
   - Create layout
   - Add visualizations
   - Style for different screens
   - Test responsiveness

3. Implement interactive visualizations
   - Add interactions
   - Handle touch
   - Style for mobile
   - Test usability`,

    "Responsive Email Design": `
1. Create a responsive email
   - Add structure
   - Style for email clients
   - Test rendering
   - Document usage

2. Build an email template
   - Create layout
   - Add components
   - Style for different clients
   - Test compatibility

3. Implement an email campaign
   - Create multiple templates
   - Add tracking
   - Test delivery
   - Document process`,

    "Responsive Print Styles": `
1. Create print styles
   - Add media queries
   - Style for print
   - Test output
   - Document usage

2. Build a print layout
   - Create structure
   - Add print styles
   - Test printing
   - Document process

3. Implement print optimization
   - Add page breaks
   - Handle images
   - Test output
   - Document best practices`,

    "Performance Optimization": `
1. Optimize images for performance
   - Compress images
   - Implement lazy loading
   - Test loading times
   - Document improvements

2. Minify and bundle CSS/JS
   - Use build tools
   - Analyze bundle size
   - Test site speed
   - Document process

3. Implement caching strategies
   - Set cache headers
   - Use service workers
   - Test offline support
   - Document results`,

    "Testing and Debugging": `
1. Set up a responsive testing workflow
   - Use browser dev tools
   - Test on multiple devices
   - Document issues found
   - Fix and retest

2. Automate responsive testing
   - Use tools like BrowserStack or Percy
   - Write test scripts
   - Run tests on CI
   - Document results

3. Debug layout issues
   - Use debug CSS classes
   - Identify and fix bugs
   - Test fixes on all breakpoints
   - Document solutions`,

    "Cross-Browser Compatibility": `
1. Test site in multiple browsers
   - Identify inconsistencies
   - Use vendor prefixes
   - Fix issues
   - Document browser support

2. Add polyfills for unsupported features
   - Detect missing features
   - Implement polyfills
   - Test fallbacks
   - Document changes

3. Create a browser support matrix
   - List supported browsers
   - Note known issues
   - Share with team
   - Update regularly`,

    "Responsive Design Patterns": `
1. Implement a card layout pattern
   - Stack cards on mobile
   - Arrange in rows on desktop
   - Test responsiveness
   - Document pattern

2. Build an off-canvas menu pattern
   - Slide menu in on mobile
   - Keep menu visible on desktop
   - Test usability
   - Document implementation

3. Create a pattern library
   - Collect reusable patterns
   - Document usage
   - Share with team
   - Update as needed`,

    "Responsive Design Best Practices": `
1. Establish design tokens for spacing and colors
   - Define variables
   - Use in CSS
   - Test consistency
   - Document tokens

2. Create utility classes for common styles
   - Write reusable classes
   - Apply across components
   - Test maintainability
   - Document usage

3. Audit your project for best practices
   - Review code organization
   - Check accessibility
   - Test performance
   - Document findings`
  }
  return exercises[lessonTitle] || "1. Exercise 1\n2. Exercise 2\n3. Exercise 3"
}

const getResponsiveWebDesignQuiz = (lessonTitle) => {
  const quizzes = {
    "Introduction to Responsive Design": [
      {
        question: "What is the main goal of responsive web design?",
        options: [
          "To make websites load faster",
          "To create websites that work well on all devices",
          "To reduce development time",
          "To improve SEO"
        ],
        answer: 1
      },
      {
        question: "Which approach is recommended for responsive design?",
        options: [
          "Desktop-first",
          "Mobile-first",
          "Tablet-first",
          "Print-first"
        ],
        answer: 1
      },
      {
        question: "What is the viewport meta tag used for?",
        options: [
          "To set the page title",
          "To control the page's dimensions and scaling",
          "To add meta description",
          "To set character encoding"
        ],
        answer: 1
      }
    ],

    "Mobile-First Approach": [
      {
        question: "What is the main principle of mobile-first design?",
        options: [
          "Design for desktop first",
          "Design for mobile devices first",
          "Design for tablets first",
          "Design for print first"
        ],
        answer: 1
      },
      {
        question: "Which media query approach is used in mobile-first design?",
        options: [
          "max-width",
          "min-width",
          "device-width",
          "orientation"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of mobile-first design?",
        options: [
          "Faster development",
          "Better performance on mobile devices",
          "Lower development cost",
          "Better SEO"
        ],
        answer: 1
      }
    ],

    "Fluid Grids and Layouts": [
      {
        question: "What is a fluid grid?",
        options: [
          "A grid that uses fixed widths",
          "A grid that uses percentage-based widths",
          "A grid that uses pixels",
          "A grid that uses em units"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is commonly used in fluid grids?",
        options: [
          "width: 100px",
          "width: 100%",
          "width: 100vw",
          "width: 100em"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using relative units in grids?",
        options: [
          "Better performance",
          "More flexible layouts",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Flexible Images and Media": [
      {
        question: "How do you make an image responsive?",
        options: [
          "Set a fixed width",
          "Use max-width: 100%",
          "Use width: 100%",
          "Use height: auto"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of the srcset attribute?",
        options: [
          "To set image alt text",
          "To provide different image sources for different screen sizes",
          "To set image dimensions",
          "To add image captions"
        ],
        answer: 1
      },
      {
        question: "Which element is used for art direction in responsive images?",
        options: [
          "<img>",
          "<picture>",
          "<figure>",
          "<div>"
        ],
        answer: 1
      }
    ],

    "Media Queries Fundamentals": [
      {
        question: "What is a media query?",
        options: [
          "A way to add meta tags",
          "A way to apply styles based on device characteristics",
          "A way to add JavaScript",
          "A way to add HTML"
        ],
        answer: 1
      },
      {
        question: "Which media feature is used to target screen width?",
        options: [
          "device-width",
          "width",
          "screen-width",
          "viewport-width"
        ],
        answer: 1
      },
      {
        question: "What is the correct syntax for a media query?",
        options: [
          "@media screen { }",
          "@media (min-width: 768px) { }",
          "@media screen and (min-width: 768px) { }",
          "@media (screen) { }"
        ],
        answer: 2
      }
    ],

    "Breakpoints and Viewport": [
      {
        question: "What is a breakpoint?",
        options: [
          "A point where the website breaks",
          "A point where the layout changes",
          "A point where the server breaks",
          "A point where the database breaks"
        ],
        answer: 1
      },
      {
        question: "Which viewport unit represents the viewport width?",
        options: [
          "vh",
          "vw",
          "vmin",
          "vmax"
        ],
        answer: 1
      },
      {
        question: "What is the purpose of the viewport meta tag?",
        options: [
          "To set the page title",
          "To control the page's dimensions and scaling",
          "To add meta description",
          "To set character encoding"
        ],
        answer: 1
      }
    ],

    "Responsive Typography": [
      {
        question: "What is fluid typography?",
        options: [
          "Typography that flows like water",
          "Typography that scales with viewport size",
          "Typography that moves",
          "Typography that changes color"
        ],
        answer: 1
      },
      {
        question: "Which CSS function is used for fluid typography?",
        options: [
          "calc()",
          "clamp()",
          "min()",
          "max()"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using relative units for typography?",
        options: [
          "Better performance",
          "More flexible text sizing",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Navigation": [
      {
        question: "What is a common pattern for mobile navigation?",
        options: [
          "Horizontal menu",
          "Hamburger menu",
          "Vertical menu",
          "Dropdown menu"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to create a mobile menu?",
        options: [
          "display: block",
          "display: none",
          "display: flex",
          "display: grid"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using a mobile-first navigation?",
        options: [
          "Better performance",
          "Better usability on mobile devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Tables": [
      {
        question: "What is a common approach for responsive tables?",
        options: [
          "Fixed width",
          "Horizontal scroll",
          "Vertical scroll",
          "No scroll"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to create a responsive table?",
        options: [
          "display: block",
          "display: table",
          "display: flex",
          "display: grid"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using a responsive table?",
        options: [
          "Better performance",
          "Better usability on mobile devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Forms": [
      {
        question: "What is a common approach for responsive forms?",
        options: [
          "Fixed width",
          "Fluid width",
          "Fixed height",
          "Fluid height"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to create a responsive form?",
        options: [
          "width: 100px",
          "width: 100%",
          "width: 100vw",
          "width: 100em"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using a responsive form?",
        options: [
          "Better performance",
          "Better usability on mobile devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Images": [
      {
        question: "What is the purpose of the srcset attribute?",
        options: [
          "To set image alt text",
          "To provide different image sources for different screen sizes",
          "To set image dimensions",
          "To add image captions"
        ],
        answer: 1
      },
      {
        question: "Which element is used for art direction in responsive images?",
        options: [
          "<img>",
          "<picture>",
          "<figure>",
          "<div>"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive images?",
        options: [
          "Better performance",
          "Better image quality on different devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Videos": [
      {
        question: "What is a common approach for responsive videos?",
        options: [
          "Fixed width",
          "Aspect ratio box",
          "Fixed height",
          "No container"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to maintain video aspect ratio?",
        options: [
          "padding-top",
          "padding-bottom",
          "margin-top",
          "margin-bottom"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive videos?",
        options: [
          "Better performance",
          "Better video quality on different devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Maps": [
      {
        question: "What is a common approach for responsive maps?",
        options: [
          "Fixed width",
          "Aspect ratio box",
          "Fixed height",
          "No container"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to maintain map aspect ratio?",
        options: [
          "padding-top",
          "padding-bottom",
          "margin-top",
          "margin-bottom"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive maps?",
        options: [
          "Better performance",
          "Better map quality on different devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Charts": [
      {
        question: "What is a common approach for responsive charts?",
        options: [
          "Fixed width",
          "Aspect ratio box",
          "Fixed height",
          "No container"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to maintain chart aspect ratio?",
        options: [
          "padding-top",
          "padding-bottom",
          "margin-top",
          "margin-bottom"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive charts?",
        options: [
          "Better performance",
          "Better chart quality on different devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Data Visualization": [
      {
        question: "What is a common approach for responsive data visualization?",
        options: [
          "Fixed width",
          "Aspect ratio box",
          "Fixed height",
          "No container"
        ],
        answer: 1
      },
      {
        question: "Which CSS property is used to maintain visualization aspect ratio?",
        options: [
          "padding-top",
          "padding-bottom",
          "margin-top",
          "margin-bottom"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive data visualization?",
        options: [
          "Better performance",
          "Better visualization quality on different devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Email Design": [
      {
        question: "What is a common approach for responsive email design?",
        options: [
          "Fixed width",
          "Fluid width",
          "Fixed height",
          "Fluid height"
        ],
        answer: 1
      },
      {
        question: "Which HTML attribute is used for email compatibility?",
        options: [
          "class",
          "style",
          "id",
          "data-*"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive email design?",
        options: [
          "Better performance",
          "Better email quality on different devices",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],

    "Responsive Print Styles": [
      {
        question: "What is a common approach for responsive print styles?",
        options: [
          "Fixed width",
          "Fluid width",
          "Fixed height",
          "Fluid height"
        ],
        answer: 1
      },
      {
        question: "Which media query is used for print styles?",
        options: [
          "@media screen",
          "@media print",
          "@media all",
          "@media handheld"
        ],
        answer: 1
      },
      {
        question: "What is the benefit of using responsive print styles?",
        options: [
          "Better performance",
          "Better print quality",
          "Easier maintenance",
          "Better browser support"
        ],
        answer: 1
      }
    ],
    "Performance Optimization": [
      {
        question: "What is the main benefit of lazy loading images?",
        options: [
          "Improves SEO",
          "Reduces initial page load time",
          "Increases image quality",
          "Adds animations"
        ],
        answer: 1
      },
      {
        question: "Which tool can help analyze web performance?",
        options: [
          "Photoshop",
          "Lighthouse",
          "Illustrator",
          "Premiere Pro"
        ],
        answer: 1
      },
      {
        question: "What is a common technique for reducing CSS/JS file size?",
        options: [
          "Minification",
          "Inflation",
          "Duplication",
          "Obfuscation"
        ],
        answer: 1
      }
    ],

    "Testing and Debugging": [
      {
        question: "Which tool is commonly used for cross-device testing?",
        options: [
          "BrowserStack",
          "Notepad",
          "Excel",
          "Paint"
        ],
        answer: 1
      },
      {
        question: "What does a debug CSS outline help with?",
        options: [
          "Visualizing element boundaries",
          "Improving SEO",
          "Adding animations",
          "Changing colors"
        ],
        answer: 1
      },
      {
        question: "Why automate responsive testing?",
        options: [
          "To save time and catch issues early",
          "To make the site slower",
          "To increase manual work",
          "To remove breakpoints"
        ],
        answer: 1
      }
    ],

    "Cross-Browser Compatibility": [
      {
        question: "What are vendor prefixes used for?",
        options: [
          "Adding browser-specific CSS features",
          "Improving image quality",
          "Changing HTML structure",
          "Optimizing JavaScript"
        ],
        answer: 1
      },
      {
        question: "What is a polyfill?",
        options: [
          "A script that adds support for missing features",
          "A type of CSS selector",
          "A browser extension",
          "A color scheme"
        ],
        answer: 1
      },
      {
        question: "Why is it important to test in multiple browsers?",
        options: [
          "To ensure consistent user experience",
          "To increase code size",
          "To reduce performance",
          "To add more breakpoints"
        ],
        answer: 1
      }
    ],

    "Responsive Design Patterns": [
      {
        question: "What is an off-canvas menu?",
        options: [
          "A menu that slides in from the side",
          "A menu at the top of the page",
          "A dropdown menu",
          "A fixed footer menu"
        ],
        answer: 1
      },
      {
        question: "Why use a pattern library?",
        options: [
          "To reuse and document common solutions",
          "To increase code duplication",
          "To make the site slower",
          "To remove breakpoints"
        ],
        answer: 1
      },
      {
        question: "What is a card layout pattern?",
        options: [
          "A layout using rectangular content blocks",
          "A layout with only images",
          "A single column layout",
          "A layout for print only"
        ],
        answer: 1
      }
    ],

    "Responsive Design Best Practices": [
      {
        question: "What are design tokens?",
        options: [
          "Variables for design values like color and spacing",
          "A type of CSS selector",
          "A JavaScript function",
          "A browser extension"
        ],
        answer: 1
      },
      {
        question: "Why use utility classes?",
        options: [
          "To apply common styles quickly and consistently",
          "To increase code duplication",
          "To make the site slower",
          "To remove breakpoints"
        ],
        answer: 1
      },
      {
        question: "What is a best practice for responsive design?",
        options: [
          "Testing on multiple devices",
          "Using only fixed widths",
          "Ignoring accessibility",
          "Avoiding documentation"
        ],
        answer: 1
      }
    ]
  }
  return quizzes[lessonTitle] || [
    {
      question: "What is responsive web design?",
      options: [
        "A way to make websites load faster",
        "A way to create websites that work well on all devices",
        "A way to reduce development time",
        "A way to improve SEO"
      ],
      answer: 1
    },
    {
      question: "Which approach is recommended for responsive design?",
      options: [
        "Desktop-first",
        "Mobile-first",
        "Tablet-first",
        "Print-first"
      ],
      answer: 1
    },
    {
      question: "What is the viewport meta tag used for?",
      options: [
        "To set the page title",
        "To control the page's dimensions and scaling",
        "To add meta description",
        "To set character encoding"
      ],
      answer: 1
    }
  ]
}

module.exports = {
    getResponsiveWebDesignLessonConcepts,
    getResponsiveWebDesignCodeExample,
    getResponsiveWebDesignCodeExplanation,
    getResponsiveWebDesignExercises,
    getResponsiveWebDesignQuiz
    };