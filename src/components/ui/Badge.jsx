import React from "react";

export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 mr-2 mb-2 ${className}`}
    >
      {children}
    </span>
  );
} 