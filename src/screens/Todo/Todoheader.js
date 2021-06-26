import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon} from 'native-base';
class Todoheader extends Component {
    state = {
        newTodo: '',
    }

    addNewTodo = () => {
        console.log(this.state)
        if(this.state.newTodo) {
            this.props.addTodo(this.state.newTodo);
            this.setState({
                newTodo: ''
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.input}> 
                    <TextInput 
                        style={styles.inputText}
                        placeholder='Input text'
                        autoCorrect={ false }
                        value={this.state.newTodo}
                        onChangeText={(newTodo) => this.setState({newTodo})}
                    />
                    <TouchableOpacity onPressOut = {this.addNewTodo}>
                        <Icon style={styles.addBtn} size={30} name='add-circle' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        borderRadius: 10,
        backgroundColor: "#FFF",
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    inputText: {
        flex: 1,
    },
    addBtn: {
        color: '#4169E1'
    }
});

export default Todoheader;