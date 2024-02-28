import React, { useState, useEffect } from "react";
import logo from "../Images/naukri_Logo.png";
import "./Register.css";
import accept from "../Images/accept.png";
import Experienced from "./Experienced/Experienced";
import Fresher from "./Fresher/Fresher";
import { Link } from "react-router-dom";

function Register() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [experienced, setExperienced] = useState(false);
  const [fresher, setFresher] = useState(false);
  const openexperience = () => {
    setExperienced(true);
    setFresher(false);
  };
  const openFresher = () => {
    setFresher(true);
    setExperienced(false);
  };
  return (
    <div>
      <div className="main-2">
        <Link to="/">
          <img src={logo} alt="" className="logo-img-register" />
        </Link>

        <p style={{ marginTop: "20px" }}>
          Already Registered?{" "}
          <Link to="/Login" style={{ textDecoration: "none" }}>
            {" "}
            <span style={{ color: "blue", fontWeight: "bold" }}> Login </span>
          </Link>
          here
        </p>
      </div>
      <div className="register-cont-1">
        <div className="left-pannel-register">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
            className="left-pannel-img"
          />
          <h3>On Registering, you can</h3>
          <ul
            style={{
              // listStyleImage: `url(${accept})`,
              listStyle: "none",
              textAlign: "left",
              fontSize: "14px",
              color: "grey",
            }}
          >
            <li>
              {" "}
              <img src={accept} alt="" className="register-info-list" />
              Build your profile and let recruiters find you
            </li>
            <li>
              <img src={accept} alt="" className="register-info-list" />
              Get job postings delivered right to your email
            </li>
            <li>
              <img src={accept} alt="" className="register-info-list" />
              Find a job and grow your career
            </li>
          </ul>
        </div>
        <div className="right-pannel-cont">
          <p className="heading-right-cont">Find a job & grow your career</p>
          <div className="register-right-div">
            {" "}
            <label className="label-register">Full Name</label>
            <br></br>
            <input
              type="text"
              placeholder="What is your name?"
              className="input-register"
            />
          </div>

          <div className="register-right-div">
            <label className="label-register">Email Id</label>
            <br></br>
            <input
              type="text"
              placeholder="Tell us ypur Email Id"
              className="input-register"
            />
            <p className="information-register">
              We'll send you relevant jobs in your mail
            </p>
          </div>

          <div className="register-right-div">
            <label className="label-register">Password</label>
            <br></br>
            <input
              type="Password"
              placeholder="Create a password for your account"
              className="input-register"
            />
            <p className="information-register">
              Minimum 6 characters required
            </p>
          </div>
          <div className="register-right-div">
            <label className="label-register">Mobile number</label>
            <br></br>
            <input
              type="text
                "
              placeholder="Mobile Number"
              maxLength={10}
              className="input-register"
            />
            <p className="information-register">
              Recruiters will call you on this number
            </p>
          </div>

          <label>Work status</label>
          <div className="exp-register">
            <div className="exp-cont">
              <div onClick={openexperience}>
                <p className="p-category-register">I'm experienced</p>
                <p className="p-category-register-sub">
                  I have work experience (excluding internships)
                </p>
              </div>
              <div>
                <img
                  src="https://static.naukimg.com/s/7/104/assets/images/briefcase.bdc5fadf.svg"
                  alt=""
                  className="register-exp-img"
                />
              </div>
            </div>
            <div className="exp-cont">
              <div onClick={openFresher}>
                <p className="p-category-register">I'm a fresher</p>
                <p className="p-category-register-sub">
                  I am a student/ Haven't worked after graduation
                </p>
              </div>
              <div>
                <img
                  src="https://static.naukimg.com/s/7/104/assets/images/schoolbag.a54cbf7a.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {experienced && <Experienced />}
          {fresher && <Fresher />}
          <p
            style={{
              fontSize: "13px",
              marginTop: "15px",
              color: "grey",
              padding: "15px",
            }}
          >
            By clicking Register, you agree to the Terms and Conditions &
            Privacy Policy of Naukri.com
          </p>
          <button className="register-final-btn">Register Now</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
