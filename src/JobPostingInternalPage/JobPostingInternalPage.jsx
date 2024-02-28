import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../Header/Header";
import "./JobPostingInternalPage.css";
import location from "../Images/location.png";
import suitcase from "../Images/suitcase.png";
import { jobposting } from "../Constants";

import twitter from "../Images/twitter.png";
import linkedin from "../Images/linkedin.png";
import facebook from "../Images/facebook.png";
import Footer from "../Footer/Footer";
function JobPostingInternalPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { name } = useParams();
  const job = jobposting.find((job) => job.company === name);

  if (!job) {
    return <p>Job not found</p>;
  }

  return (
    <div style={{ backgroundColor: "#eeeeef" }}>
      <Header />
      <div className="job-desc-main">
        <div className="job-desc-div-1">
          <div className="Job-dec-post-1">
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
            </p>
            <p style={{ padding: "4px", color: "#484545", fontSize: "14px" }}>
              {" "}
              <img
                src={location}
                alt=""
                style={{ margin: "0px 10px 0px 5px" }}
              />
              {job.location}
            </p>
            <hr />

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "12px", color: "grey", fontSize: "13px" }}>
                <span style={{ fontWeight: "500", color: "black" }}>
                  Posted:
                </span>{" "}
                {job.posted_days_ago} Days Ago |{" "}
                <span
                  style={{
                    fontWeight: "500",
                    color: "black",
                    fontSize: "13px",
                  }}
                >
                  Opening :
                </span>{" "}
                {job.openings}
              </p>
              <div>
                <Link to="/register">
                  <button className="register-to-apply-btn">
                    Register To Apply
                  </button>
                </Link>

                <button className="Login-to-apply-btn">Login to Apply</button>
              </div>
            </div>
          </div>
          <div className="Job-dec-post-2">
            <p style={{ fontWeight: "bold" }}>Job Description</p>
            <p>{job.job_description}</p>
            <p style={{ fontWeight: "bold" }}>Requirements</p>
            <p>{job.Job_requirements}</p>
            <p style={{ fontWeight: "bold" }}>
              Skills that will give you an edge
            </p>
            <p>{job.skills_that_will_give_you_an_edge}</p>
            <p style={{ fontWeight: "bold" }}>Product Technology Stack</p>
            <ul>
              {job.product_technology_stack.map((i, index) => {
                return <li key={index}>{i}</li>;
              })}
            </ul>
            <p style={{ fontWeight: "bold" }}>Does this sound like you</p>
            <ul>
              {job.additional_information.Does_this_sound_like_you.map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
            <p>
              <span style={{ fontWeight: "bold" }}>Role:</span>{" "}
              {job.role_details.role}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Industry Type:</span>{" "}
              {job.role_details.industry_type}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Department:</span>{" "}
              {job.role_details.department}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Employment Type:</span>{" "}
              {job.role_details.employment_type}
            </p>
            <p>
              <span style={{ fontWeight: "bold" }}>Role Category:</span>{" "}
              {job.role_details.role_category}
            </p>
            <p style={{ fontWeight: "bold" }}>Education:</p>
            <ul>
              <li>
                <span style={{ fontWeight: "bold" }}>UG:</span>{" "}
                {job.role_details.education.UG}
              </li>
              <li>
                <span style={{ fontWeight: "bold" }}>PG:</span>{" "}
                {job.role_details.education.PG}
              </li>
            </ul>
            <p style={{ fontWeight: "bold" }}>Key Skills</p>

            <div style={{ display: "flex" }}>
              {job.role_details.key_skills.map((skill, index) => (
                <div key={index}>
                  <button className="skills-btn-jobposting">{skill}</button>
                </div>
              ))}
            </div>
            <hr />
            <div style={{ padding: "10px" }}>
              <img src={facebook} alt="" />
              <img style={{ marginLeft: "10px" }} src={linkedin} alt="" />
              <img style={{ marginLeft: "10px" }} src={twitter} alt="" />
            </div>
          </div>
          <div className="Job-dec-post-3">
            <p style={{ fontWeight: "bold" }}>About company</p>
            <p>{job.about}</p>
          </div>
          <div className="Job-dec-post-4">
            <p style={{ fontWeight: "bold" }}>Beware of imposters!</p>
            <p>
              Naukri.com does not promise a job or an interview in exchange of
              money. Fraudsters may ask you to pay in the pretext of
              registration fee, Refundable Fee…
              <span style={{ color: "blue", fontWeight: "bold" }}>
                Read more
              </span>
            </p>
          </div>
        </div>
        <div className="job-desc-div-2">
          <div className="Job-dec-post-right-1">
            <p>Jobs you might be interested in</p>
            {jobposting.slice(0, 2).map((job, index) => (
              <Link
                key={index}
                className="jobposting-link"
                to={{ pathname: `/job/${job.company}`, state: { job } }}
              >
                <div className="jobADV">
                  <p style={{ fontWeight: "bold" }}>{job.position}</p>
                  <p className="jobPosting-companyname">
                    {job.company} <span style={{ paddingLeft: "5px" }}>★</span>{" "}
                    {job.rating}{" "}
                    <span
                      style={{ color: "#dfd8d8", margin: "0px 5px 0px 5px" }}
                    >
                      |
                    </span>{" "}
                    238 reviews
                  </p>
                  <p></p>

                  <p
                    style={{
                      padding: "4px",
                      color: "#484545",
                      fontSize: "14px",
                    }}
                  >
                    <img
                      src={suitcase}
                      alt=""
                      style={{ margin: "0px 10px 0px 5px" }}
                    />
                    {job.experience}{" "}
                    <span
                      style={{ color: "#dfd8d8", margin: "0px 5px 0px 5px" }}
                    >
                      |
                    </span>{" "}
                    ₹ {job.salary}{" "}
                    <span
                      style={{ color: "#dfd8d8 ", margin: "0px 5px 0px 5px" }}
                    >
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
                        <span
                          style={{ marginRight: "5px" }}
                          className="requirements-division"
                        >
                          -
                        </span>
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}

            <Link to={`/job`} style={{ textDecoration: "none" }}>
              {" "}
              <button
                style={{
                  width: "100px",
                  height: "38px",
                  backgroundColor: "blue",
                  color: "white",
                  borderRadius: "15px",
                  marginLeft: "130px",
                }}
              >
                View All
              </button>
            </Link>
          </div>
          <div className="Job-dec-post-right-2">
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>
              Services you might be interested in
            </p>
            <p>Resume Display</p>
            <p style={{ fontWeight: "bold", fontSize: "15px" }}>
              Increase your profile visibility to recruiters upto 3 times
            </p>
            <p>
              Get a Featured Profile, Stand out and get noticed in recruiter
              eyes.
            </p>
            <hr />
            <img
              src="https://pbs.twimg.com/profile_images/2438037518/NaukriFF_400x400.png"
              alt=""
              style={{ width: "110px", height: "100px", marginBottom: "-25px" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobPostingInternalPage;
