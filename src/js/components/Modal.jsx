import React, { Component } from 'react';

export class Modal extends Component {
  constructor(props){
    super(props);

    this.state = {
      popup: null,
      show: ""

    }
  }


  render(){
    const { spots } = this.props.hotspotData;

    return (
      null
    );
  }
}

export default Modal;
