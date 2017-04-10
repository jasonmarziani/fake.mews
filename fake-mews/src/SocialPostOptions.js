import React, { Component } from 'react';
import SocialPost from './SocialPost';
import SwapAndChoose from './SwapAndChoose';

class SocialPostOptions extends Component
{
  constructor(props){
    super(props);
    this.state = {
      choices: this.props.choices
    }
    console.log(this.state.choices[0]);
  }

  handleSwap = () =>{
    console.log(this.state.choices[0]);
    var index0 = this.state.choices[0];
    var index1 = this.state.choices[1];

    this.setState(prevState => ({
      choices: [index1, index0]
    }));
  }

  generateKey(){
    return Math.random();
  }

  render(){
    return (
      <div>
      <SocialPost post={this.state.choices[0]} key={this.generateKey()} /><br/>
      <SwapAndChoose onSwap={this.handleSwap} onCommit={this.props.commit} />
      <SocialPost post={this.state.choices[1]} key={this.generateKey()} /><br/>
      </div>
    );
  }

}

export default SocialPostOptions;
