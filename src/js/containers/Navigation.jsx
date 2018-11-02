import React from "react";
import { connect } from 'react-redux';
import NavigationItem from '../components/NavigationItem';

const Detail = (props) => {
  return (
    <div id="navContainer">
      <div id="navbar" className="nav-container navbar-fixed-left">
        <nav className="navbar navbar-dark">
          <div className="container navbar-expand-lg">
            <div className="mobile-container container-fluid d-block d-lg-none">
              <div className="titles__wrapper">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <span id="titleMainMobile" className="title-main"></span>
                <span id="subTitleMobile" className="">{props.SUB_TITLE}</span>
              </div>

              <div className="links-container">
                <ul className="headerLinks nav page-assist float-right"></ul>
              </div>
            </div>

            <div className="title-container d-none d-lg-none d-lg-block ">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMain" aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="titles__wrapper">
                <span id="titleMain" className="titles__wrapper-main">{props.TITLE}: </span>
                <span id="subTitle" className="titles__wrapper-main">{props.SUB_TITLE}</span>
              </div>
            </div>

            <div className="links-container d-none d-lg-none d-lg-block ">
              <ul className="headerLinks nav page-assist float-right"></ul>
            </div>
          </div>

          <div id="navbarMain" className="navbar-collapse collapse tabbed">
            <ul id="navbarMobile" className="navbar-nav mr-auto">

              {props.chapters.map((chapter, index) =>
                {
                  var selected = false;
                  if(index === props.currentChapter){
                    selected = true;
                  }
                  return (
                    <NavigationItem
                      key={index}
                      index={index}
                      title={chapter.title}
                      selected={selected}
                      openPage = {props.openPage}
                    />
                  );
                }
              )}

            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    TITLE: state.settings.TITLE,
    SUB_TITLE: state.settings.SUB_TITLE,
    chapters: state.chapters,
    currentPage: state.tracking.currentPage,
    currentChapter: state.tracking.currentChapter,
  }
}

export default connect(
  mapStateToProps
)(Detail);
