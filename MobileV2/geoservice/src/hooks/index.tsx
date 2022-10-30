import React from 'react';
import { AuthProvider } from './authContext';
import { IAuthentication } from '../utils/interfaces/interfaceAuthentication';


const AppProvider = ({children}: IAuthentication) => <AuthProvider>{children}</AuthProvider>


export default AppProvider