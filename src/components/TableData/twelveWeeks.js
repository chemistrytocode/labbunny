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

    this.logChange = this.logChange.bind(this);
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log({ [e.target.name]: e.target.value });
  }

  componentDidMount() {
    var weekStart = new Date();
    var weekEnd = new Date();
    var today = new Date();

    function setWeek(weekNumber) {
      if (today.getDay() != 1) {
        weekStart.setDate(
          today.getDate() + (weekNumber - 1) * 7 - (today.getDay() - 1)
        );
      } else {
        weekStart.setDate(today.getDate());
      }
      weekEnd.setDate(weekStart.getDate() + 6);
      return `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
    }

    this.setState({
      today: new Date().toDateString(),
      week1: setWeek(1),
      week2: setWeek(2),
      week3: setWeek(3),
      week4: setWeek(4),
      week5: setWeek(5),
      week6: setWeek(6),
      week7: setWeek(7),
      week8: setWeek(8),
      week9: setWeek(9),
      week10: setWeek(10),
      week11: setWeek(11),
      week12: setWeek(12)
    });
  }

  render() {

    console.log(this.state.week1);
    return (
      <div id="selectionContainer" class="col-md-12">
        <h3>Today is {`${this.state.today}`}</h3>
        <p>Select a week range to change the display!</p>
        <select
          class="form-control"
          id="weekSelection"
          name="week"
          onChange={this.logChange}
        >
          <option>{this.state.week1}</option>
          <option>{this.state.week2}</option>
          <option>{this.state.week3}</option>
          <option>{this.state.week4}</option>
          <option>{this.state.week5}</option>
          <option>{this.state.week6}</option>
          <option>{this.state.week7}</option>
          <option>{this.state.week8}</option>
          <option>{this.state.week9}</option>
          <option>{this.state.week10}</option>
          <option>{this.state.week11}</option>
          <option>{this.state.week12}</option>
        </select>
        <p />
        <p>Click on the orders below for detailed information</p>
        <p>Click on Print All to see all orders for that day</p>
      </div>
    );
  }
}

export default TwelveWeeks;
