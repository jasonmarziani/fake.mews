import React, { Component } from 'react';

class SocialPost extends Component {

  // PROPS CHANGE EVERY RENDER. MUST USE STATE FOR COLORS

  render() {
    return (
      <div className="social-post" style={{backgroundColor:this.props.color}}>
        <p>{this.props.title}</p>
        {/* <p><img src="http://thecatapi.com/api/images/get?format=src&type=jpg" class="social-post-img" alt="cats"/></p> */}
      </div>

    );
  }
}

export default SocialPost;
