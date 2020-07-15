import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { APP_NAME, APP_DEFAULT_COLOR } from './constants';

const Header = () => (
  <View style={styles.appName}>
    <Text style={styles.appNameText}>{APP_NAME}</Text>
  </View>
);

const styles = StyleSheet.create({
  appName: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: APP_DEFAULT_COLOR,
  },
  appNameText: {
    paddingVertical: 100,
    paddingLeft: 25,
    fontSize: 30,
    color: 'white',
  },
});

export default Header;
