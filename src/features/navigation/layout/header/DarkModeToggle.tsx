import { useThemeContext } from "@/contexts/ThemeContext";
import { MdWbSunny, MdModeNight } from "react-icons/md";

export default function DarkModeToggle() {
  const { darkMode, setDarkMode } = useThemeContext()!;

  const icon = darkMode ? (
    <MdWbSunny className="text-2xl" color="yellow" />
  ) : (
    <MdModeNight className="text-2xl" color="white" />
  );

  const handleDarkModeToggle = () => setDarkMode(!darkMode);

  return <button onClick={handleDarkModeToggle}>{icon}</button>;
}
