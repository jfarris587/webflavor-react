import React from "react";
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: this.props.open
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
      <Modal isOpen={this.state.modal} toggle={this.props.toggleModal} className={this.props.className}>
        <ModalHeader toggle={this.props.toggleModal}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.toggleModal}>Do Something</Button>{' '}
          <Button color="secondary" onClick={this.props.toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    show: state.modalData.show,
    content: state.modalData.content
  }
}

export default connect(
  mapStateToProps
)(Modals);
