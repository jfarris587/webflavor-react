import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';

const state = {
  TITLE: "TEMPLATE",
  CHAPTER_TITLE: "TEMPLATE",

  hotspot_1: {
    img: 'media/img/City-Map-2.jpg',
    spots:[
      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
        <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
        <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
      </ul>,

      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
        <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
        <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
      </ul>,

      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
        <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
        <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
      </ul>,
    ]
  }
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
          <div className="col-md-12"><p>The first part in developing a specific page in a course is using the Bootstrap grid system. This grid system allows the developer to place text, content, and interactives in any layout that they choose by implementing the Bootstrap classNamees. This page demonstrates a potential layout with the Bootstrap grid.</p></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-3 p-0"><div className="componentContainer color1"></div></div>

          <div className="col-12 col-md-9 p-0"><div className="componentContainer color1"></div></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 p-0"><div className="componentContainer color1"></div></div>

          <div className="col-12 col-md-8 p-0"><div className="componentContainer color1"></div></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 p-0"><div className="componentContainer color1"></div></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-8 p-0"><div style={{height: "100%"}} className="componentContainer color1 size2"></div></div>

          <div className="col-12 col-md-4 p-0">
            <div className="row">
              <div className="col-6 col-md-12 inner-col-top"><div className="componentContainer color1"></div></div>
              <div className="col-6 col-md-12 inner-col-bottom"><div className="componentContainer color1"></div></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 p-0"><div className="componentContainer color1"></div></div>

          <div className="col-12 col-md-8 p-0"><div className="componentContainer color1"></div></div>
        </div>

        <div className="row">
          <div className="col-12 col-md-4 p-0">
            <div className="row">
              <div className="col-6 col-md-12 inner-col-top"><div className="componentContainer color1"></div></div>
              <div className="col-6 col-md-12 inner-col-bottom"><div className="componentContainer color1"></div></div>
            </div>
          </div>

          <div className="col-12 col-md-8 p-0"><div style={{height: "100%"}} className="componentContainer color1 size2"></div></div>
        </div>

        <div className="row margin-below">
          <div className="col-12 col-md-8 p-0"><div className="componentContainer color1"></div></div>
          <div className="col-12 col-md-4 p-0"><div className="componentContainer color1"></div></div>
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
