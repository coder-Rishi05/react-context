import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";
import UserProfile from "./components/UserProfile";
import HookForm from "./form/HookForm";
import Counter from "./ref/Counter";
import Main from "./components/cart/Main";
import Data from "./components/refhook/Data";

const App = () => {
  return (
    // wrap the all the components with provider
    <ThemeProvider>
      {/* <Main /> */}
      <Data />
      {/* <Clock /> */}
      {/* <Form /> */}
      {/* <HookForm /> */}
      {/* <Counter /> */}
      {/* <Card /> */}
      {/* <UserProfile /> */}
    </ThemeProvider>
  );
};

export default App;
