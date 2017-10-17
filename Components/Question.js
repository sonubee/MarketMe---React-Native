import React, {Component} from 'react';
import {Text, View, Button, StyleSheet} from 'react-native';

export default class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: "Loading The Question"
    }
  }

  answerTrue(){
  }

  answerFalse(){
  }

  render() {
    return(
      <View>
        <View>
          <Text style = {{fontSize: 30}}> {this.state.question} </Text>
        </View>

        <View style = {{marginTop: 60}}>
          <Button
            title = 'True'
            onPress = {this.answerTrue}
          />
        </View>

        <View style = {{marginTop: 60}}>
          <Button
            title = 'False'
            onPress = {this.answerFalse}
          />
        </View>
      </View>
    );
  }
}
