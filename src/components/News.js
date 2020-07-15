import React from 'react';
import {
  Text, StyleSheet, View, Image
} from 'react-native';
import Card from './Card';
import { APP_DEFAULT_COLOR } from './constants';

const DEFAULT_ICON = 'https://img.pngio.com/corporate-icon-at-getdrawingscom-free-corporate-icon-images-of-company-icon-png-512_512.png';

const News = props => (
  <Card style={styles.card}>
    <View style={styles.container}>
      <View>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.image_url != null ? props.image_url : DEFAULT_ICON,
          }}
        />
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.titleText} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
        <View>
          <Text style={styles.descriptionText} numberOfLines={3}>
            {props.description}
          </Text>
        </View>
        <View style={styles.sourceMainContainer}>
          <View style={styles.sourceSubContainer}>
            <View>
              <Text style={styles.dateText}>{props.publishedAt}</Text>
            </View>
            <View>
              <Text style={styles.sourceText}>{props.source}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </Card>
);

const styles = StyleSheet.create({
  card: {
    height: 150,
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: '36%',
  },
  tinyLogo: {
    width: 125,
    height: '100%',
    borderRadius: 10,
    marginRight: 10,
  },
  content: {
    flexDirection: 'column',
    marginLeft: 5,
  },
  titleText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#222',
  },
  descriptionText: {
    fontSize: 13,
    marginTop: 10,
    color: '#444',
  },
  sourceMainContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  sourceSubContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: 10,
    color: '#888',
    fontStyle: 'italic',
  },
  sourceText: {
    color: APP_DEFAULT_COLOR,
  },
});

export default News;
