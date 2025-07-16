import React from "react";

export default function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-5 py-2 rounded-md font-medium bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:bg-blue-500 dark:hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
} 