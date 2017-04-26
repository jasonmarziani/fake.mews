import React, { Component } from 'react';

class SwapButton extends Component
{
  constructor(props) {
    super(props);
    this.votesNeeded = 5;
    this.state = {
      votes:0
    }
  }

  handleVote = () =>
  {
    this.setState(prevState => ({
      votes:prevState.votes + 1
    }));
    if(this.state.votes >= this.votesNeeded-1)
    {
      this.props.onSwap();
      this.setState({
        votes:0
      });
    }
  }

  render(){
    return (
      <div><button onClick={this.handleVote}>Swap ({this.state.votes} / {this.votesNeeded} votes)</button></div>
    )
  }
}

export default SwapButton;
