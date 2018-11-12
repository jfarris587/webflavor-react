import React from "react";
import { connect } from 'react-redux';

const Splash = (props) => {
  return (
    <div className="splash row">
      <div className="header col-md-6">
        <h3>HTML TEMPLATE</h3>
        <h1>WEBFLAVOR COURSE</h1>
        <p>The following is the HTML WebFlavor Template for web based courses and learning. This demo course outlines many components that can be used in different HTML courses built from this template.
          <br/>
          <br/>
          Games, interactives, gating, assessments, and more are all included. Click <span className="bolded">Begin Course</span> to start.
        </p>

        <a className="btn btn-default" onClick={()=>props.dispatch({
          type: "EXIT_SPLASH",
        })}>Begin Course</a>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => {
  return {
  }
}


export default connect(
  mapStateToProps
)(Splash);
