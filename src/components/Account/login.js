import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import "./login.css";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
    this.sortData = this.sortData.bind(this);
    this.getOrAddUser = this.getOrAddUser.bind(this);
  }

  sortData(res, type) {
    let data;
    if (type === "google" && res.w3.U3) {
      let sanitizedEmail = res.w3.U3;
      sanitizedEmail = sanitizedEmail.replace(/\./g, "-2e5");
      data = {
        name: res.w3.ig,
        provider: type,
        email: sanitizedEmail,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    console.log(data);
    return data;
  }

  getOrAddUser(data) {
    if (data) {
      fetch(`/user/${data.email}`)
        .then(response => response.json())
        .then(users => {
          // If data exists, gets and stores data locally
          if (users[0]) {
            sessionStorage.setItem("userEmail", users.email);
            sessionStorage.setItem("userName", users.name);
            this.setState({ redirect: true });
          }
          // Else, posts to DB and stores data locally.
          else {
            fetch("/user", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(data)
            }).then(response => {
              sessionStorage.setItem("userEmail", data.email);
              sessionStorage.setItem("userName", data.name);
              console.log(data.email);
              console.log(data.name);
              this.setState({ redirect: true });
            });
          }
        });
    }
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to={"/upcoming"} />;
    }

    // Receive reponse from Google
    const responseGoogle = response => {
      console.log("google console");
      console.log(response);
      let sortedData = this.sortData(response, "google");
      this.getOrAddUser(sortedData);
    };

    return (
      <div className="row body">
        <GoogleLogin
          clientId="329929199455-fqofslrb94m67a3liamgoh9sck0j2j4e.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    );
  }
}

export default Login;
