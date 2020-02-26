import axios from 'axios';

const api = axios.create({
    baseURL: 'https://3333-f9bf55a9-806e-495f-a01e-706ce71cd68e.ws-us02.gitpod.io'
});

export default api;