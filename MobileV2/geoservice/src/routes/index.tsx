import React, { useContext } from 'react';

import { ContextApi } from '../hooks/authContext';

import AuthRoute from './auth.route';
import UserRoute from './user.route';
import EstablishmentRoute from './establishment.route';

const Router = () => {
    const { user, establishment } = useContext(ContextApi);

    return user ? (
        <UserRoute/>
    ) : establishment ? (
        <EstablishmentRoute/>
    ) : ( 
        // <AuthRoute/>
        <EstablishmentRoute/>
    );
}

export default Router;