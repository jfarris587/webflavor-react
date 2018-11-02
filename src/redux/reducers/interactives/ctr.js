var ctrDefaultState = {
  TOTAL: 0,
  completed: 0
}

export default (state = ctrDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.ctrData;
    case 'SETUP_CTR':
      console.log("CTR Initialized");
      tempState = action.data;
      return tempState;
    case 'SELECT_CTR':
      tempState.ctrs[action.id].sections[action.sectionID].completed = true;
      tempState.ctrs[action.id].score += 1;
      return tempState;
    case 'COMPLETE_CTR':
    console.log("CTR Completed");
      tempState.ctrs[action.id].completed = true;
      tempState.completed += 1;
      return tempState;
  }
}
