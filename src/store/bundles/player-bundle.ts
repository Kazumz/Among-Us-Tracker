import Position from '../../enums/Position';
import Colour from '../../enums/Colour';
import IPlayer from '../../interfaces/player';
import { MAX_CHARACTER_NAME } from '../../constants/player-constants';

enum ActionTypes {
    CREATE_PLAYER = 'PLAYER_BUNDLE_CREATE_PLAYER',
    SET_PLAYER_POSITION = 'PLAYER_BUNDLE_SET_PLAYER_ACTION',
    DELETE_PLAYER = 'PLAYER_BUNDLE_DELETE_PLAYER',
    RESET_ALL_PLAYERS = 'PLAYER_BUNDLE_RESET_ALL_PLAYERS',
    ADD_ALL_PLAYERS = 'PLAYERS_BUNDLE_ADD_ALL_PLAYERS',
}

interface ICreatePlayerAction {
    type: ActionTypes.CREATE_PLAYER;
    name: string;
    colour: Colour;
}

interface IResetAllPlayersAction {
    type: ActionTypes.RESET_ALL_PLAYERS;
}

interface IAddAllPlayersAction {
    type: ActionTypes.ADD_ALL_PLAYERS;
}

interface IDeletePlayerAction {
    type: ActionTypes.DELETE_PLAYER;
    colour: Colour;
}

interface ISetPlayerPositionAction {
    type: ActionTypes.SET_PLAYER_POSITION,
    newPosition: Position;
    colour: Colour;
}

// Action Combinator
type Action = ICreatePlayerAction |
    ISetPlayerPositionAction |
    IDeletePlayerAction |
    IResetAllPlayersAction |
    IAddAllPlayersAction;

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
    deletePlayer(colour: Colour): IDeletePlayerAction {
        return {
            type: ActionTypes.DELETE_PLAYER,
            colour: colour,
        }
    },
    setPlayerPosition(colour: Colour, newPosition: Position): ISetPlayerPositionAction {
        return {
            type: ActionTypes.SET_PLAYER_POSITION,
            colour: colour,
            newPosition: newPosition
        }
    },
    addAllPlayers(): IAddAllPlayersAction {
        return {
            type: ActionTypes.ADD_ALL_PLAYERS
        }
    }
}

// Sub-Reducers
function createPlayerAction(state: IPlayerState, action: ICreatePlayerAction): IPlayerState {
    const newPlayer: IPlayer = {
        name: action.name,
        position: Position.Unknown,
        colour: action.colour
    };

    if (newPlayer.name.length <= MAX_CHARACTER_NAME &&
        !state.players.some(x => x.colour === newPlayer.colour)) {
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
    if (state.players.some(x => x.colour === action.colour)) {
        return {
            ...state,
            players: state.players.filter(x => x.colour !== action.colour)
        }
    }

    return state;
}

function setPlayerPositionAction(state: IPlayerState, action: ISetPlayerPositionAction): IPlayerState {
    const existingPlayerIndex: number = state.players.findIndex(x => x.colour === action.colour);
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

function addAllPlayersAction(state: IPlayerState, action: IAddAllPlayersAction): IPlayerState {
    let updated = false;

    const newPlayers = [...state.players];
    Object.values(Colour).forEach(colour => {
        if (colour !== Colour.Unknown && !newPlayers.some(x => x.colour === colour)) {
            updated = true;

            const newPlayer: IPlayer = {
                name: '',
                position: Position.Unknown,
                colour: colour
            };

            newPlayers.push(newPlayer);
        }
    });

    if (updated) {
        return {
            ...state,
            players: newPlayers
        };
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
        case ActionTypes.ADD_ALL_PLAYERS:
            return addAllPlayersAction(state, action);
        default:
            return state;
    }
}
