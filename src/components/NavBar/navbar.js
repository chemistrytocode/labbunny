import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";

import "./bootstrap.css";
import "./navbar.css";

const logout = response => {
  console.log(response);
};

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <ul class="navbar-nav mr-auto">
            <li id="navbar-brand">
              <Link to={`/account`}>Account Details</Link>
            </li>
          </ul>
          <ul class="navbar-nav mr-auto">
            <li id="navbar-brand">
              <Link to={`/order`}>Order Practicals</Link>
            </li>
            <li id="navbar-brand">
              <Link to={`/upcoming`}>View Upcoming Practicals</Link>
            </li>
            <li id="navbar-brand">
              <Link to={`/feedback`}>Submit Feedback</Link>
            </li>
            <li id="navbar-brand">
              <Link to={`/upcoming/:id`}>Upcoming Day</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default NavBar;
