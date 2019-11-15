/* eslint-disable no-unused-vars */
// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import {RouteController} from './src/pages/RouteController';

class App extends React.PureComponent {
  render() {
    return (
        <Provider store={store}>
          <SafeAreaView>
              <RouteController/>
          </SafeAreaView>
        </Provider>
    );
  }
}

export default App;
