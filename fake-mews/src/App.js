import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import logo from './logo.svg';
import SocialPost from './SocialPost'
import './App.css';
import './Game.css';

class App extends Component {
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
