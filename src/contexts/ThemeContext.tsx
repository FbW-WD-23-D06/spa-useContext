import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

type Context = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

// Create a new context with the defined type
// If the useThemeContext hook is used outside of the ThemeContextProvider component, it will throw an error
const ThemeContext = createContext<Context | null>(null);

// Export a custom hook to access the ThemeContext.
// This hook is used in the components which need to access the global states.
// We can avoid create and use this hook by using the useContext hook directly in the components, but this is a good practice
// to avoid to import the context in each component which need to access the global states

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("ThemeContext must be used within a ThemeContextContextProvider");
  }
  return context;
};

// Define the ThemeContextProvider component
// The provider is needed just to wrap the components which need to access the global states
export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);

  // Render the ThemeContextProvider component with the global state value and setter
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children} {/* Render the child components (all wrapped components) */}
    </ThemeContext.Provider>
  );
}
