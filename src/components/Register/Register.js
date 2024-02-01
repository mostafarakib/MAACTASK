import React, { useState } from "react";
import "./Register.scss";
import Footer from "../LandingPage/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlice";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreeToPrivacy, setAgreeToPrivacy] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!agreeToPrivacy) {
      setError("You have to agree to our terms & conditions");
      return;
    }

    try {
      const url = "https://staging-api.erpxbd.com/api/v1/users/signup";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          employeeId,
          password,
          passwordConfirm,
          role,
          phoneNumber,
        }),
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
      setError("An error occured while signing up.");
    }
  };

  return (
    <>
      <div className="registration container ">
        <h1 className="fw-bold text-black text-center">Create Account</h1>
        <p className="text-center">
          Fill in the details below to create a account
        </p>
        <form onSubmit={handleSignUp}>
          <label htmlFor="name">Enter Your Full Name</label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Enter Your Email</label>
          <input
            type="text"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="id">Enter Your ID</label>
          <input
            type="text"
            id="id"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
          <label htmlFor="phoneNumber">Enter Your Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="validatePassword">Confirm Password</label>
          <input
            type="password"
            id="validatePassword"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onBlur={() =>
              password !== passwordConfirm
                ? setError("Password not matched. Please try again.")
                : setError("")
            }
          />

          <select id="role" onChange={(e) => setRole(e.target.value)}>
            <option value="">Select your role</option>
            <option value="HUB">HUB</option>
          </select>
          <div className="d-flex align-items-baseline mt-3">
            <input
              className="me-4"
              type="checkbox"
              id="agreementConfirmation"
              onChange={(e) => setAgreeToPrivacy(!agreeToPrivacy)}
            />
            <p>
              I read and agree to the
              <span className="text-primary"> Terms & Conditions</span>
            </p>
          </div>
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="primary-btn">
            Create Account
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?
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
