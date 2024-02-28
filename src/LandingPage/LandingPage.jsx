import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import logo from "../Images/naukri_Logo.png";
import down from "../Images/down-arrow.png";
import Content from "./Content1/Content";
import Footer from "../Footer/Footer";
import Mobile from "../MobileApp/Mobile";
import Addcontent from "../Addcontent/Addcontent";
import { Link } from "react-router-dom";
// import Menu from "../MenuOption/Menu";
import MenuOption from "../MenuOption/MenuOption";
import { MenuItems } from "../Constants";
import Header from "../Header/Header";

function LandingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showJobsDropdown, setShowJobsDropdown] = useState(false);
  const [showCompaniesDropdown, setShowCompaniesDropdown] = useState(false);

  const toggleJobsDropdown = () => {
    setShowJobsDropdown(!showJobsDropdown);
  };

  const toggleCompaniesDropdown = () => {
    setShowCompaniesDropdown(!showCompaniesDropdown);
  };

  return (
    <>
      <div className="main-1">
        <div className="header-1">
          <Link to="/">
            <img src={logo} alt="" className="logo-img-1" />
          </Link>

          {/* {MenuItems.map((eachMenu) => {
            return (
              <MenuOption name={eachMenu.name} category={eachMenu.category} />
            );
          })} */}
          <MenuOption />

          <div>
            <Link to="/Login">
              <button className="login-btn">Login</button>
            </Link>

            <Link to="/Register">
              <button className="register-btn">Register</button>
            </Link>
          </div>
          <p style={{ color: "#D1D1D1" }}>|</p>
          <p className="list-1">
            For employers <img src={down} alt="" className="down" />
          </p>
        </div>
      </div>
      <Content />
      <Footer />
      {/* <p color="green">Testing..........</p> */}
    </>
  );
}

export default LandingPage;
