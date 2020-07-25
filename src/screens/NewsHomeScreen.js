/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';
import Categories from '../components/Categories';
import Header from '../components/Header';
import ArticlesList from '../components/ArticlesList';

const NewsHomeScreen = () => (
  <View style={styles.mainContainer}>
    <Header />
    <Categories />
    <ArticlesList />
  </View>
);

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F5F5F5',
  },
});

export default NewsHomeScreen;
