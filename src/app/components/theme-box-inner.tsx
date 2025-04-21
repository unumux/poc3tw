type ThemeBoxInnerProps = {
  children: React.ReactNode;
  theme?: {
    colors: {
      primary: string;
      secondary: string;
    };
  };
};
export default function ThemeBoxInner({
  children,
  theme = { colors: { primary: "red", secondary: "blue" } },
}: ThemeBoxInnerProps) {
  return <section data-theme={JSON.stringify(theme)}>{children}</section>;
}
