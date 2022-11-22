import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RootStackParamList from './RootStackParamList/index';

import Home from '@pages/Home/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();


const TabRoute = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
        </Tab.Navigator>
    )
}

export default function UserRoute() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={TabRoute} options={{ headerShown: false}}/>
        </RootStack.Navigator>
    )
}
