import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";

export default function Navbar() {
  return (
    <header className="App-header">
      <Link to="/Recipe-app-React" className="App-logo">
        Popfizs pandemic eats
      </Link>
      <Link to="/matchrecipe" className="App-header-Link">
        What's in your fridge?
      </Link>
      <Search />
    </header>
  );
}
