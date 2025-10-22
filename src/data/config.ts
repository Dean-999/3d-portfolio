const config = {
  title: "Dean Shen | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Dean Shen, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including mineral modeling, robotics design, swimming achievements, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Dean Shen, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Dean Shen",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "mineral modeling",
    "robotics design",
    "swimming",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Dean Shen",
  email: "deanshen999@gmail.com",
  site: "https://deanshen.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/FanyiwenS",
    linkedin: "https://www.linkedin.com/in/dean-shen",
    instagram: "https://www.instagram.com/deanshen999",
    facebook: "https://www.facebook.com/deanshen999",
    github: "https://github.com/Dean-999",
  },
};
export { config };
