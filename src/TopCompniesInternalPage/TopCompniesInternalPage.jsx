import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import FiltersInternalPage from "../FiltersInternalPage/FiltersInternalPage";
import "./TopCompniesInternalPage.css";
import Footer from "../Footer/Footer";
import { companies, sponsoredcompanies } from "../Constants";
import { Link } from "react-router-dom";

function TopCompniesInternalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <div>
      <div style={{ backgroundColor: "#f8f9fa" }}>
        <Header />
        <div className="internal-top">
          <div style={{ display: "flex", padding: "20px 0px", width: "100%" }}>
            <FiltersInternalPage
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
            />
            <div className="company-container">
              {companies.map((e, index) => (
                <Link
                  key={index}
                  to="/Jobs"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                  className="company-link"
                >
                  <div className="top-comapny-div">
                    <img src={e.img} alt="" />
                    <p>{e.name}</p>
                    <p style={{ fontSize: "13px" }}>
                      ⭐ {e.rating} | {e.reviews}
                    </p>
                    {e.category.map((val, index) => (
                      <span key={index} className="company-category-list">
                        {val}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default TopCompniesInternalPage;
