import store from '../store';

enum ActionTypes {
    CREATE_PLAYER = 'PLAYER_BUNDLE_CREATE_PLAYER',
}

interface ICreatePlayerAction {
    type: ActionTypes.CREATE_PLAYER;
    player: {};
}

// Action Combinator
type Action = ICreatePlayerAction;

// State Slice Definition
export interface IPlayerState {
}

// Action Creators
export const actionCreators = {
};

// Sub-Reducers

// Get Default
export function getDefault(): IPlayerState {
    return {
    };
}

export function getState(): IPlayerState {
    return store.getState().playerState;
}

export default function reducer(state: IPlayerState = getDefault(), action: Action): IPlayerState {
    switch (action.type) {
        default:
            return state;
    }
}
