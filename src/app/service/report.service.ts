import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stockmomentparameters } from '../model/reports/stockmomentparameters.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  reportValues : Stockmomentparameters;

  readonly Default_URL ='http://localhost:8080';

  constructor(private http:HttpClient) { }

  getStockMovementReport(itemId : number,brandId : number,uomId : number){
    return this.http.get(this.Default_URL +'/report/stockmoment/'+itemId+'/'+brandId+'/'+uomId);
  }

}
