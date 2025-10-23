import React from "react";

export function Card({ children, className = "", style = {} }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, boxShadow: "0 8px 18px rgba(2,6,23,0.04)", ...style }} className={className}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div style={{ padding: 16 }}>{children}</div>;
}
