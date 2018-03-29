import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      passwordTwice: ""
        
    };
  }
   signUpEmail(event){
     this.setState ({
       email: event.target.value
     });
   }
   signUpPassword(event){
     this.setState ({
       password: event.target.value
     });
   }
   signUpPasswordTwice(event){
     this.setState({
       passwordTwice: event.target.value
     })
   }


  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <hr width="40%" />
        <p> Sign up with a valid email address and password. </p>
        <form>
          <input
          value = {this.state.email}
          onChange = {this.signUpEmail.bind(this)}      
          className="form" type="email" placeholder="email" />
          <br />
          <input
             value = {this.state.password}
             onChange = {this.signUpPassword.bind(this)}  
            className="form"
            type="password"
            placeholder="Enter password"
          />
          <br />
          <input
            value = {this.state.passwordTwice}
            onChange = {this.signUpPasswordTwice.bind(this)}
            className="form"
            type="password"
            placeholder="Enter Password twice"
          />
          <button>
            {" "}
            <Link to="/Aftersignup"> Login </Link>{" "}
          </button>
        </form>
      </div>
    );
  }
}
export default SignUp;
