import axios from 'axios'

const BASE_URL = 'http://localhost:8080/api/v1/'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMzllOWNjOGRjOThlYmM4ZTZlMWFlMCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Nzk2MjU4NSwiZXhwIjoxNjQ4MjIxNzg1fQ.HYQ6fo61LY5CpD93NKJ9dO_3N7VFbg9kb4z5uBhEE24'

export const publicRequest =  axios.create({
    baseURL: BASE_URL
})

export const privateRequest = axios.create({
    baseUrl: BASE_URL,
    header: {authorization: `Bearer ${TOKEN}`}
})