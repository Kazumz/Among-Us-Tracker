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
    () => Object.values(Position).sort(key => getPositionSortOrder(key) ?? -1).map(key => getComponent(key)),
    []
  );

  return (
    <div className="app">
      <div className="app__inner">
        <header className="app__header">
          <h1>{i18next.t('header.title')}</h1>
        </header>

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
