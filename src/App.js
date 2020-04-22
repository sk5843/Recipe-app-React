import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RoomProvider } from "./context/context";
import FridgePage from "./pages/FridgePage";
import { AuthProvider } from "./context/Auth";
import PrivateRoute from "./PrivateRoute";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <AuthProvider>
      <RoomProvider>
        <Router>
          <Switch>
            <PrivateRoute
              exact
              path="/Recipe-app-React/fridgepage"
              component={FridgePage}
            ></PrivateRoute>
            <Route exact path="/Recipe-app-React" component={Home}></Route>
            <Route
              exact
              path="/Recipe-app-React/recipes/:recipeId"
              component={SingleRecipe}
            ></Route>
            <Route
              exact
              path="/Recipe-app-React/login"
              render={(props) => <AuthPage {...props} authtype="Sign In" />}
            ></Route>
            <Route
              exact
              path="/Recipe-app-React/signup"
              render={(props) => (
                <AuthPage {...props} authtype="Create Account" />
              )}
            ></Route>
          </Switch>
        </Router>
      </RoomProvider>
    </AuthProvider>
  );
}

export default App;
