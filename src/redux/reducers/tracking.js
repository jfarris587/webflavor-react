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

    case 'OPEN_PAGE':
      tempState.currentChapter = action.payload[0];
      tempState.currentPage = action.payload[1];
      Tracking.SetBookmark(tempState.currentChapter,tempState.currentPage);
      return tempState;
  }
}
