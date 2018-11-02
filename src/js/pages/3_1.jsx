import React from "react";
import VideoAudio from '../components/VideoAudio';

const title = "VIDEO & AUDIO";
const videoAudio_1 = {
  youtube: true,
  url: "https://www.youtube.com/embed/WxR8KUFqgaM",
  title: "EMBEDDED YOUTUBE",
  caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const videoAudio_2 = {
  youtube: true,
  url: "https://www.youtube.com/embed/o1wO2ox07Rg",
  title: "EMBEDDED YOUTUBE",
  caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const videoAudio_3 = {
  youtube: false,
  poster: "media/img/poster.jpg",
  url: "media/videos/animation.mp4",
  title: "EMBEDDED YOUTUBE",
  caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const videoAudio_4 = {
  youtube: false,
  poster: "media/img/red.jpg",
  url: "media/audio/bruce.mp3",
  title: "EMBEDDED YOUTUBE",
  caption: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

const videoAudio_5 = {
  youtube: false,
  poster: "media/img/poster.jpg",
  url: "media/videos/animation.mp4",
}

const videoAudio_6 = {
  youtube: false,
  poster: "media/img/red.jpg",
  url: "media/audio/bruce.mp3",
}

const layout =
<React.Fragment>
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
        videoAudio = {videoAudio_1}
      />
    </div>
    <div className="col-sm-6">
      <VideoAudio
        videoAudio = {videoAudio_2}
      />
    </div>
  </div>

  <div className="row margin-below">
    <div className="col-sm-12">
      <h4>VIDEO/AUDIO EMBEDED</h4>
    </div>
    <div className="col-sm-6">
      <VideoAudio
        videoAudio = {videoAudio_3}
      />
    </div>
    <div className="col-sm-6">
      <VideoAudio
        videoAudio = {videoAudio_4}
      />
    </div>
  </div>

  <div className="row margin-below">
    <div className="col-sm-12">
      <h4>NO HEADING/CAPTION EMBEDED</h4>
    </div>
    <div className="col-sm-6">
      <VideoAudio
        videoAudio = {videoAudio_5}
      />
    </div>
    <div className="col-sm-6">
      <VideoAudio
        videoAudio = {videoAudio_6}
      />
    </div>
  </div>

  <div className="row margin-below">
    <div className="col-sm-12">
      <h4>VIDEO/AUDIO POPUPS</h4>
    </div>
    <div className="col-sm-6">
      <div id="videoAudio-page-7"></div>
    </div>
    <div className="col-sm-6">
      <div id="videoAudio-page-8"></div>
    </div>
  </div>

  <div className="row margin-below">
    <div className="col-sm-12">
      <h4>VIDEO/AUDIO POPUPS</h4>
    </div>
    <div className="col-sm-6">
      <div id="videoAudio-page-9"></div>
    </div>
    <div className="col-sm-6">
      <div id="videoAudio-page-10"></div>
    </div>
  </div>
</React.Fragment>;

const Page = {
  title,
  layout,
};

export default Page;
