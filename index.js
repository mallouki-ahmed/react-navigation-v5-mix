/**
 * @format
 */
import React from 'react';
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './modules';
import App from './App';
import {name as appName} from './app.json';

const store = createStore(reducers);

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
