import { getProjectBySlug } from "@/lib/data";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { title: "Proyecto no encontrado" };
  return {
    title: `${project.title} | Proyectos | Portafolio de Tu Nombre`,
    description: project.description,
  };
}

export default function ProyectoDetallePage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return notFound();
  return (
    <section className="py-12">
      <Link href="/proyectos" className="text-blue-600 dark:text-blue-400 hover:underline mb-4 inline-block">← Volver a proyectos</Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.image} alt={project.title} className="w-full max-w-2xl h-64 object-cover rounded-lg mb-6 bg-gray-100 dark:bg-gray-700" />
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
      <div className="flex flex-wrap mb-4">
        {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
      </div>
      <div className="flex gap-4">
        {project.liveUrl && <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">Demo</Button>}
        <Button as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-800">Código</Button>
      </div>
    </section>
  );
} 