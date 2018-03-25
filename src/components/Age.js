import React from "react";

class Age extends React.Component {
  constructor() {
    super();
    this.state = {
      age: ""
    };
    this.inputAge = this.inputAge.bind(this);
  }
  inputAge(e) {
    this.setState({
      age: +e.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Age (Human Years)</h1>
        <hr width="20%" />
        <br />
        <form action="">
          <input
            min="1"
            max="25"
            onChange={e => this.inputAge(e)}
            value={this.state.age}
            className="age"
            type="number"
          />
        </form>
      </div>
    );
  }
}
export default Age;
