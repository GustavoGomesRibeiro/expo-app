import { IPosition } from "@utils/interfaces/interfacePosition";

type RootStackParamList  = {
    Home: undefined,
    Main: undefined,
    Register: { session: 'user' | 'establishment'},
    SessionUser: undefined,
    SessionEstablishment: undefined,
    Signin: { session: 'user' | 'establishment'},
    RegisterServices: { position: IPosition },
    MoreDetails: undefined
}

export default RootStackParamList;