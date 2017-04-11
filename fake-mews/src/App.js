import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './logo.svg';
import SocialPost from './SocialPost';
import SocialPostOptions from './SocialPostOptions'
import Meter from './Meter';
import './App.css';
import './Game.css';


/*
TODO:
Choices w/out picking a recent option
Locked Header / Footer for Meters
Add score and stats to header area
Local store to cache game
Social vote mechanism
*/


class App extends Component {

  constructor(props) {
    super(props);

    // FACTORY
    for(var i=0; i<this.props.posts.length; i++)
    {
      this.props.posts[i].color = this.randomHex();
    }

    var choices = [this.props.posts[0], this.props.posts[1]];
    var startLeft = [this.props.posts[5]];
    var startRight = [this.props.posts[6]];

    this.state = {
      choices: choices,
      leftPosts:startLeft,
      rightPosts:startRight,
      scoreLeft:0,
      scoreRight:0
    };
  }

  handleCommit = (commits) =>{
    var choice0 = commits[0];
    var choice1 = commits[1];
    var scoreRight = this.state.scoreRight+choice0.values.right;
    var scoreLeft = this.state.scoreLeft+choice1.values.left;

    if(this.checkEndgame(scoreRight, scoreLeft))
    {
      console.log("GAME OVER");
      return;
    }

    var options = [...this.props.posts];
    this.shuffle(options);
    var choices = [options[0], options[1]];

    this.setState(prevState => ({
      leftPosts: [choice0, ...this.state.leftPosts],
      rightPosts: [choice1, ...this.state.rightPosts],
      choices:choices,
      scoreLeft:scoreLeft,
      scoreRight:scoreRight
    }));
  }

  checkEndgame(scoreRight, scoreLeft)
  {
    var min = this.props.endgame.min;
    var max = this.props.endgame.max;
    if(scoreLeft <= min || scoreLeft >= max || scoreRight <= min || scoreRight >= max) return true;
    return false;
  }

  generateKey(){
    return Math.random();
  }

  randomHex(){
    return '#' + ("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6);
  }

  shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
  }

  render() {
    console.log("----* "+this.state.choices[0].title);
    console.log("----** "+this.state.choices[1].title);

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="App-body">
          <Grid>
            <Row>
            <Column width="1/3">
              {this.state.leftPosts.map(post => (
                  <SocialPost post={post} key={this.generateKey()}/>
                ))}
            </Column>
            <Column width="1/3">
              <SocialPostOptions choices={this.state.choices} commit={this.handleCommit}/>
            </Column>
            <Column width="1/3">
            { this.state.rightPosts.map(post => (
                <SocialPost post={post} key={this.generateKey()} />
              )) }
            </Column>
          </Row>
        </Grid>
      </div>
      <div className="App-footer">
        <Grid>
          <Row>
          <Column width="1/3">
            <Meter value={this.state.scoreLeft} type="cat" />
          </Column>
          <Column width="1/3"></Column>
          <Column width="1/3">
            <Meter value={this.state.scoreRight} type="dog" />
          </Column>
          </Row>
        </Grid>
      </div>

  </div>
    );
  }
}

export default App;
