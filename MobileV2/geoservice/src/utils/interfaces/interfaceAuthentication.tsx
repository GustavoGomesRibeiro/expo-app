export interface ISignin {
    username: string;
    password: string;
}

export interface IAuthentication {
    username?: string;
    password?: string;
    children?: React.ReactNode;
    visible?: boolean;
    error?: string;
    user?: string;
    establishment?: string;
    token?: string;
    authenticationUser?: ({username, password}: ISignin) => Promise<void>;
    authenticationEstablishment?: ({username, password}: ISignin) => Promise<void>;
    signOut?: () => Promise<void>;
    enableVision?: () => void;
}