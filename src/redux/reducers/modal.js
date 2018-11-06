var glossaryDefaultState = {
  show: false,
  content:null
};

export default (state=glossaryDefaultState, action) => {
  var tempState = {...state};
  switch (action.type) {
    default:
      return tempState;
    case 'LOAD_LOCALSTORAGE':
      return action.payload.modalData;
    case 'SHOW_MODAL':
      tempState.show = true;
      tempState.content = `<h1>THIS IS A MODAL DEMO</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <img  src="media/img/gate.png" alt="logo"/>`;
      return tempState;
    case 'CLOSE_MODAL':
      tempState.show = false;
      tempState.content = null;
      return tempState;
  }
}
