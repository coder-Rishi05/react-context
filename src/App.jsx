import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";
import UserProfile from "./components/UserProfile";
import Clock from "./components/Clock";
import Form from "./components/Form";

const App = () => {
  return (
    // wrap the all the components with provider
    <ThemeProvider>
      {/* <Clock /> */}
      <Form />
      {/* <Card /> */}
      {/* <UserProfile /> */}
    </ThemeProvider>
  );
};

export default App;
