import React from "react";
import { FaTrashAlt } from "react-icons/fa";

const Ingredient = (props) => {
  return (
    <li className="ingredient-item">
      {props.name}
      <span>
        <div
          className="delete-ingredient"
          onClick={() => props.handleDelete(props.name)}
        >
          <FaTrashAlt />
        </div>
      </span>
    </li>
  );
};

export default Ingredient;
