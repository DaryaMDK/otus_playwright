const authService = require('../framework/services/authService');
const userService = require('../framework/services/userService');

let token;
let userId = '1eebddab-2e22-4357-95ef-ed168d3304a7';

beforeAll(async () => {
    token = await authService.login();
});

describe('User API tests', () => {
    test('Авторизация', async () => {
        expect(token).toBeDefined();
    });

    test('Получение информации о пользователе', async () => {
        const userInfo = await userService.getUserInfo(token, userId);
        expect(userInfo).toHaveProperty('userId', userId);
        expect(userInfo).toHaveProperty('username');
    });

    test('Получение информации о пользователе - пользователь неавторизован', async () => {
        await userService.getUserInfo('1232322');
        expect.status == 401
    });


    test('Удаление пользователя', async () => {
        const status = await userService.deleteUser(token, userId);
        expect(status).toBe(204);
    });
});
в