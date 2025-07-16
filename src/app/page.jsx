import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import Card from "@/components/ui/Card";
import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";
import { PROJECTS } from "@/lib/data";

export const metadata = {
  title: "Inicio | Portafolio de Tu Nombre",
  description: "Desarrollador Full Stack, proyectos, blog y contacto.",
};

export default async function HomePage() {
  const posts = (await getAllPosts()).slice(0, 3);
  const projects = PROJECTS.slice(0, 3);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Últimos Proyectos</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} className="flex flex-col h-full">
              <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-lg mb-2 bg-gray-100 dark:bg-gray-700" />
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{project.description}</p>
              <Link href={`/proyectos/${project.slug}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto">Ver detalle</Link>
            </Card>
          ))}
        </div>
      </section>
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Últimos Posts del Blog</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Card key={post.slug} className="flex flex-col h-full">
              <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{post.summary}</p>
              <span className="text-xs text-gray-400 mb-2">{post.date}</span>
              <Link href={`/blog/${post.slug}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto">Leer post</Link>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
} 