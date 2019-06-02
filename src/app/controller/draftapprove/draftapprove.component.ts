import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { Draftlog } from 'src/app/model/openstock/draftlog';
import { reject } from 'q';
import { Draftdetails } from 'src/app/model/openstock/draftdetails';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-draftapprove',
  templateUrl: './draftapprove.component.html',
  styleUrls: ['./draftapprove.component.css']
})
export class DraftapproveComponent implements OnInit {

  datelist = 0;
  logListApproved = this.service.approvalList;
  logDetailsModel = { userId: null, reason: '', id: null, date: null };

  constructor(private service: StockService, private toastr: ToastrService) {

  }
  clearPage(){
    this.logDetailsModel.id = null;
    this.logDetailsModel.userId = null;
    this.logDetailsModel.date = null;
    this.logDetailsModel.reason = '';
  }

  ngOnInit() {
    let response ;
    this.service.getAllDraftlogs().subscribe(res =>{
      
      response = res;
        this.service.approvalList = response;
        this.logListApproved = response;
    },
    err => {
      reject(err)
      console.log(err);
      // console.log(err.error.response);
    });
    // this.service.approvalList = this.service.list;
    console.log(this.datelist);

  }

  refreshpage(){ // to refresh page to get new values
    let response
    this.service.getAllDraftlogs().subscribe(res =>{
      
      response = res;
        this.service.approvalList = response;
        this.logListApproved = response;
        this.service.list = response;
        
    },
    err => {
      reject(err)
      console.log(err);
      // console.log(err.error.response);
    });
    this.service.approvalList = this.service.list;
    console.log(this.datelist);
  }

  onSelectLog(id: number) {  // when item selecter is picked
    console.log(id);

    if (id == null || id == 0) {
      this.clearPage();
      this.service.approvalDetailList = null;
      this.service.approvalList= null;
      this.logListApproved = null;
    } else {
      this.service.getDraftlogEntry(id).toPromise().then(
        res => {
          console.log(res);

          this.service.approvaFormData = res as Draftlog;
          this.logDetailsModel.id = this.service.approvaFormData.id;
          this.logDetailsModel.date = this.service.approvaFormData.date;
          this.logDetailsModel.reason = this.service.approvaFormData.reason;
          this.logDetailsModel.userId = this.service.approvaFormData.userId;

          this.getNewLogDetails(id);
        },
        err => {
          reject(err);
        }
      )

    }

  }

  getNewLogDetails(id: number){
    this.service.getDraftlogDetails(id).toPromise().then(
      res => {
        this.service.approvalDetailList = res as Draftdetails[];
        
      },
      err => {
        reject(err);
      }
    )
  }
  onApproval(){
    let response;
    this.service.setDraftApproval(this.logDetailsModel.id).subscribe(res => {
      
      response = res;
      // console.log(response);
      this.toastr.success(response.message, response.response);
      this.refreshpage();
      // this.clearPage()
      this.onSelectLog(null);
      this.service.list = null;
      this.onApprovalUpdateMaster();
      

    },
      err => {
        reject(err)
        this.toastr.error("Failed to update database.", "Failed");
        console.log(err);
        // console.log(err.error.response);
      });
  }

  onApprovalUpdateMaster(){
    let response;
    this.service.getMasterStock().subscribe(res =>{
      
      response = res;
        this.service.masterList = response;
       
        console.log(response);
        // this.service.masterListDetails = response.stockDetails;
        // this.masterStockDetails = response.stockDetails;
    },
    err => {
      reject(err)
      console.log(err);
      // console.log(err.error.response);
    });
  }
}
