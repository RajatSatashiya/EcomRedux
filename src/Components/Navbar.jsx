import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {logoutUser} from "../Redux/actions"
import "../Stylings/Navbar.css";

function Navbar() {
  const history = useNavigate();
  const state = useSelector(state => state.auth);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="nav2">
        <div className="nav-portion">
          <Link to="/">
            <h3 className="project-title">HomePage</h3>
          </Link>

          <div>Token: {state.token}</div>
          <ul className="nav-list">
            <li>
              <Link to="/login" className="llblink">
                Login
              </Link>
            </li>

            <li>User Logged in: {state.isAuth ? "Yes" : "No"}</li>
            <li>
              <button
                disabled={!state.isAuth}
                onClick={() => {
                  dispatch(logoutUser());
                  history("/login");
                }}
              >
                Log out
              </button>
            </li>
            <li>
              <Link to="/" className="llblink">
                Go back
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
