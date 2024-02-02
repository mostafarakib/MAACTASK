import React from "react";
import "./LandingPage.scss";
import logo from "../../assets/images/FieldX.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import dummyUserImage from "../../assets/images/sample-photo.jpeg";

export default function TopNavBar() {
  const userData = useSelector(selectUser);
  return (
    <div className="top-nav-container py-2">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/">
          <img className="top-nav-container-logo" src={logo} alt="logo" />
        </Link>
        <div>
          {userData ? (
            <div className="dropdown">
              <button
                className="dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="top-nav-container-user-image"
                  src={
                    userData.image.length < 5 ? dummyUserImage : userData.image
                  }
                  alt="user"
                />
              </button>
              <ul className="dropdown-menu">
                <li className="dropdown-item fw-bold">{userData.name}</li>
                <li className="dropdown-item">{userData.email}</li>
                <li className="dropdown-item">Role: {userData.role}</li>
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
