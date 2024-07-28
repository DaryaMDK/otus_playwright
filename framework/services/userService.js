const axios = require('axios');
const { baseURL } = require('../config/config');

const userService = {
    async deleteUser(token, userId) {
        const response = await axios.delete(`${baseURL}/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.status;
    },

    async getUserInfo(token, userId) {
        const response = await axios.get(`${baseURL}/users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return response.data;
    },
};

module.exports = userService;
