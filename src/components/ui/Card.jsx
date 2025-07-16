import React from "react";

export default function Card({ children, className = "", ...props }) {
  return (
    <div
      className={`rounded-xl shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
} 