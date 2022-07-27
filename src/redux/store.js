import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import {startForman} from './sagas/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const saga = createSagaMiddleware()


export const store = createStore(
    rootReducer,
        applyMiddleware(saga),
      
);
saga.run(startForman)