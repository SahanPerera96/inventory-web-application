import { Draftdetails } from './draftdetails';

export class Draftlog {
    id: number;
    date: Date;
    userId: number;
    reason: string;
    draftDetails: Array<Draftdetails>;
}
