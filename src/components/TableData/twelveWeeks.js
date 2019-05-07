import React, { Component } from "react";
import "./tableSorter.css";

class TwelveWeeks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      today: "",
      week1: "",
      week2: "",
      week3: "",
      week4: "",
      week5: "",
      week6: "",
      week7: "",
      week8: "",
      week9: "",
      week10: "",
      week11: "",
      week12: ""
    };
  }

  componentDidMount() {
    let weekStart = new Date();
    let today = new Date();

    function setWeek(weekNumber) {
      if (today.getDay() != 1) {
        weekStart.setDate(
          today.getDate() + (weekNumber - 1) * 7 - (today.getDay() - 1)
        );
      } else {
        weekStart.setDate(today.getDate());
      }
      return weekStart.toLocaleDateString();
    }

    this.setState({
      today: new Date().toLocaleDateString(),
      week1: `${setWeek(1)}`,
      week2: `${setWeek(2)}`,
      week3: `${setWeek(3)}`,
      week4: `${setWeek(4)}`
    });
  }

  render() {
    return (
      <div id="selectionContainer" class="col-md-12">
        <h3>Today is {`${this.state.today}`}</h3>
        <p>Select a week range to change the display!</p>
        <select
          class="form-control"
          id="weekSelection"
          name="week"
          onChange={(this.props.logChange, this.props.updateTable)}
        >
          <option />
          <option>{this.state.week1}</option>
          <option>{this.state.week2}</option>
          <option>{this.state.week3}</option>
          <option>{this.state.week4}</option>
        </select>
        <p />
        <p>Click on the orders below for detailed information</p>
        <p>Click on Print All to see all orders for that day</p>
      </div>
    );
  }
}

export default TwelveWeeks;
