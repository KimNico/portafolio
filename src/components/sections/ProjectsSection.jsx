"use client";
import React from "react";
import { motion } from "@/components/motion";
import { PROJECTS } from "@/lib/data";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProjectsSection() {

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16"
    >
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <Card key={project.title} className="flex flex-col h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4 bg-gray-100 dark:bg-gray-700"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap mb-4">
              {project.tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="flex gap-2 mt-auto">
              {project.liveUrl && (
                <Button as="a" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Demo
                </Button>
              )}
              <Button as="a" href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-800 dark:bg-gray-700 text-white hover:bg-gray-900 dark:hover:bg-gray-800">
                Código
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </motion.section>
  );
} 