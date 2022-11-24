import React, { useContext } from 'react';

import { Button } from 'react-native';
import { ContextApi } from '../../hooks/authContext';
import { Container, Text} from './styled';

export default function Home() {

    return (
        <Container>
            <Text> Home </Text>
            <Button title='SignOut'/>
        </Container>   
    )
}