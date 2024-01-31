import React from "react";
import { Link } from "react-router-dom";
import Footer from "../LandingPage/Footer";

export default function Login() {
  return (
    <>
      <div className="registration container">
        <h1 className="fw-bold text-black text-center">Welcome Back!</h1>
        <p className="text-center">Please login to your account</p>
        <form>
          <label htmlFor="loginEmail">Enter Your Email</label>
          <input type="text" id="loginEmail" />
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword" />

          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have any account?
          <span>
            <Link className="text-decoration-none ms-1" to="/registration">
              Sign up
            </Link>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
}
