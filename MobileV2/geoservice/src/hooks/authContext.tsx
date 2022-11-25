import React,{ createContext, useCallback, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { IAuthentication, IRegister, ISignin } from '@utils/interfaces/interfaceAuthentication';
import connectionApi from '../services/controllerApi';


import { Light, Dark } from '@assets/global/theme/';

const ContextApi = createContext<IAuthentication>({} as IAuthentication);

function AuthProvider({children} :IAuthentication) {
    const scheme = useColorScheme();

    const [ theme, setTheme ] = useState<string>('light');
    const [ authenticated, setAuthenticated] = useState<IAuthentication>({} as IAuthentication);
    const [loading, setLoading] = useState<boolean>(false);
    const [ visible, setVisible ] = useState<boolean>(true);
    const [ error, setError ] = useState<string>('');
    const [ success, setSuccess ] = useState<string>(''); 
    
    useEffect(() => {
        async function loadStorageData() {
          const savedTheme = await AsyncStorage.getItem("@theme");
          const [token, user, establishment] = await AsyncStorage.multiGet([
            "@geoService:token",
            "@geoService:user",
            "@geoService:establishment",
          ]);

          if(savedTheme) {
            setTheme(savedTheme)
          }

          if (token[1] && user[1] && establishment[1]) {
            connectionApi.defaults.headers.Token = `Bearer ${token[1]}`;
    
            setAuthenticated({
              token: token[1],
              user: JSON.parse(user[1]),
              establishment: JSON.parse(establishment[1]),
            });
          }
          setLoading(false);
        }
        loadStorageData();
    }, []);

    const authenticationUser = useCallback(async({username, password}: ISignin) => {
            try {
                const response = await connectionApi.post('/sessions/users', {
                    username,
                    password
                });
                
                const { token, user } = response.data;

                await AsyncStorage.multiSet([
                    ["@gerService:token", token],
                    ["@gerService:user", JSON.stringify(user)],
                ]);

                connectionApi.defaults.headers.Token = `Bearer ${token[1]}`;

                setAuthenticated({ token, user });
            } catch (error) {
                setError('error');
                
                setTimeout(() => {
                    setError('');
                }, 3000);
            }
    },[])

    const authenticationEstablishment = useCallback(async({username, password}: ISignin) => {
            try {
                const response = await connectionApi.post('/sessions/establishments', {
                    username,
                    password
                }) 
            
                const { token, establishment  } = response.data;
        
                await AsyncStorage.multiSet([
                    ["@gerService:token", token],
                    ["@gerService:establishment ", JSON.stringify(establishment)],
                ]);
        
                connectionApi.defaults.headers.Token = `Bearer ${token[1]}`;
        
                setAuthenticated({ token, establishment });            
            } catch (error) {
                setError('error');
                
                setTimeout(() => {
                    setError('');
                }, 3000);            
            }
    },[])

    const registerUser = useCallback(async({email, username, password} : IRegister) => {
            try {
                const response = await connectionApi.post('/users', {
                    email,
                    username,
                    password
                })

                setSuccess('ok');
                
                setTimeout(() => {
                    setSuccess('');
                }, 3000);

            } catch (error) {
                setError('error');

                setTimeout(() => {
                    setError('');
                }, 3000);
            }
        
    },[])

    const registerEstablishment = useCallback(async ({email, username, password}: IRegister) => {
            try {
                const response = await connectionApi.post('/establishments', {
                    email,
                    username,
                    password
                })

                setSuccess('ok');

                setTimeout(() => {
                    setSuccess('');
                }, 3000);
        
            } catch (error) {
                setError('error');

                setTimeout(() => {
                    setError('');
                }, 3000);
            }
    },[])

    const signOut = useCallback(async () => {
        await AsyncStorage.multiRemove([
            "@geoService:user",
            "@geoService:establishment",
            "@geoService:token",
          ]);
        setAuthenticated({});
        // navigation.navigate('Main');
    }, []);

    const enableVision = () => {
        setVisible(event => !event)
    }

    const toggleTheme = () => {
        let selectTheme;
        if(theme === 'light'){
            selectTheme = 'dark';
        } else {
            selectTheme = 'light';
        }
        setTheme(selectTheme);
        AsyncStorage.setItem('@theme', selectTheme);
    }

    return (
        <ThemeProvider theme={theme === 'light' ? Light : Dark}>
            <ContextApi.Provider
                value={{
                    authenticationUser,
                    authenticationEstablishment,
                    registerUser,
                    registerEstablishment,
                    signOut,
                    enableVision,
                    toggleTheme,
                    theme,
                    visible,
                    error,
                    success,
                    token: authenticated.token,
                    user: authenticated.user,
                    establishment : authenticated.establishment,
                }}
            >
                {children}
            </ContextApi.Provider>
        </ThemeProvider>
    )
}

export { AuthProvider, ContextApi }