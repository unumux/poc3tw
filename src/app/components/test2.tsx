"use client";
import { useBrand } from "./brand-provider";

export default function Test2() {
  const brand = useBrand();
  return <h1 className={`bg-primary text-tBase hover:bg-secondary brand-${brand}`}>Test</h1>;
}

// Custom themes with TailwindCSS in under 9 minutes
// https://www.youtube.com/watch?v=vg4g68oJNGM
