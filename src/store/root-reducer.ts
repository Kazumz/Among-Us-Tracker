import { combineReducers } from 'redux';

import playerReducer from './bundles/player-bundle';
import applicationReducer from './bundles/application-bundle';
import sessionReducer from './bundles/session-bundle';

export default combineReducers({
    playerState: playerReducer,
    applicationState: applicationReducer,
    sessionState: sessionReducer
});
