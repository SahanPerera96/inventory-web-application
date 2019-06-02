import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { reject } from 'q';

@Component({
  selector: 'app-openstock',
  templateUrl: './openstock.component.html',
  styleUrls: ['./openstock.component.css']
})
export class OpenstockComponent implements OnInit {

  datelist = 0;
  masterStockDetails = this.service.masterListDetails; 
  logListApproved = this.service.approvalList;
  masterStocklogDetails = { userId: null, reason: '', id: null, date: null , draftDetails:this.service.masterList };
  masterStock = this.service.masterList;
 
  constructor(private service: StockService) { }

  ngOnInit() {
    this.getAllOpenStock();
    
  }

  getAllOpenStock(){
    let response;
    this.service.getMasterStock().subscribe(res =>{
      
      response = res;
        this.service.masterList = response;
        this.masterStock = response;
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

  refreshpage(){
    
  }
}
