import React, { Component } from 'react';

// TODO: This eventually becomes an image swap instead of color swap

class Meter extends Component
{

  constructor(props) {
    super(props);
    this.transitions = [
      {range:{min:-10, max:-5}, color:"#E1C"},
      {range:{min:-4, max:0}, color:"#123"},
      {range:{min:1, max:5}, color:"#D2C"},
      {range:{min:6, max:10}, color:"#6FC"},
    ];
  }

  render() {
    var bcolor = this.transitions[0].color;
    var val = this.props.value;
    for(var i=0; i<this.transitions.length; i++)
    {
      var t = this.transitions[i];
      if(val >= t.range.min && val < t.range.max){
        bcolor = t.color;
      }
    }

    return (
      <div className="meter" style={{backgroundColor:bcolor}}>
        <p>{this.props.type}: {this.props.value}</p>
      </div>
    );
  }
}

export default Meter;
