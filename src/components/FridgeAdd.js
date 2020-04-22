import React, { Component } from "react";

class FridgeAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="addform-wrapper">
        <input
          type="text"
          className="add-ingredient"
          placeholder="Item"
          name="add"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button
          className="add-button"
          onClick={() => this.props.addIngredient(this.state.text)}
        >
          Add
        </button>
      </div>
    );
  }
}

export default FridgeAdd;
