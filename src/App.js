import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";

const Home = React.lazy(() => import("./screens/index"));
const SignInPage = React.lazy(() => import("./screens/signin"));
const Meals = React.lazy(() => import("./screens/Meals"));
const SignUp = React.lazy(() => import("./screens/SignUp"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignInPage} />
        <Route path="/meals" exact component={Meals} />
        <Route path="/signup" component={SignUp} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </Suspense>
  );
}

export default App;
