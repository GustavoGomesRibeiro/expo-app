import * as React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RootStackParamList from './RootStackParamList/index';

import Main from '@pages/Login/Main/index';
import SessionUser from '@pages/Login/SessionUser/index';
import SessionEstablishment from '@pages/Login/SessionEstablishment/index';
import Signin from '@pages/Login/Signin/index';
import Register from '@pages/Login/Register/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function AuthRoute() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Main" component={Main} options={{ headerShown: false}}/>
            <RootStack.Screen name="SessionUser" component={SessionUser} options={{ headerShown: false}}/>
            <RootStack.Screen name="SessionEstablishment" component={SessionEstablishment} options={{ headerShown: false}}/>
            <RootStack.Screen name="Signin" component={Signin} options={{ headerShown: false}}/>
            <RootStack.Screen name="Register" component={Register} options={{ headerShown: false}}/>
        </RootStack.Navigator>
    )
}
