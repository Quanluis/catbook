import React from "react";

class Description extends React.Component {
  constructor() {
    super();
    this.State = {
      descript: ""
    };
  }
  descriptionChange(event) {
    this.setState({
      descript: +event.target.value
    });
  }

  render() {
    return (
      <div>
        <h1>Description</h1>
        <hr width="40%" />
        <p>Show off some Cool info,story,Anything about your friend!</p>
        <br />
        <form className="description">
          <textarea
            onInput={this.descriptionChange.bind(this)}
            className="des-box"
            rows="5"
            col="40"
          />
        </form>
      </div>
    );
  }
}
export default Description;
