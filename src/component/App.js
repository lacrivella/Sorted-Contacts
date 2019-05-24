import Component from './Component.js';
import Header from './Header.js';

class App extends Component {
    renderTemplate() {
        return /*html*/ `
            <div>
                <main>
                    Hello
                </main>
            </div>
        `;
    }
}

export default App;

