import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList/index';

import Home from '../pages/Home/index';
import Main from '../pages/Login/Main/index';
import SessionUser from '../pages/Login/SessionUser/index';
import SessionEstablishment from '../pages/Login/SessionEstablishment/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function Route() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Main" component={Main} options={{ headerShown: false}}/>
            <RootStack.Screen name="Home" component={Home} options={{ headerShown: false}}/>
            <RootStack.Screen name="SessionUser" component={SessionUser} options={{ headerShown: false}}/>
            <RootStack.Screen name="SessionEstablishment" component={SessionEstablishment} options={{ headerShown: false}}/>
        </RootStack.Navigator>
    )
}
