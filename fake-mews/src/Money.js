import React, { Component } from 'react';

class Money extends Component
{

  constructor(props)
  {
    super(props);
    this.coinsPerSecond = 1;
    this.sum = this.props.leftValue + this.props.rightValue;
    this.state = {
      total:Math.max(this.sum * this.coinsPerSecond)
    }
  }

  componentDidMount(){
    this.timerInterval = setInterval(this.tick, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timerInterval);
  }

  componentWillReceiveProps(nextProps)
  {
    this.sum = nextProps.leftValue + nextProps.rightValue;
  }

  tick = () =>
  {
    this.setState(prevState => ({
      total:Math.max(prevState.total + this.sum * this.coinsPerSecond, 0)
    }));
  }

  render()
  {
    return(
      <div className="money">
      <h1>Ad Revenue</h1>
      <h1>${this.state.total}</h1>
      <h2>${this.sum} / second</h2>
      <h3>Cats: ${this.props.leftValue} / sec</h3>
      <h3>Dogs: ${this.props.rightValue} / sec</h3>
      </div>
    );
  }
}

export default Money;
