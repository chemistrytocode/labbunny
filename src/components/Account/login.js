import React, { Component } from "react";
import GoogleLogin from "react-google-login";
import { Redirect } from "react-router-dom";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      redirect: false
    };
    this.signup = this.signup.bind(this);
  }

  // Receive Google response and "Google" type.
  signup(res, type) {
    let data;
    // Set Data
    if (type === "facebook" && res.email) {
      data = {
        name: res.name,
        provider: type,
        email: res.email,
        provider_id: res.id,
        token: res.accessToken,
        provider_pic: res.picture.data.url
      };
    }
    if (type === "google" && res.w3.U3) {
      // From response set JSON for Database Query
      data = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
    }
    console.log(data);

    if (data) {
      // Post to Database
      fetch("/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      }).then(response => {
        // Set Redirect to True
        this.setState({ redirect: true });
      });
    } else {
    }
  }

  render() {
    if (this.state.redirect || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    // Recieve response from Facebook
    const responseFacebook = response => {
      console.log("facebook console");
      console.log(response);
      // Forward information to Signup Method
      this.signup(response, "facebook");
    };

    // Receive reponse from Google
    const responseGoogle = response => {
      console.log("google console");
      console.log(response);
      // Forward information to Signup Method
      this.signup(response, "google");
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
