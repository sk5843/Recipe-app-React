import React, { Component } from "react";
import { RoomContext } from "../context";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.recipeId,
    };
  }
  static contextType = RoomContext;
  render() {
    const { getRecipe } = this.context;
    const recipe = getRecipe(this.state.slug);
    if (!recipe) {
      return (
        <div className="error">
          <h3>no such recipe could be found...</h3>
          <Link to="/Recipe-app-React" className="btn-primary">
            back to home
          </Link>
        </div>
      );
    }
    const {
      id,
      name,
      slug,
      image,
      videoID,
      yields,
      preptime,
      cooktime,
      totaltime,
      ingredients,
      instructions,
    } = recipe;
    return (
      <div className="singlerecipe__body">
        <h1 className="singlerecipe__heading">{name}</h1>
        <div className="recipe-details-container">
          <div className="recipe-details-item yields">
            Yields:
            <span className="yields-amount">{yields}</span>
          </div>
          <div className="recipe-details-item prep-time">
            Prep Time:
            <span className="prep-time-amount">
              {preptime.hours}
              <span className="recipe-time-unit">hours</span>
              {preptime.mins}
              <span className="recipe-time-unit">mins</span>
            </span>
          </div>

          <div className="recipe-details-item cook-time">
            Cook Time:
            <span className="cook-time-amount">
              {cooktime.hours}
              <span className="recipe-time-unit">hours</span>
              {cooktime.mins}
              <span className="recipe-time-unit">mins</span>
            </span>
          </div>

          <div className="recipe-details-item total-time">
            Total Time:
            <span className="total-time-amount">
              {totaltime.hours}
              <span className="recipe-time-unit">hours</span>
              {totaltime.mins}
              <span className="recipe-time-unit">mins</span>
            </span>
          </div>
        </div>
        {/* Recipe content start */}
        <div className="recipe-wrapper">
          <div className="ingredients">
            <div className="ingredients-header">
              <div
                className="ingredients-header-title"
                role="heading"
                aria-level="2"
              >
                Ingredients
              </div>
            </div>
            <div className="ingredients-body">
              <div className="ingredient-section ingredient-section-1">
                <div className="ingredient-lists">
                  {ingredients.map((item, index) => {
                    return (
                      <div key={index} className="ingredient-item">
                        {item}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="directions">
            <div className="directions-header">
              <div
                className="directions-header-title"
                role="heading"
                aria-level="2"
              >
                Directions
              </div>
            </div>
            <div className="directions-body">
              <div className="direction-section direction-section-1">
                <div className="direction-lists">
                  <ol>
                    {instructions.map((item, index) => {
                      return <li key={index}>{item.text}</li>;
                    })}
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="recipevideo__wrapper">
            <iframe
              width="450px"
              height="450px"
              src={`https://www.youtube.com/embed/${videoID}?autohide=1&autoplay=1&loop=1&playlist=${videoID}&controls=0&mute=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        {/* Recipe content end */}
      </div>
    );
  }
}

export default SingleRecipe;
