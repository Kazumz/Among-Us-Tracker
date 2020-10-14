import React from 'react';
import i18next from 'i18next';

import Section from './Section';

const Suspicious: React.FC = () => {
    return (
        <div className="suspicious">
            <Section
                title={i18next.t('suspicious.title')}
            />
        </div>
    );
}

export default Suspicious;