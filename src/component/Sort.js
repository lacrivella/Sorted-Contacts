import Component from './Component.js';

class Sort extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => event.preventDefault());

        form.addEventListener('input', () => {
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form class="sort">
                <label>
                    Sort By:
                    <select>
                        <option value="first-name">First Name</option>
                        <option value="last-name">Last Name</option>
                        <option value="company">Company</option>
                        <option value="fruit">Favorite Fruit</option>
                    </select>
                </label>
                <label>
                    Direction:
                    <select>
                        <option value="1">Ascending</option>
                        <option value="-1">Descending</option>
                    </select>
                </label>
            </form>
        `;
    }
}

export default Sort;