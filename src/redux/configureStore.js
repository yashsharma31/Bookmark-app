import { createStore, applyMiddleware ,compose} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import initialState from "./initialState";
import {startForman} from './sagas/index';



export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware()
    const composeArgs = [
      applyMiddleware(sagaMiddleware),
    ];
    if(window && window.__REDUX_DEVTOOLS_EXTENSION__) {
      composeArgs.push(window.__REDUX_DEVTOOLS_EXTENSION__());
    }
  
    const store = createStore(
      rootReducer,initialState,
      compose.apply(undefined, composeArgs)
    );
  
    sagaMiddleware.run(startForman);
  
    return store;
  }