import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { ToastrService } from 'ngx-toastr';
import { Draftlog } from 'src/app/model/openstock/draftlog';
import { reject } from 'q';

@Component({
  selector: 'app-loglist',
  templateUrl: './loglist.component.html',
  styleUrls: ['./loglist.component.css']
})
export class LoglistComponent implements OnInit {

  constructor(private service: StockService, private toastr:ToastrService) { }

  ngOnInit() {
    this.service.refreshLogList();
  }

  populateForm(stock : Draftlog){
    this.service.formData = Object.assign({},stock);
  }

  onDelete(id : number){
    if(confirm("Are you sure you want to delete this record? ")){

      let response;
    this.service.deleteDraftStockLog(id).subscribe(res =>{
      
      response = res;
      console.log(response);
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
    
  }
  viewDetails(){
    
  }

  
}
