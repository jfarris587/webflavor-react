import { createStore, combineReducers } from 'redux';

import settingsReducer from '../reducers/settings';
import chaptersReducer from '../reducers/chapters';
import trackingReducer from '../reducers/tracking';

import splashReducer from '../reducers/layout/splash';
import glossaryReducer from '../reducers/layout/glossary';
import resourcesReducer from '../reducers/layout/resources';

import interactivesReducer from '../reducers/interactives/interactives';
import hotspotReducer from '../reducers/interactives/hotspot';
import ctrReducer from '../reducers/interactives/ctr';
import dragDropReducer from '../reducers/interactives/dragDrop';
import flipCardReducer from '../reducers/interactives/flipCard';
import thumbnailReducer from '../reducers/interactives/thumbnail';
import videoAudioReducer from '../reducers/interactives/videoAudio';
import knowledgeCheckReducer from '../reducers/interactives/knowledgeCheck';
import modalReducer from '../reducers/interactives/modal';
import gameReducer from '../reducers/interactives/game';
import assessmentReducer from '../reducers/interactives/assessment';

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
      hotspotData: hotspotReducer,
      ctrData: ctrReducer,
      dragDropData: dragDropReducer,
      flipCardData: flipCardReducer,
      thumbnailData: thumbnailReducer,
      videoAudioData: videoAudioReducer,
      knowledgeCheckData: knowledgeCheckReducer,
      modalData: modalReducer,
      assessmentData: assessmentReducer,
      gameData: gameReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
}
