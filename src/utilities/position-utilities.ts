import Dead from "../components/Dead";
import Impostor from "../components/Impostor";
import Innocent from "../components/Innocent";
import Players from "../components/Players";
import Suspicious from "../components/Suspicious";
import Position from "../enums/Position";

const IMPOSTOR_SORT_ORDER: number = 1;
const SUSPICIOUS_SORT_ORDER: number = 2;
const INNOCENT_SORT_ORDER: number = 3;
const DEAD_SORT_ORDER: number = 4;
const UNKNOWN_SORT_ORDER: number = 5;

export function getAllComponents(): ReadonlyArray<React.FunctionComponent> {
    return Object.values(Position).sort(key => getPositionSortOrder(key) ?? -1).map(key => getComponent(key))
}

export function getPreviousPosition(currentPosition: Position): Position {
    const currentSortOrder = getPositionSortOrder(currentPosition);
    const next = currentSortOrder !== undefined ? getSortOrderPosition(currentSortOrder - 1) : currentPosition;

    return next !== undefined ? next : currentPosition;
}

export function getNextPosition(currentPosition: Position): Position {
    const currentSortOrder = getPositionSortOrder(currentPosition);
    const next = currentSortOrder !== undefined ? getSortOrderPosition(currentSortOrder + 1) : currentPosition;

    return next !== undefined ? next : currentPosition;
}

function getSortOrderPosition(sortOrder: number): Position | undefined {
    switch (sortOrder) {
        case IMPOSTOR_SORT_ORDER:
            return Position.Impostor;

        case SUSPICIOUS_SORT_ORDER:
            return Position.Suspicious;

        case INNOCENT_SORT_ORDER:
            return Position.Innocent;

        case DEAD_SORT_ORDER:
            return Position.Dead;

        case UNKNOWN_SORT_ORDER:
            return Position.Unknown;

        default:
            return undefined;
    }
}

function getPositionSortOrder(position: Position): number | undefined {
    switch (position) {
        case Position.Impostor:
            return IMPOSTOR_SORT_ORDER;

        case Position.Suspicious:
            return SUSPICIOUS_SORT_ORDER;

        case Position.Innocent:
            return INNOCENT_SORT_ORDER;

        case Position.Dead:
            return DEAD_SORT_ORDER;

        case Position.Unknown:
            return UNKNOWN_SORT_ORDER;

        default:
            return undefined;
    }
}

function getComponent(position: Position): React.FunctionComponent {
    switch (position) {
        case Position.Impostor:
            return Impostor;

        case Position.Suspicious:
            return Suspicious;

        case Position.Innocent:
            return Innocent;

        case Position.Dead:
            return Dead;

        case Position.Unknown:
            return Players;

        default:
            throw new Error('Position type not recognised, unable to determine component.')
    }
}