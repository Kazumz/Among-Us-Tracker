import React from 'react';
import i18next from 'i18next';

import '../styles/Main.scss';

import Add from '../components/Add';
import { getOrderedSections } from '../utilities/section-factory';
import ISectionInformation from '../interfaces/section-information';

const App: React.FC = () => {
  const sections: ReadonlyArray<ISectionInformation> = React.useMemo(
    () => getOrderedSections(),
    []
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1>{i18next.t('header.title')}</h1>
      </header>

      <main className="app__body">
        {sections.map(x => <x.component />)}

        <Add />
      </main>
    </div>
  );
}

export default App;
