import React, { Component } from 'react';
import {Profile} from './Profile';

class App extends Component {

  constructor(){
    super();
    this.state = {
      showComponent: false,
    }
    this._onButtonClick = this._onButtonClick.bind(this);
  }
    _onButtonClick(){
      this.setState({
        showComponent: true,
      })
    }

  render() {
    return (
    <div>
        <div>
          <h1>Catbook</h1>
          <hr width = '70%' />
        </div>
            <div>
             <p>
             Welcome to the Catbook! Create a profile for your furry friend and have the Option for 
             others to see them!  
             </p>          
            </div>
        <div>
        <button onClick = {this._onButtonClick} > Create Profile  </button> 
        {this.state.showComponent ? <Profile />: null}
        </div>
      </div>
    );
  }
}

export default App;
