import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/service/stock.service';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  constructor(private service: StockService) { }

  ngOnInit() {
    this.resetForm();

  }

  resetForm(from?: NgForm) {
    if (from != null)
      from.resetForm();
    this.service.formData = {

      id: null,
      date: null,
      userId: null,
      reason: '',
      draftDetails: null

    }
  } 

  onSubmit(form: NgForm) {
    
    this.insertRecord(form);
  }

  insertRecord(form: NgForm){

    this.service.postDraftStockLog(form.value).subscribe(res =>{
      // this.resetForm(form)
      console.log(res);
      
    })
  }
}
