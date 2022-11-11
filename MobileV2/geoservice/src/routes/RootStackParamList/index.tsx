
type RootStackParamList  = {
    Home: undefined,
    Main: undefined,
    Register: { session: 'user' | 'establishment'},
    SessionUser: undefined,
    SessionEstablishment: undefined,
    Signin: { session: 'user' | 'establishment'},
}

export default RootStackParamList;