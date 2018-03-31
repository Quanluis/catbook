import React from "react";
import { Link } from "react-router-dom";
import { login } from "../store";
import { connect } from "react-redux";

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      isloggedIn: false
    };
  }
  userEmail(event) {
    this.setState({
      email: event.target.value
    });
  }

  userPassword(event) {
    this.setState({
      password: event.target.value
    });
  }
  handleSubmit(e) {
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <hr width="30%" />
        <form action="submit">
          <br />
          <input
            value={this.state.email}
            onChange={this.userEmail.bind(this)}
            type="email"
            className="form"
            placeholder="email"
          />
          <br />
          <input
            value={this.state.password}
            onChange={this.userPassword.bind(this)}
            className="form"
            type="password"
            placeholder="Enter Password"
          />
          <button onClick={this.handleSubmit.bind(this)}>Login</button>
        </form>
        <Link
          onClick={this.handleSubmit.bind(this)}
          className="link"
          to="./createProfile"
        >
          {""}
          Login{" "}
        </Link>
        <Link className="link" to="./Signup">
          {" "}
          signup{" "}
        </Link>
      </div>
    );
  }
}
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  login: (email, password) => dispatch(login(email, password))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
