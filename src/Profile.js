import React from 'react';
import CatName from './Catname';
import Gender from './Gender';

export class Profile extends React.Component {
    render(){
        return(
            <div>
                <h1 className = "profile">
                    Furry Profile Maker! 
                </h1>
                <CatName />   
                <Gender />    
            </div>
        )
    }
}
export default Profile;