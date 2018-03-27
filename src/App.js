import React, { Component } from "react";
import { Profile } from "./Profile";
import { Route, withRouter } from 'react-router-dom';
import SignUp from "./components/SignUp";
import Main from './components/Main';

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
          <Route path = '/' exact component = {Main} /> 
          <Route path = '/signup' component = {SignUp} />
          <Route path = '/createprofile' component = {Profile} />           
        </div>
      </div>
    );
  }
}

export default withRouter(App);
