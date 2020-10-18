import React, { useState } from 'react';
import { Header, Text, View } from './styled-components';
import { BorderlessButton } from 'react-native-gesture-handler';
import { FontAwesome5, Feather } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Headers({ title, ...rest}) {
    const [ showCancel, SetShowCancel ] = useState(false);
    
    const navigation = useNavigation();

    function handleGoBackToHomePage() {
        navigation.navigate('Home')
    }

    return (
        <Header>
            <BorderlessButton onPress={navigation.goBack}>
                <FontAwesome5 name='arrow-left' size={24} color='#000'/>
            </BorderlessButton>

            <Text> {title} </Text>

            { showCancel ? (
                <BorderlessButton onPress={handleGoBackToHomePage}>
                    <Feather name='x' size={24} color='#000'/>
                </BorderlessButton>
            ) : (
            <View/>
            ) }
        </Header>
    )
}