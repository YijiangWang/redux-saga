import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import store from './store';
import Routes from './routes';
import './index.css';

ReactDom.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
