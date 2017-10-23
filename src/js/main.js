require('../css/main.scss');

/* eslint-disable */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import {initialState, reducers} from './redux/reducers';
import App from './components/app';

const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
/* eslint-enable */
