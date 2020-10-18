import React from 'react';
import { useDispatch } from 'react-redux';

import IPlayer from '../interfaces/player';
import { actionCreators } from '../store/bundles/player-bundle';
import {
  getNextPosition,
  getPreviousPosition
} from '../utilities/position-utilities';
import Player from './Player';

interface ISectionProps {
  title: string;
  players?: ReadonlyArray<IPlayer>;
}

const Section: React.FC<ISectionProps> = ({
  title,
  players
}) => {
  const dispatch = useDispatch();

  const playerElements = React.useMemo(
    () => players !== undefined ? players.map(x =>
      <li className='section__player-list-item'>
        <Player
          player={x}
          prevCallback={() => dispatch(actionCreators.setPlayerPosition(x.name, getPreviousPosition(x.position)))}
          nextCallback={() => dispatch(actionCreators.setPlayerPosition(x.name, getNextPosition(x.position)))}
        />
      </li>
    ) : [],
    [
      players,
      dispatch
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