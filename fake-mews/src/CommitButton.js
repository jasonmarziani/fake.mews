import React, { Component } from 'react';

class CommitButton extends Component
{
  constructor(props) {
    super(props);
    this.votesNeeded = 3;
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
      this.props.onCommit();
      this.setState({
        votes:0
      });
    }
  }

  render(){
    return (
      <div><button onClick={this.handleVote}>Commit ({this.state.votes} out of {this.votesNeeded} votes)</button></div>
    )
  }
}

export default CommitButton;
