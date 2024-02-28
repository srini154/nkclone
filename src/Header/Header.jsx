import React from "react";
import MenuOption from "../MenuOption/MenuOption";
import logo from "../Images/naukri_Logo.png";
import down from "../Images/down-arrow.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="main-header-2">
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
            {" "}
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
  );
}

export default Header;
