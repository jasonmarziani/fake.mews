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
      reactions:[this.randomStatement()]
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
    this.setState(prevState => ({
      reactions:[this.randomStatement(), ...prevState.reactions]
    }));
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
    const itemsToRender = this.state.reactions.map((item,i) => [<img src={this.props.icon} />,<li key={i}>{item}</li>]);
    return(<div className="social-post-likes">
          <ul>{itemsToRender}</ul>
          </div>);
  }

}

export default SocialPostReactions;
