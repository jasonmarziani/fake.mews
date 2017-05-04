import React, { Component } from 'react';
import database from './firebase/Firebase';

class SwapButton extends Component
{
  constructor(props) {
    super(props);
    this.votesNeeded = 5;
    this.state = {
      votes:this.props.votes
    }
  }

  componentWillMount()
  {
    this.swapRef = database.ref('votes/swap');
    this.swapRef.on('value', (snapshot) => {
      this.setState({votes:snapshot.val()});
    });
  }

  componentDidUpdate(prevProps, prevState)
  {
    this.checkVoteCount();
  }


  handleVote = () =>
  {
    this.setState(prevState => ({
      votes:prevState.votes + 1
    }));
    this.swapRef.transaction(function(value) {
      return value + 1;
    });
  }

  checkVoteCount()
  {
    if(this.state.votes >= this.votesNeeded)
    {
      this.props.onSwap();
      this.setState({
        votes:0
      });
    }
  }

  render(){
    return (
      <div className="action-button">
        <button onClick={this.handleVote}>
          <img src="imgs/ui/swap-icon.png" alt="swap icon" />
            <h2>Swap Species ({this.state.votes} / {this.votesNeeded} votes)</h2>
        </button>
      </div>
    )
  }
}

export default SwapButton;
