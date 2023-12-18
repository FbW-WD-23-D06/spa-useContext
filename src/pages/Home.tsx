import { useAppContext } from "@/contexts/AppContext";

export default function Home() {
  const { darkMode } = useAppContext()!;
  console.log("darkMode:", darkMode);
  return (
    <div className="h-full">
      <h1 className="text-center">Home</h1>
    </div>
  );
}
