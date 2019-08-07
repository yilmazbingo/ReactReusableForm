import React from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
import Bootstrap from "bootstrap/dist/css/bootstrap.css";

class Login extends Form {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //call the server
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} className="p-5">
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default Login;
