import { TextInput, TextInputProps } from 'react-native';

export interface GeneralPropsInput {
    name: string;
    type: string;
    placeholder?: string;
    placeholderTextColor?: string;
    icon?: string;
    icon_eye_opened?: string;
    icon_eye_closed?: string;
    secureTextEntry?: boolean;
    isVisible?: boolean;
    children?: React.ReactNode;
    visible?:() => void;
    onChangeText?: (e: any) => void;
    onSubmitEditing: () => void;
} 
export interface GeneralPropsHeader {
    onPress?: () => void;
    icon?: string;
    title?: string;
}
export interface GeneralPropsButton {
    onPress?: () => void;
    children?: React.ReactNode;
}
export interface GeneralPropsCallToAction {
    sessionUser?: string;
    sessionEstablishment?: string;
    children?: React.ReactNode;
}
export interface ITextInput extends TextInput {
    value: string;
}
export interface InputRef {
    focus(): void;
}