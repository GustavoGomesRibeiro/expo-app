import axios from 'axios'

const connectionApi = axios.create({
    baseURL: 'http:///192.168.0.181:3333'
})

export default connectionApi;