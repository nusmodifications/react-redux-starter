import ReactDOM from 'react-dom';
import configureStore from 'stores/configure-store';

import 'styles/main.scss';

import App from './App';


const store = configureStore();
const render = (Component) => {
  ReactDOM.render(Component, document.getElementById('app'));
};

const init = () => {
  render(App({ store }));
};

if (module.hot) {
  module.hot.accept('App', init);
}

init();
