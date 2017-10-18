import React, {Component} from 'react';
import {Text, View, Button, StyleSheet, TextInput} from 'react-native';
import '../global.js'

export default class AskQuestion extends Component {
  constructor(props){
    super(props);
    this.state = {
      question: ''
    }
  }

  _handlePress() {
    console.log("Sending Question: ")
    console.log("Sending Question: " + this.state.question)

      fetch(global.serverAddress+'/addQuestion?question=' + this.state.question + '&uuid=213312321')
      .then(response => { return response.json();})
      .then(responseData => {
        this.state.everyoneSteps = responseData;
        this.setState({everyoneSteps: this.state.everyoneSteps});
      })
      .catch(err => {console.log("fetch error" + err)
    }).done();
  }

  render() {
    return(
      <View>
        <Text style = {{fontSize: 30}}> Ask Question Here </Text>
        <TextInput
          style = {{padding: 10, marginTop: 20}}
          placeholder = "Enter Question Here!!"
          onChangeText={(text) => this.setState({question:text})}
        />
        <Button
          title = 'Submit Question'
          onPress={() => this._handlePress()}
        />
      </View>
    );
  }
}
