import Colour from "../enums/Colour";
import Position from "../enums/Position";
import IPlayer from "./player";

export interface ISaveSessionRequest {
    readonly sessionId: string | undefined;
    readonly players: ReadonlyArray<IPlayerRequest>;
};

interface IPlayerRequest {
    readonly name: string;
    readonly colour: number;
    readonly position: number;
}

export function mapPlayerToPlayerRequest(player: IPlayer): IPlayerRequest {
    return {
        name: player.name,
        colour: mapColour(player.colour),
        position: mapPosition(player.position)
    };
}

function mapPosition(position: Position): number {
    switch (position) {
        case Position.Unknown:
            return 0;
        case Position.Impostor:
            return 1;
        case Position.Suspicious:
            return 2;
        case Position.Innocent:
            return 3;
        case Position.Dead:
            return 4;

        default:
            return -1;
    }
}

function mapColour(colour: Colour): number {
    switch (colour) {
        case Colour.Unknown:
            return 0;
        case Colour.Black:
            return 1;
        case Colour.Blue:
            return 2;
        case Colour.Brown:
            return 3;
        case Colour.Cyan:
            return 4;
        case Colour.Green:
            return 5;
        case Colour.Lime:
            return 6;
        case Colour.Orange:
            return 7;
        case Colour.Pink:
            return 8;
        case Colour.Purple:
            return 9;
        case Colour.Red:
            return 10;
        case Colour.White:
            return 11;
        case Colour.Yellow:
            return 12;
        case Colour.Banana:
            return 13;
        case Colour.Coral:
            return 14;
        case Colour.Grey:
            return 15;
        case Colour.Maroon:
            return 16;
        case Colour.Rose:
            return 17;
        case Colour.Tan:
            return 18;
            
        default:
            return -1;
    }
}