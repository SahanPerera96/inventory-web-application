import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  hidelogDetails = environment.hidelogDetails
  hidelog = environment.hidelog
  constructor() { }

  ngOnInit() {
  }

}
