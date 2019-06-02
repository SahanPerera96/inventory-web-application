import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StockService } from 'src/app/service/stock.service';
import { ToastrService } from 'ngx-toastr';
import { ReportService } from 'src/app/service/report.service';

@Component({
  selector: 'app-stockmovement',
  templateUrl: './stockmovement.component.html',
  styleUrls: ['./stockmovement.component.css']
})
export class StockmovementComponent implements OnInit {

  constructor(private service: ReportService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetFormData();
  }

  onSubmitParameters(form : NgForm){

  }

  resetFormData(form?: NgForm) { 
    if (form != null)
      form.resetForm();
    this.service.parameterValues = {

      brandId: null,
      datevalue: null,
      uomId:null,
      itemId: null,
     }
  }
}
