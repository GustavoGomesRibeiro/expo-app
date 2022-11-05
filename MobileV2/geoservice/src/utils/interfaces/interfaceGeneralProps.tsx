import { TextInput, TextInputProps } from 'react-native';

export interface GeneralProps {
    name: string;
    type: string;
    sessionUser?: string;
    sessionEstablishment?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    secureTextEntry?: boolean;
    icon?: string;
    children?: React.ReactNode;
    onChangeText?: (e: any) => void;
    onPress?: () => void;
    onSubmitEditing: () => void;
} 

export interface ITextInput extends TextInput {
    value: string;
}
export interface InputRef {
    focus(): void;
}