export interface IAuthentication {
    email?: string;
    password?: string;
    children?: React.ReactNode;
    authenticationUser?: () => void;
}