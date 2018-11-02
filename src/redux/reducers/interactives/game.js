var gameDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = gameDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.gameData;
    case 'SETUP_GAME':
      console.log("Game Initialized");
      tempState = action.data;
      return tempState;
    case 'SELECT_GAME':
      state.games[action.id].questions[action.questionIndex].answers[action.answerIndex].selected=!state.games[action.id].questions[action.questionIndex].answers[action.answerIndex].selected;
      return tempState;
  }
}
