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
        <Modal className="navModals" isOpen={this.props.open} toggle={this.toggleModal} style={{margin: 0}}>
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
        <Modal className="navModals" isOpen={this.props.open} toggle={this.toggleModal} style={{margin: 0}}>
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
                <a target="blank" href={item.source} className="bolded">{item.name}</a>
                <p>{item.definition}</p>
              </div>
            ))}
          </ModalBody>
        </Modal>
      );
    }

    if(this.props.type === "help"){
      return (
        <Modal className="navModals" isOpen={this.props.open} toggle={this.toggleModal} style={{margin: 0}}>
          <ModalBody>
            <h4 style={{display: "inline"}}>HELP</h4>

            <button type="button" className="close" onClick={this.toggleModal}>
              <span aria-hidden="true">
                <img src="media/assets/btn_close.png" alt="close the glossary"/>
              </span>
            </button>
            <hr/>

            <h5>NAVIGATION</h5>
            <p>Use this to navigate to different pages in the course.</p>
            <img src="media/assets/help_toc.png" alt="t.o.c. icon"/>

            <h6>PAGE COUNT</h6>
            <p>Check your progress through the course.</p>
            <img src="media/assets/help_page_count.png" alt="page count screen shot"/>

            <h6>BACK/NEXT BUTTONS</h6>
            <p>Use these buttons to move forward or backward in the course.</p>
            <img src="media/assets/help_back_next.png" alt="page count screen shot"/>
          </ModalBody>
        </Modal>
      );
    }

    if(this.props.type === "custom"){
      return (
        <Modal isOpen={this.props.open} toggle={this.toggleModal}>
          <ModalBody>
            <button type="button" className="close" onClick={this.toggleModal}>
              <span aria-hidden="true">
                <img src="media/assets/btn_close.png" alt="close the glossary"/>
              </span>
            </button>

            {this.props.data}

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
    data: state.tracking.modal.data,
    glossary: state.glossaryData,
    resources: state.resourcesData,
  }
}

export default connect(
  mapStateToProps
)(Modals);
