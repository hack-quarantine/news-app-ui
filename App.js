/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
        <AppContainer />
    </Provider>
  );
}
