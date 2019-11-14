import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";	

class Navbar extends Component {
  render() {

    const { user, logout, isLoggedin } = this.props;
    return (
      <div style={{ borderRadius: '5px', padding: '20px', background: '#686de0'}}>
        {
          // si el usuario está logueado, muestra el username y el botón Logout, sino muestra los botones de Login y Signup
          isLoggedin ? 
          (<div>
            <p>username: {user.username}</p>
            <button onClick={logout}>Logout</button>
          </div>) 
         : 
          (<div>
            <Link to="/login"> <button>Login</button> </Link>
            <br/>
            <Link to="/signup"> <button>Signup</button> </Link>
          </div>)
        }
      </div>
    );
  }
}

export default withAuth(Navbar);
