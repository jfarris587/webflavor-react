import * as Tracking from '../../api/TrackingFunctions';

var trackingDefaultState = {
  currentChapter: 0,
  currentPage: 0,
};

/*------------------------------------------------------*/

export default (state = trackingDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.tracking;
    case 'NEXT_PAGE':
      tempState.currentPage+= 1;
      Tracking.SetBookmark(tempState.currentChapter,tempState.currentPage);
      return tempState;
    case 'PREV_PAGE':
      tempState.currentPage-= 1;
      Tracking.SetBookmark(tempState.currentChapter,tempState.currentPage);
      return tempState;
    case 'NEXT_CHAPTER':
      tempState.currentChapter+= 1;
      Tracking.SetBookmark(tempState.currentChapter,tempState.currentPage);
      return tempState;
    case 'PREV_CHAPTER':
      tempState.currentChapter-= 1;
      Tracking.SetBookmark(tempState.currentChapter,tempState.currentPage);
      return tempState;
    case 'OPEN_PAGE':
      tempState.currentChapter = action.payload;
      Tracking.SetBookmark(tempState.currentChapter,tempState.currentPage);
      return tempState;
    }
}
