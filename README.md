# Serhat Barış Aydin Portfolio Website

This is the personal portfolio website of Serhat Barış Aydin, built with React, TypeScript, and Vite. The site showcases skills, projects, experience, and contact information with modern UI and interactive animations.

## Features

- **About Me**: Animated introduction and biography.
- **Skills**: Frontend and backend skills, technologies, and tools.
- **Projects**: Interactive cards with project details and links.
- **Experience**: Work and internship history.
- **Contact**: EmailJS-powered contact form.
- **Theme Switcher**: Light/dark mode support.
- **Animated Backgrounds**: Custom particle and Lottie animations.
- **Responsive Design**: Mobile and desktop friendly.

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Lottie](https://lottiefiles.com/)
- [OGL](https://github.com/oframe/ogl) (WebGL particles)
- [EmailJS](https://www.emailjs.com/) (Contact form)
- [GSAP](https://gsap.com/) (SplitText animations)

## Getting Started

1. **Clone the repository:**
   ```sh
   git clone https://github.com/SerhatBarisAydin/portfolio-Website.git
   cd portfolio-Website
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm run dev
   ```

4. **Open [http://localhost:5173](http://localhost:5173) in your browser.**

## Project Structure

```
src/
  App.tsx
  main.tsx
  index.css
  assets/
    images/
    icons/
    animations/
  components/
    sections/
      AboutMeComponent.tsx
      SkillsComponent.tsx
      ProjectsComponent.tsx
      ExperienceComponent.tsx
      ContactComponent.tsx
      FooterComponent.tsx
      HeaderComponent.tsx
    backgrounds/
      Particles.tsx
    animations/
      text/
        SplitText.tsx
    data/
      skills.json
      projects.json
      experience.json
    SkillsCardComponent.tsx
    ProjectsCardComponent.tsx
    ExperienceCardComponent.tsx
    SwapThemeComponent.tsx
public/
  cv.pdf
  github.png
  vite.svg
  assets/
    icons/
```

## Customization

- **Personal info and content:** Edit JSON files in `src/components/data/` for skills, projects, and experience.
- **Images and animations:** Add or replace files in `src/assets/`.
- **Theme:** Adjust Tailwind and DaisyUI settings in `src/index.css`.

## Deployment

Build for production with:

```sh
npm run build
```

Deploy the `dist/` folder to your preferred static hosting (e.g., GitHub Pages). The Vite config uses `base: '/portfolio-Website'` for GitHub Pages compatibility.

## License

MIT

---

Serhat Barış Aydin  
[LinkedIn](https://www.linkedin.com/in/serhatbarisaydin/)
