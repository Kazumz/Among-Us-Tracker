import { createUpdateSession } from "../data-services/session-data-service";
import IPlayer from "../interfaces/player";

export function saveSession(allPlayers: ReadonlyArray<IPlayer>): void {
    // Set Loading

    createUpdateSession(undefined, allPlayers)
        .then(sessionId => {
            console.log(`saveSession.sessionId: ${sessionId}`);

            // Set Loading
        })
        .catch(e => {
            // Set Loading
        });
}