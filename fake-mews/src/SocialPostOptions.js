import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import SocialPost from './SocialPost';
import SwapAndChoose from './SwapAndChoose';
import database from './firebase/Firebase';

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

  resetVotes(){
    var keepRef = database.ref('votes/keep');
    keepRef.transaction(function(value) {
      return 0;
    });
    var swapRef = database.ref('votes/swap');
    swapRef.transaction(function(value) {
      return 0;
    });
  }

  handleSwap = () =>{
    this.resetVotes();
    this.setState(prevState => ({
      choices: [this.state.choices[1], this.state.choices[0]]
    }));
  }

  handleCommit = () =>{
    this.resetVotes();
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
      <Column width="1/3">
      <SocialPost post={this.state.choices[0]} key={this.generateKey()} reactions={false}/>
      </Column>
      <Column width="1/3">
      <SwapAndChoose onSwap={this.handleSwap} onCommit={this.handleCommit} />
      </Column>
      <Column width="1/3">
      <SocialPost post={this.state.choices[1]} key={this.generateKey()} reactions={false}/>
      </Column>
      </div>
    );
  }

}

export default SocialPostOptions;
