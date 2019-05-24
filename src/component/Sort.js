import Component from './Component.js';

class Sort extends Component {
    render() {
        const form = this.renderDOM();

        form.addEventListener('submit', event => event.preventDefault());

        form.addEventListener('input', () => {
            const formData = new FormData(form);
            const sortOptions = {
                property: formData.get('property'),
                direction: parseInt(formData.get('direction'))
            };
            this.props.onSort(sortOptions);
        });

        return form;
    }

    renderTemplate() {
        return /*html*/ `
            <form class="sort">
                <label>
                    Sort By:
                    <select name="property">
                        <option value="first-name">First Name</option>
                        <option value="last-name">Last Name</option>
                        <option value="company">Company</option>
                        <option value="fruit">Favorite Fruit</option>
                    </select>
                </label>
                <label>
                    Direction:
                    <select name="direction">
                        <option value="1">Ascending</option>
                        <option value="-1">Descending</option>
                    </select>
                </label>
            </form>
        `;
    }
}

export default Sort;