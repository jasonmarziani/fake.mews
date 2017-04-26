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
    this.forceUpdate();
  }

  render() {
    return (
      <div className="swap-choose">
      <div>{ this.useTimer && <Timer start={Date.now()} duration={15000} onComplete={this.props.onCommit} />}</div>
      <SwapButton onSwap={this.props.onSwap} />
      <CommitButton onCommit={this.props.onCommit} />
      </div>
    );
  }
}

export default SwapAndChoose;
