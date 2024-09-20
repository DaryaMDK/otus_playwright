import { deleteBook, get } from 'axios';
import { baseURL } from '../config/config';

const userService = {
    async deleteUser(token, userId) {
        const response = await deleteBook (`${baseURL}/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.status;
    },

    async getUserInfo(token, userId) {
        const response = await get(`${baseURL}/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },
};

export default userService;
