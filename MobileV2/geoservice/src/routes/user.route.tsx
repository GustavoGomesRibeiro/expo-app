import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList/index';

import Home from '@pages/Home/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function UserRoute() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
        </RootStack.Navigator>
    )
}
