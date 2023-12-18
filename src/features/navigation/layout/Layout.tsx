import { useThemeContext } from "@/contexts/ThemeContext";
import Footer from "./Footer";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Layout() {
  const { darkMode } = useThemeContext()!;

  useEffect(() => {
    const htmlElementClass = document.documentElement.classList;
    if (darkMode) {
      htmlElementClass.add("dark");
    } else {
      htmlElementClass.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Header />
      <main className="h-screen p-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
