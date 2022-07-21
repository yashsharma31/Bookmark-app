import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import { composeWithDevTools } from 'redux-devtools-extension';


const saga = createSagaMiddleware()


export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(saga)
        // other store enhancers if any
      )
);