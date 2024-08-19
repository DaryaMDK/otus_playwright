import { create, update, get, deleteBook } from '../framework/services/bookService';
import { login } from '../framework/services/authService';
import { generateFakeBook } from '../framework/fixtures/book';

let token;

beforeAll(async () => {
    const credentials = { username: 'testDari', password: 'testDaria132' };
    token = await login(credentials);
});

describe('Book API Tests', () => {
    let bookId;
    let bookData;

    it('create new book', async () => {
        bookData = generateFakeBook();
        const response = await create(bookData, token);
        expect(response.status).toBe(201);
        expect(response.data).toMatchObject(bookData);
        bookId = response.data.id;
    });

    it('update the book', async () => {
        const updatedBookData = { ...bookData, title: 'Updated Title' };
        const response = await update(bookId, updatedBookData, token);
        expect(response.status).toBe(200);
        expect(response.data.title).toBe('Updated Title');
    });

    it('get book details', async () => {
        const response = await get(bookId, token);
        expect(response.status).toBe(200);
    });

    it('delete the book', async () => {
        const response = await deleteBook(bookId, token);
        expect(response.status).toBe(204);
    });
});