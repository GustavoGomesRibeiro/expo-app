import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList/index';

import Home from '../pages/Home/index';
import Main from '../pages/Login/Main/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Route() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Main" component={Main}/>
            <RootStack.Screen name="Home" component={Home}/>
        </RootStack.Navigator>
    )
}
