import React, { Component } from "react";

// import upcomingWeekInterface from '../../interface/upcomingWeekInterface'

import "./tableData.css";

class TableSorter extends Component {
  render() {
    return (
      <div>
        {this.props.p1practicals.map(eachPractical => {
          return (
            <div id="eachPost">
              <div id="innerPost">
                <p id="userFeed">{eachPractical.teacher}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default TableSorter;
