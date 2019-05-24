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
    return contacts.slice().sort((a, b) => {
        if(a.firstName > b.firstName) {
            return 1;
        }
        else if(b.firstName > a.firstName) {
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