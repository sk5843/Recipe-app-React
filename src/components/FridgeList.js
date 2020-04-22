import React from "react";
import Ingredient from "./Ingredient";

const FridgeList = (props) => {
  return (
    <div className="fridgelist-wrapper">
      <h2 className="fridgelist-heading">My Inventory</h2>
      <ul className="fridgelist">
        {props.ingredients.map((item, index) => {
          return (
            <Ingredient
              key={index}
              name={item}
              handleDelete={props.deleteIngredient}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default FridgeList;
