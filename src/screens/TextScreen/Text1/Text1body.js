import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { ThemeProvider } from '@react-navigation/native';
import Text1Screen from './Text1Screen';
class Text1body extends Component {

render() {
    return (
        <View style={styles.container}>
            <ScrollView>
            {
                this.props.text1.map(data => (
                    <View style={styles.text} key={data.id}>
                        <View style={styles.todoText}>
                            <TouchableOpacity style={styles.todoCheckbox} 
                                onPressOut={(event) => {event.stopPropagation(); this.props.checkText1(data.id)}}>
                                {
                                    data.completed
                                    ? <Icon size={20} name='checkcircle' />
                                    : <Icon size={20} name='checkcircleo' />
                                }
                            </TouchableOpacity>
                            <Text style={[data.completed ? styles.todoCompleted : {}]}>{data.text}</Text>
                        </View>
                        <TouchableOpacity onPressOut={(event) => {event.stopPropagation(); this.props.removeText1(data.id)}}>
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
    text: {
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

export default Text1body;
