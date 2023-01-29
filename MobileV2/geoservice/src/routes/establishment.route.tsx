import React, { useContext } from 'react';
import { Feather } from '@expo/vector-icons'; 
import { ContextApi } from '@hooks/authContext';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFPercentage } from 'react-native-responsive-fontsize'

import RootStackParamList from './RootStackParamList/index';

import { TabNavigation } from '@components/TabNavigation';
import Home from '@pages/Home/index';
import AddCompany from '@pages/Company/AddCompany/index';
import ListEstablishments from '@pages/Company/ListEstablishments/index';
import MoreDetails from '@pages/Company/MoreDetails/index';
import RegisterServices from '@pages/Company/RegisterServices/index';
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
                    top: RFPercentage(0.4),
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
                    if(route.name === 'AddCompany'){
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                    if(route.name === 'ListEstablishments'){
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                    if(route.name === 'Settings'){
                        return focused ? <TabNavigation>•</TabNavigation> : null;
                    }
                },
                headerShown: false,
                tabBarActiveTintColor: isDarkMode ? '#fff' : '#1a1822',
                tabBarInactiveTintColor: isDarkMode ? '#b1b1b1' : '#1a1822'
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
                name="AddCompany"
                component={AddCompany}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Feather name="plus" size={size} color={color}/>
                    }
                }}
            />
            <Tab.Screen 
                name="ListEstablishments"
                component={ListEstablishments}
                options={{
                    tabBarIcon: ({focused, color, size}) => {
                        return <Feather name="list" size={size} color={color}/>
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

export default function EstablishmentRoute() {
    return (
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={TabRoute} options={{ headerShown: false}}/>
            <RootStack.Screen name="RegisterServices" component={RegisterServices} options={{ headerShown: false}}/>
            <RootStack.Screen name="MoreDetails" component={MoreDetails} options={{ headerShown: false}}/>
        </RootStack.Navigator>
    )
}
