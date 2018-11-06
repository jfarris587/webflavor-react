var glossaryDefaultState = [];

export default (state=glossaryDefaultState, action) => {
  var tempState = [...state];
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.glossaryData;
    case 'SET_GLOSSARY':
      return action.payload;
  }
}
