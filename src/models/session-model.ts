import { createUpdateSession } from "../data-services/session-data-service";
import IPlayer from "../interfaces/player";
import {
    addSessionIdToUrl,
    getSessionIdFromUrl
} from "../utilities/url-utilities";

export function saveSession(allPlayers: ReadonlyArray<IPlayer>): void {
    // Set Loading

    createUpdateSession(getSessionIdFromUrl(), allPlayers)
        .then(sessionId => {
            addSessionIdToUrl(sessionId);

            // Set Loading
        })
        .catch(e => {
            // Set Loading
        });
}