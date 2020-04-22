import React, { Component } from "react";
import { RoomContext } from "../context/context";
import { withRouter } from "react-router-dom";

class Search extends Component {
  state = {
    searchtext: "",
  };

  handleChange = (e, searchRecipe) => {
    const { value } = e.target;
    this.setState({ searchtext: value });
    if (value === "") {
      searchRecipe(e.target.value);
    }
  };
  handleSubmit = (e, searchRecipe) => {
    searchRecipe(this.state.searchtext);
    this.props.history.push("/Recipe-app-React");
  };

  static contextType = RoomContext;

  render() {
    const { searchRecipe } = this.context;
    const { searchtext } = this.state;
    return (
      <div className="search">
        <input
          type="text"
          className="searchTerm"
          placeholder="Search Recipes"
          name="search"
          value={searchtext}
          onChange={(e) => this.handleChange(e, searchRecipe)}
        />
        <button
          type="submit"
          className="searchButton"
          onClick={(e) => this.handleSubmit(e, searchRecipe)}
        >
          <i className="fa fa-search"></i>
        </button>
      </div>
    );
  }
}

export default withRouter(Search);
