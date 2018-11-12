import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './Navigation';
import Footer from './Footer';
import Content from './Content';
import Modals from './Modals';

import * as Tracking from '../../api/TrackingFunctions';

import * as Pages from '../../content/pages';
import Glossary from '../../content/Glossary';
import Resources from '../../content/Resources';
import Splash from '../../content/Splash';

import SETTINGS from '../../settings.json';
const json = SETTINGS.settings;

export class App extends Component {
  componentWillMount() {
    //Before Rendering, start LMS and start up the app
    Tracking.StartLMS();
    this.startApp();
  }

  componentDidMount() {
    //After rendering, check to see if cookies/LMS has bookmarked a page
    //If so, open that page via redux
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
          payload: [bmChapter,bmPage]
        });
      }

    }
  }

  startApp = async () => {
    //Check to see if a LocalStorage exists already with the courseStorageID
    //If so, don't init the app state, instead just copy localStorage over to redux
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
      await this.setChapterState();
      await this.setGlossaryState();
      await this.setResoucesState();
      await this.setSplashState();

    }

    console.log("STARTING APPLICATION: " + json.mode, this.props.store);
    this.setState({ready: true});
  }

  setSettingsState = async () => {
    var settingsDefaultState = {
      MODE: json.mode,
      TITLE: json.courseTitle,
      SUB_TITLE: json.courseSubTitle,
      SETTINGS_VERSION: json.version,
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
  }

  setChapterState = () => {
    var totalPages = Object.keys(Pages).length;

    var currentPage = 11;
    var currentIndex = 0;
    var c = [[Pages[currentPage]]];

    while(currentIndex < totalPages){
      if(Pages[currentPage+1]){
        if(c[currentIndex]){
          c[currentIndex].push(Pages[currentPage+1]);
          //c[currentIndex].push(currentPage+1);

        }
        else{
          c[currentIndex] = [];
          c[currentIndex].push(Pages[currentPage+1]);
          //c[currentIndex].push(currentPage+1);

        }
        currentPage+=1;

      }
      else {
        currentPage=(currentIndex+2)*10;
        currentIndex += 1;
      }
    }

    this.props.dispatch({
      type: "SET_CHAPTERS",
      payload: c
    });
  }

  setGlossaryState = () => {
    //Set Redux state from the imported Glossary Object
    this.props.dispatch({
      type: "SET_GLOSSARY",
      payload: Glossary
    });
  }

  setResoucesState = () => {
    //Set Redux state from the imported Resources Object
    this.props.dispatch({
      type: "SET_RESOURCES",
      payload: Resources
    });
  }

  setSplashState = () => {
    //Set Redux state from the imported Splash Object
    this.props.dispatch({
      type: "SET_SPLASH",
      payload: Splash
    });
  }

  nextPage = () => {
    var chapters = this.props.store.chapters;
    var currentChapter = this.props.store.tracking.currentChapter;
    var currentPage = this.props.store.tracking.currentPage;

    if(chapters[currentChapter][currentPage+1] !== undefined){
      this.props.dispatch({
        type: "OPEN_PAGE",
        payload: [currentChapter, currentPage+1]
      });
    }
    else{
      if(chapters[currentChapter+1] !== undefined){
        this.props.dispatch({
          type: "OPEN_PAGE",
          payload: [currentChapter+1, 0]
        });
      }
    }
  }

  prevPage = () => {
    var chapters = this.props.store.chapters;
    var currentChapter = this.props.store.tracking.currentChapter;
    var currentPage = this.props.store.tracking.currentPage;

    if(chapters[currentChapter][currentPage-1] !== undefined){
      this.props.dispatch({
        type: "OPEN_PAGE",
        payload: [currentChapter, currentPage-1]
      });
    }
    else{
      if(!(currentChapter === 0 && currentPage === 0)){
        this.props.dispatch({
          type: "OPEN_PAGE",
          payload: [currentChapter-1, chapters[currentChapter-1].length-1]
        });
      }
    }
  }

  openPage = (c,p) => {
    this.props.dispatch({
      type: "OPEN_PAGE",
      payload: [c, p]
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
            toc={this.props.store.chapters.length}
          />

          <Modals />
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
  alert("Thank you for completing this course. You may exit this window...");
  Tracking.SetComplete();
};

export default connect(
  mapStateToProps
)(App);
