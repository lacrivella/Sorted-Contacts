import sortContacts from '../src/sort-contacts.js';

const test = QUnit.test;

QUnit.module('Sort Contatcs');


const cantu = {
    'firstName': 'Cantu',
    'lastName': 'Sullivan',
    'company': 'IDETICA',
    'favoriteFruit': 'banana'
};
const george = {
    'firstName': 'George',
    'lastName': 'Nicholson',
    'company': 'MALATHION',
    'favoriteFruit': 'strawberry'
};
const pruitt = {
    'firstName': 'Pruitt',
    'lastName': 'Montgomery',
    'company': 'MANGELICA',
    'favoriteFruit': 'apple'
};
const contacts = [cantu, george, pruitt];

test('sorts by first name', assert => {
    const sortOptions = {
        property: 'firstName',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

test('sorts by last name', assert => {
    const sortOptions = {
        property: 'lastName',
        direction: 1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});

test('sorts by first name descending', assert => {
    const sortOptions = {
        property: 'firstName',
        direction: -1
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});