import {
    useSelector as useReduxSelector,
    TypedUseSelectorHook,
} from 'react-redux';

import IState from './state';

export const useStateSelector: TypedUseSelectorHook<IState> = useReduxSelector;