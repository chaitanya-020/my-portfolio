// src/lib/theme.js

const STORE_KEY = "theme"; // "light" | "dark"

export function getThemeFromDOM() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function setThemeOnDOM(next) {
  const root = document.documentElement;
  // make it deterministic: first remove, then add if needed
  root.classList.remove("dark");
  if (next === "dark") root.classList.add("dark");
  localStorage.setItem(STORE_KEY, next);
}

export function detectInitialTheme() {
  const saved = localStorage.getItem(STORE_KEY);
  if (saved === "light" || saved === "dark") return saved;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

// Call this once before React renders
export function initTheme() {
  setThemeOnDOM(detectInitialTheme());
}
