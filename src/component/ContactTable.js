import Component from './Component.js';

class ContactTable extends Component {
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