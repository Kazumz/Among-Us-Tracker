import React from 'react';
import { useDispatch } from 'react-redux';

import IPlayer from '../interfaces/player';
import { actionCreators } from '../store/bundles/player-bundle';
import {
    getNextPosition,
    getPreviousPosition
} from '../utilities/position-utilities';
import Player from './Player';
import { useDrop } from 'react-dnd';
import Position from '../enums/Position';
import Colour from '../enums/Colour';
import classnames from 'classnames';

interface ISectionProps {
    title: string;
    position: Position;
    players?: ReadonlyArray<IPlayer>;
    icon?: string;
    iconAlt?: string;
}

const Section: React.FC<ISectionProps> = ({
    title,
    players,
    icon,
    iconAlt,
    position,
}) => {
    const dispatch = useDispatch();

    const [{isOver}, drop] = useDrop({
        accept: "Player",
        drop: (item, monitor) => {
            const dragItem = item as  {type: string, colour: Colour};
            dispatch(actionCreators.setPlayerPosition(dragItem.colour, position))
        },
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    });

    const playerElements = React.useMemo(
        () => players !== undefined ? players.map(x =>
            <li className='section__player-list-item'>
                <Player
                    player={x}
                    prevCallback={() => dispatch(actionCreators.setPlayerPosition(x.colour, getPreviousPosition(x.position)))}
                    nextCallback={() => dispatch(actionCreators.setPlayerPosition(x.colour, getNextPosition(x.position)))}
                />
            </li>
        ) : [],
        [
            players,
            dispatch
        ]
    );
    
    const sectionClassName: string = classnames('section', {
        'section--drop-zone': isOver
    });

    return (
        <div ref={drop} className={sectionClassName}>
            <h2>{title}</h2>

            <span className='section__row'>
        {icon !== undefined &&
            <img className='section__row-icon' src={icon} alt={iconAlt}/>
        }

                <ul className='section__player-list'>
          {playerElements}
        </ul>
      </span>
        </div>
    );
}

export default Section;