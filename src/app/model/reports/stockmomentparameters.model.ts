import { Transactionentries } from './transactionentries.model';

export class Stockmomentparameters {
    response: string;
    openStockDate:Date;
    openStockQuantity:number;
    issueLog:Array<Transactionentries>;
    revivedLog:Array<Transactionentries>;
    totalIssueQuantity:number;
    totalRevivedQuantity:number;
    issueCount:number;
    revivedCount:number;
    stockRemaining:number;
    averageIssueQuantity:number;
    averageRevivedQuantity:number;

    
}
