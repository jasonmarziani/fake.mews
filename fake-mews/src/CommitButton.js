import React, { Component } from 'react';
import database from './firebase/Firebase';

class CommitButton extends Component
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
    this.keepRef = database.ref('votes/keep');
    this.keepRef.on('value', (snapshot) => {
      this.setState({votes:snapshot.val()});
    });
    this.neededRef = database.ref('votes/keeps-needed');
    this.neededRef.on('value', (snapshot) => {
      this.votesNeeded = snapshot.val();
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
    this.keepRef.transaction(function(value) {
      return value + 1;
    });
  }

  checkVoteCount()
  {
    console.log("VOTES? "+this.state.votes);
    if(this.state.votes >= this.votesNeeded)
    {
      this.props.onCommit();
      this.setState({
        votes:0
      });
    }
  }

  render(){
    return (
      <div className="action-button">
        <button onClick={this.handleVote}>
          <img src="imgs/ui/keep-icon.png" alt="keep icon" />
            <h2>Share ({this.state.votes} out of {this.votesNeeded} votes)</h2>
        </button>
      </div>
    )
  }
}

export default CommitButton;
