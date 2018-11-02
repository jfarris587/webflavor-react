var thumbnailDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = thumbnailDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.thumbnailData;
    case 'SETUP_THUMBNAIL':
      console.log("Thumbnail Initialized");
      tempState = action.data;
      return tempState;
    case 'COMPLETE_THUMBNAIL':
      tempState.thumbnails[action.elementID].completed = true;
      tempState.completed += 1;
      return tempState
    case 'SELECT_THUMBNAIL':
      console.log("Thumbnail Completed");
      tempState.thumbnails[action.elementID].thumbs[action.thumbID].completed = true;
      tempState.thumbnails[action.elementID].score += 1;
      return tempState;
  }
}
