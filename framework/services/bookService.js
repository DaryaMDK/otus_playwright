import { create as _create } from 'axios';
import { baseURL } from '../config/config';

const api = _create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export function create(bookData) { return api.post('/books', bookData); }
export function update(id, bookData) { return api.put(`/books/${id}`, bookData); }
export function get(id) { return api.get(`/books/${id}`); }
export function deleteBook (id) { return api.deleteBook(`/books/${id}`); }