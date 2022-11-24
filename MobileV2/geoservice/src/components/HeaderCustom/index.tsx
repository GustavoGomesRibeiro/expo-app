import React from 'react';

import { Container, Title } from './styled';

export default function HeaderCustom({ children}: any){
  return (
    <Container>
        <Title>{children}</Title>
    </Container>
  );
}