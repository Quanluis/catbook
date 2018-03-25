import React from "react";

class ImageProfile extends React.Component {
  render() {
    return (
      <div>
        <h1>Cat Image</h1>
        <hr width="20%" />
        <p>Upload Your cat Image!</p>
        <form className="image">
          <input className="image" type="file" name="" id="" />
        </form>
      </div>
    );
  }
}
export default ImageProfile;
