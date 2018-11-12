import { createStore, combineReducers } from 'redux';

import settingsReducer from '../reducers/settings';
import chaptersReducer from '../reducers/chapters';
import trackingReducer from '../reducers/tracking';

import splashReducer from '../reducers/splash';
import glossaryReducer from '../reducers/glossary';
import resourcesReducer from '../reducers/resources';

import interactivesReducer from '../reducers/interactives';


export default () => {
  const store = createStore(
    combineReducers({
      tracking: trackingReducer,
      settings: settingsReducer,
      chapters: chaptersReducer,
      INTERACTIVES: interactivesReducer,
      glossaryData: glossaryReducer,
      resourcesData: resourcesReducer,
      splashData: splashReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
