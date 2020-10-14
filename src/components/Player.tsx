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
      <img
        className='player__icon'
        alt='I'
      />

      <span className='player__name'>{player.name}</span>

      <span className='player__nav'>
        <button className='player__nav-previous'>Next</button>

        <button className='player__nav-next'>Prev</button>
      </span>
    </div>
  );
}

export default Player;