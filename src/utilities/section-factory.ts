import Dead from "../components/Dead";
import Impostor from "../components/Impostor";
import Innocent from "../components/Innocent";
import Players from "../components/Players";
import Suspicious from "../components/Suspicious";
import Position from "../enums/Position";
import ISectionInformation from "../interfaces/section-information";

const IMPOSTOR_SORT_ORDER: number = 1;
const SUSPICIOUS_SORT_ORDER: number = 2;
const INNOCENT_SORT_ORDER: number = 3;
const DEAD_SORT_ORDER: number = 4;
const UNKNOWN_SORT_ORDER: number = 5;

export function getOrderedSections(): ReadonlyArray<ISectionInformation> {
    return Object.values(Position)
        .map(key => getSection(key))
        .sort(x => x.sortOrder);
}

export function getPreviousPosition(currentPosition: Position): Position {
    const sections = getOrderedSections();
    const currentIndex = sections.findIndex(x => x.position === currentPosition);
    const next = sections[currentIndex - 1];

    return next !== undefined ? next.position : currentPosition;
}

export function getNextPosition(currentPosition: Position): Position {
    const sections = getOrderedSections();
    const currentIndex = sections.findIndex(x => x.position === currentPosition);
    const next = sections[currentIndex + 1];

    return next !== undefined ? next.position : currentPosition;
}

function getSection(position: Position): ISectionInformation {
    switch (position) {
        case Position.Impostor:
            return {
                position: position,
                component: Impostor,
                sortOrder: IMPOSTOR_SORT_ORDER
            }

        case Position.Suspicious:
            return {
                position: position,
                component: Suspicious,
                sortOrder: SUSPICIOUS_SORT_ORDER
            }

        case Position.Innocent:
            return {
                position: position,
                component: Innocent,
                sortOrder: INNOCENT_SORT_ORDER
            }

        case Position.Dead:
            return {
                position: position,
                component: Dead,
                sortOrder: DEAD_SORT_ORDER
            }

        case Position.Unknown:
            return {
                position: position,
                component: Players,
                sortOrder: UNKNOWN_SORT_ORDER
            }

        default:
            throw new Error('Position type not recognised.')
    }
}