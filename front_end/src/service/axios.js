import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:2000/',
    timeout: 1000,
});

export default instance