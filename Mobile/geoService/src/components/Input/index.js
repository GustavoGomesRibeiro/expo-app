import React from 'react';
import { Container, TextInput, Icon} from './styled-components';

// const [isFocus, setIsFocus] = useState(false);

// const handleIsFocus = useCallback( () => {
//     setIsFocus(true);
// },[]);

const Input = ({ name, icon, ...rest}) => (
    <Container>
        <Icon name={icon} size={20} color="#fff"/>
        <TextInput placeholderTextColor='#fff'{...rest}/>
    </Container>
);

export default Input