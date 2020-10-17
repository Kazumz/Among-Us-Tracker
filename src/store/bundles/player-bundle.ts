import Position from '../../enums/Position';
import Colour from '../../enums/Colour';
import IPlayer from '../../interfaces/player';

enum ActionTypes {
    CREATE_PLAYER = 'PLAYER_BUNDLE_CREATE_PLAYER',
}

interface ICreatePlayerAction {
    type: ActionTypes.CREATE_PLAYER;
    name: string;
    colour: Colour;
}

// Action Combinator
type Action = ICreatePlayerAction;

// State Slice Definition
export interface IPlayerState {
    players: ReadonlyArray<IPlayer>;
}

// Action Creators
export const actionCreators = {
    createPlayer(name: string, colour: Colour): ICreatePlayerAction {
        return {
            type: ActionTypes.CREATE_PLAYER,
            name: name,
            colour: colour,
        }
    }
}

// Sub-Reducers
function createPlayerAction(state: IPlayerState, action: ICreatePlayerAction): IPlayerState {
    const newPlayer: IPlayer = {
        name: action.name,
        position: Position.Unknown,
        color: action.colour
    };

    if (!state.players.some(x => x.name === newPlayer.name || x.color === newPlayer.color)) {
        return {
            ...state,
            players: [...state.players, newPlayer]
        }
    }

    return state;
}

// Get Default
export function getDefault(): IPlayerState {
    return {
        players: []
    };
}

export default function reducer(state: IPlayerState = getDefault(), action: Action): IPlayerState {
    switch (action.type) {
        case ActionTypes.CREATE_PLAYER:
            return createPlayerAction(state, action)
        default:
            return state;
    }
}
