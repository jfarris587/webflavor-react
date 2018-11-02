var dragDropDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = dragDropDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.ctrData;
    case 'SETUP_DRAGDROP':
      console.log("DragDrop Initialized");
      tempState = action.data;
      return tempState;
    case 'SCORE_DRAGDROP':
      tempState.dragDrops[action.id].score = action.score;
      return tempState;
    case 'COMLPETE_DRAGDROP':
      console.log("DragDrop Compelted");
      tempState.dragDrops[action.id].completed = true;
      tempState.completed += 1;
      return tempState;
  }
}
