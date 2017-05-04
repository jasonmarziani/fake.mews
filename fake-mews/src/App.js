import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './logo.svg';
import Posts from './Data/Posts'
import SocialPost from './SocialPost';
import SocialPostOptions from './SocialPostOptions'
import Meter from './Meter';
import Money from './Money';
import GameOver from './GameOver';
import './App.css';
import './Game.css';

/*
TODO:
Firebase Tested, mobile page styled, + URL added
Game Over screen
Ship
*/

class App extends Component {

  constructor(props) {
    super(props);

    Posts.Init();
    var choices = [Posts.GetAtIndex(0), Posts.GetAtIndex(1)];

    this.state = {
      leftActive:null,
      rightActive:null,
      choices: choices,
      scoreLeft:0,
      scoreRight:0,
      gameover:false
    };
  }

  handleCommit = (commits) =>{
    var choice0 = commits[0];
    var choice1 = commits[1];
    var scoreRight = this.state.scoreRight+choice0.values.right;
    var scoreLeft = this.state.scoreLeft+choice1.values.left;

    if(this.checkEndgame(scoreRight, scoreLeft))
    {
      this.setState(prevState => ({
        scoreLeft:0,
        scoreRight:0,
        gameover:true
      }));
      return;
    }

    var shuffledPosts = Posts.ShuffledPosts();
    var choices = [shuffledPosts[0], shuffledPosts[1]];

    this.setState(prevState => ({
      leftActive:choice0,
      rightActive:choice1,
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

  // HELPERS

  generateKey(){
    return Math.random();
  }

  render() {
    console.log("----* "+this.state.choices[0].img);
    console.log("----** "+this.state.choices[1].img);

    return (
      <div className="App">
        <div className="App-header">
        Vote Now! https://goo.gl/FHh9xw
        </div>
        <div className="App-body">
          <Grid>
          <Row className="App-alg">
            <SocialPostOptions choices={this.state.choices} commit={this.handleCommit}/>
          </Row>
          <Row>
            <Column width="1/3">
              <Meter value={Math.abs(this.state.scoreLeft)} type="cat" />
            </Column>
            <Column width="1/3"><img src={logo} className="App-logo" alt="logo" /><h1>Fake.Mews</h1><p>Vote Now! https://goo.gl/FHh9xw</p></Column>
            <Column width="1/3">
              <Meter value={Math.abs(this.state.scoreRight)} type="dog" />
            </Column>
          </Row>

          <Row className="App-social">
            <Column width="1/3">
            { this.state.leftActive != null &&
                <SocialPost post={this.state.leftActive} key={this.generateKey()} reactions={true} context="cat" />
            }
            </Column>
            <Column width="1/3">
              <Money leftValue={Math.abs(this.state.scoreLeft)} rightValue={Math.abs(this.state.scoreRight)} />
            </Column>
            <Column width="1/3">
              { this.state.rightActive != null &&
                <SocialPost post={this.state.rightActive} key={this.generateKey()} reactions={true} context="dog" />
              }
            </Column>
          </Row>
          </Grid>
        </div>
      <div className="App-footer">
      <Grid><Row>
      <Column width="1/5"></Column>
      <Column width="3/5"><div className="marque">The world has gone cats and dogs. <b><em>You are their social algorithm.</em></b> Welcome to Fake.Mews. Choose what gets shared, reap the response rates, avoid armageddon. Game Design by Jason Marziani and David Machov, with Jake O'Brian. Developed by Jason Marziani as Little Wins. No rights reserved.</div></Column>
      <Column width="1/5"></Column>
      </Row></Grid>
      </div>
  </div>
    );
  }
}

export default App;
