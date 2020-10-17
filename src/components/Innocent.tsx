import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetInnocentPlayers } from '../store/bundles/player-selectors';

const Innocent: React.FC = () => {
    const players = GetInnocentPlayers();

    return (
        <div className="innocent">
            <Section
                title={i18next.t('innocent.title')}
                players={players}
            />
        </div>
    );
}

export default Innocent;