import React, { Component } from "react";
import "./upcomingStyling.css";

class Practical extends Component {
  render() {
    return (
      <div id="upcomingContainer">
        <table class="table table-hover" id="fullBorder">
          <thead>
            <tr>
              <td scope="col" id="fullBorder" colspan="3">
                <h3>PopulateTeacher</h3>
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="LRborder">
                <h4>Form</h4>
              </td>
              <td scope="col" id="period" colspan="2">
                PopualteForm
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="LRborder">
                <h4>Period</h4>
              </td>
              <td scope="col" id="period" colspan="2">
                PopualtePeriod
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="LRborder">
                <h4>Sets</h4>
              </td>
              <td scope="col" id="sets" colspan="2">
                PopulateSets
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="fullBorder" colspan="3">
                <h4>Description</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="description" colspan="3">
                PopulateDescription
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col">
                <h4>Chemicals</h4>
              </td>
              <td scope="col" id="period">
                <h4>Quantity</h4>
              </td>
              <td scope="col" id="period">
                <h4>Hazards</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="chemcials">
                PopulateChemicals
              </td>
              <td scope="col" id="quantity">
                PopulateQuantity
              </td>
              <td scope="col" id="hazards">
                PopulateHazards
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="LRborder" colspan="3">
                <h4>Apparatus</h4>
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="apparatus" colspan="3">
                PopulateApparatus
              </td>
            </tr>
            <tr class="table-light">
              <td scope="col" id="editButton" colspan="3">
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
