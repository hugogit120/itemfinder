import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
//import Logo from "../images/item-finder-color.png"
import './Navbar.css'

class Navbar extends Component {

  render() {

    const { user, logout, isLoggedin } = this.props;
    return (


      <nav style={navStyle}>
        {
          // si el usuario está logueado, muestra el username y el botón Logout, sino muestra los botones de Login y Signup
          isLoggedin ?
            (<nav className="navbar navbar-expand-lg navbar-dark bg-29374E navStyle">
              <img width="170" src="images/item-finder-blanco.png" />
              <button id="navbar-button" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarToggler">
                <a className="navbar-brand" href="#">{user.username}</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" className="nav-item">
                    <Link className="nav-link" to="/"> Home </Link>
                  </li>
                  <li data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" lassName="nav-item">
                    <Link className="nav-link" to="/my-profile">Profile</Link>
                  </li>
                  <li data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" className="nav-item">
                    <Link className="nav-link" to="/add-product">Add Product </Link>
                  </li>

                  <li className="nav-item">
                    <Link onClick={logout} className="nav-link" href="#" tabIndex="-1">Logout</Link>
                  </li>
                </ul>

              </div>
            </nav>)
            :
            (<div>
              <Link to="/"> <button>Home</button> </Link>
              <Link to="/login"> <button>Login</button> </Link>
              <br />
              <Link to="/signup"> <button>Signup</button> </Link>
            </div>)
        }
      </nav>
    );
  }
}

const navStyle = {
  background: '#29374E',

}

const ulStyle = {
  display: "flex",
  justifyContent: "flex-end",
  listStyle: "none"
}



export default withAuth(Navbar);
