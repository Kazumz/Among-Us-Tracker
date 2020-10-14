import React from 'react';

import IPlayer from '../interfaces/player';
import Player from './Player';

interface ISectionProps {
  title: string;
  players?: ReadonlyArray<IPlayer>;
}

const Section: React.FC<ISectionProps> = ({
  title,
  players
}) => {
  const playerElements = React.useMemo(
    () => players !== undefined ? players.map(x =>
      <li className='section__player-list-item'>
        <Player player={x} />
      </li>
    ) : [],
    [
      players
    ]
  );

  return (
    <div className="section">
      <h3>{title}</h3>

      <ul className='section__player-list'>
        {playerElements}
      </ul>
    </div>
  );
}

export default Section;