import React, { createContext, useState, useCallback, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native';
import api from '../service/api';

const Contextapi = createContext();

function AuthProvider({ children }){
    const [ authenticated, setAuthenticated] = useState(false)
    const [ loading, setLoading] = useState(false)

    useEffect(() => {
        async function loadStorageData() {
            const [ token, user ] = await AsyncStorage.multiGet([
                '@geoService:token',
                '@geoService:user',
            ]);
            if( token[1] && user[1]) {
                api.defaults.headers.Authorization  = `Bearer ${token[1]}`;
                
                setAuthenticated({ token: token[1], user: JSON.parse(user[1]) })
            }
            setLoading(false);
        }
        loadStorageData();
    }, []);

    const signInUser = useCallback(async ({ username, password }) => {

        if(!username || !password){
            Alert.alert(
                 'Informações Inválidas',
                 'Os campos não podem ficar vazios!'
                )
        } else {        
            try {
            const response = await api.post('/sessions/users', {
                username,
                password            
            });
    
            console.log(response.data);

            const { token, user} = response.data;
    
            await AsyncStorage.multiSet([
                ['@geoService:token', token],
                ['@geoService:user', JSON.stringify(user)],
            ]);
    
            api.defaults.headers.Authorization  = `Bearer ${token[1]}`;
    
            setAuthenticated({ token, user });
        } catch (error) {
                Alert.alert(
                    'Informações Inválidas',
                    'Ops! Usuário ou senha estão incorretos!'
                );
        }
    }

    }, []);

    const signOut = useCallback (async () => {
        await AsyncStorage.multiRemove(['@geoService:user', '@geoService:token']);

        setAuthenticated({});
    }, []);


    return (
        <Contextapi.Provider value={{ authenticated, signInUser, signOut, loading }}>
            {children}
        </Contextapi.Provider>
    );
}

export { Contextapi, AuthProvider };