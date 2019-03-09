import React, { Component } from "react";
import TableSorter from "../TableData/TableSorter";
import NavBar from "../NavBar/navbar";

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
    fetch("http://localhost:5000/reqs")
      .then(response => response.json())
      .then(practicals => {
        this.setState({ practicals: practicals });
      });
  }
  render() {
    const { practicals } = this.state;
    //   {
    //     id: 1,
    //     teacher: "Paul",
    //     period: "1",
    //     form: "1XX",
    //     dateReq: "2019-03-04"
    //   },
    //   {
    //     id: 2,
    //     teacher: "James",
    //     period: "2",
    //     form: "U6XX",
    //     dateReq: "2019-03-05"
    //   },
    //   {
    //     id: 3,
    //     teacher: "Tabitha",
    //     period: "3",
    //     form: "L6XX",
    //     dateReq: "2019-03-06"
    //   },
    //   {
    //     id: 4,
    //     teacher: "Chris",
    //     period: "4",
    //     form: "4XX",
    //     dateReq: "2019-03-07"
    //   },
    //   {
    //     id: 5,
    //     teacher: "Megan",
    //     period: "5",
    //     form: "2XX",
    //     dateReq: "2019-03-08"
    //   },
    //   {
    //     id: 6,
    //     teacher: "Andy",
    //     period: "6",
    //     form: "3XX",
    //     dateReq: "2019-03-09"
    //   },
    //   {
    //     id: 7,
    //     teacher: "Robin",
    //     period: "7",
    //     form: "U6XX",
    //     dateReq: "2019-03-11"
    //   },
    //   {
    //     id: 8,
    //     teacher: "Jonathan",
    //     period: "8",
    //     form: "L6XX",
    //     dateReq: "2019-03-12"
    //   },
    //   {
    //     id: 9,
    //     teacher: "Paul",
    //     period: "8",
    //     form: "2XX",
    //     dateReq: "2019-03-12"
    //   },
    //   {
    //     id: 10,
    //     teacher: "James",
    //     period: "7",
    //     form: "1XX",
    //     dateReq: "2019-03-11"
    //   },
    //   {
    //     id: 11,
    //     teacher: "Tabitha",
    //     period: "6",
    //     form: "1XX",
    //     dateReq: "2019-03-09"
    //   },
    //   {
    //     id: 12,
    //     teacher: "Chris",
    //     period: "5",
    //     form: "3XX",
    //     dateReq: "2019-03-08"
    //   },
    //   {
    //     id: 13,
    //     teacher: "Megan",
    //     period: "4",
    //     form: "L6XX",
    //     dateReq: "2019-03-07"
    //   },
    //   {
    //     id: 14,
    //     teacher: "Andy",
    //     period: "3",
    //     form: "L6XX",
    //     dateReq: "2019-03-06"
    //   },
    //   {
    //     id: 15,
    //     teacher: "Robin",
    //     period: "2",
    //     form: "2XX",
    //     dateReq: "2019-03-05"
    //   },
    //   {
    //     id: 16,
    //     teacher: "Jonathan",
    //     period: "1",
    //     form: "2XX",
    //     dateReq: "2019-03-04"
    //   },
    //   {
    //     id: 17,
    //     teacher: "Paul",
    //     period: "1",
    //     form: "5XX",
    //     dateReq: "2019-03-04"
    //   },
    //   {
    //     id: 18,
    //     teacher: "James",
    //     period: "2",
    //     form: "5XX",
    //
    //     dateReq: "2019-03-05"
    //   },
    //   {
    //     id: 19,
    //     teacher: "Tabitha",
    //     period: "3",
    //     form: "5XX",
    //     dateReq: "2019-03-06"
    //   },
    //   {
    //     id: 20,
    //     teacher: "Chris",
    //     period: "4",
    //     form: "2XX",
    //     dateReq: "2019-03-07"
    //   },
    //   {
    //     id: 21,
    //     teacher: "Megan",
    //     period: "5",
    //     form: "L6XX",
    //     dateReq: "2019-03-08"
    //   },
    //   {
    //     id: 22,
    //     teacher: "Andy",
    //     period: "6",
    //     form: "U6XX",
    //     dateReq: "2019-03-09"
    //   },
    //   {
    //     id: 23,
    //     teacher: "Robin",
    //     period: "7",
    //     form: "3XX",
    //     dateReq: "2019-03-11"
    //   },
    //   {
    //     id: 24,
    //     teacher: "Jonathan",
    //     period: "8",
    //     form: "PROJECT",
    //     dateReq: "2019-03-12"
    //   },
    //   {
    //     id: 25,
    //     teacher: "Paul",
    //     period: "8",
    //     form: "3XX",
    //     dateReq: "2019-03-12"
    //   },
    //   {
    //     id: 26,
    //     teacher: "James",
    //     period: "7",
    //     form: "2XX",
    //     dateReq: "2019-03-11"
    //   },
    //   {
    //     id: 27,
    //     teacher: "Tabitha",
    //     period: "6",
    //     form: "2XX",
    //     dateReq: "2019-03-09"
    //   },
    //   {
    //     id: 28,
    //     teacher: "Chris",
    //     period: "5",
    //     form: "1XX",
    //     dateReq: "2019-03-08"
    //   },
    //   {
    //     id: 29,
    //     teacher: "Megan",
    //     period: "4",
    //     form: "1XX",
    //     dateReq: "2019-03-07"
    //   },
    //   {
    //     id: 30,
    //     teacher: "Andy",
    //     period: "3",
    //     form: "4XX",
    //     dateReq: "2019-03-06"
    //   },
    //   {
    //     id: 31,
    //     teacher: "Robin",
    //     period: "2",
    //     form: "4XX",
    //     dateReq: "2019-03-05"
    //   },
    //   {
    //     id: 32,
    //     teacher: "Jonathan",
    //     period: "1",
    //     form: "3XX",
    //     dateReq: "2019-03-04"
    //   }
    // ];
    const p1m = [];
    const p1tu = [];
    const p1w = [];
    const p1th = [];
    const p1f = [];
    const p1s = [];
    const p2m = [];
    const p2tu = [];
    const p2w = [];
    const p2th = [];
    const p2f = [];
    const p2s = [];
    const p3m = [];
    const p3tu = [];
    const p3w = [];
    const p3th = [];
    const p3f = [];
    const p3s = [];
    const p4m = [];
    const p4tu = [];
    const p4w = [];
    const p4th = [];
    const p4f = [];
    const p4s = [];
    const p5m = [];
    const p5tu = [];
    const p5w = [];
    const p5th = [];
    const p5f = [];
    const p5s = [];
    const p6m = [];
    const p6tu = [];
    const p6w = [];
    const p6th = [];
    const p6f = [];
    const p6s = [];
    const p7m = [];
    const p7tu = [];
    const p7w = [];
    const p7th = [];
    const p7f = [];
    const p7s = [];
    const p8m = [];
    const p8tu = [];
    const p8w = [];
    const p8 = [];
    const p8th = [];
    const p8f = [];
    const p8s = [];

    practicals.map(eachPractical => {
      var period = eachPractical.period;
      var day = new Date(eachPractical.datereq).getDay();

      // Monday
      if (period == 1 && day == 1) {
        p1m.push(eachPractical);
      }
      if (period == 2 && day == 1) {
        p2m.push(eachPractical);
      }
      if (period == 3 && day == 1) {
        p3m.push(eachPractical);
      }
      if (period == 4 && day == 1) {
        p4m.push(eachPractical);
      }
      if (period == 5 && day == 1) {
        p5m.push(eachPractical);
      }
      if (period == 6 && day == 1) {
        p6m.push(eachPractical);
      }
      if (period == 7 && day == 1) {
        p7m.push(eachPractical);
      }
      if (period == 8 && day == 1) {
        p8m.push(eachPractical);
      }
      // Tuesday
      if (period == 1 && day == 2) {
        p1tu.push(eachPractical);
      }
      if (period == 2 && day == 2) {
        p2tu.push(eachPractical);
      }
      if (period == 3 && day == 2) {
        p3tu.push(eachPractical);
      }
      if (period == 4 && day == 2) {
        p4tu.push(eachPractical);
      }
      if (period == 5 && day == 2) {
        p5tu.push(eachPractical);
      }
      if (period == 6 && day == 2) {
        p6tu.push(eachPractical);
      }
      if (period == 7 && day == 2) {
        p7tu.push(eachPractical);
      }
      if (period == 8 && day == 2) {
        p8tu.push(eachPractical);
      }
      // Wednesday
      if (period == 1 && day == 3) {
        p1w.push(eachPractical);
      }
      if (period == 2 && day == 3) {
        p2w.push(eachPractical);
      }
      if (period == 3 && day == 3) {
        p3w.push(eachPractical);
      }
      if (period == 4 && day == 3) {
        p4w.push(eachPractical);
      }
      if (period == 5 && day == 3) {
        p5w.push(eachPractical);
      }
      if (period == 6 && day == 3) {
        p6w.push(eachPractical);
      }
      if (period == 7 && day == 3) {
        p7w.push(eachPractical);
      }
      if (period == 8 && day == 3) {
        p8w.push(eachPractical);
      }
      // Thursday
      if (period == 1 && day == 4) {
        p1th.push(eachPractical);
      }
      if (period == 2 && day == 4) {
        p2th.push(eachPractical);
      }
      if (period == 3 && day == 4) {
        p3th.push(eachPractical);
      }
      if (period == 4 && day == 4) {
        p4th.push(eachPractical);
      }
      if (period == 5 && day == 4) {
        p5th.push(eachPractical);
      }
      if (period == 6 && day == 4) {
        p6th.push(eachPractical);
      }
      if (period == 7 && day == 4) {
        p7th.push(eachPractical);
      }
      if (period == 8 && day == 4) {
        p8th.push(eachPractical);
      }
      // Friday
      if (period == 1 && day == 5) {
        p1f.push(eachPractical);
      }
      if (period == 2 && day == 5) {
        p2f.push(eachPractical);
      }
      if (period == 3 && day == 5) {
        p3f.push(eachPractical);
      }
      if (period == 4 && day == 5) {
        p4f.push(eachPractical);
      }
      if (period == 5 && day == 5) {
        p5f.push(eachPractical);
      }
      if (period == 6 && day == 5) {
        p6f.push(eachPractical);
      }
      if (period == 7 && day == 5) {
        p7f.push(eachPractical);
      }
      if (period == 8 && day == 5) {
        p8f.push(eachPractical);
      }
      // Saturday
      if (period == 1 && day == 6) {
        p1s.push(eachPractical);
      }
      if (period == 2 && day == 6) {
        p2s.push(eachPractical);
      }
      if (period == 3 && day == 6) {
        p3s.push(eachPractical);
      }
      if (period == 4 && day == 6) {
        p4s.push(eachPractical);
      }
      if (period == 5 && day == 6) {
        p5s.push(eachPractical);
      }
      if (period == 6 && day == 6) {
        p6s.push(eachPractical);
      }
      if (period == 7 && day == 6) {
        p7s.push(eachPractical);
      }
      if (period == 8 && day == 6) {
        p8s.push(eachPractical);
      }
    });

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
                <td id="fullBorder"><p id="period">Period</p></td>
                <td id="fullBorder"><p id="monday">Monday</p><button class="btn btn-warning">Print All</button></td>
                <td id="fullBorder"><p id="tuesday">Tuesday</p><button class="btn btn-warning">Print All</button></td>
                <td id="fullBorder"><p id="wednesday">Wednesday</p><button class="btn btn-warning">Print All</button></td>
                <td id="fullBorder"><p id="thursday">Thursday</p><button class="btn btn-warning">Print All</button></td>
                <td id="fullBorder"><p id="friday">Friday</p><button class="btn btn-warning">Print All</button></td>
                <td id="fullBorder"><p id="saturday">Saturday</p><button class="btn btn-warning">Print All</button></td>
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
