import { combineReducers } from 'redux';

import playerReducer from './bundles/player-bundle';

export default combineReducers({
    playerState: playerReducer,
});
