import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import store from './store';
import Routes from './routes';

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
