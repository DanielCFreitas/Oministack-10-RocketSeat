import axios from 'axios'

const api = axios.create({
    baseURL: 'http://192.168.15.42:3232'
})

export default api;