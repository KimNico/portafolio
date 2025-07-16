export const SKILLS = {
  "Lenguajes": ["JavaScript", "Python", "Java"],
  "Frontend": ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
  "Backend": ["Node.js", "Express", "Spring Boot"],
  "Herramientas": ["Git", "GitHub", "Docker", "Figma", "Vercel"]
};

export const PROJECTS = [
  {
    title: "Portafolio Personal con Next.js",
    slug: "portafolio-personal-con-nextjs",
    description: "Mi propio portafolio creado desde cero para mostrar mis habilidades y proyectos. Incluye modo oscuro, diseño responsive y está desplegado en Vercel.",
    image: "/placeholder-image.jpg",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#", // Reemplazar con el link real
    githubUrl: "#" // Reemplazar con el link real
  },
  {
    title: "API REST para un Blog",
    slug: "api-rest-para-un-blog",
    description: "Backend para un sistema de blogs con endpoints para operaciones CRUD de usuarios y posteos. Demuestra mis habilidades en desarrollo backend.",
    image: "/placeholder-image.jpg",
    tags: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
    liveUrl: null, // Si no hay demo en vivo
    githubUrl: "#"
  },
  {
    title: "App del Clima con React",
    slug: "app-del-clima-con-react",
    description: "Una aplicación web que muestra el clima actual y pronóstico de una ciudad utilizando una API externa. Un proyecto ideal para practicar el consumo de APIs.",
    image: "/placeholder-image.jpg",
    tags: ["React", "JavaScript", "API", "CSS"],
    liveUrl: "#",
    githubUrl: "#"
  }
];

export function getProjectBySlug(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function getAllProjectSlugs() {
  return PROJECTS.map((p) => p.slug);
} 