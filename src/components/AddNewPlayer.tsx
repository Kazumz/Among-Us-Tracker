import React from 'react';
import { useDispatch } from 'react-redux';
import classnames from 'classnames';

import Colour from '../enums/Colour';
import { actionCreators } from '../store/bundles/player-bundle';
import { GetAllPlayers } from '../store/bundles/player-selectors';
import ComboBox from './ComboBox';

interface IAddNewPlayerProps {
    className?: string;
}

const AddNewPlayer: React.FC<IAddNewPlayerProps> = ({
    className,
}) => {
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
            setErrorMessage('Player already exists');
            return;
        }

        if (allPlayers.some(x => x.color === colour)) {
            setErrorMessage('Colour already exists');
            return;
        }

        setErrorMessage(undefined);
        dispatch(actionCreators.createPlayer(name, colour));
    },
        [
            dispatch,
            name,
            colour,
            allPlayers,
        ]);

    const addClassName: string = classnames('add', className);

    const addDisabled = name === '' || name === undefined || colour === Colour.Unknown;
    return (
        <div className={addClassName}>
            <h2>Add new Player</h2>

            <input
                name={'PlayerName'}
                placeholder='Player Name'
                value={name}
                type='text'
                onChange={onChange}
                aria-label='Player Name'
                autoComplete='on'
            />

            <ComboBox
                onChange={onColourChange}
                value={colour}
                options={new Map<number, string>([
                    [Colour.Unknown, 'Unknown'],
                    [Colour.Black, 'Black'],
                    [Colour.Blue, 'Blue'],
                    [Colour.Brown, 'Brown'],
                    [Colour.Cyan, 'Cyan'],
                    [Colour.Green, 'Green'],
                    [Colour.Lime, 'Lime'],
                    [Colour.Orange, 'Orange'],
                    [Colour.Pink, 'Pink'],
                    [Colour.Purple, 'Purple'],
                    [Colour.Red, 'Red'],
                    [Colour.White, 'White'],
                    [Colour.Yellow, 'Yellow']
                ])}
            />

            <button
                disabled={addDisabled}
                aria-disabled={addDisabled}
                onClick={addPlayer}
                className='players__add'
            >
                Add
            </button>

            {errorMessage !== undefined &&
                <p role='alert'>
                    {errorMessage}
                </p>
            }
        </div>
    );
}

export default AddNewPlayer;