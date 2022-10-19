import styled from 'styled-components/native';


export const Container = styled.View``;

export const Logo = styled.View``;

export const Img = styled.Image.attrs({
        resizeMode: "contain"
    })`
        width: 100%;
`;

export const ContainerButton = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`;

export const ButtonUser = styled.TouchableOpacity`
  width: 160px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
  background: #fff;
`;
export const ButtonEstablishment = styled.TouchableOpacity`
  width: 160px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 10px;
  margin: 10px;
  background: #000;
`;

export const Icon = styled.View`
    padding: 20px 25px;
`;

export const ContainerText = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const TextUser = styled.Text`
    font-size: 14px;
    font-family: 'Poppins_700Bold';
    color: #000;
`;

export const TextEstablishment = styled.Text`
    font-size: 14px;
    font-family: 'Poppins_700Bold';
    color: #fff;
`;

