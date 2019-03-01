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
      email: this.state.email,
      rating: this.state.rating,
      addNotes: this.state.addNotes,
    };

    console.log(data);
    fetch("http://localhost:5000/feedback", {
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
          <form onSubmit={this.handleSubmit} method="POST" class="row form">
            <fieldset>
              <div class="row form">
                <div class="col-sm-6">
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
                <div class="col-sm-6">
                  <div class="form-group">
                    <label id="email" class="col-form-label">
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
                  <label id="rating">How do you rate this app?</label>
                  <select class="form-control" id="rating">
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
                    <label idea="addNotes" class="col-form-label">
                      What features would you like to see added or improved upon?
                    </label>
                    <textarea
                      class="form-control col"
                      id="addNotes"
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

export default Feedback;
