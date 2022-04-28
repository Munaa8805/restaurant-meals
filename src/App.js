import { Switch, Route } from "react-router-dom";
import Home from "./screens/index";
import SignInPage from "./screens/signin";
import Meals from "./screens/Meals";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/meals" exact component={Meals} />
      </Switch>
    </>
  );
}

export default App;
