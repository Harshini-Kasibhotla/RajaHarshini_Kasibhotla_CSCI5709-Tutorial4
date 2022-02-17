import React, { Component } from "react";
import Login from "./Login";
import ProfileListing from "./ProfileListing";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";

class Router extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/profileListing" element={<ProfileListing />} />
          <Route path="/profileDetails/:profileId" element={<ProfileDetails />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
