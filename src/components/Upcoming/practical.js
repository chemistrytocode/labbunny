import React, { Component } from "react";
import "./upcomingStyling.css";

class Practical extends Component {
  render() {
      const practical = this.props.practical
    return (
      <div id="upcomingContainer">
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
              <td id="period" colspan="2">
                {practical.form}
              </td>
            </tr>
            <tr class="table-light">
              <td id="LRborder">
                <h4>Period</h4>
              </td>
              <td id="period" colspan="2">
                {practical.period}
              </td>
            </tr>
            <tr class="table-light">
              <td id="LRborder">
                <h4>Sets</h4>
              </td>
              <td id="sets" colspan="2">
                {practical.sets}
              </td>
            </tr>
            <tr class="table-light">
              <td id="fullBorder" colspan="3">
                <h4>Description</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td id="upDescription" colspan="3">
                {practical.description}
              </td>
            </tr>
            <tr class="table-light">
              <td>
                <h4>Chemicals</h4>
              </td>
              <td id="upQuantity">
                <h4>Quantity</h4>
              </td>
              <td id="upPeriod">
                <h4>Hazards</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td id="upChemcials">{practical.chemical}</td>
              <td id="upQuantity">{practical.quantity}</td>
              <td id="upHazards">{practical.hazards}</td>
            </tr>
            <tr class="table-light">
              <td id="LRborder" colspan="3">
                <h4>Apparatus</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td id="upApparatus" colspan="3">
                {practical.apparatus}
              </td>
            </tr>
            <tr class="table-light">
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

                <input
                  type="submit"
                  value="ReOrder Practical"
                  class="btn btn-danger"
                />
              </td>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Practical;
