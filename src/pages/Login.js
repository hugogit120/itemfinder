import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import './Login.css';

class Login extends Component {
  state = { usernameOrEmail: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { usernameOrEmail, password } = this.state;
    this.props.login({ usernameOrEmail, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { usernameOrEmail, password } = this.state;

    return (
      <div className="login-container">

        <img width="170" style={{ margin: "40px" }} src="images/item-finder-color.png" />

        <form onSubmit={this.handleFormSubmit}>

          <label className="textlabel">Username:</label>
          <input type="text" className="field" name="usernameOrEmail" value={usernameOrEmail} onChange={this.handleChange} />

          <label className="textlabel">Password:</label>
          <input type="password" className="field" name="password" value={password} onChange={this.handleChange} />
          <div className="center-content">
            <input className="login-button" type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
