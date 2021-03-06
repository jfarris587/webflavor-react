import * as Tracking from '../../api/TrackingFunctions';

var trackingDefaultState = {
  currentChapter: 0,
  currentPage: 0,
  modal: {
    open: false,
    type: "glossary",
    data: null
  },
  splash: true
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

    case 'TOGGLE_MODAL':
      tempState.modal.open = !tempState.modal.open;
      tempState.modal.type = action.payload;
      tempState.modal.data = action.data;
      return tempState;

    case 'EXIT_SPLASH':
      tempState.splash = !tempState.splash;
      return tempState;
  }
}
