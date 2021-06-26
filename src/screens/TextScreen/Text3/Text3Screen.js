// import React, {Component} from 'react';
// import {
//     View,
//     Text,
//     Button,
//     StyleSheet
// } from 'react-native';


// export default class Text3Screen extends Component {
//     render() {
//       return (
//         <View>
//           <Text>Home Screen</Text>
//           <Button
//             title="Add an Item"
//             onPress={() => this.props.navigation.navigate('AddItem')}
//           />
//           <Button
//             title="List of Items"
//             color="green"
//             onPress={() => this.props.navigation.navigate('List')}
//           />
//         </View>
//       );
//     }
//   }

import React, { Component } from 'react'; import { Text, View} from 'react-native';
export default class HomeScreen extends Component { render() {
return (
<View>
<Text> Home Screen</Text>
</View>
)
}
}