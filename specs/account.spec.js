import accountService from '../framework/services/accountService';
import { credentials } from '../framework/config/config';

let token;
let userId;

beforeAll(async () => {
    token = await accountService.generateToken(credentials);
});

describe('Account API Tests', () => {
    it('Создание нового пользователя', async () => {
        const userData = {
            userName: 'testUser',
            password: 'Test@123'
        };

        const response = await accountService.register(userData);
        expect(response.userID).toBeDefined();
        userId = response.userID;
    });

    it('Генерация токена', async () => {
        const response = await accountService.generateToken(credentials);
        expect(response.token).toBeDefined();
    });

    it('Удаление пользователя', async () => {
        const status = await accountService.deleteUser(token, userId);
        expect(status).toBe(204);
    });

    it('Удаление пользователя без авторизации', async () => {
        try {
            await accountService.deleteUser('invalidToken', userId);
        } catch (error) {
            expect(error.response.status).toBe(401);
        }
    });
});