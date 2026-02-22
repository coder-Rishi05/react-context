import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  return (
    <ThemeProvider   >
      
        <Card />
     
    </ThemeProvider>
  );
};

export default App;
