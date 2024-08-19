import { faker } from '@faker-js/faker';

export function generateFakeBook() {
    return ({
        title: faker.lorem.words(3),
        author: faker.person.fullName(),
        description: faker.lorem.words(5),
        isbn: faker.datatype.uuid(),
    });
}