import i18next from 'i18next';

import {
    createUpdateSession,
    getSession
} from "../data-services/session-data-service";
import IPlayer from "../interfaces/player";
import { actionCreators as applicationActionCreators } from "../store/bundles/application-bundle";
import { actionCreators as sessionActionCreators } from "../store/bundles/session-bundle";
import { actionCreators as playerActionCreators } from "../store/bundles/player-bundle";
import dispatch from "../store/dispatch";
import {
    addSessionIdToUrl,
    getSessionIdFromUrl
} from "../utilities/url-utilities";

export function saveSession(allPlayers: ReadonlyArray<IPlayer>): void {
    dispatch(applicationActionCreators.setLoading(true));
    dispatch(sessionActionCreators.setError(false));

    createUpdateSession(getSessionIdFromUrl(), allPlayers)
        .then(sessionId => {
            addSessionIdToUrl(sessionId);

            dispatch(applicationActionCreators.setLoading(false));

            alert(i18next.t('savePlayers.alert'))
        })
        .catch(e => {
            dispatch(applicationActionCreators.setLoading(false));
            dispatch(sessionActionCreators.setError(true));
        });
}

export function loadSession(): void {
    const sessionId = getSessionIdFromUrl()

    if (sessionId !== null && sessionId !== undefined) {
        dispatch(applicationActionCreators.setLoading(true));

        getSession(sessionId)
            .then(players => {
                dispatch(playerActionCreators.restorePlayers(players));
                dispatch(applicationActionCreators.setLoading(false));
            })
            .catch(e => {
                dispatch(applicationActionCreators.setLoading(false));
            });
    }
}