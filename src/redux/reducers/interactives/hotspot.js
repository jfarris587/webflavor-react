var hotspotDefaultState = {
  TOTAL: 0,
  completed: 0,
  hotspots: []
};

export default (state = hotspotDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.hotspotData;
    case 'ADD_HOTSPOT':
      console.log("Hotspot Initialized");
      tempState.hotspots.push(action.payload);
      return tempState;
    case 'SELECT_HOTSPOT':
      tempState.hotspots[action.id].spots[action.spotID].completed = true;
      tempState.hotspots[action.id].score += 1;
      return tempState;
    case 'COMPLETE_HOTSPOT':
      console.log("Hotspot Completed");
      tempState.hotspots[action.id].completed = true;
      tempState.completed += 1;
      //tempState.INTERACTIVES_COMPLETED += 1;
      return tempState;
  }
}
