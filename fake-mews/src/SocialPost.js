import React, { Component } from 'react';

class SocialPost extends Component {

  // TODO: Responsize images
  // Activity (Likes, smiles, comments)
  constructor(props) {
    super(props);
    this.catReactions = {positive:"imgs/icons/c2.png", negative:"imgs/icons/c9.png"};
    this.dogReactions = {positive:"imgs/icons/d2.png", negative:"imgs/icons/d9.png"};
  }

  reactionForPost(){
    var cat = (this.props.post.values.right > 0)? this.catReactions.positive : this.catReactions.negative;
    var dog = (this.props.post.values.left > 0)? this.dogReactions.positive : this.dogReactions.negative;
    return(<div className="social-post-likes"><img src={cat} /> <img src={dog} /></div> );
  }


  render() {
    return (
      <div className="social-post" style={{backgroundColor:this.props.post.color}}>
        <div className="social-post-title">{this.props.post.title}</div>
        <div className="social-post-img" style={{backgroundImage:'url(' + this.props.post.img + ')',}}></div>
        {this.reactionForPost()}
      </div>
    );
  }
}

export default SocialPost;
