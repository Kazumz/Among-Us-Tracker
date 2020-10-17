import React from 'react';
import { useDispatch } from 'react-redux';
import Colour from '../enums/Colour';

import { actionCreators } from '../store/bundles/player-bundle';
import ComboBox from './ComboBox';

const Add: React.FC = () => {
    const dispatch = useDispatch();

    const [name, setName] = React.useState<string>('');
    const onChange = React.useCallback(
        (e) => {
            setName(e.target.value);
        },
        [],
    );

    const [colour, setColour] = React.useState<Colour>(Colour.Unknown);
    const onColourChange = React.useCallback(
        (e: React.ChangeEvent<HTMLSelectElement>) => {
            const colour: Colour = parseInt(e.target.value, 10);
            setColour(colour);
        },
        [],
    );

    const addPlayer = React.useCallback(() => {
        dispatch(actionCreators.createPlayer(name, colour));
    }, 
    [
        dispatch, 
        name, 
        colour
    ]);

    const addDisabled = name === '' || name === undefined || colour === Colour.Unknown;
    return (
        <div className="add">
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
                    [Colour.Black, 'Blue'],
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
        </div>
    );
}

export default Add;