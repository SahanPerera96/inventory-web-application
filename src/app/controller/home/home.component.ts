import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { StockComponent } from 'src/app/stock/stock.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(public router : Router) { }

  ngOnInit() {
  }

  OpenStockClick(){
    this.router.navigate(['stockmain'])
  }

  ReportClick(){
    this.router.navigate(['reportmain'])
  }
}
