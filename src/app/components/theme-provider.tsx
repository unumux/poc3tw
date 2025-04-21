"use client";
import { createContext, useContext } from "react";

//const themes = ["unum", "colonial"];

type themeProps = {
  theme?: "unum" | "colonial";
  children: React.ReactNode;
};
type Theme = "unum" | "colonial";

const defaultTheme = "unum";

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ theme = "unum", children }: themeProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
