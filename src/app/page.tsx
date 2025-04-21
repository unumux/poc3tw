import { BrandProvider } from "./components/brand-provider";
import Test from "./components/test";
import Test2 from "./components/test2";
import { ThemeProvider } from "./components/theme-provider";

export default function Home() {
  return (
    <div>
      <ThemeProvider>
        <Test />
        <Test />
      </ThemeProvider>
      <hr />
      <ThemeProvider theme="colonial">
        <Test />
        <Test />
      </ThemeProvider>
      <hr />
      <hr />
      <BrandProvider>
        <Test2 />
        <Test2 />
      </BrandProvider>
      <hr />
      <BrandProvider brand="colonial">
        <Test2 />
        <Test2 />
      </BrandProvider>
    </div>
  );
}
