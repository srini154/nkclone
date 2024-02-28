import React, { useEffect, useState } from "react";
import { jobposting } from "../Constants";
import "./JobPosting.css";
import location from "../Images/location.png";
import suitcase from "../Images/suitcase.png";
import { Link } from "react-router-dom";

function JobPosting({ selectedFilter }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    let filteredData = selectedFilter
      ? jobposting.filter((eachJob) => {
          if (eachJob.category.includes(selectedFilter)) {
            return eachJob;
          }
        })
      : jobposting;
    setData(filteredData);
  }, [selectedFilter]);

  return (
    <div style={{ padding: "0px 10px 0px 10px", width: "50%" }}>
      {data.length == 0 ? (
        <div>
          <div className="JobPosting-div-1">
            <p style={{ textAlign: "center" }}>No Jobs Found</p>
          </div>
        </div>
      ) : (
        data.length &&
        data.map((job, index) => (
          <Link
            key={index}
            className="jobposting-link"
            to={{ pathname: `/job/${job.company}`, state: { job } }}
          >
            <div className="JobPosting-div-1">
              <p style={{ fontWeight: "bold" }}>{job.position}</p>
              <p className="jobPosting-companyname">
                {job.company} <span style={{ paddingLeft: "5px" }}>★</span>{" "}
                {job.rating}{" "}
                <span style={{ color: "#dfd8d8", margin: "0px 5px 0px 5px" }}>
                  |
                </span>{" "}
                238 reviews
              </p>
              <p></p>

              <p style={{ padding: "4px", color: "#484545", fontSize: "14px" }}>
                <img
                  src={suitcase}
                  alt=""
                  style={{ margin: "0px 10px 0px 5px" }}
                />
                {job.experience}{" "}
                <span style={{ color: "#dfd8d8", margin: "0px 5px 0px 5px" }}>
                  |
                </span>{" "}
                ₹ {job.salary}{" "}
                <span style={{ color: "#dfd8d8 ", margin: "0px 5px 0px 5px" }}>
                  |
                </span>{" "}
                <img
                  src={location}
                  alt=""
                  style={{ margin: "0px 10px 0px 5px" }}
                />
                {job.location}
              </p>
              <ul className="jobdescription">
                {job.requirements.map((requirement, i) => (
                  <li key={i}>
                    {i !== 0 && (
                      <span
                        style={{ marginRight: "5px" }}
                        className="requirements-division"
                      >
                        -
                      </span>
                    )}
                    {requirement}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: "12px", color: "grey" }}>
                {job.posted_days_ago} Days Ago
              </p>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default JobPosting;
