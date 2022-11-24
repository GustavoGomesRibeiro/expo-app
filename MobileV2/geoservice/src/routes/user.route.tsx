import React from 'react';
import { Feather } from '@expo/vector-icons'; 
import { Text } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import RootStackParamList from './RootStackParamList/index';

import Home from '@pages/Home/index';
import Search from '@pages/Search/index';
import Favorite from '@pages/Favorite/index';
import Settings from '@pages/Settings/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();


const TabRoute = () => {

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle:{
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    bottom: 50,
                    borderRadius: 25,
                    elevation: 0,
                    shadowOpacity: 0,
                },
                tabBarIconStyle: {
                    position: 'absolute',
                    height: 50,
                    top: 10,
                    bottom: 0
                },
                tabBarLabelStyle: {
                    position: 'absolute',
                    height: 10,
                    top: 50,
                    bottom: 0
                },
                tabBarLabel:({focused}) => {
                    if(route.name === 'Main'){
                        return focused ? <Text style={{position: 'absolute', top: 45, bottom: 0, height: 50}}>•</Text> : null;
                    }
                    if(route.name === 'Search'){
                        return focused ? <Text style={{position: 'absolute', top: 45, bottom: 0, height: 50}}>•</Text> : null;
                    }
                    if(route.name === 'Favorite'){
                        return focused ? <Text style={{position: 'absolute', top: 45, bottom: 0, height: 50}}>•</Text> : null;
                    }
                    if(route.name === 'Settings'){
                        return focused ? <Text style={{position: 'absolute', top: 45, bottom: 0, height: 50}}>•</Text> : null;
                    }
                },
                headerShown: false,
                tabBarActiveTintColor: '#1a1822',
                tabBarInactiveTintColor: '#e5e5e5'
            })}
        >
            <Tab.Screen 
                name="Main"
                component={Home}
                options={{
                    tabBarIcon: ({ focused, color, size }) => {
                        return <Feather name="home" size={size} color={color} />
                    }
                }}
            />
            <Tab.Screen 
                name="Search"
                component={Search}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Feather name="search" size={size} color={color}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Favorite"
                component={Favorite}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Feather name="heart" size={size} color={color}/>
                    }
                }}
            />
            <Tab.Screen 
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Feather name="settings" size={size} color={color}/>
                    }
                }}
            />
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
