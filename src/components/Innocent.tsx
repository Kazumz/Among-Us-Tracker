import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetInnocentPlayers } from '../store/bundles/player-selectors';
import InnocentImg from '../assets/innocent.svg'
import Position from '../enums/Position';

const Innocent: React.FC = () => {
    const players = GetInnocentPlayers();

    return (
        <div className="innocent">
            <Section
                position={Position.Innocent}
                title={i18next.t('innocent.title')}
                players={players}
                icon={InnocentImg}
                iconAlt={i18next.t('innocent.title')}
            />
        </div>
    );
}

export default Innocent;