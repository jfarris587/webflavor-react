var resourcesDefaultState = []

export default (state=resourcesDefaultState, action) => {
  var tempState = [...state];
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.resourcesData;
    case 'SET_RESOURCES':
      return action.payload;
  }
}
