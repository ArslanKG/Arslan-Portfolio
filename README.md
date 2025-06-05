# 🚀 Arslan Portfolio

A modern, responsive portfolio website showcasing the work and skills of **Arslan Kemal GÜNDÜZ**, a Senior Software Developer.

![Portfolio Screenshot](public/images/Developer.png)

## ✨ Features

- 🌐 **Bilingual Support**: Turkish and English language options
- 📱 **Responsive Design**: Optimized for all devices and screen sizes
- 🎨 **Modern UI/UX**: Clean, professional design with smooth animations
- 🌙 **Dark Theme**: Elegant dark color scheme with cyan accents
- ⚡ **Fast Performance**: Built with modern web technologies
- 🎯 **Interactive Projects**: Live demos and interactive elements
- 🔍 **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS + Custom CSS
- **Graphics**: WebGL2 & GLSL for interactive effects
- **Icons**: React Icons
- **Build Tool**: Vite

### Development
- **Package Manager**: npm
- **Linting**: ESLint with TypeScript support
- **Type Checking**: TypeScript 5.1+
- **Code Quality**: Prettier, ESLint rules

## 🎯 Sections

### 🏠 Home
- Personal introduction and hero section
- Quick navigation to main sections
- Animated background effects

### 👨‍💻 About
- Professional background and expertise
- Technical skills and experience overview
- Personal development philosophy

### 💼 Experience
- **Senior Software Developer** at Turkcell (2022 - Present)
- **Software Development Specialist** at Garanti BBVA (2020 - 2022)
- **Full Stack Developer** at Trendyol (2018 - 2020)
- **Software Engineer** at Vodafone (2016 - 2018)

### 🚀 Featured Projects

#### 1. **404 Superman Page**
- Custom 404 error page with Superman theme
- Animated stars and interactive elements
- **Tech**: HTML, CSS, JavaScript
- [Live Demo](/NotFound) | [CodePen](https://codepen.io/ArslanKG/pen/vYodGOd)

#### 2. **Animated Clock**
- Real-time animated digital clock
- Smooth digit transitions and controls
- **Tech**: HTML, CSS, JavaScript, React, TypeScript
- [Live Demo](/projects/animatedClock) | [CodePen](https://codepen.io/ArslanKG/pen/xxvWPMQ)

#### 3. **Reflection Effect**
- Interactive 3D reflection sphere
- Mouse-responsive WebGL2 animations
- **Tech**: TypeScript, WebGL2, GLSL, CSS
- [Live Demo](/projects/reflectionProject) | [CodePen](https://codepen.io/atzedent/pen/PovvpvR)

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
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Lint code
npm run lint
```

## 🏗️ Project Structure

```
arslan-portfolio/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Projects.tsx
│   │   └── ...
│   ├── contexts/           # React contexts
│   │   └── LanguageContext.tsx
│   ├── data/              # Static data and content
│   │   ├── aboutData.ts
│   │   ├── experienceData.ts
│   │   └── projectsData.ts
│   ├── projects/          # Individual project components
│   │   ├── animatedClock/
│   │   └── ReflectionProject/
│   ├── routes/            # Route components
│   │   ├── _index.tsx
│   │   └── projects.$projectId.tsx
│   └── styles/            # Global styles
├── public/                # Static assets
│   ├── images/
│   └── styles/
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Navy (#0a192f)
- **Secondary**: Light Navy (#112240)
- **Accent**: Green (#64ffda)
- **Text**: Slate variants (#8892b0, #a8b2d1, #ccd6f6)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Features**: ss03, cv02, cv11
- **Responsive**: Fluid typography scales

### Components
- **Modern Card Design**: Hover effects and smooth transitions
- **Interactive Elements**: Buttons, links with micro-animations
- **Responsive Grid**: Mobile-first approach

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
- Colors
- Typography
- Spacing
- Animations

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Arslan Kemal GÜNDÜZ**
- 💼 Senior Software Developer
- 🌐 Portfolio: [Live Demo](http://localhost:3000)
- 💻 GitHub: [@ArslanKG](https://github.com/ArslanKG)
- 🎨 CodePen: [@ArslanKG](https://codepen.io/ArslanKG)

---

⭐ **If you like this project, please give it a star!** ⭐

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
