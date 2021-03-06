import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';
import VideoAudio from '../../js/interactives/VideoAudio';

const state = {
  TITLE: "VIDEO & AUDIO",
  CHAPTER_TITLE: "VIDEO & AUDIO",

  videoAudio_1: {
    youtube: true,
    url: "https://www.youtube.com/embed/WxR8KUFqgaM",
    title: "EMBEDDED YOUTUBE",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  videoAudio_2: {
    youtube: true,
    url: "https://www.youtube.com/embed/o1wO2ox07Rg",
    title: "EMBEDDED YOUTUBE",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  videoAudio_3: {
    youtube: false,
    poster: "media/img/poster.jpg",
    url: "media/videos/animation.mp4",
    title: "EMBEDDED YOUTUBE",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  videoAudio_4: {
    youtube: false,
    poster: "media/img/red.jpg",
    url: "media/audio/bruce.mp3",
    title: "EMBEDDED YOUTUBE",
    caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },

  videoAudio_5: {
    youtube: false,
    poster: "media/img/poster.jpg",
    url: "media/videos/animation.mp4",
  },

  videoAudio_6: {
    youtube: false,
    poster: "media/img/red.jpg",
    url: "media/audio/bruce.mp3",
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
          <div className="col-sm-12">
            <p>The following is a Video/Audio component. This component can be used to display Video or Audio for the users. The component has the ability to be fully embedded into the page, or to display in a pop up modal for the user to view.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-sm-12">
            <h4>YOUTUBE VIDEOS EMBEDED</h4>
          </div>
          <div className="col-sm-6">
            <VideoAudio
              videoAudio = {state.videoAudio_1}
            />
          </div>
          <div className="col-sm-6">
            <VideoAudio
              videoAudio = {state.videoAudio_2}
            />
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-sm-12">
            <h4>VIDEO/AUDIO EMBEDED</h4>
          </div>
          <div className="col-sm-6">
            <VideoAudio
              videoAudio = {state.videoAudio_3}
            />
          </div>
          <div className="col-sm-6">
            <VideoAudio
              videoAudio = {state.videoAudio_4}
            />
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-sm-12">
            <h4>NO HEADING/CAPTION EMBEDED</h4>
          </div>
          <div className="col-sm-6">
            <VideoAudio
              videoAudio = {state.videoAudio_5}
            />
          </div>
          <div className="col-sm-6">
            <VideoAudio
              videoAudio = {state.videoAudio_6}
            />
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
