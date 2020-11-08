import Position from '../../enums/Position';
import Colour from '../../enums/Colour';
import IPlayer from '../../interfaces/player';
import { MAX_CHARACTER_NAME } from '../../constants/player-constants';

enum ActionTypes {
    CREATE_PLAYER = 'PLAYER_BUNDLE_CREATE_PLAYER',
    SET_PLAYER_POSITION = 'PLAYER_BUNDLE_SET_PLAYER_ACTION',
    DELETE_PLAYER = 'PLAYER_BUNDLE_DELETE_PLAYER',
    RESET_ALL_PLAYERS = 'PLAYER_BUNDLE_RESET_ALL_PLAYERS'
}

interface ICreatePlayerAction {
    type: ActionTypes.CREATE_PLAYER;
    name: string;
    colour: Colour;
}

interface IResetAllPlayersAction {
    type: ActionTypes.RESET_ALL_PLAYERS;
}

interface IDeletePlayerAction {
    type: ActionTypes.DELETE_PLAYER;
    name: string;
}

interface ISetPlayerPositionAction {
    type: ActionTypes.SET_PLAYER_POSITION,
    newPosition: Position;
    name: string;
}

// Action Combinator
type Action = ICreatePlayerAction |
    ISetPlayerPositionAction |
    IDeletePlayerAction |
    IResetAllPlayersAction;

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
    },
    resetAllPlayers(): IResetAllPlayersAction {
        return {
            type: ActionTypes.RESET_ALL_PLAYERS,
        }
    },
    deletePlayer(name: string): IDeletePlayerAction {
        return {
            type: ActionTypes.DELETE_PLAYER,
            name: name,
        }
    },
    setPlayerPosition(name: string, newPosition: Position): ISetPlayerPositionAction {
        return {
            type: ActionTypes.SET_PLAYER_POSITION,
            name: name,
            newPosition: newPosition
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

    if (newPlayer.name.length <= MAX_CHARACTER_NAME && 
        !state.players.some(x => x.name === newPlayer.name || x.color === newPlayer.color)) {
        return {
            ...state,
            players: [...state.players, newPlayer]
        }
    }

    return state;
}

function resetAllPlayersAction(state: IPlayerState, action: IResetAllPlayersAction): IPlayerState {
    if (state.players.some(x => x.position !== Position.Unknown)) {
        const players = state.players.map(x => {
            return {
                ...x,
                position: Position.Unknown
            }
        });

        return {
            ...state,
            players: players
        };
    }

    return state;
}

function deletePlayerAction(state: IPlayerState, action: IDeletePlayerAction): IPlayerState {
    if (state.players.some(x => x.name === action.name)) {
        return {
            ...state,
            players: state.players.filter(x => x.name !== action.name)
        }
    }

    return state;
}

function setPlayerPositionAction(state: IPlayerState, action: ISetPlayerPositionAction): IPlayerState {
    const existingPlayerIndex: number = state.players.findIndex(x => x.name === action.name);
    if (existingPlayerIndex !== -1) {
        const players = [...state.players];
        players[existingPlayerIndex] = {
            ...players[existingPlayerIndex],
            position: action.newPosition
        };

        return {
            ...state,
            players: players
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
            return createPlayerAction(state, action);
        case ActionTypes.SET_PLAYER_POSITION:
            return setPlayerPositionAction(state, action);
        case ActionTypes.DELETE_PLAYER:
            return deletePlayerAction(state, action);
        case ActionTypes.RESET_ALL_PLAYERS:
            return resetAllPlayersAction(state, action);
        default:
            return state;
    }
}
