import Component from './Component.js';
import ContactRow from './ContactRow.js';

class ContactTable extends Component {
    render() {
        const list = this.renderDOM();

        const contacts = this.props.contacts;

        contacts.forEach(contact => {
            const contactRow = new ContactRow({ contact });
            const contactRowDOM = contactRow.render();
            list.appendChild(contactRowDOM);
        });
        return list;
    }
    renderTemplate() {
        return /*html*/ `
            <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Company</th>
                    <th>Favorite Fruit</th>
                </tr>
                <tr>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                </tr>
            </table>



        `;
    }
}

export default ContactTable;