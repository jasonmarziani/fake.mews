import React, { Component } from 'react';

class Timer extends Component
{
  // TODO: Timer with complete callback.

  render() {
    return (
      <div className="timer">
        <p>0:10{this.props.value}</p>
      </div>
    );
  }
}

export default Timer;
