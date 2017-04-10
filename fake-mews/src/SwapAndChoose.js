import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';
import Timer from './Timer';

class SwapAndChoose extends Component
{

  render() {
    return (
      <Grid>
      <Row>
      <Column width="1/8" />
      <Column width="1/4"><button onClick={this.props.onSwap}>Swap</button></Column>
      <Column width="1/4" ><Timer /></Column>
      <Column width="1/4"><button onClick={this.props.onCommit}>Commit</button></Column>
      <Column width="1/8" />
      </Row>
      </Grid>
    );
  }
}

export default SwapAndChoose;
