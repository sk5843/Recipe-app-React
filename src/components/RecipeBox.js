import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function RecipeBox(props) {
  return (
    <div className="recipewrapper">
      <Link to={`/Recipe-app-React/recipes/${props.slug}`} className="recipe">
        <img src={props.img} alt="food" className="recipe__img" />
      </Link>
      <Link
        to={`/Recipe-app-React/recipes/${props.slug}`}
        className="recipe__heading"
      >
        {props.title}
      </Link>
    </div>
  );
}

RecipeBox.propTypes = {
  title: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
