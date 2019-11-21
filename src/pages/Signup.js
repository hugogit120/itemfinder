import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../services/UploadService";

class Signup extends Component {
  state = { username: "", email: "", password: "", phone: "", fullName: "", avatar: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, email, password, phone, fullName, avatar } = this.state;
    this.props.signup({ username, email, phone, password, fullName, avatar });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = e => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    // creamos un objeto FormData que permite compilar un conjunto de pares clave/valor para enviar mediante AJAX
    const uploadData = new FormData();
    // image => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    const uploaded = uploadData.append("image", e.target.files[0]);

    console.log(uploaded)

    service.handleUpload(uploadData)
      .then(response => {
        // console.log('response is: ', response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ avatar: response.secure_url });
      })
      .catch(err => {
        console.log("Error while uploading the file: ", err);
      });
  }

  render() {
    const { username, password, email, phone, fullName } = this.state;
    return (
      <div className="login-container">

        <img width="170" style={{ margin: "40px" }} src="images/item-finder-color.png" />

        <form onSubmit={this.handleFormSubmit}>

          <input type="file" id="file-input" name="file-input"
            onChange={(e) => this.handleFileUpload(e)} className="create-product-input" name="image" />
          <label htmlFor="file-input">image:</label>

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
