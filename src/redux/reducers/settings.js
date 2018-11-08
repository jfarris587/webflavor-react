//import settings from '../../../../settings.json';
//import * as Tracking from '../../Tracking.jsx';

var settingsDefaultState = {};

/*------------------------------------------------------*/

export default (state = settingsDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'SET_SETTINGS':
      return action.payload;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.settings;
  }
}
