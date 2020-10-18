import React from 'react';
import i18next from 'i18next';

import '../styles/Main.scss';

import Add from '../components/Add';
import {
  getComponent,
  getPositionSortOrder
} from '../utilities/position-utilities';
import Position from '../enums/Position';

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
          {sections.map(Section => <Section />)}

          <Add className='app-body__add' />
        </main>
      </div>
    </div>
  );
}

export default App;
