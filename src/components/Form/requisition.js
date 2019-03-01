import React, { Component } from "react";
import "./requisitionStyling.css";

class Requisition extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: "",
    //   email: "",
    //   password: "",
    //   loggedIn: false
    // };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logChange = this.logChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    var data = {
      name: this.state.name,
      room: this.state.room,
      dateReq: this.state.dateReq,
      description: this.state.description,
      fileupload: this.state.fileUpload,
      chemical: this.state.chemical,
      quantity: this.state.quantity,
      allocation: this.state.allocation,
      hazards: this.state.hazards,
      sets: this.state.sets,
      apparatus: this.state.doc,
      addNotes: this.state.doc
    };

    console.log(data);
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="formContainer">
        <div class="col-sm-11" id="form">
          <h2> Practical Order! </h2>
          <form onSubmit={this.handleSubmit} method="POST">
            <fieldset>
              <div class="row form">
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="name" class="col-form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Enter Name"
                      name="name"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="room" class="col-form-label">
                      Room:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Room"
                      name="room"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="date" class="col-form-label">
                      Date:
                    </label>
                    <input
                      type="date"
                      class="form-control col-sm"
                      name="date"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label id="period" class="col-form-label">
                      Period:
                    </label>
                    <input
                      type="number"
                      class="form-control col-sm"
                      name="period"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="form-group">
                    <label id="description" class="col-form-label">
                      Practical Description:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Description"
                      name="description"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label id="sets" class="col-form-label">
                      Number of Sets:
                    </label>
                    <input
                      type="number"
                      class="form-control col-sm"
                      name="sets"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label id="fileUpload" class="col-form-label">
                      File Upload:
                    </label>
                    <input
                      type="file"
                      class="form-control col-sm"
                      name="fileUpload"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label id="chemical" class="col-form-label">
                      Chemical:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Chemical"
                      name="chemical"
                      onChange={this.logChange}
                    />
                  </div>
                </div>

                <div class="col-md-2">
                  <div class="form-group">
                    <label id="quantity" class="col-form-label">
                      Quantity:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Quantity"
                      name="quantity"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="form-group">
                    <label id="quantity" class="col-form-label">
                      Allocation:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Bulk or Individual?"
                      name="allocation"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="form-group">
                    <label id="hazards" class="col-form-label">
                      Hazards:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Hazards"
                      name="hazards"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="apparatus" class="col-form-label">
                      Apparatus:
                    </label>
                    <textarea
                      class="form-control col"
                      id="exampleTextarea"
                      rows="6"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="addNotes" class="col-form-label">
                      Additional Notes:
                    </label>
                    <textarea
                      class="form-control col"
                      id="exampleTextarea"
                      rows="6"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
              </div>
              <input type="submit" value="Submit!" class="btn btn-success" />
            </fieldset>
          </form>
        </div>
        <p id="trademark">Created by Paul Ayling @chemistrytocode</p>
      </div>
    );
  }
}

export default Requisition;
