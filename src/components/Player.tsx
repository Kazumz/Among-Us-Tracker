import React from 'react';
import IPlayer from '../interfaces/player';

interface IPlayerProps {
  player: IPlayer;
}

const Player: React.FC<IPlayerProps> = ({
  player
}) => {
  return (
    <div className="player">
      <span className='player__name'>{player.name}</span>
    </div>
  );
}

export default Player;