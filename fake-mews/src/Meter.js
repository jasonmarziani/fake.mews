import React, { Component } from 'react';
import {Grid, Row, Column} from 'react-cellblock';

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

  isCat()
  {
    return (this.props.type == "cat");
  }

  render() {
    var transitions = (this.isCat())? this.catTransitions : this.dogTransitions;
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
    // OVERRIDE THE ABOVE LOGIC
    img = (this.isCat())? "imgs/cat-stock/online-cat-17431660.jpg" :
                          "imgs/dog-stock/savvy-dog-using-computer-laptop-24633273.jpg";

    var bar1 = (val > 0)? "meter-bar-green" : "meter-bar-off";
    var bar2 = (val > 10)? "meter-bar-yellow" : "meter-bar-off";
    var bar3 = (val > 20)? "meter-bar-orange" : "meter-bar-off";
    var bar4 = (val > 30)? "meter-bar-red" : "meter-bar-off";
    var bar5 = (val > 40)? "meter-bar-red" : "meter-bar-off";

    return (
      <div className="meter">
      <Grid>
      <Row className="meter-bar">
      <Column width="4/10"><img src={img} alt={this.props.type}/></Column>
      <Column width="1/10" className={bar1}></Column>
      <Column width="1/10" className={bar2}></Column>
      <Column width="1/10" className={bar3}></Column>
      <Column width="1/10" className={bar4}></Column>
      <Column width="1/10" className={bar5}></Column>
      <Column width="1/10"></Column>
      </Row>
      </Grid>
      </div>
    );
  }
}

export default Meter;
