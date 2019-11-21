import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { username: "", email: "", password: "", phone: "", fullName: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password, phone, fullName } = this.state;
    this.props.signup({ username, email, phone, password, fullName });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password, email, phone, fullName } = this.state;
    return (
      <div className="login-container">

        <img width="170" style={{ margin: "40px" }} src="images/item-finder-color.png" />

        <form onSubmit={this.handleFormSubmit}>

          <label className="textlabel" >Username:</label>
          <input type="text" className="field" name="username" value={username} onChange={this.handleChange} />

          <label className="textlabel" >FullName:</label>
          <input type="text" className="field" name="fullName" value={fullName} onChange={this.handleChange} />

          <label className="textlabel">Email:</label>
          <input type="email" className="field" name="email" value={email} onChange={this.handleChange} />

          <label className="textlabel">Phone:</label>
          <input type="text" className="field" name="phone" value={phone} onChange={this.handleChange} />

          <label className="textlabel">Password:</label>
          <input type="password" className="field" name="password" value={password} onChange={this.handleChange} />

          <div className="center-content">
            <input className="login-button" type="submit" value="Signup" />
          </div>
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
