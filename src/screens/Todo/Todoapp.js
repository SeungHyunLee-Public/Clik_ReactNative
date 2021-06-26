import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Todoheader from './Todoheader'
import Todobody from './Todobody'
import AsyncStorage from '@react-native-community/async-storage';
export default class Todoapp extends React.Component {
  state = {
    todos: []
  }

  componentDidMount = () => {
    AsyncStorage.getItem("todos").then(data => {
      const todos = JSON.parse(data || '[]');
      this.setState({ todos });
    });
  };

  // 할일 추가 함수
  addTodo = (todo) => {
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    } 
    this.setState(prevState => {
      const todos = [
        newTodo,
        ...prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return { todos }
    });
  }
  checkTodo = (id) => {
    this.setState(prevState => {
      const [ todo ] = prevState.todos.filter(e => e.id === id);
      todo.completed = !todo.completed;
      const todos = [
        ...prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return ({ todos })
    });
  }
  removeTodo = (id) => {
    this.setState(prevState => {
      const index = prevState.todos.findIndex(e => e.id === id);
      prevState.todos.splice(index, 1);
      const todos = [
        ...prevState.todos
      ];
      AsyncStorage.setItem("todos", JSON.stringify(todos));
      return ({ todos })
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Wehan Community</Text>
        <Todoheader addTodo = {this.addTodo}/>
        <Todobody
          todos={this.state.todos} 
          checkTodo={this.checkTodo} 
          removeTodo={this.removeTodo}  />
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