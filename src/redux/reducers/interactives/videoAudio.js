var videoAudioDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = videoAudioDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.videoAudioData;
    case 'SETUP_VIDEOAUDIO':
      console.log("VideoAudio Initialized");
      tempState = action.data;
      return tempState;
    case 'COMPLETE_VIDEOAUDIO':
      console.log("VideoAudio Completed");
      tempState.videoAudio[action.elementID].completed = true;
      tempState.completed += 1;
      return tempState;
  }
}
