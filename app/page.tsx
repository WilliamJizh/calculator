import Calculator from "@/components/calculator";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <Calculator />
      </ThemeProvider>
    </main>
  );
}
