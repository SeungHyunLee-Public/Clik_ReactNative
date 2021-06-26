import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet
} from 'react-native';
export default class SomethingScreen extends Component{

    render(){
        return (
            <View style={styles.container}>
                <Text>설정 텍스트입니다.</Text>
                <Button
                    title='돌아가기'
                    onPress={() => this.props.navigation.goBack()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})