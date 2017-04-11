import React, { Component } from 'react';

class SocialPost extends Component {

  // TODO: Responsize images
  // Activity (Likes, smiles, comments)

  render() {
    return (
      <div className="social-post" style={{backgroundColor:this.props.post.color}}>
        <div className="social-post-title">{this.props.post.title}</div>
        <div className="social-post-img" style={{backgroundImage:'url(' + this.props.post.img + ')',}}></div>
      </div>
    );
  }
}

export default SocialPost;
