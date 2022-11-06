import React from 'react';
import { GeneralPropsButton } from '../../utils/interfaces/interfaceGeneralProps';

import {
    Container,
    Btn,
    Text
} from './styled';

    export default function Button({ children, onPress, ...rest}: GeneralPropsButton) {
    return (
        <Container {...rest}>
            <Btn onPress={onPress}>
                <Text> {children} </Text>
            </Btn>
        </Container>
    )
}