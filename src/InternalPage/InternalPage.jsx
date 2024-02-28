import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import "./InternalPage.css";
import FiltersInternalPage from "../FiltersInternalPage/FiltersInternalPage";
import Footer from "../Footer/Footer";
import JobPosting from "../JobPosting/JobPosting";
import InternalPageAdv from "../InternalPageAdv/InternalPageAdv";
function InternalPage() {
  const [selectedFilter, setSelectedFilter] = useState(null);
  const departments = [
    "Data Engineer ",
    "Salesforce Developer",
    "Android App Developer",
    "ETL Developer",
    "Head - Engineering",
    "Full Stack Developer",
    "Front End Developer",
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedFilter]);

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <Header />
      <div className="internal-1">
        <div className="Int-div-2">
          <div className="Int-div-3">
            {departments.map((e, index) => {
              return (
                <p className="int-p-1" key={index}>
                  {e} Jobs
                </p>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", padding: "20px 0px", width: "100%" }}>
          <FiltersInternalPage
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <JobPosting selectedFilter={selectedFilter} />

          <InternalPageAdv />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InternalPage;
