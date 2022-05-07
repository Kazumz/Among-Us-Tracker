import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetImpostorPlayers } from '../store/bundles/player-selectors';
import ImpostorImage from '../assets/impostor.svg';
import Position from '../enums/Position';

const Impostor: React.FC = () => {
    const players = GetImpostorPlayers();

    return (
        <div className="impostor">
            <Section
                position={Position.Impostor}
                title={i18next.t('impostor.title')}
                players={players}
                icon={ImpostorImage}
                iconAlt={i18next.t('impostor.title')}
            />
        </div>
    );
}

export default Impostor;