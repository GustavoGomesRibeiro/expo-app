import React from 'react';
import {
    Container,
    Title,
    Context,
    Services,
    TypeServices,
}
from './styles-components';

export default function Home() {
    return(
        <Container>
            <Context>
                <Title>
                    Home
                </Title>
                
                <Services>
                    <TypeServices>
                    </TypeServices>
                </Services>
            </Context>
        </Container>
    );
}