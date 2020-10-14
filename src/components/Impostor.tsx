import React from 'react';
import i18next from 'i18next';

import Section from './Section';

const Impostor: React.FC = () => {
    return (
        <div className="impostor">
            <Section
                title={i18next.t('impostor.title')}
            />
        </div>
    );
}

export default Impostor;