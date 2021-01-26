import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import WelcomeScreen from '../screens/WelcomeScreen'
import Home from '../screens/Home'
import Exchange from '/./screens/Exchange';

export default function App() {
  return (
    <AppContainer/>
  );
}

const TabNavigator = createBottomTabNavigator({
Home: {screen: Home},
EnterAnItem: {screen: Exchange},
},
{
defaultNavigationOptions: ({navigation})=>({
tabBarIcon: ()=>{
const routeName = navigation.state.routeName;
if(routeName === "Home"){
return(
<Image
source={require("./assets/home.png")}
style={{width:20, height:20}}
/>
)
}
else if(routeName === "Exchange"){
return(
<Image
source={require("./assets/ads-icon.png")}
style={{width:20, height:20,}}
/>)

}
}
})
}
);

const switchNavigator = createSwitchNavigator({
WelcomeScreen:{screen: WelcomeScreen},
BottomTab:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);
