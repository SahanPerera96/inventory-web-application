import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { reject } from 'q';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  logDetailsModel = {userid: '1', reason: '', id:1};
  test = "hello";
  constructor(private service: StockService, private toastr:ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.resetForm();
    this.service.draftFormData = {

      id: null,
      itemId: null,
      uomId: null,
      brandId: null,
      quantity: null

    }
  } 

  onSubmit(form: NgForm) {

    if(form.value.id == null){
 
      let payload = {

        "uomId": this.service.draftFormData.uomId,
        "brandId": this.service.draftFormData.brandId,
        "itemId": this.service.draftFormData.itemId,
        "quantity": this.service.draftFormData.quantity
    
      }
      console.log("this is the payload");
      console.log(payload);
      this.insertDraftDetails(this.logDetailsModel.id,payload,form);
    }else{
 
      let payload = {

        "uomId": this.service.draftFormData.uomId,
        "brandId": this.service.draftFormData.brandId,
        "itemId": this.service.draftFormData.itemId,
        "quantity": this.service.draftFormData.quantity,
        "id": this.service.draftFormData.id
      }
      console.log("this is the payload");
      console.log(payload);
      this.updateDraftDetails(this.logDetailsModel.id,payload,form);
    }
    
  }

  insertDraftDetails(id : number,payload,form: NgForm){
    let response;
    this.service.postDraftStockDetails(id,payload).subscribe(res =>{
      this.resetForm(form);
      response = res;
      console.log(response);
      this.toastr.success(response.message,response.response);
      this.service.refreshDetailsList(id);
    },
    err => {
      reject(err)
      console.log(err);
      this.toastr.error(err.error.message,err.error.response);
      // console.log(err.error.response);
    });
  }

  updateDraftDetails(id : number, payload,form: NgForm){
    let response;
    this.service.putDraftStockDetails(payload).subscribe(res =>{
      this.resetForm(form);
      response = res;
      // console.log(response);
      this.toastr.success(response.message,response.response);
      this.service.refreshDetailsList(id);
    },
    err => {
      reject(err)
      this.toastr.error("Failed to update database.","Failed");
      console.log(err);
      // console.log(err.error.response);
    });
  }
}
