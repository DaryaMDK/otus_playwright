import { post } from 'axios';
import { baseURL } from '../config/config';

const accountService = {
    async generateToken(credentials) {
        const response = post(`${baseURL}/Account/v1/GenerateToken`, credentials);
        return response.data.token;
    },

    async register(userData) {
        const response = post(`${baseURL}/Account/v1/User`, userData);
        return response.data;
    },

    async deleteUser(token, userId) {
        const response = delete (`${baseURL}/Account/v1/User/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.status;
    },
    async authorized({ userName, password }) {
        const response = post(`${baseURL}/Account/v1/Authorized`, {
            body: JSON.stringify({ userName, password }),
        })

        return {
            headers: response.headers,
            status: response.status,
            data: await response.json(),
        }
    }
};

export default accountService;
