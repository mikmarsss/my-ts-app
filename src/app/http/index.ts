import axios from 'axios'

export const APi_URL = 'https://jsonplaceholder.typicode.com'


const $api = axios.create({
    withCredentials: true,
    baseURL: APi_URL
})


export default $api;