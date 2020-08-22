import axios from 'axios'
export const http = axios.create({
    baseURL: 'http://services.solucx.com.br/mock/drones'
})