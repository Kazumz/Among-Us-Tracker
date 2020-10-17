import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetUnknownPlayers } from '../store/bundles/player-selectors';

const Players: React.FC = () => {
    const players = GetUnknownPlayers();

    return (
        <div className="players">
            <Section
                title={i18next.t('players.title')}
                players={players}
            />
        </div>
    );
}

export default Players;