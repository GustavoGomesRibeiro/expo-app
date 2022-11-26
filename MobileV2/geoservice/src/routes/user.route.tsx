import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { ContextApi } from '@hooks/authContext';

import { TabNavigation} from '@components/TabNavigation';

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
    const { theme } = useContext(ContextApi);

    const isDarkMode = theme === 'dark';

    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarStyle:{
                    position: 'absolute',
                    left: 20,
                    right: 20,
                    bottom: 50,
                    borderRadius: 25,
                    borderTopColor: isDarkMode ? '#1C1C1E' : '#fff',
                    elevation: 0,
                    shadowOpacity: 0,
                    backgroundColor: isDarkMode ? '#1C1C1E' : '#fff'
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
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                    if(route.name === 'Search'){
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                    if(route.name === 'Favorite'){
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                    if(route.name === 'Settings'){
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                },
                headerShown: false,
                tabBarActiveTintColor: isDarkMode ? '#fff' : '#1a1822',
                tabBarInactiveTintColor: isDarkMode ? '#e5e5e5' : '#1a1822'
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
