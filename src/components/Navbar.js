import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;
    return (
      <nav style={navStyle}>
        {
          // si el usuario está logueado, muestra el username y el botón Logout, sino muestra los botones de Login y Signup
          isLoggedin ?
            (<ul style={ulStyle}>
              <li>username: {user.username}</li>
              <li><button onClick={logout}>Logout</button></li>
              <li><Link to="/my-profile"> <button>Profile</button> </Link></li>
              <li><Link to="/add-product"> <button>Add Product</button> </Link></li>
              <li><Link to="/"> <button>Home</button> </Link></li>
            </ul>)
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
  background: '#686de0'
}

const ulStyle = {
  display: "flex",
  justifyContent: "flex-end",
  listStyle: "none"
}



export default withAuth(Navbar);
