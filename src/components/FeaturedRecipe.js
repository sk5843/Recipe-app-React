import React from "react";
import { Link } from "react-router-dom";
import featuredimage from "../images/banana-pancake-featured.jpg";

export default function FeaturedRecipe() {
  return (
    <Link to="/banana-egg-pancakes" className="featured-recipe" href="#">
      <div className="featuredrecipe__flexwrapper">
        <div className="featuredrecipe__titlewrap">
          <div className="xs-mb1">
            <p>Try this!</p>
          </div>
          <h1 className="featuredrecipe__title">
            <span>Banana Egg Pancakes</span>
          </h1>
        </div>
        <div className="featuredrecipe__imgwrap">
          <div className="featuredrecipe__img">
            <img
              alt="No-Bake Pudding Bars"
              src={`${featuredimage}?output-quality=100&amp;resize=900:*`}
              srcset={`${featuredimage}?output-format=webp&amp;output-quality=60&amp;resize=300:* 125w, ${featuredimage}?output-format=webp&amp;output-quality=60&amp;resize=600:* 355w, ${featuredimage}?output-quality=100&amp;resize=900:* 625w`}
            ></img>
          </div>
        </div>
      </div>
    </Link>
  );
}
