"use client";
import { createContext, useContext } from "react";

type brandProps = {
  brand?: "unum" | "colonial";
  children: React.ReactNode;
};
type Brand = "unum" | "colonial";

const defaultBrand = "unum";

const BrandContext = createContext<Brand>(defaultBrand);

export const BrandProvider = ({ brand = "unum", children }: brandProps) => {
  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
};

export const useBrand = () => useContext(BrandContext);
