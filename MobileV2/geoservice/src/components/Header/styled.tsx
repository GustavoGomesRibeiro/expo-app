import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
        padding: 50px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 250px;
`;

export const HeaderIcon = styled(Feather)``;

export const Text = styled.Text`

        color: #000;
        font-size: 22px;
        font-family: 'Poppins_700Bold';
`;

