import React from 'react';
import { GeneralProps } from '../../utils/interfaces/interfaceGeneralProps';

import { Container, HeaderIcon } from './styled'
export default function Header({icon, onPress, ...rest}: GeneralProps) {
    return (
        <Container> 
            <HeaderIcon onPress={onPress} name={icon} size={30} color="black"/>
        </Container>
    )
}