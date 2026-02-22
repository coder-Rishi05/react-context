import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {

  return (
    <ThemeProvider   >
      <div className="w-full flex item-center justify-center bg-pink-200 h-screen">
        <Card />
      </div>
    </ThemeProvider>
  );
};

export default App;
