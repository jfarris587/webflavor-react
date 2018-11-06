import React from "react";
import { connect } from 'react-redux';

const Modal = (props) => {
  return (
    <div id="modalContainer">
      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    show: state.modalData.show,
    content: state.modalData.content
  }
}

export default connect(
  mapStateToProps
)(Modal);
