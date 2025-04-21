"use client";
import { useTheme } from "./theme-provider";

export default function Test() {
  const theme = useTheme();
  return <h1 className={`bg-primary text-tBase hover:bg-secondary theme-${theme}`}>Test</h1>;
}

// Custom themes with TailwindCSS in under 9 minutes
// https://www.youtube.com/watch?v=vg4g68oJNGM
