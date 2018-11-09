import React from "react";
import { connect } from 'react-redux';
import { Modal, ModalBody } from 'reactstrap';

class Modals extends React.Component {

  toggleModal = () => {
    this.props.dispatch({
      type: "TOGGLE_MODAL"
    });
  }

  render() {
    if(this.props.type === "glossary"){
      return (
        <Modal isOpen={this.props.open} toggle={this.toggleModal} style={{marginTop:0, marginLeft:0}}>
          <ModalBody>
            <h4 style={{display: "inline"}}>GLOSSARY</h4>

            <button type="button" className="close" onClick={this.toggleModal}>
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

    if(this.props.type === "resources"){
      return (
        <Modal isOpen={this.props.open} toggle={this.toggleModal} style={{marginTop:0, marginLeft:0}}>
          <ModalBody>
            <h4 style={{display: "inline"}}>RESOURCES</h4>

            <button type="button" className="close" onClick={this.toggleModal}>
              <span aria-hidden="true">
                <img src="media/assets/btn_close.png" alt="close the glossary"/>
              </span>
            </button>
            <hr/>

            {this.props.resources.map((item,i)=>(
              <div key={i} className="gloss-item">
                <h5>{item.term}</h5>
                <p>{item.definition}</p>
                <a target="blank" href={item.source} className="bolded">{item.name}</a>
              </div>
            ))}
          </ModalBody>
        </Modal>
      );
    }

    if(this.props.type === "help"){
      return (
        <Modal isOpen={this.props.open} toggle={this.toggleModal} style={{marginTop:0, marginLeft:0}}>
          <ModalBody>
            <h4 style={{display: "inline"}}>HELP</h4>

            <button type="button" className="close" onClick={this.toggleModal}>
              <span aria-hidden="true">
                <img src="media/assets/btn_close.png" alt="close the glossary"/>
              </span>
            </button>
            <hr/>

            <div className="help-section">
              <h5>NAVIGATION</h5>
              <div className="help-item">
                <h6>TABLE OF CONTENTS</h6>
                <img src="media/assets/help_toc.png" alt="t.o.c. icon"/>
                <p>Use this to navigate to different pages in the course.</p>
              </div>

              <div className="help-item">
                <h6>CONTENT AREA</h6>
                <p>Content will appear here. Follow the on-screen instructions for videos or interactives. Some pages may scroll.</p>
              </div>

              <div className="help-item">
                <h6>PAGE COUNT</h6>
                <img src="media/assets/help_page_count.png" alt="page count screen shot"/>
                <p>Check your progress through the course.</p>
              </div>

              <div className="help-item">
                <h6>BACK/NEXT BUTTONS</h6>
                <img src="media/assets/help_back_next.png" alt="page count screen shot"/>
                <p>Use these buttons to move forward or backward in the course.</p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      );
    }

    else{
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    open: state.tracking.modal.open,
    type: state.tracking.modal.type,
    glossary: state.glossaryData,
    resources: state.resourcesData,
  }
}

export default connect(
  mapStateToProps
)(Modals);
