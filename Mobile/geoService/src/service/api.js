import axios from 'axios';
import { AsyncStorage } from 'react-native'

const api = axios.create({
    baseURL: "http://192.168.15.2:3333"
});

// api.interceptors.request.use( async (config) => {
//     try {
//         const token = await AsyncStorage.getItem('@geoService');

//         if (token) {
//             config.headers.token = `${token}`
//         }
//         return config;
//     } catch (error) {
//         console.tron.log(error)
//     }
// })

export default api;