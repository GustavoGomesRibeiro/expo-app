export interface ISignin {
    username: string;
    password: string;
}

export interface IRegister {
    email: string;
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
    registerUser?: ({email, username, password}: IRegister) => Promise<void>;
    registerEstablishment?: ({email, username, password}: IRegister) => Promise<void>;
    signOut?: () => Promise<void>;
    enableVision?: () => void;
}