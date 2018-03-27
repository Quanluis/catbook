import React from 'react'; 

class SignUp extends React.Component {
    render(){
        return(
            <div>
                <h1>
                    Sign Up 
                </h1>
                <hr width = '40%'/>
                <p> Sign up with a valid email address and password. </p>
                <form>
                    <input className ="form" type="email" placeholder = "email"/>
                    <br/>
                    <input className = "form" type="password" placeholder = "Enter password" />
                    <br/>
                    <input className = "form" type="password" placeHolder = "Enter Password twice"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default SignUp; 