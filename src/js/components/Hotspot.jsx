import React, { Component } from 'react';

export class Hotspot extends Component {
  constructor(props){
    super(props);

    this.state = {
      popup: null,
      show: ""

    }
  }

  pop = (i) => {
    let tempState = {...this.state};
    tempState.popup = this.props.hotspot.spots[i];
    tempState.show = "show";
    this.setState(tempState);
  }

  close = (i) => {
    let tempState = {...this.state};
    tempState.popup = null;
    tempState.show = "";
    this.setState(tempState);
  }

  render(){
    const { spots } = this.props.hotspot;

    return (
      <div id="hotSpot">
        <img className="hotSpot-img" src={this.props.hotspot.img} alt="hotspot"/>
          {spots.map((hotspot, index)=>(
            <Spot
              key={index}
              i={index}
              pop={this.pop}
            />
          ))}

          <div className={`hotSpot-popup ${this.state.show}`}>
            <a className="hotSpot-close" onClick={()=>this.close(this.props.i)}>x</a>
              {this.state.popup}
          </div>
      </div>
    );
  }
}

export const Spot = (props) => {
  return (
    <div id="spot-0" className={`hotSpot-spot circle-${props.i+1}`} onClick={()=>props.pop(props.i)}>{props.i+1}</div>
  );
}

export default Hotspot;
