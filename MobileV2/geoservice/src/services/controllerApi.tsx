import axios from 'axios'

const connectionApi = axios.create({
    baseURL: 'https://backend-geoservice.herokuapp.com',
})

export default connectionApi;