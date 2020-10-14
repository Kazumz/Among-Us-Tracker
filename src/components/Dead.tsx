import React from 'react';
import i18next from 'i18next';

import Section from './Section';

const Dead: React.FC = () => {
    return (
        <div className="dead">
            <Section
                title={i18next.t('dead.title')}
            />
        </div>
    );
}

export default Dead;