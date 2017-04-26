import React, { Component } from 'react';

class Timer extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      time:this.time()
    }
  }

  componentDidMount(){
    this.timerInterval = setInterval(this.tick, 50);
  }

  componentWillUnmount(){
    clearInterval(this.timerInterval);
  }

  time()
  {
    return( this.props.duration + (this.props.start - Date.now()));
  }

  tick = () =>
  {
    var t = this.time();
    if(t <= 0){
      this.props.onComplete();
    }
    this.setState({time:this.time()});
  }

  render() {
    var remaining = Math.round(this.state.time / 100);
    var seconds = (remaining / 10).toFixed(1);
    //console.log("Seconds:"+seconds);
    return (
      <div className="timer">
        <p>{seconds}</p>
      </div>
    );
  }
}

export default Timer;
