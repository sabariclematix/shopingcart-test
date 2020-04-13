import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import cartReducer from './components/reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
//sagaMiddleware.run();
const store = createStore(cartReducer, applyMiddleware(sagaMiddleware));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

