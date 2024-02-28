import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ width: "100%", backgroundColor: "white" }}>
      <div className="main-cont-footer">
        <div className="cont-1">
          <img
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            alt=""
            className="logo-img"
          />
          <p>Connect with us</p>
          <div className="cont-2">
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/facebook.svg"
              alt=""
            />
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/instagram.svg"
              alt=""
            />
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/twitter.svg"
              alt=""
            />
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/linkedin.svg"
              alt=""
            />
          </div>
        </div>
        <div className="cont-3">
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Employer home</a>
          <a href="#">Sitemap</a>
          <a href="#">Credits</a>
        </div>
        <div className="cont-3">
          <a href="#">Help center</a>
          <a href="#">Summons/Notices</a>
          <a href="#">Grievances</a>
          <a href="#">Report issue</a>
        </div>
        <div className="cont-3">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & conditions</a>
          <a href="#">Fraud alert</a>
          <a href="#">Trust & safety</a>
        </div>
        <div className="cont-4">
          <p style={{ fontWeight: "bold" }}>Apply on the go</p>
          <p>Get real-time job updates on our App</p>
          <div className="cont-5">
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/android-app_v1.png"
              alt=""
            />
            <img
              src="https://static.naukimg.com/s/0/0/i/new-homepage/ios-app_v1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
