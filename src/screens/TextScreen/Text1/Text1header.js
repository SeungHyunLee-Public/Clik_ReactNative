import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native'
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon} from 'native-base';
class Text1header extends Component {
    state = {
        newText1: '',
    }

    // _Text1add(){
    //     // this.props.navigation.navigate('Text1header');
    //     this.props.navigation.navigate('Text1add');
    // }

    addNewText1 = () => {
        console.log(this.state)
        if(this.state.newText1) {
            this.props.addText1(this.state.newText1);
            this.setState({
                newText1: ''
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
                        value={this.state.newText1}
                        onChangeText={(newText1) => this.setState({newText1})}
                    />
                    <TouchableOpacity onPressOut = {this.addNewText1}>
                        <Icon style={styles.addBtn} size={30} name='add-circle' />
                    </TouchableOpacity>
                    {/* <TouchableOpacity 
                        style={styles.wrapButton}
                        onPress={this._Text1add.bind(this)}>
                    <Text>내가 쓴 글</Text>
                </TouchableOpacity> */}
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

export default Text1header;