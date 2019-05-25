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

function sortContacts(contacts, sortOptions) {
    const property = sortOptions.property;

    return contacts.slice().sort((a, b) => {
        if(a[property] > b[property]) {
            return 1;
        }
        else if(b[property] > a[property]) {
            return -1;
        }
        return 0;
    });
}


test('sorts by first name', assert => {
    const sortOptions = {
        property: 'firstName'
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [cantu, george, pruitt]);
});

test('sorts by last name', assert => {
    const sortOptions = {
        property: 'lastName'
    };

    const sorted = sortContacts(contacts, sortOptions);

    assert.deepEqual(sorted, [pruitt, george, cantu]);
});

// test('sorts by first name descending', assert => {
//     const sortOptions = {
//         property: 'firstName',
//         direction: -1
//     };

//     const sorted = sortContacts(contacts, sortOptions);

//     assert.deepEqual(sorted, [cantu, george, pruitt]);
// });