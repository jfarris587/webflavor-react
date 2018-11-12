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
    var footerHeight = document.getElementsByClassName("footer")[0];
    if(footerHeight){
      footerHeight = footerHeight.offsetHeight;
    }
    else{
      footerHeight = 0;
    }
    document.getElementById("contentContainer").style.height = windowHeight - navHeight - footerHeight+1+"px";
  }

  render(){
    var Page = this.props.page.Page;
    var completion = "";

    if(this.props.pageNum === this.props.pageTotal){
      completion = "completion";
    }

    return (
      <div id="mainContainer" className="" data-role="page">
        <div id="contentContainer">
          <div id="pageContainer" className={`page-container ${completion}`}>
            <div id="pageContent" className="container">

              <Page />


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

//    page: state.chapters[state.tracking.currentChapter][state.tracking.currentPage],


export default connect(
  mapStateToProps
)(Content);
