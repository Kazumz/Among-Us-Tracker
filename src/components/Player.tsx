import React from 'react';
import classnames from 'classnames';
import i18next from 'i18next';

import Colour from '../enums/Colour';
import IPlayer from '../interfaces/player';
import Banana from '../assets/banana_character.png'
import Coral from '../assets/coral_character.png'
import Grey from '../assets/grey_character.png'
import Maroon from '../assets/maroon_character.png'
import Rose from '../assets/rose_character.png'
import Tan from '../assets/tan_character.png'
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
import UpArrow from '../assets/up-arrow-triangle.svg';
import DownArrow from '../assets/down-arrow-triangle.svg';
import Button from './Button';
import {
    useDrag
} from 'react-dnd';

interface IPlayerProps {
    player: IPlayer;
    nextCallback: () => void;
    prevCallback: () => void;
}

const Player: React.FC<IPlayerProps> = ({
    player,
    nextCallback,
    prevCallback,
}) => {
    // eslint-disable-next-line
    const [collected, drag, dragPreview] = useDrag({
        item: { type: 'Player', colour: player.colour }
    })

    const playerClassName: string = classnames('player', {
        'player--black': player.colour === Colour.Black,
        'player--blue': player.colour === Colour.Blue,
        'player--brown': player.colour === Colour.Brown,
        'player--cyan': player.colour === Colour.Cyan,
        'player--green': player.colour === Colour.Green,
        'player--lime': player.colour === Colour.Lime,
        'player--orange': player.colour === Colour.Orange,
        'player--pink': player.colour === Colour.Pink,
        'player--purple': player.colour === Colour.Purple,
        'player--red': player.colour === Colour.Red,
        'player--white': player.colour === Colour.White,
        'player--yellow': player.colour === Colour.Yellow,
        'player--banana': player.colour === Colour.Banana,
        'player--coral': player.colour === Colour.Coral,
        'player--grey': player.colour === Colour.Grey,
        'player--maroon': player.colour === Colour.Maroon,
        'player--rose': player.colour === Colour.Rose,
        'player--tan': player.colour === Colour.Tan,
    });

    return (
        <div ref={drag} className={playerClassName}>
            {getCharacterImage(player.colour)}

            <span className='player__name'>{player.name}</span>

            <span className='player__nav'>
        <Button
            className='player__nav-button player__nav-previous'
            onClick={prevCallback}
            content={
                <img
                    className='player__nav-button-icon'
                    src={UpArrow}
                    alt={i18next.t('player.up')}
                />
            }
            aria-label={i18next.t('player.up')}
        />

        <Button
            className='player__nav-button player__nav-next'
            onClick={nextCallback}
            content={
                <img
                    className='player__nav-button-icon'
                    src={DownArrow}
                    alt={i18next.t('player.down')}
                />
            }
            aria-label={i18next.t('player.down')}
        />
      </span>
        </div>
    );
}

function getCharacterImage(colour: Colour): JSX.Element | null {
    switch (colour) {
        case Colour.Banana:
            return (
                <img
                    className='player__icon'
                    alt='Black Among Us Character'
                    src={Banana}
                />
            );
        case Colour.Coral:
            return (
                <img
                    className='player__icon'
                    alt='Black Among Us Character'
                    src={Coral}
                />
            );
        case Colour.Grey:
            return (
                <img
                    className='player__icon'
                    alt='Black Among Us Character'
                    src={Grey}
                />
            );
        case Colour.Maroon:
            return (
                <img
                    className='player__icon'
                    alt='Black Among Us Character'
                    src={Maroon}
                />
            );
        case Colour.Rose:
            return (
                <img
                    className='player__icon'
                    alt='Black Among Us Character'
                    src={Rose}
                />
            );
        case Colour.Tan:
            return (
                <img
                    className='player__icon'
                    alt='Black Among Us Character'
                    src={Tan}
                />
            );
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