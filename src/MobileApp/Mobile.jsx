import React from "react";
import "./Mobile.css";
import Footer from "../Footer/Footer";
// import Footer from "../Components/Footer/Footer";
function Mobile() {
  return (
    <div>
      <div className="app-cont-1">
        <div className="app-cont-2">
          <p className="heading-app">
            Stand out among recruiters with a video profile
          </p>
          <p>Available for both Android and iOS apps</p>
          <div className="app-div-1">
            <input
              type="text"
              className="input-app"
              placeholder="Enter phone Number"
            />
            <button className="app-btn">Get link</button>
          </div>
          <img
            src="https://static.naukimg.com/s/0/0/i/download-app-link/GplayOneThemeHd.png"
            alt=""
          />
          <img
            src="https://static.naukimg.com/s/0/0/i/download-app-link/AppstoreOneThemeHd.png"
            alt=""
          />
        </div>
        <div className="qr-div">
          <img
            src="https://static.naukimg.com/s/0/0/i/download-app-link/qr-code.svg"
            alt=""
            className="qr-img"
          />
          <p>Scan Me</p>
        </div>

        <img
          src="https://static.naukimg.com/s/0/0/i/download-app-link/MaskGroupOneTheme.png"
          alt=""
          className="mobiele-img"
        />
      </div>
    </div>
  );
}

export default Mobile;
