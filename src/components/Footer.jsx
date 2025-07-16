import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-8">
      © {new Date().getFullYear()} Tu Nombre. Todos los derechos reservados.
    </footer>
  );
} 