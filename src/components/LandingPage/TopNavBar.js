import React from "react";
import "./LandingPage.scss";
import logo from "../../assets/images/FieldX.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

export default function TopNavBar() {
  const userData = useSelector(selectUser);
  return (
    <div className="top-nav-container py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          {userData ? (
            <div class="dropdown">
              <button
                class="btn btn-white dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <div>
              <button className="primary-btn me-2">
                <Link to="/login">Login</Link>
              </button>
              <button className="secondary-btn">
                <Link to="/registration">Register</Link>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
