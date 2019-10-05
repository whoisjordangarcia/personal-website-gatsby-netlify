import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { gaMiddleware } from './middlewares/gaMiddleware';
import { reducer as appReducer } from './app';

export function initializeStore(initialState = {}) {
  return createStore(
    appReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware, gaMiddleware))
  );
}
