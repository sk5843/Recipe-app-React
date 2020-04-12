import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Link to="/Recipe-app-React" className="App-header-Link">
      <header className="App-header">Popfizs pandemic eats</header>
    </Link>
  );
}
