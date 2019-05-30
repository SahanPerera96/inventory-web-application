import { Injectable } from '@angular/core';
import { Draftlog } from '../model/openstock/draftlog';
import {HttpClient} from '@angular/common/http'
import { reject } from 'q';
import { Draftdetails } from '../model/openstock/draftdetails';



@Injectable({
  providedIn: 'root'
})
export class StockService {

  formData : Draftlog;
  draftFormData : Draftdetails;
  list : Draftlog[];
  detailList : Draftdetails[];

  constructor(private http:HttpClient) { }
  readonly Default_URL ='http://localhost:8080';
  postDraftStockLog(formData : Draftlog){
    return this.http.post(this.Default_URL +'/stock/openstock/draft/entry',formData)
  }

  refreshLogList(){
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
  // draft log details crud operators
  postDraftStockDetails(id : number,draftFormData : Draftdetails ){
    return this.http.post(this.Default_URL +'/stock/openstock/draft/details/'+id ,draftFormData)
  }

  putDraftStockDetails(draftFormData : Draftdetails){
    return this.http.put(this.Default_URL +'/stock/openstock/draft/details/'+ draftFormData.id ,draftFormData)
  }

  deleteDraftStockDetails(id : number){
    return this.http.delete(this.Default_URL +'/stock/openstock/draft/details/'+ id )
  }

  refreshDetailsList(id : number){
    return this.http.get(this.Default_URL+'/stock/openstock/draft/detailsAll/'+id).toPromise().then(
      res => {
        console.log(res);
        
       this.detailList = res as Draftdetails[];
    },
    err => {
        reject(err);
    }
    )
  }
}
