import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './logo.svg';
import SocialPost from './SocialPost';
import SwapAndChoose from './SwapAndChoose';
import './App.css';
import './Game.css';


/*
TODO:
Color and styles moved into state for posts
- so they don't update every render
Random from range.
*/


class App extends Component {

  constructor(props) {
    super(props);
    var choices = [this.props.posts[0], this.props.posts[1]];
    var startLeft = [this.props.posts[5]];
    var startRight = [this.props.posts[6]];
    this.state = {
      choices: choices,
      leftPosts:startLeft,
      rightPosts:startRight
    };
  }

  handleSwap = () => {
    console.log(this.state.choices[0]);
    var index0 = this.state.choices[0];
    var index1 = this.state.choices[1];

    this.setState(prevState => ({
      choices: [index1, index0]
    }));
  }

  handleCommit = () =>{
    var choice0 = this.state.choices[0];
    var choice1 = this.state.choices[1];
    var nextChoice0 = this.props.posts[2];
    var nextChoice1 = this.props.posts[3];

    this.setState(prevState => ({
      leftPosts: this.state.leftPosts.concat(choice0),
      rightPosts: this.state.rightPosts.concat(choice1),
      choices:[nextChoice0, nextChoice1]
    }));
  }

  randomHex(){
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  }


  byteToHex(byte){
    return ('0' + byte.toString(16)).slice(-2);
  }

  generateKey(len){
/*
    var arr = new Uint8Array((len || 40) / 2);
    window.crypto.getRandomValues(arr);
    return[].map.call(arr, byteToHex).join("");
*/
    return Math.random();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fake Mews</h2>
        </div>
        <Grid>
        <Row>
        <Column width="1/3">
          {this.state.leftPosts.map(post => (
              <SocialPost title={post} key={this.generateKey(8)} color={this.randomHex()}/>
            ))}
        </Column>
        <Column width="1/3">
          <SocialPost title={this.state.choices[0]} key={this.generateKey(8)} color={this.randomHex()} /><br/>
          <SwapAndChoose onSwap={this.handleSwap} onCommit={this.handleCommit} />
          <SocialPost title={this.state.choices[1]} key={this.generateKey(8)} color={this.randomHex()} /><br/>
        </Column>
        <Column width="1/3">
        { this.state.rightPosts.map(post => (
            <SocialPost title={post} key={this.generateKey(8)} color={this.randomHex()}/>
          )) }
        </Column>
      </Row>
    </Grid>
  </div>
    );
  }
}

export default App;
