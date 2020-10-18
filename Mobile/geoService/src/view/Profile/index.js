import React from 'react';
import {
    Container,
    Title,
    Context,
    Services,
    TypeServices,
}
from './styles-components';

export default function Profile() {
    return(
        <Container>
            <Context>
                <Title>
                    Profile
                </Title>
                
                <Services>
                    <TypeServices>
                    </TypeServices>
                </Services>
            </Context>
        </Container>
    );
}