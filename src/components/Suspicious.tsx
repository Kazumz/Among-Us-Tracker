import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetSuspiciousPlayers } from '../store/bundles/player-selectors';
import SuspiciousImg from '../assets/suspicious.svg';
import Position from '../enums/Position';

const Suspicious: React.FC = () => {
    const players = GetSuspiciousPlayers();

    return (
        <div className="suspicious">
            <Section
                position={Position.Suspicious}
                title={i18next.t('suspicious.title')}
                players={players}
                icon={SuspiciousImg}
                iconAlt={i18next.t('suspicious.title')}
            />
        </div>
    );
}

export default Suspicious;