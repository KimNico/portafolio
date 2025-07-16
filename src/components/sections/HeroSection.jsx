"use client";
import React from "react";
import { motion } from "@/components/motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-20 flex flex-col items-center text-center"
    >
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
        Hola, soy <span className="text-blue-600 dark:text-blue-400">Nicolas Kim</span>
      </h1>
      <h2 className="text-xl sm:text-2xl font-medium mb-4 text-gray-700 dark:text-gray-300">
        Desarrollador Full Stack
      </h2>
      <p className="max-w-xl mb-8 text-gray-600 dark:text-gray-400">
        Apasionado por la tecnología y el desarrollo web. Creo soluciones modernas, escalables y atractivas para la web.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button as="a" href="#contact" className="w-full sm:w-auto">Contactar</Button>
        <Button as="a" href="#projects" className="w-full sm:w-auto bg-white text-blue-600 border border-blue-600 dark:bg-gray-900 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800">
          Ver Proyectos
        </Button>
      </div>
    </motion.section>
  );
} 