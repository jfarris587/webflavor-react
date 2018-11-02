import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Footer from './Footer';
import Content from './Content';

import * as Tracking from '../../api/TrackingFunctions';

import Contents from '../pages/Contents';

import SETTINGS from '../../settings.json';
const json = SETTINGS.settings;

export class App extends Component {
  componentWillMount() {
    Tracking.StartLMS();
    this.startApp();
  }

  componentDidMount() {
    var BOOKMARK = Tracking.GetBookmark();

    if(BOOKMARK){
      let currentPage = this.props.store.tracking.currentPage;
      let currentChapter = this.props.store.tracking.currentChapter;

      let i = BOOKMARK.indexOf("_");
      let bmChapter = parseInt(BOOKMARK.substr(0,i), 10);
      let bmPage = parseInt(BOOKMARK.substr(i+1,BOOKMARK.length), 10);

      if(currentChapter !== bmChapter || currentPage !== bmPage){
        this.props.dispatch({
          type: "OPEN_PAGE",
          payload: bmChapter
        });
      }

    }
  }

  startApp = async () => {
    if(json.mode === "DEV"){
      localStorage.clear();
    }

    const LOCALSTORAGE = JSON.parse(localStorage.getItem(json.courseStorageID));

    if(LOCALSTORAGE !== null){
      console.log("---LOADING PREVIOUS SESSION---");
      this.props.dispatch({
        type: "LOAD_LOCALSTORAGE",
        payload: LOCALSTORAGE
      });
    }
    else{
      await this.setSettingsState();
      await this.setChaptersState();

    }

    console.log("STARTING APPLICATION: " + json.mode, this.props.store);
    this.setState({ready: true})
  }

  setSettingsState = async () => {
    var settingsDefaultState = {
      MODE: json.mode,
      TITLE: json.courseTitle,
      SUB_TITLE: json.courseSubTitle,
      SETTINGS_VERSION: json.version,
      THEME: json.theme,
      THEME_PATH: "view/themes/" + json.theme,
      COOKIE_NAME: json.cookieName,
      MENU_PLACEMENT: json.menuPlacement,
      MENU_STYLE: json.menuStyle,
      HAS_MENU_LOGO: json.hasMenuLogo,
      HAS_FOOTER: json.hasFooter,
      HAS_GLOSSARY: json.hasGlossary,
      HAS_RESOURCES: json.hasResources,
      HAS_HELP: json.hasHelp,
      HAS_SPLASH_PAGE: json.hasSplashPage,
      HAS_INTERACTIVE_COMPLETION: json.hasInteractiveCompletion,
      SETTINGS_LOADED: false,
      INTERACTIVES_TOTAL: 0,
      INTERACTIVES_COMPLETED: 0,
      CONTENTS: {
        toc: json.contents,
        completed: []
      },
      COUNT_PAGES: json.hasCountPages
    };

    if(settingsDefaultState.COUNT_PAGES === "true") {
      var pageCountObj = {"pagesTotal":0,"pagesVisited":0,"pageIds":[]};
      settingsDefaultState.pageCount = pageCountObj;
    }

    this.props.dispatch({
      type: "SET_SETTINGS",
      payload: settingsDefaultState
    });
    return "done";
  }

  setChaptersState = () => {
    this.props.dispatch({
      type: "SET_CHAPTERS",
      payload: Contents
    });
  }

  nextPage = () => {
    var chapters = this.props.store.chapters;
    var currentChapter = this.props.store.tracking.currentChapter;

    if(chapters[currentChapter+1] !== undefined){
      this.props.dispatch({
        type: "NEXT_CHAPTER",
      });
    }
  }

  prevPage = () => {
    var chapters = this.props.store.chapters;
    var currentChapter = this.props.store.tracking.currentChapter;

    if(chapters[currentChapter-1] !== undefined){
      this.props.dispatch({
        type: "PREV_CHAPTER",
      });
    }
  }

  openPage = (i) => {
    this.props.dispatch({
      type: "OPEN_PAGE",
      payload: i
    });
  }

  render(){
    if(this.state !== null){
      return(
        <React.Fragment>
          <Navigation
            openPage = {this.openPage}
          />

          <Content />

          <Footer
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            currentChapter={this.props.store.tracking.currentChapter}
            toc={this.props.store.settings.CONTENTS.toc}
          />

        </React.Fragment>
      );
    }
    else{
      return null;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    store: state,
  }
}

window.completeCourse = function(){
  Tracking.SetComplete();
};

export default connect(
  mapStateToProps
)(App);
