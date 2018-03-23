import React from 'react';
import CatName from './components/Catname';
import Gender from './components/Gender';
import Age from './components/Age';
import Description from './components/Description';
import ImageProfile from './components/ImageProfile';

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