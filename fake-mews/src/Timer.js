import React, { Component } from 'react';

class Timer extends Component
{
  // TODO: STATE FOR TIMER?
  // Bring in game framework and listen for update callbacks
  // How to propigate a change back up to App.js
  // Or does app need to own the timer, and push the time prop down?

  render() {
    return (
      <div className="timer">
        <p>0:10{this.props.value}</p>
      </div>
    );
  }
}

export default Timer;
