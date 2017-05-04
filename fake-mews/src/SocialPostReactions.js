import React, { Component } from 'react';
import Icons from './Data/Icons'
import Reactions from './Data/Reactions'

class SocialPostReactions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      reactions:[this.randomReaction()]
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
      reactions:[this.randomReaction(), ...prevState.reactions]
    }));
  }

  IsPositive()
  {
    return this.props.positive;
  }

  randomReaction()
  {
    return {icon:this.randomIcon(), statement:this.randomStatement()};
  }

  randomStatement()
  {
    return Reactions.Random(this.props.sentiment);
  }

  randomIcon()
  {
    return (this.props.context == "cat")? Icons.RandomCatIcon() : Icons.RandomDogIcon();
  }

  render() {
    const itemsToRender = this.state.reactions.map((item,i) => [<img src={item.icon} />,<li key={i}>{item.statement}</li>]);
    return(<div className="social-post-likes">
          <ul>{itemsToRender}</ul>
          </div>);
  }

}

export default SocialPostReactions;
