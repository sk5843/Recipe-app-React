import React from "react";
import "./App.css";
import Home from "./pages/Home";
import SingleRecipe from "./pages/SingleRecipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { RoomProvider } from "./context";
import MatchRecipe from "./pages/MatchRecipe";

function App() {
  return (
    <RoomProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/Recipe-app-React" component={Home}></Route>
          <Route exact path="/matchrecipe" component={MatchRecipe}></Route>
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
