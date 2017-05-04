import React, { Component } from 'react';

class GameOver extends Component
{
  //<GameOver gameover={this.state.gameover} />

  render(){
    return (
      <div className="gameover">
      <div className={this.props.gameover? "gameover-on" : "gameover-off" }>
        <img src="https://media.giphy.com/media/uQKzPPWQQ755K/giphy.gif" alt="gameover" width="100%" height="100%" />
      </div></div>
    );
  }
}

export default GameOver;
