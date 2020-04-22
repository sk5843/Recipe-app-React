import React, { Component } from "react";
import items from "../data";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";

const RoomContext = React.createContext();

class RoomProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [],
      filteredRecipes: [],
    };
  }

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
  searchRecipe = (searchtext) => {
    let tempRecipes = items;

    const recipes = tempRecipes.filter((item) =>
      item.name.toLowerCase().includes(searchtext.toLowerCase())
    );
    this.setState({ recipes });
  };

  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRecipe: this.getRecipe,
          searchRecipe: this.searchRecipe,
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
