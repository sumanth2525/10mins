# 3D Immersive Portfolio Website

A futuristic, premium 3D portfolio website built with Next.js, Three.js, and GSAP. Features award-winning design similar to Apple, Awwwards, and Stripe with immersive WebGL experiences.

## ✨ Features

- 🎨 **Futuristic Design** - Dark mode with neon blue/purple accents
- 🎭 **3D WebGL Scenes** - Interactive Three.js objects that react to mouse movement
- ✨ **Smooth Animations** - GSAP-powered cinematic transitions
- 📱 **Fully Responsive** - Optimized for desktop and mobile
- ⚡ **High Performance** - Lazy loading and optimized rendering
- 🎯 **Custom Cursor** - Immersive cursor effects (desktop only)
- 🧭 **Smooth Navigation** - Fixed navigation with active section highlighting

## 🧩 Sections

1. **Hero Section** - Full-screen 3D scene with floating objects and animated name reveal
2. **About/Mission** - 3D avatar with line-by-line text animation
3. **Skills** - Interactive 3D cards with hover effects and expandable details
4. **Projects** - Horizontal scroll gallery with 3D tiles and modal previews
5. **Experience** - 3D timeline with floating milestones
6. **Contact** - Immersive form with 3D social icons

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **Three.js / React Three Fiber** - 3D graphics and WebGL
- **@react-three/drei** - Useful helpers for React Three Fiber
- **GSAP** - Animation library for smooth transitions
- **TypeScript** - Type safety
- **CSS3** - Glassmorphism and modern styling

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── 3d/                 # 3D components
│   │   ├── FloatingObject.tsx
│   │   └── Avatar3D.tsx
│   ├── Navigation.tsx      # Fixed navigation
│   ├── CustomCursor.tsx    # Custom cursor effect
│   ├── SkillCard.tsx       # Skill card component
│   └── ProjectTile.tsx     # Project tile component
├── hooks/
│   └── useMouse.ts         # Mouse position hook
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** - Edit `components/sections/HeroSection.tsx` to change name and title
2. **About Section** - Update mission statement in `components/sections/AboutSection.tsx`
3. **Skills** - Modify skills data in `components/sections/SkillsSection.tsx`
4. **Projects** - Update projects array in `components/sections/ProjectsSection.tsx`
5. **Experience** - Edit timeline in `components/sections/ExperienceSection.tsx`
6. **Contact** - Update social links in `components/sections/ContactSection.tsx`

### Color Scheme

Edit CSS variables in `app/globals.css`:

```css
:root {
  --bg-primary: #0a0a0a;
  --accent-blue: #00d4ff;
  --accent-purple: #8b5cf6;
  /* ... */
}
```

## 🎯 Performance Tips

- 3D scenes are optimized with `dpr={[1, 2]}` for better performance
- Lazy loading is implemented for sections
- Custom cursor is disabled on mobile devices
- Images should be optimized before adding to projects

## 📝 License

This project is open source and available for personal and commercial use.

## 🙏 Credits

Built with inspiration from Apple, Awwwards, and Stripe design patterns.

