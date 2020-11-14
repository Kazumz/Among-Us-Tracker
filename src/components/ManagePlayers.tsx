import React from 'react';
import i18next from 'i18next';
import { useDispatch } from 'react-redux';

import { GetAllPlayers } from '../store/bundles/player-selectors';
import ComboBox, { IComboBoxOption } from './ComboBox';
import Button from './Button';
import { actionCreators } from '../store/bundles/player-bundle';
import Colour from '../enums/Colour';

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
            dispatch(actionCreators.deletePlayer(playerData.colour));
        },
        [dispatch, allPlayers, player]
    );

    const resetAllPlayers = React.useCallback(
        () => dispatch(actionCreators.resetAllPlayers()),
        [dispatch]
    );

    const mappedPlayers = React.useMemo(
        () => {
            const map = new Map<number, IComboBoxOption>();
            allPlayers.forEach((player, index) =>
                map.set(index, { label: `${getPlayerColourText(player.colour)} ${player.name !== undefined && player.name !== '' ? `(${player.name})` : ``}`})
            );

            if (map.size === 0) {
                map.set(0, { label: i18next.t('managePlayers.selectPlaceholder')});
            }

            console.log(`*** ${allPlayers.length}`, map);

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

function getPlayerColourText(colour: Colour): string {
    switch (colour) {
        case Colour.Unknown: return i18next.t('playerColour.unknown');
        case Colour.Black: return i18next.t('playerColour.black');
        case Colour.Blue: return i18next.t('playerColour.blue');
        case Colour.Brown: return i18next.t('playerColour.brown');
        case Colour.Cyan: return i18next.t('playerColour.cyan');
        case Colour.Green: return i18next.t('playerColour.green');
        case Colour.Lime: return i18next.t('playerColour.lime');
        case Colour.Orange: return i18next.t('playerColour.orange');
        case Colour.Pink: return i18next.t('playerColour.pink');
        case Colour.Purple: return i18next.t('playerColour.purple');
        case Colour.Red: return i18next.t('playerColour.red');
        case Colour.White: return i18next.t('playerColour.white');
        case Colour.Yellow: return i18next.t('playerColour.yellow');

        default:
            return '';
    }
}

export default ManagePlayers;