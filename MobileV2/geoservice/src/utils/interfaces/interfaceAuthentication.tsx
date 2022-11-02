export interface IAuthentication {
    username?: string;
    password?: string;
    children?: React.ReactNode;
    authenticationUser?: () => void;
    authenticationEstablishment?: () => void;
}