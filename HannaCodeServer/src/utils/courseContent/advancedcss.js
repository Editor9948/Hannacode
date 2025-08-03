const getAdvancedCSSLessonConcepts = (lessonTitle) => {
  const concepts = {
    "CSS Performance Optimization": `
- Selector optimization
- Property optimization
- Animation performance
- Layout performance
- Paint performance
- Loading optimization
- Best practices`,

    "CSS Browser Compatibility": `
- Vendor prefixes
- Feature detection
- Polyfills
- Fallback strategies
- Browser testing
- Cross-browser issues
- Modern CSS support`,

    "CSS Preprocessors (SASS/SCSS)": `
- Variables and mixins
- Nesting
- Functions
- Partials and imports
- Operators
- Control directives
- Best practices`,

    "CSS Methodologies (BEM, SMACSS)": `
- BEM naming convention
- SMACSS architecture
- Component organization
- State management
- Theme handling
- Scalability
- Maintenance`,

    "CSS Frameworks Overview": `
- Bootstrap features
- Tailwind CSS
- Foundation
- Bulma
- Custom frameworks
- Framework selection
- Implementation strategies`,

    "CSS Project: Building a Responsive Website": `
- Project planning
- Component design
- Responsive layout
`,
    "CSS Project: Building a Modern Website":`
- Performance optimization
- Browser testing
- Documentation
- Deployment strategies
    `
  

    }
  return concepts[lessonTitle] || "- Concept 1\n- Concept 2\n- Concept 3"
}


const getAdvancedCSSCodeExample = (lessonTitle) => {
  const examples = {

          "CSS Performance Optimization": `
   /* Use class selectors */
.button {
  background-color: #3498db;
}
/* Optimized - Direct class selectors */
.nav-link {
    color: #007bff;
    text-decoration: none;
}

.nav-link:hover {
    color: #0056b3;
}
/* Animate transform and opacity */
.fade-in {
  opacity: 0;
  transform: translateY(10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Optimized Animation - GPU accelerated */
@keyframes fast-animation {
    0% {
        transform: translateX(0) scale(1);
        opacity: 1;
    }
    100% {
        transform: translateX(100px) scale(1.2);
        opacity: 0.7;
    }
}

.fast-animated {
    animation: fast-animation 2s ease-in-out infinite;
    /* Promote to its own layer */
    will-change: transform, opacity;
    /* Alternative: transform: translateZ(0); */
}

/*  Efficient Layout - Modern CSS Grid */
.grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    container-type: inline-size;
}

.grid-item {
    /* No need for complex calculations */
    min-height: 200px;
}

/* Efficient Flexbox */
.flex-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
}

.flex-item {
    flex: 1 1 300px;
}
    /* Optimized Paint Performance */
.efficient-paint {
    /* Simple, solid colors paint faster */
    background-color: #3498db;
    
    /* Minimal box-shadow */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    /* Promote to own layer for complex elements */
    will-change: transform;
    transform: translateZ(0);
}

/* Layer promotion for animated elements */
.paint-optimized {
    /* Creates a new stacking context */
    position: relative;
    z-index: 1;
    
    /* Or use isolation */
    isolation: isolate;
}

/* Efficient gradients */
.simple-gradient {
    background: linear-gradient(to bottom, #ffffff, #f0f0f0);
}
  
/* Critical CSS - Inline in <head> */
/* Keep this minimal - above-the-fold content only */
.critical-header {
    display: flex;
    justify-content: space-between;
    padding: 1rem;
    background: #fff;
    border-bottom: 1px solid #eee;
}

.critical-nav {
    display: flex;
    gap: 1rem;
}

/* Font loading optimization */
@font-face {
    font-family: 'OptimizedFont';
    src: url('font.woff2') format('woff2'),
         url('font.woff') format('woff');
    font-display: swap; /* Improves perceived performance */
}

/* Efficient media queries */
@media (min-width: 768px) {
    .responsive-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
}

/*  Non-critical CSS - Load asynchronously */
.non-critical-footer {
    margin-top: 2rem;
    padding: 2rem;
    background: #f8f9fa;
}

.fancy-animations {
    /* These can be loaded later */
    animation: fadeIn 0.5s ease-in;
}

/* CSS Custom Properties for theming */
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --spacing-unit: 1rem;
}

.themed-element {
    color: var(--primary-color);
    margin: var(--spacing-unit);
}

/* CSS Best Practices for Performance */

/* 1. Use efficient reset/normalize */
*,
*::before,
*::after {
    box-sizing: border-box;
}

/* 2. Organize CSS logically */
/* Base styles */
html {
    font-size: 16px;
    line-height: 1.5;
}

body {
    font-family: system-ui, -apple-system, sans-serif;
    margin: 0;
}

/* 3. Use CSS custom properties efficiently */
:root {
    --color-primary: #007bff;
    --color-secondary: #6c757d;
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
}

/* 4. Component-based approach */
.card {
    background: white;
    border-radius: 8px;
    padding: var(--spacing-md);
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    
    /* Contain paint and layout */
    contain: layout paint;
}

/* 5. Efficient responsive design */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-sm);
}

/* 6. Performance-conscious animations */
@media (prefers-reduced-motion: no-preference) {
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.3s ease, transform 0.3s ease;
    }
    
    .animate-on-scroll.visible {
        opacity: 1;
        transform: translateY(0);
    }
}

/* 7. Efficient utility classes */
.visually-hidden {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    padding: 0 !important;
    margin: -1px !important;
    overflow: hidden !important;
    clip: rect(0, 0, 0, 0) !important;
    white-space: nowrap !important;
    border: 0 !important;
}

/* 8. Modern CSS features */
.modern-layout {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--spacing-md);
    
    /* Use logical properties */
    padding-inline: var(--spacing-sm);
    margin-block: var(--spacing-lg);
}

/* 9. Avoid performance anti-patterns */
/*  Don't do this */
/*
.avoid-this * {
    transition: all 0.3s ease;
}
*/

/*  Be specific instead */
.button {
    transition: background-color 0.2s ease, transform 0.1s ease;
}

/* 10. Use containment for isolated components */
.widget {
    contain: layout style paint;
}`,

      "CSS Browser Compatibility": `
      /* Vendor prefixes */
/*Complete vendor prefix support */
.transform-element {
    -webkit-transform: rotate(45deg) scale(1.2);
    -moz-transform: rotate(45deg) scale(1.2);
    -ms-transform: rotate(45deg) scale(1.2);
    -o-transform: rotate(45deg) scale(1.2);
    transform: rotate(45deg) scale(1.2);
    
    -webkit-transform-origin: center;
    -moz-transform-origin: center;
    -ms-transform-origin: center;
    -o-transform-origin: center;
    transform-origin: center;
}

/* Feature detection */
@supports (display: grid) {
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 0;
  }
}

/* CSS that works with Grid polyfill */
.polyfill-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    
    /* Polyfill-specific properties for IE 11 */
    -ms-grid-columns: 1fr 20px 1fr 20px 1fr;
    -ms-grid-rows: auto;
}

/* Fallback */
.no-grid .grid-container {
  display: flex;
  flex-wrap: wrap;
}
  /* Flexbox enhancement */
@supports (display: flex) {
    .responsive-layout {
        display: flex;
        flex-wrap: wrap;
        overflow: visible;
    }
    
    .responsive-item {
        float: none;
        flex: 1 1 300px;
    }
}
    /* Comprehensive fallback strategy */
.hero-section {
    /* Level 1: Solid color fallback */
    background-color: #3498db;
    
    /* Level 2: Linear gradient fallback */
    background-image: linear-gradient(45deg, #3498db, #2980b9);
    
    /* Level 3: Modern gradient with better browser support */
    background: linear-gradient(45deg, #3498db 0%, #2980b9 100%);
    
     /*CSS structured for easy testing */
/* Base styles - test in all browsers */
.test-component {
    /* Safe, widely supported properties */
    display: block;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #dee2e6;
    border-radius: 4px;
}

/* Progressive enhancements - test in modern browsers */
@supports (display: flex) {
    .test-component {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

       /* Modern CSS features with fallbacks */
:root {
    /* Modern: CSS Custom Properties */
    --spacing-unit: 1rem;
    --color-primary: #007bff;
    --color-secondary: #6c757d;
    --border-radius: 8px;
    --font-size-base: 16px;
}

.modern-component {
    /* Fallback values */
    margin: 16px;
    padding: 16px 24px;
    background-color: #007bff;
    color: #6c757d;
    border-radius: 8px;
    font-size: 16px;
    
    /* Modern: Custom properties */
    margin: var(--spacing-unit);
    padding: var(--spacing-unit) calc(var(--spacing-unit) * 1.5);
    background-color: var(--color-primary);
    color: var(--color-secondary);
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    
    /* Modern: Logical properties */
    margin-block: var(--spacing-unit);
    margin-inline: var(--spacing-unit);
    padding-block: var(--spacing-unit);
    padding-inline: calc(var(--spacing-unit) * 1.5);
}

/* Modern: CSS Cascade Layers */
@layer base, components, utilities;

@layer base {
    body {
        font-family: system-ui, sans-serif;
    }
}

@layer components {
    .modern-button {
        background: var(--color-primary);
        border: none;
        border-radius: var(--border-radius);
        padding: var(--spacing-unit);
    }
}

@layer utilities {
    .text-center {
        text-align: center;
    }
}`,

       "CSS Preprocessors (SASS/SCSS)": `
       //Advanced Variables and Mixins System
       // _variables.scss - Centralized design tokens
$primary-color: #3b82f6;
$secondary-color: #6b7280;
$success-color: #10b981;
$error-color: #ef4444;

// Typography variables
$font-family-base: 'Inter', system-ui, sans-serif;
$font-size-base: 1rem;
$font-weights: (
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
);

// Spacing scale
$spacing: (
  xs: 0.25rem,
  sm: 0.5rem,
  md: 1rem,
  lg: 1.5rem,
  xl: 2rem,
  2xl: 3rem
);

// Breakpoints
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px
);

// Advanced mixins with parameters
@mixin button-style($bg-color, $text-color: white, $size: md) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-color;
  color: $text-color;
  border: none;
  border-radius: 0.375rem;
  font-weight: map-get($font-weights, medium);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  // Size variations using @if directive
  @if $size == sm {
    padding: map-get($spacing, xs) map-get($spacing, sm);
    font-size: 0.875rem;
  } @else if $size == lg {
    padding: map-get($spacing, sm) map-get($spacing, lg);
    font-size: 1.125rem;
  } @else {
    padding: map-get($spacing, sm) map-get($spacing, md);
    font-size: $font-size-base;
  }
  
  &:hover {
    background-color: darken($bg-color, 10%);
    transform: translateY(-1px);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

// Responsive breakpoint mixin
@mixin respond-to($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "Unfortunately, no value could be retrieved from \`#{$breakpoint}\`. "
        + "Available breakpoints are: #{map-keys($breakpoints)}.";
  }
}

// Usage examples
.btn-primary {
  @include button-style($primary-color);
}

.btn-success-large {
  @include button-style($success-color, white, lg);
}

.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: map-get($spacing, md);
  
  @include respond-to(md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @include respond-to(lg) {
    grid-template-columns: repeat(3, 1fr);
  }
}

  //Strategic Nesting with BEM Methodology 
       // Well-structured nesting following BEM principles
.card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: box-shadow 0.2s ease;
  
  // Pseudo-classes using parent selector
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  // BEM modifiers
  &--elevated {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &--interactive {
    cursor: pointer;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
    }
  }
  
  // BEM elements (nested components)
  &__header {
    padding: map-get($spacing, lg);
    border-bottom: 1px solid #f3f4f6;
    
    .title {
      margin: 0;
      font-size: 1.25rem;
      font-weight: map-get($font-weights, semibold);
      color: #1f2937;
    }
    
    .subtitle {
      margin: map-get($spacing, xs) 0 0 0;
      font-size: 0.875rem;
      color: $secondary-color;
    }
  }
  
  &__body {
    padding: map-get($spacing, lg);
  }
  
  &__footer {
    padding: map-get($spacing, lg);
    background: #f9fafb;
    border-top: 1px solid #f3f4f6;
    
    .actions {
      display: flex;
      gap: map-get($spacing, sm);
      justify-content: flex-end;
    }
  }
  
  // Media queries nested within component
  @include respond-to(sm) {
    &__header,
    &__body,
    &__footer {
      padding: map-get($spacing, xl);
    }
  }
}

// Navigation component with strategic nesting
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: map-get($spacing, md) 0;
  
  &__brand {
    font-size: 1.25rem;
    font-weight: map-get($font-weights, bold);
    color: $primary-color;
    text-decoration: none;
    
    &:hover {
      color: darken($primary-color, 10%);
    }
  }
  
  &__menu {
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    
    @include respond-to(md) {
      display: flex;
      gap: map-get($spacing, lg);
    }
  }
  
  &__link {
    color: $secondary-color;
    text-decoration: none;
    font-weight: map-get($font-weights, medium);
    transition: color 0.2s ease;
    
    &:hover,
    &--active {
      color: $primary-color;
    }
    
    // Nested pseudo-element for active indicator
    &--active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      right: 0;
      height: 2px;
      background: $primary-color;
    }
  }
  
  &__toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    
    @include respond-to(md) {
      display: none;
    }
    
    // Hamburger icon styling
    .icon {
      width: 24px;
      height: 2px;
      background: $secondary-color;
      position: relative;
      transition: background 0.3s ease;
      
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 24px;
        height: 2px;
        background: $secondary-color;
        transition: transform 0.3s ease;
      }
      
      &::before {
        top: -8px;
      }
      
      &::after {
        bottom: -8px;
      }
    }
  }
  
  // Mobile menu open state
  &--open {
    .nav__toggle .icon {
      background: transparent;
      
      &::before {
        transform: rotate(45deg) translate(6px, 6px);
      }
      
      &::after {
        transform: rotate(-45deg) translate(6px, -6px);
      }
    }
  }
}

 //Advanced Custom Functions for Design Systems
  // Utility functions for design system calculations

// Fluid typography function using clamp()
@function fluid-size($min-size, $max-size, $min-width: 320px, $max-width: 1200px) {
  $slope: ($max-size - $min-size) / ($max-width - $min-width);
  $yAxisIntersection: -$min-width * $slope + $min-size;
  
  @return clamp(
    #{$min-size}, 
    #{$yAxisIntersection} + #{$slope * 100vw}, 
    #{$max-size}
  );
}

// Color palette generator function
@function generate-color-palette($base-color, $variations: 9) {
  $palette: ();
  
  @for $i from 1 through $variations {
    $lightness: 95% - ($i - 1) * 10%;
    $color: hsl(hue($base-color), saturation($base-color), $lightness);
    $palette: map-merge($palette, (#{$i * 100}: $color));
  }
  
  @return $palette;
}

// Spacing calculation function
@function spacing($multiplier) {
  $base-spacing: 0.5rem;
  @return $base-spacing * $multiplier;
}

// Z-index management function
@function z-index($layer) {
  $z-layers: (
    'modal': 1000,
    'dropdown': 500,
    'header': 100,
    'default': 1,
    'below': -1
  );
  
  @if map-has-key($z-layers, $layer) {
    @return map-get($z-layers, $layer);
  } @else {
    @warn "Unknown z-index layer: #{$layer}";
    @return 0;
  }
}

// Contrast checker function for accessibility
@function get-contrast-color($background-color, $light-color: white, $dark-color: #333) {
  $lightness: lightness($background-color);
  
  @if $lightness > 50% {
    @return $dark-color;
  } @else {
    @return $light-color;
  }
}

// Advanced grid calculation function
@function grid-width($columns, $total-columns: 12, $gap: 1rem) {
  $column-width: (100% - ($total-columns - 1) * $gap) / $total-columns;
  $width: $column-width * $columns + $gap * ($columns - 1);
  @return $width;
}

// Usage examples in components
.hero {
  &__title {
    // Fluid typography that scales with viewport
    font-size: fluid-size(2rem, 4rem);
    line-height: 1.2;
    margin-bottom: spacing(4);
  }
  
  &__subtitle {
    font-size: fluid-size(1.125rem, 1.5rem);
    color: $secondary-color;
    margin-bottom: spacing(6);
  }
}

// Generate color palette from brand color
$primary-palette: generate-color-palette($primary-color);

.alert {
  padding: spacing(3) spacing(4);
  border-radius: 0.375rem;
  position: relative;
  z-index: z-index('default');
  
  &--primary {
    background-color: map-get($primary-palette, 100);
    color: get-contrast-color(map-get($primary-palette, 100));
    border: 1px solid map-get($primary-palette, 300);
  }
  
  &--success {
    $success-palette: generate-color-palette($success-color);
    background-color: map-get($success-palette, 100);
    color: get-contrast-color(map-get($success-palette, 100));
  }
}

// Responsive grid using grid calculation function
.grid-layout {
  display: grid;
  gap: 1rem;
  
  &__item {
    &--span-3 {
      grid-column: span 3;
      width: grid-width(3);
    }
    
    &--span-6 {
      grid-column: span 6;
      width: grid-width(6);
    }
    
    &--span-9 {
      grid-column: span 9;
      width: grid-width(9);
    }
  }
}

// Modal with proper z-index layering
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: z-index('modal');
  
  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    border-radius: 0.5rem;
    padding: spacing(6);
    max-width: 90vw;
    max-height: 90vh;
    overflow-y: auto;
  }
}

// Comprehensive Partial Structure
// main.scss - Master import file
// =================================

// 1. Configuration and utilities first
@import 'config/variables';
@import 'config/functions';
@import 'config/mixins';

// 2. Base styles and resets
@import 'base/normalize';
@import 'base/typography';
@import 'base/forms';

// 3. Layout systems
@import 'layout/grid';
@import 'layout/container';
@import 'layout/header';
@import 'layout/footer';

// 4. Reusable components
@import 'components/buttons';
@import 'components/cards';
@import 'components/navigation';
@import 'components/modals';
@import 'components/forms';

// 5. Page-specific styles
@import 'pages/home';
@import 'pages/about';
@import 'pages/contact';

// 6. Utilities and helpers (loaded last)
@import 'utilities/spacing';
@import 'utilities/colors';
@import 'utilities/responsive';

// =================================
// _config/_variables.scss
// =================================

// Brand colors
$brand-primary: #3b82f6;
$brand-secondary: #6b7280;
$brand-success: #10b981;
$brand-warning: #f59e0b;
$brand-error: #ef4444;

// Typography
$font-family-base: 'Inter', system-ui, sans-serif;
$font-family-heading: 'Poppins', system-ui, sans-serif;

// Spacing scale
$spacing-scale: (
  0: 0,
  1: 0.25rem,
  2: 0.5rem,
  3: 0.75rem,
  4: 1rem,
  5: 1.25rem,
  6: 1.5rem,
  8: 2rem,
  10: 2.5rem,
  12: 3rem,
  16: 4rem,
  20: 5rem
);

// Breakpoints
$breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);

// Component-specific variables
$button-padding-y: map-get($spacing-scale, 2);
$button-padding-x: map-get($spacing-scale, 4);
$button-border-radius: 0.375rem;

$card-padding: map-get($spacing-scale, 6);
$card-border-radius: 0.5rem;
$card-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

// =================================
// _components/_buttons.scss
// =================================

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $button-padding-y $button-padding-x;
  border: 1px solid transparent;
  border-radius: $button-border-radius;
  font-family: $font-family-base;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
  
  // Variants using imported variables
  &--primary {
    background-color: $brand-primary;
    border-color: $brand-primary;
    color: white;
    
    &:hover {
      background-color: darken($brand-primary, 8%);
      border-color: darken($brand-primary, 8%);
    }
  }
  
  &--success {
    background-color: $brand-success;
    border-color: $brand-success;
    color: white;
    
    &:hover {
      background-color: darken($brand-success, 8%);
    }
  }
  
  &--outline {
    background-color: transparent;
    border-color: $brand-primary;
    color: $brand-primary;
    
    &:hover {
      background-color: $brand-primary;
      color: white;
    }
  }
  
  // Sizes
  &--sm {
    padding: map-get($spacing-scale, 1) map-get($spacing-scale, 3);
    font-size: 0.875rem;
  }
  
  &--lg {
    padding: map-get($spacing-scale, 3) map-get($spacing-scale, 6);
    font-size: 1.125rem;
  }
}

// =================================
// _layout/_grid.scss
// =================================

.container {
  width: 100%;
  margin: 0 auto;
  padding: 0 map-get($spacing-scale, 4);
  
  // Responsive container widths using imported breakpoints
  @each $name, $width in $breakpoints {
    @if $name != 'xs' {
      @media (min-width: $width) {
        max-width: $width - 30px; // Account for scrollbar
      }
    }
  }
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -(map-get($spacing-scale, 2));
  
  > * {
    padding: 0 map-get($spacing-scale, 2);
  }
}

// Generate responsive grid classes
@each $breakpoint-name, $breakpoint-value in $breakpoints {
  $infix: if($breakpoint-name == 'xs', '', '-#{$breakpoint-name}');
  
  @if $breakpoint-name == 'xs' {
    @include make-grid-columns($infix);
  } @else {
    @media (min-width: $breakpoint-value) {
      @include make-grid-columns($infix);
    }
  }
}

// =================================
// _utilities/_spacing.scss  
// =================================

// Generate spacing utility classes from scale
@each $prop, $abbrev in (margin: m, padding: p) {
  @each $size, $length in $spacing-scale {
    .#{$abbrev}-#{$size} { #{$prop}: $length !important; }
    .#{$abbrev}t-#{$size} { #{$prop}-top: $length !important; }
    .#{$abbrev}r-#{$size} { #{$prop}-right: $length !important; }
    .#{$abbrev}b-#{$size} { #{$prop}-bottom: $length !important; }
    .#{$abbrev}l-#{$size} { #{$prop}-left: $length !important; }
    .#{$abbrev}x-#{$size} { 
      #{$prop}-left: $length !important; 
      #{$prop}-right: $length !important; 
    }
    .#{$abbrev}y-#{$size} { 
      #{$prop}-top: $length !important; 
      #{$prop}-bottom: $length !important; 
    }
  }
}

//Advanced Operator Usage for Responsive Design
  // Mathematical operators for responsive design calculations
$base-font-size: 16px;
$golden-ratio: 1.618;
$container-max-width: 1200px;

// Typography scale using mathematical operations
$font-sizes: (
  xs: $base-font-size * 0.75,           // 12px
  sm: $base-font-size * 0.875,          // 14px  
  base: $base-font-size,               // 16px
  lg: $base-font-size * 1.125,         // 18px
  xl: $base-font-size * 1.25,          // 20px
  2xl: $base-font-size * 1.5,          // 24px
  3xl: $base-font-size * 1.875,        // 30px
  4xl: $base-font-size * 2.25,         // 36px
  5xl: $base-font-size * 3             // 48px
);

// Spacing calculations based on golden ratio
@function golden-spacing($multiplier) {
  @return ($base-font-size * $golden-ratio) * $multiplier;
}

// Grid calculations with operators
$grid-columns: 12;
$grid-gap: 1rem;

@function grid-column-width($columns) {
  // Calculate percentage width accounting for gaps
  $total-gaps: ($grid-columns - 1) * $grid-gap;
  $available-width: 100% - $total-gaps;
  @return ($available-width / $grid-columns) * $columns + ($grid-gap * ($columns - 1));
}

// Responsive breakpoint calculations
$breakpoint-sm: 640px;
$breakpoint-md: $breakpoint-sm * 1.2;    // 768px
$breakpoint-lg: $breakpoint-md * 1.33;   // ~1024px
$breakpoint-xl: $breakpoint-lg * 1.25;   // 1280px

// Color manipulation with operators
$primary-hue: 220;
$primary-saturation: 70%;
$primary-lightness: 50%;

// Generate color variations using operators
@function color-variant($hue, $saturation, $lightness, $adjustment: 0) {
  @return hsl($hue, $saturation, $lightness + $adjustment);
}

// Advanced responsive mixin using comparison operators
@mixin responsive-property($property, $mobile-value, $desktop-value, $breakpoint: $breakpoint-md) {
  #{$property}: $mobile-value;
  
  // Use comparison to apply desktop styles
  @if $breakpoint >= $breakpoint-sm {
    @media (min-width: $breakpoint) {
      #{$property}: $desktop-value;
    }
  }
}

// Component examples using operators
.container {
  width: 100%;
  max-width: $container-max-width;
  margin: 0 auto;
  
  // Responsive padding using mathematical operations
  padding: 0 ($base-font-size * 0.5);  // 8px on mobile
  
  @media (min-width: $breakpoint-md) {
    padding: 0 ($base-font-size * 1.5);  // 24px on desktop
  }
}

.grid {
  display: grid;
  // Dynamic gap calculation
  gap: $grid-gap / 2;  // Half the standard gap
  
  // Generate grid columns with calculations
  &--2-col {
    grid-template-columns: repeat(2, (100% - $grid-gap) / 2);
  }
  
  &--3-col {
    grid-template-columns: repeat(3, (100% - ($grid-gap * 2)) / 3);
  }
  
  &--auto {
    grid-template-columns: repeat(auto-fit, minmax($container-max-width / 4, 1fr));
  }
}

.typography {
  // Font size calculations using map and operators
  @each $name, $size in $font-sizes {
    &--#{$name} {
      font-size: $size;
      // Line height calculation based on font size
      line-height: if($size >= map-get($font-sizes, xl), 1.2, 1.5);
      // Margin calculation proportional to font size
      margin-bottom: $size * 0.5;
    }
  }
}

.card {
  // Spacing using golden ratio calculations
  padding: golden-spacing(1);
  margin-bottom: golden-spacing(0.618);
  border-radius: $base-font-size / 4;  // 4px
  
  // Box shadow with calculated opacity
  box-shadow: 0 ($base-font-size / 8) ($base-font-size / 4) rgba(0, 0, 0, 0.1);
  
  &__title {
    @include responsive-property(font-size, map-get($font-sizes, lg), map-get($font-sizes, 2xl));
    margin-bottom: golden-spacing(0.5);
  }
  
  &__content {
    // Dynamic line height based on content width
    line-height: if($container-max-width > 800px, 1.6, 1.5);
  }
}

// Color system using operators for consistency
.theme {
  // Primary color variants using lightness operators
  &--primary {
    background-color: color-variant($primary-hue, $primary-saturation, $primary-lightness);
    
    &-light {
      background-color: color-variant($primary-hue, $primary-saturation, $primary-lightness, 20%);
    }
    
    &-dark {
      background-color: color-variant($primary-hue, $primary-saturation, $primary-lightness, -20%);
    }
  }
  
  // Complementary colors using hue operators
  &--secondary {
    $secondary-hue: $primary-hue + 180; // Complementary color
    background-color: color-variant($secondary-hue, $primary-saturation, $primary-lightness);
  }
  
  // Analogous colors using hue operators
  &--accent {
    $accent-hue: $primary-hue + 30; // Analogous color
    background-color: color-variant($accent-hue, $primary-saturation * 0.8, $primary-lightness);
  }
}

// Button sizing with proportional calculations
.btn {
  // Base button using calculated values
  padding: ($base-font-size * 0.5) ($base-font-size * 1);
  border-radius: $base-font-size / 4;
  font-size: map-get($font-sizes, base);
  
  // Size variations using operators
  &--sm {
    padding: ($base-font-size * 0.25) ($base-font-size * 0.75);
    font-size: map-get($font-sizes, sm);
  }
  
  &--lg {
    padding: ($base-font-size * 0.75) ($base-font-size * 1.5);
    font-size: map-get($font-sizes, lg);
  }
  
  &--xl {
    padding: ($base-font-size * 1) ($base-font-size * 2);
    font-size: map-get($font-sizes, xl);
  }
}

// Advanced Control Directives for Design System Generation
// Configuration maps for systematic generation
$colors: (
  primary: #3b82f6,
  secondary: #6b7280,
  success: #10b981,
  warning: #f59e0b,
  error: #ef4444,
  info: #06b6d4
);

$sizes: (
  xs: 0.75rem,
  sm: 0.875rem,
  base: 1rem,
  lg: 1.125rem,
  xl: 1.25rem,
  2xl: 1.5rem,
  3xl: 1.875rem
);

$spacing-multipliers: (1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20);
$breakpoints: (
  sm: 640px,
  md: 768px,
  lg: 1024px,
  xl: 1280px
);

// Advanced @each directive for comprehensive utility generation
@each $color-name, $color-value in $colors {
  // Generate color variations with @for loop
  @for $i from 1 through 9 {
    $lightness: 95% - ($i - 1) * 10%;
    $shade: $i * 100;
    
    .text-#{$color-name}-#{$shade} {
      color: hsl(hue($color-value), saturation($color-value), $lightness);
    }
    
    .bg-#{$color-name}-#{$shade} {
      background-color: hsl(hue($color-value), saturation($color-value), $lightness);
    }
    
    .border-#{$color-name}-#{$shade} {
      border-color: hsl(hue($color-value), saturation($color-value), $lightness);
    }
  }
  
  // Generate button variants with @if conditions
  .btn-#{$color-name} {
    background-color: $color-value;
    border-color: $color-value;
    color: white;
    
    @if lightness($color-value) > 70% {
      color: #1f2937; // Dark text for light backgrounds
    }
    
    &:hover {
      $hover-color: if(lightness($color-value) > 50%, darken($color-value, 10%), lighten($color-value, 10%));
      background-color: $hover-color;
      border-color: $hover-color;
    }
    
    &--outline {
      background-color: transparent;
      color: $color-value;
      border: 2px solid $color-value;
      
      &:hover {
        background-color: $color-value;
        color: white;
        
        @if lightness($color-value) > 70% {
          color: #1f2937;
        }
      }
    }
  }
}

// Dynamic spacing system with @each and conditional logic
@each $multiplier in $spacing-multipliers {
  $spacing-value: 0.25rem * $multiplier;
  
  // Margin utilities
  .m-#{$multiplier} { margin: $spacing-value; }
  .mt-#{$multiplier} { margin-top: $spacing-value; }
  .mr-#{$multiplier} { margin-right: $spacing-value; }
  .mb-#{$multiplier} { margin-bottom: $spacing-value; }
  .ml-#{$multiplier} { margin-left: $spacing-value; }
  .mx-#{$multiplier} { 
    margin-left: $spacing-value; 
    margin-right: $spacing-value; 
  }
  .my-#{$multiplier} { 
    margin-top: $spacing-value; 
    margin-bottom: $spacing-value; 
  }
  
  // Padding utilities
  .p-#{$multiplier} { padding: $spacing-value; }
  .pt-#{$multiplier} { padding-top: $spacing-value; }
  .pr-#{$multiplier} { padding-right: $spacing-value; }
  .pb-#{$multiplier} { padding-bottom: $spacing-value; }
  .pl-#{$multiplier} { padding-left: $spacing-value; }
  .px-#{$multiplier} { 
    padding-left: $spacing-value; 
    padding-right: $spacing-value; 
  }
  .py-#{$multiplier} { 
    padding-top: $spacing-value; 
    padding-bottom: $spacing-value; 
  }
  
  // Gap utilities for flexbox and grid
  .gap-#{$multiplier} { gap: $spacing-value; }
  .gap-x-#{$multiplier} { column-gap: $spacing-value; }
  .gap-y-#{$multiplier} { row-gap: $spacing-value; }
}

// Responsive utilities generation with nested @each
@each $breakpoint-name, $breakpoint-value in $breakpoints {
  @media (min-width: $breakpoint-value) {
    
    // Responsive spacing
    @each $multiplier in $spacing-multipliers {
      $spacing-value: 0.25rem * $multiplier;
      
      .#{$breakpoint-name}\:m-#{$multiplier} { margin: $spacing-value; }
      .#{$breakpoint-name}\:p-#{$multiplier} { padding: $spacing-value; }
      .#{$breakpoint-name}\:gap-#{$multiplier} { gap: $spacing-value; }
    }
    
    // Responsive grid columns with @for
    @for $columns from 1 through 12 {
      .#{$breakpoint-name}\:col-#{$columns} {
        grid-column: span #{$columns};
      }
      
      .#{$breakpoint-name}\:w-#{$columns}\/12 {
        width: percentage($columns / 12);
      }
    }
    
    // Responsive display utilities
    $display-values: (none, block, inline-block, inline, flex, inline-flex, grid, inline-grid);
    @each $display in $display-values {
      .#{$breakpoint-name}\:#{$display} {
        display: #{$display};
      }
    }
  }
}

// Complex component generation with multiple control directives
@mixin generate-card-variants {
  .card {
    background: white;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.2s ease;
    
    // Generate size variations with @for
    @for $size from 1 through 5 {
      &--size-#{$size} {
        $padding: 0.5rem * $size;
        $font-scale: 0.8 + ($size * 0.1);
        
        padding: $padding;
        font-size: #{$font-scale}rem;
        
        @if $size >= 3 {
          box-shadow: 0 #{$size * 2}px #{$size * 4}px rgba(0, 0, 0, 0.1);
        }
      }
    }
    
    // Generate elevation variants with @while
    $elevation: 1;
    @while $elevation <= 5 {
      &--elevation-#{$elevation} {
        $shadow-y: $elevation * 2px;
        $shadow-blur: $elevation * 4px;
        $shadow-opacity: 0.1 + ($elevation * 0.02);
        
        box-shadow: 0 $shadow-y $shadow-blur rgba(0, 0, 0, $shadow-opacity);
        
        @if $elevation >= 3 {
          transform: translateY(-#{$elevation}px);
        }
      }
      
      $elevation: $elevation + 1;
    }
    
    // Generate theme variants with @each and conditions
    @each $color-name, $color-value in $colors {
      &--#{$color-name} {
        border-left: 4px solid $color-value;
        
        .card__header {
          background-color: rgba($color-value, 0.1);
          color: $color-value;
          
          @if lightness($color-value) < 40% {
            color: lighten($color-value, 20%);
          }
        }
        
        .card__accent {
          color: $color-value;
        }
      }
    }
  }
}

// Typography system with advanced control logic
@mixin generate-typography-system {
  @each $size-name, $size-value in $sizes {
    .text-#{$size-name} {
      font-size: $size-value;
      
      // Conditional line-height based on size
      @if $size-value >= 1.5rem {
        line-height: 1.2; // Tight line-height for large text
      } @else if $size-value >= 1rem {
        line-height: 1.5; // Normal line-height for body text
      } @else {
        line-height: 1.4; // Slightly tighter for small text
      }
      
      // Dynamic margin based on font size
      margin-bottom: $size-value * 0.5;
    }
  }
  
  // Generate font weight utilities
  $font-weights: (thin: 100, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800);
  @each $weight-name, $weight-value in $font-weights {
    .font-#{$weight-name} {
      font-weight: $weight-value;
    }
  }
}

// Grid system generation with complex logic
@mixin generate-grid-system {
  .grid {
    display: grid;
    
    // Generate column utilities with @for
    @for $cols from 1 through 12 {
      &-cols-#{$cols} {
        grid-template-columns: repeat(#{$cols}, 1fr);
      }
    }
    
    // Generate responsive grid with nested loops
    @each $breakpoint-name, $breakpoint-value in $breakpoints {
      @media (min-width: $breakpoint-value) {
        @for $cols from 1 through 12 {
          &-#{$breakpoint-name}-#{$cols} {
            grid-template-columns: repeat(#{$cols}, 1fr);
          }
        }
      }
    }
    
    // Generate auto-fit variations with conditions
    $min-widths: (200px, 250px, 300px, 350px);
    @each $min-width in $min-widths {
      $suffix: str-replace(#{$min-width}, 'px', '');
      
      &-auto-#{$suffix} {
        grid-template-columns: repeat(auto-fit, minmax(#{$min-width}, 1fr));
      }
    }
  }
}

// Utility function for string replacement (used above)
@function str-replace($string, $search, $replace: '') {
  $index: str-index($string, $search);
  
  @if $index {
    @return str-slice($string, 1, $index - 1) + $replace + str-replace(str-slice($string, $index + str-length($search)), $search, $replace);
  }
  
  @return $string;
}

// Generate all systems
@include generate-card-variants;
@include generate-typography-system;
@include generate-grid-system;

// Animation utilities with control directives
$animation-durations: (fast: 0.1s, normal: 0.2s, slow: 0.3s, slower: 0.5s);
$animation-easings: (linear: linear, ease: ease, ease-in: ease-in, ease-out: ease-out, ease-in-out: ease-in-out);

@each $duration-name, $duration-value in $animation-durations {
  @each $easing-name, $easing-value in $animation-easings {
    .transition-#{$duration-name}-#{$easing-name} {
      transition: all $duration-value $easing-value;
    }
  }
}

// Generate hover effects with conditions
$hover-effects: (lift: translateY(-2px), scale: scale(1.05), rotate: rotate(2deg), skew: skew(-2deg));

@each $effect-name, $transform-value in $hover-effects {
  .hover-#{$effect-name} {
    transition: transform 0.2s ease;
    
    &:hover {
      transform: $transform-value;
      
      @if $effect-name == 'lift' {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }
}

//Comprehensive SASS Architecture and Best Practices
// =================================
// SASS ARCHITECTURE BEST PRACTICES
// =================================

// 1. FILE ORGANIZATION (7-1 Pattern)
// main.scss structure:
/*
scss/
├── abstracts/
│   ├── _variables.scss
│   ├── _functions.scss
│   ├── _mixins.scss
│   └── _placeholders.scss
├── base/
│   ├── _reset.scss
│   ├── _typography.scss
│   └── _helpers.scss
├── components/
│   ├── _buttons.scss
│   ├── _cards.scss
│   └── _forms.scss
├── layout/
│   ├── _header.scss
│   ├── _footer.scss
│   └── _grid.scss
├── pages/
│   ├── _home.scss
│   └── _about.scss
├── themes/
│   └── _default.scss
├── vendors/
│   └── _normalize.scss
└── main.scss
*/

// 2. VARIABLE NAMING CONVENTIONS
// ✅ Good: Semantic, consistent naming
$color-primary: #3b82f6;
$color-secondary: #6b7280;
$color-text-base: #1f2937;
$color-text-muted: #6b7280;

$font-family-primary: 'Inter', system-ui, sans-serif;
$font-family-secondary: 'Poppins', system-ui, sans-serif;

$spacing-unit: 0.25rem; // 4px base unit
$spacing-xs: $spacing-unit * 1; // 4px
$spacing-sm: $spacing-unit * 2; // 8px
$spacing-md: $spacing-unit * 4; // 16px
$spacing-lg: $spacing-unit * 6; // 24px
$spacing-xl: $spacing-unit * 8; // 32px

$border-radius-sm: 0.125rem;
$border-radius-md: 0.375rem;
$border-radius-lg: 0.5rem;
$border-radius-full: 9999px;

// ❌ Avoid: Unclear, inconsistent naming
// $blue: #3b82f6;
// $size1: 16px;
// $margin: 10px;

// 3. MIXIN BEST PRACTICES
// ✅ Good: Clear purpose, parameterized, well-documented
/// Creates a consistent button style with customizable appearance
/// @param {Color} $bg-color - Background color
/// @param {Color} $text-color - Text color (defaults to white)
/// @param {String} $size - Size variant (sm, md, lg)
/// @example scss
///   .btn-primary { @include button-style($color-primary); }
@mixin button-style($bg-color, $text-color: white, $size: md) {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: $bg-color;
  color: $text-color;
  border: none;
  border-radius: $border-radius-md;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  
  // Size variations with clear logic
  @if $size == sm {
    padding: $spacing-xs $spacing-sm;
    font-size: 0.875rem;
  } @else if $size == lg {
    padding: $spacing-sm $spacing-lg;
    font-size: 1.125rem;
  } @else {
    padding: $spacing-sm $spacing-md;
    font-size: 1rem;
  }
  
  &:hover {
    background-color: darken($bg-color, 8%);
    transform: translateY(-1px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
}

// ✅ Good: Media query mixin with mobile-first approach
@mixin respond-above($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "Breakpoint \`#{$breakpoint}\` not found in $breakpoints map.";
  }
}

// 4. NESTING BEST PRACTICES
// ✅ Good: Limited nesting depth, clear hierarchy
.card {
  background: white;
  border-radius: $border-radius-lg;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  
  // Limit nesting to 3-4 levels maximum
  &__header {
    padding: $spacing-lg;
    border-bottom: 1px solid #f3f4f6;
    
    .title {
      margin: 0 0 $spacing-xs 0;
      font-size: 1.25rem;
      font-weight: 600;
      color: $color-text-base;
    }
  }
  
  &__body {
    padding: $spacing-lg;
  }
  
  // Modifier classes at component level
  &--elevated {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  &--interactive {
    cursor: pointer;
    transition: transform 0.2s ease;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
}

// ❌ Avoid: Excessive nesting depth
// .navbar {
//   .container {
//     .nav-list {
//       .nav-item {
//         .nav-link {
//           .icon {
//             // Too deep - creates overly specific selectors
//           }
//         }
//       }
//     }
//   }
// }

// 5. PLACEHOLDER SELECTORS FOR COMMON PATTERNS
// ✅ Good: Reusable patterns without bloating CSS
%btn-base {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: $spacing-sm $spacing-md;
  border: none;
  border-radius: $border-radius-md;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

%clearfix {
  &::after {
    content: '';
    display: table;
    clear: both;
  }
}

%sr-only {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

// Usage of placeholders
.btn {
  @extend %btn-base;
  
  &--primary {
    background-color: $color-primary;
    color: white;
    
    &:hover {
      background-color: darken($color-primary, 8%);
    }
  }
}

.screen-reader-text {
  @extend %sr-only;
}

// 6. FUNCTION BEST PRACTICES
// ✅ Good: Single responsibility, clear naming, error handling
/// Converts pixels to rem units
/// @param {Number} $pixels - Pixel value to convert
/// @param {Number} $base-font-size - Base font size (default: 16px)
/// @return {Number} - Rem value
/// @example scss
///   font-size: px-to-rem(24px); // Returns 1.5rem
@function px-to-rem($pixels, $base-font-size: 16px) {
  @if unitless($pixels) {
    $pixels: $pixels * 1px;
  }
  
  @if unitless($base-font-size) {
    $base-font-size: $base-font-size * 1px;
  }
  
  @return $pixels / $base-font-size * 1rem;
}

/// Safely gets a color from the color palette
/// @param {String} $color-name - Name of color in palette
/// @param {Number} $shade - Shade number (100-900)
/// @return {Color} - Color value or fallback
@function color($color-name, $shade: 500) {
  $color-map: map-get($color-palette, $color-name);
  
  @if $color-map {
    $color-value: map-get($color-map, $shade);
    @if $color-value {
      @return $color-value;
    } @else {
      @warn "Shade \`#{$shade}\` not found for color \`#{$color-name}\`.";
      @return map-get($color-map, 500); // Fallback to base shade
    }
  } @else {
    @warn "Color \`#{$color-name}\` not found in color palette.";
    @return #000; // Fallback color
  }
}

// 7. PERFORMANCE AND MAINTAINABILITY BEST PRACTICES

// ✅ Good: Organized imports with clear dependencies
@import 'abstracts/variables';
@import 'abstracts/functions';
@import 'abstracts/mixins';
@import 'abstracts/placeholders';

@import 'base/reset';
@import 'base/typography';

@import 'layout/grid';
@import 'layout/header';

@import 'components/buttons';
@import 'components/cards';

// ✅ Good: Conditional compilation for different builds
$build-type: 'production' !default;

@if $build-type == 'development' {
  // Debug styles only in development
  .debug {
    outline: 2px solid red !important;
  }
  
  .debug * {
    outline: 1px solid blue !important;
  }
}

// ✅ Good: Consistent commenting and documentation
/**
 * BUTTON COMPONENT
 * 
 * A flexible button component following the design system guidelines.
 * Supports multiple variants, sizes, and states.
 * 
 * @example markup
 *   <button class="btn btn--primary btn--lg">Click me</button>
 * 
 * @modifiers
 *   --primary: Primary brand button
 *   --secondary: Secondary button style
 *   --outline: Outlined button variant
 *   --sm, --lg: Size variations
 * 
 * @states
 *   :hover: Elevated hover effect
 *   :disabled: Disabled state styling
 */

// ✅ Good: Error handling and warnings
@mixin validate-color($color) {
  @if type-of($color) != color {
    @error "Expected a color value, got #{type-of($color)}: #{$color}";
  }
}

// Usage validation
.alert {
  $alert-color: $color-primary;
  @include validate-color($alert-color);
  
  background-color: $alert-color;
}

// 8. TEAM COLLABORATION GUIDELINES

// ✅ Good: Consistent code formatting
.component {
  // Properties in logical order: positioning, display, dimensions, styling
  position: relative;
  display: flex;
  width: 100%;
  margin: $spacing-md;
  padding: $spacing-lg;
  background-color: $color-primary;
  border-radius: $border-radius-md;
  
  // Nested selectors after properties
  &__element {
    flex: 1;
  }
  
  // Modifiers after elements
  &--variant {
    background-color: $color-secondary;
  }
  
  // Media queries last
  @include respond-above(md) {
    padding: $spacing-xl;
  }
}`,
 

     "CSS Methodologies (BEM, SMACSS)":`
     //Html Example: A Button Component
     <!-- Block (standalone component) -->
<button class="btn">
  Default Button
</button>

<!-- Block with modifier (different version) -->
<button class="btn btn--primary">
  Primary Button
</button>

<!-- Block with element (part of the block) -->
<div class="card">
  <h2 class="card__title">Card Title</h2>
  <p class="card__body">Card content goes here...</p>
</div>

  //css Example:
    /* Block */
.btn {
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

/* Modifier */
.btn--primary {
  background-color: blue;
  color: white;
}

/* Block with its elements */
.card {
  border: 1px solid #ccc;
  padding: 20px;
}

.card__title {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.card__body {
  font-size: 1rem;
  color: #666;
}

     //Example: Folder Structure and Categories
styles/
├── base/            # Base rules (html, body, headings)
│   └── _base.scss
├── layout/          # Major layout components
│   ├── _header.scss
│   └── _footer.scss
├── modules/         # Reusable modules/components
│   ├── _button.scss
│   └── _card.scss
├── state/           # State rules (active, hidden)
│   └── _state.scss
└── theme/           # Theme variations
    └── _dark.scss
       
    //Example Module (button.scss):
       /* Base button style */
.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
}

/* Layout variation */
.l-header .btn {
  margin-right: 10px;
}

/* State rules */
.is-active {
  background-color: green;
}

/* Theme variation */
.t-dark .btn {
  background-color: #333;
  color: white;
}`,

      "CSS Frameworks Overview":`
      //Example 1: Bootstrap Grid System and Components
      <!-- Bootstrap 5 responsive layout -->
<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-8 col-lg-6">
            <!-- Bootstrap card component -->
            <div class="card shadow">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title mb-0">User Profile</h5>
                </div>
                <div class="card-body">
                    <p class="card-text">Bootstrap provides consistent styling with minimal custom CSS.</p>
                    <button class="btn btn-primary btn-lg me-2">Primary Action</button>
                    <button class="btn btn-outline-secondary">Secondary</button>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-4 col-lg-6">
            <!-- Bootstrap form components -->
            <form class="needs-validation" novalidate>
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" required>
                </div>
            </form>
        </div>
    </div>
</div>

//Example 2: Bootstrap Utility Classes
<!-- Bootstrap utility-first approach -->
<div class="d-flex justify-content-between align-items-center p-4 bg-light border rounded">
    <div class="text-primary fw-bold fs-4">Dashboard</div>
    <div class="d-flex gap-2">
        <span class="badge bg-success rounded-pill">Active</span>
        <button class="btn btn-sm btn-outline-primary">Settings</button>
    </div>
</div>

<!-- Responsive utilities -->
<div class="d-none d-md-block text-center py-5">
    <h2 class="display-4 text-muted">Hidden on mobile, visible on tablet+</h2>
</div>

//Example 1: Tailwind Utility-First Approach
  <!-- Tailwind utility composition -->
<div class="max-w-4xl mx-auto p-6">
    <!-- Custom card built with utilities -->
    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
        <div class="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
            <h2 class="text-white text-2xl font-bold mb-2">Modern Card Design</h2>
            <p class="text-blue-100">Built entirely with Tailwind utilities</p>
        </div>
        <div class="p-6">
            <div class="flex items-center justify-between mb-4">
                <div class="flex items-center space-x-4">
                    <div class="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                        <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                        </svg>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-900">John Doe</h3>
                        <p class="text-sm text-gray-500">Senior Developer</p>
                    </div>
                </div>
                <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                    Connect
                </button>
            </div>
        </div>
    </div>
</div>

// Example 2: Tailwind Responsive Design
   <!-- Tailwind responsive utilities -->
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
    <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <div class="w-full h-48 bg-gray-200 rounded-md mb-4 sm:h-32 lg:h-48"></div>
        <h3 class="text-lg font-semibold mb-2 text-gray-900">Responsive Card</h3>
        <p class="text-gray-600 text-sm lg:text-base">
            This card adapts to different screen sizes using Tailwind's responsive prefixes.
        </p>
        <div class="mt-4 flex flex-col sm:flex-row gap-2">
            <button class="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition-colors">
                Primary
            </button>
            <button class="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
                Secondary
            </button>
        </div>
    </div>
</div>

//Example 1: Foundation Grid and Components
   <!-- Foundation 6 semantic grid -->
<div class="grid-container">
    <div class="grid-x grid-padding-x">
        <div class="large-8 medium-12 cell">
            <!-- Foundation callout component -->
            <div class="callout primary">
                <h4>Foundation Callout</h4>
                <p>Foundation emphasizes semantic HTML and accessibility.</p>
            </div>
            
            <!-- Foundation reveal modal -->
            <button class="button primary large" data-open="example-modal">Open Modal</button>
            <div class="reveal" id="example-modal" data-reveal>
                <h3>Foundation Modal</h3>
                <p class="lead">Foundation provides robust JavaScript components.</p>
                <button class="close-button" data-close aria-label="Close modal" type="button">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
        <div class="large-4 medium-12 cell">
            <!-- Foundation form styling -->
            <form>
                <div class="grid-x grid-padding-x">
                    <div class="large-12 cell">
                        <label>Input Label
                            <input type="text" placeholder="Foundation input styling">
                        </label>
                    </div>
                    <div class="large-6 cell">
                        <label>Select Box
                            <select>
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                            </select>
                        </label>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>

// Example 2: Foundation Accessibility and Motion
<!-- Foundation accessibility features -->
<nav aria-label="Main navigation" role="navigation">
    <ul class="dropdown menu" data-dropdown-menu>
        <li>
            <a href="#" aria-haspopup="true">Products</a>
            <ul class="menu">
                <li><a href="#" tabindex="0">Web Development</a></li>
                <li><a href="#" tabindex="0">Mobile Apps</a></li>
            </ul>
        </li>
    </ul>
</nav>

<!-- Foundation Motion UI animations -->
<div class="card" data-animate="fade-in slide-in-up">
    <div class="card-divider">
        <h4>Animated Card</h4>
    </div>
    <div class="card-section">
        <p>Foundation includes Motion UI for smooth animations.</p>
        <button class="button success" data-animate="shake">Animate Button</button>
    </div>
</div>

//Example 1: Bulma Flexbox-Based Layout
<!-- Bulma container and columns -->
<div class="container">
    <div class="columns is-multiline">
        <div class="column is-8-desktop is-12-tablet">
            <!-- Bulma hero section -->
            <section class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">Bulma Framework</h1>
                        <h2 class="subtitle">Modern CSS framework based on Flexbox</h2>
                    </div>
                </div>
            </section>
            
            <!-- Bulma notification -->
            <div class="notification is-info is-light">
                <button class="delete"></button>
                Bulma provides clean, semantic class names for rapid development.
            </div>
        </div>
        
        <div class="column is-4-desktop is-12-tablet">
            <!-- Bulma card component -->
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="placeholder.jpg" alt="Placeholder">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">Card Title</p>
                            <p class="subtitle is-6">@username</p>
                        </div>
                    </div>
                    <div class="content">
                        Bulma's flexbox-based approach ensures consistent layouts.
                        <br>
                        <time datetime="2023-1-1">11:09 PM - 1 Jan 2023</time>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

//Example 2: Bulma Form and Navigation
<!-- Bulma navbar -->
<nav class="navbar is-primary" role="navigation">
    <div class="navbar-brand">
        <a class="navbar-item" href="#">
            <strong>Bulma Site</strong>
        </a>
        <a role="button" class="navbar-burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
        </a>
    </div>
    
    <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
            <a class="navbar-item">Home</a>
            <a class="navbar-item">Documentation</a>
        </div>
        <div class="navbar-end">
            <div class="navbar-item">
                <div class="buttons">
                    <a class="button is-primary is-inverted">
                        <strong>Sign up</strong>
                    </a>
                    <a class="button is-light">Log in</a>
                </div>
            </div>
        </div>
    </div>
</nav>

<!-- Bulma form elements -->
<div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
        <input class="input is-success" type="email" placeholder="Email input" value="alex@example.com">
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
        </span>
    </div>
    <p class="help is-success">This email is available</p>
</div>

//Example 1: Custom Framework Architecture
/* Custom framework: Base system */
:root {
    /* Design tokens */
    --color-primary: #007bff;
    --color-secondary: #6c757d;
    --color-success: #28a745;
    --color-danger: #dc3545;
    
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 3rem;
    
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    
    --border-radius: 0.375rem;
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

/* Custom grid system */
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--spacing-md);
}

.col-1 { grid-column: span 1; }
.col-2 { grid-column: span 2; }
.col-3 { grid-column: span 3; }
.col-6 { grid-column: span 6; }
.col-12 { grid-column: span 12; }

/* Custom components */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-sm) var(--spacing-md);
    border: none;
    border-radius: var(--border-radius);
    font-size: var(--font-size-base);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn--primary {
    background-color: var(--color-primary);
    color: white;
}

.btn--primary:hover {
    background-color: color-mix(in srgb, var(--color-primary) 90%, black);
    transform: translateY(-1px);
    box-shadow: var(--box-shadow);
}

.card {
    background: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
    overflow: hidden;
}

.card__header {
    padding: var(--spacing-md);
    border-bottom: 1px solid #e9ecef;
}

.card__body {
    padding: var(--spacing-md);
}

//Example 2: Custom Framework Usage
<!-- Using custom framework -->
<div class="container">
    <div class="grid">
        <div class="col-8">
            <div class="card">
                <div class="card__header">
                    <h2 class="text-xl font-semibold">Custom Framework Demo</h2>
                </div>
                <div class="card__body">
                    <p class="mb-md">This demonstrates a custom framework built for specific project needs.</p>
                    <div class="button-group">
                        <button class="btn btn--primary">Primary Action</button>
                        <button class="btn btn--secondary">Secondary</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="sidebar">
                <h3 class="text-lg mb-sm">Quick Stats</h3>
                <div class="stat-card">
                    <div class="stat-value">42</div>
                    <div class="stat-label">Active Users</div>
                </div>
            </div>
        </div>
    </div>
</div>

//Example 1: Framework Comparison Matrix
/* Framework selection criteria demonstration */

/* Bootstrap approach - Component-heavy */
.bootstrap-example {
    /* Pros: Rapid development, consistent design */
    /* Cons: Similar-looking sites, larger bundle */
}

/* Example: Bootstrap navbar */
.navbar.navbar-expand-lg.navbar-dark.bg-primary {
    /* Pre-built component with minimal customization */
}

/* Tailwind approach - Utility-first */
.tailwind-example {
    /* Pros: Highly customizable, smaller production bundle */
    /* Cons: Verbose HTML, learning curve */
}

/* Example: Tailwind navbar */
.bg-blue-600.text-white.px-4.py-2.flex.items-center.justify-between {
    /* Composed from utilities */
}

/* Custom approach - Project-specific */
.custom-example {
    /* Pros: Perfect fit, optimal performance */
    /* Cons: Development time, maintenance overhead */
}

/* Example: Custom navbar */
.navbar {
    background: var(--color-primary);
    color: white;
    padding: var(--spacing-md);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

//Example 2: Framework Selection Decision Tree
<!-- Framework selection examples based on project type -->

<!-- Startup/MVP: Bootstrap for rapid development -->
<div class="container-fluid">
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">MVP Feature</h5>
                    <p class="card-text">Quick prototype with Bootstrap components.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Custom Design: Tailwind for flexibility -->
<div class="max-w-6xl mx-auto p-6">
    <div class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg p-8 text-white">
        <h2 class="text-3xl font-bold mb-4">Unique Brand Design</h2>
        <p class="text-lg opacity-90">Tailwind enables custom designs while maintaining consistency.</p>
        <button class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Explore More
        </button>
    </div>
</div>

<!-- Enterprise: Foundation for complex requirements -->
<div class="grid-container">
    <div class="grid-x grid-padding-x">
        <div class="large-12 cell">
            <div class="callout warning">
                <h4>Enterprise Notice</h4>
                <p>Foundation provides enterprise-grade accessibility and customization options.</p>
            </div>
        </div>
    </div>
</div>

//Example 1: Progressive Framework Implementation
<!-- Phase 1: Core framework setup -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Progressive Implementation</title>
    
    <!-- Critical CSS inlined -->
    <style>
        /* Essential framework styles */
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        .btn { padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer; }
        .btn-primary { background: #007bff; color: white; }
    </style>
    
    <!-- Non-critical framework loaded asynchronously -->
    <link rel="preload" href="framework.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="framework.css"></noscript>
</head>
<body>
    <!-- Phase 1: Basic layout -->
    <div class="container">
        <header class="header">
            <h1>Progressive Implementation</h1>
            <button class="btn btn-primary">Get Started</button>
        </header>
    </div>
    
    <!-- Phase 2: Enhanced components loaded conditionally -->
    <script>
        // Load enhanced components when needed
        if ('IntersectionObserver' in window) {
            import('./enhanced-components.js');
        }
    </script>
</body>
</html>

// Example 2: Framework Customization Strategy
// Customization approach for Bootstrap/Foundation
// Custom variables before framework import
$primary: #your-brand-color;
$secondary: #your-secondary-color;
$font-family-base: 'Your Font', system-ui, sans-serif;
$border-radius: 8px;
$spacer: 1rem;

// Import only needed framework modules
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

// Core modules
@import '~bootstrap/scss/root';
@import '~bootstrap/scss/reboot';
@import '~bootstrap/scss/type';
@import '~bootstrap/scss/grid';

// Only needed components
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/card';
@import '~bootstrap/scss/navbar';

// Custom extensions
.btn-custom {
    @extend .btn;
    @extend .btn-primary;
    
    // Your custom styles
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba($primary, 0.3);
    }
}

// Utility extensions
.text-brand {
    color: $primary !important;
}

.bg-brand-gradient {
    background: linear-gradient(135deg, $primary 0%, lighten($primary, 10%) 100%);
}

//Example 3: Performance-Optimized Implementation
// Build process optimization
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');

module.exports = {
    // Framework optimization config
    plugins: [
        // Extract CSS for caching
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash].css'
        }),
        
        // Remove unused CSS (especially important for frameworks)
        new PurgeCSSPlugin({
            paths: glob.sync([
                path.join(__dirname, 'src/**/*.html'),
                path.join(__dirname, 'src/**/*.js'),
                path.join(__dirname, 'src/**/*.vue')
            ]),
            // Keep framework classes used dynamically
            safelist: [
                /^btn-/,
                /^nav-/,
                /^dropdown-/,
                'show', 'active', 'fade'
            ]
        })
    ],
    
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            // Framework customization
                            prependData: \`
                              @import "src/scss/variables";
                                @import "src/scss/mixins";
                            \`
                        }
                    }
                ]
            }
        ]
    }
};
`,

        "CSS Project: Building a Responsive Website": `
//Example 1: Project Structure and Planning
      /* project-variables.css - Design system foundation */
:root {
    /* Color palette */
    --color-primary-50: #eff6ff;
    --color-primary-500: #3b82f6;
    --color-primary-900: #1e3a8a;
    
    /* Typography scale */
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    
    /* Spacing system */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    
    /* Breakpoints (for documentation) */
    --breakpoint-sm: 640px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 1024px;
    --breakpoint-xl: 1280px;
    
    /* Component tokens */
    --button-padding: var(--space-2) var(--space-4);
    --button-radius: 0.375rem;
    --card-padding: var(--space-6);
    --section-padding: var(--space-12) 0;
}

/* Base reset and typography */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    color: #374151;
    background-color: #ffffff;
}

//Example 2: Component Architecture Planning
/* components/layout/container.css */
.container {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 var(--space-4);
}

@media (min-width: 640px) {
    .container {
        padding: 0 var(--space-6);
    }
}

/* components/ui/button.css */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--button-padding);
    border: none;
    border-radius: var(--button-radius);
    font-size: var(--font-size-sm);
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
}

.btn--primary {
    background-color: var(--color-primary-500);
    color: white;
}

.btn--primary:hover {
    background-color: var(--color-primary-600);
    transform: translateY(-1px);
}

/* components/layout/header.css */
.header {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    position: sticky;
    top: 0;
    z-index: 50;
}

.header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 4rem;
}

//Example 1: Card Component System
    /* Base card component */
.card {
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: box-shadow 0.2s ease;
}

.card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Card variants */
.card--elevated {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card--interactive {
    cursor: pointer;
    transform: translateY(0);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card--interactive:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Card structure */
.card__header {
    padding: var(--space-6);
    border-bottom: 1px solid #f3f4f6;
}

.card__body {
    padding: var(--space-6);
}

.card__footer {
    padding: var(--space-6);
    background: #f9fafb;
    border-top: 1px solid #f3f4f6;
}

/* Card media */
.card__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
}

.card__image--tall {
    height: 300px;
}

//Example 2: Navigation Component System
  /* Primary navigation */
.nav {
    display: flex;
    align-items: center;
    gap: var(--space-8);
}

.nav__brand {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--color-primary-500);
    text-decoration: none;
}

.nav__menu {
    display: none;
    align-items: center;
    gap: var(--space-6);
    list-style: none;
}

.nav__link {
    color: #6b7280;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s ease;
}

.nav__link:hover,
.nav__link--active {
    color: var(--color-primary-500);
}

/* Mobile navigation */
.nav__toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    padding: var(--space-2);
}

.nav__toggle-icon {
    width: 24px;
    height: 2px;
    background: #374151;
    position: relative;
    transition: background 0.3s ease;
}

.nav__toggle-icon::before,
.nav__toggle-icon::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: #374151;
    transition: transform 0.3s ease;
}

.nav__toggle-icon::before {
    top: -8px;
}

.nav__toggle-icon::after {
    bottom: -8px;
}

/* Mobile menu active state */
.nav--open .nav__toggle-icon {
    background: transparent;
}

.nav--open .nav__toggle-icon::before {
    transform: rotate(45deg) translate(6px, 6px);
}

.nav--open .nav__toggle-icon::after {
    transform: rotate(-45deg) translate(6px, -6px);
}

@media (min-width: 768px) {
    .nav__menu {
        display: flex;
    }
    
    .nav__toggle {
        display: none;
    }
}

   //Example 1: Advanced Responsive Grid System
      /* Fluid grid system */
.grid {
    display: grid;
    gap: var(--space-4);
    width: 100%;
}

/* Mobile-first responsive columns */
.grid--1 { grid-template-columns: 1fr; }
.grid--2 { grid-template-columns: 1fr; }
.grid--3 { grid-template-columns: 1fr; }
.grid--4 { grid-template-columns: 1fr; }

/* Tablet breakpoint */
@media (min-width: 768px) {
    .grid--2 { grid-template-columns: repeat(2, 1fr); }
    .grid--3 { grid-template-columns: repeat(2, 1fr); }
    .grid--4 { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop breakpoint */
@media (min-width: 1024px) {
    .grid--3 { grid-template-columns: repeat(3, 1fr); }
    .grid--4 { grid-template-columns: repeat(4, 1fr); }
}

/* Advanced responsive utilities */
.grid--auto {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
}

.grid--feature {
    grid-template-columns: 1fr;
}

@media (min-width: 768px) {
    .grid--feature {
        grid-template-columns: 2fr 1fr;
    }
}

/* Responsive spacing */
.section {
    padding: var(--space-8) 0;
}

@media (min-width: 768px) {
    .section {
        padding: var(--space-12) 0;
    }
}

@media (min-width: 1024px) {
    .section {
        padding: var(--space-16) 0;
    }
}


//Example 2: Container Queries and Fluid Typography
/* Container queries for component-level responsiveness */
.card-container {
    container-type: inline-size;
}

.responsive-card {
    padding: var(--space-4);
    display: flex;
    flex-direction: column;
}

@container (min-width: 300px) {
    .responsive-card {
        flex-direction: row;
        align-items: center;
        gap: var(--space-4);
    }
}

@container (min-width: 500px) {
    .responsive-card {
        padding: var(--space-6);
        gap: var(--space-6);
    }
}

/* Fluid typography */
.heading-1 {
    font-size: clamp(1.875rem, 4vw, 3rem);
    line-height: 1.2;
    margin-bottom: var(--space-4);
}

.heading-2 {
    font-size: clamp(1.5rem, 3vw, 2.25rem);
    line-height: 1.3;
    margin-bottom: var(--space-4);
}

.body-text {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.6;
    margin-bottom: var(--space-4);
}

/* Responsive images */
.responsive-image {
    width: 100%;
    height: auto;
    display: block;
}

.aspect-ratio-16-9 {
    aspect-ratio: 16 / 9;
    object-fit: cover;
}

.aspect-ratio-square {
    aspect-ratio: 1 / 1;
    object-fit: cover;
}`,
       "CSS Project: Building a Modern Website":`
       //1. Performance Optimization
    //Example 1: Critical CSS Strategy
      <!-- Critical CSS inlined in head -->
<head>
    <style>
        /* Critical above-the-fold styles */
        body { 
            font-family: system-ui, sans-serif; 
            margin: 0; 
            line-height: 1.6; 
        }
        .header { 
            background: white; 
            border-bottom: 1px solid #e5e7eb; 
            position: sticky; 
            top: 0; 
        }
        .hero { 
            min-height: 50vh; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
        }
        .container { 
            max-width: 1280px; 
            margin: 0 auto; 
            padding: 0 1rem; 
        }
        .btn { 
            display: inline-block; 
            padding: 0.5rem 1rem; 
            background: #3b82f6; 
            color: white; 
            text-decoration: none; 
            border-radius: 0.375rem; 
        }
    </style>
    
    <!-- Non-critical CSS loaded asynchronously -->
    <link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="styles.css"></noscript>
</head>

// Example 2: Performance-Optimized Components

/* GPU-accelerated animations */
.fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    will-change: opacity, transform;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Efficient hover effects */
.card-hover {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    will-change: transform;
}

.card-hover:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Optimized background images */
.hero-background {
    background-image: url('hero-mobile.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}

@media (min-width: 768px) {
    .hero-background {
        background-image: url('hero-tablet.webp');
    }
}

@media (min-width: 1024px) {
    .hero-background {
        background-image: url('hero-desktop.webp');
    }
}

/* Contain layout for performance */
.component-container {
    contain: layout style paint;
}

/* Efficient loading states */
.skeleton {
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: loading 1.5s infinite;
}

@keyframes loading {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
}
      
        //2.Browser Testing
        /* Browser-specific debugging utilities */
.debug-grid {
    background-image: 
        linear-gradient(rgba(255, 0, 0, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
}

/* Feature detection fallbacks */
.grid-container {
    /* Fallback: Flexbox */
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
}

.grid-item {
    flex: 1 1 300px;
    margin: 10px;
}

/* Enhanced with Grid support */
@supports (display: grid) {
    .grid-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
        margin: 0;
    }
    
    .grid-item {
        margin: 0;
    }
}

/* Browser-specific fixes */
/* Safari-specific */
@supports (-webkit-appearance: none) {
    .safari-fix {
        /* Safari button appearance fix */
        -webkit-appearance: none;
    }
}

/* Firefox-specific */
@-moz-document url-prefix() {
    .firefox-fix {
        /* Firefox-specific styling */
    }
}

/* IE/Edge specific (if still needed) */
@supports (-ms-ime-align: auto) {
    .ie-fix {
        /* IE/Edge specific fixes */
    }
}

    //3.Documentation
    //Example 1: Component Documentation
    /**
 * Button Component
 * 
 * A flexible button component with multiple variants and states.
 * 
 * @example
 * <button class="btn btn--primary">Primary Button</button>
 * <button class="btn btn--secondary btn--large">Large Secondary</button>
 * 
 * @variants primary, secondary, outline, ghost
 * @sizes small, default, large
 * @states default, hover, active, disabled, loading
 */

.btn {
    /* Base button styles */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: var(--space-2) var(--space-4);
    border: 1px solid transparent;
    border-radius: var(--radius-md);
    font-size: var(--text-sm);
    font-weight: 500;
    line-height: 1.5;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s ease;
    user-select: none;
    
    /* Prevent layout shift during loading */
    min-height: 2.5rem;
}

/**
 * Button Variants
 * 
 * @variant primary - Main call-to-action button
 * @variant secondary - Secondary actions
 * @variant outline - Outlined style for less emphasis
 * @variant ghost - Minimal styling, text-only appearance
 */

.btn--primary {
    background-color: var(--color-primary-500);
    color: white;
    border-color: var(--color-primary-500);
}

.btn--primary:hover {
    background-color: var(--color-primary-600);
    border-color: var(--color-primary-600);
}

.btn--secondary {
    background-color: var(--color-gray-500);
    color: white;
    border-color: var(--color-gray-500);
}

.btn--outline {
    background-color: transparent;
    color: var(--color-primary-500);
    border-color: var(--color-primary-500);
}

.btn--ghost {
    background-color: transparent;
    color: var(--color-primary-500);
    border-color: transparent;
}

/**
 * Button Sizes
 * 
 * @size small - Compact button for tight spaces
 * @size large - Prominent button for main actions
 */

.btn--small {
    padding: var(--space-1) var(--space-3);
    font-size: var(--text-xs);
    min-height: 2rem;
}

.btn--large {
    padding: var(--space-3) var(--space-6);
    font-size: var(--text-base);
    min-height: 3rem;
}

/**
 * Button States
 * 
 * @state disabled - Non-interactive state
 * @state loading - Shows loading indicator
 */

.btn:disabled,
.btn--disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
}

.btn--loading {
    position: relative;
    color: transparent;
}

.btn--loading::after {
    content: '';
    position: absolute;
    width: 1rem;
    height: 1rem;
    border: 2px solid currentColor;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

  //4. Deployment Strategies
  //Example 1:Progressive Loading Strategy
  <!-- Critical CSS and progressive enhancement -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Critical CSS inlined -->
    <style>
        /* Above-the-fold critical styles */
        body{font:16px/1.6 system-ui,sans-serif;margin:0;color:#374151}
        .header{background:#fff;border-bottom:1px solid #e5e7eb;position:sticky;top:0;z-index:50}
        .hero{min-height:50vh;display:flex;align-items:center;justify-content:center;text-align:center}
        .container{max-width:1280px;margin:0 auto;padding:0 1rem}
        .btn{display:inline-block;padding:.5rem 1rem;background:#3b82f6;color:#fff;text-decoration:none;border-radius:.375rem}
    </style>
    
    <!-- Preload critical resources -->
    <link rel="preload" href="/fonts/system-font.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/css/main.css" as="style">
    
    <!-- Load main CSS asynchronously -->
    <link rel="preload" href="/css/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="/css/main.css"></noscript>
    
    <!-- Load non-critical CSS with low priority -->
    <link rel="prefetch" href="/css/components.css">
    <link rel="prefetch" href="/css/utilities.css">
</head>
<body>
    <!-- Content loads with critical styles -->
    <header class="header">
        <div class="container">
            <nav><!-- Navigation --></nav>
        </div>
    </header>
    
    <section class="hero">
        <div class="container">
            <h1>Welcome to Our Site</h1>
            <a href="#" class="btn">Get Started</a>
        </div>
    </section>
    
    <!-- Lazy load additional styles -->
    <script>
        // Load remaining styles when page loads
        window.addEventListener('load', function() {
            const additionalCSS = [
                '/css/components.css',
                '/css/utilities.css'
            ];
            
            additionalCSS.forEach(href => {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                document.head.appendChild(link);
            });
        });
        
        // Service Worker for caching
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sw.js');
        }
    </script>
</body>
</html> `,

     };
  return examples[lessonTitle] || "/* Example code will be provided */"
}

const getAdvancedCSSCodeExplanation = (lessonTitle) => {
  const explanations = {
       "CSS Performance Optimization": `
**Code Explanation:**
This lesson covers best practices for writing performant CSS:

1. **Selector Optimization:**
- Use class selectors over complex descendant selectors.
- void universal selectors and excessive descendant combinators. 
- Keep specificity low for better performance.
2. **Property Optimization:**
- Avoid expensive properties like box-shadow and filters when possible.
3. **Animation Performance:**
- Animate transform and opacity for GPU acceleration.
- Animate only transform and opacity properties for best performance. 
- Use \`will-change\` to hint at upcoming animations. 
- Avoid animating layout properties like width, height, or position.

4. **Layout Performance:**
- Minimize layout thrashing by batching DOM changes.
- Use CSS Grid and Flexbox for modern, efficient layouts. 
- Avoid complex calc() operations and excessive positioning. 
- Use CSS containment to limit layout scope.

5. **Paint Performance:**
- Reduce repaints by avoiding costly styles.
- Use layer promotion wisely for elements that change frequently. 
- Prefer simple backgrounds and effects over complex ones.
6. **Loading Optimization:**
- CSS loading optimization focuses on reducing the time it takes for 
styles to be downloaded, parsed, and applied. This includes file size 
optimization, critical CSS inlining, and strategic loading of non-critical styles.
- Use critical CSS and lazy load non-critical styles.
7. **Best Practices:**
-CSS performance best practices combine all the previous concepts into a 
cohesive strategy. This includes proper organization, avoiding anti-patterns, 
and using modern CSS features efficiently.
- Keep CSS modular and avoid deep nesting.
**Why This Matters:**
Optimized CSS leads to faster, smoother user experiences.
`,

     "CSS Browser Compatibility":`
**Code Explanation:**
This lesson explains how to ensure CSS works across browsers:

1. **Vendor Prefixes:**
- Add prefixes like \`-webkit-\`, \`-moz-\`, \`ms-\`, \`-o-\` for older browser support.
-  They allow browsers to implement new features before they become standardized.

2. **Feature Detection:**
- Use \`@supports\` to apply styles only if supported.

3. **Polyfills:**
- Polyfills are JavaScript libraries that add support for modern CSS features 
in older browsers. 
- They detect missing functionality and provide equivalent behavior using supported 
technologies. 
- Common CSS polyfills include support for CSS Grid, Flexbox, and custom properties.

4. **Fallback Strategies:**
- Provide basic styles before advanced ones.

5. **Browser Testing:**
- Test on multiple browsers and devices.

6. **Cross-browser Issues:**
- Be aware of quirks and bugs.

7. **Modern CSS Support:**
- Use progressive enhancement and and graceful fallbacks.
**Why This Matters:**
Cross-browser compatibility ensures consistent user experience.`,

     "CSS Preprocessors (SASS/SCSS)": `
1. **Variables and Mixins**
*Code Explanation*
SASS variables store reusable values like colors, fonts, and spacing, while mixins are 
reusable blocks of CSS declarations that can accept parameters. Variables enable 
consistent theming and easy maintenance, while mixins eliminate code duplication 
and create flexible, parameterized style patterns. Both features significantly 
improve CSS maintainability and development efficiency.

2. **Nesting**
*Code Explanation*
SASS nesting allows you to write CSS selectors inside other selectors, mirroring HTML 
structure and improving code organization. However, excessive nesting can create overly 
specific selectors and performance issues. Best practice is to limit nesting to 3-4 levels 
and use the parent selector (&) effectively for pseudo-classes and modifiers.

3. **Functions**
*Code Explanation*
SASS functions are reusable pieces of code that return values, enabling complex 
calculations, color manipulations, and dynamic value generation. Built-in functions 
handle colors, math, strings, and lists, while custom functions solve specific design 
problems like fluid typography, spacing calculations, or color palette generation.

4. **Functions**
*Code Explanation*
SASS functions are reusable pieces of code that return values, enabling complex 
calculations, color manipulations, and dynamic value generation. Built-in functions 
handle colors, math, strings, and lists, while custom functions solve specific design 
problems like fluid typography, spacing calculations, or color palette generation.

5. **Operators**
*Code Explanation*
SASS operators enable mathematical calculations, string concatenations, and logical 
operations within stylesheets. Mathematical operators (+, -, *, /, %) work with numbers 
and units, comparison operators create conditional logic, and string operators manipulate 
text values. These operators enable dynamic styling, responsive calculations, and 
automated value generation.

6. **Control Directives**
*Code Explanation*
SASS control directives (\`@if\`, \`@else\`, \`@for\`, \`@each\`, \`@while\`) enable 
conditional logic, loops, and dynamic code generation. These directives allow you to 
create flexible, programmatic stylesheets that generate multiple variations, responsive 
utilities, and complex design systems automatically based on conditions and data 
structures.

7. **Best Practices**
*Code Explanation*
SASS best practices focus on writing maintainable, scalable, and performant stylesheets. 
This includes proper file organization, naming conventions, avoiding overly nested 
selectors, using mixins and functions effectively, and maintaining consistent coding 
standards. Following these practices ensures team collaboration and long-term project 
maintainability.`,

     "CSS Methodologies (BEM, SMACSS)":`
**Code Explanation:**
CSS methodologies provide structured approaches to writing maintainable and scalable CSS. 
Let's explore BEM and SMACSS with practical examples.

1. **BEM (Block, Element, Modifier)**
BEM is a naming convention that makes your CSS more readable and maintainable 
by clearly showing the relationships between components.

*Key Benefits*:
- Clear relationship between HTML and CSS
- Avoids specificity wars
- Self-documenting code
- Easy to scale and maintain

2. **SMACSS (Scalable and Modular Architecture for CSS)**
SMACSS is more about organizing your CSS into categories for better architecture.

*Key Benefits*:
- Logical separation of concerns
- Easier to locate styles
- Better scalability for large projects
- Clear distinction between layout and components

3. **Component Organization:**
- Keep styles modular and reusable.
4. **State Management:**
- Use modifier classes for different states.
5. **Theme Handling:**
- Separate theme styles for easy switching.
6. **Scalability:**
- Methodologies help large projects stay maintainable.
7. **Maintenance:**
- Clear naming reduces conflicts and bugs.

Aspect	BEM	SMACSS
Focus	Naming convention	Architectural organization
Best for	Component-level styling	Project-wide structure
Scalability	Good for medium projects	Excellent for large projects
Learning Curve	Easy to learn	Requires more planning

**Why This Matters:**
Methodologies improve CSS clarity, reusability, and team collaboration.
     `,

        "CSS Frameworks Overview":`
**Code Explanation:**
This lesson introduces popular CSS frameworks:

1. **Bootstrap Features:**
- Bootstrap is a comprehensive CSS framework that provides pre-built components, utility classes, 
and a responsive grid system. It emphasizes rapid development with consistent design patterns 
and extensive JavaScript components. Bootstrap uses a mobile-first approach and offers 
extensive customization options through Sass variables.

2. **Tailwind CSS:**
- Tailwind CSS is a utility-first framework that provides low-level utility classes for building 
custom designs. Instead of pre-built components, it offers atomic CSS classes that can be 
composed to create any design. Tailwind promotes a "never leave your HTML" approach and includes 
a powerful build system for optimization.

3. **Foundation:**
- Foundation is a professional-grade framework that emphasizes flexibility and semantic HTML. 
It provides a mobile-first grid system, modular components, and advanced features like motion 
UI and accessibility helpers. Foundation is designed for complex, large-scale applications 
requiring extensive customization.

4. **Bulma:**
- Bulma is a modern CSS framework based entirely on Flexbox, without any JavaScript dependencies. 
It uses a clean, readable class naming convention and provides a good balance between utility 
classes and pre-built components. Bulma emphasizes simplicity and modern CSS practices.

5. **Custom Frameworks:**
- Custom frameworks are tailored CSS systems built specifically for a project or organization's needs. 
They combine the best practices from existing frameworks while addressing specific design requirements, 
performance constraints, and team preferences. Custom frameworks offer maximum control but require 
more initial development time.

6. **Framework Selection:**
- Framework selection depends on project requirements, team expertise, design flexibility needs, 
and performance constraints. Consider factors like bundle size, customization options, component 
availability, learning curve, and long-term maintenance when choosing a framework.

7. **Implementation Strategies:**
- Framework implementation strategies involve planning how to integrate, customize, 
and optimize frameworks within your development workflow. This includes build processes, 
customization approaches, performance optimization, and team adoption strategies.
**Why This Matters:**
Frameworks \`speed\` up development and enforce consistency.
`,

   "CSS Project: Building a Responsive Website": `
1. **Project Planning**
**Code Explanation** 
Project planning for CSS involves defining the scope, target devices, performance requirements,
and technical constraints. This includes creating a style guide, establishing naming conventions, 
planning the component architecture, and setting up the development workflow for scalable CSS maintenance.

2.**Component Design**
**Code Explanation**
Component design focuses on creating reusable, maintainable CSS modules that can be composed to build 
complex interfaces. This involves establishing consistent patterns, managing component states, 
and ensuring components work well together while maintaining visual hierarchy and accessibility.

3. **Responsive Layout**
Code Explanation
Responsive layout implementation involves creating fluid, adaptable designs that work across all
device sizes. This includes strategic breakpoint selection, flexible grid systems, responsive typography, 
and touch-friendly interactions. Modern CSS features like Grid and Container Queries enhance responsive 
capabilities.`,

     "CSS Project: Building a Modern Website":`
1. **Performance Optimization**
**Code Explanation**
Performance optimization in CSS projects involves minimizing render-blocking resources, optimizing critical 
rendering path, reducing layout thrashing, and ensuring efficient loading strategies. 
This includes CSS splitting, lazy loading non-critical styles, and optimizing animations 
for smooth performance.

2. **Browser Testing**
**Code Explanation**
Browser testing for CSS projects ensures consistent visual and functional experience across different
browsers, devices, and screen sizes. This involves systematic testing methodologies, debugging tools 
usage, and implementing progressive enhancement strategies to handle browser differences gracefully.

3. **Documentation**
**Code Explanation**
CSS documentation involves creating clear, maintainable guides for your styles, components, 
and design system. This includes style guides, component libraries, usage examples, 
and maintenance guidelines that help team members understand and contribute to 
the codebase effectively.

4. **Deployment Strategies**
**Code Explanation**
CSS deployment strategies involve optimizing, bundling, and delivering styles efficiently 
to production environments. This includes build optimization, CDN implementation, 
caching strategies, and monitoring performance metrics to ensure optimal user experience 
across different network conditions. 
     `,
    };
  return explanations[lessonTitle] || "This code example demonstrates the main concepts of this lesson. Read the comments in the code for details.";
};

const getAdvancedCSSExercises = (lessonTitle) => {
  const exercises = {
    "CSS Performance Optimization": `
1. Optimize selectors:
- Use class selectors over universal or descendant
- Avoid deep selector nesting
- Keep specificity low

2. Improve animation performance:
- Use transform and opacity
- Avoid animating layout-affecting properties
- Use will-change with caution

3. Reduce layout thrashing:
- Minimize DOM reads/writes in loops
- Use requestAnimationFrame for smoother updates
- Avoid inline styles that affect layout frequently
`,
 "CSS Browser Compatibility": `
1. Add vendor prefixes:
- Apply -webkit-, -moz-, -ms- where necessary
- Use Autoprefixer for automation
- Support legacy browsers if needed

2. Use feature detection:
- Implement @supports for new features
- Provide fallbacks inside else conditions
- Detect flex/grid availability

3. Handle cross-browser issues:
- Test with multiple browsers
- Use normalize.css for resets
- Avoid browser-specific hacks
`,

"CSS Preprocessors (SASS/SCSS)": `
1. Use variables and mixins:
- Define color and font variables
- Create mixins for reusable buttons
- Use default values in mixins

2. Apply nesting and partials:
- Organize nested rules within a parent block
- Split code using _partials
- Import partials into main.scss

3. Use functions and control directives:
- Write a function to calculate rem spacing
- Use @if and @for for loops and conditions
- Combine with mixins for dynamic output
`,
"CSS Methodologies (BEM, SMACSS)": `
1. Apply BEM naming:
- Use block__element--modifier format
- Create consistent class names
- Avoid tag-based selectors

2. Structure with SMACSS:
- Separate layout, module, state, and theme
- Define base styles independently
- Use naming that reflects role

3. Manage component states:
- Create modifiers for active/disabled/hover
- Keep state styles lightweight
- Use JS to toggle state classes
`,
"CSS Frameworks Overview": `
1. Use Bootstrap for layout:
- Build a responsive grid with col-*
- Add spacing with utility classes
- Use navbars and cards

2. Build UI with Tailwind CSS:
- Apply utility-first classes
- Customize themes in config
- Combine with component-based structure

3. Compare frameworks:
- List pros/cons of Bootstrap, Tailwind, Bulma
- Choose framework based on project needs
- Consider community and learning curve
`,
"CSS Project: Building a Responsive Website": `
1. Plan the website:
- Sketch layout wireframes
- Identify key sections (hero, services, contact)
- Choose a mobile-first approach

2. Design reusable components:
- Build responsive navbar and footer
- Use Flexbox or Grid for layout
- Ensure accessibility and semantics

3. Implement responsive styles:
- Add media queries for breakpoints
- Use relative units for sizing
- Test on multiple screen sizes
`,
"CSS Project: Building a Modern Website": `
1. Optimize performance:
- Remove unused styles
- Minify CSS files
- Combine files to reduce requests

2. Conduct browser testing:
- Check site on Chrome, Firefox, Safari
- Use BrowserStack or native tools
- Fix rendering inconsistencies

3. Prepare for deployment:
- Document code and file structure
- Add README and changelog
- Use CI/CD tools or GitHub Pages for deployment
`,
        }
  return exercises[lessonTitle] || "1. Advanced exercise\n3. Project work"
}

module.exports ={
    getAdvancedCSSLessonConcepts,
    getAdvancedCSSCodeExample,
    getAdvancedCSSCodeExplanation, 
    getAdvancedCSSExercises,
};