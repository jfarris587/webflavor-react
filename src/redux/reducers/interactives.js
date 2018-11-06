var interactivesDefaultState = {
  TOTAL: 0
};

export default (state = interactivesDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.INTERACTIVES;
    case 'ADD_INTERACTIVE':
      tempState.TOTAL += 1;
      return tempState;
    case 'SETUP_INTERACTIVES':
      tempState.TOTAL = action.data;
      return tempState;
  }
}
