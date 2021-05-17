import {
    mapPlayerResponseToPlayer,
    IPlayerResponse
} from "../interfaces/get-session-response";
import IPlayer from "../interfaces/player";
import {
    ISaveSessionRequest,
    mapPlayerToPlayerRequest
} from "../interfaces/save-session-request";
import { ISaveSessionResponse } from "../interfaces/save-session-response";
import {
    get,
    post
} from "../utilities/http-utilities";

const SESSION_URL: string = 'https://kp-cons-apim.azure-api.net/';

export async function createUpdateSession(
    sessionId: string | undefined,
    players: ReadonlyArray<IPlayer>
): Promise<string> {
    const url: string = `${SESSION_URL}au-create-session/createsession`;
    const body: ISaveSessionRequest = {
        sessionId: sessionId,
        players: players.map(x => mapPlayerToPlayerRequest(x))
    }

    const response: ISaveSessionResponse = await post(url, body);
    return response.sessionId;
}

export async function getSession(sessionId: string): Promise<ReadonlyArray<IPlayer>> {
    const url: string = `${SESSION_URL}au-get-session/GetSession?sessionId=${sessionId}`;
    const response: ReadonlyArray<IPlayerResponse> = await get(url);
    return response.map(x => mapPlayerResponseToPlayer(x));
}