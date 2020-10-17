import Position from "../enums/Position";
import Colour from "../enums/Colour";

interface IPlayer {
    readonly name: string;
    readonly position: Position;
    readonly color: Colour;
}

export default IPlayer;