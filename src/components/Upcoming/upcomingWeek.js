import React, { Component } from "react";
import TableSorter from '../TableData/TableSorter'
import NavBar from '../NavBar/navbar'

// import upcomingWeekInterface from '../../interface/upcomingWeekInterface'

import "./upcomingStyling.css";


class UpcomingWeek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      practicals: []
    };
  }


  componentDidMount() {
    fetch("https://localhost:5001/api/Acebook")
      .then(response => response.json())
      .then(practicals => {
        this.setState({ practicals: practicals });
      });
  }


  render() {
    // const practicals = this.state
    // Mocked Practicals
    const practicals = [
      {
        teacher: "Paul",
        period: "1",
        dateReq: "2019-03-04"
      },
      {
        teacher: "James",
        period: "2",
        dateReq: "2019-03-05"
      },
      {
        teacher: "Tabitha",
        period: "3",
        dateReq: "2019-03-06"
      },
      {
        teacher: "Chris",
        period: "4",
        dateReq: "2019-03-07"
      },
      {
        teacher: "Megan",
        period: "5",
        dateReq: "2019-03-08"
      },
      {
        teacher: "Andy",
        period: "6",
        dateReq: "2019-03-09"
      },
      {
        teacher: "Robin",
        period: "7",
        dateReq: "2019-03-11"
      },
      {
        teacher: "Jonathan",
        period: "8",
        dateReq: "2019-03-12"
      }
    ];
    const p1m = []
    const p1tu = []
    const p1w = []
    const p1th = []
    const p1f = []
    const p1s = []
    const p2m = []
    const p2tu = []
    const p2w = []
    const p2th = []
    const p2f = []
    const p2s = []
    const p3m = []
    const p3tu = []
    const p3w = []
    const p3th = []
    const p3f = []
    const p3s = []
    const p4m = []
    const p4tu = []
    const p4w = []
    const p4th = []
    const p4f = []
    const p4s = []
    const p5m = []
    const p5tu = []
    const p5w = []
    const p5th = []
    const p5f = []
    const p5s = []
    const p6m = []
    const p6tu = []
    const p6w = []
    const p6th = []
    const p6f = []
    const p6s = []
    const p7m = []
    const p7tu = []
    const p7w = []
    const p7th = []
    const p7f = []
    const p7s = []
    const p8m = []
    const p8tu = []
    const p8 = []
    const p8th = []
    const p8f = []
    const p8s = []
    practicals.map(eachPractical => {
      if (eachPractical.period === "1") { p1m.push(eachPractical) }
      if (eachPractical.period === "2") { p2m.push(eachPractical) }
      if (eachPractical.period === "3") { p3m.push(eachPractical) }
      if (eachPractical.period === "4") { p4m.push(eachPractical) }
      if (eachPractical.period === "5") { p5m.push(eachPractical) }
      if (eachPractical.period === "6") { p6m.push(eachPractical) }
      if (eachPractical.period === "7") { p7m.push(eachPractical) }
      if (eachPractical.period === "8") { p8m.push(eachPractical) }
    })

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
                <td id="p1m"><TableSorter p1practicals ={p1m}/></td>
                <td id="p1tu" />
                <td id="p1w" />
                <td id="p1th" />
                <td id="p1f" />
                <td id="p1s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">2</td>
                <td id="p2m"><TableSorter p1practicals ={p2m}/></td>
                <td id="p2tu" />
                <td id="p2w" />
                <td id="p2th" />
                <td id="p2f" />
                <td id="p2s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">3</td>
                <td id="p3m"><TableSorter p1practicals ={p3m}/></td>
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
                <td id="p4m"><TableSorter p1practicals ={p4m}/></td>
                <td id="p4tu" />
                <td id="p4w" />
                <td id="p4th" />
                <td id="p4f" />
                <td id="p4s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">5</td>
                <td id="p5m"><TableSorter p1practicals ={p5m}/></td>
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
                <td id="p6m"><TableSorter p1practicals ={p6m}/></td>
                <td id="p6tu" />
                <td id="p6w" />
                <td id="p6th" />
                <td id="p6f" />
                <td id="p6s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">7</td>
                <td id="p7m"><TableSorter p1practicals ={p7m}/></td>
                <td id="p7tu" />
                <td id="p7w" />
                <td id="p7th" />
                <td id="p7f" />
                <td id="p7s" />
              </tr>
              <tr class="table-light">
                <td id="LRborder">8</td>
                <td id="p8m"><TableSorter p1practicals ={p8m}/></td>
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
