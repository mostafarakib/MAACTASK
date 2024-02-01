import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../LandingPage/Footer";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export default function Login() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const url = "https://staging-api.erpxbd.com/api/v1/users/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ employeeId, password }),
      });

      const data = await response.json();

      if (data.status === "success") {
        localStorage.setItem("token", data.token);
        dispatch(setUser(data.user));
        navigate("/dashboard");
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error("Error", error);
      setError("An error occured while logging in.");
    }
  };
  return (
    <>
      <div className="registration container">
        <h1 className="fw-bold text-black text-center">Welcome Back!</h1>
        <p className="text-center">Please login to your account</p>
        <form onSubmit={handleLogin}>
          <label htmlFor="loginId">Enter Your Employee ID</label>
          <input
            type="text"
            id="loginId"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <label htmlFor="loginPassword">Password</label>
          <input
            type="password"
            id="loginPassword"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="primary-btn mt-3">
            Sign in
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
