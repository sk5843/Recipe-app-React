import React, { Component } from "react";
import { RoomContext } from "../context";
import RecipeBox from "../components/RecipeBox";
import FeaturedRecipe from "../components/FeaturedRecipe";

class Home extends Component {
  static contextType = RoomContext;
  render() {
    let { recipes } = this.context;
    let recipesexist = (
      <>
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
    let errormsg = (
      <h1 className="errormsg">
        No recipes found. Please search for a different recipe
      </h1>
    );

    return (
      <>
        <FeaturedRecipe />
        {recipes.length > 0 ? recipesexist : errormsg}
      </>
    );
  }
}

export default Home;
