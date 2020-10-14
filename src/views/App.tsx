import React from 'react';
import i18next from 'i18next';

import '../styles/Main.scss';

import Innocent from '../components/Innocent';
import Suspicious from '../components/Suspicious';
import Impostor from '../components/Impostor';
import Dead from '../components/Dead';
import Players from '../components/Players';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1>{i18next.t('header.title')}</h1>
      </header>

      <main className="app__body">
        <Impostor />

        <Suspicious />

        <Innocent />

        <Dead />

        <Players />
      </main>

      <footer className="app__footer">
        {i18next.t('footer.createdBy')}
      </footer>
    </div>
  );
}

export default App;
