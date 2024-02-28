// Router.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Register from "./Register/Register";
import InternalPage from "./InternalPage/InternalPage";
import JobPostingInternalPage from "./JobPostingInternalPage/JobPostingInternalPage";
import Login from "./Login/Login";
import TopCompniesInternalPage from "./TopCompniesInternalPage/TopCompniesInternalPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route exact path="/Register" Component={Register} />
        <Route exact path="/Login" Component={Login} />
        <Route exact path="/TopCompanies" Component={TopCompniesInternalPage} />
        <Route exact path="/job/:name" Component={JobPostingInternalPage} />
        <Route exact path="/:name" Component={InternalPage} />
        <Route path="*" Component={<p>Invalid Path</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
