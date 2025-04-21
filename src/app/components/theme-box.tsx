"use client";
import React from "react";
import { useTheme } from "./theme-provider";

export default function ThemeBox({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  //return <div>{children}</div>;

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child);
    }
    return child;
  });
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { style: { color: theme } });
    }
    return child;
  });

  return <div>{childrenWithProps}</div>;
}
