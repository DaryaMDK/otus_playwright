import { login } from '../framework/services/authService';
import { getUserInfo, deleteUser } from '../framework/services/userService';

let token;
const userId = '1eebddab-2e22-4357-95ef-ed168d3304a7';

beforeAll(async () => {
    const credentials = { username: 'testDari', password: 'testDaria132' };
    token = await login(credentials);
});

describe('User API tests', () => {
    test('Авторизация', async () => {
        expect(token).toBeDefined();
    });

    test('Получение информации о пользователе', async () => {
        const userInfo = await getUserInfo(token, userId);
        expect(userInfo).toHaveProperty('userId', userId);
        expect(userInfo).toHaveProperty('username');
    });

    test('Получение информации о пользователе - пользователь неавторизован', async () => {
        try {
            await getUserInfo('1232322', userId);
        } catch (error) {
            expect(error.response.status).toBe(401);
        }
    });

    test('Удаление пользователя', async () => {
        const status = await deleteUser(token, userId);
        expect(status).toBe(200);
    });
});
