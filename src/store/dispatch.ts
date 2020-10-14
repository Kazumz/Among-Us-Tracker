import { AnyAction } from 'redux';

import store from './store';

export default function dispatch(action: AnyAction): AnyAction {
    return store.dispatch(action);
}