import React, { Component } from "react";
import items from "./data";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  state = {
    recipes: [],
  };
  componentDidMount() {
    this.setState({
      recipes: items,
    });
  }

  getRecipe = (slug) => {
    let tempRecipes = [...this.state.recipes];
    const recipe = tempRecipes.find((recipe) => {
      return recipe.slug === slug;
    });
    return recipe;
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRecipe: this.getRecipe,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
