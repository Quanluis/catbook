import React from 'react';
import { Link } from 'react-router-dom'

class Main extends React.Component{
    render(){
        return(
            <div>
                <h1>Login</h1>
                <hr width = '30%'/>
                <form>
                    <br/> 
                <input className ="form" type="email" placeholder = "Email"/>
                    <br/>
                 <input className = "form" type="password" placeholder = "Enter Password" />
                <button>Login</button>
                </form>
                <Link className = "link" to = './Signup'> signup </Link>
            </div>
        )
    }
}
export default Main;