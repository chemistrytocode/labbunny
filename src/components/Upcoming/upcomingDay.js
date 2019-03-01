import React, { Component } from "react";
import "./upcomingStyling.css";
import Practical from './practical'

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
                  <td scope="col" id="fullBorder">
                    Period
                  </td>
                  <td scope="col" id="fullBorder">
                    Orders
                  </td>
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    1
                  </td>
                  <td scope="col" id="p1" />
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    2
                  </td>
                  <td scope="col" id="p2" />
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    3
                  </td>
                  <td scope="col" id="p3" />
                </tr>
                <tr class="table-success" id="fullBorder">
                  <td scope="col" colspan="7" align="center">
                    Break
                  </td>
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    4
                  </td>
                  <td scope="col" id="p4" />
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    5
                  </td>
                  <td scope="col" id="p5" />
                </tr>
                <tr class="table-success" id="fullBorder">
                  <td scope="col" colspan="2" align="center">
                    Lunch
                  </td>
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    6
                  </td>
                  <td scope="col" id="p6" />
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    7
                  </td>
                  <td scope="col" id="p7" />
                </tr>
                <tr class="table-light">
                  <td scope="col" id="LRborder">
                    8
                  </td>
                  <td scope="col" id="p8" />
                </tr>
              </thead>
            </table>
          </div>
          <div id="selectionContainer" class="col-sm-6">
            <div class="col-md-4">
              <h3>Details</h3>
              <Practical/>
            </div>
          </div>
        </div>
        <p id="trademark">Created by Paul Ayling @chemistrytocode</p>
      </div>
    );
  }
}

export default UpcomingDay;
