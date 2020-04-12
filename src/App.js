import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RoomProvider } from "./context";

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Recipe-app-React" component={Home}></Route>
          <Route
            exact
            path="/Recipe-app-React/:recipeId"
            component={SingleRecipe}
          ></Route>
        </Switch>
      </Router>
    </RoomProvider>
  );
}

export default App;
