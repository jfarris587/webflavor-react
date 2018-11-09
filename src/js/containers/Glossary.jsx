import React from "react";
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';

class Glossary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.open,
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.open !== this.state.modal){
      let tempState = this.state;
      tempState.modal = nextProps.open;
      this.setState(tempState);
    }
  }

  render() {
    return (
      <Modal isOpen={this.state.modal} toggle={this.props.toggleGlossary} style={{marginTop:0, marginLeft:0}}>
        <ModalBody>
          <h4 style={{display: "inline"}}>GLOSSARY</h4>

          <button type="button" className="close" onClick={this.props.toggleGlossary}>
            <span aria-hidden="true">
              <img src="media/assets/btn_close.png" alt="close the glossary"/>
            </span>
          </button>
          <hr/>

          {this.props.glossary.map((item,i)=>(
            <div key={i} className="gloss-item" id="1">
              <h5>{item.term}</h5>
              <p>{item.definition}</p>
            </div>
          ))}
        </ModalBody>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    glossary: state.glossaryData,
  }
}

export default connect(
  mapStateToProps
)(Glossary);
