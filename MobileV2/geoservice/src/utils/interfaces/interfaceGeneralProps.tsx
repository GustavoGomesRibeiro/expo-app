export interface GeneralProps {
    sessionUser?: string;
    sessionEstablishment?: string;
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    onChangeText?: string;
    secureTextEntry?: boolean;
    icon?: string;
    children?: React.ReactNode;
    onPress?: () => void;
} 