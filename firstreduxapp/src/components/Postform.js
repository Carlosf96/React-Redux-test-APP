import React, { Component } from "react";

class Postform extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" />
          </div>
          <div>
            <label>Title: </label>
            <br />
            <input type="text" />
          </div>
          <br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    );
  }
}

export default Postform;
