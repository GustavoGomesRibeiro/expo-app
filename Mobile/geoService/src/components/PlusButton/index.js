import React from 'react';
import { Button } from './styled-components';
import { FontAwesome5 } from 'react-native-vector-icons';


export default function PlusButton() {
    return (
        <Button>
            <FontAwesome5 name='plus' size={20}/>
            {/* <Label>
                Adicionar
            </Label> */}
        </Button>
    );
}