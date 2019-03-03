import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleLogin from "react-google-login";
import "./login.css";
import "../NavBar/bootstrap.css";

const responseGoogle = response => {
  console.log(response);
};

class Login extends Component {
  render() {
    return (
      <div id="loginContainer">
          <h1>Welcome to LabBunny!</h1>
          <GoogleLogin
            clientId="329929199455-fqofslrb94m67a3liamgoh9sck0j2j4e.apps.googleusercontent.com"
            buttonText="Login Using Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
          {document.getElementById("googleButton")}
      </div>
    );
  }
}

export default Login;