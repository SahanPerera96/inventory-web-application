import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockService } from 'src/app/service/stock.service';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/service/report.service';
import { reject } from 'q';

@Component({
  selector: 'app-stockmovement',
  templateUrl: './stockmovement.component.html',
  styleUrls: ['./stockmovement.component.css']
})
export class StockmovementComponent implements OnInit {

  constructor(private service: ReportService, private toastr: ToastrService) { }
   parameterValues ={ brandId: null,datevalue: null, uomId:null, itemId: null,};

   reportResults ={ openStockDate: null,openStockQuantity: null, response:null, 
    revivedCount: null,averageIssueQuantity: null,issueCount: null, stockRemaining:null, totalIssueQuantity: null,
    totalRevivedQuantity: null,revivedLog: null, issueLog:null, averageRevivedQuantity: null};

  ngOnInit() {
    this.resetFormData();
  }

  onSubmitParameters(form : NgForm){

  }

  resetFormData(form?: NgForm) { 
    if (form != null)
      form.resetForm();
    this.parameterValues = {

      brandId: null,
      datevalue: null,
      uomId:null,
      itemId: null,
     }
  }

  getReport(form : NgForm){
    let response;
    this.service.getStockMovementReport(form.value.itemId,form.value.brandId,form.value.uomId).subscribe(res =>{
      
      response = res;
        this.service.reportValues = response;
        this.reportResults.openStockDate = response.openStockDate;
        this.reportResults.averageIssueQuantity = response.averageIssueQuantity;
        this.reportResults.averageRevivedQuantity = response.averageRevivedQuantity;
        this.reportResults.issueCount = response.issueCount;
        this.reportResults.issueLog = response.issueLog;
        this.reportResults.openStockQuantity = response.openStockQuantity;
        this.reportResults.revivedCount = response.revivedCount;
        this.reportResults.revivedLog = response.revivedLog;
        this.reportResults.stockRemaining = response.stockRemaining;
        this.reportResults.totalIssueQuantity = response.totalIssueQuantity;
        this.reportResults.totalRevivedQuantity = response.totalRevivedQuantity;
        form.resetForm();
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
