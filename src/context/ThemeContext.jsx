import { Children, createContext } from "react";

export const ThemeContext = createContext();

// provider

export const ThemeProvider = ({children}) => {
  const theme = "dark";
  console.log(children)

  return (
    <ThemeContext.Provider value={theme}>
     {children}
    </ThemeContext.Provider>
  );
};
