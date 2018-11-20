import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../redux/store/configureStore';
import App from './containers/App.jsx';
import '../scss/style.scss';

const redux = configureStore();

redux.store.subscribe(()=>{
  //console.log("STATE CHANGED:", store.getState());

  //***************************
  //***************************
  // UPDATE LOCAL STORAGE HERE
  //***************************
  //***************************

});

ReactDOM.render(
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
