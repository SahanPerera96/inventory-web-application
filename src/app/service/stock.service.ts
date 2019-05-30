import { Injectable } from '@angular/core';
import { Draftlog } from '../model/openstock/draftlog';
import {HttpClient} from '@angular/common/http'
import { reject } from 'q';



@Injectable({
  providedIn: 'root'
})
export class StockService {

  formData : Draftlog;
  list : Draftlog[];

  constructor(private http:HttpClient) { }
  readonly Default_URL ='http://localhost:8080';
  postDraftStockLog(formData : Draftlog){
    return this.http.post(this.Default_URL +'/stock/openstock/draft/entry',formData)
  }

  refreshList(){
    return this.http.get(this.Default_URL+'/stock/openstock/draft').toPromise().then(
      res => {
       this.list = res as Draftlog[];
    },
    err => {
        reject(err);
    }
    )
  }

  putDraftStockLog(formData : Draftlog){
    return this.http.put(this.Default_URL +'/stock/openstock/draft/entry/'+ formData.id ,formData)
  }

  deleteDraftStockLog(id : number){
    return this.http.delete(this.Default_URL +'/stock/openstock/draft/entry/'+ id )
  }
  getDraftLog(): Promise<any> {
    return new Promise((resolve , reject) => {
        this.http.get(this.Default_URL + '/stock/openstock/draft').subscribe(res => {
                resolve(res);
            },
            err => {
                reject(err);
            });
    });
}
}
