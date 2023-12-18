import { useThemeContext } from "@/contexts/ThemeContext";

export default function Home() {
  const { darkMode } = useThemeContext()!;
  console.log("darkMode:", darkMode);
  return (
    <div className="h-full">
      <h1 className="text-center">Home</h1>
    </div>
  );
}
