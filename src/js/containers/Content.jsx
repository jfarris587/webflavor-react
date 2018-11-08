import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Content extends Component {
  componentDidMount() {
    this.calculateHeight();
    window.onresize = function(event) {
        this.calculateHeight();
    }.bind(this);
  }

  calculateHeight = () => {
    var windowHeight = window.innerHeight;
    var navHeight = document.getElementsByClassName("navbar")[0].offsetHeight;
    var footerHeight = document.getElementsByClassName("footer")[0].offsetHeight;
    document.getElementById("contentContainer").style.height = windowHeight - navHeight - footerHeight+1+"px";
  }

  render(){
    var completion = "";
    var width = 12;
    var pageNums = true;
    if(this.props.pageNum === this.props.pageTotal){
      completion = "completion";
      width = 6;
      pageNums = false;
    }

    return (
      <div id="mainContainer" className="" data-role="page">
        <div id="contentContainer">
          <div id="pageContainer" className={`page-container ${completion}`}>
            <div id="pageContent" className="container">
              <div className="row">
                <div className={`col-sm-${width}`}>
                  <h1 id="pageTitle">{this.props.page.title}</h1>

                  {pageNums && (
                    <div className="page-number">
                      <span>{this.props.pageNum}</span> of <span>{this.props.pageTotal}</span>
                    </div>
                  )}
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
    page: state.chapters[state.tracking.currentChapter][state.tracking.currentPage],
    pageNum: state.tracking.currentChapter + 1,
    pageTotal: state.chapters.length
  }
}

export default connect(
  mapStateToProps
)(Content);
