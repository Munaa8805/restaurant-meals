import React, { Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";

const Home = React.lazy(() => import("./screens/index"));
const SignInPage = React.lazy(() => import("./screens/signin"));
const Meals = React.lazy(() => import("./screens/Meals"));
const SignUp = React.lazy(() => import("./screens/SignUp"));
const Authpage = React.lazy(() => import("./screens/Authpage"));
const ProfilePage = React.lazy(() => import("./screens/Profilepage"));
const ForgetPasswordpage = React.lazy(() =>
  import("./screens/Forgetpasswordpage")
);
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
        <Route path="/signup" exact component={SignUp} />
        <Route path="/auth" exact component={Authpage} />
        <Route path="/reset-password" exact component={ForgetPasswordpage} />
        <Route path="/profile" exact component={ProfilePage} />
        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </Suspense>
  );
}

export default App;
