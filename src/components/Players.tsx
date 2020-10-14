import React from 'react';
import i18next from 'i18next';

import Section from './Section';

const Players: React.FC = () => {
    return (
        <div className="players">
            <Section
                title={i18next.t('players.title')}
            />
        </div>
    );
}

export default Players;