import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

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
        <h1>LOG IN</h1>
        <form onSubmit={this.handleFormSubmit}>

          <label>Username:</label>
          <input type="text" name="usernameOrEmail" value={usernameOrEmail} onChange={this.handleChange} />

          <label>Password:</label>
          <input type="password" name="password" value={password} onChange={this.handleChange} />

          <input type="submit" value="Login" />

        </form>
      </div>
    );
  }
}

export default withAuth(Login);
