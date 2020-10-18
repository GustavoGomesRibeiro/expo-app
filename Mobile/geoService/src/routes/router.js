import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome5, FontAwesome } from 'react-native-vector-icons';

// import PlusButton from '../components/PlusButton';
// routes
import Home from '../view/Home';
import Search from '../view/Search';
import Add from '../view/Add';
import Favorites from '../view/Favorites';
import Profile from '../view/Profile';
import Details from '../view/Details';

import Signin from '../view/InitialScreen/Signin';
import SessionUser from '../view/InitialScreen/SessionUser';
import SessionEstablishment from '../view/InitialScreen/SessionEstablishment';
import RegisterUser from '../view/InitialScreen/RegisterUser';
import RegisterEstablishment from '../view/InitialScreen/RegisterEstablishment';
import ForgotPassword from '../view/InitialScreen/ForgotPassword';
import Login from '../view/InitialScreen/Login';
import LoginEstablishment from '../view/InitialScreen/LoginEstablishment';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Menu = () => (
    <Tab.Navigator
        tabBarOptions={{
            style: {
                elevation: 0, 
                shadowOpacity: 0,
                height: 64,
                backgroundColor: '#131418',
                borderTopColor: 'rgba(255,255,255,0.2)'
            },
            tabStyle: {
                // flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            },
            iconStyle: {
                flex: 0,
                width: 20,
                height: 20
            },
            labelStyle: {
                fontFamily: 'Archivo_700Bold',
                fontSize: 13,
                alignItems: 'center',
                // marginLeft: 16,
            },
            // inactiveBackgroundColor: '#fafafc',
            // activeBackgroundColor: '#ebebf5',
            inactiveTintColor: '#92929c',
            activeTintColor: '#fff',
        }}
    >
        <Tab.Screen name='Home' component={Home} options={{
            tabBarLabel: 'Tela Inicial',
            tabBarIcon: ({ color, size}) => {
                return (
                    <FontAwesome5 name='home' size={size} color={color}/>
                )
            }
            }}
        />
        <Tab.Screen name='Search' component={Search} options={{
            tabBarLabel: 'Buscar',
            tabBarIcon: ({ color, size}) => {
                return (
                    <FontAwesome5 name='search' size={size} color={color}/>
                )
            },
            }}
        />
        <Tab.Screen name='Adicionar' component={Add} options={{
            tabBarLabel: 'Adicionar',
            tabBarIcon: ({ color, size}) => {
                return (
                    <FontAwesome5 name='plus' size={size} color={color}/>
                    // <PlusButton/>
                )
            }
            }}
        />
        <Tab.Screen name='Favorites' component={Favorites} options={{
            tabBarLabel: 'Favoritos',
            tabBarIcon: ({ color, size}) => {
                return (
                    <FontAwesome name='heart' size={size} color={color}/>
                )
            }
            }}
        />
        <Tab.Screen name='Profile' component={Profile} options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size}) => {
                return (
                    <FontAwesome5 name='user-alt' size={size} color={color}/>
                )
            }
            }}
        />
    </Tab.Navigator>

);

export default function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Signin' component={Signin} options={{headerShown: false}}/>
            <Stack.Screen name='SessionUser' component={SessionUser} options={{headerShown: false}}/>
            <Stack.Screen name='SessionEstablishment' component={SessionEstablishment} options={{headerShown: false}}/>
            <Stack.Screen name='RegisterUser' component={RegisterUser} options={{headerShown: false}}/>
            <Stack.Screen name='RegisterEstablishment' component={RegisterEstablishment} options={{headerShown: false}}/>
            <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{headerShown: false}}/>
            <Stack.Screen name='Login' component={Login} options={{headerShown: false}}/>
            <Stack.Screen name='LoginEstablishment' component={LoginEstablishment} options={{headerShown: false}}/>
            <Stack.Screen name='MainPage' component={Menu} options={{headerShown: false}}/>
            <Stack.Screen name='Details' component={Details} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}