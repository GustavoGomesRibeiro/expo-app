import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native'
import { ReceiveScreen } from '@utils/NavigationRoutes';

import { Marker } from 'react-native-maps';


import * as S from './styled';

import { IPosition } from '@utils/interfaces/interfacePosition';
import HeaderCustom from '@components/HeaderCustom';

export default function AddCompany(){
  const [position, SetPostion] = useState<IPosition>({longitude: 0, latitude: 0});

  const navigation = useNavigation<ReceiveScreen>();
  
  function handleSelectPosition(event: { nativeEvent: { coordinate: React.SetStateAction<{ longitude: number; latitude: number; }>; }; }) {
    SetPostion(event.nativeEvent.coordinate)
  }

  return (
    <S.Container>
      <HeaderCustom>Cadastrar</HeaderCustom>
      <S.Map
        initialRegion={{
          latitude: -23.5442453,
          longitude: -46.7733957,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
        onPress={handleSelectPosition}        
      >
      {position.latitude !== 0 && (
        <Marker
          coordinate={{
            latitude: position.latitude,
            longitude: position.longitude
          }}
        />
      )}
      </S.Map>

      <S.ButtonContainer>
        {position.latitude !== 0 && (
            <S.NextButton onPress={() => navigation.navigate('RegisterServices', { position: position })}>
              <S.TextButton> Próximo </S.TextButton>
            </S.NextButton>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}