"use client";
import React from "react";
import { motion } from "@/components/motion";

export default function AboutSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16"
    >
      <h2 className="text-3xl font-bold mb-4">Sobre Mí</h2>
      <p className="max-w-2xl text-gray-700 dark:text-gray-300">
        Soy un desarrollador full stack con experiencia en la creación de aplicaciones web modernas y escalables. Me apasiona aprender nuevas tecnologías y enfrentar desafíos que me permitan crecer profesionalmente. Disfruto colaborar en equipos multidisciplinarios y aportar soluciones creativas a los proyectos en los que participo.
      </p>
    </motion.section>
  );
} 