import React, { Component } from 'react';

class SocialPost extends Component {

  render() {
    return (
      <div className="social-post">
        <p>{this.props.title}</p>
      </div>
    );
  }
}

export default SocialPost;
