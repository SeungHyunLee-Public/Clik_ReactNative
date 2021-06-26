import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Text1header from './Text1header'
import Text1body from './Text1body'
import Text1add from  './Text1add'
import AsyncStorage from '@react-native-community/async-storage';
import {Icon} from 'native-base';
export default class Text1 extends React.Component {
  state = {
    text1: []
  }

     _Text1add(){
        // this.props.navigation.navigate('Text1header');
        this.props.navigation.navigate('Text1add');
    }

  componentDidMount = () => {
    AsyncStorage.getItem("text1").then(data => {
      const text1 = JSON.parse(data || '[]');
      this.setState({ text1 });
    });
  };

  // 할일 추가 함수
  addText1 = (text) => {
    const {newText1} = {
      id: Date.now(),
      text: text,
      completed: false,
    } 
    this.setState(prevState => {
      const text1 = [
        newText1,
        ...prevState.text1
      ];
      AsyncStorage.setItem("text1", JSON.stringify(text1));
      return { text1 }
    });
  }
  checkText1 = (id) => {
    this.setState(prevState => {
      const [ text ] = prevState.text1.filter(e => e.id === id);
      text.completed = !text.completed;
      const text1 = [
        ...prevState.text1
      ];
      AsyncStorage.setItem("text1", JSON.stringify(text1));
      return ({ text1 })
    });
  }
  removeText1 = (id) => {
    this.setState(prevState => {
      const index = prevState.text1.findIndex(e => e.id === id);
      prevState.text1.splice(index, 1);
      const text1 = [
        ...prevState.text1
      ];
      AsyncStorage.setItem("text1", JSON.stringify(text1));
      return ({ text1 })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>게시글1</Text>
        <Text1add addText1 = {this.addText1}/>
        <Text1body
          text1={this.state.text1} 
          checkText1={this.checkText1} 
          removeText1={this.removeText1}  />
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.wrapButton}
                onPress={this._Text1add.bind(this)}>
                <Text>버튼</Text>
                {/* <Text1add addText1 = {this.addText1 /> */}
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    paddingTop: 50,
    backgroundColor: "#EEE",
  },
  title: {
    fontWeight: "800",
    fontSize: 30, 
    marginLeft: 20,
    marginBottom: 20,
  }
});