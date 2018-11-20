import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import settingsReducer from '../reducers/settings';
import chaptersReducer from '../reducers/chapters';
import trackingReducer from '../reducers/tracking';

import splashReducer from '../reducers/splash';
import glossaryReducer from '../reducers/glossary';
import resourcesReducer from '../reducers/resources';

import interactivesReducer from '../reducers/interactives';

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

const combinedReducers = combineReducers({
  tracking: trackingReducer,
  settings: settingsReducer,
  chapters: chaptersReducer,
  INTERACTIVES: interactivesReducer,
  glossaryData: glossaryReducer,
  resourcesData: resourcesReducer,
  splashData: splashReducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducers)


export default () => {
  let store = createStore(persistedReducer)
  let persistor = persistStore(store)
  return { store, persistor }
}

//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
