import React from 'react';
import { Props } from '../../utils/interfaces/interfaceProps';

import {
    Container,
    Btn,
    Text
} from './styled';

    export default function Button({ children, ...rest}: Props) {
    return (
        <Container>
            <Btn>
                <Text> {children} </Text>
            </Btn>
        </Container>
    )
}