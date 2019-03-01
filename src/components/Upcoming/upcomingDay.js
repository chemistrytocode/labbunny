import React, { Component } from "react"
import NavBar from '../NavBar/navbar'
import Practical from "./practical";
import "./upcomingStyling.css";



class UpcomingDay extends Component {
  render() {
    return (
      <div id="upcomingContainer" class="col-sm-12">
        <h2> PopulateDate </h2>
        <div class="row form">
          <div class="col-sm-4">
            <h3>This Day's Practicals</h3>
            <p>Click on a practical to see details:</p>
            <table class="table table-hover">
              <thead>
                <tr>
                  <td id="fullBorder">Period</td>
                  <td id="fullBorder">Orders</td>
                </tr>
                <tr class="table-light">
                  <td id="LRborder">1</td>
                  <td id="p1" />
                </tr>
                <tr class="table-light">
                  <td id="LRborder">2</td>
                  <td id="p2" />
                </tr>
                <tr class="table-light">
                  <td id="LRborder">3</td>
                  <td id="p3" />
                </tr>
                <tr class="table-success" id="fullBorder">
                  <td colspan="7" align="center">
                    Break
                  </td>
                </tr>
                <tr class="table-light">
                  <td id="LRborder">4</td>
                  <td id="p4" />
                </tr>
                <tr class="table-light">
                  <td id="LRborder">5</td>
                  <td id="p5" />
                </tr>
                <tr class="table-success" id="fullBorder">
                  <td colspan="2" align="center">
                    Lunch
                  </td>
                </tr>
                <tr class="table-light">
                  <td id="LRborder">6</td>
                  <td id="p6" />
                </tr>
                <tr class="table-light">
                  <td id="LRborder">7</td>
                  <td id="p7" />
                </tr>
                <tr class="table-light">
                  <td id="LRborder">8</td>
                  <td id="p8" />
                </tr>
              </thead>
            </table>
          </div>
          <div id="selectionContainer" class="col-sm-6">
            <div class="col-md-4">
              <h3>Details</h3>
              <Practical />
            </div>
          </div>
        </div>
        <p id="trademark">Created by Paul Ayling @chemistrytocode</p>
      </div>
    );
  }
}

export default UpcomingDay;
