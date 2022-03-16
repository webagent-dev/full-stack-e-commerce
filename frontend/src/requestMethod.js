import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1/'
const TOKEN = ''

export const publicRequest =  axios.create({
    baseURL: BASE_URL
})

export const privateRequest = axios.create({
    baseUrl: BASE_URL,
    header: {authorization: `Bearer ${TOKEN}`}
})