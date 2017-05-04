import React, { Component } from 'react';
import Timer from './Timer';
import SwapButton from './SwapButton';
import CommitButton from './CommitButton';

class SwapAndChoose extends Component
{
  constructor(props) {
    super(props);
    this.useTimer = true;
  }

  handleCommit = () => {
    this.props.onCommit();
  }

  handleSwap = () => {
    this.props.onSwap();
  }
  // TODO: SET UP VOTES AS PROPS TO RESET TO 0 WHEN OFFLINE?

  render() {
    return (
      <div className="swap-choose">
      <SwapButton onSwap={this.props.onSwap} votes="0" />
      <CommitButton onCommit={this.props.onCommit} votes="0" />
        <div>{ this.useTimer && <Timer start={Date.now()} duration={15000} onComplete={this.props.onCommit} />}</div>
      </div>
    );
  }
}

export default SwapAndChoose;
