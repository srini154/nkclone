import React from "react";
import "./InternalPageAdv.css";

function InternalPageAdv() {
  return (
    <div style={{ padding: "12px" }}>
      <div className="Adv-div-1">
        <p style={{ fontSize: "15px", fontFamily: "sans-serif" }}>
          See 1 job in Featured Company
        </p>
        <img src="https://img.naukimg.com/fc_images/v2/677.gif" alt="" />
      </div>
      <div className="Adv-div-2">
        <img
          src="https://pbs.twimg.com/profile_images/2438037518/NaukriFF_400x400.png"
          alt=""
          style={{ width: "110px", height: "100px", marginBottom: "-25px" }}
        />
        <p style={{ fontWeight: "bold" }}>
          Get 3X more profile views from it recruiters
        </p>
        <p>Increase your chances of callback with Naukri FastForward</p>
        <p style={{ fontWeight: "bold", color: "blue" }}>Know More</p>
      </div>
    </div>
  );
}

export default InternalPageAdv;
