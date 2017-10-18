import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Question from './Components/Question';
import AskQuestion from './Components/AskQuestion';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!!</Text>
        <Question/>
        <AskQuestion/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
