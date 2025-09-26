import { useEffect, useState } from "react";

export default function Navbar() {
  const items = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100/80 backdrop-blur border-b border-base-300">
      <nav className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <a href="#" className="font-extrabold text-lg">Portfolio</a>
        <ul className="hidden sm:flex gap-5 text-sm">
          {items.map(i => (
            <li key={i.href}>
              <a className="hover:text-primary transition" href={i.href}>{i.label}</a>
            </li>
          ))}
        </ul>
        {/* removed toggle */}
      </nav>
    </header>
  );
}