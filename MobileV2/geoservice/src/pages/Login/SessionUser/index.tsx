import React from 'react';

import PageCallToAction from '@components/PageCallToAction';

import { Container } from './styled';

export default function SessionUser() {

    return (
        <Container>
            <PageCallToAction sessionUser="user">Para começar, você precisa se cadastrar para poder buscar serviços pela região.</PageCallToAction>
        </Container>
    )
}