import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetDeadPlayers } from '../store/bundles/player-selectors';

const Dead: React.FC = () => {
    const players = GetDeadPlayers();

    return (
        <div className="dead">
            <Section
                title={i18next.t('dead.title')}
                players={players}
            />
        </div>
    );
}

export default Dead;