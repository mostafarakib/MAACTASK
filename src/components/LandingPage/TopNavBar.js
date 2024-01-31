import React from "react";
import "./LandingPage.scss";
import logo from "../../assets/images/FieldX.png";
import { Link } from "react-router-dom";

export default function TopNavBar() {
  return (
    <div className="top-nav-container py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <div>
          <button className="primary-btn me-2">
            <Link to="/login">Login</Link>
          </button>
          <button className="secondary-btn">
            <Link to="/registration">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
