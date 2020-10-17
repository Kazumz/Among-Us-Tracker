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

export function getSection(position: Position): ISectionInformation {
    console.log(`@@@ ${position}`)

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