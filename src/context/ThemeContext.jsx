import { Children, createContext, useState } from "react";

// create a context
export const ThemeContext = createContext();

// create a provider

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  return (
    // inside provider wrap childrens with themecontext provider
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
