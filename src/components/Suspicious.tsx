import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetSuspiciousPlayers } from '../store/bundles/player-selectors';

const Suspicious: React.FC = () => {
    const players = GetSuspiciousPlayers();

    return (
        <div className="suspicious">
            <Section
                title={i18next.t('suspicious.title')}
                players={players}
            />
        </div>
    );
}

export default Suspicious;