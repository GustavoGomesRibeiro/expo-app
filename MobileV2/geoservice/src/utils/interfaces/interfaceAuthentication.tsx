export interface ISignin {
    username: string;
    password: string;
}

export interface IAuthentication {
    username?: string;
    password?: string;
    children?: React.ReactNode;
    authenticationUser?: ({username, password}: ISignin) => Promise<void>;
    authenticationEstablishment?: ({username, password}: ISignin) => Promise<void>;
}