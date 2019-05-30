import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { reject } from 'q';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
//  logmodel = {userid: '1', reason: '', draftDetails: []};

  constructor(private service: StockService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();

  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.formData = {

      id: null,
      date: null,
      userId: null,
      reason: '',
      draftDetails: null

    }
  } 

  onSubmit(form: NgForm) {

    if(form.value.id == null){
      this.service.formData.userId = 1;
      this.service.formData.draftDetails = [];
      // this.service.formData.reason = '';
      // let payload = {
      //   "userId": this.logmodel.userid,
      //   "reason": this.logmodel.reason,
      //   "draftDetails": this.logmodel.draftDetails
      // }
  
      let payload = {
        "userId": this.service.formData.userId,
        "reason": this.service.formData.reason,
        "draftDetails": this.service.formData.draftDetails
      }
      console.log("this is the payload");
      console.log(payload);
      this.insertRecord(payload,form);
    }else{
 
      let payload = {
        "userId": this.service.formData.userId,
        "reason": this.service.formData.reason,
        "draftDetails": this.service.formData.draftDetails,
        "id":this.service.formData.id
      }
      console.log("this is the payload");
      console.log(payload);
      this.updateRecord(payload,form);
    }
    
  }

  insertRecord(payload,form: NgForm){
    let response;
    this.service.postDraftStockLog(payload).subscribe(res =>{
      this.resetForm(form);
      response = res;
      // console.log(response);
      this.toastr.success(response.message,response.response);
      this.service.refreshLogList();
    },
    err => {
      reject(err)
      this.toastr.error(err.error.message,err.error.response);
      console.log(err);
      // console.log(err.error.response);
    });
  }

  updateRecord(payload,form: NgForm){
    let response;
    this.service.putDraftStockLog(payload).subscribe(res =>{
      this.resetForm(form);
      response = res;
      // console.log(response);
      this.toastr.success(response.message,response.response);
      this.service.refreshLogList();
    },
    err => {
      reject(err)
      this.toastr.error("Failed to update database.","Failed");
      console.log(err);
      // console.log(err.error.response);
    });
  }

  
  
}
