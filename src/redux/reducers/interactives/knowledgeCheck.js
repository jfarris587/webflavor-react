var knowledgeCheckDefaultState = {
  TOTAL: 0,
  completed: 0
};

export default (state = knowledgeCheckDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.knowledgeCheckData;
    case 'SETUP_KNOWLEDGECHECK':
      console.log("KnowledgeCheck Initialized");
      tempState = action.data;
      return tempState;
    case 'CORRECT_KNOWLEDGECHECK':
      tempState.knowledgeChecks[action.id].questions[action.i].correct = true;
      return tempState;
    case 'COMPLETE_KNOWLEDGECHECK':
      tempState.knowledgeChecks[action.id].completed = true;
      tempState.completed += 1;
      return tempState;
    case 'SCORE_KNOWLEDGECHECK':
      console.log("KnowledgeCheck Completed");
      tempState.knowledgeChecks[action.id].score = action.totalCorrect;
      tempState.totalScore += action.totalCorrect;
      return tempState;

  }
}
