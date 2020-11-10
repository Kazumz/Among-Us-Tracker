import Position from "../enums/Position";
import Colour from "../enums/Colour";

interface IPlayer {
    readonly name: string;
    readonly position: Position;
    readonly colour: Colour;
}

export default IPlayer;