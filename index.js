/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';

import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducers from './modules';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true;

const middleware = [thunk];

// define Redux Dev Tools
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhancers =
  (process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null) || compose;

middleware.push(logger);
//const composeEnhancers = composeWithDevTools({ name: "jobran" });

//const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk))); // composeEnhancers(

//const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
