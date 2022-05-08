import React from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';

import Colour from '../enums/Colour';
import { actionCreators } from '../store/bundles/player-bundle';
import { GetAllPlayers } from '../store/bundles/player-selectors';
import ComboBox from './ComboBox';
import Button from './Button';
import { MAX_CHARACTER_NAME } from '../constants/player-constants';

const AddNewPlayer: React.FC = () => {
    const dispatch = useDispatch();
    const allPlayers = GetAllPlayers();

    const [errorMessage, setErrorMessage] = React.useState<string | undefined>(undefined);
    const [colour, setColour] = React.useState<Colour>(Colour.Unknown);
    const [name, setName] = React.useState<string>('');

    const onChange = React.useCallback(
        (e) => {
            setName(e.target.value);
        },
        [],
    );

    const onColourChange = React.useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const colour: Colour = e.target.value as Colour;
            setColour(colour);
        },
        [],
    );

    const addPlayer = React.useCallback(() => {
            if (allPlayers.some(x => x.colour === colour)) {
                setErrorMessage(i18next.t('addNewPlayer.colourAlreadyExists'));
                return;
            }

            if (name.length > MAX_CHARACTER_NAME) {
                setErrorMessage(i18next.t('addNewPlayer.nameLength'));
                return;
            }

            setErrorMessage(undefined);
            setColour(Colour.Unknown);
            setName('');
            dispatch(actionCreators.createPlayer(name, colour));
        },
        [
            dispatch,
            name,
            colour,
            allPlayers,
        ]
    );

    const addAllPlayers = React.useCallback(
        () => {
            dispatch(actionCreators.addAllPlayers());
        },
        [
            dispatch
        ]
    );

    const addDisabled = colour === Colour.Unknown;
    return (
        <div className='add-new-player'>
            <h2>{i18next.t('addNewPlayer.title')}</h2>

            <input
                style={{ minWidth: '0' }}
                name={'PlayerName'}
                placeholder={i18next.t('addNewPlayer.playerNameField.placeholder')}
                value={name}
                type='text'
                onChange={onChange}
                aria-label={i18next.t('addNewPlayer.playerNameField.placeholder')}
                autoComplete='on'
            />

            <ComboBox
                onChange={onColourChange}
                value={colour}
                options={new Map<string, string>([
                    [Colour.Unknown, i18next.t('playerColour.unknown')],
                    [Colour.Black, i18next.t('playerColour.black')],
                    [Colour.Blue, i18next.t('playerColour.blue')],
                    [Colour.Brown, i18next.t('playerColour.brown')],
                    [Colour.Cyan, i18next.t('playerColour.cyan')],
                    [Colour.Green, i18next.t('playerColour.green')],
                    [Colour.Lime, i18next.t('playerColour.lime')],
                    [Colour.Orange, i18next.t('playerColour.orange')],
                    [Colour.Pink, i18next.t('playerColour.pink')],
                    [Colour.Purple, i18next.t('playerColour.purple')],
                    [Colour.Red, i18next.t('playerColour.red')],
                    [Colour.White, i18next.t('playerColour.white')],
                    [Colour.Yellow, i18next.t('playerColour.yellow')],
                    [Colour.Banana, i18next.t('playerColour.banana')],
                    [Colour.Coral, i18next.t('playerColour.coral')],
                    [Colour.Grey, i18next.t('playerColour.grey')],
                    [Colour.Maroon, i18next.t('playerColour.maroon')],
                    [Colour.Rose, i18next.t('playerColour.rose')],
                    [Colour.Tan, i18next.t('playerColour.tan')],
                ])}
            />

            <Button
                disabled={addDisabled}
                onClick={addPlayer}
                content={i18next.t('addNewPlayer.add')}
            />

            <Button
                onClick={addAllPlayers}
                content={i18next.t('addNewPlayer.addAll')}
            />

            {errorMessage !== undefined &&
                <p className='add-new-player__error' role='alert'>
                    {errorMessage}
                </p>
            }
        </div>
    );
}

export default AddNewPlayer;