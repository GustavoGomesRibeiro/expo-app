import React from 'react';
import { GeneralPropsHeader } from '@utils/interfaces/interfaceGeneralProps';

import * as Style from './styled';

export default function Header({icon, title, onPress, ...rest}: GeneralPropsHeader) {
    return (
        <Style.Container> 
            <Style.HeaderIcon onPress={onPress} name={icon} size={30} color="black"/>
            <Style.Text>{title}</Style.Text>
            <Style.HeaderIcon/>
        </Style.Container>
    )
}