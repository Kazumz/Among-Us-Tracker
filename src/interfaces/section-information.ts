import Position from '../enums/Position';

interface ISectionInformation {
    readonly position: Position;
    readonly sortOrder: number;
    readonly component: React.FunctionComponent;
}

export default ISectionInformation;