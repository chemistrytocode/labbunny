import React, { Component } from "react";
import TableSorter from "../TableData/TableSorter";
import NavBar from "../NavBar/navbar";
import TwelveWeeks from "../TableData/twelveWeeks";

// import upcomingWeekInterface from '../../interface/upcomingWeekInterface'

import "./upcomingStyling.css";

class UpcomingWeek extends Component {
  constructor(props) {
    super(props);

    this.state = {
      week: "",
      monday: "",
      tuesday: "",
      wednesday: "",
      thursday: "",
      friday: "",
      saturday: "",
      practicals: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/reqs")
      .then(response => response.json())
      .then(practicals => {
        this.setState({ practicals: practicals });
      });
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  render() {
    const { practicals } = this.state;
    const p1m = [], p2m = [], p3m = [], p4m = [], p5m = [], p6m = [], p7m = [], p8m = []
    const p1tu = [], p2tu = [], p3tu = [], p4tu = [], p5tu = [], p6tu = [], p7tu = [], p8tu = []
    const p1w = [], p2w = [], p3w = [], p4w = [], p5w = [], p6w = [], p7w = [], p8w = []
    const p1th = [], p2th = [], p3th = [], p4th = [], p5th = [], p6th = [], p7th = [], p8th = []
    const p1f = [], p2f = [], p3f = [], p4f = [], p5f = [], p6f = [], p7f = [], p8f = []
    const p1s = [], p2s = [], p3s = [], p4s = [], p5s = [], p6s = [], p7s = [], p8s = []

    function populateTable() {
      practicals.map(eachPractical => {
        var period = eachPractical.period;
        var day = new Date(eachPractical.datereq).getDay();

        // Monday
        if (period === "1" && day === 1) { p1m.push(eachPractical);}
        if (period === "2" && day === 1) {
          p2m.push(eachPractical);
        }
        if (period === "3" && day === 1) {
          p3m.push(eachPractical);
        }
        if (period === "4" && day === 1) {
          p4m.push(eachPractical);
        }
        if (period === "5" && day === 1) {
          p5m.push(eachPractical);
        }
        if (period === "6" && day === 1) {
          p6m.push(eachPractical);
        }
        if (period === "7" && day === 1) {
          p7m.push(eachPractical);
        }
        if (period === "8" && day === 1) {
          p8m.push(eachPractical);
        }
        // Tuesday
        if (period === "1" && day === 2) {
          p1tu.push(eachPractical);
        }
        if (period === "2" && day === 2) {
          p2tu.push(eachPractical);
        }
        if (period === "3" && day === 2) {
          p3tu.push(eachPractical);
        }
        if (period === "4" && day === 2) {
          p4tu.push(eachPractical);
        }
        if (period === "5" && day === 2) {
          p5tu.push(eachPractical);
        }
        if (period === "6" && day === 2) {
          p6tu.push(eachPractical);
        }
        if (period === "7" && day === 2) {
          p7tu.push(eachPractical);
        }
        if (period === "8" && day === 2) {
          p8tu.push(eachPractical);
        }
        // Wednesday
        if (period === "1" && day === 3) {
          p1w.push(eachPractical);
        }
        if (period === "2" && day === 3) {
          p2w.push(eachPractical);
        }
        if (period === "3" && day === 3) {
          p3w.push(eachPractical);
        }
        if (period === "4" && day === 3) {
          p4w.push(eachPractical);
        }
        if (period === "5" && day === 3) {
          p5w.push(eachPractical);
        }
        if (period === "6" && day === 3) {
          p6w.push(eachPractical);
        }
        if (period === "7" && day === 3) {
          p7w.push(eachPractical);
        }
        if (period === "8" && day === 3) {
          p8w.push(eachPractical);
        }
        // Thursday
        if (period === "1" && day === 4) {
          p1th.push(eachPractical);
        }
        if (period === "2" && day === 4) {
          p2th.push(eachPractical);
        }
        if (period === "3" && day === 4) {
          p3th.push(eachPractical);
        }
        if (period === "4" && day === 4) {
          p4th.push(eachPractical);
        }
        if (period === "5" && day === 4) {
          p5th.push(eachPractical);
        }
        if (period === "6" && day === 4) {
          p6th.push(eachPractical);
        }
        if (period === "7" && day === 4) {
          p7th.push(eachPractical);
        }
        if (period === "8" && day === 4) {
          p8th.push(eachPractical);
        }
        // Friday
        if (period === "1" && day === 5) {
          p1f.push(eachPractical);
        }
        if (period === "2" && day === 5) {
          p2f.push(eachPractical);
        }
        if (period === "3" && day === 5) {
          p3f.push(eachPractical);
        }
        if (period === "4" && day === 5) {
          p4f.push(eachPractical);
        }
        if (period === "5" && day === 5) {
          p5f.push(eachPractical);
        }
        if (period === "6" && day === 5) {
          p6f.push(eachPractical);
        }
        if (period === "7" && day === 5) {
          p7f.push(eachPractical);
        }
        if (period === "8" && day === 5) {
          p8f.push(eachPractical);
        }
        // Saturday
        if (period === "1" && day === 6) {
          p1s.push(eachPractical);
        }
        if (period === "2" && day === 6) {
          p2s.push(eachPractical);
        }
        if (period === "3" && day === 6) {
          p3s.push(eachPractical);
        }
        if (period === "4" && day === 6) {
          p4s.push(eachPractical);
        }
        if (period === "5" && day === 6) {
          p5s.push(eachPractical);
        }
        if (period === "6" && day === 6) {
          p6s.push(eachPractical);
        }
        if (period === "7" && day === 6) {
          p7s.push(eachPractical);
        }
        if (period === "8" && day === 6) {
          p8s.push(eachPractical);
        }
      });
    }
    populateTable();

    return (
      <div id="upcomingContainer" class="col-sm-12">
        <h2> Upcoming Orders! </h2>
        <div class="row form">
          <div class="col-md-4">
            <h3>Currently Displaying:</h3>
            <p id="thisWeek">{this.state.week}</p>
          </div>
          <div id="selectionContainer" class="col-md-4">
            <TwelveWeeks logChange={this.logChange.bind(this)} />
          </div>
          <div class="col-md-4">
            <h3>Week A or B?</h3>
            <p id="aOrB">It's WEEK A</p>
          </div>
        </div>
        <div id="tableContainer">
          <table class="table table-hover">
            <thead>
              <tr>
                <td id="fullBorder">
                  <p id="period">Period</p>
                </td>
                <td id="fullBorder">
                  <p id="monday">Monday</p>
                  <p id="dateOfDay">{this.state.monday}</p>
                  <button class="btn btn-warning">Print All</button>
                </td>
                <td id="fullBorder">
                  <p id="tuesday">Tuesday</p>
                  <p id="dateOfDay">{this.state.tuesday}</p>
                  <button class="btn btn-warning">Print All</button>
                </td>
                <td id="fullBorder">
                  <p id="wednesday">Wednesday</p>
                  <p id="dateOfDay">{this.state.wednesday}</p>
                  <button class="btn btn-warning">Print All</button>
                </td>
                <td id="fullBorder">
                  <p id="thursday">Thursday</p>
                  <p id="dateOfDay">{this.state.thursday}</p>
                  <button class="btn btn-warning">Print All</button>
                </td>
                <td id="fullBorder">
                  <p id="friday">Friday</p>
                  <p id="dateOfDay">{this.state.friday}</p>
                  <button class="btn btn-warning">Print All</button>
                </td>
                <td id="fullBorder">
                  <p id="saturday">Saturday</p>
                  <p id="dateOfDay">{this.state.saturday}</p>
                  <button class="btn btn-warning">Print All</button>
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">1</td>
                <td id="p1m">
                  <TableSorter p1practicals={p1m} />
                </td>
                <td id="p1tu">
                  <TableSorter p1practicals={p1tu} />
                </td>
                <td id="p1w">
                  <TableSorter p1practicals={p1w} />
                </td>
                <td id="p1th">
                  <TableSorter p1practicals={p1th} />
                </td>
                <td id="p1f">
                  <TableSorter p1practicals={p1f} />
                </td>
                <td id="p1s">
                  <TableSorter p1practicals={p1s} />
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">2</td>
                <td id="p2m">
                  <TableSorter p1practicals={p2m} />
                </td>
                <td id="p2tu">
                  <TableSorter p1practicals={p2tu} />
                </td>
                <td id="p2w">
                  <TableSorter p1practicals={p2w} />
                </td>
                <td id="p2th">
                  <TableSorter p1practicals={p2th} />
                </td>
                <td id="p2f">
                  <TableSorter p1practicals={p2f} />
                </td>
                <td id="p2s">
                  <TableSorter p1practicals={p2s} />
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">3</td>
                <td id="p3m">
                  <TableSorter p1practicals={p3m} />
                </td>
                <td id="p3tu">
                  <TableSorter p1practicals={p3tu} />
                </td>
                <td id="p3w">
                  <TableSorter p1practicals={p3w} />
                </td>
                <td id="p3th">
                  <TableSorter p1practicals={p3th} />
                </td>
                <td id="p3f">
                  <TableSorter p1practicals={p3f} />
                </td>
                <td id="p3s">
                  <TableSorter p1practicals={p3s} />
                </td>
              </tr>
              <tr class="table-success" id="fullBorder">
                <td colspan="7" align="center">
                  Break
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">4</td>
                <td id="p4m">
                  <TableSorter p1practicals={p4m} />
                </td>
                <td id="p4tu">
                  <TableSorter p1practicals={p4tu} />
                </td>
                <td id="p4w">
                  <TableSorter p1practicals={p4w} />
                </td>
                <td id="p4th">
                  <TableSorter p1practicals={p4th} />
                </td>
                <td id="p4f">
                  <TableSorter p1practicals={p4f} />
                </td>
                <td id="p4s">
                  <TableSorter p1practicals={p4s} />
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">5</td>
                <td id="p5m">
                  <TableSorter p1practicals={p5m} />
                </td>
                <td id="p5tu">
                  <TableSorter p1practicals={p5tu} />
                </td>
                <td id="p5w">
                  <TableSorter p1practicals={p5w} />
                </td>
                <td id="p5th">
                  <TableSorter p1practicals={p5th} />
                </td>
                <td id="p5f">
                  <TableSorter p1practicals={p5f} />
                </td>
                <td id="p5s">
                  <TableSorter p1practicals={p5s} />
                </td>
              </tr>
              <tr class="table-success" id="fullBorder">
                <td colspan="7" align="center">
                  Lunch
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">6</td>
                <td id="p6m">
                  <TableSorter p1practicals={p6m} />
                </td>
                <td id="p6tu">
                  <TableSorter p1practicals={p6tu} />
                </td>
                <td id="p6w">
                  <TableSorter p1practicals={p6w} />
                </td>
                <td id="p6th">
                  <TableSorter p1practicals={p6th} />
                </td>
                <td id="p6f">
                  <TableSorter p1practicals={p6f} />
                </td>
                <td id="p6s">
                  <TableSorter p1practicals={p6s} />
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">7</td>
                <td id="p7m">
                  <TableSorter p1practicals={p7m} />
                </td>
                <td id="p7tu">
                  <TableSorter p1practicals={p7tu} />
                </td>
                <td id="p7w">
                  <TableSorter p1practicals={p7w} />
                </td>
                <td id="p7th">
                  <TableSorter p1practicals={p7th} />
                </td>
                <td id="p7f">
                  <TableSorter p1practicals={p7f} />
                </td>
                <td id="p7s">
                  <TableSorter p1practicals={p7s} />
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">8</td>
                <td id="p8m">
                  <TableSorter p1practicals={p8m} />
                </td>
                <td id="p8tu">
                  <TableSorter p1practicals={p8tu} />
                </td>
                <td id="p8w">
                  <TableSorter p1practicals={p8w} />
                </td>
                <td id="p8th">
                  <TableSorter p1practicals={p8th} />
                </td>
                <td id="p8f">
                  <TableSorter p1practicals={p8f} />
                </td>
                <td id="p8s">
                  <TableSorter p1practicals={p8s} />
                </td>
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
