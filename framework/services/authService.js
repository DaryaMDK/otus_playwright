import { post } from 'axios';
import { baseURL } from '../config/config';

const authService = {
    async login(credentials) {
        const response = await post(`${baseURL}/Account/v1/GenerateToken`, credentials);
        return response.data.token;
    },
};

export default authService;
