import React, { Component } from 'react';

export class VideoAudio extends Component {
  render(){
    const { videoAudio } = this.props;

    return (
      <div className="videoAudio">
        <Source
          youtube={videoAudio.youtube}
          url={videoAudio.url}
          poster={videoAudio.poster}
        />

      {videoAudio.title && (
        <div className="caption">
          <div className="caption-title">
            <span>{videoAudio.title}</span>
          </div>

        <p>{videoAudio.caption}</p>
        </div>
      )}
      </div>
    );
  }
}

export const Source = (props) =>{
  if(props.youtube){
    return (
      <div className="youtube-container">
        <iframe className="youtube" width="100%" height="120%" src={props.url}  lowfullscreen="" title="youtube">
        </iframe>
      </div>
    );
  }
  else{
    return (
      <video poster={props.poster} controls>
        <source src={props.url} type="video/mp4"/>Your browser does not support the video tag.
      </video>
    );
  }
}


export default VideoAudio;
