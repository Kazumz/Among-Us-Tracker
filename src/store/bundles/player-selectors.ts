import React from "react";

import IPlayer from "../../interfaces/player";
import { useStateSelector } from "../useSelector";
import Position from '../../enums/Position';

export const GetAllPlayers = (): ReadonlyArray<IPlayer> => useStateSelector(state => state.playerState.players);

export const GetUnknownPlayers = (): ReadonlyArray<IPlayer> => GetFilteredPlayers(Position.Unknown)();
export const GetDeadPlayers = (): ReadonlyArray<IPlayer> => GetFilteredPlayers(Position.Dead)();
export const GetInnocentPlayers = (): ReadonlyArray<IPlayer> => GetFilteredPlayers(Position.Innocent)();
export const GetSuspiciousPlayers = (): ReadonlyArray<IPlayer> => GetFilteredPlayers(Position.Suspicious)();
export const GetImpostorPlayers = (): ReadonlyArray<IPlayer> => GetFilteredPlayers(Position.Impostor)();

const GetFilteredPlayers = (position: Position) => {
    return (): ReadonlyArray<IPlayer> => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [previousPlayers, setPreviousPlayers] = React.useState<ReadonlyArray<IPlayer>>([]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [filteredPlayers, setFilteredPlayers] = React.useState<ReadonlyArray<IPlayer>>([]);
    
        const allPlayers = GetAllPlayers();
    
        let returnValue = filteredPlayers;
        if (previousPlayers !== allPlayers) {
            setPreviousPlayers(allPlayers);
    
            const newFilteredPlayers = allPlayers.filter(x => x.position === position);
            setFilteredPlayers(newFilteredPlayers);
            returnValue = newFilteredPlayers;
        }
    
        return returnValue;
    }
};