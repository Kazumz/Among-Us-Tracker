import React from 'react';
import { useDispatch } from 'react-redux';
import i18next from 'i18next';

import Colour from '../enums/Colour';
import { actionCreators } from '../store/bundles/player-bundle';
import { GetAllPlayers } from '../store/bundles/player-selectors';
import ComboBox, { IComboBoxOption } from './ComboBox';
import Button from './Button';
// import { MAX_CHARACTER_NAME } from '../constants/player-constants';

const AddNewPlayer: React.FC = () => {
    const dispatch = useDispatch();
    const allPlayers = GetAllPlayers();

    // const [errorMessage, setErrorMessage] = React.useState<string | undefined>(undefined);
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
        // if (allPlayers.some(x => x.colour === colour)) {
        //     setErrorMessage(i18next.t('addNewPlayer.colourAlreadyExists'));
        //     return;
        // }

        // if (name.length > MAX_CHARACTER_NAME) {
        //     setErrorMessage(i18next.t('addNewPlayer.nameLength'));
        //     return;
        // }

        // setErrorMessage(undefined);
        setColour(Colour.Unknown);
        setName('');
        dispatch(actionCreators.createPlayer(name, colour));
    },
        [
            dispatch,
            name,
            colour,
            // allPlayers,
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

    const createComboBoxOptions = React.useCallback(
        // TODO: possibly a more efficient way of doing this
        () => {
            function createOption(key: string, label: string): IComboBoxOption {
                return {
                    disabled: allPlayers.some(x => x.colour === key),
                    label: label,
                    // TODO: create i18n format
                    disabledLabel: `${label} (already used)`
                }
            }

            const options = new Map<string, IComboBoxOption>();
            options.set(Colour.Unknown, createOption(Colour.Unknown, i18next.t('playerColour.unknown')));
            options.set(Colour.Black, createOption(Colour.Black, i18next.t('playerColour.black')));
            options.set(Colour.Blue, createOption(Colour.Blue, i18next.t('playerColour.blue')));
            options.set(Colour.Brown, createOption(Colour.Brown, i18next.t('playerColour.brown')));
            options.set(Colour.Cyan, createOption(Colour.Cyan, i18next.t('playerColour.cyan')));
            options.set(Colour.Green, createOption(Colour.Green, i18next.t('playerColour.green')));
            options.set(Colour.Lime, createOption(Colour.Lime, i18next.t('playerColour.lime')));
            options.set(Colour.Orange, createOption(Colour.Orange, i18next.t('playerColour.orange')));
            options.set(Colour.Pink, createOption(Colour.Pink, i18next.t('playerColour.pink')));
            options.set(Colour.Purple, createOption(Colour.Purple, i18next.t('playerColour.purple')));
            options.set(Colour.Red, createOption(Colour.Red, i18next.t('playerColour.red')));
            options.set(Colour.White, createOption(Colour.White, i18next.t('playerColour.white')));
            options.set(Colour.Yellow, createOption(Colour.Yellow, i18next.t('playerColour.yellow')));

            return options;
        },
        [allPlayers]
    )

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
                options={createComboBoxOptions()}
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

            {/* {errorMessage !== undefined &&
                <p className='add-new-player__error' role='alert'>
                    {errorMessage}
                </p>
            } */}
        </div>
    );
}

export default AddNewPlayer;