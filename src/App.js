import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";
import Navbar from "./components/Navbar";
import Signup from './pages/Signup';		//		<--	Import 
import Login from './pages/Login';			//		<--	Import 
import Private from './pages/Private';	//		<--	Import 
import Index from './pages/Index';	//		<--	Import 
import MyProfile from './pages/profile/MyProfile'
import ProductDetails from './pages/products/ProductDetails'

import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";
import ProfileRoute from "./components/Profile"
import AddProduct from "./pages/products/AddProduct";
import EditProduct from "./pages/products/EditProduct";
import './App.css'

class App extends Component {
  render() {
    return (
      <AuthProvider>        {/*       <---  Wrap components with AuthProvider, para que puedan ser consumers       */}

        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path='/product/:id' exact component={ProductDetails} />
            <PrivateRoute path="/private" exact component={Private} />
            <PrivateRoute path="/add-product" exact component={AddProduct} />
            <PrivateRoute path="/product/:id/edit" exact component={EditProduct} />
            <PrivateRoute path="/my-profile" exact component={MyProfile} />
            <AnonRoute path="/signup" exact component={Signup} />
            <AnonRoute path="/login" exact component={Login} />
            {/*           <ProfileRoute path="/profile/:id" component={MyProfile} /> */}
          </Switch>
        </div>

      </AuthProvider>       //       <---  Wrap components with AuthProvider 
    );
  }
}

export default App;
