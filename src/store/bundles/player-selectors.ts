import Category from "../../enums/category";
import IPlayer from "../../interfaces/player";
import { useStateSelector } from "../useSelector";

export const GetPlayers = (): ReadonlyArray<IPlayer> => useStateSelector(state => state.playerState.players.filter(x => x.category === Category.Unknown));