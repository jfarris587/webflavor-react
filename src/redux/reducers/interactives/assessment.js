var assessmentDefaultState = {
    TOTAL: 0,
    completed: 0
  }

export default (state = assessmentDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.assessmentData;
    case 'SETUP_ASSESSMENT':
      console.log("Assessment Initialized");
      tempState = action.data;
      return tempState;

  }
}
