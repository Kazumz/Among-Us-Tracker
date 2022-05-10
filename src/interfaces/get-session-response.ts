import Colour from "../enums/Colour";
import Position from "../enums/Position";
import IPlayer from "./player";

export interface IPlayerResponse {
    readonly name: string;
    readonly position: number;
    readonly colour: number;
}

export function mapPlayerResponseToPlayer(player: IPlayerResponse): IPlayer {
    return {
        name: player.name,
        colour: mapColour(player.colour),
        position: mapPosition(player.position)
    };
}

function mapPosition(position: number): Position {
    switch (position) {
        case 0:
            return Position.Unknown;
        case 1:
            return Position.Impostor;
        case 2:
            return Position.Suspicious;
        case 3:
            return Position.Innocent;
        case 4:
            return Position.Dead;

        default:
            return Position.Unknown;
    }
}

function mapColour(colour: number): Colour {
    switch (colour) {
        case 0:
            return Colour.Unknown;
        case 1:
            return Colour.Black;
        case 2:
            return Colour.Blue;
        case 3:
            return Colour.Brown;
        case 4:
            return Colour.Cyan;
        case 5:
            return Colour.Green;
        case 6:
            return Colour.Lime;
        case 7:
            return Colour.Orange;
        case 8:
            return Colour.Pink;
        case 9:
            return Colour.Purple;
        case 10:
            return Colour.Red;
        case 11:
            return Colour.White;
        case 12:
            return Colour.Yellow;
        case 13:
            return Colour.Banana;
        case 14:
            return Colour.Coral;
        case 15:
            return Colour.Grey;
        case 16:
            return Colour.Maroon;
        case 17:
            return Colour.Rose;
        case 18:
            return Colour.Tan;

        default:
            return Colour.Unknown;
    }
}