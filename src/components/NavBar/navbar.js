import React, { Component } from "react";
import "./bootstrap.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/account">
                Account Info
              </a>
            </li>
          </ul>
          <a class="navbar-brand" href="/order">
            Practical Order
          </a>
          <a class="navbar-brand" href="/upcoming">
            Upcoming Practicals
          </a>
          <a class="navbar-brand" href="/feedback">
            Submit Feedback
          </a>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NavBar;
