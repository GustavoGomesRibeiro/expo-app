import React from 'react';
import { Container, ButtonText } from './styled-components';


const Button = ({ children, ...rest }) => (
    <Container { ...rest }>
        <ButtonText>
            {children}
        </ButtonText>
    </Container>
);

export default Button