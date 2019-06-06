import { Injectable } from '@angular/core';
import { Draftlog } from '../model/openstock/draftlog';
import {HttpClient, HttpHeaders} from '@angular/common/http'
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

approvaFormData : Draftlog;
approvaDraftFormData : Draftdetails;
  approvalList : Draftlog[];
  approvalDetailList : Draftdetails[];

  masterList : Draftlog[];
  masterListDetails : Draftdetails[];

  constructor(private http:HttpClient) { }
  readonly Default_URL ='http://localhost:9090';
  postDraftStockLog(formData : Draftlog){
    return this.http.post(this.Default_URL +'/stock/openstock/draft/entry',formData)
  }

  refreshLogList(){
   /* return this.http.get(this.Default_URL+'/stock/openstock/draft',{
      headers: new HttpHeaders().set('Authorization', 'bearer c8560acc-77cc-4b14-825f-6cc36789d730')
  }).toPromise().then(
      res => {
       this.list = res as Draftlog[];s
    },
    err => {
        reject(err);
    }
    )*/
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'bearer 015ba1bc-a1ae-46a6-a800-66ce7dc59d60'
      })
    };

    return new Promise((resolve , reject) => {
      this.http.get(this.Default_URL+'/stock/openstock/draft',httpOptions
      // {
        //  headers: new HttpHeaders().set('Authorization', 'bearer 4dca4c42-fc2d-4c11-9bbc-411f20ebeb22')
     // }
      ).subscribe(res => {
              resolve(res);
              this.list = res as Draftlog[];
          },
          err => {
              reject(err);
          });
      });



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
  // open stock approval
  getAllDraftlogs(){
    return this.http.get(this.Default_URL +'/stock/openstock/draft');
    // return new Promise((resolve , reject) => {
    //   this.http.get(this.Default_URL+'/stock/openstock/draft',

    //   ).subscribe(res => {
    //           resolve(res);
    //           console.log("getAllDraftlogs");
    //           this.approvalList = null;
    //           this.approvalList = res as Draftlog[];
    //       },
    //       err => {
    //           reject(err);
    //       });
    //   });

  }
  getDraftlogEntry(id : number){
    return this.http.get(this.Default_URL +'/stock/openstock/draft/entry/'+ id );
  }

  getDraftlogDetails(id : number){
    return this.http.get(this.Default_URL +'/stock/openstock/draft/detailsAll/'+ id );
  }

  setDraftApproval(id : number){
    return this.http.post(this.Default_URL +'/stock/openstock/master', id);
  }
  getMasterStock(){
    return this.http.get(this.Default_URL +'/stock/openstock/master');
  }
}
