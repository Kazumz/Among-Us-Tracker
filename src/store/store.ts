import {
    createStore,
    Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './root-reducer';
import IState from './state';

const store: Store<IState> = createStore(rootReducer, composeWithDevTools());

export function getState(): IState {
    return store.getState();
}

export default store;