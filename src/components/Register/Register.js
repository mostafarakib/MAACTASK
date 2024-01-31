import React from "react";
import "./Register.scss";
import Footer from "../LandingPage/Footer";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <div className="registration container ">
        <h1 className="fw-bold text-black text-center">Create Account</h1>
        <p className="text-center">
          Fill in the details below to create a account
        </p>
        <form>
          <label htmlFor="name">Enter Your Full Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Enter Your Email</label>
          <input type="text" id="email" />
          <label htmlFor="id">Enter Your ID</label>
          <input type="text" id="id" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <label htmlFor="validatePassword">Confirm Password</label>
          <input type="password" id="validatePassword" />

          <select id="role">
            <option value="">Select your role</option>
            <option value="HUB">HUB</option>
          </select>
          <div className="d-flex align-items-baseline mt-3">
            <input
              className="me-4"
              type="checkbox"
              id="agreementConfirmation"
            />
            <p>
              I read and agree to the{" "}
              <span className="text-primary">Terms & Conditions</span>
            </p>
          </div>
          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <span>
            <Link className="text-decoration-none" to="/login">
              Sign in
            </Link>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
