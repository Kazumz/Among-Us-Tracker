import IPlayer from "../interfaces/player";
import { ISaveSessionRequest, mapPlayerToPlayerRequest } from "../interfaces/save-session-request";
import { post } from "../utilities/http-utils";

const SESSION_URL: string = 'https://kp-global-apim.azure-api.net/';

export async function createUpdateSession(
    sessionId: string | undefined,
    players: ReadonlyArray<IPlayer>
): Promise<string> {
    const url: string = `${SESSION_URL}au-create-session/createsession/`;
    const body: ISaveSessionRequest = {
        sessionId: sessionId,
        players: players.map(x => mapPlayerToPlayerRequest(x))
    }

    const response = await post(url, body);

    return response;
}