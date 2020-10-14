import React from 'react';
import i18next from 'i18next';

import Section from './Section';

const Innocent: React.FC = () => {
    return (
        <div className="innocent">
            <Section
                title={i18next.t('innocent.title')}
            />
        </div>
    );
}

export default Innocent;