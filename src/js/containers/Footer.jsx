import React from "react";
import { connect } from 'react-redux';

const Footer = (props) => {
  var nextBtn = "media/assets/btn_back.png";
  var backBtn = "media/assets/btn_next.png";

  if(props.currentChapter === 0){
    nextBtn = "media/assets/btn_back_inactive.png";
  }
  if(props.currentChapter === props.toc.length-1){
    backBtn = "media/assets/btn_next_inactive.png";
  }

  return (
    <footer className="footer">
      <div className="container footer-nav">

        <a className="back" onClick={props.prevPage}>
          <img src={nextBtn} alt="go to previous page"/>
        </a>
        <span>
          <img src="media/assets/btn_play_pause_inactive.png" alt="play/pause button"/>
        </span>

        <a className="next" onClick={props.nextPage}>
          <img src={backBtn} alt="go to next page"/>
        </a>
      </div>
    </footer>
  );
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(
  mapStateToProps
)(Footer);
