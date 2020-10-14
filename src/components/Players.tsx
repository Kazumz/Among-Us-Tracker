import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import IPlayer from '../interfaces/player';

const Players: React.FC = () => {
    const examplePlayers: ReadonlyArray<IPlayer> = [
        { name: 'Test 1'},
        { name: 'Test 2'},
        { name: 'Test 3'},
        { name: 'Test 4'},
        { name: 'Test 5'},
        { name: 'Test 6'},
        { name: 'Test 7'},
        { name: 'Test 8'},
        { name: 'Test 9'},
        { name: 'Test 10'},
    ]

    return (
        <div className="players">
            <Section
                title={i18next.t('players.title')}
                players={examplePlayers}
            />
        </div>
    );
}

export default Players;