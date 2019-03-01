import React, { Component } from "react";
import "./upcomingStyling.css";

class UpcomingWeek extends Component {
  render() {
    return (
      <div id="upcomingContainer" class="col-sm-12">
        <h2> Upcoming Orders! </h2>
        <div class="row form">
          <div class="col-md-4">
            <h3>This Week's Date</h3>
            <p id="thisWeek">DATE</p>
          </div>
          <div id="selectionContainer" class="col-md-4">
            <p>Select a week:</p>
            <select class="form-control" id="weekSelection">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
          <div class="col-md-4">
            <h3>Week A or B?</h3>
            <p id="aOrB">It's WEEK A</p>
          </div>
        </div>
        <p>Then click on individual days for more details:</p>
        <div id="tableContainer">
          <table class="table table-hover">
            <thead>
              <tr>
                <td scope="col" id="fullBorder">
                  Period
                </td>
                <td scope="col" id="fullBorder">
                  Monday
                </td>
                <td scope="col" id="fullBorder">
                  Tuesday
                </td>
                <td scope="col" id="fullBorder">
                  Wednesday
                </td>
                <td scope="col" id="fullBorder">
                  Thursday
                </td>
                <td scope="col" id="fullBorder">
                  Friday
                </td>
                <td scope="col" id="fullBorder">
                  Saturday
                </td>
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  1
                </td>
                <td scope="col" id="p1m" />
                <td scope="col" id="p1tu" />
                <td scope="col" id="p1w" />
                <td scope="col" id="p1th" />
                <td scope="col" id="p1f" />
                <td scope="col" id="p1s" />
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  2
                </td>
                <td scope="col" id="p2m" />
                <td scope="col" id="p2tu" />
                <td scope="col" id="p2w" />
                <td scope="col" id="p2th" />
                <td scope="col" id="p2f" />
                <td scope="col" id="p2s" />
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  3
                </td>
                <td scope="col" id="p3m" />
                <td scope="col" id="p3tu" />
                <td scope="col" id="p3w" />
                <td scope="col" id="p3th" />
                <td scope="col" id="p3f" />
                <td scope="col" id="p3s" />
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
                <td scope="col" id="p4m" />
                <td scope="col" id="p4tu" />
                <td scope="col" id="p4w" />
                <td scope="col" id="p4th" />
                <td scope="col" id="p4f" />
                <td scope="col" id="p4s" />
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  5
                </td>
                <td scope="col" id="p5m" />
                <td scope="col" id="p5tu" />
                <td scope="col" id="p5w" />
                <td scope="col" id="p5th" />
                <td scope="col" id="p5f" />
                <td scope="col" id="p5s" />
              </tr>
              <tr class="table-success" id="fullBorder">
                <td scope="col" colspan="7" align="center">
                  Lunch
                </td>
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  6
                </td>
                <td scope="col" id="p6m" />
                <td scope="col" id="p6tu" />
                <td scope="col" id="p6w" />
                <td scope="col" id="p6th" />
                <td scope="col" id="p6f" />
                <td scope="col" id="p6s" />
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  7
                </td>
                <td scope="col" id="p7m" />
                <td scope="col" id="p7tu" />
                <td scope="col" id="p7w" />
                <td scope="col" id="p7th" />
                <td scope="col" id="p7f" />
                <td scope="col" id="p7s" />
              </tr>
              <tr class="table-light">
                <td scope="col" id="LRborder">
                  8
                </td>
                <td scope="col" id="p8m" />
                <td scope="col" id="p8tu" />
                <td scope="col" id="p8w" />
                <td scope="col" id="p8th" />
                <td scope="col" id="p8f" />
                <td scope="col" id="p8s" />
              </tr>
            </thead>
          </table>

          <p id="trademark">Created by Paul Ayling @chemistrytocode</p>
        </div>
      </div>
    );
  }
}

export default UpcomingWeek;
