import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';

const state = {
  TITLE: "COMPLETION",
  CHAPTER_TITLE: "COMPLETION",
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
          <div className="col-sm-6">
            <p id="sectionComplete">Please select the <span className="bolded">Complete for Credit</span> button below to receive credit for this course.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="offset-1 col-sm-4">
            <a className="btn btn-default d-block mx-auto btn-complete" id="btnComplete" role="button" onClick={()=>window.completeCourse()}>Complete for Credit</a>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <p className="top-paragraph">You are among the first to take this course. We would appreciate your feedback.</p>
          </div>
        </div>

        <div className="row">
          <div className="offset-1 col-sm-4">
            <a className="btn btn-default d-block mx-auto" href="https://www.gpstrategies.com">Take Survey</a>
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
