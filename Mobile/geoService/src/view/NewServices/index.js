import React, { useEffect, useState, useContext } from "react";
import { Feather, FontAwesome, EvilIcons } from "@expo/vector-icons";
import { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Contextapi } from "../../hooks/authContext";
import { Linking } from "react-native";
import Modal from "react-native-modal";
import { useNavigation } from "@react-navigation/native";
import { Alert } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import * as ImagePicker from "expo-image-picker";

import api from "../../service/api";
import Headers from "../../components/Headers";
import InputModal from "../../components/InputModal";

import {
  ScrollView,
  Container,
  Content,
  ImageContainer,
  ScrollViewHorizontal,
  Image,
  // Add,
  DetailsContainer,
  Title,
  AddService,
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
  ScheduleTextRed,
  ScheduleItemBlue,
  ScheduleItemGreen,
  ScheduleItemRed,
  ContainerModal,
  ContainerButton,
  AddModalServices,
  CloseModal,
  TextTitle,
  // ContainerStyle,
  Style,
  DescriptionService,
  // ContainerInput,
  // InputService,
} from "./styled-components";

export default function NewServices() {
  const { token, establishment } = useContext(Contextapi);
  const route = useRoute();
  const navigation = useNavigation();

  const params = route.params;

  const [establishments, setEstablishments] = useState();
  const [loadServices, setLoadServices] = useState([]);
  const [newService, setNewService] = useState("");
  const [images, setImages] = useState([]);
  const [loadImages, setLoadImages] = useState([]);

  const [service, setService] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    api
      .get(`/services`, {
        headers: {
          Token: `Bearer ${token}`,
          Authorization: params.id,
        },
      })
      .then((response) => {
        setLoadServices(response.data);
      });
  }, [newService]);

  useEffect(() => {
    async function loadCompany() {
      const response = await api.get(`/company/${params.id}`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setEstablishments(response.data);
    }
    loadCompany();

    async function loadImages() {
      const response = await api.get(`/images/${params.id}`, {
        headers: {
          Token: `Bearer ${token}`,
        },
      });
      setLoadImages(response.data);
    }
    loadImages();
  }, [params.id]);

  if (!establishments) {
    return <Title>Carregando...</Title>;
  }

  async function handleAddImage() {
    const data = new FormData();

    data.append("company_id", params.id);

    images.forEach((image, index) => {
      data.append("images", {
        name: `image_${index}.jpg`,
        type: "image/jpg",
        uri: image,
      });
    });

    await api.post("/images", data, {
      headers: {
        Token: `Bearer ${token}`,
      },
    });
  }

  async function handleSelectImages() {
    const { status } = await ImagePicker.requestCameraRollPermissionsAsync();

    if (status !== "granted") {
      Alert.alert("Precisamos de acesso às suas fotos...");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
    });

    if (result.cancelled) {
      return;
    }
    const { uri: image } = result;

    setImages([...images, image]);
  }

  function handleOnPressGoogleMaps() {
    Linking.openURL(
      `https://www.google.com/maps/dir/?api=1&destination=${params?.latitude},${params?.longitude}`
    );
  }

  function toggleModalVisible() {
    setIsModalVisible(!isModalVisible);
  }

  async function handleAddServices() {
    const response = await api.post(
      "/services",
      { service: service, company_id: params.id },
      {
        headers: {
          Token: `Bearer ${token}`,
        },
      }
    );

    setNewService(response.data);
    Alert.alert("Serviço cadastrado com sucesso!");
    // navigation.navigate("NewServices");
  }

  return (
    <Container>
      <ScrollView>
        <Headers title="Detalhes do Estabelecimento" />
        {establishments.map((establishment) => {
          return (
            <Content key={establishment.id}>
              <ImageContainer>
                <ScrollViewHorizontal>
                  {loadImages.map((loadImage) => {
                    return (
                      <Image
                        key={loadImage.id}
                        source={{ uri: loadImage.path }}
                      />
                    );
                  })}
                  {/* <Add onPress={(handleAddImage, handleSelectImages)}>
                    <Feather name="plus" size={24} color="#000" />
                  </Add> */}
                </ScrollViewHorizontal>
              </ImageContainer>

              <DetailsContainer>
                <Title>{establishment.name}</Title>
                <Description>
                  Estabelecimento de teste, fazendo os ajustes ainda
                </Description>
                <MapContainer>
                  <Map
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                      latitude: Number(establishment.latitude),
                      longitude: Number(establishment.longitude),
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
                        latitude: Number(establishment.latitude),
                        longitude: Number(establishment.longitude),
                      }}
                    />
                  </Map>

                  <RoutesContainer onPress={handleOnPressGoogleMaps}>
                    <RoutesText> Ver Rota no Google Maps</RoutesText>
                  </RoutesContainer>
                </MapContainer>
              </DetailsContainer>

              <Divider />

              <DetailsContainer>
                <Title>Nossos Serviços</Title>
                <AddService>
                  <EvilIcons
                    name="plus"
                    size={36}
                    color="#1bd163"
                    onPress={toggleModalVisible}
                  />

                  {loadServices.length ? (
                    loadServices.map((item) => {
                      return (
                        <Style key={item.id}>
                          <DescriptionService>
                            {item.service}
                          </DescriptionService>
                        </Style>
                      );
                    })
                  ) : (
                    <EvilIcons
                      name="plus"
                      size={0}
                      color="#f9fafc"
                      onPress={toggleModalVisible}
                    />
                  )}
                </AddService>
                <Modal isVisible={isModalVisible}>
                  <ContainerModal>
                    <Description> Serviços</Description>
                    {/* <ContainerInput> */}
                    <InputModal
                      name="service"
                      placeholder="Digite o seus serviços"
                      icon="settings"
                      value={service}
                      onChangeText={setService}
                      autoCapitalize="words"
                      autoCorrect={false}
                    />
                    {/* </ContainerInput> */}

                    <ContainerButton>
                      <AddModalServices
                        title="Criar"
                        onPress={handleAddServices}
                      >
                        <TextTitle> Criar </TextTitle>
                      </AddModalServices>
                      <CloseModal title="Fechar" onPress={toggleModalVisible}>
                        <TextTitle> Fechar </TextTitle>
                      </CloseModal>
                    </ContainerButton>
                  </ContainerModal>
                </Modal>
                {/* <Description>Venha conferir os nossos serviços</Description> */}
              </DetailsContainer>

              <ScheduleContainer>
                <ScheduleItem>
                  <ScheduleItemBlue>
                    <Feather name="clock" size={40} color="#2AB5D1" />
                    <ScheduleTextBlue>
                      {establishment.opening_hours}
                    </ScheduleTextBlue>
                  </ScheduleItemBlue>
                </ScheduleItem>

                {establishment.open_on_weekends === "true" ? (
                  <ScheduleItem>
                    <ScheduleItemGreen>
                      <Feather name="info" size={40} color="#39CC83" />
                      <ScheduleTextGreen>
                        Atendemos fim de semana
                      </ScheduleTextGreen>
                    </ScheduleItemGreen>
                  </ScheduleItem>
                ) : (
                  <ScheduleItem>
                    <ScheduleItemRed>
                      <Feather name="info" size={40} color="#FF669D" />
                      <ScheduleTextRed>
                        Não Atendemos fim de semana
                      </ScheduleTextRed>
                    </ScheduleItemRed>
                  </ScheduleItem>
                )}
              </ScheduleContainer>
            </Content>
          );
        })}
      </ScrollView>
    </Container>
  );
}
