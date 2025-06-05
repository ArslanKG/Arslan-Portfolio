# 🚀 Arslan Portfolio

A modern, responsive portfolio website showcasing the work and skills of **Arslan Kemal GÜNDÜZ**, a Senior Software Developer. Built with cutting-edge technologies and best practices.

![Portfolio Screenshot](public/images/Developer.png)

## ✨ Features

- 🌐 **Bilingual Support**: Turkish and English language options with smooth transitions
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 🌙 **Dark Theme**: Elegant dark color scheme with cyan accents
- ⚡ **Fast Performance**: Built with modern web technologies and optimizations
- 🎯 **Interactive Projects**: Live demos and interactive WebGL elements
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML
- ♿ **Accessibility**: WCAG compliant with proper ARIA labels
- 🧹 **Clean Code**: Following SOLID principles and DRY methodology

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5.1+ with optimized bundling
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS + Custom CSS with design system
- **Graphics**: WebGL2 & GLSL for interactive 3D effects
- **Icons**: Custom reusable SVG components with React Icons
- **State Management**: React Context API with custom hooks

### Architecture & Code Quality
- **Type Safety**: Full TypeScript with strict mode
- **Utilities**: Custom helper functions and constants
- **Component Library**: Reusable UI components with proper props
- **Performance**: Debounced functions, memoization, lazy loading
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **Clean Code**: DRY principles, no magic numbers, proper abstractions

### Development Tools
- **Package Manager**: npm
- **Linting**: ESLint with TypeScript support
- **Type Checking**: TypeScript 5.1+
- **Code Quality**: Prettier, ESLint rules
- **Build Optimization**: Vite with tree shaking and code splitting

## 🏗️ Architecture

### 📁 Project Structure

```
arslan-portfolio/
├── app/
│   ├── components/              # Reusable UI components
│   │   ├── ui/                 # Generic UI components
│   │   │   └── Icons.tsx       # SVG icon components
│   │   ├── About.tsx           # About section component
│   │   ├── Experience.tsx      # Experience section component
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Projects.tsx        # Projects showcase
│   │   └── ...
│   ├── contexts/               # React contexts
│   │   └── LanguageContext.tsx # I18n language context
│   ├── data/                   # Static data and content
│   │   ├── aboutData.ts        # About section data
│   │   ├── experienceData.ts   # Work experience data
│   │   ├── projectsData.ts     # Project information
│   │   └── headerData.ts       # Header/navigation data
│   ├── projects/               # Individual project components
│   │   ├── animatedClock/      # Animated clock project
│   │   └── ReflectionProject/  # WebGL reflection effect
│   ├── routes/                 # Route components
│   │   ├── _index.tsx          # Homepage route
│   │   └── projects.$projectId.tsx # Dynamic project routes
│   ├── utils/                  # Utility functions
│   │   ├── constants.ts        # Application constants
│   │   └── helpers.ts          # Helper functions
│   └── styles/                 # Component-specific styles
├── public/                     # Static assets
│   ├── images/                 # Image assets
│   └── styles/                 # Global styles
├── tailwind.config.ts          # Tailwind configuration
├── vite.config.ts             # Vite build configuration
├── tsconfig.json              # TypeScript configuration
└── package.json
```

### 🎯 Key Components

#### **Navigation System**
- Type-safe section navigation with constants
- Dynamic active state management
- Smooth scroll animations
- Mobile-responsive design

#### **Language System**
- Context-based i18n implementation
- Smooth transition animations
- Type-safe language switching
- Persistent language preference

#### **Project Showcase**
- Interactive project cards
- Live demo integrations
- Technology tag system
- Responsive image galleries

## 🎨 Design System

### Colors
- **Primary**: Navy (#0a192f)
- **Secondary**: Light Navy (#112240)
- **Accent**: Green (#64ffda)
- **Text**: Slate variants (#8892b0, #a8b2d1, #ccd6f6)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Features**: ss03, cv02, cv11 for enhanced readability
- **Responsive**: Fluid typography with proper scaling

### Components
- **Card Design**: Hover effects with smooth transitions
- **Interactive Elements**: Micro-animations and feedback
- **Responsive Grid**: Mobile-first approach with breakpoints
- **Icon System**: Consistent SVG icons with proper accessibility

## 🚀 Quick Start

### Prerequisites
- Node.js 20.0.0 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ArslanKG/Arslan-Portfolio.git
   cd Arslan-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server with HMR

# Production
npm run build        # Build optimized production bundle
npm start           # Start production server

# Code Quality
npm run typecheck   # Run TypeScript type checking
npm run lint        # Run ESLint code analysis

# Testing
npm test           # Run test suite (when implemented)
```

## 🎯 Featured Sections

### 🏠 **Homepage**
- Hero section with animated background
- Quick navigation to main sections
- Responsive layout with smooth scrolling

### 👨‍💻 **About**
- Professional background and expertise
- Technical skills overview
- Development philosophy

### 💼 **Experience**
- **Senior Software Developer** at Turkcell (2022 - Present)
- **Software Development Specialist** at Garanti BBVA (2020 - 2022)
- **Full Stack Developer** at Trendyol (2018 - 2020)
- **Software Engineer** at Vodafone (2016 - 2018)

### 🚀 **Featured Projects**

#### 1. **404 Superman Page**
- Custom 404 error page with Superman theme
- Animated stars and interactive elements
- **Tech**: HTML, CSS, JavaScript
- [Live Demo](/NotFound) | [CodePen](https://codepen.io/ArslanKG/pen/vYodGOd)

#### 2. **Animated Clock**
- Real-time animated digital clock with smooth transitions
- Start/stop controls with state management
- **Tech**: React, TypeScript, CSS animations
- [Live Demo](/projects/animatedClock) | [CodePen](https://codepen.io/ArslanKG/pen/xxvWPMQ)

#### 3. **Reflection Effect**
- Interactive 3D reflection sphere using WebGL2
- Mouse-responsive animations with GLSL shaders
- **Tech**: TypeScript, WebGL2, GLSL, React
- [Live Demo](/projects/reflectionProject) | [CodePen](https://codepen.io/atzedent/pen/PovvpvR)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```bash
# Optional: Analytics tracking ID
ANALYTICS_ID=your_analytics_id

# Optional: Contact form endpoint
CONTACT_FORM_ENDPOINT=your_endpoint
```

### Tailwind Configuration
Customize the design system in `tailwind.config.ts`:
- Custom color palette
- Typography scales
- Animation keyframes
- Component utilities

### TypeScript Configuration
The project uses strict TypeScript configuration:
- Strict mode enabled
- Path aliases configured
- Type-only imports enforced

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `build/client` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build/client`

## 🔍 Performance Optimizations

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Lazy loading with proper sizing
- **Bundle Analysis**: Tree shaking and dead code elimination
- **Caching**: Proper cache headers and service worker ready
- **Accessibility**: Semantic HTML and ARIA compliance

## 🧪 Code Quality

### Best Practices Implemented
- **DRY Principle**: No code duplication
- **SOLID Principles**: Clean architecture
- **Type Safety**: Full TypeScript coverage
- **Error Handling**: Proper error boundaries
- **Performance**: Memoization and optimization
- **Accessibility**: WCAG 2.1 compliance

### Utility Functions
- **Constants Management**: Centralized constants
- **Helper Functions**: Reusable utility functions
- **Type Guards**: Runtime type checking
- **Performance Utils**: Debouncing and throttling

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style and patterns
- Add proper TypeScript types
- Include accessibility considerations
- Write meaningful commit messages
- Test changes across different devices

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Arslan Kemal GÜNDÜZ**
- 💼 Senior Software Developer
- 🌐 Portfolio: [Live Demo](Soon)
- 💻 GitHub: [@ArslanKG](https://github.com/ArslanKG)
- 🎨 CodePen: [@ArslanKG](https://codepen.io/ArslanKG)
- 💼 LinkedIn: [Arslan Kemal GÜNDÜZ](https://www.linkedin.com/in/arslan-kemal-g%C3%BCnd%C3%BCz-8a2608194/)

---

⭐ **If you like this project, please give it a star!** ⭐

*Built with ❤️ using React, TypeScript, Tailwind CSS, and modern web technologies*

## 🙏 Acknowledgments

- **Inter Font**: Google Fonts for beautiful typography
- **Tailwind CSS**: For rapid and consistent styling
- **React Icons**: For comprehensive icon library
- **Vite**: For lightning-fast development experience
- **TypeScript**: For type safety and better developer experience
