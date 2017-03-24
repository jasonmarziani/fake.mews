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
Pass title into the social post.
*/

class App extends Component {
  getInitialState()
  {
    return {
      items: []
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
          <SocialPost /><br/>
          <SocialPost /><br/>
          <SocialPost /><br/>
          <SocialPost /><br/>
        </Column>
        <Column width="1/3">
          <SocialPost /><br/>
          <p>swap choose</p>
          <SocialPost /><br/>
        </Column>
        <Column width="1/3">
          <SocialPost /><br/>
          <SocialPost /><br/>
          <SocialPost /><br/>
          <SocialPost /><br/>
        </Column>
      </Row>
    </Grid>
  </div>
    );
  }
}

export default App;
