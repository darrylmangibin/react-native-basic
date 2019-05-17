import React from 'react';
import { AppRegistry } from 'react-native';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import thunk from 'redux-thunk';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const store = createStore(reducers, applyMiddleware(thunk))

const App = () => {
  return (
    <View>
      <Header 
        headerText="Albums"
      />
      <AlbumList />
    </View>
  );
};

const AlbumRedux = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent('albums', () => AlbumRedux)