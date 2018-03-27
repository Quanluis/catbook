import React from 'react';
import Main from './Main'

class Aftersignup extends React.Component{
    render(){
        return(
            <div>
            <br/>
             <p>You have succesfully created a account! Login with your current email and password</p>
             <Main />
            </div>
        )
    }
}
export default Aftersignup;