import React, {Component} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {ListItem,Button, List, Icon, Container, Header, Content} from 'native-base';
export default class Text1add extends Component{
    state = {
        newText1: '',
    }
    
    addNewText1 = () => {
        console.log(this.state)
        if(this.state.newText1) {
            this.props.addText1(this.state.newText1);
            this.setState({
                newText1: '',
            });
        }
    }

render(){
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
            
        </View>
    </View>
        );
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