import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    // wrap the all the components with provider
    <ThemeProvider>
      {/* <Card /> */}
      <UserProfile />
    </ThemeProvider>
  );
};

export default App;
