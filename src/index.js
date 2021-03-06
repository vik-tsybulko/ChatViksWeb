import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './redux/store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const history = createBrowserHistory();


ReactDOM.render(
    <Provider store={ store }>
      <Router history={ history }>
        <App />
      </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
