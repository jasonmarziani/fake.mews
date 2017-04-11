import React, { Component } from 'react';

// TODO: Lay in the icons from Game Jam

class Meter extends Component
{

  constructor(props) {
    super(props);
    this.catTransitions = [
      {range:{min:-45, max:-35}, color:"#EEE", img:"imgs/icons/c1.png"},
      {range:{min:-35, max:-25}, color:"#EEE", img:"imgs/icons/c2.png"},
      {range:{min:-25, max:-15}, color:"#EEE", img:"imgs/icons/c3.png"},
      {range:{min:-15, max:-5}, color:"#EEE", img:"imgs/icons/c4.png"},
      {range:{min:-5, max:5}, color:"#EEE", img:"imgs/icons/c5.png"},
      {range:{min:5, max:15}, color:"#EEE", img:"imgs/icons/c6.png"},
      {range:{min:15, max:25}, color:"#EEE", img:"imgs/icons/c7.png"},
      {range:{min:25, max:35}, color:"#EEE", img:"imgs/icons/c8.png"},
      {range:{min:35, max:45}, color:"#EEE", img:"imgs/icons/c9.png"},
      {range:{min:45, max:55}, color:"#EEE", img:"imgs/icons/c10.png"},
    ];
    this.dogTransitions = [
      {range:{min:-45, max:-35}, color:"#EEE", img:"imgs/icons/d1.png"},
      {range:{min:-35, max:-25}, color:"#EEE", img:"imgs/icons/d2.png"},
      {range:{min:-25, max:-15}, color:"#EEE", img:"imgs/icons/d3.png"},
      {range:{min:-15, max:-5}, color:"#EEE", img:"imgs/icons/d4.png"},
      {range:{min:-5, max:5}, color:"#EEE", img:"imgs/icons/d5.png"},
      {range:{min:5, max:15}, color:"#EEE", img:"imgs/icons/d6.png"},
      {range:{min:15, max:25}, color:"#EEE", img:"imgs/icons/d7.png"},
      {range:{min:25, max:35}, color:"#EEE", img:"imgs/icons/d8.png"},
      {range:{min:35, max:45}, color:"#EEE", img:"imgs/icons/d9.png"},
      {range:{min:45, max:55}, color:"#EEE", img:"imgs/icons/d10.png"},
    ];
  }

  render() {
    var transitions = (this.props.type == "cat")? this.catTransitions : this.dogTransitions;
    var val = this.props.value;
    var bcolor = transitions[0].color;
    var img = transitions[0].img;
    for(var i=0; i<transitions.length; i++)
    {
      var t = transitions[i];
      if(val >= t.range.min && val < t.range.max){
        bcolor = t.color;
        img = t.img;
      }
    }

    return (
      <div className="meter" style={{backgroundColor:bcolor}}>
        <img src={img} alt={this.props.type} /> {this.props.value}
      </div>
    );
  }
}

export default Meter;
