import { useThemeContext } from "@/contexts/ThemeContext";
import {} from "react";
import { MdWbSunny, MdModeNight } from "react-icons/md";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useThemeContext()!;

  const icon = darkMode ? (
    <MdWbSunny className="text-2xl" />
  ) : (
    <MdModeNight className="text-2xl" />
  );

  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  return <button onClick={handleDarkModeToggle}>{icon}</button>;
}
