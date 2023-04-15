import axios from 'axios';

export const client = axios.create({
    baseURL: process.env.REACT_APP_URL_BASE + 'api/services/app/'
});
