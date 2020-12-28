enum ActionTypes {
    SET_ERROR = 'SESSION_BUNDLE_SET_ERROR',
}

interface ISetErrorAction {
    type: ActionTypes.SET_ERROR;
    error: boolean;
}

// Action Combinator
type Action = ISetErrorAction

// State Slice Definition
export interface ISessionState {
    error: boolean;
}

// Action Creators
export const actionCreators = {
    setError(error: boolean): ISetErrorAction {
        return {
            type: ActionTypes.SET_ERROR,
            error: error
        }
    }
}

// Sub-Reducers
function setErrorAction(state: ISessionState, action: ISetErrorAction): ISessionState {
    if (action.error !== state.error) {
        return {
            ...state,
            error: action.error
        }
    }

    return state;
}

// Get Default
export function getDefault(): ISessionState {
    return {
        error: false
    };
}

export default function reducer(state: ISessionState = getDefault(), action: Action): ISessionState {
    switch (action.type) {
        case ActionTypes.SET_ERROR:
            return setErrorAction(state, action);
        default:
            return state;
    }
}
