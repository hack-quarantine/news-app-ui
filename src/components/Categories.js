import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import Tag from './Tag';

const CATEGORIES = [
  'Health',
  'World',
  'Lifestyle',
  'Food',
  'Entertainment',
  'Technology',
];

const Categories = (props) => {
  return (
    <View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {CATEGORIES.map((category, key) => {
            return <Tag tagName={category} key={key} />;
          })}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 12,
    height: 45,
  },
});

export default Categories;
