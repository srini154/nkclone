import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sponsoredcompanies } from "../Constants";
import Mobile from "../MobileApp/Mobile";
import "./Sponsored.css";
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

function Sponsored() {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    rows: 2,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
  };

  return (
    <div className="sponsored-div">
      <h2>Sponsored companies</h2>
      <div>
        <button className="btn-companies-2">All</button>
        <button className="btn-companies-2">It Services</button>
        <button className="btn-companies-2">Technology</button>
        <button className="btn-companies-2">Manufacturing & production</button>
        <button className="btn-companies-2">BPM</button>
      </div>
      <Slider ref={sliderRef} {...settings} co>
        {sponsoredcompanies.map((e, index) => {
          return (
            <div key={index} className="sponsored-div">
              <div className="spocered-btn">
                <img
                  src={e.img}
                  alt="Image Not available"
                  className="sponsored-img"
                />
                <p>{e.name}</p>
                <div>
                  <p className="company-p">
                    ⭐ {e.rating}
                    <span style={{ margin: "5px" }}>|</span>
                    {e.reviews}
                  </p>
                </div>
                <div>
                  {e.category.map((val, index) => (
                    <span key={index} className="company-category-list">
                      {val}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <Link to="/TopCompanies">
        <button className="btn-4-companies">View all Companies</button>
      </Link>

      <Mobile />
    </div>
  );
}

export default Sponsored;
