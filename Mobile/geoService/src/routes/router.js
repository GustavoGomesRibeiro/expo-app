import React, { useContext } from 'react';
// import { AuthProvider } from '../hooks/authContext';
import { ActivityIndicator, View } from 'react-native';
import AuthRouter from './auth.routes';
import UserRoutes from './user.routes';

const Router = () => {
    //  const { user, loading } = useAuth();
        
    //  const { authenticated } = useContext(Context);

    // if(loading) {
    //     return (
    //         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    //             <ActivityIndicator size="large" color="#fff"/>
    //         </View>
    //     );
    // }

    return (
            <AuthRouter/>
    )
    // return authenticated ? <AuthRouter/> : <UserRoutes/>;
};

export default Router;
