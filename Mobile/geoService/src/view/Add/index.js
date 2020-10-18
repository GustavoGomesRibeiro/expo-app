import React from 'react';
import Headers from '../../components/Headers';

import {
    Container,
    Title,
    Context,
    Services,
    TypeServices,
}
from './styles-components';

export default function Add() {
    return(
        <Container>
        <Headers title='Estabelecimentos'/>
            <Context>
                <Title>
                    Adicionando serviços
                </Title>
                
                <Services>
                    <TypeServices>
                    </TypeServices>
                </Services>
            </Context>
        </Container>
    );
}