import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { reject } from 'q';
import { Draftlog } from 'src/app/model/openstock/draftlog';
import { Draftdetails } from 'src/app/model/openstock/draftdetails';


@Component({
  selector: 'app-draft',
  templateUrl: './draft.component.html',
  styleUrls: ['./draft.component.css']
})
export class DraftComponent implements OnInit {
  hidelog = false;
  hidelogDetails = true;

  logDetailsModel = { userId: 1, reason: '', id: null, date: null };
  test = "hello";
  constructor(private service: StockService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
    this.resetFormDetails();
    this.service.refreshLogList();
  }
  // refreshpage(){

  //   this.resetForm();
  //   this.resetFormDetails();
  //   this.service.refreshLogList();
    
  // }

  resetForm(form?: NgForm) { // reset form if id is not their
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

  onSubmit(form: NgForm) { // on submit button click

    if (form.value.id == null) {
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
      this.insertRecord(payload, form);
    } else {

      let payload = {
        "userId": this.service.formData.userId,
        "reason": this.service.formData.reason,
        "draftDetails": this.service.formData.draftDetails,
        "id": this.service.formData.id
      }
      console.log("this is the payload");
      console.log(payload);
      this.updateRecord(payload, form);
    }

  }

  insertRecord(payload, form: NgForm) {   // insert new log entry
    let response;
    this.service.postDraftStockLog(payload).subscribe(res => {
      this.resetForm(form);
      response = res;
      // console.log(response);
      this.toastr.success(response.message, response.response);
      this.service.refreshLogList();
      this.service.getAllDraftlogs().subscribe(res => {
        response = res;
        this.service.approvalList = response;
      },
        err => {
          reject(err)
          console.log(err);
          // console.log(err.error.response);
        });
    },
      err => {
        reject(err)
        this.toastr.error(err.error.message, err.error.response);
        console.log(err);
        // console.log(err.error.response);
      });
  }

  updateRecord(payload, form: NgForm) {  // update new log entry
    let response;
    this.service.putDraftStockLog(payload).subscribe(res => {
      this.resetForm(form);
      response = res;
      // console.log(response);
      this.toastr.success(response.message, response.response);
      this.service.refreshLogList();
      this.service.getAllDraftlogs();
    },
      err => {
        reject(err)
        this.toastr.error("Failed to update database.", "Failed");
        console.log(err);
        // console.log(err.error.response);
      });
  }

  populateForm(stock: Draftlog) {  // load table details into form with id
    this.service.formData = Object.assign({}, stock);
  }

  onDelete(id: number) { // delete record from table 
    if (confirm("Are you sure you want to delete this record? ")) {

      let response;
      this.service.deleteDraftStockLog(id).subscribe(res => {

        response = res;
        console.log(response);
        this.toastr.success(response.message, response.response);
        this.service.refreshLogList();
        this.service.getAllDraftlogs();
      },
        err => {
          reject(err)
          this.toastr.error(err.error.message, err.error.response);
          console.log(err);
          // console.log(err.error.response);
        });
    }

  }

  viewDetails(stock: Draftlog) { // on click details on log details
    this.hidelog = true;
    this.hidelogDetails = false;
    this.service.refreshDetailsList(stock.id);
    console.log(stock.id);
    this.logDetailsModel.id = stock.id;
    this.logDetailsModel.date = stock.date;
    this.logDetailsModel.reason = stock.reason;
    this.logDetailsModel.userId = stock.userId;
    console.log(this.logDetailsModel.id);

  }

  // log details methods from this point

  backToLog() { // back from draft details to draft log
    this.hidelog = false;
    this.hidelogDetails = true;
  }

  resetFormDetails(formtwo?: NgForm) { // reset draft details form
    if (formtwo != null)
      formtwo.resetForm();
    this.service.draftFormData = {

      id: null,
      itemId: null,
      uomId: null,
      brandId: null,
      quantity: null

    }
  }

  onSubmitDetails(formtwo: NgForm) {  // on click draft details submit

    if (formtwo.value.id == null) {

      let payload = {

        "uomId": this.service.draftFormData.uomId,
        "brandId": this.service.draftFormData.brandId,
        "itemId": this.service.draftFormData.itemId,
        "quantity": this.service.draftFormData.quantity

      }
      console.log("this is the payload");
      console.log(payload);
      this.insertDraftDetails(this.logDetailsModel.id, payload, formtwo);
    } else {

      let payload = {

        "uomId": this.service.draftFormData.uomId,
        "brandId": this.service.draftFormData.brandId,
        "itemId": this.service.draftFormData.itemId,
        "quantity": this.service.draftFormData.quantity,
        "id": this.service.draftFormData.id
      }
      console.log("this is the payload");
      console.log(payload);
      this.updateDraftDetails(this.logDetailsModel.id, payload, formtwo);
    }

  }

  insertDraftDetails(id: number, payload, formtwo: NgForm) { // insert draft details
    let response;
    this.service.postDraftStockDetails(id, payload).subscribe(res => {
      this.resetFormDetails(formtwo);
      response = res;
      console.log(response);
      this.toastr.success(response.message, response.response);
      this.service.refreshDetailsList(id);
    },
      err => {
        reject(err)
        console.log(err);
        this.toastr.error(err.error.message, err.error.response);
        // console.log(err.error.response);
      });
  }

  updateDraftDetails(id: number, payload, formtwo: NgForm) {  // update draft details 
    let response;
    this.service.putDraftStockDetails(payload).subscribe(res => {
      this.resetFormDetails(formtwo);
      response = res;
      // console.log(response);
      this.toastr.success(response.message, response.response);
      this.service.refreshDetailsList(id);
    },
      err => {
        reject(err)
        this.toastr.error("Failed to update database.", "Failed");
        console.log(err);
        // console.log(err.error.response);
      });
  }

  populateDetails(stockDetails: Draftdetails) {
    console.log(stockDetails);

    this.service.draftFormData = Object.assign({}, stockDetails);
  }

  onDeleteDetails(id: number) {
    if (confirm("Are you sure you want to delete this record? ")) {

      let response;
      this.service.deleteDraftStockDetails(id).subscribe(res => {

        response = res;
        console.log(response);
        this.toastr.success(response.message, response.response);
        this.service.refreshDetailsList(this.logDetailsModel.id)
      },
        err => {
          reject(err)
          this.toastr.error(err.error.message, err.error.response);
          console.log(err);
          // console.log(err.error.response);
        });
    }

  }
}
