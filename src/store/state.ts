import { IApplicationState } from "./bundles/application-bundle";
import { IPlayerState } from "./bundles/player-bundle";
import { ISessionState } from "./bundles/session-bundle";

interface IState {
    readonly playerState: IPlayerState;
    readonly applicationState: IApplicationState;
    readonly sessionState: ISessionState;
}

export default IState;