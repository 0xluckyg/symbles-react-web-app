import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxPromise from 'redux-promise';
import thunk from 'redux-thunk';

const store = createStore(reducers);
export default store;
