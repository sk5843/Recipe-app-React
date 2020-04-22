import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { firebase } from "../firebase";
import { AuthContext } from "../context/Auth";
import { Link } from "react-router-dom";

const AuthPage = ({ history, authtype }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (authtype === "Sign In") {
      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Recipe-app-React/fridgepage");
      } catch (error) {
        alert(error);
      }
    } else {
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/Recipe-app-React/fridgepage");
      } catch (error) {
        alert(error);
      }
    }
  };

  const { currentUser } = useContext(AuthContext);
  if (currentUser) {
    return <Redirect to="/Recipe-app-React/fridgepage" />;
  }
  return (
    <div className="auth-flexwrapper">
      <div className="auth-bg"></div>
      <div className="signin__wrapper">
        <div className="signin__ContentWrapper">
          <Link to="/Recipe-app-React" className="Auth-logo">
            Popfizs Pandemic Recipes
          </Link>
        </div>

        <div className="signin__formwrapper">
          <h2 className="signin__heading">{authtype}</h2>
          <form onSubmit={handleSubmit} className="signin__form">
            <div className="signin__textfield">
              <div className="signin__labelwrapper">
                <input
                  type="email"
                  required
                  name="email"
                  autoComplete="off"
                  className="signin__input"
                />
                <label htmlFor="email" className="signin__label">
                  Email
                </label>
              </div>
            </div>
            <div className="signin__textfield">
              <div className="signin__labelwrapper">
                <input
                  type="password"
                  required
                  name="password"
                  autoComplete="off"
                  className="signin__input"
                />
                <label htmlFor="password" className="signin__label">
                  Password
                </label>
              </div>
            </div>
            <div className="auth-btnwrapper">
              <button className="auth-btn" type="submit">
                {authtype}
              </button>
            </div>
            <div className="signin__footerwrapper">
              <p>
                {authtype === "Sign In"
                  ? "Don't have an account?"
                  : "Already have an account?"}
              </p>
              <Link
                to={`/Recipe-app-React/${
                  authtype === "Sign In" ? "signup" : "login"
                }`}
                className="signin__footerlink"
              >
                {authtype === "Sign In" ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AuthPage);
