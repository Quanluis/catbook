import React from 'react';
import { Link } from 'react-router-dom'

class Main extends React.Component{
    constructor(){
        super();
        this.state = {
            email: "",
            password: ""

        };
    }
    userEmail(event){
        this.setState({
            email: event.target.value
        })
    }


    userPassword(event){
        this.setState({
            password: event.target.value
        })
    }


    render(){
        return(
            <div>
                <h1>Login</h1>
                <hr width = '30%'/>
                <form action = "submit" >
                    <br/> 
                <input value = {this.state.email}
                onChange = {this.userEmail.bind(this)}
                type = 'email'  
                className ="form"  placeholder = "email"/>
                    <br/>
                 <input value = {this.state.password}
                   onChange = {this.userPassword.bind(this)}
                  className = "form" type="password" placeholder = "Enter Password" />
                <button>Login</button>     
                </form>          
                <Link className = "link" to = './createProfile'> Login </Link> 
                <Link className = "link" to = './Signup'> signup </Link>
            </div>
        )
    }
}
export default Main;