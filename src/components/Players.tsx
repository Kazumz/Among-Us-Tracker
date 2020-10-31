import React from 'react';
import i18next from 'i18next';

import Section from './Section';
import { GetUnknownPlayers } from '../store/bundles/player-selectors';
import PlayersImage from '../assets/players.svg'

const Players: React.FC = () => {
    const players = GetUnknownPlayers();

    return (
        <div className="players">
            <Section
                title={i18next.t('players.title')}
                players={players}
                icon={PlayersImage}
                iconAlt={i18next.t('players.title')}
            />
        </div>
    );
}

export default Players;