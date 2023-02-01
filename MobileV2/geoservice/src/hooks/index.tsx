import React from 'react';
import { AuthProvider, RegisterCompanyProvider } from './exportDefault';
import { IAuthentication } from '../utils/interfaces/interfaceAuthentication';


const AppProvider = ({children}: IAuthentication) => {
    return (
        <>
            <AuthProvider>
                <RegisterCompanyProvider>{children}</RegisterCompanyProvider>
            </AuthProvider>
        </>
    )
}


export default AppProvider