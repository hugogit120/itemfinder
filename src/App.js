import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";

import Signup from './pages/Signup';		//		<--	Import 
import Login from './pages/Login';			//		<--	Import 
import Private from './pages/Private';	//		<--	Import 

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Wrap components with AuthProvider, para que puedan ser consumers       */}

        <div className="container">
          <Navbar />
          <h1>Basic React Authentication</h1>

          <Switch>
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
            <PrivateRoute path="/private" component={Private} />
          </Switch>
        </div>

      </AuthProvider>       //       <---  Wrap components with AuthProvider 
    );
  }
}

export default App;
