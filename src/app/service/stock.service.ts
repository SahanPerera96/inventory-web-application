import { Injectable } from '@angular/core';
import { Draftlog } from '../model/openstock/draftlog';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StockService {

  formData : Draftlog
  constructor(private http:HttpClient) { }
  URL ='';
  postDraftStockLog(formData : Draftlog){
    console.log("sdfsdjgiofgisdhi");
    
    console.log(formData)
    return this.http.post('http://localhost:8080/stock/openstock/draft/entry',formData)
  }
}
