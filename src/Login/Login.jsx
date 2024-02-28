import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import "./Login.css";
import accept from "../Images/accept.png";
import { Link } from "react-router-dom";

function Login() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = () => {
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
    }

    if (!password) {
      setPasswordError("Password is required");
    }

    if (email && password) {
      console.log("Login successful");
    }
  };

  return (
    <div>
      <Header />
      <div className="login-main-div">
        <div className="login-info">
          <h3>New to Naukri?</h3>
          <div>
            <div
              style={{ display: "flex", padding: "10px", alignItems: "center" }}
            >
              <img src={accept} alt="" className="login-info-list" />
              One click apply using naukri profile.
            </div>
            <div
              style={{ display: "flex", padding: "10px", alignItems: "center" }}
            >
              <img src={accept} alt="" className="login-info-list" />
              Get relevant job recommendations.
            </div>
            <div
              style={{ display: "flex", padding: "10px", alignItems: "center" }}
            >
              <img src={accept} alt="" className="login-info-list" />
              Showcase profile to top companies and consultants.
            </div>
            <div
              style={{ display: "flex", padding: "10px", alignItems: "center" }}
            >
              <img src={accept} alt="" className="login-info-list" />
              Know application status on applied jobs.
            </div>
          </div>
          <Link to="/Register">
            {" "}
            <button>Register For Free</button>
          </Link>

          <div>
            <img
              src="https://static.naukimg.com/s/5/105/i/register.png"
              alt=""
              className="login-image"
            />
          </div>
        </div>
        <div className="login-inf-1">
          <p style={{ fontSize: "17px", fontWeight: "bold" }}>Login</p>
          <>
            <label style={{ fontSize: "14px" }}>Email ID / Username</label>
            <br />
            <input
              type="text"
              placeholder="Enter Email ID / Username"
              className="input-login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="error">{emailError}</div>
          </>
          <div>
            <label style={{ fontSize: "14px" }}>Password</label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              className="input-login"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="error">{passwordError}</div>
          </div>
          <button className="login-btn-lopginpage" onClick={handleLogin}>
            Login
          </button>
          <div style={{ padding: "38px 0px 30px 134px" }}>Or</div>
          <div className="google-login">
            <img
              src="https://static.naukimg.com/s/5/105/i/ic-google.png"
              alt=""
            />
            <p>Sign in with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
