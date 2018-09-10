import React, { Component } from "react";
import userLanguage from '../helpers/languageConstants.js';
class Posts extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={{ textAlign: "center",marginTop:'10rem' }}>
          <h1>{userLanguage.en.postsHeader}</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Posts;
