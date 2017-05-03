import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './logo.svg';
import SocialPost from './SocialPost';
import SocialPostOptions from './SocialPostOptions'
import Meter from './Meter';
import Money from './Money';
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

    this.state = {
      leftActive:null,
      rightActive:null,
      choices: choices,
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
      //TODO: Stop timer
      // Set values to high scores
      // SHOW GAME OVER

      this.setState(prevState => ({
        scoreLeft:0,
        scoreRight:0
      }));
      return;
    }

    var options = [...this.props.posts];
    this.shuffle(options);
    var choices = [options[0], options[1]];

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
        Here is the website to vote!
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
            <Column width="1/3"><img src={logo} className="App-logo" alt="logo" /><br/><h1>Fake.Mews</h1></Column>
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
      <Column width="3/5"><div className="marque">The world has gone cats and dogs. You are their social algorithm. Welcome to Fake.Mews. Game Design by Jason Marziani and David Machov, with Jake OBrian. Developed by Jason Marziani. Prototype 2.1</div></Column>
      <Column width="1/5"></Column>
      </Row></Grid>
      </div>
  </div>
    );
  }
}

export default App;
