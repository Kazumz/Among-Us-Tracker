import React from 'react';
import { useDispatch } from 'react-redux';

import { actionCreators } from '../store/bundles/player-bundle';

const Add: React.FC = () => {
    const dispatch = useDispatch();

    const [name, setName] = React.useState<string>('');
    const onChange = React.useCallback(
        (e) => {
            setName(e.target.value);
        },
        [],
    );

    const addPlayer = React.useCallback(() => dispatch(actionCreators.createPlayer(name)), [dispatch, name]);

    const addDisabled = name === '' || name === undefined;
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