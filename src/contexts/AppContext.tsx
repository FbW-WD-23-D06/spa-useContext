import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Context = {
  globalState: string;
  setGlobalState: Dispatch<SetStateAction<string>>;
};

// Create a new context with the defined type
const AppContext = createContext<Context>({
  globalState: "",
  setGlobalState: () => "",
});

// Export a custom hook to access the AppContext
// This hook is used in the components which need to access the global states
// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => useContext(AppContext);

// Define the AppContextProvider component
// The provider is needed just to wrap the components which need to access the global states
export function AppContextProvider({ children }: { children: ReactNode }) {
  const [globalState, setGlobalState] = useState("global state");

  // Render the AppContextProvider component with the global state value and setter
  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children} {/* Render the child components (all wrapped components) */}
    </AppContext.Provider>
  );
}
