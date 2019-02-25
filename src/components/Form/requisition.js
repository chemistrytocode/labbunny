import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import "./bootstrap.css"

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
    fetch("http://localhost:5000/users/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div class="col-sm-10">
        <h2> Practical Order </h2>
        <form onSubmit={this.handleSubmit} method="POST">
          <fieldset>
            <div class="form-group row">
              <label for="name" class="col-sm-2 col-form-label">Name</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Name"
                name="name"
                onChange={this.logChange}
              />
              <label for="room" class="col-sm-2 col-form-label">Room</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Room"
                name="room"
                onChange={this.logChange}
              />
              <label for="date" class="col-sm-2 col-form-label">Date</label>
              <input
                type="date"
                class="form-control"
                name="date"
                onChange={this.logChange}
              />
            </div>
            <div class="form-group row">
              <label for="period">Period</label>
              <input
                type="number"
                class="form-control"
                name="period"
                onChange={this.logChange}
              />
              <label for="description">Description</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Description"
                name="description"
                onChange={this.logChange}
              />
              <label for="fileUpload">File Upload</label>
              <input
                type="file"
                class="form-control"
                name="fileUpload"
                onChange={this.logChange}
              />
            </div>
            <div class="form-group row">
              <label for="chemical">Chemical</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Chemical"
                name="chemical"
                onChange={this.logChange}
              />
              <label for="quantity">Quantity</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Quantity"
                name="quantity"
                onChange={this.logChange}
              />
              <label for="quantity">Allocation</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Allocation"
                name="allocation"
                onChange={this.logChange}
              />
              <label for="hazards">Hazards</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Hazards"
                name="hazards"
                onChange={this.logChange}
              />
              <label for="doc">Demo or Class?</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter DoC"
                name="doc"
                onChange={this.logChange}
              />
              <label for="sets">Sets</label>
              <input
                type="number"
                class="form-control"
                name="sets"
                onChange={this.logChange}
              />
            </div>
            <div class="form-group row">
              <label for="apparatus">Apparatus</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Apparatus"
                name="apparatus"
                onChange={this.logChange}
              />
              <label for="addNotes">Additional Notes</label>
              <input
                type="text"
                class="form-control"
                placeholder="Enter Additional Notes"
                name="addNotes"
                onChange={this.logChange}
              />
            </div>
            <input type="submit" value="Submit" class="btn btn-success" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Requisition;
