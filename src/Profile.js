import React from 'react';
import CatName from './Catname';
import Gender from './Gender';
import Age from './Age';

export class Profile extends React.Component {
    render(){
        return(
            <div>
                <h1 className = "profile">
                    Furry Profile Maker! 
                </h1>
                <CatName />   
                <Gender />  
                <Age />   
            </div>
        )
    }
}
export default Profile;