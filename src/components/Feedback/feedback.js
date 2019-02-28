import React, { Component } from "react";
import "./feedbackStyling.css";

class Feedback extends Component {
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
    });
  }

  logChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div id="formContainer">
        <div class="col-sm-6" id="form">
          <h2> Feedback! </h2>
          <p> If you would like to give feedback please fill in your information below </p>
          <form onSubmit={this.handleSubmit} method="POST">
            <fieldset>
              <form class="row form">
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="name" class="col-form-label">
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <label for="email" class="col-form-label">
                      Email:
                    </label>
                    <input
                      type="text"
                      class="form-control col-sm"
                      placeholder="Enter Email"
                      name="room"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                  <label for="rating">How do you rate this app?</label>
                  <select class="form-control" id="exampleSelect1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <label for="addNotes" class="col-form-label">
                      What features would you like to see added or improved upon?
                    </label>
                    <textarea
                      class="form-control col"
                      id="exampleTextarea"
                      rows="6"
                      onChange={this.logChange}
                    />
                  </div>
                </div>
              </form>
              <input type="submit" value="Submit" class="btn btn-success" />
            </fieldset>
          </form>
        </div>
        <p id="trademark">Created by Paul Ayling @chemistrytocode</p>
      </div>
    );
  }
}

export default Feedback;
