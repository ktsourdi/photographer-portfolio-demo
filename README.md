# 🌌 AstroGallery Demo - Photographer Portfolio

A modern, responsive astrophotography portfolio built with Next.js 15, TypeScript, and Tailwind CSS. This demo showcases modern web development skills through a beautiful cosmic-themed design.

## 🚀 **Live Demonstrations**

### **Demo Site**
**Try the demo:** [photographer-portfolio-demo.vercel.app](https://photographer-portfolio-demo.vercel.app/)  
*Interactive demo of this exact codebase*

### **Production Client Site**  
**Real-world application:** [Cosmic Lens - www.cosmiclens.gr](https://www.cosmiclens.gr/)  
*Professional astrophotography portfolio built for a client*

![AstroGallery Demo](https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1200&h=600&fit=crop)

## ✨ Features

### 🎨 Frontend
- **Modern Design**: Dark cosmic theme with gradient accents
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout
- **Interactive Gallery**: Filterable photo grid with modal viewer
- **Optimized Images**: Next.js Image component for performance
- **Accessibility**: Semantic HTML and keyboard navigation

### 🛠 Technical Features
- **Next.js 15**: Latest App Router with React Server Components
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Responsive Design**: Mobile-first approach
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/ktsourdi/photographer-portfolio-demo.git
cd photographer-portfolio-demo
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start the development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
Visit `http://localhost:3000` to see the portfolio in action.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Main page component
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar with mobile menu
│   ├── Hero.tsx           # Hero section with animated background
│   ├── Gallery.tsx        # Photo gallery with filtering
│   ├── About.tsx          # About section showcasing skills
│   ├── Contact.tsx        # Contact section with social links
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility libraries
│   └── data.ts           # Sample photography data
└── types/                # TypeScript type definitions
    └── index.ts          # Photo and component types
```

## 🎯 Key Components

### Navigation
- Responsive navigation with mobile hamburger menu
- Smooth scroll to sections
- Glass morphism effect on scroll

### Hero Section
- Animated starfield background
- Gradient text effects
- Call-to-action buttons
- Floating star elements

### Gallery
- Category-based filtering
- Responsive grid layout
- Modal viewer with photo details
- Smooth animations and transitions

### About Section
- Skills showcase with icons
- Technology stack display
- Feature highlights
- Professional presentation

### Contact Section
- Social media links
- Project information
- Professional contact options

## 🎨 Design System

### Colors
- **Cosmic Black**: `#0a0a0a` - Primary background
- **Cosmic Dark**: `#111111` - Secondary background
- **Cosmic Purple**: `#8b5cf6` - Primary accent
- **Cosmic Blue**: `#3b82f6` - Secondary accent
- **Cosmic Cyan**: `#06b6d4` - Tertiary accent

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace Font**: JetBrains Mono (Google Fonts)

### Effects
- **Glass Morphism**: Backdrop blur with transparency
- **Gradient Text**: Multi-color gradient text effects
- **Hover Animations**: Scale and glow effects
- **Smooth Transitions**: 300ms duration for interactions

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. **Deploy to Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Vercel will auto-detect Next.js and deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🛠 Customization

### Adding Your Own Photos
1. Replace the sample data in `src/lib/data.ts`
2. Update image URLs to your own photos
3. Modify categories and descriptions as needed

### Changing Colors
1. Update the color palette in `tailwind.config.js`
2. Modify CSS custom properties in `globals.css`
3. Update component styles as needed

### Adding New Sections
1. Create new components in `src/components/`
2. Import and add to the main page in `src/app/page.tsx`
3. Update navigation links in `Navigation.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **Tree Shaking**: Unused code elimination
- **Minification**: CSS and JavaScript minification
- **Caching**: Static asset caching

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/photographer-portfolio-demo/issues).

## 🌐 Live Deployments

### **Demo Version**
**[photographer-portfolio-demo.vercel.app](https://photographer-portfolio-demo.vercel.app/)**  
Experience this exact codebase in action with interactive features and responsive design.

### **Production Client Site**
**[Cosmic Lens](https://www.cosmiclens.gr/)**  
This portfolio template was adapted to create a professional astrophotography website, showcasing real-world application and client satisfaction.

## 📞 Contact

- **GitHub**: [@ktsourdi](https://github.com/ktsourdi)
- **LinkedIn**: [Kyros Tsourdinis](https://www.linkedin.com/in/kyros-tsourdinis/)
- **Demo Site**: [photographer-portfolio-demo.vercel.app](https://photographer-portfolio-demo.vercel.app/)
- **Client Website**: [Cosmic Lens](https://www.cosmiclens.gr/)

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS** 