import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stockmomentparameters } from '../model/reports/stockmomentparameters.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  parameterValues : Stockmomentparameters;

  readonly Default_URL ='http://localhost:8080';

  constructor(private http:HttpClient) { }


}
