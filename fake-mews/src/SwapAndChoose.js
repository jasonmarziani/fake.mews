import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';

class SwapAndChoose extends Component
{

  render() {
    return (
      <Grid>
      <Row>
      <Column width="1/5" />
      <Column width="1/5"><button onClick={this.props.onSwap}>Swap</button></Column>
      <Column width="1/5" />
      <Column width="1/5"><button onClick={this.props.onCommit}>Commit</button></Column>
      <Column width="1/5" />
      </Row>
      </Grid>
    );
  }
}

export default SwapAndChoose;
