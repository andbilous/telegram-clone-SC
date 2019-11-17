import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { rootReducer } from './rootReducer';

const middleware = [thunk, logger];

export const store = createStore(rootReducer, applyMiddleware(...middleware));
