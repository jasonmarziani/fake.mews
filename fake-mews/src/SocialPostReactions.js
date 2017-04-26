import React, { Component } from 'react';

class SocialPostReactions extends Component {

  constructor(props) {
    super(props);
    this.positiveReactions = ["OMG!",
                              "Wowzers!",
                              "LOL",
                              "Love it!",
                              "Moar please",
                              "Please share.",
                              "100 100 100"];

    this.negativeReactions = ["OMG!",
                              "Not even",
                              "I can't",
                              "This isn't real, is it?",
                              "I'm dead I died",
                              "No no no.",
                              "We need to stop this."];

    this.state = {
      reaction:this.randomStatement()
    }
  }

  componentDidMount(){
    this.timerInterval = setInterval(this.tick, 2000);
  }

  componentWillUnmount(){
    clearInterval(this.timerInterval);
  }

  tick = () =>
  {
    this.setState({
      reaction:this.randomStatement()
    });
  }

  IsPositive()
  {
    return this.props.positive;
  }

  randomStatement()
  {
    var array = (this.props.sentiment)? this.positiveReactions : this.negativeReactions;
    var index = Math.round(Math.random()*(array.length-1));
    return array[index];
  }

  render() {

    return(<div className="social-post-likes"><img src={this.props.icon} />{this.state.reaction}</div>);
  }

}

export default SocialPostReactions;
