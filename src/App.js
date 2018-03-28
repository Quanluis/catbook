import React, { Component } from "react";
import { Profile } from "./Profile";
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Main from './components/Main';
import Aftersignup from "./components/Aftersignup";

class App extends Component {

  render() {
    return (
      <div>
        <div>
          <h1>Catbook</h1>
          <hr width="70%" />
        </div>
        <div>
          <p>
            Welcome to the Catbook! Create a profile for your furry friend and
            have the Option for others to see them!
          </p>
        </div>
        <div>
          <Switch>
          <Route path = '/' exact component = {Main} /> 
          <Route path = '/aftersignup' exact component = {Aftersignup} />
          <Route path = '/signup' exact component = {SignUp} />
          <Route path = '/createprofile' exact component = {Profile} />
          <Redirect from = '/aftersignup/*' to = '/aftersignup' />
          <Redirect from = '/signup/*' to = '/signup' />
          <Redirect from = '/createprofile/*' to = "/createprofile" />
          </Switch>           
        </div>
      </div>
    );
  }
}

export default withRouter(App);
