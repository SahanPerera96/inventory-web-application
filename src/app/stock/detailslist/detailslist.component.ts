import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { ToastrService } from 'ngx-toastr';
import { Draftlog } from 'src/app/model/openstock/draftlog';
import { reject } from 'q';
import { Draftdetails } from 'src/app/model/openstock/draftdetails';

@Component({
  selector: 'app-detailslist',
  templateUrl: './detailslist.component.html',
  styleUrls: ['./detailslist.component.css']
})
export class DetailslistComponent implements OnInit {
  logDetailsModel = {userid: '1', reason: '', id:1};
  
  constructor(private service: StockService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshDetailsList(this.logDetailsModel.id);
  }

  populateDetails(stockDetails : Draftdetails){
    console.log(stockDetails);
    
    this.service.draftFormData = Object.assign({},stockDetails);
  }

  onDelete(id : number){
    if(confirm("Are you sure you want to delete this record? ")){

      let response;
    this.service.deleteDraftStockDetails(id).subscribe(res =>{
      
      response = res;
      console.log(response);
      this.toastr.success(response.message,response.response);
      this.service.refreshDetailsList(this.logDetailsModel.id)
    },
    err => {
      reject(err)
      this.toastr.error(err.error.message,err.error.response);
      console.log(err);
      // console.log(err.error.response);
    });
    }
    
  }

}
