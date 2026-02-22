import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  return (
// wrap the all the components with provider
<ThemeProvider   >
      
        <Card />
     
    </ThemeProvider>
  );
};

export default App;
