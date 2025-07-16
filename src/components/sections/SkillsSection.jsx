"use client";
import React from "react";
import { motion } from "@/components/motion";
import { SKILLS } from "@/lib/data";
import Badge from "@/components/ui/Badge";

export default function SkillsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-16"
    >
      <h2 className="text-3xl font-bold mb-8">Habilidades</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{category}</h3>
            <div className="flex flex-wrap">
              {skills.map((skill) => (
                <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 