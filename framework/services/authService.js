const axios = require('axios');
const { baseURL, credentials } = require('../config/config');

const authService = {
    async login() {
        const response = await axios.post(`${baseURL}/auth/login`, credentials);
        return response.data.token;
    },
};

module.exports = authService;
