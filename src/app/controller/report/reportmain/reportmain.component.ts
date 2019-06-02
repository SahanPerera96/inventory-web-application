import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportmain',
  templateUrl: './reportmain.component.html',
  styleUrls: ['./reportmain.component.css']
})
export class ReportmainComponent implements OnInit {

  hideStockMovementReport = false;
  hideStockAsAtReport = true;
  hideOnDemandReport = true;
  hideCriticalStockReport = true;
  hideConsumerInvoiceReport = true;

  constructor(public router : Router) { }

  ngOnInit() {
  }

  goBack(){
   this.hideStockMovementReport = false;
   this.hideStockAsAtReport = true;
   this.hideOnDemandReport = true;
   this.hideCriticalStockReport = true;
   this.hideConsumerInvoiceReport = true;
    this.router.navigate([''])
  }

  stockMovementClick(){
    this.hideStockMovementReport = false;
    this.hideStockAsAtReport = true;
    this.hideOnDemandReport = true;
    this.hideCriticalStockReport = true;
    this.hideConsumerInvoiceReport = true;
  
  }

  stockAsAtClick(){
    this.hideStockMovementReport = true;
    this.hideStockAsAtReport = false;
    this.hideOnDemandReport = true;
    this.hideCriticalStockReport = true;
    this.hideConsumerInvoiceReport = true;
  }

  onDemandClick(){
    this.hideStockMovementReport = true;
    this.hideStockAsAtReport = true;
    this.hideOnDemandReport = false;
    this.hideCriticalStockReport = true;
    this.hideConsumerInvoiceReport = true;
  }

  criticalStockClick(){
    this.hideStockMovementReport = true;
    this.hideStockAsAtReport = true;
    this.hideOnDemandReport = true;
    this.hideCriticalStockReport = false;
    this.hideConsumerInvoiceReport = true;
  }

  consumerInvoiceClick(){
    this.hideStockMovementReport = true;
    this.hideStockAsAtReport = true;
    this.hideOnDemandReport = true;
    this.hideCriticalStockReport = true;
    this.hideConsumerInvoiceReport = false;
  }
  
}
