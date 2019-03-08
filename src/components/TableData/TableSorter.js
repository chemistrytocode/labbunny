import React, { Component } from "react";
import { Link } from "react-router-dom";

// import upcomingWeekInterface from '../../interface/upcomingWeekInterface'

import "./tableSorter.css";

class TableSorter extends Component {
  render() {
    return (
      <div>
        {this.props.p1practicals.map(eachPractical => {
          return (
            <div id="outerEachPractical">
              <button id="innerEachPractical">
                <Link to={`/upcoming/${eachPractical.id}`}>
                  <p id="eachTeacher">{eachPractical.teacher}</p>
                  <p id="eachForm">{eachPractical.form}</p>
                </Link>
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TableSorter;
