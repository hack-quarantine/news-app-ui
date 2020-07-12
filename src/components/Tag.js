import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {APP_DEFAULT_COLOR} from './constants';

const Tag = (props) => {
  return (
    <View style={{...styles.container, ...props.tagContainerStyle}}>
      <Text style={{...styles.tag, ...props.tagTextStyle}}>
        {props.tagName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 25,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: APP_DEFAULT_COLOR,
    marginHorizontal: 8,
    borderRadius: 10,
  },
  tag: {
    color: 'white',
    paddingHorizontal: 10,
  },
});

export default Tag;
