import React, { useRef } from "react";
import "./Content.css";
import search from "../../Images/search.png";
import { typesofjobs } from "../../Constants";
import { topcompanies } from "../../Constants";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import greater from "../../Images/greater-than-symbol.png";
import { companies } from "../../Constants";
import Addcontent from "../../Addcontent/Addcontent";
import { Link } from "react-router-dom";

function SampleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#d6d6d6",
        color: "black",
        borderRadius: "20px",
      }}
      onClick={onClick}
    />
  );
}
function Content() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  return (
    <div className="content-1">
      <p className="find">Find your dream job now</p>
      <p className="h-1">5 lakh+ jobs for you to explore</p>
      <div className="search-bar">
        <img src={search} alt="" className="search-img" />
        <input
          type="text"
          placeholder="Enter skills / designations / companies"
          className="input-1"
          // tabindex="0"
        />
        <span style={{ color: "grey" }}>|</span>
        <input
          type="number"
          placeholder="Select experience"
          className="input-2"
          // tabindex="0"
        />
        <span style={{ color: "grey" }}>|</span>
        <input
          type="text"
          placeholder="Enter location"
          className="input-3"
          // tabindex="0"
        />
        <button className="btn-search">Search</button>
      </div>
      <div className="button-container">
        {typesofjobs.map((e, index) => (
          // <button key={index} className="type-btn">
          <Link key={index} className="type-btn" to={`/${e.name}`}>
            <img src={e.img} alt="" />
            <span className="button-text">
              {e.name} <img src={greater} className="greater-sign" alt="" />
            </span>
          </Link>
          // </button>
        ))}
      </div>
      {/* <div>
        <h1>Top companies hiring now</h1>
        {topcompanies.map((e, index) => (
          <button key={index} className="topcompaniews-btn">
            <span>{e.name}</span>
            <span>{e.description}</span>
            <img src={e.img} alt="" />
          </button>
        ))}
      </div> */}
      <div className="card-slider">
        <h1>Top companies hiring now</h1>
        <Slider ref={sliderRef} {...settings}>
          {topcompanies.map((e, index) => (
            <Link key={index} to="/TopCompanies">
              <div>
                <button className="slider-btn">
                  <h5 className="heading-top">
                    {e.name}
                    <img src={greater} className="greater-sign" alt="" />
                  </h5>
                  <p
                    style={{
                      fontSize: "12px",
                      textAlign: "left",
                      color: "grey",
                    }}
                  >
                    {e.description}
                  </p>
                  {/* <img src={e.img} alt={e.name} className="top-img" /> */}
                  <div className="images-top">
                    <img className="top-img" src={e.img} alt="" />
                    <img className="top-img" src={e.img2} alt="" />
                    <img className="top-img" src={e.img3} alt="" />
                    <img className="top-img" src={e.img4} alt="" />
                  </div>
                </button>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
      <div>
        <h2>Featured companies actively hiring</h2>
        <button className="btn-companies-1">All</button>
        <button className="btn-companies-1">It services</button>
        <button className="btn-companies-1">BFSI</button>
        <div className="company-main-1">
          <Slider ref={sliderRef} {...settings}>
            {companies.map((e, index) => (
              <div key={index}>
                <div className="company-btn">
                  <img src={e.img} alt="" className="comapny-img" />
                  <div className="div-1">
                    <p className="company-p-1">{e.name}</p>
                    <p className="company-p">
                      ⭐ {e.rating}
                      <span style={{ margin: "5px" }}>|</span>
                      {e.reviews}
                    </p>
                  </div>
                  <p className="company-p">{e.description}</p>
                  <Link to="/Jobs">
                    <button className="viewJobs">View Jobs</button>
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
          <Link to="/TopCompanies">
            <button className="btn-4-companies">View all Companies</button>
          </Link>
        </div>
      </div>
      <Addcontent />
    </div>
  );
}

export default Content;
