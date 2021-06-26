import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Text } from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";
import SettingScreen from "./SettingScreen";
import SomethingScreen from "./SomethingScreen";
import Text1Screen from "./TextScreen/Text1/Text1Screen";
import Text2Screen from "./TextScreen/Text2/Text2Screen";
import Text3Screen from "./TextScreen/Text3/Text3Screen";
import Text1add from "./TextScreen/Text1/Text1add";
import Text2add from "./TextScreen/Text2/Text2add";
import Text2header from "./TextScreen/Text2/Text2header";
import Text1header from "./TextScreen/Text1/Text1header";
const HomeStack = createStackNavigator(
  {
    HomeScreen,
    Text1add,
    Text1Screen,
    Text3Screen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'home',
    }),
  }
);

const SettingStack = createStackNavigator(
  {
    SettingScreen,
    SomethingScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'setting',
    }),
  }
);

const TextStack = createStackNavigator(
  {
    Text1Screen,
    Text1add,
    Text1header,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      title: 'text1',
    }),
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    home: HomeStack,
    setting: SettingStack,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        if (routeName === "home")
        {
          icon = "meho";
        }
        else if (routeName === "setting")
        {
          icon = "setting";
        }
        return (
          <Text style={{ color: (focused && "#46c3ad") || "#888" }}>
            <Icon name = {icon} size={30}/>
          </Text>
        );
      },
    }),

    lazy: false,
    tabBarOptions: {
    activeTintColor: "#46c3ad",
    inactiveTintColor: "#888",

    },
  }
);

const AppStack = createStackNavigator({
  LoginScreen: LoginScreen,
  TabNavigator:
  {
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => (
    {
      headerShown: false,
    }),
  },
});

export default createAppContainer(AppStack);