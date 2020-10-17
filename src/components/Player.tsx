import React from 'react';
import classnames from 'classnames';

import Colour from '../enums/Colour';
import IPlayer from '../interfaces/player';
import Black from '../assets/black_character.png'
import Blue from '../assets/blue_character.png'
import Cyan from '../assets/cyan_character.png'
import Green from '../assets/green_character.png'
import Lime from '../assets/lime_character.png'
import Orange from '../assets/orange_character.png'
import Pink from '../assets/pink_character.png'
import Purple from '../assets/purple_character.png'
import Red from '../assets/red_character.png'
import White from '../assets/white_character.png'
import Yellow from '../assets/yellow_character.png'
import Brown from '../assets/brown_character.png'

interface IPlayerProps {
  player: IPlayer;
}

const Player: React.FC<IPlayerProps> = ({
  player
}) => {
  const playerClassName: string = classnames('player', {
    'player--black': player.color === Colour.Black,
    'player--blue': player.color === Colour.Blue,
    'player--brown': player.color === Colour.Brown,
    'player--cyan': player.color === Colour.Cyan,
    'player--green': player.color === Colour.Green,
    'player--lime': player.color === Colour.Lime,
    'player--orange': player.color === Colour.Orange,
    'player--pink': player.color === Colour.Pink,
    'player--purple': player.color === Colour.Purple,
    'player--red': player.color === Colour.Red,
    'player--white': player.color === Colour.White,
    'player--yellow': player.color === Colour.Yellow,
  });

  return (
    <div className={playerClassName}>
      {getCharacterImage(player.color)}

      <span className='player__name'>{player.name}</span>

      <span className='player__nav'>
        <button className='player__nav-previous'>Next</button>

        <button className='player__nav-next'>Prev</button>
      </span>
    </div>
  );
}

function getCharacterImage(colour: Colour): JSX.Element | null {
  switch (colour) {
    case Colour.Black:
      return (
        <img
          className='player__icon'
          alt='Black Among Us Character'
          src={Black}
        />
      );

    case Colour.Blue:
      return (
        <img
          className='player__icon'
          alt='Blue Among Us Character'
          src={Blue}
        />
      );

    case Colour.Brown:
      return (
        <img
          className='player__icon'
          alt='Brown Among Us Character'
          src={Brown}
        />
      );

    case Colour.Cyan:
      return (
        <img
          className='player__icon'
          alt='Cyan Among Us Character'
          src={Cyan}
        />
      );

    case Colour.Green:
      return (
        <img
          className='player__icon'
          alt='Green Among Us Character'
          src={Green}
        />
      );

    case Colour.Lime:
      return (
        <img
          className='player__icon'
          alt='Lime Among Us Character'
          src={Lime}
        />
      );

    case Colour.Orange:
      return (
        <img
          className='player__icon'
          alt='Orange Among Us Character'
          src={Orange}
        />
      );

    case Colour.Pink:
      return (
        <img
          className='player__icon'
          alt='Pink Among Us Character'
          src={Pink}
        />
      );

    case Colour.Purple:
      return (
        <img
          className='player__icon'
          alt='Purple Among Us Character'
          src={Purple}
        />
      );

    case Colour.Red:
      return (
        <img
          className='player__icon'
          alt='Red Among Us Character'
          src={Red}
        />
      );

    case Colour.White:
      return (
        <img
          className='player__icon'
          alt='White Among Us Character'
          src={White}
        />
      );

    case Colour.Yellow:
      return (
        <img
          className='player__icon'
          alt='Yellow Among Us Character'
          src={Yellow}
        />
      );

    default:
      return null;
  }
}

export default Player;