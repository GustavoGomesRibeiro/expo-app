import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import * as Location from 'expo-location'

import { MaterialIcons } from "@expo/vector-icons";

import * as S from './styled';

export default function Search(){
  const [ service, setService ] = useState<string>('');
  const [ currentRegion, setCurrentRegion ] = useState(null);

  useEffect(() => {
    async function loadInitialPostion() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      
      if(status !== 'granted') {
        const { coords } = await Location.getCurrentPositionAsync({});

        const { latitude, longitude } = coords;
        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        })
      }
    }
    loadInitialPostion();
  }, [])
  
  function handleRegionChanged(region: any) {
    setCurrentRegion(region);
  }

  return (
    <S.Container>
      <S.Map
        provider={PROVIDER_GOOGLE}
        onRegionChangeComplete={handleRegionChanged}
        initialRegion={currentRegion}
        showsUserLocation
        loadingEnabled
      ></S.Map>

      <KeyboardAvoidingView>
        <S.Header>
          <S.SearchTextInput
            placeholder="Buscar serviços"
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
            value={service}
            onChange={setService}
          />
          <S.Button onPress={() => {}}>
            <MaterialIcons name="my-location" size={32} color="#FFF" />
          </S.Button>          
        </S.Header>
      </KeyboardAvoidingView>      
    </S.Container>
  );
}