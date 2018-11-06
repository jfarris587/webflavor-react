var splashDefaultState = []

export default (state=splashDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.splashData;
    case 'SET_SPLASH':
      return action.payload;
  }
}
