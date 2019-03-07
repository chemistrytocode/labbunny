import React, { Component } from "react";
import NavBar from '../NavBar/navbar'
// import upcomingWeekInterface from '../../interface/upcomingWeekInterface'

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
                <td id="fullBorder">Period</td>
                <td id="fullBorder">Monday</td>
                <td id="fullBorder">Tuesday</td>
                <td id="fullBorder">Wednesday</td>
                <td id="fullBorder">Thursday</td>
                <td id="fullBorder">Friday</td>
                <td id="fullBorder">Saturday</td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">1</td>
                <td id="p1m" />
                <td id="p1tu" />
                <td id="p1w" />
                <td id="p1th" />
                <td id="p1f" />
                <td id="p1s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">2</td>
                <td id="p2m" />
                <td id="p2tu" />
                <td id="p2w" />
                <td id="p2th" />
                <td id="p2f" />
                <td id="p2s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">3</td>
                <td id="p3m" />
                <td id="p3tu" />
                <td id="p3w" />
                <td id="p3th" />
                <td id="p3f" />
                <td id="p3s" />
              </tr>
              <tr class="table-success" id="fullBorder">
                <td colspan="7" align="center">
                  Break
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">4</td>
                <td id="p4m" />
                <td id="p4tu" />
                <td id="p4w" />
                <td id="p4th" />
                <td id="p4f" />
                <td id="p4s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">5</td>
                <td id="p5m" />
                <td id="p5tu" />
                <td id="p5w" />
                <td id="p5th" />
                <td id="p5f" />
                <td id="p5s" />
              </tr>
              <tr class="table-success" id="fullBorder">
                <td colspan="7" align="center">
                  Lunch
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">6</td>
                <td id="p6m" />
                <td id="p6tu" />
                <td id="p6w" />
                <td id="p6th" />
                <td id="p6f" />
                <td id="p6s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">7</td>
                <td id="p7m" />
                <td id="p7tu" />
                <td id="p7w" />
                <td id="p7th" />
                <td id="p7f" />
                <td id="p7s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">8</td>
                <td id="p8m" />
                <td id="p8tu" />
                <td id="p8w" />
                <td id="p8th" />
                <td id="p8f" />
                <td id="p8s" />
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
