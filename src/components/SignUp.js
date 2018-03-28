import React from "react";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <hr width="40%" />
        <p> Sign up with a valid email address and password. </p>
        <form>
          <input className="form" type="email" placeholder="email" />
          <br />
          <input
            className="form"
            type="password"
            placeholder="Enter password"
          />
          <br />
          <input
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
