import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') { //can be development, production or test
    middlewares.push(logger); 
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); //notes rootreducer and spreads in all middlewares (in above array)


sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default {store, persistor};