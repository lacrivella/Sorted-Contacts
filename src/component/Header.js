import Component from './Component.js';

class Header extends Component {
    renderTemplate() {
        return /*html*/ `
            <header id="header">
                <h1>SORT CONTACT</h1>
            </header>
        `;
    }
}

export default Header;