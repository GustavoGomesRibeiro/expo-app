import React from 'react';
import { Props } from '../../utils/interfaces/interfaceProps';

import {
    Container,
    Btn,
    Text
} from './styled';

    export default function Button({ children, onPress, ...rest}: Props) {
    return (
        <Container {...rest}>
            <Btn onPress={onPress}>
                <Text> {children} </Text>
            </Btn>
        </Container>
    )
}