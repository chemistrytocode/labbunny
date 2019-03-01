import React, { Component } from "react";
import NavBar from '../NavBar/navbar'

import "./upcomingStyling.css";

class Practical extends Component {
  render() {
    return (
      <div id="upcomingContainer">
        <table class="table table-hover" id="fullBorder">
          <thead>
            <tr>
              <td id="fullBorder" colspan="3">
                <h3>PopulateTeacher</h3>
              </td>
            </tr>
            <tr class="table-light">
              <td id="LRborder">
                <h4>Form</h4>
              </td>
              <td id="period" colspan="2">
                PopualteForm
              </td>
            </tr>
            <tr class="table-light">
              <td id="LRborder">
                <h4>Period</h4>
              </td>
              <td id="period" colspan="2">
                PopualtePeriod
              </td>
            </tr>
            <tr class="table-light">
              <td id="LRborder">
                <h4>Sets</h4>
              </td>
              <td id="sets" colspan="2">
                PopulateSets
              </td>
            </tr>
            <tr class="table-light">
              <td id="fullBorder" colspan="3">
                <h4>Description</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td id="description" colspan="3">
                PopulateDescription
              </td>
            </tr>
            <tr class="table-light">
              <td>
                <h4>Chemicals</h4>
              </td>
              <td id="period">
                <h4>Quantity</h4>
              </td>
              <td id="period">
                <h4>Hazards</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td id="chemcials">PopulateChemicals</td>
              <td id="quantity">PopulateQuantity</td>
              <td id="hazards">PopulateHazards</td>
            </tr>
            <tr class="table-light">
              <td id="LRborder" colspan="3">
                <h4>Apparatus</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td id="apparatus" colspan="3">
                PopulateApparatus
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
