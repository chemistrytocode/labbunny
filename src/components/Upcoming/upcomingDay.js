import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./upcomingStyling.css";

class UpcomingDay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      practical: []
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;

    fetch(`http://localhost:5000/reqs/${id}`)
      .then(response => response.json())
      .then(practical => {
        this.setState({ practical: practical[0] });
      });
  }
  render() {
    const { practical } = this.state;

    return (
      <div id="upcomingContainer">
        <h2>Ordered By: {practical.teacher}</h2>
        <h3>For: {new Date(practical.datereq).toDateString()}</h3>
        <h3>Period: {practical.period}</h3>
        <div id="upcomingContainer" class="col-sm-4">
          <table class="table table-hover" id="fullBorder">
            <thead>
              <tr>
                <td id="fullBorder" colspan="3">
                  <h3>{practical.teacher}</h3>
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">
                  <h4>Form</h4>
                </td>
                <td id="matchForm" colspan="2">
                  {practical.form}
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">
                  <h4>Period</h4>
                </td>
                <td id="matchPeriod" colspan="2">
                  {practical.period}
                </td>
              </tr>
              <tr class="table-light">
                <td id="LRborder">
                  <h4>Sets</h4>
                </td>
                <td id="matchSets" colspan="2">
                  {practical.sets}
                </td>
              </tr>
              <tr class="table-light">
                <td id="fullBorder" colspan="3">
                  <h4>Description</h4>
                </td>
              </tr>
              <tr class="table-light">
                <td id="matchDescription" colspan="3">
                  {practical.description}
                </td>
              </tr>
              <tr class="table-light">
                <td id="fullBorder">
                  <h4>Chemicals</h4>
                </td>
                <td id="fullBorder">
                  <h4>Quantity</h4>
                </td>
                <td id="fullBorder">
                  <h4>Hazards</h4>
                </td>
              </tr>
              <tr class="table-light">
                <td id="matchChemicals fullBorder">{practical.chemical}</td>
                <td id="matchQuantity fullBorder">{practical.quantity}</td>
                <td id="matchHazards fullBorder">{practical.hazards}</td>
              </tr>
              <tr class="table-light">
                <td id="fullBorder" colspan="3">
                  <h4>Apparatus</h4>
                </td>
              </tr>
              <tr class="table-light" id="fullBorder">
                <td id="matchApparatus fullBorder" colspan="3">
                  {practical.apparatus}
                </td>
              </tr>
              <tr class="table-light fullBorder">
                <td id="editButton" colspan="3">
                  <input
                    type="submit"
                    value="Print Practical"
                    class="btn btn-info"
                  />
                    <input
                      type="submit"
                      value="Edit Practical"
                      class="btn btn-warning"
                    />
                  <Link to={{ pathname: '/reorder', state: { practical: practical} }}>
                  <input
                    type="submit"
                    value="ReOrder Practical"
                    class="btn btn-danger"
                  />
                  </Link>

                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  }
}

export default UpcomingDay;
