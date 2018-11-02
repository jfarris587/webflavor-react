import React, { Component } from 'react';

export class Ctr extends Component {
  constructor(props){
    super(props);

    this.state = {
      sections: this.props.ctr.sections
    }
  }

  click = (i) => {
    var tempState = {...this.state};
    if(tempState.sections[i].show === "show"){
      tempState.sections[i].show = "";
    }
    else{
      tempState.sections[i].show = "show";
    }
    this.setState(tempState);
  }

  render(){
    const { sections } = this.props.ctr;
    let width = 12 / sections.length;

    return (
      <div className={`ctr row ${this.props.ctr.position}`}>
        {sections.map((section,i)=>(
          (<div key={i} className={`col-md-${width} p-0`}>
            <Section
              index={i}
              section={section}
              click={this.click}
              show={this.state.sections[i].show}
            />
          </div>)
        ))}
      </div>
    );
  }
}

export const Section = (props) =>{
  return (
    <React.Fragment>
      <div className="ctr-wrapper c" onClick={()=>props.click(props.index)}>
        <div className="click">
          {props.section.click}
        </div>
      </div>
      <div className="ctr-wrapper r">
        <div className={`reveal ${props.show}`}>
          {props.section.reveal}
        </div>
      </div>
    </React.Fragment>
  );
}


export default Ctr;
