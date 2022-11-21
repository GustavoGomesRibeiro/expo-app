import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
`;

export const ContentIcon = styled.View`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 50px;
`;

export const Icon = styled.TouchableOpacity`
    margin-top: 100px;
`;

export const ContentDescription = styled.View`
    padding: 50px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: ${ props => props.theme.fonts_archivo.primaryColor};
    font-family: ${props => props.theme.fonts_archivo.strong};
`;

export const Description = styled.Text`
    margin-top: 20px;
    font-size: 16px;
    color: ${ props => props.theme.fonts_archivo.primaryColor};
    font-family: ${props => props.theme.fonts_archivo.regular};
    line-height: 20px;

`;


export const ContentButtons = styled.View`
    display: flex;  
    justify-content: center;
    align-items: center;
`;




