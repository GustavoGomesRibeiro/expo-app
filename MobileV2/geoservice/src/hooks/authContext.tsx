import React,{ createContext, useCallback } from 'react';
import { IAuthentication } from '../utils/interfaces/interfaceAuthentication';
import connectionApi from '../services/controllerApi';

const ContextApi = createContext(null);

function AuthProvider({children} :IAuthentication) {
    
    const authenticationUser = useCallback(async({username, password}) => {
        const response = await connectionApi.post('/sessions/users', {
            username,
            password
        }) 
    
        console.log(response, 'response')
    },[])

    return (
        <ContextApi.Provider
            value={{
                authenticationUser
            }}
        >
            {children}
        </ContextApi.Provider>
    )
}

export { AuthProvider, ContextApi }