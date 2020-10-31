import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetDeadPlayers } from '../store/bundles/player-selectors';
import DeadImage from '../assets/dead.svg';

const Dead: React.FC = () => {
    const players = GetDeadPlayers();

    return (
        <div className="dead">
            <Section
                title={i18next.t('dead.title')}
                players={players}
                icon={DeadImage}
                iconAlt={i18next.t('dead.title')}
            /> 
        </div>
    );
}

export default Dead;