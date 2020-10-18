import React, { useState, useEffect } from 'react';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons'

import {
    Container,
    Map,
    CalloutContainer,
    CalloutTitle,
    Footer,
    FooterTextInput,
    FooterButton

}
from './styles-components';
import { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps';

export default function Search({ navigation }) {

    const [currentRegion, setCurrentRegion] = useState();

    useEffect(() => {
        async function loadInitialPosition() {
            const { granted } = await requestPermissionsAsync();
            if( granted ) {
                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true,
                });
                const { latitude, longitude } = coords;
                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04,
                });
            }
        }
        loadInitialPosition();
    }, []);


    function handleRegionChanged(region) {
        console.log(region, 'alteracao de lugar do mapa');
        setCurrentRegion(region);
    }

    return(
        <Container>
            <Map 
            provider={PROVIDER_GOOGLE}
            onRegionChangeComplete={handleRegionChanged} 
            initialRegion={currentRegion}>
                <Marker
                calloutAnchor={{
                    x: 4.2,
                    y: 0.8
                }}
                coordinate={{
                    latitude:-23.543885,
                    longitude: -46.7735394
                }}
                >
                    <Callout tooltip={true} onPress={() => navigation.navigate('Details')}>
                        <CalloutContainer>
                            <CalloutTitle> Estabelecimendo de teste </CalloutTitle>
                        </CalloutContainer>
                    </Callout>
                </Marker>
            </Map>

            <Footer>
                <FooterTextInput 
                        placeholder='Buscar por estabelecimentos'
                        placeholderTextColor='#999'
                        autoCapitalize='words'
                        autoCorrect={false}
                />
                <FooterButton onPress={() => {}}>
                    <MaterialIcons name='my-location' size={20} color='#FFF' />
                </FooterButton>
            </Footer>
        </Container>
    );
}