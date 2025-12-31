# Custom SVG Illustrations for Nest Tech AI Solutions

This directory contains custom-designed SVG illustrations created specifically for the Nest Tech AI Solutions website. All SVGs follow the brand's green color scheme (#166534, #22c55e) and are optimized for web use.

## Available SVGs

### 1. Hero Illustration (`hero-illustration.svg`)
- **Purpose**: Main landing page hero section
- **Features**: Animated coding elements, floating particles, technology icons
- **Usage**: Perfect for homepage hero sections, about page headers
- **Animation**: Includes CSS animations for cursor blinking and floating elements

### 2. Web Development Service (`services-web-dev.svg`)
- **Purpose**: Web development service representation
- **Features**: Browser mockup, code snippets, technology stack icons
- **Usage**: Services page, web development portfolio sections
- **Technologies**: HTML, CSS, JavaScript, React representations

### 3. Mobile Development (`services-mobile.svg`)
- **Purpose**: Mobile app development illustration
- **Features**: Multiple phone mockups, iOS/Android icons, cross-platform indicators
- **Usage**: Mobile development services, portfolio showcases
- **Platforms**: iOS, Android, React Native, Flutter

### 4. Cloud & DevOps (`services-cloud.svg`)
- **Purpose**: Cloud infrastructure and DevOps services
- **Features**: Cloud formations, server racks, data flow animations
- **Usage**: Cloud services pages, infrastructure solutions
- **Technologies**: AWS, Docker, Kubernetes, CI/CD

### 5. AI & Machine Learning (`services-ai.svg`)
- **Purpose**: AI/ML services and capabilities
- **Features**: Neural network brain, data flow, AI processing nodes
- **Usage**: AI services, machine learning solutions pages
- **Technologies**: TensorFlow, PyTorch, Neural Networks

### 6. Team Collaboration (`team-collaboration.svg`)
- **Purpose**: Team and collaboration representation
- **Features**: Team member avatars, communication lines, productivity indicators
- **Usage**: About page, team sections, collaboration features
- **Tools**: Slack, Jira, GitHub integrations

### 7. Success Metrics (`success-metrics.svg`)
- **Purpose**: Dashboard and analytics visualization
- **Features**: Charts, graphs, KPI indicators, progress bars
- **Usage**: Success stories, metrics display, dashboard previews
- **Metrics**: Client satisfaction, project completion, growth charts

### 8. Innovation Lab (`innovation-lab.svg`)
- **Purpose**: Research and development showcase
- **Features**: Innovation workstations, future tech previews, R&D metrics
- **Usage**: Innovation pages, technology research sections
- **Technologies**: Quantum computing, VR/AR, IoT, Blockchain

## Usage Examples

### In Angular Components

```typescript
// In your component template
<div class="hero-section">
  <img src="assets/svg/hero-illustration.svg" 
       alt="Nest Tech AI Solutions - Digital Innovation" 
       class="hero-image">
</div>

// For services
<div class="service-card">
  <img src="assets/svg/services-web-dev.svg" 
       alt="Web Development Services" 
       class="service-icon">
</div>
```

### As Background Images (CSS)

```scss
.hero-background {
  background-image: url('/assets/svg/hero-illustration.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
```

### Inline SVG (for animations)

```html
<!-- Copy SVG content directly for better animation control -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
  <!-- SVG content here -->
</svg>
```

## Customization

### Colors
All SVGs use CSS custom properties and can be customized:
- Primary: `#166534` (Dark Green)
- Secondary: `#22c55e` (Light Green)
- Accent: `#4ade80` (Bright Green)

### Animations
SVGs include built-in animations:
- Floating particles
- Data flow indicators
- Progress animations
- Pulse effects

### Responsive Design
All SVGs are:
- Vector-based (scalable)
- Optimized for different screen sizes
- Accessible with proper alt text
- Performance optimized

## File Sizes
- Average size: 3-8KB per SVG
- Optimized for web delivery
- No external dependencies
- Fast loading times

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE11+ support
- Mobile browsers
- Print-friendly

## Integration Tips

1. **Performance**: Use `loading="lazy"` for images below the fold
2. **Accessibility**: Always include meaningful alt text
3. **Responsive**: Use CSS to control sizing
4. **Animations**: Consider `prefers-reduced-motion` for accessibility
5. **Caching**: SVGs are cacheable and reusable

## Brand Consistency
All illustrations maintain:
- Consistent color palette
- Professional design language
- Technology-focused themes
- Modern, clean aesthetics
- Brand alignment with Nest Tech AI Solutions identity
