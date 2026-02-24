import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";
import UserProfile from "./components/UserProfile";
import HookForm from "./form/HookForm";

const App = () => {
  return (
    // wrap the all the components with provider
    <ThemeProvider>
      {/* <Clock /> */}
      {/* <Form /> */}
      <HookForm />
      {/* <Card /> */}
      {/* <UserProfile /> */}
    </ThemeProvider>
  );
};

export default App;
