import React, { Component } from "react";
import { RoomContext } from "../context";
import RecipeBox from "../components/RecipeBox";
import FeaturedRecipe from "../components/FeaturedRecipe";

class Home extends Component {
  static contextType = RoomContext;
  render() {
    let { recipes } = this.context;
    return (
      <>
        <FeaturedRecipe />
        <h2 className="recipes__subheading">Trending recipes</h2>
        <div className="recipe__grid">
          {recipes.map((item, index) => {
            return (
              <RecipeBox
                key={index}
                title={item.name}
                slug={item.slug}
                img={item.image}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Home;
