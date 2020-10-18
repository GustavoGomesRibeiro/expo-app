import React from 'react';
import {
    Container,
    Title,
    Context,
    Services,
    TypeServices,
}
from './styles-components';

export default function Favorites() {
    return(
        <Container>
            <Context>
                <Title>
                    Favoritos
                </Title>
                
                <Services>
                    <TypeServices>
                    </TypeServices>
                </Services>
            </Context>
        </Container>
    );
}