import React, { useEffect, useState } from 'react';
import Headers from '../../components/Headers';
import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Map,
    Footer,
    NextButton,
    Text
}
from './styles-components';

export default function Add() {
    // const [latitude, setLatitude] = useState('');
    // const [longitude, setLongitude] = useState('');

    // useEffect(() => { effect 
    //     return () => {
            
    //     }
    // }, [])
    
    const navigation = useNavigation();

    function handleNextStep(){
        navigation.navigate('NewEstablishment');
    }

    return(
        <Container>
            <Headers title='Estabelecimentos'/>
            <Map
              initialRegion={{
                    latitude: -27.2092052,
                    longitude: -49.6401092,
                    latitudeDelta: 0.008,
                    longitudeDelta: 0.008,
                }}
            >
                <Marker
                    coordinate={{ latitude: -27.2092052, longitude: -49.6401092 }}
                />
            </Map>

            <Footer>
                <NextButton onPress={handleNextStep}>
                    <Text> Próximo </Text>
                </NextButton>
            </Footer>

        </Container>
    );
}