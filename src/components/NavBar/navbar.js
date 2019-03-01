import React, { Component } from "react";
import { GoogleLogout } from 'react-google-login';

import "./bootstrap.css";

const logout = (response) => {
  console.log(response);
}

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <ul class="navbar-nav mr-auto">
            <li>
              <a id="navbar-brand" href="/account">
                Account Info
              </a>
            </li>
          </ul>
          <a id="navbar-brand" href="/order">
            Practical Order
          </a>
          <a id="navbar-brand" href="/upcoming">
            Upcoming Practicals
          </a>
          <a id="navbar-brand" href="/feedback">
            Submit Feedback
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
