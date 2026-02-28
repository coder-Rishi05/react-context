import { useContext } from "react";
import Card from "./components/Card";
import { ThemeProvider } from "./context/ThemeContext";
import UserProfile from "./components/UserProfile";
import HookForm from "./form/HookForm";
import Counter from "./ref/Counter";
import Main from "./components/cart/Main";

const App = () => {
  return (
    // wrap the all the components with provider
    <ThemeProvider>
      <Main />
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
