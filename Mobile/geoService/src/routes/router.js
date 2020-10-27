import React, { useContext } from 'react';
import { Contextapi } from '../hooks/authContext';

import { ActivityIndicator, View } from 'react-native';
import AuthRouter from './auth.routes';
import UserRoutes from './user.routes';
import EstablishmentRouter from './establishment.routes';

const Router = () => {

    const { loading, user, establishment } = useContext(Contextapi);

    console.log(loading, 'status do meu load');

    if(loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size="large" color="#fff"/>
            </View>
        );
    }

    return user ? <UserRoutes/> : establishment ? <EstablishmentRouter/> : <AuthRouter/>;
};

export default Router;
