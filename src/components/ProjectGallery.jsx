"use client";
import { useState } from "react";
import { PROJECTS } from "@/lib/data";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";

const allTags = Array.from(new Set(PROJECTS.flatMap(p => p.tags)));

export default function ProjectGallery() {
  const [filter, setFilter] = useState(null);
  const filtered = filter ? PROJECTS.filter(p => p.tags.includes(filter)) : PROJECTS;

  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Proyectos</h1>
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          className={`px-3 py-1 rounded-full border ${!filter ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"}`}
          onClick={() => setFilter(null)}
        >
          Todos
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            className={`px-3 py-1 rounded-full border ${filter === tag ? "bg-blue-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200"}`}
            onClick={() => setFilter(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map(project => (
          <Card key={project.slug} className="flex flex-col h-full">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-100 dark:bg-gray-700" />
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-2 flex-1">{project.description}</p>
            <div className="flex flex-wrap mb-2">
              {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
            </div>
            <Link href={`/proyectos/${project.slug}`} className="text-blue-600 dark:text-blue-400 font-medium hover:underline mt-auto">Ver detalle</Link>
          </Card>
        ))}
      </div>
    </section>
  );
} 