import { useAppContext } from "@/contexts/AppContext";

export default function Profile() {
  const { setGlobalState } = useAppContext(); // Get the global setState function from the AppContextProvider
  return (
    <div className="h-full">
      <h1 className="text-center">Profile</h1>
      <button
        className="text-gray-50 border-b border-gray-100 bg-gray-800 p-1 rounded hover:bg-gray-700"
        onClick={() => setGlobalState("web dev squad")} // Update the global state value using the setState function from the AppContextProvider
      >
        update global state
      </button>
    </div>
  );
}
