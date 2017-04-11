import React, { Component } from 'react';
import SocialPost from './SocialPost';
import SwapAndChoose from './SwapAndChoose';

// TODO: Manage timer to maintain state across swaps?

class SocialPostOptions extends Component
{

  constructor(props) {
    super(props);
    this.state = {
      choices: this.props.choices
    }
  }

  componentWillReceiveProps(newProps){
    this.state = {
      choices: this.props.choices
    }
  }

  handleSwap = () =>{
    this.setState(prevState => ({
      choices: [this.state.choices[1], this.state.choices[0]]
    }));
  }

  handleCommit = () =>{
   this.props.commit(this.state.choices);
  };

  generateKey(){
    return Math.random();
  }

  render(){
    console.log("* "+this.state.choices[0].title);
    console.log("** "+this.state.choices[1].title);
    return (
      <div>
      <SocialPost post={this.state.choices[0]} key={this.generateKey()} /><br/>
      <SwapAndChoose onSwap={this.handleSwap} onCommit={this.handleCommit} />
      <SocialPost post={this.state.choices[1]} key={this.generateKey()} /><br/>
      </div>
    );
  }

}

export default SocialPostOptions;
