import React, { Component } from 'react';
import SocialPostReactions from './SocialPostReactions';

class SocialPost extends Component {

  constructor(props) {
    super(props);
    this.isResponseCat = this.DetermineResponse();
    this.sharedBy = this.sharedByProfile();
  }

  DetermineResponse()
  {
    return (this.props.context == "cat");
  }

  IsCat()
  {
      return (this.props.post.context == "cat");
  }

  IsCatPositive()
  {
    return (this.props.post.values.right > 0);
  }

  IsDogPositive()
  {
    return (this.props.post.values.left > 0);
  }

  sharedByProfile()
  {
    var name = this.IsCat()? "Mittens" : "Poodles";
    var city = this.IsCat()? "Purrton, PA" : "Ruffing, LA";
    var time = Math.round(Math.random()*10);
    return(<div className="social-post-likes">
              <img src={this.props.post.icon} />
              <div>{name} Shared:<br/>
              <div className="social-post-time">{time} minutes ago. {city}</div>
              </div></div>)
  }

  render() {
    var sentiment = (this.isResponseCat)? this.IsCatPositive() : this.IsDogPositive();
    return (
        <div className="social-post" style={{backgroundColor:this.props.post.color}}>
          {this.sharedBy}
          <div className="social-post-title">{this.props.post.title}</div>
          <div className="social-post-img" style={{backgroundImage:'url(' + this.props.post.img + ')'}}>
          {this.props.reactions &&
          <SocialPostReactions context={this.props.context} sentiment={sentiment} />}
          </div>
        </div>
      );
  }
}

export default SocialPost;
