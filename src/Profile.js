import React from 'react';
import CatName from './components/Catname';
import Gender from './components/Gender';
import Age from './components/Age';
import Description from './components/Description';
import ImageProfile from './components/ImageProfile';
import SubmitBUtton from './components/SubmitButton';

export class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          showComponent: false
        };
        this._onButtonClick = this._onButtonClick.bind(this);
      }
      _onButtonClick() {
        this.setState({
          showComponent: true
        });
      }
    
    render(){
        return(
            <div>          
        <h1 className = "profile">
                    Furry Profile Maker! 
                </h1>
                <CatName />   
                <Gender />  
                <Age />  
                <Description />
                <ImageProfile />
                <SubmitBUtton />    
            </div>
        )
    }
}
export default Profile;