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

    const { signOut, user, establishment } = useContext(Contextapi);

    console.log(user, establishment, 'meu user e meu estabelecimento');

      
    return(
        <Container>
            <Context>
                <Title>
                    Home {user.username}
                </Title>
                <ButtonSignOut title='sair' onPress={signOut}/>
                <Services>
                    <TypeServices>
                    </TypeServices>
                </Services>
            </Context>
        </Container>
    );
}