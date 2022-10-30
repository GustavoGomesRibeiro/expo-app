import React from 'react';
import { GeneralProps } from '../../utils/interfaces/interfaceGeneralProps';

import {
    Container,
    TextInput,
    Icon
} from './styled';

    export default function Input({ placeholder, placeholderTextColor, icon, ...rest}: GeneralProps) {
    return (
        <Container {...rest}>
            <Icon  name={icon} size={20} color="#fff"/>
            <TextInput 
                placeholder={placeholder} 
                placeholderTextColor={placeholderTextColor}
            />
        </Container>
    )
}