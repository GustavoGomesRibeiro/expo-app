import React from 'react';
import Headers from '../../components/Headers';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from 'react-native-vector-icons';

import {
    ScrollView,
    Container,
    ImageContainer,
    // ScrollViewHorizontal,
    Image,
    DetailsContainer,
    Title,
    Description,
    MapContainer,
    Map,
    RoutesContainer,
    RoutesText,
    Divider,
    ScheduleContainer,
    ScheduleItem,
    ScheduleTextBlue,
    ScheduleTextGreen,
    ScheduleItemBlue,
    ScheduleItemGreen,
    WhatsApp,
    Contact,
 } 
 from './styled-components';

export default function Details() {
    return(
    <Container>
        <ScrollView>
                <Headers title='Detalhes do Estabelecimento'/>

                <ImageContainer>
                        {/* <ScrollViewHorizontal> */}
                            <Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }}/>
                        {/* </ScrollViewHorizontal> */}
                </ImageContainer>

                <DetailsContainer>
                    <Title>Estabelecimento do seu Zé</Title>
                    <Description>Estabelecimento de teste, fazendo os ajustes ainda</Description>
                    <MapContainer>
                        <Map
                        initialRegion={{
                            latitude: -27.2092052,
                            longitude: -49.6401092,
                            latitudeDelta: 0.008,
                            longitudeDelta: 0.008,
                        }} 
                        zoomEnabled={false}
                        pitchEnabled={false}
                        scrollEnabled={false}
                        rotateEnabled={false}
                        >
                            <Marker 
                            coordinate={{ 
                                latitude: -27.2092052,
                                longitude: -49.6401092
                            }}
                            />
                        </Map>

                        <RoutesContainer>
                            <RoutesText> Ver Rota no Google Maps</RoutesText>
                        </RoutesContainer>
                    </MapContainer>
                </DetailsContainer>

                <Divider/>

                <DetailsContainer>
                    <Title>Instruções de testes</Title>
                    <Description>Venha conferir os nossos serviços</Description>
                </DetailsContainer>

                <ScheduleContainer>
                    <ScheduleItem>
                        <ScheduleItemBlue>
                            <Feather name="clock" size={40} color="#2AB5D1"/>
                            <ScheduleTextBlue> Segunda à Sexta 8h às 18h </ScheduleTextBlue>
                        </ScheduleItemBlue>
                    </ScheduleItem>

                    <ScheduleItem>
                        <ScheduleItemGreen>
                            <Feather name="info" size={40} color="#39CC83"/>
                            <ScheduleTextGreen> Atendemos fim de semana </ScheduleTextGreen>
                        </ScheduleItemGreen>
                    </ScheduleItem>
                </ScheduleContainer>

                <WhatsApp onPress={() => {}}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF"/>
                    <Contact> Entrar em contato </Contact>
                </WhatsApp>
        </ScrollView>
    </Container>
    );
}