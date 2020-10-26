import React, { createContext, useState, useEffect, useCallback, useContext} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../service/api';

 const AuthContext = createContext({ });

 const AuthProvider = ({ children }) => {
    const [ data, setData ] = useState({});
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function loadStorageData() {
            const [ token, user ] = await AsyncStorage.multiGet([
                '@geoService:token',
                '@geoService:user',
            ]);
            if( token[1] && user[1]) {
                api.defaults.headers.Authorization  = `Bearer ${token[1]}`;
                
                setData({ token: token[1], user: JSON.parse(user[1]) })
            }
            setLoading(false);
        }
        loadStorageData();
    }, []);

        const signInUser = useCallback(async ({ username, password}) => {
            const response = await api.post('/sessions/users', {
                username,
                password
            });

            const { token, user} = response.data;

            await AsyncStorage.multiSet([
                ['@geoService:token', token],
                ['@geoService:user', JSON.stringify(user)],
            ]);

            api.defaults.headers.Authorization  = `Bearer ${token[1]}`;

            setData({ token, user });
        }, []);


        const signInEstablishment = useCallback(async ({ username, password}) => {
            const response = await api.post('/sessions/establishments', {
                username,
                password
            });

            const { token, user} = response.data;

            await AsyncStorage.multiSet([
                ['@geoService:token', token],
                ['@geoService:user', JSON.stringify(user)],
            ]);

            api.defaults.headers.Authorization  = `Bearer ${token[1]}`;

            setData({ token, user });
        }, []);

        const signOut = useCallback (async () => {
            await AsyncStorage.multiRemove(['@geoService:user', '@geoService:token']);

            setData({});
        }, []);
    
    return (
        <AuthContext.Provider value={{ user: data.user, loading, signInUser, signInEstablishment, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

 function useAuth() {
    const context = useContext(AuthContext);

    if(!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export {useAuth, AuthProvider  };
