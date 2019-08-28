import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import mySaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(mySaga);
export default store;