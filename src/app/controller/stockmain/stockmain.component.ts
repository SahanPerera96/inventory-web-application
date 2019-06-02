import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockmain',
  templateUrl: './stockmain.component.html',
  styleUrls: ['./stockmain.component.css']
})
export class StockmainComponent implements OnInit {
  hideOpenStockDraft = false;
  hideAproveDraft = true;
  hideOpenStock = true;
  constructor(public router : Router) { }

  ngOnInit() {
  }

  goBack(){
    this.hideOpenStockDraft = true;
    this.hideAproveDraft = true;
    this.hideOpenStock = true;
    this.router.navigate([''])
  }
  selectDraft(){
    this.hideOpenStockDraft = false;
    this.hideAproveDraft = true;
    this.hideOpenStock = true;
  }

  aproveDraft(){
    this.hideOpenStockDraft = true;
    this.hideAproveDraft = false;
    this.hideOpenStock = true;
  }

  viewOpenStock(){
    this.hideOpenStockDraft = true;
    this.hideAproveDraft = true;
    this.hideOpenStock = false;
  }
}
