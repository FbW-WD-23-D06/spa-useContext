import { useAppContext } from "@/contexts/AppContext";

export default function Home() {
  const { globalState } = useAppContext()!; // Get the global state value from the AppContextProvider
  return (
    <div className="h-full">
      <h1 className="text-center">Home</h1>
      <p>{globalState}</p> {/* Render the global state value */}
    </div>
  );
}
