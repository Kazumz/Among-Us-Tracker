import React from 'react';
import i18next from 'i18next';

import '../styles/Main.scss';

import Add from '../components/Add';
import { getAllComponents } from '../utilities/position-utilities';

const App: React.FC = () => {
  const sections: ReadonlyArray<React.FunctionComponent> = React.useMemo(
    () => getAllComponents(),
    []
  );

  return (
    <div className="app">
      <header className="app__header">
        <h1>{i18next.t('header.title')}</h1>
      </header>

      <main className="app__body">
        {sections.map(Section => <Section />)}

        <Add />
      </main>
    </div>
  );
}

export default App;
