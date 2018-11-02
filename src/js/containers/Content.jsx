import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Content extends Component {
  componentDidMount() {
    this.calculateHeight();
  }

  calculateHeight = () => {
    var windowHeight = window.innerHeight;
    var navHeight = document.getElementById("navContainer").offsetHeight;
    var footerHeight = document.getElementsByClassName("footer")[0].offsetHeight;
    document.getElementById("contentContainer").style.height = windowHeight - navHeight - footerHeight+"px";
  }

  render(){
    var completion = "";
    if(this.props.pageNum === this.props.pageTotal){
      completion = "completion";
    }

    return (
      <div id="mainContainer" className="" data-role="page">
        <div id="contentContainer">
          <div id="pageContainer" className={`page-container ${completion}`}>
            <div id="pageContent" className="container">
              <div className="row">
                <div className="col-sm-12">
                  <h1 id="pageTitle">{this.props.page.title}</h1>

                  <div className="page-number">
                    <span>{this.props.pageNum}</span> of <span>{this.props.pageTotal}</span>
                  </div>
                </div>
              </div>

              {this.props.page.layout}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.chapters[state.tracking.currentChapter],
    pageNum: state.tracking.currentChapter + 1,
    pageTotal: state.chapters.length
  }
}

export default connect(
  mapStateToProps
)(Content);
