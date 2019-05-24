import Component from './Component.js';
import Header from './Header.js';
import Sort from './Sort.js';
import ContactTable from './ContactTable.js';
import contacts from '../../data/contacts.js';

class App extends Component {
    render() {
        const dom = this.renderDOM();
        
        const header = new Header();
        const headerDOM = header.render();
        
        const main = dom.querySelector('main');

        const sort = new Sort({
            onSort: sortOptions => {
                console.log(sortOptions);
            }
        });
        main.appendChild(sort.render());

        
        const contactTable = new ContactTable({ contacts });
        const contactTableDOM = contactTable.render();
        main.appendChild(contactTableDOM); 
        
        dom.insertBefore(headerDOM, main);

        return dom;
    }
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                </main>
            </div>
        `;
    }
}

export default App;

