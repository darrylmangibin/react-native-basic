import React from 'react';
import { AppRegistry } from 'react-native';
import { Text } from 'react-native';

const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

AppRegistry.registerComponent('albums', () => App)