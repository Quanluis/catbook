import React from 'react';
import CatName from './Catname';
import Gender from './Gender';
import Age from './Age';
import Description from './Description';
import ImageProfile from './ImageProfile';

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
                <Description />
                <ImageProfile />
            </div>
        )
    }
}
export default Profile;