import React from "react";

export function Button({ children, className = "", size = "md", ...props }) {
  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      {...props}
      className={`transition-colors duration-300 rounded-full font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}
