import { Switch, Route } from "react-router-dom";
import Home from "./screens/index";
import SignInPage from "./screens/signin";
import Meals from "./screens/Meals";
import SignUp from "./screens/SignUp";
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
