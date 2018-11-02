var modalDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = modalDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.modalData;
    case 'SETUP_MODAL':
      tempState = action.data;
      return tempState;

  }
}
