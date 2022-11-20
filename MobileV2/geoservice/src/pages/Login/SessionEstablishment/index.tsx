import React from 'react';

import PageCallToAction from '@components/PageCallToAction';

import { Container } from './styled';

export default function SessionEstablishment() {

    return (
        <Container>
            <PageCallToAction sessionEstablishment="establishment">Para começar, você precisa se cadastrar para poder cadastrar seus serviços.</PageCallToAction>
        </Container>
    )
}