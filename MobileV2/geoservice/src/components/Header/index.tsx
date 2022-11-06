import React from 'react';
import { GeneralPropsHeader } from '../../utils/interfaces/interfaceGeneralProps';

import { Container, HeaderIcon, Text } from './styled'
export default function Header({icon, title, onPress, ...rest}: GeneralPropsHeader) {
    return (
        <Container> 
            <HeaderIcon onPress={onPress} name={icon} size={30} color="black"/>
            <Text>{title}</Text>
        </Container>
    )
}