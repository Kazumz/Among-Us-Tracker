import React from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';

import Colour from '../enums/Colour';
import { actionCreators } from '../store/bundles/player-bundle';
import { GetAllPlayers } from '../store/bundles/player-selectors';
import ComboBox from './ComboBox';
import Button from './Button';

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
            const colour: Colour = parseInt(e.target.value, 10);
            setColour(colour);
        },
        [],
    );

    const addPlayer = React.useCallback(() => {
        if (allPlayers.some(x => x.name === name)) {
            setErrorMessage(i18next.t('addNewPlayer.playerAlreadyExists'));
            return;
        }

        if (allPlayers.some(x => x.color === colour)) {
            setErrorMessage(i18next.t('addNewPlayer.colourAlreadyExists'));
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
        ]);

    const addDisabled = name === '' || name === undefined || colour === Colour.Unknown;
    return (
        <div className='add-new-player'>
            <h2>{i18next.t('addNewPlayer.title')}</h2>

            <input
                style={{minWidth: '0'}}
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
                options={new Map<number, string>([
                    [Colour.Unknown, i18next.t('addNewPlayer.playerColourSelect.unknown')],
                    [Colour.Black, i18next.t('addNewPlayer.playerColourSelect.black')],
                    [Colour.Blue, i18next.t('addNewPlayer.playerColourSelect.blue')],
                    [Colour.Brown, i18next.t('addNewPlayer.playerColourSelect.brown')],
                    [Colour.Cyan, i18next.t('addNewPlayer.playerColourSelect.cyan')],
                    [Colour.Green, i18next.t('addNewPlayer.playerColourSelect.green')],
                    [Colour.Lime, i18next.t('addNewPlayer.playerColourSelect.lime')],
                    [Colour.Orange, i18next.t('addNewPlayer.playerColourSelect.orange')],
                    [Colour.Pink, i18next.t('addNewPlayer.playerColourSelect.pink')],
                    [Colour.Purple, i18next.t('addNewPlayer.playerColourSelect.purple')],
                    [Colour.Red, i18next.t('addNewPlayer.playerColourSelect.red')],
                    [Colour.White, i18next.t('addNewPlayer.playerColourSelect.white')],
                    [Colour.Yellow, i18next.t('addNewPlayer.playerColourSelect.yellow')]
                ])}
            />

            <Button
                className='players__add'
                disabled={addDisabled}
                onClick={addPlayer}
                content={i18next.t('addNewPlayer.add')}
            />

            {errorMessage !== undefined &&
                <p role='alert'>
                    {errorMessage}
                </p>
            }
        </div>
    );
}

export default AddNewPlayer;