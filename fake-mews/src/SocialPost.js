import React, { Component } from 'react';
import SocialPostReactions from './SocialPostReactions';

class SocialPost extends Component {

  // TODO: Tie content to who shares and responses
  // Activity (Likes, smiles, comments)
  constructor(props) {
    super(props);
    this.catIcons = {positive:"imgs/icons/c2.png", negative:"imgs/icons/c9.png"};
    this.dogIcons = {positive:"imgs/icons/d2.png", negative:"imgs/icons/d9.png"};
    this.isCat = (this.props.context == "cat")? true : false;
    this.sharedBy = this.sharedByImage();
  }

  IsCatPositive()
  {
    return (this.props.post.values.right > 0);
  }

  IsDogPositive()
  {
    return (this.props.post.values.left > 0);
  }

  CatIcon()
  {
    return this.IsCatPositive()? this.catIcons.positive : this.catIcons.negative;
  }

  DogIcon()
  {
    return this.IsDogPositive()? this.dogIcons.positive : this.dogIcons.negative;
  }

  sharedByImage()
  {
    var catIcon = this.CatIcon();
    var dogIcon = this.DogIcon();
    var whichIcon = (this.isCat)? catIcon : dogIcon;
    var name = (this.isCat)? "Mittens" : "Poodles";
    var city = (this.isCat)? "Purrton, PA" : "Ruffing, LA";
    var time = Math.round(Math.random()*10);
    return(<div className="social-post-likes">
              <img src={whichIcon} />
              <div>{name} Shared:<br/>
              <div className="social-post-time">{time} minutes ago. {city}</div>
              </div></div>)
  }

  render() {
    var whichIcon = (this.isCat)? this.CatIcon() : this.DogIcon();
    var sentiment = (this.isCat)? this.IsCatPositive() : this.IsDogPositive();

    return (
        <div className="social-post" style={{backgroundColor:this.props.post.color}}>
          {this.sharedBy}
          <div className="social-post-title">{this.props.post.title}</div>
          <div className="social-post-img" style={{backgroundImage:'url(' + this.props.post.img + ')'}}>
          {this.props.reactions &&
          <SocialPostReactions icon={whichIcon} sentiment={sentiment} />}
          </div>
        </div>
      );
  }
}

export default SocialPost;
