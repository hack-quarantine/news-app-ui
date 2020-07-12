import React, {Component} from 'react';
import News from './News';
import axios from 'axios';
import {NEWS_API_TEST} from './constants';
import {FlatList, View, SafeAreaView} from 'react-native';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = {articles: [], loading: true};
  }

  componentDidMount() {
    axios
      .get(NEWS_API_TEST)
      .then((responseJson) => {
        console.log('responseJson', responseJson);
        this.setState({articles: responseJson.data.articles, loading: false});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        {this.state.articles.length === 0 ? null : (
          <>
            <SafeAreaView>
              <FlatList
                bounces={false}
                data={this.state.articles}
                renderItem={({item}) => (
                  <News
                    author={item.author}
                    title={item.title}
                    url={item.url}
                    image_url={item.urlToImage}
                    publishedAt={item.publishedAt}
                    content={item.content}
                    source={item.source.name}
                    description={item.description}
                  />
                )}
                keyExtractor={(item) => item.url}
              />
            </SafeAreaView>
          </>
        )}
      </View>
    );
  }
}

export default ArticlesList;
