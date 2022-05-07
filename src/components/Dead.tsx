import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetDeadPlayers } from '../store/bundles/player-selectors';
import DeadImage from '../assets/dead.svg';
import Position from '../enums/Position';

const Dead: React.FC = () => {
    const players = GetDeadPlayers();

    return (
        <div className="dead">
            <Section
                position={Position.Dead}
                title={i18next.t('dead.title')}
                players={players}
                icon={DeadImage}
                iconAlt={i18next.t('dead.title')}
            /> 
        </div>
    );
}

export default Dead;