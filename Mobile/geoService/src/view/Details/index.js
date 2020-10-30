import React, { useEffect, useState, useContext } from 'react';
import Headers from '../../components/Headers';
import { Marker } from 'react-native-maps';
import { Feather, FontAwesome } from 'react-native-vector-icons';
import { useRoute } from '@react-navigation/native'
import api from '../../service/api';
import { Contextapi } from '../../hooks/authContext';

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
    const { token } = useContext(Contextapi);
    const route = useRoute();
    const params = route.params;

    const [establishment, setEstablishment] = useState('');

    useEffect(() => {
        api.get(`/newEstablishments/${params.id}`, {
            headers: {
                Token: `Bearer ${token}`,
                // Authorization: user.id
            }
        }).then(response => {
            setEstablishment(response.data);
        });
    }, [params.id]);

    if (!establishment) {
        return (
            <Title>
                Carregando...
            </Title>
        );
    }

    console.log(route.params);

    return (
        <Container>
            <ScrollView>
                <Headers title='Detalhes do Estabelecimento' />
                {establishment.map((items) => {
                    return (
                        <>
                            <ImageContainer key={items.id}>
                                {/* <ScrollViewHorizontal> */}
                                <Image source={{ uri: 'https://fmnova.com.br/images/noticias/safe_image.jpg' }} />
                                {/* </ScrollViewHorizontal> */}
                            </ImageContainer>

                            <DetailsContainer >
                                <Title>{items.name}</Title>
                                <Description>Estabelecimento de teste, fazendo os ajustes ainda</Description>
                                <MapContainer>
                                    <Map
                                        initialRegion={{
                                            latitude: -23.5442453,
                                            longitude: -46.7733957,
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
                                                latitude: items.latitude,
                                                longitude: items.longitude,
                                            }}
                                        />
                                    </Map>

                                    <RoutesContainer>
                                        <RoutesText> Ver Rota no Google Maps</RoutesText>
                                    </RoutesContainer>
                                </MapContainer>
                            </DetailsContainer>

                            <Divider />

                            <DetailsContainer>
                                <Title>Instruções de testes</Title>
                                <Description>Venha conferir os nossos serviços</Description>
                            </DetailsContainer>

                            <ScheduleContainer>
                                <ScheduleItem>
                                    <ScheduleItemBlue>
                                        <Feather name="clock" size={40} color="#2AB5D1" />
                                        <ScheduleTextBlue> {items.opening_hours} </ScheduleTextBlue>
                                    </ScheduleItemBlue>
                                </ScheduleItem>

                                <ScheduleItem>
                                    <ScheduleItemGreen>
                                        <Feather name="info" size={40} color="#39CC83" />
                                        <ScheduleTextGreen> Atendemos fim de semana </ScheduleTextGreen>
                                    </ScheduleItemGreen>
                                </ScheduleItem>
                            </ScheduleContainer>

                        </>

                    );
                })}

                <WhatsApp onPress={() => { }}>
                    <FontAwesome name="whatsapp" size={24} color="#FFF" />
                    <Contact> Entrar em contato </Contact>
                </WhatsApp>
            </ScrollView>
        </Container>
    );
}