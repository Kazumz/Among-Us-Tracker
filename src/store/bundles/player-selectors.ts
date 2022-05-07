import React from "react";

import IPlayer from "../../interfaces/player";
import { useStateSelector } from "../useSelector";
import Position from '../../enums/Position';

export const GetAllPlayers = (): ReadonlyArray<IPlayer> => useStateSelector(state => state.playerState.players);

export const GetUnknownPlayers = (): ReadonlyArray<IPlayer> => useGetFilteredPlayers(Position.Unknown);
export const GetDeadPlayers = (): ReadonlyArray<IPlayer> => useGetFilteredPlayers(Position.Dead);
export const GetInnocentPlayers = (): ReadonlyArray<IPlayer> => useGetFilteredPlayers(Position.Innocent);
export const GetSuspiciousPlayers = (): ReadonlyArray<IPlayer> => useGetFilteredPlayers(Position.Suspicious);
export const GetImpostorPlayers = (): ReadonlyArray<IPlayer> => useGetFilteredPlayers(Position.Impostor);

const useGetFilteredPlayers = (position: Position) => {
    const [previousPlayers, setPreviousPlayers] = React.useState<ReadonlyArray<IPlayer>>([]);
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
};