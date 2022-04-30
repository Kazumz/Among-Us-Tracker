import { hotjar } from 'react-hotjar';

export default function setupHotjar(): void {
    const hjid = 2949072;
    const hjsv = 6;

    hotjar.initialize(hjid, hjsv);
}