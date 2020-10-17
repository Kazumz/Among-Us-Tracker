import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetImpostorPlayers } from '../store/bundles/player-selectors';

const Impostor: React.FC = () => {
    const players = GetImpostorPlayers();

    return (
        <div className="impostor">
            <Section
                title={i18next.t('impostor.title')}
                players={players}
            />
        </div>
    );
}

export default Impostor;