import React from 'react';
import i18next from 'i18next';

import Button from './Button';
import { saveSession } from '../models/session-model';
import { GetAllPlayers } from '../store/bundles/player-selectors';

const SavePlayers: React.FC = () => {
    const allPlayers = GetAllPlayers();
    const saveSessionCallback = React.useCallback(() => saveSession(allPlayers), [allPlayers]);

    return (
        <div className='save-players'>
            <h2>{i18next.t('savePlayers.title')}</h2>

            <Button
                onClick={saveSessionCallback}
                content={i18next.t('savePlayers.save')}
            />
        </div>
    );
}

export default SavePlayers;