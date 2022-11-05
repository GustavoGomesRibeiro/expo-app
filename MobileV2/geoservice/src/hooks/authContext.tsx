import React,{ createContext, useCallback } from 'react';
import { IAuthentication } from '../utils/interfaces/interfaceAuthentication';
import connectionApi from '../services/controllerApi';

const ContextApi = createContext<IAuthentication>({} as IAuthentication);

function AuthProvider({children} :IAuthentication) {
    
    const authenticationUser = useCallback(async({username, password}: IAuthentication) => {
        const response = await connectionApi.post('/sessions/users', {
            username,
            password
        }) 
    
        console.log(response, 'response')
    },[])

    const authenticationEstablishment = useCallback(async({username, password}: IAuthentication) => {
        const response = await connectionApi.post('/sessions/establishments', {
            username,
            password
        }) 
    
        console.log(response, 'response')
    },[])

    return (
        <ContextApi.Provider
            value={{
                authenticationUser,
                authenticationEstablishment
            }}
        >
            {children}
        </ContextApi.Provider>
    )
}

export { AuthProvider, ContextApi }