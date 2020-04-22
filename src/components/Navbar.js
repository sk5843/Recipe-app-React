import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import Search from "./Search";
import { AuthContext } from "../context/Auth";
import { firebase } from "../firebase";
import { FaUserAlt, FaPowerOff } from "react-icons/fa";

function Navbar({ history }) {
  const { currentUser } = useContext(AuthContext);
  const handleClick = (e) => {
    if (!!currentUser) {
      firebase
        .auth()
        .signOut()
        .then(
          function () {
            history.push("/Recipe-app-React");
          },
          function (error) {
            console.error("Sign Out Error", error);
          }
        );
    } else {
      history.push("/Recipe-app-React/login");
    }
  };
  return (
    <header className="App-header">
      <Link to="/Recipe-app-React" className="App-logo">
        Popfizs pandemic eats
      </Link>
      <Link to="/Recipe-app-React/fridgepage" className="App-header-Link">
        What's in your fridge?
      </Link>
      <Search />
      <div className="Auth-link" onClick={(e) => handleClick(e)}>
        {!!currentUser ? (
          <>
            <span>
              <FaPowerOff /> Signout
            </span>
          </>
        ) : (
          <>
            <span>
              <FaUserAlt /> Login
            </span>
          </>
        )}
      </div>
    </header>
  );
}

export default withRouter(Navbar);
