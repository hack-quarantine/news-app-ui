import React, { Component } from 'react';
import axios from 'axios';
import { FlatList, View, SafeAreaView } from 'react-native';
import News from './News';
import { NEWS_API_TEST } from './constants';

class ArticlesList extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], loading: true };
  }

  componentDidMount() {
    axios
      .get(NEWS_API_TEST)
      .then(responseJson => {
        this.setState({ articles: responseJson.data.articles, loading: false });
      })
      .catch(() => {
      });
  }

  render() {
    return (
      <View>
        { this.state.loading ? null : (
          <>
            <SafeAreaView>
              <FlatList
                bounces={false}
                data={this.state.articles}
                renderItem={({ item }) => (
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
                keyExtractor={item => item.url}
              />
            </SafeAreaView>
          </>
        )}
      </View>
    );
  }
}

export default ArticlesList;
