export const baseURL = 'https://bookstore.demoqa.com';
export const credentials = {
    username: 'testDari',
    password: 'testDaria132'
};

export default Object.freeze({
    telegram: {
        enable: process.env.TEST_TELEGRAM_ENABLE === 'true',
        token: process.env.TEST_TELEGRAM_TOKEN,
        chatId: process.env.TEST_TELEGRAM_CHAT_ID,
    },
})