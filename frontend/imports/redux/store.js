import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
import rootReducer from './reducers';

const createStoreWithMiddleware = applyMiddleware(apiMiddleware)(createStore);

export const store = createStoreWithMiddleware(rootReducer);
