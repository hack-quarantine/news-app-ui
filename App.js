/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Categories from './src/components/Categories';
import Header from './src/components/Header';
import ArticlesList from './src/components/ArticlesList';
import {StyleSheet, View} from 'react-native';

const App = (props) => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Categories />
      <ArticlesList />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F5F5',
  },
});

export default App;
