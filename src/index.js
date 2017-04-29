import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import reducers from './reducers';
import routes from './routes';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes}/>
    </Provider>
  , document.querySelector('.container'));
