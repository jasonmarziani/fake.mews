import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './logo.svg';
import SocialPost from './SocialPost'
import './App.css';
import './Game.css';


/*
TODO:
Create a pool to pick random headlines from.
Swap + Select functionality.
Create social posts on the columns when selected.
- using map and state
*/

//const titles = ["title 1", "title 2", "title 3", "title 4"];

class App extends Component {
  getInitialState()
  {
    return {
      leftPosts: [],
      rightPosts: []
    };
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
          <SocialPost title="some title" /><br/>
          <SocialPost title="some title 2"/><br/>
          <SocialPost title="some title 3" /><br/>
          <SocialPost title="some title 4" /><br/>
        </Column>
        <Column width="1/3">
          <SocialPost title="some title" /><br/>
          <p>swap choose</p>
          <SocialPost title="some title" /><br/>
        </Column>
        <Column width="1/3">
          <SocialPost title="some title" /><br/>
          <SocialPost title="some title" /><br/>
          <SocialPost title="some title" /><br/>
          <SocialPost title="some title" /><br/>
        </Column>
      </Row>
    </Grid>
  </div>
    );
  }
}

export default App;
