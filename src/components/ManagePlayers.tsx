import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';

import { GetAllPlayers } from '../store/bundles/player-selectors';
import ComboBox from './ComboBox';
import Button from './Button';
import { actionCreators } from '../store/bundles/player-bundle';

const ManagePlayers: React.FC = () => {
    const allPlayers = GetAllPlayers();
    const dispatch = useDispatch();

    const [player, setPlayer] = React.useState<number>(0);
    const onPlayerChange = React.useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const player: number = parseInt(e.target.value, 10);
            setPlayer(player);
        },
        [],
    );

    const removePlayer = React.useCallback(
        () => {
            const playerData = allPlayers[player];

            setPlayer(0);
            dispatch(actionCreators.deletePlayer(playerData.name));
        },
        [dispatch, allPlayers, player]
    );

    const resetAllPlayers = React.useCallback(
        () => dispatch(actionCreators.resetAllPlayers()),
        [dispatch]
    );

    const mappedPlayers = React.useMemo(
        () => {
            const map = new Map<number, string>();
            allPlayers.forEach((player, index) =>
                map.set(index, player.name)
            );

            if (map.size === 0) {
                map.set(0, i18next.t('managePlayers.selectPlaceholder'));
            }

            return map;
        },
        [allPlayers]
    );
    return (
        <div className='manage-players'>
            <h2>{i18next.t('managePlayers.title')}</h2>

            <ComboBox
                onChange={onPlayerChange}
                value={player}
                options={mappedPlayers}
            />

            <Button
                disabled={allPlayers.length === 0}
                onClick={removePlayer}
                content={i18next.t('managePlayers.removePlayer')}
            />

            <Button
                disabled={allPlayers.length === 0}
                onClick={resetAllPlayers}
                content={i18next.t('managePlayers.resetAllPlayers')}
            />
        </div>
    );
}

export default ManagePlayers;