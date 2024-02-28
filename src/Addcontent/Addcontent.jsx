import React from "react";
import "./Addcontent.css";
// import Mobile from "../../MobileApp/Mobile";
import Sponsored from "../Sponsored/Sponsored";
function Addcontent() {
  return (
    <div>
      <div className="main-cont-1">
        <img
          src="https://static.naukimg.com/s/7/0/assets/images/src/widgets/nc-desktop-promo-on-ni-wdgt/latest/components/assets/nc-logo-new.00a143e0.svg"
          alt=""
        />
        <div className="main-cont-2">
          <p style={{ fontWeight: "bold", fontSize: "17px" }}>
            Introducing a career platform for college students & fresh grads
          </p>
          <p>
            Explore contests, webinars, take aptitude test, prepare for your
            dream career & find jobs & internships
          </p>
          <div className="main-cont-3">
            <button className="btn-categories">Expert speak</button>
            <button className="btn-categories">Contests</button>
            <button className="btn-categories">NCAT</button>
            <button className="btn-categories">Pathfinder</button>
            <button className="btn-categories">Job & internship</button>
          </div>
        </div>
        <div>
          <p className="just-1">Just Launched</p>
          <button className="explore-btn">Explore</button>
        </div>
      </div>
      <Sponsored />
    </div>
  );
}

export default Addcontent;
