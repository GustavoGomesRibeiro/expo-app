import React, { useContext } from 'react';

import { Button } from 'react-native';
import { ContextApi } from '../../hooks/authContext';
import { Container, Text} from './styled';

export default function Home() {

    const {  signOut, user } = useContext(ContextApi)

    console.log(user, 'a')
    return (
        <Container>
            <Text> Home </Text>
            <Button title='SignOut' onPress={signOut}/>
        </Container>   
    )
}