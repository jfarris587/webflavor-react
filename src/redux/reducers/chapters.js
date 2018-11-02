var chaptersDefaultState = []

/*------------------------------------------------------*/

export default (state = chaptersDefaultState, action) => {
  var tempState = [...state];
  switch (action.type) {
    default:
      return tempState;
    case 'SET_CHAPTERS':
      return action.payload;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.chapters;
    case 'NEXT_PAGE':
      return tempState;
  }
}
