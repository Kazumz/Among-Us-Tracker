enum ActionTypes {
    SET_LOADING = 'APPLICATION_BUNDLE_SET_LOADING',
}

// This is not scalable as you don't want to clear this when having multiple concurrent promises. 
// Ideally you'd have a queue mechanism here that generically monitors when promises are pending/completed/failed
// and show the loading spinner based off that instead.
// Either that, or have explicit booleans for when specific promises are in progress.
interface ISetLoadingAction {
    type: ActionTypes.SET_LOADING;
    loading: boolean;
}

// Action Combinator
type Action = ISetLoadingAction

// State Slice Definition
export interface IApplicationState {
    loading: boolean;
}

// Action Creators
export const actionCreators = {
    setLoading(loading: boolean): ISetLoadingAction {
        return {
            type: ActionTypes.SET_LOADING,
            loading: loading
        }
    }
}

// Sub-Reducers
function setLoadingAction(state: IApplicationState, action: ISetLoadingAction): IApplicationState {
    if (action.loading !== state.loading) {
        return {
            ...state,
            loading: action.loading
        }
    }

    return state;
}

// Get Default
export function getDefault(): IApplicationState {
    return {
        loading: false
    };
}

export default function reducer(state: IApplicationState = getDefault(), action: Action): IApplicationState {
    switch (action.type) {
        case ActionTypes.SET_LOADING:
            return setLoadingAction(state, action);
        default:
            return state;
    }
}
