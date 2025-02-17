import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => <View style={{ ...styles.card, ...props.style }}>{props.children}</View>;

const styles = StyleSheet.create({
  card: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.2,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
