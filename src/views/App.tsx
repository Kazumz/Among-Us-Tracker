import React from 'react';
import i18next from 'i18next';

import '../styles/Main.scss';

import {
  getComponent,
  getPositionSortOrder
} from '../utilities/position-utilities';
import Position from '../enums/Position';
import Management from '../components/Management';

const App: React.FC = () => {
  const sections: ReadonlyArray<React.FunctionComponent> = React.useMemo(
    () => {
      return Object.values(Position)
        .sort((a, b) => {
          const firstPosition = getPositionSortOrder(a) ?? 0;
          const secondPosition = getPositionSortOrder(b) ?? 0;

          return firstPosition > secondPosition ? 1 : -1
        })
        .map(key => getComponent(key));
    },
    []
  );

  return (
    <div className="app">
      <div className="app__inner">
        <header className="app__header">
          <h1>{i18next.t('app.title')}</h1>

          <a
            className='app__source-code'
            href="https://github.com/Kazumz/Among-Us-Tracker"
            rel="noreferrer noopener"
            target="_blank"
          >
            {i18next.t('app.sourceCode')}
          </a>
        </header>

        <p className="app__information">{i18next.t('app.information')}</p>

        <main className="app__body">
          <div className='app-body__sections'>
            {sections.map(Section => <Section />)}
          </div>

          <Management />
        </main>
      </div>
    </div>
  );
}

export default App;
