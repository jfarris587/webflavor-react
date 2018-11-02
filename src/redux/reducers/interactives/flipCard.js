var flipCardDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = flipCardDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.flipCardData;
    case 'SETUP_FLIPCARD':
      console.log("FlipCard Initialized");
      tempState = action.data;
      return tempState;
    case 'SELECT_FLIPCARD':
      tempState.flipCards[action.id].cards[action.cardsID].completed = true;
      tempState.flipCards[action.id].score += 1;
      return tempState;
    case 'COMPLETE_FLIPCARD':
      console.log("FlipCard Completed");
      tempState.flipCards[action.id].completed = true;
      tempState.completed += 1;
      return tempState;
  }
}
