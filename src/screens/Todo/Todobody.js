import React, { Component } from 'react';

import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
// import { Icon} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeProvider } from '@react-navigation/native';
import Todoapp from './Todoapp';
class Todobody extends Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <ScrollView>
//                 {
//                     this.props.todos.map(data => (
//                         <View style={styles.todo} key = {data.id}>
//                             <View style={styles.todoText}>
//                                 <TouchableOpacity style={styles.todoCheckbox}>
//                                 onPressOut={(event) => {event.stopPropagation(); this.props.checkTodo(data.id)}}>
//                                     {
//                                         data.completed
//                                         ? <Icon size={20} name='home' />
//                                         : <Icon size={20} name='beer' />
//                                     }
//                                 </TouchableOpacity>
//                                 <Text style={[data.completed ? styles.todoCompleted : {}]}>{data.text}</Text>
//                             </View>
//                             <TouchableOpacity onPressOut={(event) => {event.stopPropagation(); this.props.removeTodo(data.id)}}>
//                                 <Icon style={styles.todoDelBtn} size={30} name='home' />
//                             </TouchableOpacity>
//                         </View>
//                     ))
//                 }
//                 </ScrollView>
//             </View>
//         )
//     }
// }

render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            {
                this.props.todos.map(data => (
                    <View style={styles.todo} key={data.id}>
                        <View style={styles.todoText}>
                            <TouchableOpacity style={styles.todoCheckbox} 
                                onPressOut={(event) => {event.stopPropagation(); this.props.checkTodo(data.id)}}>
                                {
                                    data.completed
                                    ? <Icon size={20} name='checkcircle' />
                                    : <Icon size={20} name='checkcircleo' />
                                }
                            </TouchableOpacity>
                            <Text style={[data.completed ? styles.todoCompleted : {}]}>{data.text}</Text>
                        </View>
                        <TouchableOpacity onPressOut={(event) => {event.stopPropagation(); this.props.removeTodo(data.id)}}>
                        <Icon style={styles.todoDelBtn} size={30} name='delete' />
                        </TouchableOpacity>
                    </View>
                ))
            }
            </ScrollView>
        </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 5,
        marginHorizontal: 20,
        padding: 10,
        backgroundColor: "#FFF",
        borderRadius: 10,
    },
    todo: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-between',
        height: 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    todoCheckbox: {
        marginRight: 5,
    },
    todoText: {
        flexDirection: 'row',
    },
    todoDelBtn: {
        color: '#777'
    }
});

export default Todobody;
