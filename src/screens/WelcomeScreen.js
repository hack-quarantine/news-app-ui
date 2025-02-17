import React from 'react';
import Button from 'react-native-button';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { AppStyles } from '../styles/AppStyles';

export default class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };
  }

  render() {
    if (this.state.isLoading === true) {
      return (
        <ActivityIndicator
          style={styles.spinner}
          size="large"
          color={AppStyles.color.tint}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Say hello to your new app</Text>
        <Button
          containerStyle={styles.loginContainer}
          style={styles.loginText}
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        >
          Log In
        </Button>
        <Button
          containerStyle={styles.signupContainer}
          style={styles.signupText}
          onPress={() => this.props.navigation.navigate('SignUpScreen')}
        >
          Sign Up
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 150
  },
  logo: {
    width: 200,
    height: 200
  },
  title: {
    fontSize: AppStyles.fontSize.title,
    fontWeight: 'bold',
    color: AppStyles.color.tint,
    marginTop: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20
  },
  loginContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.tint,
    borderRadius: AppStyles.borderRadius.main,
    padding: 10,
    marginTop: 30
  },
  loginText: {
    color: AppStyles.color.white
  },
  signupContainer: {
    width: AppStyles.buttonWidth.main,
    backgroundColor: AppStyles.color.white,
    borderRadius: AppStyles.borderRadius.main,
    padding: 8,
    borderWidth: 1,
    borderColor: AppStyles.color.tint,
    marginTop: 15
  },
  signupText: {
    color: AppStyles.color.tint
  },
  spinner: {
    marginTop: 200
  }
});
