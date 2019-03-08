import React, { Component } from "react";

// import upcomingWeekInterface from '../../interface/upcomingWeekInterface'

import "./tableSorter.css";

class TableSorter extends Component {
  render() {
    return (
      <div>
        {this.props.p1practicals.map(eachPractical => {
          return (
            <div id="outerEachPractical">
              <div id="innerEachPractical">
                <p id="eachTeacher">{eachPractical.teacher}</p>
                <p id="eachForm">{eachPractical.form}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TableSorter;
