# Portfolio Website

A modern, responsive portfolio website built with React.js to showcase my projects, skills, and certifications.

## 🚀 Features

- **Modern UI/UX Design**
  - Clean and professional layout
  - Responsive design for all devices
  - Smooth animations and transitions
  - Dark theme with accent colors

- **Sections**
  - Hero section with animated typing effect
  - Projects showcase with detailed cards
  - About section highlighting skills and experience
  - Certifications section with zoomable certificates
  - Contact form for easy communication
  - Resume page with zoom controls

- **Interactive Elements**
  - Smooth scrolling navigation
  - Animated project cards
  - Social media links
  - Zoom controls for resume viewing
  - Responsive navigation menu

## 🛠️ Technologies Used

- **Frontend**
  - React.js
  - React Router for navigation
  - Styled Components & Emotion for styling
  - React Scroll for smooth scrolling
  - React Icons for social media icons
  - React Animate On Scroll for animations

## 📦 Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies
```bash
cd portfolio
npm install
```

3. Start the development server
```bash
npm start
```

4. Build for production
```bash
npm run build
```

## 🎨 Customization

### Adding Projects
Edit `src/data/ProjectData.js` to add or modify projects:
```javascript
{
  img: "/project-image.png",
  title: "Project Title",
  description: "Project description",
  tech_stack: ["React", "Node.js", "MongoDB"],
  github_url: "https://github.com/yourusername/project",
}
```

### Adding Certifications
Edit `src/data/CertificateData.js` to add or modify certifications:
```javascript
{
  img: "/Certifications/certificate.png",
  title: "Certificate Title",
  description: "Certificate description",
  date: "Month Year",
  issuer: "Issuing Organization",
}
```

### Styling
- Main styles are in `src/index.css`
- Component-specific styles use styled-components
- Color scheme can be modified in the CSS variables

## 🌐 Deployment

The portfolio is deployed using GitHub Pages. To deploy:

1. Update the homepage in `package.json`
```json
"homepage": "https://Anj2805.github.io/portfolio"
```

2. Deploy to GitHub Pages
```bash
npm run deploy
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations from [React Animate On Scroll](https://dbramwell.github.io/react-animate-on-scroll/)
- Typing animation from [React Type Animation](https://www.npmjs.com/package/react-type-animation)
