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
            const [ token, user, establishment ] = await AsyncStorage.multiGet([
                '@geoService:token',
                '@geoService:user',
                '@geoService:establishment',
            ]);
            if( token[1] && user[1] && establishment[1]) {
                api.defaults.headers.Authorization  = `Bearer ${token[1]}`;
                
                setAuthenticated({ token: token[1], user: JSON.parse(user[1]), establishment: JSON.parse(establishment[1]) })
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
            
            console.log(token, user, 'credentials')

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

    const signInEstablishment = useCallback(async ({ username, password }) => {
        if(!username || !password){
            Alert.alert(
                'Informações Inválidas',
                'Os campos não podem ficar vazios!'
               );
        } else {
            try {
                const response = await api.post('/sessions/establishments', {
                    username,
                    password
                });
        
                const { token, establishment} = response.data;
                console.log(token, establishment, 'credentials')

                await AsyncStorage.multiSet([
                    ['@geoService:token', token],
                    ['@geoService:establishment', JSON.stringify(establishment)],
                ]);
        
                api.defaults.headers.Authorization  = `Bearer ${token[1]}`;
        
                setAuthenticated({ token, establishment });
            } catch (error) {
                Alert.alert(
                    'Informações Inválidas',
                    'Ops! Usuário ou senha estão incorretos!'
                );
            }
        }
    }, []);

    const signOut = useCallback (async () => {
        await AsyncStorage.multiRemove(['@geoService:establishment', '@geoService:token']);

        setAuthenticated({});
    }, []);


    return (
        <Contextapi.Provider value={{ user: authenticated.user, establishment: authenticated.establishment, signInUser, signInEstablishment, signOut, loading }}>
            {children}
        </Contextapi.Provider>
    );
}

export { Contextapi, AuthProvider };