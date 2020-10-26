import React, {useContext} from 'react';
import { Contextapi } from '../../hooks/authContext';
import {
    Container,
    Title,
    Context,
    Services,
    TypeServices,
    ButtonSignOut
}
from './styles-components';

export default function Home() {

    const { signOut } = useContext(Contextapi);


    async function handleLogout() {
        signOut;
      }
      
    return(
        <Container>
            <Context>
                <Title>
                    Home
                </Title>
                <ButtonSignOut title='sair' onPress={handleLogout}/>
                <Services>
                    <TypeServices>
                    </TypeServices>
                </Services>
            </Context>
        </Container>
    );
}