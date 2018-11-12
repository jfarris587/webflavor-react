import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';

const state = {
  TITLE: "MODAL",
  CHAPTER_TITLE: "MODAL",

  modalHTML_1: (<React.Fragment>
    <h1>MODAL DEMO I</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img src="media/img/gate.png" alt="logo"/>
  </React.Fragment>),

  modalHTML_2: (<React.Fragment>
    <h1>MODAL DEMO II</h1>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <img src="media/img/WebFlavorLogo.jpg" alt="logo"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </React.Fragment>),
};

class Page extends Component {
  render(){
    return (
      <React.Fragment>  
        <PageTitle
          title={state.TITLE}
          pageNum={this.props.pageNum}
          pageTotal={this.props.pageTotal}
        />

        <div className="row">
          <div className="col-md-6">
            <h4>Custom Modal Interactive</h4>
            <p>The custom modal interactive allows for any HTML markup to be placed into the modal when triggered by any other feature. This works by placing the custom HTML into the &lt;modal&gt; tag, and then naming the triggering functions in the same node.</p>
            <p>To see an example of the custom interactive... </p>
            <a className="download bolded" onClick={()=> this.props.dispatch({
              type: "TOGGLE_MODAL",
              payload: "custom",
              data: state.modalHTML_1
            })}>CLICK TO ACTIVATE MODAL</a>

            <br/>
            <br/>

            <p>You can also have multiple modals on the same page like any other interactive...</p>
              <a className="download bolded" onClick={()=> this.props.dispatch({
                type: "TOGGLE_MODAL",
                payload: "custom",
                data: state.modalHTML_2
              })}>CLICK TO ACTIVATE MODAL</a>
            </div>

          <div className="col-md-6">
            <img src="media/img/2_1.jpg" alt="modal"/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageNum: state.tracking.currentChapter + 1,
    pageTotal: state.chapters.length
  }
}

const data = {
  state,
  Page: connect(
    mapStateToProps
  )(Page)
}

export default data;
